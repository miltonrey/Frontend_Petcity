import React, { useEffect, useState } from "react";
import Footer from "../layouts/footer";
import { LOCAL_URL } from "../App.js";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Petshops = () => {
  const [petshops, setPetshops] = useState([]);

  useEffect(() => {
    fetch(LOCAL_URL + "headquarter/findAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setPetshops(data))
      .catch((error) => console.error(error));
  }, []);

  const getBlobUrl = (blob) => {
    return URL.createObjectURL(blob);
  };

  return (
    <div>
      <h1>Petshops</h1>
      {petshops.map((petshop) => (
        <Card key={petshop.id} className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            {petshop.picture && petshop.picture.picture && (
              <img
                src={getBlobUrl(petshop.picture.picture)}
                alt={petshop.picture.description}
                layout="fill"
              />
            )}
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {petshop.name}
            </Typography>
            <Typography>{petshop.description}</Typography>
            <hr></hr>
            <Typography>{petshop.schedule}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Ver</Button>
          </CardFooter>
        </Card>
      ))}
      <Footer />
    </div>
  );
};

export default Petshops;
