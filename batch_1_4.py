import json

with open('/Users/manoeldesign/.gemini/antigravity/brain/7e1703fb-1acf-40aa-a137-05338f0871de/scratch/slice_1_28_pt.json', 'r', encoding='utf-8') as f:
    pt = json.load(f)

en = {}
es = {}

# ==========================================
# CHAPTER 1
# ==========================================
en['1'] = {
  'numero': 1,
  'titulo': 'Embryology of the Spine',
  'secao': '',
  'autores': pt['1']['autores'],
  'contexto': 'The development of the vertebral column results from a coordinated sequence of events that begins in the earliest weeks of gestation and integrates the organization of the embryonic axis, the formation of the notochord and neural tube, the segmentation of somites, and the progressive differentiation of vertebral tissues. Understanding this sequence allows one to relate the definitive anatomy of the spine, intervertebral discs, axial musculature, spinal cord, and meninges to their embryonic origins. This chapter traces the transition from the bilaminar to the trilaminar embryonic disc, the formation of sclerotomes, and the resegmentation that confers an intersegmental character to the vertebrae. It also describes the mesenchymal, cartilaginous, and osseous stages as well as the differential growth between the vertebral column and the spinal cord. This knowledge provides a solid foundation for interpreting congenital malformations, segmentation failures, dysraphisms, and anatomical variations relevant to diagnosis and surgical planning.',
  'objetivo': 'To present, in chronological sequence, the primary embryonic processes involved in the formation of the vertebral column. By the end, the reader should recognize the role of gastrulation, the notochord, neurulation, and somites; understand the origin of vertebrae, intervertebral discs, and axial musculature; differentiate between mesenchymal, cartilaginous, and osseous stages; and correlate the differential growth of the spinal cord and meninges with definitive adult anatomy and congenital malformations.',
  'conteudo_principal': [
    {
      'subtitulo': 'From Implantation to Axial Organization',
      'texto': 'Following fertilization and cleavage, the blastocyst forms, traverses the uterine tube, and implants into the endometrium. In the second week, the amniotic cavity and chorionic sac develop while the embryoblast organizes into a bilaminar disc composed of epiblast and hypoblast. In the third week, gastrulation converts this disc into a trilaminar structure comprising ectoderm, mesoderm, and endoderm. The primitive streak, Hensen\'s node, primitive groove, and primitive pit guide cellular migration and establish the cranial-caudal and bilateral axes of the embryo.'
    },
    {
      'subtitulo': 'Notochord, Neurulation, and Somites',
      'texto': 'Mesenchymal cells originating from the region of the primitive node form the notochordal process, which progresses to the notochordal plate and subsequently to the continuous notochord. The notochord acts as the primary inductive center for the overlying neural plate. The neuroectoderm invaginates to form the neural groove and neural folds, which fuse by the end of the third week to form the neural tube. Following its separation from the surface ectoderm, neural crest cells emerge, giving rise to sensory ganglia, autonomic ganglia, and Schwann cells. Concurrently, the paraxial mesoderm segments into somites. By the end of the fifth week, 42 to 44 pairs develop, differentiating into sclerotomes and dermomyotomes. The sclerotome contributes to the formation of the vertebrae and ribs; the dermatome gives rise to the dermis and subcutaneous fibroblasts; and the myotome produces myoblasts forming the epaxial and hypaxial muscle masses. The epaxial musculature gives rise to the intrinsic deep extensors of the neck and spine, whereas the hypaxial portion forms the ventral and lateral muscular groups of the body wall.'
    },
    {
      'subtitulo': 'Resegmentation and Vertebral Formation',
      'texto': 'During the mesenchymal phase, sclerotome cells migrate and distribute around the notochord and neural tube. Each sclerotome possesses a cranial, less densely packed zone and a caudal, highly condensed zone. The reorganization of these cranial and caudal halves causes each mature vertebra to be formed from two adjacent sclerotomes, creating an intrinsically intersegmental bony structure. The mesenchymal centrum forms the vertebral body, while the mesenchyme surrounding the neural tube gives rise to the vertebral neural arch. The notochord regresses within the vertebral bodies but persists in the intervertebral spaces as the nucleus pulposus; the annulus fibrosus derives from the surrounding mesenchymal cells. Myotomes and spinal nerves maintain their original segmental arrangement, bridging the intervertebral joints, while intersegmental arteries cross over the middle of the newly formed vertebral bodies.'
    },
    {
      'subtitulo': 'Cartilaginous and Osseous Stages',
      'texto': 'The chondrification stage begins in the sixth week with the appearance of chondrification centers within the mesenchymal vertebrae. By the end of the embryonic period, the chondrification centers within the centrum fuse into a single cartilaginous centrum, and the bilateral chondrification centers of the neural arch unite with each other and with the vertebral body. Transverse and spinous processes develop from chondrification centers in the neural arches. Ossification begins during the embryonic period: primary ossification centers appear in the vertebral body and in each half of the neural arch. At birth, each vertebra consists of three bony elements united by cartilaginous synchondroses: the centrum and two halves of the arch. The arches fuse posteriorly between 3 and 5 years of age and join the centrum neurocentrally between 3 and 6 years. Secondary ossification centers (annular epiphyses, tips of spinous and transverse processes) appear during puberty, and complete vertebral ossification is reached only in early adulthood.'
    },
    {
      'subtitulo': 'Spinal Cord and Meninges',
      'texto': 'During the embryonic period, the spinal cord occupies the entire length of the vertebral canal, with spinal nerves exiting at their respective levels. Because the vertebral column and dura mater grow at a much faster rate than the spinal cord (differential growth), the caudal tip of the spinal cord (conus medullaris) assumes a progressively more cranial position, while the lumbosacral nerve roots elongate obliquely within the subarachnoid space to form the cauda equina. The conus medullaris is located at approximately L2–L3 in the neonate and ascends to the L1 level (or L1–L2 disc space) in the adult. The filum terminale represents the vestigial fibrous continuation resulting from the regression of the caudal spinal cord, extending from the conus medullaris to the coccyx. The primitive meninges surrounding the neural tube differentiate into the outer dura mater and inner leptomeninges (arachnoid and pia mater), establishing the subarachnoid space filled with cerebrospinal fluid.'
    }
  ],
  'aplicacao_clinica': 'In clinical practice, embryology serves as the fundamental key for interpreting normal spine anatomy and congenital malformations. The principle of sclerotomal resegmentation clarifies why mature vertebrae are intersegmental structures and why segmental nerves, arteries, and spinal muscles maintain their specific functional relationships across joints. Perturbations in sclerotome migration, chondrification, or fusion result in congenital anomalies such as hemivertebrae, block vertebrae, coronal/sagittal clefts, and segmentation failures. Neurulation defects and failure of posterior neural arch fusion form the pathological basis of the spectrum of spinal dysraphisms (spina bifida aperta and occulta, myelomeningocele, meningocele). The differential growth between the bony spine and neural tube explains the normal ascension of the conus medullaris, the orientation of the cauda equina, and conditions associated with spinal cord tethering (tethered cord syndrome, tight filum terminale). Although this chapter does not establish operative algorithms, it provides the morphological cornerstone essential for correctly diagnosing developmental spinal deformities and safely planning reconstructive spine surgery.',
  'mensagem_central': 'The vertebral column develops through an integrated sequence encompassing gastrulation, notochord induction, neurulation, paraxial somite differentiation, sclerotomal resegmentation, and progressive mesenchymal, cartilaginous, and osseous maturation. Understanding this embryological sequence provides the indispensable structural foundation for interpreting adult anatomy and recognizing the developmental origins of congenital spinal malformations, segmentation failures, and spinal dysraphisms.',
  'por_que_importa': 'Adult spinal anatomy cannot be fully comprehended without its embryological rationale. Sclerotomal resegmentation explains the intersegmental nature of vertebrae; notochordal persistence explains the origin of the nucleus pulposus; and differential growth clarifies the cranial ascent of the conus medullaris and the formation of the cauda equina. Integrating these developmental mechanisms equips the spine surgeon to identify congenital malformations, avoid diagnostic misinterpretations, and plan safe surgical approaches with heightened awareness of neurovascular and musculoskeletal relationships.',
  'decs': ['Embryonic Development', 'Spine', 'Notochord', 'Somites', 'Neurulation', 'Intervertebral Disc', 'Spinal Cord', 'Osteogenesis'],
  'mesh': ['Embryonic Development', 'Spine', 'Notochord', 'Somites', 'Neurulation', 'Intervertebral Disc', 'Spinal Cord', 'Osteogenesis'],
  'palavras_chave_livres': ['Sclerotome', 'Vertebral resegmentation', 'Mesenchymal stage', 'Conus medullaris ascent', 'Chondrification centers'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'The Notochord as the Primary Axis',
      'texto': 'The notochord organizes the embryonic craniocaudal axis and induces neural tube and axial skeleton formation. Although it regresses within the vertebral bodies, its persistence in the intervertebral spaces forms the nucleus pulposus, directly linking a transient embryonic structure to the definitive biomechanics of the mature spine.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Interpreting Malformations from Embryonic Origin',
      'texto': 'In hemivertebrae, block vertebrae, and segmentation failures, recognizing defects in sclerotomal condensation and resegmentation explains the observed deformities and guides surgical strategy. The same embryological framework applies to evaluating spinal dysraphisms, canal anomalies, and tethered cord syndrome.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Do Not Confuse Developmental Stages',
      'texto': 'The mesenchymal, cartilaginous, and osseous stages occur in a precise, sequential timeline and are not interchangeable. Confusing cartilaginous synchondroses with fracture lines or failure of fusion can lead to diagnostic errors in pediatric spine imaging. Vertebral maturation begins in utero and completes only in early adulthood.'
    }
  ],
  'referencias': pt['1']['referencias'],
  'seo': {
    'titulo': 'Embryology of the Spine | Spine Surgery Treatise',
    'meta_descricao': 'Comprehensive review of spinal embryological development: notochord, neurulation, somites, vertebral resegmentation, intervertebral discs, and spinal cord.',
    'resumo_chamada': 'Understand the embryonic sequence connecting notochord induction and somite resegmentation to the formation of vertebrae, discs, spinal cord, and congenital spinal anomalies.',
    'slug': 'embryology-of-the-spine'
  }
}

