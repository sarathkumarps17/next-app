import { User, UserLoginData, UserStatus, Auth } from "@/types/user";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/helpers/axios";

interface UserState {
    user?: User | {},
    auth: Auth
}

const initialState: UserState = {
    user: {},
    auth: { status: 'guest', token: '', error: '' }
}
type UserData = {
    user: User,
    token: string
}
export const loginUser = createAsyncThunk<UserData, UserLoginData, { rejectValue: string }>(
    'user/login', async (user: UserLoginData, thunkApi) => {
        const res = await axios.post('/user/login', user)
        if (res.status === 400) return thunkApi.rejectWithValue('Wrong user credentials')
        if (res.status >= 500) return thunkApi.rejectWithValue('Server is down please try after sometime')
        return res.data as UserData
    })
export const getUserById = createAsyncThunk<UserData, number, { rejectValue: string }>(
    'user/login', async (id, thunkApi) => {
        const res = await axios.get(`/user/login/${id}`)
        if (res.status === 400) return thunkApi.rejectWithValue('Unable to get user details')
        if (res.status >= 500) return thunkApi.rejectWithValue('Server is down please try after sometime')
        return res.data as UserData
    })

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.auth.status = 'loading'
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            if (action.payload) state.auth.error = action.payload
            else state.auth.error = 'Something went wrong on, login failed'
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.auth.status = 'authenticated',
                state.auth.error = '',
                state.auth.token = action.payload.token
            state.user = action.payload.user
        })
        builder.addCase(getUserById.pending, (state) => {
            state.auth.status = 'loading'
        })
        builder.addCase(getUserById.rejected, (state, action) => {
            if (action.payload) state.auth.error = action.payload
            else state.auth.error = 'Something went wrong on fetching user data'
        })
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.auth.status = 'authenticated',
                state.auth.error = '',
                state.auth.token = action.payload.token
            state.user = action.payload.user
        })
    },

})


export default userSlice