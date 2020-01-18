import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import {getCustomerByDni} from './../selectors/customers';
import { Route } from 'react-router-dom';

class CustomerContainer extends Component {
    //<p>Datos del Cliente "{this.props.customer.name}" </p>
    renderBody =()=>(
        <Route path="/customers/:dni/edit" children={
            ({match})=>(match? <p>Es edición</p>:<p>No es edición</p>)
        }/>
    )
    render() {
        return (
            <div>
                <AppFrame header= {`Cliente ${this.props.dni}`}
                    body={this.renderBody()}>
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) =>({
    customer: getCustomerByDni(state, props)
});

export default connect(mapStateToProps,null)(CustomerContainer);

