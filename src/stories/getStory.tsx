import type { Meta, Story } from "@storybook/react";
import type { ArgType } from "@storybook/addons";
import { useEffect } from "react";
import { symToStr } from "tsafe/symToStr";
import { useIsDarkModeEnabled, chromeFontSizesFactors } from "disiz";
import type { ChromeFontSize } from "disiz";
import { ThemeProvider, useStyles } from "../ui/theme";
import { id } from "tsafe/id";
import { GlobalStyles } from "tss-react/compat";
import { objectKeys } from "tsafe/objectKeys";

export function getStoryFactory<Props extends Record<string, any>>(params: {
    sectionName: string;
    wrappedComponent: Record<string, (props: Props) => ReturnType<React.FC>>;
    /** https://storybook.js.org/docs/react/essentials/controls */
    argTypes?: Partial<Record<keyof Props, ArgType>>;
    defaultWidth?: number;
}) {
    const { sectionName, wrappedComponent, argTypes = {}, defaultWidth } = params;

    const Component: any = Object.entries(wrappedComponent).map(([, component]) => component)[0];

    const Template: Story<
        Props & {
            darkMode: boolean;
            width: number;
            chromeFontSize: ChromeFontSize | string;
            targetWindowInnerWidth: number;
        }
    > = ({ darkMode, width, ...props }) => {
        const { setIsDarkModeEnabled } = useIsDarkModeEnabled();

        useEffect(() => {
            setIsDarkModeEnabled(darkMode);
        }, [darkMode]);

        const { theme } = useStyles();

        return (
            <ThemeProvider>
                <GlobalStyles
                    styles={{
                        "html": {
                            "fontSize": "100% !important",
                        },
                        "body": {
                            "padding": `0 !important`,
                            "backgroundColor": `${theme.colors.useCases.surfaces.primary} !important`,
                        },
                    }}
                />
                <div
                    style={{
                        "width": width || undefined,
                        "border": "1px dashed #e8e8e8",
                        "display": "inline-block",
                    }}
                >
                    <Component {...props} />
                </div>
            </ThemeProvider>
        );
    };

    function getStory(props: Props): typeof Template {
        const out = Template.bind({});

        out.args = {
            "darkMode": false,
            "width": defaultWidth ?? 0,
            "targetWindowInnerWidth": 0,
            "chromeFontSize": "Medium (Recommended)",
            ...props,
        };

        return out;
    }

    return {
        "meta": id<Meta>({
            "title": `${sectionName}/${symToStr(wrappedComponent)}`,
            "component": Component,
            "argTypes": {
                "width": {
                    "control": {
                        "type": "range",
                        "min": 0,
                        "max": 1920,
                        "step": 1,
                    },
                },
                "targetWindowInnerWidth": {
                    "control": {
                        "type": "range",
                        "min": 0,
                        "max": 2560,
                        "step": 10,
                    },
                },
                "chromeFontSize": {
                    "options": objectKeys(chromeFontSizesFactors),
                    "control": { "type": "select" },
                },
                ...argTypes,
            },
        }),
        getStory,
    };
}

export function logCallbacks<T extends string>(propertyNames: readonly T[]): Record<T, () => void> {
    const out: Record<T, () => void> = id<Record<string, never>>({});

    propertyNames.forEach(propertyName => (out[propertyName] = console.log.bind(console, propertyName)));

    return out;
}
