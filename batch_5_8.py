import json

with open('/Users/manoeldesign/.gemini/antigravity/brain/7e1703fb-1acf-40aa-a137-05338f0871de/scratch/slice_1_28_pt.json', 'r', encoding='utf-8') as f:
    pt = json.load(f)

en = {}
es = {}

# ==========================================
# CHAPTER 5
# ==========================================
en['5'] = {
  'numero': 5,
  'titulo': 'Surgical Anatomy and Approaches to the Thoracic Spine',
  'secao': '',
  'autores': pt['5']['autores'],
  'contexto': 'The thoracic spine occupies a distinct position in spine surgery because it combines a relatively rigid skeletal segment with intimate anatomical relationships with the spinal cord, great vessels, pleura, lungs, heart, trachea, esophagus, thoracic duct, and autonomic chains. Its 12 vertebrae exhibit progressive anatomical changes from T1 to T12 in the morphology, width, and sagittal angle of the pedicles, transverse processes, lamina, and facet joints. Additionally, the rib cage restricts multiaxial mobility, provides visceral protection, and dictates surgical exposure. Pathologies affecting this region include adult and pediatric deformities, traumatic fractures, primary neoplasms, metastatic epidural spinal cord compression, spondylodiscitis, and thoracic disc herniations. Selecting between posterior, posterolateral (costotransversectomy, lateral extracavitary), anterolateral (transthoracic, video-assisted thoracoscopic surgery [VATS]), retropleural, or thoracoabdominal corridors depends on vertebral level, pathology epicenter, adjacent visceral/vascular structures, and previous surgeries. Thorough imaging, precise intraoperative level verification, and vascular planning (including the artery of Adamkiewicz) are paramount for preventing neurological and cardiopulmonary complications.',
  'objetivo': 'To present the vertebral, muscular, vascular, neural, pleuropulmonary, and diaphragmatic surgical anatomy relevant to the primary approaches to the thoracic spine. By the end, the reader should be able to recognize morphological variations from T1 to T12; correlate disease pathology with the optimal surgical corridor; understand the anatomical principles of posterior, posterolateral, anterolateral, and thoracoabdominal approaches; and identify critical neurovascular hazards and prevention strategies.',
  'conteudo_principal': [
    {
      'subtitulo': 'Vertebral Anatomy and Regional Biomechanics',
      'texto': 'Thoracic vertebrae articulate with ribs via costovertebral and costotransverse joints. From T1 to T12, transverse processes shorten, pedicle height and width increase, and pedicle convergence changes: at T1, pedicles converge significantly toward the midline; by T12, pedicles become nearly sagittal. Thoracic pedicles are significantly narrower than lumbar pedicles and possess a thicker medial cortex, increasing the risk of lateral wall breach and thoracic wall/visceral injury. Facet joints are coronally oriented from T1 to T10, transitioning to a sagittal/oblique orientation at T11–T12. The rib cage makes this the most rigid segment of the spine, where axial rotation decreases and lateral bending/flexion increases caudally. Normal thoracic kyphosis ranges from 20° to 50° (Cobb angle). Global sagittal alignment parameters include sagittal vertical axis (SVA < 5 cm normal), T1 pelvic angle (TPA 10°–15° in adults 40–65 years, 15°–25° over 65 years), and pelvic tilt. Surgical correction of hyperkyphosis requires careful multi-level osteotomies to prevent acute cord tethering.'
    },
    {
      'subtitulo': 'Adjacent Structures and Vascular Planning',
      'texto': 'In anterolateral and lateral exposures, the surgeon must negotiate the pleura, lungs, heart, esophagus, thoracic duct, sympathetic trunk, and splanchnic nerves. The aorta, inferior vena cava, segmental intercostal vessels, and the great radiculomedullary artery (artery of Adamkiewicz, typically arising between T9 and T12 on the left in 75% of individuals) dictate the choice of surgical side and vascular clipping. The aortic arch restricts left-sided exposure at T3–T4, whereas the thoracic duct ascends on the right and crosses to the left at T5.'
    },
    {
      'subtitulo': 'Posterior and Posterolateral Approaches',
      'texto': 'The posterior midline approach provides access to all thoracic levels for decompression, tumor resection, fracture reduction, and posterior instrumentation. The patient is positioned prone with the abdomen free to decrease epidural venous engorgement, and the operative level is confirmed by intraoperative fluoroscopy or navigation. Subperiosteal dissection minimizes hemorrhage and preserves facet capsules. Costotransversectomy and lateral extracavitary approaches provide access to the anterior column (vertebral body and disc) and spinal canal through a single dorsal incision without deliberately entering the pleural cavity. Meticulous subperiosteal rib resection, neurovascular bundle identification, prevertebral fascial preservation, and temporary stabilizing rod placement during corpectomy ensure structural and neurological safety.'
    },
    {
      'subtitulo': 'Anterolateral and Transthoracic Approaches',
      'texto': 'T1–T3 can be accessed via an anterior low cervical approach with or without manubriotomy/sternotomy; T3–T4 via transaxillary or high thoracotomy; and T2–T11 via standard anterolateral thoracotomy or VATS. Generally, a left-sided thoracotomy is preferred to avoid the liver and inferior vena cava, though a right-sided approach is indicated at T3–T4 to avoid the aortic arch. In scoliosis, the approach is chosen on the convex side. Double-lumen endotracheal intubation allows single-lung ventilation and controlled lung deflation for visualization.'
    },
    {
      'subtitulo': 'Thoracolumbar Junction Corridors',
      'texto': 'The thoracoabdominal approach is utilized for T9–L5 lesions, preferably on the left side. At the T11–L2 transition, the retropleural, retroperitoneal, and retrodiaphragmatic corridors provide access without traversing peritoneal contents. Detaching costal insertions and arcuate ligaments allows anterior mobilization of the diaphragm, connecting the retropleural and retroperitoneal spaces. Preserving a 1.5–2 cm peripheral diaphragmatic cuff facilitates airtight, watertight repair. T11–T12 is typically exposed retropleurally, T12–L2 retroperitoneally, and T12–L1 retrodiaphragmatically.'
    }
  ],
  'aplicacao_clinica': 'Surgical approach selection must match the epicenter of the pathology: dorsal lesions are addressed via posterior laminectomy, laminoplasty, or transpedicular decompression; ventral pathologies require costotransversectomy, lateral extracavitary, or anterior transthoracic corpectomy; and circumferential disease requires combined or wide posterolateral resection. Pure laminectomy is contraindicated for central ventral calcified disc herniations or anterior vertebral tumors because it necessitates excessive spinal cord traction. Preoperative CT and MRI angiography map segmental vasculature and identify the origin of the artery of Adamkiewicz. Intraoperatively, radiopaque marking and intraoperative imaging avoid wrong-level surgery. Maintaining the abdomen free reduces bleeding from Batson plexus. Pleural tears must be repaired or drained with a chest tube, and diaphragmatic tears closed hermetically to prevent post-traumatic diaphragmatic herniation. Primary risks include spinal cord ischemia/injury, intercostal neuralgia, pneumothorax, hemothorax, chylothorax, pleural effusion, and major vascular laceration.',
  'mensagem_central': 'There is no single universal approach to the thoracic spine. Approach selection depends on spinal level, coronal/sagittal lesion location, vascular anatomy, pulmonary status, and previous surgeries. Surgical safety relies on rigorous level confirmation, vascular mapping (including Adamkiewicz artery origin), careful anatomical dissection, and protection of the spinal cord, pleura, segmental vessels, thoracic duct, and diaphragm.',
  'por_que_importa': 'The thoracic spine combines a narrow canal tightly occupied by the spinal cord and a tenuous watershed blood supply with proximity to the heart, aorta, lungs, and thoracic duct. An error in operative level, surgical side, or dissection plane can convert a planned decompression into irreversible paraplegia, catastrophic hemorrhage, tension pneumothorax, or chylothorax. This chapter organizes the anatomical corridors and provides technical guidelines to access the anterior and posterior columns with minimal cord manipulation.',
  'decs': ['Thoracic Vertebrae', 'Spinal Cord', 'Aorta, Thoracic', 'Diaphragm', 'Thoracotomy', 'Thoracic Surgery, Video-Assisted', 'Surgical Procedures, Operative', 'Intraoperative Complications'],
  'mesh': ['Thoracic Vertebrae', 'Spinal Cord', 'Aorta, Thoracic', 'Diaphragm', 'Thoracotomy', 'Thoracic Surgery, Video-Assisted', 'Surgical Procedures, Operative', 'Intraoperative Complications'],
  'palavras_chave_livres': ['Thoracic surgical anatomy', 'Costotransversectomy', 'Lateral extracavitary approach', 'Artery of Adamkiewicz', 'Thoracolumbar junction', 'Retropleural approach'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Pedicle Anatomy Varies by Level',
      'texto': 'Thoracic pedicle dimensions and transverse angles change progressively from T1 to T12. Thoracic pedicles have narrow isthmuses and thick medial cortices, predisposing to lateral cortical perforation during screw insertion. Instrumentation must be adapted to each specific level.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'The Approach Follows the Pathology',
      'texto': 'Dorsal compressive lesions favor posterior approaches; ventral disc or tumor pathologies mandate posterolateral (costotransversectomy/extracavitary) or anterior transthoracic/retropleural exposure. Never attempt ventral thoracic decompression through a simple laminectomy due to high risk of cord contusion.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Map Vessels, Level, and Diaphragm',
      'texto': 'Preoperatively map the aorta, thoracic duct, and artery of Adamkiewicz (T9–T12 left). Intraoperatively confirm the exact level, preserve a diaphragmatic cuff in thoracoabdominal approaches for secure repair, and place a chest tube if pleural integrity is compromised.'
    }
  ],
  'referencias': pt['5']['referencias'],
  'seo': {
    'titulo': 'Surgical Anatomy and Approaches to the Thoracic Spine | Treatise',
    'meta_descricao': 'Complete surgical anatomy and approaches to the thoracic spine: posterior, costotransversectomy, transthoracic, thoracoabdominal, and vascular safety.',
    'resumo_chamada': 'Master the surgical corridors of the thoracic spine, anatomical variations from T1 to T12, vascular landmarks, and strategies to prevent neural and visceral injury.',
    'slug': 'surgical-anatomy-and-approaches-to-the-thoracic-spine'
  }
}

