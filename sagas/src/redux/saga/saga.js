import { put, call, takeEvery } from "redux-saga/effects";
import { getImagesAPi } from "../../api/getApi";
import { Actions } from "../action/action";

export function* getImages() {
 const dataCall =  yield call(getImagesAPi)
 yield put({type: Actions.SET_IMAGES, payload:dataCall})
}


export function* watchSaga(){
    yield takeEvery(Actions.GET_IMAGES_1,getImages)
}