es['1'] = {
  'numero': 1,
  'titulo': 'Embriología de la Columna Vertebral',
  'secao': '',
  'autores': pt['1']['autores'],
  'contexto': 'El desarrollo de la columna vertebral es el resultado de una secuencia coordinada de eventos que se inicia en las primeras semanas de gestación e integra la organización del eje embrionario, la formación de la notocorda y del tubo neural, la segmentación de los somitas y la diferenciación progresiva de los tejidos vertebrales. La comprensión de esta secuencia permite relacionar la anatomía definitiva de la columna, los discos intervertebrales, la musculatura axial, la médula espinal y las meninges con sus orígenes embrionarios. El capítulo describe la transición del disco embrionario bilaminar al trilaminar, la formación de los esclerotomas y la resegmentación que confiere un carácter intersegmentario a las vértebras. Asimismo, detalla los estadios mesenquimatoso, cartilaginoso y óseo, así como el crecimiento diferencial entre la columna vertebral y la médula espinal. Este conocimiento ofrece una base fundamental para interpretar malformaciones congénitas, defectos de segmentación, disrafismos y variaciones anatómicas relevantes para el diagnóstico y la planificación quirúrgica.',
  'objetivo': 'Presentar, en secuencia cronológica, los principales procesos embrionarios involucrados en la formación de la columna vertebral. Al finalizar, el lector deberá reconocer el papel de la gastrulación, la notocorda, la neurulación y los somitas; comprender el origen de las vértebras, los discos intervertebrales y la musculatura axial; diferenciar los estadios mesenquimatoso, cartilaginoso y óseo; y correlacionar el crecimiento de la médula y las meninges con la anatomía definitiva y las malformaciones congénitas.',
  'conteudo_principal': [
    {
      'subtitulo': 'De la implantación a la organización axial',
      'texto': 'Tras la fecundación y la segmentación, se forma el blastocisto, que transita por la trompa uterina y se implanta en el endometrio. En la segunda semana aparecen la cavidad amniótica y el saco coriónico, mientras que el embrioblasto se organiza como un disco bilaminar constituido por epiblasto e hipoblasto. En la tercera semana, la gastrulación transforma este disco en una estructura trilaminar con ectodermo, mesodermo y endodermo. La línea primitiva, el nódulo de Hensen, el surco y la fosita primitiva orientan la migración celular y establecen el eje longitudinal y la simetría bilateral del embrión.'
    },
    {
      'subtitulo': 'Notocorda, neurulación y somitas',
      'texto': 'Las células mesenquimatosas originadas en la región del nódulo primitivo forman el proceso notocordal, que evoluciona a placa notocordal y, posteriormente, a la notocorda continua. La notocorda actúa como centro inductor fundamental de la placa neural suprayacente. El neuroectodermo se invagina formando el surco y los pliegues neurales, los cuales se fusionan al final de la tercera semana para constituir el tubo neural. Tras su separación del ectodermo superficial, emergen las células de la cresta neural, responsables del desarrollo de los ganglios sensitivos, autónomos y células de Schwann. Paralelamente, el mesodermo paraxial se segmenta en somitas. Hacia el final de la quinta semana se describen entre 42 y 44 pares de somitas diferenciados en esclerotoma y dermomiotoma. El esclerotoma contribuye a la formación de las vértebras y costillas; el dermatoma origina los fibroblastos de la dermis; y el miotoma produce los mioblastos de las porciones epiaxial e hipoaxial. La musculatura epiaxial originará los extensores intrínsecos del cuello y la columna, mientras que la porción hipoaxial forma los grupos musculares ventrales y laterales de la pared corporal.'
    },
    {
      'subtitulo': 'Resegmentación y formación vertebral',
      'texto': 'En la fase mesenquimatosa, las células de los esclerotomas migran y se distribuyen alrededor de la notocorda y del tubo neural. Cada esclerotoma presenta una mitad craneal menos densa y una mitad caudal densamente celular. La recombinación de estas mitades determina que cada vértebra definitiva se origine a partir de dos esclerotomas adyacentes, estableciendo una estructura intersegmentaria. El centro mesenquimatoso forma el cuerpo vertebral, mientras que el mesénquima que rodea el tubo neural da origen al arco vertebral. La notocorda involuciona en los cuerpos vertebrales y persiste en el espacio discal como núcleo pulposo; el anillo fibroso deriva de las células mesenquimatosas dispuestas circunferencialmente alrededor de la notocorda. Los miotomas y nervios espinales conservan su disposición segmentaria original, cruzando los espacios discales, mientras que las arterias intersegmentarias transcurren a la altura media de los cuerpos vertebrales.'
    },
    {
      'subtitulo': 'Estadios cartilaginoso y óseo',
      'texto': 'El estadio cartilaginoso inicia en la sexta semana con la aparición de centros de condrificación en las vértebras mesenquimatosas. Al final del periodo embrionario, los centros del cuerpo se unen en un centro cartilaginoso único y los arcos vertebrales se fusionan con el cuerpo. Las apófisis transversas y espinosas se desarrollan a partir de centros condrales en los arcos. La osificación comienza durante el periodo embrionario: aparecen centros primarios en el cuerpo y en cada mitad del arco vertebral. Al nacer, cada vértebra consta de tres partes óseas unidas por cartílago (sincondrosis neurocentrales y del arco). La fusión de los arcos posteriores ocurre entre los 3 y 5 años de edad, y la unión neurocentral entre los 3 y 6 años. Los centros de osificación secundarios (anillos epifisarios, vértices de apófisis) aparecen en la pubertad, completándose la maduración ósea en la edad adulta temprana.'
    },
    {
      'subtitulo': 'Médula espinal y meninges',
      'texto': 'Durante el periodo embrionario temprano, la médula espinal ocupa la totalidad del conducto vertebral. Debido a que la columna y la duramadre crecen con mayor rapidez que el tejido neural (crecimiento diferencial), el extremo distal de la médula (cono medular) adopta una posición progresivamente más craneal, mientras que las raíces lumbosacras se alargan oblicuamente en el espacio subaracnoideo para formar la cauda equina. En el recién nacido, el cono medular se sitúa a nivel L2–L3 y en el adulto alcanza L1 (o disco L1–L2). El filum terminale corresponde a la porción caudal regresiva de la médula y se extiende desde el cono hasta el cóccix. Las meninges primitivas que rodean el tubo neural se diferencian en duramadre externa y leptomeninges (aracnoides y piamadre), delimitando el espacio subaracnoideo.'
    }
  ],
  'aplicacao_clinica': 'En la práctica clínica, la embriología constituye la clave fundamental para interpretar la anatomía normal y las malformaciones de la columna vertebral. El principio de resegmentación esclerotomal permite comprender por qué las vértebras son estructuras intersegmentarias y por qué los nervios espinales, vasos y músculos mantienen relaciones funcionales coordinadas a través de las articulaciones. Las alteraciones en la formación, migración o fusión de los esclerotomas originan anomalías congénitas como hemivértebras, vértebras en bloque y defectos de segmentación. Los defectos en la neurulación y el cierre del arco neural explican el espectro de disrafismos espinales (espina bífida abierta y oculta, mielomeningocele). El crecimiento diferencial raquimedular explica el ascenso fisiológico del cono medular y la etiopatogenia del síndrome de médula anclada. Aunque el capítulo no describe algoritmos terapéuticos específicos, proporciona la base morfológica imprescindible para diagnosticar malformaciones vertebrales y planificar procedimientos quirúrgicos con máxima seguridad.',
  'mensagem_central': 'La columna vertebral se forma mediante una secuencia integrada que articula gastrulación, inducción notocordal, neurulación, segmentación somítica, resegmentación esclerotomal y maduración tisular mesenquimatosa, cartilaginosa y ósea. Comprender esta secuencia proporciona la base indispensable para interpretar la anatomía del adulto y el origen embrionario de las malformaciones congénitas y disrafismos espinales.',
  'por_que_importa': 'La anatomía vertebral del adulto no puede comprenderse cabalmente sin su fundamento embrionario. La resegmentación de los esclerotomas explica el carácter intersegmentario de las vértebras; la persistencia notocordal explica el origen del núcleo pulposo; y el crecimiento desigual entre el raquis y la médula justifica la posición del cono medular y la configuración de la cauda equina. Conocer estos procesos permite al cirujano de columna identificar malformaciones congénitas, evitar confusiones diagnósticas y planificar abordajes con pleno dominio de las relaciones anatómicas.',
  'decs': ['Desarrollo Embrionario', 'Columna Vertebral', 'Notocorda', 'Somitas', 'Neurulación', 'Disco Intervertebral', 'Médula Espinal', 'Osteogénesis'],
  'mesh': ['Embryonic Development', 'Spine', 'Notochord', 'Somites', 'Neurulation', 'Intervertebral Disc', 'Spinal Cord', 'Osteogenesis'],
  'palavras_chave_livres': ['Esclerotoma', 'Resegmentación vertebral', 'Estadio mesenquimatoso', 'Ascenso del cono medular', 'Centros de condrificación'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'La notocorda como eje organizador',
      'texto': 'La notocorda establece el eje longitudinal del embrión e induce la formación del tubo neural y del esqueleto axial. Aunque involuciona en los cuerpos vertebrales, persiste en los espacios intervertebrales formando el núcleo pulposo, uniendo de manera directa una estructura embrionaria transitoria con la anatomía y biomecánica definitivas de la columna.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Interpretar la malformación desde su origen',
      'texto': 'En hemivértebras y fallas de segmentación, comprender la alteración en la fusión de los esclerotomas explica la morfología tridimensional observada y fundamenta la estrategia quirúrgica. Este razonamiento embriológico debe guiar la evaluación de disrafismos, anomalías de osificación y médula anclada.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'No confundir los estadios de desarrollo',
      'texto': 'Los estadios mesenquimatoso, cartilaginoso y óseo son sucesivos y no intercambiables. Interpretar sincondrosis cartilaginosas normales como fracturas o fallas de fusión conduce a errores diagnósticos en pacientes pediátricos. La osificación vertebral inicia en el embrión y concluye en la adultez temprana.'
    }
  ],
  'referencias': pt['1']['referencias'],
  'seo': {
    'titulo': 'Embriología de la Columna Vertebral | Tratado de Cirugía de Columna',
    'meta_descricao': 'Síntesis del desarrollo embrionario de la columna vertebral: notocorda, neurulación, somitas, resegmentación vertebral, discos y médula espinal.',
    'resumo_chamada': 'Conozca la secuencia embrionaria que conecta la notocorda, los somitas y la neurulación con el desarrollo de vértebras, discos, médula espinal y malformaciones congénitas.',
    'slug': 'embriologia-de-la-columna-vertebral'
  }
}

