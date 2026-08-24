import json

with open('/Users/manoeldesign/.gemini/antigravity/brain/7e1703fb-1acf-40aa-a137-05338f0871de/scratch/slice_1_28_pt.json', 'r', encoding='utf-8') as f:
    pt = json.load(f)

en = {}
es = {}

# ==========================================
# CHAPTER 21
# ==========================================
en['21'] = {
  'numero': 21,
  'titulo': 'Traumatic Injuries of the Subaxial Cervical Spine',
  'secao': 'Section 3 — Spinal Trauma',
  'autores': pt['21']['autores'],
  'contexto': 'Traumatic injuries of the subaxial cervical spine (C3–C7) represent the majority of all cervical fractures and dislocations, accounting for substantial morbidity and traumatic quadriplegia in young active individuals (high-energy motor vehicle crashes, diving accidents) and elderly patients (low-energy ground-level falls on degenerative, stenotic spines). The subaxial spine combines wide range of motion with mechanical load bearing; acute traumatic failure involves complex combinations of axial compression, flexion, extension, rotation, and distraction. Injuries range from stable compression fractures to catastrophic distractive flexion injuries, unilateral or bilateral facet subluxation/dislocation ("locked facets"), and burst fractures with traumatic cord compression. Systematically evaluating mechanical stability relies on assessing the three columns and the integrity of the Posterior Ligamentous Complex (PLC: supraspinous and interspinous ligaments, ligamentum flavum, and facet capsules) and the anterior/posterior longitudinal ligaments. Modern classification systems—predominantly the AO Spine Subaxial Cervical Spine Injury Classification and the Subaxial Injury Classification (SLIC) score—integrate fracture morphology (Type A compression, Type B tension band/distraction, Type C translation/displacement, and Type F facet injuries), PLC status, neurological examination (N0–N4, Nx), and clinical modifiers (M1–M4). Multi-detector CT defines bony fracture morphology and facet apposition, while urgent MRI evaluates traumatic disc herniations, spinal cord edema/hemorrhage, and ligamentous disruption. Treatment strategy—closed traction reduction, anterior cervical discectomy and fusion (ACDF), posterior instrumented reduction and lateral mass/pedicle screw fusion, or combined circumferential stabilization—depends on cord compression, facet reduction, traumatic disc status, and construct biomechanics.',
  'objetivo': 'To present the clinical evaluation, classification, biomechanical stability assessment, and surgical/non-operative management of subaxial cervical spine trauma (C3–C7). The reader should be able to apply the AO Spine and SLIC classification systems; recognize stable versus unstable injury patterns; assess facet joint subluxation and locked facet morphology; evaluate the role of urgent closed reduction vs. operative reduction in facet dislocations; recognize the danger of extruded traumatic disc herniations during reduction; and select anterior, posterior, or circumferential surgical approaches.',
  'conteudo_principal': [
    {
      'subtitulo': 'Anatomy, Biomechanics, and Injury Mechanisms',
      'texto': 'The subaxial cervical spine (C3–C7) features lordotic alignment, oblique facet joints (angled ~45° in the sagittal plane), uncovertebral joints of Luschka, and transverse foramina transmitting the vertebral arteries. The three-column concept and tension band integrity govern stability. Primary injury mechanisms include: 1) Compression/Axial loading (AO Type A): minor compression (A1/A2), burst fractures (A3 incomplete, A4 complete burst with retropulsion); 2) Distraction/Tension band failure (AO Type B): anterior tension band failure in hyperextension (B1/B3) or posterior tension band disruption in hyperflexion (B2); 3) Translation/Displacement (AO Type C): mechanical dislocation or subluxation in any plane; 4) Facet Injuries (AO Type F): F1 nondisplaced facet fracture, F2 displaced facet fracture, F3 floating lateral mass, F4 facet subluxation/dislocation (unilateral or bilateral locked facets).'
    },
    {
      'subtitulo': 'Classification Systems: AO Spine Subaxial and SLIC Score',
      'texto': 'The AO Spine Subaxial classification organizes injuries hierarchically by morphology (Types A, B, C, F), neurology (N0 intact, N1 transient, N2 radiculopathy, N3 incomplete cord, N4 complete cord, Nx unexaminable), and modifiers (M1 PLC indeterminate, M2 disc herniation, M3 metabolic/ankylosing disease, M4 vertebral artery injury). The Subaxial Injury Classification (SLIC) score grades three independent categories: 1) Fracture morphology (0–4 points: no abnormality = 0, compression = 1, burst = 2, distraction = 3, translation/rotation = 4); 2) Neurological status (0–4 points: intact = 0, root = 1, complete cord = 2, incomplete cord = 3, continuous cord compression +1); 3) PLC integrity (0–2 points: intact = 0, indeterminate = 1, disrupted = 2). A total SLIC score <=3 indicates non-operative management (rigid cervical collar); SLIC = 4 is equivocal; SLIC >=5 mandates surgical stabilization.'
    },
    {
      'subtitulo': 'Facet Dislocations and the Traumatic Disc Dilemma',
      'texto': 'Facet subluxation and bilateral/unilateral locked facets (AO F4 / Type C) represent severe translation injuries with complete disruption of the posterior tension band and intervertebral disc. In awake, cooperative patients with bilateral locked facets and incomplete neurological deficits, immediate closed skeletal reduction with Gardner-Wells tongs (starting with 5 kg and adding 2–3 kg per level under continuous fluoroscopic and neurological monitoring) can rapidly decompress the spinal canal. However, pre-reduction MRI (or emergent intraoperative exploration) is vital because an extruded traumatic disc herniation retropulsed behind the displaced vertebral body can cause catastrophic spinal cord transection during closed or open posterior reduction maneuvers. If a massive extruded disc herniation is present on MRI, anterior cervical discectomy and decompression must precede facet reduction.'
    },
    {
      'subtitulo': 'Surgical Decision-Making and Operative Approaches',
      'texto': 'Surgical approach is tailored to pathology: 1) Anterior approach (ACDF or corpectomy with anterior plating): ideal for teardrop fractures, burst fractures (A3/A4) with anterior cord compression, and facet dislocations with herniated traumatic discs; 2) Posterior approach (lateral mass screw fixation C3–C6, pedicle screw fixation C7): preferred for highly unstable posterior tension band disruptions (B2), irreducible locked facets, floating lateral masses (F3), or ankylosing spondylitis fractures; 3) Combined 360° circumferential stabilization: required for severe multi-column comminution, severe osteopenia, or severe three-column dissociation.'
    }
  ],
  'aplicacao_clinica': 'In the emergency trauma center, managing subaxial cervical trauma requires immediate assessment of neurological status and facet alignment on CT. In an alert patient presenting with bilateral locked facets and acute quadriparesis, emergent closed reduction under conscious sedation or emergent operative reduction within 4 hours restores canal diameter and provides the highest chance of neurological recovery. If the patient is obtunded or if MRI shows an extruded herniated disc fragment lodged behind the dislocated vertebral body, perform an emergent anterior cervical discectomy first to remove the disc fragment, followed by anterior reduction and plating (or posterior instrumentation if anterior reduction fails). In geriatric patients presenting with central cord syndrome following minor hyperextension trauma without fracture (AO B3/M3), urgent MRI demonstrates cord edema and preexisting canal stenosis, guiding early decompressive surgery (<24 hours). In patients with facet fractures involving the transverse foramen (AO M4), obtain CT Angiography of the neck to evaluate vertebral artery occlusion or dissection.',
  'mensagem_central': 'Management of subaxial cervical spine trauma (C3–C7) requires precise integration of fracture morphology, posterior ligamentous complex (PLC) integrity, neurological status, and traumatic disc herniation risk. Applying the AO Spine Subaxial classification and SLIC score guides the threshold between rigid collar immobilization and surgical stabilization. Rapid closed or open facet reduction within hours—preceded by anterior discectomy when extruded disc fragments threaten the cord—maximizes neurological recovery.',
  'por_que_importa': 'Subaxial cervical spine trauma combines high risk of permanent quadriplegia with severe mechanical instability. Failing to recognize facet subluxation or attempting posterior locked facet reduction in the presence of an unrecognized retrovertebral extruded disc can produce irreversible iatrogenic cord transection. This chapter provides a clear diagnostic and operative roadmap, integrating classification scores (AO Spine and SLIC), closed reduction guidelines, and approach selection (anterior vs. posterior vs. 360°) to restore alignment and protect neural function.',
  'decs': ['Cervical Vertebrae', 'Spinal Fractures', 'Joint Dislocations', 'Spinal Cord Injuries', 'Spinal Fusion', 'Magnetic Resonance Imaging', 'Tomography, X-Ray Computed', 'Joint Instability'],
  'mesh': ['Cervical Vertebrae', 'Spinal Fractures', 'Joint Dislocations', 'Spinal Cord Injuries', 'Spinal Fusion', 'Magnetic Resonance Imaging', 'Tomography, X-Ray Computed', 'Joint Instability'],
  'palavras_chave_livres': ['Subaxial cervical spine', 'Locked facets', 'AO Spine Subaxial', 'SLIC score', 'Posterior ligamentous complex', 'Traumatic disc herniation', 'Gardner-Wells traction reduction'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'SLIC Score Guides Surgical Threshold',
      'texto': 'The SLIC score quantifies morphology (0–4), PLC integrity (0–2), and neurology (0–4). Scores <=3 indicate non-operative management (rigid collar); SLIC = 4 is equivocal; scores >=5 mandate surgical decompression and stabilization.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Rule Out Extruded Disc Before Posterior Reduction',
      'texto': 'In locked facet dislocations, an extruded traumatic disc herniation can retropulse during reduction maneuvers, causing acute cord transection. When a large disc extrusion is identified on MRI, perform anterior discectomy (ACDF) prior to reducing the facet joints.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Urgent Reduction of Locked Facets',
      'texto': 'In alert patients with locked facets and incomplete quadriparesis, rapid closed skeletal traction reduction or emergent operative reduction within hours restores spinal canal dimensions and maximizes the potential for meaningful neurological recovery.'
    }
  ],
  'referencias': pt['21']['referencias'],
  'seo': {
    'titulo': 'Traumatic Injuries of the Subaxial Cervical Spine | Spine Treatise',
    'meta_descricao': 'Complete guide to subaxial cervical trauma (C3–C7): AO Spine classification, SLIC score, locked facets, traumatic disc herniation, and surgical approaches.',
    'resumo_chamada': 'Master the evaluation and surgical management of subaxial cervical trauma: AO Spine/SLIC scoring, locked facet reduction, ACDF vs. posterior fixation.',
    'slug': 'traumatic-injuries-of-the-subaxial-cervical-spine'
  }
}

