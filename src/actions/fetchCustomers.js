import {FETCH_CUSTOMERS} from './../constants';
import {createAction} from 'redux-actions';

const customers= [
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

export const fetchCustomers = createAction (FETCH_CUSTOMERS);