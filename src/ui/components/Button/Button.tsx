import React, { memo } from "react"
import { Button as DisizButton } from "ui/theme";

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

export const Button = memo((props: ButtonProps) => {
  const { children, onClick, disabled, label, className } = props

  return (
    <DisizButton children={label || children} onClick={onClick} disabled={disabled} className={className} />
  )
});

export default Button;