es['21'] = {
  'numero': 21,
  'titulo': 'Lesiones Traumáticas de la Columna Cervical Subaxial',
  'secao': 'Sección 3 — Trauma de la Columna Vertebral',
  'autores': pt['21']['autores'],
  'contexto': 'Las lesiones traumáticas de la columna cervical subaxial (C3–C7) representan la gran mayoría de las fracturas y luxaciones cervicales, constituyendo una causa primordial de morbilidad grave y cuadriplejía traumática en adultos jóvenes (accidentes de tránsito de alta energía, zambullidas) y en adultos mayores (caídas desde la propia altura sobre canales estrechos degenerativos). La columna subaxial combina una amplia movilidad con la transmisión de cargas mecánicas; los mecanismos de lesión combinan compresión axial, flexión, extensión, rotación y distracción. El espectro lesional abarca desde fracturas por compresión estables hasta lesiones por flexión-distracción catastróficas, luxaciones facetarias unifacetarias o bifacetarias ("facetas enganchadas") y fracturas por estallido con compresión medular aguda. La evaluación de la estabilidad mecánica se fundamenta en la integridad de las tres columnas y del Complejo Ligamentario Posterior (PLC: ligamentos supraespinoso, interespinoso, amarillo y cápsulas articulares) y longitudinal anterior/posterior. Las clasificaciones contemporáneas —principalmente la clasificación AO Spine Subaxial y la escala SLIC (Subaxial Injury Classification)— integran la morfología de la fractura (Tipo A compresión, Tipo B banda de tensión/distracción, Tipo C traslación/desplazamiento y Tipo F lesiones facetarias), el estado del PLC, la clínica neurológica (N0–N4) y modificadores clínicos (M1–M4). La TC multidetector define la anatomía ósea y el encaje facetario, mientras que la RM urgente valora hernias discales traumáticas, contusión medular y desgarros ligamentarios.',
  'objetivo': 'Presentar la evaluación clínica, clasificación, valoración de estabilidad biomecánica y tratamiento conservador y quirúrgico de los traumatismos cervicales subaxiales (C3–C7). Al finalizar, el lector deberá aplicar los sistemas de clasificación AO Spine y SLIC; diferenciar patrones estables de inestables; evaluar la morfología de las luxaciones facetarias; comprender el papel de la reducción cerrada precoz frente a la reducción abierta; reconocer el riesgo de hernias discales traumáticas extruidas durante la reducción; y seleccionar abordajes quirúrgicos anteriores, posteriores o circunferenciales.',
  'conteudo_principal': [
    {
      'subtitulo': 'Anatomía, biomecánica y mecanismos de lesión',
      'texto': 'La columna cervical subaxial (C3–C7) presenta lordosis fisiológica, carillas articulares inclinadas 45° en el plano sagital, articulaciones uncovertebrales de Luschka y forámenes transversos que alojan la arteria vertebral. La estabilidad depende del soporte anterior y de la banda de tensión posterior (PLC). Los mecanismos principales incluyen: 1) Compresión axial (AO Tipo A): fracturas por compresión menor (A1/A2) y estallido (A3 incompleto, A4 estallido completo con retropulsión); 2) Distracción/Falla de banda de tensión (AO Tipo B): falla de la banda de tensión anterior en hiperextensión (B1/B3) o posterior en hiperflexión (B2); 3) Traslación/Desplazamiento (AO Tipo C): luxación o subluxación en cualquier plano; 4) Lesiones Facetarias (AO Tipo F): F1 fractura no desplazada, F2 fractura desplazada, F3 masa lateral flotante, F4 luxación/subluxación facetaria unifacetaria o bifacetaria.'
    },
    {
      'subtitulo': 'Sistemas de clasificación: AO Spine Subaxial y escala SLIC',
      'texto': 'La clasificación AO Spine Subaxial organiza las lesiones por morfología (A, B, C, F), estado neurológico (N0 a N4) y modificadores (M1 lesión ligamentaria indeterminada, M2 hernia discal compresiva, M3 patología anquilosante previa, M4 lesión vascular vertebral). La escala SLIC asigna puntuación en tres categorías: 1) Morfología (0–4 puntos: sin lesión = 0, compresión = 1, estallido = 2, distracción = 3, traslación/rotación = 4); 2) Estado neurológico (0–4 puntos: intacto = 0, radiculopatía = 1, lesión medular completa = 2, lesión medular incompleta = 3, compresión continua +1); 3) Integridad del PLC (0–2 puntos: intacto = 0, indeterminado = 1, roto = 2). Una puntuación SLIC <=3 indica manejo conservador; SLIC = 4 es dudoso; SLIC >=5 exige estabilización quirúrgica.'
    },
    {
      'subtitulo': 'Luxaciones facetarias y el riesgo del disco traumático',
      'texto': 'Las luxaciones facetarias unilaterales y bilaterales (AO F4 / Tipo C) representan lesiones de alta energía con rotura completa del PLC y del disco intervertebral. En pacientes conscientes y colaboradores con déficit incompleto, la reducción cerrada inmediata con halo-tracción esquelética progresiva bajo control radioscópico y neurológico continuo permite descomprimir el canal con rapidez. Sin embargo, la RM previa (o la exploración quirúrgica) es crucial porque una hernia discal traumática extruida por detrás del cuerpo vertebral luxado puede provocar la sección medular iatrogénica durante la maniobra de reducción. Si se documenta una gran hernia discal extruida en RM, la discectomía anterior debe preceder a la reducción.'
    },
    {
      'subtitulo': 'Toma de decisiones y abordajes quirúrgicos',
      'texto': 'El abordaje se adapta a la patología: 1) Vía anterior (discectomía y fusión ACDF o corpectomía con placa anterior): de elección en fracturas en estallido (A3/A4) con compresión anterior, fracturas en lágrima (teardrop) y luxaciones facetarias asociadas a hernia discal traumática extruida; 2) Vía posterior (tornillos a masas laterales C3–C6 y pedículos C7): preferida en fallas puras de la banda de tensión posterior (B2), facetas enganchadas irreductibles por vía anterior o fracturas en columnas anquilosadas; 3) Estabilización circunferencial 360°: requerida en conminución tricolumnar severa o grave osteoporosis.'
    }
  ],
  'aplicacao_clinica': 'En el centro de trauma, el manejo exige evaluar la alineación de las facetas en la TC y el estado neurológico. En un paciente alerta con luxación facetaria bilateral y cuadriparesia incompleta, la reducción cerrada precoz o la reducción quirúrgica abierta urgente en quirófano dentro de las primeras horas restablece el diámetro del conducto y maximiza la recuperación neurológica. Si el paciente se encuentra en coma o si la RM evidencia una hernia discal traumática extruida tras el cuerpo luxado, realice de inmediato una discectomía anterior (ACDF) para extraer el fragmento discal antes de reducir las facetas. En ancianos con síndrome medular central tras traumatismo en hiperextensión sin fractura (AO B3/M3), la RM demuestra edema medular y estenosis previa, justificando descompresión quirúrgica temprana (<24 horas). Ante fracturas facetarias con extensión al foramen transverso (AO M4), solicite Angio-TC para evaluar la arteria vertebral.',
  'mensagem_central': 'El tratamiento de las lesiones traumáticas de la columna cervical subaxial (C3–C7) se fundamenta en la morfología de la fractura, la integridad del complejo ligamentario posterior (PLC), el estado neurológico y la presencia de hernias discales traumáticas. La clasificación AO Spine y la escala SLIC definen la indicación entre manejo conservador y quirúrgico. La reducción precoz de luxaciones facetarias en pocas horas —precedida de discectomía anterior si existe hernia discal extruida— maximiza la recuperación funcional.',
  'por_que_importa': 'El trauma cervical subaxial combina un elevado riesgo de cuadriplejía permanente con inestabilidad biomecánica severa. No diagnosticar una subluxación facetaria o intentar reducir quirúrgicamente por vía posterior una luxación con una hernia discal traumática extruida no reconocida puede provocar la sección medular iatrogénica irreversible. Este capítulo proporciona una guía práctica y basada en evidencia para clasificar las lesiones (AO Spine y SLIC), realizar reducciones seguras y seleccionar el abordaje quirúrgico óptimo.',
  'decs': ['Vértebras Cervicales', 'Fracturas de la Columna Vertebral', 'Luxaciones Articulares', 'Traumatismos de la Médula Espinal', 'Fusión Vertebral', 'Imagen por Resonancia Magnética', 'Tomografía Computarizada por Rayos X', 'Inestabilidad Articular'],
  'mesh': ['Cervical Vertebrae', 'Spinal Fractures', 'Joint Dislocations', 'Spinal Cord Injuries', 'Spinal Fusion', 'Magnetic Resonance Imaging', 'Tomography, X-Ray Computed', 'Joint Instability'],
  'palavras_chave_livres': ['Columna cervical subaxial', 'Facetas enganchadas', 'Clasificación AO Spine Subaxial', 'Escala SLIC', 'Complejo ligamentario posterior', 'Hernia discal traumática', 'Reducción cerrada con tracción'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'La escala SLIC define la conducta quirúrgica',
      'texto': 'La escala SLIC cuantifica morfología (0–4), integridad del PLC (0–2) y neurología (0–4). Puntuaciones <=3 indican manejo conservador con collarín; SLIC = 4 es límite; puntuaciones >=5 exigen descompresión y estabilización quirúrgica.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Descartar hernia discal antes de reducir facetas',
      'texto': 'En luxaciones facetarias, una hernia discal traumática extruida puede retropulsarse durante la reducción y provocar sección medular. Si la RM identifica un disco extruido, realice una discectomía anterior (ACDF) previa a la reducción facetaria.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Reducción urgente de luxaciones facetarias',
      'texto': 'En pacientes conscientes con luxación facetaria y déficit neurológico incompleto, la reducción cerrada inmediata con halo-tracción o la reducción abierta urgente en pocas horas descomprime el conducto y maximiza la recuperación neurológica.'
    }
  ],
  'referencias': pt['21']['referencias'],
  'seo': {
    'titulo': 'Lesiones Traumáticas de la Columna Cervical Subaxial | Tratado',
    'meta_descricao': 'Guía integral de traumatismos cervicales subaxiales (C3–C7): clasificación AO Spine, escala SLIC, luxación facetaria, hernia traumática y técnicas de ACDF.',
    'resumo_chamada': 'Domine la evaluación y tratamiento quirúrgico del trauma cervical subaxial: escalas AO Spine y SLIC, reducción de facetas enganchadas y abordajes anterior y posterior.',
    'slug': 'lesiones-traumaticas-de-la-columna-cervical-subaxial'
  }
}

