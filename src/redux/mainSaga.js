import { all } from "redux-saga/effects";
import AppSaga from "../containers/redux/sagas";

//@BlueprintReduxSagaImportInsertion

export function* mainSaga() {
  yield all([AppSaga]);
}
