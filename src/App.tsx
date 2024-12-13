import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routers/router";
import { DiagramProvider } from './context/DiagramContext';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
    

    return <DiagramProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
    </DiagramProvider>;
}

export default App;