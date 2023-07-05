import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import SearchBar from "./search";

const Petshops = () => {
  const [petshops, setPetshops] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(LOCAL_URL + "headquarter/findAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPetshops(data);
        setSearchResults(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = petshops.filter((petshop) =>
      petshop.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h1>Petshops</h1>
      <SearchBar
        placeholder="Buscador de tiendas"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onSubmit={handleSearch}
      />
      <hr></hr>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "20px",
        }}
      >
        {searchResults.map((petshop) => (
          <Card key={petshop.id} className="mt-6">
            <CardHeader color="blue-gray" className="relative h-56">
              {petshop.picture && petshop.picture.picture && (
                <img
                  src={`data:image/png;base64, ${petshop.picture.picture}`}
                  alt={petshop.picture.description}
                  layout="fill"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
              <Link to={`/informacion/${petshop.id}`}>
                <Button>Ver</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Petshops;
