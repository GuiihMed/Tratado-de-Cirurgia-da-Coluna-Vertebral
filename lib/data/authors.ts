export interface AuthorArticle {
  titulo: string;
  revista: string;
  ano: number;
  doi?: string;
  link?: string;
}

export interface AuthorChapter {
  num: number;
  titulo: string;
  secao_id: number;
  secao_nome: string;
}

export interface AuthorProfile {
  id: string;
  slug: string;
  nome: string;
  nome_vancouver?: string;
  cargo: string;
  instituicao: string;
  destaque: string;
  foto_url: string;
  orcid: string;
  orcid_url: string;
  bio_completa: string;
  titulacao_academica: string[];
  especialidades: string[];
  capitulos_tratado: AuthorChapter[];
  artigos_relevantes: AuthorArticle[];
}

export const AUTHORS_DIRECTORY: AuthorProfile[] = [
  {
    "id": "1",
    "slug": "adriano-m-lino-filho",
    "nome": "Adriano M. Lino Filho",
    "nome_vancouver": "Lino Filho AM",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade Federal de Goiás (UFG)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0007-8952-9662",
    "orcid_url": "https://orcid.org/0009-0007-8952-9662",
    "bio_completa": "Residente do Serviço de Neurocirurgia do Hospital das Clínicas da Universidade Federal de Goiás (HC-UFG).",
    "titulacao_academica": [
      "Residente do Serviço de Neurocirurgia do Hospital das Clínicas da Universidade Federal de Goiás (HC-UFG)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 3,
        "titulo": "Neuroanatomia Funcional da Medula Espinhal",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      },
      {
        "num": 43,
        "titulo": "Hérnia de Disco Cervical",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "2",
    "slug": "aecio-rubens-dias-pereira-filho",
    "nome": "Aécio Rubens Dias Pereira Filho",
    "nome_vancouver": "Pereira Filho ARD",
    "cargo": "Diretor e Fundador do Instituto de Acessos a Coluna Aécio Dias",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-7418-7574",
    "orcid_url": "https://orcid.org/0000-0001-7418-7574",
    "bio_completa": "Diretor e Fundador do Instituto de Acessos a Coluna Aécio Dias. Cirurgião de Acesso no Hospital Israelita Albert Einstein (HIAE), na Associação de Assistência à Criança Deficiente (AACD), no Hospital Sírio-Libanês (HSL), no Hospital Alemão Oswaldo Cruz e no Hospital Santa Catarina–Paulista. Médico Graduado pela Universidade de Taubaté (UNITAU). Residência de Cirurgia e Geral e Cirurgia Vascular pela Universidade Federal de São Paulo (Unifesp). Titular da Sociedade Brasileira de Angiologia e Cirurgia Vascular (SBACV).",
    "titulacao_academica": [
      "Diretor e Fundador do Instituto de Acessos a Coluna Aécio Dias. Cirurgião de Acesso no Hospital Israelita Albert Einstein (HIAE), na Associação de Assistência à Criança Deficiente (AACD), no Hospital Sírio-Libanês (HSL), no Hospital Alemão Oswaldo Cruz e no Hospital Santa Catarina–Paulista. Médico Graduado pela Universidade de Taubaté (UNITAU). Residência de Cirurgia e Geral e Cirurgia Vascular pela Universidade Federal de São Paulo (Unifesp). Titular da Sociedade Brasileira de Angiologia e Cirurgia Vascular (SBACV)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 6,
        "titulo": "Anatomia Cirúrgica e Abordagens da Junção Toracolombar",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      },
      {
        "num": 98,
        "titulo": "Complicações da Abordagem Anterior da Coluna",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "3",
    "slug": "alberto-ofenhejm-gotfryd",
    "nome": "Alberto Ofenhejm Gotfryd",
    "nome_vancouver": "Gotfryd AO",
    "cargo": "Médico Ortopedista e Traumatologista",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-3143-2845",
    "orcid_url": "https://orcid.org/0000-0003-3143-2845",
    "bio_completa": "Médico Ortopedista e Traumatologista. Mestre, Doutor e Pós-Doutor em Medicina pela Faculdade de Ciências Médicas da Santa Casa de São Paulo. Professor da Faculdade de Ciências Médicas da Santa Casa de São Paulo.",
    "titulacao_academica": [
      "Médico Ortopedista e Traumatologista. Mestre, Doutor e Pós-Doutor em Medicina pela Faculdade de Ciências Médicas da Santa Casa de São Paulo. Professor da Faculdade de Ciências Médicas da Santa Casa de São Paulo."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 84,
        "titulo": "Infiltrações e Bloqueios da Coluna",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "4",
    "slug": "alderico-girao-campos-de-barros",
    "nome": "Alderico Girão Campos de Barros",
    "nome_vancouver": "Barros AGC",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 4 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-8337-7676",
    "orcid_url": "https://orcid.org/0000-0002-8337-7676",
    "bio_completa": "Chefe Substituto do Grupo de Cirurgia de Coluna do Instituto Nacional de Traumatologia e Ortopedia (INTO). Mestre e Doutor pela Universidade de São Paulo (USP). Membro da Scoliosis Research Society e da Sociedade Brasileira de Coluna.",
    "titulacao_academica": [
      "Chefe Substituto do Grupo de Cirurgia de Coluna do Instituto Nacional de Traumatologia e Ortopedia (INTO). Mestre e Doutor pela Universidade de São Paulo (USP). Membro da Scoliosis Research Society e da Sociedade Brasileira de Coluna."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 37,
        "titulo": "Escoliose Idiopática de Alto Valor Angular",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 41,
        "titulo": "Deformidades da Coluna Cervical",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      },
      {
        "num": 53,
        "titulo": "Tumores Benignos e Lesões Pseudotumorais da Coluna",
        "secao_id": 6,
        "secao_nome": "Técnicas Minimamente Invasivas e Endoscopia"
      },
      {
        "num": 101,
        "titulo": "Junção Craniovertebral: Anormalidades Congênitas, Adquiridas e Trauma",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "5",
    "slug": "alessandro-gasbarrini",
    "nome": "Alessandro Gasbarrini",
    "nome_vancouver": "Gasbarrini A",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Istituto Ortopedico Rizzoli (Itália)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-9575-4061",
    "orcid_url": "https://orcid.org/0000-0002-9575-4061",
    "bio_completa": "Diretor do Departamento de Cirurgia da Coluna, IRCCS, Instituto Ortopédico Rizzoli, Bolonha, Itália. Professor Titular do Departamento de Ciências Biomédicas e Neuromotoras, Universidade de Bolonha, Bolonha, Itália.",
    "titulacao_academica": [
      "Diretor do Departamento de Cirurgia da Coluna, IRCCS, Instituto Ortopédico Rizzoli, Bolonha, Itália. Professor Titular do Departamento de Ciências Biomédicas e Neuromotoras, Universidade de Bolonha, Bolonha, Itália."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 88,
        "titulo": "Vertebrectomia Torácica e Lombar nas Neoplasias",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "6",
    "slug": "alessandro-maria-bianconi",
    "nome": "Alessandro Maria Bianconi",
    "nome_vancouver": "Bianconi AM",
    "cargo": "Residência Médica em Ortopedia no Instituto Galeazzi, Milão",
    "instituicao": "Instituto Nacional de Traumatologia e Ortopedia (INTO)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0004-1606-2078",
    "orcid_url": "https://orcid.org/0009-0004-1606-2078",
    "bio_completa": "Residência Médica em Ortopedia no Instituto Galeazzi, Milão. Pós-Graduando em Cirurgia da Coluna Vertebral pelo Instituto Nacional de Traumatologia e Ortopedia (INTO).",
    "titulacao_academica": [
      "Residência Médica em Ortopedia no Instituto Galeazzi, Milão. Pós-Graduando em Cirurgia da Coluna Vertebral pelo Instituto Nacional de Traumatologia e Ortopedia (INTO)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 101,
        "titulo": "Junção Craniovertebral: Anormalidades Congênitas, Adquiridas e Trauma",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "7",
    "slug": "alexander-junqueira-rossato",
    "nome": "Alexander Junqueira Rossato",
    "nome_vancouver": "Rossato AJ",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 3 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-2266-0504",
    "orcid_url": "https://orcid.org/0000-0003-2266-0504",
    "bio_completa": "Médico Ortopedista do Grupo de Escoliose da Associação de Assistência à Criança Deficiente (AACD). Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Membro Titular da Sociedade Brasileira de Coluna (SBC).",
    "titulacao_academica": [
      "Médico Ortopedista do Grupo de Escoliose da Associação de Assistência à Criança Deficiente (AACD). Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Membro Titular da Sociedade Brasileira de Coluna (SBC)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 31,
        "titulo": "Deformidades nos Disrafismos Espinhais",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 82,
        "titulo": "Aplicação do Halo e Tração Craniana",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      },
      {
        "num": 86,
        "titulo": "Técnica de Fixação Bipolar da Coluna Vertebral",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "8",
    "slug": "alexandre-fogaca-cristante",
    "nome": "Alexandre Fogaça Cristante",
    "nome_vancouver": "Cristante AF",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 3 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-7797-5274",
    "orcid_url": "https://orcid.org/0000-0002-7797-5274",
    "bio_completa": "Professor Titular do Departamento de Ortopedia e Traumatologia da Faculdade de Medicina da Universidade de São Paulo (FMUSP). Chefe do Grupo de Cirurgia da Coluna Vertebral do Instituto de Ortopedia e Traumatologia do Hospital das Clínicas da FMUSP (IOT-HC-FMUSP). Membro do Grupo de Escoliose da Associação de Assistência à Criança Deficiente (AACD). Presidente da Sociedade Brasileira de Coluna no biênio 2025-2026.",
    "titulacao_academica": [
      "Professor Titular do Departamento de Ortopedia e Traumatologia da Faculdade de Medicina da Universidade de São Paulo (FMUSP). Chefe do Grupo de Cirurgia da Coluna Vertebral do Instituto de Ortopedia e Traumatologia do Hospital das Clínicas da FMUSP (IOT-HC-FMUSP). Membro do Grupo de Escoliose da Associação de Assistência à Criança Deficiente (AACD). Presidente da Sociedade Brasileira de Coluna no biênio 2025-2026."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 24,
        "titulo": "Lesões Traumáticas da Coluna na Infância",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      },
      {
        "num": 28,
        "titulo": "Escoliose de Início Precoce",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 35,
        "titulo": "Escoliose do Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "9",
    "slug": "alexandre-medeiros-sampaio-januario",
    "nome": "Alexandre Medeiros Sampaio Januario",
    "nome_vancouver": "Januario AMS",
    "cargo": "Neurologista e Neurofisiologista Clínico",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0003-9773-2741",
    "orcid_url": "https://orcid.org/0009-0003-9773-2741",
    "bio_completa": "Neurologista e Neurofisiologista Clínico. Membro Titular da Academia Brasileira de Neurologia (ABN) e da Sociedade Brasileira de Neurofisiologia Clínica (SBNC). Coordenador do Departamento de Monitorização Neurofisiológica e Potenciais evocados da SBNC.",
    "titulacao_academica": [
      "Neurologista e Neurofisiologista Clínico. Membro Titular da Academia Brasileira de Neurologia (ABN) e da Sociedade Brasileira de Neurofisiologia Clínica (SBNC). Coordenador do Departamento de Monitorização Neurofisiológica e Potenciais evocados da SBNC."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 99,
        "titulo": "Lesão Neurológica Perioperatória",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "10",
    "slug": "alexandre-philippe-boss-jaccard",
    "nome": "Alexandre Philippe Boss Jaccard",
    "nome_vancouver": "Jaccard APB",
    "cargo": "Médico pela Universidade do Oeste Paulista (Unoeste)",
    "instituicao": "Universidade Estadual de Campinas (Unicamp)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-6198-3539",
    "orcid_url": "https://orcid.org/0000-0001-6198-3539",
    "bio_completa": "Médico pela Universidade do Oeste Paulista (Unoeste). Ortopedista e Traumatologista pela Universidade Estadual de Campinas (Unicamp). Fellowship em Cirurgia da Coluna Vertebral pela Unicamp. AO Spine Fellowship na Suíça. Mestrado em Ciências da Reabilitação pela Universidade Estadual de Londrina (UEL)/Universidade Norte do Paraná (UNOPAR). Ex-Professor da Pontifícia Universidade Católica do Paraná (PUC-PR – Campus Londrina). Membro do Board Nacional da AO Spine (Brazil Council Education Ortho). Faculty da AO Spine Brasil.",
    "titulacao_academica": [
      "Médico pela Universidade do Oeste Paulista (Unoeste). Ortopedista e Traumatologista pela Universidade Estadual de Campinas (Unicamp). Fellowship em Cirurgia da Coluna Vertebral pela Unicamp. AO Spine Fellowship na Suíça. Mestrado em Ciências da Reabilitação pela Universidade Estadual de Londrina (UEL)/Universidade Norte do Paraná (UNOPAR). Ex-Professor da Pontifícia Universidade Católica do Paraná (PUC-PR – Campus Londrina). Membro do Board Nacional da AO Spine (Brazil Council Education Ortho). Faculty da AO Spine Brasil."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 22,
        "titulo": "Lesões Traumáticas da Coluna Torácica e Lombar",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "11",
    "slug": "alisson-roberto-teles",
    "nome": "Alisson Roberto Teles",
    "nome_vancouver": "Teles AR",
    "cargo": "Médico Neurocirurgião",
    "instituicao": "Santa Casa de São Paulo",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-2169-8156",
    "orcid_url": "https://orcid.org/0000-0003-2169-8156",
    "bio_completa": "Médico Neurocirurgião. Fellowship em Escoliose e Cirurgia da Coluna pela McGill University. Fellowship em Cirurgia Complexa da Coluna pela University of Calgary. Membro da Sociedade Brasileira de Neurocirurgia (SBN). Membro da Sociedade Brasileira de Coluna (SBC). Membro do Corpo Clínico do Núcleo de Neurocirurgia da Coluna do Hospital São José – Santa Casa de Porto Alegre.",
    "titulacao_academica": [
      "Médico Neurocirurgião. Fellowship em Escoliose e Cirurgia da Coluna pela McGill University. Fellowship em Cirurgia Complexa da Coluna pela University of Calgary. Membro da Sociedade Brasileira de Neurocirurgia (SBN). Membro da Sociedade Brasileira de Coluna (SBC). Membro do Corpo Clínico do Núcleo de Neurocirurgia da Coluna do Hospital São José – Santa Casa de Porto Alegre."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 72,
        "titulo": "Artrodese Lombar Anterior",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "12",
    "slug": "aluizio-augusto-arantes-junior",
    "nome": "Aluízio Augusto Arantes Junior",
    "nome_vancouver": "Arantes Junior AA",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade Federal de Minas Gerais (UFMG)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-9475-7420",
    "orcid_url": "https://orcid.org/0000-0002-9475-7420",
    "bio_completa": "Professor Associado de Neurocirurgia da Faculdade de Medicina da Universidade Federal de Minas Gerais (UFMG).",
    "titulacao_academica": [
      "Professor Associado de Neurocirurgia da Faculdade de Medicina da Universidade Federal de Minas Gerais (UFMG)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 3,
        "titulo": "Neuroanatomia Funcional da Medula Espinhal",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      },
      {
        "num": 43,
        "titulo": "Hérnia de Disco Cervical",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "13",
    "slug": "alvaro-diego-heredia-suarez",
    "nome": "Alvaro Diego Heredia Suarez",
    "nome_vancouver": "Suarez ADH",
    "cargo": "Médico Ortopedista e Traumatologia",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-6561-9654",
    "orcid_url": "https://orcid.org/0000-0001-6561-9654",
    "bio_completa": "Médico Ortopedista e Traumatologia. Especialista em Cirurgia da Coluna Vertebral. Membro da Sociedade Brasileira de Coluna Vertebral (SBC). Pós-Graduado em Cirurgia Endoscópica da Coluna (USP-RP). Instrutor da Residência Médica do Hospital São Vicente de Paulo (HSVP) e da Universidade Federal da Fronteira Sul (UFFS) – Passo Fundo/RS.",
    "titulacao_academica": [
      "Médico Ortopedista e Traumatologia. Especialista em Cirurgia da Coluna Vertebral. Membro da Sociedade Brasileira de Coluna Vertebral (SBC). Pós-Graduado em Cirurgia Endoscópica da Coluna (USP-RP). Instrutor da Residência Médica do Hospital São Vicente de Paulo (HSVP) e da Universidade Federal da Fronteira Sul (UFFS) – Passo Fundo/RS."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 20,
        "titulo": "Lesões Traumáticas da Coluna Cervical Alta",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      },
      {
        "num": 68,
        "titulo": "Artrodese Intersomática Lombar Posterior",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "14",
    "slug": "alynson-larocca-kulcheski",
    "nome": "Álynson Larocca Kulcheski",
    "nome_vancouver": "Kulcheski AL",
    "cargo": "Médico Ortopedista",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-0132-6083",
    "orcid_url": "https://orcid.org/0000-0002-0132-6083",
    "bio_completa": "Médico Ortopedista. Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Especialista em Cirurgia de Coluna pela Sociedade Brasileira de Coluna (SBC). Mestre e Doutor em Clínica Cirúrgica pela Universidade Federal do Paraná (UFPR). Professor Assistente da Disciplina de Ortopedia e Trauma-tologia da Universidade Federal do Paraná (UFPR). Especialista em Ensino Médico pela UFPR. Preceptor da Especialização em Cirurgia de Coluna Vertebral do Hospital do Trabalhador (HT), Curitiba. Membro da Comissão de Ensino e Treinamento da SBOT-PR. Consultor em Cirurgias Minimamente Invasivas da Coluna Vertebral.",
    "titulacao_academica": [
      "Médico Ortopedista. Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Especialista em Cirurgia de Coluna pela Sociedade Brasileira de Coluna (SBC). Mestre e Doutor em Clínica Cirúrgica pela Universidade Federal do Paraná (UFPR). Professor Assistente da Disciplina de Ortopedia e Trauma-tologia da Universidade Federal do Paraná (UFPR). Especialista em Ensino Médico pela UFPR. Preceptor da Especialização em Cirurgia de Coluna Vertebral do Hospital do Trabalhador (HT), Curitiba. Membro da Comissão de Ensino e Treinamento da SBOT-PR. Consultor em Cirurgias Minimamente Invasivas da Coluna Vertebral."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 25,
        "titulo": "Fraturas Vertebrais por Insuficiência",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "15",
    "slug": "anderson-clayton-cardeal",
    "nome": "Anderson Clayton Cardeal",
    "nome_vancouver": "Cardeal AC",
    "cargo": "R5 do Hospital do Servidor Estadual de São Paulo (HSPE-SP)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-2032-6222",
    "orcid_url": "https://orcid.org/0000-0002-2032-6222",
    "bio_completa": "R5 do Hospital do Servidor Estadual de São Paulo (HSPE-SP). Residência em Ortopedia e Traumatologia pela Faculdade de Medicina da Universidade de São Paulo (USP). Faculdade de Medicina pela Universidade Federal do Triangulo Mineiro (UFTM).",
    "titulacao_academica": [
      "R5 do Hospital do Servidor Estadual de São Paulo (HSPE-SP). Residência em Ortopedia e Traumatologia pela Faculdade de Medicina da Universidade de São Paulo (USP). Faculdade de Medicina pela Universidade Federal do Triangulo Mineiro (UFTM)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 26,
        "titulo": "Deformidades Pós-Traumáticas",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "16",
    "slug": "andre-flavio-freire-pereira",
    "nome": "André Flávio Freire Pereira",
    "nome_vancouver": "Pereira AFF",
    "cargo": "Médico pela Universidade Federal de Pernambuco (UFPE)",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-7108-9442",
    "orcid_url": "https://orcid.org/0000-0001-7108-9442",
    "bio_completa": "Médico pela Universidade Federal de Pernambuco (UFPE). Residência em Ortopedia e Traumatologia pelo Hospital Getúlio Vargas Recife/PE. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Membro da Sociedade Brasileira de Coluna (SBC).",
    "titulacao_academica": [
      "Médico pela Universidade Federal de Pernambuco (UFPE). Residência em Ortopedia e Traumatologia pelo Hospital Getúlio Vargas Recife/PE. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Membro da Sociedade Brasileira de Coluna (SBC)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 29,
        "titulo": "Tratamento Não Cirúrgico das Escolioses",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "17",
    "slug": "andre-frazao-rosa",
    "nome": "André Frazao Rosa",
    "nome_vancouver": "Rosa AF",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade Estadual de Campinas (Unicamp)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-6765-5552",
    "orcid_url": "https://orcid.org/0000-0001-6765-5552",
    "bio_completa": "Médico Assistente do Grupo de Coluna do Departamento de Ortopedia, Reumatologia e Traumatologia da Universi-dade Estadual de Campinas (Unicamp). Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Membro Efetivo da Sociedade Brasileira de Coluna (SBC).",
    "titulacao_academica": [
      "Médico Assistente do Grupo de Coluna do Departamento de Ortopedia, Reumatologia e Traumatologia da Universi-dade Estadual de Campinas (Unicamp). Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Membro Efetivo da Sociedade Brasileira de Coluna (SBC)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 55,
        "titulo": "Tumores Metastáticos na Coluna",
        "secao_id": 6,
        "secao_nome": "Técnicas Minimamente Invasivas e Endoscopia"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "18",
    "slug": "andre-luis-fernandes-andujar",
    "nome": "André Luis Fernandes Andujar",
    "nome_vancouver": "Andujar ALF",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-5669-9445",
    "orcid_url": "https://orcid.org/0000-0001-5669-9445",
    "bio_completa": "Médico Ortopedista Pediátrico e Cirurgião de Coluna do Hospital Infantil Joana de Gusmão e do Hospital de Caridade de Florianópolis.",
    "titulacao_academica": [
      "Médico Ortopedista Pediátrico e Cirurgião de Coluna do Hospital Infantil Joana de Gusmão e do Hospital de Caridade de Florianópolis."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 38,
        "titulo": "Espondilolistese na Criança",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 83,
        "titulo": "Colete Gessado para Escoliose de Início Precoce",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "19",
    "slug": "andre-luis-sebben",
    "nome": "André Luís Sebben",
    "nome_vancouver": "Sebben AL",
    "cargo": "Médico Ortopedista",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-6303-3545",
    "orcid_url": "https://orcid.org/0000-0001-6303-3545",
    "bio_completa": "Médico Ortopedista. Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Especialista em Cirurgia de Coluna pela Sociedade Brasileira de Coluna (SBC). Preceptor da Especialização em Cirurgia de Coluna Vertebral do Hospital do Trabalhador (HT), Curitiba. Consultor em Cirurgias Endoscópicas da Coluna Vertebral.",
    "titulacao_academica": [
      "Médico Ortopedista. Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Especialista em Cirurgia de Coluna pela Sociedade Brasileira de Coluna (SBC). Preceptor da Especialização em Cirurgia de Coluna Vertebral do Hospital do Trabalhador (HT), Curitiba. Consultor em Cirurgias Endoscópicas da Coluna Vertebral."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 25,
        "titulo": "Fraturas Vertebrais por Insuficiência",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "20",
    "slug": "andre-rafael-hubner",
    "nome": "André Rafael Hübner",
    "nome_vancouver": "Hübner AR",
    "cargo": "Médico Ortopedista",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-3374-5864",
    "orcid_url": "https://orcid.org/0000-0002-3374-5864",
    "bio_completa": "Médico Ortopedista. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Membro da Sociedade Brasileira de Coluna Vertebral (SBC). Especialização em Cirurgia da Coluna Vertebral Centre Hospitalier Universitaire CHU-Pellegrin – Prof. Jean M.Vital – Bordeaux-Fr e Centre Aquitaine du Dos Pesac – Fr Prof. Jaques Sènegas. Instrutor da Residência Médica do Hospital São Vicente Paulo (HSVP) e da Universidade Federal da Fronteira Sul (UFFS) – Passo Fundo/RS.",
    "titulacao_academica": [
      "Médico Ortopedista. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Membro da Sociedade Brasileira de Coluna Vertebral (SBC). Especialização em Cirurgia da Coluna Vertebral Centre Hospitalier Universitaire CHU-Pellegrin – Prof. Jean M.Vital – Bordeaux-Fr e Centre Aquitaine du Dos Pesac – Fr Prof. Jaques Sènegas. Instrutor da Residência Médica do Hospital São Vicente Paulo (HSVP) e da Universidade Federal da Fronteira Sul (UFFS) – Passo Fundo/RS."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 20,
        "titulo": "Lesões Traumáticas da Coluna Cervical Alta",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "21",
    "slug": "andrei-fernandes-joaquim",
    "nome": "Andrei Fernandes Joaquim",
    "nome_vancouver": "Joaquim AF",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade Estadual de Campinas (Unicamp)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-2645-0483",
    "orcid_url": "https://orcid.org/0000-0003-2645-0483",
    "bio_completa": "Professor Associado da Disciplina de Neurocirurgia da Universidade Estadual de Campinas (Unicamp).",
    "titulacao_academica": [
      "Professor Associado da Disciplina de Neurocirurgia da Universidade Estadual de Campinas (Unicamp)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 109,
        "titulo": "Capítulo 109",
        "secao_id": 1,
        "secao_nome": "Tratado de Cirurgia da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "22",
    "slug": "antonio-gutemberg-de-s-martins",
    "nome": "Antonio Gutemberg de S. Martins",
    "nome_vancouver": "Martins AGS",
    "cargo": "Médico Neurocirurgião",
    "instituicao": "Santa Casa de São Paulo",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0003-6595-792X",
    "orcid_url": "https://orcid.org/0009-0003-6595-792X",
    "bio_completa": "Médico Neurocirurgião. Membro da Sociedade Brasileira de Neurocirurgia (SBN). Fellowship em Cirurgia de Coluna pelo Hospital São José – Santa Casa de Porto Alegre.",
    "titulacao_academica": [
      "Médico Neurocirurgião. Membro da Sociedade Brasileira de Neurocirurgia (SBN). Fellowship em Cirurgia de Coluna pelo Hospital São José – Santa Casa de Porto Alegre."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 72,
        "titulo": "Artrodese Lombar Anterior",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "23",
    "slug": "aquila-matos-soares",
    "nome": "Áquila Matos Soares",
    "nome_vancouver": "Soares AM",
    "cargo": "Médico Graduado pela Universidade Federal da Paraíba (UFPB)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0008-9339-1931",
    "orcid_url": "https://orcid.org/0009-0008-9339-1931",
    "bio_completa": "Médico Graduado pela Universidade Federal da Paraíba (UFPB). Residência Médica em Neurocirurgia pelo Hospital Geral de Fortaleza. Título de Especialista em Neurocirurgia pela Sociedade Brasileira de Neurocirurgia (SBN) e pela Associação Médica Brasileira (AMB). Fellowship em Cirurgia da Coluna Vertebral pelo HC da Faculdade de Medicina da Universidade de São Paulo (HC-FMUSP).",
    "titulacao_academica": [
      "Médico Graduado pela Universidade Federal da Paraíba (UFPB). Residência Médica em Neurocirurgia pelo Hospital Geral de Fortaleza. Título de Especialista em Neurocirurgia pela Sociedade Brasileira de Neurocirurgia (SBN) e pela Associação Médica Brasileira (AMB). Fellowship em Cirurgia da Coluna Vertebral pelo HC da Faculdade de Medicina da Universidade de São Paulo (HC-FMUSP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 77,
        "titulo": "Laminoplastia Cervical: Princípios, Técnicas e Evidências Atuais",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "24",
    "slug": "arthur-sampaio-facanha",
    "nome": "Arthur Sampaio Façanha",
    "nome_vancouver": "Façanha AS",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-7489-0745",
    "orcid_url": "https://orcid.org/0000-0001-7489-0745",
    "bio_completa": "Fellow em Coluna Vertebral do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (FMUSP).",
    "titulacao_academica": [
      "Fellow em Coluna Vertebral do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (FMUSP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 80,
        "titulo": "Técnicas de Fixação na Coluna Osteoporótica",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      },
      {
        "num": 90,
        "titulo": "Cirurgia Complexa dos Tumores Cervicais",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "25",
    "slug": "asdrubal-falavigna",
    "nome": "Asdrubal Falavigna",
    "nome_vancouver": "Falavigna A",
    "cargo": "Médico Neurocirurgião",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-0016-3198",
    "orcid_url": "https://orcid.org/0000-0002-0016-3198",
    "bio_completa": "Médico Neurocirurgião. Mestre e Doutor pela Universidade Federal de São Paulo (USP). Vice-Reitor da Universidade de Caxias do Sul. Membro do Conselho da Fundação AO (Associação AOSpine Latin America).",
    "titulacao_academica": [
      "Médico Neurocirurgião. Mestre e Doutor pela Universidade Federal de São Paulo (USP). Vice-Reitor da Universidade de Caxias do Sul. Membro do Conselho da Fundação AO (Associação AOSpine Latin America)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 42,
        "titulo": "Fisiopatologia da Degeneração Discal",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "26",
    "slug": "bernardo-drummond-braga",
    "nome": "Bernardo Drummond Braga",
    "nome_vancouver": "Braga BD",
    "cargo": "Médico Neurocirurgião do Instituto de Neurologia de Goiânia",
    "instituicao": "Universidade Federal de Minas Gerais (UFMG)",
    "destaque": "Autor de 3 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-8027-0929",
    "orcid_url": "https://orcid.org/0000-0002-8027-0929",
    "bio_completa": "Médico Neurocirurgião do Instituto de Neurologia de Goiânia. Professor da Neurocirurgia da Universidade Federal de Goiás (UFG). Mestre em Cirurgia pela Universidade Federal de Minas Gerais (UFMG). Doutor em Ciências da Saúde pela UFG.",
    "titulacao_academica": [
      "Médico Neurocirurgião do Instituto de Neurologia de Goiânia. Professor da Neurocirurgia da Universidade Federal de Goiás (UFG). Mestre em Cirurgia pela Universidade Federal de Minas Gerais (UFMG). Doutor em Ciências da Saúde pela UFG."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 3,
        "titulo": "Neuroanatomia Funcional da Medula Espinhal",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      },
      {
        "num": 43,
        "titulo": "Hérnia de Disco Cervical",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      },
      {
        "num": 67,
        "titulo": "Endoscopia Unilateral Biportal",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "27",
    "slug": "brian-guilherme-monteiro-marta-coimbra",
    "nome": "Brian Guilherme Monteiro Marta Coimbra",
    "nome_vancouver": "Coimbra BGMM",
    "cargo": "Doutor pela Faculdade de Medicina da Universidade de São Paulo (USP)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-5461-3644",
    "orcid_url": "https://orcid.org/0000-0001-5461-3644",
    "bio_completa": "Doutor pela Faculdade de Medicina da Universidade de São Paulo (USP).",
    "titulacao_academica": [
      "Doutor pela Faculdade de Medicina da Universidade de São Paulo (USP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 54,
        "titulo": "Tumores Ósseos Primários Malignos",
        "secao_id": 6,
        "secao_nome": "Técnicas Minimamente Invasivas e Endoscopia"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "28",
    "slug": "bruno-da-costa-ancheschi",
    "nome": "Bruno da Costa Ancheschi",
    "nome_vancouver": "Ancheschi BC",
    "cargo": "Médico pela Universidade Estadual Paulista (UNESP)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-0890-4456",
    "orcid_url": "https://orcid.org/0000-0002-0890-4456",
    "bio_completa": "Médico pela Universidade Estadual Paulista (UNESP). Ortopedista e Traumatologista pela UNESP. Título pela Sociedade Brasileira de Ortopedia (SBOT). Fellow em Cirurgia da Coluna Vertebral pela Universidade de São Paulo (USP-Ribeirão Preto). Mestre em Ciências da Saúde Aplicadas ao Aparelho Loco-motor (USP-Ribeirão Preto). Título pela Sociedade Brasileira de Coluna (SBC). Médico Assistente do Departamento de Ortopedia da Faculdade de Medicina de Botucatu (UNESP)",
    "titulacao_academica": [
      "Médico pela Universidade Estadual Paulista (UNESP). Ortopedista e Traumatologista pela UNESP. Título pela Sociedade Brasileira de Ortopedia (SBOT). Fellow em Cirurgia da Coluna Vertebral pela Universidade de São Paulo (USP-Ribeirão Preto). Mestre em Ciências da Saúde Aplicadas ao Aparelho Loco-motor (USP-Ribeirão Preto). Título pela Sociedade Brasileira de Coluna (SBC). Médico Assistente do Departamento de Ortopedia da Faculdade de Medicina de Botucatu (UNESP)"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 4,
        "titulo": "Anatomia Cirúrgica e Vias de Acesso da Coluna Cervical",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      },
      {
        "num": 93,
        "titulo": "Infecções Pós-Operatórias",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "29",
    "slug": "bruno-pinto-coelho-fontes",
    "nome": "Bruno Pinto Coelho Fontes",
    "nome_vancouver": "Fontes BPC",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-7381-7298",
    "orcid_url": "https://orcid.org/0000-0001-7381-7298",
    "bio_completa": "Médico Ortopedista Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT) e Sociedade Brasileira de Coluna (SBC). Chefe do Serviço de Cirurgia de Coluna do Hospital da Baleia (Belo Horizonte/MG).",
    "titulacao_academica": [
      "Médico Ortopedista Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT) e Sociedade Brasileira de Coluna (SBC). Chefe do Serviço de Cirurgia de Coluna do Hospital da Baleia (Belo Horizonte/MG)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 85,
        "titulo": "Sistemas de Crescimento Guiado para Deformidades da Coluna: Hastes de Crescimento Tradicionais",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "30",
    "slug": "caio-cesar-nogueira-de-figueiredo",
    "nome": "Caio César Nogueira de Figueiredo",
    "nome_vancouver": "Figueiredo CCN",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0007-1170-3595",
    "orcid_url": "https://orcid.org/0009-0007-1170-3595",
    "bio_completa": "Departamento de Ortopedia e Traumatologia do Instituto de Ortopedia e Traumatologia do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HCFM-USP).",
    "titulacao_academica": [
      "Departamento de Ortopedia e Traumatologia do Instituto de Ortopedia e Traumatologia do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HCFM-USP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 24,
        "titulo": "Lesões Traumáticas da Coluna na Infância",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      },
      {
        "num": 28,
        "titulo": "Escoliose de Início Precoce",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "31",
    "slug": "carlos-abreu-de-aguiar",
    "nome": "Carlos Abreu de Aguiar",
    "nome_vancouver": "Aguiar CA",
    "cargo": "Médico Ortopedista e Traumatologista pelo Hospital Universitário Cajuru",
    "instituicao": "Pontifícia Universidade Católica do Paraná (PUC-PR)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-4310-6537",
    "orcid_url": "https://orcid.org/0000-0003-4310-6537",
    "bio_completa": "Médico Ortopedista e Traumatologista pelo Hospital Universitário Cajuru. Especialização em Ortopedia Pediátrica pelo Hospital Pequeno Príncipe. Fellow em Deformidades da Coluna Pediátrica pela University of Iowa Hospitals and Clinics. Membro da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT), da Sociedade Brasileira de Ortopedia Pediátrica (SBOP), da Sociedade Brasileira de Coluna (SBC), AOSpine e da Sociedade Brasileira da Coluna (SBC). Médico do Hospital Pequeno Príncipe.",
    "titulacao_academica": [
      "Médico Ortopedista e Traumatologista pelo Hospital Universitário Cajuru. Especialização em Ortopedia Pediátrica pelo Hospital Pequeno Príncipe. Fellow em Deformidades da Coluna Pediátrica pela University of Iowa Hospitals and Clinics. Membro da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT), da Sociedade Brasileira de Ortopedia Pediátrica (SBOP), da Sociedade Brasileira de Coluna (SBC), AOSpine e da Sociedade Brasileira da Coluna (SBC). Médico do Hospital Pequeno Príncipe."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 30,
        "titulo": "Escoliose Neuromuscular",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 33,
        "titulo": "Deformidades Congênitas da Coluna Vertebral",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "32",
    "slug": "carlos-andres-amelunge-rodriguez",
    "nome": "Carlos Andres Amelunge Rodriguez",
    "nome_vancouver": "Rodriguez CAA",
    "cargo": "Médico pela Universidad Autónoma Gabriel René Moreno (Santa Cruz de la Sierra – Bolívia)",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-0877-9624",
    "orcid_url": "https://orcid.org/0000-0002-0877-9624",
    "bio_completa": "Médico pela Universidad Autónoma Gabriel René Moreno (Santa Cruz de la Sierra – Bolívia). Ortopedista e Traumatologista pela Fundação Centro Médico de Campinas (FCMC). Fellowship em Cirurgia da Coluna Vertebral pela FCMC e pela Pontifícia Universidade Católica de Campinas (PUC-Campinas).",
    "titulacao_academica": [
      "Médico pela Universidad Autónoma Gabriel René Moreno (Santa Cruz de la Sierra – Bolívia). Ortopedista e Traumatologista pela Fundação Centro Médico de Campinas (FCMC). Fellowship em Cirurgia da Coluna Vertebral pela FCMC e pela Pontifícia Universidade Católica de Campinas (PUC-Campinas)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 22,
        "titulo": "Lesões Traumáticas da Coluna Torácica e Lombar",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "33",
    "slug": "carlos-eduardo-garcez-teixeira",
    "nome": "Carlos Eduardo Garcez Teixeira",
    "nome_vancouver": "Teixeira CEG",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade Estadual de Campinas (Unicamp)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-5340-6894",
    "orcid_url": "https://orcid.org/0000-0002-5340-6894",
    "bio_completa": "Médico Reumatologista pelo Hospital de Clínicas da Universidade Estadual de Campinas (HC-Unicamp). Doutorando pelo Programa de Pós-Graduação em Clínica Médica da Faculdade de Ciências Médicas (FCM-Unicamp). Reumatologista Assistente no Centro de Dispensação de Medicamentos de Alto Custo (CEDMAC-Unicamp).",
    "titulacao_academica": [
      "Médico Reumatologista pelo Hospital de Clínicas da Universidade Estadual de Campinas (HC-Unicamp). Doutorando pelo Programa de Pós-Graduação em Clínica Médica da Faculdade de Ciências Médicas (FCM-Unicamp). Reumatologista Assistente no Centro de Dispensação de Medicamentos de Alto Custo (CEDMAC-Unicamp)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 59,
        "titulo": "Doenças Reumáticas da Coluna Vertebral",
        "secao_id": 7,
        "secao_nome": "Tumores e Infecções da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "34",
    "slug": "carlos-eduardo-goncales-barsotti",
    "nome": "Carlos Eduardo Gonçales Barsotti",
    "nome_vancouver": "Barsotti CEG",
    "cargo": "Faculdade de Medicina pela Universidade de São Paulo (USP)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0007-2322-7047",
    "orcid_url": "https://orcid.org/0009-0007-2322-7047",
    "bio_completa": "Faculdade de Medicina pela Universidade de São Paulo (USP). Coordenador do Fellowship de Coluna Vertebral do Hospital do Servidor Estadual de São Paulo (HSPE-SP). Mestre em Ortopedia pelo HSPE-SP. Residência em Ortopedia e Traumatologia na Faculdade de Medicina da USP.",
    "titulacao_academica": [
      "Faculdade de Medicina pela Universidade de São Paulo (USP). Coordenador do Fellowship de Coluna Vertebral do Hospital do Servidor Estadual de São Paulo (HSPE-SP). Mestre em Ortopedia pelo HSPE-SP. Residência em Ortopedia e Traumatologia na Faculdade de Medicina da USP."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 26,
        "titulo": "Deformidades Pós-Traumáticas",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "35",
    "slug": "charbel-jacob-junior",
    "nome": "Charbel Jacob Junior",
    "nome_vancouver": "Jacob Junior C",
    "cargo": "Médico Ortopedista Especialista em Coluna",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-1301-5805",
    "orcid_url": "https://orcid.org/0000-0002-1301-5805",
    "bio_completa": "Médico Ortopedista Especialista em Coluna.",
    "titulacao_academica": [
      "Médico Ortopedista Especialista em Coluna."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 18,
        "titulo": "Avaliação da Coluna do Paciente Politraumatizado",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      },
      {
        "num": 96,
        "titulo": "Doença do Nível Adjacente",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "36",
    "slug": "charles-andre-carazzo",
    "nome": "Charles André Carazzo",
    "nome_vancouver": "Carazzo CA",
    "cargo": "Médico Graduado pela Universidade de Passo Fundo (UPF)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-6339-2214",
    "orcid_url": "https://orcid.org/0000-0001-6339-2214",
    "bio_completa": "Médico Graduado pela Universidade de Passo Fundo (UPF). Residência em Neurocirurgia pelo Hospital São Vicente de Paulo (HSVP) e pelo Instituto de Neurologia e Neurocirurgia (INN) de Passo Fundo, RS. Fellow em Cirurgia da Coluna Vertebral no Hospital das Clínicas da Universidade de São Paulo (HC-USP). Fellow em Cirurgia da Coluna Vertebral na Universidade de Ulm, Alemanha. Título de Especialista em Dor pela Associação Médica Brasileira (AMB). Mestrado e Doutorado pela Universidade de Caxias do Sul (UCS). Médico Neurocirurgião do HSVP e INN de Passo Fundo, RS. Coordenador do Fellow de Coluna do INN-HSVP/Sociedade Brasileira de Coluna (SBC). Professor de Neurocirurgia da Escola de Medicina da Universidade de Passo Fundo (UPF).",
    "titulacao_academica": [
      "Médico Graduado pela Universidade de Passo Fundo (UPF). Residência em Neurocirurgia pelo Hospital São Vicente de Paulo (HSVP) e pelo Instituto de Neurologia e Neurocirurgia (INN) de Passo Fundo, RS. Fellow em Cirurgia da Coluna Vertebral no Hospital das Clínicas da Universidade de São Paulo (HC-USP). Fellow em Cirurgia da Coluna Vertebral na Universidade de Ulm, Alemanha. Título de Especialista em Dor pela Associação Médica Brasileira (AMB). Mestrado e Doutorado pela Universidade de Caxias do Sul (UCS). Médico Neurocirurgião do HSVP e INN de Passo Fundo, RS. Coordenador do Fellow de Coluna do INN-HSVP/Sociedade Brasileira de Coluna (SBC). Professor de Neurocirurgia da Escola de Medicina da Universidade de Passo Fundo (UPF)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 17,
        "titulo": "Diagnóstico Diferencial: Doenças da Coluna e Doenças Neurológicas",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "37",
    "slug": "cheila-mara-freu",
    "nome": "Cheila Mara Freu",
    "nome_vancouver": "Freu CM",
    "cargo": "Enfermeira Mestra em Gestão do Cuidado em Enfermagem",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-2722-6478",
    "orcid_url": "https://orcid.org/0000-0002-2722-6478",
    "bio_completa": "Enfermeira Mestra em Gestão do Cuidado em Enfermagem.",
    "titulacao_academica": [
      "Enfermeira Mestra em Gestão do Cuidado em Enfermagem."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 83,
        "titulo": "Colete Gessado para Escoliose de Início Precoce",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "38",
    "slug": "chiara-cini",
    "nome": "Chiara Cini",
    "nome_vancouver": "Cini C",
    "cargo": "Departamento de Cirurgia da Coluna, IRCCS Instituto Ortopédico Rizzoli, Bolonha, Itália",
    "instituicao": "Istituto Ortopedico Rizzoli (Itália)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "",
    "orcid_url": "",
    "bio_completa": "Departamento de Cirurgia da Coluna, IRCCS Instituto Ortopédico Rizzoli, Bolonha, Itália.",
    "titulacao_academica": [
      "Departamento de Cirurgia da Coluna, IRCCS Instituto Ortopédico Rizzoli, Bolonha, Itália."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 88,
        "titulo": "Vertebrectomia Torácica e Lombar nas Neoplasias",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "39",
    "slug": "christiano-esteves-simoes",
    "nome": "Christiano Esteves Simões",
    "nome_vancouver": "Simões CE",
    "cargo": "Médico Ortopedista do Departamento de Ortopedia e Traumatologia do Hospital Felício Rocho",
    "instituicao": "Santa Casa de São Paulo",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0007-1278-9829",
    "orcid_url": "https://orcid.org/0009-0007-1278-9829",
    "bio_completa": "Médico Ortopedista do Departamento de Ortopedia e Traumatologia do Hospital Felício Rocho. Especialização em Cirurgia da Coluna Vertebral pela Pontifícia Universidade Católica do Paraná e pelo Departamento de Cirurgia Vertebral Oncológica e Degenerativa do Instituto Ortopédico Rizzoli, Bologna, Itália. Mestre em Medicina pelo Instituto de Ensino e Pesquisa da Santa Casa de Misericórdia de Belo Horizonte.",
    "titulacao_academica": [
      "Médico Ortopedista do Departamento de Ortopedia e Traumatologia do Hospital Felício Rocho. Especialização em Cirurgia da Coluna Vertebral pela Pontifícia Universidade Católica do Paraná e pelo Departamento de Cirurgia Vertebral Oncológica e Degenerativa do Instituto Ortopédico Rizzoli, Bologna, Itália. Mestre em Medicina pelo Instituto de Ensino e Pesquisa da Santa Casa de Misericórdia de Belo Horizonte."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 88,
        "titulo": "Vertebrectomia Torácica e Lombar nas Neoplasias",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      },
      {
        "num": 89,
        "titulo": "Sacrectomia",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "40",
    "slug": "christopher-cralcev",
    "nome": "Christopher Cralcev",
    "nome_vancouver": "Cralcev C",
    "cargo": "Médico Hematologista",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0005-0266-610X",
    "orcid_url": "https://orcid.org/0009-0005-0266-610X",
    "bio_completa": "Médico Hematologista.",
    "titulacao_academica": [
      "Médico Hematologista."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 105,
        "titulo": "Controle do Sangramento Intraoperatório",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "41",
    "slug": "claudio-e-tatsui",
    "nome": "Claudio E. Tatsui",
    "nome_vancouver": "Tatsui CE",
    "cargo": "Professor Department of Neurosurgery University of Texas MD Anderson Cancer Center",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-3615-0268",
    "orcid_url": "https://orcid.org/0000-0002-3615-0268",
    "bio_completa": "Professor Department of Neurosurgery University of Texas MD Anderson Cancer Center.",
    "titulacao_academica": [
      "Professor Department of Neurosurgery University of Texas MD Anderson Cancer Center."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 91,
        "titulo": "Técnicas Minimamente Invasivas para Tratamento e Adjuvância nos Tumores da Coluna Vertebral",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "42",
    "slug": "clineu-de-mello-almada-filho",
    "nome": "Clineu de Mello Almada Filho",
    "nome_vancouver": "Almada Filho CM",
    "cargo": "Graduação em Medicina pela Faculdade de Ciências Médicas de Santos",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-0647-0439",
    "orcid_url": "https://orcid.org/0000-0002-0647-0439",
    "bio_completa": "Graduação em Medicina pela Faculdade de Ciências Médicas de Santos. Residência em Clínica Médica. Mestrado e Doutorado pela Universidade Federal de São Paulo. Especialista em Clínica Médica e em Geriatria pela Asso-ciação Médica Brasileira. Coordenador da Unidade Hospitalar Geriátrica da Disciplina de Geriatria e Gerontologia da Escola Paulista de Medicina (UNIFESP).",
    "titulacao_academica": [
      "Graduação em Medicina pela Faculdade de Ciências Médicas de Santos. Residência em Clínica Médica. Mestrado e Doutorado pela Universidade Federal de São Paulo. Especialista em Clínica Médica e em Geriatria pela Asso-ciação Médica Brasileira. Coordenador da Unidade Hospitalar Geriátrica da Disciplina de Geriatria e Gerontologia da Escola Paulista de Medicina (UNIFESP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 108,
        "titulo": "Manejo do Paciente Frágil com Sarcopenia em Cirurgia de Coluna",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "43",
    "slug": "cristiano-magalhaes-menezes",
    "nome": "Cristiano Magalhães Menezes",
    "nome_vancouver": "Menezes CM",
    "cargo": "Doutor pela Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-6670-5159",
    "orcid_url": "https://orcid.org/0000-0001-6670-5159",
    "bio_completa": "Doutor pela Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP). Professor Convidado do Departamento do Aparelho Loco-motor da Universidade Federal de Minas Gerais (UFMG). Presidente da Sociedade Brasileira da Coluna (SBC) 2021-22. Chefe do Serviço Instituto Columna, Belo Horizonte, MG.",
    "titulacao_academica": [
      "Doutor pela Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP). Professor Convidado do Departamento do Aparelho Loco-motor da Universidade Federal de Minas Gerais (UFMG). Presidente da Sociedade Brasileira da Coluna (SBC) 2021-22. Chefe do Serviço Instituto Columna, Belo Horizonte, MG."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 7,
        "titulo": "Anatomia Cirúrgica e Vias de Acesso da Coluna Lombar e Lombossacra",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      },
      {
        "num": 69,
        "titulo": "Artrodese Lombar em Single-Position Lateral",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "44",
    "slug": "daiane-gallina",
    "nome": "Daiane Gallina",
    "nome_vancouver": "Gallina D",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Santa Casa de São Paulo",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-6928-7789",
    "orcid_url": "https://orcid.org/0000-0002-6928-7789",
    "bio_completa": "Médico Ortopedista e Traumatologista pelo Hospital Universitário de Santa Maria da Universidade Federal de Santa Maria (HUSM/UFSM-RS). Cirurgia da Coluna Vertebral pela Santa Casa de POA-RS.",
    "titulacao_academica": [
      "Médico Ortopedista e Traumatologista pelo Hospital Universitário de Santa Maria da Universidade Federal de Santa Maria (HUSM/UFSM-RS). Cirurgia da Coluna Vertebral pela Santa Casa de POA-RS."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 106,
        "titulo": "Uso de Órteses na Coluna Vertebral",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "45",
    "slug": "daniel-duarte-perini",
    "nome": "Daniel Duarte Perini",
    "nome_vancouver": "Perini DD",
    "cargo": "Médico pela Faculdade de Medicina da Universidade de São Paulo (USP)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0005-1225-0028",
    "orcid_url": "https://orcid.org/0009-0005-1225-0028",
    "bio_completa": "Médico pela Faculdade de Medicina da Universidade de São Paulo (USP).",
    "titulacao_academica": [
      "Médico pela Faculdade de Medicina da Universidade de São Paulo (USP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 35,
        "titulo": "Escoliose do Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 54,
        "titulo": "Tumores Ósseos Primários Malignos",
        "secao_id": 6,
        "secao_nome": "Técnicas Minimamente Invasivas e Endoscopia"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "46",
    "slug": "david-del-curto",
    "nome": "David Del Curto",
    "nome_vancouver": "Del Curto D",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-6273-3723",
    "orcid_url": "https://orcid.org/0000-0002-6273-3723",
    "bio_completa": "Graduado em Medicina pela Escola Paulista de Medicina da Universidade Federal de São Paulo (EPM-Unifesp). Especialista em Ortopedia e Traumatologia pela EPM. Especialista em Patologias da Coluna Vertebral pela EPM.",
    "titulacao_academica": [
      "Graduado em Medicina pela Escola Paulista de Medicina da Universidade Federal de São Paulo (EPM-Unifesp). Especialista em Ortopedia e Traumatologia pela EPM. Especialista em Patologias da Coluna Vertebral pela EPM."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 65,
        "titulo": "Endoscopia na Coluna Cervical pela Via Posterior",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "47",
    "slug": "debora-yumi-yoshimura-orlandin-alves",
    "nome": "Débora Yumi Yoshimura Orlandin Alves",
    "nome_vancouver": "Alves DYYO",
    "cargo": "Médica Graduada pela Faculdade de Medicina da Universi-dade de São Paulo (FMUSP)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-0668-9473",
    "orcid_url": "https://orcid.org/0000-0002-0668-9473",
    "bio_completa": "Médica Graduada pela Faculdade de Medicina da Universi-dade de São Paulo (FMUSP). Residência em Ortopedia eTraumatologia pelo Hospital das Clinicas da Faculdade de Medicina da USP (IOT-HCFMUSP). Título de Ortopedista pela Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Especialização em Cirurgia de Coluna Vertebral pelo Hospital das Clinicas da Faculdade de Medicina da (USP-HCFMUSP).",
    "titulacao_academica": [
      "Médica Graduada pela Faculdade de Medicina da Universi-dade de São Paulo (FMUSP). Residência em Ortopedia eTraumatologia pelo Hospital das Clinicas da Faculdade de Medicina da USP (IOT-HCFMUSP). Título de Ortopedista pela Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Especialização em Cirurgia de Coluna Vertebral pelo Hospital das Clinicas da Faculdade de Medicina da (USP-HCFMUSP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 36,
        "titulo": "Escoliose nas Síndromes Genéticas",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 79,
        "titulo": "Fixação do Ilíaco – Técnica S2 Alar Ilíaco",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "48",
    "slug": "delio-eulalio-martins",
    "nome": "Delio Eulálio Martins",
    "nome_vancouver": "Martins DE",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-5510-3507",
    "orcid_url": "https://orcid.org/0000-0001-5510-3507",
    "bio_completa": "Doutorado em Ciências e Pós-Doutorado em Ciências Biológicas pela Universidade Federal de São Paulo (USP).",
    "titulacao_academica": [
      "Doutorado em Ciências e Pós-Doutorado em Ciências Biológicas pela Universidade Federal de São Paulo (USP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 10,
        "titulo": "Biomecânica dos Implantes nas Fixações Vertebrais",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "49",
    "slug": "denis-seguchi-sakai",
    "nome": "Denis Seguchi Sakai",
    "nome_vancouver": "Sakai DS",
    "cargo": "Médico pela Universidade Estadual de Campinas (Unicamp)",
    "instituicao": "Universidade Estadual de Campinas (Unicamp)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-3201-7718",
    "orcid_url": "https://orcid.org/0000-0002-3201-7718",
    "bio_completa": "Médico pela Universidade Estadual de Campinas (Unicamp). Ortopedia e Traumatologia (FCM Santa Casa SP). Fellow em Cirurgia da Coluna Vertebral pela FCM Santa Casa SP. Research Fellowship pelo The Children’s Hospital of Philadelphia. Mestre em Ciências da Cirurgia pela Unicamp.",
    "titulacao_academica": [
      "Médico pela Universidade Estadual de Campinas (Unicamp). Ortopedia e Traumatologia (FCM Santa Casa SP). Fellow em Cirurgia da Coluna Vertebral pela FCM Santa Casa SP. Research Fellowship pelo The Children’s Hospital of Philadelphia. Mestre em Ciências da Cirurgia pela Unicamp."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 87,
        "titulo": "Técnicas de Correção Cirúrgica das Deformidades da Coluna Vertebral",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "50",
    "slug": "deoclides-lima-bezerra-junior",
    "nome": "Deoclides Lima Bezerra Júnior",
    "nome_vancouver": "Bezerra Júnior DL",
    "cargo": "Médico Neurocirurgião",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-6493-350X",
    "orcid_url": "https://orcid.org/0000-0002-6493-350X",
    "bio_completa": "Médico Neurocirurgião. Membro Efetivo da Sociedade Brasileira de Neurocirurgia (SBN) e da Sociedade Brasileira de Coluna (SBC). Preceptor do Serviço de Neurocirurgia do Hospital da Restauração – Recife (PE). Fellowship no National Hospital for Neurology and Neuro-surgery (UCL).",
    "titulacao_academica": [
      "Médico Neurocirurgião. Membro Efetivo da Sociedade Brasileira de Neurocirurgia (SBN) e da Sociedade Brasileira de Coluna (SBC). Preceptor do Serviço de Neurocirurgia do Hospital da Restauração – Recife (PE). Fellowship no National Hospital for Neurology and Neuro-surgery (UCL)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 74,
        "titulo": "Técnicas Cirúrgicas para a Fixação da Coluna Cervical Alta",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "51",
    "slug": "diogo-nogueira-ribeiro",
    "nome": "Diogo Nogueira Ribeiro",
    "nome_vancouver": "Ribeiro DN",
    "cargo": "Médico Ortopedista pelo Hospital Madre Teresa",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0004-3499-0089",
    "orcid_url": "https://orcid.org/0009-0004-3499-0089",
    "bio_completa": "Médico Ortopedista pelo Hospital Madre Teresa. Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Especializando em Cirurgia da Coluna pelo Hospital Madre Teresa.",
    "titulacao_academica": [
      "Médico Ortopedista pelo Hospital Madre Teresa. Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Especializando em Cirurgia da Coluna pelo Hospital Madre Teresa."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 3,
        "titulo": "Neuroanatomia Funcional da Medula Espinhal",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      },
      {
        "num": 43,
        "titulo": "Hérnia de Disco Cervical",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "52",
    "slug": "douglas-kenji-narazaki",
    "nome": "Douglas Kenji Narazaki",
    "nome_vancouver": "Narazaki DK",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-7895-4830",
    "orcid_url": "https://orcid.org/0000-0001-7895-4830",
    "bio_completa": "Chefe do Grupo da Coluna Vertebral do Instituto do Câncer do Estado de São Paulo - Coluna Vertebral do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (USP).",
    "titulacao_academica": [
      "Chefe do Grupo da Coluna Vertebral do Instituto do Câncer do Estado de São Paulo - Coluna Vertebral do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (USP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 90,
        "titulo": "Cirurgia Complexa dos Tumores Cervicais",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "53",
    "slug": "edelvan-gabana",
    "nome": "Edelvan Gabana",
    "nome_vancouver": "Gabana E",
    "cargo": "Ortopedista Assistente do Grupo de Coluna do IOT- -HCFMUSP",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-3054-8731",
    "orcid_url": "https://orcid.org/0000-0003-3054-8731",
    "bio_completa": "Ortopedista Assistente do Grupo de Coluna do IOT- -HCFMUSP.",
    "titulacao_academica": [
      "Ortopedista Assistente do Grupo de Coluna do IOT- -HCFMUSP."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 64,
        "titulo": "Cirurgia Endoscópica Uniportal no Segmento Torácico",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "54",
    "slug": "edilson-silva-machado",
    "nome": "Edilson Silva Machado",
    "nome_vancouver": "Machado ES",
    "cargo": "Médico Ortopedista com Área de Atuação em Dor",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-0332-572X",
    "orcid_url": "https://orcid.org/0000-0002-0332-572X",
    "bio_completa": "Médico Ortopedista com Área de Atuação em Dor. Mestre em Diagnóstico Genético e Molecular. Doutor em Medicina. Presidente da Sociedade Gaúcha para o Estudo da Dor (2017-2021). Sócio Fundador da Academia Brasileira de Medicina Regenerativa, da Sociedade Brasileira de Regeneração Tecidual e da Associação Brasileira de Dor. Membro Efetivo da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT), da Sociedade Brasileira de Coluna (SBC), da Sociedade Brasileira para o Estudo da Dor (SBED) e da Sociedade Brasileira de Médicos Intervencionistas em Dor (SOBRAMID). Membro da Comissão de Ortopedia Regenerativa e Terapia Celular da SBOT (2018- 2024).",
    "titulacao_academica": [
      "Médico Ortopedista com Área de Atuação em Dor. Mestre em Diagnóstico Genético e Molecular. Doutor em Medicina. Presidente da Sociedade Gaúcha para o Estudo da Dor (2017-2021). Sócio Fundador da Academia Brasileira de Medicina Regenerativa, da Sociedade Brasileira de Regeneração Tecidual e da Associação Brasileira de Dor. Membro Efetivo da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT), da Sociedade Brasileira de Coluna (SBC), da Sociedade Brasileira para o Estudo da Dor (SBED) e da Sociedade Brasileira de Médicos Intervencionistas em Dor (SOBRAMID). Membro da Comissão de Ortopedia Regenerativa e Terapia Celular da SBOT (2018- 2024)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 50,
        "titulo": "Medicina Regenerativa no Manejo da Doença Degenerativa da Coluna",
        "secao_id": 6,
        "secao_nome": "Técnicas Minimamente Invasivas e Endoscopia"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "55",
    "slug": "edson-pudles",
    "nome": "Edson Pudles",
    "nome_vancouver": "Pudles E",
    "cargo": "MÉDICO ORTOPEDISTA E TRAUMATOLOGISTA",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 4 Capítulos no Tratado SBC",
    "foto_url": "/assets/edson-pudles.png",
    "orcid": "0000-0001-9816-2945",
    "orcid_url": "https://orcid.org/0000-0001-9816-2945",
    "bio_completa": "MÉDICO ORTOPEDISTA E TRAUMATOLOGISTA. Hospital Universitário Evangélico Mackenzie em Curitiba-PR. Hospital São Vicente de Curitiba-PR.",
    "titulacao_academica": [
      "MÉDICO ORTOPEDISTA E TRAUMATOLOGISTA. Hospital Universitário Evangélico Mackenzie em Curitiba-PR. Hospital São Vicente de Curitiba-PR."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 21,
        "titulo": "Lesões Traumáticas da Coluna Cervical Subaxial",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      },
      {
        "num": 27,
        "titulo": "Introdução às Deformidades da Coluna Vertebral",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 47,
        "titulo": "Instabilidade Vertebral",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      },
      {
        "num": 58,
        "titulo": "Infecção Primária da Coluna Vertebral",
        "secao_id": 7,
        "secao_nome": "Tumores e Infecções da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "56",
    "slug": "egon-ewaldo-lindorfer-neto",
    "nome": "Egon Ewaldo Lindorfer Neto",
    "nome_vancouver": "Lindorfer Neto EE",
    "cargo": "Médico Neurocirurgião",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0002-1863-6130",
    "orcid_url": "https://orcid.org/0009-0002-1863-6130",
    "bio_completa": "Médico Neurocirurgião. Fellowship em Cirurgia de Coluna Vertebral no Instituto de Neurologia de Curitiba. Membro Titular da Sociedade Brasileira de Neurocirurgia (SBN).",
    "titulacao_academica": [
      "Médico Neurocirurgião. Fellowship em Cirurgia de Coluna Vertebral no Instituto de Neurologia de Curitiba. Membro Titular da Sociedade Brasileira de Neurocirurgia (SBN)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 75,
        "titulo": "Técnicas de Fixação Cervical Anterior",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "57",
    "slug": "emiliano-neves-vialle",
    "nome": "Emiliano Neves Vialle",
    "nome_vancouver": "Vialle EN",
    "cargo": "Mestre em Clínica Cirúrgica pela Universidade Federal do Paraná (UFPR)",
    "instituicao": "Pontifícia Universidade Católica do Paraná (PUC-PR)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-1157-4889",
    "orcid_url": "https://orcid.org/0000-0003-1157-4889",
    "bio_completa": "Mestre em Clínica Cirúrgica pela Universidade Federal do Paraná (UFPR). Doutor em Ciências da Saúde pela Pontifícia Universidade Católica do Paraná (PUC-PR). Chefe do Serviço de Ortopedia e Traumatologia do Hospital Universitário Cajuru, PUC-PR. Chefe do Grupo de Coluna do Hospital Universitário Cajuru, PUC-PR.",
    "titulacao_academica": [
      "Mestre em Clínica Cirúrgica pela Universidade Federal do Paraná (UFPR). Doutor em Ciências da Saúde pela Pontifícia Universidade Católica do Paraná (PUC-PR). Chefe do Serviço de Ortopedia e Traumatologia do Hospital Universitário Cajuru, PUC-PR. Chefe do Grupo de Coluna do Hospital Universitário Cajuru, PUC-PR."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 19,
        "titulo": "Trauma Raquimedular",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "58",
    "slug": "enzo-pasetto-righesso",
    "nome": "Enzo Pasetto Righesso",
    "nome_vancouver": "Righesso EP",
    "cargo": "Acadêmico de Medicina do 1º ano da Universidade de Caxias do Sul (UCS)",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0002-3217-4868",
    "orcid_url": "https://orcid.org/0009-0002-3217-4868",
    "bio_completa": "Acadêmico de Medicina do 1º ano da Universidade de Caxias do Sul (UCS).",
    "titulacao_academica": [
      "Acadêmico de Medicina do 1º ano da Universidade de Caxias do Sul (UCS)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 42,
        "titulo": "Fisiopatologia da Degeneração Discal",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "59",
    "slug": "erasmo-de-abreu-zardo",
    "nome": "Erasmo de Abreu Zardo",
    "nome_vancouver": "Zardo EA",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-4922-6962",
    "orcid_url": "https://orcid.org/0000-0002-4922-6962",
    "bio_completa": "Mestre e Doutor em Ortopedia e Traumatologia pela Escola Paulista de Medicina da Universidade Federal de São Paulo (Unifesp). Chefe do Serviço de Cirurgia da Coluna do Hospital São Lucas da Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS).",
    "titulacao_academica": [
      "Mestre e Doutor em Ortopedia e Traumatologia pela Escola Paulista de Medicina da Universidade Federal de São Paulo (Unifesp). Chefe do Serviço de Cirurgia da Coluna do Hospital São Lucas da Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 1,
        "titulo": "Embriologia da Coluna Vertebral",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "60",
    "slug": "erich-vinicius-de-paula",
    "nome": "Erich Vinicius de Paula",
    "nome_vancouver": "Paula EV",
    "cargo": "Médico Hematologista",
    "instituicao": "Universidade Estadual de Campinas (Unicamp)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-1539-7912",
    "orcid_url": "https://orcid.org/0000-0003-1539-7912",
    "bio_completa": "Médico Hematologista. Doutorado em Fisiopatologia Médica pela Faculdade de Ciências Médicas da Unicamp (FCM-Unicamp). Professor Associado do Departamento de Clínica Médica da FCM-Unicamp.",
    "titulacao_academica": [
      "Médico Hematologista. Doutorado em Fisiopatologia Médica pela Faculdade de Ciências Médicas da Unicamp (FCM-Unicamp). Professor Associado do Departamento de Clínica Médica da FCM-Unicamp."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 105,
        "titulo": "Controle do Sangramento Intraoperatório",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "61",
    "slug": "felipe-neves-simoes-monteiro",
    "nome": "Felipe Neves Simões Monteiro",
    "nome_vancouver": "Monteiro FNS",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Hospital Israelita Albert Einstein",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0009-6902-7598",
    "orcid_url": "https://orcid.org/0009-0009-6902-7598",
    "bio_completa": "Médico Ortopedista e Cirurgião de Coluna Hospital Israelita Albert Einstein - Instituto Cohen Ortopedia.",
    "titulacao_academica": [
      "Médico Ortopedista e Cirurgião de Coluna Hospital Israelita Albert Einstein - Instituto Cohen Ortopedia."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 97,
        "titulo": "Pseudoartrose e Falha Mecânica da Instrumentação na Cirurgia da Coluna Vertebral",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "62",
    "slug": "fernando-antonio-mendes-facanha-filho",
    "nome": "Fernando Antônio Mendes Façanha Filho",
    "nome_vancouver": "Façanha Filho FAM",
    "cargo": "Preceptor do Grupo de Coluna do Instituto Dr",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-3774-2342",
    "orcid_url": "https://orcid.org/0000-0003-3774-2342",
    "bio_completa": "Preceptor do Grupo de Coluna do Instituto Dr. José Frota - Fortaleza – Ceará.",
    "titulacao_academica": [
      "Preceptor do Grupo de Coluna do Instituto Dr. José Frota - Fortaleza – Ceará."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 80,
        "titulo": "Técnicas de Fixação na Coluna Osteoporótica",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "63",
    "slug": "fernando-augusto-dannenbrock",
    "nome": "Fernando Augusto Dannenbrock",
    "nome_vancouver": "Dannenbrock FA",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-7640-8956",
    "orcid_url": "https://orcid.org/0000-0002-7640-8956",
    "bio_completa": "Mestre em Ortopedia e Traumatologia pela Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS). Preceptor do Serviço de Ortopedia e Traumatologia do Hospital São Lucas da PUC-RS. Instrutor do Curso de Cirurgia da Coluna do Instituto Gaúcho de Cirurgia da Coluna do Hospital São Lucas da PUC-RS.",
    "titulacao_academica": [
      "Mestre em Ortopedia e Traumatologia pela Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS). Preceptor do Serviço de Ortopedia e Traumatologia do Hospital São Lucas da PUC-RS. Instrutor do Curso de Cirurgia da Coluna do Instituto Gaúcho de Cirurgia da Coluna do Hospital São Lucas da PUC-RS."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 1,
        "titulo": "Embriologia da Coluna Vertebral",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "64",
    "slug": "fernando-balsimelli",
    "nome": "Fernando Balsimelli",
    "nome_vancouver": "Balsimelli F",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-1236-7646",
    "orcid_url": "https://orcid.org/0000-0003-1236-7646",
    "bio_completa": "Preceptor do Serviço de Treinamento Avançado em Cirurgia da Coluna Vertebral do Centro de Reabilitação e Readaptação Dr. Henrique Santillo (CRER) e do Serviço de Ortopedia do Hospital Estadual de Urgências de Goiás Dr. Valdemiro Cruz (HUGO).",
    "titulacao_academica": [
      "Preceptor do Serviço de Treinamento Avançado em Cirurgia da Coluna Vertebral do Centro de Reabilitação e Readaptação Dr. Henrique Santillo (CRER) e do Serviço de Ortopedia do Hospital Estadual de Urgências de Goiás Dr. Valdemiro Cruz (HUGO)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 44,
        "titulo": "Hérnia de Disco Torácica",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "65",
    "slug": "fernando-herrero",
    "nome": "Fernando Herrero",
    "nome_vancouver": "Herrero F",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-3387-4797",
    "orcid_url": "https://orcid.org/0000-0002-3387-4797",
    "bio_completa": "Professor Associado do Departamento de Ortopedia e Anestesiologia do Hospital das Clínicas de Ribeirão Preto da Faculdade de Medicina de Ribeirão Preto (FMUSP). Cirurgião de Coluna do Grupo de Ortopedia do Hospital Sírio Libanês - Unidade Brasília. Coordenador do Programa de Pós Graduação Ciências da Saúde Aplicadas ao Aparelho Locomotor da FMUSP. Membro Fundador do Projeto Mude a Curva. Graduação em Medicina pela FMUSP. Residência em Ortopedia e Traumatologia pelo Departamento de Ortopedia e Anestesiologia do Hospital das Clínicas da Faculdade de Medicina de Ribeirão Preto – USP. Doutorado pela Faculdade de Medicina de Ribeirão Preto – USP.",
    "titulacao_academica": [
      "Professor Associado do Departamento de Ortopedia e Anestesiologia do Hospital das Clínicas de Ribeirão Preto da Faculdade de Medicina de Ribeirão Preto (FMUSP). Cirurgião de Coluna do Grupo de Ortopedia do Hospital Sírio Libanês - Unidade Brasília. Coordenador do Programa de Pós Graduação Ciências da Saúde Aplicadas ao Aparelho Locomotor da FMUSP. Membro Fundador do Projeto Mude a Curva. Graduação em Medicina pela FMUSP. Residência em Ortopedia e Traumatologia pelo Departamento de Ortopedia e Anestesiologia do Hospital das Clínicas da Faculdade de Medicina de Ribeirão Preto – USP. Doutorado pela Faculdade de Medicina de Ribeirão Preto – USP."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 81,
        "titulo": "Ostetomias da Coluna Vertebral",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "66",
    "slug": "fernando-luiz-rolemberg-dantas",
    "nome": "Fernando Luiz Rolemberg Dantas",
    "nome_vancouver": "Dantas FLR",
    "cargo": "Neurocirurgião do Biocor Instituto, Rede D’Or, Belo Hori-zonte, MG",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-8294-072X",
    "orcid_url": "https://orcid.org/0000-0002-8294-072X",
    "bio_completa": "Neurocirurgião do Biocor Instituto, Rede D’Or, Belo Hori-zonte, MG. Pós-Graduação pela Faculdade de Ciências Médicas de Minas Gerais (FCM-MG), Belo Horizonte, MG. Mestre, Doutor e Pós-Doutor em Ciências da Saúde.",
    "titulacao_academica": [
      "Neurocirurgião do Biocor Instituto, Rede D’Or, Belo Hori-zonte, MG. Pós-Graduação pela Faculdade de Ciências Médicas de Minas Gerais (FCM-MG), Belo Horizonte, MG. Mestre, Doutor e Pós-Doutor em Ciências da Saúde."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 48,
        "titulo": "Estenose Cervical, Mielopatia Cervical Degenerativa e Ossificação do Ligamento Longitudinal Posterior",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "67",
    "slug": "fernando-toni-marcelino-da-silva",
    "nome": "Fernando Toni Marcelino da Silva",
    "nome_vancouver": "Silva FTM",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-7851-0444",
    "orcid_url": "https://orcid.org/0000-0002-7851-0444",
    "bio_completa": "Médico graduado pela Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP). Residência Médica em Ortopedia e Traumatologia pelo Hospital das Clínicas da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (HC-FMRP-USP), com título de especialista pela Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Complementação Especializada em Cirurgia da Coluna pelo Instituto de Patologia da Coluna (IPC), centro formador reconhecido pela Sociedade Brasileira de Coluna (SBC). Médico assistente e Coordenador da Complementação Especializada em Cirurgia da Coluna do Instituto de Patologia da Coluna (IPC). Doutorando no Programa de Pós-Graduação em Ciências da Saúde Aplicadas ao Aparelho Locomotor da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo.",
    "titulacao_academica": [
      "Médico graduado pela Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP). Residência Médica em Ortopedia e Traumatologia pelo Hospital das Clínicas da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (HC-FMRP-USP), com título de especialista pela Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Complementação Especializada em Cirurgia da Coluna pelo Instituto de Patologia da Coluna (IPC), centro formador reconhecido pela Sociedade Brasileira de Coluna (SBC). Médico assistente e Coordenador da Complementação Especializada em Cirurgia da Coluna do Instituto de Patologia da Coluna (IPC). Doutorando no Programa de Pós-Graduação em Ciências da Saúde Aplicadas ao Aparelho Locomotor da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 39,
        "titulo": "Espondilolistese no Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "68",
    "slug": "francisco-jose-albuquerque-de-paula",
    "nome": "Francisco José Albuquerque de Paula",
    "nome_vancouver": "Paula FJA",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-1262-3486",
    "orcid_url": "https://orcid.org/0000-0003-1262-3486",
    "bio_completa": "Professor Associado do Departamento de Clínica Médica da Faculdade de Medicina de Ribeirão Preto da Universi-dade de São Paulo (FMRP-USP).",
    "titulacao_academica": [
      "Professor Associado do Departamento de Clínica Médica da Faculdade de Medicina de Ribeirão Preto da Universi-dade de São Paulo (FMRP-USP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 60,
        "titulo": "Doenças Metabólicas que Afetam a Coluna",
        "secao_id": 7,
        "secao_nome": "Tumores e Infecções da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "69",
    "slug": "francois-dantas",
    "nome": "François Dantas",
    "nome_vancouver": "Dantas F",
    "cargo": "Neurocirurgião do Biocor Instituto/Rede D’Or, Belo Hori-zonte, MG",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-3899-7494",
    "orcid_url": "https://orcid.org/0000-0003-3899-7494",
    "bio_completa": "Neurocirurgião do Biocor Instituto/Rede D’Or, Belo Hori-zonte, MG. Doutor em Ciências da Saúde. Fellowship em Cirurgia de Coluna no Toronto Western Hospital, Toronto, Ontario, Canadá.",
    "titulacao_academica": [
      "Neurocirurgião do Biocor Instituto/Rede D’Or, Belo Hori-zonte, MG. Doutor em Ciências da Saúde. Fellowship em Cirurgia de Coluna no Toronto Western Hospital, Toronto, Ontario, Canadá."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 48,
        "titulo": "Estenose Cervical, Mielopatia Cervical Degenerativa e Ossificação do Ligamento Longitudinal Posterior",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "70",
    "slug": "gabriel-farias-alves",
    "nome": "Gabriel Farias Alves",
    "nome_vancouver": "Alves GF",
    "cargo": "Médico Ortopedista e Traumatologista",
    "instituicao": "Instituto Nacional de Traumatologia e Ortopedia (INTO)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-4076-549X",
    "orcid_url": "https://orcid.org/0000-0003-4076-549X",
    "bio_completa": "Médico Ortopedista e Traumatologista. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Médico do Centro de Doenças da Coluna do Instituto Nacional de Traumatologia e Ortopedia (INTO).",
    "titulacao_academica": [
      "Médico Ortopedista e Traumatologista. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Médico do Centro de Doenças da Coluna do Instituto Nacional de Traumatologia e Ortopedia (INTO)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 53,
        "titulo": "Tumores Benignos e Lesões Pseudotumorais da Coluna",
        "secao_id": 6,
        "secao_nome": "Técnicas Minimamente Invasivas e Endoscopia"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "71",
    "slug": "gabriel-pokorny",
    "nome": "Gabriel Pokorny",
    "nome_vancouver": "Pokorny G",
    "cargo": "Biomédico (Bacharelado em Biomedicina – Biologia Molecular e Informática em Saúde) (2012-2015)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-7907-8032",
    "orcid_url": "https://orcid.org/0000-0002-7907-8032",
    "bio_completa": "Biomédico (Bacharelado em Biomedicina – Biologia Molecular e Informática em Saúde) (2012-2015). Formação/atualização em Pesquisa Clínica (Invitare Pesquisa Clínica, 2016) e Assuntos Regulatórios (IPOG, 2017-2019). Doutorando em Medicina (PPG – Locomotor) pela Faculdade de Medicina de Ribeirão Preto (FMRP-USP) (2022-2026). Coordenador do Departamento Científico e Gestor de base de dados no Instituto de Patologia da Coluna (IPC) (desde agosto/2018).",
    "titulacao_academica": [
      "Biomédico (Bacharelado em Biomedicina – Biologia Molecular e Informática em Saúde) (2012-2015). Formação/atualização em Pesquisa Clínica (Invitare Pesquisa Clínica, 2016) e Assuntos Regulatórios (IPOG, 2017-2019). Doutorando em Medicina (PPG – Locomotor) pela Faculdade de Medicina de Ribeirão Preto (FMRP-USP) (2022-2026). Coordenador do Departamento Científico e Gestor de base de dados no Instituto de Patologia da Coluna (IPC) (desde agosto/2018)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 39,
        "titulo": "Espondilolistese no Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 70,
        "titulo": "Artrodese Lombar Prone Transpsoas",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "72",
    "slug": "gabriela-neves-vaz",
    "nome": "Gabriela Neves Vaz",
    "nome_vancouver": "Vaz GN",
    "cargo": "Graduado Medicina pela Universidade Federal de Minas Gerais (UFMG)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-7001-4032",
    "orcid_url": "https://orcid.org/0000-0002-7001-4032",
    "bio_completa": "Graduado Medicina pela Universidade Federal de Minas Gerais (UFMG). Especialista em Ortopedia e Traumatologia pelo Hospital Madre Tereza, MG. Especialista em Patologias da Coluna Vertebral ela Escola Paulista de Medicina da Universidade Federal de São Paulo (Unifesp).",
    "titulacao_academica": [
      "Graduado Medicina pela Universidade Federal de Minas Gerais (UFMG). Especialista em Ortopedia e Traumatologia pelo Hospital Madre Tereza, MG. Especialista em Patologias da Coluna Vertebral ela Escola Paulista de Medicina da Universidade Federal de São Paulo (Unifesp)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 45,
        "titulo": "Hérnia de Disco Lombar",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      },
      {
        "num": 65,
        "titulo": "Endoscopia na Coluna Cervical pela Via Posterior",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "73",
    "slug": "geraldo-de-sa-carneiro-filho",
    "nome": "Geraldo de Sá Carneiro-Filho",
    "nome_vancouver": "Carneiro-Filho GS",
    "cargo": "Neurocirurgião",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-5518-317X",
    "orcid_url": "https://orcid.org/0000-0002-5518-317X",
    "bio_completa": "Neurocirurgião. Médico Membro Efetivo da Sociedade Brasileira de Neuro-cirurgia (SBN) e da Sociedade Brasileira de Coluna (SBC). Chefe do Departamento de Coluna do Hospital da Restauração – Recife (PE). Mestre em Neurociências. Ex-Vice-Presidente da SBC e atual vice-presidente da SBN.",
    "titulacao_academica": [
      "Neurocirurgião. Médico Membro Efetivo da Sociedade Brasileira de Neuro-cirurgia (SBN) e da Sociedade Brasileira de Coluna (SBC). Chefe do Departamento de Coluna do Hospital da Restauração – Recife (PE). Mestre em Neurociências. Ex-Vice-Presidente da SBC e atual vice-presidente da SBN."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 74,
        "titulo": "Técnicas Cirúrgicas para a Fixação da Coluna Cervical Alta",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "74",
    "slug": "giancarlo-jorio-almeida",
    "nome": "Giancarlo Jorio Almeida",
    "nome_vancouver": "Almeida GJ",
    "cargo": "Médico Ortopedista e Traumatologista",
    "instituicao": "Instituto Nacional de Traumatologia e Ortopedia (INTO)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-0838-4304",
    "orcid_url": "https://orcid.org/0000-0003-0838-4304",
    "bio_completa": "Médico Ortopedista e Traumatologista. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Médico do Centro de Doenças da Coluna do Instituto Nacional de Traumatologia e Ortopedia (INTO/MS).",
    "titulacao_academica": [
      "Médico Ortopedista e Traumatologista. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Médico do Centro de Doenças da Coluna do Instituto Nacional de Traumatologia e Ortopedia (INTO/MS)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 37,
        "titulo": "Escoliose Idiopática de Alto Valor Angular",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 76,
        "titulo": "Fixação Posterior da Coluna Cervical",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "75",
    "slug": "guilherme-a-ludwig",
    "nome": "Guilherme A. Ludwig",
    "nome_vancouver": "Ludwig GA",
    "cargo": "Residente de Neurocirurgia do Hospital São José – Santa Casa de Porto Alegre",
    "instituicao": "Santa Casa de São Paulo",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0007-5044-6771",
    "orcid_url": "https://orcid.org/0009-0007-5044-6771",
    "bio_completa": "Residente de Neurocirurgia do Hospital São José – Santa Casa de Porto Alegre.",
    "titulacao_academica": [
      "Residente de Neurocirurgia do Hospital São José – Santa Casa de Porto Alegre."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 72,
        "titulo": "Artrodese Lombar Anterior",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "76",
    "slug": "guilherme-naves-de-lima-alves",
    "nome": "Guilherme Naves de Lima Alves",
    "nome_vancouver": "Alves GNL",
    "cargo": "Médico e Mestre em Ciências da Saúde pela Pontifícia Universidade Católica do Paraná (PUC-PR)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-5121-3749",
    "orcid_url": "https://orcid.org/0000-0002-5121-3749",
    "bio_completa": "Médico e Mestre em Ciências da Saúde pela Pontifícia Universidade Católica do Paraná (PUC-PR). Residencia Médica em Radiologia e Diagnóstico por Imagem e Fellow em Radiologia Musculoesquelética pela USP-RP. Doutorado em andamento pela USP-RP",
    "titulacao_academica": [
      "Médico e Mestre em Ciências da Saúde pela Pontifícia Universidade Católica do Paraná (PUC-PR). Residencia Médica em Radiologia e Diagnóstico por Imagem e Fellow em Radiologia Musculoesquelética pela USP-RP. Doutorado em andamento pela USP-RP"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 15,
        "titulo": "Diagnóstico por Imagem da Coluna Vertebral",
        "secao_id": 2,
        "secao_nome": "Avaliação Diagnóstica e Propedêutica"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "77",
    "slug": "guilherme-pagioro-miranda",
    "nome": "Guilherme Pagioro Miranda",
    "nome_vancouver": "Miranda GP",
    "cargo": "Médico pelo Centro Universitário das Faculdades Asso-ciadas de Ensino (UNIFAE)",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0006-1121-7012",
    "orcid_url": "https://orcid.org/0009-0006-1121-7012",
    "bio_completa": "Médico pelo Centro Universitário das Faculdades Asso-ciadas de Ensino (UNIFAE). Ortopedista e Traumatologista pela Faculdade de Medi-cina de Catanduva (FAMECA). Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Fellow de Cirurgia da Coluna Vertebral na Universidade Estadual Paulista (UNESP).",
    "titulacao_academica": [
      "Médico pelo Centro Universitário das Faculdades Asso-ciadas de Ensino (UNIFAE). Ortopedista e Traumatologista pela Faculdade de Medi-cina de Catanduva (FAMECA). Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Fellow de Cirurgia da Coluna Vertebral na Universidade Estadual Paulista (UNESP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 4,
        "titulo": "Anatomia Cirúrgica e Vias de Acesso da Coluna Cervical",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "78",
    "slug": "guilherme-pianowski-pajanoti",
    "nome": "Guilherme Pianowski Pajanoti",
    "nome_vancouver": "Pajanoti GP",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-7266-3415",
    "orcid_url": "https://orcid.org/0000-0002-7266-3415",
    "bio_completa": "Médico pela Faculdade de Medicina de Ribeirão Preto (FMRP-USP) e Ortopedista pela Santa Casa de São Paulo. Especialista em Cirurgia de Coluna pelo Einstein Hospital Israelita. Associate Fellowship de Coluna Vertebral América Latina - AO Spine.",
    "titulacao_academica": [
      "Médico pela Faculdade de Medicina de Ribeirão Preto (FMRP-USP) e Ortopedista pela Santa Casa de São Paulo. Especialista em Cirurgia de Coluna pelo Einstein Hospital Israelita. Associate Fellowship de Coluna Vertebral América Latina - AO Spine."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 95,
        "titulo": "Queda das Respostas na Monitoração Neurofisiológica Intraoperatória",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "79",
    "slug": "guilherme-rebechi-zuiani",
    "nome": "Guilherme Rebechi Zuiani",
    "nome_vancouver": "Zuiani GR",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-4240-9096",
    "orcid_url": "https://orcid.org/0000-0002-4240-9096",
    "bio_completa": "Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT) e da Sociedade Brasileira de Coluna (SBC). Médico do Grupo de Cirurgia da Coluna do Hospital Alemão Oswaldo Cruz.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT) e da Sociedade Brasileira de Coluna (SBC). Médico do Grupo de Cirurgia da Coluna do Hospital Alemão Oswaldo Cruz."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 51,
        "titulo": "Princípios no Manejo das Neoplasias da Coluna Vertebral",
        "secao_id": 6,
        "secao_nome": "Técnicas Minimamente Invasivas e Endoscopia"
      },
      {
        "num": 107,
        "titulo": "Segurança em Cirurgia de Coluna",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "80",
    "slug": "gustavo-alves-brito-isaias",
    "nome": "Gustavo Alves Brito Isaias",
    "nome_vancouver": "Isaias GAB",
    "cargo": "Médico Graduado pela Universidade Estadual de Campinas (Unicamp)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0001-4983-4079",
    "orcid_url": "https://orcid.org/0009-0001-4983-4079",
    "bio_completa": "Médico Graduado pela Universidade Estadual de Campinas (Unicamp). Residência em Clínica Médica pelo Hospital São Paulo (Unifesp/EPM). Residência em Hematologia e Hemoterapia pela Faculdade de Ciências Médicas da Unicamp (FCM/Unicamp). Médico Preceptor do Hemocentro da Unicamp.",
    "titulacao_academica": [
      "Médico Graduado pela Universidade Estadual de Campinas (Unicamp). Residência em Clínica Médica pelo Hospital São Paulo (Unifesp/EPM). Residência em Hematologia e Hemoterapia pela Faculdade de Ciências Médicas da Unicamp (FCM/Unicamp). Médico Preceptor do Hemocentro da Unicamp."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 105,
        "titulo": "Controle do Sangramento Intraoperatório",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "81",
    "slug": "gustavo-borges-laurindo-de-azevedo",
    "nome": "Gustavo Borges Laurindo de Azevedo",
    "nome_vancouver": "Azevedo GBL",
    "cargo": "Instituto Nacional de Traumatologia e Ortopedia, Brasil",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-4832-3813",
    "orcid_url": "https://orcid.org/0000-0003-4832-3813",
    "bio_completa": "Instituto Nacional de Traumatologia e Ortopedia, Brasil.",
    "titulacao_academica": [
      "Instituto Nacional de Traumatologia e Ortopedia, Brasil."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 88,
        "titulo": "Vertebrectomia Torácica e Lombar nas Neoplasias",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "82",
    "slug": "helton-luiz-aparecido-defino",
    "nome": "Helton Luiz Aparecido Defino",
    "nome_vancouver": "Defino HLA",
    "cargo": "MÉDICO ORTOPEDISTA E TRAUMATOLOGISTA",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 5 Capítulos no Tratado SBC",
    "foto_url": "/assets/helton-defino.png",
    "orcid": "0000-0003-4274-0130",
    "orcid_url": "https://orcid.org/0000-0003-4274-0130",
    "bio_completa": "MÉDICO ORTOPEDISTA E TRAUMATOLOGISTA. Professor Titular do Departamento de Ortopedia e Anestesiologia da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (USP).",
    "titulacao_academica": [
      "MÉDICO ORTOPEDISTA E TRAUMATOLOGISTA. Professor Titular do Departamento de Ortopedia e Anestesiologia da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (USP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 12,
        "titulo": "Anamnese e Exame Físico da Coluna Vertebral",
        "secao_id": 2,
        "secao_nome": "Avaliação Diagnóstica e Propedêutica"
      },
      {
        "num": 27,
        "titulo": "Introdução às Deformidades da Coluna Vertebral",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 34,
        "titulo": "Escoliose Idiopática",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 40,
        "titulo": "Cifose",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 92,
        "titulo": "Navegação e Robótica",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "83",
    "slug": "henrique-dagostin-de-arjona",
    "nome": "Henrique Dagostin de Arjona",
    "nome_vancouver": "Arjona HD",
    "cargo": "Cirurgião de Coluna do Hospital de Caridade de Florianópolis",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-3769-7967",
    "orcid_url": "https://orcid.org/0000-0003-3769-7967",
    "bio_completa": "Cirurgião de Coluna do Hospital de Caridade de Florianópolis.",
    "titulacao_academica": [
      "Cirurgião de Coluna do Hospital de Caridade de Florianópolis."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 38,
        "titulo": "Espondilolistese na Criança",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "84",
    "slug": "henrique-griese-luciano-dos-santos",
    "nome": "Henrique Griese Luciano dos Santos",
    "nome_vancouver": "Santos HGL",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0000-3347-274X",
    "orcid_url": "https://orcid.org/0009-0000-3347-274X",
    "bio_completa": "Fellow do Grupo de Coluna do Instituto de Ortopedia e Traumatologia do Hospital das Clínicas da FMUSP (IOT-HC-FMUSP).",
    "titulacao_academica": [
      "Fellow do Grupo de Coluna do Instituto de Ortopedia e Traumatologia do Hospital das Clínicas da FMUSP (IOT-HC-FMUSP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 9,
        "titulo": "Princípios da Artrodese, Biologia do Enxerto e Substitutos Ósseos na Coluna",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      },
      {
        "num": 61,
        "titulo": "Tratamento Cirúrgico das Doenças Reumáticas da Coluna",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "85",
    "slug": "igor-barreira-magro",
    "nome": "Igor Barreira Magro",
    "nome_vancouver": "Magro IB",
    "cargo": "Médico Neurocirurgião",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-4826-0325",
    "orcid_url": "https://orcid.org/0000-0002-4826-0325",
    "bio_completa": "Médico Neurocirurgião. Membro titular da Sociedade Brasileira de Neurocirurgia (SBN) e Sociedade Brasileira de Coluna (SBC). Doutorando pela Faculdade de Medicina da UNESP. Fellowship em Cirurgia da Coluna Vertebral pelo Instituto de Patologia da Coluna Pós graduação em dor pelo Hospital Sírio Libanês.",
    "titulacao_academica": [
      "Médico Neurocirurgião. Membro titular da Sociedade Brasileira de Neurocirurgia (SBN) e Sociedade Brasileira de Coluna (SBC). Doutorando pela Faculdade de Medicina da UNESP. Fellowship em Cirurgia da Coluna Vertebral pelo Instituto de Patologia da Coluna Pós graduação em dor pelo Hospital Sírio Libanês."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 39,
        "titulo": "Espondilolistese no Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "86",
    "slug": "igor-de-barcellos-zanon",
    "nome": "Igor de Barcellos Zanon",
    "nome_vancouver": "Zanon IB",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-6878-3377",
    "orcid_url": "https://orcid.org/0000-0002-6878-3377",
    "bio_completa": "Médico Graduado pela Escola Superior de Ciências da Santa Casa de Misericórdia de Vitória (EMESCAM). Residência Médica em Ortopedia e Traumatologia no Departamento de Ortopedia e Traumatologia “Pavilhão Fernandinho Simonsen” da Santa Casa de Misericórdia de São Paulo. Título de Especialista de Ortopedia e Traumatologia pela Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Fellowship em Cirurgia da Coluna Vertebral no Departa-mento de Ortopedia e Traumatologia “Pavilhão Fernan-dinho Simonsen” da Santa Casa de Misericórdia de São Paulo. Fellowship em Cirurgia Endoscópica da Coluna na Schön Klinik Munchen Harlaching Mestre em Pesquisa em Cirurgia pela Faculdade de Ciências Médicas da Santa Casa de São Paulo. Doutor em Ciências da Saúde pela Faculdade de Ciências Médicas da Santa Casa de São Paulo. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Membro da Sociedade Brasileira de Coluna (SBC). Médico Assistente - Cirurgião de Coluna da Santa Casa de Vitória. Professor Colaborador da Escola Superior de Ciências da Santa Casa de Misericórdia de Vitória (EMESCAM).",
    "titulacao_academica": [
      "Médico Graduado pela Escola Superior de Ciências da Santa Casa de Misericórdia de Vitória (EMESCAM). Residência Médica em Ortopedia e Traumatologia no Departamento de Ortopedia e Traumatologia “Pavilhão Fernandinho Simonsen” da Santa Casa de Misericórdia de São Paulo. Título de Especialista de Ortopedia e Traumatologia pela Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Fellowship em Cirurgia da Coluna Vertebral no Departa-mento de Ortopedia e Traumatologia “Pavilhão Fernan-dinho Simonsen” da Santa Casa de Misericórdia de São Paulo. Fellowship em Cirurgia Endoscópica da Coluna na Schön Klinik Munchen Harlaching Mestre em Pesquisa em Cirurgia pela Faculdade de Ciências Médicas da Santa Casa de São Paulo. Doutor em Ciências da Saúde pela Faculdade de Ciências Médicas da Santa Casa de São Paulo. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Membro da Sociedade Brasileira de Coluna (SBC). Médico Assistente - Cirurgião de Coluna da Santa Casa de Vitória. Professor Colaborador da Escola Superior de Ciências da Santa Casa de Misericórdia de Vitória (EMESCAM)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 18,
        "titulo": "Avaliação da Coluna do Paciente Politraumatizado",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "87",
    "slug": "igor-ebert-cechin",
    "nome": "Igor Ebert Cechin",
    "nome_vancouver": "Cechin IE",
    "cargo": "Médico Ortopedista e Traumatologista",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-9164-1342",
    "orcid_url": "https://orcid.org/0000-0002-9164-1342",
    "bio_completa": "Médico Ortopedista e Traumatologista. Cirurgião de Coluna. Membro do Serviço de Cirurgia da Coluna do Instituto de Ortopedia e Traumatologia de Passo Fundo-RS.",
    "titulacao_academica": [
      "Médico Ortopedista e Traumatologista. Cirurgião de Coluna. Membro do Serviço de Cirurgia da Coluna do Instituto de Ortopedia e Traumatologia de Passo Fundo-RS."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 20,
        "titulo": "Lesões Traumáticas da Coluna Cervical Alta",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      },
      {
        "num": 68,
        "titulo": "Artrodese Intersomática Lombar Posterior",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "88",
    "slug": "igor-machado-cardoso",
    "nome": "Igor Machado Cardoso",
    "nome_vancouver": "Cardoso IM",
    "cargo": "Médico Ortopedista Especialista em Coluna",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-5580-8857",
    "orcid_url": "https://orcid.org/0000-0001-5580-8857",
    "bio_completa": "Médico Ortopedista Especialista em Coluna.",
    "titulacao_academica": [
      "Médico Ortopedista Especialista em Coluna."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 96,
        "titulo": "Doença do Nível Adjacente",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "89",
    "slug": "italo-gerardo-rotondo",
    "nome": "Italo Gerardo Rotondo",
    "nome_vancouver": "Rotondo IG",
    "cargo": "Médico Graduado pela Faculdade de Medicina da Universidade de São Paulo (USP)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-5075-7827",
    "orcid_url": "https://orcid.org/0000-0001-5075-7827",
    "bio_completa": "Médico Graduado pela Faculdade de Medicina da Universidade de São Paulo (USP). Residência em Ortopedia e Traumatologia pela Faculdade de Medicina da USP. Especialização em Cirurgia da Coluna Vertebral pela Faculdade de Medicina da USP Médico Assistente Voluntário do Grupo de Coluna do Instituto do Câncer do Estado de São Paulo (ICESP).",
    "titulacao_academica": [
      "Médico Graduado pela Faculdade de Medicina da Universidade de São Paulo (USP). Residência em Ortopedia e Traumatologia pela Faculdade de Medicina da USP. Especialização em Cirurgia da Coluna Vertebral pela Faculdade de Medicina da USP Médico Assistente Voluntário do Grupo de Coluna do Instituto do Câncer do Estado de São Paulo (ICESP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 79,
        "titulo": "Fixação do Ilíaco – Técnica S2 Alar Ilíaco",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "90",
    "slug": "ivan-dias-da-rocha",
    "nome": "Ivan Dias da Rocha",
    "nome_vancouver": "Rocha ID",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-1005-1808",
    "orcid_url": "https://orcid.org/0000-0003-1005-1808",
    "bio_completa": "Chefe do Grupo de Coluna do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HC-FMUSP). Assistente do Grupo de Deformidades da Associação de Assistência à Criança Deficiente (AACD).",
    "titulacao_academica": [
      "Chefe do Grupo de Coluna do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HC-FMUSP). Assistente do Grupo de Deformidades da Associação de Assistência à Criança Deficiente (AACD)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 64,
        "titulo": "Cirurgia Endoscópica Uniportal no Segmento Torácico",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "91",
    "slug": "jean-marcel-dambros",
    "nome": "Jean Marcel Dambrós",
    "nome_vancouver": "Dambrós JM",
    "cargo": "Médico Ortopedista e Traumatologista",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-2871-5660",
    "orcid_url": "https://orcid.org/0000-0002-2871-5660",
    "bio_completa": "Médico Ortopedista e Traumatologista. Cirurgião de Coluna. Fellowship em Cirurgia da Coluna no Centre Hospita-lier Universitaire – Hopital Tripode Pellegrin – Bordeaux – França. Chefe do Serviço de Cirurgia da Coluna do Instituto de Ortopedia e Traumatologia de Passo Fundo – RS.",
    "titulacao_academica": [
      "Médico Ortopedista e Traumatologista. Cirurgião de Coluna. Fellowship em Cirurgia da Coluna no Centre Hospita-lier Universitaire – Hopital Tripode Pellegrin – Bordeaux – França. Chefe do Serviço de Cirurgia da Coluna do Instituto de Ortopedia e Traumatologia de Passo Fundo – RS."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 68,
        "titulo": "Artrodese Intersomática Lombar Posterior",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "92",
    "slug": "jefferson-soares-leal",
    "nome": "Jefferson Soares Leal",
    "nome_vancouver": "Leal JS",
    "cargo": "Professor Adjunto da Universidade Federal de Minas Gerais (UFMG)",
    "instituicao": "Universidade Federal de Minas Gerais (UFMG)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-1058-3804",
    "orcid_url": "https://orcid.org/0000-0003-1058-3804",
    "bio_completa": "Professor Adjunto da Universidade Federal de Minas Gerais (UFMG). Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT) e da Sociedade Brasileira da Coluna (SBC).",
    "titulacao_academica": [
      "Professor Adjunto da Universidade Federal de Minas Gerais (UFMG). Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT) e da Sociedade Brasileira da Coluna (SBC)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 7,
        "titulo": "Anatomia Cirúrgica e Vias de Acesso da Coluna Lombar e Lombossacra",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      },
      {
        "num": 69,
        "titulo": "Artrodese Lombar em Single-Position Lateral",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "93",
    "slug": "jeronimo-buzetti-milano",
    "nome": "Jeronimo Buzetti Milano",
    "nome_vancouver": "Milano JB",
    "cargo": "Médico Neurocirurgião",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-7758-9058",
    "orcid_url": "https://orcid.org/0000-0002-7758-9058",
    "bio_completa": "Médico Neurocirurgião. Coordenador da Divisão de Cirurgia de Coluna do Departamento de Neurocirurgia do Instituto de Neurologia de Curitiba. Doutor em Ciências pela Faculdade de Medicina da Universidade de São Paulo (FMUSP). Membro Titular da Sociedade Brasileira de Neurocirurgia (SBN) e Membro efetivo da Sociedade Brasileira de Coluna (SBC).",
    "titulacao_academica": [
      "Médico Neurocirurgião. Coordenador da Divisão de Cirurgia de Coluna do Departamento de Neurocirurgia do Instituto de Neurologia de Curitiba. Doutor em Ciências pela Faculdade de Medicina da Universidade de São Paulo (FMUSP). Membro Titular da Sociedade Brasileira de Neurocirurgia (SBN) e Membro efetivo da Sociedade Brasileira de Coluna (SBC)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 75,
        "titulo": "Técnicas de Fixação Cervical Anterior",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "94",
    "slug": "joao-abrao",
    "nome": "João Abrão",
    "nome_vancouver": "Abrão J",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-1810-5575",
    "orcid_url": "https://orcid.org/0000-0003-1810-5575",
    "bio_completa": "Professor Associado da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMUSP). Professor do Departamento de Ortopedia e Anestesiologia. Corresponsável pelo CET do HCFMRP-USP.",
    "titulacao_academica": [
      "Professor Associado da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMUSP). Professor do Departamento de Ortopedia e Anestesiologia. Corresponsável pelo CET do HCFMRP-USP."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 103,
        "titulo": "Abordagens para o Tratamento da Dor Pós-Operatória em Cirurgia de Coluna",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "95",
    "slug": "joao-paulo-machado-bergamaschi",
    "nome": "João Paulo Machado Bergamaschi",
    "nome_vancouver": "Bergamaschi JPM",
    "cargo": "Diretor e Responsável Técnico da Clínica Atualli Spine Care",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-6992-9876",
    "orcid_url": "https://orcid.org/0000-0002-6992-9876",
    "bio_completa": "Diretor e Responsável Técnico da Clínica Atualli Spine Care. Coordenador e professor do Curso de Especialização em Cirurgia Endoscópica de Coluna Vertebral da USP - Ribeirão Preto. Presidente da Sociedade Interamericana de Cirurgia Minimamente Invasiva (SICCMI). Membro Titular da Sociedade Brasileira de Coluna (SBC) e da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Residência Médica em Ortopedia e Traumatologia e Aper-feiçoamento em Cirurgia de Coluna Vertebral na Santa Casa de São Paulo. Graduação em Medicina pela Faculdade de Ciências Médicas da Santa Casa de São Paulo.",
    "titulacao_academica": [
      "Diretor e Responsável Técnico da Clínica Atualli Spine Care. Coordenador e professor do Curso de Especialização em Cirurgia Endoscópica de Coluna Vertebral da USP - Ribeirão Preto. Presidente da Sociedade Interamericana de Cirurgia Minimamente Invasiva (SICCMI). Membro Titular da Sociedade Brasileira de Coluna (SBC) e da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Residência Médica em Ortopedia e Traumatologia e Aper-feiçoamento em Cirurgia de Coluna Vertebral na Santa Casa de São Paulo. Graduação em Medicina pela Faculdade de Ciências Médicas da Santa Casa de São Paulo."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 62,
        "titulo": "Endoscopia Transforaminal na Coluna Lombossacra",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      },
      {
        "num": 66,
        "titulo": "Endoscopia na Coluna Cervical pela Via Anterior",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "96",
    "slug": "joao-tomas-fernandes-castilho-garcia",
    "nome": "João Tomás Fernandes Castilho Garcia",
    "nome_vancouver": "Garcia JTFC",
    "cargo": "Médico Graduado pela Faculdade de Ciências Médicas da Santa Casa de São Paulo (FCMSCSP)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-8282-7295",
    "orcid_url": "https://orcid.org/0000-0001-8282-7295",
    "bio_completa": "Médico Graduado pela Faculdade de Ciências Médicas da Santa Casa de São Paulo (FCMSCSP). Residência Médica em Ortopedia e Traumatologia e Espe-cialização em Cirurgia da Coluna Vertebral pela Irmandade Santa Casa de Misericórdia de São Paulo - Pavilhão Fernan-dinho Simonsen. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Membro da Sociedade Brasileira de Coluna (SBC). Preceptor da Graduação e da Residência Médica da Disciplina de Ortopedia e Traumatologia da Faculdade de Ciências Médicas da Santa Casa de São Paulo (FCMSCSP). Médico Assistente do Grupo de Cirurgia da Coluna Vertebral da Irmandade Santa Casa de Misericórdia de São Paulo - Pavilhão Fernandinho Simonsen. Mestrando no Programa de Pesquisa em Cirurgia pela Faculdade de Ciências Médicas da Santa Casa de São Paulo.",
    "titulacao_academica": [
      "Médico Graduado pela Faculdade de Ciências Médicas da Santa Casa de São Paulo (FCMSCSP). Residência Médica em Ortopedia e Traumatologia e Espe-cialização em Cirurgia da Coluna Vertebral pela Irmandade Santa Casa de Misericórdia de São Paulo - Pavilhão Fernan-dinho Simonsen. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Membro da Sociedade Brasileira de Coluna (SBC). Preceptor da Graduação e da Residência Médica da Disciplina de Ortopedia e Traumatologia da Faculdade de Ciências Médicas da Santa Casa de São Paulo (FCMSCSP). Médico Assistente do Grupo de Cirurgia da Coluna Vertebral da Irmandade Santa Casa de Misericórdia de São Paulo - Pavilhão Fernandinho Simonsen. Mestrando no Programa de Pesquisa em Cirurgia pela Faculdade de Ciências Médicas da Santa Casa de São Paulo."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 84,
        "titulo": "Infiltrações e Bloqueios da Coluna",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "97",
    "slug": "joao-vitor-liboni-guimaraes-rios",
    "nome": "João Vitor Liboni Guimarães Rios",
    "nome_vancouver": "Rios JVLG",
    "cargo": "Fellow de Cirurgia da Coluna do Hospital da Baleia",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-9841-0328",
    "orcid_url": "https://orcid.org/0000-0002-9841-0328",
    "bio_completa": "Fellow de Cirurgia da Coluna do Hospital da Baleia. Ortopedista pelo Hospital Maria Amélia Lins – Fundação Hospitalar de Minas Gerais (FHEMIG).",
    "titulacao_academica": [
      "Fellow de Cirurgia da Coluna do Hospital da Baleia. Ortopedista pelo Hospital Maria Amélia Lins – Fundação Hospitalar de Minas Gerais (FHEMIG)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 85,
        "titulo": "Sistemas de Crescimento Guiado para Deformidades da Coluna: Hastes de Crescimento Tradicionais",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "98",
    "slug": "joel-abramczuk",
    "nome": "Joel Abramczuk",
    "nome_vancouver": "Abramczuk J",
    "cargo": "Médico Especialista em Cirurgia da Coluna pela Sociedade Brasileira de Cirurgia da Coluna",
    "instituicao": "Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-4122-804X",
    "orcid_url": "https://orcid.org/0000-0002-4122-804X",
    "bio_completa": "Médico Especialista em Cirurgia da Coluna pela Sociedade Brasileira de Cirurgia da Coluna. Preceptor do Serviço de Ortopedia e Traumatologia do Hospital São Lucas da Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS). Instrutor do Curso de Cirurgia da Coluna do Instituto Gaúcho de Cirurgia da Coluna do Hospital São Lucas da PUC-RS.",
    "titulacao_academica": [
      "Médico Especialista em Cirurgia da Coluna pela Sociedade Brasileira de Cirurgia da Coluna. Preceptor do Serviço de Ortopedia e Traumatologia do Hospital São Lucas da Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS). Instrutor do Curso de Cirurgia da Coluna do Instituto Gaúcho de Cirurgia da Coluna do Hospital São Lucas da PUC-RS."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 1,
        "titulo": "Embriologia da Coluna Vertebral",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "99",
    "slug": "jorge-rafael-durigan",
    "nome": "Jorge Rafael Durigan",
    "nome_vancouver": "Durigan JR",
    "cargo": "Graduação em Medicina pela Faculdade de Medicina de Marília",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-2805-2948",
    "orcid_url": "https://orcid.org/0000-0003-2805-2948",
    "bio_completa": "Graduação em Medicina pela Faculdade de Medicina de Marília. Residência em Ortopedia e Traumatologia na Santa Casa de São Paulo. Especialização em Trauma Ortopédico. Especialização em Cirurgia da Coluna Vertebral. Pós-Graduação em Cirurgia Endoscópica de Coluna – Albert Einstein. Mestrado pela Faculdade de Ciências Médicas da Santa Casa de São Paulo. Doutorando em Medicina pela Faculdade de Ciências Médicas da Santa Casa de São Paulo. Membro da Preceptoria da Residência Médica em Ortopedia e Traumatologia da Santa Casa de São Paulo. Chefe de Plantão do Pronto-Socorro Ortopédico da Santa Casa de São Paulo.",
    "titulacao_academica": [
      "Graduação em Medicina pela Faculdade de Medicina de Marília. Residência em Ortopedia e Traumatologia na Santa Casa de São Paulo. Especialização em Trauma Ortopédico. Especialização em Cirurgia da Coluna Vertebral. Pós-Graduação em Cirurgia Endoscópica de Coluna – Albert Einstein. Mestrado pela Faculdade de Ciências Médicas da Santa Casa de São Paulo. Doutorando em Medicina pela Faculdade de Ciências Médicas da Santa Casa de São Paulo. Membro da Preceptoria da Residência Médica em Ortopedia e Traumatologia da Santa Casa de São Paulo. Chefe de Plantão do Pronto-Socorro Ortopédico da Santa Casa de São Paulo."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 16,
        "titulo": "Diagnóstico Diferencial: Doenças da Coluna e Condições Ortopédicas",
        "secao_id": 2,
        "secao_nome": "Avaliação Diagnóstica e Propedêutica"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "100",
    "slug": "jose-augusto-malheiros",
    "nome": "José Augusto Malheiros",
    "nome_vancouver": "Malheiros JA",
    "cargo": "Médico Neurocirurgião",
    "instituicao": "Universidade Federal de Minas Gerais (UFMG)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-4349-682X",
    "orcid_url": "https://orcid.org/0000-0003-4349-682X",
    "bio_completa": "Médico Neurocirurgião. Mestre e Doutor pela Universidade Federal de Minas Gerais (UFMG). Coordenador do serviço de Neurocirurgia e Cirurgia da Coluna do Hospital Orizonti. Serviço de Cirurgia da Coluna dos Hospitais Mater Dei e Felício Rocho. Membro da Sociedade Brasileira de Neurocirurgia (SBN) e da Sociedade Brasileira de Coluna (SBC).",
    "titulacao_academica": [
      "Médico Neurocirurgião. Mestre e Doutor pela Universidade Federal de Minas Gerais (UFMG). Coordenador do serviço de Neurocirurgia e Cirurgia da Coluna do Hospital Orizonti. Serviço de Cirurgia da Coluna dos Hospitais Mater Dei e Felício Rocho. Membro da Sociedade Brasileira de Neurocirurgia (SBN) e da Sociedade Brasileira de Coluna (SBC)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 71,
        "titulo": "Artrodese Lombar Oblíqua",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "101",
    "slug": "jullyene-pokorny",
    "nome": "Jullyene Pokorny",
    "nome_vancouver": "Pokorny J",
    "cargo": "Biomédica",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0009-6044-9516",
    "orcid_url": "https://orcid.org/0009-0009-6044-9516",
    "bio_completa": "Biomédica. Bacharelado em Biomedicina – Biologia Molecular e Genética pelo Centro Universitário São Camilo (2012-2015). Pós-Graduação em Gestão da Qualidade em Saúde pelo Hospital Israelita Albert Einstein (2018-2019). MBA em Gestão de Projetos pela USP/Esalq (2020-2022). Coordenadora de Pesquisa Clínica no Instituto de Patologia da Coluna (IPC) (desde setembro/2022), com atuação em pesquisa clínica, gestão de base de dados, qualidade e projetos.",
    "titulacao_academica": [
      "Biomédica. Bacharelado em Biomedicina – Biologia Molecular e Genética pelo Centro Universitário São Camilo (2012-2015). Pós-Graduação em Gestão da Qualidade em Saúde pelo Hospital Israelita Albert Einstein (2018-2019). MBA em Gestão de Projetos pela USP/Esalq (2020-2022). Coordenadora de Pesquisa Clínica no Instituto de Patologia da Coluna (IPC) (desde setembro/2022), com atuação em pesquisa clínica, gestão de base de dados, qualidade e projetos."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 39,
        "titulo": "Espondilolistese no Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 70,
        "titulo": "Artrodese Lombar Prone Transpsoas",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "102",
    "slug": "karen-santos-braghiroli",
    "nome": "Karen Santos Braghiroli",
    "nome_vancouver": "Braghiroli KS",
    "cargo": "Médica e Anestesiologista pela Faculdade de Medicina de Botucatu (UNESP)",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0005-5064-0975",
    "orcid_url": "https://orcid.org/0009-0005-5064-0975",
    "bio_completa": "Médica e Anestesiologista pela Faculdade de Medicina de Botucatu (UNESP). Título de Atuação em Dor pela Associação Médica Brasileira (AMB). Mestrado e Doutorado pela UNESP. Títulos Internacionais FIPP e CIPS pela World Institute of Pain (WIP).",
    "titulacao_academica": [
      "Médica e Anestesiologista pela Faculdade de Medicina de Botucatu (UNESP). Título de Atuação em Dor pela Associação Médica Brasileira (AMB). Mestrado e Doutorado pela UNESP. Títulos Internacionais FIPP e CIPS pela World Institute of Pain (WIP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 102,
        "titulo": "Manejo da Dor Aguda e Crônica na Coluna Vertebral",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "103",
    "slug": "kelsen-de-oliveira-teixeira",
    "nome": "Kelsen de Oliveira Teixeira",
    "nome_vancouver": "Teixeira KO",
    "cargo": "Médico Graduado em Medicina pela Universidade de Brasília",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-4385-405X",
    "orcid_url": "https://orcid.org/0000-0003-4385-405X",
    "bio_completa": "Médico Graduado em Medicina pela Universidade de Brasília. Residência Médica em Ortopedia e Traumatologia pelo Hospital de Base do Distrito Federal (HBDF). Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT) e da Sociedade Brasileira de Coluna (SBC). Complementação Especializada em Cirurgia da Coluna pelo Hospital das Clínicas da USP de Ribeirão Preto (HC-FMRP-USP). Mestre em Ciências pela Universidade de São Paulo (USP) - Faculdade de Medicina de Ribeirão Preto (FMRP-USP). Professor Assistente da Pós-Gradução em Cirurgia Endoscópica da Coluna da USP de Ribeirão Preto. MBA em Administração: Gestão em Saúde pela Fundação Getulio Vargas (FGV).",
    "titulacao_academica": [
      "Médico Graduado em Medicina pela Universidade de Brasília. Residência Médica em Ortopedia e Traumatologia pelo Hospital de Base do Distrito Federal (HBDF). Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT) e da Sociedade Brasileira de Coluna (SBC). Complementação Especializada em Cirurgia da Coluna pelo Hospital das Clínicas da USP de Ribeirão Preto (HC-FMRP-USP). Mestre em Ciências pela Universidade de São Paulo (USP) - Faculdade de Medicina de Ribeirão Preto (FMRP-USP). Professor Assistente da Pós-Gradução em Cirurgia Endoscópica da Coluna da USP de Ribeirão Preto. MBA em Administração: Gestão em Saúde pela Fundação Getulio Vargas (FGV)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 66,
        "titulo": "Endoscopia na Coluna Cervical pela Via Anterior",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "104",
    "slug": "leon-cleres-penido-pinheiro",
    "nome": "Leon Cleres Penido Pinheiro",
    "nome_vancouver": "Pinheiro LCP",
    "cargo": "Médico Neurocirurgião",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-2726-536X",
    "orcid_url": "https://orcid.org/0000-0003-2726-536X",
    "bio_completa": "Médico Neurocirurgião. Mestre em Patologia Unesp FMB. Fellow em Microcirurgia pela Weil Cornell School of Medicine. Fellow em Cirurgia da Coluna Neurocirurgia pela Universi-dade de São Paulo (USP). Médico do Grupo de Coluna Neurocirurgia da USP. Membro da Sociedade Brasileira de Neurocirurgia (SBN). Membro da Sociedade Brasileira de Coluna (SBC). Membro da Sociedade Brasileira para o Estudo da Dor (SBED).",
    "titulacao_academica": [
      "Médico Neurocirurgião. Mestre em Patologia Unesp FMB. Fellow em Microcirurgia pela Weil Cornell School of Medicine. Fellow em Cirurgia da Coluna Neurocirurgia pela Universi-dade de São Paulo (USP). Médico do Grupo de Coluna Neurocirurgia da USP. Membro da Sociedade Brasileira de Neurocirurgia (SBN). Membro da Sociedade Brasileira de Coluna (SBC). Membro da Sociedade Brasileira para o Estudo da Dor (SBED)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 56,
        "titulo": "Tumores Intramedulares e Extramedulares: Classificação, Diagnóstico e Manejo",
        "secao_id": 6,
        "secao_nome": "Técnicas Minimamente Invasivas e Endoscopia"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "105",
    "slug": "leonardo-yukio-jorge-asano",
    "nome": "Leonardo Yukio Jorge Asano",
    "nome_vancouver": "Asano LYJ",
    "cargo": "Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT)",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-8489-5256",
    "orcid_url": "https://orcid.org/0000-0002-8489-5256",
    "bio_completa": "Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Membro Titular da Sociedade Brasileira de Coluna (SBC).",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Membro Titular da Sociedade Brasileira de Coluna (SBC)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 99,
        "titulo": "Lesão Neurológica Perioperatória",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "106",
    "slug": "luca-erdmann-bini-cordeiro",
    "nome": "Luca Erdmann Bini Cordeiro",
    "nome_vancouver": "Cordeiro LEB",
    "cargo": "Médico Graduado pelo Centro Universitário da Serra dos Órgãos (Unifeso)",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0008-5369-4479",
    "orcid_url": "https://orcid.org/0009-0008-5369-4479",
    "bio_completa": "Médico Graduado pelo Centro Universitário da Serra dos Órgãos (Unifeso). Residência Médica em Ortopedia e Traumatologia pelo Hospital Pequeno Príncipe. Fellowship em Cirurgia de Coluna pelo Hospital Pequeno Príncipe, Hospital Universi-tário Evangélico Mackenzie e Instituto Columna. Fellowship em Cirurgia de Coluna pelo Melbourne Ortho-paedic Group. Honorary Fellow no Royal Childrens Hospital Melbourne. Cirurgião de Coluna Pediátrica no Hospital Pequeno Príncipe.",
    "titulacao_academica": [
      "Médico Graduado pelo Centro Universitário da Serra dos Órgãos (Unifeso). Residência Médica em Ortopedia e Traumatologia pelo Hospital Pequeno Príncipe. Fellowship em Cirurgia de Coluna pelo Hospital Pequeno Príncipe, Hospital Universi-tário Evangélico Mackenzie e Instituto Columna. Fellowship em Cirurgia de Coluna pelo Melbourne Ortho-paedic Group. Honorary Fellow no Royal Childrens Hospital Melbourne. Cirurgião de Coluna Pediátrica no Hospital Pequeno Príncipe."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 30,
        "titulo": "Escoliose Neuromuscular",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "107",
    "slug": "lucas-gomes-pupp",
    "nome": "Lucas Gomes Pupp",
    "nome_vancouver": "Pupp LG",
    "cargo": "Médico Ortopedista pelo Instituto Nacional de Traumatologia e Ortopedia (INTO)",
    "instituicao": "Instituto Nacional de Traumatologia e Ortopedia (INTO)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0003-3110-8188",
    "orcid_url": "https://orcid.org/0009-0003-3110-8188",
    "bio_completa": "Médico Ortopedista pelo Instituto Nacional de Traumatologia e Ortopedia (INTO). Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Fellow em Cirurgia da Coluna Vertebral (INTO).",
    "titulacao_academica": [
      "Médico Ortopedista pelo Instituto Nacional de Traumatologia e Ortopedia (INTO). Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Fellow em Cirurgia da Coluna Vertebral (INTO)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 41,
        "titulo": "Deformidades da Coluna Cervical",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "108",
    "slug": "lucas-silveira-rabello-de-oliveira",
    "nome": "Lucas Silveira Rabello de Oliveira",
    "nome_vancouver": "Oliveira LSR",
    "cargo": "Médico Ortopedista pelo Hospital Israelita Albert Einstein",
    "instituicao": "Hospital Israelita Albert Einstein",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-0815-7999",
    "orcid_url": "https://orcid.org/0000-0002-0815-7999",
    "bio_completa": "Médico Ortopedista pelo Hospital Israelita Albert Einstein. Especialista em Cirurgia da Coluna Vertebral pela Faculdade de Medicina do ABC (FMABC).",
    "titulacao_academica": [
      "Médico Ortopedista pelo Hospital Israelita Albert Einstein. Especialista em Cirurgia da Coluna Vertebral pela Faculdade de Medicina do ABC (FMABC)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 95,
        "titulo": "Queda das Respostas na Monitoração Neurofisiológica Intraoperatória",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "109",
    "slug": "luciano-miller-reis-rodrigues",
    "nome": "Luciano Miller Reis Rodrigues",
    "nome_vancouver": "Rodrigues LMR",
    "cargo": "Professor Convidado da Faculdade de Medicina Einstein Hospital Israelita",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-6891-5395",
    "orcid_url": "https://orcid.org/0000-0001-6891-5395",
    "bio_completa": "Professor Convidado da Faculdade de Medicina Einstein Hospital Israelita. Professor Livre-Docente pela Universidade Federal de São Paulo (UNIFESP). Pós-Doutorado pela UNIFESP. Doutorado e Mestrado em Ciências Médicas da Faculdade de Medicina do ABC (FMABC). Chefe do Grupo de Coluna da FMABC. Research Fellow na Thomas Jefferson University – Philadelphia.",
    "titulacao_academica": [
      "Professor Convidado da Faculdade de Medicina Einstein Hospital Israelita. Professor Livre-Docente pela Universidade Federal de São Paulo (UNIFESP). Pós-Doutorado pela UNIFESP. Doutorado e Mestrado em Ciências Médicas da Faculdade de Medicina do ABC (FMABC). Chefe do Grupo de Coluna da FMABC. Research Fellow na Thomas Jefferson University – Philadelphia."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 95,
        "titulo": "Queda das Respostas na Monitoração Neurofisiológica Intraoperatória",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "110",
    "slug": "luis-antonio-medeiros-moliterno",
    "nome": "Luis Antonio Medeiros Moliterno",
    "nome_vancouver": "Moliterno LAM",
    "cargo": "Médico Ortopedista e Traumatologista",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-9709-7862",
    "orcid_url": "https://orcid.org/0000-0001-9709-7862",
    "bio_completa": "Médico Ortopedista e Traumatologista. Membro da Sociedade Brasileira de Coluna (SBC). Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Médico do Centro de Doenças da Coluna do Instituto Nacional de Traumatologia e Ortopedia (INTO/MS). Doutor em Ciências do Aparelho Locomotor pela Universi-dade de São Paulo (USP). Mestre em Ciências do Sistema Musculoesquelético do Instituto Nacional de Traumatologia e Ortopedia (INTO/ MS). Professor da Faculdade de Medicina do Instituto de Educação Médica (IDOMED).",
    "titulacao_academica": [
      "Médico Ortopedista e Traumatologista. Membro da Sociedade Brasileira de Coluna (SBC). Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Médico do Centro de Doenças da Coluna do Instituto Nacional de Traumatologia e Ortopedia (INTO/MS). Doutor em Ciências do Aparelho Locomotor pela Universi-dade de São Paulo (USP). Mestre em Ciências do Sistema Musculoesquelético do Instituto Nacional de Traumatologia e Ortopedia (INTO/ MS). Professor da Faculdade de Medicina do Instituto de Educação Médica (IDOMED)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 76,
        "titulo": "Fixação Posterior da Coluna Cervical",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "111",
    "slug": "luis-eduardo-carelli",
    "nome": "Luis Eduardo Carelli",
    "nome_vancouver": "Carelli LE",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Instituto Nacional de Traumatologia e Ortopedia (INTO)",
    "destaque": "Autor de 4 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-9263-4216",
    "orcid_url": "https://orcid.org/0000-0002-9263-4216",
    "bio_completa": "Professor Coordenador da Pós-graduação em Cirurgia da Coluna Vertebral do Instituto Nacional de Traumatologia e Ortopedia (INTO). Chefe do Grupo de Cirurgia de Coluna do INTO. Mestre em Ortopedia pela Universidade Federal do Rio de Janeiro (UFRJ). Doutor em Neurologia pela Universidade Federal do Estado do Rio de Janeiro (UNIRIO). Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT), Sociedade Brasileira de Coluna (SBC), Scoliosis Research Society (SRS), Cervical Spine Research Society – European Section (CSRS-EU), Cranio-vertebral Junction and Spine Society (CVJSS).",
    "titulacao_academica": [
      "Professor Coordenador da Pós-graduação em Cirurgia da Coluna Vertebral do Instituto Nacional de Traumatologia e Ortopedia (INTO). Chefe do Grupo de Cirurgia de Coluna do INTO. Mestre em Ortopedia pela Universidade Federal do Rio de Janeiro (UFRJ). Doutor em Neurologia pela Universidade Federal do Estado do Rio de Janeiro (UNIRIO). Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT), Sociedade Brasileira de Coluna (SBC), Scoliosis Research Society (SRS), Cervical Spine Research Society – European Section (CSRS-EU), Cranio-vertebral Junction and Spine Society (CVJSS)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 37,
        "titulo": "Escoliose Idiopática de Alto Valor Angular",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 41,
        "titulo": "Deformidades da Coluna Cervical",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      },
      {
        "num": 53,
        "titulo": "Tumores Benignos e Lesões Pseudotumorais da Coluna",
        "secao_id": 6,
        "secao_nome": "Técnicas Minimamente Invasivas e Endoscopia"
      },
      {
        "num": 101,
        "titulo": "Junção Craniovertebral: Anormalidades Congênitas, Adquiridas e Trauma",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "112",
    "slug": "luis-eduardo-munhoz-da-rocha",
    "nome": "Luís Eduardo Munhoz Da Rocha",
    "nome_vancouver": "Rocha LEM",
    "cargo": "Médico Ortopedista Pediátrico e Cirurgião de Coluna do Hospital Pequeno Príncipe, Curitiba-PR",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-1042-2886",
    "orcid_url": "https://orcid.org/0000-0002-1042-2886",
    "bio_completa": "Médico Ortopedista Pediátrico e Cirurgião de Coluna do Hospital Pequeno Príncipe, Curitiba-PR.",
    "titulacao_academica": [
      "Médico Ortopedista Pediátrico e Cirurgião de Coluna do Hospital Pequeno Príncipe, Curitiba-PR."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 32,
        "titulo": "Escoliose na Neurofibromatose",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "113",
    "slug": "luiz-gustavo-daloglio-da-rocha",
    "nome": "Luiz Gustavo Dal’Oglio da Rocha",
    "nome_vancouver": "Rocha LGD",
    "cargo": "Médico Especialista em Ortopedia e Traumatologia",
    "instituicao": "Pontifícia Universidade Católica do Paraná (PUC-PR)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-7599-7816",
    "orcid_url": "https://orcid.org/0000-0002-7599-7816",
    "bio_completa": "Médico Especialista em Ortopedia e Traumatologia. Membro Efetivo da Sociedade Brasileira de Coluna (SBC). Grupo de Coluna do Serviço de Ortopedia e Traumatologia do Hospital Universitário Cajuru – Pontifícia Universidade Católica - PUC-PR. Mestre em Ciências da Saúde.",
    "titulacao_academica": [
      "Médico Especialista em Ortopedia e Traumatologia. Membro Efetivo da Sociedade Brasileira de Coluna (SBC). Grupo de Coluna do Serviço de Ortopedia e Traumatologia do Hospital Universitário Cajuru – Pontifícia Universidade Católica - PUC-PR. Mestre em Ciências da Saúde."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 21,
        "titulo": "Lesões Traumáticas da Coluna Cervical Subaxial",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      },
      {
        "num": 23,
        "titulo": "Lesões Traumáticas do Sacro",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "114",
    "slug": "luiz-muller-avila",
    "nome": "Luiz Müller Avila",
    "nome_vancouver": "Avila LM",
    "cargo": "Médico Ortopedista e Traumatologista pelo Hospital de Clínicas de Porto Alegre",
    "instituicao": "Pontifícia Universidade Católica do Paraná (PUC-PR)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-6244-8703",
    "orcid_url": "https://orcid.org/0000-0002-6244-8703",
    "bio_completa": "Médico Ortopedista e Traumatologista pelo Hospital de Clínicas de Porto Alegre. Especialização em Cirurgia da Coluna pelo Hospital Univer-sitário Cajuru/AO Spine. Fellow em Deformidades da Coluna Pediátrica pelo Hospital Pequeno Príncipe e Nicklaus Children’s Hospital. Membro da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT), Sociedade Brasileira da Coluna (SBC), AOSpine e Scoliosis Research Society (SRS). Médico do Hospital Pequeno Príncipe.",
    "titulacao_academica": [
      "Médico Ortopedista e Traumatologista pelo Hospital de Clínicas de Porto Alegre. Especialização em Cirurgia da Coluna pelo Hospital Univer-sitário Cajuru/AO Spine. Fellow em Deformidades da Coluna Pediátrica pelo Hospital Pequeno Príncipe e Nicklaus Children’s Hospital. Membro da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT), Sociedade Brasileira da Coluna (SBC), AOSpine e Scoliosis Research Society (SRS). Médico do Hospital Pequeno Príncipe."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 33,
        "titulo": "Deformidades Congênitas da Coluna Vertebral",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "115",
    "slug": "luiz-pimenta",
    "nome": "Luiz Pimenta",
    "nome_vancouver": "Pimenta L",
    "cargo": "Médico Graduado pela Universidade de São Paulo (USP) – Ribeirão Preto",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-5702-5431",
    "orcid_url": "https://orcid.org/0000-0002-5702-5431",
    "bio_completa": "Médico Graduado pela Universidade de São Paulo (USP) – Ribeirão Preto. Residência em Neurocirurgia pela Universidade Federal de São Paulo (UNIFESP). PhD em Neurocirurgia pela Universidade Federal de São Paulo (UNIFESP). Treinamento/Fellowship em Endoscopia de Coluna: Gaines-ville (EUA, 1997) e com Daniel Rosenthal MD, Frankfurt. Associated Professor, Duke University (EUA) e University of California San Diego (UCSD) (EUA). Diretor Honorário do Instituto de Patologia da Coluna (IPC), São Paulo. Ex-Presidente da Society of Lateral Access Surgery (SOLAS), da International Society for the Advancement of Spine Surgery (ISASS; 2013-2014) e da World Spine Column Society (WScS; 2010).",
    "titulacao_academica": [
      "Médico Graduado pela Universidade de São Paulo (USP) – Ribeirão Preto. Residência em Neurocirurgia pela Universidade Federal de São Paulo (UNIFESP). PhD em Neurocirurgia pela Universidade Federal de São Paulo (UNIFESP). Treinamento/Fellowship em Endoscopia de Coluna: Gaines-ville (EUA, 1997) e com Daniel Rosenthal MD, Frankfurt. Associated Professor, Duke University (EUA) e University of California San Diego (UCSD) (EUA). Diretor Honorário do Instituto de Patologia da Coluna (IPC), São Paulo. Ex-Presidente da Society of Lateral Access Surgery (SOLAS), da International Society for the Advancement of Spine Surgery (ISASS; 2013-2014) e da World Spine Column Society (WScS; 2010)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 39,
        "titulo": "Espondilolistese no Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 70,
        "titulo": "Artrodese Lombar Prone Transpsoas",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "116",
    "slug": "luiz-roberto-gomes-vialle",
    "nome": "Luiz Roberto Gomes Vialle",
    "nome_vancouver": "Vialle LRG",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Pontifícia Universidade Católica do Paraná (PUC-PR)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-0638-4311",
    "orcid_url": "https://orcid.org/0000-0002-0638-4311",
    "bio_completa": "Grupo de Coluna, Serviço de Ortopedia e Traumatologia do Hospital Universitário Cajuru da Pontifícia Universidade Católica do Paraná (PUC-PR).",
    "titulacao_academica": [
      "Grupo de Coluna, Serviço de Ortopedia e Traumatologia do Hospital Universitário Cajuru da Pontifícia Universidade Católica do Paraná (PUC-PR)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 52,
        "titulo": "Instabilidade Vertebral em Neoplasia de Coluna",
        "secao_id": 6,
        "secao_nome": "Técnicas Minimamente Invasivas e Endoscopia"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "117",
    "slug": "luna-jeannie-alves-mangueira",
    "nome": "Luna Jeannie Alves Mangueira",
    "nome_vancouver": "Mangueira LJA",
    "cargo": "Preceptora do Serviço de Treinamento Avançado em Cirurgia da Coluna Vertebral do CRER",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-6991-6725",
    "orcid_url": "https://orcid.org/0000-0002-6991-6725",
    "bio_completa": "Preceptora do Serviço de Treinamento Avançado em Cirurgia da Coluna Vertebral do CRER. Responsável Técnica pela Cirurgia da Coluna e Preceptora do Serviço de Ortopedia do Hospital Estadual de Urgên-cias de Goiás Dr. Valdemiro Cruz (HUGO).",
    "titulacao_academica": [
      "Preceptora do Serviço de Treinamento Avançado em Cirurgia da Coluna Vertebral do CRER. Responsável Técnica pela Cirurgia da Coluna e Preceptora do Serviço de Ortopedia do Hospital Estadual de Urgên-cias de Goiás Dr. Valdemiro Cruz (HUGO)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 44,
        "titulo": "Hérnia de Disco Torácica",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "118",
    "slug": "marcello-henrique-nogueira-barbosa",
    "nome": "Marcello Henrique Nogueira-Barbosa",
    "nome_vancouver": "Nogueira-Barbosa MH",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-7436-5315",
    "orcid_url": "https://orcid.org/0000-0002-7436-5315",
    "bio_completa": "Professor Associado da Radiologia do Departamento de Imagens Médicas, Hematologia e Oncologia Clínica da Faculdade de Medicina de Ribeirão Preto Universidade de São Paulo (USP). Coordenador da Radiologia Musculoesquelética – HCRP.",
    "titulacao_academica": [
      "Professor Associado da Radiologia do Departamento de Imagens Médicas, Hematologia e Oncologia Clínica da Faculdade de Medicina de Ribeirão Preto Universidade de São Paulo (USP). Coordenador da Radiologia Musculoesquelética – HCRP."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 15,
        "titulo": "Diagnóstico por Imagem da Coluna Vertebral",
        "secao_id": 2,
        "secao_nome": "Avaliação Diagnóstica e Propedêutica"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "119",
    "slug": "marcelo-abreu",
    "nome": "Marcelo Abreu",
    "nome_vancouver": "Abreu M",
    "cargo": "Médico Radiologista",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-0386-0295",
    "orcid_url": "https://orcid.org/0000-0003-0386-0295",
    "bio_completa": "Médico Radiologista. Membro da Sociedade Brasileira de Radiologia (SBR). Membro do Serviço de Radiologia do Hospital Mãe de Deus.",
    "titulacao_academica": [
      "Médico Radiologista. Membro da Sociedade Brasileira de Radiologia (SBR). Membro do Serviço de Radiologia do Hospital Mãe de Deus."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 100,
        "titulo": "Síndrome da Falha da Cirurgia da Coluna Vertebral",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "120",
    "slug": "marcelo-botelho-soares-de-brito",
    "nome": "Marcelo Botelho Soares de Brito",
    "nome_vancouver": "Brito MBS",
    "cargo": "Chefe do Serviço de Cirurgia de Coluna Articulare – Sociedade Brasileira de Coluna (SBC)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-1783-594X",
    "orcid_url": "https://orcid.org/0000-0002-1783-594X",
    "bio_completa": "Chefe do Serviço de Cirurgia de Coluna Articulare – Sociedade Brasileira de Coluna (SBC). Médico Ortopedista e Cirurgião de Coluna pela Santa Casa de São Paulo. Presidente da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT) – Regional Pará 2023. Membro diretor da Sociedade Interamericana de Cirurgia de Coluna Minimamente Invasiva (SICCMI). Professor da Universidade de São Paulo (USP – Ribeirão Preto) no Curso de Especialização em Cirurgia Endoscó-pica de Coluna. Preceptor da Residência Médica em Ortopedia e Trauma-tologia da Universidade do Estado do Pará (UEPA)/Hospital Porto Dias.",
    "titulacao_academica": [
      "Chefe do Serviço de Cirurgia de Coluna Articulare – Sociedade Brasileira de Coluna (SBC). Médico Ortopedista e Cirurgião de Coluna pela Santa Casa de São Paulo. Presidente da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT) – Regional Pará 2023. Membro diretor da Sociedade Interamericana de Cirurgia de Coluna Minimamente Invasiva (SICCMI). Professor da Universidade de São Paulo (USP – Ribeirão Preto) no Curso de Especialização em Cirurgia Endoscó-pica de Coluna. Preceptor da Residência Médica em Ortopedia e Trauma-tologia da Universidade do Estado do Pará (UEPA)/Hospital Porto Dias."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 62,
        "titulo": "Endoscopia Transforaminal na Coluna Lombossacra",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "121",
    "slug": "marcelo-italo-risso-neto",
    "nome": "Marcelo Italo Risso Neto",
    "nome_vancouver": "Risso Neto MI",
    "cargo": "MÉDICO ORTOPEDISTA E TRAUMATOLOGISTA",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 7 Capítulos no Tratado SBC",
    "foto_url": "/assets/marcelo-risso.png",
    "orcid": "0000-0003-0990-6901",
    "orcid_url": "https://orcid.org/0000-0003-0990-6901",
    "bio_completa": "MÉDICO ORTOPEDISTA E TRAUMATOLOGISTA. Professor Doutor e Coordenador da Área de Cirurgia de Coluna do Departamento de Ortopedia, Reumatologia e Traumatologia da Universidade Estadual de Campinas (UNICAMP). Coordenador do Grupo de Coluna do Hospital Alemão Oswaldo Cruz.",
    "titulacao_academica": [
      "MÉDICO ORTOPEDISTA E TRAUMATOLOGISTA. Professor Doutor e Coordenador da Área de Cirurgia de Coluna do Departamento de Ortopedia, Reumatologia e Traumatologia da Universidade Estadual de Campinas (UNICAMP). Coordenador do Grupo de Coluna do Hospital Alemão Oswaldo Cruz."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 8,
        "titulo": "Coluna Vertebral no Plano Sagital",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      },
      {
        "num": 49,
        "titulo": "Infiltrações e Radiofrequência na Coluna Vertebral",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      },
      {
        "num": 51,
        "titulo": "Princípios no Manejo das Neoplasias da Coluna Vertebral",
        "secao_id": 6,
        "secao_nome": "Técnicas Minimamente Invasivas e Endoscopia"
      },
      {
        "num": 55,
        "titulo": "Tumores Metastáticos na Coluna",
        "secao_id": 6,
        "secao_nome": "Técnicas Minimamente Invasivas e Endoscopia"
      },
      {
        "num": 78,
        "titulo": "Parafusos Pediculares na Coluna Torácica, Lombar e Lombossacra – Técnica Free-Hand",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      },
      {
        "num": 82,
        "titulo": "Aplicação do Halo e Tração Craniana",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      },
      {
        "num": 107,
        "titulo": "Segurança em Cirurgia de Coluna",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "122",
    "slug": "marcelo-luis-mudo",
    "nome": "Marcelo Luis Mudo",
    "nome_vancouver": "Mudo ML",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-8367-3299",
    "orcid_url": "https://orcid.org/0000-0002-8367-3299",
    "bio_completa": "Mestre em neurocirurgia pela Escola Paulista de Medicina da Universidade Federal de São Paulo (EPM/UNIFESP). Doutor em Engenharia de Materiais: UFCG-CeRTbIO.",
    "titulacao_academica": [
      "Mestre em neurocirurgia pela Escola Paulista de Medicina da Universidade Federal de São Paulo (EPM/UNIFESP). Doutor em Engenharia de Materiais: UFCG-CeRTbIO."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 91,
        "titulo": "Técnicas Minimamente Invasivas para Tratamento e Adjuvância nos Tumores da Coluna Vertebral",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "123",
    "slug": "marcelo-paulo-melo-de-souza",
    "nome": "Marcelo Paulo Melo de Souza",
    "nome_vancouver": "Souza MPM",
    "cargo": "Médico pela Universidade Federal de Campina Grande (UFCG)",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-1171-8387",
    "orcid_url": "https://orcid.org/0000-0003-1171-8387",
    "bio_completa": "Médico pela Universidade Federal de Campina Grande (UFCG). Residência em Ortopedia e traumatologia pelo Hospital Getúlio Vargas Recife/PE. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Membro da Sociedade Brasileira de Coluna (SBC).",
    "titulacao_academica": [
      "Médico pela Universidade Federal de Campina Grande (UFCG). Residência em Ortopedia e traumatologia pelo Hospital Getúlio Vargas Recife/PE. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Membro da Sociedade Brasileira de Coluna (SBC)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 29,
        "titulo": "Tratamento Não Cirúrgico das Escolioses",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "124",
    "slug": "marcio-oliveira-penna-de-carvalho",
    "nome": "Marcio Oliveira Penna de Carvalho",
    "nome_vancouver": "Carvalho MOP",
    "cargo": "Médico Ortopedista e Traumatologista",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-7243-7418",
    "orcid_url": "https://orcid.org/0000-0002-7243-7418",
    "bio_completa": "Médico Ortopedista e Traumatologista. Graduado em Medicina pela Universidade do Estado do Pará (UEPA). Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Membro Titular da Sociedade Brasileira de Coluna (SBC). Mestre em Ciências Médicas pela Faculdade de Ciências Médicas da Universidade do Estado de São Paulo (FCM-USP). Instrutor Internacional RIWOspine de Cirurgia Endoscó-pica da Coluna. Membro da Sociedade Latino-Americana de Cirurgia Endoscópica da Coluna (LESSS).",
    "titulacao_academica": [
      "Médico Ortopedista e Traumatologista. Graduado em Medicina pela Universidade do Estado do Pará (UEPA). Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Membro Titular da Sociedade Brasileira de Coluna (SBC). Mestre em Ciências Médicas pela Faculdade de Ciências Médicas da Universidade do Estado de São Paulo (FCM-USP). Instrutor Internacional RIWOspine de Cirurgia Endoscó-pica da Coluna. Membro da Sociedade Latino-Americana de Cirurgia Endoscópica da Coluna (LESSS)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 63,
        "titulo": "Endoscopia Interlaminar na Coluna Lombossacra",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "125",
    "slug": "marcio-vinhal-de-carvalho",
    "nome": "Márcio Vinhal de Carvalho",
    "nome_vancouver": "Carvalho MV",
    "cargo": "Titular Sociedade Brasileira Neurocirurgia (SBN)",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0007-6935-9993",
    "orcid_url": "https://orcid.org/0009-0007-6935-9993",
    "bio_completa": "Titular Sociedade Brasileira Neurocirurgia (SBN). Titular da Sociedade Brasileira Coluna (SBC). Coordenador Grupo Coluna Rede D’Or Brasília. Chairmain Instituto Vértebra",
    "titulacao_academica": [
      "Titular Sociedade Brasileira Neurocirurgia (SBN). Titular da Sociedade Brasileira Coluna (SBC). Coordenador Grupo Coluna Rede D’Or Brasília. Chairmain Instituto Vértebra"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 11,
        "titulo": "Disrafismo Espinhal – Defeitos do Tubo Neural",
        "secao_id": 2,
        "secao_nome": "Avaliação Diagnóstica e Propedêutica"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "126",
    "slug": "marco-aurelio-moscatelli",
    "nome": "Marco Aurelio Moscatelli",
    "nome_vancouver": "Moscatelli MA",
    "cargo": "Médico Neurocirurgião",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0002-8966-2571",
    "orcid_url": "https://orcid.org/0009-0002-8966-2571",
    "bio_completa": "Médico Neurocirurgião. Especialista em Neurocirurgia pelo Hospital Fundação Centro Médico de Campinas. Especialização em Cirurgia Videoendoscópica da Coluna com Dr. Prof. Sebastian Ruetten pelo Hospital Sant’Anna – Herne – Alemanha. Diretor Técnico e Sócio da Clínica Neurolife Natal. Instrutor Internacional RIWOspine de Cirurgia Endoscó-pica da Coluna. Membro Titular da Sociedade Brasileira de Neurocirurgia (SBN). Membro da Sociedade Brasileira de Coluna (SBC). Fundador da Sociedade Latino-Americana de Cirurgia Endoscópica da Coluna (LESSS).",
    "titulacao_academica": [
      "Médico Neurocirurgião. Especialista em Neurocirurgia pelo Hospital Fundação Centro Médico de Campinas. Especialização em Cirurgia Videoendoscópica da Coluna com Dr. Prof. Sebastian Ruetten pelo Hospital Sant’Anna – Herne – Alemanha. Diretor Técnico e Sócio da Clínica Neurolife Natal. Instrutor Internacional RIWOspine de Cirurgia Endoscó-pica da Coluna. Membro Titular da Sociedade Brasileira de Neurocirurgia (SBN). Membro da Sociedade Brasileira de Coluna (SBC). Fundador da Sociedade Latino-Americana de Cirurgia Endoscópica da Coluna (LESSS)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 63,
        "titulo": "Endoscopia Interlaminar na Coluna Lombossacra",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "127",
    "slug": "marcos-antonio-ferreira-junior",
    "nome": "Marcos Antonio Ferreira Junior",
    "nome_vancouver": "Ferreira Junior MA",
    "cargo": "Médico Ortopedista",
    "instituicao": "Universidade Federal de Minas Gerais (UFMG)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0001-4052-7603",
    "orcid_url": "https://orcid.org/0009-0001-4052-7603",
    "bio_completa": "Médico Ortopedista. Mestrando pela Universidade Federal de Minas Gerais (UFMG). Preceptor da Residência de Neurocirurgia da Fundação Hospitalar do Estado de Minas Gerais (FHEMIG). Serviço de Cirurgia da Coluna dos Hospitais Orizonti e Mater Dei. Membro Sociedade Brasileira de Ortopedia e Traumatologia (SBOT), da Sociedade Brasileira de Coluna (SBC), da North American Spine Society (NASS) e Ao Spine.",
    "titulacao_academica": [
      "Médico Ortopedista. Mestrando pela Universidade Federal de Minas Gerais (UFMG). Preceptor da Residência de Neurocirurgia da Fundação Hospitalar do Estado de Minas Gerais (FHEMIG). Serviço de Cirurgia da Coluna dos Hospitais Orizonti e Mater Dei. Membro Sociedade Brasileira de Ortopedia e Traumatologia (SBOT), da Sociedade Brasileira de Coluna (SBC), da North American Spine Society (NASS) e Ao Spine."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 71,
        "titulo": "Artrodese Lombar Oblíqua",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "128",
    "slug": "marcos-antonio-tebet",
    "nome": "Marcos Antônio Tebet",
    "nome_vancouver": "Tebet MA",
    "cargo": "Doutor em Ciências Médicas pela Faculdade de Medicina da Universidade de São Paulo (FMUSP)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-0446-3523",
    "orcid_url": "https://orcid.org/0000-0003-0446-3523",
    "bio_completa": "Doutor em Ciências Médicas pela Faculdade de Medicina da Universidade de São Paulo (FMUSP). Membro do Grupo de Coluna da Universidade Estadual de Campinas (UNICAMP).",
    "titulacao_academica": [
      "Doutor em Ciências Médicas pela Faculdade de Medicina da Universidade de São Paulo (FMUSP). Membro do Grupo de Coluna da Universidade Estadual de Campinas (UNICAMP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 2,
        "titulo": "Biomecânica da Coluna Vertebral",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "129",
    "slug": "marcos-gregory-cintra-parreira",
    "nome": "Marcos Gregory Cintra Parreira",
    "nome_vancouver": "Parreira MGC",
    "cargo": "Médico Ortopedista e Fellow em Cirurgia de Coluna pelo Instituto Cohen de Ortopedia",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-9061-8063",
    "orcid_url": "https://orcid.org/0000-0001-9061-8063",
    "bio_completa": "Médico Ortopedista e Fellow em Cirurgia de Coluna pelo Instituto Cohen de Ortopedia.",
    "titulacao_academica": [
      "Médico Ortopedista e Fellow em Cirurgia de Coluna pelo Instituto Cohen de Ortopedia."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 10,
        "titulo": "Biomecânica dos Implantes nas Fixações Vertebrais",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "130",
    "slug": "marcus-andre-costa-ferreira",
    "nome": "Marcus André Costa Ferreira",
    "nome_vancouver": "Ferreira MAC",
    "cargo": "Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT)",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0000-9063-9286",
    "orcid_url": "https://orcid.org/0009-0000-9063-9286",
    "bio_completa": "Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Membro Titular da Sociedade Brasileira de Coluna (SBC). Chefe da Preceptoria do Departamento de Cirurgia da Coluna Vertebral do Hospital Getúlio Vargas, Recife-PE. Chefe da Cirurgia da Coluna Vertebral do Instituto de Traumatologia e Ortopedia Romeu Krause (ITORK), Recife-PE. Membro da American Academy of Regenerativa Medi-cine (AARM)",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Membro Titular da Sociedade Brasileira de Coluna (SBC). Chefe da Preceptoria do Departamento de Cirurgia da Coluna Vertebral do Hospital Getúlio Vargas, Recife-PE. Chefe da Cirurgia da Coluna Vertebral do Instituto de Traumatologia e Ortopedia Romeu Krause (ITORK), Recife-PE. Membro da American Academy of Regenerativa Medi-cine (AARM)"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 99,
        "titulo": "Lesão Neurológica Perioperatória",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "131",
    "slug": "maria-eduarda-lima-viapiana",
    "nome": "Maria Eduarda Lima Viapiana",
    "nome_vancouver": "Viapiana MEL",
    "cargo": "Acadêmica de Medicina do 4º ano da Universidade de Caxias do Sul (UCS)",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-9464-1527",
    "orcid_url": "https://orcid.org/0000-0001-9464-1527",
    "bio_completa": "Acadêmica de Medicina do 4º ano da Universidade de Caxias do Sul (UCS).",
    "titulacao_academica": [
      "Acadêmica de Medicina do 4º ano da Universidade de Caxias do Sul (UCS)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 42,
        "titulo": "Fisiopatologia da Degeneração Discal",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "132",
    "slug": "maria-fernanda-silber-caffaro",
    "nome": "Maria Fernanda Silber Caffaro",
    "nome_vancouver": "Caffaro MFS",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-2823-8534",
    "orcid_url": "https://orcid.org/0000-0002-2823-8534",
    "bio_completa": "Diretora do Departamento de Ortopedia e Traumatologia da Santa Casa de São Paulo – “Pavilhão Fernandinho Simonsen” e Professora da Faculdade de Ciências Médicas da Santa Casa de São Paulo. Membro Titular da Sociedade Brasileira de Coluna (SBC) e da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT).",
    "titulacao_academica": [
      "Diretora do Departamento de Ortopedia e Traumatologia da Santa Casa de São Paulo – “Pavilhão Fernandinho Simonsen” e Professora da Faculdade de Ciências Médicas da Santa Casa de São Paulo. Membro Titular da Sociedade Brasileira de Coluna (SBC) e da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 16,
        "titulo": "Diagnóstico Diferencial: Doenças da Coluna e Condições Ortopédicas",
        "secao_id": 2,
        "secao_nome": "Avaliação Diagnóstica e Propedêutica"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "133",
    "slug": "mateus-neves-faria-fernandes",
    "nome": "Mateus Neves Faria Fernandes",
    "nome_vancouver": "Fernandes MNF",
    "cargo": "Médico graduado pela Faculdade de Medicina da Universidade Federal de Goiás",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-4342-5506",
    "orcid_url": "https://orcid.org/0000-0002-4342-5506",
    "bio_completa": "Médico graduado pela Faculdade de Medicina da Universidade Federal de Goiás. Residente de Neurocirurgia do Hospital Estadual Dr. Alberto Rassi – HGG.",
    "titulacao_academica": [
      "Médico graduado pela Faculdade de Medicina da Universidade Federal de Goiás. Residente de Neurocirurgia do Hospital Estadual Dr. Alberto Rassi – HGG."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 67,
        "titulo": "Endoscopia Unilateral Biportal",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "134",
    "slug": "matheus-augusto-maciel-santiago",
    "nome": "Matheus Augusto Maciel Santiago",
    "nome_vancouver": "Santiago MAM",
    "cargo": "Preceptor da Residência Médica em Ortopedia e Traumatologia",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0004-9735-1487",
    "orcid_url": "https://orcid.org/0009-0004-9735-1487",
    "bio_completa": "Preceptor da Residência Médica em Ortopedia e Traumatologia. Fellow do Grupo de Coluna do Instituto de Ortopedia e Traumatologia do Hospital das Clínicas da FMUSP (IOT-HC-FMUSP).",
    "titulacao_academica": [
      "Preceptor da Residência Médica em Ortopedia e Traumatologia. Fellow do Grupo de Coluna do Instituto de Ortopedia e Traumatologia do Hospital das Clínicas da FMUSP (IOT-HC-FMUSP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 9,
        "titulo": "Princípios da Artrodese, Biologia do Enxerto e Substitutos Ósseos na Coluna",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      },
      {
        "num": 61,
        "titulo": "Tratamento Cirúrgico das Doenças Reumáticas da Coluna",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "135",
    "slug": "matheus-boss-vieira",
    "nome": "Matheus Boss Vieira",
    "nome_vancouver": "Vieira MB",
    "cargo": "Médico pela Faculdade Evangélica Mackenzie do Paraná",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0003-0729-7222",
    "orcid_url": "https://orcid.org/0009-0003-0729-7222",
    "bio_completa": "Médico pela Faculdade Evangélica Mackenzie do Paraná. Residente em Ortopedia e Traumatologia pelo Hospital Universitário Evangélico Mackenzie.",
    "titulacao_academica": [
      "Médico pela Faculdade Evangélica Mackenzie do Paraná. Residente em Ortopedia e Traumatologia pelo Hospital Universitário Evangélico Mackenzie."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 22,
        "titulo": "Lesões Traumáticas da Coluna Torácica e Lombar",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "136",
    "slug": "matheus-pippa-defino",
    "nome": "Matheus Pippa Defino",
    "nome_vancouver": "Defino MP",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 4 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-5457-8527",
    "orcid_url": "https://orcid.org/0000-0001-5457-8527",
    "bio_completa": "Médico Assistente do Setor de Cirurgia da Coluna Vertebral do Hospital das Clínicas da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP).",
    "titulacao_academica": [
      "Médico Assistente do Setor de Cirurgia da Coluna Vertebral do Hospital das Clínicas da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 12,
        "titulo": "Anamnese e Exame Físico da Coluna Vertebral",
        "secao_id": 2,
        "secao_nome": "Avaliação Diagnóstica e Propedêutica"
      },
      {
        "num": 34,
        "titulo": "Escoliose Idiopática",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 40,
        "titulo": "Cifose",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 92,
        "titulo": "Navegação e Robótica",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "137",
    "slug": "matheus-trindade-bruxelas-de-freitas",
    "nome": "Matheus Trindade Bruxelas de Freitas",
    "nome_vancouver": "Freitas MTB",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0001-2535-3529",
    "orcid_url": "https://orcid.org/0009-0001-2535-3529",
    "bio_completa": "Departamento de Ortopedia e Traumatologia do Instituto de Ortopedia e Traumatologia do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HCFM-USP).",
    "titulacao_academica": [
      "Departamento de Ortopedia e Traumatologia do Instituto de Ortopedia e Traumatologia do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HCFM-USP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 24,
        "titulo": "Lesões Traumáticas da Coluna na Infância",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "138",
    "slug": "mauricio-coelho-lima",
    "nome": "Mauricio Coelho Lima",
    "nome_vancouver": "Lima MC",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 3 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-9395-2147",
    "orcid_url": "https://orcid.org/0000-0001-9395-2147",
    "bio_completa": "Médico Ortopedista do Grupo de Escoliose da Associação de Assistência à Criança Deficiente (AACD). Médico do Grupo de Cirurgia da Coluna do Departamento de Ortopedia e Reumatologia e Traumatologia da Faculdade de Ciências Médicas da Universidade de Campinas (FCM-UNICAMP). Médico do Grupo de Coluna do Hospital Alemão Oswaldo Cruz. Mestrado em Ciências da Cirurgia pela FCM-UNICAMP. Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Membro Titular da Sociedade Brasileira de Cirurgia da Coluna (SBC).",
    "titulacao_academica": [
      "Médico Ortopedista do Grupo de Escoliose da Associação de Assistência à Criança Deficiente (AACD). Médico do Grupo de Cirurgia da Coluna do Departamento de Ortopedia e Reumatologia e Traumatologia da Faculdade de Ciências Médicas da Universidade de Campinas (FCM-UNICAMP). Médico do Grupo de Coluna do Hospital Alemão Oswaldo Cruz. Mestrado em Ciências da Cirurgia pela FCM-UNICAMP. Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Membro Titular da Sociedade Brasileira de Cirurgia da Coluna (SBC)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 31,
        "titulo": "Deformidades nos Disrafismos Espinhais",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 82,
        "titulo": "Aplicação do Halo e Tração Craniana",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      },
      {
        "num": 86,
        "titulo": "Técnica de Fixação Bipolar da Coluna Vertebral",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "139",
    "slug": "mauricio-luiz-malito",
    "nome": "Mauricio Luiz Malito",
    "nome_vancouver": "Malito ML",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-2838-2963",
    "orcid_url": "https://orcid.org/0000-0003-2838-2963",
    "bio_completa": "Professor e Mestre em Anestesiologia pela Faculdade de Ciências Médicas da Santa Casa de Misericórdia de São Paulo. Fundador do Centro de Treinamento em Vias Aéreas (CTVA). Diretor da Sociedade de Anestesiologia de São Paulo (SAESP 2024-2026). Membro do Board of Directors da Society Airway Manage-ment (SAM).",
    "titulacao_academica": [
      "Professor e Mestre em Anestesiologia pela Faculdade de Ciências Médicas da Santa Casa de Misericórdia de São Paulo. Fundador do Centro de Treinamento em Vias Aéreas (CTVA). Diretor da Sociedade de Anestesiologia de São Paulo (SAESP 2024-2026). Membro do Board of Directors da Society Airway Manage-ment (SAM)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 104,
        "titulo": "Anestesia para Cirurgia da Coluna Vertebral",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "140",
    "slug": "mauricio-zanon",
    "nome": "Mauricio Zanon",
    "nome_vancouver": "Zanon M",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Pontifícia Universidade Católica do Paraná (PUC-PR)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-2109-8874",
    "orcid_url": "https://orcid.org/0000-0002-2109-8874",
    "bio_completa": "Médico Ortopedista e Traumatologista pelo Hospital Universitário Cajuru da Pontifícia Universidade Católica do Paraná (PUC-PR).",
    "titulacao_academica": [
      "Médico Ortopedista e Traumatologista pelo Hospital Universitário Cajuru da Pontifícia Universidade Católica do Paraná (PUC-PR)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 19,
        "titulo": "Trauma Raquimedular",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "141",
    "slug": "mauro-dos-santos-volpi",
    "nome": "Mauro dos Santos Volpi",
    "nome_vancouver": "Volpi MS",
    "cargo": "Médico pela Universidade Estadual Paulista (UNESP)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-4955-5053",
    "orcid_url": "https://orcid.org/0000-0002-4955-5053",
    "bio_completa": "Médico pela Universidade Estadual Paulista (UNESP). Ortopedista e Traumatologista pela UNESP. Título pela da Sociedade Brasileira de Ortopedia (SBOT). Fellow em Cirurgia da Coluna no Departamento de Ortopedia da Faculdade de Ciências Médicas da Santa Casa de São Paulo. Título pela Sociedade Brasileira de Coluna (SBC). Doutor em Cirurgia pela UNESP. Presidente da Sociedade Brasileira de Coluna 2015-2016. Membro do Conselho Consultivo da SBC",
    "titulacao_academica": [
      "Médico pela Universidade Estadual Paulista (UNESP). Ortopedista e Traumatologista pela UNESP. Título pela da Sociedade Brasileira de Ortopedia (SBOT). Fellow em Cirurgia da Coluna no Departamento de Ortopedia da Faculdade de Ciências Médicas da Santa Casa de São Paulo. Título pela Sociedade Brasileira de Coluna (SBC). Doutor em Cirurgia pela UNESP. Presidente da Sociedade Brasileira de Coluna 2015-2016. Membro do Conselho Consultivo da SBC"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 4,
        "titulo": "Anatomia Cirúrgica e Vias de Acesso da Coluna Cervical",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      },
      {
        "num": 93,
        "titulo": "Infecções Pós-Operatórias",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "142",
    "slug": "mayra-macena-gomes",
    "nome": "Mayra Macena Gomes",
    "nome_vancouver": "Gomes MM",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-4006-8160",
    "orcid_url": "https://orcid.org/0000-0002-4006-8160",
    "bio_completa": "Médica Assistente do Hospital das Clínicas da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (HC FMRP USP).",
    "titulacao_academica": [
      "Médica Assistente do Hospital das Clínicas da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (HC FMRP USP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 60,
        "titulo": "Doenças Metabólicas que Afetam a Coluna",
        "secao_id": 7,
        "secao_nome": "Tumores e Infecções da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "143",
    "slug": "michel-alexandre-yazbek",
    "nome": "Michel Alexandre Yazbek",
    "nome_vancouver": "Yazbek MA",
    "cargo": "Médico Reumatologista Assistente",
    "instituicao": "Universidade Estadual de Campinas (Unicamp)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-3233-9506",
    "orcid_url": "https://orcid.org/0000-0002-3233-9506",
    "bio_completa": "Médico Reumatologista Assistente. Doutor da Disciplina de Reumatologia da Universidade Estadual de Campinas (Unicamp). Coordenador do CEDMAC e do Ambulatório de Espondiloartrites do Hospital das Clínicas da Unicamp. Membro do Grupo de Pesquisa e Avaliação de Psoríase e Artrite Psoriásica (GRAPPA) e das Comissões de Biotecnologia e Artrite Psoriásica da Sociedade Brasileira de Reumatologia (SBR).",
    "titulacao_academica": [
      "Médico Reumatologista Assistente. Doutor da Disciplina de Reumatologia da Universidade Estadual de Campinas (Unicamp). Coordenador do CEDMAC e do Ambulatório de Espondiloartrites do Hospital das Clínicas da Unicamp. Membro do Grupo de Pesquisa e Avaliação de Psoríase e Artrite Psoriásica (GRAPPA) e das Comissões de Biotecnologia e Artrite Psoriásica da Sociedade Brasileira de Reumatologia (SBR)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 59,
        "titulo": "Doenças Reumáticas da Coluna Vertebral",
        "secao_id": 7,
        "secao_nome": "Tumores e Infecções da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "144",
    "slug": "morgana-vieira",
    "nome": "Morgana Vieira",
    "nome_vancouver": "Vieira M",
    "cargo": "Ortopedista Especialista em Coluna Vertebral no VITA Ortopedia – São Paulo",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-3619-2847",
    "orcid_url": "https://orcid.org/0000-0002-3619-2847",
    "bio_completa": "Ortopedista Especialista em Coluna Vertebral no VITA Ortopedia – São Paulo.",
    "titulacao_academica": [
      "Ortopedista Especialista em Coluna Vertebral no VITA Ortopedia – São Paulo."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 5,
        "titulo": "Anatomia Cirúrgica e Vias de Acesso da Coluna Torácica",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "145",
    "slug": "murilo-tavares-daher",
    "nome": "Murilo Tavares Daher",
    "nome_vancouver": "Daher MT",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-9589-5596",
    "orcid_url": "https://orcid.org/0000-0001-9589-5596",
    "bio_completa": "Professor Adjunto do Departamento de Ortopedia e Traumatologia da Faculdade de Medicina da Universidade Federal de Goiás (UFG). Chefe do Grupo de Cirurgia da Coluna do Hospital de Urgências Governador Otávio Lage (HUGOL) e do Centro de Reabilitação e Readaptação Dr. Henrique Santillo (CRER). Mestre (USP) e Doutor (UFG).",
    "titulacao_academica": [
      "Professor Adjunto do Departamento de Ortopedia e Traumatologia da Faculdade de Medicina da Universidade Federal de Goiás (UFG). Chefe do Grupo de Cirurgia da Coluna do Hospital de Urgências Governador Otávio Lage (HUGOL) e do Centro de Reabilitação e Readaptação Dr. Henrique Santillo (CRER). Mestre (USP) e Doutor (UFG)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 44,
        "titulo": "Hérnia de Disco Torácica",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "146",
    "slug": "naira-dos-santos-gutierrez",
    "nome": "Naira dos Santos Gutierrez",
    "nome_vancouver": "Gutierrez NS",
    "cargo": "Médico Especialista em Radioterapia pela residência médica pelo Hospital AC Camargo",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0009-8412-656X",
    "orcid_url": "https://orcid.org/0009-0009-8412-656X",
    "bio_completa": "Médico Especialista em Radioterapia pela residência médica pelo Hospital AC Camargo.",
    "titulacao_academica": [
      "Médico Especialista em Radioterapia pela residência médica pelo Hospital AC Camargo."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 57,
        "titulo": "Radioterapia nos Tumores de Coluna",
        "secao_id": 7,
        "secao_nome": "Tumores e Infecções da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "147",
    "slug": "nelson-astur-neto",
    "nome": "Nelson Astur Neto",
    "nome_vancouver": "Astur Neto N",
    "cargo": "Médico Ortopedista e Cirurgião de Coluna",
    "instituicao": "Hospital Israelita Albert Einstein",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-2608-2118",
    "orcid_url": "https://orcid.org/0000-0002-2608-2118",
    "bio_completa": "Médico Ortopedista e Cirurgião de Coluna. Coordenador do Grupo de Cirurgia da Coluna do Hospital Israelita Albert Einstein. Past Research Officer AOSpine LatAm.",
    "titulacao_academica": [
      "Médico Ortopedista e Cirurgião de Coluna. Coordenador do Grupo de Cirurgia da Coluna do Hospital Israelita Albert Einstein. Past Research Officer AOSpine LatAm."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 97,
        "titulo": "Pseudoartrose e Falha Mecânica da Instrumentação na Cirurgia da Coluna Vertebral",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "148",
    "slug": "olavo-biraghi-letaif",
    "nome": "Olavo Biraghi Letaif",
    "nome_vancouver": "Letaif OB",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-2614-1771",
    "orcid_url": "https://orcid.org/0000-0002-2614-1771",
    "bio_completa": "Graduação na Faculdade de Medicina da USP – Residência Médica em Ortopedia e Traumatologia no Instituto de Ortopedia e Traumatologia do HCFMUSP (IOT-HCFMUSP) Especialização em Cirurgia de Coluna no IOT-HCFMUSP Mestre pela USP Doutor pela USP Fellowship no Departamento de Ortopedia do Hospital Johns Hopkins (Baltimore - Estados Unidos) Médico do Grupo de Coluna do IOT-HCFMUSP Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT) Membro da Sociedade Brasileira de Coluna (SBC) Membro das sociedades científicas: SRS, SOSORT, AO Spine",
    "titulacao_academica": [
      "Graduação na Faculdade de Medicina da USP – Residência Médica em Ortopedia e Traumatologia no Instituto de Ortopedia e Traumatologia do HCFMUSP (IOT-HCFMUSP) Especialização em Cirurgia de Coluna no IOT-HCFMUSP Mestre pela USP Doutor pela USP Fellowship no Departamento de Ortopedia do Hospital Johns Hopkins (Baltimore - Estados Unidos) Médico do Grupo de Coluna do IOT-HCFMUSP Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT) Membro da Sociedade Brasileira de Coluna (SBC) Membro das sociedades científicas: SRS, SOSORT, AO Spine"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 36,
        "titulo": "Escoliose nas Síndromes Genéticas",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 79,
        "titulo": "Fixação do Ilíaco – Técnica S2 Alar Ilíaco",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "149",
    "slug": "orlando-righesso-neto",
    "nome": "Orlando Righesso Neto",
    "nome_vancouver": "Righesso Neto O",
    "cargo": "Médico Ortopedista e Traumatologista",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-9193-9165",
    "orcid_url": "https://orcid.org/0000-0002-9193-9165",
    "bio_completa": "Médico Ortopedista e Traumatologista. Mestre e Doutor pela Faculdade de Ciências Médicas da Santa Casa de São Paulo.",
    "titulacao_academica": [
      "Médico Ortopedista e Traumatologista. Mestre e Doutor pela Faculdade de Ciências Médicas da Santa Casa de São Paulo."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 42,
        "titulo": "Fisiopatologia da Degeneração Discal",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "150",
    "slug": "osmar-jose-santos-de-moraes",
    "nome": "Osmar José Santos de Moraes",
    "nome_vancouver": "Moraes OJS",
    "cargo": "Médico Neurocirurgião",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-2240-3500",
    "orcid_url": "https://orcid.org/0000-0002-2240-3500",
    "bio_completa": "Médico Neurocirurgião. Grupo de coluna do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HC-FMUSP).",
    "titulacao_academica": [
      "Médico Neurocirurgião. Grupo de coluna do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HC-FMUSP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 56,
        "titulo": "Tumores Intramedulares e Extramedulares: Classificação, Diagnóstico e Manejo",
        "secao_id": 6,
        "secao_nome": "Técnicas Minimamente Invasivas e Endoscopia"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "151",
    "slug": "otavio-vitorio-alvarenga-pereira",
    "nome": "Otávio Vitório Alvarenga Pereira",
    "nome_vancouver": "Pereira OVA",
    "cargo": "Médico graduado pela Universidade Federal de Minas Gerais",
    "instituicao": "Pontifícia Universidade Católica do Paraná (PUC-PR)",
    "destaque": "Autor de 4 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-0339-1310",
    "orcid_url": "https://orcid.org/0000-0003-0339-1310",
    "bio_completa": "Médico graduado pela Universidade Federal de Minas Gerais. Residência em Ortopedia e Traumatologia pelo Hospital Felicio Rocho. Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Cirurgião de Coluna pelo Hospital Universitário Cajuru / Ao Spine. Médico Assistente da Clínica de Ortopedia e Traumatologia do Hospital Felício Rocho.",
    "titulacao_academica": [
      "Médico graduado pela Universidade Federal de Minas Gerais. Residência em Ortopedia e Traumatologia pelo Hospital Felicio Rocho. Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Cirurgião de Coluna pelo Hospital Universitário Cajuru / Ao Spine. Médico Assistente da Clínica de Ortopedia e Traumatologia do Hospital Felício Rocho."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 23,
        "titulo": "Lesões Traumáticas do Sacro",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      },
      {
        "num": 52,
        "titulo": "Instabilidade Vertebral em Neoplasia de Coluna",
        "secao_id": 6,
        "secao_nome": "Técnicas Minimamente Invasivas e Endoscopia"
      },
      {
        "num": 88,
        "titulo": "Vertebrectomia Torácica e Lombar nas Neoplasias",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      },
      {
        "num": 89,
        "titulo": "Sacrectomia",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "152",
    "slug": "patricia-toscano-barreto-nogueira",
    "nome": "Patrícia Toscano Barreto Nogueira",
    "nome_vancouver": "Nogueira PTB",
    "cargo": "Médica Neurologista e Neurofisiologista",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-3832-2131",
    "orcid_url": "https://orcid.org/0000-0002-3832-2131",
    "bio_completa": "Médica Neurologista e Neurofisiologista. Mestre em Neurologia pela Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP). Membro Titular da Academia Brasileira de Neurologia (ABN) e Sociedade Brasileira de Neurofisiologia Clínica (SBNC). Médica Assistente e Preceptora da residência de Neurofisiologia Clínica do Hospital das Clínicas da FMRP-USP. Neurofisiologista Associado da Equipe da Clínica Ricardo Ferreira.",
    "titulacao_academica": [
      "Médica Neurologista e Neurofisiologista. Mestre em Neurologia pela Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP). Membro Titular da Academia Brasileira de Neurologia (ABN) e Sociedade Brasileira de Neurofisiologia Clínica (SBNC). Médica Assistente e Preceptora da residência de Neurofisiologia Clínica do Hospital das Clínicas da FMRP-USP. Neurofisiologista Associado da Equipe da Clínica Ricardo Ferreira."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 13,
        "titulo": "Neurofisiologia no Diagnóstico das Patologias da Coluna",
        "secao_id": 2,
        "secao_nome": "Avaliação Diagnóstica e Propedêutica"
      },
      {
        "num": 14,
        "titulo": "Monitorização Neurofisiológica Intraoperatória em Cirurgia de Coluna",
        "secao_id": 2,
        "secao_nome": "Avaliação Diagnóstica e Propedêutica"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "153",
    "slug": "paulo-henrique-carvalho-vasconcelos",
    "nome": "Paulo Henrique Carvalho Vasconcelos",
    "nome_vancouver": "Vasconcelos PHC",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0007-4262-7708",
    "orcid_url": "https://orcid.org/0009-0007-4262-7708",
    "bio_completa": "Fellow do Serviço de Cirurgia de Coluna Vertebral Articu-lare do Hospital Porto Dias - Belém – PA.",
    "titulacao_academica": [
      "Fellow do Serviço de Cirurgia de Coluna Vertebral Articu-lare do Hospital Porto Dias - Belém – PA."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 80,
        "titulo": "Técnicas de Fixação na Coluna Osteoporótica",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "154",
    "slug": "paulo-jose-silva-ramos",
    "nome": "Paulo José Silva Ramos",
    "nome_vancouver": "Ramos PJS",
    "cargo": "Clivert, Brasil",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "",
    "orcid_url": "",
    "bio_completa": "Clivert, Brasil",
    "titulacao_academica": [
      "Clivert, Brasil"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 88,
        "titulo": "Vertebrectomia Torácica e Lombar nas Neoplasias",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "155",
    "slug": "paulo-tadeu-maia-cavali",
    "nome": "Paulo Tadeu Maia Cavali",
    "nome_vancouver": "Cavali PTM",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade Estadual de Campinas (Unicamp)",
    "destaque": "Autor de 6 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-5226-505X",
    "orcid_url": "https://orcid.org/0000-0001-5226-505X",
    "bio_completa": "Médico do Centro de Referência em Escoliose do Hospital da Associação de Assistência à Criança Deficiente (AACD). Coordenador do Núcleo de Escoliose do Hospital Sírio-Libanês. Médico Graduado pela Faculdade de Ciências Médicas da Universidade Estadual de Campinas (FCM-Unicamp). Residência Médica em Ortopedia e Traumatologia na FCM-Unicamp. Título de Especialista em Ortopedia e Traumatologia pela Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Título de Especialista em Cirurgia de Coluna pela Sociedade Brasileira de Coluna (SBC). Título de Mestre e de Doutor em Cirurgia pela FCM-Unicamp.",
    "titulacao_academica": [
      "Médico do Centro de Referência em Escoliose do Hospital da Associação de Assistência à Criança Deficiente (AACD). Coordenador do Núcleo de Escoliose do Hospital Sírio-Libanês. Médico Graduado pela Faculdade de Ciências Médicas da Universidade Estadual de Campinas (FCM-Unicamp). Residência Médica em Ortopedia e Traumatologia na FCM-Unicamp. Título de Especialista em Ortopedia e Traumatologia pela Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Título de Especialista em Cirurgia de Coluna pela Sociedade Brasileira de Coluna (SBC). Título de Mestre e de Doutor em Cirurgia pela FCM-Unicamp."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 6,
        "titulo": "Anatomia Cirúrgica e Abordagens da Junção Toracolombar",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      },
      {
        "num": 8,
        "titulo": "Coluna Vertebral no Plano Sagital",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      },
      {
        "num": 31,
        "titulo": "Deformidades nos Disrafismos Espinhais",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 78,
        "titulo": "Parafusos Pediculares na Coluna Torácica, Lombar e Lombossacra – Técnica Free-Hand",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      },
      {
        "num": 82,
        "titulo": "Aplicação do Halo e Tração Craniana",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      },
      {
        "num": 86,
        "titulo": "Técnica de Fixação Bipolar da Coluna Vertebral",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "156",
    "slug": "pedro-aleixo-nogueira",
    "nome": "Pedro Aleixo Nogueira",
    "nome_vancouver": "Nogueira PA",
    "cargo": "Residente de Neurocirurgia pela Universidade Estadual de Campinas (Unicamp)",
    "instituicao": "Universidade Estadual de Campinas (Unicamp)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0009-8222-9311",
    "orcid_url": "https://orcid.org/0009-0009-8222-9311",
    "bio_completa": "Residente de Neurocirurgia pela Universidade Estadual de Campinas (Unicamp).",
    "titulacao_academica": [
      "Residente de Neurocirurgia pela Universidade Estadual de Campinas (Unicamp)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 109,
        "titulo": "Capítulo 109",
        "secao_id": 1,
        "secao_nome": "Tratado de Cirurgia da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "157",
    "slug": "pedro-henrique-lacombe-antoneli",
    "nome": "Pedro Henrique Lacombe Antoneli",
    "nome_vancouver": "Antoneli PHL",
    "cargo": "Médico Ortopedia e Traumatologia",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0006-8384-0380",
    "orcid_url": "https://orcid.org/0009-0006-8384-0380",
    "bio_completa": "Médico Ortopedia e Traumatologia. Hospital Moinhos de Vento / POA-RS. Hospital da Criança Santo Antônio / POA-RS.",
    "titulacao_academica": [
      "Médico Ortopedia e Traumatologia. Hospital Moinhos de Vento / POA-RS. Hospital da Criança Santo Antônio / POA-RS."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 106,
        "titulo": "Uso de Órteses na Coluna Vertebral",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "158",
    "slug": "rafael-barreto-silva",
    "nome": "Rafael Barreto Silva",
    "nome_vancouver": "Silva RB",
    "cargo": "Médico Ortopedista e Traumatologista",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-7382-9966",
    "orcid_url": "https://orcid.org/0000-0002-7382-9966",
    "bio_completa": "Médico Ortopedista e Traumatologista. Graduado em Medicina pela Universidade Federal do Rio Grande (2003). Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Membro Titular da Sociedade Brasileira de Coluna (SBC). Coordenador da Pós-Graduação em Cirurgia Endoscópica da Coluna do Hospital Israelita Albert Einstein. Coordenador do Fellow de Coluna do Hospital Centro Médico de Campinas. Doutorando na Universíade de São Paulo, Ribeirão Preto (USP-RP).",
    "titulacao_academica": [
      "Médico Ortopedista e Traumatologista. Graduado em Medicina pela Universidade Federal do Rio Grande (2003). Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Membro Titular da Sociedade Brasileira de Coluna (SBC). Coordenador da Pós-Graduação em Cirurgia Endoscópica da Coluna do Hospital Israelita Albert Einstein. Coordenador do Fellow de Coluna do Hospital Centro Médico de Campinas. Doutorando na Universíade de São Paulo, Ribeirão Preto (USP-RP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 63,
        "titulo": "Endoscopia Interlaminar na Coluna Lombossacra",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "159",
    "slug": "rafael-cardoso-prates",
    "nome": "Rafael Cardoso Prates",
    "nome_vancouver": "Prates RC",
    "cargo": "Médico Ortopedista e Fellow de Cirurgia de Coluna",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0001-1656-7744",
    "orcid_url": "https://orcid.org/0009-0001-1656-7744",
    "bio_completa": "Médico Ortopedista e Fellow de Cirurgia de Coluna.",
    "titulacao_academica": [
      "Médico Ortopedista e Fellow de Cirurgia de Coluna."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 97,
        "titulo": "Pseudoartrose e Falha Mecânica da Instrumentação na Cirurgia da Coluna Vertebral",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "160",
    "slug": "rafael-moraes-trincado",
    "nome": "Rafael Moraes Trincado",
    "nome_vancouver": "Trincado RM",
    "cargo": "Graduação em Medicina pela Faculdade de Ciências Médicas da Santa Casa de São Paulo (2018)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-8132-6923",
    "orcid_url": "https://orcid.org/0000-0001-8132-6923",
    "bio_completa": "Graduação em Medicina pela Faculdade de Ciências Médicas da Santa Casa de São Paulo (2018). Ortopedista Formado pela Santa Casa de Misericórdia de São Paulo (2021). Especialista em Cirurgia de Coluna na Santa Casa de São Paulo (2023). Membro Titular da Sociedade Brasileira de Coluna e Sociedade Brasileira de Ortopedia e Traumatologia.",
    "titulacao_academica": [
      "Graduação em Medicina pela Faculdade de Ciências Médicas da Santa Casa de São Paulo (2018). Ortopedista Formado pela Santa Casa de Misericórdia de São Paulo (2021). Especialista em Cirurgia de Coluna na Santa Casa de São Paulo (2023). Membro Titular da Sociedade Brasileira de Coluna e Sociedade Brasileira de Ortopedia e Traumatologia."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 16,
        "titulo": "Diagnóstico Diferencial: Doenças da Coluna e Condições Ortopédicas",
        "secao_id": 2,
        "secao_nome": "Avaliação Diagnóstica e Propedêutica"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "161",
    "slug": "rafael-moriguchi",
    "nome": "Rafael Moriguchi",
    "nome_vancouver": "Moriguchi R",
    "cargo": "Médico Ortopedista",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "",
    "orcid_url": "",
    "bio_completa": "Médico Ortopedista",
    "titulacao_academica": [
      "Médico Ortopedista"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 39,
        "titulo": "Espondilolistese no Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "162",
    "slug": "rangel-roberto-de-assis",
    "nome": "Rangel Roberto de Assis",
    "nome_vancouver": "Assis RR",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-4299-108X",
    "orcid_url": "https://orcid.org/0000-0002-4299-108X",
    "bio_completa": "Graduação em Medicina pela Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP). Residência Médica em Ortopedia e Traumatologia pelo Hospital das Clínicas de Ribeirão Preto da Universidade de São Paulo (HC-FMRP-USP). Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Complementação Especializada em Cirurgia de Coluna pelo Hospital das Clínicas de Ribeirão Preto da Universi-dade de São Paulo (HC-FMRP-USP). Membro Efetivo da Sociedade Brasileira de Coluna (SBC). Mestre em Ciências pela Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (USP). Professor Assistente da Pós-Graduação em Cirurgia Endoscópica da Coluna da USP de Ribeirão Preto.",
    "titulacao_academica": [
      "Graduação em Medicina pela Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP). Residência Médica em Ortopedia e Traumatologia pelo Hospital das Clínicas de Ribeirão Preto da Universidade de São Paulo (HC-FMRP-USP). Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Complementação Especializada em Cirurgia de Coluna pelo Hospital das Clínicas de Ribeirão Preto da Universi-dade de São Paulo (HC-FMRP-USP). Membro Efetivo da Sociedade Brasileira de Coluna (SBC). Mestre em Ciências pela Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (USP). Professor Assistente da Pós-Graduação em Cirurgia Endoscópica da Coluna da USP de Ribeirão Preto."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 66,
        "titulo": "Endoscopia na Coluna Cervical pela Via Anterior",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "163",
    "slug": "raphael-martus-marcon",
    "nome": "Raphael Martus Marcon",
    "nome_vancouver": "Marcon RM",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-5958-5646",
    "orcid_url": "https://orcid.org/0000-0001-5958-5646",
    "bio_completa": "Chefe do Grupo de Coluna do Instituto de Ortopedia e Traumatologia do Hospital das Clínicas da FMUSP (IOT-HC-FMUSP). Professor Associado da Faculdade de Medicina da Universidade de São Paulo (FMUSP).",
    "titulacao_academica": [
      "Chefe do Grupo de Coluna do Instituto de Ortopedia e Traumatologia do Hospital das Clínicas da FMUSP (IOT-HC-FMUSP). Professor Associado da Faculdade de Medicina da Universidade de São Paulo (FMUSP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 9,
        "titulo": "Princípios da Artrodese, Biologia do Enxerto e Substitutos Ósseos na Coluna",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      },
      {
        "num": 61,
        "titulo": "Tratamento Cirúrgico das Doenças Reumáticas da Coluna",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "164",
    "slug": "renato-de-oliveira",
    "nome": "Renato de Oliveira",
    "nome_vancouver": "Oliveira R",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-8219-6198",
    "orcid_url": "https://orcid.org/0000-0001-8219-6198",
    "bio_completa": "Cirurgião Torácico do Instituto de Oncologia Pediátrica – Grupo de Apoio ao Adolescente e à Criança com Câncer (IOP GRAACC). Cirurgião Torácico da Associação de Assistência à Criança Deficiente (AACD), do Hospital Abreu Sodré – Associação de Assistência à Criança Deficiente. Médico Assistente da Cirurgia Torácica Pediátrica do Hospital Infantil Sabará. Graduado em Medicina pela Escola Paulista de Medicina da Universidade Federal de São Paulo (EPM-Unifesp). Residência em Cirurgia Geral no Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HC-FMUSP). Residência em Cirurgia Torácica na Hospital São Paulo da Universidade Federal de São Paulo (HSP-Unifesp). Médico Assistente da EPM-Unifesp na Disciplina de Cirurgia Torácica.",
    "titulacao_academica": [
      "Cirurgião Torácico do Instituto de Oncologia Pediátrica – Grupo de Apoio ao Adolescente e à Criança com Câncer (IOP GRAACC). Cirurgião Torácico da Associação de Assistência à Criança Deficiente (AACD), do Hospital Abreu Sodré – Associação de Assistência à Criança Deficiente. Médico Assistente da Cirurgia Torácica Pediátrica do Hospital Infantil Sabará. Graduado em Medicina pela Escola Paulista de Medicina da Universidade Federal de São Paulo (EPM-Unifesp). Residência em Cirurgia Geral no Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HC-FMUSP). Residência em Cirurgia Torácica na Hospital São Paulo da Universidade Federal de São Paulo (HSP-Unifesp). Médico Assistente da EPM-Unifesp na Disciplina de Cirurgia Torácica."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 6,
        "titulo": "Anatomia Cirúrgica e Abordagens da Junção Toracolombar",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "165",
    "slug": "renato-henriques-tavares",
    "nome": "Renato Henriques Tavares",
    "nome_vancouver": "Tavares RH",
    "cargo": "Médico Ortopedista e Traumatologista",
    "instituicao": "Instituto Nacional de Traumatologia e Ortopedia (INTO)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-2567-0994",
    "orcid_url": "https://orcid.org/0000-0003-2567-0994",
    "bio_completa": "Médico Ortopedista e Traumatologista. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Cirurgião de Coluna Vertebral. Membro da Sociedade Brasileira de Coluna (SBC). Médico do Centro de Doenças da Coluna do Instituto Nacional de Traumatologia e Ortopedia (INTO/MS). Coordenador da Cirurgia de Coluna Vertebral do Hospital Santa Teresa – Petrópolis. Mestrando em Ciências Aplicadas ao Sistema Musculoes-quelético (INTO/MS).",
    "titulacao_academica": [
      "Médico Ortopedista e Traumatologista. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Cirurgião de Coluna Vertebral. Membro da Sociedade Brasileira de Coluna (SBC). Médico do Centro de Doenças da Coluna do Instituto Nacional de Traumatologia e Ortopedia (INTO/MS). Coordenador da Cirurgia de Coluna Vertebral do Hospital Santa Teresa – Petrópolis. Mestrando em Ciências Aplicadas ao Sistema Musculoes-quelético (INTO/MS)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 76,
        "titulo": "Fixação Posterior da Coluna Cervical",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "166",
    "slug": "renato-hiroshi-salvioni-ueta",
    "nome": "Renato Hiroshi Salvioni Ueta",
    "nome_vancouver": "Ueta RHS",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-3458-0184",
    "orcid_url": "https://orcid.org/0000-0002-3458-0184",
    "bio_completa": "Graduado em Medicina pela Escola Paulista de Medicina da Universidade Federal de São Paulo (Unifesp). Especialista em Ortopedia e Traumatologia pela Unifesp. Especialista em Patologias da Coluna Vertebral pela Unifesp. Mestre em Ortopedia e Traumatologia pela Unifesp.",
    "titulacao_academica": [
      "Graduado em Medicina pela Escola Paulista de Medicina da Universidade Federal de São Paulo (Unifesp). Especialista em Ortopedia e Traumatologia pela Unifesp. Especialista em Patologias da Coluna Vertebral pela Unifesp. Mestre em Ortopedia e Traumatologia pela Unifesp."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 45,
        "titulo": "Hérnia de Disco Lombar",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "167",
    "slug": "rene-kusabara",
    "nome": "René Kusabara",
    "nome_vancouver": "Kusabara R",
    "cargo": "Graduação em Medicina pela Faculdade de Ciências Médicas de Santos em 1988 (Lusíada)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-2673-7193",
    "orcid_url": "https://orcid.org/0000-0003-2673-7193",
    "bio_completa": "Graduação em Medicina pela Faculdade de Ciências Médicas de Santos em 1988 (Lusíada). Membro Associado da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT) desde 1994, Membro Titular da Sociedade Brasileira de Coluna (SBC) desde 1994, Chefe do Grupo de Aperfeiçoamento em Cirurgia de Coluna do Hospital Alvorada e Servidor Municipal de São Paulo",
    "titulacao_academica": [
      "Graduação em Medicina pela Faculdade de Ciências Médicas de Santos em 1988 (Lusíada). Membro Associado da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT) desde 1994, Membro Titular da Sociedade Brasileira de Coluna (SBC) desde 1994, Chefe do Grupo de Aperfeiçoamento em Cirurgia de Coluna do Hospital Alvorada e Servidor Municipal de São Paulo"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 108,
        "titulo": "Manejo do Paciente Frágil com Sarcopenia em Cirurgia de Coluna",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "168",
    "slug": "rian-souza-vieira",
    "nome": "Rian Souza Vieira",
    "nome_vancouver": "Vieira RS",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 3 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-2374-8989",
    "orcid_url": "https://orcid.org/0000-0003-2374-8989",
    "bio_completa": "Médico Assistente do Setor de Cirurgia da Coluna Vertebral do Hospital das Clínicas da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (USP).",
    "titulacao_academica": [
      "Médico Assistente do Setor de Cirurgia da Coluna Vertebral do Hospital das Clínicas da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (USP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 12,
        "titulo": "Anamnese e Exame Físico da Coluna Vertebral",
        "secao_id": 2,
        "secao_nome": "Avaliação Diagnóstica e Propedêutica"
      },
      {
        "num": 34,
        "titulo": "Escoliose Idiopática",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 40,
        "titulo": "Cifose",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "169",
    "slug": "ricardo-acacio-dos-santos",
    "nome": "Ricardo Acacio Dos Santos",
    "nome_vancouver": "Santos RA",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-2901-5583",
    "orcid_url": "https://orcid.org/0000-0003-2901-5583",
    "bio_completa": "Graduação em medicina Universidade Estadual do Oete do Paraná - UNIOESTE Residência em ortopedia e traumatologia Iot Joinville/Sc Fellowship em deformidades da Coluna San Diego Center for Spinal disorders Fellowship em coluna pediátrica Rady Children’s Hospital San Diego Mestrado em ciências do aparelho locomotor Usp-Ribeirao Preto Membro efetivo SBOT, SBC e SRS",
    "titulacao_academica": [
      "Graduação em medicina Universidade Estadual do Oete do Paraná - UNIOESTE Residência em ortopedia e traumatologia Iot Joinville/Sc Fellowship em deformidades da Coluna San Diego Center for Spinal disorders Fellowship em coluna pediátrica Rady Children’s Hospital San Diego Mestrado em ciências do aparelho locomotor Usp-Ribeirao Preto Membro efetivo SBOT, SBC e SRS"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 81,
        "titulo": "Ostetomias da Coluna Vertebral",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "170",
    "slug": "ricardo-de-souza-portes-meirelles",
    "nome": "Ricardo de Souza Portes Meirelles",
    "nome_vancouver": "Meirelles RSP",
    "cargo": "Instituto Nacional de Traumatologia e Ortopedia (INTO)",
    "instituicao": "Instituto Nacional de Traumatologia e Ortopedia (INTO)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-3657-3260",
    "orcid_url": "https://orcid.org/0000-0002-3657-3260",
    "bio_completa": "Instituto Nacional de Traumatologia e Ortopedia (INTO).",
    "titulacao_academica": [
      "Instituto Nacional de Traumatologia e Ortopedia (INTO)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 88,
        "titulo": "Vertebrectomia Torácica e Lombar nas Neoplasias",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "171",
    "slug": "ricardo-jose-rodriguez-ferreira",
    "nome": "Ricardo José Rodriguez Ferreira",
    "nome_vancouver": "Ferreira RJR",
    "cargo": "Médico Fisiatra e Neurofisiologista",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-1415-6324",
    "orcid_url": "https://orcid.org/0000-0003-1415-6324",
    "bio_completa": "Médico Fisiatra e Neurofisiologista. Membro Titular da Sociedade Brasileira de Neurofisiologia Clínica (SBNC) e Associação Brasileira de Medicina Física e Reabilitação (ABMFR) e Membro da Sociedade Brasileira de Coluna (SBC). Médico Assistente e Coordenador da Neurofisiologia Intraoperatória do Instituto de Ortopedia e Traumatologia da Universidade de São Paulo (USP). Diretor Técnico da equipe da Clínica Ricardo Ferreira.",
    "titulacao_academica": [
      "Médico Fisiatra e Neurofisiologista. Membro Titular da Sociedade Brasileira de Neurofisiologia Clínica (SBNC) e Associação Brasileira de Medicina Física e Reabilitação (ABMFR) e Membro da Sociedade Brasileira de Coluna (SBC). Médico Assistente e Coordenador da Neurofisiologia Intraoperatória do Instituto de Ortopedia e Traumatologia da Universidade de São Paulo (USP). Diretor Técnico da equipe da Clínica Ricardo Ferreira."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 13,
        "titulo": "Neurofisiologia no Diagnóstico das Patologias da Coluna",
        "secao_id": 2,
        "secao_nome": "Avaliação Diagnóstica e Propedêutica"
      },
      {
        "num": 14,
        "titulo": "Monitorização Neurofisiológica Intraoperatória em Cirurgia de Coluna",
        "secao_id": 2,
        "secao_nome": "Avaliação Diagnóstica e Propedêutica"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "172",
    "slug": "robert-meves",
    "nome": "Robert Meves",
    "nome_vancouver": "Meves R",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-8695-3982",
    "orcid_url": "https://orcid.org/0000-0002-8695-3982",
    "bio_completa": "Professor Adjunto e Chefe do Grupo de Coluna do Departamento de Ortopedia e Traumatologia da Faculdade de Ciências Médicas da Santa Casa de São Paulo (DOT/ FCMSCSP). Mestrado e Doutorado em Ciências da Saúde pelo DOT/ FCMSCSP. Embaixador da Fundação AOSpine Internacional. Presidente do Conselho Consultivo da Sociedade Brasileira de Coluna (SBC).",
    "titulacao_academica": [
      "Professor Adjunto e Chefe do Grupo de Coluna do Departamento de Ortopedia e Traumatologia da Faculdade de Ciências Médicas da Santa Casa de São Paulo (DOT/ FCMSCSP). Mestrado e Doutorado em Ciências da Saúde pelo DOT/ FCMSCSP. Embaixador da Fundação AOSpine Internacional. Presidente do Conselho Consultivo da Sociedade Brasileira de Coluna (SBC)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 46,
        "titulo": "Estenose Lombar: Diagnóstico e Manejo Contemporâneo",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      },
      {
        "num": 50,
        "titulo": "Medicina Regenerativa no Manejo da Doença Degenerativa da Coluna",
        "secao_id": 6,
        "secao_nome": "Técnicas Minimamente Invasivas e Endoscopia"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "173",
    "slug": "roberta-cristina-risso",
    "nome": "Roberta Cristina Risso",
    "nome_vancouver": "Risso RC",
    "cargo": "Médica pela Faculdade de Medicina de Marília (FAMEMA)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-6686-5195",
    "orcid_url": "https://orcid.org/0000-0001-6686-5195",
    "bio_completa": "Médica pela Faculdade de Medicina de Marília (FAMEMA). Anestesiologia pelo Hospital Sírio-Libanês. Título de Atuação em Dor pela Associação Médica Brasileira (AMB). Mestre pela Universidade Federal de São Paulo (UNIFESP). Especialização em Acupuntura, Especialização em Cuidados Paliativos. MBA em Liderança de Equipes pela FAAP. Coordenadora da Equipe de Tratamento de Dor do SMA no Hospital Alemão Oswaldo Cruz. Membro do Comitê de Ética Médica do Hospital Alemão Oswaldo Cruz.",
    "titulacao_academica": [
      "Médica pela Faculdade de Medicina de Marília (FAMEMA). Anestesiologia pelo Hospital Sírio-Libanês. Título de Atuação em Dor pela Associação Médica Brasileira (AMB). Mestre pela Universidade Federal de São Paulo (UNIFESP). Especialização em Acupuntura, Especialização em Cuidados Paliativos. MBA em Liderança de Equipes pela FAAP. Coordenadora da Equipe de Tratamento de Dor do SMA no Hospital Alemão Oswaldo Cruz. Membro do Comitê de Ética Médica do Hospital Alemão Oswaldo Cruz."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 102,
        "titulo": "Manejo da Dor Aguda e Crônica na Coluna Vertebral",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "174",
    "slug": "roberto-waldesmand-farias-pontes",
    "nome": "Roberto Waldesmand Farias Pontes",
    "nome_vancouver": "Pontes RWF",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-2084-5225",
    "orcid_url": "https://orcid.org/0000-0002-2084-5225",
    "bio_completa": "Neurologista, Neurofisiologista e Mestre em Neurofisiologia Clínica pelo Hospital das Clínicas da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (HC-FMRP-USP). Neurofisiologista Associado da Equipe da Clínica Ricardo Ferreira. Neurofisiologista Assistente do Instituto do Câncer do Estado de São Paulo (ICESP) do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HC-FMUSP). Membro Titular da Academia Brasileira de Neurologia (ABN) e da Sociedade Brasileira de Neurofisiologia Clínica (SBNC).",
    "titulacao_academica": [
      "Neurologista, Neurofisiologista e Mestre em Neurofisiologia Clínica pelo Hospital das Clínicas da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (HC-FMRP-USP). Neurofisiologista Associado da Equipe da Clínica Ricardo Ferreira. Neurofisiologista Assistente do Instituto do Câncer do Estado de São Paulo (ICESP) do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HC-FMUSP). Membro Titular da Academia Brasileira de Neurologia (ABN) e da Sociedade Brasileira de Neurofisiologia Clínica (SBNC)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 13,
        "titulo": "Neurofisiologia no Diagnóstico das Patologias da Coluna",
        "secao_id": 2,
        "secao_nome": "Avaliação Diagnóstica e Propedêutica"
      },
      {
        "num": 14,
        "titulo": "Monitorização Neurofisiológica Intraoperatória em Cirurgia de Coluna",
        "secao_id": 2,
        "secao_nome": "Avaliação Diagnóstica e Propedêutica"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "175",
    "slug": "rodrigo-amaral",
    "nome": "Rodrigo Amaral",
    "nome_vancouver": "Amaral R",
    "cargo": "Médico graduado pela Faculdade de Medicina de Jundiaí, Jundiaí, São Paulo, Brasil",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-3007-0571",
    "orcid_url": "https://orcid.org/0000-0003-3007-0571",
    "bio_completa": "Médico graduado pela Faculdade de Medicina de Jundiaí, Jundiaí, São Paulo, Brasil. Residência em Ortopedia e Traumatologia pelo Hospital do Servidor Público Municipal de São Paulo, São Paulo, Brasil. Formação complementar em Cirurgia da Coluna pela Irmandade Santa Casa de Misericórdia de São Paulo e pelo Instituto de Patologia da Coluna (IPC), São Paulo, Brasil. Doutorado em Aparelho Locomotor – Coluna Vertebral pela Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP), Ribeirão Preto, São Paulo, Brasil, de 2020 a 2022. Fellowship em Deformidades Adulto e Pediátrica da Coluna Vertebral no San Diego Center for Spinal Disorders (SDCSD), San Diego, Califórnia, Estados Unidos. Diretor do Instituto de Patologia da Coluna (IPC), São Paulo, Brasil. Membro fundador e coordenador da Seção de Estudo Científico do Brazilian Spine Study Group (BSSG). Membro de sociedades nacionais e internacionais dedi-cadas à cirurgia da coluna, incluindo SBOT, Sociedade Brasileira de Coluna, AO Spine, SMISS, SRS, ISASS e SOLAS.",
    "titulacao_academica": [
      "Médico graduado pela Faculdade de Medicina de Jundiaí, Jundiaí, São Paulo, Brasil. Residência em Ortopedia e Traumatologia pelo Hospital do Servidor Público Municipal de São Paulo, São Paulo, Brasil. Formação complementar em Cirurgia da Coluna pela Irmandade Santa Casa de Misericórdia de São Paulo e pelo Instituto de Patologia da Coluna (IPC), São Paulo, Brasil. Doutorado em Aparelho Locomotor – Coluna Vertebral pela Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP), Ribeirão Preto, São Paulo, Brasil, de 2020 a 2022. Fellowship em Deformidades Adulto e Pediátrica da Coluna Vertebral no San Diego Center for Spinal Disorders (SDCSD), San Diego, Califórnia, Estados Unidos. Diretor do Instituto de Patologia da Coluna (IPC), São Paulo, Brasil. Membro fundador e coordenador da Seção de Estudo Científico do Brazilian Spine Study Group (BSSG). Membro de sociedades nacionais e internacionais dedi-cadas à cirurgia da coluna, incluindo SBOT, Sociedade Brasileira de Coluna, AO Spine, SMISS, SRS, ISASS e SOLAS."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 39,
        "titulo": "Espondilolistese no Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 70,
        "titulo": "Artrodese Lombar Prone Transpsoas",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "176",
    "slug": "rodrigo-de-morais-hanriot",
    "nome": "Rodrigo de Morais Hanriot",
    "nome_vancouver": "Hanriot RM",
    "cargo": "Especialista em Radioterapia",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-2189-8353",
    "orcid_url": "https://orcid.org/0000-0002-2189-8353",
    "bio_completa": "Especialista em Radioterapia. Membro Internacional das Sociedade Americana (ASTRO) e Sociedade Europeia de Radioterapia e Oncologia (ESTRO).",
    "titulacao_academica": [
      "Especialista em Radioterapia. Membro Internacional das Sociedade Americana (ASTRO) e Sociedade Europeia de Radioterapia e Oncologia (ESTRO)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 57,
        "titulo": "Radioterapia nos Tumores de Coluna",
        "secao_id": 7,
        "secao_nome": "Tumores e Infecções da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "177",
    "slug": "rodrigo-dos-santos-grandini",
    "nome": "Rodrigo dos Santos Grandini",
    "nome_vancouver": "Grandini RS",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-2151-9341",
    "orcid_url": "https://orcid.org/0000-0002-2151-9341",
    "bio_completa": "Médico Ortopedista Pediátrico e Cirurgião de Coluna do Hospital Infantil Joana de Gusmão e do Hospital de Caridade de Florianópolis.",
    "titulacao_academica": [
      "Médico Ortopedista Pediátrico e Cirurgião de Coluna do Hospital Infantil Joana de Gusmão e do Hospital de Caridade de Florianópolis."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 38,
        "titulo": "Espondilolistese na Criança",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 83,
        "titulo": "Colete Gessado para Escoliose de Início Precoce",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "178",
    "slug": "rodrigo-goes-medea-de-mendonca",
    "nome": "Rodrigo Góes Medéa de Mendonça",
    "nome_vancouver": "Mendonça RGM",
    "cargo": "Médico Ortopedista e Traumatologista",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-6118-9826",
    "orcid_url": "https://orcid.org/0000-0002-6118-9826",
    "bio_completa": "Médico Ortopedista e Traumatologista. Cirurgia da Coluna Vertebral. Médico Formado pela Faculdade de Ciências Médicas da Santa Casa de São Paulo. Especialista em Ortopedia e Traumatologia e Cirurgia da Coluna Vertebral – Pavilhão Fernandinho Simonsen / Santa Casa de São Paulo. Membro Efetivo da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT), da Sociedade Brasileira de Cirurgia da Coluna (SBC), da Sociedade Brasileira de Ortopedia Pediátrica (SBOP) e da North American Spine Society (NASS). Fellow – Campbell Clinic / University of Tennessee Health Science Center. Médico Assistente – Grupo de Afecções e Cirurgia da Coluna da Santa Casa de São Paulo. Médico Coordenador – Pós-graduação em Cirurgia Endoscópica da Coluna, Hospital Israelita Albert Einstein.",
    "titulacao_academica": [
      "Médico Ortopedista e Traumatologista. Cirurgia da Coluna Vertebral. Médico Formado pela Faculdade de Ciências Médicas da Santa Casa de São Paulo. Especialista em Ortopedia e Traumatologia e Cirurgia da Coluna Vertebral – Pavilhão Fernandinho Simonsen / Santa Casa de São Paulo. Membro Efetivo da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT), da Sociedade Brasileira de Cirurgia da Coluna (SBC), da Sociedade Brasileira de Ortopedia Pediátrica (SBOP) e da North American Spine Society (NASS). Fellow – Campbell Clinic / University of Tennessee Health Science Center. Médico Assistente – Grupo de Afecções e Cirurgia da Coluna da Santa Casa de São Paulo. Médico Coordenador – Pós-graduação em Cirurgia Endoscópica da Coluna, Hospital Israelita Albert Einstein."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 46,
        "titulo": "Estenose Lombar: Diagnóstico e Manejo Contemporâneo",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "179",
    "slug": "roger-schmidt-brock",
    "nome": "Roger Schmidt Brock",
    "nome_vancouver": "Brock RS",
    "cargo": "Graduado pela Faculdade de Medicina da USP",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-6186-3200",
    "orcid_url": "https://orcid.org/0000-0002-6186-3200",
    "bio_completa": "Graduado pela Faculdade de Medicina da USP. Residência em Neurocirurgia pela Faculdade de Medicina da USP. Doutor em Ciências pela Faculdade de Medicina da USP.Supervisor da Divisão de Clínica Neurocirúrgica do HC-FMUSP. Coordenador do Núcleo de Coluna do Hospital Sírio Libanês. Membro titular da Sociedade Brasileira de Neurocirurgia, Congress of Neurological Surgeons, American Associa-tion of Neurological Surgeons. Membro do Board Brasil da AOSpine.",
    "titulacao_academica": [
      "Graduado pela Faculdade de Medicina da USP. Residência em Neurocirurgia pela Faculdade de Medicina da USP. Doutor em Ciências pela Faculdade de Medicina da USP.Supervisor da Divisão de Clínica Neurocirúrgica do HC-FMUSP. Coordenador do Núcleo de Coluna do Hospital Sírio Libanês. Membro titular da Sociedade Brasileira de Neurocirurgia, Congress of Neurological Surgeons, American Associa-tion of Neurological Surgeons. Membro do Board Brasil da AOSpine."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 77,
        "titulo": "Laminoplastia Cervical: Princípios, Técnicas e Evidências Atuais",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "180",
    "slug": "santiago-alexis-naranjo-tipan",
    "nome": "Santiago Alexis Naranjo Tipan",
    "nome_vancouver": "Tipan SAN",
    "cargo": "Médico Ortopedista e Traumatologista",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0001-7432-8258",
    "orcid_url": "https://orcid.org/0009-0001-7432-8258",
    "bio_completa": "Médico Ortopedista e Traumatologista. Traumatologista. Fellow em Cirurgia da Coluna Vertebral pelo Instituto de Ortopedia e Traumatologia do Hospital das Clínicas da FMUSP (IOT-HC-FMUSP).",
    "titulacao_academica": [
      "Médico Ortopedista e Traumatologista. Traumatologista. Fellow em Cirurgia da Coluna Vertebral pelo Instituto de Ortopedia e Traumatologia do Hospital das Clínicas da FMUSP (IOT-HC-FMUSP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 28,
        "titulo": "Escoliose de Início Precoce",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 90,
        "titulo": "Cirurgia Complexa dos Tumores Cervicais",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "181",
    "slug": "sara-reis-de-paula",
    "nome": "Sara Reis de Paula",
    "nome_vancouver": "Paula SR",
    "cargo": "Médica pela Universidade Federal de Alfenas – MG",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-8549-1050",
    "orcid_url": "https://orcid.org/0000-0002-8549-1050",
    "bio_completa": "Médica pela Universidade Federal de Alfenas – MG. Ortopedista e Traumatologista pela Universidade Estadual Paulista (UNESP). Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Fellow de Cirurgia da Coluna Vertebral na Universidade Estadual Paulista (UNESP).",
    "titulacao_academica": [
      "Médica pela Universidade Federal de Alfenas – MG. Ortopedista e Traumatologista pela Universidade Estadual Paulista (UNESP). Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Fellow de Cirurgia da Coluna Vertebral na Universidade Estadual Paulista (UNESP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 4,
        "titulo": "Anatomia Cirúrgica e Vias de Acesso da Coluna Cervical",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      },
      {
        "num": 93,
        "titulo": "Infecções Pós-Operatórias",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "182",
    "slug": "sergio-afonso-hennemann",
    "nome": "Sergio Afonso Hennemann",
    "nome_vancouver": "Hennemann SA",
    "cargo": "Médico Ortopedista",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-3948-3057",
    "orcid_url": "https://orcid.org/0000-0003-3948-3057",
    "bio_completa": "Médico Ortopedista. Membro da Sociedade Brasileira de Ortopedia e da Sociedade Brasileira da Coluna. Membro do Serviço de Ortopedia do Hospital Mãe de Deus.",
    "titulacao_academica": [
      "Médico Ortopedista. Membro da Sociedade Brasileira de Ortopedia e da Sociedade Brasileira da Coluna. Membro do Serviço de Ortopedia do Hospital Mãe de Deus."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 100,
        "titulo": "Síndrome da Falha da Cirurgia da Coluna Vertebral",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "183",
    "slug": "sergio-augusto-barbosa-de-farias",
    "nome": "Sérgio Augusto Barbosa de Farias",
    "nome_vancouver": "Farias SAB",
    "cargo": "Residente de Neurocirurgia pela Universidade Estadual de Campinas (Unicamp)",
    "instituicao": "Universidade Estadual de Campinas (Unicamp)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-7452-8153",
    "orcid_url": "https://orcid.org/0000-0002-7452-8153",
    "bio_completa": "Residente de Neurocirurgia pela Universidade Estadual de Campinas (Unicamp).",
    "titulacao_academica": [
      "Residente de Neurocirurgia pela Universidade Estadual de Campinas (Unicamp)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 109,
        "titulo": "Capítulo 109",
        "secao_id": 1,
        "secao_nome": "Tratado de Cirurgia da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "184",
    "slug": "sergio-mariano-zuazo",
    "nome": "Sérgio Mariano Zuazo",
    "nome_vancouver": "Zuazo SM",
    "cargo": "MD, MSc, PhD, TSA/SBA",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0006-6658-5744",
    "orcid_url": "https://orcid.org/0009-0006-6658-5744",
    "bio_completa": "MD, MSc, PhD, TSA/SBA. Médico Assistente do Hospital das Clínicas de Ribeirão Preto. Responsável pelo CET do Hospital das Clínicas de Ribeirão Preto da Faculdade de Medicina da Universidade de São Paulo (HCRP-FMUSP).",
    "titulacao_academica": [
      "MD, MSc, PhD, TSA/SBA. Médico Assistente do Hospital das Clínicas de Ribeirão Preto. Responsável pelo CET do Hospital das Clínicas de Ribeirão Preto da Faculdade de Medicina da Universidade de São Paulo (HCRP-FMUSP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 103,
        "titulo": "Abordagens para o Tratamento da Dor Pós-Operatória em Cirurgia de Coluna",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "185",
    "slug": "sergio-zylbersztejn",
    "nome": "Sergio Zylbersztejn",
    "nome_vancouver": "Zylbersztejn S",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-6560-6500",
    "orcid_url": "https://orcid.org/0000-0002-6560-6500",
    "bio_completa": "Professor Assistente Aposentado do Curso de Medicina da Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA). Mestrado em Ortopedia e Traumatologia da Faculdade de Medicina da Universidade de São Paulo (FMUSP).",
    "titulacao_academica": [
      "Professor Assistente Aposentado do Curso de Medicina da Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA). Mestrado em Ortopedia e Traumatologia da Faculdade de Medicina da Universidade de São Paulo (FMUSP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 106,
        "titulo": "Uso de Órteses na Coluna Vertebral",
        "secao_id": 10,
        "secao_nome": "Inovações Tecnológicas e Perspectivas Futuras"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "186",
    "slug": "sonja-ellen-lobo",
    "nome": "Sonja Ellen Lobo",
    "nome_vancouver": "Lobo SE",
    "cargo": "Cirurgiã-Dentista graduada pela Universidade de Marilia",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-5697-9858",
    "orcid_url": "https://orcid.org/0000-0002-5697-9858",
    "bio_completa": "Cirurgiã-Dentista graduada pela Universidade de Marilia. Especialista em Cirurgia e Traumatologia Buco-Maxilo- -Facial pela Universidade de São Paulo, Campus de Bauru (USP-Bauru). Subespecialista em Cirurgia Ortognática pelo Centro Medico Nacional 20 de Noviembre – ISSSTE, cidade do México. Mestre em Biologia Celular pela Universidade Federal de Minas Gerais (UFMG). Doutora em Ciências pela Universidade Federal de São Paulo (UNIFESP), em programa conjunto com o Departa-mento de Biomateriais da New Jersey Institute of Tech-nology (NJIT) e com o Departamento de Biomateriais e Biomiméticos da New York University (NYU), Estados Unidos. Pós-doutora no Departamento de Pesquisas Ortopédicas da University of California – UCLA, Estados Unidos.",
    "titulacao_academica": [
      "Cirurgiã-Dentista graduada pela Universidade de Marilia. Especialista em Cirurgia e Traumatologia Buco-Maxilo- -Facial pela Universidade de São Paulo, Campus de Bauru (USP-Bauru). Subespecialista em Cirurgia Ortognática pelo Centro Medico Nacional 20 de Noviembre – ISSSTE, cidade do México. Mestre em Biologia Celular pela Universidade Federal de Minas Gerais (UFMG). Doutora em Ciências pela Universidade Federal de São Paulo (UNIFESP), em programa conjunto com o Departa-mento de Biomateriais da New Jersey Institute of Tech-nology (NJIT) e com o Departamento de Biomateriais e Biomiméticos da New York University (NYU), Estados Unidos. Pós-doutora no Departamento de Pesquisas Ortopédicas da University of California – UCLA, Estados Unidos."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 62,
        "titulo": "Endoscopia Transforaminal na Coluna Lombossacra",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      },
      {
        "num": 66,
        "titulo": "Endoscopia na Coluna Cervical pela Via Anterior",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "187",
    "slug": "sylvio-mistro-neto",
    "nome": "Sylvio Mistro Neto",
    "nome_vancouver": "Mistro Neto S",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade Estadual de Campinas (Unicamp)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-6744-2397",
    "orcid_url": "https://orcid.org/0000-0001-6744-2397",
    "bio_completa": "Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT) e da Sociedade Brasileira de Coluna (SBC). Mestre em Ciências da Cirurgia pela Universidade Estadual de Campinas (Unicamp). Médico do Grupo de Cirurgia da Coluna do Hospital Alemão Oswaldo Cruz.",
    "titulacao_academica": [
      "Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT) e da Sociedade Brasileira de Coluna (SBC). Mestre em Ciências da Cirurgia pela Universidade Estadual de Campinas (Unicamp). Médico do Grupo de Cirurgia da Coluna do Hospital Alemão Oswaldo Cruz."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 49,
        "titulo": "Infiltrações e Radiofrequência na Coluna Vertebral",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "188",
    "slug": "thiago-coutinho",
    "nome": "Thiago Coutinho",
    "nome_vancouver": "Coutinho T",
    "cargo": "Médico Ortopedista especialista em Coluna Vertebral no VITA Ortopedia – São Paulo",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-7045-015X",
    "orcid_url": "https://orcid.org/0000-0002-7045-015X",
    "bio_completa": "Médico Ortopedista especialista em Coluna Vertebral no VITA Ortopedia – São Paulo. Mestre em Ciências do Sistema Musculoesquelético pela Universidade de São Paulo (USP).",
    "titulacao_academica": [
      "Médico Ortopedista especialista em Coluna Vertebral no VITA Ortopedia – São Paulo. Mestre em Ciências do Sistema Musculoesquelético pela Universidade de São Paulo (USP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 5,
        "titulo": "Anatomia Cirúrgica e Vias de Acesso da Coluna Torácica",
        "secao_id": 1,
        "secao_nome": "Ciências Básicas e Fundamentos"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "189",
    "slug": "tiago-ferreira-jorge",
    "nome": "Tiago Ferreira Jorge",
    "nome_vancouver": "Jorge TF",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-8893-5131",
    "orcid_url": "https://orcid.org/0000-0001-8893-5131",
    "bio_completa": "Graduado em Medicina pela Escola Paulista de Medicina da Universidade Federal de São Paulo (EPM-Unifesp). Especialista em Ortopedia e Traumatologia pela EPM. Especialista em Patologias da Coluna Vertebral pela EPM-Unifesp.",
    "titulacao_academica": [
      "Graduado em Medicina pela Escola Paulista de Medicina da Universidade Federal de São Paulo (EPM-Unifesp). Especialista em Ortopedia e Traumatologia pela EPM. Especialista em Patologias da Coluna Vertebral pela EPM-Unifesp."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 45,
        "titulo": "Hérnia de Disco Lombar",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      },
      {
        "num": 65,
        "titulo": "Endoscopia na Coluna Cervical pela Via Posterior",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "190",
    "slug": "tulio-albuquerque-de-moura-rangel",
    "nome": "Túlio Albuquerque de Moura Rangel",
    "nome_vancouver": "Rangel TAM",
    "cargo": "Médico pela Faculdade de Ciências Médicas da Universi-dade de Pernambuco (UPE)",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-5324-7440",
    "orcid_url": "https://orcid.org/0000-0002-5324-7440",
    "bio_completa": "Médico pela Faculdade de Ciências Médicas da Universi-dade de Pernambuco (UPE). Residência em Ortopedia e Traumatologia pelo Hospital Getúlio Vargas Recife/PE. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Membro da Sociedade Brasileira de Coluna (SBC). Membro ativo da Scoliosis Research Society (SRS).",
    "titulacao_academica": [
      "Médico pela Faculdade de Ciências Médicas da Universi-dade de Pernambuco (UPE). Residência em Ortopedia e Traumatologia pelo Hospital Getúlio Vargas Recife/PE. Membro da Sociedade Brasileira de Ortopedia e Trauma-tologia (SBOT). Membro da Sociedade Brasileira de Coluna (SBC). Membro ativo da Scoliosis Research Society (SRS)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 29,
        "titulo": "Tratamento Não Cirúrgico das Escolioses",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "191",
    "slug": "victor-cavalcante-schussel",
    "nome": "Victor Cavalcante Schussel",
    "nome_vancouver": "Schussel VC",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-7996-1685",
    "orcid_url": "https://orcid.org/0000-0002-7996-1685",
    "bio_completa": "Graduado em Medicina pela Escola Paulista de Medicina da Universidade Federal de São Paulo (Unifesp). Especialista em Ortopedia e Traumatologia pela Unifesp. Especialista em Patologias da Coluna Vertebral pela Unifesp.",
    "titulacao_academica": [
      "Graduado em Medicina pela Escola Paulista de Medicina da Universidade Federal de São Paulo (Unifesp). Especialista em Ortopedia e Traumatologia pela Unifesp. Especialista em Patologias da Coluna Vertebral pela Unifesp."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 45,
        "titulo": "Hérnia de Disco Lombar",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      },
      {
        "num": 65,
        "titulo": "Endoscopia na Coluna Cervical pela Via Posterior",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "192",
    "slug": "victor-kelles-tupy-da-fonseca",
    "nome": "Victor Kelles Tupy da Fonseca",
    "nome_vancouver": "Fonseca VKT",
    "cargo": "Pós-Graduação pela Faculdade de Ciências Médicas de Minas Gerais (FCM-MG)",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-3829-8941",
    "orcid_url": "https://orcid.org/0000-0003-3829-8941",
    "bio_completa": "Pós-Graduação pela Faculdade de Ciências Médicas de Minas Gerais (FCM-MG).",
    "titulacao_academica": [
      "Pós-Graduação pela Faculdade de Ciências Médicas de Minas Gerais (FCM-MG)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 48,
        "titulo": "Estenose Cervical, Mielopatia Cervical Degenerativa e Ossificação do Ligamento Longitudinal Posterior",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "193",
    "slug": "vincenzo-fin-falavigna",
    "nome": "Vincenzo Fin Falavigna",
    "nome_vancouver": "Falavigna VF",
    "cargo": "Acadêmico de Medicina do 4º ano da Universidade de Caxias do Sul (UCS)",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-3599-0887",
    "orcid_url": "https://orcid.org/0000-0003-3599-0887",
    "bio_completa": "Acadêmico de Medicina do 4º ano da Universidade de Caxias do Sul (UCS).",
    "titulacao_academica": [
      "Acadêmico de Medicina do 4º ano da Universidade de Caxias do Sul (UCS)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 42,
        "titulo": "Fisiopatologia da Degeneração Discal",
        "secao_id": 5,
        "secao_nome": "Doenças Degenerativas da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "194",
    "slug": "vinicius-antonio-santos-aragao",
    "nome": "Vinícius Antônio Santos Aragão",
    "nome_vancouver": "Aragão VAS",
    "cargo": "Médico pela Universidade Federal de Sergipe – UFS",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 2 Capítulos no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-2821-1873",
    "orcid_url": "https://orcid.org/0000-0003-2821-1873",
    "bio_completa": "Médico pela Universidade Federal de Sergipe – UFS. Ortopedista pelo Instituto de Ortopedia do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HC-FMUSP). Fellow em Cirurgia da Coluna Vertebral do Instituto de Ortopedia do Hospital das Clínicas da Faculdade de Medi-cina da Universidade de São Paulo (HC-FMUSP).",
    "titulacao_academica": [
      "Médico pela Universidade Federal de Sergipe – UFS. Ortopedista pelo Instituto de Ortopedia do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HC-FMUSP). Fellow em Cirurgia da Coluna Vertebral do Instituto de Ortopedia do Hospital das Clínicas da Faculdade de Medi-cina da Universidade de São Paulo (HC-FMUSP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 35,
        "titulo": "Escoliose do Adulto",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      },
      {
        "num": 36,
        "titulo": "Escoliose nas Síndromes Genéticas",
        "secao_id": 4,
        "secao_nome": "Deformidades da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "195",
    "slug": "vinicius-de-meldau-benites",
    "nome": "Vinicius de Meldau Benites",
    "nome_vancouver": "Benites VM",
    "cargo": "Médico Neurocirurgião",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-1693-9357",
    "orcid_url": "https://orcid.org/0000-0003-1693-9357",
    "bio_completa": "Médico Neurocirurgião. Membro do Grupo de Coluna da Escola Paulista de Medi-cina da Universidade Federal de São Paulo (EPM-Unifesp). Mestre e Doutor pela EPM-Unifesp.",
    "titulacao_academica": [
      "Médico Neurocirurgião. Membro do Grupo de Coluna da Escola Paulista de Medi-cina da Universidade Federal de São Paulo (EPM-Unifesp). Mestre e Doutor pela EPM-Unifesp."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 73,
        "titulo": "Artroplastia da Coluna",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "196",
    "slug": "vinicius-marques-carneiro",
    "nome": "Vinicius Marques Carneiro",
    "nome_vancouver": "Carneiro VM",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-1897-9598",
    "orcid_url": "https://orcid.org/0000-0003-1897-9598",
    "bio_completa": "Médico Assistente da Divisão de Neurocirurgia do Departamento de Cirurgia e Anatomia da Faculdade de Medi-cina de Ribeirão Preto da Universidade de São Paulo (USP).",
    "titulacao_academica": [
      "Médico Assistente da Divisão de Neurocirurgia do Departamento de Cirurgia e Anatomia da Faculdade de Medi-cina de Ribeirão Preto da Universidade de São Paulo (USP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 92,
        "titulo": "Navegação e Robótica",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "197",
    "slug": "vinicius-tapie-guerra-e-silva",
    "nome": "Vinicius Tapie Guerra e Silva",
    "nome_vancouver": "Silva VTG",
    "cargo": "Médico graduado pelo Centro Universitário do Espírito Santo - UNESC",
    "instituicao": "Instituto Nacional de Traumatologia e Ortopedia (INTO)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-8788-4395",
    "orcid_url": "https://orcid.org/0000-0001-8788-4395",
    "bio_completa": "Médico graduado pelo Centro Universitário do Espírito Santo - UNESC. Residência em Ortopedia e Traumatologia pelo Instituto Nacional de Traumatologia e Ortopedia (INTO). Residência em Cirurgia de Coluna pelo Instituto Nacional de Traumatologia e Ortopedia (INTO) com Título de espe-cialista pela Sociedade Brasileira de Coluna (SBC).",
    "titulacao_academica": [
      "Médico graduado pelo Centro Universitário do Espírito Santo - UNESC. Residência em Ortopedia e Traumatologia pelo Instituto Nacional de Traumatologia e Ortopedia (INTO). Residência em Cirurgia de Coluna pelo Instituto Nacional de Traumatologia e Ortopedia (INTO) com Título de espe-cialista pela Sociedade Brasileira de Coluna (SBC)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 88,
        "titulo": "Vertebrectomia Torácica e Lombar nas Neoplasias",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "198",
    "slug": "walison-jose-de-morais",
    "nome": "Walison José de Morais",
    "nome_vancouver": "Morais WJ",
    "cargo": "Médico graduado pela Faculdade de Medicina da Universidade Federal de Goiás (UFG)",
    "instituicao": "Universidade Federal de Goiás (UFG)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-7881-4683",
    "orcid_url": "https://orcid.org/0000-0002-7881-4683",
    "bio_completa": "Médico graduado pela Faculdade de Medicina da Universidade Federal de Goiás (UFG). Residência em Neurocirurgia pelo Hospital das Clínicas da Universidade Federal de Goiás (HC-UFG).",
    "titulacao_academica": [
      "Médico graduado pela Faculdade de Medicina da Universidade Federal de Goiás (UFG). Residência em Neurocirurgia pelo Hospital das Clínicas da Universidade Federal de Goiás (HC-UFG)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 67,
        "titulo": "Endoscopia Unilateral Biportal",
        "secao_id": 8,
        "secao_nome": "Complicações e Cirurgia de Revisão"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "199",
    "slug": "walterney-amancio-filho",
    "nome": "Walterney Amancio Filho",
    "nome_vancouver": "Amancio Filho W",
    "cargo": "Médico Neurocirurgião pelo Hospital Regional de Presi-dente Prudente – SP",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-7570-362X",
    "orcid_url": "https://orcid.org/0000-0002-7570-362X",
    "bio_completa": "Médico Neurocirurgião pelo Hospital Regional de Presi-dente Prudente – SP. Fellowship em Cirurgia da Coluna Vertebral pelo Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (FMUSP).",
    "titulacao_academica": [
      "Médico Neurocirurgião pelo Hospital Regional de Presi-dente Prudente – SP. Fellowship em Cirurgia da Coluna Vertebral pelo Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (FMUSP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 94,
        "titulo": "Lesão Dural, Aracnoidite e Fibrose Pós-Operatória",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "200",
    "slug": "werner-petry-silva",
    "nome": "Werner Petry Silva",
    "nome_vancouver": "Silva WP",
    "cargo": "Graduado em Medicina pela Universidade de Santa Cruz do Sul",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0009-0009-9572-4987",
    "orcid_url": "https://orcid.org/0009-0009-9572-4987",
    "bio_completa": "Graduado em Medicina pela Universidade de Santa Cruz do Sul. Residência em Neurocirurgia pelo Hospital Pompeia em Caxias do Sul. Fellow em Cirurgia da Coluna Vertebral pelo Hospital São Vicente de Paulo (HSVP) em Passo Fundo. Fellow em Cirurgia da Coluna Vertebral no Hospital Univer-sitário de Heidelberg na Alemanha. Pós-Graduação Lato Sensu em Cirurgia da Coluna - Universidade de Caxias do Sul e AO Spine.",
    "titulacao_academica": [
      "Graduado em Medicina pela Universidade de Santa Cruz do Sul. Residência em Neurocirurgia pelo Hospital Pompeia em Caxias do Sul. Fellow em Cirurgia da Coluna Vertebral pelo Hospital São Vicente de Paulo (HSVP) em Passo Fundo. Fellow em Cirurgia da Coluna Vertebral no Hospital Univer-sitário de Heidelberg na Alemanha. Pós-Graduação Lato Sensu em Cirurgia da Coluna - Universidade de Caxias do Sul e AO Spine."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 17,
        "titulo": "Diagnóstico Diferencial: Doenças da Coluna e Doenças Neurológicas",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "201",
    "slug": "william-gemio-jacobsen-teixeira",
    "nome": "William Gemio Jacobsen Teixeira",
    "nome_vancouver": "Teixeira WGJ",
    "cargo": "Doutor pela Faculdade de Medicina da Universidade de São Paulo (USP)",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-9036-629X",
    "orcid_url": "https://orcid.org/0000-0001-9036-629X",
    "bio_completa": "Doutor pela Faculdade de Medicina da Universidade de São Paulo (USP).",
    "titulacao_academica": [
      "Doutor pela Faculdade de Medicina da Universidade de São Paulo (USP)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 54,
        "titulo": "Tumores Ósseos Primários Malignos",
        "secao_id": 6,
        "secao_nome": "Técnicas Minimamente Invasivas e Endoscopia"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "202",
    "slug": "wuilker-knoner-campos",
    "nome": "Wuilker Knoner Campos",
    "nome_vancouver": "Campos WK",
    "cargo": "Neurocirurgia pelo Hospital Geral de Bonsucesso – RJ",
    "instituicao": "Universidade de São Paulo (USP)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0001-7931-1255",
    "orcid_url": "https://orcid.org/0000-0001-7931-1255",
    "bio_completa": "Neurocirurgia pelo Hospital Geral de Bonsucesso – RJ. Fellow em Cirurgia da Coluna no Instituto Rizzoli - Bolonha/ ITA. Fellow em Neurocirurgia Funcional pelo Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (FMUSP). Especialista em Medicina da Dor pela Associação Médica Brasileira (AMB). Doutorado em Neurociências pela Universidade Federal de Santa Catarina UFSC.",
    "titulacao_academica": [
      "Neurocirurgia pelo Hospital Geral de Bonsucesso – RJ. Fellow em Cirurgia da Coluna no Instituto Rizzoli - Bolonha/ ITA. Fellow em Neurocirurgia Funcional pelo Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (FMUSP). Especialista em Medicina da Dor pela Associação Médica Brasileira (AMB). Doutorado em Neurociências pela Universidade Federal de Santa Catarina UFSC."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 94,
        "titulo": "Lesão Dural, Aracnoidite e Fibrose Pós-Operatória",
        "secao_id": 9,
        "secao_nome": "Manejo da Dor e Reabilitação"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "203",
    "slug": "xavier-soler-graells",
    "nome": "Xavier Soler Graells",
    "nome_vancouver": "Graells XS",
    "cargo": "Médico Ortopedista Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT)",
    "instituicao": "Sociedade Brasileira de Coluna (SBC)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0002-9636-9165",
    "orcid_url": "https://orcid.org/0000-0002-9636-9165",
    "bio_completa": "Médico Ortopedista Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Especialista em Cirurgia de Coluna pela Sociedade Brasileira de Coluna (SBC). Mestre em Clínica Cirúrgica pela Universidade Federal do Paraná (UFPR). Chefe do Grupo de Coluna do Hospital do Trabalhador (HT), Curitiba. Chefe do Serviço de Ortopedia e Traumatologia do HT. Aperfeiçoamento em Ensino Médico pela UFPR.",
    "titulacao_academica": [
      "Médico Ortopedista Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Especialista em Cirurgia de Coluna pela Sociedade Brasileira de Coluna (SBC). Mestre em Clínica Cirúrgica pela Universidade Federal do Paraná (UFPR). Chefe do Grupo de Coluna do Hospital do Trabalhador (HT), Curitiba. Chefe do Serviço de Ortopedia e Traumatologia do HT. Aperfeiçoamento em Ensino Médico pela UFPR."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 25,
        "titulo": "Fraturas Vertebrais por Insuficiência",
        "secao_id": 3,
        "secao_nome": "Traumatismo da Coluna Vertebral"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "204",
    "slug": "zoraida-sachetto",
    "nome": "Zoraida Sachetto",
    "nome_vancouver": "Sachetto Z",
    "cargo": "Membro Especialista da Sociedade Brasileira de Coluna",
    "instituicao": "Universidade Estadual de Campinas (Unicamp)",
    "destaque": "Autor de 1 Capítulo no Tratado SBC",
    "foto_url": "/assets/avatar-placeholder.png",
    "orcid": "0000-0003-1216-9690",
    "orcid_url": "https://orcid.org/0000-0003-1216-9690",
    "bio_completa": "Professora Doutora da Disciplina de Reumatologia do Departamento de Ortopedia, Reumatologia e Traumatologia da Faculdade de Ciências Médicas da Universidade Estadual de Campinas (FCM-Unicamp).",
    "titulacao_academica": [
      "Professora Doutora da Disciplina de Reumatologia do Departamento de Ortopedia, Reumatologia e Traumatologia da Faculdade de Ciências Médicas da Universidade Estadual de Campinas (FCM-Unicamp)."
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [
      {
        "num": 59,
        "titulo": "Doenças Reumáticas da Coluna Vertebral",
        "secao_id": 7,
        "secao_nome": "Tumores e Infecções da Coluna"
      }
    ],
    "artigos_relevantes": []
  },
  {
    "id": "205",
    "slug": "elcio-landim",
    "nome": "Prof. Dr. Elcio Landim",
    "cargo": "Ex-Presidente da Sociedade Brasileira de Coluna (1987–1988)",
    "instituicao": "Universidade Estadual de Campinas (UNICAMP) & Santa Casa de SP",
    "destaque": "Autor da Apresentação Oficial do Tratado SBC",
    "foto_url": "/assets/elcio-landim.jpg",
    "orcid": "0000-0002-3908-5694",
    "orcid_url": "https://orcid.org/0000-0002-3908-5694",
    "bio_completa": "Professor Doutor e Livre-Docente. Ex-Presidente da Sociedade Brasileira de Coluna (1987–1988). Ex-Chefe do Grupo de Coluna da Disciplina de Ortopedia e Traumatologia da Faculdade de Ciências Médicas da Universidade Estadual de Campinas (FCM-Unicamp). Ex-Chefe do Grupo de Coluna do Departamento de Ortopedia e Traumatologia da Santa Casa de São Paulo. Ex-Chefe do Grupo de Escoliose da Associação de Assistência à Criança Deficiente (AACD).",
    "titulacao_academica": [
      "Ex-Presidente da Sociedade Brasileira de Coluna (1987–1988)",
      "Ex-Chefe do Grupo de Coluna da FCM-Unicamp",
      "Ex-Chefe do Grupo de Coluna da Ortopedia da Santa Casa de São Paulo",
      "Ex-Chefe do Grupo de Escoliose da AACD"
    ],
    "especialidades": [
      "Cirurgia da Coluna Vertebral",
      "Deformidades da Coluna e Escoliose",
      "Sociedade Brasileira de Coluna (SBC)"
    ],
    "capitulos_tratado": [],
    "artigos_relevantes": []
  }
];

export const AUTHOR_SLUG_ALIASES: Record<string, string> = {
  "helton-defino": "helton-luiz-aparecido-defino",
  "marcelo-risso": "marcelo-italo-risso-neto",
  "elcio-landim": "elcio-landim",
  "luiz-vialle": "luiz-roberto-gomes-vialle",
};

export function getAuthorByIdOrSlug(idOrSlug: string): AuthorProfile | undefined {
  if (!idOrSlug) return undefined;
  const normalized = idOrSlug.toLowerCase().trim();
  const aliased = AUTHOR_SLUG_ALIASES[normalized] || normalized;

  return (
    AUTHORS_DIRECTORY.find((a) => a.id === normalized || a.id === aliased) ||
    AUTHORS_DIRECTORY.find((a) => a.slug === normalized || a.slug === aliased) ||
    AUTHORS_DIRECTORY.find((a) => a.nome.toLowerCase().replace(/^(dr\.|dra\.|prof\.|profa\.)\s*/i, "").trim() === normalized)
  );
}

export function getAuthorByName(name: string): AuthorProfile | undefined {
  const clean = name.toLowerCase().replace(/^(dr\.|dra\.|prof\.|profa\.)\s*/i, "").trim();
  return AUTHORS_DIRECTORY.find((a) => {
    const aClean = a.nome.toLowerCase().replace(/^(dr\.|dra\.|prof\.|profa\.)\s*/i, "").trim();
    return aClean === clean || aClean.includes(clean) || clean.includes(aClean);
  });
}

export function getAuthorsByChapter(chapterNum: number): AuthorProfile[] {
  return AUTHORS_DIRECTORY.filter((a) =>
    a.capitulos_tratado.some((c) => c.num === chapterNum)
  );
}

export function getAllAuthors(): AuthorProfile[] {
  return AUTHORS_DIRECTORY;
}

export function translateAuthorRole(cargo: string, locale: "pt" | "en" | "es" = "pt"): string {
  if (locale === "pt" || !cargo) return cargo;
  if (locale === "en") {
    return cargo
      .replace(/Membro Titular da Sociedade Brasileira de Coluna/gi, "Full Member of the Brazilian Spine Society")
      .replace(/Membro Especialista da Sociedade Brasileira de Coluna/gi, "Specialist Member of the Brazilian Spine Society")
      .replace(/Membro Efetivo da Sociedade Brasileira de Coluna/gi, "Active Member of the Brazilian Spine Society")
      .replace(/Membro Emérito da Sociedade Brasileira de Coluna/gi, "Emeritus Member of the Brazilian Spine Society")
      .replace(/Médico Especialista em Cirurgia da Coluna/gi, "Spine Surgery Specialist Physician")
      .replace(/Médico Neurocirurgião/gi, "Neurosurgeon")
      .replace(/Médico Ortopedista/gi, "Orthopedic Surgeon")
      .replace(/Professor Titular/gi, "Full Professor")
      .replace(/Professor Associado/gi, "Associate Professor")
      .replace(/Professor Adjunto/gi, "Adjunct Professor")
      .replace(/Doutor em/gi, "PhD in")
      .replace(/Mestre em/gi, "MSc in")
      .replace(/Presidente da SBC/gi, "President of the Brazilian Spine Society")
      .replace(/Presidente do Comitê/gi, "Committee President")
      .replace(/Chefe do Grupo de Coluna/gi, "Head of Spine Surgery Group")
      .replace(/Coordenador do Serviço de Coluna/gi, "Spine Service Coordinator")
      .replace(/Residente do Serviço de Neurocirurgia/gi, "Neurosurgery Resident")
      .replace(/Residente de Ortopedia/gi, "Orthopedics Resident");
  }
  if (locale === "es") {
    return cargo
      .replace(/Membro Titular da Sociedade Brasileira de Coluna/gi, "Miembro Titular de la Sociedad Brasileña de Columna")
      .replace(/Membro Especialista da Sociedade Brasileira de Coluna/gi, "Miembro Especialista de la Sociedad Brasileña de Columna")
      .replace(/Membro Efetivo da Sociedade Brasileira de Coluna/gi, "Miembro Efectivo de la Sociedad Brasileña de Columna")
      .replace(/Membro Emérito da Sociedade Brasileira de Coluna/gi, "Miembro Emérito de la Sociedad Brasileña de Columna")
      .replace(/Médico Especialista em Cirurgia da Coluna/gi, "Médico Especialista en Cirugía de Columna")
      .replace(/Médico Neurocirurgião/gi, "Médico Neurocirujano")
      .replace(/Médico Ortopedista/gi, "Médico Ortopedista")
      .replace(/Professor Titular/gi, "Profesor Titular")
      .replace(/Professor Associado/gi, "Profesor Asociado")
      .replace(/Professor Adjunto/gi, "Profesor Adjunto")
      .replace(/Doutor em/gi, "Doctor en")
      .replace(/Mestre em/gi, "Magíster en")
      .replace(/Presidente da SBC/gi, "Presidente de la Sociedad Brasileña de Columna")
      .replace(/Presidente do Comitê/gi, "Presidente del Comité")
      .replace(/Chefe do Grupo de Coluna/gi, "Jefe del Grupo de Columna")
      .replace(/Coordenador do Serviço de Coluna/gi, "Coordinador del Servicio de Columna")
      .replace(/Residente do Serviço de Neurocirurgia/gi, "Residente del Servicio de Neurocirugía")
      .replace(/Residente de Ortopedia/gi, "Residente de Ortopedia");
  }
  return cargo;
}

export function translateAuthorDestaque(destaque: string, locale: "pt" | "en" | "es" = "pt"): string {
  if (locale === "pt" || !destaque) return destaque;
  if (locale === "en") {
    return destaque
      .replace(/Autor de (\d+) Capítulos? no Tratado SBC/gi, "Author of $1 Chapter(s) in the SBC Treatise")
      .replace(/Coautor de (\d+) Capítulos? no Tratado SBC/gi, "Coauthor of $1 Chapter(s) in the SBC Treatise")
      .replace(/Editor-Chefe do Tratado SBC/gi, "Editor-in-Chief of the SBC Treatise");
  }
  if (locale === "es") {
    return destaque
      .replace(/Autor de (\d+) Capítulos? no Tratado SBC/gi, "Autor de $1 Capítulo(s) en el Tratado SBC")
      .replace(/Coautor de (\d+) Capítulos? no Tratado SBC/gi, "Coautor de $1 Capítulo(s) en el Tratado SBC")
      .replace(/Editor-Chefe do Tratado SBC/gi, "Editor en Jefe del Tratado SBC");
  }
  return destaque;
}
