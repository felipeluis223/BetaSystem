import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Stack,
  } from "@mui/material";
  
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

  interface UserData {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  }
  
  interface ContentTableProps {
    data: UserData[];
    handleUpdate: (id: string) => void;
    handleDelete: (id: string) => void;
  }
  
  export default function ContentTable({ data, handleUpdate, handleDelete }: ContentTableProps) {
    return (
      <TableContainer component={Paper} style={{ marginTop: "2rem" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Nome</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
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
                <TableCell>{new Date(user.createdAt).toLocaleString()}</TableCell>
                <TableCell>{new Date(user.updatedAt).toLocaleString()}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <button
                      onClick={() => handleUpdate(user.id)}
                    >              
                      <FaRegEdit className="w-[40px] h-[20px] text-[16px] cursor-pointer hover:text-[green]" />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                    >
                      <FaRegTrashAlt className="w-[40px] h-[20px] text-[16px] cursor-pointer hover:text-[red]" />
                    </button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  