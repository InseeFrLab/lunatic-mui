import React, { memo } from "react";
import { Text } from "../../theme";

export type SubsequenceProps = {
    label: string;
    id?: string;
    className?: string;
};

export const Subsequence = memo((props: SubsequenceProps) => {
    console.log(props);
    const { label, id, className } = props;
    const componentProps: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLSpanElement>,
        HTMLSpanElement
    > = {
        "id": `subsequence-${id}`,
    };

    return (
        <Text componentProps={componentProps} className={className} typo="heading s" children={label} />
    );
});

export default Subsequence;
