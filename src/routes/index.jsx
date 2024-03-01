import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../page/LoginPage";
import { RegisterPage } from "../page/RegisterPage";
import { DashBoardPage } from "../page/DashBoardPage";
import { ErrorPage } from "../page/ErrorPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { CreateTechPageModal } from "../page/CreateTechPageModal";


export const RoutesMain = () => {
    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>

            <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<DashBoardPage><CreateTechPageModal/><DashBoardPage/></DashBoardPage>} />
              
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};