import { Capitulo, SecaoInfo } from "../types";

export const SECOES: SecaoInfo[] = [
  {
    id: 1,
    tag: "secao-1",
    numero: 1,
    titulo_pt: "Conceitos Básicos",
    titulo_en: "Basic Concepts",
    titulo_es: "Conceptos Básicos",
    range: "Capítulos 1–11",
    iconId: "i-brain",
    colorClass: "red-row",
    totalCapitulos: 11,
  },
  {
    id: 2,
    tag: "secao-2",
    numero: 2,
    titulo_pt: "Diagnóstico",
    titulo_en: "Diagnosis",
    titulo_es: "Diagnóstico",
    range: "Capítulos 12–17",
    iconId: "i-search",
    colorClass: "red-row",
    totalCapitulos: 6,
  },
  {
    id: 3,
    tag: "secao-3",
    numero: 3,
    titulo_pt: "Lesões Traumáticas da Coluna Vertebral",
    titulo_en: "Traumatic Spine Injuries",
    titulo_es: "Lesiones Traumáticas de la Columna Vertebral",
    range: "Capítulos 18–26",
    iconId: "i-trauma",
    colorClass: "red-row",
    totalCapitulos: 9,
  },
  {
    id: 4,
    tag: "secao-4",
    numero: 4,
    titulo_pt: "Deformidades da Coluna Vertebral",
    titulo_en: "Spinal Deformities",
    titulo_es: "Deformidades de la Columna Vertebral",
    range: "Capítulos 27–41",
    iconId: "i-spine",
    colorClass: "red-row",
    totalCapitulos: 15,
    isCompact: true,
  },
  {
    id: 5,
    tag: "secao-5",
    numero: 5,
    titulo_pt: "Doenças Degenerativas",
    titulo_en: "Degenerative Diseases",
    titulo_es: "Enfermedades Degenerativas",
    range: "Capítulos 42–50",
    iconId: "i-disc",
    colorClass: "red-row",
    totalCapitulos: 9,
  },
  {
    id: 6,
    tag: "secao-6",
    numero: 6,
    titulo_pt: "Tumores na Coluna Vertebral",
    titulo_en: "Spine Tumors",
    titulo_es: "Tumores en la Columna Vertebral",
    range: "Capítulos 51–57",
    iconId: "i-tumor",
    colorClass: "blue-row",
    totalCapitulos: 7,
  },
  {
    id: 7,
    tag: "secao-7",
    numero: 7,
    titulo_pt: "Outras Doenças da Coluna",
    titulo_en: "Other Spinal Diseases",
    titulo_es: "Otras Enfermedades de la Columna",
    range: "Capítulos 58–61",
    iconId: "i-globe",
    colorClass: "blue-row",
    totalCapitulos: 4,
  },
  {
    id: 8,
    tag: "secao-8",
    numero: 8,
    titulo_pt: "Técnicas Cirúrgicas",
    titulo_en: "Surgical Techniques",
    titulo_es: "Técnicas Quirúrgicas",
    range: "Capítulos 62–92",
    iconId: "i-tools",
    colorClass: "blue-row",
    totalCapitulos: 31,
    isCompact: true,
  },
  {
    id: 9,
    tag: "secao-9",
    numero: 9,
    titulo_pt: "Complicações",
    titulo_en: "Complications",
    titulo_es: "Complicaciones",
    range: "Capítulos 93–100",
    iconId: "i-alert",
    colorClass: "blue-row",
    totalCapitulos: 8,
  },
  {
    id: 10,
    tag: "secao-10",
    numero: 10,
    titulo_pt: "Temas Complementares",
    titulo_en: "Complementary Topics",
    titulo_es: "Temas Complementarios",
    range: "Capítulos 101–109",
    iconId: "i-book",
    colorClass: "blue-row",
    totalCapitulos: 9,
  },
];

