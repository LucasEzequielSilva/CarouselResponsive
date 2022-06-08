import React from "react";
import Carousel from "react-grid-carousel";
import '../styles/Carousel.css';
const Gallery = () => {
  const ObjetArray = [
    {
      nombre: "lucas",
      img: "../assets/profile.jpg",
    },
    {
      nombre: "jose",
      img: "../assets/eljose.jpeg",
    },
    {
      nombre: "igna",
      img: "../assets/igna.jpeg",
    },
    {
      nombre: "adri",
      img: "../assets/profe.jpeg",
    },
    {
        nombre: "lucas",
        img: "../assets/profile.jpg",
      },
      {
        nombre: "jose",
        img: "../assets/eljose.jpeg",
      },
      {
        nombre: "igna",
        img: "../assets/igna.jpeg",
      },
      {
        nombre: "adri",
        img: "../assets/profe.jpeg",
      }
  ];
  return (
    <Carousel id="carousel-parent"cols={4} rows={1} gap={5} loop>
      { ObjetArray.map(arr=> 
        <Carousel.Item className="carousel-child">
          <img width="100%" src={process.env.PUBLIC_URL + `${arr.img}`} alt='coso'/>
          <h4 background='color:#000'>{arr.nombre}</h4>
        </Carousel.Item>
      )
      }
    </Carousel>
  );
};
export default Gallery;
