import { RootState } from './../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
// import axios from 'axios'
// import { checkErrorMessageType } from '../../utils/checkErrorMessageType'
import { loadUsersList } from './actionCreators'

interface UserState {
  users: IUser[]
  isLoading: boolean
  error: string | null
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // usersRequested: (state) => {
    //   state.isLoading = true
    // },
    // usersRecieved: (state, action: PayloadAction<IUser[]>) => {
    //   state.isLoading = false
    //   state.users = action.payload
    // },
    // usersRequestFailed: (state, action: PayloadAction<string>) => {
    //   state.isLoading = false
    //   state.error = action.payload
    // }
  },
  extraReducers: {
    [loadUsersList.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false
      state.users = action.payload
    },
    [loadUsersList.pending.type]: (state) => {
      state.isLoading = true
    },
    [loadUsersList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

const { reducer: userReducer } = userSlice

// export const { usersRequested, usersRecieved, usersRequestFailed } = actions

// export const loadUsersList = () => async (dispatch: AppDispatch) => {
//   dispatch(usersRequested())
//   try {
//     const response = await axios.get<IUser[]>(
//       'https://jsonplaceholder.typicode.com/users'
//     )

//     dispatch(usersRecieved(response.data))
//   } catch (e) {
//     dispatch(usersRequestFailed(checkErrorMessageType(e)))
//   }
// }

export const getUsersState = () => (state: RootState) => state.users

export default userReducer
