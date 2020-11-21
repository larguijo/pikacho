import styled from "styled-components";

const ImgContainer = styled.div`
  padding: 20px 5px;

  img {
    max-width: 100%;
    width: auto;
    height: auto;
    display: block;
    margin: auto;
    padding: 10px;
  }
`;

function Carousel() {
  return (
    <ImgContainer>
      <img src="/img/Carousel3.jpg" alt="Cabin" />
    </ImgContainer>
  );
}

export default Carousel;
