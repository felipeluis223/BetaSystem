import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HomeHeader from "../../components/HomeHeader";

function HomeTemplate(){

    const navigate = useNavigate();
    
    // Verificando se há token no localStorage para permitir o acesso:
    useEffect(() => {
        const getToken = () => {
            const token = localStorage.getItem("tokenBeta");
            if (!token) {
                navigate("/");
            };
        };

    getToken();
    }, [navigate]);
    
    return (
        <section className="w-full h-screen">
            <HomeHeader />
            <section className="w-full h-[90%]">
                <Outlet />
            </section>
        </section>
    );
};

export default HomeTemplate;