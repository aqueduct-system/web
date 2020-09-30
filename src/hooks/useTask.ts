import { useState } from 'react';
import { Aqueduct } from '@aqueduct-system/types';
import { BASE_URL } from '../api';

export type UseTaskCallbacks = {
    onStarted: () => void,
    onCompleted: (task: any) => void,
    onFailed: (err: any) => void,
    // onCancelled: (task: any) => void,
}

type UseTaskOptions = UseTaskCallbacks &  {
    fetchOptions: RequestInit;
}

const DEFAULT_OPTS: RequestInit = {
    method: 'GET',
    mode: 'cors',
}

/**
 * Run an async task, providing functions that are run depending on the result of the task.
 *
 * @param url The url to request
 */
function useTask(url: string, options?: Partial<UseTaskOptions>) {
    const [status, setStatus] = useState<Aqueduct.TaskState>(Aqueduct.TaskState.UNSTARTED);
    const [task, setTask] = useState<Aqueduct.Task | null>(null)

    async function start() {
        if (options?.onStarted) options.onStarted();
        setStatus(Aqueduct.TaskState.STARTED);

        const fetchOpts = Object.assign({}, DEFAULT_OPTS, options?.fetchOptions);

        try {
            const res = await fetch(`${BASE_URL}${url}`, fetchOpts);
            const { task } = await res.json();

            setTask(task);
            setStatus(Aqueduct.TaskState.COMPLETED);
            if (options?.onCompleted) options.onCompleted(task);

        } catch (err) {
            setTask(null);
            setStatus(Aqueduct.TaskState.FAILED);
            if (options?.onFailed) options.onFailed(err);
        }

    }

    return [
        start,
        status,
        task,
    ] as const;
}

export default useTask;
