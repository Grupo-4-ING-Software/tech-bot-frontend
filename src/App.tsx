import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./pages/Landing"
import Chat from "./pages/Chat";
import ChatDiagram from "./pages/ChatDiagram";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<Landing />} /> */}
                <Route path="/" element={<Landing/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/chat" element={<Chat/>} />
                <Route path="/chat-diagram" element={<ChatDiagram />} />
                <Route path="/register" element={<SignUp />} />
                
            </Routes>
        </Router>
    );
}

export default App;