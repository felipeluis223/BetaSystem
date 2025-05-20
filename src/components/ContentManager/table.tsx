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

interface ContentTableProps {
  data: Record<string, any>[];
  handleUpdate: (id: string) => void;
  handleDelete: (id: string) => void;
}

// Mapa de nomes legíveis para as colunas
const columnLabels: Record<string, string> = {
  id: "ID",
  name: "Nome",
  email: "Email",
  createdAt: "Criado em",
  updatedAt: "Atualizado em",
};

export default function ContentTable({
  data,
  handleUpdate,
  handleDelete,
}: ContentTableProps) {
  const tableHeaders = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <TableContainer component={Paper} style={{ marginTop: "2rem" }}>
      <Table>
        <TableHead>
          <TableRow>
            {tableHeaders.map((key) => (
              <TableCell key={key}>
                <strong>{columnLabels[key] || key}</strong>
              </TableCell>
            ))}
            <TableCell>
              <strong>Ações</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {tableHeaders.map((key) => (
                <TableCell key={key}>
                  {key.includes("At")
                    ? new Date(row[key]).toLocaleDateString("pt-BR")
                    : row[key]}
                </TableCell>
              ))}
              <TableCell>
                <Stack direction="row" spacing={1}>
                  <button onClick={() => handleUpdate(row.id)}>
                    <FaRegEdit className="w-[40px] h-[20px] text-[16px] cursor-pointer hover:text-[green]" />
                  </button>
                  <button onClick={() => handleDelete(row.id)}>
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