es['5'] = {
  'numero': 5,
  'titulo': 'Anatomía Quirúrgica y Vías de Abordaje de la Columna Torácica',
  'secao': '',
  'autores': pt['5']['autores'],
  'contexto': 'La columna torácica ocupa una posición singular en la cirugía raquídea por reunir, en un segmento esquelético relativamente rígido, relaciones anatómicas estrechas con la médula espinal, los grandes vasos, la pleura, los pulmones, el corazón, la tráquea, el esófago, el conducto torácico y el sistema nervioso autónomo. Sus 12 vértebras presentan variaciones anatómicas progresivas de T1 a T12 en la morfología, grosor y angulación sagital de los pedículos, apófisis transversas, láminas y carillas articulares. Asimismo, la caja torácica limita la movilidad, provee protección visceral e influye en la exposición quirúrgica. Las afecciones tratadas incluyen deformidades del adulto e infantiles, fracturas traumáticas, neoplasias primarias, metástasis epidurales con compresión medular, espondilodiscitis y hernias discales torácicas. La elección entre vías posterior, posterolateral (costotransversectomía, extracavitaria lateral), anterolateral (transtorácica, toracoscópica), retropleural o toracoabdominal depende del nivel, el epicentro de la lesión, las estructuras adyacentes y cirugías previas. La planificación por neuroimagen, el control radioscópico del nivel y el mapeo vascular (incluyendo la arteria de Adamkiewicz) son fundamentales para evitar complicaciones neurológicas, vasculares y pleuropulmonares.',
  'objetivo': 'Presentar la anatomía quirúrgica vertebral, muscular, vascular, neural, pleuropulmonar y diafragmática relevante para las principales vías de abordaje a la columna torácica. Al finalizar, el lector deberá reconocer las variaciones de T1 a T12; correlacionar la patología con el corredor quirúrgico óptimo; comprender los fundamentos de los abordajes posterior, posterolateral, anterolateral y toracoabdominal; e identificar los riesgos neurovasculares críticos y las medidas para prevenirlos.',
  'conteudo_principal': [
    {
      'subtitulo': 'Anatomía vertebral y biomecánica regional',
      'texto': 'Las vértebras torácicas se articulan con las costillas mediante las articulaciones costovertebrales y costotransversas. De T1 a T12, las apófisis transversas se acortan, la altura y anchura pedicular aumentan y la convergencia pedicular cambia: en T1 es marcadamente convergente hacia la línea media, mientras que en T12 los pedículos son casi paralelos al plano sagital. Los pedículos torácicos son más estrechos que los lumbares y poseen una cortical medial más gruesa, lo que predispone a perforaciones laterales inadvertidas. Las carillas articulares son coronales de T1 a T10 y se vuelven oblicuas/sagitales en T11–T12. La caja torácica confiere una elevada rigidez; la flexoextensión y la inclinación lateral aumentan caudalmente, mientras que la rotación axial disminuye. La cifosis torácica fisiológica oscila entre 20° y 50° (método de Cobb). La alineación sagital global se evalúa mediante el eje vertical sagital (SVA < 5 cm normal), el ángulo pélvico T1 (TPA 10°–15° entre 40–65 años y 15°–25° en mayores de 65 años) y la versión pélvica.'
    },
    {
      'subtitulo': 'Estructuras adyacentes y planificación vascular',
      'texto': 'En abordajes laterales y anteriores deben considerarse la pleura, los pulmones, el corazón, el esófago, el conducto torácico, la cadena simpática y los nervios esplácnicos. La aorta, la vena cava inferior, los vasos intercostales segmentarios y la gran arteria radiculomedular anterior (arteria de Adamkiewicz, que se origina entre T9 y T12 del lado izquierdo en el 75% de los casos) condicionan el lado de abordaje y la ligadura vascular. El cayado aórtico limita la exposición izquierda en T3–T4, mientras que el conducto torácico asciende a la derecha y cruza a la izquierda a nivel de T5.'
    },
    {
      'subtitulo': 'Abordajes posteriores y posterolaterales',
      'texto': 'La vía posterior por la línea media permite abordar todos los niveles torácicos para descompresión, resección tumoral, osteosíntesis y corrección de deformidades. El paciente se ubica en decúbito prono con abdomen libre para disminuir la congestión venosa epidural, y el nivel se confirma rigurosamente con radioscopia. La disección subperióstica minimiza el sangrado. La costotransversectomía y el abordaje extracavitario lateral permiten exponer la columna anterior (cuerpo y disco) y el conducto vertebral mediante una única incisión posterior sin ingresar deliberadamente a la cavidad pleural. La resección subperióstica costal, el control del paquete intercostal y el uso de barras temporales durante corpectomías son maniobras de seguridad esenciales.'
    },
    {
      'subtitulo': 'Abordajes anterolaterales y transtorácicos',
      'texto': 'T1–T3 pueden exponerse mediante abordaje cervical anterior bajo con o sin manubriotomía; T3–T4 por vía transaxilar o toracotomía alta; y T2–T11 mediante toracotomía anterolateral estándar o toracoscopia videoasistida (VATS). Por regla general, se prefiere la toracotomía izquierda para evitar el hígado y la vena cava inferior, salvo en T3–T4 donde el lado derecho evita el cayado aórtico. En deformidades, el abordaje se realiza por la convexidad. Se utiliza intubación orotraqueal con tubo de doble luz para colapso pulmonar selectivo.'
    },
    {
      'subtitulo': 'Transición toracolombar',
      'texto': 'El abordaje toracoabdominal se utiliza para lesiones entre T9 y L5, preferentemente por el lado izquierdo. En la unión T11–L2, se describen los corredores retropleural, retroperitoneal y retrodiagragmático. La desinserción de las arcadas costales y los ligamentos arqueados permite movilizar anteriormente el diafragma, comunicando los espacios retropleural y retroperitoneal. Conservar un reborde diafragmático periférico de 1,5 a 2 cm facilita un cierre hermético. T11–T12 se aborda por vía retropleural, T12–L2 por vía retroperitoneal y T12–L1 por vía retrodiagragmática.'
    }
  ],
  'aplicacao_clinica': 'La selección del abordaje debe corresponder al epicentro anatómico de la lesión: patología dorsal se descomprime por vía posterior (laminectomía, laminoplastia o vía transpedicular); lesiones anteriores requieren costotransversectomía, abordaje extracavitario o corpectomía transtorácica/retropleural; y lesiones circunferenciales exigen abordajes combinados. La laminectomía aislada está contraindicada en hernias discales torácicas anteriores o tumores ventrales calcificados por el alto riesgo de paraplejía por retracción medular. La TC y angio-RM preoperatorias deben identificar el trayecto de los grandes vasos y el origen de la arteria de Adamkiewicz. Intraoperatoriamente, el abdomen libre previene el sangrado del plexo de Batson y la confirmación radiológica previene la cirugía en nivel erróneo. Los desgarros pleurales deben repararse o drenarse con sonda pleural, y el diafragma debe suturarse herméticamente para evitar hernias diafragmáticas postoperatorias. Las complicaciones potenciales incluyen isquemia medular, neuralgia intercostal, neumotórax, hemotórax, quilotórax y lesión aórtica.',
  'mensagem_central': 'No existe una vía universal para la columna torácica. La selección del corredor depende del nivel vertebral, la localización en el plano sagital y coronal, la anatomía vascular y visceral, y las cirugías previas. La seguridad quirúrgica radica en la confirmación radiológica del nivel, el mapeo vascular (incluyendo la arteria de Adamkiewicz), la disección por planos anatómicos y la preservación de la médula, pleura, vasos segmentarios y diafragma.',
  'por_que_importa': 'La columna torácica combina un conducto estrecho ocupado por la médula espinal con una vascularización limítrofe crítica y la proximidad inmediata de aorta, pulmones, corazón y conducto torácico. Un error de nivel, lado o plano de disección puede provocar paraplejía irreversible, hemorragia exanguinante, neumotórax a tensión o fístula quilosa. Este capítulo sistematiza los corredores posterior, posterolateral, anterolateral y toracoabdominal para acceder a la columna anterior y posterior con mínima manipulación medular.',
  'decs': ['Vértebras Torácicas', 'Médula Espinal', 'Aorta Torácica', 'Diafragma', 'Toracotomía', 'Cirugía Torácica Videoasistida', 'Procedimientos Quirúrgicos Operativos', 'Complicaciones Intraoperatorias'],
  'mesh': ['Thoracic Vertebrae', 'Spinal Cord', 'Aorta, Thoracic', 'Diaphragm', 'Thoracotomy', 'Thoracic Surgery, Video-Assisted', 'Surgical Procedures, Operative', 'Intraoperative Complications'],
  'palavras_chave_livres': ['Anatomía quirúrgica torácica', 'Costotransversectomía', 'Abordaje extracavitario lateral', 'Arteria de Adamkiewicz', 'Transición toracolumbar', 'Abordaje retropleural'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'La anatomía pedicular cambia por nivel',
      'texto': 'La anchura y orientación de los pedículos torácicos varían sustancialmente de T1 a T12. Poseen un istmo estrecho y una cortical medial resistente, lo que eleva el riesgo de perforación de la cortical lateral durante la colocación de tornillos transpediculares.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'El abordaje sigue a la patología',
      'texto': 'Las lesiones dorsales favorecen abordajes posteriores; las patologías ventrales (hernias torácicas, tumores) exigen abordajes posterolaterales (costotransversectomía/extracavitario) o anteriores transtorácicos/retropleurales. No utilice laminectomía simple en lesiones ventrales torácicas.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Mapee vasos, nivel y diafragma',
      'texto': 'Evalúe preoperatoriamente la aorta, el conducto torácico y la arteria de Adamkiewicz (T9–T12 izquierda). Intraoperatoriamente confirme el nivel, preserve un manguito diafragmático en abordajes toracoabdominales y coloque tubo de drenaje si se perfora la pleura.'
    }
  ],
  'referencias': pt['5']['referencias'],
  'seo': {
    'titulo': 'Anatomía Quirúrgica y Vías de Abordaje Torácico | Tratado de Columna',
    'meta_descricao': 'Guía integral de abordajes torácicos: posterior, costotransversectomía, transtorácico, toracoabdominal, arteria de Adamkiewicz y prevención de complicaciones.',
    'resumo_chamada': 'Conozca los corredores quirúrgicos de la columna torácica, variaciones anatómicas de T1 a T12, referencias vasculares y técnicas de preservación neural y visceral.',
    'slug': 'anatomia-quirurgica-y-vias-de-acceso-de-la-columna-toracica'
  }
}

