export interface EditorInfo {
  slug: string;
  nome: string;
  cargo: string;
  orcid: string;
  foto_url: string;
  role: string;
}

export interface InstitucionalAuthor {
  nome: string;
  slug?: string;
  cargo?: string;
  instituicao?: string;
  foto_url?: string;
  titulos?: string[];
}

export const EDITORES_TRATADO: EditorInfo[] = [
  {
    slug: "edson-pudles",
    nome: "Edson Pudles",
    cargo: "Médico Ortopedista e Traumatologista",
    orcid: "0000-0001-9616-2945",
    foto_url: "/assets/edson-pudles.png",
    role: "Editor",
  },
  {
    slug: "helton-defino",
    nome: "Helton Luiz Aparecido Defino",
    cargo: "Médico Ortopedista e Traumatologista",
    orcid: "0000-0003-4274-0130",
    foto_url: "/assets/helton-defino.png",
    role: "Editor",
  },
  {
    slug: "marcelo-risso",
    nome: "Marcelo Italo Risso Neto",
    cargo: "Médico Ortopedista e Traumatologista",
    orcid: "0000-0003-0990-5901",
    foto_url: "/assets/marcelo-risso.png",
    role: "Editor",
  },
];

export interface PrefacioContentType {
  breadcrumb: string;
  badge: string;
  titulo: string;
  subtitulo: string;
  autoresLinha: string;
  avisoImpresso: string;
  paragrafos: string[];
  mensagemCentral: string;
  destaques: {
    titulo: string;
    descricao: string;
    cor: string;
    icone: string;
  }[];
  sobreAObra: string;
}

