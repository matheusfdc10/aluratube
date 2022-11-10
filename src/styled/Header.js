import styled from "styled-components";

export const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};
    border-bottom: 1px solid ${({ theme }) => theme.borderBase};

    img {
        background-color: ${({ theme }) => theme.backgroundBase};
        height: 230px;
        width: 100%;
        object-fit: cover;
        border-bottom: 1px solid ${({ theme }) => theme.borderBase};
    }

    section {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;

        img {
            background-color: ${({ theme }) => theme.backgroundBase};
            width: 80px;
            height: 80px;
            border-radius: 50%; 
        }
    }
`;