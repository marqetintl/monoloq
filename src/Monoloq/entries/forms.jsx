import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";

import { entriesActions, cleanText } from "./utils";

import TextareaX from "../ui/textareax/src";

const EntryInput = (props) => {
    const { placeholder = "What are your thoughts ...", maxLength = 280 } = props;

    return <TextareaX {...props} {...{ placeholder, maxLength }} required />;
};

export default function EntryAddForm(props) {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = { slug: uuid(), text: cleanText(text), dt: new Date() };
        dispatch(entriesActions.post(payload)).then(({ status }) => {
            if (!status) return;

            setText("");
        });
    };

    return (
        <div id="EntryAddForm">
            <form onSubmit={handleSubmit} className="entries-add-form">
                <div className="entries-add-form-input">
                    <EntryInput value={text} onChange={(e) => setText(e.target.value)} />
                </div>

                <div className="entries-add-form-submit">
                    <button type="submit">Submit</button>
                    {/* <IconButton type="submit" Icon={ArrowUpCircle} /> */}
                </div>
            </form>
        </div>
    );
}
