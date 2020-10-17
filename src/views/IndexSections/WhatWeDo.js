import React from "react";
import WhatWeDoCard from "./WhatWeDoCard";
import {Container, Row, Col } from "reactstrap";
import './WhatWeDo.css';

class WhatWeDo extends React.Component{
    render(){
        return(
            <Container>
                <Row className="justify-content-center">
                    <Col lg="12">
                        <h2 className="mb-5">
                            <span>What We Do</span>
                            <hr className="divider"/>
                            <div>
                                <h3>Weekly Meetings</h3>
                                <p>Our meetings are a way of forming a strong community of tenacious learners and doers.</p>   
                            </div>
                            <div>
                                <h3>ULaunch</h3>
                                <p>Starting a business is hard… or is it? Join us and see how easy it can be to launch a venture in just one weekend.</p>
                            </div>
                            <div>
                                <h3>Boston Trip</h3>
                                <p>Take a trip into Boston to check out the inner workings of incredible startups and established companies alike.</p>
                            </div>
                            <div>
                                <h3>Five College Entrepreneurship Club Mixer</h3>
                                <p>UMass is a part of the Five College Consortium (Amherst College, Hampshire College, Mount Holyoke College, Smith College, and UMass Amherst) which all have terrific entrepreneurship clubs.</p> 
                            </div>
                            <div>
                                <h3>UMass Network of Entrepreneurs (UNE)</h3>
                                <p>The UMass Network of Entrepreneurs is a support, accountability, and problem solving group designed for ventures who are ready to progress to the next level.</p> 
                            </div>
                        </h2>
                        <hr className="divider"/>
                        <WhatWeDoCard />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default WhatWeDo;