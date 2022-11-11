import styled from "styled-components";

export const StyledChannels = styled.div`
    padding: 20px;
    padding-top: 30px;
    overflow: hidden;
    border-bottom: 1px solid ${({ theme }) => theme.borderBase};

    section {
        padding: 12px 0px;

        div {
            padding-top: 12.5px;
            width: calc(100vw - 16px * 4);
            display: grid;
            grid-gap: 16px;
            grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
            grid-auto-flow: column;
            grid-auto-columns: minmax(130px, 1fr);
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            text-align: center;

            ::-webkit-scrollbar {
                background-color: #e9e9e9;
                height: 8px;
                border-radius: 5px;
            }

            ::-webkit-scrollbar-thumb {
                background-color: #666666;
                border-radius: 6px;
            }

            a {
                scroll-snap-align: start;
                margin-top: 16px;

                img {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                }

                span {
                    display: block;
                    color: ${({ theme }) => theme.textColorBase || "#222222"};
                }
            }
        }
    }
`