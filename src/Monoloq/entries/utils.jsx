import { initialState } from "..";

const LINES = /(\n|\r|\r\n){2,}/g;

export const cleanText = (value) => {
    if (value) value = value.trim().replace(LINES, "\n\n");
    return value;
};

export const entriesActions = {
    list: () => (dispatch) =>
        new Promise((resolve) => {
            let payload = localStorage.getItem("entries");
            if (!payload) {
                payload = initialState.entries;
                localStorage.setItem("entries", JSON.stringify(payload));
            } else {
                payload = JSON.parse(payload);
            }

            dispatch({ type: "SET_ENTRIES", payload });
            return resolve(payload);
        }),

    post: (entry) => (dispatch, getStore) =>
        new Promise((resolve) => {
            const state = getStore().entries;
            const newState = { ...state, [`${entry.slug}`]: entry };
            localStorage.setItem("entries", JSON.stringify(newState));

            dispatch({ type: "SET_ENTRIES", payload: newState });

            resolve({ ...entry, status: 1 });
        }),
};

export const entriesReducer = (state = initialState.entries, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_ENTRIES":
            return { ...payload };

        case "CLEAR_ENTRIES":
            return { ...initialState.entries };

        default:
            return { ...state };
    }
};
