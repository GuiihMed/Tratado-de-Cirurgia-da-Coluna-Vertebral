import json

with open('/Users/manoeldesign/.gemini/antigravity/brain/7e1703fb-1acf-40aa-a137-05338f0871de/scratch/slice_1_28_pt.json', 'r', encoding='utf-8') as f:
    pt = json.load(f)

en = {}
es = {}

# ==========================================
# CHAPTER 25
# ==========================================
en['25'] = {
  'numero': 25,
  'titulo': 'Vertebral Insufficiency Fractures',
  'secao': 'Section 3 — Spinal Trauma',
  'autores': pt['25']['autores'],
  'contexto': 'Osteoporotic vertebral insufficiency fractures (VIF / OVCF) occur when physiological mechanical loads exceed the load-bearing capacity of demineralized, structurally weakened trabecular bone. They represent the most common fragility fracture in the elderly population, carrying substantial morbidity, debilitating axial pain, chronic kyphotic spinal deformity, impaired pulmonary function, decreased physical mobility, and increased mortality. Diagnosis requires detailed clinical history (acute axial back pain following minor exertion or low-energy falls) and multi-detector CT/MRI evaluation. MRI with STIR and T2 fat-suppressed sequences is essential to distinguish acute fractures (bone marrow edema) from chronic, healed compression fractures, evaluate posterior wall cortical integrity, and rule out underlying pathological fractures (multiple myeloma, metastatic disease) or avascular vertebral osteonecrosis (Kümmell disease / intravertebral vacuum cleft). Initial treatment is conservative with multimodal analgesia, brief relative bed rest, and functional orthotic support (TLSO/LSO bracing) combined with systematic anti-osteoporotic medical therapy (bisphosphonates, denosumab, teriparatide). In patients with intractable pain refractory to conservative therapy, vertebral body collapse with mechanical instability, or Kümmell osteonecrosis, minimally invasive percutaneous vertebral augmentation—vertebroplasty (direct PMMA cement injection) or balloon kyphoplasty (balloon cavity creation followed by low-pressure PMMA delivery)—provides rapid, durable pain relief and biomechanical stabilization.',
  'objetivo': 'To present the clinical evaluation, classification systems, imaging criteria, and conservative versus percutaneous interventional management of osteoporotic vertebral insufficiency fractures. The reader should be able to differentiate acute from chronic fractures and pathological fractures using MRI; apply the Genant semiquantitative classification and the DGOU Osteoporotic Fracture (OF) classification; execute conservative medical and pharmacological therapy; master the technical steps of percutaneous vertebroplasty and balloon kyphoplasty; and prevent cement leakage and adjacent level fractures.',
  'conteudo_principal': [
    {
      'subtitulo': 'Pathophysiology and Diagnostic Imaging',
      'texto': 'Osteoporotic bone loss decreases trabecular connectivity and cortical thickness, making vertebral bodies vulnerable to axial microfractures and wedge collapse. Multi-detector CT defines cortical fracture lines, posterior wall retropulsion, and intravertebral vacuum clefts (Kümmell disease). Magnetic resonance imaging (MRI) is the gold standard: acute fractures demonstrate intense bone marrow edema (hypointense on T1, hyperintense on T2/STIR); chronic healed fractures demonstrate normal fatty marrow signaling without edema. Diffuse homogenous marrow infiltration, pedicle involvement, soft tissue epidural mass, and multi-level involvement suggest malignant pathological fracture rather than benign osteoporotic insufficiency.'
    },
    {
      'subtitulo': 'Classification Systems: Genant and DGOU-OF Scores',
      'texto': 'The Genant semiquantitative visual grading classifies vertebral height loss: Grade 0 (normal, <20% height loss); Grade 1 (mild, 20–25% height reduction in anterior, middle, or posterior height); Grade 2 (moderate, 25–40% height reduction); Grade 3 (severe, >40% height collapse). The German Society for Orthopaedics and Trauma (DGOU) Osteoporotic Fracture (OF) classification evaluates morphology and biomechanical stability: OF 1 (edema without fracture deformity); OF 2 (deformation without or with minor posterior wall involvement); OF 3 (distinct fracture with posterior wall breach involving one endplate); OF 4 (loss of vertebral integrity / complete burst or frame fracture); OF 5 (distraction or rotation injury).'
    },
    {
      'subtitulo': 'Therapeutic Strategies: Conservative vs. Vertebral Augmentation',
      'texto': 'Conservative therapy: standard initial treatment for stable fractures without neurological deficit, combining multimodal analgesia, early protected mobilization with a lightweight semi-rigid TLSO/LSO brace, and anti-osteoporotic pharmacotherapy (teriparatide anabolic therapy promotes fracture healing; bisphosphonates/denosumab reduce secondary fracture risk). Percutaneous Vertebral Augmentation (Vertebroplasty and Balloon Kyphoplasty): indicated for severe intractable pain failing 3–6 weeks of conservative care, progressive kyphotic collapse, or Kümmell osteonecrosis. Kyphoplasty inserts inflatable balloons into the vertebral body to partially restore height and create a contained cavity, allowing low-pressure injection of high-viscosity polymethylmethacrylate (PMMA) cement. Technical complications include PMMA cement leakage into epidural veins (pulmonary cement embolism), neural foramina, or spinal canal, which is minimized by biplane continuous fluoroscopy, high-viscosity cement, and strict volume control.'
    }
  ],
  'aplicacao_clinica': 'In clinical practice, managing osteoporotic vertebral fractures begins with non-operative medical care and targeted osteoporosis investigation (DEXA scan, serum calcium, 25-OH vitamin D, protein electrophoresis). When a patient experiences persistent severe focal back pain that prevents upright mobilization despite 3–4 weeks of optimal analgesia and bracing, obtain an updated MRI: confirming active STIR hyperintensity (bone marrow edema) at the fractured level establishes eligibility for percutaneous balloon kyphoplasty or vertebroplasty. Review the pre-procedural CT scan meticulously: if a major posterior wall breach is present, exercise extreme vigilance during cement injection, injecting small volumes (2–4 mL) of high-viscosity doughy PMMA under continuous real-time lateral fluoroscopy, immediately halting injection if posterior wall migration or epidural venous filling is noted. In Kümmell disease (avascular osteonecrosis with fluid/air-filled cleft), balloon kyphoplasty fills the nonunion cavity, providing dramatic immediate pain relief and preventing progressive pseudarthrotic kyphosis.',
  'mensagem_central': 'Management of vertebral insufficiency fractures is grounded in precise MRI differentiation of acute versus chronic fractures and initial conservative multimodal analgesia combined with underlying anti-osteoporotic medical therapy. In patients with refractory disabling pain, progressive deformity, or Kümmell osteonecrosis, percutaneous vertebral augmentation (kyphoplasty and vertebroplasty) delivers rapid, effective analgesia and mechanical stabilization when performed with strict fluoroscopic technique to prevent cement extravasation.',
  'por_que_importa': 'Vertebral insufficiency fractures are not benign events: each fracture increases the risk of subsequent adjacent vertebral fractures fivefold and significantly elevates 5-year mortality in elderly patients. Differentiating acute edema from chronic collapse on MRI prevents injecting cement into non-painful old fractures, while recognizing posterior wall cortical breaches avoids catastrophic cement extravasation into the spinal canal. Combining vertebral augmentation with bone-forming anti-osteoporotic pharmacotherapy treats both the focal fracture and the systemic bone disease.',
  'decs': ['Osteoporotic Fractures', 'Spinal Fractures', 'Osteoporosis', 'Vertebroplasty', 'Kyphoplasty', 'Polymethyl Methacrylate', 'Magnetic Resonance Imaging', 'Bone Density'],
  'mesh': ['Osteoporotic Fractures', 'Spinal Fractures', 'Osteoporosis', 'Vertebroplasty', 'Kyphoplasty', 'Polymethyl Methacrylate', 'Magnetic Resonance Imaging', 'Bone Density'],
  'palavras_chave_livres': ['Vertebral insufficiency fractures', 'Balloon kyphoplasty', 'Percutaneous vertebroplasty', 'Genant classification', 'DGOU OF classification', 'Kümmell disease', 'PMMA cement leakage'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'MRI STIR Edema Confirms Acute Fracture',
      'texto': 'In elderly patients with multiple collapsed vertebrae, MRI with STIR/T2 fat-suppressed sequences is essential to identify the active culprit fracture exhibiting bone marrow edema (hyperintense), distinguishing it from asymptomatic chronic compression fractures.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Indications for Vertebral Augmentation',
      'texto': 'Percutaneous balloon kyphoplasty or vertebroplasty is indicated for patients with severe pain refractory to 3–6 weeks of medical therapy, progressive kyphotic collapse, or Kümmell avascular osteonecrosis with active MRI bone marrow edema.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Prevent Cement Extravasation',
      'texto': 'Inspect the posterior vertebral wall on pre-procedure CT. If breached, use high-viscosity cement, low-pressure injection, and continuous lateral fluoroscopic monitoring to prevent epidural leakage, neural compression, and pulmonary cement embolism.'
    }
  ],
  'referencias': pt['25']['referencias'],
  'seo': {
    'titulo': 'Vertebral Insufficiency Fractures: Diagnosis and Treatment | Treatise',
    'meta_descricao': 'Clinical guide to osteoporotic vertebral insufficiency fractures: MRI edema diagnosis, Genant/DGOU classification, balloon kyphoplasty, vertebroplasty, and osteoporosis therapy.',
    'resumo_chamada': 'Master the evaluation and management of vertebral insufficiency fractures: MRI STIR diagnosis, conservative protocols, kyphoplasty/vertebroplasty, and cement safety.',
    'slug': 'vertebral-insufficiency-fractures'
  }
}

