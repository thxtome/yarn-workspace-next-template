import styled from "styled-components";
import { variant, color } from "styled-system";
import { TypographyVariants, ColorVariants } from "@shared/styles/theme";

export interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement | HTMLParagraphElement> {
    kind: TypographyVariants;
    color?: ColorVariants;
    as?: "p" | "span";
}

const TypographyRoot = styled.span<{ kind: TypographyVariants; color: ColorVariants }>`
    ${variant({ prop: "kind", scale: "typographys" })}
    ${color}
`;

const Typography = ({ as = "span", kind, color = "black", ...props }: TypographyProps) => {
    return <TypographyRoot as={as} kind={kind} color={"purple-500"} {...props} />;
};

export default Typography;
