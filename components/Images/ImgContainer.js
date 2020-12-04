import styled from "styled-components";

const ImgContainer = styled.div`
  padding: 20px 5px;
  position: relative;

  img {
    ${({ bordered = false }) => (bordered ? "background-color: #4e342e;" : "")}
    max-width: 100%;
    width: auto;
    height: auto;
    display: block;
    margin: auto;
    padding: 5px;
  }
`;

export default ImgContainer;
