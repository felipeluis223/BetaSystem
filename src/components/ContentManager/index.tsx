interface PropsData {
    title: string,
    table: {
        columns: string[];
    }
};

// Gerenciar conteúdos vindo da API:
export default function ContentManager({ data }: { data: PropsData }){
    const dataMock:PropsData = {
        title: "Tabela de funcionários",
        table: {
            columns: ["id", "name", "cpf", "rg", "Email", "phone"]
        }
    };
    
    return(
        <section>

        </section>
    );
};