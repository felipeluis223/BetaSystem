import {
    AppBar,
    Toolbar,
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
            nameMock = decodedToken?.name || "Usuário";
        } catch (error) {
            console.error("Erro ao decodificar o token:", error);
        }
    }

    const logout = () => {
        dispatch(clearToken());
    };

    // Estado de abertura para cada item de menu
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

    const handleToggle = (title: string) => {
        setOpenMenus((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <Box sx={{ display: "flex" }}>
            {/* Drawer Lateral */}
            <Drawer
                variant="permanent"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: 240,
                        boxSizing: "border-box",
                        backgroundColor: "#040404",
                        color: "#ffffff",
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ p: 2 }}>
                    {/* Perfil */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                        <IoPersonCircleOutline size={32} color="#ffffff" />
                        <Typography variant="h6" sx={{ color: "#22c55e", fontWeight: "bold" }}>
                            {nameMock}
                        </Typography>
                    </Box>

                    <Divider sx={{ borderColor: "#ffffff20", mb: 2 }} />

                    {/* Menu com Expansão */}
                    <List>
                        {menuItems.map((menu) => (
                            <Box key={menu.title}>
                                <ListItemButton onClick={() => handleToggle(menu.title)} sx={{ pl: 1 }}>
                                    <ListItemText
                                        primary={menu.title}
                                        primaryTypographyProps={{ fontWeight: "bold", color: "#22c55e" }}
                                    />
                                    {openMenus[menu.title] ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={openMenus[menu.title]} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {menu.children.map((child) => (
                                            <ListItem
                                                button
                                                key={child.route}
                                                component={Link}
                                                to={child.route}
                                                sx={{
                                                    pl: 4,
                                                    "&:hover": {
                                                        backgroundColor: "#16a34a",
                                                        color: "#fff",
                                                    },
                                                }}
                                            >
                                                <ListItemText primary={child.name} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>
                            </Box>
                        ))}
                    </List>
                </Box>

                {/* Botão de Logout fixo no rodapé */}
                <Box sx={{ position: "absolute", bottom: 20, width: "100%", px: 2 }}>
                    <Button
                        onClick={logout}
                        fullWidth
                        sx={{
                            color: "#ffffff",
                            backgroundColor: "#df0000",
                            fontWeight: "bold",
                            display: "flex",
                            justifyContent: "center",
                            gap: 1,
                            "&:hover": { backgroundColor: "#b30000" },
                        }}
                    >
                        Sair
                        <BiExit size={20} />
                    </Button>
                </Box>
            </Drawer>

            {/* AppBar Superior (opcional) */}
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#000", boxShadow: 1 }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Sistema
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Conteúdo principal */}
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
                {/* Conteúdo da página */}
            </Box>
        </Box>
    );
}