# ==========================================
# CHAPTER 6
# ==========================================
en['6'] = {
  'numero': 6,
  'titulo': 'Surgical Anatomy and Approaches to the Thoracolumbar Junction',
  'secao': '',
  'autores': pt['6']['autores'],
  'contexto': 'The thoracolumbar junction (T10–L2) represents a critical biomechanical transition zone between the rigid, rib-supported thoracic cage and the mobile, lordotic lumbar spine. It concentrates extreme axial and rotational stresses, making it the most vulnerable region of the vertebral column for traumatic burst fractures, osteoporotic compression fractures, post-traumatic kyphosis, degenerative deformity, and neoplastic metastases. At the neural level, this region houses the transition from the spinal cord to the conus medullaris and proximal cauda equina, where canal compromise can produce complex upper and lower motor neuron deficits, neurogenic bladder, and bowel dysfunction. The anatomical corridor is bounded by the diaphragm, lower costal margins, pleural reflections, retroperitoneal fat, sympathetic chains, and major retroperitoneal vessels. Surgical approaches range from posterior midline instrumentation to open or minimally invasive retropleural, retroperitoneal, anterolateral transthoracic, and thoracoabdominal routes. Mastering diaphragmatic detachment, vascular preservation (segmental vessels and Adamkiewicz artery), and neural decompression is essential for optimal surgical outcomes.',
  'objetivo': 'To present the surgical anatomy of the thoracolumbar junction (T10–L2) and detail the primary anterior, anterolateral, posterolateral, and posterior approaches. The reader should be able to understand regional kinematics and vulnerability to trauma; delineate the anatomical attachments of the diaphragm and lower pleural reflections; select the ideal surgical approach based on pathology location and patient comorbidities; and execute safe dissection while mitigating vascular, pulmonary, visceral, and neurological risks.',
  'conteudo_principal': [
    {
      'subtitulo': 'Biomechanics and Regional Anatomy',
      'texto': 'The T10–L2 transition marks a change from coronal to sagittal facet orientation, loss of rib cage stabilization, and reversal of sagittal curvature from thoracic kyphosis to lumbar lordosis. Consequently, 50% to 60% of all spinal fractures occur at this junction. Anatomically, T11 and T12 feature floating ribs and lack costotransverse articulations. The conus medullaris typically terminates at L1–L2, surrounded by the descending roots of the cauda equina. The diaphragm originates from the lower six ribs, the xiphoid process, and the lumbar vertebrae via the medial, intermediate, and lateral arcuate ligaments (spanning the psoas and quadratus lumborum muscles) and the diaphragmatic crura (right crus L1–L3, left crus L1–L2).'
    },
    {
      'subtitulo': 'Surgical Approaches: Posterior and Posterolateral',
      'texto': 'The posterior midline approach is the standard workhorse for fracture reduction, posterior decompression, and pedicle screw instrumentation. Pedicles at T11, T12, and L1 are relatively large and sagittal, allowing robust screw fixation. Posterolateral corridors (transpedicular, costotransversectomy, and lateral extracavitary) permit circumferential decompression and anterior column cage reconstruction through a single posterior incision, reducing cardiopulmonary morbidity in polytrauma patients.'
    },
    {
      'subtitulo': 'Anterolateral, Retropleural, and Retroperitoneal Corridors',
      'texto': 'Anterior approaches provide direct visualization for corpectomy, anterior decompression of the retropulsed bone fragments, and structural reconstruction. For T10–T11, a left anterolateral transthoracic thoracotomy (10th rib) is standard. For T11–L2, an extrapleural-retroperitoneal approach is preferred, mobilizing the diaphragm without opening the peritoneum. The diaphragm is detached circumferentially, leaving a 1.5 cm muscular rim on the chest wall and costal margin to facilitate watertight repair at closure. The psoas muscle is mobilized posteriorly to expose the lateral aspect of L1 and L2 vertebral bodies.'
    },
    {
      'subtitulo': 'Vascular Anatomy and Complication Avoidance',
      'texto': 'The aorta lies along the left anterolateral aspect of the vertebral bodies, bifurcating at L4. Segmental intercostal and lumbar vessels cross the middle of each vertebral body; they must be ligated and divided at the mid-vertebral level, away from the neural foramina, to preserve collateral flow to the anterior spinal artery and avoid injuring the artery of Adamkiewicz. Sympathetic trunks run along the vertebral heads, and the greater and lesser splanchnic nerves pierce the diaphragmatic crura. Potential complications include pneumothorax, hemothorax, diaphragmatic hernia, spinal cord/conus ischemia, sympathectomy syndrome, retroperitoneal hematoma, and ureteral injury.'
    }
  ],
  'aplicacao_clinica': 'Approach selection at the thoracolumbar junction must balance the degree of canal compromise, neurological status, anterior column load-bearing loss (Load Sharing Classification), and patient physiological reserve. Dorsal unstable injuries with intact anterior column are treated with posterior reduction and instrumentation. Severe comminuted burst fractures with >50% canal compromise and progressive neurological deficits benefit from direct anterior or posterolateral decompression and cage reconstruction. In patients with compromised pulmonary reserve, extrapleural-retroperitoneal or minimally invasive lateral retroperitoneal corridors minimize pulmonary complications compared to formal transpleural thoracotomy. Preoperative CT angiography maps segmental vessel anatomy. Intraoperatively, careful diaphragmatic detachment and robust repair with nonabsorbable sutures prevent post-traumatic diaphragmatic hernia. Maintaining proper sagittal lordosis across L1–L2 is crucial to prevent chronic post-traumatic kyphosis and flatback deformity.',
  'mensagem_central': 'The thoracolumbar junction represents a critical biomechanical and neurovascular nexus. Safe surgical management requires matching the corridor (posterior, posterolateral, extrapleural-retroperitoneal, or thoracotomy) to the specific pathology, respecting diaphragmatic boundaries, preserving segmental vascular collaterals, and restoring regional sagittal alignment.',
  'por_que_importa': 'The thoracolumbar junction concentrates mobility, load, and vulnerability adjacent to structures that tolerate zero technical error. A simple mistake in rib counting can lead to exposing the wrong vertebral level, while inadvertent vascular or diaphragmatic injury can cause life-threatening hemorrhage or herniation. This chapter translates regional anatomy into a practical operative roadmap, enabling surgeons to choose the safest access corridor, protect neural and visceral structures, and achieve durable spinal reconstruction.',
  'decs': ['Thoracic Vertebrae', 'Lumbar Vertebrae', 'Spinal Cord', 'Diaphragm', 'Spinal Fractures', 'Surgical Procedures, Operative', 'Spinal Fusion', 'Intraoperative Complications'],
  'mesh': ['Thoracic Vertebrae', 'Lumbar Vertebrae', 'Spinal Cord', 'Diaphragm', 'Spinal Fractures', 'Surgical Procedures, Operative', 'Spinal Fusion', 'Intraoperative Complications'],
  'palavras_chave_livres': ['Thoracolumbar junction', 'Burst fractures', 'Extrapleural approach', 'Retroperitoneal approach', 'Diaphragm detachment', 'Conus medullaris'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Biomechanical Transition Drives Vulnerability',
      'texto': 'The abrupt transition from rigid thoracic kyphosis to mobile lumbar lordosis and the change in facet orientation at T10–L2 explain why more than 50% of all spinal trauma occurs at the thoracolumbar junction, often involving conus medullaris and cauda equina elements.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Choose the Least Invasive Safe Corridor',
      'texto': 'For ventral canal compromise from burst fractures, extrapleural-retroperitoneal or lateral posterolateral approaches provide direct anterior decompression while avoiding transpleural morbidity, which is particularly advantageous in polytrauma and pulmonary contusion patients.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Preserve a Diaphragmatic Rim',
      'texto': 'When mobilizing the diaphragm during thoracoabdominal exposure, always leave a 1.5–2.0 cm peripheral cuff attached to the chest wall. Direct detachment from the ribs prevents secure suturing, sharply increasing the risk of diaphragmatic dehiscence and bowel herniation.'
    }
  ],
  'referencias': pt['6']['referencias'],
  'seo': {
    'titulo': 'Surgical Anatomy and Approaches to the Thoracolumbar Junction | Treatise',
    'meta_descricao': 'Surgical guide to the thoracolumbar junction (T10–L2): biomechanics, posterior, posterolateral, extrapleural-retroperitoneal, and thoracoabdominal approaches.',
    'resumo_chamada': 'Understand the unique anatomy and biomechanical vulnerability of the thoracolumbar junction, diaphragmatic detachment techniques, and approach selection.',
    'slug': 'surgical-anatomy-and-approaches-to-the-thoracolumbar-junction'
  }
}

