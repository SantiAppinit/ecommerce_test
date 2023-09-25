import Carousel from 'react-bootstrap/Carousel';

const CarouseComponent = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1316591999/vector/vector-illustration-dynamic-last-minute-offers-label.jpg?s=612x612&w=0&k=20&c=hN2cGKJLqx4vEHuPkUAjyS73k9-iwsUj1i_AXzLJqD0="
          alt="First slide"
          height={300}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1316591999/vector/vector-illustration-dynamic-last-minute-offers-label.jpg?s=612x612&w=0&k=20&c=hN2cGKJLqx4vEHuPkUAjyS73k9-iwsUj1i_AXzLJqD0="
          alt="Second slide"
          height={300}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1316591999/vector/vector-illustration-dynamic-last-minute-offers-label.jpg?s=612x612&w=0&k=20&c=hN2cGKJLqx4vEHuPkUAjyS73k9-iwsUj1i_AXzLJqD0="
          alt="Third slide"
          height={300}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouseComponent;