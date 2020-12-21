import ImgContainer from "components/Images/ImgContainer";
import { Slider } from "./style";

function Slide({ image, imageAlt, index, count }) {
  const idx = index + 1;
  const previous = index === 0 ? count : idx - 1;
  const nextSlide = idx === count ? 1 : idx + 1;
  return (
    <li
      id={`carousel__slide${idx}`}
      className="carousel__slide"
      tabIndex={index}
    >
      <div className="carousel__snapper">
        <a href={`#carousel__slide${previous}`} className="carousel__prev">
          Go to previous slide
        </a>
        <a href={`#carousel__slide${nextSlide}`} className="carousel__next">
          Go to next slide
        </a>
      </div>
      <ImgContainer>
        <img src={image} alt={imageAlt} />
      </ImgContainer>
    </li>
  );
}

const NavItem = ({ index }) => {
  const nIndex = index + 1;
  return (
    <li class="carousel__navigation-item">
      <a href={`#carousel__slide${nIndex}`} class="carousel__navigation-button">
        {`Go to slide ${nIndex}`}
      </a>
    </li>
  );
};

function Carousel({ images = [] }) {
  return (
    <Slider>
      <div className="carousel">
        <ol className="carousel__viewport">
          {images.map((img, idx) => (
            <Slide
              key={`carousel__slide${idx}`}
              image={img.src}
              imageAlt={img.alt}
              index={idx}
              count={images.length}
            />
          ))}
        </ol>
        <aside class="carousel__navigation">
          <ol class="carousel__navigation-list">
            {images.map((r, idx) => (
              <NavItem index={idx} />
            ))}
          </ol>
        </aside>
      </div>
    </Slider>
  );
}

export default Carousel;