es['25'] = {
  'numero': 25,
  'titulo': 'Fracturas Vertebrales por Insuficiencia',
  'secao': 'Sección 3 — Trauma de la Columna Vertebral',
  'autores': pt['25']['autores'],
  'contexto': 'Las fracturas vertebrales por insuficiencia (FVI) u osteoporóticas ocurren cuando las cargas mecánicas fisiológicas superan la resistencia estructural de un hueso trabecular desmineralizado y debilitado. Representan la fractura por fragilidad más común en la población anciana, generando notable morbilidad, dolor axial invalidante, deformidad cifótica progresiva, alteración de la mecánica ventilatoria pulmonar, pérdida de autonomía funcional e incremento de la mortalidad. El diagnóstico requiere una historia clínica exhaustiva (dolor axial agudo tras esfuerzos mínimos o caídas de su propia altura) y evaluación por TC y RM. La resonancia magnética con secuencias STIR y T2 con supresión grasa es esencial para diferenciar fracturas agudas con edema óseo activo de fracturas crónicas consolidadas, evaluar la indemnidad de la pared posterior y descartar fracturas patológicas neoplásicas (mieloma múltiple, metástasis) o necrosis avascular vertebral (enfermedad de Kümmell con hendidura de vacío intravertebral). El tratamiento inicial es conservador con analgesia multimodal, reposo relativo breve y soporte ortésico (órtesis TLSO/LSO) para facilitar la deambulación precoz, combinado con el tratamiento farmacológico de la osteoporosis (bisfosfonatos, denosumab, teriparatida). Ante el fracaso del tratamiento conservador con dolor refractario incapacitante, progresión de la cifosis o enfermedad de Kümmell, los procedimientos percutáneos de aumento vertebral (vertebroplastia y cifoplastia con balón) proporcionan analgesia rápida y estabilización mecánica.',
  'objetivo': 'Presentar la evaluación clínica, sistemas de clasificación, criterios diagnósticos por imagen y manejo conservador e intervencionista de las fracturas vertebrales osteoporóticas por insuficiencia. Al finalizar, el lector deberá diferenciar fracturas agudas de crónicas y patológicas mediante RM; aplicar la clasificación semicuantitativa de Genant y la clasificación OF de la DGOU; estructurar el tratamiento médico y farmacológico de la osteoporosis; dominar los principios de la vertebroplastia y cifoplastia percutánea; y prevenir la fuga de cemento y las fracturas adyacentes.',
  'conteudo_principal': [
    {
      'subtitulo': 'Fisiopatología y diagnóstico por neuroimagen',
      'texto': 'La osteoporosis deteriora la microarquitectura trabecular y adelgaza la cortical ósea, predisponiendo al colapso por acuñamiento ante cargas axiales cotidianas. La TC multidetector define fracturas corticales, retropulsión de la pared posterior y hendiduras aéreas intravertebrales (enfermedad de Kümmell). La RM es el estándar de oro diagnóstico: las fracturas agudas muestran edema óseo trabecular intenso (hipointenso en T1, hiperintenso en T2/STIR); las fracturas crónicas muestran señal grasa normal sin edema. La infiltración difusa de médula ósea, el compromiso de pedículos o masas de partes blandas epidurales orientan a fractura patológica tumoral.'
    },
    {
      'subtitulo': 'Sistemas de clasificación: Genant y escala OF de la DGOU',
      'texto': 'La clasificación semicuantitativa de Genant clasifica el porcentaje de pérdida de altura vertebral: Grado 0 (normal, <20% de pérdida); Grado 1 (leve, 20–25% de reducción de altura anterior, media o posterior); Grado 2 (moderada, 25–40% de reducción); Grado 3 (severa, >40% de colapso). La clasificación OF de la Sociedad Alemana de Ortopedia y Trauma (DGOU) evalúa la morfología y estabilidad: OF 1 (edema sin deformidad ósea); OF 2 (deformación sin o con mínima afectación de la pared posterior); OF 3 (fractura con rotura de la pared posterior en un platillo); OF 4 (pérdida de integridad del marco vertebral / estallido completo); OF 5 (lesión por distracción o rotación).'
    },
    {
      'subtitulo': 'Estrategias terapéuticas: Conservador vs. Aumento Vertebral',
      'texto': 'Tratamiento conservador: indicado como primera línea en fracturas estables sin déficit neurológico, combinando analgesia multimodal, deambulación temprana con órtesis TLSO/LSO y tratamiento farmacológico de la osteoporosis (la teriparatida estimula la consolidación ósea; bisfosfonatos y denosumab reducen fracturas secundarias). Aumento Vertebral Percutáneo (Vertebroplastia y Cifoplastia con Balón): indicado ante dolor refractario tras 3–6 semanas de manejo clínico, colapso cifótico progresivo o seudoartrosis de Kümmell. La cifoplastia introduce balones inflables en el cuerpo vertebral para restaurar parcialmente la altura y crear una cavidad, permitiendo la inyección de cemento acrílico (PMMA) de alta viscosidad a baja presión. La complicación técnica principal es el extravasamiento de cemento (fuga hacia venas epidurales con embolia pulmonar, foramen o conducto raquídeo), minimizado mediante control fluoroscópico continuo en tiempo real.'
    }
  ],
  'aplicacao_clinica': 'En la práctica clínica, el manejo de las fracturas por insuficiencia debe comenzar con tratamiento médico conservador y estudio de la densidad ósea (DENSITOMETRÍA DEXA, niveles de calcio y vitamina D). Ante un paciente con dolor lumbar focal persistente e incapacitante tras 3–4 semanas de reposo y faja, solicite RM para confirmar edema en STIR en el cuerpo vertebral afecto antes de indicar una cifoplastia o vertebroplastia. Analice minuciosamente la TC preoperatoria: si existe rotura de la pared posterior, extreme precauciones durante la inyección de cemento, utilizando volúmenes reducidos (2–4 mL) de PMMA de alta viscosidad y monitorización fluoroscópica continua en proyección lateral, deteniendo la inyección de inmediato ante el menor paso de cemento hacia el conducto o plexo venoso. En la enfermedad de Kümmell (osteonecrosis avascular con cavidad intravertebral), la cifoplastia rellena el espacio de seudoartrosis, logrando alivio inmediato del dolor y evitando el colapso cifótico progresivo.',
  'mensagem_central': 'El tratamiento de las fracturas vertebrales por insuficiencia se fundamenta en el diagnóstico preciso del edema óseo activo mediante resonancia magnética y en el manejo inicial conservador con control del dolor y farmacoterapia antiosteoporótica. Ante el fracaso del tratamiento médico con dolor incapacitante persistente o necrosis de Kümmell, los procedimientos percutáneos de aumento vertebral (cifoplastia y vertebroplastia) proporcionan alivio rápido y estabilización mecánica, requiriendo una estricta técnica radioscópica para prevenir fugas de cemento.',
  'por_que_importa': 'Las fracturas vertebrales osteoporóticas no son eventos aislados: multiplican por cinco el riesgo de nuevas fracturas adyacentes y duplican la mortalidad a 5 años en ancianos. Diagnosticar el edema agudo en RM evita inyectar cemento en fracturas crónicas no dolorosas, mientras que identificar roturas de la cortical posterior previene fugas de cemento hacia el conducto raquídeo. Asociar el aumento vertebral al tratamiento farmacológico osteoformador trata tanto la fractura local como la enfermedad ósea sistémica subyacente.',
  'decs': ['Fracturas Osteoporóticas', 'Fracturas de la Columna Vertebral', 'Osteoporosis', 'Vertebroplastia', 'Cifoplastia', 'Polimetil Metacrilato', 'Imagen por Resonancia Magnética', 'Densidad Ósea'],
  'mesh': ['Osteoporotic Fractures', 'Spinal Fractures', 'Osteoporosis', 'Vertebroplasty', 'Kyphoplasty', 'Polymethyl Methacrylate', 'Magnetic Resonance Imaging', 'Bone Density'],
  'palavras_chave_livres': ['Fracturas vertebrales por insuficiencia', 'Cifoplastia con balón', 'Vertebroplastia percutánea', 'Clasificación de Genant', 'Clasificación OF de la DGOU', 'Enfermedad de Kümmell', 'Extravasamiento de cemento PMMA'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'Edema en RM STIR confirma fractura aguda',
      'texto': 'En pacientes ancianos con múltiples aplastamientos vertebrales, la RM con secuencia STIR identifica la vértebra fracturada aguda causante del dolor activo mediante hiperintensidad por edema óseo, diferenciándola de fracturas crónicas consolidadas.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Indicaciones de Aumento Vertebral',
      'texto': 'La cifoplastia con balón o vertebroplastia está indicada ante dolor refractario a 3–6 semanas de tratamiento médico óptimo, colapso cifótico progresivo o necrosis avascular de Kümmell con edema activo en la resonancia magnética.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Prevenir la fuga de cemento',
      'texto': 'Examine la pared posterior en la TC previa. Ante discontinuidad cortical, utilice cemento de alta viscosidad, inyección a baja presión y control radioscópico lateral continuo para prevenir fugas epidurales y embolias pulmonares de PMMA.'
    }
  ],
  'referencias': pt['25']['referencias'],
  'seo': {
    'titulo': 'Fracturas Vertebrales por Insuficiencia: Diagnóstico y Tratamiento | Tratado',
    'meta_descricao': 'Guía clínica de fracturas osteoporóticas por insuficiencia: diagnóstico por RM con STIR, clasificación de Genant/DGOU, cifoplastia con balón y vertebroplastia.',
    'resumo_chamada': 'Domine la evaluación y tratamiento de las fracturas vertebrales por insuficiencia: diagnóstico por RM, protocolo conservador, cifoplastia y prevención de fugas de cemento.',
    'slug': 'fracturas-vertebrales-por-insuficiencia'
  }
}

