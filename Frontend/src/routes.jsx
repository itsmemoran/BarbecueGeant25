import { createBrowserRouter } from "react-router-dom";
import EventPage from "./pages/EventPage.jsx";
import InscriptionPage from "./pages/InscriptionPage.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <EventPage />,
    },
    {   path: "/inscription", 
        element: <InscriptionPage />, 
    },
]);