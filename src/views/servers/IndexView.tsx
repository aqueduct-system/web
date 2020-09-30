import React, { FunctionComponent } from 'react';

import ServerListContainer from './containers/ServerListContainer';
import Page from '../../components/Page';
import Button from '../../components/Button';

const ServersView: FunctionComponent = () => {
    const actions = (
        <>
            <Button variant="primary" href="new">
                Add Server
            </Button>
        </>
    )

    return (
        <Page actions={actions} title="Servers">
            <div className="w-2/3 max-w-4xl mx-auto">
                <ServerListContainer />
            </div>
        </Page>
    )
}

export default ServersView;