export const INITIAL_CHAPTERS: Capitulo[] = [
  { secao_id: 1, numero: 1, titulo_pt: "Embriologia da Coluna Vertebral", autores: "Erasmo de Abreu Zardo, Joel Abramczuk, Fernando Augusto Dannenbrock" },
  { secao_id: 1, numero: 2, titulo_pt: "Biomecânica da Coluna Vertebral", autores: "Marcos Antônio Tebet" },
  { secao_id: 1, numero: 3, titulo_pt: "Neuroanatomia Funcional da Medula Espinhal", autores: "Aluízio Augusto Arantes Junior, Bernardo Drummond Braga, Adriano M. Lino Filho, Diogo Nogueira Ribeiro" },
  { secao_id: 1, numero: 4, titulo_pt: "Anatomia Cirúrgica e Vias de Acesso da Coluna Cervical", autores: "Sara Reis de Paula, Mauro dos Santos Volpi, Bruno da Costa Ancheschi, Guilherme Pagioro Miranda" },
  { secao_id: 1, numero: 5, titulo_pt: "Anatomia Cirúrgica e Vias de Acesso da Coluna Torácica", autores: "Thiago Coutinho, Morgana Vieira" },
  { secao_id: 1, numero: 6, titulo_pt: "Anatomia Cirúrgica e Abordagens da Junção Toracolombar", autores: "Paulo Tadeu Maia Cavali, Aécio Rubens Dias Pereira Filho, Renato de Oliveira" },
  { secao_id: 1, numero: 7, titulo_pt: "Anatomia Cirúrgica e Vias de Acesso da Coluna Lombar e Lombossacra", autores: "Cristiano Magalhães Menezes, Jefferson Soares Leal" },
  { secao_id: 1, numero: 8, titulo_pt: "Coluna Vertebral no Plano Sagital", autores: "Marcelo Italo Risso Neto, Paulo Tadeu Maia Cavali" },
  { secao_id: 1, numero: 9, titulo_pt: "Princípios da Artrodese, Biologia do Enxerto e Substitutos Ósseos na Coluna", autores: "Raphael Martus Marcon, Matheus Augusto Maciel Santiago, Henrique Griese Luciano dos Santos" },
  { secao_id: 1, numero: 10, titulo_pt: "Biomecânica dos Implantes nas Fixações Vertebrais", autores: "Delio Eulálio Martins, Marcos Gregory Cintra Parreira" },
  { secao_id: 1, numero: 11, titulo_pt: "Disrafismo Espinhal – Defeitos do Tubo Neural", autores: "Márcio Vinhal de Carvalho" },
  { secao_id: 2, numero: 12, titulo_pt: "Anamnese e Exame Físico da Coluna Vertebral", autores: "Helton Luiz Aparecido Defino, Matheus Pippa Defino, Rian Souza Vieira" },
  { secao_id: 2, numero: 13, titulo_pt: "Neurofisiologia no Diagnóstico das Patologias da Coluna", autores: "Ricardo José Rodriguez Ferreira, Patrícia Toscano Barreto Nogueira, Roberto Waldesmand Farias Pontes" },
  { secao_id: 2, numero: 14, titulo_pt: "Monitorização Neurofisiológica Intraoperatória em Cirurgia de Coluna", autores: "Ricardo José Rodriguez Ferreira, Patrícia Toscano Barreto Nogueira, Roberto Waldesmand Farias Pontes" },
  { secao_id: 2, numero: 15, titulo_pt: "Diagnóstico por Imagem da Coluna Vertebral", autores: "Marcello Henrique Nogueira-Barbosa, Guilherme Naves de Lima Alves" },
  { secao_id: 2, numero: 16, titulo_pt: "Diagnóstico Diferencial: Doenças da Coluna e Condições Ortopédicas", autores: "Maria Fernanda Silber Caffaro, Rafael Moraes Trincado, Jorge Rafael Durigan" },
  { secao_id: 2, numero: 17, titulo_pt: "Diagnóstico Diferencial: Doenças da Coluna e Doenças Neurológicas", autores: "Charles André Carazzo, Werner Petry Silva" },
  { secao_id: 3, numero: 18, titulo_pt: "Avaliação da Coluna do Paciente Politraumatizado", autores: "Charbel Jacob Junior, Igor de Barcellos Zanon" },
  { secao_id: 3, numero: 19, titulo_pt: "Trauma Raquimedular", autores: "Emiliano Neves Vialle, Mauricio Zanon" },
  { secao_id: 3, numero: 20, titulo_pt: "Lesões Traumáticas da Coluna Cervical Alta", autores: "André Rafael Hübner, Igor Ebert Cechin, Alvaro Diego Heredia Suarez" },
  { secao_id: 3, numero: 21, titulo_pt: "Lesões Traumáticas da Coluna Cervical Subaxial", autores: "Edson Pudles, Luiz Gustavo Dal’Oglio da Rocha" },
  { secao_id: 3, numero: 22, titulo_pt: "Lesões Traumáticas da Coluna Torácica e Lombar", autores: "Alexandre Philippe Boss Jaccard, Carlos Andres Amelunge Rodriguez, Matheus Boss Vieira" },
  { secao_id: 3, numero: 23, titulo_pt: "Lesões Traumáticas do Sacro", autores: "Luiz Gustavo Dal’Oglio da Rocha, Otávio Vitório Alvarenga Pereira" },
  { secao_id: 3, numero: 24, titulo_pt: "Lesões Traumáticas da Coluna na Infância", autores: "Alexandre Fogaça Cristante, Matheus Trindade Bruxelas de Freitas, Caio César Nogueira de Figueiredo" },
  { secao_id: 3, numero: 25, titulo_pt: "Fraturas Vertebrais por Insuficiência", autores: "Xavier Soler Graells, Álynson Larocca Kulcheski, André Luís Sebben" },
  { secao_id: 3, numero: 26, titulo_pt: "Deformidades Pós-Traumáticas", autores: "Carlos Eduardo Gonçales Barsotti, Anderson Clayton Cardeal" },
  { secao_id: 4, numero: 27, titulo_pt: "Introdução às Deformidades da Coluna Vertebral", autores: "Edson Pudles, Helton Luiz Aparecido Defino" },
  { secao_id: 4, numero: 28, titulo_pt: "Escoliose de Início Precoce", autores: "Alexandre Fogaça Cristante, Santiago Alexis Naranjo Tipan, Caio César Nogueira de Figueiredo" },
  { secao_id: 4, numero: 29, titulo_pt: "Tratamento Não Cirúrgico das Escolioses", autores: "Túlio Albuquerque de Moura Rangel, André Flávio Freire Pereira, Marcelo Paulo Melo de Souza" },
  { secao_id: 4, numero: 30, titulo_pt: "Escoliose Neuromuscular", autores: "Carlos Abreu de Aguiar, Luca Erdmann Bini Cordeiro" },
  { secao_id: 4, numero: 31, titulo_pt: "Deformidades nos Disrafismos Espinhais", autores: "Paulo Tadeu Maia Cavali, Mauricio Coelho Lima, Alexander Junqueira Rossato" },
  { secao_id: 4, numero: 32, titulo_pt: "Escoliose na Neurofibromatose", autores: "Luís Eduardo Munhoz Da Rocha" },
  { secao_id: 4, numero: 33, titulo_pt: "Deformidades Congênitas da Coluna Vertebral", autores: "Luiz Müller Avila, Carlos Abreu de Aguiar" },
  { secao_id: 4, numero: 34, titulo_pt: "Escoliose Idiopática", autores: "Helton Luiz Aparecido Defino, Matheus Pippa Defino, Rian Souza Vieira" },
  { secao_id: 4, numero: 35, titulo_pt: "Escoliose do Adulto", autores: "Alexandre Fogaça Cristante, Vinícius Antônio Santos Aragão, Daniel Duarte Perini" },
  { secao_id: 4, numero: 36, titulo_pt: "Escoliose nas Síndromes Genéticas", autores: "Olavo Biraghi Letaif, Vinícius Antônio Santos Aragão, Débora Yumi Yoshimura Orlandin Alves" },
  { secao_id: 4, numero: 37, titulo_pt: "Escoliose Idiopática de Alto Valor Angular", autores: "Alderico Girão Campos de Barros, Luis Eduardo Carelli, Giancarlo Jorio Almeida" },
  { secao_id: 4, numero: 38, titulo_pt: "Espondilolistese na Criança", autores: "André Luis Fernandes Andujar, Rodrigo dos Santos Grandini, Henrique Dagostin de Arjona" },
  { secao_id: 4, numero: 39, titulo_pt: "Espondilolistese no Adulto", autores: "Rodrigo Amaral, Jullyene Pokorny, Gabriel Pokorny, Fernando Toni Marcelino da Silva, Rafael Moriguchi, Igor Barreira Magro, Luiz Pimenta" },
  { secao_id: 4, numero: 40, titulo_pt: "Cifose", autores: "Helton Luiz Aparecido Defino, Matheus Pippa Defino, Rian Souza Vieira" },
  { secao_id: 4, numero: 41, titulo_pt: "Deformidades da Coluna Cervical", autores: "Luis Eduardo Carelli, Alderico Girão Campos de Barros, Lucas Gomes Pupp" },
  { secao_id: 5, numero: 42, titulo_pt: "Fisiopatologia da Degeneração Discal", autores: "Orlando Righesso Neto, Asdrubal Falavigna, Vincenzo Fin Falavigna, Maria Eduarda Lima Viapiana, Enzo Pasetto Righesso" },
  { secao_id: 5, numero: 43, titulo_pt: "Hérnia de Disco Cervical", autores: "Aluízio Augusto Arantes Junior, Bernardo Drummond Braga, Diogo Nogueira Ribeiro, Adriano M. Lino Filho" },
  { secao_id: 5, numero: 44, titulo_pt: "Hérnia de Disco Torácica", autores: "Murilo Tavares Daher, Luna Jeannie Alves Mangueira, Fernando Balsimelli" },
  { secao_id: 5, numero: 45, titulo_pt: "Hérnia de Disco Lombar", autores: "Renato Hiroshi Salvioni Ueta, Tiago Ferreira Jorge, Victor Cavalcante Schussel, Gabriela Neves Vaz" },
  { secao_id: 5, numero: 46, titulo_pt: "Estenose Lombar: Diagnóstico e Manejo Contemporâneo", autores: "Robert Meves, Rodrigo Góes Medéa de Mendonça" },
  { secao_id: 5, numero: 47, titulo_pt: "Instabilidade Vertebral", autores: "Edson Pudles" },
  { secao_id: 5, numero: 48, titulo_pt: "Estenose Cervical, Mielopatia Cervical Degenerativa e Ossificação do Ligamento Longitudinal Posterior", autores: "Fernando Luiz Rolemberg Dantas, François Dantas, Victor Kelles Tupy da Fonseca" },
  { secao_id: 5, numero: 49, titulo_pt: "Infiltrações e Radiofrequência na Coluna Vertebral", autores: "Sylvio Mistro Neto, Marcelo Italo Risso Neto" },
  { secao_id: 5, numero: 50, titulo_pt: "Medicina Regenerativa no Manejo da Doença Degenerativa da Coluna", autores: "Edilson Silva Machado, Robert Meves" },
  { secao_id: 6, numero: 51, titulo_pt: "Princípios no Manejo das Neoplasias da Coluna Vertebral", autores: "Marcelo Italo Risso Neto, Guilherme Rebechi Zuiani" },
  { secao_id: 6, numero: 52, titulo_pt: "Instabilidade Vertebral em Neoplasia de Coluna", autores: "Luiz Roberto Gomes Vialle, Otávio Vitório Alvarenga Pereira" },
  { secao_id: 6, numero: 53, titulo_pt: "Tumores Benignos e Lesões Pseudotumorais da Coluna", autores: "Alderico Girão Campos de Barros, Luis Eduardo Carelli, Gabriel Farias Alves" },
  { secao_id: 6, numero: 54, titulo_pt: "Tumores Ósseos Primários Malignos", autores: "Brian Guilherme Monteiro Marta Coimbra, William Gemio Jacobsen Teixeira, Daniel Duarte Perini" },
  { secao_id: 6, numero: 55, titulo_pt: "Tumores Metastáticos na Coluna", autores: "Marcelo Italo Risso Neto, André Frazao Rosa" },
  { secao_id: 6, numero: 56, titulo_pt: "Tumores Intramedulares e Extramedulares: Classificação, Diagnóstico e Manejo", autores: "Leon Cleres Penido Pinheiro, Osmar José Santos de Moraes" },
  { secao_id: 6, numero: 57, titulo_pt: "Radioterapia nos Tumores de Coluna", autores: "Rodrigo de Morais Hanriot, Naira dos Santos Gutierrez" },
  { secao_id: 7, numero: 58, titulo_pt: "Infecção Primária da Coluna Vertebral", autores: "Edson Pudles" },
  { secao_id: 7, numero: 59, titulo_pt: "Doenças Reumáticas da Coluna Vertebral", autores: "Carlos Eduardo Garcez Teixeira, Michel Alexandre Yazbek, Zoraida Sachetto" },
  { secao_id: 7, numero: 60, titulo_pt: "Doenças Metabólicas que Afetam a Coluna", autores: "Mayra Macena Gomes, Francisco José Albuquerque de Paula" },
  { secao_id: 7, numero: 61, titulo_pt: "Tratamento Cirúrgico das Doenças Reumáticas da Coluna", autores: "Raphael Martus Marcon, Matheus Augusto Maciel Santiago, Henrique Griese Luciano dos Santos" },
  { secao_id: 8, numero: 62, titulo_pt: "Endoscopia Transforaminal na Coluna Lombossacra", autores: "João Paulo Machado Bergamaschi, Marcelo Botelho Soares de Brito, Sonja Ellen Lobo" },
  { secao_id: 8, numero: 63, titulo_pt: "Endoscopia Interlaminar na Coluna Lombossacra", autores: "Marcio Oliveira Penna de Carvalho, Marco Aurelio Moscatelli, Rafael Barreto Silva" },
  { secao_id: 8, numero: 64, titulo_pt: "Cirurgia Endoscópica Uniportal no Segmento Torácico", autores: "Ivan Dias da Rocha, Edelvan Gabana" },
  { secao_id: 8, numero: 65, titulo_pt: "Endoscopia na Coluna Cervical pela Via Posterior", autores: "David Del Curto, Gabriela Neves Vaz, Victor Cavalcante Schussel, Tiago Ferreira Jorge" },
  { secao_id: 8, numero: 66, titulo_pt: "Endoscopia na Coluna Cervical pela Via Anterior", autores: "Kelsen de Oliveira Teixeira, Rangel Roberto de Assis, Sonja Ellen Lobo, João Paulo Machado Bergamaschi" },
  { secao_id: 8, numero: 67, titulo_pt: "Endoscopia Unilateral Biportal", autores: "Bernardo Drummond Braga, Walison José de Morais, Mateus Neves Faria Fernandes" },
  { secao_id: 8, numero: 68, titulo_pt: "Artrodese Intersomática Lombar Posterior", autores: "Jean Marcel Dambrós, Alvaro Diego Heredia Suarez, Igor Ebert Cechin" },
  { secao_id: 8, numero: 69, titulo_pt: "Artrodese Lombar em Single-Position Lateral", autores: "Cristiano Magalhães Menezes, Jefferson Soares Leal" },
  { secao_id: 8, numero: 70, titulo_pt: "Artrodese Lombar Prone Transpsoas", autores: "Luiz Pimenta, Rodrigo Amaral, Jullyene Pokorny, Gabriel Pokorny" },
  { secao_id: 8, numero: 71, titulo_pt: "Artrodese Lombar Oblíqua", autores: "José Augusto Malheiros, Marcos Antonio Ferreira Junior" },
  { secao_id: 8, numero: 72, titulo_pt: "Artrodese Lombar Anterior", autores: "Alisson Roberto Teles, Antonio Gutemberg de S. Martins, Guilherme A. Ludwig" },
  { secao_id: 8, numero: 73, titulo_pt: "Artroplastia da Coluna", autores: "Vinicius de Meldau Benites" },
  { secao_id: 8, numero: 74, titulo_pt: "Técnicas Cirúrgicas para a Fixação da Coluna Cervical Alta", autores: "Geraldo de Sá Carneiro-Filho, Deoclides Lima Bezerra Júnior" },
  { secao_id: 8, numero: 75, titulo_pt: "Técnicas de Fixação Cervical Anterior", autores: "Jeronimo Buzetti Milano, Egon Ewaldo Lindorfer Neto" },
  { secao_id: 8, numero: 76, titulo_pt: "Fixação Posterior da Coluna Cervical", autores: "Renato Henriques Tavares, Luis Antonio Medeiros Moliterno, Giancarlo Jorio Almeida" },
  { secao_id: 8, numero: 77, titulo_pt: "Laminoplastia Cervical: Princípios, Técnicas e Evidências Atuais", autores: "Roger Schmidt Brock, Áquila Matos Soares" },
  { secao_id: 8, numero: 78, titulo_pt: "Parafusos Pediculares na Coluna Torácica, Lombar e Lombossacra – Técnica Free-Hand", autores: "Paulo Tadeu Maia Cavali, Marcelo Italo Risso Neto" },
  { secao_id: 8, numero: 79, titulo_pt: "Fixação do Ilíaco – Técnica S2 Alar Ilíaco", autores: "Olavo Biraghi Letaif, Débora Yumi Yoshimura Orlandin Alves, Italo Gerardo Rotondo" },
  { secao_id: 8, numero: 80, titulo_pt: "Técnicas de Fixação na Coluna Osteoporótica", autores: "Fernando Antônio Mendes Façanha Filho, Arthur Sampaio Façanha, Paulo Henrique Carvalho Vasconcelos" },
  { secao_id: 8, numero: 81, titulo_pt: "Ostetomias da Coluna Vertebral", autores: "Ricardo Acacio Dos Santos, Fernando Herrero" },
  { secao_id: 8, numero: 82, titulo_pt: "Aplicação do Halo e Tração Craniana", autores: "Mauricio Coelho Lima, Paulo Tadeu Maia Cavali, Alexander Junqueira Rossato, Marcelo Italo Risso Neto" },
  { secao_id: 8, numero: 83, titulo_pt: "Colete Gessado para Escoliose de Início Precoce", autores: "André Luis Fernandes Andujar, Rodrigo dos Santos Grandini, Cheila Mara Freu" },
  { secao_id: 8, numero: 84, titulo_pt: "Infiltrações e Bloqueios da Coluna", autores: "Alberto Ofenhejm Gotfryd, João Tomás Fernandes Castilho Garcia" },
  { secao_id: 8, numero: 85, titulo_pt: "Sistemas de Crescimento Guiado para Deformidades da Coluna: Hastes de Crescimento Tradicionais", autores: "Bruno Pinto Coelho Fontes, João Vitor Liboni Guimarães Rios" },
  { secao_id: 8, numero: 86, titulo_pt: "Técnica de Fixação Bipolar da Coluna Vertebral", autores: "Alexander Junqueira Rossato, Mauricio Coelho Lima, Paulo Tadeu Maia Cavali" },
  { secao_id: 8, numero: 87, titulo_pt: "Técnicas de Correção Cirúrgica das Deformidades da Coluna Vertebral", autores: "Denis Seguchi Sakai" },
  { secao_id: 8, numero: 88, titulo_pt: "Vertebrectomia Torácica e Lombar nas Neoplasias", autores: "Ricardo de Souza Portes Meirelles, Christiano Esteves Simões, Gustavo Borges Laurindo de Azevedo, Paulo José Silva Ramos, Vinicius Tapie Guerra e Silva, Alessandro Gasbarrini, Otávio Vitório Alvarenga Pereira, Chiara Cini" },
  { secao_id: 8, numero: 89, titulo_pt: "Sacrectomia", autores: "Christiano Esteves Simões, Otávio Vitório Alvarenga Pereira" },
  { secao_id: 8, numero: 90, titulo_pt: "Cirurgia Complexa dos Tumores Cervicais", autores: "Douglas Kenji Narazaki, Santiago Alexis Naranjo Tipan, Arthur Sampaio Façanha" },
  { secao_id: 8, numero: 91, titulo_pt: "Técnicas Minimamente Invasivas para Tratamento e Adjuvância nos Tumores da Coluna Vertebral", autores: "Marcelo Luis Mudo, Claudio E. Tatsui" },
  { secao_id: 8, numero: 92, titulo_pt: "Navegação e Robótica", autores: "Helton Luiz Aparecido Defino, Vinicius Marques Carneiro, Matheus Pippa Defino" },
  { secao_id: 9, numero: 93, titulo_pt: "Infecções Pós-Operatórias", autores: "Mauro dos Santos Volpi, Bruno da Costa Ancheschi, Sara Reis de Paula" },
  { secao_id: 9, numero: 94, titulo_pt: "Lesão Dural, Aracnoidite e Fibrose Pós-Operatória", autores: "Wuilker Knoner Campos, Walterney Amancio Filho" },
  { secao_id: 9, numero: 95, titulo_pt: "Queda das Respostas na Monitoração Neurofisiológica Intraoperatória", autores: "Luciano Miller Reis Rodrigues, Guilherme Pianowski Pajanoti, Lucas Silveira Rabello de Oliveira" },
  { secao_id: 9, numero: 96, titulo_pt: "Doença do Nível Adjacente", autores: "Igor Machado Cardoso, Charbel Jacob Junior" },
  { secao_id: 9, numero: 97, titulo_pt: "Pseudoartrose e Falha Mecânica da Instrumentação na Cirurgia da Coluna Vertebral", autores: "Nelson Astur Neto, Felipe Neves Simões Monteiro, Rafael Cardoso Prates" },
  { secao_id: 9, numero: 98, titulo_pt: "Complicações da Abordagem Anterior da Coluna", autores: "Aécio Rubens Dias Pereira Filho" },
  { secao_id: 9, numero: 99, titulo_pt: "Lesão Neurológica Perioperatória", autores: "Marcus André Costa Ferreira, Leonardo Yukio Jorge Asano, Alexandre Medeiros Sampaio Januario" },
  { secao_id: 9, numero: 100, titulo_pt: "Síndrome da Falha da Cirurgia da Coluna Vertebral", autores: "Sergio Afonso Hennemann, Marcelo Abreu" },
  { secao_id: 10, numero: 101, titulo_pt: "Junção Craniovertebral: Anormalidades Congênitas, Adquiridas e Trauma", autores: "Luis Eduardo Carelli, Alderico Girão Campos de Barros, Alessandro Maria Bianconi" },
  { secao_id: 10, numero: 102, titulo_pt: "Manejo da Dor Aguda e Crônica na Coluna Vertebral", autores: "Roberta Cristina Risso, Karen Santos Braghiroli" },
  { secao_id: 10, numero: 103, titulo_pt: "Abordagens para o Tratamento da Dor Pós-Operatória em Cirurgia de Coluna", autores: "João Abrão, Sérgio Mariano Zuazo" },
  { secao_id: 10, numero: 104, titulo_pt: "Anestesia para Cirurgia da Coluna Vertebral", autores: "Mauricio Luiz Malito" },
  { secao_id: 10, numero: 105, titulo_pt: "Controle do Sangramento Intraoperatório", autores: "Erich Vinicius de Paula, Christopher Cralcev, Gustavo Alves Brito Isaias" },
  { secao_id: 10, numero: 106, titulo_pt: "Uso de Órteses na Coluna Vertebral", autores: "Sergio Zylbersztejn, Pedro Henrique Lacombe Antoneli, Daiane Gallina" },
  { secao_id: 10, numero: 107, titulo_pt: "Segurança em Cirurgia de Coluna", autores: "Guilherme Rebechi Zuiani, Marcelo Italo Risso Neto" },
  { secao_id: 10, numero: 108, titulo_pt: "Manejo do Paciente Frágil com Sarcopenia em Cirurgia de Coluna", autores: "Clineu de Mello Almada Filho, René Kusabara" },
  { secao_id: 10, numero: 109, titulo_pt: "Avaliação dos Resultados em Cirurgia de Coluna", autores: "Pedro Aleixo Nogueira, Sérgio Augusto Barbosa de Farias, Andrei Fernandes Joaquim" },
];