# ==========================================
# CHAPTER 22
# ==========================================
en['22'] = {
  'numero': 22,
  'titulo': 'Traumatic Injuries of the Thoracic and Lumbar Spine',
  'secao': '',
  'autores': pt['22']['autores'],
  'contexto': 'Traumatic injuries of the thoracic and lumbar spine represent the most frequent fractures of the entire vertebral axis, predominantly concentrating across the biomechanically vulnerable thoracolumbar junction (T10–L2). High-energy trauma (motor vehicle collisions, falls from height) affects younger populations with substantial risk of conus medullaris and cauda equina injury, whereas low-energy fragility fractures affect osteoporotic elderly individuals. The functional spinal unit comprises the anterior column (vertebral bodies, intervertebral discs, anterior and posterior longitudinal ligaments) and the posterior tension band (pedicles, lamina, facet joints, and the Posterior Ligamentous Complex [PLC: supraspinous, interspinous ligaments, ligamentum flavum, and facet capsules]). Classifications have evolved from mechanistic models (Denis three-column model, McCormack Load Sharing Classification) to the globally standardized AO Spine Thoracolumbar Classification and Thoracolumbar Injury Classification and Severity Score (TLICS). Multi-detector CT defines fracture morphology, comminution, and canal compromise, while MRI evaluates PLC disruption, cord contusion, and epidural hematoma. The central therapeutic challenge is distinguishing mechanically stable compression injuries amenable to functional bracing from unstable burst, distraction (Chance), or rotational translation fractures requiring open or percutaneous posterior pedicle screw instrumentation, anterior column cage reconstruction, or spinal decompression.',
  'objetivo': 'To present the clinical evaluation, classification, biomechanical stability assessment, and non-operative/surgical management of thoracic and lumbar spine trauma. The reader should be able to apply the AO Spine Thoracolumbar Classification (Types A, B, C) and the TLICS scoring system; recognize the clinical and radiological hallmarks of posterior ligamentous complex (PLC) disruption; understand the indications for percutaneous versus open pedicle screw fixation, direct vs. indirect decompression, and anterior column reconstruction; and prevent post-traumatic kyphosis and neurological deterioration.',
  'conteudo_principal': [
    {
      'subtitulo': 'Biomechanics and the Thoracolumbar Transition Zone',
      'texto': 'The thoracolumbar junction (T10–L2) transitions from the rigid thoracic cage (coronal facets, kyphosis) to the mobile lumbar spine (sagittal facets, lordosis). Denis established the 3-column model (anterior, middle, posterior). Mechanical stability relies fundamentally on the integrity of the middle column (posterior vertebral body cortex and PLL) and the posterior tension band (PLC). Loss of middle column integrity (burst fracture) combined with PLC disruption results in progressive mechanical collapse and post-traumatic kyphotic deformity.'
    },
    {
      'subtitulo': 'AO Spine Thoracolumbar Classification System',
      'texto': 'The AO Spine system organizes injuries hierarchically into three primary morphological types: 1) Type A: Compression fractures (A0 minor non-structural, A1 wedge compression, A2 coronal split/pincer, A3 incomplete burst involving one endplate, A4 complete burst involving both endplates and posterior wall retropulsion); 2) Type B: Distraction injuries / Tension band failure (B1 transosseous Chance fracture through posterior elements and vertebral body, B2 osseoligamentous posterior tension band disruption, B3 hyperextension injury through anterior tension band/ALL); 3) Type C: Translation/Displacement in any plane (subluxation, dislocation, fracture-dislocation). Neurological status is classified from N0 (intact) to N4 (complete cord/conus deficit), and clinical modifiers include M1 (indeterminate PLC) and M2 (comorbidities/ankylosing spine).'
    },
    {
      'subtitulo': 'TLICS Score and Decision-Making Algorithms',
      'texto': 'The Thoracolumbar Injury Classification and Severity Score (TLICS) assigns points across three core categories: 1) Morphology (compression = 1, burst = 2, distraction = 3, translation/rotation = 4); 2) Neurological status (intact = 0, nerve root injury = 2, complete cord = 2, incomplete cord/conus = 3, cauda equina syndrome = 3); 3) PLC integrity (intact = 0, suspected/indeterminate = 2, disrupted = 3). A total TLICS score <=3 indicates non-operative management (early mobilization with or without a rigid TLSO brace); TLICS = 4 is indeterminate (surgeon discretion); and TLICS >=5 mandates surgical reduction and stabilization.'
    },
    {
      'subtitulo': 'Diagnostic Imaging and Clinical Assessment',
      'texto': 'Multi-detector CT with multiplanar reconstructions is the primary investigation to assess vertebral body height loss, sagittal kyphosis (Cobb angle), pedicle splay, and canal stenosis. MRI (STIR and T2-weighted sequences) is mandatory when physical examination reveals focal interspinous widening or palpation tenderness, demonstrating PLC hyperintensity (black line disruption of ligamentum flavum/supraspinous ligament). MRI also evaluates conus medullaris contusion and traumatic disc disruption.'
    },
    {
      'subtitulo': 'Management Principles: Conservative, Percutaneous, and Open Reconstruction',
      'texto': 'Non-operative treatment (early ambulation, Jewett or molded TLSO brace, serial standing radiographs at 1, 2, and 6 weeks) is indicated for stable A1, A2, and neurologically intact A3 fractures with intact PLC and local kyphosis <15°–20°. Surgical treatment is indicated for unstable burst fractures (A4 with significant comminution), distraction injuries (B1, B2, B3), fracture-dislocations (Type C), or any fracture with progressive neurological deficit. Surgical options include minimally invasive percutaneous pedicle screw fixation (sparing paraspinal muscles in intact neurology), open posterior decompression and instrumentation with intermediate screws, and anterior or posterolateral corpectomy with expandable cage reconstruction for severe anterior load-bearing deficiency (McCormack Load Sharing score >=7).'
    }
  ],
  'aplicacao_clinica': 'In clinical practice, evaluate three interconnected factors: neurological deficit, PLC integrity, and anterior column comminution. In a patient with an L1 burst fracture, intact neurology, and intact PLC on MRI (TLICS 2), non-operative treatment with a molded TLSO brace and immediate protected ambulation yields functional outcomes equivalent to open surgery without operative morbidity. In contrast, if MRI reveals hyperintensity of the supraspinous ligament and ligamentum flavum (PLC disruption, AO Type B2 / TLICS 5), surgery is mandatory even in a neurologically intact patient, as non-operative bracing fails, leading to progressive kyphosis and chronic back pain. In patients with an A4 burst fracture and progressive neurological deficit from retropulsed bone fragments, urgent posterior decompression, postural ligamentotaxis reduction, and pedicle screw fixation within 24 hours provide excellent canal clearance and neurological recovery. In patients with high McCormack Load Sharing scores (>=7) undergoing short-segment posterior instrumentation, anterior column support (interbody cage) is necessary to prevent posterior hardware fatigue failure.',
  'mensagem_central': 'Accurate diagnosis and management of thoracic and lumbar spine trauma depend on identifying the primary injury mechanism and evaluating true structural stability rather than relying solely on bony fracture appearance. The AO Spine classification and TLICS score integrate morphology, posterior ligamentous complex (PLC) competence, and neurological status. Selecting between conservative functional bracing, percutaneous instrumentation, and open anterior/posterior reconstruction must be tailored to patient stability, neurology, and anterior column load sharing.',
  'por_que_importa': 'A thoracolumbar fracture can appear to be a benign compression fracture on standard X-rays while harboring an unrecognized complete posterior ligamentous complex (PLC) rupture that will progress to severe post-traumatic kyphosis and chronic disability if treated in a simple brace. This chapter provides a rigorous diagnostic framework combining clinical examination, multi-detector CT, and MRI to identify occult tension band failures, calculate TLICS and AO scores, and select the least invasive, most durable stabilization strategy.',
  'decs': ['Thoracic Vertebrae', 'Lumbar Vertebrae', 'Spinal Fractures', 'Spinal Cord Injuries', 'Kyphosis', 'Tomography, X-Ray Computed', 'Magnetic Resonance Imaging', 'Spinal Fusion'],
  'mesh': ['Thoracic Vertebrae', 'Lumbar Vertebrae', 'Spinal Fractures', 'Spinal Cord Injuries', 'Kyphosis', 'Tomography, X-Ray Computed', 'Magnetic Resonance Imaging', 'Spinal Fusion'],
  'palavras_chave_livres': ['Thoracolumbar fractures', 'AO Spine Thoracolumbar', 'TLICS score', 'Posterior ligamentous complex', 'Burst fracture', 'Chance fracture', 'Percutaneous pedicle screws'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'PLC Integrity Governs Stability',
      'texto': 'The Posterior Ligamentous Complex (PLC: supraspinous, interspinous, ligamentum flavum, facet capsules) prevents progressive kyphotic collapse. Any fracture with PLC disruption (AO Type B / TLICS >=5) is mechanically unstable and mandates surgical stabilization.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'TLICS Score Determines Treatment Strategy',
      'texto': 'Apply the TLICS algorithm: score <=3 indicates non-operative bracing with early mobilization; score = 4 is indeterminate; score >=5 requires surgical stabilization (percutaneous or open instrumentation).'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Recognize Occult Distraction Injuries',
      'texto': 'Always evaluate spinous process widening and MRI STIR hyperintensity. What appears as a simple anterior wedge fracture on CT can represent a severe flexion-distraction injury (AO B2) if the posterior tension band is torn.'
    }
  ],
  'referencias': pt['22']['referencias'],
  'seo': {
    'titulo': 'Traumatic Injuries of the Thoracic and Lumbar Spine | Treatise',
    'meta_descricao': 'Complete guide to thoracolumbar spine trauma: AO Spine classification, TLICS score, burst fractures, Chance distraction injuries, and percutaneous fixation.',
    'resumo_chamada': 'Master the evaluation and surgical decision-making in thoracic and lumbar spine trauma: AO Spine/TLICS scoring, PLC assessment, and stabilization techniques.',
    'slug': 'traumatic-injuries-of-the-thoracic-and-lumbar-spine'
  }
}