es['6'] = {
  'numero': 6,
  'titulo': 'Anatomía Quirúrgica y Abordajes de la Unión Toracolumbar',
  'secao': '',
  'autores': pt['6']['autores'],
  'contexto': 'La unión toracolumbar (T10–L2) representa una zona de transición biomecánica crítica entre la caja torácica rígida y la columna lumbar móvil y lordótica. Concentra elevadas fuerzas de compresión axial y cizallamiento torsional, convirtiéndose en la región raquídea más vulnerable a fracturas por estallido, fracturas osteoporóticas, deformidades postraumáticas y lesiones neoplásicas. En el plano neurológico, esta encrucijada alberga la transición entre la médula espinal, el cono medular y la cauda equina proximal, donde una estenosis aguda del conducto puede generar déficits mixtos de motoneurona superior e inferior y disfunción esfinteriana grave. El corredor quirúrgico se encuentra íntimamente delimitado por el diafragma, los rebordes costales inferiores, los fondos de saco pleurales, la grasa retroperitoneal, la cadena simpática y los grandes vasos. Los abordajes quirúrgicos comprenden vías posteriores estándar, posterolaterales y vías anteriores/anterolaterales abiertas o mínimamente invasivas (retropleural, retroperitoneal y toracoabdominal). Dominar la desinserción diafragmática, el control vascular segmentario y la descompresión neural es esencial para el éxito quirúrgico.',
  'objetivo': 'Presentar la anatomía quirúrgica de la unión toracolumbar (T10–L2) y detallar las principales vías de abordaje anterior, anterolateral, posterolateral y posterior. Al finalizar, el lector deberá comprender la cinemática regional y su susceptibilidad al trauma; describir las inserciones anatómicas del diafragma y los recesos pleurales; seleccionar el abordaje óptimo según el epicentro de la lesión y comorbilidades del paciente; y ejecutar una disección segura previniendo complicaciones vasculares, pleurales, viscerales y neurológicas.',
  'conteudo_principal': [
    {
      'subtitulo': 'Biomecánica y anatomía regional',
      'texto': 'La transición T10–L2 marca el cambio de la orientación facetaria coronal a sagital, la pérdida del soporte costal y la inversión de la curvatura de cifosis a lordosis. Por ello, entre el 50% y el 60% de todas las fracturas vertebrales se concentran en esta zona. T11 y T12 presentan costillas flotantes sin articulaciones costotransversas. El cono medular concluye habitualmente en L1–L2, rodeado por las raíces de la cauda equina. El diafragma se inserta en los últimos seis arcos costales, el apéndice xifoides y las vértebras lumbares mediante los ligamentos arqueados medial, intermedio y lateral (sobre los músculos psoas y cuadrado lumbar) y los pilares diafragmáticos (pilar derecho L1–L3, pilar izquierdo L1–L2).'
    },
    {
      'subtitulo': 'Abordajes posteriores y posterolaterales',
      'texto': 'El abordaje posterior por la línea media es la vía principal para reducción de fracturas, laminectomía descompresiva y fijación pedicular. Los pedículos de T11, T12 y L1 son voluminosos y de orientación sagital, permitiendo un anclaje rígido. Los corredores posterolaterales (transpedicular, costotransversectomía y extracavitario lateral) permiten la descompresión circunferencial del conducto y la reconstrucción con malla o caja intersomática mediante una única incisión dorsal, evitando toracotomías en pacientes politraumatizados.'
    },
    {
      'subtitulo': 'Vías anterolaterales, retropleurales y retroperitoneales',
      'texto': 'Los abordajes anteriores permiten una visión directa para corpectomía, descompresión del conducto y reconstrucción del pilar anterior. Para T10–T11 se utiliza toracotomía anterolateral izquierda sobre la 10.ª costilla. Para T11–L2 se prefiere el abordaje extrapleural-retroperitoneal, que moviliza el diafragma sin abrir deliberadamente la pleura ni el peritoneo. El diafragma se desinserta periféricamente dejando un manguito muscular de 1,5 a 2 cm en la pared torácica para asegurar un cierre hermético. El músculo psoas se rebate posteriormente para exponer la cara anterolateral de L1 y L2.'
    },
    {
      'subtitulo': 'Anatomía vascular y prevención de complicaciones',
      'texto': 'La aorta se ubica anterolateral izquierda y se bifurca en L4. Los vasos segmentarios intercostales y lumbares cruzan la porción media de cada cuerpo vertebral; deben ligarse en la cintura del cuerpo vertebral, lejos de los forámenes, para preservar la circulación colateral a la arteria espinal anterior y proteger la arteria de Adamkiewicz. Los troncos simpáticos transcurren sobre las cabezas costales y los nervios esplácnicos atraviesan los pilares diafragmáticos. Las complicaciones potenciales incluyen neumotórax, hemotórax, hernia diafragmática postraumática, isquemia medular, síndrome de simpatectomía y hematoma retroperitoneal.'
    }
  ],
  'aplicacao_clinica': 'La elección del abordaje en la unión toracolumbar debe fundamentarse en la conminución del pilar anterior (clasificación de McCormack/Load Sharing), el compromiso del canal raquídeo, el estado neurológico y la reserva cardiopulmonar. Lesiones posteriores inestables con pilar anterior preservado se tratan por vía posterior. Fracturas por estallido con estenosis >50% y déficit neurológico progresivo se benefician de descompresión anterior o posterolateral y soporte estructural intersomático. En pacientes con contusión pulmonar, el abordaje extrapleural-retroperitoneal o lateral retroperitoneal disminuye notablemente la morbilidad respiratoria frente a la toracotomía abierta. La angio-TC preoperatoria identifica variantes vasculares. Intraoperatoriamente, la desinserción diafragmática dejando un manguito periférico y su reparación cuidadosa evitan hernias diafragmáticas tardías. Reconstruir la lordosis en L1–L2 previene la cifosis postraumática incapacitante.',
  'mensagem_central': 'La unión toracolumbar es un punto de convergencia biomecánico y neurovascular fundamental. El tratamiento quirúrgico exitoso requiere elegir el corredor adecuado (posterior, posterolateral, extrapleural-retroperitoneal o toracoabdominal), respetar los límites diafragmáticos, preservar las colaterales vasculares y restablecer la alineación sagital fisiológica.',
  'por_que_importa': 'La unión toracolumbar concentra movilidad y sobrecarga en proximidad a estructuras que no toleran errores técnicos. Un error en el recuento costal puede dirigir el abordaje al nivel equivocado, mientras que una lesión vascular inadvertida o una reparación diafragmática defectuosa pueden provocar hemorragias masivas o hernias viscerales. Este capítulo proporciona una guía práctica indispensable para abordar con seguridad el conducto raquídeo y reconstruir la columna anterior.',
  'decs': ['Vértebras Torácicas', 'Vértebras Lumbares', 'Médula Espinal', 'Diafragma', 'Fracturas de la Columna Vertebral', 'Procedimientos Quirúrgicos Operativos', 'Fusión Vertebral', 'Complicaciones Intraoperatorias'],
  'mesh': ['Thoracic Vertebrae', 'Lumbar Vertebrae', 'Spinal Cord', 'Diaphragm', 'Spinal Fractures', 'Surgical Procedures, Operative', 'Spinal Fusion', 'Intraoperative Complications'],
  'palavras_chave_livres': ['Unión toracolumbar', 'Fracturas por estallido', 'Abordaje extrapleural', 'Abordaje retroperitoneal', 'Desinserción diafragmática', 'Cono medular'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'La transición biomecánica genera vulnerabilidad',
      'texto': 'El cambio abrupto de la cifosis torácica rígida a la lordosis lumbar móvil y la reorientación de las facetas articulares en T10–L2 explican por qué más del 50% de los traumatismos vertebrales ocurren en la unión toracolumbar, comprometiendo con frecuencia el cono medular y la cauda equina.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Seleccionar el corredor de menor morbilidad',
      'texto': 'Ante una compresión ventral del canal por estallido vertebral, las vías extrapleural-retroperitoneal o posterolateral permiten una descompresión directa y reconstrucción con caja sin ingresar a la cavidad pleural, reduciendo el riesgo pulmonar en politraumatizados.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Preservar el manguito diafragmático',
      'texto': 'Durante la movilización del diafragma en accesos toracoabdominales, conserve siempre un reborde muscular de 1,5 a 2 cm insertado en la pared costal. Desinsertarlo al ras del hueso impide una sutura hermética y predispone a hernia diafragmática postoperatoria.'
    }
  ],
  'referencias': pt['6']['referencias'],
  'seo': {
    'titulo': 'Anatomía Quirúrgica y Abordajes de la Unión Toracolumbar | Tratado',
    'meta_descricao': 'Guía quirúrgica de la unión toracolumbar (T10–L2): biomecánica, abordajes posteriores, extrapleurales, retroperitoneales, diafragma y complicaciones.',
    'resumo_chamada': 'Explore la biomecánica de la transición toracolumbar, técnicas de desinserción diafragmática y corredores quirúrgicos para fracturas y deformidades.',
    'slug': 'anatomia-quirurgica-y-abordajes-de-la-union-toracolumbar'
  }
}

