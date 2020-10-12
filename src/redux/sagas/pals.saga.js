import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getPals(action) {
    //send the get request to the server so it makes a database request
    let response = yield axios({
        method: 'GET',
        url: '/api/pals'
    });
    console.log(response.data);

    //take the info acquired from the database and set it as redux state
    yield put({
        type: 'SET_PALS',
        payload: response.data
    });
}

function* palsSaga() {
    yield takeLatest('GET_PALS', getPals);
}

export default palsSaga;