export const PREFACIO_BY_LOCALE: Record<string, PrefacioContentType> = {
  pt: {
    breadcrumb: "Início > O Tratado > Prefácio",
    badge: "TEXTO INSTITUCIONAL",
    titulo: "Prefácio",
    subtitulo: "Uma reflexão sobre o significado institucional e científico do Tratado de Cirurgia da Coluna Vertebral.",
    autoresLinha: "Edson Pudles • Helton Defino • Marcelo Risso",
    avisoImpresso: "A leitura completa deste texto está disponível exclusivamente na edição impressa do Tratado.",
    paragrafos: [
      "Há obras que não se limitam a reunir conhecimento: elas traduzem a maturidade de uma especialidade, espelham a força de uma trajetória coletiva e se afirmam como expressão de um legado. É com esse sentido que apresentamos este Tratado de Cirurgia da Coluna Vertebral.",
      "No ano em que completa 40 anos de existência — trajetória iniciada em 1986, com a criação do Comitê de Patologia da Coluna Vertebral da Sociedade Brasileira de Ortopedia e Traumatologia —, a Sociedade Brasileira de Coluna alcança um estágio de notável solidez institucional e de amplo reconhecimento no cenário médico.",
      "Em uma área marcada por grande complexidade técnica, permanente renovação científica e crescente responsabilidade assistencial, a SBC construiu uma história singular de compromisso com a formação e com a educação continuada do cirurgião de coluna no Brasil.",
      "Essa identidade se fortalece por sua natureza plural e integradora, reunindo ortopedistas e neurocirurgiões em torno de padrões rigorosos de formação, certificação e aperfeiçoamento. Este Tratado reflete essa construção coletiva e busca oferecer uma referência abrangente, atualizada e de elevado rigor científico para residentes, especialistas e professores.",
    ],
    mensagemCentral: "Esta obra expressa a maturidade da especialidade e o compromisso permanente da Sociedade Brasileira de Coluna com a formação, a excelência e a educação continuada.",
    destaques: [
      {
        titulo: "Legado institucional",
        descricao: "A obra traduz a trajetória e a maturidade da especialidade.",
        cor: "red",
        icone: "institucional",
      },
      {
        titulo: "Pluralidade e integração",
        descricao: "Reúne diferentes escolas e especialistas em torno de um objetivo comum.",
        cor: "blue",
        icone: "integracao",
      },
      {
        titulo: "Rigor científico",
        descricao: "Consolida conhecimento atualizado para prática, ensino e referência.",
        cor: "navy",
        icone: "cientifico",
      },
    ],
    sobreAObra: "O Tratado de Cirurgia da Coluna Vertebral é uma obra acadêmica de referência, publicada exclusivamente em formato impresso. Este site foi desenvolvido para apoiar a leitura, oferecendo índice, resumos, apresentação da obra, informações sobre os autores e referências bibliográficas.",
  },
  en: {
    breadcrumb: "Home > The Treatise > Preface",
    badge: "INSTITUTIONAL TEXT",
    titulo: "Preface",
    subtitulo: "A reflection on the institutional and scientific significance of the Treatise on Spine Surgery.",
    autoresLinha: "Edson Pudles • Helton Defino • Marcelo Risso",
    avisoImpresso: "The full text is exclusively available in the printed edition of the Treatise.",
    paragrafos: [
      "There are works that do not merely gather knowledge: they translate the maturity of a medical specialty, reflect the strength of a collective journey, and establish themselves as the expression of a lasting legacy. It is with this purpose that we present this Treatise on Spine Surgery.",
      "In the year it celebrates 40 years of existence — a journey begun in 1986 with the creation of the Spine Pathology Committee of the Brazilian Society of Orthopedics and Traumatology —, the Brazilian Spine Society (SBC) reaches a stage of remarkable institutional solidity and broad recognition in the international medical community.",
      "In a field marked by great technical complexity, ongoing scientific advancement, and growing healthcare responsibility, the SBC has built a singular history of commitment to the training and continuing education of spine surgeons in Brazil.",
      "This identity is strengthened by its plural and integrative nature, uniting orthopedic surgeons and neurosurgeons around rigorous standards of education, certification, and improvement. This Treatise reflects this collective endeavor and seeks to provide a comprehensive, updated, and rigorous reference for residents, specialists, and professors.",
    ],
    mensagemCentral: "This work expresses the maturity of the specialty and the ongoing commitment of the Brazilian Spine Society to education, excellence, and continuous professional training.",
    destaques: [
      {
        titulo: "Institutional Legacy",
        descricao: "The work conveys the historical trajectory and maturity of the specialty.",
        cor: "red",
        icone: "institucional",
      },
      {
        titulo: "Plurality & Integration",
        descricao: "Brings together different schools and specialists toward a shared mission.",
        cor: "blue",
        icone: "integracao",
      },
      {
        titulo: "Scientific Rigor",
        descricao: "Consolidates cutting-edge knowledge for surgical practice, education, and reference.",
        cor: "navy",
        icone: "cientifico",
      },
    ],
    sobreAObra: "The Treatise on Spine Surgery is an academic reference work, published exclusively in print. This website was developed to support reading by providing an index, summaries, presentation of the work, information about the authors, and bibliographic references.",
  },
  es: {
    breadcrumb: "Inicio > El Tratado > Prefacio",
    badge: "TEXTO INSTITUCIONAL",
    titulo: "Prefacio",
    subtitulo: "Una reflexión sobre el significado institucional y científico del Tratado de Cirugía de la Columna Vertebral.",
    autoresLinha: "Edson Pudles • Helton Defino • Marcelo Risso",
    avisoImpresso: "La lectura completa de este texto está disponible exclusivamente en la edición impresa del Tratado.",
    paragrafos: [
      "Hay obras que no se limitan a reunir conocimiento: traducen la madurez de una especialidad, reflejan la fuerza de una trayectoria colectiva y se afirman como la expresión de un legado. Es con este sentido que presentamos este Tratado de Cirugía de la Columna Vertebral.",
      "En el año en que cumple 40 años de existencia — trayectoria iniciada en 1986 con la creación del Comité de Patología de la Columna Vertebral de la Sociedad Brasileña de Ortopedia y Traumatología —, la Sociedad Brasileña de Columna alcanza un estado de notable solidez institucional y amplio reconocimiento en el ámbito médico.",
      "En un área marcada por gran complejidad técnica, permanente renovación científica y creciente responsabilidad asistencial, la SBC construyó una historia singular de compromiso con la formación y la educación médica continua del cirujano de columna en Brasil.",
      "Esta identidad se fortalece por su naturaleza plural e integradora, reuniendo a ortopedistas y neurocirujanos en torno a estándares rigurosos de formación, certificación y perfeccionamiento. Este Tratado refleja esta construcción colectiva y busca ofrecer una referencia amplia, actualizada y de elevado rigor científico para residentes, especialistas y profesores.",
    ],
    mensagemCentral: "Esta obra expresa la madurez de la especialidad y el compromiso permanente de la Sociedad Brasileña de Columna con la formación, la excelencia y la educación médica continua.",
    destaques: [
      {
        titulo: "Legado institucional",
        descricao: "La obra traduce la trayectoria y madurez de la especialidad.",
        cor: "red",
        icone: "institucional",
      },
      {
        titulo: "Pluralidad e integración",
        descricao: "Reúne diferentes escuelas y especialistas en torno a un objetivo común.",
        cor: "blue",
        icone: "integracao",
      },
      {
        titulo: "Rigor científico",
        descricao: "Consolida conocimiento actualizado para la práctica, enseñanza y referencia.",
        cor: "navy",
        icone: "cientifico",
      },
    ],
    sobreAObra: "El Tratado de Cirugía de la Columna Vertebral es una obra académica de referencia, publicada exclusivamente en formato impreso. Este sitio web fue desarrollado para apoyar la lectura, ofreciendo índice, resúmenes, presentación de la obra, información sobre los autores y referencias bibliográficas.",
  },
};

