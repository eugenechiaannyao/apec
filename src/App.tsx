import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";
import AuthLayout from "./components/layout/AuthLayout";
import Login from "./pages/userAuth/Login";
import Signup from "./pages/userAuth/Signup";
import ProblemDetailsPage from "./pages/marketplace/ProblemDetailsPage";
import CollaborationDetailsPage from "./pages/marketplace/CollaborationDetailsPage";
import HomePage from "./pages/home/HomePage";
import ChatPage from "./pages/chat/ChatPage";
import React, { useEffect, useState } from "react";
import CompanyProfilePage from "./pages/directory/CompanyProfilePage";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = () => {
            const isAuthenticated = localStorage.getItem("token") !== null;
            setIsAuthenticated(isAuthenticated);
        };

        checkAuthentication();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="/" element={<HomePage />} />
                </Route>
                <Route path="/" element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
                <Route path="/" element={<MainLayout />}>
                    <Route 
                        path='chat/:id' 
                        element={<ChatPage />} 
                    />
                    <Route
                        path="marketplace/problem/:id"
                        element={<ProblemDetailsPage />}
                    />
                    <Route
                        path="marketplace/collaboration/:id"
                        element={<CollaborationDetailsPage />}
                    />
                    <Route
                        path="profile/:id"
                        element={<CompanyProfilePage />}
                    />
                    {isAuthenticated && routes}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