# ==========================================
# CHAPTER 2
# ==========================================
en['2'] = {
  'numero': 2,
  'titulo': 'Biomechanics of the Spine',
  'secao': 'Section 1 — Basic Concepts',
  'autores': pt['2']['autores'],
  'contexto': 'The vertebral column must reconcile seemingly opposing mechanical demands: supporting substantial axial loads, permitting multiaxial mobility, maintaining postural stability, and protecting delicate neural structures. This combination is achieved through a segmental architecture in which vertebral bodies, intervertebral discs, zygapophyseal joints, ligaments, and spinal musculature function in an integrated fashion. Physiological spinal curvatures expand flexibility and shock-absorption capacity, while regional facet orientation dictates cervical, thoracic, and lumbar motion patterns. At the core of this system, the intervertebral disc redistributes hydrostatic pressure and withstands complex compressive, tensile, shear, and torsional forces. With aging and nucleus pulposus dehydration, this load distribution alters significantly, transferring disproportionate stress onto the annulus fibrosus and posterior facet joints. Understanding these biomechanical relationships is indispensable for analyzing degeneration, segmental instability, disc herniation, and canal stenosis, as well as for guiding surgical procedures that modify spinal kinematics.',
  'objetivo': 'To present the fundamental principles of spinal biomechanics, linking segmental architecture, physiological curvatures, facet joint orientation, intervertebral disc behavior, and three-dimensional kinematics. The chapter aims to enable the reader to analyze the effects of compression, shear, tension, and torsion; recognize how biomechanical disturbances drive degeneration and instability; and apply these concepts to clinical evaluation, dynamic radiographic studies, and operative planning.',
  'conteudo_principal': [
    {
      'subtitulo': 'Segmental Architecture and Biomechanical Functions',
      'texto': 'The spine is conceptualized as an articulated segmental column formed by functional spinal units (motion segments) acting in series. This organization combines sufficient rigidity to bear body weight and protect the neural elements with multiaxial flexibility for trunk and head movements. The primary biomechanical functions include axial load bearing, segmental mobility, neural protection, and postural stability. Physiological curvatures—cervical and lumbar lordosis, thoracic and sacral kyphosis—greatly enhance axial compliance and shock absorption compared to a straight column. Zygapophyseal facet joint orientation directly dictates regional kinematics: cervical facets facilitate coupled lateral bending and axial rotation; the thoracic rib cage and coronal facets restrict motion while providing rigidity; and lumbar sagittal facet orientation facilitates flexion-extension while markedly restricting axial rotation.'
    },
    {
      'subtitulo': 'Intervertebral Disc and Load Distribution',
      'texto': 'The intervertebral disc serves as the central shock absorber and distributor of mechanical loads between adjacent vertebrae. In young, healthy individuals, the highly hydrated nucleus pulposus behaves hydrostatically as an incompressible pressurized gel. Under axial compression, hydraulic pressure is exerted radially, allowing the combined nucleus and annulus fibrosus to distribute stress evenly across the vertebral endplates. With age-related and degenerative dehydration, the nucleus loses its hydrostatic capacity, shifting mechanical load circumferentially to the peripheral annulus fibrosus and posterior facet joints. This stress concentration increases susceptibility to annular tears, disc herniation, discogenic pain, and degenerative instability. Furthermore, torsional forces combined with flexion exert extreme shear stresses on annular lamellae, representing a primary mechanism of annular disruption and disc prolapse.'
    },
    {
      'subtitulo': 'Three-Dimensional Kinematics',
      'texto': 'Spinal kinematics characterizes intervertebral motion through translations and rotations within a Cartesian coordinate system (X, Y, and Z axes). Motion includes flexion-extension (rotation around the transverse X-axis), lateral bending (rotation around the sagittal Z-axis), and axial rotation (rotation around the vertical Y-axis), each with corresponding translational degrees of freedom. Regional variations in facet angle create distinct coupled motions, such as lateral bending coupled with ipsilateral or contralateral rotation in the cervical spine. The instantaneous axis of rotation (IAR) defines the pivot point around which a vertebral body rotates at any given instant during motion. Alterations or abnormal migrations of the IAR serve as sensitive indicators of degenerative disc disruption and segmental instability.'
    },
    {
      'subtitulo': 'Degeneration, Instability, and Neural Compression',
      'texto': 'Spinal degeneration follows a predictable biomechanical cascade initiated by nuclear dehydration and loss of disc height. Load redistribution toward the annulus and facet joints leads to facet hypertrophy, capsular laxity, osteophyte formation, and ligamentum flavum buckling. Segmental instability can manifest as hypermobility, dynamic retrolisthesis, or anterolisthesis on dynamic radiographs. The combination of disc space collapse, facet arthrosis, and ligamentous redundancy progressively narrows the central spinal canal and neural foramina, culminating in clinical radiculopathy or neurogenic claudication.'
    },
    {
      'subtitulo': 'Biomechanical Repercussions of Surgical Treatment',
      'texto': 'Every surgical intervention inherently alters load distribution and kinematic profiles across the operated segment and adjacent levels. The surgical approach (anterior, lateral, transforaminal, or posterior), instrumentation construct rigidity, and interbody implant design produce distinct biomechanical sequelae. Interbody fusion cages restore disc height, decompress neural foramina indirectly, and reestablish local lordosis and load-bearing columns. Failure to restore sagittal alignment or respect segmental kinematics increases the risk of pseudarthrosis, hardware failure, subsidence, and adjacent segment disease (ASD). Motion-preservation technologies, such as total disc arthroplasty, require meticulous preservation of facet integrity and careful patient selection based on baseline kinematics and global sagittal balance.'
    }
  ],
  'aplicacao_clinica': 'Biomechanical principles enable clinicians to differentiate static radiographic anomalies from dynamic mechanical dysfunction. In patients with suspected lumbar instability, flexion-extension radiographs and dynamic studies are crucial to detect abnormal translation, angulation, or paradoxical motion. In surgical planning, analysis must extend beyond local pathology to encompass regional and global spinopelvic alignment (pelvic incidence, lumbar lordosis, sagittal vertical axis). Interbody cage footprint, placement, and lordotic angle should be tailored to reconstruct the anterior column and restore the physiological center of rotation. Motion-preserving devices should not be implanted in the presence of severe facet arthrosis, uncontained instability, or fixed deformity. Recognizing the biomechanical interdependence of the anterior and posterior columns ensures durable surgical outcomes, minimizes implant failure, and protects adjacent motion segments from accelerated breakdown.',
  'mensagem_central': 'Spinal biomechanics depends on the harmonious integration of physiological curvatures, intervertebral discs, facet joints, ligaments, and dynamic muscle forces. Nucleus pulposus hydration, facet joint spatial orientation, and the instantaneous axis of rotation dictate load transmission and segmental stability. Treating structural spine conditions without accounting for motion dynamics, regional kinematics, and global sagittal balance compromises clinical outcomes and precipitates mechanical failure.',
  'por_que_importa': 'Every spinal intervention—from conservative rehabilitation to multi-level instrumented fusion—fundamentally modifies mechanical stresses. Understanding how the disc hydrostatically dissipates load, how facet orientation guides motion vectors, and how the instantaneous axis of rotation shifts in degeneration allows clinicians to accurately interpret instability and predict the structural consequences of surgical corrections. Relying solely on static imaging risks overlooking dynamic pathology and sagittal malalignment.',
  'decs': ['Biomechanical Phenomena', 'Spine', 'Intervertebral Disc', 'Intervertebral Disc Degeneration', 'Zygapophyseal Joint', 'Stress, Mechanical', 'Range of Motion, Articular', 'Joint Instability'],
  'mesh': ['Biomechanical Phenomena', 'Spine', 'Intervertebral Disc', 'Intervertebral Disc Degeneration', 'Zygapophyseal Joint', 'Stress, Mechanical', 'Range of Motion, Articular', 'Joint Instability'],
  'palavras_chave_livres': ['Instantaneous axis of rotation', 'Spinal kinematics', 'Spinopelvic alignment', 'Load distribution', 'Functional spinal unit'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Kinematics Dictated by Anatomy',
      'texto': 'Regional spinal mobility is not governed solely by the intervertebral disc. Facet joint spatial orientation, physiological curvatures, ligamentous restraints, and thoracic rib cage attachments determine the permissive planes of motion, coupled motions, and mechanical load-sharing capacity at each vertebral level.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Evaluate the Segment Dynamically',
      'texto': 'Functional instability often escapes detection on static supine imaging. In symptomatic patients with axial pain or suspected spondylolisthesis, dynamic standing radiographs (flexion-extension) are essential to demonstrate segmental hypermobility, abnormal angular excursion, and translational instability.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Local Alignment Is Never Enough',
      'texto': 'Restoring focal disc height without considering segmental lordosis, global sagittal alignment, and spinopelvic parameters induces compensatory stress transfer, elevating rates of adjacent segment degeneration, hardware pullout, and residual disability.'
    }
  ],
  'referencias': pt['2']['referencias'],
  'seo': {
    'titulo': 'Biomechanics of the Spine | Spine Surgery Treatise',
    'meta_descricao': 'In-depth overview of spinal biomechanics: functional spinal units, disc load distribution, 3D kinematics, instantaneous axis of rotation, and surgical implications.',
    'resumo_chamada': 'Explore how intervertebral discs, facet orientation, kinematics, and spinopelvic balance govern spinal load transfer, degenerative cascades, and reconstructive surgery.',
    'slug': 'biomechanics-of-the-spine'
  }
}

