import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import contentAPI from "./content";

interface PropsRoute {
  route: string;
}

interface PropsData {
  createdAt: string;
  email: string;
  password: string;
  updatedAt: string;
  id: string;
  name: string;
}

export default function ContentManager({ route }: PropsRoute) {
  const [data, setData] = useState<PropsData[]>([]);

  const api = async () => {
    const result = await contentAPI({ route });
    if (result) {
      setData(result);
    }
  };

  // Função para excluir um usuário:
  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este usuário?");
    if (confirmDelete) {
      setData((prevData) => prevData.filter((user) => user.id !== id));
    }
  };

  // Função para atualizar um usuário:
  const handleUpdate = (id: string) => {
    alert(`Atualizar cadastro do usuário com ID: ${id}`);
  };

  return (
    <section style={{ padding: "2rem" }}>
      <Button variant="contained" color="primary" onClick={api}>
        Buscar Dados
      </Button>

      {data.length > 0 && (
        <TableContainer component={Paper} style={{ marginTop: "2rem" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Nome</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>ID</strong></TableCell>
                <TableCell><strong>Criado em</strong></TableCell>
                <TableCell><strong>Atualizado em</strong></TableCell>
                <TableCell><strong>Ações</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{new Date(user.createdAt).toLocaleString()}</TableCell>
                  <TableCell>{new Date(user.updatedAt).toLocaleString()}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        onClick={() => handleUpdate(user.id)}
                      >
                        Atualizar
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => handleDelete(user.id)}
                      >
                        Excluir
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </section>
  );
}
