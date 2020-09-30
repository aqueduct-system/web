import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

import Page from '../../components/Page';
import SocketManager from '../../components/SocketManager';
import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';
import ConsoleOutput from './components/ConsoleOutput';
import { useStartTask, useRestartTask, useStopTask } from './hooks';
import ServerPingData from './components/ServerData';

const ServerView: FunctionComponent = () => {
    const { serverId } = useParams();
    const { data: res, error } = useSWR(`/servers/${serverId}`);
    const server = res && res.data;

    const [start] = useStartTask(Number(serverId));
    const [stop] = useStopTask(Number(serverId));
    const [restart] = useRestartTask(Number(serverId));

    if (error || !server) return null;

    const actions = (
        <ButtonGroup className="ml-auto">
            {server.running ? (
                <>
                    <Button variant="secondary" onClick={restart}>
                        Restart
                    </Button>
                    <Button variant="destructive" onClick={stop}>
                        Stop
                    </Button>
                </>
            ): (
                <Button variant="secondary" onClick={start}>
                    Start
                </Button>
            )}
        </ButtonGroup>
    )

    return (
        <Page title={server.world_name} actions={actions}>
            <SocketManager path={`/servers/${serverId}/logs`}>
                <ConsoleOutput />
            </SocketManager>
            <SocketManager path={`/servers/${serverId}/ping`}>
                <ServerPingData />
            </SocketManager>
        </Page>
    )
}

export default ServerView;