# ==========================================
# CHAPTER 26
# ==========================================
en['26'] = {
  'numero': 26,
  'titulo': 'Post-Traumatic Spinal Deformities',
  'secao': '',
  'autores': pt['26']['autores'],
  'contexto': 'Post-traumatic spinal deformities represent a complex late sequela of spinal injuries characterized by progressive structural malalignment, most frequently developing as fixed focal, regional, or global post-traumatic kyphosis (PTK). Deformities develop following either failed non-operative management (unrecognized posterior tension band rupture, severe initial vertebral comminution, early brace discontinuation) or surgical failure (inadequate initial reduction, insufficient anterior column support leading to hardware fatigue, screw loosening, nonunion/pseudarthrosis, or wrong-level instrumentation). Biomechanically, focal kyphotic collapse shifts the trunk center of mass anteriorly, substantially lengthening the gravitational lever arm and subjecting anterior vertebral bodies to progressive compressive overload while placing posterior musculature in chronic, exhausting fatigue. Patients present with chronic intractable mechanical back pain, accelerating adjacent segment degeneration, sagittal imbalance (positive SVA), compensatory pelvic retroversion and knee flexion, and late neurological deterioration (delayed myelopathy or radiculopathy caused by tethering and draping of the spinal cord over the anterior bony kyphotic ridge). Evaluation requires standing whole-spine full-length radiographs (spinopelvic parameters), multiplanar CT (assessing osseous bridging and pseudarthrosis), and MRI (evaluating neural compression). Reconstructive surgery demands advanced spinal osteotomies (Posterior Column Osteotomies [PCO / Smith-Petersen], Pedicle Subtraction Osteotomy [PSO], or Vertebral Column Resection [VCR]) combined with anterior column reconstruction and robust multi-rod instrumentation to restore sagittal balance and decompress neural elements.',
  'objetivo': 'To present the etiology, biomechanical cascade, clinical evaluation, and surgical correction principles of post-traumatic spinal deformities. The reader should be able to identify primary causes of post-traumatic kyphosis; evaluate global spinopelvic sagittal alignment; recognize delayed post-traumatic myelopathy; select appropriate osteotomy techniques (PCO, PSO, VCR) based on curve flexibility and focal angular severity; and execute reconstruction while minimizing complications such as neurovascular injury and junctional failure.',
  'conteudo_principal': [
    {
      'subtitulo': 'Pathogenesis and Biomechanical Failure Cascade',
      'texto': 'Post-traumatic kyphosis results from progressive anterior column height loss, disc degeneration, and failure of the posterior tension band. Once focal kyphosis exceeds 20°–30°, the gravity line shifts anterior to the instantaneous axis of rotation, generating an escalating flexion bending moment. This mechanical stress causes chronic muscle strain, disc degeneration at adjacent levels, and anterior vertebral remodeling. In severe cases, the spinal cord and conus medullaris are draped tightly over the sharp posterior-superior margin of the retropulsed vertebral body, causing chronic microvascular ischemia, cord flattening, and progressive myelopathy.'
    },
    {
      'subtitulo': 'Clinical Presentation: Pain, Sagittal Imbalance, and Myelopathy',
      'texto': 'Clinical manifestations comprise: 1) Severe chronic mechanical back pain localized to the deformity apex and compensatory hyperlordotic segments; 2) Postural fatigue and sagittal imbalance (stooped forward posture, inability to stand upright without knee flexion); 3) Neurological deficits (delayed post-traumatic myelopathy or radiculopathy appearing months to years after trauma); 4) Functional limitations in walking distance, social interaction, and activities of daily living.'
    },
    {
      'subtitulo': 'Radiological Evaluation and Spinopelvic Mapping',
      'texto': 'Diagnostic workup requires: 1) 36-inch standing whole-spine radiographs: measuring local kyphosis angle (Cobb method), regional lumbar lordosis, Sagittal Vertical Axis (SVA), Pelvic Incidence (PI), Pelvic Tilt (PT), and T1 Pelvic Angle (TPA); 2) Supine hyperextension bolster radiographs: testing curve flexibility (differentiating mobile flexible kyphosis from rigid ankylosed deformity); 3) Multi-detector CT: identifying pseudarthrosis, implant breakage, anterior bone bridging, and canal stenosis; 4) MRI: assessing spinal cord draping, syringomyelia, and disc degeneration at adjacent levels.'
    },
    {
      'subtitulo': 'Surgical Decision-Making and Osteotomy Selection',
      'texto': 'Surgical correction is indicated for severe unremitting pain, progressive deformity (>20°–30° focal kyphosis with global sagittal malalignment), and progressive neurological deficit. The choice of osteotomy is tailored to curve flexibility and magnitude: 1) Posterior Column Osteotomies (PCO / Ponte / Smith-Petersen): indicated for mobile, flexible deformities with intact anterior disc spaces, achieving 5°–10° lordosis per level; 2) Pedicle Subtraction Osteotomy (PSO): a 3-column closing wedge osteotomy through the fractured vertebral body, ideal for rigid, sharp angular kyphosis, yielding 30°–40° focal correction; 3) Vertebral Column Resection (VCR): complete removal of the diseased vertebral body and adjacent discs, reserved for severe, rigid, fixed multiplanar deformities and sharp bony ridges causing cord compression.'
    },
    {
      'subtitulo': 'Instrumentation Strategies and Complication Prevention',
      'texto': 'Rigid multi-rod constructs (3-rod or 4-rod configurations with accessory/satellite rods) are essential across PSO and VCR sites to prevent rod fatigue breakage. Anterior column support with structural cages restores load sharing. Continuous intraoperative neuromonitoring (TcMEP, SSEP, and D-wave) is mandatory during osteotomy closure and spinal cord decompression. Prevent proximal junctional kyphosis (PJK) by avoiding rigid overcorrection, terminating constructs on stable neutral vertebrae, and applying ligamentous augmentation at the upper instrumented vertebra (UIV).'
    }
  ],
  'aplicacao_clinica': 'In clinical practice, evaluating a patient with post-traumatic kyphosis begins with full-length 36-inch standing radiographs to calculate global alignment (SVA, PT, PI–LL). If a 45-year-old patient with an untreated L1 fracture presents with 35° focal kyphosis, positive SVA (+9 cm), exhausting back pain, and progressive lower extremity spasticity, obtain CT and MRI. CT demonstrates a healed, rigid, wedged L1 vertebral body; MRI reveals the conus medullaris compressed and stretched over the retropulsed bone ridge. A single-stage posterior L1 Pedicle Subtraction Osteotomy (PSO) or Vertebral Column Resection (VCR) with intraoperative TcMEP/SSEP monitoring allows direct anterior cord decompression, closes the wedge to achieve 35° of lordotic correction, and restores sagittal balance. Secure the construct with a 4-rod configuration and extend instrumentation from T10 to L4 to prevent mechanical failure.',
  'mensagem_central': 'Post-traumatic spinal deformity is a progressive biomechanical and neurological condition resulting from structural anterior column collapse, posterior tension band failure, and sagittal malalignment. Management requires comprehensive spinopelvic evaluation, curve flexibility testing, and tailored surgical realignment utilizing advanced spinal osteotomies (PCO, PSO, VCR) with multi-rod instrumentation and anterior column load sharing to permanently relieve pain, restore sagittal balance, and decompress the spinal cord.',
  'por_que_importa': 'Treating post-traumatic kyphosis as simple localized back pain ignores the biomechanical reality: the lengthened gravity lever arm accelerates disc degeneration, causes spinal cord tethering with delayed paraparesis, and exhausts posture. This chapter provides the diagnostic and surgical framework to assess global spinopelvic balance, choose the precise corrective osteotomy (PCO vs. PSO vs. VCR), and execute robust multi-rod reconstruction while safeguarding spinal cord perfusion.',
  'decs': ['Kyphosis', 'Spinal Fractures', 'Spinal Curvatures', 'Spinal Fusion', 'Osteotomy', 'Postoperative Complications', 'Tomography, X-Ray Computed', 'Magnetic Resonance Imaging'],
  'mesh': ['Kyphosis', 'Spinal Fractures', 'Spinal Curvatures', 'Spinal Fusion', 'Osteotomy', 'Postoperative Complications', 'Tomography, X-Ray Computed', 'Magnetic Resonance Imaging'],
  'palavras_chave_livres': ['Post-traumatic kyphosis', 'Pedicle subtraction osteotomy', 'Vertebral column resection', 'Delayed post-traumatic myelopathy', 'Multi-rod construct', 'Sagittal balance restoration', 'Spinal cord draping'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Biomechanical Cascade of Post-Traumatic Kyphosis',
      'texto': 'Focal kyphotic collapse shifts the gravity line anteriorly, increasing the bending moment arm on the anterior spine and causing progressive adjacent disc breakdown, posterior muscle fatigue, and delayed spinal cord draping.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Osteotomy Selection: PSO vs. VCR vs. PCO',
      'texto': 'Tailor osteotomy to deformity characteristics: multi-level PCO (Ponte) for flexible curves (5°–10°/level); PSO for rigid, fixed angular kyphosis (30°–40° correction); and VCR for severe rigid three-column deformities with cord compression.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Multi-Rod Constructs Across 3-Column Osteotomies',
      'texto': 'Standard 2-rod constructs have an unacceptable rate of rod fatigue fracture across PSO and VCR sites. Always utilize satellite or accessory rods (3-rod or 4-rod constructs) and anterior cage support to ensure construct survival until solid fusion.'
    }
  ],
  'referencias': pt['26']['referencias'],
  'seo': {
    'titulo': 'Post-Traumatic Spinal Deformities | Spine Surgery Treatise',
    'meta_descricao': 'Complete guide to post-traumatic spinal kyphosis: pathogenesis, spinopelvic alignment, delayed myelopathy, corrective osteotomies (PSO, VCR, PCO), and multi-rod fixation.',
    'resumo_chamada': 'Master the evaluation and surgical correction of post-traumatic spinal deformities: biomechanics, sagittal realignment, PSO/VCR osteotomy techniques, and multi-rod constructs.',
    'slug': 'post-traumatic-spinal-deformities'
  }
}

