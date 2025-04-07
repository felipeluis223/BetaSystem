const menuItems = [
    {
      title: "Cadastro/Gestão",
      children: [
        { name: "Clientes", route: "/home/clientes" },
        { name: "Projetos", route: "/home/projetos" },
        { name: "Pedidos", route: "/home/pedidos" },
        { name: "Produtos", route: "/home/produtos" },
        { name: "Fornecedores", route: "/home/fornecedores" },
        { name: "Funcionários", route: "/home/funcionarios" },
        { name: "Materiais", route: "/home/materiais" },
        { name: "Perfis", route: "/home/perfis" },
        { name: "Acessórios", route: "/home/acessorios" },
        { name: "Ambientes", route: "/home/ambientes" },
      ],
    },
    {
      title: "Produção",
      children: [
        { name: "Usinagem", route: "/home/usinagem" },
        { name: "Montagem", route: "/home/montagem" },
        { name: "Cortes", route: "/home/cortes" },
        { name: "Medidas", route: "/home/medidas" },
        { name: "Checklists", route: "/home/checklists" },
        { name: "Ordem de Produção", route: "/home/ordem-producao" },
        { name: "Etapas", route: "/home/etapas" },
        { name: "Controle de Qualidade", route: "/home/qualidade" },
      ],
    },
    {
      title: "Comercial/Financeiro",
      children: [
        { name: "Orçamentos", route: "/home/orcamentos" },
        { name: "Vendas", route: "/home/vendas" },
        { name: "Faturamento", route: "/home/faturamento" },
        { name: "Pagamentos", route: "/home/pagamentos" },
        { name: "Custos", route: "/home/custos" },
      ],
    },
    {
      title: "Relatórios",
      children: [
        { name: "Relatórios", route: "/home/relatorios" },
        { name: "Estatísticas", route: "/home/estatisticas" },
        { name: "Indicadores", route: "/home/indicadores" },
        { name: "Histórico", route: "/home/historico" },
      ],
    },
    {
      title: "Configurações",
      children: [
        { name: "Usuários", route: "/home/usuarios" },
        { name: "Permissões", route: "/home/permissoes" },
        { name: "Parâmetros", route: "/home/parametros" },
        { name: "Logs", route: "/home/logs" },
        { name: "Backup", route: "/home/backup" },
      ],
    },
    {
      title: "Logística",
      children: [
        { name: "Expedição", route: "/home/expedicao" },
        { name: "Entregas", route: "/home/entregas" },
        { name: "Transportadoras", route: "/home/transportadoras" },
        { name: "Roteirização", route: "/home/roteirizacao" },
      ],
    },
  ];
  
  export default menuItems;
  