# ==========================================
# CHAPTER 7
# ==========================================
en['7'] = {
  'numero': 7,
  'titulo': 'Surgical Anatomy and Approaches to the Lumbar and Lumbosacral Spine',
  'secao': 'Section 1 — Basic Concepts',
  'autores': pt['7']['autores'],
  'contexto': 'Surgical approaches to the lumbar and lumbosacral spine must reconcile adequate operative exposure, preservation of critical neurovascular structures, and restoration of segmental stability and sagittal alignment. The selection among anterior (ALIF), anterolateral/oblique (OLIF/ATP), lateral transpsoas (LLIF/XLIF), and posterior/transforaminal (PLIF/TLIF) corridors depends on the underlying pathology, target vertebral level, and therapeutic goals—including interbody fusion, canal decompression, deformity correction, and management of spinal tumors or infections. The L4–L5 and L5–S1 levels demand particular anatomical vigilance due to their high prevalence of degenerative disc disease, high shear forces, and major contribution to total lumbar lordosis. In anterior and lateral corridors, dissection traverses the abdominal wall and retroperitoneal space, placing the ureter, lumbar plexus, sympathetic trunk, superior hypogastric plexus, great vessels (aorta and vena cava), and iliac bifurcation at direct risk. Minimally invasive techniques decrease muscle and abdominal wall trauma but restrict visualization to narrow corridors. Consequently, precise cross-sectional imaging, fascial plane dissection, and individualized trajectory selection are paramount.',
  'objetivo': 'To present the surgical anatomy of the abdominal wall, retroperitoneum, and neurovascular structures relevant to lumbar and lumbosacral approaches. The reader should be able to understand the distinct technical features of anterior, posterior, transpsoas, and prepsoas corridors; recognize anatomical boundaries and limitations at each lumbar level; plan safe operative corridors using multiplanar MRI and CT; and apply strategies to prevent major vascular, neural, autonomic, ureteral, and abdominal wall complications.',
  'conteudo_principal': [
    {
      'subtitulo': 'Abdominal Wall and Retroperitoneal Corridors',
      'texto': 'The anterolateral abdominal wall comprises skin, subcutaneous tissue (Camper and Scarpa fasciae), external oblique, internal oblique, and transversus abdominis muscles, lined internally by the transversalis fascia and peritoneum. In lateral and retroperitoneal exposures, muscle-splitting dissection along fiber orientation minimizes abdominal wall denervation and pseudohernia formation. The retroperitoneal space is accessed by mobilizing the peritoneal envelope anteromedially. The ureter adheres to the posterior leaf of the peritoneum and is swept forward with it during blunt retroperitoneal development, protected from direct injury if mobilization remains in the correct fascial plane.'
    },
    {
      'subtitulo': 'Critical Neurovascular Structures',
      'texto': 'The abdominal aorta descends to the left of the midline and bifurcates at L4 into common iliac arteries; the inferior vena cava lies to the right and bifurcates at L5. At L4–L5 and L5–S1, vascular anatomy is highly variable. The ascending lumbar vein, iliolumbar vein, and middle sacral vessels present significant surgical hazards during lateral and anterior mobilization. The lumbar plexus (femoral nerve, obturator nerve, genitofemoral nerve) is embedded within the posterior substance of the psoas major muscle, migrating progressively anterior from L1 to L5. The lumbar sympathetic trunk courses along the anteromedial border of the psoas, whereas the superior hypogastric plexus overlies the anterior aspect of the L5–S1 disc space in the bifurcation triangle.'
    },
    {
      'subtitulo': 'Corridor Selection: ALIF, OLIF, LLIF, and Posterior',
      'texto': 'Approaches are tailored to level and pathology: ALIF (retroperitoneal or transperitoneal) is ideal for L5–S1, providing direct access to the vascular bifurcation and allowing large hyperlordotic cages; LLIF/XLIF (transpsoas) provides excellent access from L1 to L4 but carries substantial risk of lumbar plexus and femoral nerve injury at L4–L5; OLIF/ATP (prepsoas) accesses L1–L5 via the corridor between the anterior psoas margin and aorta/iliac vessels, avoiding psoas splitting and lumbar plexus navigation; and posterior approaches (TLIF/PLIF) allow direct canal decompression, facetectomy, and interbody grafting from behind.'
    },
    {
      'subtitulo': 'Technical Steps and Complication Avoidance',
      'texto': 'In anterior retroperitoneal surgery, a left-sided approach is generally preferred for L2–L5 due to the thicker, more resilient aortic wall compared to the thin, tear-prone vena cava. At L5–S1, midline exposure requires meticulous mobilization of the left common iliac vein and cautery-free dissection of the superior hypogastric plexus to prevent retrograde ejaculation in males. In lateral transpsoas surgery, intraoperative directional electromyographic neuromonitoring (EMG) is mandatory, and retractor time should be limited (<20–30 minutes) to avoid ischemic traction injury to the femoral nerve. In prepsoas OLIF, gentle mobilization of the psoas and left iliac vessels exposes the disc space without violating neural parenchyma.'
    }
  ],
  'aplicacao_clinica': 'Preoperative planning must evaluate multiplanar MRI and CT: assess the position of the iliac bifurcation and ascending lumbar vein at L4–L5 and L5–S1 (high bifurcation vs. low bifurcation); evaluate psoas morphology (high-riding psoas or "Mickey Mouse" sign) for lateral corridors; and measure the vascular corridor window in prepsoas OLIF. In anterior L5–S1 surgery, using blunt dissection without monopolar electrocautery over the anterior annulus protects the superior hypogastric plexus, keeping the incidence of retrograde ejaculation below 2%. In lateral transpsoas LLIF, placing the retractor within the anterior half of the disc space and using real-time triggered EMG avoids the femoral nerve and lumbosacral trunk. In posterior TLIF/PLIF, adequate neural retraction and nerve root identification prevent postoperative radiculopathy. Adherence to these anatomical principles maximizes fusion rates, restores lordosis, and prevents devastating neurovascular complications.',
  'mensagem_central': 'Safety in lumbar and lumbosacral surgery requires matching the surgical corridor to the patient’s individual vascular, neural, and muscular anatomy at each specific level. The abdominal wall, psoas major, lumbar plexus, sympathetic trunk, hypogastric plexus, and great retroperitoneal vessels define distinct surgical windows that shift from L1 to S1. Preoperative imaging analysis, plane dissection, vascular control, and minimized retraction time are just as vital as implant biomechanics.',
  'por_que_importa': 'The chosen approach determines which critical structures are protected and which are placed at direct risk. Transpsoas LLIF avoids major vascular contact but crosses the lumbar plexus; prepsoas OLIF avoids neural injury but increases proximity to retroperitoneal vessels and the sympathetic trunk; anterior ALIF provides powerful lordosis at L5–S1 but exposes iliac veins and autonomic nerves. Understanding the precise anatomical layout of each lumbar corridor allows the surgeon to select the safest approach, avoid vascular lacerations and neurological deficits, and achieve optimal reconstruction.',
  'decs': ['Lumbar Vertebrae', 'Sacrum', 'Lumbosacral Region', 'Spinal Fusion', 'Retroperitoneal Space', 'Psoas Muscles', 'Lumbosacral Plexus', 'Intraoperative Complications'],
  'mesh': ['Lumbar Vertebrae', 'Sacrum', 'Lumbosacral Region', 'Spinal Fusion', 'Retroperitoneal Space', 'Psoas Muscles', 'Lumbosacral Plexus', 'Intraoperative Complications'],
  'palavras_chave_livres': ['ALIF', 'LLIF transpsoas', 'OLIF prepsoas', 'TLIF', 'Superior hypogastric plexus', 'Lumbar plexus', 'Iliolumbar vein'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Corridors Shift by Lumbar Level',
      'texto': 'L1–L4 are accessible via lateral transpsoas (LLIF) and prepsoas (OLIF) corridors; L4–L5 requires cautious plexus and vascular mapping; and L5–S1 is ideally approached via anterior retroperitoneal (ALIF) within the vascular bifurcation or posterior TLIF, as iliac crests obstruct true lateral access.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Tailor the Corridor to Patient Anatomy',
      'texto': 'Preoperatively evaluate iliac bifurcation height, iliolumbar vein location, psoas morphology, and vascular windows on axial MRI. In patients with high iliac bifurcations or narrow prepsoas corridors, select posterior or navigated approaches to eliminate catastrophic vascular tearing.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Protect Autonomic and Femoral Nerves',
      'texto': 'At L5–S1, avoid monopolar electrocautery on the anterior disc to protect the superior hypogastric plexus and prevent retrograde ejaculation. In lateral transpsoas surgery, limit retractor dilation time and use real-time EMG to prevent femoral nerve neuropraxia.'
    }
  ],
  'referencias': pt['7']['referencias'],
  'seo': {
    'titulo': 'Surgical Anatomy and Approaches to the Lumbar Spine | Treatise',
    'meta_descricao': 'Comprehensive guide to lumbar spine approaches: ALIF, OLIF, LLIF, TLIF, retroperitoneal dissection, lumbar plexus mapping, and vascular safety.',
    'resumo_chamada': 'Master surgical anatomy and approach selection for the lumbar and lumbosacral spine, including ALIF, LLIF, OLIF, and neural-vascular preservation techniques.',
    'slug': 'surgical-anatomy-and-approaches-to-the-lumbar-and-lumbosacral-spine'
  }
}