es['22'] = {
  'numero': 22,
  'titulo': 'Lesiones Traumáticas de la Columna Torácica y Lumbar',
  'secao': '',
  'autores': pt['22']['autores'],
  'contexto': 'Las lesiones traumáticas de la columna torácica y lumbar representan las fracturas más frecuentes de todo el eje raquídeo, concentrándose predominantemente en la unión toracolumbar (T10–L2). En adultos jóvenes, los traumatismos de alta energía (accidentes vehiculares, caídas de altura) generan un riesgo elevado de compromiso neurológico del cono medular y de la cauda equina, mientras que en pacientes ancianos predominan las fracturas por fragilidad osteoporótica tras caídas de baja energía. La unidad funcional vertebral integra el pilar anterior (cuerpos vertebrales, discos intervertebrales, ligamentos longitudinales) y la banda de tensión posterior (pedículos, láminas, articulaciones facetarias y el Complejo Ligamentario Posterior [PLC: ligamentos supraespinoso, interespinoso, amarillo y cápsulas facetarias]). Los sistemas de clasificación han evolucionado desde el modelo tricolumnar de Denis y la escala Load Sharing de McCormack hasta los sistemas internacionales estandarizados: la Clasificación AO Spine Toracolumbar y la escala TLICS (Thoracolumbar Injury Classification and Severity Score). La TC multidetector define la anatomía de la fractura, conminución y estenosis de canal, mientras que la RM evalúa la rotura del PLC y el daño medular. El reto terapéutico central radica en diferenciar fracturas por compresión estables tributarias de tratamiento ortopédico de fracturas por estallido inestables, lesiones por distracción (Chance) o fracturas-luxaciones que requieren descompresión y estabilización quirúrgica percutánea o abierta.',
  'objetivo': 'Presentar la evaluación clínica, clasificación, valoración de estabilidad biomecánica y manejo conservador y quirúrgico del trauma toracolumbar. Al finalizar, el lector deberá aplicar la clasificación AO Spine Toracolumbar (Tipos A, B, C) y la escala TLICS; reconocer los signos clínicos y radiológicos de rotura del complejo ligamentario posterior (PLC); comprender las indicaciones de osteosíntesis percutánea frente a abierta, descompresión directa/indirecta y reconstrucción del pilar anterior; y prevenir la cifosis postraumática y el deterioro neurológico.',
  'conteudo_principal': [
    {
      'subtitulo': 'Biomecánica y la unión toracolumbar de transición',
      'texto': 'La unión toracolumbar (T10–L2) marca el cambio de la caja torácica rígida cifótica a la columna lumbar lordótica móvil. Denis definió el modelo de 3 columnas (anterior, media y posterior). La estabilidad biomecánica depende de la columna media (cortical posterior y PLL) y de la banda de tensión posterior (PLC). La pérdida de soporte de la columna media (estallido) combinada con la rotura del PLC genera colapso progresivo en cifosis postraumática.'
    },
    {
      'subtitulo': 'Sistema de Clasificación AO Spine Toracolumbar',
      'texto': 'La clasificación AO Spine clasifica las lesiones en tres tipos morfológicos: 1) Tipo A: Compresión (A0 menor, A1 acuñamiento simple, A2 hendidura coronal/split, A3 estallido incompleto de un platillo, A4 estallido completo de ambos platillos con retropulsión); 2) Tipo B: Distracción / Falla de banda de tensión (B1 fractura transósea de Chance, B2 rotura osteoligamentaria de la banda de tensión posterior, B3 hiperextensión); 3) Tipo C: Traslación/Desplazamiento en cualquier plano (luxación, cizallamiento). El estado neurológico se clasifica de N0 (intacto) a N4 (déficit completo), con modificadores M1 (PLC dudoso) y M2 (comorbilidades/columna anquilosada).'
    },
    {
      'subtitulo': 'Escala TLICS y algoritmo de toma de decisiones',
      'texto': 'La escala TLICS evalúa tres variables: 1) Morfología (compresión = 1, estallido = 2, distracción = 3, traslación/rotación = 4); 2) Estado neurológico (intacto = 0, radiculopatía = 2, médula completa = 2, médula incompleta/cono = 3, cauda equina = 3); 3) Integridad del PLC (intacto = 0, dudoso = 2, roto = 3). Una puntuación TLICS <=3 indica tratamiento conservador (faja/órtesis TLSO y deambulación precoz); TLICS = 4 es limítrofe; TLICS >=5 exige estabilización quirúrgica.'
    },
    {
      'subtitulo': 'Diagnóstico por imagen y semiología clínica',
      'texto': 'La TC helicoidal con reconstrucciones multiplanares es el método de elección para medir la pérdida de altura, la cifosis sagital (ángulo de Cobb), la apertura interpedicular y la ocupación del canal. La RM (secuencias STIR y T2) es obligatoria ante palpación dolorosa o diástasis interespinosa, demostrando la hiperintensidad por rotura del ligamento supraespinoso y amarillo (rotura del PLC). La RM evalúa asimismo contusiones del cono medular y roturas discales.'
    },
    {
      'subtitulo': 'Principios de tratamiento: Conservador, Percutáneo y Reconstrucción Abierta',
      'texto': 'El manejo conservador (deambulación protegida con órtesis TLSO y radiografías seriadas en carga a las semanas 1, 2 y 6) está indicado en fracturas estables A1, A2 y A3 neurológicamente intactas con PLC íntegro y cifosis <15°–20°. La cirugía está indicada en fracturas por estallido inestables (A4), lesiones por distracción (B1, B2, B3), fracturas-luxaciones (Tipo C) o ante déficit neurológico progresivo. Las técnicas comprenden fijación percutánea con tornillos pediculares mínimamente invasiva, descompresión y fijación posterior abierta, y corpectomía anterior/posterolateral con caja expandible en casos con alta conminución anterior (escala Load Sharing de McCormack >=7).'
    }
  ],
  'aplicacao_clinica': 'En la práctica clínica, analice conjuntamente el estado neurológico, la integridad del PLC y la conminución del cuerpo vertebral. En una fractura por estallido L1 con paciente neurológicamente intacto y PLC íntegro en RM (TLICS 2), el tratamiento conservador con órtesis TLSO y deambulación inmediata logra resultados funcionales equivalentes a la cirugía sin sus riesgos asociados. Por el contrario, si la RM muestra rotura del ligamento supraespinoso y amarillo (AO Tipo B2 / TLICS 5), la cirugía es obligatoria incluso sin déficit neurológico, ya que el manejo ortopédico fracasa invariablemente provocando cifosis progresiva y dolor crónico. En fracturas por estallido A4 con fragmentos retropulsados y déficit neurológico progresivo, la descompresión posterior urgente y fijación transpedicular dentro de las 24 horas logra una excelente remodelación del canal y recuperación funcional. En puntuaciones Load Sharing >=7, el soporte del pilar anterior con caja intersomática previene la fatiga y rotura de los tornillos posteriores.',
  'mensagem_central': 'El diagnóstico y tratamiento óptimo de las fracturas torácicas y lumbares se fundamentan en identificar el mecanismo lesional y la estabilidad biomecánica real. Las clasificaciones AO Spine y TLICS integran morfología, competencia de la banda de tensión posterior (PLC) y estado neurológico. La selección entre manejo conservador funcional con órtesis, fijación percutánea mínimamente invasiva y reconstrucción abierta se define de forma personalizada según la estabilidad del segmento y las demandas del paciente.',
  'por_que_importa': 'Una fractura toracolumbar puede aparentar ser un simple acuñamiento anterior en radiografías simples mientras oculta una rotura ligamentaria posterior completa (PLC) que progresará a una cifosis deformante invalidante si se trata solo con reposo. Este capítulo proporciona una metodología diagnóstica basada en semiología, TC y RM para identificar fallas de la banda de tensión, calcular las escalas TLICS y AO Spine, y seleccionar la estrategia quirúrgica o conservadora más segura y eficaz.',
  'decs': ['Vértebras Torácicas', 'Vértebras Lumbares', 'Fracturas de la Columna Vertebral', 'Traumatismos de la Médula Espinal', 'Cifosis', 'Tomografía Computarizada por Rayos X', 'Imagen por Resonancia Magnética', 'Fusión Vertebral'],
  'mesh': ['Thoracic Vertebrae', 'Lumbar Vertebrae', 'Spinal Fractures', 'Spinal Cord Injuries', 'Kyphosis', 'Tomography, X-Ray Computed', 'Magnetic Resonance Imaging', 'Spinal Fusion'],
  'palavras_chave_livres': ['Fracturas toracolumbares', 'Clasificación AO Spine Toracolumbar', 'Escala TLICS', 'Complejo ligamentario posterior', 'Fractura por estallido', 'Fractura de Chance', 'Tornillos pediculares percutáneos'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'La integridad del PLC gobierna la estabilidad',
      'texto': 'El Complejo Ligamentario Posterior (PLC: supraespinoso, interespinoso, ligamento amarillo, cápsulas facetarias) evita el colapso en cifosis. Toda fractura con rotura del PLC (AO Tipo B / TLICS >=5) es mecánicamente inestable y requiere estabilización quirúrgica.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'La escala TLICS define la indicación quirúrgica',
      'texto': 'Aplique el algoritmo TLICS: puntuación <=3 indica tratamiento conservador con órtesis y deambulación precoz; puntuación = 4 es limítrofe; puntuación >=5 requiere estabilización quirúrgica (percutánea o abierta).'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Reconocer lesiones por distracción ocultas',
      'texto': 'Evalúe siempre la separación interespinosa y la hiperintensidad en STIR en la RM. Lo que parece un simple acuñamiento anterior en la TC puede corresponder a una grave lesión por flexión-distracción (AO B2) si la banda de tensión posterior está desgarrada.'
    }
  ],
  'referencias': pt['22']['referencias'],
  'seo': {
    'titulo': 'Lesiones Traumáticas de la Columna Torácica y Lumbar | Tratado',
    'meta_descricao': 'Guía integral de traumatismos toracolumbares: clasificación AO Spine, escala TLICS, fracturas por estallido, lesiones de Chance y tornillos percutáneos.',
    'resumo_chamada': 'Domine la evaluación y toma de decisiones en trauma de columna torácica y lumbar: clasificaciones AO Spine y TLICS, valoración del PLC y técnicas de estabilización.',
    'slug': 'lesiones-traumaticas-de-la-columna-toracica-y-lumbar'
  }
}

