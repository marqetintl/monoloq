import { formatDateToStr, getClassName, Calendar } from "@miq/shared";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosActions } from "./utils";

import "./todos.scss";

export default function TodosView(props) {
    const [currDate, setCurrDate] = useState(new Date());
    const [todo, setTodo] = useState("");

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos)[formatDateToStr(currDate)] || [];

    useEffect(() => {
        dispatch(todosActions.byDate(currDate));
    }, [dispatch, currDate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let fD = { value: todo, dt: currDate };
        dispatch(todosActions.post(fD)).then(({ status }) => {
            setTodo("");
        });
    };

    return (
        <div id="TodosView">
            <div className="todos">
                <WeekSelector {...{ currDate, setCurrDate }} />

                <div className="todos-items">
                    {todos.map((item) => (
                        <Todo data={item} {...{ dispatch }} key={item.slug} />
                    ))}
                </div>
            </div>

            <div className="viewport-footer">
                <form onSubmit={handleSubmit} className="todo-add-form">
                    <input
                        required
                        type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        maxLength={200}
                        placeholder="What do you have to do?"
                        tabIndex={1}
                    />
                    <div className="btn">
                        <input type="submit" value="Save" />
                    </div>
                </form>
            </div>
        </div>
    );
}

const Todo = ({ data, dispatch, ...props }) => {
    const [isDone, setDone] = useState(data.isDone || false);

    if (!data.slug) return;

    const toggleComplete = (e) => {
        const newValue = !isDone;
        dispatch(todosActions.patch(data, { isDone: newValue }))
            .then(({ status }) => {
                if (!status) throw new Error("Something went wrong");
                setDone(newValue);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={getClassName(["todo", isDone && "done"])}>
            <div className="value">{data.value}</div>
            <input type="checkbox" name="isDone" checked={isDone} onChange={toggleComplete} />
        </div>
    );
};

const WeekSelector = (props) => {
    const setDate = ({ date }) => {
        console.log(date);
        props.setCurrDate(date);
    };

    return (
        <div className="">
            <Calendar view="week" onDateClick={setDate} />
        </div>
    );
};
