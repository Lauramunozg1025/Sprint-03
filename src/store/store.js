import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { loginReducers  } from '../reducers/loginReducers'
import { registerReducers  } from '../reducers/registerReducers'
import thunk from 'redux-thunk';
import { agregarReducer } from '../reducers/agregarReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducers,
    register: registerReducers,
    movie: agregarReducer
})

export const store = createStore(
    reducers,
    composeEnhancers( applyMiddleware(thunk) )
)
