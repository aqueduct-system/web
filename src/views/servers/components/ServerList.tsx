import React, { FunctionComponent } from 'react';
import { Aqueduct } from '@aqueduct-system/types';

import ServerCard from './ServerCard';

type ServerListProps = {
    servers: Aqueduct.Server[];
}

const ServerList: FunctionComponent<ServerListProps> = ({ servers }) => {
    return (
        <>
            {servers.map(server => <ServerCard key={server.id} server={server} />)}
        </>
    );
};

export default ServerList;