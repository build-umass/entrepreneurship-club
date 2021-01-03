import React from "react";

//reactstrap components
import { Row, Col, Container, Card, CardBody, CardTitle, CardText } from "reactstrap";
// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import MainFooter from "components/Footers/MainFooter.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
import OurTeam from "./IndexSections/OurTeam.js";

class Calendar extends React.Component {
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
          {/* Google Calendar using iFrame embed of a publicly available calendar*/}
          <Container className="section">
            <Row className="align-items-center justify-content-center">
              <Col className="text-center">
                <iframe
                  src="https://calendar.google.com/calendar/embed?height=720&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;title=Test%20Calendar%20for%20BUILD%20UMass&amp;mode=MONTH&amp;showCalendars=1&amp;showPrint=0&amp;showTitle=1&amp;showNav=1"
                  style={{ borderWidth: 0 }}
                  width="100%"
                  height="720"
                  frameborder="0"
                  scrolling="no"
                ></iframe>
              </Col>
            </Row>
          </Container>
          {/* Google Calendar using API with credentials
           */}
          <Container></Container>
          <MainFooter />
        </main>
      </>
    );
  }
}

export default Calendar;