# ==========================================
# CHAPTER 23
# ==========================================
en['23'] = {
  'numero': 23,
  'titulo': 'Traumatic Injuries of the Sacrum',
  'secao': '',
  'autores': pt['23']['autores'],
  'contexto': 'Traumatic fractures of the sacrum represent complex, high-energy injuries that are frequently underdiagnosed or delayed in diagnosis in the polytrauma patient. The sacrum serves as the foundational anatomical and biomechanical keystone linking the axial spine to the pelvic ring, transmitting upper body gravity loads to the lower extremities and housing the sacral spinal canal and sacral nerve roots (S1–S5) responsible for lower extremity motor/sensory function, urinary bladder control, anal sphincter continence, and sexual function. Fractures occur in high-energy trauma (motor vehicle collisions, falls from height, crush injuries) typically accompanied by pelvic ring disruptions (Tile, Young-Burgess classifications), but can also occur as low-energy insufficiency fractures in osteoporotic or radiated bone. Classical anatomical classifications include the Denis classification (Zone I alar, Zone II foraminal, Zone III central canal) and the modern AO Spine Sacral and Spinopelvic Classification, which distinguishes isolated pelvic ring fractures from true spinopelvic dissociation (U-shaped, H-shaped, or bilateral vertical fractures separating the spine from the pelvis). High-energy sacral fractures carry high rates of hemodynamic instability from retroperitoneal hemorrhage (presacral venous plexus, internal iliac branches), severe soft tissue Morel-Lavallée shearing lesions, and neurological deficits (up to 50–60% in Zone III injuries). Management spans non-operative mobilization, percutaneous sacroiliac/transiliac-transsacral screw fixation, and robust triangular spinopelvic instrumentation (lumbopelvic fixation).',
  'objetivo': 'To present the anatomical, diagnostic, classification, and management principles of sacral fractures and spinopelvic dissociation. The reader should be able to apply the Denis and AO Spine Sacral classifications; distinguish pelvic ring instability from spinopelvic dissociation; select and interpret pelvic/sacral multi-detector CT and MRI; identify sacral nerve root deficits and cauda equina injury; and formulate treatment strategies ranging from percutaneous transsacral screw fixation to open decompression and lumbopelvic triangular fixation.',
  'conteudo_principal': [
    {
      'subtitulo': 'Sacral Anatomy and the Spinopelvic Keystone',
      'texto': 'The sacrum functions as the mechanical keystone of the pelvic ring. Axial load transfers from L5 to S1 across the sacral promontory, dispersing laterally across the sacral alae and sacroiliac joints to the iliac bones and femoral heads. Anterior and posterior sacroiliac, sacrotuberous, and sacrospinous ligaments provide exceptional multiplanar stability. The sacral canal contains descending S1–S5 nerve roots forming the sacral plexus and pelvic splanchnic autonomic nerves (S2–S4).'
    },
    {
      'subtitulo': 'Mechanisms, Denis Classification, and AO Spine Classification',
      'texto': 'Denis classification divides sacral fractures into three sagittal zones: 1) Zone I (Alar region lateral to sacral foramina, 50% of cases, ~6% neurological deficit); 2) Zone II (Foraminal region traversing sacral neural foramina, 34% of cases, ~28% neurological deficit, often unilateral sciatica); 3) Zone III (Central canal region medial to foramina, 16% of cases, ~57% neurological deficit with severe bowel, bladder, and sexual dysfunction). The AO Spine Sacral classification categorizes: Type A (lower sacrococcygeal fractures below S2, stable); Type B (vertical sacral fractures compromising pelvic ring stability but maintaining spinopelvic continuity); Type C (spinopelvic dissociation: bilateral vertical fractures connected by a transverse fracture, U-shaped, H-shaped, or Y-shaped variants, resulting in complete mechanical dissociation of the axial spine from the pelvis).'
    },
    {
      'subtitulo': 'Clinical Assessment and Pelvic Hemodynamic Emergencies',
      'texto': 'In polytrauma, primary evaluation addresses hemorrhagic shock. Sacral fractures frequently lacerate the presacral Batson venous plexus and internal iliac arterial branches (superior gluteal, lateral sacral arteries), leading to life-threatening retroperitoneal hemorrhage. Emergency pelvic circumferential compression (pelvic binder) stabilizes bony disruption and promotes tamponade. Pelvic angiographic embolization is indicated for ongoing arterial bleeding. Examine for closed internal degloving Morel-Lavallée lesions over the lumbosacral region and perform digital rectal examination to test perianal sensation, voluntary anal contraction, and rule out open pelvic fractures communicating with the rectum or vagina.'
    },
    {
      'subtitulo': 'Diagnostic Imaging: Multi-Detector CT and 3D Reconstructions',
      'texto': 'Plain pelvic radiographs (AP, Inlet, Outlet views) provide initial screening but miss up to 30–50% of sacral fractures. Multi-detector thin-cut CT with coronal, sagittal, and 3D reconstructions is the gold standard, identifying vertical fracture lines, foraminal impaction, transverse fracture components in S1/S2 ("jumped" or spondylolisthesis of the upper sacrum on lower sacrum in spinopelvic dissociation), and sacral dysmorphism (present in up to 40% of populations, featuring upper sacral alar slope and collinearity with the iliac crest that narrows safe transsacral osseous corridors). MRI assesses nerve root compression, hematomas, and insufficiency edema.'
    },
    {
      'subtitulo': 'Surgical Strategies: Percutaneous Fixation vs. Lumbopelvic Fixation',
      'texto': 'Management depends on stability and neurology: 1) Non-operative: stable Denis Zone I or Type A fractures without displacement or neurological deficit (early progressive mobilization); 2) Percutaneous Sacroiliac / Transiliac-Transsacral Screws (7.0–8.0 mm cannulated screws placed into S1 and S2 corridors under fluoroscopic or 3D navigation): ideal for nondisplaced or reducible Type B pelvic ring injuries; 3) Triangular Spinopelvic Fixation (Lumbopelvic Fixation connecting L4/L5 pedicle screws to iliac or S2-alar-iliac [S2AI] screws linked to transsacral screws): the gold standard for Type C spinopelvic dissociation and highly comminuted vertical shear fractures, neutralizing axial, shear, and torsional loads and allowing immediate patient mobilization; 4) Sacral laminectomy/decompression: indicated for progressive neurological deficit from displaced bone fragments in the central canal (Zone III).'
    }
  ],
  'aplicacao_clinica': 'In the polytrauma emergency bay, a hemodynamically unstable patient with an open-book or vertical shear pelvic fracture must be immediately stabilized with a pelvic binder placed at the level of the greater trochanters (not over the iliac crests). Obtain emergent pelvic CT: if a transverse fracture across S1/S2 is identified connecting bilateral transforaminal vertical fractures (U-shaped spinopelvic dissociation / AO Type C), recognize that the patient cannot bear weight and is at high risk for progressive cauda equina compression. Perform an urgent neurological exam evaluating S2–S5 dermatomes, perianal sensation, and anal sphincter tone. In spinopelvic dissociation, rigid triangular lumbopelvic fixation (bilateral L4–L5 pedicle screws, S2AI/iliac screws, and transiliac rods) provides immediate mechanical stability, eliminates axial shear, and allows the polytrauma patient to sit upright and mobilize early, preventing catastrophic pulmonary and thromboembolic complications.',
  'mensagem_central': 'Traumatic fractures of the sacrum are critical injuries at the nexus of the axial spine, pelvic ring, and lumbosacral plexus. Management requires distinguishing isolated pelvic ring disruptions (AO Type B) from true spinopelvic dissociation (AO Type C / U-shaped fractures). Multi-detector CT with multiplanar reconstructions identifies fracture lines and sacral dysmorphism. Utilizing percutaneous transsacral screw fixation or triangular lumbopelvic reconstruction—combined with neural decompression when indicated—restores spinopelvic stability and preserves neurological function.',
  'por_que_importa': 'Sacral fractures are easily overlooked in polytrauma patients amidst competing injuries, leading to persistent pelvic nonunion, progressive spinopelvic kyphosis, permanent urinary incontinence, and chronic severe neurological pain. This chapter provides the diagnostic tools to classify injury morphology, screen for life-threatening presacral hemorrhage, recognize sacral dysmorphism on CT, and execute rigid triangular lumbopelvic reconstruction to ensure safe early rehabilitation.',
  'decs': ['Sacrum', 'Spinal Fractures', 'Pelvic Bones', 'Fractures, Bone', 'Cauda Equina', 'Tomography, X-Ray Computed', 'Spinal Fusion', 'Joint Instability'],
  'mesh': ['Sacrum', 'Spinal Fractures', 'Pelvic Bones', 'Fractures, Bone', 'Cauda Equina', 'Tomography, X-Ray Computed', 'Spinal Fusion', 'Joint Instability'],
  'palavras_chave_livres': ['Spinopelvic dissociation', 'Denis classification', 'AO Spine Sacral', 'Lumbopelvic fixation', 'Transiliac-transsacral screws', 'Sacral dysmorphism', 'S2AI screws'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Denis Zones Predict Neurological Risk',
      'texto': 'Denis classification divides sacral fractures into Zone I (alar, ~6% neurological deficit), Zone II (foraminal, ~28% deficit/radiculopathy), and Zone III (central canal, ~57% severe cauda equina and bowel/bladder incontinence).'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Recognize Spinopelvic Dissociation (AO Type C)',
      'texto': 'Spinopelvic dissociation (bilateral vertical sacral fractures connected by a transverse fracture line, U- or H-shaped) completely disconnects the spine from the pelvis. It causes severe instability and requires triangular lumbopelvic fixation to allow weight-bearing.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Assess Sacral Dysmorphism on CT',
      'texto': 'Up to 40% of patients possess sacral dysmorphism (sloped S1 alar borders, collinearity with iliac crests). Attempting transsacral screw insertion without recognizing dysmorphic anatomy on CT causes catastrophic sacral nerve root or iliac vascular injury.'
    }
  ],
  'referencias': pt['23']['referencias'],
  'seo': {
    'titulo': 'Traumatic Injuries of the Sacrum | Spine Surgery Treatise',
    'meta_descricao': 'Complete surgical guide to sacral fractures: Denis classification, AO Spine sacral trauma, spinopelvic dissociation, transsacral screws, and lumbopelvic fixation.',
    'resumo_chamada': 'Master the evaluation and surgical management of sacral trauma: Denis zones, spinopelvic dissociation, sacral dysmorphism, and triangular lumbopelvic reconstruction.',
    'slug': 'traumatic-injuries-of-the-sacrum'
  }
}

