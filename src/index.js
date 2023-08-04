import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import Search from "./Search";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <div className="App">
            <h1>Weather Search Engine</h1>
        <Search />
        </div>
    </StrictMode>
);