import useTask, { UseTaskCallbacks } from '../../hooks/useTask';

export function useStartTask(serverId: number, options?: Partial<UseTaskCallbacks>) {
    const [start, status, task] = useTask(`/servers/${serverId}/commands`, {
        fetchOptions: {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ command: 'start' }),
        },
        onStarted() {
            console.log('start started!');
            if (options?.onStarted) options?.onStarted();
        },
        onCompleted() {
            console.log('start completed!');
            if (options?.onCompleted) options?.onCompleted(task);
        },
        onFailed() {
            console.log('start failed!');
            if (options?.onFailed) options?.onFailed(task);
        },
    });

    return [
        start,
        status,
        task,
    ] as const;
}

export function useStopTask(serverId: number, options?: Partial<UseTaskCallbacks>) {
    const [stop, status, task] = useTask(`/servers/${serverId}/commands`, {
        fetchOptions: {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ command: 'stop' }),
        },
        onStarted() {
            console.log('stop started!');
            if (options?.onStarted) options?.onStarted();
        },
        onCompleted() {
            console.log('stop completed!');
            if (options?.onCompleted) options?.onCompleted(task);
        },
        onFailed() {
            console.log('stop failed!');
            if (options?.onFailed) options?.onFailed(task);
        },
    });

    return [
        stop,
        status,
        task,
    ] as const;
}

export function useRestartTask(serverId: number, options?: Partial<UseTaskCallbacks>) {
    const [restart, status, task] = useTask(`/servers/${serverId}/commands`, {
        fetchOptions: {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ command: 'restart' }),
        },
        onStarted() {
            console.log('restart started!');
            if (options?.onStarted) options?.onStarted();
        },
        onCompleted() {
            console.log('restart completed!');
            if (options?.onCompleted) options?.onCompleted(task);
        },
        onFailed() {
            console.log('restart failed!');
            if (options?.onFailed) options?.onFailed(task);
        },
    });
    return [
        restart,
        status,
        task,
    ] as const;
}