es['26'] = {
  'numero': 26,
  'titulo': 'Deformidades Postraumáticas de la Columna',
  'secao': '',
  'autores': pt['26']['autores'],
  'contexto': 'Las deformidades postraumáticas constituyen una secuela tardía compleja de las lesiones vertebrales caracterizada por una alteración estructural progresiva de la alineación raquídea, manifestándose más frecuentemente como una cifosis postraumática (CPT) focal, regional o global. Se desarrollan tras el fracaso del tratamiento conservador (rotura no diagnosticada de la banda de tensión posterior, conminución vertebral inicial severa, suspensión prematura de órtesis) o tras fallas quirúrgicas (reducción intraoperatoria insuficiente, falta de soporte del pilar anterior que induce fatiga de implantes, aflojamiento de tornillos, seudoartrosis o selección inadecuada de niveles de fijación). Biomecánicamente, el colapso cifótico desplaza la línea de gravedad anterior al centro de rotación, aumentando el brazo de palanca flector y sometiendo a los cuerpos anteriores a una sobrecarga compresiva progresiva mientras la musculatura posterior entra en fatiga crónica extenuante. Los pacientes presentan dolor lumbar mecánico crónico refractario, degeneración acelerada del segmento adyacente, desbalance sagital positivo (SVA elevado) con compensación pélvica y de extremidades inferiores, y deterioro neurológico tardío (mielopatía postraumática tardía por estiramiento e isquemia de la médula sobre el relieve óseo cifótico anterior). La evaluación exige radiografías panorámicas de 36 pulgadas en bipedestación (parámetros espinopélvicos), TC multidetector (evaluación de seudoartrosis y puentes óseos) y RM (valoración de compresión neural). El tratamiento quirúrgico reconstructivo requiere osteotomías raquídeas avanzadas (PCO/Smith-Petersen, PSO o VCR) combinadas con soporte anterior y montajes multibarraw rígidos.',
  'objetivo': 'Presentar la etiopatogenia, cascada biomecánica, evaluación clínica y principios de corrección quirúrgica de las deformidades postraumáticas de la columna. Al finalizar, el lector deberá identificar las causas principales de la cifosis postraumática; evaluar el balance sagital espinopélvico global; reconocer la mielopatía postraumática tardía; seleccionar la técnica de osteotomía adecuada (PCO, PSO, VCR) según la rigidez y magnitud de la curva; y ejecutar la reconstrucción minimizando complicaciones mecánicas y neurológicas.',
  'conteudo_principal': [
    {
      'subtitulo': 'Patogenia y cascada de falla biomecánica',
      'texto': 'La cifosis postraumática deriva del colapso anterior progresivo, degeneración discal y falla de la banda de tensión posterior. Al superar los 20°–30° de cifosis focal, la línea de gravedad se desplaza anteriormente al eje de rotación, generando un momento flector progresivo que induce fatiga muscular y sobrecarga en los platillos vertebrales adyacentes. En deformidades severas, la médula espinal y el cono medular se estiran y apoyan sobre la esquina posterosuperior del cuerpo vertebral colapsado, provocando isquemia microvascular crónica y mielopatía tardía.'
    },
    {
      'subtitulo': 'Cuadro clínico: Dolor, desbalance sagital y mielopatía',
      'texto': 'El cuadro clínico comprende: 1) Dolor axial mecánico crónico e invalidante en el ápice de la deformidad y en segmentos hiperlordóticos compensatorios; 2) Fatiga postural y desbalance sagital (postura encorvada hacia adelante, marcha con flexión de rodillas); 3) Déficit neurológico diferido (mielopatía o radiculopatía postraumática tardía meses o años después del trauma); 4) Limitación funcional severa de la marcha y actividades cotidianas.'
    },
    {
      'subtitulo': 'Evaluación radiológica y mapeo espinopélvico',
      'texto': 'El estudio diagnóstico comprende: 1) Radiografías panorámicas de 36 pulgadas en bipedestación: medición de la cifosis focal (Cobb), lordosis lumbar, Eje Vertical Sagital (SVA), Incidencia Pélvica (IP), Versión Pélvica (VP/PT) y ángulo TPA; 2) Radiografías dinámicas en hiperextensión sobre rodillo: evaluación de la flexibilidad de la curva (curva flexible vs. rígida anquilosada); 3) TC multidetector: detección de seudoartrosis, rotura de tornillos y puentes óseos; 4) RM: valoración del estiramiento medular, siringomielia postraumática y discopatía adyacente.'
    },
    {
      'subtitulo': 'Toma de decisiones y selección de osteotomías',
      'texto': 'La cirugía reconstructiva está indicada ante dolor refractario, deformidad progresiva (>20°–30° con desbalance sagital) y déficit neurológico progresivo. La elección de la osteotomía depende de la flexibilidad y magnitud: 1) Osteotomías de Columna Posterior (PCO / Smith-Petersen / Ponte): indicadas en curvas flexibles con discos móviles, logrando 5°–10° de corrección por nivel; 2) Osteotomía de Sustracción Pedicular (PSO): osteotomía de cierre de 3 columnas a través del cuerpo fracturado, ideal en cifosis angulares rígidas, aportando 30°–40° de corrección focal; 3) Resección de Columna Vertebral (VCR): resección completa del cuerpo y discos adyacentes, reservada para deformidades rígidas severas con compresión medular anterior irreducible.'
    },
    {
      'subtitulo': 'Estrategias de osteosíntesis y prevención de complicaciones',
      'texto': 'El empleo de montajes multibarraw (constructos de 3 o 4 barras con barras accesorias o satélites) es indispensable a través de las osteotomías PSO y VCR para prevenir la rotura por fatiga de las barras. El soporte del pilar anterior con cajas estructurales asegura la distribución de cargas. La monitorización neurofisiológica intraoperatoria multimodal continua (TcMEP, SSEP, onda D) es obligatoria. La prevención de la cifosis de unión proximal (PJK) exige evitar sobrecorrecciones rígidas y fijar niveles proximales estables.'
    }
  ],
  'aplicacao_clinica': 'En la práctica asistencial, la evaluación de una cifosis postraumática comienza con radiografías panorámicas en bipedestación para cuantificar el desbalance global (SVA, PT, PI–LL). Si un paciente con una fractura antigua de L1 presenta 35° de cifosis focal, SVA positivo (+9 cm), dolor axial invalidante y paraparesia espástica progresiva, solicite TC y RM. La TC muestra un cuerpo de L1 acuñado y consolidado; la RM confirma la médula estirada sobre el borde óseo retropulsado. Una Osteotomía de Sustracción Pedicular (PSO) posterior en L1 con monitorización de TcMEP/SSEP permite descomprimir la médula, cerrar la cuña ósea para obtener 35° de lordosis y restaurar el balance sagital. Asegure el montaje con una configuración de 4 barras y extienda la fijación de T10 a L4 para prevenir fallas mecánicas.',
  'mensagem_central': 'La deformidad postraumática de la columna es una afección biomecánica y neurológica progresiva secundaria al colapso del pilar anterior, la falla de la banda de tensión posterior y el desbalance sagital. Su tratamiento exige una evaluación espinopélvica integral, pruebas de flexibilidad y una realineación quirúrgica mediante osteotomías raquídeas (PCO, PSO, VCR) con montajes multibarraw y soporte anterior para aliviar el dolor, restaurar el balance sagital y descomprimir las estructuras neurales.',
  'por_que_importa': 'Tratar una cifosis postraumática como un simple dolor lumbar localizado ignora la realidad biomecánica: el aumento del brazo de palanca flector acelera la degeneración discal adyacente, produce mielopatía por estiramiento medular y agota la musculatura postural. Este capítulo proporciona la metodología diagnóstica y quirúrgica para evaluar el balance espinopélvico, elegir la osteotomía precisa (PCO vs. PSO vs. VCR) y realizar reconstrucciones multibarraw estables protegiendo la médula espinal.',
  'decs': ['Cifosis', 'Fracturas de la Columna Vertebral', 'Curvaturas de la Columna Vertebral', 'Fusión Vertebral', 'Osteotomía', 'Complicaciones Posoperatorias', 'Tomografía Computarizada por Rayos X', 'Imagen por Resonancia Magnética'],
  'mesh': ['Kyphosis', 'Spinal Fractures', 'Spinal Curvatures', 'Spinal Fusion', 'Osteotomy', 'Postoperative Complications', 'Tomography, X-Ray Computed', 'Magnetic Resonance Imaging'],
  'palavras_chave_livres': ['Cifosis postraumática', 'Osteotomía de sustracción pedicular', 'Resección de columna vertebral', 'Mielopatía postraumática tardía', 'Constructo multibarraw', 'Restauración del balance sagital', 'Estiramiento medular'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'Cascada biomecánica de la cifosis postraumática',
      'texto': 'El colapso cifótico desplaza la línea de gravedad hacia adelante, aumentando el momento flector sobre los cuerpos anteriores y provocando degeneración discal acelerada, fatiga muscular crónica y compresión medular por estiramiento anterior.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Selección de osteotomías: PSO vs. VCR vs. PCO',
      'texto': 'Adapte la osteotomía a la deformidad: PCO multinivel (Ponte) para curvas flexibles (5°–10°/nivel); PSO para cifosis angulares rígidas fijas (30°–40° de corrección); y VCR para deformidades tricolumnares severas con compresión medular.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Montajes multibarraw en osteotomías de 3 columnas',
      'texto': 'Los montajes estándar de 2 barras presentan una elevada tasa de rotura por fatiga en sitios de PSO y VCR. Utilice siempre barras accesorias/satélites (constructos de 3 o 4 barras) y soporte anterior con caja para garantizar la consolidación.'
    }
  ],
  'referencias': pt['26']['referencias'],
  'seo': {
    'titulo': 'Deformidades Postraumáticas de la Columna | Tratado de Columna',
    'meta_descricao': 'Guía quirúrgica de cifosis postraumática: patogenia, balance sagital, mielopatía tardía, osteotomías correctoras (PSO, VCR, PCO) y fijación multibarraw.',
    'resumo_chamada': 'Domine la evaluación y corrección quirúrgica de deformidades postraumáticas: biomecánica, realineación sagital, técnicas de osteotomía PSO/VCR y montajes multibarraw.',
    'slug': 'deformidades-postraumaticas-de-la-columna'
  }
}

