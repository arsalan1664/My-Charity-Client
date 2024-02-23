import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { useContext, useEffect } from "react";
import { MyContext } from "./context/MyContext";
import Admin from "./components/Admin";
import { ProtectedRoutesForNonAdmin } from "./components/ProtectedRoutes";
import { ProtectedRoutesForAdmin } from "./components/ProtectedRoutes";
import AdminSetting from "./components/AdminSetting";
import AdminDashboard from "./components/AdminDashboard";
import Thanku from "./components/Thanku";
import { Toaster } from "sonner";

function App() {
  const { isLogin, setIsLogin } = useContext(MyContext);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsLogin(true);
    }
  }, [isLogin]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/panel"
          element={
            <ProtectedRoutesForNonAdmin>
              <Login />
            </ProtectedRoutesForNonAdmin>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoutesForAdmin>
              <Admin>
                {" "}
                <AdminDashboard />
              </Admin>
            </ProtectedRoutesForAdmin>
          }
        />

        <Route
          path="/setting"
          element={
            <ProtectedRoutesForAdmin>
              <Admin>
                <AdminSetting />
              </Admin>
            </ProtectedRoutesForAdmin>
          }
        />

        <Route path="/thankyou" element={<Thanku />} />
      </Routes>
      <Toaster position="top-right" expand={false} richColors />
    </BrowserRouter>
  );
}

export default App;