es['23'] = {
  'numero': 23,
  'titulo': 'Lesiones Traumáticas del Sacro',
  'secao': '',
  'autores': pt['23']['autores'],
  'contexto': 'Las fracturas traumáticas del sacro son lesiones complejas de alta energía que con frecuencia pasan desapercibidas o sufren retrasos diagnósticos en el paciente politraumatizado. El sacro actúa como la piedra angular (keystone) anatómica y biomecánica entre la columna vertebral y el anillo pélvico, transmitiendo las cargas axiales del tronco hacia las extremidades inferiores y albergando el conducto sacro y las raíces nerviosas sacras (S1–S5) encargadas de la función motora/sensitiva distal, el control vesical, la continencia anorrectal y la función sexual. Las fracturas ocurren por traumatismos de alta energía (accidentes de tránsito, caídas de altura) asociadas a lesiones del anillo pélvico (clasificaciones de Tile y Young-Burgess), pero también se presentan como fracturas por insuficiencia en hueso osteoporótico. Las clasificaciones clásicas incluyen la división de Denis (Zona I alar, Zona II foraminal, Zona III conducto central) y la moderna Clasificación AO Spine Sacro y Espinopélvica, que diferencia las fracturas aisladas del anillo pélvico de la verdadera disociación espinopélvica (fracturas en U o en H que independizan la columna de la pelvis). Las fracturas sacras de alta energía conllevan alto riesgo de inestabilidad hemodinámica por hemorragia retroperitoneal (plexo venoso presacro, ramas de la arteria ilíaca interna), lesiones de partes blandas tipo Morel-Lavallée y déficits neurológicos graves (hasta 50–60% en Zona III). El tratamiento abarca desde la movilización precoz hasta fijaciones percutáneas transilíacas-transsacras y reconstrucciones triangulares espinopélvicas lumbopélvicas.',
  'objetivo': 'Presentar los principios anatómicos, diagnósticos, de clasificación y tratamiento de las fracturas del sacro y la disociación espinopélvica. Al finalizar, el lector deberá aplicar las clasificaciones de Denis y AO Spine Sacro; distinguir la inestabilidad del anillo pélvico de la disociación espinopélvica; seleccionar e interpretar la TC multidetector y la RM sacropélvica; identificar lesiones radiculares sacras y de cauda equina; y formular estrategias terapéuticas que incluyen tornillos percutáneos sacroilíacos, descompresión sacra y fijación triangular lumbopélvica.',
  'conteudo_principal': [
    {
      'subtitulo': 'Anatomía del sacro y el puente espinopélvico',
      'texto': 'El sacro actúa como el pilar central del anillo pélvico. Las cargas axiales se transmiten de L5 a S1 y se dispersan lateralmente a través de las alas sacras y articulaciones sacroilíacas hacia los huesos ilíacos y cabezas femorales. Los ligamentos sacroilíacos anteriores y posteriores, sacrotuberoso y sacroespinoso proporcionan una estabilidad multiplanar masiva. El conducto sacro aloja las raíces S1–S5 y los nervios autonómicos esplácnicos pélvicos (S2–S4).'
    },
    {
      'subtitulo': 'Mecanismos y clasificaciones: Denis y AO Spine Sacro',
      'texto': 'La clasificación de Denis divide las fracturas en tres zonas sagitales: 1) Zona I (Alar, lateral a los forámenes, 50% de casos, ~6% de déficit neurológico); 2) Zona II (Foraminal, compromete los forámenes sacros, 34% de casos, ~28% de déficit, frecuentemente ciatalgia L5 o S1); 3) Zona III (Conducto central, medial a los forámenes, 16% de casos, ~57% de déficit neurológico severo con disfunción vesical y anorrectal). La clasificación AO Spine Sacro clasifica: Tipo A (fracturas sacrococcígeas caudales bajo S2, estables); Tipo B (fracturas verticales que comprometen el anillo pélvico pero conservan la continuidad espinopélvica); Tipo C (Disociación espinopélvica: fracturas verticales bilaterales unidas por un trazo transversal en S1/S2 en forma de U, H o Y, produciendo la pérdida total de continuidad mecánica entre columna y pelvis).'
    },
    {
      'subtitulo': 'Evaluación clínica y emergencia hemodinámica pélvica',
      'texto': 'En politraumatizados, la prioridad inicial es el control del shock hemorrágico. Las fracturas sacras lesionan frecuentemente el plexo venoso presacro y ramas de la arteria ilíaca interna (arteria glútea superior, sacras laterales). La colocación precoz de una faja pélvica a la altura de los trocánteres mayores estabiliza el anillo y favorece el taponamiento hemostático. La embolización por angiografía está indicada ante sangrado arterial activo. Se debe explorar la piel buscando lesiones de deguantamiento cerrado (Morel-Lavallée) y realizar tacto rectal para evaluar tono esfinteriano y descartar fracturas abiertas hacia el recto o vagina.'
    },
    {
      'subtitulo': 'Diagnóstico por imagen: TC helicoidal y dismorfismo sacro',
      'texto': 'Las radiografías de pelvis (proyecciones AP, Inlet y Outlet) omiten entre el 30% y el 50% de las fracturas sacras. La TC multidetector con cortes finos y reconstrucciones 3D es el estándar de oro para diagnosticar trazos verticales, acuñamientos foraminales y fracturas transversales en U. La TC identifica asimismo el Dismorfismo Sacro (presente en hasta el 40% de la población, con alas sacras oblicuas y colineales a las crestas ilíacas que estrechan el corredor óseo seguro en S1). La RM valora la compresión radicular y fracturas por insuficiencia.'
    },
    {
      'subtitulo': 'Estrategias quirúrgicas: Tornillos percutáneos vs. Fijación lumbopélvica',
      'texto': 'El tratamiento se guía por la estabilidad y neurología: 1) Conservador: fracturas Denis Zona I o Tipo A estables sin desplazamiento (deambulación protegida); 2) Tornillos sacroilíacos / transilíacos-transsacros percutáneos (tornillos canulados de 7,0–8,0 mm en S1 y S2 guiados por fluoroscopia o navegación 3D): indicados en lesiones Tipo B del anillo pélvico reductibles; 3) Fijación triangular espinopélvica (fijación lumbopélvica uniendo tornillos pediculares en L4–L5 con tornillos ilíacos o S2AI y barras conectadas a tornillos transsacros): es el estándar de oro en disociación espinopélvica Tipo C, neutralizando cargas axiales y de torsión y permitiendo la sedestación y bipedestación inmediata; 4) Descompresión sacra (laminectomía): indicada ante fragmentos óseos compresivos en el conducto central (Zona III) con déficit neurológico agudo.'
    }
  ],
  'aplicacao_clinica': 'En la sala de reanimación, ante un paciente politraumatizado inestable con sospecha de fractura pélvica, aplique inmediatamente una faja pélvica centrada sobre los trocánteres mayores. En la TC pélvica, si se identifica un trazo transverso en S1/S2 que une fracturas transforaminales bilaterales (disociación espinopélvica en U / AO Tipo C), reconozca que la columna está desconectada de la pelvis y que existe un alto riesgo de compresión de la cauda equina. Realice exploración neurológica de dermatomas S2–S5 y tono esfinteriano anal. En la disociación espinopélvica, la fijación triangular lumbopélvica rígida (tornillos en L4–L5 y tornillos alar-ilíacos S2AI con barras transilíacas) proporciona estabilidad inmediata, neutraliza el cizallamiento vertical y permite sentar y movilizar al paciente de forma precoz, previniendo complicaciones respiratorias y tromboembólicas mortales.',
  'mensagem_central': 'Las fracturas traumáticas del sacro son lesiones críticas en la encrucijada entre el raquis axial, la pelvis ósea y el plexo lumbosacro. Su manejo exige distinguir las lesiones aisladas del anillo pélvico (AO Tipo B) de la verdadera disociación espinopélvica (AO Tipo C / fracturas en U). La TC multidetector define la anatomía y descarta dismorfismos sacros. La osteosíntesis percutánea con tornillos transsacros o la fijación triangular lumbopélvica —combinadas con descompresión neural si está indicada— restauran la estabilidad espinopélvica y preservan la función neurológica.',
  'por_que_importa': 'Una fractura sacra puede pasar desapercibida en el paciente politraumatizado entre múltiples lesiones asociadas, evolucionando hacia seudoartrosis dolorosa, cifosis espinopélvica progresiva, incontinencia urinaria permanente y ciatalgia crónica incapacitante. Este capítulo proporciona las herramientas diagnósticas para clasificar la lesión, controlar la hemorragia presacra, identificar variantes de dismorfismo en la TC y realizar reconstrucciones lumbopélvicas estables que faciliten la rehabilitación temprana.',
  'decs': ['Sacro', 'Fracturas de la Columna Vertebral', 'Huesos Pélvicos', 'Fracturas Óseas', 'Cola de Caballo', 'Tomografía Computarizada por Rayos X', 'Fusión Vertebral', 'Inestabilidad Articular'],
  'mesh': ['Sacrum', 'Spinal Fractures', 'Pelvic Bones', 'Fractures, Bone', 'Cauda Equina', 'Tomography, X-Ray Computed', 'Spinal Fusion', 'Joint Instability'],
  'palavras_chave_livres': ['Disociación espinopélvica', 'Clasificación de Denis', 'AO Spine Sacro', 'Fijación lumbopélvica', 'Tornillos transilíacos-transsacros', 'Dismorfismo sacro', 'Tornillos S2AI'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'Las Zonas de Denis predicen el riesgo neurológico',
      'texto': 'La clasificación de Denis divide las fracturas sacras en Zona I (alar, ~6% de déficit), Zona II (foraminal, ~28% de radiculopatía) y Zona III (conducto central, ~57% de daño severo de cauda equina e incontinencia de esfínteres).'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Reconocer la Disociación Espinopélvica (AO Tipo C)',
      'texto': 'La disociación espinopélvica (fracturas verticales bilaterales unidas por un trazo transversal en U o en H) desconecta completamente la columna de la pelvis. Cursa con gran inestabilidad y exige fijación triangular lumbopélvica para permitir la carga.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Identificar dismorfismo sacro en TC',
      'texto': 'Hasta un 40% de la población presenta dismorfismo sacro (alas sacras oblicuas colineales a las crestas ilíacas). Colocar tornillos transsacros sin reconocer esta variante en la TC provoca lesiones de raíces nerviosas sacras o perforaciones vasculares ilíacas.'
    }
  ],
  'referencias': pt['23']['referencias'],
  'seo': {
    'titulo': 'Lesiones Traumáticas del Sacro | Tratado de Columna',
    'meta_descricao': 'Guía quirúrgica de fracturas sacras: clasificación de Denis, trauma sacropélvico AO Spine, disociación espinopélvica, tornillos transsacros y fijación lumbopélvica.',
    'resumo_chamada': 'Domine el diagnóstico y manejo quirúrgico del trauma sacro: zonas de Denis, disociación espinopélvica, dismorfismo sacro y reconstrucción triangular lumbopélvica.',
    'slug': 'lesiones-traumaticas-del-sacro'
  }
}

