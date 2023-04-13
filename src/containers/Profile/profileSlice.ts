import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Activity {
    sms: number,
    email: number,
    orders: number
}

export interface CarrierStatus {
    since: string,
    status: string
}

export interface Profile {
    id: number,
    first_name: string,
    last_name: string,
    gender: string,
    birth_date: string,
    home_phone: string,
    mobile_phone: string,
    work_phone: string,
    email: string,
    activity: Activity,
    carrier_status: CarrierStatus
}

export interface ProfileState {
    profileOwner?: Profile,
    errMsg: string,
    loading: boolean,
}

const initialState: ProfileState = {
    profileOwner: undefined,
    errMsg: "",
    loading: true,
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        getProfile: (state) => {
            state.loading = true;
        },
        getProfileSuccess: (state, action: PayloadAction<Profile>) => {
            state.profileOwner = action.payload;
            state.loading = false;
        },
        getProfileFail: (state, action: PayloadAction<string>) => {
            state.errMsg = action.payload;
            state.loading = false;
        },
    }
});

export const { getProfile, getProfileSuccess, getProfileFail } = profileSlice.actions;

export default profileSlice.reducer;