es['2'] = {
  'numero': 2,
  'titulo': 'Biomecánica de la Columna Vertebral',
  'secao': 'Sección 1 — Conceptos Básicos',
  'autores': pt['2']['autores'],
  'contexto': 'La columna vertebral debe conciliar exigencias mecánicas aparentemente opuestas: soportar cargas axiales elevadas, permitir movimientos multiaxiales, mantener la estabilidad postural y proteger las estructuras neurológicas. Esta combinación se logra mediante una arquitectura segmentaria en la que cuerpos vertebrales, discos intervertebrales, articulaciones cigapofisarias, ligamentos y músculos actúan de manera integrada. Las curvaturas fisiológicas aumentan la flexibilidad y la capacidad de absorción de impactos, mientras que la orientación regional de las facetas articulares condiciona los patrones de movimiento cervical, torácico y lumbar. En el centro de este sistema, el disco intervertebral distribuye presiones hidrostáticas y responde a fuerzas de compresión, tracción, cizallamiento y torsión. Con el envejecimiento y la deshidratación del núcleo pulposo, esta distribución se modifica, transfiriendo una sobrecarga desproporcionada al anillo fibroso y a las articulaciones posteriores. Comprender estas relaciones es esencial para interpretar los procesos degenerativos, la inestabilidad segmentaria, las hernias discales y las estenosis, así como para orientar la planificación de procedimientos quirúrgicos reconstructivos.',
  'objetivo': 'Presentar los principios fundamentales de la biomecánica de la columna vertebral, relacionando la arquitectura segmentaria, las curvaturas fisiológicas, la orientación facetaria, el comportamiento del disco intervertebral y la cinemática tridimensional. El capítulo busca capacitar al lector para interpretar los efectos de la compresión, el cizallamiento, la tracción y la torsión; reconocer la participación de las alteraciones biomecánicas en la degeneración y la inestabilidad; y aplicar estos conceptos a la evaluación clínica, los estudios dinámicos y la planificación quirúrgica.',
  'conteudo_principal': [
    {
      'subtitulo': 'Arquitectura segmentaria y funciones biomecánicas',
      'texto': 'La columna vertebral se define como una estructura segmentaria articulada compuesta por unidades funcionales operando en serie. Esta organización permite combinar una rigidez suficiente para soportar cargas y proteger la médula espinal con la movilidad necesaria para los movimientos de la cabeza y el tronco. Las funciones biomecánicas centrales incluyen la absorción de cargas axiales, la movilidad segmentaria, la protección neurológica y la estabilidad postural. Las curvaturas fisiológicas (lordosis cervical y lumbar, cifosis torácica y sacra) multiplican la resistencia elástica ante sobrecargas axiales. La orientación de las facetas articulares determina la cinemática regional: en la columna cervical facilita la inclinación lateral combinada con rotación axial; en la columna torácica, la caja torácica y las facetas coronales limitan la movilidad proporcionando estabilidad; y en la columna lumbar, la orientación predominantemente sagital favorece la flexoextensión y restringe la rotación axial.'
    },
    {
      'subtitulo': 'Disco intervertebral y distribución de cargas',
      'texto': 'El disco intervertebral actúa como el principal amortiguador y distribuidor de presiones entre vértebras adyacentes. En individuos jóvenes, el núcleo pulposo posee una elevada hidratación y se comporta como un gel hidrostático presurizable. Bajo compresión axial, la presión se transmite radialmente en sentido centrífugo, permitiendo que el núcleo y el anillo fibroso distribuyan las tensiones de manera uniforme sobre los platillos vertebrales. Con la deshidratación degenerativa, el núcleo pierde su comportamiento hidrostático, transfiriendo el soporte de cargas a la periferia del anillo fibroso y a las articulaciones facetarias posteriores. Esta sobrecarga favorece la aparición de fisuras anulares, hernias discales, inestabilidad y dolor discogénico. Las fuerzas de torsión axial asociadas a flexión incrementan drásticamente la tensión sobre las fibras del anillo, constituyendo el mecanismo principal de rotura anular.'
    },
    {
      'subtitulo': 'Cinemática tridimensional',
      'texto': 'La cinemática describe los movimientos vertebrales mediante rotaciones y traslaciones en un sistema tridimensional de coordenadas cartesianas (ejes X, Y y Z). La combinación de desplazamientos y giros alrededor de estos ejes describe la flexoextensión, la inclinación lateral y la rotación axial. La dirección y magnitud del movimiento dependen primordialmente de la orientación de las facetas articulares. El eje instantáneo de rotación (EIR) se define como el centro cinemático alrededor del cual un segmento vertebral rota en un instante determinado. La alteración y migración patológica del EIR constituye un marcador objetivo de degeneración discal e inestabilidad segmentaria.'
    },
    {
      'subtitulo': 'Degeneración, inestabilidad y compresión neural',
      'texto': 'La degeneración espinal sigue una cascada biomecánica que se inicia con la deshidratación del núcleo pulposo y la pérdida de altura discal. La redistribución de cargas hacia el anillo fibroso y las facetas articulares promueve hipertrofia facetaria, laxitud capsular, formación de osteofitos y redundancia del ligamento amarillo. La inestabilidad puede manifestarse como hipermovilidad, espondilolistesis o movilidad paradójica en radiografías dinámicas. La estenosis de canal y foraminal surge de la combinación progresiva de colapso discal, hipertrofia articular y engrosamiento ligamentario, reduciendo el espacio disponible para los elementos neurales.'
    },
    {
      'subtitulo': 'Repercusiones biomecánicas del tratamiento quirúrgico',
      'texto': 'Toda intervención quirúrgica modifica la distribución de cargas y la cinemática del segmento operado y de los niveles adyacentes. La selección de la vía de abordaje (anterior, lateral, transforaminal o posterior), la rigidez de la instrumentación y las características del implante intersomático generan repercusiones biomecánicas específicas. Los espaciadores intersomáticos (cages) restauran la altura discal, descomprimen indirectamente los forámenes y restituyen la lordosis segmentaria y el centro de rotación. Omitir la restauración del alineamiento sagital o alterar bruscamente la mecánica segmentaria predispone a seudoartrosis, falla de implantes, subsidencia y degeneración del segmento adyacente. Las tecnologías de preservación de movimiento (artroplastia discal) exigen una rigurosa indemnidad facetaria y un alineamiento espinopélvico conservado.'
    }
  ],
  'aplicacao_clinica': 'Los principios biomecánicos permiten al cirujano distinguir alteraciones morfológicas estáticas de disfunciones dinámicas sintomáticas. En pacientes con sospecha de inestabilidad lumbar, las radiografías dinámicas en flexoextensión son indispensables para evidenciar traslación anormal o apertura angular excesiva. En la planificación quirúrgica, la evaluación debe integrar los parámetros espinopélvicos y el equilibrio sagital global (incidencia pélvica, lordosis lumbar, eje vertical sagital). La colocación y lordosis del espaciador intersomático deben dimensionarse para restituir la altura del pilar anterior y el centro fisiológico de rotación. Evitar la fijación de deformidades sin corregir el balance sagital y respetar las articulaciones adyacentes son precauciones fundamentales para prevenir la sobrecarga mecánica y la falla del tratamiento.',
  'mensagem_central': 'La biomecánica de la columna resulta de la interacción coordinada entre curvaturas fisiológicas, discos intervertebrales, facetas articulares, ligamentos y fuerzas musculares. La hidratación del núcleo pulposo, la orientación facetaria y el eje instantáneo de rotación gobiernan la transmisión de cargas y la estabilidad segmentaria. Tratar la anatomía quirúrgica sin considerar la cinemática y el alineamiento sagital global perpetúa sobrecargas y conduce al fracaso mecánico.',
  'por_que_importa': 'Cualquier intervención raquídea —desde el manejo conservador hasta la artrodesis instrumentada— modifica sustancialmente las fuerzas mecánicas. Conocer la hidrostática discal, el acoplamiento de movimientos facetarios y el comportamiento del eje de rotación permite interpretar con precisión la inestabilidad y anticipar las repercusiones estructurales de la cirugía. Los estudios estáticos resultan insuficientes para diagnosticar fenómenos que solo se manifiestan durante la dinámica vertebral.',
  'decs': ['Fenómenos Biomecánicos', 'Columna Vertebral', 'Disco Intervertebral', 'Degeneración del Disco Intervertebral', 'Articulación Cigapofisaria', 'Estrés Mecánico', 'Rango del Movimiento Articular', 'Inestabilidad Articular'],
  'mesh': ['Biomechanical Phenomena', 'Spine', 'Intervertebral Disc', 'Intervertebral Disc Degeneration', 'Zygapophyseal Joint', 'Stress, Mechanical', 'Range of Motion, Articular', 'Joint Instability'],
  'palavras_chave_livres': ['Eje instantáneo de rotación', 'Cinemática tridimensional', 'Alineamiento espinopélvico', 'Distribución de cargas', 'Unidad funcional vertebral'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'El movimiento nace de la arquitectura',
      'texto': 'La movilidad de cada región vertebral no depende exclusivamente del disco. La orientación de las facetas articulares, las curvaturas fisiológicas, las estructuras ligamentosas y la contención de la caja torácica determinan los planos de movimiento permitidos, los movimientos acoplados y la capacidad de disipación de cargas.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Evaluar el segmento en movimiento',
      'texto': 'La inestabilidad segmentaria frecuentemente pasa desapercibida en estudios estáticos en decúbito. Ante la sospecha clínica de dolor mecánico o espondilolistesis, las radiografías dinámicas en bipedestación (flexoextensión) son esenciales para documentar hipermovilidad, traslación o movilidad paradójica.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'El alineamiento local no es suficiente',
      'texto': 'Restaurar la altura discal local sin reconstruir la lordosis segmentaria y el balance sagital global transfiere sobrecargas mecánicas a los niveles vecinos, incrementando el riesgo de enfermedad del segmento adyacente, subsidencia y falla de la osteosíntesis.'
    }
  ],
  'referencias': pt['2']['referencias'],
  'seo': {
    'titulo': 'Biomecánica de la Columna Vertebral | Tratado de Cirugía de Columna',
    'meta_descricao': 'Principios fundamentales de biomecánica raquídea: unidades funcionales, cinemática 3D, distribución de cargas discales, eje de rotación y repercusiones quirúrgicas.',
    'resumo_chamada': 'Descubra cómo discos, facetas, curvaturas fisiológicas y balance sagital gobiernan la transmisión de cargas, la degeneración y la planificación en cirugía de columna.',
    'slug': 'biomecanica-de-la-columna-vertebral'
  }
}

