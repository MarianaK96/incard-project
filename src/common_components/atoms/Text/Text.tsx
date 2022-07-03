import React from "react";
import { HtmlAttributes } from "csstype";

export type TextStyle = "heading" | "body";

export type TextTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "p"
  | "span"
  | "div"
  | "li"
  | "a";

const selectTextStyle = (textStyle: TextStyle, bold?: boolean) => {
  switch (textStyle) {
    case "heading":
      return `font-sans ${bold ? "font-bold" : "font-medium"} text-4xl`;
    case "body":
      return `font-sans ${bold ? "font-bold" : "font-light"}`;

    default:
      return "";
  }
};

const Text: React.FC<
  Partial<{
    textStyle: TextStyle;
    as: TextTag;
    bold?: boolean;
    href?: string;
  }> &
    React.HTMLAttributes<HtmlAttributes>
> = ({
  children,
  className,
  style,
  as = "p",
  textStyle = "body",
  bold,
  href,
  ...props
}) => {
  const resolvedClassName = [selectTextStyle(textStyle, bold), className].join(
    " "
  );

  return React.createElement(
    as as string,
    {
      ...props,
      className: resolvedClassName,
      style: style,
      ...(as == "a" ? { href } : {}),
    },
    children
  );
};

export default Text;
