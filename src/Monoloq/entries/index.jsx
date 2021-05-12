import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import EntryAddForm from "./forms";
import { entriesActions } from "./utils";

import "./style.scss";
import { formatDate, formatDateToStr } from "../../utils";
import Entry from "./Entry";

const byDate = new Map();

export default function EntriesView(props) {
    const dispatch = useDispatch();
    const entries = useSelector((state) => state.entries);

    useEffect(() => {
        dispatch(entriesActions.list());
    }, [dispatch]);

    byDate.clear();
    Object.values(entries).forEach((e) => {
        const date = new Date(e.dt);
        e = { ...e, date };
        const key = formatDateToStr(date);

        if (!byDate.has(key)) {
            byDate.set(key, { date, entries: [] });
        }

        const data = byDate.get(key);
        data.entries.push(e);
        byDate.set(key, data);
    });

    return (
        <section id="EntriesView" className="entries">
            <div className="entries-days">
                {[...byDate.values()].map((data) => (
                    <Entries {...{ data, dispatch }} key={`${data.date}`} />
                ))}
            </div>

            <footer className="entries-footer">
                <EntryAddForm />
            </footer>
        </section>
    );
}

const Entries = ({ data = { entries: [] }, dispatch }) => {
    return (
        <div className="entries-day">
            <div className="weekday">{formatDate(data.date)}</div>

            <div className="items">
                {data.entries.map((note) => (
                    <Entry {...{ dispatch }} data={note} key={note.slug} />
                ))}
            </div>
        </div>
    );
};
