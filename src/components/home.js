import React from "react";
import Footer from "../layouts/footer";
import { Helmet } from "react-helmet";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { FeatureCard } from "./componets_aux/feature-card";
import { featuresData } from "./componets_aux/features-data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  const images = [
    "https://p4.wallpaperbetter.com/wallpaper/901/505/133/cats-dogs-pets-wallpaper-preview.jpg",
    "https://img.freepik.com/fotos-premium/grupo-mascotas-perro-gato-pajaro-conejo_191971-22463.jpg?w=2000",
    "https://s03.s3c.es/imag/_v0/770x420/6/0/5/mascotas-archivo.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000, // Cambiar imagen cada 8 segundos
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1, // Cambiar imagen cada 8 segundos
    cssEase: "linear",
    fade: true,
  };
  return (
    <>
      <Helmet>
        <title>PetCity</title>
        <meta
          name="description"
          content="Bienvenidos a Petcity 'Todo para tu mascota' Somos una plataforma en línea que se dedica 
          apasionadamente a la exhibición y promoción de información sobre tiendas de mascotas y una amplia 
          gama de servicios relacionados con animales."
        />
        <meta
          name="keywords"
          content="home, productos, servicios, sitio web, petcity"
        />
      </Helmet>
      <Slider
        {...settings}
        className="relative flex h-10000 content-center items-center justify-center"
      >
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="absolute top-0 h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute top-0 h-full w-full bg-black/75" />
            <div className="max-w-8xl container relative mx-auto">
              <div className="flex flex-wrap items-center">
                <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-6 font-black pt-40 pb-32"
                  >
                    Bienvenidos a Petcity "Todo para tu mascota"
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                PetCity
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Somos una plataforma en línea que se dedica apasionadamente a la
                exhibición y promoción de información sobre tiendas de mascotas
                y una amplia gama de servicios relacionados con animales.
                Nuestro objetivo principal es facilitar la conexión entre los
                amantes de las mascotas y las diversas opciones disponibles en
                el mercado para satisfacer las necesidades de sus adorables
                compañeros peludos.
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="PetCity Logo"
                    src={process.env.PUBLIC_URL + "/logo.png"}
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Objetivo
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    PetCity busca ser una plataforma en línea que reúna a
                    personas que comparten el amor por las mascotas, brindando
                    un espacio donde puedan conectarse, interactuar y compartir
                    información relacionada con el cuidado y bienestar animal
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
