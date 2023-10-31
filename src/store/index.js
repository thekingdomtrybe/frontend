import { configureStore } from '@reduxjs/toolkit';
import tktBackendSlice from '@/services/tkt-backend';
import accountsSlice from './slices/accounts';

export default configureStore({
  reducer: {
    [tktBackendSlice.reducerPath]: tktBackendSlice.reducer,
    accounts: accountsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(tktBackendSlice.middleware),
});
