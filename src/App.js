import React, {Component} from 'react';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Image from "react-bootstrap/lib/Image";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
import background from './images/home_background.png'

class App extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Image src={background} responsive={true}/>
                </Row>
            </Grid>
        );
    }
}

export default App;
