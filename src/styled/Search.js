import styled from "styled-components";

export const StyledSeach = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${({ theme }) => theme.borderBase};
    max-width: 350px;
    width: 100%;
    height: 35px;
    border-radius: 25px;
    overflow: hidden;
    margin: auto;

    input {
        width: 80%;
        padding: 4px 6px;
        border: none;
        outline: none;
        font-size: 15px;
        padding-left: 12.5px;
        color: ${({ theme }) => theme.textColorBase};
        background-color: ${({ theme }) => theme.backgroundBase};
    }

    button {
        flex: 1;
        cursor: pointer;
        border: none;
        background-color: ${({ theme }) => theme.backgroundLevel2};
        box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
        border-left: 1px solid ${({ theme }) => theme.borderBase};
        width: 40px;
        height: 40px;

        i {
            font-size: 17.5px !important;
            font-weight: bold !important;
            color: ${({ theme }) => theme.textColorBase};
        }
    
        @media (min-width: 600px) {
            width: 64px;
            height: 40px;
        }
    }
    
`