# ==========================================
# CHAPTER 3
# ==========================================
en['3'] = {
  'numero': 3,
  'titulo': 'Functional Neuroanatomy of the Spinal Cord',
  'secao': '',
  'autores': pt['3']['autores'],
  'contexto': 'The spinal cord integrates anatomical structures, segmental microcircuits, and long ascending and descending tracts responsible for motor control, sensory processing, posture, autonomic regulation, and reflex arcs. For the spine surgeon, mastering this organization requires correlating three critical dimensions: the topography of the cord and nerve roots within the spinal canal, the cross-sectional architecture of gray and white matter, and the pathways of long tracts. The developmental dissociation between bony vertebral levels and spinal cord segments (vertebromedullary dissociation) is of paramount importance, as a compressive lesion or bony fracture impacts neural structures located several segments cranial to the corresponding vertebral body. This chapter connects the anatomy of funiculi, gray horns, nuclei, and Rexed laminae to the clinical presentation of specific spinal cord syndromes, conus medullaris lesions, and cauda equina syndrome. This neuroanatomical expertise enables precise lesion localization, accurate neurological assessment, and safe operative planning.',
  'objetivo': 'To present the gross and cross-sectional anatomy of the spinal cord, its topographic relationship with the vertebral column, and the functional organization of neurons, Rexed laminae, funiculi, and spinal tracts. By the end, the reader should be able to correlate motor, sensory, and autonomic pathways with neurological examination findings; distinguish characteristic spinal cord syndromes; and apply neuroanatomical localization to surgical planning and decompression.',
  'conteudo_principal': [
    {
      'subtitulo': 'Gross Anatomy and Vertebromedullary Topography',
      'texto': 'The spinal cord is a cylindrical neural structure housed within the vertebral canal, extending from the medulla oblongata at the foramen magnum down to the conus medullaris, which terminates at the L1–L2 level in the adult. Cervical and lumbosacral enlargements correspond to segments giving origin to the brachial and lumbosacral plexuses, respectively. Longitudinal sulci delimit the cord surface, marking the exit of ventral (motor) roots and entry of dorsal (sensory) roots. The 31 pairs of spinal nerves correspond to 31 spinal cord segments. Because of differential growth between the vertebral column and spinal cord, lower roots lengthen within the thecal sac, forming the cauda equina. The rule of thumb for vertebromedullary correspondence is: add 2 from C2 to T10 spinous processes; T11–T12 spinous processes overlie lumbar segments; and the L1 spinous process overlies sacral and coccygeal segments.'
    },
    {
      'subtitulo': 'Meninges and Stabilizing Elements',
      'texto': 'The spinal dura mater extends from the foramen magnum to the S2 vertebral level, where the dural sac terminates. Dural sleeves invest exiting nerve roots and merge into the epineurium at the intervertebral foramen. The pia mater forms the filum terminale, which anchors the conus medullaris to the coccyx, and gives rise to the denticulate ligaments. Positioned laterally between dorsal and ventral rootlets, these twenty-one pairs of fibrous ligaments suspend and stabilize the cord within the subarachnoid space and serve as essential landmarks in intradural surgical approaches.'
    },
    {
      'subtitulo': 'Cross-Sectional Organization of Gray Matter',
      'texto': 'In cross section, the gray matter presents an "H" shape divided into anterior, posterior, and lateral horns (the lateral horn containing sympathetic preganglionic neurons from T1 to L2). Neurons are classified into radicular motor neurons, tract cells, and local interneurons (such as Renshaw cells mediating recurrent inhibition). Cytoarchitectonically, gray matter is divided into ten Rexed laminae: laminae I–IV process exteroceptive sensory inputs; lamina II (substantia gelatinosa of Rolando) modulates nociception via the pain gate mechanism; laminae V–VII process proprioceptive and visceral afferents; laminae VIII–IX contain alpha and gamma somatic motor neurons; and lamina X surrounds the central canal.'
    },
    {
      'subtitulo': 'Descending Pathways and Motor Control',
      'texto': 'The lateral motor system is primarily composed of the lateral corticospinal and rubrospinal tracts. The lateral corticospinal tract, which crosses at the medullary pyramidal decussation (85–90% of fibers), mediates fine voluntary control of distal limb musculature. The medial motor system includes the anterior corticospinal, tectospinal, vestibulospinal, and reticulospinal tracts, which control axial and proximal girdle muscles, maintain muscle tone, regulate equilibrium, and coordinate postural adjustments of the head, trunk, and limbs.'
    },
    {
      'subtitulo': 'Ascending Pathways and Syndromic Correlation',
      'texto': 'The dorsal column-medial lemniscal pathway (fasciculus gracilis and cuneatus) conducts conscious proprioception, discriminative fine touch, vibration, and stereognosis ipsilaterally before synapsing in the medulla. The anterior spinothalamic tract carries crude touch and pressure, while the lateral spinothalamic tract conducts pain and temperature, having decussated across the anterior white commissure 1 to 2 segments above entry. Spinocerebellar tracts convey unconscious proprioception to the cerebellum. This somatotopic and decussation pattern explains classical cord syndromes: Brown-Séquard syndrome (ipsilateral motor weakness and proprioceptive loss with contralateral loss of pain/temperature); central cord syndrome (greater motor deficit in upper extremities and dissociated sensory loss); and the distinct features of conus medullaris versus cauda equina lesions.'
    }
  ],
  'aplicacao_clinica': 'Clinical application begins with accurate neurological localization. Motor assessment differentiates lower motor neuron (flaccid paresis, hypotonia, hyporeflexia/areflexia, fasciculations) from upper motor neuron lesions (spasticity, hyperreflexia, clonus, positive Babinski sign). Sensory examination mapping light touch, proprioception, pinprick, and thermal discrimination pinpoints specific funicular involvement. Vertebromedullary dissociation prevents localization errors: compressing T11–T12 vertebrae injures lumbar spinal segments rather than lower thoracic nerves. In intradural surgery, denticulate ligaments provide safe lateral corridors and protect ventral motor roots. In distinguishing conus medullaris from cauda equina syndrome: conus lesions produce early bilateral, symmetric saddle anesthesia, prominent early sphincter dysfunction, and symmetric weakness with preserved or hyperactive ankle jerks; cauda equina lesions produce severe asymmetric radicular pain, patchy asymmetric flaccid motor weakness, and asymmetric lower extremity areflexia.',
  'mensagem_central': 'Functional neuroanatomy translates neurological signs into precise structural localization. Spinal cord topography, Rexed laminar organization, funicular somatotopy, and tract decussation patterns explain why specific focal lesions generate distinct motor, sensory, and autonomic syndromes. Mastering these pathways enables spine surgeons to differentiate cord, conus, and cauda equina lesions and plan surgical decompression at the exact neural level.',
  'por_que_importa': 'Neuroimaging reveals structural pathology, but neuroanatomy reveals neurological function and vulnerability. Recognizing vertebromedullary dissociation, understanding where sensory tracts decussate, and distinguishing medial from lateral motor systems are fundamental to accurately interpreting deficits and avoiding surgical exploration at the wrong anatomical level. This chapter provides the indispensable diagnostic bridge connecting clinical neurological examination, neuroimaging, and surgical intervention.',
  'decs': ['Spinal Cord', 'Gray Matter', 'White Matter', 'Pyramidal Tracts', 'Spinothalamic Tracts', 'Spinal Nerve Roots', 'Brown-Sequard Syndrome', 'Cauda Equina Syndrome'],
  'mesh': ['Spinal Cord', 'Gray Matter', 'White Matter', 'Pyramidal Tracts', 'Spinothalamic Tracts', 'Spinal Nerve Roots', 'Brown-Sequard Syndrome', 'Cauda Equina Syndrome'],
  'palavras_chave_livres': ['Vertebromedullary topography', 'Rexed laminae', 'Lateral motor system', 'Sensory dissociation', 'Conus medullaris syndrome'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Vertebral Level Does Not Equal Cord Segment',
      'texto': 'In the adult, the spinal cord terminates at L1–L2. Differential spinal growth elongates lumbosacral roots to form the cauda equina. Consequently, the spine surgeon must calculate vertebromedullary dissociation (adding 2 levels in the lower thoracic spine) when correlating radiological vertebral fractures with neurological deficits.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Localize Lesions by Neurological Syndrome',
      'texto': 'Ipsilateral motor weakness and dorsal column sensory loss combined with contralateral loss of pain and temperature indicates spinal cord hemisection (Brown-Séquard syndrome), reflecting the uncrossed lateral corticospinal tract and crossed spinothalamic pathway.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Differentiate Conus from Cauda Equina',
      'texto': 'Both conus medullaris and cauda equina lesions present with saddle anesthesia and sphincter dysfunction, but conus lesions feature symmetric deficits and early severe bowel/bladder impairment, whereas cauda equina compression presents with intense asymmetric radicular pain and patchy flaccid hyporeflexia.'
    }
  ],
  'referencias': pt['3']['referencias'],
  'seo': {
    'titulo': 'Functional Neuroanatomy of the Spinal Cord | Spine Surgery Treatise',
    'meta_descricao': 'Comprehensive guide to spinal cord functional neuroanatomy: vertebromedullary topography, Rexed laminae, motor/sensory tracts, and clinical cord syndromes.',
    'resumo_chamada': 'Master the neuroanatomy of spinal tracts, vertebromedullary topography, and Rexed laminae to accurately localize spinal lesions and distinguish cord syndromes.',
    'slug': 'functional-neuroanatomy-of-the-spinal-cord'
  }
}