export const PREFACIO_DATA = PREFACIO_BY_LOCALE.pt;

export function getPrefacioData(locale: string = "pt"): PrefacioContentType {
  return PREFACIO_BY_LOCALE[locale] || PREFACIO_BY_LOCALE.pt;
}

export interface ApresentacaoContentType {
  breadcrumb: string;
  badge: string;
  titulo: string;
  subtitulo: string;
  autor: {
    nome: string;
    slug?: string;
    foto_url: string;
    titulos: string[];
  };
  avisoImpresso: string;
  paragrafos: string[];
  mensagemCentral: string;
  destaques: {
    titulo: string;
    descricao: string;
    cor: string;
    icone: string;
  }[];
  sobreAObra: string;
}

export const APRESENTACAO_BY_LOCALE: Record<string, ApresentacaoContentType> = {
  pt: {
    breadcrumb: "Início > O Tratado > Apresentação",
    badge: "TEXTO INSTITUCIONAL",
    titulo: "Apresentação",
    subtitulo: "Mensagem de abertura sobre a trajetória da Sociedade Brasileira de Coluna e o propósito formativo do Tratado de Cirurgia da Coluna Vertebral.",
    autor: {
      nome: "Prof. Dr. Elcio Landim",
      slug: "elcio-landim",
      foto_url: "/assets/elcio-landim.jpg",
      titulos: [
        "Ex-Presidente da Sociedade Brasileira de Coluna (1987–1988)",
        "Ex-Chefe do Grupo de Coluna da UNICAMP",
        "Ex-Chefe do Grupo de Coluna da Ortopedia da Santa Casa de São Paulo",
        "Ex-Chefe do Grupo de Escoliose da AACD",
      ],
    },
    avisoImpresso: "A leitura completa deste texto está disponível exclusivamente na edição impressa do Tratado.",
    paragrafos: [
      "Acompanhei de perto a trajetória da Sociedade Brasileira de Coluna desde os seus primeiros passos e tive o privilégio de testemunhar o quanto ela cresceu e se fortaleceu ao longo dos anos.",
      "Essa evolução se revela no aumento do número de membros, no aprimoramento dos processos de ingresso, na ampliação dos serviços credenciados para a formação de novos cirurgiões de coluna e, principalmente, na qualidade cada vez maior dessa formação.",
      "Ver esse caminho culminar na produção desta obra é motivo de grande satisfação. Este livro nasce com o propósito de orientar, ensinar e servir de referência tanto àqueles que iniciam sua trajetória na especialidade quanto aos profissionais já formados e experientes, contribuindo para o aprimoramento contínuo da cirurgia da coluna.",
    ],
    mensagemCentral: "Este Tratado nasce para orientar, ensinar e servir de referência, valorizando a formação qualificada e o aprimoramento contínuo da cirurgia da coluna.",
    destaques: [
      {
        titulo: "Trajetória da SBC",
        descricao: "Reconhece a evolução institucional e formativa da Sociedade Brasileira de Coluna.",
        cor: "red",
        icone: "institucional",
      },
      {
        titulo: "Formação de especialistas",
        descricao: "Valoriza os serviços credenciados, os processos de ingresso e a qualificação da formação.",
        cor: "blue",
        icone: "formacao",
      },
      {
        titulo: "Propósito da obra",
        descricao: "Apresenta o Tratado como referência para residentes, especialistas e docentes.",
        cor: "navy",
        icone: "proposito",
      },
    ],
    sobreAObra: "O Tratado de Cirurgia da Coluna Vertebral é uma obra acadêmica de referência, publicada exclusivamente em formato impresso. Este site foi desenvolvido para apoiar a leitura, oferecendo índice, resumos, apresentação da obra, informações sobre os autores e referências bibliográficas.",
  },
  en: {
    breadcrumb: "Home > The Treatise > Presentation",
    badge: "INSTITUTIONAL TEXT",
    titulo: "Presentation",
    subtitulo: "Opening message on the history of the Brazilian Spine Society and the educational purpose of the Treatise on Spine Surgery.",
    autor: {
      nome: "Prof. Dr. Elcio Landim",
      slug: "elcio-landim",
      foto_url: "/assets/elcio-landim.jpg",
      titulos: [
        "Former President of the Brazilian Spine Society (1987–1988)",
        "Former Head of the Spine Group at UNICAMP",
        "Former Head of the Spine Group of Orthopedics at Santa Casa de São Paulo",
        "Former Head of the Scoliosis Group at AACD",
      ],
    },
    avisoImpresso: "The full reading of this text is exclusively available in the printed edition of the Treatise.",
    paragrafos: [
      "I have closely followed the journey of the Brazilian Spine Society since its very first steps and had the privilege of witnessing how much it has grown and strengthened over the years.",
      "This evolution is evident in the increasing number of members, the enhancement of admissions processes, the expansion of accredited training services for new spine surgeons, and, above all, the ever-increasing quality of this education.",
      "Seeing this path culminate in the production of this masterwork is a source of immense satisfaction. This book was born with the purpose of guiding, teaching, and serving as a reference for both those embarking on their path in the specialty and experienced professionals, contributing to the continuous advancement of spine surgery.",
    ],
    mensagemCentral: "This Treatise is created to guide, teach, and serve as an authoritative reference, upholding qualified surgical training and the continuous advancement of spine surgery.",
    destaques: [
      {
        titulo: "History of the SBC",
        descricao: "Acknowledges the institutional and educational evolution of the Brazilian Spine Society.",
        cor: "red",
        icone: "institucional",
      },
      {
        titulo: "Specialist Training",
        descricao: "Values accredited programs, rigorous admission processes, and training excellence.",
        cor: "blue",
        icone: "formacao",
      },
      {
        titulo: "Purpose of the Work",
        descricao: "Presents the Treatise as a foundational reference for residents, specialists, and educators.",
        cor: "navy",
        icone: "proposito",
      },
    ],
    sobreAObra: "The Treatise on Spine Surgery is an academic reference work, published exclusively in print. This website was developed to support reading by providing an index, summaries, presentation of the work, information about the authors, and bibliographic references.",
  },
  es: {
    breadcrumb: "Inicio > El Tratado > Presentación",
    badge: "TEXTO INSTITUCIONAL",
    titulo: "Presentación",
    subtitulo: "Mensaje de apertura sobre la trayectoria de la Sociedad Brasileña de Columna y el propósito formativo del Tratado de Cirugía de la Columna Vertebral.",
    autor: {
      nome: "Prof. Dr. Elcio Landim",
      slug: "elcio-landim",
      foto_url: "/assets/elcio-landim.jpg",
      titulos: [
        "Ex-Presidente de la Sociedad Brasileña de Columna (1987–1988)",
        "Ex-Jefe del Grupo de Columna de la UNICAMP",
        "Ex-Jefe del Grupo de Columna de Ortopedia de la Santa Casa de São Paulo",
        "Ex-Jefe del Grupo de Escoliosis de la AACD",
      ],
    },
    avisoImpresso: "La lectura completa de este texto está disponible exclusivamente en la edición impresa del Tratado.",
    paragrafos: [
      "Acompañé de cerca la trayectoria de la Sociedad Brasileña de Columna desde sus primeros pasos y tuve el privilegio de presenciar cuánto creció y se fortaleció a lo largo de los años.",
      "Esa evolución se revela en el aumento del número de miembros, en la mejora de los procesos de admisión, en la ampliación de los centros acreditados para la formación de nuevos cirujanos de columna y, principalmente, en la calidad cada vez mayor de dicha formación.",
      "Ver este camino culminar en la producción de esta obra es motivo de gran satisfacción. Este libro nace con el propósito de orientar, enseñar y servir de referencia tanto a quienes inician su trayectoria en la especialidad como a profesionales experimentados, contribuyendo a la mejora continua de la cirugía de columna.",
    ],
    mensagemCentral: "Este Tratado nace para orientar, enseñar y servir de referencia, valorando la formación calificada y la mejora continua de la cirugía de la columna vertebral.",
    destaques: [
      {
        titulo: "Trayectoria de la SBC",
        descricao: "Reconoce la evolución institucional y formativa de la Sociedad Brasileña de Columna.",
        cor: "red",
        icone: "institucional",
      },
      {
        titulo: "Formación de especialistas",
        descricao: "Valora los servicios acreditados, los procesos de ingreso y la calidad de la formación.",
        cor: "blue",
        icone: "formacao",
      },
      {
        titulo: "Propósito de la obra",
        descricao: "Presenta el Tratado como referencia para residentes, especialistas y docentes.",
        cor: "navy",
        icone: "proposito",
      },
    ],
    sobreAObra: "El Tratado de Cirugía de la Columna Vertebral es una obra académica de referencia, publicada exclusivamente en formato impreso. Este sitio web fue desarrollado para apoyar la lectura, ofreciendo índice, resúmenes, presentación de la obra, información sobre los autores y referencias bibliográficas.",
  },
};

