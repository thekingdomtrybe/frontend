import { configureStore } from '@reduxjs/toolkit';
import tktBackendSlice from '@/services/tkt-backend';

export default configureStore({
  reducer: {
    [tktBackendSlice.reducerPath]: tktBackendSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(tktBackendSlice.middleware),
});
