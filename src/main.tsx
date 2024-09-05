import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { FormContextProvider } from "./context/FormContext.tsx";
import { DataContextProvider } from "./context/DataContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </FormContextProvider>
  </StrictMode>
);
