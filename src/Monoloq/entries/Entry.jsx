import React, { useState } from "react";
import { formatTime, IconButton } from "@miq/shared";

import { Portal } from "@miq/shared";
import { entriesActions } from "./utils";
import { EntryUpdateForm } from "./forms";
import { XCircle } from "react-bootstrap-icons";

export default function Entry({ data = {}, dispatch, ...props }) {
    const [edit, setEdit] = useState(false);

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(entriesActions.delete(data.slug)).then(({ status }) => {
            if (!status) return;
        });
    };

    return (
        <>
            <div className="entry" onClick={() => setEdit(true)}>
                <div className="entry-text">{data.text}</div>
                <div className="entry-meta">
                    <span className="entry-meta-time">{`${formatTime(data.date)}`}</span>
                </div>
            </div>
            {edit && (
                <UpdatePortal onClose={() => setEdit(false)} onDelete={handleDelete}>
                    <EntryUpdateForm {...{ data }} onSuccess={() => setEdit(false)} />
                </UpdatePortal>
            )}
        </>
    );
}

const UpdatePortal = ({ children, onClose, onDelete }) => {
    const header = (
        <div className="">
            <div className="CloseButton" onClick={onClose}>
                <IconButton Icon={XCircle} maxSize={24} />
            </div>
        </div>
    );
    const footer = (
        <div className="bg-white">
            <div className="CloseButton" onClick={onDelete}>
                Delete
            </div>
        </div>
    );
    return (
        <Portal>
            <Portal.Modal {...{ header, footer }}>{children}</Portal.Modal>
        </Portal>
    );
};
