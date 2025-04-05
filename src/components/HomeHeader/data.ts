const menuItems = [
    {
        title: "Cadastro/Gestão",
        children: [
            "Clientes",
            "Projetos",
            "Pedidos",
            "Produtos",
            "Fornecedores",
            "Funcionários",
            "Materiais",
            "Perfis",
            "Acessórios",
            "Ambientes",
        ],
    },
    {
        title: "Produção",
        children: [
            "Usinagem",
            "Montagem",
            "Cortes",
            "Medidas",
            "Checklists",
            "Ordem de Produção",
            "Etapas",
            "Controle de Qualidade",
        ],
    },
    {
        title: "Comercial/Financeiro",
        children: ["Orçamentos", "Vendas", "Faturamento", "Pagamentos", "Custos"],
    },
    {
        title: "Relatórios",
        children: ["Relatórios", "Estatísticas", "Indicadores", "Histórico"],
    },
    {
        title: "Configurações",
        children: ["Usuários", "Permissões", "Parâmetros", "Logs", "Backup"],
    },
    {
        title: "Logística",
        children: ["Expedição", "Entregas", "Transportadoras", "Roteirização"],
    },
];

export default menuItems;