import menuItems from "./data";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiExit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../../redux/authSlice";
import { jwtDecode } from 'jwt-decode';

export default function HomeHeader() {
    const dispatch = useDispatch();

    const token = useSelector((state: RootState) => state.auth.token);
    const decodedToken: any = jwtDecode(token);
    const nameMock: string = decodedToken?.name || null;

    const logout = ()=>{
        dispatch(clearToken()); // Limpando o token da aplicação.
    }


    return (
        <header className="w-full bg-[#040404] flex flex-row justify-between shadow-md relative z-50">
            <section className="w-[20%] h-[70px] flex items-center justify-center gap-[10px] font-bold text-white">
                <IoPersonCircleOutline className="text-[2rem] text-[#ffffff]" />
                <h3 className="text-lg text-[#22c55e]">{nameMock}</h3>
            </section>

            <nav className="w-[55%] h-[70px] flex items-center">
                <ul className="flex gap-6 text-white font-medium px-4 relative z-50">
                    {menuItems.map((menu) => (
                        <li key={menu.title} className="relative group">
                            <button className="cursor-pointer hover:text-[#22c55e] transition duration-200">
                                {menu.title}
                            </button>

                            {menu.children.length > 0 && (
                                <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-[#1f1f1f] text-sm p-2 rounded shadow-lg w-48 z-40 transform group-hover:translate-y-1 transition-all duration-150">
                                    {menu.children.map((subitem) => (
                                        <li key={subitem.route}>
                                            <Link
                                                to={subitem.route}
                                                className="block py-1 px-2 hover:bg-[#16a34a] cursor-pointer rounded"
                                            >
                                                {subitem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
                <button onClick={logout} className="w-[10%] text-[#ffffff] font-bold cursor-pointer text-md flex items-center gap-[10px] hover:text-[#22c55e] transition duration-200">
                    Sair
                    <BiExit className="text-[20px]" />
                </button>
        </header>
    );
}
