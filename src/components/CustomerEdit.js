import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

const isRequired = value => (
    !value && "Este campo es requerido"
);

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un numero"
);

const MyField = ({input, meta, type, label, name}) =>(
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text": type} />
        {
            meta.touched && meta.error && <spam>{meta.error }</spam>
        }
    </div>
);

const CustomerEdit = ({name,dni,age}) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <form action="">
                <Field 
                    name="name"
                    component={MyField}
                    type="text"
                    validate ={isRequired}
                    label="Nombre"
                ></Field>
                <Field 
                    name="dni"
                    component={MyField}
                    type="text"
                    validate ={[isRequired, isNumber]}
                    label = "DNI"
                ></Field>
                <Field 
                    name="age"
                    component={MyField}
                    type="number"
                    validate = {isNumber}
                    label= "Edad"
                ></Field>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};
const CustomerEditForm = reduxForm({form: 'CustomerEdit'})(CustomerEdit)

export default setPropsAsInitial(CustomerEditForm);