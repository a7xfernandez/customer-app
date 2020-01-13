import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomerList from './../components/CustomersList';
import CustomerActions from './../components/CustomersActions';

const customers = [
    {
        "dni": "27000000",
        "name": "Pedro Paramo",
        "age": 25
    },
    {
        "dni": "30000000",
        "name": "Juan Rulfo",
        "age": 25
    },
    {
        "dni": "37000000",
        "name": "Pablo Marmol",
        "age": 25
    }
];

class CustomersContainer extends Component {

    renderBody = customers => (
        <div>
            <CustomerList
                customers={customers} 
                urlPath={'customers/'}>                
            </CustomerList>
            <CustomerActions>
                <button onClick={this.handleAddNew}>Nuevo cliente</button>
            </CustomerActions>
        </div>
    )
    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}></AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default CustomersContainer;