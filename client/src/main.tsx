import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom styles for typing animation and scrollbars
const styleElement = document.createElement('style');
styleElement.textContent = `
  .typing-indicator {
    display: inline-flex;
    align-items: center;
  }
  .typing-indicator span {
    height: 6px;
    width: 6px;
    margin: 0 1px;
    background-color: #10a37f;
    border-radius: 50%;
    display: inline-block;
    opacity: 0.6;
  }
  .typing-indicator span:nth-child(1) {
    animation: typing 1.4s infinite;
  }
  .typing-indicator span:nth-child(2) {
    animation: typing 1.4s infinite .2s;
  }
  .typing-indicator span:nth-child(3) {
    animation: typing 1.4s infinite .4s;
  }
  @keyframes typing {
    0% { transform: translateY(0px); opacity: 0.6; }
    50% { transform: translateY(-5px); opacity: 1; }
    100% { transform: translateY(0px); opacity: 0.6; }
  }
  .chat-container {
    scrollbar-width: thin;
    scrollbar-color: #CBD5E0 #F9FAFB;
  }
  .chat-container::-webkit-scrollbar {
    width: 6px;
  }
  .chat-container::-webkit-scrollbar-track {
    background: #F9FAFB;
  }
  .chat-container::-webkit-scrollbar-thumb {
    background-color: #CBD5E0;
    border-radius: 20px;
  }
  .hidden-scroll {
    scrollbar-width: none;
  }
  .hidden-scroll::-webkit-scrollbar {
    display: none;
  }

  .bg-primary {
    background-color: var(--primary);
  }
  .hover\\:bg-primary-dark:hover {
    background-color: var(--primary-dark);
  }
  .text-primary {
    color: var(--primary);
  }
  .focus\\:ring-primary:focus {
    --tw-ring-color: var(--primary);
  }
  .bg-user {
    background-color: var(--user);
  }
  .border-user-border {
    border-color: var(--user-border);
  }
  .bg-bot {
    background-color: var(--bot);
  }
  .border-bot-border {
    border-color: var(--bot-border);
  }
`;
document.head.appendChild(styleElement);

createRoot(document.getElementById("root")!).render(<App />);
