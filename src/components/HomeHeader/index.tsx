import menuItems from "./data";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function HomeHeader() {
    const nameMock: string = "Luis Felipe";

    return (
        <header className="w-full h-[10%] bg-[#040404] flex flex-row justify-between shadow-md relative z-50">
            <section className="w-[20%] h-[80px] flex items-center justify-center gap-[10px] font-bold text-white">
                <IoPersonCircleOutline className="text-[2rem] text-[#ffffff]" />
                <h3 className="text-lg text-[#22c55e]">{nameMock}</h3>
            </section>

            <nav className="w-[65%] h-[80px] flex items-center">
                <ul className="flex gap-6 text-white font-medium px-4 relative z-50">
                    {menuItems.map((menu) => (
                        <li key={menu.title} className="relative group">
                            <button className="cursor-pointer hover:text-[#22c55e] transition duration-200">
                                {menu.title}
                            </button>

                            {menu.children.length > 0 && (
                                <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-[#1f1f1f] text-sm p-2 rounded shadow-lg w-48 z-40 transform group-hover:translate-y-1 transition-all duration-150">
                                    {menu.children.map((subitem) => (
                                        <li
                                            key={subitem}
                                            className="py-1 px-2 hover:bg-[#16a34a] cursor-pointer rounded"
                                        >
                                            {subitem}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
