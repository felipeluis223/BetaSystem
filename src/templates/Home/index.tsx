import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import HomeHeader from "../../components/HomeHeader";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { jwtDecode } from "jwt-decode";
import { clearToken } from "../../redux/authSlice";

function HomeTemplate() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    
    const token = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        const redirectToLogin = () => {
            dispatch(clearToken()); // Limpa o token do Redux
            if (location.pathname !== "/") {
                navigate("/");
            }
        };

        if (!token) {
            redirectToLogin();
        } else {
            try {
                const decodedToken: any = jwtDecode(token);
                const currentTime = Math.floor(Date.now() / 1000);

                if (decodedToken.exp && decodedToken.exp < currentTime) {
                    redirectToLogin();
                }
            } catch (error) {
                console.error("Erro na decodificação do token", error);
                redirectToLogin();
            }
        }
    }, [token, navigate, location, dispatch]);

    return (
        <section className="w-full h-screen flex flex-row">
            <HomeHeader />

            <section className="w-[70%] h-[90%]">
                <Outlet />
            </section>
        </section>
    );
}

export default HomeTemplate;