# ==========================================
# CHAPTER 27
# ==========================================
en['27'] = {
  'numero': 27,
  'titulo': 'Introduction to Spinal Deformities',
  'secao': '',
  'autores': pt['27']['autores'],
  'contexto': 'Spinal deformities correspond to alterations in physiological spinal curvatures or the appearance of abnormal deviations in the coronal, sagittal, and axial planes. Although scoliosis, kyphosis, and lordosis are traditionally described as separate entities, modern spine surgery conceptualizes all clinically relevant spinal deformities as complex, three-dimensional (3D) spatial phenomena governed by vertebral morphology, axial rotation, skeletal growth, global spinopelvic alignment, and neuromuscular compensatory mechanisms. Deformities encompass a diverse spectrum of underlying etiologies: idiopathic (infantile, juvenile, adolescent [AIS], adult degenerative), congenital (segmentation failures, formation failures), neuromuscular (cerebral palsy, spinal muscular atrophy, Duchenne muscular dystrophy), syndromic/mesenchymal (Marfan syndrome, Ehlers-Danlos syndrome, osteogenesis imperfecta), neurofibromatosis (NF-1 dystrophic and non-dystrophic), post-traumatic, post-laminectomy, infectious, and neoplastic deformities. Identifying a spinal curve is merely the starting point of diagnostic synthesis: clinical history, physical inspection (Adam\'s forward bend test, trunk balance, skin stigmata), pain characterization, neurological examination, skeletal maturity assessment (Risser sign, Sanders bone age, open triradiate cartilage), and standardized standing 36-inch radiographs must be integrated to determine curve structurality, predict future progression risk, and guide individualized conservative versus surgical management.',
  'objetivo': 'To present the fundamental concepts, standardized terminology, classification principles, and diagnostic clinical/radiographic evaluation of spinal deformities. The reader should be able to understand the three-dimensional nature of scoliosis and kyphosis; identify structural versus non-structural curves; recognize red-flag atypical curve patterns requiring advanced neuroimaging (MRI); assess skeletal maturity and progression risk; and utilize standardized radiographic parameters (Cobb angle, apical vertebra, neutral/stable vertebrae, pelvic parameters) to characterize spinal alignment.',
  'conteudo_principal': [
    {
      'subtitulo': 'Spinal Deformity as a Three-Dimensional Phenomenon',
      'texto': 'Spinal deformities alter normal regional alignment across all three dimensions simultaneously: 1) Coronal plane (lateral curvature measured by the Cobb angle; scoliosis is defined as a coronal Cobb angle >=10° with vertebral rotation); 2) Axial plane (vertebral axial rotation, causing the posterior spinous processes to rotate into the concavity while the vertebral body and attached ribs rotate toward the convexity, forming the diagnostic rib hump or lumbar prominence); 3) Sagittal plane (hypokyphosis/lordoscoliosis in thoracic adolescent idiopathic scoliosis, hyperkyphosis in Scheuermann disease, loss of lumbar lordosis in degenerative flatback deformity).'
    },
    {
      'subtitulo': 'Etiological Spectrum and Pathogenesis',
      'texto': 'Deformities are categorized etiologically: 1) Idiopathic: most common (80% of all scoliosis), divided by age of onset into Infantile (<3 years), Juvenile (3–9 years), Adolescent (AIS, 10–18 years), and Adult De Novo (>18 years); 2) Congenital: embryological malformations during weeks 4–8 (hemivertebrae, wedge vertebrae, unsegmented unilateral bars, block vertebrae); 3) Neuromuscular: long C-shaped collapsing curves with pelvic obliquity due to upper or lower motor neuron disease; 4) Syndromic and Connective Tissue: Marfan syndrome, Ehlers-Danlos, Down syndrome; 5) Neurofibromatosis Type 1 (NF-1): characterized by sharp, short-segment angular dystrophic curves with rib penciling and scalloping; 6) Secondary/Degenerative: asymmetric disc/facet collapse in adults.'
    },
    {
      'subtitulo': 'Structural vs. Non-Structural Curves',
      'texto': 'A fundamental diagnostic step is distinguishing structural from non-structural (compensatory) curves using supine maximum lateral bending radiographs: 1) Structural curves possess intrinsic rigidity, fail to correct below 20°–25° on dynamic bending films, and exhibit fixed axial vertebral rotation toward the convexity (Nash-Moe or Perdriolle grading); 2) Non-structural (compensatory) curves develop above or below a primary structural curve to maintain coronal head balance, lack fixed rotation, and demonstrate complete or near-complete flexibility (<20°–25°) on bending radiographs.'
    },
    {
      'subtitulo': 'Curve Characterization: Apex, Cobb Angle, and Key Vertebrae',
      'texto': 'Standardized terminology defines curve anatomy: 1) Apical Vertebra: the vertebra most deviated from the central sacral vertical line (CSVL) and exhibiting maximal axial rotation and horizontal tilt; 2) End Vertebrae (Superior and Inferior): the vertebrae at the cranial and caudal limits of the curve that are most tilted toward the concavity; 3) Cobb Angle: the angle formed between lines drawn along the superior endplate of the upper end vertebra and the inferior endplate of the lower end vertebra; 4) Neutral Vertebra: the most cranial/caudal vertebra with symmetric, non-rotated pedicles; 5) Stable Vertebra: the most proximal lumbar vertebra bisected by the CSVL.'
    },
    {
      'subtitulo': 'Skeletal Maturity and Progression Risk',
      'texto': 'Curve progression risk depends directly on remaining skeletal growth and initial curve magnitude. Skeletal maturity is assessed via: 1) Tanner stage (secondary sexual characteristics, peak height velocity at Tanner 2–3 in girls); 2) Risser sign (iliac apophysis ossification from anterolateral [Risser 1] to posteromedial [Risser 4] and complete fusion [Risser 5]; Risser 0–2 represents high progression risk); 3) Triradiate Cartilage status (open acetabular triradiate cartilage indicates the peak adolescent growth spurt is yet to occur, carrying the highest progression risk); 4) Sanders Bone Age (hand/wrist radiograph grading 1–8, providing superior precision over Risser sign during peak growth).'
    },
    {
      'subtitulo': 'Comprehensive Spinopelvic and Coronal Assessment',
      'texto': 'Full-length 36-inch standing radiographs evaluate global balance: Coronal balance is assessed via the C7 plumb line (measured relative to the CSVL, normal <1.5–2.0 cm offset). Sagittal balance evaluates the Sagittal Vertical Axis (SVA), thoracic kyphosis (T5–T12 Cobb angle), lumbar lordosis (T12–S1), and pelvic parameters (Pelvic Incidence [PI], Pelvic Tilt [PT], Sacral Slope [SS]). Identifying atypical curves—such as left-sided thoracic curves, rapid progression, severe pain, or focal neurological deficits—mandates emergent whole-spine MRI to rule out syringomyelia, Chiari I malformation, tethered cord, or spinal tumors.'
    }
  ],
  'aplicacao_clinica': 'In outpatient spine practice, evaluate every patient presenting with spinal asymmetry through a structured step-by-step approach. Perform Adam\'s forward bend test with a Scoliometer: an Angle of Trunk Rotation (ATR) >=5°–7° warrants standing 36-inch spinal radiographs. Calculate the Cobb angle and determine skeletal maturity (Risser score and triradiate cartilage status). In a 12-year-old pre-menarchal girl with Adolescent Idiopathic Scoliosis (AIS), Risser 0, open triradiate cartilage, and a 25° right thoracic curve, recognize the high risk of rapid progression (>70% risk), mandating immediate rigid full-time bracing (TLSO / Boston brace worn 18–23 hours/day) and serial radiographs every 4–6 months. In any patient presenting with an atypical left-sided thoracic curve, unexplained nocturnal back pain, abnormal abdominal cutaneous reflexes, or foot asymmetry (cavus foot), obtain an urgent whole-spine MRI: up to 20–30% of left thoracic curves harbor occult neuroaxial abnormalities (Chiari I malformation, syringomyelia, or spinal cord tumors) that require neurosurgical decompression prior to any corrective spinal intervention.',
  'mensagem_central': 'Spinal deformities are complex three-dimensional spatial conditions that must be evaluated beyond simple two-dimensional radiographic Cobb angles. Vertebral morphology, axial rotation, structurality, flexibility, coronal and sagittal spinopelvic balance, and biological skeletal maturity are inseparable components of clinical decision-making. Accurate clinical and radiological characterization separates benign idiopathic curves from syndromic and neuroaxial pathologies, guiding timely bracing or surgical correction.',
  'por_que_importa': 'Two spinal curves with identical Cobb angles on a coronal radiograph can exhibit completely different natural histories, progression risks, and treatment requirements depending on vertebral rotation, skeletal maturity, and underlying neuroaxial pathology. This chapter establishes the fundamental vocabulary and conceptual framework of spinal deformity, preventing clinicians from reducing 3D deformities to isolated 2D angles, identifying red-flag atypical curve patterns, and establishing the baseline necessary for advanced deformity chapters.',
  'decs': ['Scoliosis', 'Kyphosis', 'Lordosis', 'Spinal Curvatures', 'Spine', 'Bone Development', 'Radiography', 'Classification'],
  'mesh': ['Scoliosis', 'Kyphosis', 'Lordosis', 'Spinal Curvatures', 'Spine', 'Bone Development', 'Radiography', 'Classification'],
  'palavras_chave_livres': ['Three-dimensional deformity', 'Cobb angle', 'Risser sign', 'Sanders bone age', 'Structural vs. non-structural curve', 'Adam\'s forward bend test', 'Left thoracic curve red flag'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Deformity is a Three-Dimensional Phenomenon',
      'texto': 'Scoliosis is not a simple lateral curvature: it combines coronal deviation (Cobb >=10°), axial vertebral rotation (producing the clinical rib hump), and sagittal alterations (thoracic hypokyphosis/lordoscoliosis). True deformity analysis requires 3D evaluation.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Assess Growth Velocity and Risser Sign',
      'texto': 'Progression risk correlates directly with remaining growth. Patients with Risser 0–2, open triradiate cartilage, and pre-menarchal status face high progression risk, requiring proactive rigid bracing (TLSO) for curves between 20° and 40°.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Atypical Left Thoracic Curves Demand MRI',
      'texto': 'Typical adolescent idiopathic scoliosis presents as a right-sided thoracic curve. A left thoracic curve, severe pain, rapid progression, or asymmetric abdominal reflexes indicates an underlying neuroaxial abnormality (Chiari I, syrinx, tumor), mandating full-spine MRI.'
    }
  ],
  'referencias': pt['27']['referencias'],
  'seo': {
    'titulo': 'Introduction to Spinal Deformities: Principles and Evaluation | Treatise',
    'meta_descricao': 'Foundational guide to spinal deformities: 3D scoliosis biomechanics, Cobb angle, Risser/Sanders growth maturity, structural vs. compensatory curves, and MRI flags.',
    'resumo_chamada': 'Master the fundamentals of spinal deformities: 3D biomechanics of scoliosis and kyphosis, skeletal maturity assessment, curve structurality, and diagnostic algorithms.',
    'slug': 'introduction-to-spinal-deformities'
  }
}

