import styled from "styled-components";

export const StyledTimeline = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.borderBase};
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: auto;
      scroll-snap-type: x mandatory;

      ::-webkit-scrollbar{
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

        img {
          border-radius: 10px;
        }
        
        span {
          padding: 8px 0px;
          display: block;
          padding-right: 24px;
          font-size: 14px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;