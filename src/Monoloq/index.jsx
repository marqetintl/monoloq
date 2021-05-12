import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import EntriesView, { entriesReducer } from "./entries";
import "./scss/main.scss";
import { settingsReducer } from "./settings";

export const initialState = {
    entries: {
        1: {},
    },
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
                <header className="mn-header">header</header>

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

export const reducers = {
    entries: entriesReducer,
    settings: settingsReducer,
};
