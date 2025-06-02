import { useEffect, useState } from "react";
import contentAPI from "../../services/getContentTable";
import ContentModal from "../ContentModal"; // Modal genérico reutilizável
import ContentTable from "./table";
import { handleDelete } from "./contentHandlerDelete";
import { PropsData } from "../../services/types";
import { handleUpdate } from "./contentHandlerUpdate";
import ContentMessage from "../ContentMessage";
import ContentButton from "../ContentButton";
import ContentModalCreateForm from "../ContentModalCreateForm";

interface PropsRoute {
  route: string;
  title: string;
  describle: string;
}

export default function ContentManager({ route, title, describle }: PropsRoute) {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<PropsData | null>(null);
  const [data, setData] = useState<PropsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFormModal, setShowFormModal] = useState(false);
  

  const fetchData = async () => {
    setLoading(true);
    const response = await contentAPI({ route });
    setData(response || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [showModal, route]);

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const closeModalForm = () => {
    setShowModal(false);
  };

  const openCreateFormModal = () => {
    setSelectedUser(null); // Novo item
    setShowFormModal(true);
  };

  return (
    <section style={{ padding: "2rem" }}>
      <div className="w-full h-[80px] flex justify-between items-start mb-4">
        <div className="w-[70%]">
          <h3 className="text-[1.6rem] font-bold">Tabela de Cadastro de {title}</h3>
          <span className="text-[16px] text-[#808080]">{describle}</span>
        </div>
        <ContentButton onClick={openCreateFormModal} />
      </div>
      
      {showFormModal && (
        <ContentModalCreateForm onClose={closeModalForm} />
      )}

      {showModal && (
        <ContentModal
          key={selectedUser?.id || "new"}
          selectedUser={selectedUser}
          onClose={closeModal}
          type={route}
        />
      )}

      {loading ? (
        <ContentMessage message="Carregando dados..." />
      ) : data.length === 0 ? (
        <ContentMessage message="Não temos registros na base de dados." />
      ) : (
        <ContentTable
          data={data}
          handleDelete={async (id) => {
            await handleDelete(id, route);
            fetchData();
          }}
          handleUpdate={(id) =>
            handleUpdate(id, data, setSelectedUser, setShowModal)
          }
        />
      )}
    </section>
  );
}