es['3'] = {
  'numero': 3,
  'titulo': 'Neuroanatomía Funcional de la Médula Espinal',
  'secao': '',
  'autores': pt['3']['autores'],
  'contexto': 'La médula espinal integra estructuras anatómicas, circuitos segmentarios y vías largas ascendentes y descendentes responsables de la motricidad, la sensibilidad, el control postural, los arcos reflejos y la regulación autonómica. Para el cirujano de columna, dominar esta organización requiere correlacionar tres dimensiones fundamentales: la topografía de la médula y las raíces en el conducto raquídeo, la distribución de la sustancia gris y blanca en corte transversal y el trayecto de las vías largas. La disociación entre los niveles vertebrales y los segmentos medulares (disociación vertebromedular) reviste una importancia primordial, ya que una lesión ósea o compresiva puede comprometer estructuras neurales situadas varios segmentos por encima de lo sugerido por la vértebra correspondiente. El capítulo vincula la anatomía de los cordones, astas, núcleos y láminas de Rexed con los patrones clínicos de los síndromes medulares, del cono medular y de la cauda equina, permitiendo una localización precisa de las lesiones y una planificación quirúrgica rigurosa.',
  'objetivo': 'Presentar la anatomía macroscópica e interna de la médula espinal, su relación topográfica con la columna vertebral y la organización funcional de neuronas, láminas de Rexed, cordones y tractos. Al finalizar, el lector deberá correlacionar las vías motoras, sensitivas y autonómicas con los hallazgos del examen neurológico; distinguir patrones sindrómicos característicos; y aplicar la localización neuroanatómica a la planificación quirúrgica y descompresión.',
  'conteudo_principal': [
    {
      'subtitulo': 'Anatomía macroscópica y topografía vertebromedular',
      'texto': 'La médula espinal es una estructura cilíndrica alojada en el conducto vertebral que se extiende desde el bulbo raquídeo en el foramen magno hasta el cono medular, el cual finaliza a nivel L1–L2 en el adulto. Las intumescencias cervical y lumbosacra corresponden a los segmentos de origen de los plexos braquial y lumbosacro. Los surcos longitudinales delimitan la superficie medular y señalan la emergencia de las raíces ventrales (motoras) y la entrada de las raíces dorsales (sensitivas). Los 31 pares de nervios espinales corresponden a 31 segmentos medulares. Debido al crecimiento diferencial de la columna vertebral respecto a la médula, las raíces inferiores se alargan oblicuamente dentro del saco dural formando la cauda equina. Como regla práctica de correspondencia: sumar 2 a las apófisis espinosas de C2 a T10; T11–T12 se proyectan sobre los segmentos lumbares y L1 sobre los segmentos sacros y coccígeos.'
    },
    {
      'subtitulo': 'Meninges y elementos de fijación',
      'texto': 'La duramadre espinal se extiende desde el foramen magno hasta S2, donde termina el fondo de saco dural. Sus prolongaciones envainan las raíces nerviosas y se continúan con el epineuro en los forámenes intervertebrales. La piamadre forma el filum terminale, que fija caudalmente el cono al cóccix, y origina los ligamentos dentados. Dispuestos lateralmente entre las raíces ventrales y dorsales, estos ligamentos estabilizan la médula en el espacio subaracnoideo y constituyen puntos de referencia fundamentales en abordajes intradurales.'
    },
    {
      'subtitulo': 'Organización de la sustancia gris',
      'texto': 'En corte transversal, la sustancia gris adopta una morfología en "H" dividida en astas anteriores, posteriores y laterales (estas últimas presentes de T1 a L2 con neuronas preganglionares simpáticas). Las neuronas se dividen en radiculares motoras, cordonales y de axón corto (como las células de Renshaw mediadoras de inhibición recurrente). Citoarquitectónicamente, la sustancia gris se organiza en diez láminas de Rexed: las láminas I–IV procesan aferencias exteroceptivas; la lámina II (sustancia gelatinosa de Rolando) modula la nocicepción mediante la teoría de la compuerta; las láminas V–VII reciben información propioceptiva y visceral; las láminas VIII y IX contienen motoneuronas alfa y gamma; y la lámina X rodea el conducto ependimario central.'
    },
    {
      'subtitulo': 'Vías descendentes y control motor',
      'texto': 'El sistema motor lateral está compuesto principalmente por los tractos corticoespinal lateral y rubroespinal. El tracto corticoespinal lateral, que se decusa en las pirámides bulbares (85–90% de sus fibras), ejerce el control voluntario fino de la musculatura distal de las extremidades. El sistema motor medial incluye los tractos corticoespinal anterior, tectoespinal, vestibuloespinales y reticuloespinales, encargados de la musculatura axial y proximal, del tono postural, del equilibrio y de las respuestas automáticas de tronco y cabeza.'
    },
    {
      'subtitulo': 'Vías ascendentes y correlación sindrómica',
      'texto': 'El cordón posterior (fascículos grácil y cuneiforme) conduce propiocepción consciente, tacto discriminativo fino, vibración y estereognosia ipsilateralmente hasta los núcleos bulbares. El tracto espinotalámico anterior conduce tacto grueso y presión, mientras que el espinotalámico lateral transmite dolor y temperatura tras decusarse en la comisura blanca anterior. Las vías espinocerebelosas transportan propiocepción inconsciente al cerebelo. Esta distribución espacial explica los síndromes medulares clásicos: Brown-Séquard (déficit motor y propioceptivo ipsilateral con pérdida contralateral de termoalgesia); síndrome medular central (mayor debilidad en miembros superiores y disociación sensitiva); y las diferencias clínicas entre lesión del cono medular y de la cauda equina.'
    }
  ],
  'aplicacao_clinica': 'La aplicación clínica se fundamenta en la localización neuroanatómica topográfica. La exploración motora diferencia lesiones de motoneurona inferior (paresia flácida, hipotonía, arreflexia) de lesiones de motoneurona superior (espasticidad, hiperreflexia, clonus, signo de Babinski). La exploración sensitiva permite determinar el cordón o tracto lesionado al contrastar la propiocepción con la sensibilidad termoalgésica. La disociación vertebromedular evita errores diagnósticos en traumatismos toracolumbares. En cirugía intradural, los ligamentos dentados delimitan el corredor seguro hacia la cara anterior medular. En el diagnóstico diferencial, las lesiones del cono medular se manifiestan con anestesia en silla de montar bilateral y simétrica, compromiso esfinteriano precoz y debilidad simétrica; por el contrario, el síndrome de cauda equina se caracteriza por dolor radicular intenso y asimétrico, debilidad flácida parcheada y arreflexia asimétrica de extremidades inferiores.',
  'mensagem_central': 'La neuroanatomía funcional traduce la semiología clínica en localización anatómica exacta. La topografía vertebromedular, las láminas de Rexed, la distribución somatotópica de los cordones y la decusación de las vías explican por qué distintas lesiones medulares generan patrones sindrómicos específicos. Dominar estos conceptos permite diferenciar el compromiso medular, del cono y de la cauda equina, asegurando una descompresión en el nivel neural preciso.',
  'por_que_importa': 'La neuroimagen documenta la alteración estructural, pero la neuroanatomía determina la función neurológica en riesgo. Comprender la disociación vertebromedular, el nivel de decusación de los tractos y la organización de los sistemas motores permite interpretar déficits con precisión y evita exploraciones quirúrgicas en niveles erróneos. Este capítulo proporciona el lenguaje anatómico que vincula el examen físico con los hallazgos radiológicos y la técnica quirúrgica.',
  'decs': ['Médula Espinal', 'Sustancia Gris', 'Sustancia Blanca', 'Tractos Piramidales', 'Tractos Espinotalámicos', 'Raíces Nerviosas Espinales', 'Síndrome de Brown-Séquard', 'Síndrome de la Cauda Equina'],
  'mesh': ['Spinal Cord', 'Gray Matter', 'White Matter', 'Pyramidal Tracts', 'Spinothalamic Tracts', 'Spinal Nerve Roots', 'Brown-Sequard Syndrome', 'Cauda Equina Syndrome'],
  'palavras_chave_livres': ['Topografía vertebromedular', 'Láminas de Rexed', 'Sistema motor lateral', 'Disociación sensitiva', 'Síndrome del cono medular'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'Nivel vertebral no equivale a segmento medular',
      'texto': 'En el adulto, la médula espinal concluye a nivel L1–L2. El crecimiento diferencial raquimedular alarga las raíces inferiores formando la cauda equina. Por ello, el cirujano debe aplicar la regla de correspondencia vertebromedular al correlacionar lesiones óseas radiográficas con la clínica neurológica.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Localización por patrón sindrómico',
      'texto': 'La presencia de déficit motor y de propiocepción ipsilateral combinado con pérdida contralateral de sensibilidad termoalgésica define una hemisección medular (síndrome de Brown-Séquard), debido a la anatomía ipsilateral del tracto corticoespinal y al cruce precoz del tracto espinotalámico.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Diferenciar cono medular de cauda equina',
      'texto': 'Aunque ambos cursan con anestesia en silla de montar y disfunción vesical, el cono medular produce déficits simétricos y compromiso esfinteriano precoz y grave, mientras que la compresión de la cauda equina genera ciatalgia radicular intensa y asimétrica, paresia flácida e hiporreflexia asimétrica.'
    }
  ],
  'referencias': pt['3']['referencias'],
  'seo': {
    'titulo': 'Neuroanatomía Funcional de la Médula Espinal | Tratado de Columna',
    'meta_descricao': 'Guía integral de neuroanatomía medular: topografía vertebromedular, láminas de Rexed, tractos motores y sensitivos, y síndromes clínicos.',
    'resumo_chamada': 'Comprenda cómo la topografía vertebromedular, las láminas de Rexed y las vías motoras y sensitivas fundamentan la localización de lesiones y la cirugía raquídea.',
    'slug': 'neuroanatomia-funcional-de-la-medula-espinal'
  }
}

