import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends Component {
    render() {
        return(
            <div className="container">
                <h1 className="text-center my-5">Hello, Welcome to the Color Factory</h1>
                <div className="btn btn-dark btn-block"><Link to="colors/new">Add a new Color</Link></div>
                <section>
                    <h3>Please select a color:</h3>
                    <ul>
                        {this.props.reduxStateAsProps.colors.map((color) => {
                            return(
                                <li key={color.id}>
                                    <Link to={"/colors/"+color.value}>
                                        {color.value}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{ return {reduxStateAsProp: state}}

const mapDispatchToProps = {}

export default connect(mapStateToProps , mapDispatchToProps)(Home);