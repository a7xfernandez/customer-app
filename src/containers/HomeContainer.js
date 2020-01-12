import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions'

class HomeContainer extends Component {
    handleOnClick =()=>{
        console.log("handleOnClick")
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
                                <button onClick={this.handleOnClick}  >Listado de clientes</button>                                
                            </CustomersActions>
                        </div>
                    }
                    ></AppFrame>
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

export default HomeContainer;