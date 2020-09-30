import React, { FunctionComponent, useContext, useLayoutEffect, useRef, useState, ReactNode } from 'react';

type SocketManagerState = {
    socket: WebSocket | null;
    messages: any[],
    isOpen: boolean;
}

type SocketManagerProps = {
    children: ReactNode,
    path: string;
}

export const SocketContext = React.createContext<SocketManagerState>({
    socket: null,
    messages: [],
    isOpen: false,
});

export function useWebsocket() {
    return useContext(SocketContext);
}

const SocketManager: FunctionComponent<SocketManagerProps> = ({ children, path }) => {
    const socket = useRef<WebSocket | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);

    useLayoutEffect(() => {
        socket.current = new WebSocket(`ws://localhost:5000/api${path}`);
       
        return () => {
            if (socket.current !== null) socket.current.close();
        }
    }, [path]);

    useLayoutEffect(() => {
        if (!socket.current) return;

        socket.current.onopen = function() {
            setIsOpen(true);
        };

        socket.current.onmessage = function(event) {
            setMessages([...messages, event.data]);
        }

        socket.current.onclose = function() {
            setIsOpen(false);
        }
    }, [messages, isOpen])

    return (
        <SocketContext.Provider value={{ socket: socket.current, messages, isOpen }}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketManager;