es['27'] = {
  'numero': 27,
  'titulo': 'Introducción a las Deformidades de la Columna Vertebral',
  'secao': '',
  'autores': pt['27']['autores'],
  'contexto': 'Las deformidades de la columna vertebral corresponden a alteraciones estructurales de las curvaturas fisiológicas o a la aparición de desviaciones anormales en los planos coronal, sagital y axial. Aunque la escoliosis, la cifosis y la lordosis se describen tradicionalmente de forma aislada, la cirugía de columna moderna las conceptualiza como fenómenos espaciales tridimensionales complejos determinados por la morfología vertebral, la rotación axial, el crecimiento esquelético, el alineamiento espinopélvico global y los mecanismos neuromusculares de compensación. Las etiologías abarcan un amplio espectro: idiopáticas (infantil, juvenil, del adolescente [EIA] y degenerativa del adulto), congénitas (defectos de formación y segmentación), neuromusculares (parálisis cerebral, atrofia muscular espinal, distrofia de Duchenne), sindrómicas y mesenquimales (síndrome de Marfan, Ehlers-Danlos, osteogénesis imperfecta), neurofibromatosis tipo 1 (NF-1 distrófica y no distrófica), postraumáticas, post-laminectomía, infecciosas y neoplásicas. Identificar una curva es solo el punto de partida: la historia clínica, el examen físico (test de inclinación de Adams con escoliómetro, balance del tronco, estigmas cutáneos), la semiología del dolor, la exploración neurológica, la madurez esquelética (signo de Risser, edad ósea de Sanders, cartílago trirradiado) y las radiografías panorámicas de 36 pulgadas deben integrarse para determinar la estructuración de la curva, predecir el riesgo de progresión y guiar el tratamiento ortopédico o quirúrgico.',
  'objetivo': 'Presentar los conceptos fundamentales, la terminología estandarizada, las clasificaciones etiológicas y la metodología de evaluación clínica y radiológica de las deformidades raquídeas. Al finalizar, el lector deberá comprender la naturaleza tridimensional de la escoliosis y la cifosis; diferenciar curvas estructuradas de no estructuradas; identificar patrones de curvas atípicas que exigen neuroimagen urgente (RM); evaluar la madurez esquelética y el riesgo de progresión; y utilizar parámetros radiográficos estandarizados (ángulo de Cobb, vértebra apical, vértebras límite, neutra y estable, parámetros pélvicos) para caracterizar la alineación.',
  'conteudo_principal': [
    {
      'subtitulo': 'La deformidad como fenómeno tridimensional',
      'texto': 'Las deformidades raquídeas alteran simultáneamente los tres planos del espacio: 1) Plano coronal (desviación lateral medida por el ángulo de Cobb; la escoliosis se define como una curva coronal >=10° con rotación vertebral asociada); 2) Plano axial (rotación axial de los cuerpos vertebrales hacia la convexidad con rotación de las apófisis espinosas hacia la concavidad, proyectando las costillas hacia atrás y formando la giba costal o lumbar clínica); 3) Plano sagital (hipocifosis/lordoescoliosis torácica en la escoliosis idiopática del adolescente, hipercifosis en Scheuermann y pérdida de lordosis en el síndrome de espalda plana).'
    },
    {
      'subtitulo': 'Espectro etiológico y patogenia',
      'texto': 'Las deformidades se clasifican etiológicamente en: 1) Idiopáticas: representan el 80% de todas las escoliosis, subdivididas según la edad de inicio en Infantil (<3 años), Juvenil (3–9 años), Del Adolescente (EIA, 10–18 años) y Del Adulto (>18 años); 2) Congénitas: anomalías embrionarias entre las semanas 4 y 8 (hemivértebras, barras unilaterales no segmentadas, vértebras en bloque); 3) Neuromusculares: curvas largas colapsantes en C con oblicuidad pélvica; 4) Sindrómicas: colagenopatías (Marfan, Ehlers-Danlos); 5) Neurofibromatosis tipo 1: curvas angulares cortas y distróficas con adelgazamiento costal y festoneado vertebral; 6) Degenerativas del adulto.'
    },
    {
      'subtitulo': 'Curvas estructuradas y no estructuradas',
      'texto': 'La diferenciación fundamental se realiza mediante radiografías dinámicas en inclinación lateral máxima (bending): 1) Curvas estructuradas: presentan rigidez intrínseca, no corrigen por debajo de 20°–25° en las radiografías en flexión lateral y muestran rotación axial fija en la convexidad; 2) Curvas no estructuradas (compensatorias): se desarrollan por encima o debajo de la curva primaria para mantener la cabeza centrada sobre la pelvis, no presentan rotación fija y corrigen completamente (<20°–25°) en las radiografías dinámicas.'
    },
    {
      'subtitulo': 'Caracterización de las curvas: Ápice, Ángulo de Cobb y Vértebras Clave',
      'texto': 'La nomenclatura internacional estandarizada define: 1) Vértebra Apical: la vértebra más alejada de la línea vertical sacra media (CSVL), con máxima traslación y rotación axial; 2) Vértebras Límite (Superior e Inferior): las vértebras más inclinadas hacia la concavidad en los extremos de la curva; 3) Ángulo de Cobb: ángulo formado por las líneas tangentes al platillo superior de la vértebra límite superior y al platillo inferior de la vértebra límite inferior; 4) Vértebra Neutra: vértebra con pedículos simétricos sin rotación; 5) Vértebra Estable: vértebra bisecada por la línea CSVL.'
    },
    {
      'subtitulo': 'Madurez esquelética y riesgo de progresión',
      'texto': 'El riesgo de progresión depende de la magnitud de la curva y del remanente de crecimiento esquelético. La madurez se evalúa mediante: 1) Estadificación de Tanner (caracteres sexuales secundarios; el pico de velocidad de crecimiento puberal ocurre en Tanner 2–3); 2) Signo de Risser (osificación de la apófisis ilíaca de Risser 1 a 4 y fusión en Risser 5; Risser 0–2 indica alto potencial de progresión); 3) Cartílago Trirradiado acetabular (abierto indica que el pico de crecimiento puberal no ha ocurrido, confiriendo máximo riesgo); 4) Escala de Sanders (edad ósea en radiografía de mano/muñeca de 1 a 8).'
    },
    {
      'subtitulo': 'Evaluación panorámica espinopélvica y signos de alarma',
      'texto': 'Las radiografías panorámicas de 36 pulgadas en bipedestación evalúan el balance global: el balance coronal se mide mediante la plomada de C7 respecto a la CSVL (normal <1,5–2 cm). El balance sagital evalúa el Eje Vertical Sagital (SVA), la cifosis torácica y los parámetros pélvicos (IP, VP, PS). La presencia de curvas atípicas —como curvas torácicas izquierdas, progresión rápida, dolor nocturno severo, asimetría de reflejos cutaneoabdominales o anomalías neurológicas— exige solicitar una RM de columna completa para descartar siringomielia, malformación de Chiari I, médula anclada o tumores espinales.'
    }
  ],
  'aplicacao_clinica': 'En la consulta de columna, evalúe a todo paciente con asimetría postural mediante el test de Adams con escoliómetro: una rotación del tronco (ATR) >=5°–7° exige radiografías panorámicas de columna en bipedestación. Mida el ángulo de Cobb y determine la madurez ósea (Risser y cartílago trirradiado). En una niña de 12 años sin menarquia con Escoliosis Idiopática del Adolescente (EIA), Risser 0, cartílago trirradiado abierto y curva torácica derecha de 25°, reconozca el alto riesgo de progresión rápida (>70%), indicando de inmediato tratamiento ortopédico con corsé rígido a tiempo completo (TLSO tipo Boston 18–23 horas/día) y control radiográfico cada 4–6 meses. En cualquier paciente que presente una curva torácica izquierda atípica, dolor de espalda inexplicable o reflejos cutaneoabdominales asimétricos, solicite una RM urgente de columna completa: hasta el 20–30% de las curvas torácicas izquierdas albergan patología neuroaxial oculta (Chiari I, siringomielia o tumores intramedulares) que requiere descompresión neuroquirúrgica previa.',
  'mensagem_central': 'Las deformidades de la columna son afecciones espaciales tridimensionales complejas que deben evaluarse más allá del ángulo de Cobb bidimensional. La morfología vertebral, la rotación axial, la estructuración, la flexibilidad, el balance coronal y sagital espinopélvico y el potencial de crecimiento biológico son componentes inseparables del juicio clínico. La caracterización rigurosa diferencia curvas idiopáticas de anomalías neuroaxiales y sindrómicas, guiando el tratamiento oportuno con corsé o cirugía.',
  'por_que_importa': 'Dos curvas con el mismo ángulo de Cobb en una radiografía simple pueden tener evoluciones biológicas, riesgos de progresión y tratamientos radicalmente distintos según la rotación vertebral, la madurez esquelética y la presencia de alteraciones neuroaxiales. Este capítulo establece la terminología estandarizada y el marco conceptual de las deformidades de columna, evitando lecturas simplificadas en 2D, identificando signos de alarma en curvas atípicas y sentando las bases para el estudio de la escoliosis y cifosis.',
  'decs': ['Escoliosis', 'Cifosis', 'Lordosis', 'Curvaturas de la Columna Vertebral', 'Columna Vertebral', 'Desarrollo Óseo', 'Radiografía', 'Clasificación'],
  'mesh': ['Scoliosis', 'Kyphosis', 'Lordosis', 'Spinal Curvatures', 'Spine', 'Bone Development', 'Radiography', 'Classification'],
  'palavras_chave_livres': ['Deformidad tridimensional', 'Ángulo de Cobb', 'Signo de Risser', 'Madurez ósea de Sanders', 'Curvas estructuradas vs. compensatorias', 'Test de Adams', 'Curva torácica izquierda de alarma'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'La deformidad es un fenómeno tridimensional',
      'texto': 'La escoliosis no es una desviación lateral simple: combina deformidad coronal (Cobb >=10°), rotación vertebral axial (que produce la giba costal clínica) y alteraciones sagitales (hipocifosis torácica). El análisis y tratamiento deben ser tridimensionales.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Evaluar potencial de crecimiento y signo de Risser',
      'texto': 'El riesgo de progresión se vincula estrechamente al remanente de crecimiento. Pacientes con Risser 0–2, cartílago trirradiado abierto y premenarquia presentan alto riesgo de progresión, indicándose corsé rígido (TLSO) en curvas entre 20° y 40°.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Curvas torácicas izquierdas exigen RM',
      'texto': 'La escoliosis idiopática típica del adolescente se presenta como curva torácica derecha. Una curva torácica izquierda, dolor severo, progresión rápida o asimetría de reflejos obliga a solicitar RM completa para descartar Chiari I, siringomielia o tumores.'
    }
  ],
  'referencias': pt['27']['referencias'],
  'seo': {
    'titulo': 'Introducción a las Deformidades de la Columna Vertebral | Tratado',
    'meta_descricao': 'Guía integral de deformidades raquídeas: biomecánica 3D de la escoliosis, ángulo de Cobb, madurez de Risser/Sanders, curvas estructuradas y signos de alarma en RM.',
    'resumo_chamada': 'Domine los fundamentos de las deformidades de columna: biomecánica tridimensional, evaluación de madurez esquelética, estructuración de curvas y algoritmos diagnósticos.',
    'slug': 'introduccion-a-las-deformidades-de-la-columna-vertebral'
  }
}

