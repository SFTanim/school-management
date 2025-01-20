import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Layout from "./pages/Layout.tsx";
import StudentsList from "./pages/StudentsList.tsx";
import Teachers from "./pages/Teachers.tsx";
import AuthProvider from "./providers/AuthProvider.tsx";
import AdminDashboard from "./components/adminDashboard/AdminDashboard.tsx";
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
          <Route path="/" element={<Layout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="students" element={<StudentsList />} />
            <Route path="teachers" element={<Teachers />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
