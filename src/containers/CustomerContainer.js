import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';

class CustomerContainer extends Component {
    render() {
        return (
            <div>
                <AppFrame header= {`Cliente`}
                    body={<p>Datos del Cliente </p>}>
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {

};

export default connect(null,null)(CustomerContainer);