es['7'] = {
  'numero': 7,
  'titulo': 'Anatomía Quirúrgica y Vías de Abordaje de la Columna Lumbar y Lombosacra',
  'secao': 'Sección 1 — Conceptos Básicos',
  'autores': pt['7']['autores'],
  'contexto': 'Los abordajes a la columna lumbar y lumbosacra deben conciliar una exposición quirúrgica adecuada, la preservación rigurosa de las estructuras neurovasculares y la restauración de la estabilidad y alineación sagital. La selección entre las vías anterior (ALIF), anterolateral oblicua (OLIF/ATP), lateral transpsoas (LLIF/XLIF) y posterior/transforaminal (TLIF/PLIF) depende de la patología subyacente, el nivel vertebral y el objetivo terapéutico (fusión intersomática, descompresión del canal, corrección de deformidades o resección tumoral). Los niveles L4–L5 y L5–S1 exigen máxima atención debido a la alta prevalencia de discopatía degenerativa, las elevadas fuerzas de cizallamiento y su contribución decisiva a la lordosis lumbar total. En las vías anteriores y laterales, la disección atraviesa la pared abdominal y el espacio retroperitoneal, exponiendo directamente el uréter, el plexo lumbar, la cadena simpática, el plexo hipogástrico superior y los grandes vasos (aorta, vena cava y vasos ilíacos). Las técnicas mínimamente invasivas reducen el traumatismo muscular pero confinan el procedimiento a corredores anatómicos estrechos, haciendo indispensable una meticulosa planificación preoperatoria.',
  'objetivo': 'Presentar la anatomía quirúrgica de la pared abdominal, el retroperitoneo y las estructuras neurovasculares vinculadas a los abordajes lumbares y lumbosacros. Al finalizar, el lector deberá comprender las diferencias entre las vías anterior, posterior, transpsoas y prepsoas; reconocer los límites anatómicos por nivel; planificar el corredor con TC y RM multiplanar; y aplicar medidas de prevención frente a complicaciones vasculares, neurológicas, autonómicas, ureterales y de la pared abdominal.',
  'conteudo_principal': [
    {
      'subtitulo': 'Pared abdominal y corredor retroperitoneal',
      'texto': 'La pared anterolateral del abdomen está constituida por piel, tejido celular subcutáneo (fascias de Camper y Scarpa), músculos oblicuo externo, oblicuo interno y transverso del abdomen, fascia transversalis y peritoneo parietal. En los accesos laterales y retroperitoneales, la disección por divulsión muscular según la dirección de las fibras previene denervaciones y seudohernias de la pared abdominal. El espacio retroperitoneal se alcanza desplazando el saco peritoneal medial y anteriormente. El uréter se adhiere a la hoja posterior del peritoneo y se moviliza conjuntamente hacia adelante, quedando protegido si se respeta el plano fascial correcto.'
    },
    {
      'subtitulo': 'Estructuras neurovasculares críticas',
      'texto': 'La aorta abdominal desciende a la izquierda de la línea media y se bifurca en L4 en arterias ilíacas comunes; la vena cava inferior desciende a la derecha y se forma a la altura de L5. A nivel L4–L5 y L5–S1, la anatomía vascular presenta gran variabilidad. La vena lumbar ascendente, la vena iliolumbar y los vasos sacros medios representan zonas de alto riesgo de desgarro venoso exanguinante. El plexo lumbar (nervios femoral, obturador y genitofemoral) se sitúa en el espesor posterior del músculo psoas mayor, migrando progresivamente en sentido anterior de L1 a L5. La cadena simpática lumbar discurre por el borde anteromedial del psoas, mientras que el plexo hipogástrico superior cubre el disco L5–S1 en el triángulo interilíaco.'
    },
    {
      'subtitulo': 'Selección de la vía: ALIF, OLIF, LLIF y Vía Posterior',
      'texto': 'Los abordajes se adaptan al nivel y objetivo: ALIF (retroperitoneal anterior) es la técnica de elección en L5–S1 al ofrecer acceso directo entre los vasos ilíacos y permitir cajas de gran lordosis; LLIF/XLIF (transpsoas) expone de L1 a L4 pero conlleva riesgo de lesión del plexo lumbar en L4–L5; OLIF/ATP (prepsoas oblicuo) accede de L1 a L5 por el corredor anatómico entre el borde anterior del psoas y los grandes vasos, evitando atravesar el parénquima muscular; y las vías posteriores (TLIF/PLIF) permiten descompresión directa del conducto y artrodesis intersomática posterior.'
    },
    {
      'subtitulo': 'Técnica quirúrgica y prevención de complicaciones',
      'texto': 'En el abordaje retroperitoneal anterior se prefiere el lado izquierdo para L2–L5 debido a la mayor resistencia de la pared aórtica frente a la fragilidad de la vena cava. En L5–S1, la exposición exige movilización suave de la vena ilíaca común izquierda y disección roma sin electrocauterio para proteger el plexo hipogástrico superior (previniendo la eyaculación retrógrada en varones). En la vía lateral transpsoas es obligatorio el neuromonitoreo con EMG evocada direccional y limitar el tiempo de retracción (<20–30 minutos) para evitar neuropraxia isquémica del nervio femoral. En OLIF, la separación atraumática del psoas y vasos ilíacos proporciona un corredor avascular seguro.'
    }
  ],
  'aplicacao_clinica': 'La planificación preoperatoria exige evaluar imágenes axiales de RM y TC: verificar la altura de la bifurcación aórtica y el trayecto de la vena iliolumbar; analizar la morfología del psoas ("psoas en lágrima" o signos de ascenso lumbar); y medir la ventana vascular prepsoas. En el abordaje ALIF en L5–S1, la disección roma sin electrobisturí sobre el anillo anterior reduce la eyaculación retrógrada a menos del 2%. En LLIF transpsoas, posicionar el retractor en la mitad anterior del espacio discal y usar neuromonitoreo en tiempo real previene lesiones del nervio femoral. En TLIF/PLIF posterior, la retracción suave de las raíces nerviosas evita déficits radiculares postoperatorios. Aplicar estos principios garantiza fusiones sólidas, restaura la lordosis fisiológica y previene complicaciones neurovasculares catastróficas.',
  'mensagem_central': 'La seguridad de los abordajes lumbares y lumbosacros depende de elegir un corredor adaptado a la anatomía individual del paciente, el nivel vertebral y el objetivo quirúrgico. Pared abdominal, psoas mayor, plexo lumbar, cadena simpática, plexo hipogástrico y grandes vasos definen ventanas quirúrgicas dinámicas de L1 a S1. La planificación por imagen, la disección por planos anatómicos, el control vascular y la retracción controlada son tan determinantes como la técnica de fusión.',
  'por_que_importa': 'La vía de abordaje determina qué estructuras anatómicas quedan protegidas y cuáles se exponen directamente. El corredor transpsoas evita los grandes vasos pero atraviesa el territorio del plexo lumbar; el abordaje prepsoas evita el daño neural directo pero incrementa la proximidad a los vasos ilíacos; y el abordaje anterior ALIF brinda máxima lordosis en L5–S1 a expensas de movilizar vasos ilíacos y nervios autonómicos. Comprender este mapa anatómico permite al cirujano tomar decisiones fundamentadas para prevenir lesiones vasculares mayores y déficits neurológicos.',
  'decs': ['Vértebras Lumbares', 'Sacro', 'Región Lumbosacra', 'Fusión Vertebral', 'Espacio Retroperitoneal', 'Músculos Psoas', 'Plexo Lumbosacro', 'Complicaciones Intraoperatorias'],
  'mesh': ['Lumbar Vertebrae', 'Sacrum', 'Lumbosacral Region', 'Spinal Fusion', 'Retroperitoneal Space', 'Psoas Muscles', 'Lumbosacral Plexus', 'Intraoperative Complications'],
  'palavras_chave_livres': ['ALIF', 'LLIF transpsoas', 'OLIF prepsoas', 'TLIF', 'Plexo hipogástrico superior', 'Plexo lumbar', 'Vena iliolumbar'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'Los corredores cambian según el nivel lumbar',
      'texto': 'De L1 a L4 el acceso es favorable por vía lateral transpsoas (LLIF) u oblicua prepsoas (OLIF); L4–L5 exige mapeo riguroso del plexo y vasos; y L5–S1 se aborda de forma óptima por vía anterior retroperitoneal (ALIF) dentro de la bifurcación vascular o por vía posterior TLIF.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Adaptar la vía a la anatomía del paciente',
      'texto': 'Evalúe en RM preoperatoria la bifurcación vascular, la vena iliolumbar, la anatomía del psoas y la ventana vascular anterior. En pacientes con bifurcación baja o ventanas prepsoas estrechas, seleccione abordajes posteriores o navegados para evitar desgarros venosos catastróficos.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Proteger los nervios autonómicos y femoral',
      'texto': 'En L5–S1, evite el electrocauterio monopolar en el disco anterior para preservar el plexo hipogástrico superior y prevenir la eyaculación retrógrada. En la vía lateral transpsoas, limite el tiempo de retractor y utilice EMG en tiempo real para evitar neuropraxia del nervio femoral.'
    }
  ],
  'referencias': pt['7']['referencias'],
  'seo': {
    'titulo': 'Anatomía Quirúrgica y Abordajes Lumbares | Tratado de Columna',
    'meta_descricao': 'Guía quirúrgica de abordajes a la columna lumbar: ALIF, OLIF, LLIF, TLIF, disección retroperitoneal, plexo lumbar y preservación vascular.',
    'resumo_chamada': 'Domine la anatomía quirúrgica y selección de vías de acceso a la columna lumbar y lumbosacra, técnicas ALIF, LLIF, OLIF y prevención de complicaciones.',
    'slug': 'anatomia-quirurgica-y-vias-de-acceso-de-la-columna-lumbar-y-lombosacra'
  }
}

