import React, { memo } from "react";
import { Text } from "../../theme";

export type SequenceProps = {
    label: string;
    id?: string;
    className?: string;
};

export const Sequence = memo((props: SequenceProps) => {
    console.log(props);
    const { label, id, className } = props;
    const componentProps: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLSpanElement>,
        HTMLSpanElement
    > = {
        "id": `sequence-${id}`,
    };

    return (
        <Text componentProps={componentProps} className={className} typo="heading m" children={label} />
    );
});

export default Sequence;
