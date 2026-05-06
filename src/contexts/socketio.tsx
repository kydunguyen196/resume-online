"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { useToast } from "@/components/ui/use-toast";

export type User = {
  id: string;
  socketId: string;
  name: string;
  avatar: string;
  color: string;
  isOnline: string;
  posX: number;
  posY: number;
  location: string;
  flag: string;
  lastSeen: string;
  createdAt: string;
};
export type Message = {
  id: string;
  sessionId: string;
  flag: string;
  country: string;
  username: string;
  avatar: string;
  color?: string;
  content: string;
  createdAt: string | Date;
}

type SocketContextType = {
  socket: Socket | null;
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
  msgs: Message[];
  isCurrentUser: boolean;
  focusedCursorId: string | null;
  setFocusedCursorId: Dispatch<SetStateAction<string | null>>;
};

const INITIAL_STATE: SocketContextType = {
  socket: null,
  users: [],
  setUsers: () => { },
  msgs: [],
  isCurrentUser: false,
  focusedCursorId: null,
  setFocusedCursorId: () => { },
};

export const SocketContext = createContext<SocketContextType>(INITIAL_STATE);

const SESSION_ID_KEY = "portfolio-site-session-id";

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [msgs, setMsgs] = useState<Message[]>([]);
  const [isCurrentUser, setIsCurrentUser] = useState(false);
  const [focusedCursorId, setFocusedCursorId] = useState<string | null>(null);
  const { toast } = useToast();

  // SETUP SOCKET.IO
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_WS_URL) return
    const socket = io(process.env.NEXT_PUBLIC_WS_URL!, {
      auth: {
        sessionId: localStorage.getItem(SESSION_ID_KEY), // send on reconnect to restore session
      },
    });
    setSocket(socket);
    const handleConnect = () => { };
    const handleMsgsReceiveInit = (msgs: Message[]) => {
      setMsgs(msgs);
    };
    const handleSession = ({ sessionId }: { sessionId: string }) => {
      localStorage.setItem(SESSION_ID_KEY, (sessionId));
    };

    const handleMsgReceive = (msgs: Message) => {
      setMsgs((p) => [...p, msgs]);
    };

    const handleWarning = (data: { message: string }) => {
      toast({
        variant: "destructive",
        title: "System Warning",
        description: data.message,
      });
    };

    const handleMsgDelete = (data: { id: number }) => {
      setMsgs((prev) => prev.filter((m) => Number(m.id) !== data.id));
    };

    socket.on("connect", handleConnect);
    socket.on("msgs-receive-init", handleMsgsReceiveInit);
    socket.on("session", handleSession);
    socket.on("msg-receive", handleMsgReceive);
    socket.on("warning", handleWarning);
    socket.on("msg-delete", handleMsgDelete);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("msgs-receive-init", handleMsgsReceiveInit);
      socket.off("session", handleSession);
      socket.off("msg-receive", handleMsgReceive);
      socket.off("warning", handleWarning);
      socket.off("msg-delete", handleMsgDelete);
      socket.disconnect();
    };
  }, [toast]);

  return (
    <SocketContext.Provider value={{ socket: socket, users, setUsers, msgs, isCurrentUser, focusedCursorId, setFocusedCursorId }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
