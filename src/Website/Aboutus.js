import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../Assets/Images/about-img.jpg'

export default function Aboutus(){
    const html = 80;
    const responsive = 95;
    const photoshop =90;
    return(
        <section id="about" className='block about-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>About Us</h2>
                </div>
      <Row>
        <Col sm={6}>
            <Image src={img1} />
        </Col>
        <Col sm={6}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='progress-block'>
                <h4>HTML/CSS/JAVASCRIPT</h4>
                <ProgressBar now={html} label={`${html}%`} />;
            </div>
            <div className='progress-block'>
                <h4>RESPONSIVE</h4>
                <ProgressBar now={responsive} label={`${responsive}%`} />;
            </div>
            <div className='progress-block'>
                <h4>PHOTOSHOP</h4>
                <ProgressBar now={photoshop} label={`${photoshop}%`} />;
            </div>
        </Col>
      </Row>
    </Container>
        </section>
    )
}