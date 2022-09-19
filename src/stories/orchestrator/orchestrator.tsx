import React from "react";
import { Button } from "../../ui/components/Button";
import * as lunatic from "@inseefr/lunatic";

export type Props = {
    goPrevious: () => void;
    goNext: () => void;
    isLast: boolean;
    isFirst: boolean;
};
const Pager = (props: Props) => {
    const { goPrevious, goNext, isLast, isFirst } = props;

    return (
        <div className="pagination">
            <Button onClick={goPrevious} disabled={isFirst}>
                Previous
            </Button>
            <Button onClick={goNext} disabled={isLast}>
                Next
            </Button>
        </div>
    );
};

const onLogChange = (e: React.ChangeEvent<HTMLInputElement>) => console.log("onChange", { ...e });

export type OrchestratorProps = {
    source: object;
    data: object;
    management?: boolean;
    activeControls?: boolean;
    features?: string[];
    initialPage?: string;
    getStoreInfo?: (params: { basename: string }) => void;
    missing?: boolean;
    shortcut?: boolean;
    activeGoNextForMissing?: boolean;
    suggesterFetcher?: () => void;
    autoSuggesterLoading?: boolean;
    suggesters?: object;
    preferences?: string[];
    savingType?: string;
    custom?: object;
    filterDescription?: boolean;
};

export const OrchestratorForStories = (props: OrchestratorProps) => {
    const {
        source,
        data,
        management = false,
        activeControls = false,
        features,
        initialPage = "1",
        getStoreInfo,
        missing = false,
        shortcut = false,
        activeGoNextForMissing = false,
        suggesterFetcher,
        autoSuggesterLoading,
        suggesters,
        preferences,
        custom,
        filterDescription = true,
    } = props;

    const {
        getComponents,
        goPreviousPage,
        goNextPage,
        isFirstPage,
        isLastPage,
        getErrors,
        getModalErrors,
        getCurrentErrors,
    } = lunatic.useLunatic(source, data, {
        initialPage,
        features,
        preferences,
        onChange: onLogChange,
        activeGoNextForMissing,
        autoSuggesterLoading,
        suggesters,
        suggesterFetcher,
        management,
        activeControls,
    });

    const components = getComponents();
    // const errors = getErrors();
    // const modalErrors = getModalErrors();
    const currentErrors = getCurrentErrors();

    // console.log("errors: ", errors);
    // console.log("modalErrors: ", modalErrors);
    // console.log("currentErrors: ", currentErrors);

    return (
        <div className="container">
            <div className="components">
                {components.map(function (component: any) {
                    const { id, componentType, response, storeName, ...other } = component;
                    const Component = lunatic[componentType];
                    const storeInfo = storeName && getStoreInfo ? getStoreInfo(storeName) : {};

                    return (
                        <div className="lunatic lunatic-component" key={`component-${id}`}>
                            <Component
                                id={id}
                                response={response}
                                {...other}
                                {...component}
                                {...storeInfo}
                                missing={missing}
                                missingStrategy={goNextPage}
                                shortcut={shortcut}
                                custom={custom}
                                filterDescription={filterDescription}
                                errors={currentErrors}
                            />
                        </div>
                    );
                })}
            </div>
            <Pager
                goPrevious={goPreviousPage}
                goNext={goNextPage}
                isLast={isLastPage}
                isFirst={isFirstPage}
            />
        </div>
    );
};
