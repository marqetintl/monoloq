import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import EntriesView from "./entries";
import { entriesReducer } from "./entries/utils";
import { settingsReducer } from "./settings";

import { JournalText } from "react-bootstrap-icons";

import "./scss/main.scss";

export const initialState = {
    entries: {},
    settings: {
        created: null,
        theme: "light",
    },
};

const SettingsView = lazy(() => import("./settings"));

export default function Monoloq(props) {
    return (
        <div id="Monoloq">
            <div className="mn">
                <header className="mn-header">
                    <Logo />
                </header>

                <section className="mn-body">
                    <main className="mn-main" role="main">
                        <Suspense fallback={<div>loading ...</div>}>
                            <Switch>
                                <Route path="/settings/" component={SettingsView} />
                                <Route path="/" component={EntriesView} />
                            </Switch>
                        </Suspense>
                    </main>
                    {/* <footer className="mn-footer">footer</footer> */}
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
    settings: settingsReducer,
};
