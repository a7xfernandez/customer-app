import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomersList = ({customers}) => {
    return (
        <div>
            <div className="customers-list">
                {
                    customers.map( c =>
                        <CustomerListItem
                            key={c.dni}
                            name={c.name}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath}>                            
                        </CustomerListItem>)}            
            </div>            
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,    
};

export default CustomersList;