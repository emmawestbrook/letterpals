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

function* fetchPal(action) {
    //send the get request to the server so it makes a database request
    console.log('action.payload is', action.payload);
    let response = yield axios({
        method: 'GET',
        url: `/api/pals/${action.payload}`
    });
    console.log(response.data);

    //take the info acquired from the database and set it as redux state
    yield put({
        type: 'SET_PAL_PROFILE',
        payload: response.data
    });
}

function* deletePal(action) {
    //send the get request to the server so it makes a database request
    console.log('action.payload is', action.payload);
    let response = yield axios({
        method: 'DELETE',
        url: `/api/pals/${action.payload}`
    });
    console.log(response.data);

    //take the info acquired from the database and set it as redux state
    yield put({
        type: 'GET_PALS'
    });
}




function* palsSaga() {
    yield takeLatest('GET_PALS', getPals);
    yield takeLatest('FETCH_PAL', fetchPal);
    yield takeLatest('DELETE_PAL', deletePal);


}

export default palsSaga;