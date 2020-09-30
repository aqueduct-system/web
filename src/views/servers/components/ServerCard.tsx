import React, { FunctionComponent } from 'react';
import { Aqueduct } from '@aqueduct-system/types';

import Card from '../../../components/Card';
import Button from '../../../components/Button';
import ButtonGroup from '../../../components/ButtonGroup';
import { useStartTask, useRestartTask, useStopTask } from '../hooks';

type ServerCardProps = {
    server: Aqueduct.Server;
}

const ServerCard: FunctionComponent<ServerCardProps> = ({ server }) => {
    const [start] = useStartTask(server.id);
    const [stop] = useStopTask(server.id);
    const [restart] = useRestartTask(server.id);

    return (
        <Card>
            <Card.Content>
                <div className="flex justify-between mb-4">
                    <h2 className="text-lg font-bold">{server.world_name}</h2>
                    <div className={`px-2 py-1 rounded-lg text-white ${server.running ? 'bg-green-500' : 'bg-red-500'}`}>
                        {server.running ? 'Running' : 'Offline'}
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <span className="font-bold">Description</span>
                    <span>{server.motd}</span>
                    <span className="font-bold">IP Address</span>
                    <span>{server.ip}</span>
                    <span className="font-bold">Server Path</span>
                    <span>{`${server.path}/${server.jar_name}`}</span>
                </div>
            </Card.Content>
            <Card.Actions>
                <Button variant="primary" href={`${server.id}`}>
                    Details
                </Button>
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
            </Card.Actions>
        </Card>
    )
};

export default ServerCard;
