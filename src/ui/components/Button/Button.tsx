import React, { memo } from "react";
import { Button as DisizButton } from "../../theme";

export type ButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    label?: string;
    className?: string;
    variant?: "primary" | "secondary" | "tertiary" | "quatertiary";
};

export const Button = memo((props: ButtonProps) => {
    const { children, onClick, disabled, label, className, variant } = props;

    return (
        <DisizButton
            children={label || children}
            onClick={onClick}
            disabled={disabled}
            className={className}
            variant={variant}
        />
    );
});

export default Button;
