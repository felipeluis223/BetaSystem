import { useEffect, useState } from "react";
import contentAPI from "./content";
import ContentModal from "../ContentModal";
import ContentTable from "./table";
import { handleDelete, handleUpdate } from "./contentHandlers";
import { PropsData } from "./types";

interface PropsRoute {
  route: string;
}

export default function ContentManager({ route }: PropsRoute) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<PropsData | null>(null);
  const [data, setData] = useState<PropsData[]>([]);

  const api = async () => {
    console.log("chamou a api...");
    const result = await contentAPI({ route });

    // Tratamento de erro caso venha vazio (idealmente melhorar no back-end)
    if (result) {
      setData(result);
    }
  };

  useEffect(() => {
    api();
  }, [showModal]);

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <section style={{ padding: "2rem" }}>
      {showModal && selectedUser && (
        <ContentModal
          key={selectedUser.id}
          selectedUser={selectedUser}
          onClose={closeModal}
        />
      )}

      {!showModal && data.length > 0 && (
        <ContentTable
          data={data}
          handleDelete={(id) => handleDelete(id, setData)}
          handleUpdate={(id) =>
            handleUpdate(id, data, setSelectedUser, setShowModal)
          }
        />
      )}
    </section>
  );
}