# ==========================================
# CHAPTER 4
# ==========================================
en['4'] = {
  'numero': 4,
  'titulo': 'Surgical Anatomy and Approaches to the Cervical Spine',
  'secao': '',
  'autores': pt['4']['autores'],
  'contexto': 'Surgical approaches to the cervical spine must provide adequate exposure to the targeted pathology while safeguarding critical vascular, neural, and visceral structures densely packed within a compact anatomical corridor. The selection and execution of the approach depend heavily on the specific spinal level, differentiating between the craniocervical junction, upper cervical spine, and subaxial cervical spine. Surface landmarks, fascial planes, muscular layers, and the trajectory of the vertebral artery dictate the safe progress of dissection. This chapter describes anterior, anterolateral, transoral-transpharyngeal, and posterior approaches, detailing patient positioning, skin incision, deep dissection, and safe exposure boundaries. It contrasts the predominant risks associated with each route: dysphagia, dysphonia, recurrent laryngeal nerve injury, esophageal perforation, or Horner syndrome in anterior approaches; and severe hemorrhage, vertebral artery injury, spinal cord or nerve root injury, and cerebrospinal fluid leak in posterior approaches. Mastery of fascial planes, subperiosteal dissection, and meticulous terminal hemostasis are presented as cornerstones of surgical safety.',
  'objetivo': 'To present the surgical anatomy necessary to understand and execute the primary approaches to the cervical spine. By the end, the reader should be able to identify key anatomical landmarks and fascial dissection planes; understand the specific technical steps of anterior, anterolateral, transoral-transpharyngeal, and posterior approaches; correlate each approach with its exposed spinal levels and neural structures; and recognize potential hazards, anatomical boundaries, and strategies to minimize complications.',
  'conteudo_principal': [
    {
      'subtitulo': 'Anatomical Landmarks and Patient Positioning',
      'texto': 'The cervical spine consists of seven vertebrae, with marked anatomical differences between C1–C2 (upper cervical) and C3–C7 (subaxial spine). Anterior surface landmarks correlate predictably with vertebral levels: hard palate to the anterior arch of C1; inferior border of the mandible to C2–C3; hyoid bone to C3; thyroid cartilage to C4–C5; cricoid cartilage and Chassaignac tubercle (carotid tubercle on C6 transverse process) to C6. The vertebral artery ascends through the transverse foramina lateral to the uncinate process, positioned anterior to the exiting spinal nerve root. For anterior approaches, the patient is placed supine with slight cervical extension, head stabilized on a donut headrest, and gentle caudal shoulder taping to improve fluoroscopic visualization. For posterior approaches, the prone position is used with the head rigidly secured in a Mayfield clamp or skull tongs in a neutral or slightly flexed position with the head elevated above the heart.'
    },
    {
      'subtitulo': 'Anterior and Anterolateral Approaches',
      'texto': 'The classic Smith-Robinson anterior approach utilizes a transverse skin crease incision and exploits the natural plane medial to the carotid sheath. The sternocleidomastoid muscle and carotid sheath (containing common carotid artery, internal jugular vein, and vagus nerve) are mobilized laterally, while the visceral axis (trachea, esophagus, and thyroid gland) is retracted medially. Deep dissection divides the prevertebral fascia, exposing the longus colli muscles, which are elevated subperiosteally to expose the anterior longitudinal ligament and vertebral bodies. The anterolateral approach uses a longitudinal incision along the anterior border of the sternocleidomastoid, providing extensive exposure of the lateral vertebral body, uncovertebral joints, and vertebral artery. Primary complications include dysphagia (most common immediate postoperative complaint), dysphonia (recurrent or superior laryngeal nerve injury), esophageal perforation, Horner syndrome (sympathetic trunk injury over longus colli), and hematoma causing airway obstruction.'
    },
    {
      'subtitulo': 'Transoral-Transpharyngeal Approach',
      'texto': 'Indicated for extradural lesions located on the ventral aspect of the craniocervical junction, this approach exposes the lower clivus, anterior rim of the foramen magnum, anterior arch of C1, odontoid process, and C2 vertebral body (extensible to C3). It requires adequate interincisal mouth opening to accommodate specialized self-retaining retractor systems. The posterior pharyngeal wall is incised in the midline, elevating a full-thickness myomucosal flap followed by subperiosteal dissection. Lateral exposure must strictly be restricted to 15 mm from the midline to avoid injuring the hypoglossal nerve, Eustachian tube orifice, and vertebral arteries. Prophylactic broad-spectrum antibiotics, vigorous wound irrigation, and airtight two-layer pharyngeal closure are mandatory. Primary risks include deep wound infection, pharyngeal dehiscence, respiratory compromise, CSF fistula with meningitis, and craniocervical instability requiring posterior fixation.'
    },
    {
      'subtitulo': 'Posterior Cervical Approaches',
      'texto': 'At the craniocervical junction, a midline incision through the avascular nuchal ligament exposes the suboccipital bone and posterior elements of C1–C2. Dissection must strictly preserve greater occipital nerves, facet capsules, and the suboccipital venous plexus while respecting the vertebral artery traversing the groove on the superior aspect of the C1 posterior arch. Lateral dissection on the C1 arch must not exceed 1.5 cm from the midline in adults (1.0 cm in children) and should stay within 8 mm of the superior border. From C3 to C7, a midline subperiosteal exposure performed in a caudocranial direction exposes spinous processes, lamina, lateral masses, ligamentum flavum, and facet joints. Complications include vertebral artery injury during lateral mass or pedicle screw placement, nerve root injury, dural tear, spinal cord contusion, and significant intraoperative bleeding.'
    }
  ],
  'aplicacao_clinica': 'Approach selection must be dictated by disease pathology, vertebral level, and anatomical orientation. Ventral lesions between C3 and C7 are ideally approached via the anterior Smith-Robinson or anterolateral corridor; ventral craniocervical pathologies require transoral or endoscopic endonasal/transoral approaches; and dorsal pathologies (multilevel stenosis, posterior instability, lateral tumors) are addressed via posterior laminectomy, laminoplasty, or instrumentation. Preoperative CT angiography or MRI should always evaluate vertebral artery course and anomalies (such as high-riding vertebral artery or persistent proatlantal arteries). Intraoperatively, strict subperiosteal dissection protects the cervical sympathetic trunk located over the lateral longus colli, the recurrent laryngeal nerve within the tracheoesophageal groove, and the vertebral artery laterally. In posterior high cervical exposure, staying within defined safe margins on the C1 arch prevents catastrophic vertebral artery laceration. At closure, thorough hemostasis and careful drain placement prior to extubation are vital to prevent neck hematoma and acute life-threatening airway compromise.',
  'mensagem_central': 'Surgical safety in cervical spine surgery depends on precise recognition of vertebral levels, anatomical landmarks, fascial planes, and neurovascular danger zones. Accurate positioning, strict subperiosteal dissection, adherence to anatomical safety boundaries around the vertebral artery, and meticulous terminal hemostasis allow surgeons to successfully tailor anterior, transoral, and posterior approaches to diverse clinical pathologies.',
  'por_que_importa': 'In the cervical spine, only millimeters separate an optimal exposure corridor from catastrophic vascular, neural, or visceral injury. This chapter provides the surgical roadmap from positioning to closure, detailing how distinct corridors provide targeted access with specific risk profiles. Understanding the spatial relationships between the longus colli, carotid sheath, sympathetic chain, visceral axis, occipital nerves, and vertebral artery is essential for avoiding intraoperative pitfalls and ensuring patient safety.',
  'decs': ['Cervical Vertebrae', 'Anatomy', 'Surgical Procedures, Operative', 'Vertebral Artery', 'Spinal Fusion', 'Intraoperative Complications', 'Postoperative Complications', 'Hemostasis, Surgical'],
  'mesh': ['Cervical Vertebrae', 'Anatomy', 'Surgical Procedures, Operative', 'Vertebral Artery', 'Spinal Fusion', 'Intraoperative Complications', 'Postoperative Complications', 'Hemostasis, Surgical'],
  'palavras_chave_livres': ['Smith-Robinson approach', 'Cervical surgical anatomy', 'Transoral approach', 'Chassaignac tubercle', 'Longus colli muscle', 'Craniocervical junction'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Fascial Planes Define Safe Corridors',
      'texto': 'Cervical approaches follow natural anatomical corridors defined by fascial envelopes. In the anterior approach, retracting the carotid sheath laterally and the visceral axis (trachea, esophagus) medially provides a direct, avascular prevertebral path to the anterior vertebral bodies and disc spaces.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Select the Approach by Pathology Location',
      'texto': 'Match the approach to the anatomical epicenter of the disease: anterior Smith-Robinson for subaxial ventral pathology; transoral/transnasal for ventral craniocervical compression; and posterior midline approach for dorsal canal decompression and lateral mass/pedicle screw stabilization.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Respect the Vertebral Artery Boundaries',
      'texto': 'At C1, limit lateral dissection on the posterior arch to 1.5 cm from the midline and 8 mm along the superior border to prevent vertebral artery laceration. In anterior approaches, maintain subperiosteal dissection deep to the longus colli to protect the cervical sympathetic chain and prevent Horner syndrome.'
    }
  ],
  'referencias': pt['4']['referencias'],
  'seo': {
    'titulo': 'Surgical Anatomy and Approaches to the Cervical Spine | Treatise',
    'meta_descricao': 'Essential guide to cervical spine surgical approaches: anterior Smith-Robinson, transoral, posterior techniques, vertebral artery safety, and complication avoidance.',
    'resumo_chamada': 'Comprehensive review of cervical surgical corridors, anatomical landmarks, dissection boundaries, and neurovascular preservation strategies.',
    'slug': 'surgical-anatomy-and-approaches-to-the-cervical-spine'
  }
}

