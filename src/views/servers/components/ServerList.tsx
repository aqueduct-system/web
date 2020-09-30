import React, { FunctionComponent } from 'react';

import ServerCard from './ServerCard';
import { Aqueduct } from 'packages/types/dist';

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