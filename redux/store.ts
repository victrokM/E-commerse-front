
import {
    Action,
    combineReducers,
    configureStore,
    ThunkAction,
    PayloadAction
  } from '@reduxjs/toolkit';
  import { createWrapper, HYDRATE } from 'next-redux-wrapper';
  
  import reducers from './reducers';
  
  const combinedReducer = combineReducers(reducers);
  
  export type state = ReturnType<typeof combinedReducer>;
  
  const masterReducer = (
    state: state | undefined,
    action: PayloadAction<state>
  ) => {
    if (action.type === HYDRATE && state !== undefined) {
      const nextState = {
        ...state,
        user: {
          user: {
            ...state.user.user,
            ...action.payload.user.user
          },
          token: state.user.token,
        }
      };
      return nextState;
    } else {
      return combinedReducer(state, action);
    }
  };
  
  export const makeStore = () =>
    configureStore({
      reducer: masterReducer
    });
  
  export type AppStore = ReturnType<typeof makeStore>;
  export type RootState = ReturnType<AppStore['getState']>;
  export type AppDispatch = AppStore['dispatch'];
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action
  >;
  
  export const wrapper = createWrapper(makeStore);
  