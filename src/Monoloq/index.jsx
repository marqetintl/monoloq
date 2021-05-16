import { lazy, Suspense } from "react";
import { NavLink } from "react-router-dom";
import { Route, Switch } from "react-router";
import { CardChecklist, Gear, JournalPlus, JournalText } from "react-bootstrap-icons";

import "./scss/main.scss";

import EntriesView from "./entries";
import { entriesReducer } from "./entries/utils";
import { settingsReducer } from "./settings";
import { TodosReducer } from "./todos/utils";

export const initialState = {
    entries: {},
    todos: {},
    settings: {
        created: null,
        theme: "light",
    },
};

const SettingsView = lazy(() => import("./settings"));
const TodosView = lazy(() => import("./todos"));

export default function Monoloq(props) {
    return (
        <div id="Monoloq" className="viewport">
            <div className="mn viewport-content">
                <header className="viewport-header">
                    <div>
                        <Logo />
                    </div>

                    <div className="viewport-header-navlinks">
                        <NavLink exact to={"/"} className="btn">
                            <JournalPlus className="btn-icon" />
                        </NavLink>
                        <NavLink to={"/todo/"} className="btn">
                            <CardChecklist className="btn-icon" />
                        </NavLink>
                        <NavLink to={"/settings/"} className="btn">
                            <Gear className="btn-icon" />
                        </NavLink>
                    </div>
                </header>

                <section className="viewport-body">
                    <main className="viewport-main" role="main">
                        <Suspense fallback={<div>loading ...</div>}>
                            <Switch>
                                <Route path="/todo/" component={TodosView} />
                                <Route path="/settings/" component={SettingsView} />
                                <Route path="/" component={EntriesView} />
                            </Switch>
                        </Suspense>
                    </main>
                </section>
            </div>
        </div>
    );
}

const Logo = ({ sitename = "Monoloq", ...props }) => {
    return (
        <div id="Logo" className="btn">
            <JournalText className="btn-icon" />
            <span className="btn-label">{sitename}</span>
        </div>
    );
};

export const reducers = {
    entries: entriesReducer,
    todos: TodosReducer,
    settings: settingsReducer,
};
