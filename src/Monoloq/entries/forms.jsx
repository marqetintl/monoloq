import React, { useState } from "react";

const EntryInput = (props) => {
    const { placeholder = "What are your thoughts ...", maxLength = 280 } = props;

    return (
        <div className="Input">
            <div className="Mirror">{props.value || "\n"}</div>
            <div className="Wrapper">
                <textarea {...props} {...{ placeholder, maxLength }} required />
            </div>
        </div>
    );
};

export default function EntryAddForm(props) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div id="EntryAddForm">
            <form onSubmit={handleSubmit} className="form">
                <EntryInput value={text} onChange={(e) => setText(e.target.value)} />

                <div className="form-submit">
                    <button type="submit">Submit</button>
                    {/* <IconButton type="submit" Icon={ArrowUpCircle} /> */}
                </div>
            </form>
        </div>
    );
}
