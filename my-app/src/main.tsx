import "bulma/css/bulma.min.css";
import "./index.css";

import { createRoot } from "react-dom/client";
import { Routes } from "@generouted/react-router";

const container = document.getElementById("app")!;
createRoot(container).render(<Routes />);
