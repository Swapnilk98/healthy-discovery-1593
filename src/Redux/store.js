import { legacy_createStore as createStore ,applyMiddleware,compose,combineReducers} from "redux";


import thunk from "redux-thunk"
import { signUpReducer } from "./Signup/reducer";
import { loginReducer } from "./Login/reducer";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const rootReducer = combineReducers({loginState:loginReducer,signupState:signUpReducer})

// const mainReducer = combineReducers({
//   loginState : loginReducer,
//   signupState : signUpReducer,
//   getDataReducer:getDataReducer
// });

export const store = createStore(rootReducer, enhancer);