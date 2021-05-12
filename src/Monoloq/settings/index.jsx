import React from "react";
import { initialState } from "..";

export default function SettingsView() {
    return <div>settings</div>;
}

export const settingsReducer = (state = initialState.settings, action = {}) => {
    const { type, payload = {} } = action;

    switch (type) {
        case "RESET_SETTINGS":
            return { ...state };

        case "SET_THEME":
            return { ...state, ...payload };

        default:
            return state;
    }
};
