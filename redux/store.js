import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './reducers';
import tvSeriesReducer  from './tvReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
// const rootReducer = combineReducers({ moviesReducer, tvSeriesReducer});
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['moviesBookmarks','tvSeries_Bookmark']
  };
const rootReducer = combineReducers({
    moviesReducer: persistReducer(persistConfig, moviesReducer)
  },
  {
    tvSeriesReducer: persistReducer(persistConfig, tvSeriesReducer)
  });

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);