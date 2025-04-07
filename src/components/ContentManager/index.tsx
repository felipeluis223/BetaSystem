interface PropsData {
    title: string;
    table: {
      data: {
        column: string;
        data: string;
      }[];
    };
  }
  
  // Gerenciar conteúdos vindo da API:
  export default function ContentManager({ data }: { data: PropsData }) {  
    return (
      <section>
        <h2>{data.title}</h2>
        <table>
          <thead>
            <tr>
              <th>Coluna</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {data.table.data.map((item, index) => (
              <tr key={index}>
                <td>{item.column}</td>
                <td>{item.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
  