import React, { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';

import DashboardView from './dashboard/View';
import SettingsView from './settings/View';
import ProfileView from './profile/View';
import ServersRoutes from './servers/Routes';

const AppRouter: FunctionComponent = () => {
    return (
        <Routes>
            <Route path="servers/*" element={<ServersRoutes />} />
            <Route path="settings" element={<SettingsView />} />
            <Route path="profile" element={<ProfileView />} />
            <Route path="/" element={<DashboardView />} />
        </Routes>
    )
}

export default AppRouter;