# ==========================================
# CHAPTER 8
# ==========================================
en['8'] = {
  'numero': 8,
  'titulo': 'The Spine in the Sagittal Plane',
  'secao': '',
  'autores': pt['8']['autores'],
  'contexto': 'Sagittal balance results from the functional integration of pelvic morphology, regional spinal curvatures, antigravity musculature, and lower extremity compensatory mechanisms (hip extension, knee flexion, ankle pelvic rotation). In upright posture, the human body strives to maintain its center of mass over the narrow polygon of support with minimal muscular work and energy expenditure, a concept synthesized by Jean Dubousset as the "cone of economy." When spinal malalignment shifts the trunk outside this physiological zone, muscular fatigue, chronic pain, functional disability, and compensatory recruitment escalate. Sagittal evaluation cannot rely on a single radiographic parameter because of substantial interindividual anatomical variation and age-related physiological changes. This chapter presents sagittal alignment as the structural congruence between the spine and pelvis, analyzing fixed anatomical and dynamic positional parameters, regional lordosis distribution, cervical balance, compensatory reserves, and global proportionality models (Roussouly, SRS-Schwab, and GAP score). Mastering these concepts is essential for evaluating spinal deformity, functional impairment, and mechanical failure risk in reconstructive spine surgery.',
  'objetivo': 'To present the anatomical and biomechanical foundations of sagittal balance and organize the primary radiographic parameters used in spinopelvic assessment. The reader should be able to distinguish fixed anatomical from dynamic positional parameters; recognize spinal and lower extremity compensatory mechanisms; understand the classification models of Roussouly, SRS-Schwab, and Global Alignment and Proportion (GAP); and apply personalized spinopelvic analysis (including regional lumbar distribution, global balance, and cervical alignment) to surgical planning and deformity correction.',
  'conteudo_principal': [
    {
      'subtitulo': 'The Cone of Economy and Spinopelvic Harmony',
      'texto': 'Human bipedalism relies on harmonious alternating sagittal curves: cervical lordosis, thoracic kyphosis, lumbar lordosis, and sacral kyphosis. The "cone of economy" defines the narrow spatial cylinder within which a person can stand erect with minimal muscular effort. Loss of sagittal alignment displaces the gravity line, forcing compensatory energy-consuming muscular contractions. The pelvis serves as the mechanical base of the spine, linking the mobile axial column to the lower extremities.'
    },
    {
      'subtitulo': 'Pelvic Parameters: PI, PT, and SS',
      'texto': 'Pelvic incidence (PI) is a fundamental, fixed morphological anatomical parameter after skeletal maturity that dictates the spatial capacity and orientation of the pelvic base. PI is geometrically related to two dynamic, positional parameters: Pelvic Tilt (PT, representing pelvic retroversion) and Sacral Slope (SS, representing horizontal sacral orientation), defined by the fundamental equation: PI = PT + SS. Patients with a high PI require greater lumbar lordosis and sacral slope to maintain balance, whereas patients with a low PI require flatter lordosis and lower sacral slope. Normal pelvic tilt is generally <20°; an elevated PT indicates active compensatory pelvic retroversion to maintain an upright trunk.'
    },
    {
      'subtitulo': 'Spinal and Global Alignment Parameters',
      'texto': 'The sagittal vertical axis (SVA, horizontal offset from the C7 plumb line to the posterosuperior corner of S1, normal <4–5 cm) reflects global trunk offset. However, SVA alone can be masked by pelvic retroversion and knee flexion. Angular global parameters such as the T1 Pelvic Angle (TPA, line from femoral heads to center of T1 and S1, normal <14°–15°) and Full Balance Integrated (FBI) index integrate trunk tilt and pelvic compensation into a single measurement that cannot be hidden by compensatory posturing. Lumbar lordosis (LL) is divided into upper lordosis (L1–L4) and lower lordosis (L4–S1), with lower lordosis normally providing approximately two-thirds (60–70%) of total lordosis.'
    },
    {
      'subtitulo': 'Classification Models: Roussouly, SRS-Schwab, and GAP',
      'texto': 'The Roussouly classification stratifies normal sagittal lordosis into four morphological types based on sacral slope and the lordosis apex/inflection point (with an added anteverted Type 3+ and degenerative variations), guiding restoration to the patient\'s constitutional baseline. The SRS-Schwab adult spinal deformity classification utilizes PI–LL mismatch (<10° normal, 10°–20° moderate, >20° severe), Pelvic Tilt (PT <20°, 20°–30°, >30°), and SVA (<4 cm, 4–9.5 cm, >9.5 cm) to grade deformity severity. The Global Alignment and Proportion (GAP) score evaluates proportionality (relative pelvic version, relative lumbar lordosis, lordosis distribution index, relative spinopelvic alignment, age) to predict mechanical hardware complications (proximal junctional kyphosis [PJK], rod breakage, and revision surgery).'
    },
    {
      'subtitulo': 'Cervical Alignment and Compensatory Reserves',
      'texto': 'The cervical spine adapts secondarily to maintain horizontal gaze. Cervical lordosis (CL), T1 slope (T1S), and C2–C7 SVA are interconnected: an increased thoracic kyphosis or positive global sagittal balance forces an increase in T1 slope and compensatory cervical hyperlordosis. When compensatory capacity is exhausted, progressive cervical kyphosis and inability to maintain horizontal gaze ensue.'
    }
  ],
  'aplicacao_clinica': 'In clinical practice, full-length standing 36-inch radiographs (EOS or stitched whole-spine radiographs including femoral heads and knees) are mandatory. Evaluation begins by calculating constitutional Pelvic Incidence (PI). Determine target lumbar lordosis using validated formulas (such as LL = PI ± 9° or age-adjusted targets) and ensure that 60–70% of the reconstructed lordosis is placed across L4–S1. Check PT to identify hidden pelvic retroversion. In elderly patients, overcorrecting to youthful alignment standards increases proximal junctional failure (PJK/PJF); age-adjusted alignment targets (higher PT and SVA thresholds) should be utilized. When planning osteotomies (PCO/Smith-Petersen, PSO, or VCR), pre-calculate the required angular correction and reconstruct apex position according to the patient\'s Roussouly type to achieve harmonious, proportional balance and prevent mechanical construct failure.',
  'mensagem_central': 'Sagittal balance is not a single rigid number, but the harmonious congruence between pelvic morphology, regional curve distribution, global alignment, and compensatory reserve. Pelvic incidence, PT, SS, regional lordosis distribution, cervical parameters, and global angular measurements must be evaluated collectively. Reconstructive spine surgery should aim for proportional, energy-efficient balance tailored to the patient\'s age, constitutional anatomy, and functional demands, avoiding both undercorrection and rigid overcorrection.',
  'por_que_importa': 'A patient may appear balanced on a standard radiograph while standing in exhausting compensation—retroverting the pelvis, hyperlordosing the cervical spine, and flexing the knees. This chapter provides the tools to look beneath the surface: assessing fixed pelvic morphology, anatomical lordosis distribution, compensatory reserve, and the energy cost of posture. Understanding sagittal balance prevents reliance on isolated metrics, refines realignment targets, and reduces catastrophic mechanical complications (pseudarthrosis, PJK, and hardware failure).',
  'decs': ['Spine', 'Pelvis', 'Postural Balance', 'Lordosis', 'Kyphosis', 'Radiography', 'Spinal Curvatures', 'Surgical Procedures, Operative'],
  'mesh': ['Spine', 'Pelvis', 'Postural Balance', 'Lordosis', 'Kyphosis', 'Radiography', 'Spinal Curvatures', 'Surgical Procedures, Operative'],
  'palavras_chave_livres': ['Sagittal balance', 'Pelvic incidence', 'Pelvic tilt', 'Roussouly classification', 'GAP score', 'Cone of economy', 'Proximal junctional kyphosis'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Pelvic Incidence Dictates Lordosis',
      'texto': 'Pelvic incidence (PI) is a fixed anatomical parameter that determines the required lumbar lordosis (LL) and sacral slope (SS). PI = PT + SS. Patients with high PI require substantial, steeply inclined lordosis; patients with low PI require a flatter, shorter lordosis.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Distribute Two-Thirds of Lordosis at L4–S1',
      'texto': 'Regardless of total lordosis magnitude, 60% to 70% of normal lumbar lordosis is located between L4 and S1. Reconstructing lordosis predominantly in the upper lumbar spine (L1–L3) creates an unphysiological flat lower spine, increasing shear stress, PJK risk, and implant failure.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Age-Adjust Alignment Targets',
      'texto': 'Never apply youthful alignment metrics (SVA < 4 cm, PT < 15°) indiscriminately to elderly deformity patients. Forcing rigid youthful alignment in elderly individuals leads to catastrophic proximal junctional kyphosis (PJK/PJF). Tailor correction targets to age and compensatory capacity.'
    }
  ],
  'referencias': pt['8']['referencias'],
  'seo': {
    'titulo': 'The Spine in the Sagittal Plane | Spine Surgery Treatise',
    'meta_descricao': 'In-depth guide to spinal sagittal alignment: pelvic parameters (PI, PT, SS), Roussouly types, GAP score, SRS-Schwab, and surgical deformity planning.',
    'resumo_chamada': 'Master the principles of spinopelvic sagittal alignment, compensatory mechanisms, Roussouly classifications, GAP score, and age-adjusted deformity correction.',
    'slug': 'the-spine-in-the-sagittal-plane'
  }
}

