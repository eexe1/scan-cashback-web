import React, {Component} from 'react';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Image from "react-bootstrap/lib/Image";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
import Button from "react-bootstrap/lib/Button";
import background from './images/home-background.png'
import icon_camera from './images/home-icon-camera.png'
import icon_selfie from './images/home-icon-selfie.png'
import icon_note from './images/home-icon-note.png'

class App extends Component {

    static formUrl = 'https://docs.google.com/forms/d/198veljnTFB1s9Sgc583At2a48NPKA6etioHb-HmxQTg/edit?usp=sharing';

    constructor(props, context) {
        super(props, context);
        App.handleSubmit = App.handleSubmit.bind(this);

    }

    static handleSubmit() {
        window.open(App.formUrl, "_blank")
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Image src={background} responsive={true}/>
                </Row>
                <Row>
                    <Col xs={2} md={4} className="vcenter">
                        <Image src={icon_camera} responsive={true}/>
                    </Col>
                    <Col xs={10} md={8} className="vcenter">
                        <div className="home-sub">Upload a picture of your receipt</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} md={4} className="vcenter">
                        <Image src={icon_selfie} responsive={true}/>
                    </Col>
                    <Col xs={10} md={8} className="vcenter">
                        <div className="home-sub">Take a picture of yourself at the store</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} md={4} className="vcenter">
                        <Image src={icon_note} responsive={true}/>
                    </Col>
                    <Col xs={10} md={8} className="vcenter">
                        <div className="home-sub">Enter your details</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} md={4} xsOffset={4} className="vcenter">
                        <Button bsStyle="primary" bsSize="large"
                                onClick={App.handleSubmit}
                        >
                            Submit
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="vcenter">
                        <p>*A maximum 5$ amazon giftcard delivered to your email address. </p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
