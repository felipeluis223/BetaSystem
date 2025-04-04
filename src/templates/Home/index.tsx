import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        <section>
            <h2>Welcome in Home - test</h2>
        </section>
    );
};

export default HomeTemplate;