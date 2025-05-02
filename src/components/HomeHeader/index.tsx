import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from "@mui/material";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiExit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../../redux/authSlice";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import menuItems from "./data";

export default function HomeHeader() {
    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.auth.token);

    let nameMock = "Usuário";
    if (token && typeof token === "string") {
        try {
            const decodedToken: any = jwtDecode(token);
            console.log('dados: ', decodedToken);
            nameMock = decodedToken?.name || "Usuário";
        } catch (error) {
            console.error("Erro ao decodificar o token:", error);
        }
    }

    const logout = () => {
        dispatch(clearToken());
    };

    // Controle dos submenus
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [subMenuItems, setSubMenuItems] = useState<{ name: string, route: string }[]>([]);

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, children: any[]) => {
        setAnchorEl(event.currentTarget);
        setSubMenuItems(children);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSubMenuItems([]);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "#040404", boxShadow: 3, zIndex: 50 }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                
                {/* Perfil */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IoPersonCircleOutline size={32} color="#ffffff" />
                    <Typography variant="h6" sx={{ color: "#22c55e", fontWeight: "bold" }}>
                        {nameMock}
                    </Typography>
                </Box>

                {/* Menu de Navegação */}
                <Box sx={{ display: "flex", gap: 2 }}>
                    {menuItems.map((menu) => (
                        <div key={menu.title}>
                            <Button
                                onClick={(e) => handleMenuOpen(e, menu.children)}
                                sx={{ color: "#ffffff", fontWeight: "500", "&:hover": { color: "#22c55e" } }}
                            >
                                {menu.title}
                            </Button>
                        </div>
                    ))}
                </Box>

                {/* Botão Logout */}
                <Button
                    onClick={logout}
                    sx={{ color: "#ffffff", fontWeight: "bold", display: "flex", gap: 1, "&:hover": { color: "#22c55e" } }}
                >
                    Sair
                    <BiExit size={20} />
                </Button>
            </Toolbar>

            {/* Submenu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                MenuListProps={{ onMouseLeave: handleMenuClose }}
                sx={{ mt: 1 }}
            >
                {subMenuItems.map((subitem) => (
                    <MenuItem
                        key={subitem.route}
                        component={Link}
                        to={subitem.route}
                        onClick={handleMenuClose}
                        sx={{ "&:hover": { backgroundColor: "#16a34a", color: "#fff" } }}
                    >
                        {subitem.name}
                    </MenuItem>
                ))}
            </Menu>
        </AppBar>
    );
}
