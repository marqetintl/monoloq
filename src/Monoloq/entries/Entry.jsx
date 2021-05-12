import React from "react";
import { formatTime } from "../../utils";

export default function Entry({ data = {}, ...props }) {
    return (
        <div className="entry">
            <div className="entry-text">{data.text}</div>
            <div className="entry-meta">
                <span className="entry-meta-time">{`${formatTime(data.date)}`}</span>
            </div>
        </div>
    );
}
