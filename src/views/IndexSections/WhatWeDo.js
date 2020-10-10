import React from "react";

import { Container, Row, Col } from "reactstrap";

class WhatWeDo extends React.Component {
  render() {
    return (
      <Container className="section">
        <Row className="text-center">
          <Col lg="12">
            <h2 className="mb-3">
              <span className="text-primary display-3">What We Do</span>
            </h2>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WhatWeDo;
