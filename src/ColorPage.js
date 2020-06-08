import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Home from './Home';

class ColorPage extends Component {
    render() {
        return(
            <div style={{background: this.props.match.params.id}}>
                <h1>
                    Hello from {(this.props.match.params.id.toUpperCase())}
                </h1>
                <Link to="/colors">Go Back</Link>
                <Route path="/colors" component={<Home/>}/>
            </div>
        );
    }
}

export default ColorPage;