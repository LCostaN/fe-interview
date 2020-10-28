import { combineReducers } from "redux";
import rootReducer from "../containers/redux/reducers";
//@BlueprintReduxImportInsertion

export const combinedReducers = combineReducers({ rootReducer });
