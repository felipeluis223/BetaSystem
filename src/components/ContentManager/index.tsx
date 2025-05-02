import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import contentAPI from "./content";
import ContentModal from "../ContentModal";
import ContentTable from "./table";

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
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<PropsData | null>(null);
  const [data, setData] = useState<PropsData[]>([]);

  const api = async () => {
    console.log('chamou a api...')
    const result = await contentAPI({ route });

    // Tenho que realizar o tratamento de erro caso venha vazio... Back-end.
    if (result) {
      setData(result);
    }
    
  };

  useEffect(()=>{
    api();
  },[]);

  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este usuário?");
    if (confirmDelete) {
      setData((prevData) => prevData.filter((user) => user.id !== id));
    }
  };

  const handleUpdate = (id: string) => {
    const userToUpdate = data.find((user) => user.id === id);
    if (userToUpdate) {
      setSelectedUser(userToUpdate);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <section style={{ padding: "2rem" }}>
      {showModal && selectedUser && (
        <ContentModal key={selectedUser.id} selectedUser={selectedUser} onClose={closeModal} />
      )}

      {!showModal && data.length > 0 && (
        <ContentTable data={data} handleDelete={handleDelete} handleUpdate={handleUpdate} />
      )}
    </section>
  );
}
