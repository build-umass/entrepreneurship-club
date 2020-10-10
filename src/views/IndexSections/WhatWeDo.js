import React from "react";

import { Container, Row, Col } from "reactstrap";

class WhatWeDo extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <h2 className="mb-5">
              <span className="text-primary font-weight-light">What We Do</span>
            </h2>
            <p className="text-tertiary font-weight-light">
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
