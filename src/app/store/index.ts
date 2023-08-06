import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from "./createCustomStorage";
import logger from "redux-logger";
import userSlice from "./userSlice/userSlice";

const authPersistConfig = {
    key: "auth",
    storage: storage,
    whitelist: ["user"],
};
const rootReducer = combineReducers({
    [userSlice.name]: persistReducer(authPersistConfig, userSlice.reducer),
});


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
