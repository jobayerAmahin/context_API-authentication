import { Outlet } from "react-router-dom";
import Navbar from "../Componenets/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;