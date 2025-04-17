import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HomeHeader from "../../components/HomeHeader";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function HomeTemplate() {
    const navigate = useNavigate();
    const token = useSelector((state: RootState) => state.auth.token);
    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, [token, navigate]);

    return (
        <section className="w-full h-screen">
            <HomeHeader />
            <section className="w-full h-[90%]">
                <Outlet />
            </section>
        </section>
    );
}

export default HomeTemplate;