# ==========================================
# CHAPTER 24
# ==========================================
en['24'] = {
  'numero': 24,
  'titulo': 'Pediatric Spine Traumatic Injuries',
  'secao': 'Section 3 — Spinal Trauma',
  'autores': pt['24']['autores'],
  'contexto': 'Traumatic injuries of the vertebral column in pediatric patients possess unique anatomical, biomechanical, and physiological characteristics distinct from adult spine trauma. The immature spine is characterized by increased ligamentous laxity, shallower and more horizontally oriented facet joints, cartilaginous vertebral endplates, physiological anterior wedging of vertebral bodies, active synchondroses and neurocentral junctions, and a disproportionately large head-to-body mass ratio (fulcrum of cervical motion located at C2–C3 in young children under 8 years, migrating to C5–C6 after age 8–10). These anatomical traits make the pediatric spine remarkably resilient to bony fractures under axial loading, but highly susceptible to severe distraction, hyperflexion, and hyperextension ligamentous injuries, including atlanto-occipital dislocation, pseudosubluxation of C2 on C3, and Spinal Cord Injury Without Radiographic Abnormality (SCIWORA). Pediatric spine trauma evaluation requires deep familiarity with developmental ossification centers to avoid mistaking normal synchondroses or physiological pseudosubluxation (Peschiera/Swischuk line) for acute traumatic fractures or dislocations. Management emphasizes non-operative immobilization in the vast majority of stable cases, preserving spinal growth potential, while unstable injuries and progressive spinal deformities require specialized instrumentation adapted to pediatric bone dimensions.',
  'objetivo': 'To present the systematic clinical and radiological evaluation, diagnostic imaging algorithms, and evidence-based non-operative and surgical guidelines for pediatric and adolescent spine trauma. The reader should be able to understand the developmental anatomy and biomechanics of the immature skeleton; differentiate normal developmental synchondroses and physiological pseudosubluxation from true pathology; diagnose and manage SCIWORA; select immobilization strategies (including positioning adjustments for the prominent occiput); and apply age-appropriate surgical stabilization techniques.',
  'conteudo_principal': [
    {
      'subtitulo': 'Anatomical and Biomechanical Specifics of the Immature Spine',
      'texto': 'The pediatric spine features unique mechanical properties: 1) Extreme ligamentous elasticity (the pediatric vertebral column can stretch up to 5 cm without structural rupture, whereas the spinal cord ruptures with just 0.5–1.0 cm of elongation, explaining SCIWORA); 2) Horizontal facet orientation (permitting excessive translational motion without bony fracture); 3) Physiological anterior vertebral body wedging and cartilaginous endplates; 4) Higher cervical fulcrum: the head-to-torso ratio shifts the mechanical pivot point to C2–C3 in children <8 years old, making upper cervical injuries (C0–C2) far more common than subaxial injuries; 5) Active synchondroses: neurocentral synchondroses, dentocentral synchondrosis (base of odontoid, fuses at 5–7 years), and apical odontoid ossiculum terminale (appears at 3–6 years, fuses at 12 years).'
    },
    {
      'subtitulo': 'SCIWORA Syndrome and Diagnostic Neuroimaging',
      'texto': 'Spinal Cord Injury Without Radiographic Abnormality (SCIWORA) is defined as objective traumatic spinal cord injury without evidence of bony fracture or dislocation on standard plain radiographs and computed tomography. It accounts for up to 10–20% of pediatric spinal cord injuries, resulting from transient severe elastic distraction or hyperextension. Magnetic resonance imaging (MRI) is mandatory in all cases: MRI demonstrates intramedullary cord contusion, edema, transection, hemorrhage, or subclinical ligamentous disruption (STIR hyperintensity). In patients with normal radiographs and transient paresthesias or motor weakness, MRI confirms or excludes true cord pathology.'
    },
    {
      'subtitulo': 'Pediatric Management, Positioning, and Fixation Principles',
      'texto': 'In the emergency department, pediatric cervical immobilization requires a specialized pediatric backboard with an occipital recess or a thoracic elevation pad under the torso (1.5–2.5 cm) to compensate for the prominent occiput and prevent forced cervical hyperflexion. Non-operative management with a molded Minerva cast, halo-vest, or rigid cervical collar achieves bony healing in >85–90% of pediatric fractures due to robust periosteum and exceptional osteogenic remodeling potential. Surgical stabilization is reserved for documented complete ligamentous tears (which do not heal with immobilization), irreducible dislocations, progressive post-traumatic deformity, or open injuries. Instrumentation utilizes low-profile pediatric pedicle screws, rib hooks, or sublaminar wires, minimizing fusion levels to preserve spinal growth.'
    }
  ],
  'aplicacao_clinica': 'In emergency pediatric resuscitation, never immobilize a young child (<8 years) flat on an adult rigid backboard without a thoracic elevating pad, as the large occiput forces the neck into dangerous kyphotic flexion. To differentiate physiological pseudosubluxation of C2 on C3 (normal in up to 40% of children under 8) from true traumatic dislocation, apply Swischuk\'s line (posterior cervical line connecting the anterior cortex of C1, C2, and C3 spinous processes): if the anterior cortex of the C2 spinous process lies within 1.5–2.0 mm of this line, pseudosubluxation is physiological; if displaced >2 mm, true traumatic disruption is present. In any child presenting with transient weakness, numbness, or subjective electric shock sensations following trauma despite completely normal CT scans, maintain rigid collar immobilization and obtain urgent whole-spine MRI to diagnose SCIWORA before discharging the patient. Treat confirmed SCIWORA with 8–12 weeks of activity restriction and collar immobilization to prevent secondary reinjury to the vulnerable spinal cord.',
  'mensagem_central': 'Pediatric spine trauma requires careful interpretation of the developing, immature skeleton to avoid confusing physiological synchondroses and pseudosubluxation with acute fractures, and to detect occult neural injuries (SCIWORA) early. The vast elasticity of pediatric ligaments and high osteogenic potential favor non-operative management in most cases, while surgical stabilization is reserved for gross ligamentous instability and progressive deformity, respecting remaining spinal growth.',
  'por_que_importa': 'Misinterpreting a normal developmental synchondrosis as a fracture leads to unnecessary surgery and psychological trauma, while discharging a child with undiagnosed SCIWORA risks permanent catastrophic paralysis following a minor secondary impact. This chapter provides the pediatric developmental criteria, Swischuk measurement lines, emergent positioning rules (thoracic pad), and MRI protocols necessary to protect the developing spinal cord and preserve growth potential.',
  'decs': ['Pediatrics', 'Spinal Fractures', 'Spinal Cord Injuries', 'Spinal Cord Injury Without Radiographic Abnormality', 'Spine', 'Child Development', 'Magnetic Resonance Imaging', 'Joint Instability'],
  'mesh': ['Pediatrics', 'Spinal Fractures', 'Spinal Cord Injuries', 'Spinal Cord Injury Without Radiographic Abnormality', 'Spine', 'Child Development', 'Magnetic Resonance Imaging', 'Joint Instability'],
  'palavras_chave_livres': ['Pediatric spine trauma', 'SCIWORA', 'Pseudosubluxation C2-C3', 'Swischuk line', 'Thoracic elevation pad', 'Neurocentral synchondrosis', 'Pediatric spinal growth'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Pediatric Elasticity and SCIWORA',
      'texto': 'The pediatric spine can stretch up to 5 cm without skeletal disruption, whereas the spinal cord ruptures at just 0.5–1.0 cm of stretch. This biomechanical mismatch explains SCIWORA (Spinal Cord Injury Without Radiographic Abnormality), requiring urgent MRI.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Swischuk Line Differentiates Pseudosubluxation',
      'texto': 'In children <8 years, C2–C3 anterior displacement is often physiological. Draw the Swischuk line connecting the anterior cortices of C1, C2, and C3 spinous processes: if the C2 spinous process is within 1.5–2.0 mm, it is benign pseudosubluxation; if >2 mm, it is a traumatic subluxation.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Thoracic Pad Prevents Forced Flexion',
      'texto': 'Children have a disproportionately large occiput. Placing a child flat on an adult backboard forces the cervical spine into dangerous hyperflexion. Always place a 2 cm elevation pad under the thoracic torso to maintain a neutral cervical spine.'
    }
  ],
  'referencias': pt['24']['referencias'],
  'seo': {
    'titulo': 'Pediatric Spine Traumatic Injuries | Spine Surgery Treatise',
    'meta_descricao': 'Complete guide to pediatric spine trauma: immature biomechanics, SCIWORA syndrome, C2-C3 pseudosubluxation (Swischuk line), and non-operative management.',
    'resumo_chamada': 'Master the evaluation and management of pediatric spinal trauma: developmental anatomy, SCIWORA diagnosis, Swischuk measurement lines, and pediatric immobilization.',
    'slug': 'pediatric-spine-traumatic-injuries'
  }
}

with open('slice_21_24_en.json', 'w', encoding='utf-8') as f:
    json.dump(en, f, ensure_ascii=False, indent=2)

with open('slice_21_24_es.json', 'w', encoding='utf-8') as f:
    json.dump(es, f, ensure_ascii=False, indent=2)

print('Batch 21-24 successfully saved!')
