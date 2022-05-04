import styled from "styled-components";
import { variant, color } from "styled-system";
import { TypographyVariants, ColorVariants } from "@shared/styles/theme";
import Link from "next/link";

const Test = () => {
    return (
        <Link passHref href="/whowho">
            <a>whowho</a>
        </Link>
    );
};

export default Test;
