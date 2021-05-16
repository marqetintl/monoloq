import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { sample } from "lodash";
import { useDispatch } from "react-redux";

import { entriesActions, cleanText } from "./utils";

import { TextareaX } from "@miq/shared";
import { ArrowUpCircle } from "react-bootstrap-icons";
import placeholders from "./placeholders";

const getPlaceholder = () => sample(placeholders);

const EntryInput = (props) => {
    const { placeholder = getPlaceholder(), maxLength = 280 } = props;

    return <TextareaX {...props} {...{ placeholder, maxLength }} required />;
};

const SubmitButton = ({ className }) => (
    <div className={className}>
        <button type="submit" className="btn" title="Submit">
            <ArrowUpCircle className="btn-icon" />
        </button>
    </div>
);

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

                <SubmitButton className="entries-add-form-submit" />
            </form>
        </div>
    );
}

export const EntryUpdateForm = ({ data = {}, ...props }) => {
    const dispatch = useDispatch();
    const [text, setText] = useState(data.text || "");

    if (!data.slug) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text === data.text) return;

        const payload = { ...data, text: cleanText(text) };
        dispatch(entriesActions.patch(data.slug, payload)).then(({ status }) => {
            if (!status) return;

            if (props.onSuccess) return props.onSuccess(payload);
        });
    };

    return (
        <div id="EntryUpdateForm">
            <form onSubmit={handleSubmit} className="entries-upd-form">
                <div className="entries-upd-form-input">
                    <EntryInput value={text} onChange={(e) => setText(e.target.value)} />
                </div>

                <SubmitButton className="entries-upd-form-submit" />
            </form>
        </div>
    );
};
