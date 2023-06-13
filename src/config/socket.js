import { io } from "socket.io-client";

const socket = io("https://calendar-be-wrlq.onrender.com");
export default socket;
