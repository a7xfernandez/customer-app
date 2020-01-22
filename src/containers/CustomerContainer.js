import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import {getCustomerByDni} from './../selectors/customers';
import { Route, withRouter } from 'react-router-dom';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';
import {fetchCustomers} from './../actions/fetchCustomers';

class CustomerContainer extends Component {
    
    componentDidMount() {
        if(!this.props.customer){
            this.props.fetchCustomers();
        }
    }
    
    
    handleSubmit = values =>{
        console.log(JSON.stringify(values));
    }
    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody =()=>(
        <Route path="/customers/:dni/edit" children={
            ( { match } )=>{
                if(this.props.customer){
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                        return <CustomerControl {...this.props.customer} 
                        onSubmit={this.handleSubmit}
                        onBack ={this.handleOnBack}/> 

                }
                return null;
            }
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
    fetchCustomers: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) =>({
    customer: getCustomerByDni(state, props)
});

export default withRouter(connect(mapStateToProps,{
    fetchCustomers
})(CustomerContainer));

