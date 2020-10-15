import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* fetchLettersTo(action) {
    //send the get request to the server so it makes a database request
    let response = yield axios({
        method: 'GET',
        url: `/api/letters/to`
    });
    console.log(response.data);

    //take the info acquired from the database and set it as redux state
    yield put({
        type: 'SET_LETTERS_TO',
        payload: response.data
    });
}

function* fetchLettersFrom(action) {
    //send the get request to the server so it makes a database request
    let response = yield axios({
        method: 'GET',
        url: `/api/letters/from`
    });
    console.log(response.data);

    //take the info acquired from the database and set it as redux state
    yield put({
        type: 'SET_LETTERS_FROM',
        payload: response.data
    });
}




function* letterSaga() {
    yield takeLatest('GET_LETTERS_TO', fetchLettersTo);
    yield takeLatest('GET_LETTERS_FROM', fetchLettersFrom);

}

export default letterSaga;