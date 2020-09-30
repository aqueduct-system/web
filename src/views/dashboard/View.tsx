import React, { FunctionComponent } from 'react';

import HostCardContainer from './containers/HostCardContainer';
import Page from '../../components/Page';

const DashboardView: FunctionComponent = () => {
    return (
        <Page title="Dashboard">
            <HostCardContainer />
        </Page>
    )
}

export default DashboardView;
