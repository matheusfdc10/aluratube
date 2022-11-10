import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.backgroundLevel1};
    height: 100px;

    div {
        padding: 40px 0px;
        text-align: center;
        p a {
            font-weight: bold;
            color: #0078d7;
        }
    }
`