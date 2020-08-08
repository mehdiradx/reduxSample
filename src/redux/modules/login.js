import { takeLatest, put } from 'redux-saga/effects';

const LOAD = "digitest/login/LOAD";
const LOAD_SUCCESS = "digitest/login/LOAD_SUCCESS";
const LOAD_FAIL = "digitest/login/LOAD_FAIL";

const initialState = {
    testState: 'haji',
    loaded: false,
    data: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_SUCCESS:
            return {
                ...state,
                loaded: true,
                data: action.data
            };
        case LOAD_FAIL:
            return {
                ...state,
                loaded: true,
            }
    
        default:
            return state;
    }
}

const load = ({ values }) => ({
    type: LOAD,
    values,
});

const loadSuccess = data => ({
    type: LOAD_SUCCESS,
    data,
});

const loadFail = ()  => ({
    type: LOAD_FAIL,
});

function* watchLoad({ values }) {
    console.log('clicked', values);
    try {
        // request
        const { username, password } = values;
        const data = [ 
            {name: username, family: password},
        ];
        yield put(loadSuccess(data))
    } catch (error) {
        yield loadFail();
    }
}

const saga = () => [
    takeLatest(LOAD, watchLoad),
];

export {
    saga,
    load,
}