export interface ChapterApproachObjective {
  objetivo: string;
  focoClinico: string;
  indicacoes: string;
}

export function getChapterApproachObjective(
  chapterNum: number,
  secaoId: number,
  locale: "pt" | "en" | "es" = "pt"
): ChapterApproachObjective {
  // 1. Specific Chapter Customizations
  if (chapterNum === 8) {
    if (locale === "en") {
      return {
        objetivo:
          "Establish radiographic spinopelvic parameters (Pelvic Incidence, Pelvic Tilt, Sacral Slope, SVA, and Lumbar Lordosis) and Dubousset's cone of economy for restoring global functional balance and preventing mechanical failure.",
        focoClinico:
          "Analysis of regional lordosis distribution, Roussouly classification, SRS-Schwab modifiers, and GAP score in spinal reconstructive planning.",
        indicacoes:
          "Mandatory preoperative assessment for multi-level lumbar fusions, adult spinal deformity corrections, and revision procedures.",
      };
    }
    if (locale === "es") {
      return {
        objetivo:
          "Establecer los parámetros radiográficos espinopélvicos (Incidencia Pélvica, Versión Pélvica, Pendiente Sacra, SVA y Lordosis Lumbar) y el cono de economía de Dubousset para restaurar el equilibrio funcional y prevenir fallas mecánicas.",
        focoClinico:
          "Análisis de distribución de lordosis regional, clasificación de Roussouly, modificadores SRS-Schwab y puntuación GAP en planificación reconstructiva.",
        indicacoes:
          "Evaluación preoperatoria obligatoria en artrodesis lumbares múltiples, corrección de deformidades del adulto y cirugías de revisión.",
      };
    }
    return {
      objetivo:
        "Estabelecer os parâmetros radiográficos espinopélvicos (Incidência Pélvica, Versão Pélvica, Inclinação Sacral, SVA e Lordose Lombar) e o cone de economia para restauração do equilíbrio funcional global e prevenção de falha mecânica.",
      focoClinico:
        "Análise da distribuição regional da lordose, classificação de Roussouly, modificadores SRS-Schwab e GAP Score no planejamento cirúrgico reconstrutivo.",
      indicacoes:
        "Avaliação pré-operatória mandatória em artrodeses lombares multiníveis, cirurgias de deformidade do adulto e revisões de instrumentação.",
    };
  }

  if (chapterNum === 45) {
    if (locale === "en") {
      return {
        objetivo:
          "Establish precise diagnostic criteria and step-by-step surgical techniques for lumbar disc herniation, comparing tubular microdiscectomy, endoscopy, and standard laminotomy with nerve root decompression.",
        focoClinico:
          "Targeted nerve root mobilization, prevention of dural tears, preservation of facet joint integrity, and postoperative recovery pathways.",
        indicacoes:
          "Persistent radicular pain refractory to conservative therapy, progressive motor deficit, and cauda equina syndrome.",
      };
    }
    if (locale === "es") {
      return {
        objetivo:
          "Establecer criterios diagnósticos precisos y técnicas quirúrgicas paso a paso para la hernia discal lumbar, comparando microdiscectomía tubular, endoscopia y laminotomía con descompresión radicular.",
        focoClinico:
          "Movilización radicular controlada, prevención de fístula dural, preservación de la faceta articular y protocolo de recuperación precoz.",
        indicacoes:
          "Dolor radicular persistente refractario al tratamiento conservador, déficit motor progresivo y síndrome de cola de caballo.",
      };
    }
    return {
      objetivo:
        "Estabelecer critérios diagnósticos de precisão e técnicas cirúrgicas passo a passo para a hérnia de disco lombar, comparando microdiscectomia tubular, endoscopia e laminotomia com descompressão radicular direta.",
      focoClinico:
        "Mobilização radicular atraumática, prevenção de lesão dural, preservação da articulação facetária e reabilitação pós-operatória acelerada.",
      indicacoes:
        "Dor radicular refratária ao tratamento conservador, déficit motor progressivo e síndrome da cauda equina.",
    };
  }

  if (chapterNum === 62 || chapterNum === 63 || chapterNum === 67) {
    if (locale === "en") {
      return {
        objetivo:
          "Demonstrate step-by-step endoscopic access techniques (transforaminal, interlaminar, and unilateral biportal endoscopy), anatomical landmarks, instrument handling, and high-definition visualization for neural decompression.",
        focoClinico:
          "Minimally invasive targeted bone resection, ligamentum flavum flavectomy, and foraminal decompression with minimal muscle disruption.",
        indicacoes:
          "Foraminal, central, and lateral recess lumbar stenosis, recurrent herniations, and foraminal disc pathologies.",
      };
    }
    if (locale === "es") {
      return {
        objetivo:
          "Demostrar el paso a paso técnico de abordajes endoscópicos (transforaminal, interlaminar y biportal unilateral), referencias anatómicas y manejo de instrumental de alta definición para descompresión neural.",
        focoClinico:
          "Resección ósea selectiva mínimamente invasiva, flavectomía y descompresión foraminal con preservación de la masa muscular paravertebral.",
        indicacoes:
          "Estenosis foraminal y de receso lateral, hernias discales recidivantes y radiculopatías compresivas lumbares.",
      };
    }
    return {
      objetivo:
        "Demonstrar o passo a passo técnico das abordagens endoscópicas (transforaminal, interlaminar e biportal unilateral), referências anatômicas, triangulação de instrumental e descompressão neural sob visualização em alta definição.",
      focoClinico:
        "Ressecção óssea seletiva minimamente invasiva, flavectomia e descompressão foraminal com mínima agressão aos tecidos moles paravertebrais.",
      indicacoes:
        "Estenose foraminal e de recesso lateral, hérnias discais recidivadas e patologias foraminais lumbossacras.",
    };
  }

  // 2. Section Level Default Objectives
  switch (secaoId) {
    case 1:
      if (locale === "en") {
        return {
          objetivo:
            "Provide solid foundations in embryology, spine biomechanics, surgical anatomy, functional neuroanatomy, and biological principles of bone grafting and implant fixation.",
          focoClinico:
            "Three-dimensional anatomical understanding of surgical corridors, neural structures protection, and biomechanical stabilization rules.",
          indicacoes:
            "Essential foundational knowledge for diagnostic formulation, surgical access planning, and safe spinal instrumentation.",
        };
      }
      if (locale === "es") {
        return {
          objetivo:
            "Proporcionar bases sólidas de embriología, biomecánica espinal, anatomía quirúrgica, neuroanatomía funcional y principios biológicos de injertos y fijación con implantes.",
          focoClinico:
            "Comprensión anatómica tridimensional de vías de abordaje, protección de estructuras neurales y reglas biomecánicas de estabilización.",
          indicacoes:
            "Conocimiento fundamental indispensable para el diagnóstico, planificación de abordajes y fijación espinal segura.",
        };
      }
      return {
        objetivo:
          "Proporcionar bases sólidas em embriologia, biomecânica da coluna, anatomia cirúrgica, neuroanatomia funcional e princípios biológicos de enxertia e fixação com implantes.",
        focoClinico:
          "Compreensão anatômica tridimensional das vias de acesso, proteção de estruturas neurais e regras biomecânicas de estabilização segmentar.",
        indicacoes:
          "Conhecimento fundamental indispensável para o diagnóstico assertivo, planejamento de acessos e fixação espinhal segura.",
      };

    case 2:
      if (locale === "en") {
        return {
          objetivo:
            "Systematize physical examination, intraoperative neurophysiological monitoring, advanced magnetic resonance and CT protocols for accurate spinal differential diagnosis.",
          focoClinico:
            "High-precision semiological differentiation between spinal disorders, neurological conditions, and peripheral orthopedic pathologies.",
          indicacoes:
            "Comprehensive clinical investigation in patients presenting with back pain, radiculopathy, myelopathy, or suspected spinal lesions.",
        };
      }
      if (locale === "es") {
        return {
          objetivo:
            "Sistematizar el examen físico, monitorización neurofisiológica intraoperatoria, resonancia magnética avanzada y tomografía computarizada para el diagnóstico diferencial.",
          focoClinico:
            "Diferenciación semiológica de alta precisión entre patologías de columna, afecciones neurológicas y condiciones ortopédicas periféricas.",
          indicacoes:
            "Investigación clínica exhaustiva en pacientes con dolor axial, radiculopatía, mielopatía o sospecha de lesiones raquídeas.",
        };
      }
      return {
        objetivo:
          "Sistematizar o exame físico minucioso, monitorização neurofisiológica intraoperatória, ressonância magnética e tomografia para diagnóstico diferencial de alta acurácia.",
        focoClinico:
          "Diferenciação semiológica de precisão entre patologias espinhais, afecções neurológicas e condições ortopédicas periféricas.",
        indicacoes:
          "Investigação clínica completa em pacientes com dor axial, radiculopatia, mielopatia ou suspeita de lesões estruturais da coluna.",
      };

    case 3:
      if (locale === "en") {
        return {
          objetivo:
            "Standardize emergency management of spinal cord injury, polytrauma evaluation, AO Spine/TLICS classification, and surgical criteria for decompression and stabilization.",
          focoClinico:
            "Early spinal canal decompression, restoration of spinal alignment, rigid posterior or anterior fixation, and neurological preservation.",
          indicacoes:
            "Cervical, thoracic, lumbar, sacral, and pediatric fractures, post-traumatic deformities, and vertebral insufficiency fractures.",
        };
      }
      if (locale === "es") {
        return {
          objetivo:
            "Estandarizar el manejo de urgencia en trauma raquimedular, evaluación en politraumatizados, clasificaciones AO Spine/TLICS y criterios quirúrgicos de estabilización.",
          focoClinico:
            "Descompresión temprana del canal medular, restauración de la alineación espinal, fijación estable y preservación neurológica.",
          indicacoes:
            "Fracturas cervicales, torácicas, lumbares, sacras e infantiles, deformidades postraumáticas y fracturas por insuficiencia.",
        };
      }
      return {
        objetivo:
          "Padronizar o atendimento de urgência no trauma raquimedular, avaliação no paciente politraumatizado, classificações AO Spine/TLICS e critérios de estabilização cirúrgica.",
        focoClinico:
          "Descompressão precoce do canal vertebral, restauração dos eixos anatômicos, fixação estável e preservação neurológica.",
        indicacoes:
          "Fraturas cervicais, torácicas, lombares, sacrais e infantis, deformidades pós-traumáticas e fraturas vertebrais por insuficiência.",
      };

    case 4:
      if (locale === "en") {
        return {
          objetivo:
            "Detail three-dimensional deformity evaluation, conservative bracing protocols, guided-growth techniques, corrective osteotomies, and fusion levels selection.",
          focoClinico:
            "Multiplanar curve correction, balance restoration, avoidance of junctional kyphosis (PJK/DJK), and functional preservation.",
          indicacoes:
            "Early-onset scoliosis, adolescent idiopathic scoliosis (AIS), adult deformity, neuromuscular deformities, and spondylolisthesis.",
        };
      }
      if (locale === "es") {
        return {
          objetivo:
            "Detallar la evaluación tridimensional de deformidades, protocolos de corsé ortopédico, técnicas de crecimiento guiado, osteotomías y selección de niveles de fusión.",
          focoClinico:
            "Corrección multiplanar de curvas, restauración del balance sagital/coronal, prevención de cifosis de unión (PJK) y preservación funcional.",
          indicacoes:
            "Escoliosis de inicio temprano, escoliosis idiopática del adolescente, deformidades del adulto, escoliosis neuromuscular y espondilolistesis.",
        };
      }
      return {
        objetivo:
          "Detalhar a avaliação tridimensional das deformidades, protocolos de uso de coletes, sistemas de crescimento guiado, osteotomias corretivas e escolha dos níveis de artrodese.",
        focoClinico:
          "Correção multiplanar das curvas, restauração do alinhamento global, prevenção de cifose juncional proximal (PJK) e preservação funcional.",
        indicacoes:
          "Escoliose de início precoce, escoliose idiopática do adolescente (EIA), deformidades do adulto, escolioses neuromusculares e espondilolisteses.",
      };

    case 5:
      if (locale === "en") {
        return {
          objetivo:
            "Elucidate degenerative disc cascades, cervical and lumbar canal stenosis, spondylosis, and modern interventional and surgical decompressive solutions.",
          focoClinico:
            "Targeted neural decompression, preservation of segmental motion when feasible (arthroplasty), and indicated interbody stabilization.",
          indicacoes:
            "Cervical and lumbar disc herniations, degenerative spondylolisthesis, lumbar spinal stenosis, and degenerative cervical myelopathy.",
        };
      }
      if (locale === "es") {
        return {
          objetivo:
            "Elucidar la cascada degenerativa discal, estenosis del canal cervical y lumbar, espondilosis y alternativas de tratamiento intervencionista y quirúrgico.",
          focoClinico:
            "Descompresión neural selectiva, preservación del movimiento segmentario cuando esté indicado (artroplastia) y estabilización intersomática.",
          indicacoes:
            "Hernias de disco cervicales y lumbares, espondilolistesis degenerativa, estenosis de canal y mielopatía cervical espondilótica.",
        };
      }
      return {
        objetivo:
          "Elucidar a cascada degenerativa discal e facetária, estenose de canal cervical e lombar, espondilose e alternativas de manejo intervencionista e cirúrgico descompressivo.",
        focoClinico:
          "Descompressão neural seletiva, preservação do movimento segmentar quando indicado (artroplastia) e estabilização intersomática planejada.",
        indicacoes:
          "Hérnias de disco cervicais e lombares, espondilolistese degenerativa, estenose lombar e mielopatia cervical espondilótica.",
      };

    case 6:
      if (locale === "en") {
        return {
          objetivo:
            "Address oncological staging, spinal instability neoplastic score (SINS), stereotactic radiation therapy, en bloc resection, and vertebral reconstruction.",
          focoClinico:
            "Curative en bloc resection for primary lesions, palliative stabilization and targeted decompression for metastatic spinal disease.",
          indicacoes:
            "Primary benign and malignant bone tumors, metastatic cord compression, intramedullary lesions, and neoplastic spinal instability.",
        };
      }
      if (locale === "es") {
        return {
          objetivo:
            "Abordar la estadificación oncológica, escala de inestabilidad neoplásica (SINS), radiocirugía estereotáctica, resección en bloque y reconstrucción vertebral.",
          focoClinico:
            "Resección en bloque curativa en tumores primarios, estabilización paliativa y descompresión selectiva en metástasis vertebrales.",
          indicacoes:
            "Tumores óseos primarios benignos y malignos, compresión medular metastásica, lesiones intramedulares e inestabilidad neoplásica.",
        };
      }
      return {
        objetivo:
          "Abordar o estadiamento oncológico, escore de instabilidade neoplásica (SINS), radioterapia estereotáxica, ressecção em bloco (en bloc) e reconstrução vertebral.",
        focoClinico:
          "Ressecção curativa em bloco para tumores primários, estabilização paliativa e descompressão seletiva nas metástases vertebrais.",
        indicacoes:
          "Tumores ósseos primários benignos e malignos, compressão medular metastática, lesões intramedulares e instabilidade neoplásica.",
      };

    case 7:
      if (locale === "en") {
        return {
          objetivo:
            "Provide diagnostic algorithms and therapeutic strategies for primary spinal infections (spondylodiscitis), rheumatic disorders, osteoporosis, and metabolic bone disease.",
          focoClinico:
            "Etiological pathogen identification, targeted antibiotic regimens, surgical debridement, and rigid fixation in osteoporotic or infected bone.",
          indicacoes:
            "Pyogenic and tuberculosis spondylodiscitis, ankylosing spondylitis deformities, severe osteoporosis, and rheumatologic spine disease.",
        };
      }
      if (locale === "es") {
        return {
          objetivo:
            "Proporcionar algoritmos diagnósticos y estrategias terapéuticas para infecciones primarias (espondilodiscitis), enfermedades reumáticas y osteoporosis.",
          focoClinico:
            "Identificación microbiológica precoz, antibioticoterapia guiada, desbridamiento quirúrgico y fijación en hueso osteoporótico o infectado.",
          indicacoes:
            "Espondilodiscitis piógena y tuberculosa, espondilitis anquilosante, osteoporosis severa y complicaciones reumáticas vertebrales.",
        };
      }
      return {
        objetivo:
          "Prover algoritmos diagnósticos e estratégias terapêuticas para infecções primárias da coluna (espondilodiscites), doenças reumáticas, osteoporose e afecções metabólicas.",
        focoClinico:
          "Identificação microbiológica precoce, antibioticoterapia guiada, desbridamento cirúrgico e fixação estável em osso osteoporótico ou infectado.",
        indicacoes:
          "Espondilodiscite piogênica e tuberculosa, espondilite anquilosante, deformidades reumáticas e fraturas por fragilidade óssea.",
      };

    case 8:
      if (locale === "en") {
        return {
          objetivo:
            "Describe detailed step-by-step surgical techniques, including uniportal and biportal endoscopy, anterior/lateral fusions (ALIF, OLIF, LLIF), instrumentation, and robotics.",
          focoClinico:
            "Precision anatomical corridors, safe placement of pedicle screws and interbody cages, 3D spinal osteotomies, and navigation-guided surgery.",
          indicacoes:
            "Comprehensive technical execution of primary and revision spinal surgeries across cervical, thoracic, lumbar, and sacral levels.",
        };
      }
      if (locale === "es") {
        return {
          objetivo:
            "Describir el paso a paso quirúrgico detallado de técnicas mínimamente invasivas, endoscopia uni y biportal, fusiones intersomáticas (ALIF, OLIF, LLIF), fijaciones y robótica.",
          focoClinico:
            "Corredores anatómicos de precisión, inserción segura de tornillos pediculares y cajas intersomáticas, osteotomías y cirugía navegada.",
          indicacoes:
            "Ejecución técnica exhaustiva de procedimientos quirúrgicos primarios y de revisión en columnas cervical, torácica, lumbar y sacra.",
        };
      }
      return {
        objetivo:
          "Descrever detalhadamente o passo a passo técnico de cirurgias minimamente invasivas, endoscopia uni e biportal, fusões intersomáticas (ALIF, OLIF, LLIF), fixações e robótica.",
        focoClinico:
          "Corredores anatômicos de precisão, inserção segura de parafusos pediculares e cages intersomáticos, osteotomias tridimensionais e cirurgia guiada por navegação.",
        indicacoes:
          "Execução técnica completa de procedimentos primários e de revisão cirúrgica nos segmentos cervical, torácico, lombar e sacral.",
      };

    case 9:
      if (locale === "en") {
        return {
          objetivo:
            "Systematize protocols for prevention, intraoperative identification, and evidence-based management of surgical complications in spine procedures.",
          focoClinico:
            "Dural tears watertight repair, neuromonitoring alert management, revision of mechanical instrumentation failure, adjacent segment disease, and deep surgical infections.",
          indicacoes:
            "Managing perioperative neurological injury, pseudoarthrosis, hardware failure, cerebrospinal fluid leaks, and failed back surgery syndrome.",
        };
      }
      if (locale === "es") {
        return {
          objetivo:
            "Sistematizar protocolos de prevención, identificación intraoperatoria y manejo basado en evidencia de complicaciones en cirugía de columna.",
          focoClinico:
            "Reparación hermética de fístula dural, respuesta a alertas neuromonitorizadas, revisión de fallas de implantes, enfermedad del nivel adyacente e infecciones.",
          indicacoes:
            "Manejo de lesión neurológica perioperatoria, pseudoartrosis, rotura de implantes, fuga de LCR y síndrome de cirugía fallida de columna.",
        };
      }
      return {
        objetivo:
          "Sistematizar protocolos preventivos, identificação intraoperatória ágil e manejo baseado em evidências das complicações em cirurgia de coluna.",
        focoClinico:
          "Reparação hermética de fístulas liquóricas, resposta a alertas na monitorização neurofisiológica, revisão de falhas mecânicas, doença do nível adjacente e infecções profundas.",
        indicacoes:
          "Manejo de lesão neurológica perioperatória, pseudoartrose, soltura/quebra de implantes, fístula liquórica e síndrome pós-laminectomia (failed back surgery syndrome).",
      };

    case 10:
    default:
      if (locale === "en") {
        return {
          objetivo:
            "Examine transversal clinical themes including craniovertebral junction disorders, multimodal pain protocols, specialized spinal anesthesia, blood preservation, and PROMs.",
          focoClinico:
            "Multidisciplinary perioperative care, surgical patient safety, tranexamic acid protocols, and clinical outcome metrics evaluation.",
          indicacoes:
            "Comprehensive perioperative optimization, anesthesia planning, post-surgical pain therapy, and healthcare quality assessment.",
        };
      }
      if (locale === "es") {
        return {
          objetivo:
            "Examinar temas clínicos transversales como la unión craneovertebral, manejo multimodal del dolor, anestesia especializada, preservación hemática y PROMs.",
          focoClinico:
            "Cuidado perioperatorio multidisciplinario, seguridad del paciente quirúrgico, protocolos de ácido tranexámico y evaluación de resultados clínicos.",
          indicacoes:
            "Optimización perioperatoria integral, planificación anestésica, analgesia postoperatoria y medición de calidad asistencial.",
        };
      }
      return {
        objetivo:
          "Examinar temas clínicos transversais essenciais como anormalidades da transição craniocervical, manejo multimodal da dor aguda/crônica, anestesiologia especializada, controle de sangramento e PROMs.",
        focoClinico:
          "Cuidado perioperatório multidisciplinar, segurança do paciente cirúrgico, protocolos de preservação sanguínea e mensuração de desfechos em saúde.",
        indicacoes:
          "Otimização clínica pré e pós-operatória, planejamento anestésico, manejo de dor de difícil controle e auditoria de qualidade cirúrgica.",
      };
  }
}
