import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* fetchLetters(action) {
    //send the get request to the server so it makes a database request
    console.log('action.payload is', action.payload);
    let response = yield axios({
        method: 'GET',
        url: `/api/letters`
    });
    console.log(response.data);

    //take the info acquired from the database and set it as redux state
    yield put({
        type: 'SET_LETTERS',
        payload: response.data
    });
}




function* letterSaga() {
    yield takeLatest('GET_LETTERS', fetchLetters);
}

export default letterSaga;