import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import heroImage from '../Assets/Images/hero-bg.jpg';

export default function Hero(){
    return(
        <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={heroImage} alt="Card image" />
        <Card.Body>
          <Card.Title>Welcome To Regna</Card.Title>
          <Card.Text>
            WE'RE CREATIVE AGENCY.
          </Card.Text>
          <Button variant="primary">Get Started</Button>
        </Card.Body>
      </Card>
    )
}