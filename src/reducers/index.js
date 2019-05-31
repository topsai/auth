import {combineReducers} from 'redux';
import TeachReducer from './TeachReducer'

export default combineReducers({
    techs: TeachReducer
})