# ==========================================
# CHAPTER 28
# ==========================================
en['28'] = {
  'numero': 28,
  'titulo': 'Early-Onset Scoliosis',
  'secao': '',
  'autores': pt['28']['autores'],
  'contexto': 'Early-Onset Scoliosis (EOS) encompasses any spinal deformity diagnosed before 10 years of age, regardless of underlying etiology. Its clinical management represents a unique biological challenge because spinal column growth, thoracic cage expansion, and alveolar pulmonary development occur simultaneously during early childhood. The first decade of life represents the critical period of rapid thoracic and alveolar multiplication (alveolar numbers increase from 20 million at birth to 300 million by age 8); severe progressive spinal deformities compromise chest wall development, restrict lung parenchymal growth, and lead to Thoracic Insufficiency Syndrome (TIS), severe restrictive lung disease, and premature cardiopulmonary failure. Conversely, performing extensive definitive spinal fusion at an early age halts axial spinal growth, shortens thoracic spine height (normal T1–S1 length grows from ~20 cm at birth to ~45 cm at maturity), creates a disproportionately small chest cage, and paradoxically induces severe pulmonary insufficiency. EOS constitutes a heterogeneous spectrum spanning idiopathic (infantile and juvenile), congenital (segmentation/formation failures), neuromuscular (spinal muscular atrophy, cerebral palsy), and syndromic/mesenchymal etiologies. Classification and management are standardized by the Classification for Early-Onset Scoliosis (C-EOS), which integrates patient age, etiology, coronal curve magnitude, kyphosis severity, and annual progression velocity. The fundamental therapeutic goal is to control spinal deformity while maximizing longitudinal spinal and thoracic growth using non-operative casting/bracing or growth-friendly surgical techniques (distraction-based traditional or magnetically controlled growing rods [MCGR], compression-based anterior vertebral body tethering [VBT], or guided-growth Shilla/Luque-trolley systems), reserving definitive spinal fusion until skeletal maturity.',
  'objetivo': 'To present the physiological, diagnostic, classification, and growth-sparing therapeutic principles of early-onset scoliosis (EOS). The reader should be able to understand the interconnected development of the immature spine, rib cage, and lungs; apply the C-EOS classification system; evaluate progression risk (Mehta Rib-Vertebra Angle Difference [RVAD], phase overlap, etiology); master conservative serial derotation casting (Mehta EDF casting) and bracing protocols; understand the indications, biomechanics, and complications of growth-friendly surgical techniques (traditional growing rods, MCGR, VEPTR); and recognize the long-term biological consequences of premature spinal arthrodesis.',
  'conteudo_principal': [
    {
      'subtitulo': 'Spinal Growth, Thoracic Development, and Thoracic Insufficiency Syndrome',
      'texto': 'The first decade of life features two rapid spinal growth spurts (birth to age 5 and pubertal growth). T1–S1 spine length grows ~10 cm in the first 5 years and ~5 cm between ages 5 and 10. Alveolar development peaks before age 8: severe early deformity restricts thoracic volume, reduces thoracic compliance, and precipitates Thoracic Insufficiency Syndrome (TIS—the inability of the thorax to support normal respiration or lung growth). Campbell demonstrated that achieving a minimal thoracic spine height (T1–T12 >= 18–22 cm at skeletal maturity) is vital for adequate pulmonary vital capacity.'
    },
    {
      'subtitulo': 'Etiological Classification and the C-EOS System',
      'texto': 'EOS encompasses four distinct etiological groups: 1) Idiopathic: infantile (<3 years) and juvenile (3–9 years); 2) Congenital: vertebral formation or segmentation failures, often associated with VACTERL or intraspinal anomalies; 3) Neuromuscular: hypotonic collapsing curves (SMA, CP) with progressive pelvic obliquity; 4) Syndromic: Marfan, neurofibromatosis, skeletal dysplasias. The Classification for Early-Onset Scoliosis (C-EOS) standardizes categorization by: Etiology (I, C, N, S), Major Curve Cobb Angle (1: <20°, 2: 20°–50°, 3: 50°–90°, 4: >90°), Maximum Kyphosis (-: <20°, N: 20°–50°, +: >50°), and Annual Progression modifier (P0, P1, P2).'
    },
    {
      'subtitulo': 'Clinical Evaluation, Mehta RVAD, and Progression Risk',
      'texto': 'Evaluation includes global trunk inspection, chest wall symmetry, skin stigmata, and full neurological assessment. Standing/sitting whole-spine radiographs and traction/suspension films evaluate curve flexibility. In infantile idiopathic scoliosis, Mehta\'s Rib-Vertebra Angle Difference (RVAD) determines resolution vs. progression: RVAD <20° and Phase 1 rib-head relation indicates resolving scoliosis (80% resolve spontaneously); RVAD >=20° or Phase 2 rib-head overlap onto the apical vertebral body indicates progressive scoliosis requiring early intervention. Whole-spine MRI is mandatory in all EOS patients to detect intraspinal anomalies (Chiari malformation, syringomyelia, tethered cord, present in up to 30% of congenital and juvenile curves).'
    },
    {
      'subtitulo': 'Growth-Friendly Management: Conservative and Surgical Strategies',
      'texto': 'Management is tiered by age, curve magnitude, and flexibility: 1) Conservative Casting and Bracing: Serial derotation Mehta EDF (Elongation-Derotation-Flexion) casting under general anesthesia on a specialized Risser frame is the first-line treatment for progressive infantile/early juvenile curves, capable of curing idiopathic curves if initiated before age 2; 2) Growth-Friendly Surgical Distraction Techniques: Traditional Growing Rods (TGR, requiring open surgical lengthening every 6 months) or Magnetically Controlled Growing Rods (MCGR, utilizing non-invasive outpatient magnetic lengthening every 6–8 weeks) anchor proximally to upper ribs/vertebrae and distally to lumbar/pelvis; 3) Vertical Expandable Prosthetic Titanium Rib (VEPTR): indicated for fused ribs, congenital thoracic deformities, and TIS; 4) Growth-guided systems (Shilla technique); 5) Definitive fusion: strictly deferred until age >10–12 years whenever possible.'
    }
  ],
  'aplicacao_clinica': 'In clinical practice, diagnosing scoliosis in a child under 10 years requires an immediate strategy focused on thoracic and pulmonary growth. In an 18-month-old infant with infantile idiopathic scoliosis, calculate Mehta\'s RVAD: if the curve is 35° with an RVAD of 28° and Phase 2 rib overlap, progressive scoliosis is confirmed; immediately initiate serial Mehta EDF derotational casting under anesthesia every 2–3 months. In progressive cases, serial casting can completely correct the deformity and avoid surgery. In a 6-year-old child with progressive congenital or idiopathic scoliosis exceeding 50° despite bracing, implant dual Magnetically Controlled Growing Rods (MCGR) spanning the thoracic spine to control the curve while performing non-invasive outpatient magnetic lengthenings every 2 months, providing ~1 cm of spinal growth per year without repeated open surgeries. Never perform definitive spinal fusion in children under 8–10 years unless curve progression is life-threatening, as premature fusion causes severe thoracic insufficiency and permanent pulmonary compromise. Obtain whole-spine MRI in every EOS patient to rule out associated syringomyelia, Chiari I, or tethered cord.',
  'mensagem_central': 'Early-onset scoliosis is a disorder of the growing spine and developing thorax, not merely a curvature to be straightened. Etiology, progression velocity, curve flexibility, remaining growth potential, and pulmonary developmental windows dictate management. The overarching therapeutic goal is to control deformity while preserving spinal and thoracic growth through serial casting, bracing, or growth-friendly surgical systems (MCGR, growing rods), reserving definitive spinal fusion until skeletal maturity.',
  'por_que_importa': 'Premature spinal fusion in early childhood stops thoracic cage growth, restricts alveolar multiplication, and creates permanent, life-shortening Thoracic Insufficiency Syndrome. Conversely, allowing untreated severe scoliosis to progress rapidly destroys thoracic capacity and leads to cardiopulmonary failure. This chapter provides the evidence-based roadmap to assess growth, calculate progression indices (Mehta RVAD, C-EOS), execute non-operative derotation casting, and deploy modern growth-friendly surgical implants (MCGR) to guide the child safely to skeletal maturity with preserved lung function.',
  'decs': ['Scoliosis', 'Child, Preschool', 'Child', 'Thorax', 'Lung Volume Measurements', 'Spinal Fusion', 'Prostheses and Implants', 'Casts, Surgical'],
  'mesh': ['Scoliosis', 'Child, Preschool', 'Child', 'Thorax', 'Lung Volume Measurements', 'Spinal Fusion', 'Prostheses and Implants', 'Casts, Surgical'],
  'palavras_chave_livres': ['Early-onset scoliosis', 'Thoracic insufficiency syndrome', 'C-EOS classification', 'Magnetically controlled growing rods', 'Mehta casting', 'Rib-vertebra angle difference', 'Spinal growth preservation'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Thoracic Growth and Alveolar Development',
      'texto': 'Pulmonary alveoli multiply from 20 million at birth to 300 million by age 8. Early-onset scoliosis restricts thoracic cage expansion, causing Thoracic Insufficiency Syndrome (TIS). Reconstructive goals must prioritize thoracic volume and lung growth.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Mehta RVAD Distinguishes Resolving from Progressive Curves',
      'texto': 'In infantile scoliosis, calculate the Rib-Vertebra Angle Difference (RVAD): RVAD <20° and Phase 1 rib relationship indicates resolving curves (80% resolve); RVAD >=20° or Phase 2 rib overlap indicates aggressive progressive scoliosis requiring early Mehta casting.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Avoid Premature Definitive Arthrodesis',
      'texto': 'Definitive spinal fusion in children <8–10 years arrests thoracic spine growth, causing severe permanent restrictive pulmonary failure. Utilize serial derotation casting or Magnetically Controlled Growing Rods (MCGR) to guide growth until maturity.'
    }
  ],
  'referencias': pt['28']['referencias'],
  'seo': {
    'titulo': 'Early-Onset Scoliosis: Diagnosis and Growth-Friendly Treatment | Treatise',
    'meta_descricao': 'Complete guide to early-onset scoliosis (EOS): thoracic insufficiency syndrome, C-EOS classification, Mehta RVAD, serial casting, and growing rods (MCGR).',
    'resumo_chamada': 'Master the evaluation and growth-friendly management of early-onset scoliosis: lung development, Mehta casting, C-EOS classification, and growing rod technologies.',
    'slug': 'early-onset-scoliosis'
  }
}