es['4'] = {
  'numero': 4,
  'titulo': 'Anatomía Quirúrgica y Vías de Abordaje de la Columna Cervical',
  'secao': '',
  'autores': pt['4']['autores'],
  'contexto': 'Las vías de abordaje a la columna cervical deben proporcionar una exposición suficiente de la lesión respetando las estructuras vasculares, neurológicas y viscerales concentradas en un corredor anatómico de dimensiones reducidas. La elección y ejecución del abordaje dependen del nivel vertebral tratado, distinguiendo la unión craneocervical, la columna cervical superior y la columna subaxial. Los reparos anatómicos de superficie, los planos fasciales, la disposición muscular y el trayecto de la arteria vertebral guían la disección quirúrgica. El capítulo describe los abordajes anterior, anterolateral, transoral-transfaríngeo y posterior, detallando la posición del paciente, la incisión, la disección por planos y los límites seguros de exposición. Asimismo, contrasta los riesgos específicos de cada vía: disfagia, disfonía, perforación esofágica o síndrome de Horner en abordajes anteriores; y hemorragia grave, lesión de la arteria vertebral, lesión medular o radicular y fístula de LCR en abordajes posteriores. El dominio fascial, la disección subperióstica y la hemostasia rigurosa constituyen las premisas esenciales de seguridad.',
  'objetivo': 'Presentar la anatomía quirúrgica indispensable para reconocer y ejecutar los principales abordajes a la columna cervical. Al finalizar, el lector deberá identificar los reparos anatómicos y planos de disección; comprender las particularidades técnicas de los accesos anterior, anterolateral, transoral-transfaríngeo y posterior; relacionar cada vía con los niveles y estructuras expuestos; y reconocer los riesgos quirúrgicos, límites de seguridad y medidas para prevenir complicaciones.',
  'conteudo_principal': [
    {
      'subtitulo': 'Reparos anatómicos y posicionamiento',
      'texto': 'La columna cervical consta de siete vértebras con notables diferencias entre C1–C2 y el segmento subaxial C3–C7. En la región anterior, los reparos superficiales orientan topográficamente: el paladar duro corresponde al arco anterior de C1; el borde inferior mandibular a C2–C3; el hueso hioides a C3; el cartílago tiroides a C4–C5; y el cartílago cricoides y el tubérculo de Chassaignac (en la apófisis transversa de C6) a C6. La arteria vertebral transcurre por los forámenes transversos lateral a la articulación uncovertebral y anterior a la raíz nerviosa. Para abordajes anteriores se utiliza decúbito supino con leve extensión cervical y tracción suave de hombros. Para abordajes posteriores se emplea decúbito prono con cabezal de fijación rígida tipo Mayfield, manteniendo la cabeza neutra o ligeramente flexionada y elevada respecto al nivel cardíaco.'
    },
    {
      'subtitulo': 'Vías anterior y anterolateral',
      'texto': 'El abordaje anterior clásico de Smith-Robinson utiliza una incisión transversal siguiendo las líneas de Langer y progresa medial a la vaina carotídea. El paquete vasculonervioso del cuello (arteria carótida común, vena yugular interna y nervio vago) se separa lateralmente, mientras que el eje visceral (tráquea, esófago y glándula tiroides) se desplaza medialmente. La disección profunda incide la fascia prevertebral y eleva subperiósticamente los músculos longus colli para exponer los cuerpos y discos vertebrales. El abordaje anterolateral utiliza una incisión longitudinal sobre el borde anterior del esternocleidomastoideo, permitiendo exponer las articulaciones uncovertebrales y la arteria vertebral. Las complicaciones más frecuentes incluyen disfagia postoperatoria transitoria, disfonía por lesión del nervio laríngeo recurrente, perforación esofágica, síndrome de Horner por tracción de la cadena simpática y hematoma asfíctico sofocante.'
    },
    {
      'subtitulo': 'Vía transoral-transfaríngea',
      'texto': 'Indicada para patología ventral de la unión craneocervical, esta vía expone el clivus inferior, el borde anterior del foramen magno, el arco anterior de C1, la apófisis odontoides y el cuerpo de C2 (extensible a C3). Requiere una apertura bucal adecuada para colocar el retractor autoestático. Se incide la pared faríngea posterior en la línea media elevando un colgajo miomucoso de espesor total y realizando disección subperióstica. La exposición lateral debe restringirse a 15 mm de la línea media para evitar lesionar los nervios hipoglosos, la trompa de Eustaquio y las arterias vertebrales. Se requiere profilaxis antibiótica amplia, irrigación exhaustiva y cierre hermético en dos planos. Los riesgos principales incluyen infección profunda, dehiscencia, edema de vía aérea, fístula de LCR con meningitis e inestabilidad craneocervical.'
    },
    {
      'subtitulo': 'Vías posteriores',
      'texto': 'En la unión craneocervical, una incisión mediana a través del ligamento nucal avascular expone la escama occipital y los arcos posteriores de C1 y C2. La disección debe preservar los nervios occipitales mayores y respetar el trayecto de la arteria vertebral sobre el arco posterior de C1, limitando la disección lateral a 1,5 cm de la línea media en adultos (1,0 cm en niños) y no superando los 8 mm en el borde superior del arco. Entre C3 y C7, la disección subperióstica caudocraneal expone apófisis espinosas, láminas, masas laterales y cápsulas articulares. Los riesgos asociados incluyen lesión de la arteria vertebral en la colocación de tornillos, radiculopatía, desgarro dural, contusión medular y hemorragia venosa.'
    }
  ],
  'aplicacao_clinica': 'La selección del abordaje debe ajustarse a la localización de la lesión: las afecciones anteriores subaxiales (C3–C7) se tratan mediante abordaje de Smith-Robinson o anterolateral; las lesiones ventrales de la unión craneocervical requieren abordaje transoral o transnasal endoscópico; y las compresiones dorsales o inestabilidades posteriores se abordan por vía posterior para laminectomía, laminoplastia o artrodesis instrumentada. La angiografía por TC o RM preoperatoria es obligatoria para evaluar variantes anatómicas de la arteria vertebral. Durante la cirugía, la disección rigurosamente subperióstica sobre el longus colli protege la cadena simpática cervical, mientras que la retracción visceral cuidadosa previene lesiones esofágicas y del nervio laríngeo recurrente. En la vía posterior alta, respetar los límites de disección en C1 evita laceraciones arteriales catastróficas. Al cierre, la hemostasia meticulosa antes de la extubación es mandataria para prevenir hematomas sofocantes del cuello.',
  'mensagem_central': 'La seguridad de las vías de acceso a la columna cervical se basa en el reconocimiento sistemático del nivel vertebral, los reparos anatómicos, los planos fasciales y las zonas de peligro neurovascular. El posicionamiento adecuado, la disección subperióstica estricta, el respeto a los márgenes de seguridad de la arteria vertebral y la hemostasia rigurosa permiten adaptar los abordajes anterior, transoral y posterior con máxima eficacia.',
  'por_que_importa': 'En la columna cervical, milímetros separan una exposición quirúrgica óptima de una lesión vascular, neural o visceral grave. Este capítulo proporciona una guía práctica integral desde el posicionamento hasta el cierre, detallando los corredores quirúrgicos y sus riesgos inherentes. Comprender la anatomía del longus colli, la vaina carotídea, el eje visceral, la cadena simpática y la arteria vertebral es indispensable para prevenir complicaciones mayores y garantizar la seguridad del paciente.',
  'decs': ['Vértebras Cervicales', 'Anatomía', 'Procedimientos Quirúrgicos Operativos', 'Arteria Vertebral', 'Fusión Vertebral', 'Complicaciones Intraoperatorias', 'Complicaciones Posoperatorias', 'Hemostasia Quirúrgica'],
  'mesh': ['Cervical Vertebrae', 'Anatomy', 'Surgical Procedures, Operative', 'Vertebral Artery', 'Spinal Fusion', 'Intraoperative Complications', 'Postoperative Complications', 'Hemostasis, Surgical'],
  'palavras_chave_livres': ['Abordaje de Smith-Robinson', 'Anatomía quirúrgica cervical', 'Abordaje transoral', 'Tubérculo de Chassaignac', 'Músculo longus colli', 'Unión craneocervical'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'Los planos fasciales definen corredores seguros',
      'texto': 'Los abordajes cervicales siguen planos naturales definidos por fascias. En la vía anterior, la retracción lateral de la vaina carotídea y medial del eje visceral (tráquea y esófago) permite un acceso prevertebral avascular directo a los cuerpos y discos vertebrales.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Seleccionar la vía según la patología',
      'texto': 'El corredor debe corresponder a la localización de la enfermedad: vía anterior de Smith-Robinson para patología ventral subaxial; abordaje transoral/transnasal para lesiones ventrales de la unión craneocervical; y vía posterior para descompresión dorsal y fijación con tornillos a masas laterales o pedículos.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Respetar los márgenes de la arteria vertebral',
      'texto': 'En el arco posterior de C1, no sobrepasar 1,5 cm lateral a la línea media ni 8 mm en su borde superior para evitar lesionar la arteria vertebral. En abordajes anteriores, mantener la disección subperióstica medial a los músculos longus colli para proteger la cadena simpática cervical.'
    }
  ],
  'referencias': pt['4']['referencias'],
  'seo': {
    'titulo': 'Anatomía Quirúrgica y Vías de Acceso Cervical | Tratado de Columna',
    'meta_descricao': 'Guía quirúrgica de abordajes a la columna cervical: Smith-Robinson anterior, transoral, vías posteriores, límites de seguridad de la arteria vertebral y complicaciones.',
    'resumo_chamada': 'Revisión exhaustiva de los corredores quirúrgicos cervicales, planos fasciales, reparos anatómicos y técnicas de preservación neurovascular.',
    'slug': 'anatomia-quirurgica-y-vias-de-acceso-de-la-columna-cervical'
  }
}

with open('slice_1_4_en.json', 'w', encoding='utf-8') as f:
    json.dump(en, f, ensure_ascii=False, indent=2)

with open('slice_1_4_es.json', 'w', encoding='utf-8') as f:
    json.dump(es, f, ensure_ascii=False, indent=2)

print('Batch 1-4 successfully saved!')
