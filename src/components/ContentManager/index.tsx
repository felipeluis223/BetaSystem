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
  describle: string;
}

export default function ContentManager({ route, title, describle }: PropsRoute) {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<PropsData | null>(null);
  const [data, setData] = useState<PropsData[]>([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar dados da API
  const fetchData = async () => {
    setLoading(true);
    const response = await contentAPI({ route });
    if (response) {
      setData(response);
    } else {
      setData([]);
    }
    setLoading(false);
  };

  // Recarrega dados sempre que a rota muda ou o modal fecha
  useEffect(() => {
    fetchData();
  }, [showModal, route]);

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const openCreateModal = () => {
    console.log('click');
    setSelectedUser(null); // Garante que é criação
    setShowModal(true);
  };

  return (
    <section style={{ padding: "2rem" }}>
      <div className="w-full h-[80px] flex justify-between items-start mb-4">
        <div className="w-[70%]">
          <h3 className="text-[1.6rem] font-bold">Tabela de Cadastro de {title}</h3>
          <span className="text-[16px] text-[#808080]">{describle}</span>
        </div>
        <ContentButton onClick={openCreateModal} />
      </div>

      {/* Modal de criação/edição */}
      {showModal && (
        <ContentModal
          key={selectedUser?.id || "new"}
          selectedUser={selectedUser}
          onClose={closeModal}
        />
      )}
      

      {/* Mensagens de carregamento ou ausência de dados */}
      {loading ? (
        <ContentMessage message="Carregando dados..." />
      ) : data.length === 0 ? (
        <ContentMessage message="Não temos registros na base de dados." />
      ) : (
        <ContentTable
          data={data}
          handleDelete={async (id) => {
            await handleDelete(id, route);
            fetchData(); // Recarrega após deletar
          }}
          handleUpdate={(id) =>
            handleUpdate(id, data, setSelectedUser, setShowModal)
          }
        />
      )}
    </section>
  );
}
