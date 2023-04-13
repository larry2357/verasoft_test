import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios"
import { Action } from "@reduxjs/toolkit";
import { getProfile, getProfileFail, getProfileSuccess } from "./profileSlice";

export const requestGetProfileByUserID = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(axios.request({
                method: "get",
                url: "/data/header.json"
            }));
        }, 2000);
    });
}

export function* handleGetProfileByUserID(action: Action) {
    try {
        const { data } = yield call(requestGetProfileByUserID);
        yield put(getProfileSuccess(data))
    } catch(err) {
        yield put(getProfileFail(err.message))
    }
}

export default function* () {
    yield takeEvery(getProfile.type, handleGetProfileByUserID);
}