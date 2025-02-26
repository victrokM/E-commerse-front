import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '@/interfaces/UserState.interface';
import { User } from '@/models/User.interface';
import { RootState } from '@/redux/store';
// import AuthService from '@/services/AuthService';

const initialState: UserState = {
  user: {},
  token: null
};

// export const postTokenThunk = createAsyncThunk(
//   'user/setToken',
//   async (token: string) => {
//     const authService: AuthService = new AuthService();
//     const response = await authService.setToken(token);
//     if (!(response.success ?? false)) return null;
//     return token;
//   }
// );

// export const clearTokenThunk = createAsyncThunk(
//   'user/clearToken',
//   async () => {
//     const authService: AuthService = new AuthService();
//     const response = await authService.logout();
//     if (response.success ?? false) return null;
//   }
// );

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<User>) => {
      state.user = {
        ...state.user,
        ...action.payload
      };
    },
    setToken: (state: UserState, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
//   extraReducers: (builder) => {
//     builder.addCase(postTokenThunk.fulfilled, (state, action) => {
//       if (action.payload !== undefined) {
//         state.token = action.payload;
//       }
//     });
//     builder.addCase(clearTokenThunk.fulfilled, (state, action) => {
//       if (action.payload !== undefined) {
//         state.token = action.payload;
//       }
//     });
//   }
});

export const { setUser, setToken } = userSlice.actions;

export const selectUser = (state: RootState): User => state.user.user;
export const selectToken = (state: RootState): string | null =>
  state.user.token;

export default userSlice.reducer;
