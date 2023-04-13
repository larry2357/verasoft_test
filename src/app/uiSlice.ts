import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
    open: boolean,
}

const initialState: UIState = {
    open: false
}

const UISlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        showModal: (state, action: PayloadAction<boolean>) => {
            state.open = action.payload;
        }
    }
});

export const { showModal } = UISlice.actions;

export default UISlice.reducer;