/*!
=========================================================
* Argon Design System React - v1.1.0
=========================================================
* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import MainFooter from "components/Footers/MainFooter.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
import WhatWeDo from "./IndexSections/WhatWeDo.js";

class Landing extends React.Component {
  state = {};
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
          <Hero />
          <WhatWeDo />
          {/* <section className="section bg-secondary">
            <Container>
              <Row className="justify-content-center text-center mb-5">
                <Col lg="8">
                  <h2 className="display-3 text-primary">Our Team</h2>
                  <p className="lead text-muted">
                    Our team aims to inspire, educate, and assist our student
                    entrepreneurs by bringing the most value to our members. If
                    you are someone with the entrepreneurial spark, join us.
                  </p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="squared-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-0 text-primary">
                          Max Breslau
                        </span>
                        <small className="h6 text-muted">Co-President</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="squared-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-0 text-primary">
                          Alvin He
                        </span>
                        <small className="h6 text-muted">Co-President</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="squared-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-0 text-primary">
                          Charlie McLaughlin
                        </span>
                        <small className="h6 text-muted">
                          Director of Marketing
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="squared-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-0 text-primary">
                          Harsha Prakki
                        </span>
                        <small className="h6 text-muted">
                          Director of Events
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="squared-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-0 text-primary">
                          Patrick Scanlon
                        </span>
                        <small className="h6 text-muted">
                          Director of the UNE
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="squared-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-0 text-primary">
                          Vriti Gupta
                        </span>
                        <small className="h6 text-muted">
                          Director of Operations
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="squared-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-0 text-primary">
                          Erick Atanga
                        </span>
                        <small className="h6 text-muted">
                          Kickstart Ambassador
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="squared-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-0 text-primary">
                          Sai Rohan Bangari
                        </span>
                        <small className="h6 text-muted">
                          Kickstart Ambassador
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="squared-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-0 text-primary">
                          Peter Gao
                        </span>
                        <small className="h6 text-muted">
                          Kickstart Ambassador
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="squared-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-0 text-primary">
                          Garrett Maille
                        </span>
                        <small className="h6 text-muted">
                          Kickstart Ambassador
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="squared-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-0 text-primary">
                          Andrew Zhu
                        </span>
                        <small className="h6 text-muted">
                          Kickstart Ambassador
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="squared-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-0 text-primary">
                          Gregory Thomas
                        </span>
                        <small className="h6 text-muted">Advisor</small>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}
          <Container className="section">
        <Row className="text-center">
          <Col lg="12">
            <h2 className="mb-3">
              <span className="text-primary display-3">Get Involved</span>
            </h2>
                <div className="px-4">
                  <Row>
                    <Col>
                  <a href="https://umassentrepreneurship.slack.com/">
                  <img
                      alt="..."
                      className="squared-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/brand/Entrepreneurship-Icon-White-BG.png")}
                      style={{ width: "100px" }}
                    />
                    </a>
                    {/* </Col>
                    <Col> */}
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-0 text-primary">
                        <small className="h6 text-muted" style = {{fontSize: 20}}>Click to join our slack</small>
                        </span>
                      </h5>
                    </div>
                    </Col>
                    </Row>
                  </div>
                  
          </Col>
        </Row>
      </Container>

          {/*
            <section className="section section-lg">
              <Container>
                <Row className="row-grid align-items-center">
                  <Col className="order-md-2" md="6">
                    <img
                      alt="..."
                      className="img-fluid floating"
                      src={require("assets/img/theme/promo-1.png")}
                    />
                  </Col>
                  <Col className="order-md-1" md="6">
                    <div className="pr-md-5">
                      <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                        <i className="ni ni-settings-gear-65" />
                      </div>
                      <h3>Awesome features</h3>
                      <p>
                        The kit comes with three pre-built pages to help you get
                        started faster. You can change the text and images and
                        you're good to go.
                      </p>
                      <ul className="list-unstyled mt-5">
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="success"
                              >
                                <i className="ni ni-settings-gear-65" />
                              </Badge>
                            </div>
                            <div>
                              <h6 className="mb-0">
                                Carefully crafted components
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="success"
                              >
                                <i className="ni ni-html5" />
                              </Badge>
                            </div>
                            <div>
                              <h6 className="mb-0">Amazing page examples</h6>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="success"
                              >
                                <i className="ni ni-satisfied" />
                              </Badge>
                            </div>
                            <div>
                              <h6 className="mb-0">
                                Super friendly support team
                              </h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          */}
        </main>
        <MainFooter />
      </>
    );
  }
}

export default Landing;
