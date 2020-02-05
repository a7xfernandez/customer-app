import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame'
import CustomerEdit from '../components/CustomerEdit';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class NewCustomerContainer extends Component {
    
    handleSubmit = () =>{

    }
    
    handleOnSubmitSuccess = () =>{
        this.props.history.goBack();
    }

    
    
    handleOnBack = () =>{

    }

    



    renderBody = () =>{
        return <CustomerEdit onSubmit = {this.handleSubmit}
                    onSubmitSucces={this.handleOnSubmitSuccess}
                    onBack = {this.handleOnBack}
                ></CustomerEdit>
    }

    render() {
        return (
            <div>
                <AppFrame
                    header = {'Creacion de nuevo cliente'}
                    body = {this.renderBody()}
                ></AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {

};

export default withRouter(connect(null,null)(NewCustomerContainer));