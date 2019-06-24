import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//this data is basically global state, keys are mapped to states returned by following reducers
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});
