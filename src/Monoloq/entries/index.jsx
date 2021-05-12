import { initialState } from "..";
import EntryAddForm from "./forms";
import "./style.scss";

export default function EntriesView(props) {
    return (
        <section id="EntriesView" className="entries">
            <div className="entries-items">gf</div>

            <footer className="entries-form">
                <EntryAddForm />
            </footer>
        </section>
    );
}

export const entriesReducer = (state = initialState.entries, action) => {
    const { type } = action;

    switch (type) {
        default:
            return { ...state };
    }
};
