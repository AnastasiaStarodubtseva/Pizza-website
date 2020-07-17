import { combineReducers } from 'redux';
import filtersReducer from './filters';
import pizzasReducer from './pizzas';
import filters from './filters';


const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer
});

export default rootReducer;