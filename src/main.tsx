import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Dashboard from "./pages/Dashboard.tsx";
import StudentsList from "./pages/StudentsList.tsx";
import Teachers from "./pages/Teachers.tsx";
import AuthProvider from "./providers/AuthProvider.tsx";
import Home from "./components/Home.tsx";
import PrivateRoutes from "./routers/PrivateRoutes.tsx";
import SignIn from "./pages/SignIn.tsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found. Please check your index.html file.");
}

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="students" element={<StudentsList />} />
            <Route path="teachers" element={<Teachers />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
