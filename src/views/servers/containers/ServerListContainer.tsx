import React, { FunctionComponent } from 'react';
import useSWR from 'swr';
import ServerList from '../components/ServerList';

import emptyImage from '../../../assets/states/no_list_found.png'
import noConnectionImage from '../../../assets/states/no_internet_connection.png'
import EmptyState from '../../../components/EmptyState';

const ServerListContainer: FunctionComponent = () => {
    const { data: res, error } = useSWR('/servers');
    const data = res?.data;

    if (error || !data) {
        return <EmptyState image={noConnectionImage} imageAlt="No list found" headline="No servers found" byline="There was an error fetching the list of servers." />
    }
    if (data.length === 0) {
        return <EmptyState image={emptyImage} imageAlt="No list found" headline="No servers found" byline="You haven't added any servers yet." />
    }

    return (
        <ServerList servers={data} />
    );
}

export default ServerListContainer;
