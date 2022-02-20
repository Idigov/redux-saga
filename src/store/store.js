import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import rootSaga from "../saga/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
