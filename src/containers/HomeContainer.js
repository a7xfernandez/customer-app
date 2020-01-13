import React, { Component } from 'react';
import {  withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions'

class HomeContainer extends Component {
    handleOnClick =()=>{
        console.log("handleOnClick");
        this.props.history.push('/customers');
    }
    render() {
        return (
            <div>
                <AppFrame
                    header='Home'
                    body={
                        <div>
                            Esta es la pantalla inicial
                            <CustomersActions>
                                <button onClick={this.handleOnClick} >Listado de clientes</button>                                
                            </CustomersActions>
                        </div>
                    }
                    />
            </div>
        );
    }
}


export default withRouter(HomeContainer);