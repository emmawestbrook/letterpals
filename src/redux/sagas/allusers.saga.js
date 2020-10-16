import axios from 'axios';
import { put, take, takeLatest } from 'redux-saga/effects';


function* getUsers(action) {
    try {
        const response = yield axios.get('/api/allusers', action.payload);
        yield put({
            type: 'SET_ALL_USERS',
            payload: response.data
        });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* getOneUser(action) {
    try {
        const response = yield axios.get(`/api/allusers/${action.payload}`);
        console.log(response.data);

        yield put({
            type: 'SET_ONE_USER',
            payload: response.data
        });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* allusersSaga() {
    yield takeLatest('GET_ALL_USERS', getUsers);
    yield takeLatest('GET_ONE_USER', getOneUser);


}

export default allusersSaga;