export interface ChapterContribution {
  num: number;
  titulo: string;
  secao_id: number;
  secao_nome: string;
  resumo_breve: string;
  decs_mesh: string[];
}

export interface PublicationItem {
  ano: string;
  titulo: string;
  periodico: string;
  doi?: string;
}

export interface AuthorProfile {
  id: string;
  slug: string;
  nome: string;
  crm: string;
  cargo: string;
  instituicao: string;
  cidade_estado: string;
  destaque: string;
  foto_url: string;
  bio_completa: string;
  titulacao_academica: string[];
  cargos_sociedades: string[];
  linhas_pesquisa: string[];
  especialidades: string[];
  capitulos_tratado: ChapterContribution[];
  publicacoes_destaque: PublicationItem[];
  lattes_url?: string;
  orcid?: string;
}

export const AUTHORS_DIRECTORY: AuthorProfile[] = [
  {
    id: "1",
    slug: "edson-pudles",
    nome: "Dr. Edson Pudles",
    crm: "CRM-PR 8.421 / RQE 3.120",
    cargo: "Editor-Chefe / SBC",
    instituicao: "Sociedade Brasileira de Coluna (SBC)",
    cidade_estado: "Curitiba - PR, Brasil",
    destaque: "Coordenação Editorial Geral de 109 Capítulos",
    foto_url: "/assets/edson-pudles.png",
    bio_completa:
      "Presidente de Honra da Sociedade Brasileira de Coluna (SBC) e uma das maiores autoridades da América Latina no tratamento cirúrgico de deformidades complexas da coluna vertebral e planejamento cirúrgico tridimensional. Liderou a concepção, padronização científica e coordenação dos mais de 200 especialistas que colaboraram na redação dos 109 capítulos deste Tratado Oficial da SBC.",
    titulacao_academica: [
      "Membro Emérito da Sociedade Brasileira de Coluna (SBC)",
      "Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT)",
      "Membro Ativo da Scoliosis Research Society (SRS)",
      "Fellowship em Cirurgia da Coluna Vertebral - Institut Calot, França",
    ],
    cargos_sociedades: [
      "Presidente da Sociedade Brasileira de Coluna (Gestão Histórica)",
      "Coordenador da Comissão de Ensino e Treinamento em Cirurgia Espinhal (SBC)",
      "Editor-Chefe do Tratado Oficial de Cirurgia da Coluna Vertebral",
    ],
    linhas_pesquisa: [
      "Historiografia e Evolução das Técnicas Espinhais no Brasil",
      "Padronização de Condutas e Diretrizes de Segurança Cirúrgica",
      "Deformidades Vertebrais Graves e Osteotomias Corretivas",
    ],
    especialidades: [
      "Deformidades Complexas",
      "Liderança Editorial",
      "Diretrizes Clínicas SBC",
      "Cirurgia Reconstrutiva",
    ],
    capitulos_tratado: [
      {
        num: 1,
        titulo: "Histórico da Cirurgia da Coluna Vertebral no Brasil",
        secao_id: 1,
        secao_nome: "Histórico e Fundamentos",
        resumo_breve: "Evolução dos procedimentos cirúrgicos, pioneirismo das escolas ortopédicas e consolidação da SBC como sociedade de especialidade.",
        decs_mesh: ["História da Medicina", "Cirurgia da Coluna", "Ortopedia"],
      },
      {
        num: 2,
        titulo: "Princípios Éticos e Aspectos Médico-Legais na Cirurgia Espinhal",
        secao_id: 1,
        secao_nome: "Histórico e Fundamentos",
        resumo_breve: "Termo de Consentimento Livre e Esclarecido, documentação pré-operatória, gerenciamento de risco e conduta profissional.",
        decs_mesh: ["Bioética", "Legislação Médica", "Segurança do Paciente"],
      },
      {
        num: 25,
        titulo: "Planejamento Pré-Operatório em Deformidades Complexas",
        secao_id: 3,
        secao_nome: "Deformidades Vertebrais",
        resumo_breve: "Análise radiográfica panorâmica, parâmetros espinopélvicos, cálculo de osteotomias e simulação tridimensional.",
        decs_mesh: ["Escoliose", "Cifose", "Osteotomia"],
      },
    ],
    publicacoes_destaque: [
      {
        ano: "2024",
        titulo: "Consenso Brasileiro em Cirurgia de Deformidade da Coluna no Adulto",
        periodico: "Coluna/Columna",
        doi: "10.1590/s1808-18512024000100004",
      },
      {
        ano: "2022",
        titulo: "Surgical safety and complication avoidance in complex spine osteotomies",
        periodico: "Spine Deformity Journal",
        doi: "10.1007/s43390-022-00512-x",
      },
    ],
    lattes_url: "http://lattes.cnpq.br/1234567890123456",
    orcid: "0000-0002-1234-5678",
  },
  {
    id: "2",
    slug: "helton-defino",
    nome: "Dr. Helton Defino",
    crm: "CRM-SP 32.145 / RQE 12.809",
    cargo: "Editor / FMRP-USP",
    instituicao: "Faculdade de Medicina de Ribeirão Preto - USP",
    cidade_estado: "Ribeirão Preto - SP, Brasil",
    destaque: "Pioneiro da Fixação Pedicular e Biomecânica no Brasil",
    foto_url: "/assets/helton-defino.png",
    bio_completa:
      "Professor Titular do Departamento de Ortopedia e Traumatologia da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP). É uma das maiores referências mundiais no estudo da biomecânica da coluna vertebral, resistência de parafusos pediculares, mecanismos de consolidação da artrodese e tratamento do traumatismo raquimedular.",
    titulacao_academica: [
      "Professor Titular de Ortopedia e Traumatologia - FMRP-USP",
      "Livre-Docente em Cirurgia da Coluna Vertebral pela USP",
      "Doutor em Medicina pela Faculdade de Medicina de Ribeirão Preto - USP",
      "Membro Ativo da Cervical Spine Research Society (CSRS) e SRS",
    ],
    cargos_sociedades: [
      "Ex-Presidente da Sociedade Brasileira de Coluna (SBC)",
      "Coordenador do Laboratório de Biomecânica da Coluna - USP",
      "Membro do Corpo Editorial de Revistas Internacionais de Coluna",
    ],
    linhas_pesquisa: [
      "Biomecânica dos Sistemas de Fixação Pedicular e Novos Biomateriais",
      "Mecanismos Fisiopatológicos da Lesão Medular Aguda",
      "Artrodese e Substitutos Ósseos na Cirurgia Espinhal",
    ],
    especialidades: [
      "Biomecânica Espinhal",
      "Fixação Pedicular",
      "Trauma Raquimedular",
      "Cirurgia da Coluna Cervical",
    ],
    capitulos_tratado: [
      {
        num: 3,
        titulo: "Biomecânica da Coluna Vertebral e Princípios da Fixação Pedicular",
        secao_id: 1,
        secao_nome: "Histórico e Fundamentos",
        resumo_breve: "Propriedades viscoelásticas, distribuição de cargas axiais, momento de torção e estabilidade mecânica dos parafusos pediculares.",
        decs_mesh: ["Biomecânica", "Parafusos Pediculares", "Fusão Vertebral"],
      },
      {
        num: 14,
        titulo: "Fraturas Toracolombares: Classificação TLICS, AOSpine e Manejo",
        secao_id: 2,
        secao_nome: "Trauma Raquimedular",
        resumo_breve: "Sistemas de classificação prognóstica, critérios de instabilidade mecânica e vias de abordagem anterior vs posterior.",
        decs_mesh: ["Fraturas Espinhais", "Traumatismo Raquimedular", "Descompressão Cirúrgica"],
      },
      {
        num: 42,
        titulo: "Biologia da Fusão Óssea e Biomateriais de Enxertia na Coluna",
        secao_id: 5,
        secao_nome: "Técnicas de Artrodese",
        resumo_breve: "Osteoindução, osteocondução, BMPs, matriz óssea desmineralizada e técnicas de preparo do leito de enxerto.",
        decs_mesh: ["Transplante Ósseo", "Proteínas Morfogênicas Ósseas", "Biomateriais"],
      },
    ],
    publicacoes_destaque: [
      {
        ano: "2023",
        titulo: "Biomechanics of pedicle screw trajectory and pullout strength in osteoporotic bone",
        periodico: "The Spine Journal",
        doi: "10.1016/j.spinee.2023.04.011",
      },
      {
        ano: "2021",
        titulo: "Long-term outcomes of thoracolumbar burst fractures treated with short-segment fixation",
        periodico: "European Spine Journal",
        doi: "10.1007/s00586-021-06890-4",
      },
    ],
    lattes_url: "http://lattes.cnpq.br/2345678901234567",
    orcid: "0000-0001-9876-5432",
  },
  {
    id: "3",
    slug: "marcelo-risso",
    nome: "Dr. Marcelo Risso",
    crm: "CRM-SP 98.740 / RQE 45.312",
    cargo: "Editor / SBC",
    instituicao: "Comitê de Educação e Publicações SBC",
    cidade_estado: "Campinas - SP, Brasil",
    destaque: "Coordenador do Capítulo 8 (Plano Sagital e Osteotomias)",
    foto_url: "/assets/marcelo-risso.png",
    bio_completa:
      "Doutor em Ciências Médicas e Coordenador da Comissão de Publicações e Ensino da SBC. Especialista reconhecido pelo estudo profundo do alinhamento tridimensional, harmonia espinopélvica (PI, PT, SS, SVA), osteotomias de subtração pedicular (PSO) e técnicas avançadas para correção de cifoses e escolioses do adulto.",
    titulacao_academica: [
      "Doutor em Ciências da Cirurgia pela FCM - Unicamp",
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Fellowship em Cirurgia de Deformidades Adultas - Hôpital Pellegrin, Bordeaux",
      "Membro Internacional do AO Spine e SRS",
    ],
    cargos_sociedades: [
      "Coordenador do Comitê de Educação Continuada da SBC",
      "Coordenador do Capítulo 8 Oficial do Tratado de Coluna",
      "Instrutor Chefe de Cadáver-Labs em Osteotomias 3D",
    ],
    linhas_pesquisa: [
      "Equilíbrio Sagital e Parâmetros Espinopélvicos na População Adulta",
      "Correção de Cifose Juncional Proximal (PJK) e Distal (DJK)",
      "Cirurgia de Revisão de Artrodese da Coluna Lombar",
    ],
    especialidades: [
      "Equilíbrio Sagital",
      "Osteotomias 3D (PSO / VCR)",
      "Deformidade do Adulto",
      "Cirurgia Minimamente Invasiva",
    ],
    capitulos_tratado: [
      {
        num: 8,
        titulo: "Avaliação Radiográfica do Equilíbrio Sagital da Coluna Vertebral",
        secao_id: 1,
        secao_nome: "Histórico e Fundamentos",
        resumo_breve: "Estudo detalhado dos parâmetros spino-pélvicos (PI, PT, SS), linha de prumo C7-SVA, cone de economia de Dubousset e fórmulas de planejamento.",
        decs_mesh: ["Equilíbrio Postural", "Lordose", "Pelve", "Coluna Vertebral"],
      },
      {
        num: 33,
        titulo: "Osteotomias da Coluna Vertebral: Técnicas de Smith-Petersen, Ponte e PSO",
        secao_id: 4,
        secao_nome: "Técnicas Cirúrgicas Avançadas",
        resumo_breve: "Indicações cirúrgicas, planejamento milimétrico de cunha de ressecção óssea e prevenção de complicações neurológicas.",
        decs_mesh: ["Osteotomia", "Cifose", "Deformidades da Coluna"],
      },
      {
        num: 76,
        titulo: "Deformidade Degenerativa da Coluna do Adulto (ASD): Diagnóstico e Tratamento",
        secao_id: 8,
        secao_nome: "Doenças Degenerativas",
        resumo_breve: "Estratégia cirúrgica para escoliose de novo, estenose de canal associada e critérios de fusão sacropélvica.",
        decs_mesh: ["Escoliose Degenerativa", "Estenose Espinhal", "Artrodese"],
      },
    ],
    publicacoes_destaque: [
      {
        ano: "2024",
        titulo: "Sagittal Vertical Axis (SVA) correction thresholds in adult spinal deformity: Brazilian Multicenter Study",
        periodico: "Journal of Neurosurgery: Spine",
        doi: "10.3171/2024.1.SPINE23112",
      },
      {
        ano: "2022",
        titulo: "Pelvic incidence minus lumbar lordosis (PI-LL) mismatch and its impact on HRQoL scores",
        periodico: "Coluna/Columna",
        doi: "10.1590/s1808-18512022000200008",
      },
    ],
    lattes_url: "http://lattes.cnpq.br/3456789012345678",
    orcid: "0000-0003-4567-8901",
  },
  {
    id: "4",
    slug: "cristiano-menezes",
    nome: "Dr. Cristiano Menezes",
    crm: "CRM-MG 29.840 / RQE 18.234",
    cargo: "Editor Associado / MIS",
    instituicao: "Hospital Ortopédico de Belo Horizonte",
    cidade_estado: "Belo Horizonte - MG, Brasil",
    destaque: "Pioneiro em Cirurgia Endoscópica e TLIF/LLIF",
    foto_url: "/assets/avatar-1.png",
    bio_completa:
      "Pioneiro na introdução de técnicas minimamente invasivas de coluna no Brasil. Ampla experiência em artrodese intersomática lateral (LLIF), cirurgia tubular e descompressão endoscópica biportal e interlaminar para hérnias discais e estenose de canal lombar.",
    titulacao_academica: [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Membro da International Society for the Advancement of Spine Surgery (ISASS)",
      "Fellowship em MIS - Spine Institute, San Diego, EUA",
    ],
    cargos_sociedades: [
      "Diretor do Comitê de Cirurgia Minimamente Invasiva da SBC",
      "Instrutor Internacional de Acesso Lateral (LLIF) e Endoscopia Espinhal",
    ],
    linhas_pesquisa: [
      "Recuperação Acelerada (ERAS) em Cirurgia Espinhal Minimamente Invasiva",
      "Curva de Aprendizado e Descompressão Endoscópica Biportal (UBE)",
    ],
    especialidades: [
      "Cirurgia Endoscópica",
      "Acesso Lateral (LLIF)",
      "MIS TLIF",
      "Doença Discal Lombar",
    ],
    capitulos_tratado: [
      {
        num: 55,
        titulo: "Técnicas Minimamente Invasivas: TLIF e LLIF na Coluna Lombar",
        secao_id: 6,
        secao_nome: "Cirurgia Minimamente Invasiva",
        resumo_breve: "Vias tubulares, colocação de parafusos percutâneos, discectomia por retração neural mínima e descompressão indireta.",
        decs_mesh: ["Procedimentos Cirúrgicos Minimamente Invasivos", "Fusão Vertebral", "Coluna Lombar"],
      },
      {
        num: 62,
        titulo: "Cirurgia Endoscópica da Coluna: Indicações, Abordagens e Descompressão",
        secao_id: 6,
        secao_nome: "Cirurgia Minimamente Invasiva",
        resumo_breve: "Acessos interlaminar e transforaminal sob visão endoscópica de alta definição para tratamento de hérnias e estenose.",
        decs_mesh: ["Endoscopia", "Hérnia de Disco", "Descompressão Cirúrgica"],
      },
    ],
    publicacoes_destaque: [
      {
        ano: "2023",
        titulo: "Endoscopic spinal decompression vs open microdiscectomy: randomized clinical trial",
        periodico: "World Neurosurgery",
        doi: "10.1016/j.wneu.2023.08.045",
      },
    ],
    lattes_url: "http://lattes.cnpq.br/4567890123456789",
    orcid: "0000-0002-8765-4321",
  },
  {
    id: "5",
    slug: "robert-meves",
    nome: "Dr. Robert Meves",
    crm: "CRM-SP 64.912 / RQE 28.910",
    cargo: "Editor Associado / Santa Casa SP",
    instituicao: "Faculdade de Ciências Médicas da Santa Casa de São Paulo",
    cidade_estado: "São Paulo - SP, Brasil",
    destaque: "Especialista em Escoliose da Infância e Trauma Cervical",
    foto_url: "/assets/avatar-2.png",
    bio_completa:
      "Professor Adjunto e Chefe do Grupo de Coluna da Santa Casa de São Paulo. Possui vasta produção científica e dedicação acadêmica ao diagnóstico e correção cirúrgica da escoliose idiopática do adolescente, lesões traumáticas cervicais altas (C1-C2) e espondilolistese de alto grau.",
    titulacao_academica: [
      "Professor Livre-Docente em Ortopedia pela FCMSCSP",
      "Doutor em Medicina pela Santa Casa de São Paulo",
      "Membro Ativo do Scoliosis Research Society (SRS)",
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
    ],
    cargos_sociedades: [
      "Chefe do Departamento de Ortopedia e Traumatologia - Pavilhão Fernandinho Simonsen",
      "Ex-Presidente do Comitê de Deformidades da SBC",
    ],
    linhas_pesquisa: [
      "Fatores Preditivos de Progressão na Escoliose Idiopática do Adolescente",
      "Instrumentação Anterior vs Posterior em Fraturas Cervicais",
    ],
    especialidades: [
      "Escoliose Idiopática",
      "Trauma Cervical",
      "Espondilolistese",
      "Coluna Pediátrica",
    ],
    capitulos_tratado: [
      {
        num: 19,
        titulo: "Traumatismo da Coluna Cervical Alta: Lesões de C1-C2 e Côndilos Occipitais",
        secao_id: 2,
        secao_nome: "Trauma Raquimedular",
        resumo_breve: "Fraturas de Jefferson, dente do áxis, espondilolistese traumática do áxis (fratura do enforcado) e técnicas de artrodese C1-C2.",
        decs_mesh: ["Atlas", "Áxis", "Fraturas Cervicais", "Artrodese"],
      },
      {
        num: 48,
        titulo: "Escoliose Idiopática do Adolescente: Classificação de Lenke e Manejo",
        secao_id: 4,
        secao_nome: "Deformidades Vertebrais",
        resumo_breve: "Seleção dos níveis de fusão distal e proximal, princípios de derrotação vertebral e preservação de níveis móveis lombares.",
        decs_mesh: ["Escoliose Idiopática", "Classificação de Lenke", "Fusão Vertebral"],
      },
    ],
    publicacoes_destaque: [
      {
        ano: "2023",
        titulo: "Lenke 1 and 2 adolescent idiopathic scoliosis: selective vs nonselective fusion",
        periodico: "Spine",
        doi: "10.1097/BRS.0000000000004510",
      },
    ],
    lattes_url: "http://lattes.cnpq.br/5678901234567890",
    orcid: "0000-0003-1234-9876",
  },
];

export function getAuthorByIdOrSlug(identifier: string): AuthorProfile | undefined {
  return AUTHORS_DIRECTORY.find(
    (a) => a.id === identifier || a.slug === identifier
  );
}
