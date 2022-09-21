import React, { memo } from "react";
import { TextField } from "ui/theme";
import { useConstCallback } from "powerhooks/useConstCallback";
import type { TextFieldProps } from "ui/theme";
import type { Param0 } from "tsafe";

export type InputProps = {
    id?: string;
    value?: string;
    disabled?: boolean;
    labelledBy?: string;
    onChange(value: string): void;
    required?: boolean;
    maxLength?: number;
    errors?: { errorMessage: string };
};

export const Input = memo((props: InputProps) => {
    const { id, disabled, onChange } = props;
    const onValueBeingTypedChange = useConstCallback(
        ({ value }: Param0<TextFieldProps["onValueBeingTypedChange"]>) => onChange(value),
    );

    return (
        <TextField
            id={id}
            disabled={disabled}
            label={"This is a label"}
            onValueBeingTypedChange={onValueBeingTypedChange}
        />
    );
});

export default Input;