es['28'] = {
  'numero': 28,
  'titulo': 'Escoliosis de Inicio Temprano',
  'secao': '',
  'autores': pt['28']['autores'],
  'contexto': 'La escoliosis de inicio temprano (EIT / EOS) comprende cualquier deformidad escoliótica diagnosticada antes de los 10 años de edad, independientemente de su etiología. Su abordaje constituye un desafío biológico único debido a que el crecimiento de la columna vertebral, la expansión de la caja torácica y el desarrollo alveolar pulmonar ocurren simultáneamente durante la primera década de la vida. Esta etapa representa el periodo crítico de multiplicación alveolar (de 20 millones de alvéolos al nacer a más de 300 millones hacia los 8 años); una deformidad raquídea progresiva severa compromete el volumen torácico, restringe el crecimiento del parénquima pulmonar y conduce al Síndrome de Insuficiencia Torácica (SIT), enfermedad pulmonar restrictiva grave y cor pulmonale prematuro. Por el contrario, realizar una artrodesis vertebral definitiva extensa a edad temprana detiene el crecimiento axial de la columna (la longitud normal T1–S1 pasa de ~20 cm al nacer a ~45 cm en la madurez), generando un tórax desproporcionadamente corto e induciendo insuficiencia respiratoria iatrogénica irreversible. La EIT abarca un grupo heterogéneo de etiologías: idiopática (infantil y juvenil), congénita (fallas de formación/segmentación), neuromuscular (atrofia muscular espinal, parálisis cerebral) y sindrómica/mesenquimal. La Clasificación para Escoliosis de Inicio Temprano (C-EOS) estandariza la estratificación según edad, etiología, magnitud de la curva coronal, cifosis y velocidad de progresión anual. El objetivo terapéutico primordial es controlar la deformidad preservando al máximo el crecimiento espinal y torácico mediante yesos correctores seriados, corsés o técnicas quirúrgicas que preservan el crecimiento (barras de crecimiento tradicionales o controladas magnéticamente [MCGR], sistemas guiados tipo Shilla o VEPTR), postergando la artrodesis definitiva hasta la madurez esquelética.',
  'objetivo': 'Presentar los fundamentos fisiológicos, diagnósticos, de clasificación y tratamiento conservador y quirúrgico de preservación de crecimiento en la escoliosis de inicio temprano (EIT). Al finalizar, el lector deberá comprender la relación entre el desarrollo de la columna, la caja torácica y los pulmones; aplicar la clasificación C-EOS; evaluar los factores de riesgo de progresión (diferencia del ángulo costovertebral de Mehta [RVAD], superposición de fases, etiología); dominar los protocolos de yesos seriados de desrotación (yesos de Mehta EDF) y corsés; comprender las indicaciones y complicaciones de las técnicas quirúrgicas de crecimiento (barras crecientes MCGR, VEPTR); y reconocer las consecuencias biológicas de la artrodesis prematura.',
  'conteudo_principal': [
    {
      'subtitulo': 'Crecimiento espinal, desarrollo torácico y Síndrome de Insuficiencia Torácica',
      'texto': 'La primera década de vida presenta dos picos rápidos de crecimiento raquídeo (del nacimiento a los 5 años y el estirón puberal). La longitud T1–S1 aumenta ~10 cm en los primeros 5 años y ~5 cm entre los 5 y 10 años. El desarrollo alveolar alcanza su madurez antes de los 8 años: una deformidad precoz grave reduce el volumen torácico y la distensibilidad pulmonar, precipitando el Síndrome de Insuficiencia Torácica (SIT, incapacidad del tórax de mantener la respiración o el crecimiento pulmonar normal). Campbell demostró que alcanzar una altura mínima de columna torácica (T1–T12 >= 18–22 cm al final del crecimiento) es indispensable para una función pulmonar vital adecuada.'
    },
    {
      'subtitulo': 'Clasificación etiológica y sistema C-EOS',
      'texto': 'La EIT abarca cuatro grupos: 1) Idiopática: infantil (<3 años) y juvenil (3–9 años); 2) Congénita: malformaciones vertebrales congénitas, frecuentemente asociadas a VACTERL o disrafismos intrarraquídeos; 3) Neuromuscular: curvas colapsantes en C (AME, PC) con oblicuidad pélvica; 4) Sindrómica: Marfan, neurofibromatosis, displasias esqueléticas. La Clasificación C-EOS estandariza la evaluación según: Etiología (I, C, N, S), Magnitud de la curva coronal mayor (1: <20°, 2: 20°–50°, 3: 50°–90°, 4: >90°), Cifosis máxima (-: <20°, N: 20°–50°, +: >50°) y Modificador de progresión anual (P0, P1, P2).'
    },
    {
      'subtitulo': 'Evaluación clínica, método de Mehta y riesgo de progresión',
      'texto': 'La exploración clínica evalúa la simetría del tronco, caja torácica, estigmas cutáneos y examen neurológico completo. Las radiografías panorámicas en bipedestación/sedestación y en tracción evalúan la flexibilidad. En la escoliosis idiopática infantil, la Diferencia del Ángulo Costovertebral de Mehta (RVAD) predice la evolución: un RVAD <20° y relación costilla-vértebra en Fase 1 indica resolución espontánea (80% curan sin secuelas); un RVAD >=20° o superposición de la cabeza costal en Fase 2 sobre el cuerpo apical indica progresión agresiva que exige tratamiento temprano. La RM de columna completa es obligatoria en todos los pacientes con EIT para descartar anomalías neuroaxiales (Chiari, siringomielia, médula anclada, presentes en hasta el 30% de los casos).'
    },
    {
      'subtitulo': 'Tratamiento guiado por el crecimiento: Conservador y Quirúrgico',
      'texto': 'El manejo se escalona según la edad y magnitud: 1) Yesos y corsés: los yesos seriados de elongación-desrotación-flexión (Mehta EDF) bajo anestesia general en mesa de Risser son la primera línea en curvas infantiles y juveniles tempranas, logrando la curación completa en curvas idiopáticas si se inician antes de los 2 años; 2) Técnicas quirúrgicas de distracción: Barras de Crecimiento Tradicionales (TGR, que requieren elongaciones quirúrgicas abiertas cada 6 meses) o Barras de Crecimiento Controladas Magnéticamente (MCGR, elongaciones ambulatorias no invasivas cada 6–8 semanas mediante imanes externos); 3) Costilla de Titanio Expandible Vertical (VEPTR): indicada en costillas fusionadas, hipoplasia torácica congénita y SIT; 4) Artrodesis definitiva: postergada estrictamente hasta los 10–12 años o más.'
    }
  ],
  'aplicacao_clinica': 'En la práctica clínica, identificar una escoliosis en un niño menor de 10 años exige una estrategia orientada a la preservación pulmonar. En un lactante de 18 meses con escoliosis idiopática infantil, calcule el RVAD de Mehta: si la curva es de 35° con un RVAD de 28° y Fase 2 de superposición costal, la progresión es inminente; inicie de inmediato yesos seriados de Mehta EDF bajo anestesia cada 2–3 meses. En etapas tempranas, los yesos seriados corrigen la curva y evitan cirugías. En un niño de 6 años con escoliosis congénita o idiopática progresiva >50° que no responde a corsés, implante barras de crecimiento controladas magnéticamente (MCGR) de anclaje dual para controlar la deformidad mientras se realizan elongaciones magnéticas ambulatorias no invasivas cada 2 meses, aportando ~1 cm de crecimiento vertebral al año sin cirugías repetidas. Jamás realice una artrodesis definitiva en menores de 8–10 años salvo riesgo vital inminente, ya que la fusión prematura provoca insuficiencia torácica grave. Solicite RM de columna completa en toda EIT para descartar siringomielia o Chiari asociado.',
  'mensagem_central': 'La escoliosis de inicio temprano es una afección de la columna en crecimiento y del tórax en desarrollo, no una simple curva a enderezar. La etiología, la velocidad de progresión, la flexibilidad, el remanente de crecimiento y la repercusión cardiorrespiratoria determinan el tratamiento. El objetivo fundamental es controlar la deformidad preservando el desarrollo vertebral y torácico mediante yesos seriados, corsés o barras de crecimiento (MCGR), reservando la artrodesis definitiva para la madurez esquelética.',
  'por_que_importa': 'La artrodesis definitiva prematura en la primera infancia detiene el crecimiento torácico, frena la multiplicación alveolar y provoca un Síndrome de Insuficiencia Torácica irreversible que acorta la vida. Por otra parte, permitir la progresión descontrolada de la escoliosis destruye la función cardiopulmonar. Este capítulo proporciona las pautas basadas en evidencia para evaluar el crecimiento, calcular los índices de progresión (Mehta RVAD, C-EOS), aplicar yesos correctores y utilizar implantes de crecimiento (MCGR) para guiar al niño hacia la madurez esquelética con función pulmonar normal.',
  'decs': ['Escoliosis', 'Preescolar', 'Niño', 'Tórax', 'Pruebas de Función Pulmonar', 'Fusión Vertebral', 'Prótesis e Implantes', 'Yesos Quirúrgicos'],
  'mesh': ['Scoliosis', 'Child, Preschool', 'Child', 'Thorax', 'Lung Volume Measurements', 'Spinal Fusion', 'Prostheses and Implants', 'Casts, Surgical'],
  'palavras_chave_livres': ['Escoliosis de inicio temprano', 'Síndrome de insuficiencia torácica', 'Clasificación C-EOS', 'Barras de crecimiento magnéticas MCGR', 'Yesos de Mehta EDF', 'Diferencia del ángulo costovertebral', 'Preservación del crecimiento raquídeo'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'Crecimiento torácico y desarrollo alveolar',
      'texto': 'Los alvéolos pulmonares se multiplican de 20 millones al nacer a más de 300 millones a los 8 años. La escoliosis de inicio temprano restringe la caja torácica causando Síndrome de Insuficiencia Torácica (SIT). El tratamiento debe priorizar el volumen pulmonar.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'El RVAD de Mehta predice progresión vs. resolución',
      'texto': 'En escoliosis infantil, calcule el RVAD de Mehta: RVAD <20° y relación costal en Fase 1 indica resolución espontánea (80% curan); RVAD >=20° o superposición en Fase 2 indica progresión agresiva que exige yesos seriados de Mehta inmediatos.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Evitar la artrodesis definitiva prematura',
      'texto': 'La artrodesis vertebral antes de los 8–10 años detiene el desarrollo torácico y causa insuficiencia respiratoria restrictiva irreversible. Utilice yesos de desrotación o barras de crecimiento magnéticas (MCGR) para guiar el crecimiento hasta la madurez.'
    }
  ],
  'referencias': pt['28']['referencias'],
  'seo': {
    'titulo': 'Escoliosis de Inicio Temprano: Diagnóstico y Tratamiento | Tratado',
    'meta_descricao': 'Guía integral de escoliosis de inicio temprano (EIT): síndrome de insuficiencia torácica, clasificación C-EOS, yesos de Mehta y barras de crecimiento (MCGR).',
    'resumo_chamada': 'Domine la evaluación y tratamiento guiado por el crecimiento en escoliosis de inicio temprano: desarrollo pulmonar, yesos de Mehta, escala C-EOS y barras magnéticas.',
    'slug': 'escoliosis-de-inicio-temprano'
  }
}

with open('slice_25_28_en.json', 'w', encoding='utf-8') as f:
    json.dump(en, f, ensure_ascii=False, indent=2)

with open('slice_25_28_es.json', 'w', encoding='utf-8') as f:
    json.dump(es, f, ensure_ascii=False, indent=2)

print('Batch 25-28 successfully saved!')
