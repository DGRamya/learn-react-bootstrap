import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render(){
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to codeLife</h2>
                    <p> This is an example of building a website with React, React-Router and React-boostrap</p>
                    <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                </Link> 
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/coder.png" circle className="profile-pic" />
                        <h3> Coder-1 </h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                        </Col>
                 <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/coder.png" circle className="profile-pic"/>
                    <h3>Coder-2</h3>
                    <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                </Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/coder.png" circle className="profile-pic"/>
                <h3>Coder 3</h3>
                <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
            </Col>
         </Row>


            </Grid>
        )
    }
}