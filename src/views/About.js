import React from "react";

//reactstrap components
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import MainFooter from "components/Footers/MainFooter.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
import OurTeam from "./IndexSections/OurTeam.js";

class About extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <MainNavbar />
          <Hero />
          {/* Mission Section */}
          <Container className="section">
            <h2 className="mb-3 text-center">
              <span className="text-primary display-3">Mission</span>
            </h2>
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              <Col lg>
                <img
                  alt="..."
                  className="squared-circle img-center img-fluid shadow shadow-lg--hover"
                  src={require("assets/img/theme/promo-1.png")}
                  style={{ width: "300px", borderRadius: "2.5em" }}
                />
              </Col>
              <Col lg>
                <p className="lead text-muted text-center">
                  The Entrepreneurship Club helps students step aside from safe
                  careers to pursue their innovative ideas and ingenious
                  inventions in crafting a more fulfilling life.
                </p>
              </Col>
            </Row>
          </Container>
          {/* Motto Section */}
          <section className="section bg-secondary">
            <Container>
              <h2 className="mb-3 text-center">
                <span className="text-primary display-3">Motto</span>
              </h2>
              <Row style={{ justifyContent: "center", alignItems: "center" }}>
                <Card
                  className="lead text-center"
                  style={{ borderRadius: "1.5em" }}
                >
                  <CardBody>
                    <CardTitle className="display-4 text-information ">
                      Own Your Life
                    </CardTitle>
                    <CardText className="text-muted">
                      "It's better to be a pirate than to join the navy." <br />
                      - Steve Jobs
                    </CardText>
                  </CardBody>
                </Card>
              </Row>
            </Container>
          </section>
          {/* Our Team Section */}
          <OurTeam />
          <MainFooter />
        </main>
      </>
    );
  }
}

export default About;
