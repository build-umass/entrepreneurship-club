import React from "react";
import { /*Button,*/ Container, Row, Col } from "reactstrap";

// * core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import MainFooter from "components/Footers/MainFooter.js";

// * index page sections
import Hero from "../IndexSections/Hero.js";

class ProgramsEvents extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MainNavbar />
        <main ref="main">
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="8">
                    {/* <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/brand/entrepreneurship-logo-shadow.png")}
                      style={{ width: "500px" }}
                    /> */}
                    <p className="text-white" style={{fontSize: 60}}>
                      Programs and Events
                    </p>
                    
                  </Col>
                </Row>
              </div>
            </Container>
            
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
        <Container className="section">
            <h2 className="mb-3 text-center">
              <span className="text-primary display-3">Weekly Meeting</span>
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
                <p className="lead text-muted text-center" style={{fontSize: 20}}>
                Our meetings are our way of forming a strong community of tenacious learners and doers. 
                We bring in prestigious speakers, troubleshoot ideas, network, learn, and have a lot of fun. 
                Join us every Tuesday at 6pm!
                </p>
              </Col>
            </Row>
          </Container>
          <Container className="section">
            <h2 className="mb-3 text-center">
              <span className="text-primary display-3">ULaunch</span>
            </h2>
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              <Col lg>
                <p className="lead text-muted text-center" style={{fontSize: 20}}>
                Starting a business is hard… or is it? 
                Join us and see how easy it can be to launch a venture in just one weekend. ULaunch is a 2-day event in which individuals form teams, build a business, and compete for $1,000 in funding. 
                We host speakers, workshops, mentors, and some ambitious individuals just like you. 
                No experience necessary! Come with an idea or just the will to compete because there is no better time to start.  
                <p style={{fontSize: 20}}>Testimonial: “I was able to get more done this weekend than I have in the last three months” - E.J. Yizhou</p>
                </p>
              </Col>
              <Col lg>
                <img
                  alt="..."
                  className="squared-circle img-center img-fluid shadow shadow-lg--hover"
                  src={require("assets/img/theme/promo-1.png")}
                  style={{ width: "300px", borderRadius: "2.5em" }}
                />
              </Col>
            </Row>
          </Container>
          <Container className="section">
            <h2 className="mb-3 text-center">
              <span className="text-primary display-3">Boston Trip</span>
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
                <p className="lead text-muted text-center" style={{fontSize: 20}}>
                Take a trip into Boston to check out the inner workings of incredible startups and established companies alike. 
                We travel as a group to explore incredible businesses and discover how they accomplished their goals. 
                This is a tremendous way to expand your network, make some close friends, and see where your hard work can take you.
                </p>
              </Col>
            </Row>
          </Container>
          <Container className="section">
            <h2 className="mb-3 text-center">
              <span className="text-primary display-3">Five College Entrepreneurship Club Mixer</span>
            </h2>
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              <Col lg>
                <p className="lead text-muted text-center" style={{fontSize: 20}}>
                UMass is a part of the Five College Consortium (Amherst College, Hampshire College, Mount Holyoke College, Smith College, and UMass Amherst) which all have terrific entrepreneurship clubs. 
                Once per semester, we get together for networking, pitching practice, competitions, and more. 
                </p>
              </Col>
              <Col lg>
                <img
                  alt="..."
                  className="squared-circle img-center img-fluid shadow shadow-lg--hover"
                  src={require("assets/img/theme/promo-1.png")}
                  style={{ width: "300px", borderRadius: "2.5em" }}
                />
              </Col>
            </Row>
          </Container>
          <Container className="section">
            <h2 className="mb-3 text-center">
              <span className="text-primary display-3">UMass Network Entrepreneurs (UNE)</span>
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
                <p className="lead text-muted text-center" style={{fontSize: 20}}>
                The UMass Network of Entrepreneurs is a support, accountability, and problem solving group designed for ventures who are ready to progress to the next level. 
                Using the collective intelligence of the ecosystem, this mastermind team has exclusive access to prestigious entrepreneurs who act as mentors and guides with the goal of advising the next wave of entrepreneurs. 
                </p>
              </Col>
            </Row>
          </Container>
          <Container className="section">
            <h2 className="mb-3 text-center">
              <span className="text-primary display-3">And More To Come...</span>
            </h2>
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              <Col lg>
                <p className="lead text-muted text-center" style={{fontSize: 20}}>
                We are always thinking of new ways to bring entrepreneurship onto campus.
                </p>
              </Col>
              <Col lg>
                <img
                  alt="..."
                  className="squared-circle img-center img-fluid shadow shadow-lg--hover"
                  src={require("assets/img/theme/promo-1.png")}
                  style={{ width: "300px", borderRadius: "2.5em" }}
                />
              </Col>
            </Row>
          </Container>

        </main>
        <MainFooter />
      </>
    );
  }
}

export default ProgramsEvents;