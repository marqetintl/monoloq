import { v4 as uuid } from "uuid";
import { formatDateToStr, isRequired } from "@miq/shared";
import { isDate } from "lodash";
import { initialState } from "..";

const getDB = (key = "todos") => {
    let todos = localStorage.getItem(key);
    if (!todos) {
        todos = initialState[key];
        localStorage.setItem(key, JSON.stringify(todos));
        return todos;
    }
    return JSON.parse(todos);
};

export const todosActions = {
    byDate: (date) => (dispatch) =>
        new Promise((resolve) => {
            if (!isDate(date)) date = new Date();

            const todos = getDB("todos");

            const key = formatDateToStr(date);
            const items = todos[key];
            if (!items) {
                return resolve({});
            }

            dispatch({ type: "UPDATE_TODOS", payload: { [key]: items } });
            return resolve(items);
        }),

    post: (data) => (dispatch) =>
        new Promise((resolve) => {
            const { dt = new Date() } = data;

            const key = formatDateToStr(dt);
            const todos = getDB("todos");
            if (!Object.keys(todos).includes(key)) {
                todos[key] = [];
            }

            todos[key].push({ ...data, slug: uuid() });

            localStorage.setItem("todos", JSON.stringify(todos));
            dispatch({ type: "UPDATE_TODOS", payload: { [key]: todos[key] } });
            resolve({ status: 1 });
        }),

    patch:
        (todo, newData = isRequired("data required")) =>
        (dispatch) =>
            new Promise((resolve, reject) => {
                const { slug, dt } = todo;
                const key = formatDateToStr(new Date(dt));
                if (!key) return reject(new Error("Invalid date"));

                const todos = getDB("todos");
                if (!Object.keys(todos).includes(key)) {
                    return reject(new Error("Invalid date"));
                }

                let items = todos[key].map((item) => {
                    if (item.slug === slug) {
                        return { ...item, ...newData };
                    }
                    return item;
                });

                todos[key] = items;
                localStorage.setItem("todos", JSON.stringify(todos));
                dispatch({ type: "UPDATE_TODOS", payload: { [key]: items } });
                resolve({ status: 1 });
            }),
};

export const TodosReducer = (state = initialState.todos, action = {}) => {
    const { type, payload = {} } = action;

    switch (type) {
        case "SET_TODOS":
            return { ...payload };

        case "UPDATE_TODOS":
            return { ...state, ...payload };

        default:
            return { ...state };
    }
};

// class Todo {
//     text = "";
//     dt_start = null;
//     dt_end = null;
//     every = null;
//     repeat = ["never", "day", "week", "2week", "month", "year", "custom"];
//     frequency = [
//         { day: "hours" },
//         { week: "weekdays" },
//         { month: "days-date" },
//         { year: "months" },
//     ];
//     constructor(kwargs = {}) {
//         Object.assign(this, kwargs);
//     }
// }
