import "./App.css";
import MyNavbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Movies from "./components/Movies.jsx";
import MyFooter from "./components/Footer.jsx";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNavbar />
      <Header />
      <Container fluid>
        <Row>
          <Col>
            <Movies title="Batman" category="Batman" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Movies title="Marvel" category="Marvel" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Movies title="The walking dead" category="The Walking Dead" />
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