es['8'] = {
  'numero': 8,
  'titulo': 'Columna Vertebral en el Plano Sagital',
  'secao': '',
  'autores': pt['8']['autores'],
  'contexto': 'El equilibrio sagital es el resultado de la integración funcional entre la morfología pélvica, las curvaturas vertebrales regionales, la musculatura antigravitatoria y los mecanismos compensatorios de caderas y extremidades inferiores (extensión de cadera, flexión de rodillas, flexión plantar de tobillos). En bipedestación, el cuerpo humano procura mantener el centro de gravedad sobre el polígono de sustentación con el menor gasto energético y fatiga muscular posibles, principio sintetizado por Jean Dubousset en el "cono de economía". Cuando la desalineación desplaza el tronco fuera de esta zona de confort biomecánico, se incrementan la actividad muscular compensatoria, el dolor axial y la discapacidad funcional. La evaluación sagital no puede fundamentarse en un único valor radiográfico aislado, debido a la amplia variabilidad anatómica interindividual y a los cambios adaptativos vinculados al envejecimiento. El capítulo analiza el balance como la congruencia estructural entre columna y pelvis, evaluando parámetros fijos y posicionales, la distribución anatómica de la lordosis, el balance cervical, la reserva compensatoria y los modelos de proporcionalidad (Roussouly, SRS-Schwab y GAP score).',
  'objetivo': 'Presentar los fundamentos anatómicos y biomecánicos del equilibrio sagital y organizar los principales parámetros radiográficos de la evaluación espinopélvica. Al finalizar, el lector deberá distinguir parámetros anatómicos constantes de parámetros posicionales dinámicos; reconocer los mecanismos compensatorios raquídeos y periféricos; comprender los modelos de Roussouly, SRS-Schwab y Global Alignment and Proportion (GAP); y aplicar el análisis individualizado de la lordosis, la pelvis, el balance global y la columna cervical a la planificación de la cirugía reconstructiva.',
  'conteudo_principal': [
    {
      'subtitulo': 'Equilibrio económico y relación espinopélvica',
      'texto': 'La bipedestación humana depende de curvas sagitales armónicas y alternadas: lordosis cervical y lumbar, y cifosis torácica y sacra. El "cono de economía" define el cilindro espacial dentro del cual el individuo se mantiene erguido con mínimo esfuerzo muscular. La pérdida del balance sagital desplaza la línea de gravedad, obligando a un gasto energético continuo mediante contracciones musculares compensatorias. La pelvis actúa como la base mecánica de la columna, articulando el tronco móvil con las extremidades inferiores.'
    },
    {
      'subtitulo': 'Parámetros pélvicos: IP, VP y PS',
      'texto': 'La incidencia pélvica (IP/PI) es un parámetro morfológico constante tras la madurez esquelética que define la morfología de la pelvis. La IP se vincula geométricamente con dos parámetros posicionales dinámicos: la versión pélvica (VP/PT, que refleja la retroversión pélvica) y la pendiente sacra (PS/SS, que indica la inclinación horizontal del sacro), mediante la ecuación fundamental: IP = VP + PS. Pacientes con IP elevada requieren mayor lordosis lumbar y pendiente sacra para mantenerse alineados, mientras que pacientes con IP baja demandan menor lordosis. Una VP > 20° evidencia una retroversión pélvica activa para compensar un desbalance anterior.'
    },
    {
      'subtitulo': 'Parámetros vertebrales y globales',
      'texto': 'El eje vertical sagital (SVA, distancia horizontal de la plomada de C7 a la esquina posterosuperior de S1, normal <4–5 cm) cuantifica el desplazamiento global del tronco, aunque puede subestimar la deformidad si el paciente compensa retrovirtiendo la pelvis o flexionando las rodillas. Parámetros angulares globales como el ángulo pélvico T1 (TPA, ángulo entre cabezas femorales, centro de T1 y S1, normal <14°–15°) y el índice FBI integran la inclinación troncal y la compensación pélvica en un único valor no enmascarable. La lordosis lumbar (LL) se divide en lordosis superior (L1–L4) y lordosis inferior (L4–S1), aportando normalmente esta última el 60–70% de la lordosis total.'
    },
    {
      'subtitulo': 'Modelos de clasificación: Roussouly, SRS-Schwab y GAP',
      'texto': 'La clasificación de Roussouly estratifica la lordosis en cuatro patrones morfológicos según la pendiente sacra y el vértice/ápice de la curva (más el tipo 3 antevertido y variaciones degenerativas), orientando la restauración a la forma anatómica original. La clasificación SRS-Schwab clasifica la deformidad según el desajuste PI–LL (<10°, 10°–20°, >20°), versión pélvica (PT <20°, 20°–30°, >30°) y SVA (<4 cm, 4–9,5 cm, >9,5 cm). El puntaje GAP (Global Alignment and Proportion) cuantifica la proporcionalidad sagital (versión pélvica relativa, lordosis relativa, índice de distribución de lordosis, balance global relativo y edad) para predecir fallas mecánicas de instrumentación (cifosis de la unión proximal [PJK], rotura de barras y reoperaciones).'
    },
    {
      'subtitulo': 'Alineación cervical y reservas de compensación',
      'texto': 'La columna cervical se adapta de manera secundaria para preservar la mirada horizontal. La lordosis cervical (CL), la pendiente de T1 (T1S) y el SVA C2–C7 están interconectados: un incremento de la cifosis torácica o del balance sagital positivo aumenta la pendiente de T1 y genera una hiperlordosis cervical compensatoria. Cuando la reserva funcional se agota, aparece cifosis cervical y pérdida de la mirada horizontal.'
    }
  ],
  'aplicacao_clinica': 'En la práctica clínica, es mandatario obtener radiografías panorámicas espinopélvicas de 36 pulgadas en bipedestación (estudios EOS o panorámicas con cabezas femorales y rodillas visibles). La evaluación comienza calculando la Incidencia Pélvica constitucional. Se determina el objetivo de lordosis lumbar (LL = IP ± 9° o fórmulas ajustadas por edad), asegurando ubicar el 60–70% de la lordosis entre L4 y S1. Evaluar la versión pélvica (PT) para revelar retroversión encubierta. En pacientes ancianos, sobrecorregir a valores de adultos jóvenes incrementa drásticamente las fallas de unión proximal (PJK/PJF); deben aplicarse metas alineatorias ajustadas por edad. Al planificar osteotomías (PCO, PSO o VCR), precalcular la corrección angular requerida y restituir el ápice según el tipo de Roussouly previene sobrecargas mecánicas y fracaso del constructo.',
  'mensagem_central': 'El equilibrio sagital no equivale a una cifra universal rígida, sino a la congruencia armónica entre morfología pélvica, distribución de curvaturas, alineación global y reserva compensatoria. Incidencia pélvica, PT, SS, lordosis regional, parámetros cervicales y mediciones angulares globales deben interpretarse conjuntamente. La cirugía reconstructiva debe buscar una proporcionalidad postural eficiente adaptada a la edad, anatomía constitucional y demandas funcionales del paciente.',
  'por_que_importa': 'Un paciente puede aparentar estar alineado en una radiografía simple mientras sostiene su postura a expensas de retroversión pélvica severa, hiperlordosis cervical y flexión de rodillas con gran agotamiento muscular. Este capítulo proporciona las herramientas para analizar la morfología pélvica fija, la distribución anatómica de la lordosis, la reserva compensatoria y el costo energético del equilibrio. Comprender estos principios previene fallas mecánicas catastróficas (seudoartrosis, PJK y rotura de implantes).',
  'decs': ['Columna Vertebral', 'Pelvis', 'Equilibrio Postural', 'Lordosis', 'Cifosis', 'Radiografía', 'Curvaturas de la Columna Vertebral', 'Procedimientos Quirúrgicos Operativos'],
  'mesh': ['Spine', 'Pelvis', 'Postural Balance', 'Lordosis', 'Kyphosis', 'Radiography', 'Spinal Curvatures', 'Surgical Procedures, Operative'],
  'palavras_chave_livres': ['Equilibrio sagital', 'Incidencia pélvica', 'Versión pélvica', 'Clasificación de Roussouly', 'Puntaje GAP', 'Cono de economía', 'Cifosis de la unión proximal'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'La incidencia pélvica determina la lordosis',
      'texto': 'La incidencia pélvica (IP) es un parámetro anatómico invariable que dicta la lordosis lumbar (LL) y la pendiente sacra (SS) requeridas. IP = PT + SS. Individuos con IP alta necesitan mayor lordosis y pendiente sacra; individuos con IP baja demandan curvas más aplanadas.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Concentrar dos tercios de la lordosis en L4–S1',
      'texto': 'Independientemente de la magnitud total de la curva, el 60% al 70% de la lordosis lumbar normal se localiza entre L4 y S1. Reconstruir lordosis predominantemente en la columna lumbar alta (L1–L3) genera una columna baja aplanada y sobrecarga patológica, aumentando el riesgo de PJK y rotura de barras.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Ajustar los objetivos según la edad',
      'texto': 'No aplique parámetros de alineación de adultos jóvenes (SVA < 4 cm, PT < 15°) de manera indiscriminada en ancianos. Forzar una alineación juvenil rígida en pacientes añosos genera una tasa inaceptable de cifosis de la unión proximal (PJK/PJF). Ajuste las metas a la edad del paciente.'
    }
  ],
  'referencias': pt['8']['referencias'],
  'seo': {
    'titulo': 'Columna Vertebral en el Plano Sagital | Tratado de Columna',
    'meta_descricao': 'Guía integral de balance sagital espinopélvico: parámetros pélvicos (IP, VP, PS), clasificación de Roussouly, puntaje GAP, SRS-Schwab y corrección quirúrgica.',
    'resumo_chamada': 'Domine los fundamentos del alineamiento sagital espinopélvico, mecanismos compensatorios, tipos de Roussouly, escala GAP y planificación en deformidad raquídea.',
    'slug': 'columna-vertebral-en-el-plano-sagital'
  }
}

with open('slice_5_8_en.json', 'w', encoding='utf-8') as f:
    json.dump(en, f, ensure_ascii=False, indent=2)

with open('slice_5_8_es.json', 'w', encoding='utf-8') as f:
    json.dump(es, f, ensure_ascii=False, indent=2)

print('Batch 5-8 successfully saved!')
