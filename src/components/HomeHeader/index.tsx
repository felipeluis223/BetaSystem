import {
    Typography,
    Button,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Collapse,
    Divider,
} from "@mui/material";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiExit } from "react-icons/bi";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../../redux/authSlice";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import menuItems from "./data";
import { RootState } from "../../redux/store";

export default function HomeHeader() {
    const dispatch = useDispatch();
    const location = useLocation();
    const token = useSelector((state: RootState) => state.auth.token);

    let nameMock = "Usuário";
    if (token && typeof token === "string") {
        try {
            const decodedToken: any = jwtDecode(token);
            nameMock = decodedToken?.name || "Usuário";
        } catch (error) {
            console.error("Erro ao decodificar o token:", error);
        }
    }

    const logout = () => {
        dispatch(clearToken());
    };

    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

    const handleToggle = (title: string) => {
        setOpenMenus((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <Box sx={{ display: "flex" }}>
            <Drawer
                variant="permanent"
                sx={{
                    width: 290,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: 290,
                        boxSizing: "border-box",
                        backgroundColor: "#f2f2f2", // Azul escuro
                        color: "#000000",
                    },
                }}
            >
                <Box sx={{ p: 2, mt: 2 }}>
                    {/* Perfil */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                        <IoPersonCircleOutline size={32} color="#000000" />
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000000" }}>
                            {nameMock}
                        </Typography>
                    </Box>

                    <Divider sx={{ borderColor: "#00000033", mb: 2 }} />

                    {/* Menu lateral com subitens */}
                    <List>
                        {menuItems.map((menu) => (
                            <Box key={menu.title}>
                                <ListItemButton onClick={() => handleToggle(menu.title)} sx={{ pl: 1 }}>
                                    <ListItemText
                                        primary={menu.title}
                                        primaryTypographyProps={{ fontWeight: "bold", color: "#000000" }}
                                    />
                                    {openMenus[menu.title] ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <Collapse in={openMenus[menu.title]} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {menu.children.map((child) => {
                                            const isActive = location.pathname === child.route;
                                            return (
                                                <ListItem
                                                    key={child.route}
                                                    disablePadding
                                                    sx={{
                                                        backgroundColor: isActive ? "#16a34a" : "transparent",
                                                        color: isActive ? "#000000" : "#000000",
                                                        "&:hover": {
                                                            backgroundColor: "#1e9d4c",
                                                            color: "#000000",
                                                        },
                                                    }}
                                                >
                                                    <ListItemButton
                                                        component={Link}
                                                        to={child.route}
                                                        sx={{ pl: 4 }}
                                                    >
                                                        <ListItemText primary={child.name} />
                                                    </ListItemButton>
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                </Collapse>
                            </Box>
                        ))}
                    </List>
                </Box>

                {/* Logout fixo no rodapé */}
                <Box sx={{ position: "absolute", bottom: 20, width: "100%", px: 2 }}>
                    <Button
                        onClick={logout}
                        fullWidth
                        sx={{
                            color: "#ffffff",
                            backgroundColor: "#1f1f1f",
                            fontWeight: "bold",
                            display: "flex",
                            justifyContent: "center",
                            gap: 1,
                            "&:hover": { backgroundColor: "#000000" },
                        }}
                    >
                        Sair
                        <BiExit size={20} />
                    </Button>
                </Box>
            </Drawer>
        </Box>
    );
}
