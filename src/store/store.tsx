import {configureStore,combineReducers} from "@reduxjs/toolkit"
import { persistStore, 
    persistReducer ,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import accountReducer from "./duck/user/slice";
import columnReducer from "./duck/column/slice";
import cardsReducer from "./duck/card/slice";
const rootReducer = combineReducers({
    user:accountReducer,
    columns:columnReducer,
    cards:cardsReducer,
});

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig,rootReducer);

const store =  configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
