import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field/*, isSubmitting*/ } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomerActions from './CustomersActions';
/*
const isRequired = value => (
    !value && "Este campo es requerido"
);*/

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un numero"
);

const validate = values =>{
    const error = {};

    if(!values.name) {
        error.name = "El campo Nombre es requerido";
    }
    if(!values.dni) {
        error.dni = "El campo Dni es requerido";
    }
    return error;
};

const MyField = ({input, meta, type, label, name}) =>(
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text": type} />
        {
            meta.touched && meta.error && <spam>{meta.error }</spam>
        }
    </div>
);

const toNumber = value => value && Number(value);
const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();
const onlyGrow = (value, previousValue, values) => 
        value && previousValue && (value > previousValue ? value : previousValue)

const CustomerEdit = ({name, dni, age, handleSubmit, submitting, onBack}) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <form onSubmit={handleSubmit}>
                <Field 
                    name="name"
                    component={MyField}
                    type="text"
                    label="Nombre"
                    parse={toUpper}
                    format={toLower}
                ></Field>
                <Field 
                    name="dni"
                    component={MyField}
                    type="text"                    
                    label = "DNI"
                ></Field>
                <Field 
                    name="age"
                    component={MyField}
                    type="number"
                    validate = {isNumber}
                    label= "Edad"
                    parse={toNumber}
                    normalize={onlyGrow}
                ></Field>
                <CustomerActions>
                    <button type="submit" disabled={submitting} >Aceptar</button>
                    <button onClick= {onBack}>Cancelar</button>
                </CustomerActions>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};
const CustomerEditForm = reduxForm(
    {
        form: 'CustomerEdit',
        validate
    })(CustomerEdit)

export default setPropsAsInitial(CustomerEditForm);