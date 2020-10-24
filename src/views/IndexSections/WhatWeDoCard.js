import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class WhatWeDoCard extends React.Component {
    state = {
      iconTabs: 1,
      plainTabs: 1
    };
    toggleNavs = (e, state, index) => {
      e.preventDefault();
      this.setState({
        [state]: index
      });
    };
    render() {
      return (
        <>
          <Row className="justify-content-center">
            <Col className="mt-5 mt-lg-0" lg="12">
              {/* Menu */}
              <div className="mb-3">
                <large className="text-uppercase font-weight-bold">
                  What We Do
                </large>
              </div>
              <div className="nav-wrapper">
                <Nav
                  className="nav-fill flex-column flex-md-row"
                  id="tabs-icons-text"
                  pills
                  role="tablist"
                >
                  <NavItem>
                    <NavLink
                      aria-selected={this.state.plainTabs === 1}
                      className={classnames("mb-sm-3 mb-md-0", {
                        active: this.state.plainTabs === 1
                      })}
                      onClick={e => this.toggleNavs(e, "plainTabs", 1)}
                      href="#pablo"
                      role="tab"
                    >
                      Weekly Meetings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      aria-selected={this.state.plainTabs === 2}
                      className={classnames("mb-sm-3 mb-md-0", {
                        active: this.state.plainTabs === 2
                      })}
                      onClick={e => this.toggleNavs(e, "plainTabs", 2)}
                      href="#pablo"
                      role="tab"
                    >
                      ULaunch
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      aria-selected={this.state.plainTabs === 3}
                      className={classnames("mb-sm-3 mb-md-0", {
                        active: this.state.plainTabs === 3
                      })}
                      onClick={e => this.toggleNavs(e, "plainTabs", 3)}
                      href="#pablo"
                      role="tab"
                    >
                      Boston Trip
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      aria-selected={this.state.plainTabs === 4}
                      className={classnames("mb-sm-3 mb-md-0", {
                        active: this.state.plainTabs === 4
                      })}
                      onClick={e => this.toggleNavs(e, "plainTabs", 4)}
                      href="#pablo"
                      role="tab"
                    >
                      Five College Entrepreneurship Club Mixer
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      aria-selected={this.state.plainTabs === 5}
                      className={classnames("mb-sm-3 mb-md-0", {
                        active: this.state.plainTabs === 5
                      })}
                      onClick={e => this.toggleNavs(e, "plainTabs", 5)}
                      href="#pablo"
                      role="tab"
                    >
                      UMass Network of Entrepreneurs (UNE)
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
              <Card className="shadow">
                <CardBody>
                  <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                    <TabPane tabId="plainTabs1">
                      <p className="description">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin. Nesciunt tofu stumptown aliqua, retro synth master
                        cleanse. Mustache cliche tempor, williamsburg carles vegan
                        helvetica. Reprehenderit butcher retro keffiyeh
                        dreamcatcher synth.
                      </p>
                      <p className="description">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin. Nesciunt tofu stumptown aliqua, retro synth master
                        cleanse.
                      </p>
                    </TabPane>
                    <TabPane tabId="plainTabs2">
                      <p className="description">
                        Cosby sweater eu banh mi, qui irure terry richardson ex
                        squid. Aliquip placeat salvia cillum iphone. Seitan
                        aliquip quis cardigan american apparel, butcher voluptate
                        nisi qui.
                      </p>
                    </TabPane>
                    <TabPane tabId="plainTabs3">
                      <p className="description">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin. Nesciunt tofu stumptown aliqua, retro synth master
                        cleanse. Mustache cliche tempor, williamsburg carles vegan
                        helvetica. Reprehenderit butcher retro keffiyeh
                        dreamcatcher synth.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </>
      );
    }
  }
  
  export default WhatWeDoCard;