export const APRESENTACAO_DATA = APRESENTACAO_BY_LOCALE.pt;

export function getApresentacaoData(locale: string = "pt"): ApresentacaoContentType {
  return APRESENTACAO_BY_LOCALE[locale] || APRESENTACAO_BY_LOCALE.pt;
}

export const TODOS_AUTORES_AZ: Record<string, string[]> = {
  A: [
    "Adriano M. Lino Filho",
    "Alécio Rubens Dias Pereira Filho",
    "Alberto Ofenhejm Gotfryd",
    "Alderico Girão Campos de Barros",
    "Alessandro Gasbarrini",
    "Alexandre Fogaça Cristante",
    "Alexandre Medeiros Sampaio Januario",
    "Alexandre Philippe Boss Jaccard",
    "Alexandre Sadalla",
    "Alexan Roberto Teles",
    "Aluízio Augusto Arantes Junior",
    "Álvaro Diego Heredia Suárez",
    "Alysson Larocca Kulcheski",
    "Anderson Clayton Cardeal",
    "André Flávio Freire Pereira",
    "André Frazão Rosa",
    "André Luís Fernandes Andujar",
    "André Luís Sebben",
    "André Rafael Hübner",
    "Andrei Fernandes Joaquim",
    "Antônio Gutemberg de S. Martins",
    "Áquila Matos Soares",
    "Arthur Sampaio Façanha",
    "Asdrúbal Falavigna",
  ],
  B: [
    "Bernardo Drummond Braga",
    "Brian Guilherme Monteiro Motta Coimbra",
    "Bruna da Costa Ancheschi",
    "Bruno Pinto Coelho Fontes",
  ],
  C: [
    "Caio César Nogueira de Figueiredo",
    "Carlos Abreu de Aguiar",
    "Carlos Andres Amelungue Rodriguez",
    "Carlos Eduardo Garcez Teixeira",
    "Carlos Eduardo Gonzales Barsotti",
    "Charbel Jacob Júnior",
    "Charles André Carazza",
    "Chefe Mara Frau",
    "Chiara Cini",
    "Christiane Esteves Simões",
    "Christoher Cralcev",
    "Claudio E. Tatsui",
    "Clíneu de Mello Almada Filho",
    "Cristiano Magalhães Menezes",
  ],
  D: [
    "Daiane Gallina",
    "Daniel Duarte Perini",
    "David Del Curto",
    "Débora Yumi Yoshiura Orlandin Alves",
    "Delio Eulálio Martins",
    "Denis Seguchi Sakai",
    "Deoclecio Lima Bezerra Júnior",
    "Diogo Nogueira Ribeiro",
    "Douglas Kenji Narazaki",
  ],
  E: [
    "Edelvan Gabana",
    "Édílson Silva Machado",
    "Egon Ewaldo Linderfer Neto",
    "Emiliano Neves Vialle",
    "Enzo Pasetto Righesso",
    "Érasmo de Abreu Zardo",
    "Erich Vinicius de Paula",
  ],
  F: [
    "Felipe Neves Simões Monteiro",
    "Fernando Antônio Mendes Façanha Filho",
    "Fernando Augusto Dannenbrock",
    "Fernando Balsimelli",
    "Fernando Herrero",
    "Fernando Luiz Rolemberg Dantas",
    "Fernando Toni Marcelino da Silva",
    "Francisco José Albuquerque de Paula",
    "François Dantas",
  ],
  G: [
    "Gabriel Farias Alves",
    "Gabriel Pokorny",
    "Gabriela Neves Vaz",
    "Geraldo de Sá Carneiro-Filho",
    "Giancarlo Jorio Almeida",
    "Guilherme A. Ludwig",
    "Guilherme Neves de Lima Alves",
    "Guilherme Pojeiro Miranda",
    "Guilherme Poniewski Pajanoti",
    "Guilherme Rebechi Zuiani",
    "Gustavo Alves Brito Isaias",
    "Gustavo Borges Laurindo de Azevedo",
  ],
  H: [
    "Henrique Dagostin de Arjona",
    "Henrique Griese Luciano dos Santos",
  ],
  I: [
    "Igor Barreira Magro",
    "Igor de Barcellos Zanon",
    "Igor Ebert Cechin",
    "Igor Machado Cardoso",
    "Italo Gerado Rotondo",
    "Ivan Dias da Rocha",
  ],
  J: [
    "Jean Marcel Dambrós",
    "Jefferson Soares Leal",
    "João Paulo Machado Bergamaschi",
    "João Tomás Fernandes Castilho Garcia",
    "João Wtor Liboni Guimarães Rios",
    "Joel Abramczuk",
    "Jorge Rafael Durigan",
    "José Augusto Malheiros",
    "Jullyene Pokorny",
  ],
  K: [
    "Keren Santos Braghíróli",
    "Keilson de Oliveira Teixeira",
  ],
  L: [
    "Leon Clenes Penido Pinheiro",
    "Leonardo Yukio Jorge Asano",
    "Luca Erdmann Bini Cordeiro",
    "Lucas Gomes Pupp",
    "Lucas Silveira Rabello de Oliveira",
    "Luciano Miller Reis Rodrigues",
    "Luís Antonio Medeiros Moliterno",
    "Luís Eduardo Carelli",
    "Luís Eduardo Munhoz da Rocha",
    "Luís Gustavo Dall'Oglio da Rocha",
    "Luiz Müller Ávila",
    "Luiz Pimenta",
    "Luiz Roberto Gomes Vialle",
    "Luisa Jeannie Alves Mangueira",
  ],
  M: [
    "Marcello Henrique Nogueira-Barbosa",
    "Marcelo Abreu",
    "Marcelo Botelho Soares de Brito",
    "Marcelo Luis Mudo",
    "Marcelo Paulo Melo de Souza",
    "Márcio Oliveira Penna de Carvalho",
    "Márcio Vinhal de Carvalho",
    "Marco Aurelio Moscatelli",
    "Marcos Antônio Ferreira Júnior",
    "Marcos Antônio Tebet",
    "Marcos Gregory Cintra Parreira",
    "Marcus André Costa Ferreira",
    "Maria Eduarda Lima Vapiana",
    "Maria Fernanda Silber Caffaro",
    "Mateus Neves Faria Fernandes",
    "Matheus Augusto Maciel Santiago",
    "Matheus Bosa Vieira",
    "Matheus Pippa Defino",
    "Matheus Trindade Braxelas de Freitas",
    "Maurício Coelho Lima",
    "Maurício Luiz Malito",
    "Maurício Zanon",
    "Mauro dos Santos Volpi",
    "Mayra Macana Gomes",
    "Michel Alexandre Yazbek",
    "Morgana Vieira",
    "Murilo Tavares Daher",
  ],
  N: [
    "Naira dos Santos Gutierrez",
    "Nelson Astur Neto",
  ],
  O: [
    "Olavo Biraghi Letaif",
    "Orlando Righesso Neto",
    "Osmar José Santos de Moraes",
    "Otávio Vitório Alvarenga Pereira",
  ],
  P: [
    "Patricia Toscano Barreto Nogueira",
    "Paulo Henrique Carvalho Vasconcelos",
    "Paulo José Silva Ramos",
    "Paulo Tadeu Maia Cavali",
    "Pedro Alécio Nogueira",
    "Pedro Henrique Lacombe Antoneli",
  ],
  R: [
    "Rafael Barreto Silva",
    "Rafael Cardoso Prates",
    "Rafael Moraes Trincado",
    "Rafael Moriguchi",
    "Rangel Roberto de Assis",
    "Raphaell Martins Marcon",
    "Renato de Oliveira",
    "Renato Henriques Tavares",
    "Renato Hiroshi Salvioni Ueta",
    "René Kusabara",
    "Rian Souza Vieira",
    "Ricardo Acacio dos Santos",
    "Ricardo de Souza Perles Meirelles",
    "Ricardo José Rodriguez Ferreira",
    "Robert Meves",
    "Roberto Cristina Risso",
    "Roberto Waldemand Farias Pontes",
    "Rodrigo Amaral",
    "Rodrigo de Morais Hanriot",
    "Rodrigo dos Santos Grandini",
    "Rodrigo Góes Medéa de Mendonça",
    "Roger Schmidt Brock",
  ],
  S: [
    "Santiago Alexis Naranjo Tipan",
    "Sara Reis de Paula",
    "Sergio Afonso Hennemann",
    "Sergio Augusto Barbosa de Farias",
    "Sérgio Mariano Zuazo",
    "Sergio Zylbersztejn",
    "Sonja Ellen Lobo",
    "Sylvio Misiro Neto",
  ],
  T: [
    "Thiago Coutinho",
    "Tiago Ferreira Jorge",
    "Túlio Albuquerque de Moura Rangel",
  ],
  V: [
    "Victor Cavalcante Schussel",
    "Victor Kelles Tupy da Fonseca",
    "Vincenzo Fin Falavigna",
    "Vinicius Antônio Santos Aragão",
    "Vinicius de Mello Benites",
    "Vinicius Marques Carneiro",
    "Vinicius Tagle Guerra e Silva",
  ],
  W: [
    "Wallison José de Morias",
    "Waltemey Amancio Filho",
    "Werner Petry Silva",
    "William Genie Jacobsen Teixeira",
    "Wullker Kroner Campos",
  ],
  X: [
    "Xavier Soler Graells",
  ],
  Z: [
    "Zoraida Sachetto",
  ],
};
