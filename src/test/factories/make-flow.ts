import type { Edge, Node } from "@xyflow/react";

export type FlowData = {
  nodes: Node[];
  edges: Edge[];
};

export function makeFlow(): FlowData {
  const nodes: Node[] = [
    {
      id: "node_5067.592487952438",
      type: "evidence",
      position: {
        x: 100,
        y: 100,
      },
      data: {
        title: "Evidências Físicas",
        clues: [
          {
            id: "node_7756.8934862711",
            type: "image",
            title: "Colher ensanguentada",
            description: "Arma do crime encontrada na cena",
            url: "https://images.unsplash.com/photo-1619367300942-634bf2339af6?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Colher de metal com manchas de sangue",
            fileName: "colher_crime.jpg",
            createdAt: "2025-09-27T14:55:52.767Z",
            updatedAt: "2025-09-27T14:55:52.768Z",
          },
          {
            id: "node_721.8496004497632",
            type: "text",
            title: "Impressões digitais na colher",
            description: "Análise das impressões digitais encontradas na arma",
            content:
              "Impressões digitais parciais identificadas no cabo da colher. Padrões únicos sugerem mão direita dominante. Comparação com banco de dados em andamento. Qualidade das impressões: 85% - suficiente para identificação positiva.",
            createdAt: "2025-09-27T14:56:03.923Z",
            updatedAt: "2025-09-27T14:56:03.923Z",
          },
          {
            id: "node_3743.762426280458",
            type: "audio",
            title: "Gravação da perícia",
            description: "Áudio da análise técnica da cena do crime",
            url: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
            fileName: "pericia_audio.mp3",
            duration: 180,
            createdAt: "2025-09-27T14:56:23.499Z",
            updatedAt: "2025-09-27T14:56:23.499Z",
          },
        ],
      },
      measured: {
        width: 500,
        height: 484,
      },
      selected: false,
    },
    {
      id: "node_4335.076973508422",
      type: "evidence",
      position: {
        x: 800,
        y: 100,
      },
      data: {
        title: "Testemunhas",
        clues: [
          {
            id: "node_2202.2462324457447",
            type: "text",
            title: "Depoimento da vizinha",
            description: "Sra. Helena relata atividade suspeita",
            content:
              "A vizinha relatou ter ouvido gritos por volta das 22h15. Viu um homem alto, cerca de 1,80m, saindo apressadamente do local. Usava casaco escuro e carregava algo brilhante nas mãos. Comportamento muito nervoso e olhava constantemente para trás.",
            createdAt: "2025-09-27T14:56:47.848Z",
            updatedAt: "2025-09-27T14:56:47.848Z",
          },
          {
            id: "node_571.3550384596743",
            type: "video",
            title: "Vídeo da câmera de segurança",
            description: "Footage do suspeito fugindo da cena",
            url: "https://pub-e9468ecf9d6b4235b644aaf5c96fd467.r2.dev/V%C3%ADdeo%20sem%20t%C3%ADtulo.mp4",
            fileName: "camera_seguranca.mp4",
            duration: 45,
            createdAt: "2025-09-27T14:57:06.772Z",
            updatedAt: "2025-09-27T14:57:06.772Z",
          },
          {
            id: "node_1744.831923465423",
            type: "image",
            title: "Foto do suspeito",
            description: "Imagem capturada pela câmera de trânsito",
            url: "https://images.unsplash.com/photo-1619367300942-634bf2339af6?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Homem de casaco escuro caminhando rapidamente",
            fileName: "suspeito_transito.jpg",
            createdAt: "2025-09-27T14:57:21.386Z",
            updatedAt: "2025-09-27T14:57:21.386Z",
          },
        ],
      },
      measured: {
        width: 500,
        height: 484,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "node_4577.09114603838",
      type: "evidence",
      position: {
        x: 1500,
        y: 100,
      },
      data: {
        title: "Perfil Criminoso",
        clues: [
          {
            id: "node_2858.4957899123533",
            type: "text",
            title: "Análise comportamental",
            description: "Perfil psicológico do 'Assassino da Colher'",
            content:
              "Criminoso apresenta padrão obsessivo-compulsivo. Escolha da arma (colher) sugere simbolismo pessoal ou trauma. Modus operandi indica planejamento prévio e conhecimento das vítimas. Possível histórico de abuso doméstico ou negligência na infância.",
            createdAt: "2025-09-27T14:57:41.711Z",
            updatedAt: "2025-09-27T14:57:41.711Z",
          },
          {
            id: "node_4154.153272277923",
            type: "audio",
            title: "Gravação do interrogatório",
            description: "Áudio do interrogatório de suspeito anterior",
            url: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
            fileName: "interrogatorio_suspeito.mp3",
            duration: 320,
            createdAt: "2025-09-27T14:57:55.758Z",
            updatedAt: "2025-09-27T14:57:55.758Z",
          },
          {
            id: "node_6558.820626563185",
            type: "image",
            title: "Padrão de ataques",
            description: "Mapa visual dos locais dos crimes",
            url: "https://images.unsplash.com/photo-1619367300942-634bf2339af6?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Mapa com marcações dos locais dos ataques",
            fileName: "mapa_crimes.jpg",
            createdAt: "2025-09-27T14:58:09.077Z",
            updatedAt: "2025-09-27T14:58:09.077Z",
          },
        ],
      },
      measured: {
        width: 500,
        height: 484,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "node_1296.9624090493803",
      type: "evidence",
      position: {
        x: 350,
        y: 800,
      },
      data: {
        title: "Investigação Atual",
        clues: [
          {
            id: "node_1141.426097239454",
            type: "text",
            title: "Relatório policial",
            description: "Documento oficial da investigação em curso",
            content:
              "Investigação aponta para série de ataques com mesmo modus operandi. Cinco vítimas confirmadas, todas atacadas com utensílios de cozinha, principalmente colheres. Suspeito demonstra escalada de violência. Recomenda-se patrulhamento intensivo em áreas residenciais.",
            createdAt: "2025-09-27T14:58:35.074Z",
            updatedAt: "2025-09-27T14:58:35.074Z",
          },
          {
            id: "node_9592.916712273016",
            type: "video",
            title: "Entrevista com detetive",
            description: "Vídeo da coletiva de imprensa sobre o caso",
            url: "https://pub-e9468ecf9d6b4235b644aaf5c96fd467.r2.dev/V%C3%ADdeo%20sem%20t%C3%ADtulo.mp4",
            fileName: "coletiva_detetive.mp4",
            duration: 280,
            createdAt: "2025-09-27T14:58:50.280Z",
            updatedAt: "2025-09-27T14:58:50.280Z",
          },
          {
            id: "node_7231.8736536347515",
            type: "image",
            title: "Linha do tempo",
            description: "Cronologia detalhada dos eventos",
            url: "https://images.unsplash.com/photo-1619367300942-634bf2339af6?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Timeline visual dos crimes cometidos",
            fileName: "timeline_crimes.jpg",
            createdAt: "2025-09-27T14:59:16.643Z",
            updatedAt: "2025-09-27T14:59:16.643Z",
          },
          {
            id: "node_8330.401482211902",
            type: "audio",
            title: "Comunicação da central",
            description: "Áudio das comunicações policiais durante as buscas",
            url: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
            fileName: "radio_policial.mp3",
            duration: 195,
            createdAt: "2025-09-27T14:59:37.906Z",
            updatedAt: "2025-09-27T14:59:37.906Z",
          },
        ],
      },
      measured: {
        width: 500,
        height: 484,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "node_1720.9069464463423",
      type: "evidence",
      position: {
        x: 1050,
        y: 800,
      },
      data: {
        title: "Suspeitos",
        clues: [
          {
            id: "node_8688.034001491375",
            type: "text",
            title: "Joaquim Silva - Principal suspeito",
            description: "Ex-cozinheiro com histórico de violência",
            content:
              "Joaquim Silva, 42 anos, ex-funcionário de restaurante. Demitido há 3 meses por comportamento agressivo. Histórico de agressão doméstica. Vizinhos relatam comportamento errático. Endereço atual desconhecido. Procurado para interrogatório.",
            createdAt: "2025-09-27T14:59:53.094Z",
            updatedAt: "2025-09-27T14:59:53.094Z",
          },
          {
            id: "node_2122.0424653615364",
            type: "image",
            title: "Foto de identificação",
            description: "Retrato falado baseado nos depoimentos",
            url: "https://images.unsplash.com/photo-1619367300942-634bf2339af6?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Retrato falado do principal suspeito",
            fileName: "retrato_falado.jpg",
            createdAt: "2025-09-27T15:00:09.858Z",
            updatedAt: "2025-09-27T15:00:09.858Z",
          },
          {
            id: "node_9541.111125039813",
            type: "audio",
            title: "Gravação telefônica",
            description: "Ligação anônima com informações sobre o suspeito",
            url: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
            fileName: "denuncia_anonima.mp3",
            duration: 87,
            createdAt: "2025-09-27T15:00:26.153Z",
            updatedAt: "2025-09-27T15:00:26.153Z",
          },
          {
            id: "node_1301.1954881271981",
            type: "video",
            title: "Vídeo de segurança do trabalho",
            description: "Footage do suspeito em seu antigo emprego",
            url: "https://pub-e9468ecf9d6b4235b644aaf5c96fd467.r2.dev/V%C3%ADdeo%20sem%20t%C3%ADtulo.mp4",
            fileName: "joaquim_restaurante.mp4",
            duration: 156,
            createdAt: "2025-09-27T15:00:41.653Z",
            updatedAt: "2025-09-27T15:00:41.653Z",
          },
        ],
      },
      measured: {
        width: 500,
        height: 484,
      },
      selected: false,
      dragging: false,
    },
  ];

  const edges: Edge[] = [
    {
      style: {
        strokeWidth: 2,
      },
      markerEnd: {
        type: "arrowclosed",
      },
      reconnectable: "target",
      source: "node_5067.592487952438",
      sourceHandle: "evidence-node_5067.592487952438-source-right",
      target: "node_4335.076973508422",
      targetHandle: "evidence-node_4335.076973508422-target-left",
      id: "xy-edge__node_5067.592487952438evidence-node_5067.592487952438-source-right-node_4335.076973508422evidence-node_4335.076973508422-target-left",
    },
    {
      style: {
        strokeWidth: 2,
      },
      markerEnd: {
        type: "arrowclosed",
      },
      reconnectable: "target",
      source: "node_4335.076973508422",
      sourceHandle: "evidence-node_4335.076973508422-source-right",
      target: "node_4577.09114603838",
      targetHandle: "evidence-node_4577.09114603838-target-left",
      id: "xy-edge__node_4335.076973508422evidence-node_4335.076973508422-source-right-node_4577.09114603838evidence-node_4577.09114603838-target-left",
    },
    {
      style: {
        strokeWidth: 2,
      },
      markerEnd: {
        type: "arrowclosed",
      },
      reconnectable: "target",
      source: "node_5067.592487952438",
      sourceHandle: "evidence-node_5067.592487952438-source-bottom",
      target: "node_1296.9624090493803",
      targetHandle: "evidence-node_1296.9624090493803-target-top",
      id: "xy-edge__node_5067.592487952438evidence-node_5067.592487952438-source-bottom-node_1296.9624090493803evidence-node_1296.9624090493803-target-top",
    },
    {
      style: {
        strokeWidth: 2,
      },
      markerEnd: {
        type: "arrowclosed",
      },
      reconnectable: "target",
      source: "node_4335.076973508422",
      sourceHandle: "evidence-node_4335.076973508422-source-bottom",
      target: "node_1296.9624090493803",
      targetHandle: "evidence-node_1296.9624090493803-target-top",
      id: "xy-edge__node_4335.076973508422evidence-node_4335.076973508422-source-bottom-node_1296.9624090493803evidence-node_1296.9624090493803-target-top",
    },
    {
      style: {
        strokeWidth: 2,
      },
      markerEnd: {
        type: "arrowclosed",
      },
      reconnectable: "target",
      source: "node_4577.09114603838",
      sourceHandle: "evidence-node_4577.09114603838-source-bottom",
      target: "node_1720.9069464463423",
      targetHandle: "evidence-node_1720.9069464463423-target-top",
      id: "xy-edge__node_4577.09114603838evidence-node_4577.09114603838-source-bottom-node_1720.9069464463423evidence-node_1720.9069464463423-target-top",
    },
    {
      style: {
        strokeWidth: 2,
      },
      markerEnd: {
        type: "arrowclosed",
      },
      reconnectable: "target",
      source: "node_1296.9624090493803",
      sourceHandle: "evidence-node_1296.9624090493803-source-right",
      target: "node_1720.9069464463423",
      targetHandle: "evidence-node_1720.9069464463423-target-left",
      id: "xy-edge__node_1296.9624090493803evidence-node_1296.9624090493803-source-right-node_1720.9069464463423evidence-node_1720.9069464463423-target-left",
    },
  ];

  return {
    nodes,
    edges,
  };
}
