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
    "id": "1",
    "slug": "adriano-m-lino-filho",
    "nome": "Dr. Adriano M. Lino Filho",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Adriano M. Lino Filho é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 3,
        "titulo": "Neuroanatomia Funcional da Medula Espinhal",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de neuroanatomia funcional da medula espinhal pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 43,
        "titulo": "Hérnia de Disco Cervical",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de hérnia de disco cervical pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 3: Neuroanatomia Funcional da Medula Espinhal",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap3"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 43: Hérnia de Disco Cervical",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap43"
      }
    ]
  },
  {
    "id": "2",
    "slug": "alberto-ofenhejm-gotfryd",
    "nome": "Dr. Alberto Ofenhejm Gotfryd",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 84 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Alberto Ofenhejm Gotfryd é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 84,
        "titulo": "Infiltrações e Bloqueios da Coluna",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de infiltrações e bloqueios da coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 84: Infiltrações e Bloqueios da Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap84"
      }
    ]
  },
  {
    "id": "3",
    "slug": "alderico-girao-campos-de-barros",
    "nome": "Dr. Alderico Girão Campos de Barros",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 4 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Alderico Girão Campos de Barros é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 37,
        "titulo": "Escoliose Idiopática de Alto Valor Angular",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose idiopática de alto valor angular pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 41,
        "titulo": "Deformidades da Coluna Cervical",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de deformidades da coluna cervical pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 53,
        "titulo": "Tumores Benignos e Lesões Pseudotumorais da Coluna",
        "secao_id": 6,
        "secao_nome": "Tumores na Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de tumores benignos e lesões pseudotumorais da coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 101,
        "titulo": "Junção Craniovertebral: Anormalidades Congênitas, Adquiridas e Trauma",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de junção craniovertebral: anormalidades congênitas, adquiridas e trauma pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 37: Escoliose Idiopática de Alto Valor Angular",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap37"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 41: Deformidades da Coluna Cervical",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap41"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 53: Tumores Benignos e Lesões Pseudotumorais da Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap53"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 101: Junção Craniovertebral: Anormalidades Congênitas, Adquiridas e Trauma",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap101"
      }
    ]
  },
  {
    "id": "4",
    "slug": "alessandro-gasbarrini",
    "nome": "Dr. Alessandro Gasbarrini",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 88 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Alessandro Gasbarrini é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 88,
        "titulo": "Vertebrectomia Torácica e Lombar nas Neoplasias",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de vertebrectomia torácica e lombar nas neoplasias pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 88: Vertebrectomia Torácica e Lombar nas Neoplasias",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap88"
      }
    ]
  },
  {
    "id": "5",
    "slug": "alessandro-maria-bianconi",
    "nome": "Dr. Alessandro Maria Bianconi",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 101 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Alessandro Maria Bianconi é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 101,
        "titulo": "Junção Craniovertebral: Anormalidades Congênitas, Adquiridas e Trauma",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de junção craniovertebral: anormalidades congênitas, adquiridas e trauma pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 101: Junção Craniovertebral: Anormalidades Congênitas, Adquiridas e Trauma",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap101"
      }
    ]
  },
  {
    "id": "6",
    "slug": "alexander-junqueira-rossato",
    "nome": "Dr. Alexander Junqueira Rossato",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 3 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Alexander Junqueira Rossato é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 31,
        "titulo": "Deformidades nos Disrafismos Espinhais",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de deformidades nos disrafismos espinhais pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 82,
        "titulo": "Aplicação do Halo e Tração Craniana",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de aplicação do halo e tração craniana pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 86,
        "titulo": "Técnica de Fixação Bipolar da Coluna Vertebral",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de técnica de fixação bipolar da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 31: Deformidades nos Disrafismos Espinhais",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap31"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 82: Aplicação do Halo e Tração Craniana",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap82"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 86: Técnica de Fixação Bipolar da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap86"
      }
    ]
  },
  {
    "id": "7",
    "slug": "alexandre-fogaca-cristante",
    "nome": "Dr. Alexandre Fogaça Cristante",
    "crm": "Membro Titular SBC",
    "cargo": "Professor Titular IOT-FMUSP / SBC",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 3 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Alexandre Fogaça Cristante é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 24,
        "titulo": "Lesões Traumáticas da Coluna na Infância",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesões traumáticas da coluna na infância pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 28,
        "titulo": "Escoliose de Início Precoce",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose de início precoce pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 35,
        "titulo": "Escoliose do Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose do adulto pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 24: Lesões Traumáticas da Coluna na Infância",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap24"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 28: Escoliose de Início Precoce",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap28"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 35: Escoliose do Adulto",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap35"
      }
    ]
  },
  {
    "id": "8",
    "slug": "alexandre-medeiros-sampaio-januario",
    "nome": "Dr. Alexandre Medeiros Sampaio Januario",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 99 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Alexandre Medeiros Sampaio Januario é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 99,
        "titulo": "Lesão Neurológica Perioperatória",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesão neurológica perioperatória pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 99: Lesão Neurológica Perioperatória",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap99"
      }
    ]
  },
  {
    "id": "9",
    "slug": "alexandre-philippe-boss-jaccard",
    "nome": "Dr. Alexandre Philippe Boss Jaccard",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 22 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Alexandre Philippe Boss Jaccard é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 22,
        "titulo": "Lesões Traumáticas da Coluna Torácica e Lombar",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesões traumáticas da coluna torácica e lombar pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 22: Lesões Traumáticas da Coluna Torácica e Lombar",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap22"
      }
    ]
  },
  {
    "id": "10",
    "slug": "alisson-roberto-teles",
    "nome": "Dr. Alisson Roberto Teles",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 72 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Alisson Roberto Teles é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 72,
        "titulo": "Artrodese Lombar Anterior",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de artrodese lombar anterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 72: Artrodese Lombar Anterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap72"
      }
    ]
  },
  {
    "id": "11",
    "slug": "aluizio-augusto-arantes-junior",
    "nome": "Dr. Aluízio Augusto Arantes Junior",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Aluízio Augusto Arantes Junior é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 3,
        "titulo": "Neuroanatomia Funcional da Medula Espinhal",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de neuroanatomia funcional da medula espinhal pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 43,
        "titulo": "Hérnia de Disco Cervical",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de hérnia de disco cervical pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 3: Neuroanatomia Funcional da Medula Espinhal",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap3"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 43: Hérnia de Disco Cervical",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap43"
      }
    ]
  },
  {
    "id": "12",
    "slug": "alvaro-diego-heredia-suarez",
    "nome": "Dr. Alvaro Diego Heredia Suarez",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Alvaro Diego Heredia Suarez é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 20,
        "titulo": "Lesões Traumáticas da Coluna Cervical Alta",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesões traumáticas da coluna cervical alta pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 68,
        "titulo": "Artrodese Intersomática Lombar Posterior",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de artrodese intersomática lombar posterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 20: Lesões Traumáticas da Coluna Cervical Alta",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap20"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 68: Artrodese Intersomática Lombar Posterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap68"
      }
    ]
  },
  {
    "id": "13",
    "slug": "anderson-clayton-cardeal",
    "nome": "Dr. Anderson Clayton Cardeal",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 26 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Anderson Clayton Cardeal é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 26,
        "titulo": "Deformidades Pós-Traumáticas",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de deformidades pós-traumáticas pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 26: Deformidades Pós-Traumáticas",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap26"
      }
    ]
  },
  {
    "id": "14",
    "slug": "andrei-fernandes-joaquim",
    "nome": "Dr. Andrei Fernandes Joaquim",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 109 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Andrei Fernandes Joaquim é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 109,
        "titulo": "Avaliação dos Resultados em Cirurgia de Coluna",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de avaliação dos resultados em cirurgia de coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 109: Avaliação dos Resultados em Cirurgia de Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap109"
      }
    ]
  },
  {
    "id": "15",
    "slug": "andre-flavio-freire-pereira",
    "nome": "Dr. André Flávio Freire Pereira",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 29 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. André Flávio Freire Pereira é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 29,
        "titulo": "Tratamento Não Cirúrgico das Escolioses",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de tratamento não cirúrgico das escolioses pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 29: Tratamento Não Cirúrgico das Escolioses",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap29"
      }
    ]
  },
  {
    "id": "16",
    "slug": "andre-frazao-rosa",
    "nome": "Dr. André Frazao Rosa",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 55 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. André Frazao Rosa é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 55,
        "titulo": "Tumores Metastáticos na Coluna",
        "secao_id": 6,
        "secao_nome": "Tumores na Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de tumores metastáticos na coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 55: Tumores Metastáticos na Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap55"
      }
    ]
  },
  {
    "id": "17",
    "slug": "andre-luis-fernandes-andujar",
    "nome": "Dr. André Luis Fernandes Andujar",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. André Luis Fernandes Andujar é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 38,
        "titulo": "Espondilolistese na Criança",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de espondilolistese na criança pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 83,
        "titulo": "Colete Gessado para Escoliose de Início Precoce",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de colete gessado para escoliose de início precoce pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 38: Espondilolistese na Criança",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap38"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 83: Colete Gessado para Escoliose de Início Precoce",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap83"
      }
    ]
  },
  {
    "id": "18",
    "slug": "andre-luis-sebben",
    "nome": "Dr. André Luís Sebben",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 25 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. André Luís Sebben é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 25,
        "titulo": "Fraturas Vertebrais por Insuficiência",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de fraturas vertebrais por insuficiência pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 25: Fraturas Vertebrais por Insuficiência",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap25"
      }
    ]
  },
  {
    "id": "19",
    "slug": "andre-rafael-hubner",
    "nome": "Dr. André Rafael Hübner",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 20 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. André Rafael Hübner é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 20,
        "titulo": "Lesões Traumáticas da Coluna Cervical Alta",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesões traumáticas da coluna cervical alta pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 20: Lesões Traumáticas da Coluna Cervical Alta",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap20"
      }
    ]
  },
  {
    "id": "20",
    "slug": "antonio-gutemberg-de-s-martins",
    "nome": "Dr. Antonio Gutemberg de S. Martins",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 72 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Antonio Gutemberg de S. Martins é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 72,
        "titulo": "Artrodese Lombar Anterior",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de artrodese lombar anterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 72: Artrodese Lombar Anterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap72"
      }
    ]
  },
  {
    "id": "21",
    "slug": "arthur-sampaio-facanha",
    "nome": "Dr. Arthur Sampaio Façanha",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Arthur Sampaio Façanha é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 80,
        "titulo": "Técnicas de Fixação na Coluna Osteoporótica",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de técnicas de fixação na coluna osteoporótica pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 90,
        "titulo": "Cirurgia Complexa dos Tumores Cervicais",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de cirurgia complexa dos tumores cervicais pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 80: Técnicas de Fixação na Coluna Osteoporótica",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap80"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 90: Cirurgia Complexa dos Tumores Cervicais",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap90"
      }
    ]
  },
  {
    "id": "22",
    "slug": "asdrubal-falavigna",
    "nome": "Dr. Asdrubal Falavigna",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 42 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Asdrubal Falavigna é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 42,
        "titulo": "Fisiopatologia da Degeneração Discal",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de fisiopatologia da degeneração discal pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 42: Fisiopatologia da Degeneração Discal",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap42"
      }
    ]
  },
  {
    "id": "23",
    "slug": "aecio-rubens-dias-pereira-filho",
    "nome": "Dr. Aécio Rubens Dias Pereira Filho",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Aécio Rubens Dias Pereira Filho é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 6,
        "titulo": "Anatomia Cirúrgica e Abordagens da Junção Toracolombar",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de anatomia cirúrgica e abordagens da junção toracolombar pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 98,
        "titulo": "Complicações da Abordagem Anterior da Coluna",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de complicações da abordagem anterior da coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 6: Anatomia Cirúrgica e Abordagens da Junção Toracolombar",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap6"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 98: Complicações da Abordagem Anterior da Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap98"
      }
    ]
  },
  {
    "id": "24",
    "slug": "bernardo-drummond-braga",
    "nome": "Dr. Bernardo Drummond Braga",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 3 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Bernardo Drummond Braga é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 3,
        "titulo": "Neuroanatomia Funcional da Medula Espinhal",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de neuroanatomia funcional da medula espinhal pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 43,
        "titulo": "Hérnia de Disco Cervical",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de hérnia de disco cervical pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 67,
        "titulo": "Endoscopia Unilateral Biportal",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de endoscopia unilateral biportal pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 3: Neuroanatomia Funcional da Medula Espinhal",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap3"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 43: Hérnia de Disco Cervical",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap43"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 67: Endoscopia Unilateral Biportal",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap67"
      }
    ]
  },
  {
    "id": "25",
    "slug": "brian-guilherme-monteiro-marta-coimbra",
    "nome": "Dr. Brian Guilherme Monteiro Marta Coimbra",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 54 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Brian Guilherme Monteiro Marta Coimbra é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 54,
        "titulo": "Tumores Ósseos Primários Malignos",
        "secao_id": 6,
        "secao_nome": "Tumores na Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de tumores ósseos primários malignos pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 54: Tumores Ósseos Primários Malignos",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap54"
      }
    ]
  },
  {
    "id": "26",
    "slug": "bruno-da-costa-ancheschi",
    "nome": "Dr. Bruno da Costa Ancheschi",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Bruno da Costa Ancheschi é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 4,
        "titulo": "Anatomia Cirúrgica e Vias de Acesso da Coluna Cervical",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de anatomia cirúrgica e vias de acesso da coluna cervical pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 93,
        "titulo": "Infecções Pós-Operatórias",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de infecções pós-operatórias pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 4: Anatomia Cirúrgica e Vias de Acesso da Coluna Cervical",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap4"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 93: Infecções Pós-Operatórias",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap93"
      }
    ]
  },
  {
    "id": "27",
    "slug": "bruno-pinto-coelho-fontes",
    "nome": "Dr. Bruno Pinto Coelho Fontes",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 85 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Bruno Pinto Coelho Fontes é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 85,
        "titulo": "Sistemas de Crescimento Guiado para Deformidades da Coluna: Hastes de Crescimento Tradicionais",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de sistemas de crescimento guiado para deformidades da coluna: hastes de crescimento tradicionais pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 85: Sistemas de Crescimento Guiado para Deformidades da Coluna: Hastes de Crescimento Tradicionais",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap85"
      }
    ]
  },
  {
    "id": "28",
    "slug": "caio-cesar-nogueira-de-figueiredo",
    "nome": "Dr. Caio César Nogueira de Figueiredo",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Caio César Nogueira de Figueiredo é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 24,
        "titulo": "Lesões Traumáticas da Coluna na Infância",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesões traumáticas da coluna na infância pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 28,
        "titulo": "Escoliose de Início Precoce",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose de início precoce pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 24: Lesões Traumáticas da Coluna na Infância",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap24"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 28: Escoliose de Início Precoce",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap28"
      }
    ]
  },
  {
    "id": "29",
    "slug": "carlos-abreu-de-aguiar",
    "nome": "Dr. Carlos Abreu de Aguiar",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Carlos Abreu de Aguiar é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 30,
        "titulo": "Escoliose Neuromuscular",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose neuromuscular pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 33,
        "titulo": "Deformidades Congênitas da Coluna Vertebral",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de deformidades congênitas da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 30: Escoliose Neuromuscular",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap30"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 33: Deformidades Congênitas da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap33"
      }
    ]
  },
  {
    "id": "30",
    "slug": "carlos-andres-amelunge-rodriguez",
    "nome": "Dr. Carlos Andres Amelunge Rodriguez",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 22 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Carlos Andres Amelunge Rodriguez é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 22,
        "titulo": "Lesões Traumáticas da Coluna Torácica e Lombar",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesões traumáticas da coluna torácica e lombar pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 22: Lesões Traumáticas da Coluna Torácica e Lombar",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap22"
      }
    ]
  },
  {
    "id": "31",
    "slug": "carlos-eduardo-garcez-teixeira",
    "nome": "Dr. Carlos Eduardo Garcez Teixeira",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 59 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Carlos Eduardo Garcez Teixeira é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 59,
        "titulo": "Doenças Reumáticas da Coluna Vertebral",
        "secao_id": 7,
        "secao_nome": "Outras Doenças da Coluna",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de doenças reumáticas da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 59: Doenças Reumáticas da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap59"
      }
    ]
  },
  {
    "id": "32",
    "slug": "carlos-eduardo-goncales-barsotti",
    "nome": "Dr. Carlos Eduardo Gonçales Barsotti",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 26 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Carlos Eduardo Gonçales Barsotti é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 26,
        "titulo": "Deformidades Pós-Traumáticas",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de deformidades pós-traumáticas pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 26: Deformidades Pós-Traumáticas",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap26"
      }
    ]
  },
  {
    "id": "33",
    "slug": "charbel-jacob-junior",
    "nome": "Dr. Charbel Jacob Junior",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Charbel Jacob Junior é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 18,
        "titulo": "Avaliação da Coluna do Paciente Politraumatizado",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de avaliação da coluna do paciente politraumatizado pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 96,
        "titulo": "Doença do Nível Adjacente",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de doença do nível adjacente pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 18: Avaliação da Coluna do Paciente Politraumatizado",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap18"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 96: Doença do Nível Adjacente",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap96"
      }
    ]
  },
  {
    "id": "34",
    "slug": "charles-andre-carazzo",
    "nome": "Dr. Charles André Carazzo",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 17 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Charles André Carazzo é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 17,
        "titulo": "Diagnóstico Diferencial: Doenças da Coluna e Doenças Neurológicas",
        "secao_id": 2,
        "secao_nome": "Diagnóstico",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de diagnóstico diferencial: doenças da coluna e doenças neurológicas pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 17: Diagnóstico Diferencial: Doenças da Coluna e Doenças Neurológicas",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap17"
      }
    ]
  },
  {
    "id": "35",
    "slug": "cheila-mara-freu",
    "nome": "Dr. Cheila Mara Freu",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 83 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Cheila Mara Freu é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 83,
        "titulo": "Colete Gessado para Escoliose de Início Precoce",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de colete gessado para escoliose de início precoce pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 83: Colete Gessado para Escoliose de Início Precoce",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap83"
      }
    ]
  },
  {
    "id": "36",
    "slug": "chiara-cini",
    "nome": "Dr. Chiara Cini",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 88 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Chiara Cini é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 88,
        "titulo": "Vertebrectomia Torácica e Lombar nas Neoplasias",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de vertebrectomia torácica e lombar nas neoplasias pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 88: Vertebrectomia Torácica e Lombar nas Neoplasias",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap88"
      }
    ]
  },
  {
    "id": "37",
    "slug": "christiano-esteves-simoes",
    "nome": "Dr. Christiano Esteves Simões",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Christiano Esteves Simões é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 88,
        "titulo": "Vertebrectomia Torácica e Lombar nas Neoplasias",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de vertebrectomia torácica e lombar nas neoplasias pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 89,
        "titulo": "Sacrectomia",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de sacrectomia pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 88: Vertebrectomia Torácica e Lombar nas Neoplasias",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap88"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 89: Sacrectomia",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap89"
      }
    ]
  },
  {
    "id": "38",
    "slug": "christopher-cralcev",
    "nome": "Dr. Christopher Cralcev",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 105 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Christopher Cralcev é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 105,
        "titulo": "Controle do Sangramento Intraoperatório",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de controle do sangramento intraoperatório pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 105: Controle do Sangramento Intraoperatório",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap105"
      }
    ]
  },
  {
    "id": "39",
    "slug": "claudio-e-tatsui",
    "nome": "Dr. Claudio E. Tatsui",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 91 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Claudio E. Tatsui é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 91,
        "titulo": "Técnicas Minimamente Invasivas para Tratamento e Adjuvância nos Tumores da Coluna Vertebral",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de técnicas minimamente invasivas para tratamento e adjuvância nos tumores da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 91: Técnicas Minimamente Invasivas para Tratamento e Adjuvância nos Tumores da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap91"
      }
    ]
  },
  {
    "id": "40",
    "slug": "clineu-de-mello-almada-filho",
    "nome": "Dr. Clineu de Mello Almada Filho",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 108 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Clineu de Mello Almada Filho é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 108,
        "titulo": "Manejo do Paciente Frágil com Sarcopenia em Cirurgia de Coluna",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de manejo do paciente frágil com sarcopenia em cirurgia de coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 108: Manejo do Paciente Frágil com Sarcopenia em Cirurgia de Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap108"
      }
    ]
  },
  {
    "id": "41",
    "slug": "cristiano-magalhaes-menezes",
    "nome": "Dr. Cristiano Magalhães Menezes",
    "crm": "Membro Titular SBC",
    "cargo": "Ex-Presidente SBC / Especialista em Coluna",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Cristiano Magalhães Menezes é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 7,
        "titulo": "Anatomia Cirúrgica e Vias de Acesso da Coluna Lombar e Lombossacra",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de anatomia cirúrgica e vias de acesso da coluna lombar e lombossacra pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 69,
        "titulo": "Artrodese Lombar em Single-Position Lateral",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de artrodese lombar em single-position lateral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 7: Anatomia Cirúrgica e Vias de Acesso da Coluna Lombar e Lombossacra",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap7"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 69: Artrodese Lombar em Single-Position Lateral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap69"
      }
    ]
  },
  {
    "id": "42",
    "slug": "daiane-gallina",
    "nome": "Dr. Daiane Gallina",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 106 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Daiane Gallina é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 106,
        "titulo": "Uso de Órteses na Coluna Vertebral",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de uso de órteses na coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 106: Uso de Órteses na Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap106"
      }
    ]
  },
  {
    "id": "43",
    "slug": "daniel-duarte-perini",
    "nome": "Dr. Daniel Duarte Perini",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Daniel Duarte Perini é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 35,
        "titulo": "Escoliose do Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose do adulto pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 54,
        "titulo": "Tumores Ósseos Primários Malignos",
        "secao_id": 6,
        "secao_nome": "Tumores na Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de tumores ósseos primários malignos pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 35: Escoliose do Adulto",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap35"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 54: Tumores Ósseos Primários Malignos",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap54"
      }
    ]
  },
  {
    "id": "44",
    "slug": "david-del-curto",
    "nome": "Dr. David Del Curto",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 65 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. David Del Curto é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 65,
        "titulo": "Endoscopia na Coluna Cervical pela Via Posterior",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de endoscopia na coluna cervical pela via posterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 65: Endoscopia na Coluna Cervical pela Via Posterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap65"
      }
    ]
  },
  {
    "id": "45",
    "slug": "delio-eulalio-martins",
    "nome": "Dr. Delio Eulálio Martins",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 10 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Delio Eulálio Martins é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 10,
        "titulo": "Biomecânica dos Implantes nas Fixações Vertebrais",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de biomecânica dos implantes nas fixações vertebrais pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 10: Biomecânica dos Implantes nas Fixações Vertebrais",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap10"
      }
    ]
  },
  {
    "id": "46",
    "slug": "denis-seguchi-sakai",
    "nome": "Dr. Denis Seguchi Sakai",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 87 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Denis Seguchi Sakai é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 87,
        "titulo": "Técnicas de Correção Cirúrgica das Deformidades da Coluna Vertebral",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de técnicas de correção cirúrgica das deformidades da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 87: Técnicas de Correção Cirúrgica das Deformidades da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap87"
      }
    ]
  },
  {
    "id": "47",
    "slug": "deoclides-lima-bezerra-junior",
    "nome": "Dr. Deoclides Lima Bezerra Júnior",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 74 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Deoclides Lima Bezerra Júnior é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 74,
        "titulo": "Técnicas Cirúrgicas para a Fixação da Coluna Cervical Alta",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de técnicas cirúrgicas para a fixação da coluna cervical alta pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 74: Técnicas Cirúrgicas para a Fixação da Coluna Cervical Alta",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap74"
      }
    ]
  },
  {
    "id": "48",
    "slug": "diogo-nogueira-ribeiro",
    "nome": "Dr. Diogo Nogueira Ribeiro",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Diogo Nogueira Ribeiro é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 3,
        "titulo": "Neuroanatomia Funcional da Medula Espinhal",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de neuroanatomia funcional da medula espinhal pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 43,
        "titulo": "Hérnia de Disco Cervical",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de hérnia de disco cervical pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 3: Neuroanatomia Funcional da Medula Espinhal",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap3"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 43: Hérnia de Disco Cervical",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap43"
      }
    ]
  },
  {
    "id": "49",
    "slug": "douglas-kenji-narazaki",
    "nome": "Dr. Douglas Kenji Narazaki",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 90 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Douglas Kenji Narazaki é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 90,
        "titulo": "Cirurgia Complexa dos Tumores Cervicais",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de cirurgia complexa dos tumores cervicais pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 90: Cirurgia Complexa dos Tumores Cervicais",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap90"
      }
    ]
  },
  {
    "id": "50",
    "slug": "debora-yumi-yoshimura-orlandin-alves",
    "nome": "Dr. Débora Yumi Yoshimura Orlandin Alves",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Débora Yumi Yoshimura Orlandin Alves é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 36,
        "titulo": "Escoliose nas Síndromes Genéticas",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose nas síndromes genéticas pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 79,
        "titulo": "Fixação do Ilíaco – Técnica S2 Alar Ilíaco",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de fixação do ilíaco – técnica s2 alar ilíaco pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 36: Escoliose nas Síndromes Genéticas",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap36"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 79: Fixação do Ilíaco – Técnica S2 Alar Ilíaco",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap79"
      }
    ]
  },
  {
    "id": "51",
    "slug": "edelvan-gabana",
    "nome": "Dr. Edelvan Gabana",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 64 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Edelvan Gabana é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 64,
        "titulo": "Cirurgia Endoscópica Uniportal no Segmento Torácico",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de cirurgia endoscópica uniportal no segmento torácico pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 64: Cirurgia Endoscópica Uniportal no Segmento Torácico",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap64"
      }
    ]
  },
  {
    "id": "52",
    "slug": "edilson-silva-machado",
    "nome": "Dr. Edilson Silva Machado",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 50 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Edilson Silva Machado é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 50,
        "titulo": "Medicina Regenerativa no Manejo da Doença Degenerativa da Coluna",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de medicina regenerativa no manejo da doença degenerativa da coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 50: Medicina Regenerativa no Manejo da Doença Degenerativa da Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap50"
      }
    ]
  },
  {
    "id": "53",
    "slug": "edson-pudles",
    "nome": "Dr. Edson Pudles",
    "crm": "Membro Titular SBC",
    "cargo": "Editor-Chefe / SBC",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 4 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/edson-pudles.png",
    "bio_completa": "Presidente de Honra da Sociedade Brasileira de Coluna (SBC) e uma das maiores autoridades da América Latina no tratamento cirúrgico de deformidades complexas da coluna vertebral e planejamento cirúrgico tridimensional. Liderou a concepção, padronização científica e coordenação dos mais de 200 especialistas que colaboraram na redação dos 109 capítulos deste Tratado Oficial da SBC.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 21,
        "titulo": "Lesões Traumáticas da Coluna Cervical Subaxial",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesões traumáticas da coluna cervical subaxial pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 27,
        "titulo": "Introdução às Deformidades da Coluna Vertebral",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de introdução às deformidades da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 47,
        "titulo": "Instabilidade Vertebral",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de instabilidade vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 58,
        "titulo": "Infecção Primária da Coluna Vertebral",
        "secao_id": 7,
        "secao_nome": "Outras Doenças da Coluna",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de infecção primária da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 21: Lesões Traumáticas da Coluna Cervical Subaxial",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap21"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 27: Introdução às Deformidades da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap27"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 47: Instabilidade Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap47"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 58: Infecção Primária da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap58"
      }
    ]
  },
  {
    "id": "54",
    "slug": "egon-ewaldo-lindorfer-neto",
    "nome": "Dr. Egon Ewaldo Lindorfer Neto",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 75 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Egon Ewaldo Lindorfer Neto é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 75,
        "titulo": "Técnicas de Fixação Cervical Anterior",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de técnicas de fixação cervical anterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 75: Técnicas de Fixação Cervical Anterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap75"
      }
    ]
  },
  {
    "id": "55",
    "slug": "emiliano-neves-vialle",
    "nome": "Dr. Emiliano Neves Vialle",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 19 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Emiliano Neves Vialle é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 19,
        "titulo": "Trauma Raquimedular",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de trauma raquimedular pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 19: Trauma Raquimedular",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap19"
      }
    ]
  },
  {
    "id": "56",
    "slug": "enzo-pasetto-righesso",
    "nome": "Dr. Enzo Pasetto Righesso",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 42 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Enzo Pasetto Righesso é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 42,
        "titulo": "Fisiopatologia da Degeneração Discal",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de fisiopatologia da degeneração discal pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 42: Fisiopatologia da Degeneração Discal",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap42"
      }
    ]
  },
  {
    "id": "57",
    "slug": "erasmo-de-abreu-zardo",
    "nome": "Dr. Erasmo de Abreu Zardo",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 1 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Erasmo de Abreu Zardo é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 1,
        "titulo": "Embriologia da Coluna Vertebral",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de embriologia da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 1: Embriologia da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap1"
      }
    ]
  },
  {
    "id": "58",
    "slug": "erich-vinicius-de-paula",
    "nome": "Dr. Erich Vinicius de Paula",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 105 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Erich Vinicius de Paula é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 105,
        "titulo": "Controle do Sangramento Intraoperatório",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de controle do sangramento intraoperatório pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 105: Controle do Sangramento Intraoperatório",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap105"
      }
    ]
  },
  {
    "id": "59",
    "slug": "felipe-neves-simoes-monteiro",
    "nome": "Dr. Felipe Neves Simões Monteiro",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 97 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Felipe Neves Simões Monteiro é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 97,
        "titulo": "Pseudoartrose e Falha Mecânica da Instrumentação na Cirurgia da Coluna Vertebral",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de pseudoartrose e falha mecânica da instrumentação na cirurgia da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 97: Pseudoartrose e Falha Mecânica da Instrumentação na Cirurgia da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap97"
      }
    ]
  },
  {
    "id": "60",
    "slug": "fernando-antonio-mendes-facanha-filho",
    "nome": "Dr. Fernando Antônio Mendes Façanha Filho",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 80 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Fernando Antônio Mendes Façanha Filho é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 80,
        "titulo": "Técnicas de Fixação na Coluna Osteoporótica",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de técnicas de fixação na coluna osteoporótica pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 80: Técnicas de Fixação na Coluna Osteoporótica",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap80"
      }
    ]
  },
  {
    "id": "61",
    "slug": "fernando-augusto-dannenbrock",
    "nome": "Dr. Fernando Augusto Dannenbrock",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 1 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Fernando Augusto Dannenbrock é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 1,
        "titulo": "Embriologia da Coluna Vertebral",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de embriologia da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 1: Embriologia da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap1"
      }
    ]
  },
  {
    "id": "62",
    "slug": "fernando-balsimelli",
    "nome": "Dr. Fernando Balsimelli",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 44 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Fernando Balsimelli é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 44,
        "titulo": "Hérnia de Disco Torácica",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de hérnia de disco torácica pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 44: Hérnia de Disco Torácica",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap44"
      }
    ]
  },
  {
    "id": "63",
    "slug": "fernando-herrero",
    "nome": "Dr. Fernando Herrero",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 81 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Fernando Herrero é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 81,
        "titulo": "Ostetomias da Coluna Vertebral",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de ostetomias da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 81: Ostetomias da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap81"
      }
    ]
  },
  {
    "id": "64",
    "slug": "fernando-luiz-rolemberg-dantas",
    "nome": "Dr. Fernando Luiz Rolemberg Dantas",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 48 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Fernando Luiz Rolemberg Dantas é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 48,
        "titulo": "Estenose Cervical, Mielopatia Cervical Degenerativa e Ossificação do Ligamento Longitudinal Posterior",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de estenose cervical, mielopatia cervical degenerativa e ossificação do ligamento longitudinal posterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 48: Estenose Cervical, Mielopatia Cervical Degenerativa e Ossificação do Ligamento Longitudinal Posterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap48"
      }
    ]
  },
  {
    "id": "65",
    "slug": "fernando-toni-marcelino-da-silva",
    "nome": "Dr. Fernando Toni Marcelino da Silva",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 39 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Fernando Toni Marcelino da Silva é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 39,
        "titulo": "Espondilolistese no Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de espondilolistese no adulto pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 39: Espondilolistese no Adulto",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap39"
      }
    ]
  },
  {
    "id": "66",
    "slug": "francisco-jose-albuquerque-de-paula",
    "nome": "Dr. Francisco José Albuquerque de Paula",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 60 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Francisco José Albuquerque de Paula é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 60,
        "titulo": "Doenças Metabólicas que Afetam a Coluna",
        "secao_id": 7,
        "secao_nome": "Outras Doenças da Coluna",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de doenças metabólicas que afetam a coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 60: Doenças Metabólicas que Afetam a Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap60"
      }
    ]
  },
  {
    "id": "67",
    "slug": "francois-dantas",
    "nome": "Dr. François Dantas",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 48 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. François Dantas é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 48,
        "titulo": "Estenose Cervical, Mielopatia Cervical Degenerativa e Ossificação do Ligamento Longitudinal Posterior",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de estenose cervical, mielopatia cervical degenerativa e ossificação do ligamento longitudinal posterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 48: Estenose Cervical, Mielopatia Cervical Degenerativa e Ossificação do Ligamento Longitudinal Posterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap48"
      }
    ]
  },
  {
    "id": "68",
    "slug": "gabriel-farias-alves",
    "nome": "Dr. Gabriel Farias Alves",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 53 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Gabriel Farias Alves é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 53,
        "titulo": "Tumores Benignos e Lesões Pseudotumorais da Coluna",
        "secao_id": 6,
        "secao_nome": "Tumores na Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de tumores benignos e lesões pseudotumorais da coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 53: Tumores Benignos e Lesões Pseudotumorais da Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap53"
      }
    ]
  },
  {
    "id": "69",
    "slug": "gabriel-pokorny",
    "nome": "Dr. Gabriel Pokorny",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Gabriel Pokorny é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 39,
        "titulo": "Espondilolistese no Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de espondilolistese no adulto pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 70,
        "titulo": "Artrodese Lombar Prone Transpsoas",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de artrodese lombar prone transpsoas pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 39: Espondilolistese no Adulto",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap39"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 70: Artrodese Lombar Prone Transpsoas",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap70"
      }
    ]
  },
  {
    "id": "70",
    "slug": "gabriela-neves-vaz",
    "nome": "Dr. Gabriela Neves Vaz",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Gabriela Neves Vaz é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 45,
        "titulo": "Hérnia de Disco Lombar",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de hérnia de disco lombar pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 65,
        "titulo": "Endoscopia na Coluna Cervical pela Via Posterior",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de endoscopia na coluna cervical pela via posterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 45: Hérnia de Disco Lombar",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap45"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 65: Endoscopia na Coluna Cervical pela Via Posterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap65"
      }
    ]
  },
  {
    "id": "71",
    "slug": "geraldo-de-sa-carneiro-filho",
    "nome": "Dr. Geraldo de Sá Carneiro-Filho",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 74 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Geraldo de Sá Carneiro-Filho é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 74,
        "titulo": "Técnicas Cirúrgicas para a Fixação da Coluna Cervical Alta",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de técnicas cirúrgicas para a fixação da coluna cervical alta pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 74: Técnicas Cirúrgicas para a Fixação da Coluna Cervical Alta",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap74"
      }
    ]
  },
  {
    "id": "72",
    "slug": "giancarlo-jorio-almeida",
    "nome": "Dr. Giancarlo Jorio Almeida",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Giancarlo Jorio Almeida é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 37,
        "titulo": "Escoliose Idiopática de Alto Valor Angular",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose idiopática de alto valor angular pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 76,
        "titulo": "Fixação Posterior da Coluna Cervical",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de fixação posterior da coluna cervical pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 37: Escoliose Idiopática de Alto Valor Angular",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap37"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 76: Fixação Posterior da Coluna Cervical",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap76"
      }
    ]
  },
  {
    "id": "73",
    "slug": "guilherme-a-ludwig",
    "nome": "Dr. Guilherme A. Ludwig",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 72 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Guilherme A. Ludwig é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 72,
        "titulo": "Artrodese Lombar Anterior",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de artrodese lombar anterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 72: Artrodese Lombar Anterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap72"
      }
    ]
  },
  {
    "id": "74",
    "slug": "guilherme-naves-de-lima-alves",
    "nome": "Dr. Guilherme Naves de Lima Alves",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 15 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Guilherme Naves de Lima Alves é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 15,
        "titulo": "Diagnóstico por Imagem da Coluna Vertebral",
        "secao_id": 2,
        "secao_nome": "Diagnóstico",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de diagnóstico por imagem da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 15: Diagnóstico por Imagem da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap15"
      }
    ]
  },
  {
    "id": "75",
    "slug": "guilherme-pagioro-miranda",
    "nome": "Dr. Guilherme Pagioro Miranda",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 4 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Guilherme Pagioro Miranda é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 4,
        "titulo": "Anatomia Cirúrgica e Vias de Acesso da Coluna Cervical",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de anatomia cirúrgica e vias de acesso da coluna cervical pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 4: Anatomia Cirúrgica e Vias de Acesso da Coluna Cervical",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap4"
      }
    ]
  },
  {
    "id": "76",
    "slug": "guilherme-pianowski-pajanoti",
    "nome": "Dr. Guilherme Pianowski Pajanoti",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 95 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Guilherme Pianowski Pajanoti é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 95,
        "titulo": "Queda das Respostas na Monitoração Neurofisiológica Intraoperatória",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de queda das respostas na monitoração neurofisiológica intraoperatória pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 95: Queda das Respostas na Monitoração Neurofisiológica Intraoperatória",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap95"
      }
    ]
  },
  {
    "id": "77",
    "slug": "guilherme-rebechi-zuiani",
    "nome": "Dr. Guilherme Rebechi Zuiani",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Guilherme Rebechi Zuiani é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 51,
        "titulo": "Princípios no Manejo das Neoplasias da Coluna Vertebral",
        "secao_id": 6,
        "secao_nome": "Tumores na Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de princípios no manejo das neoplasias da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 107,
        "titulo": "Segurança em Cirurgia de Coluna",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de segurança em cirurgia de coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 51: Princípios no Manejo das Neoplasias da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap51"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 107: Segurança em Cirurgia de Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap107"
      }
    ]
  },
  {
    "id": "78",
    "slug": "gustavo-alves-brito-isaias",
    "nome": "Dr. Gustavo Alves Brito Isaias",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 105 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Gustavo Alves Brito Isaias é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 105,
        "titulo": "Controle do Sangramento Intraoperatório",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de controle do sangramento intraoperatório pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 105: Controle do Sangramento Intraoperatório",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap105"
      }
    ]
  },
  {
    "id": "79",
    "slug": "gustavo-borges-laurindo-de-azevedo",
    "nome": "Dr. Gustavo Borges Laurindo de Azevedo",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 88 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Gustavo Borges Laurindo de Azevedo é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 88,
        "titulo": "Vertebrectomia Torácica e Lombar nas Neoplasias",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de vertebrectomia torácica e lombar nas neoplasias pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 88: Vertebrectomia Torácica e Lombar nas Neoplasias",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap88"
      }
    ]
  },
  {
    "id": "80",
    "slug": "helton-luiz-aparecido-defino",
    "nome": "Dr. Helton Luiz Aparecido Defino",
    "crm": "Membro Titular SBC",
    "cargo": "Editor Científico / FMRP-USP",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 5 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/helton-defino.png",
    "bio_completa": "Professor Titular da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP). Referência mundial em biomecânica da coluna, fixação pedicular vertebral, deformidades espinhais e reabilitação de lesões raquimedulares. Editor Científico do Tratado de Cirurgia da Coluna Vertebral.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 12,
        "titulo": "Anamnese e Exame Físico da Coluna Vertebral",
        "secao_id": 2,
        "secao_nome": "Diagnóstico",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de anamnese e exame físico da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 27,
        "titulo": "Introdução às Deformidades da Coluna Vertebral",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de introdução às deformidades da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 34,
        "titulo": "Escoliose Idiopática",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose idiopática pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 40,
        "titulo": "Cifose",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de cifose pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 92,
        "titulo": "Navegação e Robótica",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de navegação e robótica pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 12: Anamnese e Exame Físico da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap12"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 27: Introdução às Deformidades da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap27"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 34: Escoliose Idiopática",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap34"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 40: Cifose",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap40"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 92: Navegação e Robótica",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap92"
      }
    ]
  },
  {
    "id": "81",
    "slug": "henrique-dagostin-de-arjona",
    "nome": "Dr. Henrique Dagostin de Arjona",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 38 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Henrique Dagostin de Arjona é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 38,
        "titulo": "Espondilolistese na Criança",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de espondilolistese na criança pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 38: Espondilolistese na Criança",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap38"
      }
    ]
  },
  {
    "id": "82",
    "slug": "henrique-griese-luciano-dos-santos",
    "nome": "Dr. Henrique Griese Luciano dos Santos",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Henrique Griese Luciano dos Santos é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 9,
        "titulo": "Princípios da Artrodese, Biologia do Enxerto e Substitutos Ósseos na Coluna",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de princípios da artrodese, biologia do enxerto e substitutos ósseos na coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 61,
        "titulo": "Tratamento Cirúrgico das Doenças Reumáticas da Coluna",
        "secao_id": 7,
        "secao_nome": "Outras Doenças da Coluna",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de tratamento cirúrgico das doenças reumáticas da coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 9: Princípios da Artrodese, Biologia do Enxerto e Substitutos Ósseos na Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap9"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 61: Tratamento Cirúrgico das Doenças Reumáticas da Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap61"
      }
    ]
  },
  {
    "id": "83",
    "slug": "igor-barreira-magro",
    "nome": "Dr. Igor Barreira Magro",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 39 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Igor Barreira Magro é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 39,
        "titulo": "Espondilolistese no Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de espondilolistese no adulto pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 39: Espondilolistese no Adulto",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap39"
      }
    ]
  },
  {
    "id": "84",
    "slug": "igor-de-barcellos-zanon",
    "nome": "Dr. Igor de Barcellos Zanon",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 18 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Igor de Barcellos Zanon é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 18,
        "titulo": "Avaliação da Coluna do Paciente Politraumatizado",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de avaliação da coluna do paciente politraumatizado pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 18: Avaliação da Coluna do Paciente Politraumatizado",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap18"
      }
    ]
  },
  {
    "id": "85",
    "slug": "igor-ebert-cechin",
    "nome": "Dr. Igor Ebert Cechin",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Igor Ebert Cechin é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 20,
        "titulo": "Lesões Traumáticas da Coluna Cervical Alta",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesões traumáticas da coluna cervical alta pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 68,
        "titulo": "Artrodese Intersomática Lombar Posterior",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de artrodese intersomática lombar posterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 20: Lesões Traumáticas da Coluna Cervical Alta",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap20"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 68: Artrodese Intersomática Lombar Posterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap68"
      }
    ]
  },
  {
    "id": "86",
    "slug": "igor-machado-cardoso",
    "nome": "Dr. Igor Machado Cardoso",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 96 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Igor Machado Cardoso é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 96,
        "titulo": "Doença do Nível Adjacente",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de doença do nível adjacente pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 96: Doença do Nível Adjacente",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap96"
      }
    ]
  },
  {
    "id": "87",
    "slug": "italo-gerardo-rotondo",
    "nome": "Dr. Italo Gerardo Rotondo",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 79 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Italo Gerardo Rotondo é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 79,
        "titulo": "Fixação do Ilíaco – Técnica S2 Alar Ilíaco",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de fixação do ilíaco – técnica s2 alar ilíaco pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 79: Fixação do Ilíaco – Técnica S2 Alar Ilíaco",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap79"
      }
    ]
  },
  {
    "id": "88",
    "slug": "ivan-dias-da-rocha",
    "nome": "Dr. Ivan Dias da Rocha",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 64 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Ivan Dias da Rocha é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 64,
        "titulo": "Cirurgia Endoscópica Uniportal no Segmento Torácico",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de cirurgia endoscópica uniportal no segmento torácico pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 64: Cirurgia Endoscópica Uniportal no Segmento Torácico",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap64"
      }
    ]
  },
  {
    "id": "89",
    "slug": "jean-marcel-dambros",
    "nome": "Dr. Jean Marcel Dambrós",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 68 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Jean Marcel Dambrós é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 68,
        "titulo": "Artrodese Intersomática Lombar Posterior",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de artrodese intersomática lombar posterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 68: Artrodese Intersomática Lombar Posterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap68"
      }
    ]
  },
  {
    "id": "90",
    "slug": "jefferson-soares-leal",
    "nome": "Dr. Jefferson Soares Leal",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Jefferson Soares Leal é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 7,
        "titulo": "Anatomia Cirúrgica e Vias de Acesso da Coluna Lombar e Lombossacra",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de anatomia cirúrgica e vias de acesso da coluna lombar e lombossacra pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 69,
        "titulo": "Artrodese Lombar em Single-Position Lateral",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de artrodese lombar em single-position lateral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 7: Anatomia Cirúrgica e Vias de Acesso da Coluna Lombar e Lombossacra",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap7"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 69: Artrodese Lombar em Single-Position Lateral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap69"
      }
    ]
  },
  {
    "id": "91",
    "slug": "jeronimo-buzetti-milano",
    "nome": "Dr. Jeronimo Buzetti Milano",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 75 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Jeronimo Buzetti Milano é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 75,
        "titulo": "Técnicas de Fixação Cervical Anterior",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de técnicas de fixação cervical anterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 75: Técnicas de Fixação Cervical Anterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap75"
      }
    ]
  },
  {
    "id": "92",
    "slug": "joel-abramczuk",
    "nome": "Dr. Joel Abramczuk",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 1 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Joel Abramczuk é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 1,
        "titulo": "Embriologia da Coluna Vertebral",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de embriologia da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 1: Embriologia da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap1"
      }
    ]
  },
  {
    "id": "93",
    "slug": "jorge-rafael-durigan",
    "nome": "Dr. Jorge Rafael Durigan",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 16 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Jorge Rafael Durigan é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 16,
        "titulo": "Diagnóstico Diferencial: Doenças da Coluna e Condições Ortopédicas",
        "secao_id": 2,
        "secao_nome": "Diagnóstico",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de diagnóstico diferencial: doenças da coluna e condições ortopédicas pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 16: Diagnóstico Diferencial: Doenças da Coluna e Condições Ortopédicas",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap16"
      }
    ]
  },
  {
    "id": "94",
    "slug": "jose-augusto-malheiros",
    "nome": "Dr. José Augusto Malheiros",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 71 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. José Augusto Malheiros é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 71,
        "titulo": "Artrodese Lombar Oblíqua",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de artrodese lombar oblíqua pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 71: Artrodese Lombar Oblíqua",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap71"
      }
    ]
  },
  {
    "id": "95",
    "slug": "joao-abrao",
    "nome": "Dr. João Abrão",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 103 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. João Abrão é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 103,
        "titulo": "Abordagens para o Tratamento da Dor Pós-Operatória em Cirurgia de Coluna",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de abordagens para o tratamento da dor pós-operatória em cirurgia de coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 103: Abordagens para o Tratamento da Dor Pós-Operatória em Cirurgia de Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap103"
      }
    ]
  },
  {
    "id": "96",
    "slug": "joao-paulo-machado-bergamaschi",
    "nome": "Dr. João Paulo Machado Bergamaschi",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. João Paulo Machado Bergamaschi é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 62,
        "titulo": "Endoscopia Transforaminal na Coluna Lombossacra",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de endoscopia transforaminal na coluna lombossacra pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 66,
        "titulo": "Endoscopia na Coluna Cervical pela Via Anterior",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de endoscopia na coluna cervical pela via anterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 62: Endoscopia Transforaminal na Coluna Lombossacra",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap62"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 66: Endoscopia na Coluna Cervical pela Via Anterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap66"
      }
    ]
  },
  {
    "id": "97",
    "slug": "joao-tomas-fernandes-castilho-garcia",
    "nome": "Dr. João Tomás Fernandes Castilho Garcia",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 84 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. João Tomás Fernandes Castilho Garcia é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 84,
        "titulo": "Infiltrações e Bloqueios da Coluna",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de infiltrações e bloqueios da coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 84: Infiltrações e Bloqueios da Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap84"
      }
    ]
  },
  {
    "id": "98",
    "slug": "joao-vitor-liboni-guimaraes-rios",
    "nome": "Dr. João Vitor Liboni Guimarães Rios",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 85 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. João Vitor Liboni Guimarães Rios é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 85,
        "titulo": "Sistemas de Crescimento Guiado para Deformidades da Coluna: Hastes de Crescimento Tradicionais",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de sistemas de crescimento guiado para deformidades da coluna: hastes de crescimento tradicionais pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 85: Sistemas de Crescimento Guiado para Deformidades da Coluna: Hastes de Crescimento Tradicionais",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap85"
      }
    ]
  },
  {
    "id": "99",
    "slug": "jullyene-pokorny",
    "nome": "Dr. Jullyene Pokorny",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Jullyene Pokorny é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 39,
        "titulo": "Espondilolistese no Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de espondilolistese no adulto pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 70,
        "titulo": "Artrodese Lombar Prone Transpsoas",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de artrodese lombar prone transpsoas pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 39: Espondilolistese no Adulto",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap39"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 70: Artrodese Lombar Prone Transpsoas",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap70"
      }
    ]
  },
  {
    "id": "100",
    "slug": "karen-santos-braghiroli",
    "nome": "Dr. Karen Santos Braghiroli",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 102 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Karen Santos Braghiroli é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 102,
        "titulo": "Manejo da Dor Aguda e Crônica na Coluna Vertebral",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de manejo da dor aguda e crônica na coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 102: Manejo da Dor Aguda e Crônica na Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap102"
      }
    ]
  },
  {
    "id": "101",
    "slug": "kelsen-de-oliveira-teixeira",
    "nome": "Dr. Kelsen de Oliveira Teixeira",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 66 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Kelsen de Oliveira Teixeira é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 66,
        "titulo": "Endoscopia na Coluna Cervical pela Via Anterior",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de endoscopia na coluna cervical pela via anterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 66: Endoscopia na Coluna Cervical pela Via Anterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap66"
      }
    ]
  },
  {
    "id": "102",
    "slug": "leon-cleres-penido-pinheiro",
    "nome": "Dr. Leon Cleres Penido Pinheiro",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 56 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Leon Cleres Penido Pinheiro é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 56,
        "titulo": "Tumores Intramedulares e Extramedulares: Classificação, Diagnóstico e Manejo",
        "secao_id": 6,
        "secao_nome": "Tumores na Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de tumores intramedulares e extramedulares: classificação, diagnóstico e manejo pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 56: Tumores Intramedulares e Extramedulares: Classificação, Diagnóstico e Manejo",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap56"
      }
    ]
  },
  {
    "id": "103",
    "slug": "leonardo-yukio-jorge-asano",
    "nome": "Dr. Leonardo Yukio Jorge Asano",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 99 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Leonardo Yukio Jorge Asano é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 99,
        "titulo": "Lesão Neurológica Perioperatória",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesão neurológica perioperatória pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 99: Lesão Neurológica Perioperatória",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap99"
      }
    ]
  },
  {
    "id": "104",
    "slug": "luca-erdmann-bini-cordeiro",
    "nome": "Dr. Luca Erdmann Bini Cordeiro",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 30 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Luca Erdmann Bini Cordeiro é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 30,
        "titulo": "Escoliose Neuromuscular",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose neuromuscular pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 30: Escoliose Neuromuscular",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap30"
      }
    ]
  },
  {
    "id": "105",
    "slug": "lucas-gomes-pupp",
    "nome": "Dr. Lucas Gomes Pupp",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 41 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Lucas Gomes Pupp é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 41,
        "titulo": "Deformidades da Coluna Cervical",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de deformidades da coluna cervical pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 41: Deformidades da Coluna Cervical",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap41"
      }
    ]
  },
  {
    "id": "106",
    "slug": "lucas-silveira-rabello-de-oliveira",
    "nome": "Dr. Lucas Silveira Rabello de Oliveira",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 95 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Lucas Silveira Rabello de Oliveira é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 95,
        "titulo": "Queda das Respostas na Monitoração Neurofisiológica Intraoperatória",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de queda das respostas na monitoração neurofisiológica intraoperatória pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 95: Queda das Respostas na Monitoração Neurofisiológica Intraoperatória",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap95"
      }
    ]
  },
  {
    "id": "107",
    "slug": "luciano-miller-reis-rodrigues",
    "nome": "Dr. Luciano Miller Reis Rodrigues",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 95 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Luciano Miller Reis Rodrigues é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 95,
        "titulo": "Queda das Respostas na Monitoração Neurofisiológica Intraoperatória",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de queda das respostas na monitoração neurofisiológica intraoperatória pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 95: Queda das Respostas na Monitoração Neurofisiológica Intraoperatória",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap95"
      }
    ]
  },
  {
    "id": "108",
    "slug": "luis-antonio-medeiros-moliterno",
    "nome": "Dr. Luis Antonio Medeiros Moliterno",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 76 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Luis Antonio Medeiros Moliterno é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 76,
        "titulo": "Fixação Posterior da Coluna Cervical",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de fixação posterior da coluna cervical pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 76: Fixação Posterior da Coluna Cervical",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap76"
      }
    ]
  },
  {
    "id": "109",
    "slug": "luis-eduardo-carelli",
    "nome": "Dr. Luis Eduardo Carelli",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 4 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Luis Eduardo Carelli é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 37,
        "titulo": "Escoliose Idiopática de Alto Valor Angular",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose idiopática de alto valor angular pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 41,
        "titulo": "Deformidades da Coluna Cervical",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de deformidades da coluna cervical pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 53,
        "titulo": "Tumores Benignos e Lesões Pseudotumorais da Coluna",
        "secao_id": 6,
        "secao_nome": "Tumores na Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de tumores benignos e lesões pseudotumorais da coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 101,
        "titulo": "Junção Craniovertebral: Anormalidades Congênitas, Adquiridas e Trauma",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de junção craniovertebral: anormalidades congênitas, adquiridas e trauma pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 37: Escoliose Idiopática de Alto Valor Angular",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap37"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 41: Deformidades da Coluna Cervical",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap41"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 53: Tumores Benignos e Lesões Pseudotumorais da Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap53"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 101: Junção Craniovertebral: Anormalidades Congênitas, Adquiridas e Trauma",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap101"
      }
    ]
  },
  {
    "id": "110",
    "slug": "luiz-gustavo-daloglio-da-rocha",
    "nome": "Dr. Luiz Gustavo Dal’Oglio da Rocha",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Luiz Gustavo Dal’Oglio da Rocha é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 21,
        "titulo": "Lesões Traumáticas da Coluna Cervical Subaxial",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesões traumáticas da coluna cervical subaxial pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 23,
        "titulo": "Lesões Traumáticas do Sacro",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesões traumáticas do sacro pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 21: Lesões Traumáticas da Coluna Cervical Subaxial",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap21"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 23: Lesões Traumáticas do Sacro",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap23"
      }
    ]
  },
  {
    "id": "111",
    "slug": "luiz-muller-avila",
    "nome": "Dr. Luiz Müller Avila",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 33 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Luiz Müller Avila é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 33,
        "titulo": "Deformidades Congênitas da Coluna Vertebral",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de deformidades congênitas da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 33: Deformidades Congênitas da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap33"
      }
    ]
  },
  {
    "id": "112",
    "slug": "luiz-pimenta",
    "nome": "Dr. Luiz Pimenta",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Luiz Pimenta é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 39,
        "titulo": "Espondilolistese no Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de espondilolistese no adulto pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 70,
        "titulo": "Artrodese Lombar Prone Transpsoas",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de artrodese lombar prone transpsoas pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 39: Espondilolistese no Adulto",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap39"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 70: Artrodese Lombar Prone Transpsoas",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap70"
      }
    ]
  },
  {
    "id": "113",
    "slug": "luiz-roberto-gomes-vialle",
    "nome": "Dr. Luiz Roberto Gomes Vialle",
    "crm": "Membro Titular SBC",
    "cargo": "Ex-Presidente SBC / Professor Titular PUCPR",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 52 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Luiz Roberto Gomes Vialle é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 52,
        "titulo": "Instabilidade Vertebral em Neoplasia de Coluna",
        "secao_id": 6,
        "secao_nome": "Tumores na Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de instabilidade vertebral em neoplasia de coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 52: Instabilidade Vertebral em Neoplasia de Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap52"
      }
    ]
  },
  {
    "id": "114",
    "slug": "luna-jeannie-alves-mangueira",
    "nome": "Dr. Luna Jeannie Alves Mangueira",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 44 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Luna Jeannie Alves Mangueira é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 44,
        "titulo": "Hérnia de Disco Torácica",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de hérnia de disco torácica pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 44: Hérnia de Disco Torácica",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap44"
      }
    ]
  },
  {
    "id": "115",
    "slug": "luis-eduardo-munhoz-da-rocha",
    "nome": "Dr. Luís Eduardo Munhoz Da Rocha",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 32 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Luís Eduardo Munhoz Da Rocha é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 32,
        "titulo": "Escoliose na Neurofibromatose",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose na neurofibromatose pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 32: Escoliose na Neurofibromatose",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap32"
      }
    ]
  },
  {
    "id": "116",
    "slug": "marcello-henrique-nogueira-barbosa",
    "nome": "Dr. Marcello Henrique Nogueira-Barbosa",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 15 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Marcello Henrique Nogueira-Barbosa é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 15,
        "titulo": "Diagnóstico por Imagem da Coluna Vertebral",
        "secao_id": 2,
        "secao_nome": "Diagnóstico",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de diagnóstico por imagem da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 15: Diagnóstico por Imagem da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap15"
      }
    ]
  },
  {
    "id": "117",
    "slug": "marcelo-abreu",
    "nome": "Dr. Marcelo Abreu",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 100 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Marcelo Abreu é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 100,
        "titulo": "Síndrome da Falha da Cirurgia da Coluna Vertebral",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de síndrome da falha da cirurgia da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 100: Síndrome da Falha da Cirurgia da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap100"
      }
    ]
  },
  {
    "id": "118",
    "slug": "marcelo-botelho-soares-de-brito",
    "nome": "Dr. Marcelo Botelho Soares de Brito",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 62 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Marcelo Botelho Soares de Brito é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 62,
        "titulo": "Endoscopia Transforaminal na Coluna Lombossacra",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de endoscopia transforaminal na coluna lombossacra pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 62: Endoscopia Transforaminal na Coluna Lombossacra",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap62"
      }
    ]
  },
  {
    "id": "119",
    "slug": "marcelo-italo-risso-neto",
    "nome": "Dr. Marcelo Italo Risso Neto",
    "crm": "Membro Titular SBC",
    "cargo": "Editor Associado / UNICAMP",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 7 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/marcelo-risso.png",
    "bio_completa": "Cirurgião de Coluna Vertebral, Mestre e Doutor em Ciências da Cirurgia pela FCM-UNICAMP. Coordenador da Residência e Grupo de Cirurgia da Coluna Vertebral da Universidade Estadual de Campinas (UNICAMP) e Editor Associado da SBC.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 8,
        "titulo": "Coluna Vertebral no Plano Sagital",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de coluna vertebral no plano sagital pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 49,
        "titulo": "Infiltrações e Radiofrequência na Coluna Vertebral",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de infiltrações e radiofrequência na coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 51,
        "titulo": "Princípios no Manejo das Neoplasias da Coluna Vertebral",
        "secao_id": 6,
        "secao_nome": "Tumores na Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de princípios no manejo das neoplasias da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 55,
        "titulo": "Tumores Metastáticos na Coluna",
        "secao_id": 6,
        "secao_nome": "Tumores na Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de tumores metastáticos na coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 78,
        "titulo": "Parafusos Pediculares na Coluna Torácica, Lombar e Lombossacra – Técnica Free-Hand",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de parafusos pediculares na coluna torácica, lombar e lombossacra – técnica free-hand pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 82,
        "titulo": "Aplicação do Halo e Tração Craniana",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de aplicação do halo e tração craniana pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 107,
        "titulo": "Segurança em Cirurgia de Coluna",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de segurança em cirurgia de coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 8: Coluna Vertebral no Plano Sagital",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap8"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 49: Infiltrações e Radiofrequência na Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap49"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 51: Princípios no Manejo das Neoplasias da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap51"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 55: Tumores Metastáticos na Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap55"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 78: Parafusos Pediculares na Coluna Torácica, Lombar e Lombossacra – Técnica Free-Hand",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap78"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 82: Aplicação do Halo e Tração Craniana",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap82"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 107: Segurança em Cirurgia de Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap107"
      }
    ]
  },
  {
    "id": "120",
    "slug": "marcelo-luis-mudo",
    "nome": "Dr. Marcelo Luis Mudo",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 91 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Marcelo Luis Mudo é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 91,
        "titulo": "Técnicas Minimamente Invasivas para Tratamento e Adjuvância nos Tumores da Coluna Vertebral",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de técnicas minimamente invasivas para tratamento e adjuvância nos tumores da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 91: Técnicas Minimamente Invasivas para Tratamento e Adjuvância nos Tumores da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap91"
      }
    ]
  },
  {
    "id": "121",
    "slug": "marcelo-paulo-melo-de-souza",
    "nome": "Dr. Marcelo Paulo Melo de Souza",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 29 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Marcelo Paulo Melo de Souza é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 29,
        "titulo": "Tratamento Não Cirúrgico das Escolioses",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de tratamento não cirúrgico das escolioses pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 29: Tratamento Não Cirúrgico das Escolioses",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap29"
      }
    ]
  },
  {
    "id": "122",
    "slug": "marcio-oliveira-penna-de-carvalho",
    "nome": "Dr. Marcio Oliveira Penna de Carvalho",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 63 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Marcio Oliveira Penna de Carvalho é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 63,
        "titulo": "Endoscopia Interlaminar na Coluna Lombossacra",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de endoscopia interlaminar na coluna lombossacra pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 63: Endoscopia Interlaminar na Coluna Lombossacra",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap63"
      }
    ]
  },
  {
    "id": "123",
    "slug": "marco-aurelio-moscatelli",
    "nome": "Dr. Marco Aurelio Moscatelli",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 63 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Marco Aurelio Moscatelli é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 63,
        "titulo": "Endoscopia Interlaminar na Coluna Lombossacra",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de endoscopia interlaminar na coluna lombossacra pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 63: Endoscopia Interlaminar na Coluna Lombossacra",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap63"
      }
    ]
  },
  {
    "id": "124",
    "slug": "marcos-antonio-ferreira-junior",
    "nome": "Dr. Marcos Antonio Ferreira Junior",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 71 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Marcos Antonio Ferreira Junior é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 71,
        "titulo": "Artrodese Lombar Oblíqua",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de artrodese lombar oblíqua pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 71: Artrodese Lombar Oblíqua",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap71"
      }
    ]
  },
  {
    "id": "125",
    "slug": "marcos-antonio-tebet",
    "nome": "Dr. Marcos Antônio Tebet",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 2 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Marcos Antônio Tebet é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 2,
        "titulo": "Biomecânica da Coluna Vertebral",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de biomecânica da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 2: Biomecânica da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap2"
      }
    ]
  },
  {
    "id": "126",
    "slug": "marcos-gregory-cintra-parreira",
    "nome": "Dr. Marcos Gregory Cintra Parreira",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 10 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Marcos Gregory Cintra Parreira é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 10,
        "titulo": "Biomecânica dos Implantes nas Fixações Vertebrais",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de biomecânica dos implantes nas fixações vertebrais pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 10: Biomecânica dos Implantes nas Fixações Vertebrais",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap10"
      }
    ]
  },
  {
    "id": "127",
    "slug": "marcus-andre-costa-ferreira",
    "nome": "Dr. Marcus André Costa Ferreira",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 99 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Marcus André Costa Ferreira é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 99,
        "titulo": "Lesão Neurológica Perioperatória",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesão neurológica perioperatória pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 99: Lesão Neurológica Perioperatória",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap99"
      }
    ]
  },
  {
    "id": "128",
    "slug": "maria-eduarda-lima-viapiana",
    "nome": "Dr. Maria Eduarda Lima Viapiana",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 42 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Maria Eduarda Lima Viapiana é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 42,
        "titulo": "Fisiopatologia da Degeneração Discal",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de fisiopatologia da degeneração discal pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 42: Fisiopatologia da Degeneração Discal",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap42"
      }
    ]
  },
  {
    "id": "129",
    "slug": "maria-fernanda-silber-caffaro",
    "nome": "Dr. Maria Fernanda Silber Caffaro",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 16 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Maria Fernanda Silber Caffaro é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 16,
        "titulo": "Diagnóstico Diferencial: Doenças da Coluna e Condições Ortopédicas",
        "secao_id": 2,
        "secao_nome": "Diagnóstico",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de diagnóstico diferencial: doenças da coluna e condições ortopédicas pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 16: Diagnóstico Diferencial: Doenças da Coluna e Condições Ortopédicas",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap16"
      }
    ]
  },
  {
    "id": "130",
    "slug": "mateus-neves-faria-fernandes",
    "nome": "Dr. Mateus Neves Faria Fernandes",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 67 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Mateus Neves Faria Fernandes é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 67,
        "titulo": "Endoscopia Unilateral Biportal",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de endoscopia unilateral biportal pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 67: Endoscopia Unilateral Biportal",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap67"
      }
    ]
  },
  {
    "id": "131",
    "slug": "matheus-augusto-maciel-santiago",
    "nome": "Dr. Matheus Augusto Maciel Santiago",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Matheus Augusto Maciel Santiago é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 9,
        "titulo": "Princípios da Artrodese, Biologia do Enxerto e Substitutos Ósseos na Coluna",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de princípios da artrodese, biologia do enxerto e substitutos ósseos na coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 61,
        "titulo": "Tratamento Cirúrgico das Doenças Reumáticas da Coluna",
        "secao_id": 7,
        "secao_nome": "Outras Doenças da Coluna",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de tratamento cirúrgico das doenças reumáticas da coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 9: Princípios da Artrodese, Biologia do Enxerto e Substitutos Ósseos na Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap9"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 61: Tratamento Cirúrgico das Doenças Reumáticas da Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap61"
      }
    ]
  },
  {
    "id": "132",
    "slug": "matheus-boss-vieira",
    "nome": "Dr. Matheus Boss Vieira",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 22 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Matheus Boss Vieira é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 22,
        "titulo": "Lesões Traumáticas da Coluna Torácica e Lombar",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesões traumáticas da coluna torácica e lombar pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 22: Lesões Traumáticas da Coluna Torácica e Lombar",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap22"
      }
    ]
  },
  {
    "id": "133",
    "slug": "matheus-pippa-defino",
    "nome": "Dr. Matheus Pippa Defino",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 4 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Matheus Pippa Defino é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 12,
        "titulo": "Anamnese e Exame Físico da Coluna Vertebral",
        "secao_id": 2,
        "secao_nome": "Diagnóstico",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de anamnese e exame físico da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 34,
        "titulo": "Escoliose Idiopática",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose idiopática pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 40,
        "titulo": "Cifose",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de cifose pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 92,
        "titulo": "Navegação e Robótica",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de navegação e robótica pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 12: Anamnese e Exame Físico da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap12"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 34: Escoliose Idiopática",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap34"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 40: Cifose",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap40"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 92: Navegação e Robótica",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap92"
      }
    ]
  },
  {
    "id": "134",
    "slug": "matheus-trindade-bruxelas-de-freitas",
    "nome": "Dr. Matheus Trindade Bruxelas de Freitas",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 24 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Matheus Trindade Bruxelas de Freitas é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 24,
        "titulo": "Lesões Traumáticas da Coluna na Infância",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesões traumáticas da coluna na infância pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 24: Lesões Traumáticas da Coluna na Infância",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap24"
      }
    ]
  },
  {
    "id": "135",
    "slug": "mauricio-coelho-lima",
    "nome": "Dr. Mauricio Coelho Lima",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 3 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Mauricio Coelho Lima é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 31,
        "titulo": "Deformidades nos Disrafismos Espinhais",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de deformidades nos disrafismos espinhais pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 82,
        "titulo": "Aplicação do Halo e Tração Craniana",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de aplicação do halo e tração craniana pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 86,
        "titulo": "Técnica de Fixação Bipolar da Coluna Vertebral",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de técnica de fixação bipolar da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 31: Deformidades nos Disrafismos Espinhais",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap31"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 82: Aplicação do Halo e Tração Craniana",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap82"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 86: Técnica de Fixação Bipolar da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap86"
      }
    ]
  },
  {
    "id": "136",
    "slug": "mauricio-luiz-malito",
    "nome": "Dr. Mauricio Luiz Malito",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 104 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Mauricio Luiz Malito é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 104,
        "titulo": "Anestesia para Cirurgia da Coluna Vertebral",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de anestesia para cirurgia da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 104: Anestesia para Cirurgia da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap104"
      }
    ]
  },
  {
    "id": "137",
    "slug": "mauricio-zanon",
    "nome": "Dr. Mauricio Zanon",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 19 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Mauricio Zanon é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 19,
        "titulo": "Trauma Raquimedular",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de trauma raquimedular pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 19: Trauma Raquimedular",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap19"
      }
    ]
  },
  {
    "id": "138",
    "slug": "mauro-dos-santos-volpi",
    "nome": "Dr. Mauro dos Santos Volpi",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Mauro dos Santos Volpi é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 4,
        "titulo": "Anatomia Cirúrgica e Vias de Acesso da Coluna Cervical",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de anatomia cirúrgica e vias de acesso da coluna cervical pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 93,
        "titulo": "Infecções Pós-Operatórias",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de infecções pós-operatórias pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 4: Anatomia Cirúrgica e Vias de Acesso da Coluna Cervical",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap4"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 93: Infecções Pós-Operatórias",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap93"
      }
    ]
  },
  {
    "id": "139",
    "slug": "mayra-macena-gomes",
    "nome": "Dr. Mayra Macena Gomes",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 60 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Mayra Macena Gomes é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 60,
        "titulo": "Doenças Metabólicas que Afetam a Coluna",
        "secao_id": 7,
        "secao_nome": "Outras Doenças da Coluna",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de doenças metabólicas que afetam a coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 60: Doenças Metabólicas que Afetam a Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap60"
      }
    ]
  },
  {
    "id": "140",
    "slug": "michel-alexandre-yazbek",
    "nome": "Dr. Michel Alexandre Yazbek",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 59 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Michel Alexandre Yazbek é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 59,
        "titulo": "Doenças Reumáticas da Coluna Vertebral",
        "secao_id": 7,
        "secao_nome": "Outras Doenças da Coluna",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de doenças reumáticas da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 59: Doenças Reumáticas da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap59"
      }
    ]
  },
  {
    "id": "141",
    "slug": "morgana-vieira",
    "nome": "Dr. Morgana Vieira",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 5 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Morgana Vieira é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 5,
        "titulo": "Anatomia Cirúrgica e Vias de Acesso da Coluna Torácica",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de anatomia cirúrgica e vias de acesso da coluna torácica pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 5: Anatomia Cirúrgica e Vias de Acesso da Coluna Torácica",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap5"
      }
    ]
  },
  {
    "id": "142",
    "slug": "murilo-tavares-daher",
    "nome": "Dr. Murilo Tavares Daher",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 44 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Murilo Tavares Daher é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 44,
        "titulo": "Hérnia de Disco Torácica",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de hérnia de disco torácica pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 44: Hérnia de Disco Torácica",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap44"
      }
    ]
  },
  {
    "id": "143",
    "slug": "marcio-vinhal-de-carvalho",
    "nome": "Dr. Márcio Vinhal de Carvalho",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 11 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Márcio Vinhal de Carvalho é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 11,
        "titulo": "Disrafismo Espinhal – Defeitos do Tubo Neural",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de disrafismo espinhal – defeitos do tubo neural pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 11: Disrafismo Espinhal – Defeitos do Tubo Neural",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap11"
      }
    ]
  },
  {
    "id": "144",
    "slug": "naira-dos-santos-gutierrez",
    "nome": "Dr. Naira dos Santos Gutierrez",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 57 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Naira dos Santos Gutierrez é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 57,
        "titulo": "Radioterapia nos Tumores de Coluna",
        "secao_id": 6,
        "secao_nome": "Tumores na Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de radioterapia nos tumores de coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 57: Radioterapia nos Tumores de Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap57"
      }
    ]
  },
  {
    "id": "145",
    "slug": "nelson-astur-neto",
    "nome": "Dr. Nelson Astur Neto",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 97 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Nelson Astur Neto é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 97,
        "titulo": "Pseudoartrose e Falha Mecânica da Instrumentação na Cirurgia da Coluna Vertebral",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de pseudoartrose e falha mecânica da instrumentação na cirurgia da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 97: Pseudoartrose e Falha Mecânica da Instrumentação na Cirurgia da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap97"
      }
    ]
  },
  {
    "id": "146",
    "slug": "olavo-biraghi-letaif",
    "nome": "Dr. Olavo Biraghi Letaif",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Olavo Biraghi Letaif é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 36,
        "titulo": "Escoliose nas Síndromes Genéticas",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose nas síndromes genéticas pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 79,
        "titulo": "Fixação do Ilíaco – Técnica S2 Alar Ilíaco",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de fixação do ilíaco – técnica s2 alar ilíaco pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 36: Escoliose nas Síndromes Genéticas",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap36"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 79: Fixação do Ilíaco – Técnica S2 Alar Ilíaco",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap79"
      }
    ]
  },
  {
    "id": "147",
    "slug": "orlando-righesso-neto",
    "nome": "Dr. Orlando Righesso Neto",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 42 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Orlando Righesso Neto é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 42,
        "titulo": "Fisiopatologia da Degeneração Discal",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de fisiopatologia da degeneração discal pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 42: Fisiopatologia da Degeneração Discal",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap42"
      }
    ]
  },
  {
    "id": "148",
    "slug": "osmar-jose-santos-de-moraes",
    "nome": "Dr. Osmar José Santos de Moraes",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 56 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Osmar José Santos de Moraes é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 56,
        "titulo": "Tumores Intramedulares e Extramedulares: Classificação, Diagnóstico e Manejo",
        "secao_id": 6,
        "secao_nome": "Tumores na Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de tumores intramedulares e extramedulares: classificação, diagnóstico e manejo pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 56: Tumores Intramedulares e Extramedulares: Classificação, Diagnóstico e Manejo",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap56"
      }
    ]
  },
  {
    "id": "149",
    "slug": "otavio-vitorio-alvarenga-pereira",
    "nome": "Dr. Otávio Vitório Alvarenga Pereira",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 4 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Otávio Vitório Alvarenga Pereira é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 23,
        "titulo": "Lesões Traumáticas do Sacro",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesões traumáticas do sacro pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 52,
        "titulo": "Instabilidade Vertebral em Neoplasia de Coluna",
        "secao_id": 6,
        "secao_nome": "Tumores na Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de instabilidade vertebral em neoplasia de coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 88,
        "titulo": "Vertebrectomia Torácica e Lombar nas Neoplasias",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de vertebrectomia torácica e lombar nas neoplasias pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 89,
        "titulo": "Sacrectomia",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de sacrectomia pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 23: Lesões Traumáticas do Sacro",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap23"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 52: Instabilidade Vertebral em Neoplasia de Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap52"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 88: Vertebrectomia Torácica e Lombar nas Neoplasias",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap88"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 89: Sacrectomia",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap89"
      }
    ]
  },
  {
    "id": "150",
    "slug": "patricia-toscano-barreto-nogueira",
    "nome": "Dr. Patrícia Toscano Barreto Nogueira",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Patrícia Toscano Barreto Nogueira é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 13,
        "titulo": "Neurofisiologia no Diagnóstico das Patologias da Coluna",
        "secao_id": 2,
        "secao_nome": "Diagnóstico",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de neurofisiologia no diagnóstico das patologias da coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 14,
        "titulo": "Monitorização Neurofisiológica Intraoperatória em Cirurgia de Coluna",
        "secao_id": 2,
        "secao_nome": "Diagnóstico",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de monitorização neurofisiológica intraoperatória em cirurgia de coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 13: Neurofisiologia no Diagnóstico das Patologias da Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap13"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 14: Monitorização Neurofisiológica Intraoperatória em Cirurgia de Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap14"
      }
    ]
  },
  {
    "id": "151",
    "slug": "paulo-henrique-carvalho-vasconcelos",
    "nome": "Dr. Paulo Henrique Carvalho Vasconcelos",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 80 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Paulo Henrique Carvalho Vasconcelos é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 80,
        "titulo": "Técnicas de Fixação na Coluna Osteoporótica",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de técnicas de fixação na coluna osteoporótica pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 80: Técnicas de Fixação na Coluna Osteoporótica",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap80"
      }
    ]
  },
  {
    "id": "152",
    "slug": "paulo-jose-silva-ramos",
    "nome": "Dr. Paulo José Silva Ramos",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 88 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Paulo José Silva Ramos é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 88,
        "titulo": "Vertebrectomia Torácica e Lombar nas Neoplasias",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de vertebrectomia torácica e lombar nas neoplasias pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 88: Vertebrectomia Torácica e Lombar nas Neoplasias",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap88"
      }
    ]
  },
  {
    "id": "153",
    "slug": "paulo-tadeu-maia-cavali",
    "nome": "Dr. Paulo Tadeu Maia Cavali",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 6 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Paulo Tadeu Maia Cavali é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 6,
        "titulo": "Anatomia Cirúrgica e Abordagens da Junção Toracolombar",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de anatomia cirúrgica e abordagens da junção toracolombar pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 8,
        "titulo": "Coluna Vertebral no Plano Sagital",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de coluna vertebral no plano sagital pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 31,
        "titulo": "Deformidades nos Disrafismos Espinhais",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de deformidades nos disrafismos espinhais pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 78,
        "titulo": "Parafusos Pediculares na Coluna Torácica, Lombar e Lombossacra – Técnica Free-Hand",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de parafusos pediculares na coluna torácica, lombar e lombossacra – técnica free-hand pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 82,
        "titulo": "Aplicação do Halo e Tração Craniana",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de aplicação do halo e tração craniana pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 86,
        "titulo": "Técnica de Fixação Bipolar da Coluna Vertebral",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de técnica de fixação bipolar da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 6: Anatomia Cirúrgica e Abordagens da Junção Toracolombar",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap6"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 8: Coluna Vertebral no Plano Sagital",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap8"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 31: Deformidades nos Disrafismos Espinhais",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap31"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 78: Parafusos Pediculares na Coluna Torácica, Lombar e Lombossacra – Técnica Free-Hand",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap78"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 82: Aplicação do Halo e Tração Craniana",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap82"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 86: Técnica de Fixação Bipolar da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap86"
      }
    ]
  },
  {
    "id": "154",
    "slug": "pedro-aleixo-nogueira",
    "nome": "Dr. Pedro Aleixo Nogueira",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 109 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Pedro Aleixo Nogueira é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 109,
        "titulo": "Avaliação dos Resultados em Cirurgia de Coluna",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de avaliação dos resultados em cirurgia de coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 109: Avaliação dos Resultados em Cirurgia de Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap109"
      }
    ]
  },
  {
    "id": "155",
    "slug": "pedro-henrique-lacombe-antoneli",
    "nome": "Dr. Pedro Henrique Lacombe Antoneli",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 106 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Pedro Henrique Lacombe Antoneli é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 106,
        "titulo": "Uso de Órteses na Coluna Vertebral",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de uso de órteses na coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 106: Uso de Órteses na Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap106"
      }
    ]
  },
  {
    "id": "156",
    "slug": "rafael-barreto-silva",
    "nome": "Dr. Rafael Barreto Silva",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 63 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Rafael Barreto Silva é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 63,
        "titulo": "Endoscopia Interlaminar na Coluna Lombossacra",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de endoscopia interlaminar na coluna lombossacra pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 63: Endoscopia Interlaminar na Coluna Lombossacra",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap63"
      }
    ]
  },
  {
    "id": "157",
    "slug": "rafael-cardoso-prates",
    "nome": "Dr. Rafael Cardoso Prates",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 97 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Rafael Cardoso Prates é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 97,
        "titulo": "Pseudoartrose e Falha Mecânica da Instrumentação na Cirurgia da Coluna Vertebral",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de pseudoartrose e falha mecânica da instrumentação na cirurgia da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 97: Pseudoartrose e Falha Mecânica da Instrumentação na Cirurgia da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap97"
      }
    ]
  },
  {
    "id": "158",
    "slug": "rafael-moraes-trincado",
    "nome": "Dr. Rafael Moraes Trincado",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 16 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Rafael Moraes Trincado é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 16,
        "titulo": "Diagnóstico Diferencial: Doenças da Coluna e Condições Ortopédicas",
        "secao_id": 2,
        "secao_nome": "Diagnóstico",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de diagnóstico diferencial: doenças da coluna e condições ortopédicas pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 16: Diagnóstico Diferencial: Doenças da Coluna e Condições Ortopédicas",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap16"
      }
    ]
  },
  {
    "id": "159",
    "slug": "rafael-moriguchi",
    "nome": "Dr. Rafael Moriguchi",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 39 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Rafael Moriguchi é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 39,
        "titulo": "Espondilolistese no Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de espondilolistese no adulto pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 39: Espondilolistese no Adulto",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap39"
      }
    ]
  },
  {
    "id": "160",
    "slug": "rangel-roberto-de-assis",
    "nome": "Dr. Rangel Roberto de Assis",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 66 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Rangel Roberto de Assis é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 66,
        "titulo": "Endoscopia na Coluna Cervical pela Via Anterior",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de endoscopia na coluna cervical pela via anterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 66: Endoscopia na Coluna Cervical pela Via Anterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap66"
      }
    ]
  },
  {
    "id": "161",
    "slug": "raphael-martus-marcon",
    "nome": "Dr. Raphael Martus Marcon",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Raphael Martus Marcon é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 9,
        "titulo": "Princípios da Artrodese, Biologia do Enxerto e Substitutos Ósseos na Coluna",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de princípios da artrodese, biologia do enxerto e substitutos ósseos na coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 61,
        "titulo": "Tratamento Cirúrgico das Doenças Reumáticas da Coluna",
        "secao_id": 7,
        "secao_nome": "Outras Doenças da Coluna",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de tratamento cirúrgico das doenças reumáticas da coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 9: Princípios da Artrodese, Biologia do Enxerto e Substitutos Ósseos na Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap9"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 61: Tratamento Cirúrgico das Doenças Reumáticas da Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap61"
      }
    ]
  },
  {
    "id": "162",
    "slug": "renato-de-oliveira",
    "nome": "Dr. Renato de Oliveira",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 6 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Renato de Oliveira é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 6,
        "titulo": "Anatomia Cirúrgica e Abordagens da Junção Toracolombar",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de anatomia cirúrgica e abordagens da junção toracolombar pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 6: Anatomia Cirúrgica e Abordagens da Junção Toracolombar",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap6"
      }
    ]
  },
  {
    "id": "163",
    "slug": "renato-henriques-tavares",
    "nome": "Dr. Renato Henriques Tavares",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 76 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Renato Henriques Tavares é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 76,
        "titulo": "Fixação Posterior da Coluna Cervical",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de fixação posterior da coluna cervical pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 76: Fixação Posterior da Coluna Cervical",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap76"
      }
    ]
  },
  {
    "id": "164",
    "slug": "renato-hiroshi-salvioni-ueta",
    "nome": "Dr. Renato Hiroshi Salvioni Ueta",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 45 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Renato Hiroshi Salvioni Ueta é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 45,
        "titulo": "Hérnia de Disco Lombar",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de hérnia de disco lombar pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 45: Hérnia de Disco Lombar",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap45"
      }
    ]
  },
  {
    "id": "165",
    "slug": "rene-kusabara",
    "nome": "Dr. René Kusabara",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 108 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. René Kusabara é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 108,
        "titulo": "Manejo do Paciente Frágil com Sarcopenia em Cirurgia de Coluna",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de manejo do paciente frágil com sarcopenia em cirurgia de coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 108: Manejo do Paciente Frágil com Sarcopenia em Cirurgia de Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap108"
      }
    ]
  },
  {
    "id": "166",
    "slug": "rian-souza-vieira",
    "nome": "Dr. Rian Souza Vieira",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 3 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Rian Souza Vieira é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 12,
        "titulo": "Anamnese e Exame Físico da Coluna Vertebral",
        "secao_id": 2,
        "secao_nome": "Diagnóstico",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de anamnese e exame físico da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 34,
        "titulo": "Escoliose Idiopática",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose idiopática pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 40,
        "titulo": "Cifose",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de cifose pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 12: Anamnese e Exame Físico da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap12"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 34: Escoliose Idiopática",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap34"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 40: Cifose",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap40"
      }
    ]
  },
  {
    "id": "167",
    "slug": "ricardo-acacio-dos-santos",
    "nome": "Dr. Ricardo Acacio Dos Santos",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 81 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Ricardo Acacio Dos Santos é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 81,
        "titulo": "Ostetomias da Coluna Vertebral",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de ostetomias da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 81: Ostetomias da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap81"
      }
    ]
  },
  {
    "id": "168",
    "slug": "ricardo-de-souza-portes-meirelles",
    "nome": "Dr. Ricardo de Souza Portes Meirelles",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 88 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Ricardo de Souza Portes Meirelles é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 88,
        "titulo": "Vertebrectomia Torácica e Lombar nas Neoplasias",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de vertebrectomia torácica e lombar nas neoplasias pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 88: Vertebrectomia Torácica e Lombar nas Neoplasias",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap88"
      }
    ]
  },
  {
    "id": "169",
    "slug": "ricardo-jose-rodriguez-ferreira",
    "nome": "Dr. Ricardo José Rodriguez Ferreira",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Ricardo José Rodriguez Ferreira é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 13,
        "titulo": "Neurofisiologia no Diagnóstico das Patologias da Coluna",
        "secao_id": 2,
        "secao_nome": "Diagnóstico",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de neurofisiologia no diagnóstico das patologias da coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 14,
        "titulo": "Monitorização Neurofisiológica Intraoperatória em Cirurgia de Coluna",
        "secao_id": 2,
        "secao_nome": "Diagnóstico",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de monitorização neurofisiológica intraoperatória em cirurgia de coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 13: Neurofisiologia no Diagnóstico das Patologias da Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap13"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 14: Monitorização Neurofisiológica Intraoperatória em Cirurgia de Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap14"
      }
    ]
  },
  {
    "id": "170",
    "slug": "robert-meves",
    "nome": "Dr. Robert Meves",
    "crm": "Membro Titular SBC",
    "cargo": "Editor Associado / Santa Casa SP",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Robert Meves é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 46,
        "titulo": "Estenose Lombar: Diagnóstico e Manejo Contemporâneo",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de estenose lombar: diagnóstico e manejo contemporâneo pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 50,
        "titulo": "Medicina Regenerativa no Manejo da Doença Degenerativa da Coluna",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de medicina regenerativa no manejo da doença degenerativa da coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 46: Estenose Lombar: Diagnóstico e Manejo Contemporâneo",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap46"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 50: Medicina Regenerativa no Manejo da Doença Degenerativa da Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap50"
      }
    ]
  },
  {
    "id": "171",
    "slug": "roberta-cristina-risso",
    "nome": "Dr. Roberta Cristina Risso",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 102 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Roberta Cristina Risso é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 102,
        "titulo": "Manejo da Dor Aguda e Crônica na Coluna Vertebral",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de manejo da dor aguda e crônica na coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 102: Manejo da Dor Aguda e Crônica na Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap102"
      }
    ]
  },
  {
    "id": "172",
    "slug": "roberto-waldesmand-farias-pontes",
    "nome": "Dr. Roberto Waldesmand Farias Pontes",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Roberto Waldesmand Farias Pontes é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 13,
        "titulo": "Neurofisiologia no Diagnóstico das Patologias da Coluna",
        "secao_id": 2,
        "secao_nome": "Diagnóstico",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de neurofisiologia no diagnóstico das patologias da coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 14,
        "titulo": "Monitorização Neurofisiológica Intraoperatória em Cirurgia de Coluna",
        "secao_id": 2,
        "secao_nome": "Diagnóstico",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de monitorização neurofisiológica intraoperatória em cirurgia de coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 13: Neurofisiologia no Diagnóstico das Patologias da Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap13"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 14: Monitorização Neurofisiológica Intraoperatória em Cirurgia de Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap14"
      }
    ]
  },
  {
    "id": "173",
    "slug": "rodrigo-amaral",
    "nome": "Dr. Rodrigo Amaral",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Rodrigo Amaral é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 39,
        "titulo": "Espondilolistese no Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de espondilolistese no adulto pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 70,
        "titulo": "Artrodese Lombar Prone Transpsoas",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de artrodese lombar prone transpsoas pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 39: Espondilolistese no Adulto",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap39"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 70: Artrodese Lombar Prone Transpsoas",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap70"
      }
    ]
  },
  {
    "id": "174",
    "slug": "rodrigo-de-morais-hanriot",
    "nome": "Dr. Rodrigo de Morais Hanriot",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 57 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Rodrigo de Morais Hanriot é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 57,
        "titulo": "Radioterapia nos Tumores de Coluna",
        "secao_id": 6,
        "secao_nome": "Tumores na Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de radioterapia nos tumores de coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 57: Radioterapia nos Tumores de Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap57"
      }
    ]
  },
  {
    "id": "175",
    "slug": "rodrigo-dos-santos-grandini",
    "nome": "Dr. Rodrigo dos Santos Grandini",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Rodrigo dos Santos Grandini é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 38,
        "titulo": "Espondilolistese na Criança",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de espondilolistese na criança pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 83,
        "titulo": "Colete Gessado para Escoliose de Início Precoce",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de colete gessado para escoliose de início precoce pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 38: Espondilolistese na Criança",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap38"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 83: Colete Gessado para Escoliose de Início Precoce",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap83"
      }
    ]
  },
  {
    "id": "176",
    "slug": "rodrigo-goes-medea-de-mendonca",
    "nome": "Dr. Rodrigo Góes Medéa de Mendonça",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 46 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Rodrigo Góes Medéa de Mendonça é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 46,
        "titulo": "Estenose Lombar: Diagnóstico e Manejo Contemporâneo",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de estenose lombar: diagnóstico e manejo contemporâneo pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 46: Estenose Lombar: Diagnóstico e Manejo Contemporâneo",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap46"
      }
    ]
  },
  {
    "id": "177",
    "slug": "roger-schmidt-brock",
    "nome": "Dr. Roger Schmidt Brock",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 77 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Roger Schmidt Brock é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 77,
        "titulo": "Laminoplastia Cervical: Princípios, Técnicas e Evidências Atuais",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de laminoplastia cervical: princípios, técnicas e evidências atuais pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 77: Laminoplastia Cervical: Princípios, Técnicas e Evidências Atuais",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap77"
      }
    ]
  },
  {
    "id": "178",
    "slug": "santiago-alexis-naranjo-tipan",
    "nome": "Dr. Santiago Alexis Naranjo Tipan",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Santiago Alexis Naranjo Tipan é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 28,
        "titulo": "Escoliose de Início Precoce",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose de início precoce pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 90,
        "titulo": "Cirurgia Complexa dos Tumores Cervicais",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de cirurgia complexa dos tumores cervicais pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 28: Escoliose de Início Precoce",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap28"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 90: Cirurgia Complexa dos Tumores Cervicais",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap90"
      }
    ]
  },
  {
    "id": "179",
    "slug": "sara-reis-de-paula",
    "nome": "Dr. Sara Reis de Paula",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Sara Reis de Paula é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 4,
        "titulo": "Anatomia Cirúrgica e Vias de Acesso da Coluna Cervical",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de anatomia cirúrgica e vias de acesso da coluna cervical pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 93,
        "titulo": "Infecções Pós-Operatórias",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de infecções pós-operatórias pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 4: Anatomia Cirúrgica e Vias de Acesso da Coluna Cervical",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap4"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 93: Infecções Pós-Operatórias",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap93"
      }
    ]
  },
  {
    "id": "180",
    "slug": "sergio-afonso-hennemann",
    "nome": "Dr. Sergio Afonso Hennemann",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 100 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Sergio Afonso Hennemann é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 100,
        "titulo": "Síndrome da Falha da Cirurgia da Coluna Vertebral",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de síndrome da falha da cirurgia da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 100: Síndrome da Falha da Cirurgia da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap100"
      }
    ]
  },
  {
    "id": "181",
    "slug": "sergio-zylbersztejn",
    "nome": "Dr. Sergio Zylbersztejn",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 106 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Sergio Zylbersztejn é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 106,
        "titulo": "Uso de Órteses na Coluna Vertebral",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de uso de órteses na coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 106: Uso de Órteses na Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap106"
      }
    ]
  },
  {
    "id": "182",
    "slug": "sonja-ellen-lobo",
    "nome": "Dr. Sonja Ellen Lobo",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Sonja Ellen Lobo é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 62,
        "titulo": "Endoscopia Transforaminal na Coluna Lombossacra",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de endoscopia transforaminal na coluna lombossacra pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 66,
        "titulo": "Endoscopia na Coluna Cervical pela Via Anterior",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de endoscopia na coluna cervical pela via anterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 62: Endoscopia Transforaminal na Coluna Lombossacra",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap62"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 66: Endoscopia na Coluna Cervical pela Via Anterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap66"
      }
    ]
  },
  {
    "id": "183",
    "slug": "sylvio-mistro-neto",
    "nome": "Dr. Sylvio Mistro Neto",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 49 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Sylvio Mistro Neto é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 49,
        "titulo": "Infiltrações e Radiofrequência na Coluna Vertebral",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de infiltrações e radiofrequência na coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 49: Infiltrações e Radiofrequência na Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap49"
      }
    ]
  },
  {
    "id": "184",
    "slug": "sergio-augusto-barbosa-de-farias",
    "nome": "Dr. Sérgio Augusto Barbosa de Farias",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 109 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Sérgio Augusto Barbosa de Farias é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 109,
        "titulo": "Avaliação dos Resultados em Cirurgia de Coluna",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de avaliação dos resultados em cirurgia de coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 109: Avaliação dos Resultados em Cirurgia de Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap109"
      }
    ]
  },
  {
    "id": "185",
    "slug": "sergio-mariano-zuazo",
    "nome": "Dr. Sérgio Mariano Zuazo",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 103 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Sérgio Mariano Zuazo é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 103,
        "titulo": "Abordagens para o Tratamento da Dor Pós-Operatória em Cirurgia de Coluna",
        "secao_id": 10,
        "secao_nome": "Temas Complementares",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de abordagens para o tratamento da dor pós-operatória em cirurgia de coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 103: Abordagens para o Tratamento da Dor Pós-Operatória em Cirurgia de Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap103"
      }
    ]
  },
  {
    "id": "186",
    "slug": "thiago-coutinho",
    "nome": "Dr. Thiago Coutinho",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 5 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Thiago Coutinho é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 5,
        "titulo": "Anatomia Cirúrgica e Vias de Acesso da Coluna Torácica",
        "secao_id": 1,
        "secao_nome": "Conceitos Básicos",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de anatomia cirúrgica e vias de acesso da coluna torácica pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 5: Anatomia Cirúrgica e Vias de Acesso da Coluna Torácica",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap5"
      }
    ]
  },
  {
    "id": "187",
    "slug": "tiago-ferreira-jorge",
    "nome": "Dr. Tiago Ferreira Jorge",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Tiago Ferreira Jorge é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 45,
        "titulo": "Hérnia de Disco Lombar",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de hérnia de disco lombar pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 65,
        "titulo": "Endoscopia na Coluna Cervical pela Via Posterior",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de endoscopia na coluna cervical pela via posterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 45: Hérnia de Disco Lombar",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap45"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 65: Endoscopia na Coluna Cervical pela Via Posterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap65"
      }
    ]
  },
  {
    "id": "188",
    "slug": "tulio-albuquerque-de-moura-rangel",
    "nome": "Dr. Túlio Albuquerque de Moura Rangel",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 29 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Túlio Albuquerque de Moura Rangel é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 29,
        "titulo": "Tratamento Não Cirúrgico das Escolioses",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de tratamento não cirúrgico das escolioses pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 29: Tratamento Não Cirúrgico das Escolioses",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap29"
      }
    ]
  },
  {
    "id": "189",
    "slug": "victor-cavalcante-schussel",
    "nome": "Dr. Victor Cavalcante Schussel",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Victor Cavalcante Schussel é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 45,
        "titulo": "Hérnia de Disco Lombar",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de hérnia de disco lombar pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 65,
        "titulo": "Endoscopia na Coluna Cervical pela Via Posterior",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de endoscopia na coluna cervical pela via posterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 45: Hérnia de Disco Lombar",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap45"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 65: Endoscopia na Coluna Cervical pela Via Posterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap65"
      }
    ]
  },
  {
    "id": "190",
    "slug": "victor-kelles-tupy-da-fonseca",
    "nome": "Dr. Victor Kelles Tupy da Fonseca",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 48 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Victor Kelles Tupy da Fonseca é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 48,
        "titulo": "Estenose Cervical, Mielopatia Cervical Degenerativa e Ossificação do Ligamento Longitudinal Posterior",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de estenose cervical, mielopatia cervical degenerativa e ossificação do ligamento longitudinal posterior pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 48: Estenose Cervical, Mielopatia Cervical Degenerativa e Ossificação do Ligamento Longitudinal Posterior",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap48"
      }
    ]
  },
  {
    "id": "191",
    "slug": "vincenzo-fin-falavigna",
    "nome": "Dr. Vincenzo Fin Falavigna",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 42 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Vincenzo Fin Falavigna é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 42,
        "titulo": "Fisiopatologia da Degeneração Discal",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de fisiopatologia da degeneração discal pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 42: Fisiopatologia da Degeneração Discal",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap42"
      }
    ]
  },
  {
    "id": "192",
    "slug": "vinicius-de-meldau-benites",
    "nome": "Dr. Vinicius de Meldau Benites",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 73 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Vinicius de Meldau Benites é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 73,
        "titulo": "Artroplastia da Coluna",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de artroplastia da coluna pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 73: Artroplastia da Coluna",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap73"
      }
    ]
  },
  {
    "id": "193",
    "slug": "vinicius-marques-carneiro",
    "nome": "Dr. Vinicius Marques Carneiro",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 92 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Vinicius Marques Carneiro é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 92,
        "titulo": "Navegação e Robótica",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de navegação e robótica pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 92: Navegação e Robótica",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap92"
      }
    ]
  },
  {
    "id": "194",
    "slug": "vinicius-tapie-guerra-e-silva",
    "nome": "Dr. Vinicius Tapie Guerra e Silva",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 88 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Vinicius Tapie Guerra e Silva é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 88,
        "titulo": "Vertebrectomia Torácica e Lombar nas Neoplasias",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de vertebrectomia torácica e lombar nas neoplasias pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 88: Vertebrectomia Torácica e Lombar nas Neoplasias",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap88"
      }
    ]
  },
  {
    "id": "195",
    "slug": "vinicius-antonio-santos-aragao",
    "nome": "Dr. Vinícius Antônio Santos Aragão",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor de 2 capítulo(s) no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Vinícius Antônio Santos Aragão é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 35,
        "titulo": "Escoliose do Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose do adulto pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      },
      {
        "num": 36,
        "titulo": "Escoliose nas Síndromes Genéticas",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de escoliose nas síndromes genéticas pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 35: Escoliose do Adulto",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap35"
      },
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 36: Escoliose nas Síndromes Genéticas",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap36"
      }
    ]
  },
  {
    "id": "196",
    "slug": "walison-jose-de-morais",
    "nome": "Dr. Walison José de Morais",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 67 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Walison José de Morais é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 67,
        "titulo": "Endoscopia Unilateral Biportal",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de endoscopia unilateral biportal pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 67: Endoscopia Unilateral Biportal",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap67"
      }
    ]
  },
  {
    "id": "197",
    "slug": "walterney-amancio-filho",
    "nome": "Dr. Walterney Amancio Filho",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 94 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Walterney Amancio Filho é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 94,
        "titulo": "Lesão Dural, Aracnoidite e Fibrose Pós-Operatória",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesão dural, aracnoidite e fibrose pós-operatória pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 94: Lesão Dural, Aracnoidite e Fibrose Pós-Operatória",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap94"
      }
    ]
  },
  {
    "id": "198",
    "slug": "werner-petry-silva",
    "nome": "Dr. Werner Petry Silva",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 17 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Werner Petry Silva é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 17,
        "titulo": "Diagnóstico Diferencial: Doenças da Coluna e Doenças Neurológicas",
        "secao_id": 2,
        "secao_nome": "Diagnóstico",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de diagnóstico diferencial: doenças da coluna e doenças neurológicas pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 17: Diagnóstico Diferencial: Doenças da Coluna e Doenças Neurológicas",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap17"
      }
    ]
  },
  {
    "id": "199",
    "slug": "william-gemio-jacobsen-teixeira",
    "nome": "Dr. William Gemio Jacobsen Teixeira",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 54 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. William Gemio Jacobsen Teixeira é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 54,
        "titulo": "Tumores Ósseos Primários Malignos",
        "secao_id": 6,
        "secao_nome": "Tumores na Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de tumores ósseos primários malignos pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 54: Tumores Ósseos Primários Malignos",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap54"
      }
    ]
  },
  {
    "id": "200",
    "slug": "wuilker-knoner-campos",
    "nome": "Dr. Wuilker Knoner Campos",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 94 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Wuilker Knoner Campos é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 94,
        "titulo": "Lesão Dural, Aracnoidite e Fibrose Pós-Operatória",
        "secao_id": 9,
        "secao_nome": "Complicações",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de lesão dural, aracnoidite e fibrose pós-operatória pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 94: Lesão Dural, Aracnoidite e Fibrose Pós-Operatória",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap94"
      }
    ]
  },
  {
    "id": "201",
    "slug": "xavier-soler-graells",
    "nome": "Dr. Xavier Soler Graells",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 25 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Xavier Soler Graells é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 25,
        "titulo": "Fraturas Vertebrais por Insuficiência",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de fraturas vertebrais por insuficiência pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 25: Fraturas Vertebrais por Insuficiência",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap25"
      }
    ]
  },
  {
    "id": "202",
    "slug": "zoraida-sachetto",
    "nome": "Dr. Zoraida Sachetto",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 59 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Zoraida Sachetto é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 59,
        "titulo": "Doenças Reumáticas da Coluna Vertebral",
        "secao_id": 7,
        "secao_nome": "Outras Doenças da Coluna",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de doenças reumáticas da coluna vertebral pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 59: Doenças Reumáticas da Coluna Vertebral",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap59"
      }
    ]
  },
  {
    "id": "203",
    "slug": "alynson-larocca-kulcheski",
    "nome": "Dr. Álynson Larocca Kulcheski",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 25 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-2.png",
    "bio_completa": "Dr. Álynson Larocca Kulcheski é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 25,
        "titulo": "Fraturas Vertebrais por Insuficiência",
        "secao_id": 3,
        "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de fraturas vertebrais por insuficiência pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 25: Fraturas Vertebrais por Insuficiência",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap25"
      }
    ]
  },
  {
    "id": "204",
    "slug": "aquila-matos-soares",
    "nome": "Dr. Áquila Matos Soares",
    "crm": "Membro Titular SBC",
    "cargo": "Autor / Coautor do Tratado de Cirurgia da Coluna Vertebral",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "cidade_estado": "Brasil",
    "destaque": "Autor do Capítulo 77 no Tratado Oficial da SBC",
    "foto_url": "/assets/avatar-1.png",
    "bio_completa": "Dr. Áquila Matos Soares é especialista em Cirurgia da Coluna Vertebral e membro atuante da Sociedade Brasileira de Coluna (SBC). Contribuiu como autor/coautor nos capítulos de referência do Tratado Oficial de Cirurgia da Coluna Vertebral da SBC, consolidando as diretrizes diagnósticas, terapêuticas e cirúrgicas contemporâneas da especialidade.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Coluna (SBC)",
      "Especialista em Cirurgia da Coluna Vertebral",
      "Autor Colaborador do Tratado de Cirurgia da Coluna Vertebral"
    ],
    "cargos_sociedades": [
      "Sociedade Brasileira de Coluna (SBC)",
      "Sociedade Brasileira de Ortopedia e Traumatologia / Neurocirurgia"
    ],
    "linhas_pesquisa": [
      "Técnicas Cirúrgicas Contemporâneas em Coluna Vertebral",
      "Padronização e Diretrizes Clínicas SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Tratamento de Patologias Espinhais",
      "Diretrizes Oficiais SBC"
    ],
    "capitulos_tratado": [
      {
        "num": 77,
        "titulo": "Laminoplastia Cervical: Princípios, Técnicas e Evidências Atuais",
        "secao_id": 8,
        "secao_nome": "Técnicas Cirúrgicas",
        "resumo_breve": "Diretrizes diagnósticas e terapêuticas para o manejo de laminoplastia cervical: princípios, técnicas e evidências atuais pela Sociedade Brasileira de Coluna.",
        "decs_mesh": [
          "Coluna Vertebral",
          "Cirurgia da Coluna",
          "SBC"
        ]
      }
    ],
    "publicacoes_destaque": [
      {
        "ano": "2026",
        "titulo": "Tratado de Cirurgia da Coluna Vertebral - Capítulo 77: Laminoplastia Cervical: Princípios, Técnicas e Evidências Atuais",
        "periodico": "Editora DiLivros / Sociedade Brasileira de Coluna (SBC)",
        "doi": "10.5935/sbc-tratado.2026.cap77"
      }
    ]
  },
];

export function getAuthorByIdOrSlug(identifier: string): AuthorProfile | undefined {
  if (!identifier) return undefined;
  const cleanId = decodeURIComponent(identifier).trim().toLowerCase();
  return AUTHORS_DIRECTORY.find(
    (a) => a.id === cleanId || a.slug === cleanId || a.slug === cleanId.replace(/^dr-|^dra-/, "")
  );
}

export function getAuthorByName(name: string): AuthorProfile | undefined {
  if (!name) return undefined;
  const clean = name.replace(/^(Dr\.|Dra\.|Prof\.|Profa\.)\s*/i, "").trim().toLowerCase();
  return AUTHORS_DIRECTORY.find(
    (a) => a.nome.replace(/^(Dr\.|Dra\.|Prof\.|Profa\.)\s*/i, "").trim().toLowerCase() === clean
  );
}

export function getAuthorsByChapter(chapterNum: number): AuthorProfile[] {
  return AUTHORS_DIRECTORY.filter((a) =>
    a.capitulos_tratado.some((c) => c.num === chapterNum)
  );
}

export function getAllAuthors(): AuthorProfile[] {
  return AUTHORS_DIRECTORY;
}
