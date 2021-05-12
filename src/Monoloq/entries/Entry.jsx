import React from "react";

export default function Entry({ data = {}, ...props }) {
    return (
        <div className="entry">
            <div className="entry-text">{data.text}</div>
            <div className="entry-meta"></div>
        </div>
    );
}
