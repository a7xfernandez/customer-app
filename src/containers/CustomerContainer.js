import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';

class CustomerContainer extends Component {
    render() {
        return (
            <div>
                <AppFrame header= {`Cliente ${this.props.dni}`}
                    body={<p>Datos del Cliente "{this.props.customer.name}" </p>}>
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
    customer: state.customers.find( c=>c.dni === props.dni)
});

export default connect(mapStateToProps,null)(CustomerContainer);