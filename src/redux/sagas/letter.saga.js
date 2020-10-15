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
        url: `/api/letters/from`,

    });
    console.log(response.data);

    //take the info acquired from the database and set it as redux state
    yield put({
        type: 'SET_LETTERS_FROM',
        payload: response.data
    });
}

function* addLetter(action) {
    console.log('in addLetter');
    //send the get request to the server so it makes a database request
    let response = yield axios({
        method: 'POST',
        url: `/api/letters`,
        data: action.payload
    });
    console.log(response.data);

    //take the info acquired from the database and set it as redux state
    yield put({
        type: 'GET_LETTERS_FROM',
    });
}




function* letterSaga() {
    yield takeLatest('GET_LETTERS_TO', fetchLettersTo);
    yield takeLatest('GET_LETTERS_FROM', fetchLettersFrom);
    yield takeLatest('ADD_LETTER', addLetter);

}

export default letterSaga;