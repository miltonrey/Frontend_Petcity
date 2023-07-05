import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../layouts/footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LOCAL_URL } from "../App.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Informacion = () => {
  const { id } = useParams();
  const [petshopInfo, setPetshopInfo] = useState(null);
  const renderRatingStars = (score) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starIcon = i <= score ? faStar : ["far", "star"];
      stars.push(<FontAwesomeIcon icon={starIcon} key={i} />);
    }
    return stars;
  };
  useEffect(() => {
    fetch(`${LOCAL_URL}headquarter/${id}`)
      .then((response) => response.json())
      .then((data) => setPetshopInfo(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <h1>Información</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Card.Img
              variant="top"
              src={`data:image/png;base64, ${petshopInfo?.headquarter?.picture?.picture}`}
              style={{ width: "700px", height: "400px" }}
            />
            <Card.Body>
              <h5>{petshopInfo?.headquarter?.name}</h5>
              <p>{petshopInfo?.headquarter?.description}</p>
              <hr />
              <Card.Text>{petshopInfo?.headquarter?.schedule}</Card.Text>
              <div id="map">
                <iframe
                  src={petshopInfo?.headquarter?.location?.url}
                  title="Mapa"
                  style={{ width: "100%", height: "250px", border: "0" }}
                ></iframe>
              </div>
            </Card.Body>
          </div>
        </Card>
      </div>

      <h1>Productos de {petshopInfo?.headquarter?.name}</h1>
      <div className="row">
        {petshopInfo?.products?.map((product) => (
          <div className="col-md-3" key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`data:image/png;base64, ${product?.picture?.picture}`}
                style={{ width: "250px", height: "250px" }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <div id="comments" className="row">
        <div className="col-12">
          <h1>Comentarios</h1>
          {petshopInfo?.qualifications?.map((qualification) => (
            <Card key={qualification.idQualification} style={{ width: "100%" }}>
              <Card.Body>
                <div className="comment-info">
                  <div className="comment-info-item">
                    <strong>Nombre:</strong> {qualification.customer.name}
                  </div>
                  <div className="comment-info-item">
                    <strong>Calificación:</strong>{" "}
                    {renderRatingStars(qualification.score)}
                  </div>
                </div>
                <div className="comment-text">
                  <strong>Comentario:</strong> {qualification.comment}
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Informacion;
