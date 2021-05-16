import { formatDateToStr, getClassName } from "@miq/shared";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosActions } from "./utils";

import "./todos.scss";

export default function TodosView(props) {
    const [currDate] = useState(new Date());
    const [todo, setTodo] = useState("");

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos)[formatDateToStr(currDate)] || [];

    console.log(todos);

    useEffect(() => {
        dispatch(todosActions.byDate(new Date()));
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(todosActions.post(todo));
    };

    return (
        <div id="TodosView">
            <div className="todos">
                <WeekSelector />

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
    return <div className="">Week</div>;
};
