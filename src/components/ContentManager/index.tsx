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

  // Busca dados da API com base na rota recebida via props
  const fetchData = async () => {
    const response = await contentAPI({ route });
    if (response) {
      setData(response);
    } else {
      setData([]); // Garante limpeza da tabela se API falhar
    }
  };

  // Recarrega dados sempre que a rota muda ou o modal é fechado
  useEffect(() => {
    fetchData();
  }, [showModal, route]);

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <section style={{ padding: "2rem" }}>
      <div className="w-full h-[80px] flex justify-between items-start mb-4">
        <div className="w-[70%]">
          <h3 className="text-[1.6rem] font-bold">Tabela de Cadastro de {title}</h3>
          <span className="text-[16px] text-[#808080]">{describle}</span>
        </div>
        <ContentButton />
      </div>

      {/* Modal de edição */}
      {showModal && selectedUser && (
        <ContentModal
          key={selectedUser.id}
          selectedUser={selectedUser}
          onClose={closeModal}
        />
      )}

      {/* Mensagem de dados vazios */}
      {data.length === 0 && (
        <ContentMessage message="Não temos registros na base de dados." />
      )}

      {/* Tabela de dados */}
      {!showModal && data.length > 0 && (
        <ContentTable
          data={data}
          handleDelete={(id) => handleDelete(id, route, setData)}
          handleUpdate={(id) => handleUpdate(id, data, setSelectedUser, setShowModal)}
        />
      )}
    </section>
  );
}
