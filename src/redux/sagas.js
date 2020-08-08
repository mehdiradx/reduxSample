import { all } from 'redux-saga/effects';
import { saga as loginSaga } from './modules/login';

export default function* rootSaga() {
    yield all([
      ...loginSaga(),
    ])
  }