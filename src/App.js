import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/Create/Create";
import Notes from "./pages/Notes/Notes";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Notes></Notes>} />
                    <Route path="create" element={<Create />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
