import React, { Component } from 'react';
import {  withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';
import logo from './../../src/logo.svg';

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
                            <img src={logo} className="App-logo" alt="logo" />
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