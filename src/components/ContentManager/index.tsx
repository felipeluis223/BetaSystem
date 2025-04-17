import { useState } from "react";
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

// Gerenciar conteúdos vindo da API:
export default function ContentManager({ route }: PropsRoute) {
  const [data, setData] = useState<PropsData[]>([]); // Agora é um array

  const api = async () => {
    const result = await contentAPI({ route });
    if (result) {
      setData(result); // Assume que result é PropsData[]
    }
  };

  return (
    <section>
      <button onClick={api}>chamar</button>

      {data.length > 0 && (
        <div>
          {data.map((user, index) => (
            <div key={index} style={{ marginBottom: "1rem" }}>
              <h2>Nome: {user.name}</h2>
              <p>Email: {user.email}</p>
              <p>ID: {user.id}</p>
              <p>Criado em: {user.createdAt}</p>
              <p>Atualizado em: {user.updatedAt}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
