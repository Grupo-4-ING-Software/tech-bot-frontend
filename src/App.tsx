import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routers/router";

const App: React.FC = () => {
    return <RouterProvider router={router} />;
}

export default App;