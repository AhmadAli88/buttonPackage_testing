import React from "react";
import style from "./index.module.css";
import { cva } from "class-variance-authority";

const button = cva(style.base, {
  variants: {
    variant: {
      primary: style.primary,
      secondary: style.secondary,
      danger: style.danger,
    },
    size: {
      small: style.small,
      medium: style.medium,
      large: style.large,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "small",
  },
});

const ButtonComponent = ({ value, variant, size, className, href, type="button", ...props }) => {
  if (href) {
    return <a role="button" type={type} href={href} className={button({ variant, size, className })} {...props}>{value}</a>;
  }
  return (
    <button className={button({ variant, size, className })}  type={type} {...props}>{value}</button>
  );
};

export default ButtonComponent;
