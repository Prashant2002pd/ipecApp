import React, { createContext, useContext, useMemo } from 'react';
import io from 'socket.io-client';
import {SOCKET_URL} from "@env"
// Create a context for the socket
const SocketContext = createContext(null);

// Create a provider component
export const SocketProvider = ({ children }) => {
  // Initialize the socket connection using useMemo to avoid reinitialization
  const socket = useMemo(() => io(`${SOCKET_URL}`), []);

  // Provide the socket connection to children components
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

// Custom hook to use the socket context
export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};
