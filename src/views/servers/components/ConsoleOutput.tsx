import React, { FunctionComponent } from 'react';
import { useWebsocket } from '../../../components/SocketManager';

const ConsoleOutput: FunctionComponent = () => {
    const { messages, isOpen } = useWebsocket();

    return (
        <>
            <h2 className="text-lg font-bold mb-4">Console Output</h2>
            <div className="border-solid border-2 rounded border-gray-500 h-64 overflow-auto relative">
                {isOpen ? (
                    <ul>
                        {messages.map((message: any) =><li key={message} className="font-mono text-sm">{message}</li>)}
                    </ul>
                ) : (
                    <div className="absolute left-0 right-0 top-0 bottom-0 opacity-25 flex justify-center items-center bg-gray-300">
                        <h3 className="text-center text-lg text-gray-900">Not connected.</h3>
                    </div>
                )}
            </div>
        </>
    );
}

export default ConsoleOutput;
