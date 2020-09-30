import React from 'react'
import { Routes, Route } from 'react-router-dom';

import ServersIndexView from './IndexView';
import ServerView from './ServerView';
import NewServerView from './NewServerView';

export default function ServersRoutes() {
    return (
        <Routes>
            <Route path=":serverId">
                <ServerView />
            </Route>
            <Route path="new">
                <NewServerView />
            </Route>
            <Route path="/">
                <ServersIndexView />
            </Route>
        </Routes>
    )
}
