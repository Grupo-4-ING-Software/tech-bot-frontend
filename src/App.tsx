import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routers/router";
import { DiagramProvider } from './context/DiagramContext';

const App: React.FC = () => {
    return <DiagramProvider>
        <RouterProvider router={router} />
    </DiagramProvider>;
}

export default App;