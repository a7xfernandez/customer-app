import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomerListItem = ({name,editAction,delAction, urlPath, dni}) => {
    return (
        <div>
            <div className="customers-list-item">
                <div className="field">
                    <Link to={`${urlPath}${dni}`}>{name}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
                </div>
            </div>
        </div>

    );
};

CustomerListItem.propTypes = {
    dni: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerListItem;