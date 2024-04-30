import "./EducationalVisits.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import BackgroundBar from "../../Assets/backgroundBar.png";

const EducationalVisits = () => {
  return (
    <div className="">
      <h1 class="grays"> EducationalVisits</h1>
      <Row xs={1} md={2} className="g-4 cards">
        <Card  style={{ width: "18rem" }} className="cardBody" >
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/469676/pexels-photo-469676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Card.Body className="cardBody">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>*educational content*</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body >
        </Card>
        <Card style={{ width: "18rem" }} className="cardBody">
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/469676/pexels-photo-469676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Card.Body className="cardBody">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>*educational content*</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="cardBody">
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/469676/pexels-photo-469676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Card.Body className="cardBody">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>*educational content*</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Row>
      <img src={BackgroundBar} className="BackgroundBar" id="BackgroundBar" />
    </div>
  );
};

export default EducationalVisits;
