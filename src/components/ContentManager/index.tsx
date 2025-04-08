import contentAPI from "./content";

interface PropsData {
    title: string;
    table: {
      data: {
        column: string;
        data: string;
      }[];
    };
  }
  

interface PropsRoute {
  route: string
}
  // Gerenciar conteúdos vindo da API:
  export default function ContentManager({ route }: { data: PropsRoute }) {
  const api = async()=>{
    const res = await contentAPI({route: route});
    console.log('res: ', res)
  }  
  
    return (
      <section>
        <button onClick={api}>chamar</button>
        {/* <h2>{data.title}</h2>
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
        </table> */}
      </section>
    );
  }
  