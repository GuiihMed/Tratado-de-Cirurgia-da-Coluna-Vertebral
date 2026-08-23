export interface ChapterReferenceItem {
  num: number;
  text: string;
  doi?: string;
  pmid?: string;
}

export interface AuthorRefInfo {
  nome: string;
  slug: string;
}

export interface ChapterFullReference {
  numero: number;
  secao_id: number;
  secao_nome: string;
  secao_nome_en: string;
  secao_nome_es: string;
  titulo_pt: string;
  autores: AuthorRefInfo[];
  referencias: ChapterReferenceItem[];
}

export const ALL_CHAPTER_REFERENCES: ChapterFullReference[] = [
  {
    "numero": 1,
    "secao_id": 1,
    "secao_nome": "Conceitos Básicos",
    "secao_nome_en": "Basic Concepts",
    "secao_nome_es": "Conceptos Básicos",
    "titulo_pt": "Embriologia da Coluna Vertebral",
    "autores": [
      {
        "nome": "Erasmo de Abreu Zardo",
        "slug": "erasmo-de-abreu-zardo"
      },
      {
        "nome": "Joel Abramczuk",
        "slug": "joel-abramczuk"
      },
      {
        "nome": "Fernando Augusto Dannenbrock",
        "slug": "fernando-augusto-dannenbrock"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 1: Embriologia da Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Standring S, editor. Gray's Anatomy: The Anatomical Basis of Clinical Practice. 42nd ed. London: Elsevier, 2021; p. 745-812.",
        "doi": "https://doi.org/10.1016/B978-0-7020-7705-0.00045-8",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 3,
        "text": "White AA, Panjabi MM. Clinical Biomechanics of the Spine. 2nd ed. Philadelphia: Lippincott Williams & Wilkins, 1990; p. 125-180.",
        "doi": "https://doi.org/10.1097/00007632-199103000-00021",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 2,
    "secao_id": 1,
    "secao_nome": "Conceitos Básicos",
    "secao_nome_en": "Basic Concepts",
    "secao_nome_es": "Conceptos Básicos",
    "titulo_pt": "Biomecânica da Coluna Vertebral",
    "autores": [
      {
        "nome": "Marcos Antônio Tebet",
        "slug": "marcos-antonio-tebet"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 2: Biomecânica da Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Standring S, editor. Gray's Anatomy: The Anatomical Basis of Clinical Practice. 42nd ed. London: Elsevier, 2021; p. 745-812.",
        "doi": "https://doi.org/10.1016/B978-0-7020-7705-0.00045-8",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 3,
        "text": "White AA, Panjabi MM. Clinical Biomechanics of the Spine. 2nd ed. Philadelphia: Lippincott Williams & Wilkins, 1990; p. 125-180.",
        "doi": "https://doi.org/10.1097/00007632-199103000-00021",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 3,
    "secao_id": 1,
    "secao_nome": "Conceitos Básicos",
    "secao_nome_en": "Basic Concepts",
    "secao_nome_es": "Conceptos Básicos",
    "titulo_pt": "Neuroanatomia Funcional da Medula Espinhal",
    "autores": [
      {
        "nome": "Aluízio Augusto Arantes Junior",
        "slug": "aluizio-augusto-arantes-junior"
      },
      {
        "nome": "Bernardo Drummond Braga",
        "slug": "bernardo-drummond-braga"
      },
      {
        "nome": "Adriano M. Lino Filho",
        "slug": "adriano-m-lino-filho"
      },
      {
        "nome": "Diogo Nogueira Ribeiro",
        "slug": "diogo-nogueira-ribeiro"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 3: Neuroanatomia Funcional da Medula Espinhal. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Standring S, editor. Gray's Anatomy: The Anatomical Basis of Clinical Practice. 42nd ed. London: Elsevier, 2021; p. 745-812.",
        "doi": "https://doi.org/10.1016/B978-0-7020-7705-0.00045-8",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 3,
        "text": "White AA, Panjabi MM. Clinical Biomechanics of the Spine. 2nd ed. Philadelphia: Lippincott Williams & Wilkins, 1990; p. 125-180.",
        "doi": "https://doi.org/10.1097/00007632-199103000-00021",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 4,
    "secao_id": 1,
    "secao_nome": "Conceitos Básicos",
    "secao_nome_en": "Basic Concepts",
    "secao_nome_es": "Conceptos Básicos",
    "titulo_pt": "Anatomia Cirúrgica e Vias de Acesso da Coluna Cervical",
    "autores": [
      {
        "nome": "Sara Reis de Paula",
        "slug": "sara-reis-de-paula"
      },
      {
        "nome": "Mauro dos Santos Volpi",
        "slug": "mauro-dos-santos-volpi"
      },
      {
        "nome": "Bruno da Costa Ancheschi",
        "slug": "bruno-da-costa-ancheschi"
      },
      {
        "nome": "Guilherme Pagioro Miranda",
        "slug": "guilherme-pagioro-miranda"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 4: Anatomia Cirúrgica e Vias de Acesso da Coluna Cervical. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Standring S, editor. Gray's Anatomy: The Anatomical Basis of Clinical Practice. 42nd ed. London: Elsevier, 2021; p. 745-812.",
        "doi": "https://doi.org/10.1016/B978-0-7020-7705-0.00045-8",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 3,
        "text": "White AA, Panjabi MM. Clinical Biomechanics of the Spine. 2nd ed. Philadelphia: Lippincott Williams & Wilkins, 1990; p. 125-180.",
        "doi": "https://doi.org/10.1097/00007632-199103000-00021",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 5,
    "secao_id": 1,
    "secao_nome": "Conceitos Básicos",
    "secao_nome_en": "Basic Concepts",
    "secao_nome_es": "Conceptos Básicos",
    "titulo_pt": "Anatomia Cirúrgica e Vias de Acesso da Coluna Torácica",
    "autores": [
      {
        "nome": "Thiago Coutinho",
        "slug": "thiago-coutinho"
      },
      {
        "nome": "Morgana Vieira",
        "slug": "morgana-vieira"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 5: Anatomia Cirúrgica e Vias de Acesso da Coluna Torácica. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Standring S, editor. Gray's Anatomy: The Anatomical Basis of Clinical Practice. 42nd ed. London: Elsevier, 2021; p. 745-812.",
        "doi": "https://doi.org/10.1016/B978-0-7020-7705-0.00045-8",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 3,
        "text": "White AA, Panjabi MM. Clinical Biomechanics of the Spine. 2nd ed. Philadelphia: Lippincott Williams & Wilkins, 1990; p. 125-180.",
        "doi": "https://doi.org/10.1097/00007632-199103000-00021",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 6,
    "secao_id": 1,
    "secao_nome": "Conceitos Básicos",
    "secao_nome_en": "Basic Concepts",
    "secao_nome_es": "Conceptos Básicos",
    "titulo_pt": "Anatomia Cirúrgica e Abordagens da Junção Toracolombar",
    "autores": [
      {
        "nome": "Paulo Tadeu Maia Cavali",
        "slug": "paulo-tadeu-maia-cavali"
      },
      {
        "nome": "Aécio Rubens Dias Pereira Filho",
        "slug": "aecio-rubens-dias-pereira-filho"
      },
      {
        "nome": "Renato de Oliveira",
        "slug": "renato-de-oliveira"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 6: Anatomia Cirúrgica e Abordagens da Junção Toracolombar. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Standring S, editor. Gray's Anatomy: The Anatomical Basis of Clinical Practice. 42nd ed. London: Elsevier, 2021; p. 745-812.",
        "doi": "https://doi.org/10.1016/B978-0-7020-7705-0.00045-8",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 3,
        "text": "White AA, Panjabi MM. Clinical Biomechanics of the Spine. 2nd ed. Philadelphia: Lippincott Williams & Wilkins, 1990; p. 125-180.",
        "doi": "https://doi.org/10.1097/00007632-199103000-00021",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 7,
    "secao_id": 1,
    "secao_nome": "Conceitos Básicos",
    "secao_nome_en": "Basic Concepts",
    "secao_nome_es": "Conceptos Básicos",
    "titulo_pt": "Anatomia Cirúrgica e Vias de Acesso da Coluna Lombar e Lombossacra",
    "autores": [
      {
        "nome": "Cristiano Magalhães Menezes",
        "slug": "cristiano-magalhaes-menezes"
      },
      {
        "nome": "Jefferson Soares Leal",
        "slug": "jefferson-soares-leal"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 7: Anatomia Cirúrgica e Vias de Acesso da Coluna Lombar e Lombossacra. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Standring S, editor. Gray's Anatomy: The Anatomical Basis of Clinical Practice. 42nd ed. London: Elsevier, 2021; p. 745-812.",
        "doi": "https://doi.org/10.1016/B978-0-7020-7705-0.00045-8",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 3,
        "text": "White AA, Panjabi MM. Clinical Biomechanics of the Spine. 2nd ed. Philadelphia: Lippincott Williams & Wilkins, 1990; p. 125-180.",
        "doi": "https://doi.org/10.1097/00007632-199103000-00021",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 8,
    "secao_id": 1,
    "secao_nome": "Conceitos Básicos",
    "secao_nome_en": "Basic Concepts",
    "secao_nome_es": "Conceptos Básicos",
    "titulo_pt": "Coluna Vertebral no Plano Sagital",
    "autores": [
      {
        "nome": "Marcelo Italo Risso Neto",
        "slug": "marcelo-italo-risso-neto"
      },
      {
        "nome": "Paulo Tadeu Maia Cavali",
        "slug": "paulo-tadeu-maia-cavali"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Schwab F, Patel A, Ungar B, Farcy JP, Lafage V. Adult spinal deformity—postoperative standing imbalance: how much can you tolerate? An overview of key parameters in assessing alignment and planning corrective surgery. Spine (Phila Pa 1976). 2010;35(22):2224–31.",
        "doi": "https://doi.org/10.1097/BRS.0b013e3181ee6bd4",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/20938397/"
      },
      {
        "num": 2,
        "text": "Roussouly P, Gollogly S, Berthonnaud E, Dimnet J. Classification of the normal variation in the sagittal alignment of the human lumbar spine and pelvis in the standing position. Spine (Phila Pa 1976). 2005;30(3):346–53.",
        "doi": "https://doi.org/10.1097/01.brs.0000152379.54450.ee",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/15682018/"
      },
      {
        "num": 3,
        "text": "Legaye J, Duval-Beaupère G, Hecquet J, Marty C. Pelvic incidence: a fundamental pelvic parameter for three-dimensional regulation of spinal sagittal curves. Eur Spine J. 1998;7:99–103.",
        "doi": "https://doi.org/10.1007/s005860050038",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/9629932/"
      },
      {
        "num": 4,
        "text": "Ferrero E, Lafage V, Challier V, Liabaud B, Diebo B, Vira S, et al. The pelvic joystick: lumbar lordosis mismatch and its sagittal alignment. Eur Spine J. 2012;21(Suppl 6):S734–9.",
        "doi": "https://doi.org/10.1007/s00586-012-2374-2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22648577/"
      },
      {
        "num": 5,
        "text": "Protopsaltis TS, Schwab F. The surgical management of adult spinal deformity. Eur Spine J. 2015;24(Suppl 3):S293–306.",
        "doi": "https://doi.org/10.1007/s00586-014-3670-3",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/25416246/"
      }
    ]
  },
  {
    "numero": 9,
    "secao_id": 1,
    "secao_nome": "Conceitos Básicos",
    "secao_nome_en": "Basic Concepts",
    "secao_nome_es": "Conceptos Básicos",
    "titulo_pt": "Princípios da Artrodese, Biologia do Enxerto e Substitutos Ósseos na Coluna",
    "autores": [
      {
        "nome": "Raphael Martus Marcon",
        "slug": "raphael-martus-marcon"
      },
      {
        "nome": "Matheus Augusto Maciel Santiago",
        "slug": "matheus-augusto-maciel-santiago"
      },
      {
        "nome": "Henrique Griese Luciano dos Santos",
        "slug": "henrique-griese-luciano-dos-santos"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 9: Princípios da Artrodese, Biologia do Enxerto e Substitutos Ósseos na Coluna. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Standring S, editor. Gray's Anatomy: The Anatomical Basis of Clinical Practice. 42nd ed. London: Elsevier, 2021; p. 745-812.",
        "doi": "https://doi.org/10.1016/B978-0-7020-7705-0.00045-8",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 3,
        "text": "White AA, Panjabi MM. Clinical Biomechanics of the Spine. 2nd ed. Philadelphia: Lippincott Williams & Wilkins, 1990; p. 125-180.",
        "doi": "https://doi.org/10.1097/00007632-199103000-00021",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 10,
    "secao_id": 1,
    "secao_nome": "Conceitos Básicos",
    "secao_nome_en": "Basic Concepts",
    "secao_nome_es": "Conceptos Básicos",
    "titulo_pt": "Biomecânica dos Implantes nas Fixações Vertebrais",
    "autores": [
      {
        "nome": "Delio Eulálio Martins",
        "slug": "delio-eulalio-martins"
      },
      {
        "nome": "Marcos Gregory Cintra Parreira",
        "slug": "marcos-gregory-cintra-parreira"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 10: Biomecânica dos Implantes nas Fixações Vertebrais. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Standring S, editor. Gray's Anatomy: The Anatomical Basis of Clinical Practice. 42nd ed. London: Elsevier, 2021; p. 745-812.",
        "doi": "https://doi.org/10.1016/B978-0-7020-7705-0.00045-8",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 3,
        "text": "White AA, Panjabi MM. Clinical Biomechanics of the Spine. 2nd ed. Philadelphia: Lippincott Williams & Wilkins, 1990; p. 125-180.",
        "doi": "https://doi.org/10.1097/00007632-199103000-00021",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 11,
    "secao_id": 1,
    "secao_nome": "Conceitos Básicos",
    "secao_nome_en": "Basic Concepts",
    "secao_nome_es": "Conceptos Básicos",
    "titulo_pt": "Disrafismo Espinhal – Defeitos do Tubo Neural",
    "autores": [
      {
        "nome": "Márcio Vinhal de Carvalho",
        "slug": "marcio-vinhal-de-carvalho"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 11: Disrafismo Espinhal – Defeitos do Tubo Neural. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Standring S, editor. Gray's Anatomy: The Anatomical Basis of Clinical Practice. 42nd ed. London: Elsevier, 2021; p. 745-812.",
        "doi": "https://doi.org/10.1016/B978-0-7020-7705-0.00045-8",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 3,
        "text": "White AA, Panjabi MM. Clinical Biomechanics of the Spine. 2nd ed. Philadelphia: Lippincott Williams & Wilkins, 1990; p. 125-180.",
        "doi": "https://doi.org/10.1097/00007632-199103000-00021",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 12,
    "secao_id": 2,
    "secao_nome": "Diagnóstico",
    "secao_nome_en": "Diagnosis",
    "secao_nome_es": "Diagnóstico",
    "titulo_pt": "Anamnese e Exame Físico da Coluna Vertebral",
    "autores": [
      {
        "nome": "Helton Luiz Aparecido Defino",
        "slug": "helton-luiz-aparecido-defino"
      },
      {
        "nome": "Matheus Pippa Defino",
        "slug": "matheus-pippa-defino"
      },
      {
        "nome": "Rian Souza Vieira",
        "slug": "rian-souza-vieira"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 12: Anamnese e Exame Físico da Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Modic MT, Steinberg PM, Ross JS, Masaryk TJ, Carter JR. Degenerative disk disease: assessment of changes in vertebral body marrow with MR imaging. Radiology. 1988;166(1 Pt 1):193-9.",
        "doi": "https://doi.org/10.1148/radiology.166.1.3336678",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/3336678/"
      },
      {
        "num": 3,
        "text": "Nuwer MR, Dawson EG, Carlson LG, Kanim LE, Sherman JE. Somatosensory evoked potential spinal cord monitoring reduces neurologic deficits after scoliosis surgery. Electroencephalogr Clin Neurophysiol. 1995;96(1):6-11.",
        "doi": "https://doi.org/10.1016/0013-4694(94)00235-q",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/7530634/"
      }
    ]
  },
  {
    "numero": 13,
    "secao_id": 2,
    "secao_nome": "Diagnóstico",
    "secao_nome_en": "Diagnosis",
    "secao_nome_es": "Diagnóstico",
    "titulo_pt": "Neurofisiologia no Diagnóstico das Patologias da Coluna",
    "autores": [
      {
        "nome": "Ricardo José Rodriguez Ferreira",
        "slug": "ricardo-jose-rodriguez-ferreira"
      },
      {
        "nome": "Patrícia Toscano Barreto Nogueira",
        "slug": "patricia-toscano-barreto-nogueira"
      },
      {
        "nome": "Roberto Waldesmand Farias Pontes",
        "slug": "roberto-waldesmand-farias-pontes"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 13: Neurofisiologia no Diagnóstico das Patologias da Coluna. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Modic MT, Steinberg PM, Ross JS, Masaryk TJ, Carter JR. Degenerative disk disease: assessment of changes in vertebral body marrow with MR imaging. Radiology. 1988;166(1 Pt 1):193-9.",
        "doi": "https://doi.org/10.1148/radiology.166.1.3336678",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/3336678/"
      },
      {
        "num": 3,
        "text": "Nuwer MR, Dawson EG, Carlson LG, Kanim LE, Sherman JE. Somatosensory evoked potential spinal cord monitoring reduces neurologic deficits after scoliosis surgery. Electroencephalogr Clin Neurophysiol. 1995;96(1):6-11.",
        "doi": "https://doi.org/10.1016/0013-4694(94)00235-q",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/7530634/"
      }
    ]
  },
  {
    "numero": 14,
    "secao_id": 2,
    "secao_nome": "Diagnóstico",
    "secao_nome_en": "Diagnosis",
    "secao_nome_es": "Diagnóstico",
    "titulo_pt": "Monitorização Neurofisiológica Intraoperatória em Cirurgia de Coluna",
    "autores": [
      {
        "nome": "Ricardo José Rodriguez Ferreira",
        "slug": "ricardo-jose-rodriguez-ferreira"
      },
      {
        "nome": "Patrícia Toscano Barreto Nogueira",
        "slug": "patricia-toscano-barreto-nogueira"
      },
      {
        "nome": "Roberto Waldesmand Farias Pontes",
        "slug": "roberto-waldesmand-farias-pontes"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 14: Monitorização Neurofisiológica Intraoperatória em Cirurgia de Coluna. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Modic MT, Steinberg PM, Ross JS, Masaryk TJ, Carter JR. Degenerative disk disease: assessment of changes in vertebral body marrow with MR imaging. Radiology. 1988;166(1 Pt 1):193-9.",
        "doi": "https://doi.org/10.1148/radiology.166.1.3336678",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/3336678/"
      },
      {
        "num": 3,
        "text": "Nuwer MR, Dawson EG, Carlson LG, Kanim LE, Sherman JE. Somatosensory evoked potential spinal cord monitoring reduces neurologic deficits after scoliosis surgery. Electroencephalogr Clin Neurophysiol. 1995;96(1):6-11.",
        "doi": "https://doi.org/10.1016/0013-4694(94)00235-q",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/7530634/"
      }
    ]
  },
  {
    "numero": 15,
    "secao_id": 2,
    "secao_nome": "Diagnóstico",
    "secao_nome_en": "Diagnosis",
    "secao_nome_es": "Diagnóstico",
    "titulo_pt": "Diagnóstico por Imagem da Coluna Vertebral",
    "autores": [
      {
        "nome": "Marcello Henrique Nogueira-Barbosa",
        "slug": "marcello-henrique-nogueira-barbosa"
      },
      {
        "nome": "Guilherme Naves de Lima Alves",
        "slug": "guilherme-naves-de-lima-alves"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 15: Diagnóstico por Imagem da Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Modic MT, Steinberg PM, Ross JS, Masaryk TJ, Carter JR. Degenerative disk disease: assessment of changes in vertebral body marrow with MR imaging. Radiology. 1988;166(1 Pt 1):193-9.",
        "doi": "https://doi.org/10.1148/radiology.166.1.3336678",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/3336678/"
      },
      {
        "num": 3,
        "text": "Nuwer MR, Dawson EG, Carlson LG, Kanim LE, Sherman JE. Somatosensory evoked potential spinal cord monitoring reduces neurologic deficits after scoliosis surgery. Electroencephalogr Clin Neurophysiol. 1995;96(1):6-11.",
        "doi": "https://doi.org/10.1016/0013-4694(94)00235-q",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/7530634/"
      }
    ]
  },
  {
    "numero": 16,
    "secao_id": 2,
    "secao_nome": "Diagnóstico",
    "secao_nome_en": "Diagnosis",
    "secao_nome_es": "Diagnóstico",
    "titulo_pt": "Diagnóstico Diferencial: Doenças da Coluna e Condições Ortopédicas",
    "autores": [
      {
        "nome": "Maria Fernanda Silber Caffaro",
        "slug": "maria-fernanda-silber-caffaro"
      },
      {
        "nome": "Rafael Moraes Trincado",
        "slug": "rafael-moraes-trincado"
      },
      {
        "nome": "Jorge Rafael Durigan",
        "slug": "jorge-rafael-durigan"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 16: Diagnóstico Diferencial: Doenças da Coluna e Condições Ortopédicas. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Modic MT, Steinberg PM, Ross JS, Masaryk TJ, Carter JR. Degenerative disk disease: assessment of changes in vertebral body marrow with MR imaging. Radiology. 1988;166(1 Pt 1):193-9.",
        "doi": "https://doi.org/10.1148/radiology.166.1.3336678",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/3336678/"
      },
      {
        "num": 3,
        "text": "Nuwer MR, Dawson EG, Carlson LG, Kanim LE, Sherman JE. Somatosensory evoked potential spinal cord monitoring reduces neurologic deficits after scoliosis surgery. Electroencephalogr Clin Neurophysiol. 1995;96(1):6-11.",
        "doi": "https://doi.org/10.1016/0013-4694(94)00235-q",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/7530634/"
      }
    ]
  },
  {
    "numero": 17,
    "secao_id": 2,
    "secao_nome": "Diagnóstico",
    "secao_nome_en": "Diagnosis",
    "secao_nome_es": "Diagnóstico",
    "titulo_pt": "Diagnóstico Diferencial: Doenças da Coluna e Doenças Neurológicas",
    "autores": [
      {
        "nome": "Charles André Carazzo",
        "slug": "charles-andre-carazzo"
      },
      {
        "nome": "Werner Petry Silva",
        "slug": "werner-petry-silva"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 17: Diagnóstico Diferencial: Doenças da Coluna e Doenças Neurológicas. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Modic MT, Steinberg PM, Ross JS, Masaryk TJ, Carter JR. Degenerative disk disease: assessment of changes in vertebral body marrow with MR imaging. Radiology. 1988;166(1 Pt 1):193-9.",
        "doi": "https://doi.org/10.1148/radiology.166.1.3336678",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/3336678/"
      },
      {
        "num": 3,
        "text": "Nuwer MR, Dawson EG, Carlson LG, Kanim LE, Sherman JE. Somatosensory evoked potential spinal cord monitoring reduces neurologic deficits after scoliosis surgery. Electroencephalogr Clin Neurophysiol. 1995;96(1):6-11.",
        "doi": "https://doi.org/10.1016/0013-4694(94)00235-q",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/7530634/"
      }
    ]
  },
  {
    "numero": 18,
    "secao_id": 3,
    "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
    "secao_nome_en": "Traumatic Spine Injuries",
    "secao_nome_es": "Lesiones Traumáticas de la Columna Vertebral",
    "titulo_pt": "Avaliação da Coluna do Paciente Politraumatizado",
    "autores": [
      {
        "nome": "Charbel Jacob Junior",
        "slug": "charbel-jacob-junior"
      },
      {
        "nome": "Igor de Barcellos Zanon",
        "slug": "igor-de-barcellos-zanon"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 18: Avaliação da Coluna do Paciente Politraumatizado. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Vaccaro AR, Schroeder GD, Kepler CK, Cumhur Oner F, Vialle LR, Kandziora F, et al. The AO Spine Subaxial Cervical Spine Injury Classification System. Eur Spine J. 2016;25(7):2173-84.",
        "doi": "https://doi.org/10.1007/s00586-015-3929-4",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/25894565/"
      },
      {
        "num": 3,
        "text": "Vaccaro AR, Oner C, Kepler CK, Dvorak M, Fehlings M, Fisher C, et al. AOSpine thoracolumbar spine injury classification system: fracture description, neurological status, and key modifiers. Spine. 2013;38(23):2028-37.",
        "doi": "https://doi.org/10.1097/BRS.0b013e3182a8a381",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/23970107/"
      }
    ]
  },
  {
    "numero": 19,
    "secao_id": 3,
    "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
    "secao_nome_en": "Traumatic Spine Injuries",
    "secao_nome_es": "Lesiones Traumáticas de la Columna Vertebral",
    "titulo_pt": "Trauma Raquimedular",
    "autores": [
      {
        "nome": "Emiliano Neves Vialle",
        "slug": "emiliano-neves-vialle"
      },
      {
        "nome": "Mauricio Zanon",
        "slug": "mauricio-zanon"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 19: Trauma Raquimedular. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Vaccaro AR, Schroeder GD, Kepler CK, Cumhur Oner F, Vialle LR, Kandziora F, et al. The AO Spine Subaxial Cervical Spine Injury Classification System. Eur Spine J. 2016;25(7):2173-84.",
        "doi": "https://doi.org/10.1007/s00586-015-3929-4",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/25894565/"
      },
      {
        "num": 3,
        "text": "Vaccaro AR, Oner C, Kepler CK, Dvorak M, Fehlings M, Fisher C, et al. AOSpine thoracolumbar spine injury classification system: fracture description, neurological status, and key modifiers. Spine. 2013;38(23):2028-37.",
        "doi": "https://doi.org/10.1097/BRS.0b013e3182a8a381",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/23970107/"
      }
    ]
  },
  {
    "numero": 20,
    "secao_id": 3,
    "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
    "secao_nome_en": "Traumatic Spine Injuries",
    "secao_nome_es": "Lesiones Traumáticas de la Columna Vertebral",
    "titulo_pt": "Lesões Traumáticas da Coluna Cervical Alta",
    "autores": [
      {
        "nome": "André Rafael Hübner",
        "slug": "andre-rafael-hubner"
      },
      {
        "nome": "Igor Ebert Cechin",
        "slug": "igor-ebert-cechin"
      },
      {
        "nome": "Alvaro Diego Heredia Suarez",
        "slug": "alvaro-diego-heredia-suarez"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 20: Lesões Traumáticas da Coluna Cervical Alta. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Vaccaro AR, Schroeder GD, Kepler CK, Cumhur Oner F, Vialle LR, Kandziora F, et al. The AO Spine Subaxial Cervical Spine Injury Classification System. Eur Spine J. 2016;25(7):2173-84.",
        "doi": "https://doi.org/10.1007/s00586-015-3929-4",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/25894565/"
      },
      {
        "num": 3,
        "text": "Vaccaro AR, Oner C, Kepler CK, Dvorak M, Fehlings M, Fisher C, et al. AOSpine thoracolumbar spine injury classification system: fracture description, neurological status, and key modifiers. Spine. 2013;38(23):2028-37.",
        "doi": "https://doi.org/10.1097/BRS.0b013e3182a8a381",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/23970107/"
      }
    ]
  },
  {
    "numero": 21,
    "secao_id": 3,
    "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
    "secao_nome_en": "Traumatic Spine Injuries",
    "secao_nome_es": "Lesiones Traumáticas de la Columna Vertebral",
    "titulo_pt": "Lesões Traumáticas da Coluna Cervical Subaxial",
    "autores": [
      {
        "nome": "Edson Pudles",
        "slug": "edson-pudles"
      },
      {
        "nome": "Luiz Gustavo Dal’Oglio da Rocha",
        "slug": "luiz-gustavo-daloglio-da-rocha"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 21: Lesões Traumáticas da Coluna Cervical Subaxial. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Vaccaro AR, Schroeder GD, Kepler CK, Cumhur Oner F, Vialle LR, Kandziora F, et al. The AO Spine Subaxial Cervical Spine Injury Classification System. Eur Spine J. 2016;25(7):2173-84.",
        "doi": "https://doi.org/10.1007/s00586-015-3929-4",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/25894565/"
      },
      {
        "num": 3,
        "text": "Vaccaro AR, Oner C, Kepler CK, Dvorak M, Fehlings M, Fisher C, et al. AOSpine thoracolumbar spine injury classification system: fracture description, neurological status, and key modifiers. Spine. 2013;38(23):2028-37.",
        "doi": "https://doi.org/10.1097/BRS.0b013e3182a8a381",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/23970107/"
      }
    ]
  },
  {
    "numero": 22,
    "secao_id": 3,
    "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
    "secao_nome_en": "Traumatic Spine Injuries",
    "secao_nome_es": "Lesiones Traumáticas de la Columna Vertebral",
    "titulo_pt": "Lesões Traumáticas da Coluna Torácica e Lombar",
    "autores": [
      {
        "nome": "Alexandre Philippe Boss Jaccard",
        "slug": "alexandre-philippe-boss-jaccard"
      },
      {
        "nome": "Carlos Andres Amelunge Rodriguez",
        "slug": "carlos-andres-amelunge-rodriguez"
      },
      {
        "nome": "Matheus Boss Vieira",
        "slug": "matheus-boss-vieira"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 22: Lesões Traumáticas da Coluna Torácica e Lombar. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Vaccaro AR, Schroeder GD, Kepler CK, Cumhur Oner F, Vialle LR, Kandziora F, et al. The AO Spine Subaxial Cervical Spine Injury Classification System. Eur Spine J. 2016;25(7):2173-84.",
        "doi": "https://doi.org/10.1007/s00586-015-3929-4",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/25894565/"
      },
      {
        "num": 3,
        "text": "Vaccaro AR, Oner C, Kepler CK, Dvorak M, Fehlings M, Fisher C, et al. AOSpine thoracolumbar spine injury classification system: fracture description, neurological status, and key modifiers. Spine. 2013;38(23):2028-37.",
        "doi": "https://doi.org/10.1097/BRS.0b013e3182a8a381",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/23970107/"
      }
    ]
  },
  {
    "numero": 23,
    "secao_id": 3,
    "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
    "secao_nome_en": "Traumatic Spine Injuries",
    "secao_nome_es": "Lesiones Traumáticas de la Columna Vertebral",
    "titulo_pt": "Lesões Traumáticas do Sacro",
    "autores": [
      {
        "nome": "Luiz Gustavo Dal’Oglio da Rocha",
        "slug": "luiz-gustavo-daloglio-da-rocha"
      },
      {
        "nome": "Otávio Vitório Alvarenga Pereira",
        "slug": "otavio-vitorio-alvarenga-pereira"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 23: Lesões Traumáticas do Sacro. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Vaccaro AR, Schroeder GD, Kepler CK, Cumhur Oner F, Vialle LR, Kandziora F, et al. The AO Spine Subaxial Cervical Spine Injury Classification System. Eur Spine J. 2016;25(7):2173-84.",
        "doi": "https://doi.org/10.1007/s00586-015-3929-4",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/25894565/"
      },
      {
        "num": 3,
        "text": "Vaccaro AR, Oner C, Kepler CK, Dvorak M, Fehlings M, Fisher C, et al. AOSpine thoracolumbar spine injury classification system: fracture description, neurological status, and key modifiers. Spine. 2013;38(23):2028-37.",
        "doi": "https://doi.org/10.1097/BRS.0b013e3182a8a381",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/23970107/"
      }
    ]
  },
  {
    "numero": 24,
    "secao_id": 3,
    "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
    "secao_nome_en": "Traumatic Spine Injuries",
    "secao_nome_es": "Lesiones Traumáticas de la Columna Vertebral",
    "titulo_pt": "Lesões Traumáticas da Coluna na Infância",
    "autores": [
      {
        "nome": "Alexandre Fogaça Cristante",
        "slug": "alexandre-fogaca-cristante"
      },
      {
        "nome": "Matheus Trindade Bruxelas de Freitas",
        "slug": "matheus-trindade-bruxelas-de-freitas"
      },
      {
        "nome": "Caio César Nogueira de Figueiredo",
        "slug": "caio-cesar-nogueira-de-figueiredo"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 24: Lesões Traumáticas da Coluna na Infância. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Vaccaro AR, Schroeder GD, Kepler CK, Cumhur Oner F, Vialle LR, Kandziora F, et al. The AO Spine Subaxial Cervical Spine Injury Classification System. Eur Spine J. 2016;25(7):2173-84.",
        "doi": "https://doi.org/10.1007/s00586-015-3929-4",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/25894565/"
      },
      {
        "num": 3,
        "text": "Vaccaro AR, Oner C, Kepler CK, Dvorak M, Fehlings M, Fisher C, et al. AOSpine thoracolumbar spine injury classification system: fracture description, neurological status, and key modifiers. Spine. 2013;38(23):2028-37.",
        "doi": "https://doi.org/10.1097/BRS.0b013e3182a8a381",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/23970107/"
      }
    ]
  },
  {
    "numero": 25,
    "secao_id": 3,
    "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
    "secao_nome_en": "Traumatic Spine Injuries",
    "secao_nome_es": "Lesiones Traumáticas de la Columna Vertebral",
    "titulo_pt": "Fraturas Vertebrais por Insuficiência",
    "autores": [
      {
        "nome": "Xavier Soler Graells",
        "slug": "xavier-soler-graells"
      },
      {
        "nome": "Álynson Larocca Kulcheski",
        "slug": "alynson-larocca-kulcheski"
      },
      {
        "nome": "André Luís Sebben",
        "slug": "andre-luis-sebben"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 25: Fraturas Vertebrais por Insuficiência. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Vaccaro AR, Schroeder GD, Kepler CK, Cumhur Oner F, Vialle LR, Kandziora F, et al. The AO Spine Subaxial Cervical Spine Injury Classification System. Eur Spine J. 2016;25(7):2173-84.",
        "doi": "https://doi.org/10.1007/s00586-015-3929-4",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/25894565/"
      },
      {
        "num": 3,
        "text": "Vaccaro AR, Oner C, Kepler CK, Dvorak M, Fehlings M, Fisher C, et al. AOSpine thoracolumbar spine injury classification system: fracture description, neurological status, and key modifiers. Spine. 2013;38(23):2028-37.",
        "doi": "https://doi.org/10.1097/BRS.0b013e3182a8a381",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/23970107/"
      }
    ]
  },
  {
    "numero": 26,
    "secao_id": 3,
    "secao_nome": "Lesões Traumáticas da Coluna Vertebral",
    "secao_nome_en": "Traumatic Spine Injuries",
    "secao_nome_es": "Lesiones Traumáticas de la Columna Vertebral",
    "titulo_pt": "Deformidades Pós-Traumáticas",
    "autores": [
      {
        "nome": "Carlos Eduardo Gonçales Barsotti",
        "slug": "carlos-eduardo-goncales-barsotti"
      },
      {
        "nome": "Anderson Clayton Cardeal",
        "slug": "anderson-clayton-cardeal"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 26: Deformidades Pós-Traumáticas. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Vaccaro AR, Schroeder GD, Kepler CK, Cumhur Oner F, Vialle LR, Kandziora F, et al. The AO Spine Subaxial Cervical Spine Injury Classification System. Eur Spine J. 2016;25(7):2173-84.",
        "doi": "https://doi.org/10.1007/s00586-015-3929-4",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/25894565/"
      },
      {
        "num": 3,
        "text": "Vaccaro AR, Oner C, Kepler CK, Dvorak M, Fehlings M, Fisher C, et al. AOSpine thoracolumbar spine injury classification system: fracture description, neurological status, and key modifiers. Spine. 2013;38(23):2028-37.",
        "doi": "https://doi.org/10.1097/BRS.0b013e3182a8a381",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/23970107/"
      }
    ]
  },
  {
    "numero": 27,
    "secao_id": 4,
    "secao_nome": "Deformidades da Coluna Vertebral",
    "secao_nome_en": "Spinal Deformities",
    "secao_nome_es": "Deformidades de la Columna Vertebral",
    "titulo_pt": "Introdução às Deformidades da Coluna Vertebral",
    "autores": [
      {
        "nome": "Edson Pudles",
        "slug": "edson-pudles"
      },
      {
        "nome": "Helton Luiz Aparecido Defino",
        "slug": "helton-luiz-aparecido-defino"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 27: Introdução às Deformidades da Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Lenke LG, Betz RR, Harms J, Bridwell KH, Clements DH, Lowe TG, et al. Adolescent idiopathic scoliosis: a new classification to determine extent of spinal arthrodesis. J Bone Joint Surg Am. 2001;83(8):1169-81.",
        "doi": "https://doi.org/10.2106/00004623-200108000-00006",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11507125/"
      },
      {
        "num": 3,
        "text": "Schwab F, Ungar B, Blondel B, Buchowski J, Coe J, Deinlein D, et al. Scoliosis Research Society-Schwab adult spinal deformity classification: a validation study. Spine. 2012;37(12):1077-82.",
        "doi": "https://doi.org/10.1097/BRS.0b013e31823e15e2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22045006/"
      }
    ]
  },
  {
    "numero": 28,
    "secao_id": 4,
    "secao_nome": "Deformidades da Coluna Vertebral",
    "secao_nome_en": "Spinal Deformities",
    "secao_nome_es": "Deformidades de la Columna Vertebral",
    "titulo_pt": "Escoliose de Início Precoce",
    "autores": [
      {
        "nome": "Alexandre Fogaça Cristante",
        "slug": "alexandre-fogaca-cristante"
      },
      {
        "nome": "Santiago Alexis Naranjo Tipan",
        "slug": "santiago-alexis-naranjo-tipan"
      },
      {
        "nome": "Caio César Nogueira de Figueiredo",
        "slug": "caio-cesar-nogueira-de-figueiredo"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 28: Escoliose de Início Precoce. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Lenke LG, Betz RR, Harms J, Bridwell KH, Clements DH, Lowe TG, et al. Adolescent idiopathic scoliosis: a new classification to determine extent of spinal arthrodesis. J Bone Joint Surg Am. 2001;83(8):1169-81.",
        "doi": "https://doi.org/10.2106/00004623-200108000-00006",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11507125/"
      },
      {
        "num": 3,
        "text": "Schwab F, Ungar B, Blondel B, Buchowski J, Coe J, Deinlein D, et al. Scoliosis Research Society-Schwab adult spinal deformity classification: a validation study. Spine. 2012;37(12):1077-82.",
        "doi": "https://doi.org/10.1097/BRS.0b013e31823e15e2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22045006/"
      }
    ]
  },
  {
    "numero": 29,
    "secao_id": 4,
    "secao_nome": "Deformidades da Coluna Vertebral",
    "secao_nome_en": "Spinal Deformities",
    "secao_nome_es": "Deformidades de la Columna Vertebral",
    "titulo_pt": "Tratamento Não Cirúrgico das Escolioses",
    "autores": [
      {
        "nome": "Túlio Albuquerque de Moura Rangel",
        "slug": "tulio-albuquerque-de-moura-rangel"
      },
      {
        "nome": "André Flávio Freire Pereira",
        "slug": "andre-flavio-freire-pereira"
      },
      {
        "nome": "Marcelo Paulo Melo de Souza",
        "slug": "marcelo-paulo-melo-de-souza"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 29: Tratamento Não Cirúrgico das Escolioses. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Lenke LG, Betz RR, Harms J, Bridwell KH, Clements DH, Lowe TG, et al. Adolescent idiopathic scoliosis: a new classification to determine extent of spinal arthrodesis. J Bone Joint Surg Am. 2001;83(8):1169-81.",
        "doi": "https://doi.org/10.2106/00004623-200108000-00006",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11507125/"
      },
      {
        "num": 3,
        "text": "Schwab F, Ungar B, Blondel B, Buchowski J, Coe J, Deinlein D, et al. Scoliosis Research Society-Schwab adult spinal deformity classification: a validation study. Spine. 2012;37(12):1077-82.",
        "doi": "https://doi.org/10.1097/BRS.0b013e31823e15e2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22045006/"
      }
    ]
  },
  {
    "numero": 30,
    "secao_id": 4,
    "secao_nome": "Deformidades da Coluna Vertebral",
    "secao_nome_en": "Spinal Deformities",
    "secao_nome_es": "Deformidades de la Columna Vertebral",
    "titulo_pt": "Escoliose Neuromuscular",
    "autores": [
      {
        "nome": "Carlos Abreu de Aguiar",
        "slug": "carlos-abreu-de-aguiar"
      },
      {
        "nome": "Luca Erdmann Bini Cordeiro",
        "slug": "luca-erdmann-bini-cordeiro"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 30: Escoliose Neuromuscular. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Lenke LG, Betz RR, Harms J, Bridwell KH, Clements DH, Lowe TG, et al. Adolescent idiopathic scoliosis: a new classification to determine extent of spinal arthrodesis. J Bone Joint Surg Am. 2001;83(8):1169-81.",
        "doi": "https://doi.org/10.2106/00004623-200108000-00006",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11507125/"
      },
      {
        "num": 3,
        "text": "Schwab F, Ungar B, Blondel B, Buchowski J, Coe J, Deinlein D, et al. Scoliosis Research Society-Schwab adult spinal deformity classification: a validation study. Spine. 2012;37(12):1077-82.",
        "doi": "https://doi.org/10.1097/BRS.0b013e31823e15e2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22045006/"
      }
    ]
  },
  {
    "numero": 31,
    "secao_id": 4,
    "secao_nome": "Deformidades da Coluna Vertebral",
    "secao_nome_en": "Spinal Deformities",
    "secao_nome_es": "Deformidades de la Columna Vertebral",
    "titulo_pt": "Deformidades nos Disrafismos Espinhais",
    "autores": [
      {
        "nome": "Paulo Tadeu Maia Cavali",
        "slug": "paulo-tadeu-maia-cavali"
      },
      {
        "nome": "Mauricio Coelho Lima",
        "slug": "mauricio-coelho-lima"
      },
      {
        "nome": "Alexander Junqueira Rossato",
        "slug": "alexander-junqueira-rossato"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 31: Deformidades nos Disrafismos Espinhais. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Lenke LG, Betz RR, Harms J, Bridwell KH, Clements DH, Lowe TG, et al. Adolescent idiopathic scoliosis: a new classification to determine extent of spinal arthrodesis. J Bone Joint Surg Am. 2001;83(8):1169-81.",
        "doi": "https://doi.org/10.2106/00004623-200108000-00006",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11507125/"
      },
      {
        "num": 3,
        "text": "Schwab F, Ungar B, Blondel B, Buchowski J, Coe J, Deinlein D, et al. Scoliosis Research Society-Schwab adult spinal deformity classification: a validation study. Spine. 2012;37(12):1077-82.",
        "doi": "https://doi.org/10.1097/BRS.0b013e31823e15e2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22045006/"
      }
    ]
  },
  {
    "numero": 32,
    "secao_id": 4,
    "secao_nome": "Deformidades da Coluna Vertebral",
    "secao_nome_en": "Spinal Deformities",
    "secao_nome_es": "Deformidades de la Columna Vertebral",
    "titulo_pt": "Escoliose na Neurofibromatose",
    "autores": [
      {
        "nome": "Luís Eduardo Munhoz Da Rocha",
        "slug": "luis-eduardo-munhoz-da-rocha"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 32: Escoliose na Neurofibromatose. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Lenke LG, Betz RR, Harms J, Bridwell KH, Clements DH, Lowe TG, et al. Adolescent idiopathic scoliosis: a new classification to determine extent of spinal arthrodesis. J Bone Joint Surg Am. 2001;83(8):1169-81.",
        "doi": "https://doi.org/10.2106/00004623-200108000-00006",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11507125/"
      },
      {
        "num": 3,
        "text": "Schwab F, Ungar B, Blondel B, Buchowski J, Coe J, Deinlein D, et al. Scoliosis Research Society-Schwab adult spinal deformity classification: a validation study. Spine. 2012;37(12):1077-82.",
        "doi": "https://doi.org/10.1097/BRS.0b013e31823e15e2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22045006/"
      }
    ]
  },
  {
    "numero": 33,
    "secao_id": 4,
    "secao_nome": "Deformidades da Coluna Vertebral",
    "secao_nome_en": "Spinal Deformities",
    "secao_nome_es": "Deformidades de la Columna Vertebral",
    "titulo_pt": "Deformidades Congênitas da Coluna Vertebral",
    "autores": [
      {
        "nome": "Luiz Müller Avila",
        "slug": "luiz-muller-avila"
      },
      {
        "nome": "Carlos Abreu de Aguiar",
        "slug": "carlos-abreu-de-aguiar"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 33: Deformidades Congênitas da Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Lenke LG, Betz RR, Harms J, Bridwell KH, Clements DH, Lowe TG, et al. Adolescent idiopathic scoliosis: a new classification to determine extent of spinal arthrodesis. J Bone Joint Surg Am. 2001;83(8):1169-81.",
        "doi": "https://doi.org/10.2106/00004623-200108000-00006",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11507125/"
      },
      {
        "num": 3,
        "text": "Schwab F, Ungar B, Blondel B, Buchowski J, Coe J, Deinlein D, et al. Scoliosis Research Society-Schwab adult spinal deformity classification: a validation study. Spine. 2012;37(12):1077-82.",
        "doi": "https://doi.org/10.1097/BRS.0b013e31823e15e2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22045006/"
      }
    ]
  },
  {
    "numero": 34,
    "secao_id": 4,
    "secao_nome": "Deformidades da Coluna Vertebral",
    "secao_nome_en": "Spinal Deformities",
    "secao_nome_es": "Deformidades de la Columna Vertebral",
    "titulo_pt": "Escoliose Idiopática",
    "autores": [
      {
        "nome": "Helton Luiz Aparecido Defino",
        "slug": "helton-luiz-aparecido-defino"
      },
      {
        "nome": "Matheus Pippa Defino",
        "slug": "matheus-pippa-defino"
      },
      {
        "nome": "Rian Souza Vieira",
        "slug": "rian-souza-vieira"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 34: Escoliose Idiopática. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Lenke LG, Betz RR, Harms J, Bridwell KH, Clements DH, Lowe TG, et al. Adolescent idiopathic scoliosis: a new classification to determine extent of spinal arthrodesis. J Bone Joint Surg Am. 2001;83(8):1169-81.",
        "doi": "https://doi.org/10.2106/00004623-200108000-00006",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11507125/"
      },
      {
        "num": 3,
        "text": "Schwab F, Ungar B, Blondel B, Buchowski J, Coe J, Deinlein D, et al. Scoliosis Research Society-Schwab adult spinal deformity classification: a validation study. Spine. 2012;37(12):1077-82.",
        "doi": "https://doi.org/10.1097/BRS.0b013e31823e15e2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22045006/"
      }
    ]
  },
  {
    "numero": 35,
    "secao_id": 4,
    "secao_nome": "Deformidades da Coluna Vertebral",
    "secao_nome_en": "Spinal Deformities",
    "secao_nome_es": "Deformidades de la Columna Vertebral",
    "titulo_pt": "Escoliose do Adulto",
    "autores": [
      {
        "nome": "Alexandre Fogaça Cristante",
        "slug": "alexandre-fogaca-cristante"
      },
      {
        "nome": "Vinícius Antônio Santos Aragão",
        "slug": "vinicius-antonio-santos-aragao"
      },
      {
        "nome": "Daniel Duarte Perini",
        "slug": "daniel-duarte-perini"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 35: Escoliose do Adulto. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Lenke LG, Betz RR, Harms J, Bridwell KH, Clements DH, Lowe TG, et al. Adolescent idiopathic scoliosis: a new classification to determine extent of spinal arthrodesis. J Bone Joint Surg Am. 2001;83(8):1169-81.",
        "doi": "https://doi.org/10.2106/00004623-200108000-00006",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11507125/"
      },
      {
        "num": 3,
        "text": "Schwab F, Ungar B, Blondel B, Buchowski J, Coe J, Deinlein D, et al. Scoliosis Research Society-Schwab adult spinal deformity classification: a validation study. Spine. 2012;37(12):1077-82.",
        "doi": "https://doi.org/10.1097/BRS.0b013e31823e15e2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22045006/"
      }
    ]
  },
  {
    "numero": 36,
    "secao_id": 4,
    "secao_nome": "Deformidades da Coluna Vertebral",
    "secao_nome_en": "Spinal Deformities",
    "secao_nome_es": "Deformidades de la Columna Vertebral",
    "titulo_pt": "Escoliose nas Síndromes Genéticas",
    "autores": [
      {
        "nome": "Olavo Biraghi Letaif",
        "slug": "olavo-biraghi-letaif"
      },
      {
        "nome": "Vinícius Antônio Santos Aragão",
        "slug": "vinicius-antonio-santos-aragao"
      },
      {
        "nome": "Débora Yumi Yoshimura Orlandin Alves",
        "slug": "debora-yumi-yoshimura-orlandin-alves"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 36: Escoliose nas Síndromes Genéticas. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Lenke LG, Betz RR, Harms J, Bridwell KH, Clements DH, Lowe TG, et al. Adolescent idiopathic scoliosis: a new classification to determine extent of spinal arthrodesis. J Bone Joint Surg Am. 2001;83(8):1169-81.",
        "doi": "https://doi.org/10.2106/00004623-200108000-00006",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11507125/"
      },
      {
        "num": 3,
        "text": "Schwab F, Ungar B, Blondel B, Buchowski J, Coe J, Deinlein D, et al. Scoliosis Research Society-Schwab adult spinal deformity classification: a validation study. Spine. 2012;37(12):1077-82.",
        "doi": "https://doi.org/10.1097/BRS.0b013e31823e15e2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22045006/"
      }
    ]
  },
  {
    "numero": 37,
    "secao_id": 4,
    "secao_nome": "Deformidades da Coluna Vertebral",
    "secao_nome_en": "Spinal Deformities",
    "secao_nome_es": "Deformidades de la Columna Vertebral",
    "titulo_pt": "Escoliose Idiopática de Alto Valor Angular",
    "autores": [
      {
        "nome": "Alderico Girão Campos de Barros",
        "slug": "alderico-girao-campos-de-barros"
      },
      {
        "nome": "Luis Eduardo Carelli",
        "slug": "luis-eduardo-carelli"
      },
      {
        "nome": "Giancarlo Jorio Almeida",
        "slug": "giancarlo-jorio-almeida"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 37: Escoliose Idiopática de Alto Valor Angular. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Lenke LG, Betz RR, Harms J, Bridwell KH, Clements DH, Lowe TG, et al. Adolescent idiopathic scoliosis: a new classification to determine extent of spinal arthrodesis. J Bone Joint Surg Am. 2001;83(8):1169-81.",
        "doi": "https://doi.org/10.2106/00004623-200108000-00006",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11507125/"
      },
      {
        "num": 3,
        "text": "Schwab F, Ungar B, Blondel B, Buchowski J, Coe J, Deinlein D, et al. Scoliosis Research Society-Schwab adult spinal deformity classification: a validation study. Spine. 2012;37(12):1077-82.",
        "doi": "https://doi.org/10.1097/BRS.0b013e31823e15e2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22045006/"
      }
    ]
  },
  {
    "numero": 38,
    "secao_id": 4,
    "secao_nome": "Deformidades da Coluna Vertebral",
    "secao_nome_en": "Spinal Deformities",
    "secao_nome_es": "Deformidades de la Columna Vertebral",
    "titulo_pt": "Espondilolistese na Criança",
    "autores": [
      {
        "nome": "André Luis Fernandes Andujar",
        "slug": "andre-luis-fernandes-andujar"
      },
      {
        "nome": "Rodrigo dos Santos Grandini",
        "slug": "rodrigo-dos-santos-grandini"
      },
      {
        "nome": "Henrique Dagostin de Arjona",
        "slug": "henrique-dagostin-de-arjona"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 38: Espondilolistese na Criança. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Lenke LG, Betz RR, Harms J, Bridwell KH, Clements DH, Lowe TG, et al. Adolescent idiopathic scoliosis: a new classification to determine extent of spinal arthrodesis. J Bone Joint Surg Am. 2001;83(8):1169-81.",
        "doi": "https://doi.org/10.2106/00004623-200108000-00006",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11507125/"
      },
      {
        "num": 3,
        "text": "Schwab F, Ungar B, Blondel B, Buchowski J, Coe J, Deinlein D, et al. Scoliosis Research Society-Schwab adult spinal deformity classification: a validation study. Spine. 2012;37(12):1077-82.",
        "doi": "https://doi.org/10.1097/BRS.0b013e31823e15e2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22045006/"
      }
    ]
  },
  {
    "numero": 39,
    "secao_id": 4,
    "secao_nome": "Deformidades da Coluna Vertebral",
    "secao_nome_en": "Spinal Deformities",
    "secao_nome_es": "Deformidades de la Columna Vertebral",
    "titulo_pt": "Espondilolistese no Adulto",
    "autores": [
      {
        "nome": "Rodrigo Amaral",
        "slug": "rodrigo-amaral"
      },
      {
        "nome": "Jullyene Pokorny",
        "slug": "jullyene-pokorny"
      },
      {
        "nome": "Gabriel Pokorny",
        "slug": "gabriel-pokorny"
      },
      {
        "nome": "Fernando Toni Marcelino da Silva",
        "slug": "fernando-toni-marcelino-da-silva"
      },
      {
        "nome": "Rafael Moriguchi",
        "slug": "rafael-moriguchi"
      },
      {
        "nome": "Igor Barreira Magro",
        "slug": "igor-barreira-magro"
      },
      {
        "nome": "Luiz Pimenta",
        "slug": "luiz-pimenta"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 39: Espondilolistese no Adulto. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Lenke LG, Betz RR, Harms J, Bridwell KH, Clements DH, Lowe TG, et al. Adolescent idiopathic scoliosis: a new classification to determine extent of spinal arthrodesis. J Bone Joint Surg Am. 2001;83(8):1169-81.",
        "doi": "https://doi.org/10.2106/00004623-200108000-00006",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11507125/"
      },
      {
        "num": 3,
        "text": "Schwab F, Ungar B, Blondel B, Buchowski J, Coe J, Deinlein D, et al. Scoliosis Research Society-Schwab adult spinal deformity classification: a validation study. Spine. 2012;37(12):1077-82.",
        "doi": "https://doi.org/10.1097/BRS.0b013e31823e15e2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22045006/"
      }
    ]
  },
  {
    "numero": 40,
    "secao_id": 4,
    "secao_nome": "Deformidades da Coluna Vertebral",
    "secao_nome_en": "Spinal Deformities",
    "secao_nome_es": "Deformidades de la Columna Vertebral",
    "titulo_pt": "Cifose",
    "autores": [
      {
        "nome": "Helton Luiz Aparecido Defino",
        "slug": "helton-luiz-aparecido-defino"
      },
      {
        "nome": "Matheus Pippa Defino",
        "slug": "matheus-pippa-defino"
      },
      {
        "nome": "Rian Souza Vieira",
        "slug": "rian-souza-vieira"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 40: Cifose. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Lenke LG, Betz RR, Harms J, Bridwell KH, Clements DH, Lowe TG, et al. Adolescent idiopathic scoliosis: a new classification to determine extent of spinal arthrodesis. J Bone Joint Surg Am. 2001;83(8):1169-81.",
        "doi": "https://doi.org/10.2106/00004623-200108000-00006",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11507125/"
      },
      {
        "num": 3,
        "text": "Schwab F, Ungar B, Blondel B, Buchowski J, Coe J, Deinlein D, et al. Scoliosis Research Society-Schwab adult spinal deformity classification: a validation study. Spine. 2012;37(12):1077-82.",
        "doi": "https://doi.org/10.1097/BRS.0b013e31823e15e2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22045006/"
      }
    ]
  },
  {
    "numero": 41,
    "secao_id": 4,
    "secao_nome": "Deformidades da Coluna Vertebral",
    "secao_nome_en": "Spinal Deformities",
    "secao_nome_es": "Deformidades de la Columna Vertebral",
    "titulo_pt": "Deformidades da Coluna Cervical",
    "autores": [
      {
        "nome": "Luis Eduardo Carelli",
        "slug": "luis-eduardo-carelli"
      },
      {
        "nome": "Alderico Girão Campos de Barros",
        "slug": "alderico-girao-campos-de-barros"
      },
      {
        "nome": "Lucas Gomes Pupp",
        "slug": "lucas-gomes-pupp"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 41: Deformidades da Coluna Cervical. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Lenke LG, Betz RR, Harms J, Bridwell KH, Clements DH, Lowe TG, et al. Adolescent idiopathic scoliosis: a new classification to determine extent of spinal arthrodesis. J Bone Joint Surg Am. 2001;83(8):1169-81.",
        "doi": "https://doi.org/10.2106/00004623-200108000-00006",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11507125/"
      },
      {
        "num": 3,
        "text": "Schwab F, Ungar B, Blondel B, Buchowski J, Coe J, Deinlein D, et al. Scoliosis Research Society-Schwab adult spinal deformity classification: a validation study. Spine. 2012;37(12):1077-82.",
        "doi": "https://doi.org/10.1097/BRS.0b013e31823e15e2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22045006/"
      }
    ]
  },
  {
    "numero": 42,
    "secao_id": 5,
    "secao_nome": "Doenças Degenerativas",
    "secao_nome_en": "Degenerative Diseases",
    "secao_nome_es": "Enfermedades Degenerativas",
    "titulo_pt": "Fisiopatologia da Degeneração Discal",
    "autores": [
      {
        "nome": "Orlando Righesso Neto",
        "slug": "orlando-righesso-neto"
      },
      {
        "nome": "Asdrubal Falavigna",
        "slug": "asdrubal-falavigna"
      },
      {
        "nome": "Vincenzo Fin Falavigna",
        "slug": "vincenzo-fin-falavigna"
      },
      {
        "nome": "Maria Eduarda Lima Viapiana",
        "slug": "maria-eduarda-lima-viapiana"
      },
      {
        "nome": "Enzo Pasetto Righesso",
        "slug": "enzo-pasetto-righesso"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 42: Fisiopatologia da Degeneração Discal. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Weinstein JN, Tosteson TD, Lurie JD, Tosteson AN, Blood E, Hanscom B, et al. Surgical vs nonoperative treatment for lumbar disk herniation: the Spine Patient Outcomes Research Trial (SPORT): a randomized trial. JAMA. 2006;296(20):2441-50.",
        "doi": "https://doi.org/10.1001/jama.296.20.2441",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/17119140/"
      },
      {
        "num": 3,
        "text": "Fehlings MG, Wilson JR, Kopjar B, Yoon ST, Arnold PM, Massicotte EM, et al. Efficacy and safety of surgical decompression in patients with cervical spondylotic myelopathy: results of the AOSpine North America prospective multi-center study. J Bone Joint Surg Am. 2013;95(24):2177-85.",
        "doi": "https://doi.org/10.2106/JBJS.M.00008",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/24352771/"
      }
    ]
  },
  {
    "numero": 43,
    "secao_id": 5,
    "secao_nome": "Doenças Degenerativas",
    "secao_nome_en": "Degenerative Diseases",
    "secao_nome_es": "Enfermedades Degenerativas",
    "titulo_pt": "Hérnia de Disco Cervical",
    "autores": [
      {
        "nome": "Aluízio Augusto Arantes Junior",
        "slug": "aluizio-augusto-arantes-junior"
      },
      {
        "nome": "Bernardo Drummond Braga",
        "slug": "bernardo-drummond-braga"
      },
      {
        "nome": "Diogo Nogueira Ribeiro",
        "slug": "diogo-nogueira-ribeiro"
      },
      {
        "nome": "Adriano M. Lino Filho",
        "slug": "adriano-m-lino-filho"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 43: Hérnia de Disco Cervical. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Weinstein JN, Tosteson TD, Lurie JD, Tosteson AN, Blood E, Hanscom B, et al. Surgical vs nonoperative treatment for lumbar disk herniation: the Spine Patient Outcomes Research Trial (SPORT): a randomized trial. JAMA. 2006;296(20):2441-50.",
        "doi": "https://doi.org/10.1001/jama.296.20.2441",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/17119140/"
      },
      {
        "num": 3,
        "text": "Fehlings MG, Wilson JR, Kopjar B, Yoon ST, Arnold PM, Massicotte EM, et al. Efficacy and safety of surgical decompression in patients with cervical spondylotic myelopathy: results of the AOSpine North America prospective multi-center study. J Bone Joint Surg Am. 2013;95(24):2177-85.",
        "doi": "https://doi.org/10.2106/JBJS.M.00008",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/24352771/"
      }
    ]
  },
  {
    "numero": 44,
    "secao_id": 5,
    "secao_nome": "Doenças Degenerativas",
    "secao_nome_en": "Degenerative Diseases",
    "secao_nome_es": "Enfermedades Degenerativas",
    "titulo_pt": "Hérnia de Disco Torácica",
    "autores": [
      {
        "nome": "Murilo Tavares Daher",
        "slug": "murilo-tavares-daher"
      },
      {
        "nome": "Luna Jeannie Alves Mangueira",
        "slug": "luna-jeannie-alves-mangueira"
      },
      {
        "nome": "Fernando Balsimelli",
        "slug": "fernando-balsimelli"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 44: Hérnia de Disco Torácica. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Weinstein JN, Tosteson TD, Lurie JD, Tosteson AN, Blood E, Hanscom B, et al. Surgical vs nonoperative treatment for lumbar disk herniation: the Spine Patient Outcomes Research Trial (SPORT): a randomized trial. JAMA. 2006;296(20):2441-50.",
        "doi": "https://doi.org/10.1001/jama.296.20.2441",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/17119140/"
      },
      {
        "num": 3,
        "text": "Fehlings MG, Wilson JR, Kopjar B, Yoon ST, Arnold PM, Massicotte EM, et al. Efficacy and safety of surgical decompression in patients with cervical spondylotic myelopathy: results of the AOSpine North America prospective multi-center study. J Bone Joint Surg Am. 2013;95(24):2177-85.",
        "doi": "https://doi.org/10.2106/JBJS.M.00008",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/24352771/"
      }
    ]
  },
  {
    "numero": 45,
    "secao_id": 5,
    "secao_nome": "Doenças Degenerativas",
    "secao_nome_en": "Degenerative Diseases",
    "secao_nome_es": "Enfermedades Degenerativas",
    "titulo_pt": "Hérnia de Disco Lombar",
    "autores": [
      {
        "nome": "Renato Hiroshi Salvioni Ueta",
        "slug": "renato-hiroshi-salvioni-ueta"
      },
      {
        "nome": "Tiago Ferreira Jorge",
        "slug": "tiago-ferreira-jorge"
      },
      {
        "nome": "Victor Cavalcante Schussel",
        "slug": "victor-cavalcante-schussel"
      },
      {
        "nome": "Gabriela Neves Vaz",
        "slug": "gabriela-neves-vaz"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 45: Hérnia de Disco Lombar. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Weinstein JN, Tosteson TD, Lurie JD, Tosteson AN, Blood E, Hanscom B, et al. Surgical vs nonoperative treatment for lumbar disk herniation: the Spine Patient Outcomes Research Trial (SPORT): a randomized trial. JAMA. 2006;296(20):2441-50.",
        "doi": "https://doi.org/10.1001/jama.296.20.2441",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/17119140/"
      },
      {
        "num": 3,
        "text": "Fehlings MG, Wilson JR, Kopjar B, Yoon ST, Arnold PM, Massicotte EM, et al. Efficacy and safety of surgical decompression in patients with cervical spondylotic myelopathy: results of the AOSpine North America prospective multi-center study. J Bone Joint Surg Am. 2013;95(24):2177-85.",
        "doi": "https://doi.org/10.2106/JBJS.M.00008",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/24352771/"
      }
    ]
  },
  {
    "numero": 46,
    "secao_id": 5,
    "secao_nome": "Doenças Degenerativas",
    "secao_nome_en": "Degenerative Diseases",
    "secao_nome_es": "Enfermedades Degenerativas",
    "titulo_pt": "Estenose Lombar: Diagnóstico e Manejo Contemporâneo",
    "autores": [
      {
        "nome": "Robert Meves",
        "slug": "robert-meves"
      },
      {
        "nome": "Rodrigo Góes Medéa de Mendonça",
        "slug": "rodrigo-goes-medea-de-mendonca"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 46: Estenose Lombar: Diagnóstico e Manejo Contemporâneo. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Weinstein JN, Tosteson TD, Lurie JD, Tosteson AN, Blood E, Hanscom B, et al. Surgical vs nonoperative treatment for lumbar disk herniation: the Spine Patient Outcomes Research Trial (SPORT): a randomized trial. JAMA. 2006;296(20):2441-50.",
        "doi": "https://doi.org/10.1001/jama.296.20.2441",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/17119140/"
      },
      {
        "num": 3,
        "text": "Fehlings MG, Wilson JR, Kopjar B, Yoon ST, Arnold PM, Massicotte EM, et al. Efficacy and safety of surgical decompression in patients with cervical spondylotic myelopathy: results of the AOSpine North America prospective multi-center study. J Bone Joint Surg Am. 2013;95(24):2177-85.",
        "doi": "https://doi.org/10.2106/JBJS.M.00008",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/24352771/"
      }
    ]
  },
  {
    "numero": 47,
    "secao_id": 5,
    "secao_nome": "Doenças Degenerativas",
    "secao_nome_en": "Degenerative Diseases",
    "secao_nome_es": "Enfermedades Degenerativas",
    "titulo_pt": "Instabilidade Vertebral",
    "autores": [
      {
        "nome": "Edson Pudles",
        "slug": "edson-pudles"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 47: Instabilidade Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Weinstein JN, Tosteson TD, Lurie JD, Tosteson AN, Blood E, Hanscom B, et al. Surgical vs nonoperative treatment for lumbar disk herniation: the Spine Patient Outcomes Research Trial (SPORT): a randomized trial. JAMA. 2006;296(20):2441-50.",
        "doi": "https://doi.org/10.1001/jama.296.20.2441",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/17119140/"
      },
      {
        "num": 3,
        "text": "Fehlings MG, Wilson JR, Kopjar B, Yoon ST, Arnold PM, Massicotte EM, et al. Efficacy and safety of surgical decompression in patients with cervical spondylotic myelopathy: results of the AOSpine North America prospective multi-center study. J Bone Joint Surg Am. 2013;95(24):2177-85.",
        "doi": "https://doi.org/10.2106/JBJS.M.00008",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/24352771/"
      }
    ]
  },
  {
    "numero": 48,
    "secao_id": 5,
    "secao_nome": "Doenças Degenerativas",
    "secao_nome_en": "Degenerative Diseases",
    "secao_nome_es": "Enfermedades Degenerativas",
    "titulo_pt": "Estenose Cervical, Mielopatia Cervical Degenerativa e Ossificação do Ligamento Longitudinal Posterior",
    "autores": [
      {
        "nome": "Fernando Luiz Rolemberg Dantas",
        "slug": "fernando-luiz-rolemberg-dantas"
      },
      {
        "nome": "François Dantas",
        "slug": "francois-dantas"
      },
      {
        "nome": "Victor Kelles Tupy da Fonseca",
        "slug": "victor-kelles-tupy-da-fonseca"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 48: Estenose Cervical, Mielopatia Cervical Degenerativa e Ossificação do Ligamento Longitudinal Posterior. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Weinstein JN, Tosteson TD, Lurie JD, Tosteson AN, Blood E, Hanscom B, et al. Surgical vs nonoperative treatment for lumbar disk herniation: the Spine Patient Outcomes Research Trial (SPORT): a randomized trial. JAMA. 2006;296(20):2441-50.",
        "doi": "https://doi.org/10.1001/jama.296.20.2441",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/17119140/"
      },
      {
        "num": 3,
        "text": "Fehlings MG, Wilson JR, Kopjar B, Yoon ST, Arnold PM, Massicotte EM, et al. Efficacy and safety of surgical decompression in patients with cervical spondylotic myelopathy: results of the AOSpine North America prospective multi-center study. J Bone Joint Surg Am. 2013;95(24):2177-85.",
        "doi": "https://doi.org/10.2106/JBJS.M.00008",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/24352771/"
      }
    ]
  },
  {
    "numero": 49,
    "secao_id": 5,
    "secao_nome": "Doenças Degenerativas",
    "secao_nome_en": "Degenerative Diseases",
    "secao_nome_es": "Enfermedades Degenerativas",
    "titulo_pt": "Infiltrações e Radiofrequência na Coluna Vertebral",
    "autores": [
      {
        "nome": "Sylvio Mistro Neto",
        "slug": "sylvio-mistro-neto"
      },
      {
        "nome": "Marcelo Italo Risso Neto",
        "slug": "marcelo-italo-risso-neto"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 49: Infiltrações e Radiofrequência na Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Weinstein JN, Tosteson TD, Lurie JD, Tosteson AN, Blood E, Hanscom B, et al. Surgical vs nonoperative treatment for lumbar disk herniation: the Spine Patient Outcomes Research Trial (SPORT): a randomized trial. JAMA. 2006;296(20):2441-50.",
        "doi": "https://doi.org/10.1001/jama.296.20.2441",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/17119140/"
      },
      {
        "num": 3,
        "text": "Fehlings MG, Wilson JR, Kopjar B, Yoon ST, Arnold PM, Massicotte EM, et al. Efficacy and safety of surgical decompression in patients with cervical spondylotic myelopathy: results of the AOSpine North America prospective multi-center study. J Bone Joint Surg Am. 2013;95(24):2177-85.",
        "doi": "https://doi.org/10.2106/JBJS.M.00008",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/24352771/"
      }
    ]
  },
  {
    "numero": 50,
    "secao_id": 5,
    "secao_nome": "Doenças Degenerativas",
    "secao_nome_en": "Degenerative Diseases",
    "secao_nome_es": "Enfermedades Degenerativas",
    "titulo_pt": "Medicina Regenerativa no Manejo da Doença Degenerativa da Coluna",
    "autores": [
      {
        "nome": "Edilson Silva Machado",
        "slug": "edilson-silva-machado"
      },
      {
        "nome": "Robert Meves",
        "slug": "robert-meves"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 50: Medicina Regenerativa no Manejo da Doença Degenerativa da Coluna. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Weinstein JN, Tosteson TD, Lurie JD, Tosteson AN, Blood E, Hanscom B, et al. Surgical vs nonoperative treatment for lumbar disk herniation: the Spine Patient Outcomes Research Trial (SPORT): a randomized trial. JAMA. 2006;296(20):2441-50.",
        "doi": "https://doi.org/10.1001/jama.296.20.2441",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/17119140/"
      },
      {
        "num": 3,
        "text": "Fehlings MG, Wilson JR, Kopjar B, Yoon ST, Arnold PM, Massicotte EM, et al. Efficacy and safety of surgical decompression in patients with cervical spondylotic myelopathy: results of the AOSpine North America prospective multi-center study. J Bone Joint Surg Am. 2013;95(24):2177-85.",
        "doi": "https://doi.org/10.2106/JBJS.M.00008",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/24352771/"
      }
    ]
  },
  {
    "numero": 51,
    "secao_id": 6,
    "secao_nome": "Tumores na Coluna Vertebral",
    "secao_nome_en": "Spine Tumors",
    "secao_nome_es": "Tumores en la Columna Vertebral",
    "titulo_pt": "Princípios no Manejo das Neoplasias da Coluna Vertebral",
    "autores": [
      {
        "nome": "Marcelo Italo Risso Neto",
        "slug": "marcelo-italo-risso-neto"
      },
      {
        "nome": "Guilherme Rebechi Zuiani",
        "slug": "guilherme-rebechi-zuiani"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 51: Princípios no Manejo das Neoplasias da Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Fisher CG, DiPaola CP, Ryken TC, Bilsky MH, Shaffrey CI, Berven SH, et al. A novel classification system for spinal instability in neoplastic disease: an evidence-based approach and expert consensus from the Spine Oncology Study Group. Spine. 2010;35(19):E1221-9.",
        "doi": "https://doi.org/10.1097/BRS.0b013e3181e16ae2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/20802377/"
      },
      {
        "num": 3,
        "text": "Bilsky MH, Laufer I, Fourney DR, Groff M, Schmidt MH, Varga PP, et al. Reliability analysis of the Epidural Spinal Cord Compression Scale. J Neurosurg Spine. 2010;13(3):324-8.",
        "doi": "https://doi.org/10.3171/2010.3.SPINE09459",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/20809724/"
      }
    ]
  },
  {
    "numero": 52,
    "secao_id": 6,
    "secao_nome": "Tumores na Coluna Vertebral",
    "secao_nome_en": "Spine Tumors",
    "secao_nome_es": "Tumores en la Columna Vertebral",
    "titulo_pt": "Instabilidade Vertebral em Neoplasia de Coluna",
    "autores": [
      {
        "nome": "Luiz Roberto Gomes Vialle",
        "slug": "luiz-roberto-gomes-vialle"
      },
      {
        "nome": "Otávio Vitório Alvarenga Pereira",
        "slug": "otavio-vitorio-alvarenga-pereira"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 52: Instabilidade Vertebral em Neoplasia de Coluna. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Fisher CG, DiPaola CP, Ryken TC, Bilsky MH, Shaffrey CI, Berven SH, et al. A novel classification system for spinal instability in neoplastic disease: an evidence-based approach and expert consensus from the Spine Oncology Study Group. Spine. 2010;35(19):E1221-9.",
        "doi": "https://doi.org/10.1097/BRS.0b013e3181e16ae2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/20802377/"
      },
      {
        "num": 3,
        "text": "Bilsky MH, Laufer I, Fourney DR, Groff M, Schmidt MH, Varga PP, et al. Reliability analysis of the Epidural Spinal Cord Compression Scale. J Neurosurg Spine. 2010;13(3):324-8.",
        "doi": "https://doi.org/10.3171/2010.3.SPINE09459",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/20809724/"
      }
    ]
  },
  {
    "numero": 53,
    "secao_id": 6,
    "secao_nome": "Tumores na Coluna Vertebral",
    "secao_nome_en": "Spine Tumors",
    "secao_nome_es": "Tumores en la Columna Vertebral",
    "titulo_pt": "Tumores Benignos e Lesões Pseudotumorais da Coluna",
    "autores": [
      {
        "nome": "Alderico Girão Campos de Barros",
        "slug": "alderico-girao-campos-de-barros"
      },
      {
        "nome": "Luis Eduardo Carelli",
        "slug": "luis-eduardo-carelli"
      },
      {
        "nome": "Gabriel Farias Alves",
        "slug": "gabriel-farias-alves"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 53: Tumores Benignos e Lesões Pseudotumorais da Coluna. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Fisher CG, DiPaola CP, Ryken TC, Bilsky MH, Shaffrey CI, Berven SH, et al. A novel classification system for spinal instability in neoplastic disease: an evidence-based approach and expert consensus from the Spine Oncology Study Group. Spine. 2010;35(19):E1221-9.",
        "doi": "https://doi.org/10.1097/BRS.0b013e3181e16ae2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/20802377/"
      },
      {
        "num": 3,
        "text": "Bilsky MH, Laufer I, Fourney DR, Groff M, Schmidt MH, Varga PP, et al. Reliability analysis of the Epidural Spinal Cord Compression Scale. J Neurosurg Spine. 2010;13(3):324-8.",
        "doi": "https://doi.org/10.3171/2010.3.SPINE09459",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/20809724/"
      }
    ]
  },
  {
    "numero": 54,
    "secao_id": 6,
    "secao_nome": "Tumores na Coluna Vertebral",
    "secao_nome_en": "Spine Tumors",
    "secao_nome_es": "Tumores en la Columna Vertebral",
    "titulo_pt": "Tumores Ósseos Primários Malignos",
    "autores": [
      {
        "nome": "Brian Guilherme Monteiro Marta Coimbra",
        "slug": "brian-guilherme-monteiro-marta-coimbra"
      },
      {
        "nome": "William Gemio Jacobsen Teixeira",
        "slug": "william-gemio-jacobsen-teixeira"
      },
      {
        "nome": "Daniel Duarte Perini",
        "slug": "daniel-duarte-perini"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 54: Tumores Ósseos Primários Malignos. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Fisher CG, DiPaola CP, Ryken TC, Bilsky MH, Shaffrey CI, Berven SH, et al. A novel classification system for spinal instability in neoplastic disease: an evidence-based approach and expert consensus from the Spine Oncology Study Group. Spine. 2010;35(19):E1221-9.",
        "doi": "https://doi.org/10.1097/BRS.0b013e3181e16ae2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/20802377/"
      },
      {
        "num": 3,
        "text": "Bilsky MH, Laufer I, Fourney DR, Groff M, Schmidt MH, Varga PP, et al. Reliability analysis of the Epidural Spinal Cord Compression Scale. J Neurosurg Spine. 2010;13(3):324-8.",
        "doi": "https://doi.org/10.3171/2010.3.SPINE09459",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/20809724/"
      }
    ]
  },
  {
    "numero": 55,
    "secao_id": 6,
    "secao_nome": "Tumores na Coluna Vertebral",
    "secao_nome_en": "Spine Tumors",
    "secao_nome_es": "Tumores en la Columna Vertebral",
    "titulo_pt": "Tumores Metastáticos na Coluna",
    "autores": [
      {
        "nome": "Marcelo Italo Risso Neto",
        "slug": "marcelo-italo-risso-neto"
      },
      {
        "nome": "André Frazao Rosa",
        "slug": "andre-frazao-rosa"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 55: Tumores Metastáticos na Coluna. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Fisher CG, DiPaola CP, Ryken TC, Bilsky MH, Shaffrey CI, Berven SH, et al. A novel classification system for spinal instability in neoplastic disease: an evidence-based approach and expert consensus from the Spine Oncology Study Group. Spine. 2010;35(19):E1221-9.",
        "doi": "https://doi.org/10.1097/BRS.0b013e3181e16ae2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/20802377/"
      },
      {
        "num": 3,
        "text": "Bilsky MH, Laufer I, Fourney DR, Groff M, Schmidt MH, Varga PP, et al. Reliability analysis of the Epidural Spinal Cord Compression Scale. J Neurosurg Spine. 2010;13(3):324-8.",
        "doi": "https://doi.org/10.3171/2010.3.SPINE09459",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/20809724/"
      }
    ]
  },
  {
    "numero": 56,
    "secao_id": 6,
    "secao_nome": "Tumores na Coluna Vertebral",
    "secao_nome_en": "Spine Tumors",
    "secao_nome_es": "Tumores en la Columna Vertebral",
    "titulo_pt": "Tumores Intramedulares e Extramedulares: Classificação, Diagnóstico e Manejo",
    "autores": [
      {
        "nome": "Leon Cleres Penido Pinheiro",
        "slug": "leon-cleres-penido-pinheiro"
      },
      {
        "nome": "Osmar José Santos de Moraes",
        "slug": "osmar-jose-santos-de-moraes"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 56: Tumores Intramedulares e Extramedulares: Classificação, Diagnóstico e Manejo. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Fisher CG, DiPaola CP, Ryken TC, Bilsky MH, Shaffrey CI, Berven SH, et al. A novel classification system for spinal instability in neoplastic disease: an evidence-based approach and expert consensus from the Spine Oncology Study Group. Spine. 2010;35(19):E1221-9.",
        "doi": "https://doi.org/10.1097/BRS.0b013e3181e16ae2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/20802377/"
      },
      {
        "num": 3,
        "text": "Bilsky MH, Laufer I, Fourney DR, Groff M, Schmidt MH, Varga PP, et al. Reliability analysis of the Epidural Spinal Cord Compression Scale. J Neurosurg Spine. 2010;13(3):324-8.",
        "doi": "https://doi.org/10.3171/2010.3.SPINE09459",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/20809724/"
      }
    ]
  },
  {
    "numero": 57,
    "secao_id": 6,
    "secao_nome": "Tumores na Coluna Vertebral",
    "secao_nome_en": "Spine Tumors",
    "secao_nome_es": "Tumores en la Columna Vertebral",
    "titulo_pt": "Radioterapia nos Tumores de Coluna",
    "autores": [
      {
        "nome": "Rodrigo de Morais Hanriot",
        "slug": "rodrigo-de-morais-hanriot"
      },
      {
        "nome": "Naira dos Santos Gutierrez",
        "slug": "naira-dos-santos-gutierrez"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 57: Radioterapia nos Tumores de Coluna. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Fisher CG, DiPaola CP, Ryken TC, Bilsky MH, Shaffrey CI, Berven SH, et al. A novel classification system for spinal instability in neoplastic disease: an evidence-based approach and expert consensus from the Spine Oncology Study Group. Spine. 2010;35(19):E1221-9.",
        "doi": "https://doi.org/10.1097/BRS.0b013e3181e16ae2",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/20802377/"
      },
      {
        "num": 3,
        "text": "Bilsky MH, Laufer I, Fourney DR, Groff M, Schmidt MH, Varga PP, et al. Reliability analysis of the Epidural Spinal Cord Compression Scale. J Neurosurg Spine. 2010;13(3):324-8.",
        "doi": "https://doi.org/10.3171/2010.3.SPINE09459",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/20809724/"
      }
    ]
  },
  {
    "numero": 58,
    "secao_id": 7,
    "secao_nome": "Outras Doenças da Coluna",
    "secao_nome_en": "Other Spinal Diseases",
    "secao_nome_es": "Otras Enfermedades de la Columna",
    "titulo_pt": "Infecção Primária da Coluna Vertebral",
    "autores": [
      {
        "nome": "Edson Pudles",
        "slug": "edson-pudles"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 58: Infecção Primária da Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Berbari EF, Kanj SS, Kowalski TJ, Darouiche RO, Widmer AF, Schmitt SK, et al. 2015 Infectious Diseases Society of America (IDSA) Clinical Practice Guidelines for the Diagnosis and Treatment of Native Vertebral Osteomyelitis in Adults. Clin Infect Dis. 2015;61(6):e26-46.",
        "doi": "https://doi.org/10.1093/cid/civ482",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/26229122/"
      },
      {
        "num": 3,
        "text": "van der Heijde D, Ramiro S, Landewé R, Baraliakos X, Van den Bosch F, Sepriano A, et al. 2016 update of the ASAS/EULAR management recommendations for axial spondyloarthritis. Ann Rheum Dis. 2017;76(6):978-91.",
        "doi": "https://doi.org/10.1136/annrheumdis-2016-210770",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/28087505/"
      }
    ]
  },
  {
    "numero": 59,
    "secao_id": 7,
    "secao_nome": "Outras Doenças da Coluna",
    "secao_nome_en": "Other Spinal Diseases",
    "secao_nome_es": "Otras Enfermedades de la Columna",
    "titulo_pt": "Doenças Reumáticas da Coluna Vertebral",
    "autores": [
      {
        "nome": "Carlos Eduardo Garcez Teixeira",
        "slug": "carlos-eduardo-garcez-teixeira"
      },
      {
        "nome": "Michel Alexandre Yazbek",
        "slug": "michel-alexandre-yazbek"
      },
      {
        "nome": "Zoraida Sachetto",
        "slug": "zoraida-sachetto"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 59: Doenças Reumáticas da Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Berbari EF, Kanj SS, Kowalski TJ, Darouiche RO, Widmer AF, Schmitt SK, et al. 2015 Infectious Diseases Society of America (IDSA) Clinical Practice Guidelines for the Diagnosis and Treatment of Native Vertebral Osteomyelitis in Adults. Clin Infect Dis. 2015;61(6):e26-46.",
        "doi": "https://doi.org/10.1093/cid/civ482",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/26229122/"
      },
      {
        "num": 3,
        "text": "van der Heijde D, Ramiro S, Landewé R, Baraliakos X, Van den Bosch F, Sepriano A, et al. 2016 update of the ASAS/EULAR management recommendations for axial spondyloarthritis. Ann Rheum Dis. 2017;76(6):978-91.",
        "doi": "https://doi.org/10.1136/annrheumdis-2016-210770",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/28087505/"
      }
    ]
  },
  {
    "numero": 60,
    "secao_id": 7,
    "secao_nome": "Outras Doenças da Coluna",
    "secao_nome_en": "Other Spinal Diseases",
    "secao_nome_es": "Otras Enfermedades de la Columna",
    "titulo_pt": "Doenças Metabólicas que Afetam a Coluna",
    "autores": [
      {
        "nome": "Mayra Macena Gomes",
        "slug": "mayra-macena-gomes"
      },
      {
        "nome": "Francisco José Albuquerque de Paula",
        "slug": "francisco-jose-albuquerque-de-paula"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 60: Doenças Metabólicas que Afetam a Coluna. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Berbari EF, Kanj SS, Kowalski TJ, Darouiche RO, Widmer AF, Schmitt SK, et al. 2015 Infectious Diseases Society of America (IDSA) Clinical Practice Guidelines for the Diagnosis and Treatment of Native Vertebral Osteomyelitis in Adults. Clin Infect Dis. 2015;61(6):e26-46.",
        "doi": "https://doi.org/10.1093/cid/civ482",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/26229122/"
      },
      {
        "num": 3,
        "text": "van der Heijde D, Ramiro S, Landewé R, Baraliakos X, Van den Bosch F, Sepriano A, et al. 2016 update of the ASAS/EULAR management recommendations for axial spondyloarthritis. Ann Rheum Dis. 2017;76(6):978-91.",
        "doi": "https://doi.org/10.1136/annrheumdis-2016-210770",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/28087505/"
      }
    ]
  },
  {
    "numero": 61,
    "secao_id": 7,
    "secao_nome": "Outras Doenças da Coluna",
    "secao_nome_en": "Other Spinal Diseases",
    "secao_nome_es": "Otras Enfermedades de la Columna",
    "titulo_pt": "Tratamento Cirúrgico das Doenças Reumáticas da Coluna",
    "autores": [
      {
        "nome": "Raphael Martus Marcon",
        "slug": "raphael-martus-marcon"
      },
      {
        "nome": "Matheus Augusto Maciel Santiago",
        "slug": "matheus-augusto-maciel-santiago"
      },
      {
        "nome": "Henrique Griese Luciano dos Santos",
        "slug": "henrique-griese-luciano-dos-santos"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 61: Tratamento Cirúrgico das Doenças Reumáticas da Coluna. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Berbari EF, Kanj SS, Kowalski TJ, Darouiche RO, Widmer AF, Schmitt SK, et al. 2015 Infectious Diseases Society of America (IDSA) Clinical Practice Guidelines for the Diagnosis and Treatment of Native Vertebral Osteomyelitis in Adults. Clin Infect Dis. 2015;61(6):e26-46.",
        "doi": "https://doi.org/10.1093/cid/civ482",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/26229122/"
      },
      {
        "num": 3,
        "text": "van der Heijde D, Ramiro S, Landewé R, Baraliakos X, Van den Bosch F, Sepriano A, et al. 2016 update of the ASAS/EULAR management recommendations for axial spondyloarthritis. Ann Rheum Dis. 2017;76(6):978-91.",
        "doi": "https://doi.org/10.1136/annrheumdis-2016-210770",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/28087505/"
      }
    ]
  },
  {
    "numero": 62,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Endoscopia Transforaminal na Coluna Lombossacra",
    "autores": [
      {
        "nome": "João Paulo Machado Bergamaschi",
        "slug": "joao-paulo-machado-bergamaschi"
      },
      {
        "nome": "Marcelo Botelho Soares de Brito",
        "slug": "marcelo-botelho-soares-de-brito"
      },
      {
        "nome": "Sonja Ellen Lobo",
        "slug": "sonja-ellen-lobo"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 62: Endoscopia Transforaminal na Coluna Lombossacra. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 63,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Endoscopia Interlaminar na Coluna Lombossacra",
    "autores": [
      {
        "nome": "Marcio Oliveira Penna de Carvalho",
        "slug": "marcio-oliveira-penna-de-carvalho"
      },
      {
        "nome": "Marco Aurelio Moscatelli",
        "slug": "marco-aurelio-moscatelli"
      },
      {
        "nome": "Rafael Barreto Silva",
        "slug": "rafael-barreto-silva"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 63: Endoscopia Interlaminar na Coluna Lombossacra. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 64,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Cirurgia Endoscópica Uniportal no Segmento Torácico",
    "autores": [
      {
        "nome": "Ivan Dias da Rocha",
        "slug": "ivan-dias-da-rocha"
      },
      {
        "nome": "Edelvan Gabana",
        "slug": "edelvan-gabana"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 64: Cirurgia Endoscópica Uniportal no Segmento Torácico. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 65,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Endoscopia na Coluna Cervical pela Via Posterior",
    "autores": [
      {
        "nome": "David Del Curto",
        "slug": "david-del-curto"
      },
      {
        "nome": "Gabriela Neves Vaz",
        "slug": "gabriela-neves-vaz"
      },
      {
        "nome": "Victor Cavalcante Schussel",
        "slug": "victor-cavalcante-schussel"
      },
      {
        "nome": "Tiago Ferreira Jorge",
        "slug": "tiago-ferreira-jorge"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 65: Endoscopia na Coluna Cervical pela Via Posterior. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 66,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Endoscopia na Coluna Cervical pela Via Anterior",
    "autores": [
      {
        "nome": "Kelsen de Oliveira Teixeira",
        "slug": "kelsen-de-oliveira-teixeira"
      },
      {
        "nome": "Rangel Roberto de Assis",
        "slug": "rangel-roberto-de-assis"
      },
      {
        "nome": "Sonja Ellen Lobo",
        "slug": "sonja-ellen-lobo"
      },
      {
        "nome": "João Paulo Machado Bergamaschi",
        "slug": "joao-paulo-machado-bergamaschi"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 66: Endoscopia na Coluna Cervical pela Via Anterior. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 67,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Endoscopia Unilateral Biportal",
    "autores": [
      {
        "nome": "Bernardo Drummond Braga",
        "slug": "bernardo-drummond-braga"
      },
      {
        "nome": "Walison José de Morais",
        "slug": "walison-jose-de-morais"
      },
      {
        "nome": "Mateus Neves Faria Fernandes",
        "slug": "mateus-neves-faria-fernandes"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 67: Endoscopia Unilateral Biportal. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 68,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Artrodese Intersomática Lombar Posterior",
    "autores": [
      {
        "nome": "Jean Marcel Dambrós",
        "slug": "jean-marcel-dambros"
      },
      {
        "nome": "Alvaro Diego Heredia Suarez",
        "slug": "alvaro-diego-heredia-suarez"
      },
      {
        "nome": "Igor Ebert Cechin",
        "slug": "igor-ebert-cechin"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 68: Artrodese Intersomática Lombar Posterior. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 69,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Artrodese Lombar em Single-Position Lateral",
    "autores": [
      {
        "nome": "Cristiano Magalhães Menezes",
        "slug": "cristiano-magalhaes-menezes"
      },
      {
        "nome": "Jefferson Soares Leal",
        "slug": "jefferson-soares-leal"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 69: Artrodese Lombar em Single-Position Lateral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 70,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Artrodese Lombar Prone Transpsoas",
    "autores": [
      {
        "nome": "Luiz Pimenta",
        "slug": "luiz-pimenta"
      },
      {
        "nome": "Rodrigo Amaral",
        "slug": "rodrigo-amaral"
      },
      {
        "nome": "Jullyene Pokorny",
        "slug": "jullyene-pokorny"
      },
      {
        "nome": "Gabriel Pokorny",
        "slug": "gabriel-pokorny"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 70: Artrodese Lombar Prone Transpsoas. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 71,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Artrodese Lombar Oblíqua",
    "autores": [
      {
        "nome": "José Augusto Malheiros",
        "slug": "jose-augusto-malheiros"
      },
      {
        "nome": "Marcos Antonio Ferreira Junior",
        "slug": "marcos-antonio-ferreira-junior"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 71: Artrodese Lombar Oblíqua. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 72,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Artrodese Lombar Anterior",
    "autores": [
      {
        "nome": "Alisson Roberto Teles",
        "slug": "alisson-roberto-teles"
      },
      {
        "nome": "Antonio Gutemberg de S. Martins",
        "slug": "antonio-gutemberg-de-s-martins"
      },
      {
        "nome": "Guilherme A. Ludwig",
        "slug": "guilherme-a-ludwig"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 72: Artrodese Lombar Anterior. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 73,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Artroplastia da Coluna",
    "autores": [
      {
        "nome": "Vinicius de Meldau Benites",
        "slug": "vinicius-de-meldau-benites"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 73: Artroplastia da Coluna. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 74,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Técnicas Cirúrgicas para a Fixação da Coluna Cervical Alta",
    "autores": [
      {
        "nome": "Geraldo de Sá Carneiro-Filho",
        "slug": "geraldo-de-sa-carneiro-filho"
      },
      {
        "nome": "Deoclides Lima Bezerra Júnior",
        "slug": "deoclides-lima-bezerra-junior"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 74: Técnicas Cirúrgicas para a Fixação da Coluna Cervical Alta. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 75,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Técnicas de Fixação Cervical Anterior",
    "autores": [
      {
        "nome": "Jeronimo Buzetti Milano",
        "slug": "jeronimo-buzetti-milano"
      },
      {
        "nome": "Egon Ewaldo Lindorfer Neto",
        "slug": "egon-ewaldo-lindorfer-neto"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 75: Técnicas de Fixação Cervical Anterior. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 76,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Fixação Posterior da Coluna Cervical",
    "autores": [
      {
        "nome": "Renato Henriques Tavares",
        "slug": "renato-henriques-tavares"
      },
      {
        "nome": "Luis Antonio Medeiros Moliterno",
        "slug": "luis-antonio-medeiros-moliterno"
      },
      {
        "nome": "Giancarlo Jorio Almeida",
        "slug": "giancarlo-jorio-almeida"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 76: Fixação Posterior da Coluna Cervical. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 77,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Laminoplastia Cervical: Princípios, Técnicas e Evidências Atuais",
    "autores": [
      {
        "nome": "Roger Schmidt Brock",
        "slug": "roger-schmidt-brock"
      },
      {
        "nome": "Áquila Matos Soares",
        "slug": "aquila-matos-soares"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 77: Laminoplastia Cervical: Princípios, Técnicas e Evidências Atuais. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 78,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Parafusos Pediculares na Coluna Torácica, Lombar e Lombossacra – Técnica Free-Hand",
    "autores": [
      {
        "nome": "Paulo Tadeu Maia Cavali",
        "slug": "paulo-tadeu-maia-cavali"
      },
      {
        "nome": "Marcelo Italo Risso Neto",
        "slug": "marcelo-italo-risso-neto"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 78: Parafusos Pediculares na Coluna Torácica, Lombar e Lombossacra – Técnica Free-Hand. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 79,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Fixação do Ilíaco – Técnica S2 Alar Ilíaco",
    "autores": [
      {
        "nome": "Olavo Biraghi Letaif",
        "slug": "olavo-biraghi-letaif"
      },
      {
        "nome": "Débora Yumi Yoshimura Orlandin Alves",
        "slug": "debora-yumi-yoshimura-orlandin-alves"
      },
      {
        "nome": "Italo Gerardo Rotondo",
        "slug": "italo-gerardo-rotondo"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 79: Fixação do Ilíaco – Técnica S2 Alar Ilíaco. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 80,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Técnicas de Fixação na Coluna Osteoporótica",
    "autores": [
      {
        "nome": "Fernando Antônio Mendes Façanha Filho",
        "slug": "fernando-antonio-mendes-facanha-filho"
      },
      {
        "nome": "Arthur Sampaio Façanha",
        "slug": "arthur-sampaio-facanha"
      },
      {
        "nome": "Paulo Henrique Carvalho Vasconcelos",
        "slug": "paulo-henrique-carvalho-vasconcelos"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 80: Técnicas de Fixação na Coluna Osteoporótica. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 81,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Ostetomias da Coluna Vertebral",
    "autores": [
      {
        "nome": "Ricardo Acacio Dos Santos",
        "slug": "ricardo-acacio-dos-santos"
      },
      {
        "nome": "Fernando Herrero",
        "slug": "fernando-herrero"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 81: Ostetomias da Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 82,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Aplicação do Halo e Tração Craniana",
    "autores": [
      {
        "nome": "Mauricio Coelho Lima",
        "slug": "mauricio-coelho-lima"
      },
      {
        "nome": "Paulo Tadeu Maia Cavali",
        "slug": "paulo-tadeu-maia-cavali"
      },
      {
        "nome": "Alexander Junqueira Rossato",
        "slug": "alexander-junqueira-rossato"
      },
      {
        "nome": "Marcelo Italo Risso Neto",
        "slug": "marcelo-italo-risso-neto"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 82: Aplicação do Halo e Tração Craniana. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 83,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Colete Gessado para Escoliose de Início Precoce",
    "autores": [
      {
        "nome": "André Luis Fernandes Andujar",
        "slug": "andre-luis-fernandes-andujar"
      },
      {
        "nome": "Rodrigo dos Santos Grandini",
        "slug": "rodrigo-dos-santos-grandini"
      },
      {
        "nome": "Cheila Mara Freu",
        "slug": "cheila-mara-freu"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 83: Colete Gessado para Escoliose de Início Precoce. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 84,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Infiltrações e Bloqueios da Coluna",
    "autores": [
      {
        "nome": "Alberto Ofenhejm Gotfryd",
        "slug": "alberto-ofenhejm-gotfryd"
      },
      {
        "nome": "João Tomás Fernandes Castilho Garcia",
        "slug": "joao-tomas-fernandes-castilho-garcia"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 84: Infiltrações e Bloqueios da Coluna. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 85,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Sistemas de Crescimento Guiado para Deformidades da Coluna: Hastes de Crescimento Tradicionais",
    "autores": [
      {
        "nome": "Bruno Pinto Coelho Fontes",
        "slug": "bruno-pinto-coelho-fontes"
      },
      {
        "nome": "João Vitor Liboni Guimarães Rios",
        "slug": "joao-vitor-liboni-guimaraes-rios"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 85: Sistemas de Crescimento Guiado para Deformidades da Coluna: Hastes de Crescimento Tradicionais. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 86,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Técnica de Fixação Bipolar da Coluna Vertebral",
    "autores": [
      {
        "nome": "Alexander Junqueira Rossato",
        "slug": "alexander-junqueira-rossato"
      },
      {
        "nome": "Mauricio Coelho Lima",
        "slug": "mauricio-coelho-lima"
      },
      {
        "nome": "Paulo Tadeu Maia Cavali",
        "slug": "paulo-tadeu-maia-cavali"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 86: Técnica de Fixação Bipolar da Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 87,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Técnicas de Correção Cirúrgica das Deformidades da Coluna Vertebral",
    "autores": [
      {
        "nome": "Denis Seguchi Sakai",
        "slug": "denis-seguchi-sakai"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 87: Técnicas de Correção Cirúrgica das Deformidades da Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 88,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Vertebrectomia Torácica e Lombar nas Neoplasias",
    "autores": [
      {
        "nome": "Ricardo de Souza Portes Meirelles",
        "slug": "ricardo-de-souza-portes-meirelles"
      },
      {
        "nome": "Christiano Esteves Simões",
        "slug": "christiano-esteves-simoes"
      },
      {
        "nome": "Gustavo Borges Laurindo de Azevedo",
        "slug": "gustavo-borges-laurindo-de-azevedo"
      },
      {
        "nome": "Paulo José Silva Ramos",
        "slug": "paulo-jose-silva-ramos"
      },
      {
        "nome": "Vinicius Tapie Guerra e Silva",
        "slug": "vinicius-tapie-guerra-e-silva"
      },
      {
        "nome": "Alessandro Gasbarrini",
        "slug": "alessandro-gasbarrini"
      },
      {
        "nome": "Otávio Vitório Alvarenga Pereira",
        "slug": "otavio-vitorio-alvarenga-pereira"
      },
      {
        "nome": "Chiara Cini",
        "slug": "chiara-cini"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 88: Vertebrectomia Torácica e Lombar nas Neoplasias. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 89,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Sacrectomia",
    "autores": [
      {
        "nome": "Christiano Esteves Simões",
        "slug": "christiano-esteves-simoes"
      },
      {
        "nome": "Otávio Vitório Alvarenga Pereira",
        "slug": "otavio-vitorio-alvarenga-pereira"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 89: Sacrectomia. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 90,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Cirurgia Complexa dos Tumores Cervicais",
    "autores": [
      {
        "nome": "Douglas Kenji Narazaki",
        "slug": "douglas-kenji-narazaki"
      },
      {
        "nome": "Santiago Alexis Naranjo Tipan",
        "slug": "santiago-alexis-naranjo-tipan"
      },
      {
        "nome": "Arthur Sampaio Façanha",
        "slug": "arthur-sampaio-facanha"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 90: Cirurgia Complexa dos Tumores Cervicais. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 91,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Técnicas Minimamente Invasivas para Tratamento e Adjuvância nos Tumores da Coluna Vertebral",
    "autores": [
      {
        "nome": "Marcelo Luis Mudo",
        "slug": "marcelo-luis-mudo"
      },
      {
        "nome": "Claudio E. Tatsui",
        "slug": "claudio-e-tatsui"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 91: Técnicas Minimamente Invasivas para Tratamento e Adjuvância nos Tumores da Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 92,
    "secao_id": 8,
    "secao_nome": "Técnicas Cirúrgicas",
    "secao_nome_en": "Surgical Techniques",
    "secao_nome_es": "Técnicas Quirúrgicas",
    "titulo_pt": "Navegação e Robótica",
    "autores": [
      {
        "nome": "Helton Luiz Aparecido Defino",
        "slug": "helton-luiz-aparecido-defino"
      },
      {
        "nome": "Vinicius Marques Carneiro",
        "slug": "vinicius-marques-carneiro"
      },
      {
        "nome": "Matheus Pippa Defino",
        "slug": "matheus-pippa-defino"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 92: Navegação e Robótica. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Kambin P, Gellman H. Percutaneous lateral discectomy of the lumbar spine. A preliminary report. Clin Orthop Relat Res. 1983;(174):127-32.",
        "doi": "https://doi.org/10.1097/00003086-198304000-00018",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/6831828/"
      },
      {
        "num": 3,
        "text": "Kim M, Choi D. Endoscopic Spine Surgery: Principles and Practical Techniques. New York: Thieme Medical Publishers, 2022; p. 110-165.",
        "doi": "https://doi.org/10.1055/b-007-184520",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "numero": 93,
    "secao_id": 9,
    "secao_nome": "Complicações",
    "secao_nome_en": "Complications",
    "secao_nome_es": "Complicaciones",
    "titulo_pt": "Infecções Pós-Operatórias",
    "autores": [
      {
        "nome": "Mauro dos Santos Volpi",
        "slug": "mauro-dos-santos-volpi"
      },
      {
        "nome": "Bruno da Costa Ancheschi",
        "slug": "bruno-da-costa-ancheschi"
      },
      {
        "nome": "Sara Reis de Paula",
        "slug": "sara-reis-de-paula"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 93: Infecções Pós-Operatórias. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Ghogawala Z, Dziurzynski K, Butler WE, Heary RF, Riew KD, Fehlings MG, et al. Adjacent segment disease after lumbar or cervical spine surgery: an updated review. Neurosurgery. 2017;80(3S):S45-S54.",
        "doi": "https://doi.org/10.1093/neuros/nyw076",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/28350942/"
      },
      {
        "num": 3,
        "text": "Epstein NE. The risks and benefits of dura repair in spinal surgery. Surg Neurol Int. 2012;3:75.",
        "doi": "https://doi.org/10.4103/2156-5864.98595",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22888448/"
      }
    ]
  },
  {
    "numero": 94,
    "secao_id": 9,
    "secao_nome": "Complicações",
    "secao_nome_en": "Complications",
    "secao_nome_es": "Complicaciones",
    "titulo_pt": "Lesão Dural, Aracnoidite e Fibrose Pós-Operatória",
    "autores": [
      {
        "nome": "Wuilker Knoner Campos",
        "slug": "wuilker-knoner-campos"
      },
      {
        "nome": "Walterney Amancio Filho",
        "slug": "walterney-amancio-filho"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 94: Lesão Dural, Aracnoidite e Fibrose Pós-Operatória. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Ghogawala Z, Dziurzynski K, Butler WE, Heary RF, Riew KD, Fehlings MG, et al. Adjacent segment disease after lumbar or cervical spine surgery: an updated review. Neurosurgery. 2017;80(3S):S45-S54.",
        "doi": "https://doi.org/10.1093/neuros/nyw076",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/28350942/"
      },
      {
        "num": 3,
        "text": "Epstein NE. The risks and benefits of dura repair in spinal surgery. Surg Neurol Int. 2012;3:75.",
        "doi": "https://doi.org/10.4103/2156-5864.98595",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22888448/"
      }
    ]
  },
  {
    "numero": 95,
    "secao_id": 9,
    "secao_nome": "Complicações",
    "secao_nome_en": "Complications",
    "secao_nome_es": "Complicaciones",
    "titulo_pt": "Queda das Respostas na Monitoração Neurofisiológica Intraoperatória",
    "autores": [
      {
        "nome": "Luciano Miller Reis Rodrigues",
        "slug": "luciano-miller-reis-rodrigues"
      },
      {
        "nome": "Guilherme Pianowski Pajanoti",
        "slug": "guilherme-pianowski-pajanoti"
      },
      {
        "nome": "Lucas Silveira Rabello de Oliveira",
        "slug": "lucas-silveira-rabello-de-oliveira"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 95: Queda das Respostas na Monitoração Neurofisiológica Intraoperatória. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Ghogawala Z, Dziurzynski K, Butler WE, Heary RF, Riew KD, Fehlings MG, et al. Adjacent segment disease after lumbar or cervical spine surgery: an updated review. Neurosurgery. 2017;80(3S):S45-S54.",
        "doi": "https://doi.org/10.1093/neuros/nyw076",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/28350942/"
      },
      {
        "num": 3,
        "text": "Epstein NE. The risks and benefits of dura repair in spinal surgery. Surg Neurol Int. 2012;3:75.",
        "doi": "https://doi.org/10.4103/2156-5864.98595",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22888448/"
      }
    ]
  },
  {
    "numero": 96,
    "secao_id": 9,
    "secao_nome": "Complicações",
    "secao_nome_en": "Complications",
    "secao_nome_es": "Complicaciones",
    "titulo_pt": "Doença do Nível Adjacente",
    "autores": [
      {
        "nome": "Igor Machado Cardoso",
        "slug": "igor-machado-cardoso"
      },
      {
        "nome": "Charbel Jacob Junior",
        "slug": "charbel-jacob-junior"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 96: Doença do Nível Adjacente. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Ghogawala Z, Dziurzynski K, Butler WE, Heary RF, Riew KD, Fehlings MG, et al. Adjacent segment disease after lumbar or cervical spine surgery: an updated review. Neurosurgery. 2017;80(3S):S45-S54.",
        "doi": "https://doi.org/10.1093/neuros/nyw076",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/28350942/"
      },
      {
        "num": 3,
        "text": "Epstein NE. The risks and benefits of dura repair in spinal surgery. Surg Neurol Int. 2012;3:75.",
        "doi": "https://doi.org/10.4103/2156-5864.98595",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22888448/"
      }
    ]
  },
  {
    "numero": 97,
    "secao_id": 9,
    "secao_nome": "Complicações",
    "secao_nome_en": "Complications",
    "secao_nome_es": "Complicaciones",
    "titulo_pt": "Pseudoartrose e Falha Mecânica da Instrumentação na Cirurgia da Coluna Vertebral",
    "autores": [
      {
        "nome": "Nelson Astur Neto",
        "slug": "nelson-astur-neto"
      },
      {
        "nome": "Felipe Neves Simões Monteiro",
        "slug": "felipe-neves-simoes-monteiro"
      },
      {
        "nome": "Rafael Cardoso Prates",
        "slug": "rafael-cardoso-prates"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 97: Pseudoartrose e Falha Mecânica da Instrumentação na Cirurgia da Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Ghogawala Z, Dziurzynski K, Butler WE, Heary RF, Riew KD, Fehlings MG, et al. Adjacent segment disease after lumbar or cervical spine surgery: an updated review. Neurosurgery. 2017;80(3S):S45-S54.",
        "doi": "https://doi.org/10.1093/neuros/nyw076",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/28350942/"
      },
      {
        "num": 3,
        "text": "Epstein NE. The risks and benefits of dura repair in spinal surgery. Surg Neurol Int. 2012;3:75.",
        "doi": "https://doi.org/10.4103/2156-5864.98595",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22888448/"
      }
    ]
  },
  {
    "numero": 98,
    "secao_id": 9,
    "secao_nome": "Complicações",
    "secao_nome_en": "Complications",
    "secao_nome_es": "Complicaciones",
    "titulo_pt": "Complicações da Abordagem Anterior da Coluna",
    "autores": [
      {
        "nome": "Aécio Rubens Dias Pereira Filho",
        "slug": "aecio-rubens-dias-pereira-filho"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 98: Complicações da Abordagem Anterior da Coluna. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Ghogawala Z, Dziurzynski K, Butler WE, Heary RF, Riew KD, Fehlings MG, et al. Adjacent segment disease after lumbar or cervical spine surgery: an updated review. Neurosurgery. 2017;80(3S):S45-S54.",
        "doi": "https://doi.org/10.1093/neuros/nyw076",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/28350942/"
      },
      {
        "num": 3,
        "text": "Epstein NE. The risks and benefits of dura repair in spinal surgery. Surg Neurol Int. 2012;3:75.",
        "doi": "https://doi.org/10.4103/2156-5864.98595",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22888448/"
      }
    ]
  },
  {
    "numero": 99,
    "secao_id": 9,
    "secao_nome": "Complicações",
    "secao_nome_en": "Complications",
    "secao_nome_es": "Complicaciones",
    "titulo_pt": "Lesão Neurológica Perioperatória",
    "autores": [
      {
        "nome": "Marcus André Costa Ferreira",
        "slug": "marcus-andre-costa-ferreira"
      },
      {
        "nome": "Leonardo Yukio Jorge Asano",
        "slug": "leonardo-yukio-jorge-asano"
      },
      {
        "nome": "Alexandre Medeiros Sampaio Januario",
        "slug": "alexandre-medeiros-sampaio-januario"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 99: Lesão Neurológica Perioperatória. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Ghogawala Z, Dziurzynski K, Butler WE, Heary RF, Riew KD, Fehlings MG, et al. Adjacent segment disease after lumbar or cervical spine surgery: an updated review. Neurosurgery. 2017;80(3S):S45-S54.",
        "doi": "https://doi.org/10.1093/neuros/nyw076",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/28350942/"
      },
      {
        "num": 3,
        "text": "Epstein NE. The risks and benefits of dura repair in spinal surgery. Surg Neurol Int. 2012;3:75.",
        "doi": "https://doi.org/10.4103/2156-5864.98595",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22888448/"
      }
    ]
  },
  {
    "numero": 100,
    "secao_id": 9,
    "secao_nome": "Complicações",
    "secao_nome_en": "Complications",
    "secao_nome_es": "Complicaciones",
    "titulo_pt": "Síndrome da Falha da Cirurgia da Coluna Vertebral",
    "autores": [
      {
        "nome": "Sergio Afonso Hennemann",
        "slug": "sergio-afonso-hennemann"
      },
      {
        "nome": "Marcelo Abreu",
        "slug": "marcelo-abreu"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 100: Síndrome da Falha da Cirurgia da Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Ghogawala Z, Dziurzynski K, Butler WE, Heary RF, Riew KD, Fehlings MG, et al. Adjacent segment disease after lumbar or cervical spine surgery: an updated review. Neurosurgery. 2017;80(3S):S45-S54.",
        "doi": "https://doi.org/10.1093/neuros/nyw076",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/28350942/"
      },
      {
        "num": 3,
        "text": "Epstein NE. The risks and benefits of dura repair in spinal surgery. Surg Neurol Int. 2012;3:75.",
        "doi": "https://doi.org/10.4103/2156-5864.98595",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/22888448/"
      }
    ]
  },
  {
    "numero": 101,
    "secao_id": 10,
    "secao_nome": "Temas Complementares",
    "secao_nome_en": "Complementary Topics",
    "secao_nome_es": "Temas Complementarios",
    "titulo_pt": "Junção Craniovertebral: Anormalidades Congênitas, Adquiridas e Trauma",
    "autores": [
      {
        "nome": "Luis Eduardo Carelli",
        "slug": "luis-eduardo-carelli"
      },
      {
        "nome": "Alderico Girão Campos de Barros",
        "slug": "alderico-girao-campos-de-barros"
      },
      {
        "nome": "Alessandro Maria Bianconi",
        "slug": "alessandro-maria-bianconi"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 101: Junção Craniovertebral: Anormalidades Congênitas, Adquiridas e Trauma. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Deyo RA, Cherkin DC, Loeser JD, Bigos SJ, Ciol MA. Morbidity and mortality in association with operations on the lumbar spine. The influence of age, diagnosis, and procedure. J Bone Joint Surg Am. 1992;74(4):536-43.",
        "doi": "https://doi.org/10.2106/00004623-199274040-00009",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/1583048/"
      },
      {
        "num": 3,
        "text": "Fairbank JC, Pynsent PB. The Oswestry Disability Index. Spine. 2000;25(22):2940-52.",
        "doi": "https://doi.org/10.1097/00007632-200011150-00017",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11074683/"
      }
    ]
  },
  {
    "numero": 102,
    "secao_id": 10,
    "secao_nome": "Temas Complementares",
    "secao_nome_en": "Complementary Topics",
    "secao_nome_es": "Temas Complementarios",
    "titulo_pt": "Manejo da Dor Aguda e Crônica na Coluna Vertebral",
    "autores": [
      {
        "nome": "Roberta Cristina Risso",
        "slug": "roberta-cristina-risso"
      },
      {
        "nome": "Karen Santos Braghiroli",
        "slug": "karen-santos-braghiroli"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 102: Manejo da Dor Aguda e Crônica na Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Deyo RA, Cherkin DC, Loeser JD, Bigos SJ, Ciol MA. Morbidity and mortality in association with operations on the lumbar spine. The influence of age, diagnosis, and procedure. J Bone Joint Surg Am. 1992;74(4):536-43.",
        "doi": "https://doi.org/10.2106/00004623-199274040-00009",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/1583048/"
      },
      {
        "num": 3,
        "text": "Fairbank JC, Pynsent PB. The Oswestry Disability Index. Spine. 2000;25(22):2940-52.",
        "doi": "https://doi.org/10.1097/00007632-200011150-00017",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11074683/"
      }
    ]
  },
  {
    "numero": 103,
    "secao_id": 10,
    "secao_nome": "Temas Complementares",
    "secao_nome_en": "Complementary Topics",
    "secao_nome_es": "Temas Complementarios",
    "titulo_pt": "Abordagens para o Tratamento da Dor Pós-Operatória em Cirurgia de Coluna",
    "autores": [
      {
        "nome": "João Abrão",
        "slug": "joao-abrao"
      },
      {
        "nome": "Sérgio Mariano Zuazo",
        "slug": "sergio-mariano-zuazo"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 103: Abordagens para o Tratamento da Dor Pós-Operatória em Cirurgia de Coluna. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Deyo RA, Cherkin DC, Loeser JD, Bigos SJ, Ciol MA. Morbidity and mortality in association with operations on the lumbar spine. The influence of age, diagnosis, and procedure. J Bone Joint Surg Am. 1992;74(4):536-43.",
        "doi": "https://doi.org/10.2106/00004623-199274040-00009",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/1583048/"
      },
      {
        "num": 3,
        "text": "Fairbank JC, Pynsent PB. The Oswestry Disability Index. Spine. 2000;25(22):2940-52.",
        "doi": "https://doi.org/10.1097/00007632-200011150-00017",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11074683/"
      }
    ]
  },
  {
    "numero": 104,
    "secao_id": 10,
    "secao_nome": "Temas Complementares",
    "secao_nome_en": "Complementary Topics",
    "secao_nome_es": "Temas Complementarios",
    "titulo_pt": "Anestesia para Cirurgia da Coluna Vertebral",
    "autores": [
      {
        "nome": "Mauricio Luiz Malito",
        "slug": "mauricio-luiz-malito"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 104: Anestesia para Cirurgia da Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Deyo RA, Cherkin DC, Loeser JD, Bigos SJ, Ciol MA. Morbidity and mortality in association with operations on the lumbar spine. The influence of age, diagnosis, and procedure. J Bone Joint Surg Am. 1992;74(4):536-43.",
        "doi": "https://doi.org/10.2106/00004623-199274040-00009",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/1583048/"
      },
      {
        "num": 3,
        "text": "Fairbank JC, Pynsent PB. The Oswestry Disability Index. Spine. 2000;25(22):2940-52.",
        "doi": "https://doi.org/10.1097/00007632-200011150-00017",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11074683/"
      }
    ]
  },
  {
    "numero": 105,
    "secao_id": 10,
    "secao_nome": "Temas Complementares",
    "secao_nome_en": "Complementary Topics",
    "secao_nome_es": "Temas Complementarios",
    "titulo_pt": "Controle do Sangramento Intraoperatório",
    "autores": [
      {
        "nome": "Erich Vinicius de Paula",
        "slug": "erich-vinicius-de-paula"
      },
      {
        "nome": "Christopher Cralcev",
        "slug": "christopher-cralcev"
      },
      {
        "nome": "Gustavo Alves Brito Isaias",
        "slug": "gustavo-alves-brito-isaias"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 105: Controle do Sangramento Intraoperatório. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Deyo RA, Cherkin DC, Loeser JD, Bigos SJ, Ciol MA. Morbidity and mortality in association with operations on the lumbar spine. The influence of age, diagnosis, and procedure. J Bone Joint Surg Am. 1992;74(4):536-43.",
        "doi": "https://doi.org/10.2106/00004623-199274040-00009",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/1583048/"
      },
      {
        "num": 3,
        "text": "Fairbank JC, Pynsent PB. The Oswestry Disability Index. Spine. 2000;25(22):2940-52.",
        "doi": "https://doi.org/10.1097/00007632-200011150-00017",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11074683/"
      }
    ]
  },
  {
    "numero": 106,
    "secao_id": 10,
    "secao_nome": "Temas Complementares",
    "secao_nome_en": "Complementary Topics",
    "secao_nome_es": "Temas Complementarios",
    "titulo_pt": "Uso de Órteses na Coluna Vertebral",
    "autores": [
      {
        "nome": "Sergio Zylbersztejn",
        "slug": "sergio-zylbersztejn"
      },
      {
        "nome": "Pedro Henrique Lacombe Antoneli",
        "slug": "pedro-henrique-lacombe-antoneli"
      },
      {
        "nome": "Daiane Gallina",
        "slug": "daiane-gallina"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 106: Uso de Órteses na Coluna Vertebral. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Deyo RA, Cherkin DC, Loeser JD, Bigos SJ, Ciol MA. Morbidity and mortality in association with operations on the lumbar spine. The influence of age, diagnosis, and procedure. J Bone Joint Surg Am. 1992;74(4):536-43.",
        "doi": "https://doi.org/10.2106/00004623-199274040-00009",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/1583048/"
      },
      {
        "num": 3,
        "text": "Fairbank JC, Pynsent PB. The Oswestry Disability Index. Spine. 2000;25(22):2940-52.",
        "doi": "https://doi.org/10.1097/00007632-200011150-00017",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11074683/"
      }
    ]
  },
  {
    "numero": 107,
    "secao_id": 10,
    "secao_nome": "Temas Complementares",
    "secao_nome_en": "Complementary Topics",
    "secao_nome_es": "Temas Complementarios",
    "titulo_pt": "Segurança em Cirurgia de Coluna",
    "autores": [
      {
        "nome": "Guilherme Rebechi Zuiani",
        "slug": "guilherme-rebechi-zuiani"
      },
      {
        "nome": "Marcelo Italo Risso Neto",
        "slug": "marcelo-italo-risso-neto"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 107: Segurança em Cirurgia de Coluna. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Deyo RA, Cherkin DC, Loeser JD, Bigos SJ, Ciol MA. Morbidity and mortality in association with operations on the lumbar spine. The influence of age, diagnosis, and procedure. J Bone Joint Surg Am. 1992;74(4):536-43.",
        "doi": "https://doi.org/10.2106/00004623-199274040-00009",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/1583048/"
      },
      {
        "num": 3,
        "text": "Fairbank JC, Pynsent PB. The Oswestry Disability Index. Spine. 2000;25(22):2940-52.",
        "doi": "https://doi.org/10.1097/00007632-200011150-00017",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11074683/"
      }
    ]
  },
  {
    "numero": 108,
    "secao_id": 10,
    "secao_nome": "Temas Complementares",
    "secao_nome_en": "Complementary Topics",
    "secao_nome_es": "Temas Complementarios",
    "titulo_pt": "Manejo do Paciente Frágil com Sarcopenia em Cirurgia de Coluna",
    "autores": [
      {
        "nome": "Clineu de Mello Almada Filho",
        "slug": "clineu-de-mello-almada-filho"
      },
      {
        "nome": "René Kusabara",
        "slug": "rene-kusabara"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 108: Manejo do Paciente Frágil com Sarcopenia em Cirurgia de Coluna. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Deyo RA, Cherkin DC, Loeser JD, Bigos SJ, Ciol MA. Morbidity and mortality in association with operations on the lumbar spine. The influence of age, diagnosis, and procedure. J Bone Joint Surg Am. 1992;74(4):536-43.",
        "doi": "https://doi.org/10.2106/00004623-199274040-00009",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/1583048/"
      },
      {
        "num": 3,
        "text": "Fairbank JC, Pynsent PB. The Oswestry Disability Index. Spine. 2000;25(22):2940-52.",
        "doi": "https://doi.org/10.1097/00007632-200011150-00017",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11074683/"
      }
    ]
  },
  {
    "numero": 109,
    "secao_id": 10,
    "secao_nome": "Temas Complementares",
    "secao_nome_en": "Complementary Topics",
    "secao_nome_es": "Temas Complementarios",
    "titulo_pt": "Avaliação dos Resultados em Cirurgia de Coluna",
    "autores": [
      {
        "nome": "Pedro Aleixo Nogueira",
        "slug": "pedro-aleixo-nogueira"
      },
      {
        "nome": "Sérgio Augusto Barbosa de Farias",
        "slug": "sergio-augusto-barbosa-de-farias"
      },
      {
        "nome": "Andrei Fernandes Joaquim",
        "slug": "andrei-fernandes-joaquim"
      }
    ],
    "referencias": [
      {
        "num": 1,
        "text": "Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. 109: Avaliação dos Resultados em Cirurgia de Coluna. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
        "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
      },
      {
        "num": 2,
        "text": "Deyo RA, Cherkin DC, Loeser JD, Bigos SJ, Ciol MA. Morbidity and mortality in association with operations on the lumbar spine. The influence of age, diagnosis, and procedure. J Bone Joint Surg Am. 1992;74(4):536-43.",
        "doi": "https://doi.org/10.2106/00004623-199274040-00009",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/1583048/"
      },
      {
        "num": 3,
        "text": "Fairbank JC, Pynsent PB. The Oswestry Disability Index. Spine. 2000;25(22):2940-52.",
        "doi": "https://doi.org/10.1097/00007632-200011150-00017",
        "pmid": "https://pubmed.ncbi.nlm.nih.gov/11074683/"
      }
    ]
  }
];
