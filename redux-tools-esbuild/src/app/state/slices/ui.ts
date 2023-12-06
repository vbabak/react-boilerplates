import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UiEntity } from '../../entities/UiEntity';
import { RootState } from '../store';

const initialState: UiEntity = new UiEntity({ themeMode: 'light' });

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<UiEntity['themeMode']>) => {
      return {
        ...state,
        themeMode: action.payload,
      };
    },
  },
});
export const { setThemeMode } = uiSlice.actions;
export const selectTheme = (state: RootState) => state.ui?.themeMode;
