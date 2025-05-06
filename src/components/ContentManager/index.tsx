import { useEffect, useState } from "react";
import contentAPI from "../../services/getContentTable";
import ContentModal from "../ContentModal";
import ContentTable from "./table";
import { handleDelete } from "./contentHandlerDelete";
import { PropsData } from "../../services/types";
import { handleUpdate } from "./contentHandlerUpdate";
import ContentMessage from "../ContentMessage";
import ContentButton from "../ContentButton";

interface PropsRoute {
  route: string;
  title: string;
}

export default function ContentManager({ route, title }: PropsRoute) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<PropsData | null>(null);
  const [data, setData] = useState<PropsData[]>([]);

  const api = async () => {
    const response = await contentAPI({ route });

    // Tratamento de erro caso venha vazio (idealmente melhorar no back-end):
    if (response) {
      setData(response);
    };
    
  };

  useEffect(() => {
    api();
  }, [showModal, route]);

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <section style={{ padding: "2rem" }}>
      <div className="w-full h-[80px] flex justify-between">
        <h3 className="w-[50%] h-full text-[1.6rem] font-bold">Tabela de Cadastro de {title}</h3>
        <ContentButton />
      </div>


      
      {showModal && selectedUser && (
        <ContentModal
          key={selectedUser.id}
          selectedUser={selectedUser}
          onClose={closeModal}
        />
      )}

      {
        data.length === 0 && <ContentMessage message="Não temos registros na base de dados." />
      }
      
      {!showModal && data.length > 0 && (
        <ContentTable
          data={data}
          handleDelete={(id) => handleDelete(id, route, setData)}
          handleUpdate={(id) =>
            handleUpdate(id, data, setSelectedUser, setShowModal)
          }
        />
      )}
    </section>
  );
}
