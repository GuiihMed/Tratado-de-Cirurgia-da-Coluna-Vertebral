import json

with open('/Users/manoeldesign/.gemini/antigravity/brain/7e1703fb-1acf-40aa-a137-05338f0871de/scratch/slice_1_28_pt.json', 'r', encoding='utf-8') as f:
    pt = json.load(f)

en = {}
es = {}

# ==========================================
# CHAPTER 17
# ==========================================
en['17'] = {
  'numero': 17,
  'titulo': 'Differential Diagnosis: Spinal Disorders and Neurological Diseases',
  'secao': '',
  'autores': pt['17']['autores'],
  'contexto': 'Primary diseases of the vertebral column and intrinsic neurological disorders frequently share overlapping clinical presentations, including motor weakness, sensory disturbances, gait impairment, sphincter dysfunction, and axial or neuropathic limb pain. Because degenerative spine changes on MRI (disc bulging, facet arthropathy, canal narrowing) are widespread in the asymptomatic general population, discovering a structural vertebral abnormality in a patient with an underlying primary neurological disease can easily lead to diagnostic errors, delayed medical therapy, or unwarranted spinal surgery. This chapter structures the differential diagnosis between compressive spinal pathologies (cervical spondylotic myelopathy, compressive radiculopathy, lumbar spinal stenosis) and major non-compressive neurological diseases. It covers upper and lower motor neuron diseases (Amyotrophic Lateral Sclerosis [ALS]), central demyelinating and inflammatory disorders (Multiple Sclerosis [MS], Neuromyelitis Optica Spectrum Disorder [NMOSD], transverse myelitis), movement disorders (Parkinson disease, normal pressure hydrocephalus [NPH]), metabolic/toxic myelopathies (subacute combined degeneration from vitamin B12/copper deficiency), acute/chronic immune-mediated neuropathies (Guillain-Barré Syndrome [GBS], Chronic Inflammatory Demyelinating Polyradiculoneuropathy [CIDP]), and vascular malformations (dural arteriovenous fistulas). Synthesizing clinical history, cranial nerve examination, upper vs. lower motor neuron signs, cerebrospinal fluid analysis, neurophysiology, and targeted neuroimaging is essential for avoiding misdiagnosis and ensuring appropriate medical or surgical care.',
  'objetivo': 'To present the clinical and neurological differential diagnosis between structural spinal disorders and primary neurological diseases. The reader should be able to differentiate motor neuron diseases (ALS) from cervical spondylotic myelopathy; identify demyelinating, inflammatory, and metabolic myelopathies mimicking spinal compression; distinguish movement disorders and normal pressure hydrocephalus from neurogenic claudication and myelopathic gait; and utilize electromyography, CSF analysis, and advanced neuroimaging to establish accurate, timely diagnoses.',
  'conteudo_principal': [
    {
      'subtitulo': 'Clinical Reasoning and the "Double Trap" of Neuroimaging',
      'texto': 'Diagnostic evaluation begins by distinguishing structural compressive myelopathy/radiculopathy from intrinsic central or peripheral neurological disorders. The presence of MRI canal stenosis in a patient with progressive neurological decline is not proof of compressive etiology. Clinicians must actively search for signs inconsistent with pure spinal compression: cranial nerve involvement, dysarthria, dysphagia, tongue fasciculations, cognitive decline, early prominent ataxia out of proportion to weakness, and widespread lower motor neuron denervation across non-contiguous cranial, cervical, thoracic, and lumbosacral segments.'
    },
    {
      'subtitulo': 'Motor Neuron Disease: Amyotrophic Lateral Sclerosis (ALS) vs. Myelopathy',
      'texto': 'Amyotrophic lateral sclerosis (ALS) frequently mimics cervical spondylotic myelopathy (CSM) because both present with progressive upper extremity weakness, spasticity, and hyperreflexia. Crucial differentiating features of ALS include: 1) Simultaneous upper and lower motor neuron signs within the same limb; 2) Absence of sensory deficits (intact pinprick, light touch, and vibration); 3) Bulbar involvement (tongue atrophy, fasciculations, dysarthria, dysphagia); 4) Split-hand syndrome (preferential atrophy of thenar muscles and first dorsal interosseous with relative sparing of hypothenar muscles); and 5) Electromyography demonstrating active denervation (fibrillations, positive sharp waves) and chronic reinnervation in three or more anatomical regions (bulbar, cervical, thoracic, lumbosacral) with normal sensory nerve conduction.'
    },
    {
      'subtitulo': 'Demyelinating, Inflammatory, and Metabolic Myelopathies',
      'texto': 'Multiple sclerosis (MS) and Neuromyelitis Optica Spectrum Disorder (NMOSD) present with acute or subacute myelopathy (Lhermitte sign, optic neuritis, area postrema syndrome with intractable hiccups/vomiting). Spinal MRI in MS shows peripheral, short-segment (<2 vertebral segments), wedge-shaped posterolateral T2 hyperintensities; NMOSD shows longitudinally extensive transverse myelitis (LETM, >=3 contiguous vertebral bodies) with central cord involvement and positive serum Aquaporin-4 (AQP4-IgG) antibodies. Subacute Combined Degeneration (vitamin B12 deficiency) and copper deficiency produce symmetric dorsal and lateral column dysfunction (gait ataxia, loss of proprioception/vibration, spastic paraparesis) with characteristic inverted "V" sign T2 hyperintensity in the posterior columns.'
    },
    {
      'subtitulo': 'Movement Disorders, NPH, and Polyneuropathies',
      'texto': 'Parkinson disease and Normal Pressure Hydrocephalus (NPH) cause gait disturbances easily confused with cervical myelopathy or lumbar spinal stenosis. Parkinsonism features resting tremor, cogwheel rigidity, bradykinesia, and a shuffling festinating gait. NPH presents with Adams-Hakim triad: magnetic "glued-to-the-floor" gait ataxia, cognitive decline, and urinary incontinence, with ventriculomegaly on brain CT/MRI. Guillain-Barré Syndrome (GBS) presents with acute ascending flaccid quadriparesis, hyporeflexia/areflexia, and albuminocytological dissociation on lumbar puncture. Spinal Dural Arteriovenous Fistulas (SDAVF) produce progressive slowly ascending lower extremity paraparesis and sphincter dysfunction in older males, appearing on T2 MRI as extensive cord edema and serpentine perimedullary flow voids.'
    }
  ],
  'aplicacao_clinica': 'In clinical practice, recognizing non-compressive neurological features prevents catastrophic surgical misadventures. In a patient referred for decompressive cervical laminectomy due to hyperreflexia and hand clumsiness, examining the cranial nerves and tongue for fasciculations and obtaining full-body needle EMG rules out ALS before irreversible cervical surgery is mistakenly performed. In a young adult presenting with acute paraparesis and a focal thoracic disc bulge, brain MRI and CSF analysis for oligoclonal bands and Aquaporin-4 antibodies distinguish multiple sclerosis or NMOSD from surgical disc herniation. In an elderly patient with bilateral leg weakness and MRI lumbar stenosis, testing for resting rigidity, assessing cognitive status, and examining for magnetic gait prevent unnecessary lumbosacral decompression for unrecognized Parkinson disease or NPH. When extensive thoracic cord T2 edema with perimedullary serpentine flow voids is noted, perform spinal digital subtraction angiography (DSA) to diagnose and embolize a spinal dural AV fistula.',
  'mensagem_central': 'Differentiating structural spinal disorders from primary neurological diseases requires rigorous neurological synthesis. Structural canal stenosis on MRI is a common bystander; clinicians must identify red-flag neurological signs (bulbar symptoms, isolated motor loss without sensory changes, cognitive decline, serpentine flow voids) and utilize electromyography, brain MRI, and CSF analysis to distinguish ALS, demyelinating myelitis, movement disorders, and vascular malformations from surgical spinal conditions.',
  'por_que_importa': 'Performing spinal decompression in a patient with unsuspected ALS, multiple sclerosis, or Parkinson disease will not halt disease progression and frequently accelerates functional decline. This chapter provides the clinical roadmap to separate compressive spine disease from intrinsic neurological disorders, avoiding tragic surgical errors and directing patients to appropriate, life-saving disease-modifying therapies.',
  'decs': ['Diagnosis, Differential', 'Spinal Cord Diseases', 'Amyotrophic Lateral Sclerosis', 'Multiple Sclerosis', 'Parkinson Disease', 'Normal Pressure Hydrocephalus', 'Polyneuropathies', 'Central Nervous System Diseases'],
  'mesh': ['Diagnosis, Differential', 'Spinal Cord Diseases', 'Amyotrophic Lateral Sclerosis', 'Multiple Sclerosis', 'Parkinson Disease', 'Normal Pressure Hydrocephalus', 'Polyneuropathies', 'Central Nervous System Diseases'],
  'palavras_chave_livres': ['ALS vs. cervical myelopathy', 'Longitudinally extensive transverse myelitis', 'Subacute combined degeneration', 'Normal pressure hydrocephalus', 'Spinal dural arteriovenous fistula', 'Split-hand sign'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Degenerative MRI Does Not Equal Neurological Etiology',
      'texto': 'Cervical stenosis and disc bulges are present in over 50% of asymptomatic older adults. In patients with progressive weakness or gait disturbance, always rule out primary neurological conditions (ALS, MS, Parkinson, NPH) before committing to spinal surgery.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Key ALS Distinguishing Hallmarks',
      'texto': 'ALS features simultaneous upper and lower motor neuron signs, complete absence of sensory deficits, bulbar involvement (tongue fasciculations, dysarthria), and widespread active denervation on EMG across three or four anatomical body segments.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Recognize Dural Arteriovenous Fistulas',
      'texto': 'Progressive ascending paraparesis with T2 cord edema and serpentine perimedullary flow voids on MRI indicates a Spinal Dural Arteriovenous Fistula (SDAVF). Decompressing the spine without treating the vascular shunt worsens venous hypertension and causes acute paraplegia.'
    }
  ],
  'referencias': pt['17']['referencias'],
  'seo': {
    'titulo': 'Differential Diagnosis: Spinal Disorders vs. Neurological Diseases | Treatise',
    'meta_descricao': 'Clinical guide to differentiating spine pathologies from neurological diseases: ALS vs. cervical myelopathy, multiple sclerosis, NMOSD, NPH, Parkinson, and SDAVF.',
    'resumo_chamada': 'Master the differential diagnosis between surgical spinal disorders and primary neurological diseases (ALS, MS, NMOSD, NPH, Parkinson disease, spinal AV fistulas).',
    'slug': 'differential-diagnosis-spine-diseases-and-neurological-disorders'
  }
}

es['17'] = {
  'numero': 17,
  'titulo': 'Diagnóstico Diferencial: Enfermedades de la Columna y Enfermedades Neurológicas',
  'secao': '',
  'autores': pt['17']['autores'],
  'contexto': 'Las enfermedades primarias de la columna vertebral y las afecciones neurológicas intrínsecas del sistema nervioso central y periférico comparten manifestaciones clínicas similares: debilidad motora progresiva, alteraciones sensitivas, trastorno de la marcha, disfunción de esfínteres y dolor axial o neuropático. Debido a que las alteraciones degenerativas en la RM (protrusiones discales, artrosis facetaria, estenosis foraminal o de canal) son extraordinariamente frecuentes en la población asintomática, identificar una alteración morfológica vertebral en un paciente con una enfermedad neurológica primaria puede provocar errores diagnósticos graves, cirugías raquídeas innecesarias o retraso en el tratamiento médico específico. Este capítulo estructura el diagnóstico diferencial entre patologías compresivas raquídeas (mielopatía espondilótica cervical, radiculopatía compresiva, estenosis lumbar) y las principales afecciones neurológicas no compresivas: enfermedades de motoneurona (Esclerosis Lateral Amiotrófica [ELA]), trastornos desmielinizantes e inflamatorios (Esclerosis Múltiple [EM], Trastornos del Espectro de Neuromielitis Óptica [NMOSD], mielitis transversa), trastornos del movimiento y demencias (Enfermedad de Parkinson, Hidrocefalia de Presión Normal [HPN]), mielopatías metabólicas (degeneración combinada subaguda por déficit de vitamina B12/cobre), polineuropatías inmunomediadas (síndrome de Guillain-Barré, CIDP) y malformaciones vasculares (fístulas arteriovenosas durales espinales). La síntesis entre anamnesis, exploración de pares craneales, examen de motoneurona superior e inferior, análisis de LCR, neurofisiología y neuroimagen es indispensable para evitar confusiones diagnósticas.',
  'objetivo': 'Presentar el diagnóstico diferencial clínico y neurológico entre las enfermedades estructurales de la columna y las patologías neurológicas primarias. Al finalizar, el lector deberá diferenciar las enfermedades de motoneurona (ELA) de la mielopatía cervical espondilótica; identificar mielopatías desmielinizantes, inflamatorias y metabólicas que simulan compresión raquídea; distinguir los trastornos de la marcha parkinsonianos y la hidrocefalia normotensiva de la claudicación neurogénica y la ataxia mielopática; y utilizar la ENMG, el análisis de LCR y la neuroimagen avanzada para alcanzar diagnósticos certeros.',
  'conteudo_principal': [
    {
      'subtitulo': 'Razonamiento clínico y la trampa de la neuroimagen',
      'texto': 'La evaluación diagnóstica exige diferenciar las mielorradiculopatías compresivas de las enfermedades intrínsecas del sistema nervioso. La presencia de estenosis en la RM no demuestra causalidad neurológica. El cirujano debe buscar activamente signos discordantes con una compresión raquídea: compromiso de pares craneales, disartria, disfagia, fasciculaciones linguales, deterioro cognitivo, ataxia sensorial desproporcionada y denervación difusa en segmentos no contiguos (bulbar, cervical, torácico y lumbosacro).'
    },
    {
      'subtitulo': 'Enfermedad de Motoneurona: Esclerosis Lateral Amiotrófica (ELA) vs. Mielopatía',
      'texto': 'La Esclerosis Lateral Amiotrófica (ELA) se confunde con frecuencia con la mielopatía cervical espondilótica por compartir hiperreflexia, espasticidad y debilidad en extremidades. Los criterios distintivos de ELA incluyen: 1) Coexistencia de signos de motoneurona superior e inferior en el mismo miembro; 2) Ausencia total de alteraciones sensitivas; 3) Signos bulbares (atrofia lingual, fasciculaciones, disartria, disfagia); 4) Signo de la mano dividida (split-hand: atrofia tenar y del primer interóseo dorsal con respeto de la eminencia hipotenar); y 5) Electromiografía con denervación activa difusa en tres o cuatro regiones corporales con conducción sensitiva normal.'
    },
    {
      'subtitulo': 'Mielopatías desmielinizantes, inflamatorias y metabólicas',
      'texto': 'La Esclerosis Múltiple (EM) y la Neuromielitis Óptica (NMOSD) se manifiestan como mielopatías subagudas (signo de Lhermitte, neuritis óptica, hipo o vómitos incoercibles por afección del área postrema). En RM, la EM muestra lesiones periféricas asimétricas cortas (<2 segmentos vertebrales); la NMOSD produce una Mielitis Transversa Longitudinalmente Extensa (LETM, >=3 cuerpos contiguos) con afectación central y anticuerpos anti-Aquaporina-4 (AQP4-IgG) positivos. La Degeneración Combinada Subaguda (déficit de vitamina B12) y el déficit de cobre causan ataxia sensorial y paraparesia espástica con hiperintensidad en "V invertida" en los cordones posteriores.'
    },
    {
      'subtitulo': 'Trastornos del movimiento, HPN y polineuropatías',
      'texto': 'La Enfermedad de Parkinson y la Hidrocefalia de Presión Normal (HPN) producen alteraciones de la marcha que simulan mielopatía o estenosis lumbar. El parkinsonismo se distingue por temblor de reposo, rigidez en rueda dentada, bradicinesia y marcha festinante a pequeños pasos. La HPN presenta la tríada clásica de Hakim-Adams (marcha magnética "pegada al suelo", deterioro cognitivo e incontinencia urinaria) con ventriculomegalia en RM craneal. El síndrome de Guillain-Barré presenta cuadriparesia flácida arrefléxica rápidamente ascendente con disociación albuminocitológica en el LCR. Las Fístulas Arteriovenosas Durales Espinales (FAVDE) causan paraparesia espástica progresiva en varones mayores, con edema medular extenso y vasos perimedulares tortuosos en tirabuzón (flow voids) en RM T2.'
    }
  ],
  'aplicacao_clinica': 'En la práctica asistencial, identificar signos neurológicos no compresivos evita cirugías inapropiadas. Ante un paciente con hiperreflexia, torpeza manual y estenosis cervical en RM, la exploración de pares craneales, la búsqueda de fasciculaciones linguales y una ENMG de cuatro segmentos descartan ELA antes de realizar una laminectomía innecesaria. En un adulto joven con paraparesia subaguda y una protrusión discal dorsal, la RM cerebral y el estudio de LCR (bandas oligoclonales y anticuerpos AQP4) diferencian una esclerosis múltiple de una hernia quirúrgica. En ancianos con claudicación y debilidad de piernas, evaluar rigidez en rueda dentada y alteración cognitiva previene descompresiones lumbares erróneas en pacientes con Parkinson o HPN. Ante un edema medular dorsal extenso con vasos tortuosos en RM, solicite una arteriografía medular para diagnosticar y embolizar una fístula dural espinal, ya que descomprimirla quirúrgicamente sin cerrar la fístula agrava la hipertensión venosa y precipita la paraplejía.',
  'mensagem_central': 'Diferenciar las enfermedades vertebrales estructurales de las patologías neurológicas primarias exige una rigurosa síntesis clínica. La estenosis anatómica en la RM suele ser un hallazgo incidental; el clínico debe identificar signos de alarma neurológica (síntomas bulbares, pérdida motora pura sin déficit sensitivo, deterioro cognitivo, vasos perimedulares tortuosos) y apoyarse en la ENMG, RM cerebral y LCR para diagnosticar ELA, mielitis desmielinizante, trastornos extrapiramidales y malformaciones vasculares.',
  'por_que_importa': 'Operar la columna en un paciente con ELA, esclerosis múltiple o enfermedad de Parkinson no detiene la enfermedad y con frecuencia acelera el deterioro funcional. Este capítulo proporciona la guía semiológica para distinguir la patología compresiva de los trastornos neurológicos intrínsecos, evitando cirugías desastrosas y dirigiendo al paciente hacia tratamientos médicos específicos y oportunos.',
  'decs': ['Diagnóstico Diferencial', 'Enfermedades de la Médula Espinal', 'Esclerosis Amiotrófica Lateral', 'Esclerosis Múltiple', 'Enfermedad de Parkinson', 'Hidrocefalia de Presión Normal', 'Polineuropatías', 'Enfermedades del Sistema Nervioso Central'],
  'mesh': ['Diagnosis, Differential', 'Spinal Cord Diseases', 'Amyotrophic Lateral Sclerosis', 'Multiple Sclerosis', 'Parkinson Disease', 'Normal Pressure Hydrocephalus', 'Polyneuropathies', 'Central Nervous System Diseases'],
  'palavras_chave_livres': ['ELA vs. mielopatía cervical', 'Mielitis transversa longitudinalmente extensa', 'Degeneración combinada subaguda', 'Hidrocefalia de presión normal', 'Fístula arteriovenosa dural espinal', 'Signo de la mano dividida'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'La estenosis en RM no confirma causa neurológica',
      'texto': 'Más del 50% de los adultos mayores asintomáticos presentan estenosis cervical o protrusiones discales en RM. Ante debilidad progresiva o trastornos de la marcha, descarte sistemáticamente afecciones neurológicas primarias (ELA, EM, Parkinson, HPN) antes de indicar cirugía raquídea.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Claves diagnósticas de la ELA',
      'texto': 'La ELA combina simultáneamente signos de motoneurona superior e inferior, respeta por completo la sensibilidad, puede presentar afectación bulbar (fasciculaciones linguales, disartria) y muestra denervación activa en tres o más regiones en la electromiografía.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Sospechar Fístula Dural Arteriovenosa Espinal',
      'texto': 'Una paraparesia espástica lentamente progresiva con edema medular extenso en T2 y vasos perimedulares serpiginosos (flow voids) sugiere una Fístula Arteriovenosa Dural Espinal (FAVDE). La laminectomía descompresiva sin oclusión vascular agrava la isquemia medular.'
    }
  ],
  'referencias': pt['17']['referencias'],
  'seo': {
    'titulo': 'Diagnóstico Diferencial: Columna vs. Enfermedades Neurológicas | Tratado',
    'meta_descricao': 'Guía clínica de diagnóstico diferencial neurológico en columna: ELA vs. mielopatía cervical, esclerosis múltiple, NMOSD, HPN, Parkinson y fístula dural espinal.',
    'resumo_chamada': 'Domine la diferenciación entre patologías quirúrgicas de columna y enfermedades neurológicas primarias (ELA, esclerosis múltiple, NMOSD, Parkinson, HPN y FAVDE).',
    'slug': 'diagnostico-diferencial-enfermedades-de-la-columna-y-enfermedades-neurologicas'
  }
}

# ==========================================
# CHAPTER 18
# ==========================================
en['18'] = {
  'numero': 18,
  'titulo': 'Spine Evaluation in the Polytrauma Patient',
  'secao': '',
  'autores': pt['18']['autores'],
  'contexto': 'The evaluation and management of the vertebral column in a polytrauma patient must be integrated seamlessly into Advanced Trauma Life Support (ATLS) resuscitation priorities (ABCDE: Airway with cervical spine protection, Breathing, Circulation with hemorrhage control, Disability, Exposure). In high-energy trauma (motor vehicle collisions, falls from height, crush injuries), occult spinal fractures, non-contiguous multi-level injuries (occurring in 10% to 15% of cases), and traumatic spinal cord injuries are frequently masked by traumatic brain injury (TBI), severe intoxication, endotracheal intubation, or painful distracting injuries. Maintaining strict spinal motion restriction—utilizing manual in-line stabilization during endotracheal intubation and flat log-rolling precautions rather than prolonged immobilization on rigid backboards (which cause pressure ulcers and respiratory compromise within 2 hours)—is critical for preventing secondary neurological deterioration. Validated clinical decision rules (NEXUS criteria and Canadian C-Spine Rule) allow safe clinical cervical spine clearance exclusively in fully alert, cooperative, non-intoxicated, asymptomatic patients without distracting injuries. In all obtunded, high-energy, or symptomatic trauma patients, multi-detector whole-spine CT scanning from the occiput to the sacrum represents the mandatory gold standard. Magnetic resonance imaging (MRI) is essential for evaluating spinal cord contusion, epidural hematoma, and posterior ligamentous complex disruption. Standardized documentation according to the ASIA/ISNCSCI scale provides the diagnostic and prognostic baseline for multidisciplinary surgical decision-making.',
  'objetivo': 'To present the structured protocol for spinal evaluation, clearance, and stabilization in the polytrauma patient according to ATLS principles. The reader should be able to execute spinal motion restriction and airway management safely; apply and interpret the NEXUS criteria and Canadian C-Spine Rule for cervical clearance; select and interpret whole-spine multi-detector CT and MRI; identify non-contiguous spinal injuries and associated blunt cerebrovascular injuries (BCVI); and perform standardized neurological assessment using the ASIA impairment scale.',
  'conteudo_principal': [
    {
      'subtitulo': 'Trauma Priorities and Spinal Motion Restriction',
      'texto': 'The primary survey prioritizes life over limb/spine. The cervical spine is protected immediately during Airway management using manual in-line stabilization (MILS) with video-laryngoscopy or fiberoptic intubation. Spinal motion restriction (SMR) with a rigid cervical collar and firm mattress replaces the antiquated prolonged use of rigid spine boards, which must be removed as soon as the patient is transferred to the trauma bay stretcher (within 20–30 minutes) to prevent pressure necrosis, pain, and compromised ventilatory mechanics. Hemodynamic resuscitation maintains mean arterial pressure (MAP target 85–90 mmHg) to ensure adequate spinal cord perfusion.'
    },
    {
      'subtitulo': 'Clinical Decision Rules: NEXUS vs. Canadian C-Spine Rule',
      'texto': 'Cervical spine clearance without imaging is permitted only when validated criteria are fully met: 1) NEXUS Criteria requires the absence of all five criteria: no midline cervical spine tenderness, no focal neurological deficit, normal level of alertness (GCS 15), no evidence of intoxication, and no painful distracting injury; 2) Canadian C-Spine Rule (CCSR) evaluates high-risk factors (age >=65, dangerous mechanism, paresthesias in extremities), low-risk factors permitting safe range of motion assessment (simple rear-end collision, ambulatory at any time, delayed onset of neck pain, absence of midline tenderness), and active rotation (45° left and right). If any high-risk factor is present or the patient cannot actively rotate their neck 45° bilaterally, CT imaging is mandatory.'
    },
    {
      'subtitulo': 'Imaging Algorithms: Whole-Spine CT and MRI',
      'texto': 'Multi-detector computed tomography (MDCT) with coronal and sagittal reconstructions from occiput to sacrum is the definitive gold standard for all high-energy trauma, obtunded patients, and symptomatic individuals. Plain radiographs have been entirely superseded by CT due to high miss rates (>50% of cervical fractures). In patients with high-energy cervical trauma (fractures involving the transverse foramen, facet subluxation/dislocation, high cervical C1–C3 fractures), CT Angiography (CTA) of the neck is mandatory to screen for Blunt Cerebrovascular Injury (BCVI) of the vertebral and carotid arteries (Denver criteria). MRI is indicated within 24–48 hours to evaluate spinal cord injury, ligamentous disruption, and epidural hematoma.'
    },
    {
      'subtitulo': 'Non-Contiguous Injuries and Associated Visceral Trauma',
      'texto': 'A vital rule in polytrauma is that finding one spinal fracture warrants full whole-spine imaging: non-contiguous secondary spinal fractures occur in 10% to 15% of patients. Furthermore, specific spinal fracture patterns correlate with major visceral trauma: upper thoracic fractures associate with tracheobronchial, aortic, and sternal fractures; thoracolumbar Chance flexion-distraction fractures strongly correlate with intra-abdominal hollow viscus bowel perforations (seatbelt sign); and sacral/pelvic fractures associate with retroperitoneal hemorrhage and genitourinary bladder/urethral tears.'
    },
    {
      'subtitulo': 'Neurological Assessment and Secondary Survey',
      'texto': 'Once vital stability is achieved, a complete secondary survey includes rolling the patient (log-roll technique maintaining strict spinal alignment) to palpate the entire spinous process chain for focal tenderness, step-offs, and hematomas. Perform standardized ASIA/ISNCSCI neurological examination: test 10 motor key muscles, 28 sensory dermatomes, and digital rectal examination (evaluating deep anal pressure, voluntary sphincter tone, and the bulbocavernosus reflex to assess for spinal shock vs. complete cord transection).'
    }
  ],
  'aplicacao_clinica': 'In the trauma resuscitation bay, never remove the cervical collar in an obtunded, intubated, or intoxicated patient based solely on normal plain X-rays; obtain a thin-cut whole-spine CT. If a patient with a flexion-distraction Chance fracture of L1 presents with abdominal wall bruising (seatbelt sign), immediately request a contrast-enhanced abdominal CT and consult trauma surgery to rule out occult small bowel perforation. In a patient with a C6–C7 unilateral locked facet and transverse foramen fracture, perform immediate neck CT angiography to evaluate vertebral artery thrombosis or dissection before attempting closed reduction or open operative stabilization. Always remove the rigid spinal backboard immediately upon arrival in the emergency department to prevent severe sacral and occipital pressure ulcers. Maintain mean arterial pressure (MAP) above 85 mmHg with crystalloids and vasopressors (norepinephrine) to prevent secondary ischemic spinal cord injury.',
  'mensagem_central': 'Spine evaluation in polytrauma requires strict adherence to ATLS resuscitation priorities. Restrict spinal motion without prolonging backboard immobilization, apply NEXUS/Canadian rules only in awake and non-intoxicated patients, obtain thin-cut whole-spine MDCT for high-energy trauma, and systematically rule out non-contiguous spinal fractures (10–15%), blunt cerebrovascular injuries (BCVI), and associated occult visceral trauma.',
  'por_que_importa': 'In the polytrauma patient, spinal fractures and cord injury are frequently asymptomatic initially, masked by head injury, severe intoxication, or painful distracting limb trauma, and can catastrophically worsen during careless intubation or transfers. This chapter provides a unified management framework: protecting the spine from the airway stage, establishing baseline ASIA neurological status, using whole-spine CT, screening for vertebral artery dissection, and identifying non-contiguous injuries before permanent harm occurs.',
  'decs': ['Multiple Trauma', 'Spine', 'Spinal Cord Injuries', 'Spinal Fractures', 'Advanced Trauma Life Support Care', 'Tomography, X-Ray Computed', 'Magnetic Resonance Imaging', 'Emergency Medical Services'],
  'mesh': ['Multiple Trauma', 'Spine', 'Spinal Cord Injuries', 'Spinal Fractures', 'Advanced Trauma Life Support Care', 'Tomography, X-Ray Computed', 'Magnetic Resonance Imaging', 'Emergency Medical Services'],
  'palavras_chave_livres': ['ATLS spine evaluation', 'NEXUS criteria', 'Canadian C-spine rule', 'Whole-spine CT', 'Blunt cerebrovascular injury', 'Non-contiguous spine fractures', 'Spinal motion restriction'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'ATLS Priorities and Backboard Removal',
      'texto': 'Spinal protection accompanies Airway management with manual in-line stabilization (MILS). Rigid spine boards must be removed within 20–30 minutes to prevent debilitating pressure necrosis and respiratory compromise, replacing them with a firm stretcher and cervical collar.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Whole-Spine CT is Mandatory for High-Energy Trauma',
      'texto': 'Plain X-rays miss over 50% of cervical fractures in trauma. In all high-energy, symptomatic, or obtunded polytrauma patients, obtain thin-cut multi-detector whole-spine CT from occiput to sacrum to identify fractures and rule out non-contiguous injuries (10–15%).'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Screen for Vertebral Artery Injury (BCVI)',
      'texto': 'In cervical fractures extending into the transverse foramen, facet dislocations, or upper cervical injuries, immediately obtain CT Angiography of the neck (Denver criteria) to diagnose and treat vertebral artery dissection or thrombosis before stroke occurs.'
    }
  ],
  'referencias': pt['18']['referencias'],
  'seo': {
    'titulo': 'Spine Evaluation in the Polytrauma Patient | Spine Surgery Treatise',
    'meta_descricao': 'Complete ATLS protocol for spine trauma: motion restriction, NEXUS/Canadian rules, whole-spine CT, MRI, vertebral artery dissection (BCVI), and ASIA scoring.',
    'resumo_chamada': 'Master the evaluation of the spine in polytrauma: ATLS airway management, clinical clearance rules, whole-spine CT algorithms, and non-contiguous injury detection.',
    'slug': 'spine-evaluation-in-the-polytrauma-patient'
  }
}

es['18'] = {
  'numero': 18,
  'titulo': 'Evaluación de la Columna en el Paciente Politraumatizado',
  'secao': '',
  'autores': pt['18']['autores'],
  'contexto': 'La evaluación y el manejo inicial de la columna vertebral en el paciente politraumatizado deben integrarse estrictamente en las prioridades de reanimación del Soporte Vital Avanzado en Trauma (ATLS: ABCDE: Vía aérea con control cervical, Ventilación, Circulación con control de hemorragias, Déficit neurológico y Exposición). En traumatismos de alta energía (accidentes de tránsito, caídas de altura, aplastamientos), las fracturas de columna, las lesiones multinivel no contiguas (presentes en el 10% al 15% de los casos) y el traumatismo raquimedular se encuentran frecuentemente enmascarados por traumatismo craneoencefálico (TCE), intoxicación por alcohol/drogas, intubación orotraqueal o lesiones dolorosas distractoras graves. La restricción del movimiento espinal —mediante estabilización manual en línea (MILS) durante la intubación y giros en bloque coordinados, evitando la permanencia prolongada en tablas espinales rígidas que provocan úlceras por presión e insuficiencia ventilatoria en menos de 2 horas— es crítica para prevenir el daño neurológico secundario. Las reglas clínicas validadas (criterios NEXUS y Regla Canadiense de Columna Cervical) permiten descartar lesión cervical sin imágenes exclusivamente en pacientes conscientes, alertas, no intoxicados y asintomáticos. En pacientes con alteración de conciencia o traumatismo de alta energía, la TC multidetector de columna completa desde el occipucio hasta el sacro es el estándar de oro mandatario. La resonancia magnética (RM) evalúa la contusión medular, los hematomas epidurales y la rotura del complejo ligamentario posterior.',
  'objetivo': 'Presentar el protocolo estructurado para la evaluación, despeje y estabilización de la columna vertebral en el paciente politraumatizado según los principios del ATLS. Al finalizar, el lector deberá realizar la restricción de movimiento espinal y el manejo de la vía aérea de forma segura; aplicar e interpretar los criterios NEXUS y la Regla Canadiense para el despeje clínico cervical; seleccionar e interpretar la TC de columna completa y la RM; identificar lesiones espinales no contiguas y lesiones cerebrovasculares cerradas (BCVI); y realizar la evaluación neurológica estandarizada con la escala ASIA.',
  'conteudo_principal': [
    {
      'subtitulo': 'Prioridades del trauma y restricción del movimiento espinal',
      'texto': 'La evaluación primaria prioriza la vida sobre la columna. La columna cervical se protege de inmediato durante el manejo de la vía aérea mediante estabilización manual en línea (MILS) utilizando videolaringoscopia. La restricción del movimiento espinal con collarín rígido y camilla firme sustituye la tabla espinal rígida, la cual debe retirarse a la llegada al box de reanimación (dentro de los primeros 20–30 minutos) para prevenir úlceras por decúbito y restricción ventilatoria. La reanimación hemodinámica busca mantener la presión arterial media (PAM objetivo 85–90 mmHg) para asegurar la perfusión medular.'
    },
    {
      'subtitulo': 'Reglas de despeje clínico: Criterios NEXUS y Regla Canadiense',
      'texto': 'El despeje cervical sin radiología se autoriza solo si se cumplen todos los requisitos: 1) Criterios NEXUS: ausencia de dolor en la línea media cervical, ausencia de déficit neurológico focal, nivel de conciencia normal (Glasgow 15), ausencia de intoxicación y ausencia de lesiones dolorosas distractoras; 2) Regla Canadiense de Columna Cervical (CCSR): evalúa factores de alto riesgo (edad >=65 años, mecanismo peligroso, parestesias en extremidades), factores de bajo riesgo que permiten valorar movilidad (colisión trasera simple, deambulación, dolor tardío, ausencia de dolor en línea media) y rotación activa del cuello 45° a derecha e izquierda. Si existe algún factor de alto riesgo o incapacidad de rotación activa, la TC es obligatoria.'
    },
    {
      'subtitulo': 'Algoritmos de imagen: TC de columna completa y RM',
      'texto': 'La tomografía computarizada multidetector (TCMD) con reconstrucciones sagitales y coronales de columna completa (occipucio a sacro) es el estándar de oro en todo paciente politraumatizado grave o sintomático. Las radiografías simples están obsoletas en el trauma mayor por su baja sensibilidad (>50% de fracturas cervicales inadvertidas). En fracturas cervicales con extensión al foramen transverso, luxaciones facetarias o fracturas de C1–C3, la Angio-TC de cuello es obligatoria para descartar Lesión Cerebrovascular Cerrada (BCVI/criterios de Denver) de arterias vertebrales y carótidas. La RM se indica en las primeras 24–48 horas para valorar lesión medular y ligamentaria.'
    },
    {
      'subtitulo': 'Lesiones no contiguas y traumatismos viscerales asociados',
      'texto': 'El hallazgo de una fractura vertebral exige estudiar toda la columna: del 10% al 15% de los pacientes presentan fracturas no contiguas en otro segmento. Asimismo, ciertos patrones de fractura se asocian a lesiones viscerales: fracturas torácicas altas con rotura aórtica o traqueobronquial; fracturas de Chance toracolumbares por flexión-distracción con perforación de víscera hueca abdominal (signo del cinturón de seguridad); y fracturas sacras con hemorragia retroperitoneal y rotura vesicouretral.'
    },
    {
      'subtitulo': 'Examen neurológico estandarizado y evaluación secundaria',
      'texto': 'Tras estabilizar los signos vitales, la evaluación secundaria incluye el giro en bloque para palpar minuciosamente las apófisis espinosas buscando dolor focal, escalones óseos y hematomas. Se realiza la exploración neurológica estandarizada ASIA/ISNCSCI: 10 grupos musculares clave, 28 dermatomas sensitivos bilaterales y tacto rectal digital para determinar preservación sacra (presión anal profunda y contracción anal voluntaria, evaluando shock medular vs. lesión medular completa).'
    }
  ],
  'aplicacao_clinica': 'En la sala de reanimación, nunca retire el collarín cervical en un paciente comatoso, intubado o con dolor distractor basado en radiografías simples normales; solicite TC helicoidal de columna completa. Si un paciente presenta una fractura de Chance en L1 con hematoma en pared abdominal (signo del cinturón), solicite de inmediato TC abdominal contrastada y valoración por cirugía general para descartar perforación intestinal oculta. En luxaciones facetarias cervicales con trazo en foramen transverso, realice Angio-TC de cuello para descartar disección o trombosis de la arteria vertebral antes de maniobras de reducción o fijación quirúrgica. Retire siempre la tabla rígida espinal de inmediato para evitar úlceras por presión sacras y occipitales. Mantenga la PAM >85 mmHg con noradrenalina y cristaloides para prevenir la isquemia medular secundaria.',
  'mensagem_central': 'La evaluación de la columna en el paciente politraumatizado exige subordinarse a las prioridades del ATLS. La restricción del movimiento espinal debe mantenerse sin prolongar innecesariamente la tabla rígida; el despeje clínico (NEXUS/Regla Canadiense) solo es válido en pacientes alertas y asintomáticos; y la TC multidetector de columna completa es indispensable para diagnosticar fracturas ocultas, lesiones no contiguas (10–15%) y guiar el manejo quirúrgico.',
  'por_que_importa': 'En el paciente politraumatizado, las fracturas vertebrales y el daño medular pueden pasar desapercibidos inicialmente debido al coma, la intoxicación o el dolor severo de otras lesiones, pudiendo agravarse durante la intubación o el traslado. Este capítulo enseña a proteger la columna desde la vía aérea, establecer la línea de base neurológica ASIA, utilizar la TC de columna completa, pesquisar disecciones de la arteria vertebral y detectar fracturas multinivel antes de que ocurran daños neurológicos irreversibles.',
  'decs': ['Traumatismo Múltiple', 'Columna Vertebral', 'Traumatismos de la Médula Espinal', 'Fracturas de la Columna Vertebral', 'Atención de Soporte Vital Avanzado en Trauma', 'Tomografía Computarizada por Rayos X', 'Imagen por Resonancia Magnética', 'Servicios Médicos de Urgencia'],
  'mesh': ['Multiple Trauma', 'Spine', 'Spinal Cord Injuries', 'Spinal Fractures', 'Advanced Trauma Life Support Care', 'Tomography, X-Ray Computed', 'Magnetic Resonance Imaging', 'Emergency Medical Services'],
  'palavras_chave_livres': ['Evaluación espinal ATLS', 'Criterios NEXUS', 'Regla Canadiense de Columna Cervical', 'TC de columna completa', 'Lesión cerebrovascular cerrada', 'Fracturas no contiguas', 'Restricción del movimiento espinal'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'Prioridades ATLS y retiro de la tabla espinal',
      'texto': 'El control de la columna cervical acompaña a la vía aérea mediante estabilización manual en línea (MILS). La tabla rígida debe retirarse en los primeros 20–30 minutos para evitar úlceras por decúbito e insuficiencia respiratoria, manteniendo al paciente en camilla firme con collarín.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'TC de columna completa en trauma mayor',
      'texto': 'Las radiografías simples omiten más del 50% de las fracturas cervicales en trauma grave. En pacientes politraumatizados o con alteración de conciencia, solicite TC multidetector de columna completa (occipucio a sacro) para descartar fracturas y lesiones multinivel no contiguas (10–15%).'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Angio-TC en fracturas del foramen transverso',
      'texto': 'Ante fracturas cervicales que comprometan el foramen transverso, luxaciones facetarias o fracturas de C1–C3, solicite Angio-TC de cuello (criterios de Denver) para diagnosticar trombosis o disección de la arteria vertebral antes de que se produzca un ictus vertebrobasilar.'
    }
  ],
  'referencias': pt['18']['referencias'],
  'seo': {
    'titulo': 'Evaluación de la Columna en Politraumatizados | Tratado de Columna',
    'meta_descricao': 'Protocolo ATLS de evaluación raquídea en politrauma: restricción de movimiento, criterios NEXUS/Regla Canadiense, TC completa, Angio-TC y escala ASIA.',
    'resumo_chamada': 'Domine la evaluación de la columna en politrauma: manejo de la vía aérea, despeje clínico cervical, algoritmos de TC completa y detección de lesiones asociadas.',
    'slug': 'evaluacion-de-la-columna-en-el-paciente-politraumatizado'
  }
}

# ==========================================
# CHAPTER 19
# ==========================================
en['19'] = {
  'numero': 19,
  'titulo': 'Spinal Cord Injury and Traumatic Myelopathy',
  'secao': '',
  'autores': pt['19']['autores'],
  'contexto': 'Traumatic spinal cord injury (SCI) represents a devastating medical and surgical emergency combining mechanical disruption of neural pathways, acute vertebral instability, and profound systemic autonomic dysregulation. Pathophysiologically, SCI evolves in a two-phase cascade: the primary injury consists of immediate mechanical tissue disruption, axonal shearing, petechial microvascular hemorrhage, and localized ischemia at the moment of impact; this triggers a destructive secondary injury cascade evolving over subsequent hours and days, characterized by extensive microvascular vasospasm, blood-spinal cord barrier breakdown, cytotoxic and vasogenic edema, glutamate excitotoxicity, free radical lipid peroxidation, neuroinflammation, oligodendrocyte apoptosis, and expanding secondary ischemia. Clinical presentation ranges from complete transection (ASIA A) to incomplete spinal cord syndromes: Central Cord syndrome (greater motor weakness in upper than lower extremities), Brown-Séquard syndrome (ipsilateral motor/proprioceptive loss with contralateral pain/temperature loss), Anterior Cord syndrome (loss of motor and spinothalamic function with preserved dorsal column proprioception), Conus Medullaris syndrome, and Cauda Equina syndrome. Management requires immediate systemic neuroprotection: maintaining Mean Arterial Pressure (MAP >= 85–90 mmHg for 5–7 days), avoiding hypoxia (PaO2 > 60 mmHg), early surgical decompression and realignment (<24 hours, ideally <12 hours according to the STASCIS trial), and preventing systemic complications (neurogenic shock, autonomic dysreflexia, venous thromboembolism, neurogenic bladder/bowel, and pressure ulcers).',
  'objetivo': 'To present current evidence-based principles for the evaluation, neuroprotection, surgical decompression, and comprehensive acute management of traumatic spinal cord injury. The reader should be able to understand the primary mechanical insult and secondary biochemical injury cascades; perform and document standardized neurological examinations according to ISNCSCI/ASIA standards; differentiate incomplete cord syndromes; execute hemodynamic optimization protocols (MAP targets); select candidates for urgent surgical decompression; and manage acute systemic complications and neurogenic shock.',
  'conteudo_principal': [
    {
      'subtitulo': 'Primary Injury and the Secondary Pathophysiological Cascade',
      'texto': 'Primary injury occurs at impact via contusion, compression, distraction, or laceration of neural tissue and microvasculature. Secondary injury develops over hours to weeks: 1) Vascular phase: petechial central gray matter hemorrhage, loss of autoregulation, vasospasm, and microthrombosis causing expanding ischemia; 2) Cellular phase: energy failure (ATP depletion), massive glutamate release, pathological intracellular calcium influx, and free radical generation (lipid peroxidation); 3) Inflammatory and apoptotic phase: neutrophil and macrophage infiltration, cytokine release (TNF-alpha, IL-1beta), and programmed cell death (apoptosis) of oligodendrocytes causing post-traumatic demyelination and secondary cord cavitation.'
    },
    {
      'subtitulo': 'Standardized Neurological Assessment (ISNCSCI/ASIA)',
      'texto': 'Baseline examination must follow the International Standards for Neurological Classification of Spinal Cord Injury (ISNCSCI) as soon as the patient is alert and resuscitated: 1) Motor examination: test 10 key muscle groups bilaterally (MRC scale 0–5, total score 100); 2) Sensory examination: test 28 dermatomes bilaterally for pinprick and light touch (total score 112 each); 3) Anorectal examination: assess voluntary anal contraction (VAC, S4–S5 motor) and deep anal pressure (DAP, S4–S5 sensory). Define the Motor Level, Sensory Level, and Neurological Level of Injury (NLI). Classify using the ASIA Impairment Scale (AIS): AIS A (Complete, no sacral sparing S4–S5); AIS B (Sensory Incomplete, sensory but no motor preserved below NLI including S4–S5); AIS C (Motor Incomplete, more than half of key muscles below NLI have muscle grade <3); AIS D (Motor Incomplete, at least half of key muscles below NLI have muscle grade >=3); AIS E (Normal).'
    },
    {
      'subtitulo': 'Incomplete Cord Syndromes and Neurogenic Shock',
      'texto': 'Incomplete syndromes feature specific tract injury patterns: 1) Central Cord Syndrome: hyperextension injury in stenotic cervical spines, causing disproportionately greater upper extremity weakness (distal hand intrinsics) than lower extremity impairment, with variable sensory loss; 2) Brown-Séquard Syndrome: hemisection from penetrating or burst trauma, causing ipsilateral loss of motor function and proprioception/vibration with contralateral loss of pain and temperature 1–2 segments below injury; 3) Anterior Cord Syndrome: flexion-compression injury with anterior spinal artery occlusion, causing complete bilateral motor paralysis and loss of pain/temperature with preserved dorsal column proprioception (worst recovery prognosis). Neurogenic shock (cervical/high-thoracic T6 and above injury) is characterized by the triad of hypotension, bradycardia, and peripheral vasodilation due to loss of sympathetic tone, distinct from spinal shock (transient loss of all spinal reflex activity and flaccidity below injury level, ending when the bulbocavernosus reflex returns).'
    },
    {
      'subtitulo': 'Hemodynamic Neuroprotection and Surgical Timing (STASCIS)',
      'texto': 'Hemodynamic management aims to prevent secondary ischemic cord injury: maintain Mean Arterial Pressure (MAP) between 85 and 90 mmHg for 5 to 7 days in the ICU using volume resuscitation and vasopressors with combined inotropic and vasoconstrictive properties (norepinephrine, dopamine, or epinephrine; avoid pure vasoconstrictors like phenylephrine that worsen bradycardia). Surgical decompression and rigid stabilization within 24 hours (and ideally within 12 hours) of injury—supported by the landmark STASCIS prospective trial and subsequent pooled analyses—significantly increases the likelihood of >=2 AIS grade neurological recovery compared to delayed decompression (>24 hours).'
    },
    {
      'subtitulo': 'Pharmacotherapy, Complications, and Acute Rehabilitation',
      'texto': 'High-dose methylprednisolone (NASCIS protocol) remains highly controversial; modern international guidelines (AANS/CNS and AO Spine) consider it a treatment option rather than a standard of care due to high risks of severe pneumonia, sepsis, GI bleeding, and death. Systemic management includes: early venous thromboembolism prophylaxis (LMWH started 24–48 hours post-injury/surgery and mechanical compression), aggressive pulmonary toilet and mechanical ventilation weaning, clean intermittent catheterization to avoid bladder distension and dysreflexia, bowel protocols, and pressure-relieving air mattresses.'
    }
  ],
  'aplicacao_clinica': 'In the emergency department, when a patient presents with cervical trauma and acute quadriparesis, immediately obtain emergent whole-spine CT and urgent MRI to demonstrate compressive bone fragments, disc herniation, or facet subluxation. Simultaneously initiate invasive arterial line monitoring and titrate norepinephrine to maintain MAP between 85 and 90 mmHg. In patients with bilateral facet dislocations, prompt closed skeletal traction with Gardner-Wells tongs (under conscious sedation with continuous neurological monitoring) or emergent operative open reduction within hours restores canal dimensions and cord perfusion. Transfer the patient to the operating room immediately for definitive anterior, posterior, or circumferential decompression and instrumented fusion (<12–24 hours). In patients with high lesions (T6 and above), remain vigilant for autonomic dysreflexia (paroxysmal severe hypertension, throbbing headache, bradycardia, profuse sweating above lesion triggered by bladder distension or fecal impaction), treating it by sitting the patient upright and rapidly emptying the bladder or bowel.',
  'mensagem_central': 'Traumatic spinal cord injury management requires rapid, aggressive neuroprotection to arrest the secondary injury cascade. Integrating emergent surgical decompression and spinal stabilization within 12 to 24 hours (STASCIS), maintaining intensive hemodynamic augmentation (MAP >= 85–90 mmHg for 5–7 days), performing rigorous ISNCSCI/ASIA evaluations, and executing systematic multi-organ intensive care are the cornerstones of maximizing neurological recovery.',
  'por_que_importa': 'Primary mechanical damage occurs in milliseconds, but the biological fate of marginal, penumbral spinal cord axons is decided in the subsequent hours and days. Overlooking hypotension, delaying operative decompression beyond 24 hours, or failing to differentiate neurogenic shock from hypovolemia leads to permanent paralysis. This chapter equips the clinician with actionable neuroprotective protocols, standardized classification tools, and surgical timing principles to optimize recovery and prevent secondary systemic morbidity.',
  'decs': ['Spinal Cord Injuries', 'Trauma, Nervous System', 'Paraplegia', 'Quadriplegia', 'Neuroprotection', 'Spinal Fusion', 'Intensive Care Units', 'Decompression, Surgical'],
  'mesh': ['Spinal Cord Injuries', 'Trauma, Nervous System', 'Paraplegia', 'Quadriplegia', 'Neuroprotection', 'Spinal Fusion', 'Intensive Care Units', 'Decompression, Surgical'],
  'palavras_chave_livres': ['STASCIS trial', 'MAP augmentation 85-90 mmHg', 'ASIA impairment scale', 'Neurogenic shock vs. spinal shock', 'Central cord syndrome', 'Secondary injury cascade', 'Autonomic dysreflexia'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'The Two Phases of Spinal Cord Injury',
      'texto': 'Primary mechanical disruption triggers a secondary biochemical cascade (ischemia, excitotoxicity, calcium influx, apoptosis) expanding over hours and days. Intensive neuroprotection aims to rescue penumbral axons through early decompression and perfusion optimization.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Early Surgical Decompression (<24h, Ideally <12h)',
      'texto': 'The STASCIS prospective trial demonstrated that early surgical decompression within 24 hours (and ideally <12 hours) significantly improves neurological recovery (>=2 AIS grade improvement) compared to delayed surgery in acute spinal cord injury.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Maintain MAP 85–90 mmHg for 5–7 Days',
      'texto': 'Autoregulation of spinal cord blood flow is lost after trauma. Maintain Mean Arterial Pressure (MAP) >= 85–90 mmHg for 5 to 7 days in the ICU using volume and norepinephrine to prevent secondary spinal cord ischemia. Recognize neurogenic shock (hypotension + bradycardia).'
    }
  ],
  'referencias': pt['19']['referencias'],
  'seo': {
    'titulo': 'Spinal Cord Injury and Traumatic Myelopathy | Spine Surgery Treatise',
    'meta_descricao': 'Comprehensive guide to traumatic spinal cord injury: pathophysiology, ASIA/ISNCSCI scale, STASCIS early decompression (<24h), MAP 85-90 targets, and neurogenic shock.',
    'resumo_chamada': 'Master the emergency management of traumatic spinal cord injury: secondary injury cascades, ASIA grading, hemodynamic neuroprotection, and early surgical decompression.',
    'slug': 'spinal-cord-injury-and-traumatic-myelopathy'
  }
}

es['19'] = {
  'numero': 19,
  'titulo': 'Trauma Raquimedular y Mielopatía Traumática',
  'secao': '',
  'autores': pt['19']['autores'],
  'contexto': 'El traumatismo raquimedular (TRM) es una emergencia médica y quirúrgica devastadora que combina daño mecánico de las vías neurales, inestabilidad vertebral aguda y una profunda disregulación autonómica sistémica. Fisiopatológicamente, el TRM se desarrolla en una cascada bifásica: la lesión primaria corresponde a la agresión mecánica inicial (contusión, compresión, cizallamiento axonal, disrupción tisular y microhemorragia); esto desencadena una cascada destructiva de lesión secundaria que progresa en horas y días, caracterizada por vasoespasmo microvascular, edema citotóxico y vasogénico, excitotoxicidad por glutamato, peroxidación lipídica por radicales libres, neuroinflamación y apoptosis de oligodendrocitos con desmielinización secundaria y necrosis. La presentación clínica abarca desde la sección medular completa (ASIA A) hasta los síndromes medulares incompletos: Síndrome Medular Central (mayor debilidad en miembros superiores que inferiores), Síndrome de Brown-Séquard (pérdida motora y propioceptiva ipsilateral con pérdida contralateral de termoalgesia), Síndrome Medular Anterior (paraplejía motora y termoalgésica con respeto de cordones posteriores), Síndrome del Cono Medular y Síndrome de Cauda Equina. El tratamiento exige neuroprotección sistémica inmediata: optimización hemodinámica (Presión Arterial Media [PAM] >= 85–90 mmHg durante 5–7 días), normoxemia (PaO2 > 60 mmHg), descompresión quirúrgica y estabilización temprana (<24 horas, idealmente <12 horas según el estudio STASCIS) y prevención de complicaciones sistémicas (shock neurogénico, disreflexia autonómica, trombosis venosa profunda, úlceras por presión y vejiga neurogénica).',
  'objetivo': 'Presentar los principios actuales de evaluación, neuroprotección, descompresión quirúrgica y manejo integral del traumatismo raquimedular. Al finalizar, el lector deberá comprender la lesión primaria y la cascada bioquímica secundaria; realizar y documentar el examen neurológico según los estándares ISNCSCI y la escala de discapacidad ASIA (AIS); reconocer los síndromes incompletos; ejecutar protocolos de optimización hemodinámica (PAM objetivo); seleccionar candidatos para descompresión quirúrgica urgente; y manejar las complicaciones sistémicas agudas y el shock neurogénico.',
  'conteudo_principal': [
    {
      'subtitulo': 'Lesión primaria y cascada fisiopatológica secundaria',
      'texto': 'La lesión primaria ocurre en el impacto por contusión, compresión, elongación o cizallamiento de neuronas, glía y microvasos. La lesión secundaria se desarrolla en horas y semanas: 1) Fase vascular: hemorragia en sustancia gris central, pérdida de autorregulación, vasoespasmo y trombosis microvascular con isquemia expansiva; 2) Fase celular: fallo energético (depleción de ATP), liberación masiva de glutamato, sobrecarga intracelular de calcio y estrés oxidativo con peroxidación lipídica; 3) Fase inflamatoria y apoptótica: infiltración leucocitaria, liberación de citoquinas inflamatorias (TNF-alfa, IL-1beta) y muerte celular programada (apoptosis) de oligodendrocitos con desmielinización progresiva.'
    },
    {
      'subtitulo': 'Evaluación neurológica estandarizada (ISNCSCI/ASIA)',
      'texto': 'El examen basal debe seguir los estándares ISNCSCI en cuanto el paciente esté consciente y reanimado: 1) Examen motor: 10 grupos musculares clave bilaterales (escala MRC 0–5, puntuación total 100); 2) Examen sensitivo: 28 dermatomas bilaterales para tacto fino y pinchazo (puntuación total 112 cada uno); 3) Examen anorrectal: contracción anal voluntaria (VAC, motor S4–S5) y presión anal profunda (DAP, sensitivo S4–S5). Se definen los niveles motor, sensitivo y el Nivel Neurológico de Lesión (NNL). Se clasifica mediante la Escala de Discapacidad ASIA (AIS): AIS A (Completa, sin preservación sacra S4–S5); AIS B (Incompleta sensitiva, sensibilidad preservada sin función motora bajo el NNL incluyendo S4–S5); AIS C (Incompleta motora, más de la mitad de músculos clave bajo el NNL tienen balance <3); AIS D (Incompleta motora, al menos la mitad de músculos clave bajo el NNL tienen balance >=3); AIS E (Normal).'
    },
    {
      'subtitulo': 'Síndromes incompletos, shock neurogénico y shock medular',
      'texto': 'Los síndromes incompletos presentan patrones específicos: 1) Síndrome Medular Central: por hiperextensión en canales cervicales estrechos, causando mayor debilidad motora en manos y brazos que en piernas; 2) Síndrome de Brown-Séquard: hemisección medular con paresia y pérdida propioceptiva ipsilateral combinada con pérdida de termoalgesia contralateral; 3) Síndrome Medular Anterior: compresión anterior o trombosis de la arteria espinal anterior con paraplejía motora y anestesia termoalgésica completa pero con propiocepción conservada (peor pronóstico). El shock neurogénico (lesiones cervicales o torácicas altas T6 y superiores) se manifiesta por la tríada de hipotensión, bradicardia y vasodilatación periférica por denervación simpática. Difiere del shock medular (pérdida transitoria de todos los reflejos y flacidez bajo la lesión, que concluye al reaparecer el reflejo bulbocavernoso).'
    },
    {
      'subtitulo': 'Neuroprotección hemodinámica y tiempo quirúrgico (STASCIS)',
      'texto': 'El soporte hemodinámico busca prevenir la isquemia medular secundaria: mantener la Presión Arterial Media (PAM) entre 85 y 90 mmHg durante 5 a 7 días en UCI mediante fluidoterapia y vasopresores con acción inotrópica y vasoconstrictora (noradrenalina o dopamina; evitar fenilefrina pura que agrava la bradicardia). La descompresión quirúrgica y estabilización rígida temprana en las primeras 24 horas (e idealmente <12 horas), avalada por el estudio prospectivo STASCIS, incrementa significativamente la probabilidad de recuperación funcional en >=2 grados AIS frente a la cirugía tardía (>24 horas).'
    },
    {
      'subtitulo': 'Farmacoterapia, complicaciones y rehabilitación aguda',
      'texto': 'El uso de metilprednisolona en dosis altas (protocolo NASCIS) continúa siendo muy controvertido; las guías internacionales contemporáneas (AANS/CNS y AO Spine) la consideran una opción y no un estándar debido a sus riesgos de neumonía grave, sepsis y hemorragia digestiva. El manejo intensivo incluye: tromboprofilaxis precoz (HBPM iniciada a las 24–48 horas y compresión mecánica), kinesiterapia respiratoria agresiva, cateterismo vesical intermitente para prevenir sobredistensión vesical y disreflexia autonómica, protocolo intestinal y colchón antiescaras.'
    }
  ],
  'aplicacao_clinica': 'En urgencias, ante un paciente con traumatismo cervical y cuadriparesia aguda, solicite de inmediato TC de columna completa y RM urgente para evaluar compresión ósea, hernias discales o luxaciones facetarias. Simultáneamente, canalice una línea arterial e inicie infusión de noradrenalina para sostener la PAM entre 85 y 90 mmHg. En luxaciones facetarias bilaterales, la reducción cerrada inmediata con halo-tracción (con paciente consciente y monitorización seriada) o la reducción quirúrgica abierta de urgencia en quirófano descomprime el canal raquídeo en pocas horas. Traslade al paciente a quirófano para descompresión y fijación rígida urgente (<12–24 horas). En lesiones por encima de T6, vigile la aparición de disreflexia autonómica (hipertensión arterial paroxística grave, cefalea pulsátil, bradicardia y sudoración profusa desencadenadas por globo vesical o fecaloma), tratándola sentando al paciente e instalando de inmediato una sonda vesical para vaciar la vejiga.',
  'mensagem_central': 'El tratamiento del trauma raquimedular exige una neuroprotección activa inmediata para frenar la cascada de daño secundario. La descompresión y estabilización quirúrgica temprana (<12–24 horas, STASCIS), la optimización hemodinámica intensiva (PAM >= 85–90 mmHg durante 5–7 días), el examen neurológico seriado ISNCSCI/ASIA y el manejo intensivo multidisciplinario son los pilares indispensables para maximizar la recuperación neurológica.',
  'por_que_importa': 'El daño mecánico inicial ocurre en milisegundos, pero la viabilidad de los axones medulares en la zona de penumbra se define en las horas y días siguientes. Tolerar hipotensión arterial, demorar la cirugía más de 24 horas o confundir el shock neurogénico con hipovolemia conduce a secuelas neurológicas permanentes. Este capítulo proporciona protocolos claros de neuroprotección, herramientas de clasificación estandarizada y pautas de tiempo quirúrgico para optimizar la recuperación funcional.',
  'decs': ['Traumatismos de la Médula Espinal', 'Traumatismos del Sistema Nervioso', 'Paraplejía', 'Cuadriplejía', 'Neuroprotección', 'Fusión Vertebral', 'Unidades de Cuidados Intensivos', 'Descompresión Quirúrgica'],
  'mesh': ['Spinal Cord Injuries', 'Trauma, Nervous System', 'Paraplegia', 'Quadriplegia', 'Neuroprotection', 'Spinal Fusion', 'Intensive Care Units', 'Decompression, Surgical'],
  'palavras_chave_livres': ['Estudio STASCIS', 'PAM objetivo 85-90 mmHg', 'Escala de discapacidad ASIA', 'Shock neurogénico vs. shock medular', 'Síndrome medular central', 'Cascada de lesión secundaria', 'Disreflexia autonómica'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'Las dos fases del daño medular',
      'texto': 'La disrupción mecánica primaria desencadena una cascada bioquímica secundaria (isquemia, excitotoxicidad, sobrecarga de calcio, apoptosis) que se expande en horas y días. La neuroprotección rescata axones en la zona de penumbra mediante descompresión y perfusión precoz.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Descompresión quirúrgica temprana (<24h, ideal <12h)',
      'texto': 'El estudio multicéntrico prospectivo STASCIS demostró que la descompresión y fijación quirúrgica en las primeras 24 horas (e idealmente <12 horas) duplica la probabilidad de mejoría neurológica en >=2 grados AIS frente a la cirugía tardía.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Mantener PAM 85–90 mmHg durante 5–7 días',
      'texto': 'La autorregulación vascular medular se pierde tras el trauma. Mantenga la Presión Arterial Media (PAM) >= 85–90 mmHg durante 5 a 7 días en UCI con fluidos y noradrenalina para evitar isquemia secundaria. Reconozca el shock neurogénico (hipotensión + bradicardia).'
    }
  ],
  'referencias': pt['19']['referencias'],
  'seo': {
    'titulo': 'Trauma Raquimedular y Mielopatía Traumática | Tratado de Columna',
    'meta_descricao': 'Guía integral de trauma raquimedular: fisiopatología, escala ASIA/ISNCSCI, descompresión temprana STASCIS (<24h), PAM 85-90 mmHg y shock neurogénico.',
    'resumo_chamada': 'Domine el manejo del traumatismo raquimedular: cascadas de lesión secundaria, clasificación ASIA, neuroprotección hemodinámica y descompresión quirúrgica temprana.',
    'slug': 'trauma-raquimedular-y-mielopatia-traumatica'
  }
}

# ==========================================
# CHAPTER 20
# ==========================================
en['20'] = {
  'numero': 20,
  'titulo': 'Traumatic Injuries of the Upper Cervical Spine',
  'secao': '',
  'autores': pt['20']['autores'],
  'contexto': 'Traumatic injuries of the upper cervical spine encompass the craniocervical junction (occipital condyles, C0–C1 articulation) and the atlantoaxial complex (C1–C2), an anatomical region characterized by extraordinary multidirectional mobility, complex ligamentous stabilization (transverse atlantal ligament, alar ligaments, tectorial membrane, apical ligament), and extreme vulnerability due to the immediate proximity of the brainstem, high cervical spinal cord, cranial nerves (IX, X, XI, XII), and the vertebral arteries. The clinical and radiological spectrum includes occipital condyle fractures (Anderson-Montesano / Tuli classifications), atlanto-occipital dissociation (AOD / Traynelis classification), atlas (C1) fractures (Jefferson burst and arch fractures / Gehweiler classification), atlantoaxial rotatory fixation/subluxation (Fielding-Hawkins classification), odontoid (dens) fractures (Anderson-D\'Alonzo and Grauer classifications), and traumatic spondylolisthesis of the axis (Hangman\'s fracture / Effendi and Levine-Edwards classifications). Because high cervical injuries range from stable purely bony fractures amenable to rigid external immobilization (cervical collar or halo-vest) to catastrophic, highly unstable ligamentous disruptions demanding emergent surgical stabilization, evaluating true mechanical stability is paramount. Multi-detector CT provides definitive osseous detail and craniocervical alignment measurements (Basion-Dens Interval [BDI], Basion-Axial Interval [BAI], Powers ratio, Sun ratio, Condylar Gap), while MRI evaluates ligamentous integrity and neural compression. CT Angiography (CTA) is mandatory when fracture patterns involve the transverse foramen or craniocervical junction. Management must balance fracture morphology, ligamentous competence, patient age (young high-energy trauma vs. low-energy falls in osteoporotic elderly), and comorbidities.',
  'objetivo': 'To present an integrated, evidence-based approach to the diagnosis, classification, stability assessment, and management of upper cervical spine trauma (C0–C2). The reader should be able to identify injury mechanisms and clinical presentations; apply validated radiographic criteria and measurement lines (BDI, BAI, Powers ratio, Rule of Spence) for craniocervical instability; classify occipital condyle, atlas, odontoid, and Hangman fractures; select appropriate non-operative vs. surgical strategies (anterior odontoid screw, C1–C2 Harms/Magerl fusion, occipitocervical arthrodesis); and manage distinct considerations in pediatric and geriatric populations.',
  'conteudo_principal': [
    {
      'subtitulo': 'Biomechanical Stability and Diagnostic Imaging Principles',
      'texto': 'Upper cervical stability relies predominantly on dense ligamentous structures: the transverse atlantal ligament (TAL, the primary stabilizer of C1–C2 preventing anterior atlas translation), alar ligaments (limiting axial rotation and lateral bending), and the tectorial membrane. Multi-detector CT with coronal and sagittal reconstructions is the gold standard for bone detail. Craniocervical alignment is assessed via: 1) Basion-Dens Interval (BDI < 8.5 mm on CT in adults, <10 mm in children); 2) Basion-Axial Interval (BAI < 8.5 mm); 3) Powers ratio (Basion-posterior C1 arch distance divided by anterior C1 arch-opisthion distance, normal <0.9; >1.0 indicates anterior AOD); 4) Condylar Gap / Occipital Condyle-C1 Joint Space (normal <1.5–2.0 mm; >=2 mm indicates AOD). MRI is mandatory to directly assess TAL disruption, cord contusion, and epidural hematoma. CT Angiography evaluates vertebral artery injury.'
    },
    {
      'subtitulo': 'Occipital Condyle Fractures and Atlanto-Occipital Dissociation (AOD)',
      'texto': 'Occipital condyle fractures (Anderson-Montesano): Type I (comminuted impaction, stable); Type II (extension of basilar skull fracture, stable); Type III (avulsion fracture of condyle by alar ligament, potentially unstable). Atlanto-Occipital Dissociation (AOD) is a highly lethal injury resulting from complete disruption of the tectorial membrane and alar ligaments, classified by Traynelis into Type I (anterior displacement of occiput), Type II (longitudinal distraction), and Type III (posterior displacement). Traction is strictly contraindicated in AOD; definitive treatment is prompt rigid posterior Occipitocervical (C0–C2/C3) instrumented fusion.'
    },
    {
      'subtitulo': 'Atlas (C1) Fractures and the Rule of Spence',
      'texto': 'Atlas fractures (Gehweiler classification): Type I (anterior arch), Type II (posterior arch—most common, stable), Type III (anterior and posterior arch/Jefferson burst fracture), Type IV (lateral mass fracture), Type V (transverse process). The integrity of the Transverse Atlantal Ligament (TAL) is the primary determinant of stability: Dickman classification differentiates Type I (intrasubstance TAL ligamentous tear, poor non-operative healing, requires C1–C2 fusion) from Type II (TAL bony avulsion at tubercle of C1, can heal with rigid halo-vest immobilization). On coronal CT or open-mouth X-ray, the Rule of Spence states that lateral displacement of C1 lateral masses over C2 (overhang) totaling >=6.9 mm on X-ray or >=8.1 mm on CT indicates TAL rupture.'
    },
    {
      'subtitulo': 'Odontoid (Dens) Fractures',
      'texto': 'Odontoid fractures (Anderson and D\'Alonzo classification): Type I (avulsion of dens apex above TAL, rare, stable); Type II (fracture through the waist/base of the odontoid process, most common, high rate of nonunion/pseudarthrosis [30–60%] due to watershed blood supply and micro-motion); Type III (fracture extending into the cancellous body of C2, excellent healing rate with rigid collar/halo-vest >90%). For unstable Type II fractures in younger patients with intact transverse ligament, minimal comminution, and preserved anterior-inferior oblique fracture line, anterior single or dual odontoid screw fixation preserves C1–C2 rotational mobility. In elderly patients (>65–70 years) or comminuted/osteoporotic fractures, posterior C1–C2 Harms (C1 lateral mass - C2 pedicle/pars screw) instrumented fusion is the gold standard.'
    },
    {
      'subtitulo': 'Traumatic Spondylolisthesis of the Axis (Hangman\'s Fracture)',
      'texto': 'Hangman\'s fracture involves bilateral pars interarticularis fractures of C2 resulting from hyperextension-axial loading (or rebound flexion). Levine and Edwards classification guides management: Type I (undisplaced <3 mm translation, no angulation, stable, treated with rigid collar for 10–12 weeks); Type II (significant translation >3 mm and angulation due to disruption of C2–C3 disc and posterior longitudinal ligament [PLL], treated with halo-vest or anterior C2–C3 ACDF / posterior C2–C3 fusion); Type IIA (minimal translation, severe flexion-angulation due to oblique pars fracture and intact anterior longitudinal ligament [ALL], traction is strictly contraindicated as it causes catastrophic distraction; treated in extension with halo-vest or surgery); Type III (bilateral facet dislocation of C2 on C3 with pars fracture, highly unstable, requires open reduction and posterior C2–C3 or anterior-posterior fusion).'
    }
  ],
  'aplicacao_clinica': 'In the emergency room, evaluating upper cervical spine injuries requires recognizing that catastrophic ligamentous instability can exist with minimal initial neurological deficit. In suspected atlanto-occipital dissociation (AOD) on CT (BDI/BAI >8.5 mm or condyle-C1 joint space >=2 mm), immediately place the patient in a rigid collar and sandbags; never apply cervical skeletal traction, which can cause fatal brainstem transection. In Type II odontoid fractures, evaluate patient age and fracture morphology: in an active 35-year-old with a reducible Type II fracture and intact TAL, anterior odontoid screw fixation preserves 50% of cervical axial rotation; in an 80-year-old patient following a ground-level fall, avoiding halo-vest morbidity (which carries up to 40% mortality in the elderly from pneumonia and dysphagia) by utilizing an optimized rigid collar or posterior C1–C2 Harms instrumentation yields superior outcomes. In Hangman fractures, always differentiate Type II (traction allowed for reduction) from Type IIA (traction strictly contraindicated due to severe distraction across the C2–C3 disc space). In C1 lateral mass fractures or Jefferson fractures with transverse ligament avulsion (Dickman Type II), halo-vest immobilization allows bony consolidation, whereas ligamentous tears (Dickman Type I) require posterior C1–C2 fusion.',
  'mensagem_central': 'Management of upper cervical spine trauma is governed by the biomechanical competence of craniocervical and atlantoaxial ligamentous complexes rather than superficial radiographic appearances alone. Differentiating stable bony fractures from unstable ligamentous disruptions (TAL rupture, AOD, Type IIA Hangman, Type II odontoid) using multi-detector CT, MRI, and vascular imaging dictates whether non-operative collar immobilization, motion-preserving anterior screw osteosynthesis, or rigid posterior instrumented fusion is required.',
  'por_que_importa': 'In the upper cervical spine, a radiographically subtle injury (such as atlanto-occipital dissociation or a Type IIA Hangman fracture) can be rapidly fatal if mismanaged with skeletal traction, while an apparently alarming Jefferson burst fracture with an intact transverse ligament may heal uneventfully with non-operative management. This chapter provides the evidence-based classification systems, measurement criteria (BDI, BAI, Powers, Spence), and technical surgical indications to prevent neurological catastrophe and preserve vital cervical kinematics.',
  'decs': ['Cervical Vertebrae', 'Axis, Cervical Vertebra', 'Atlanto-Axial Joint', 'Atlanto-Occipital Joint', 'Spinal Fractures', 'Odontoid Process', 'Joint Instability', 'Spinal Fusion'],
  'mesh': ['Cervical Vertebrae', 'Axis, Cervical Vertebra', 'Atlanto-Axial Joint', 'Atlanto-Occipital Joint', 'Spinal Fractures', 'Odontoid Process', 'Joint Instability', 'Spinal Fusion'],
  'palavras_chave_livres': ['Atlanto-occipital dissociation', 'Odontoid fracture Type II', 'Hangman fracture', 'Jefferson fracture', 'Transverse atlantal ligament', 'Harms C1-C2 fusion', 'Anterior odontoid screw'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'TAL Integrity Dictates Atlas Stability',
      'texto': 'The Transverse Atlantal Ligament (TAL) is the primary stabilizer of C1–C2. Rule of Spence (C1 lateral mass overhang >=6.9 mm on X-ray or >=8.1 mm on CT) indicates TAL rupture. Intrasubstance tears (Dickman I) require C1–C2 fusion; bony avulsions (Dickman II) heal with rigid immobilization.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Traction is Strictly Contraindicated in AOD and Type IIA',
      'texto': 'Never apply skeletal traction in Atlanto-Occipital Dissociation (AOD) or Type IIA Hangman fractures. In AOD, traction causes fatal brainstem transection; in Type IIA, traction produces extreme distraction across disrupted C2–C3 discs.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Tailor Type II Odontoid Fracture Care',
      'texto': 'In young adults with reducible Type II odontoid fractures and intact TAL, anterior odontoid screw fixation preserves 50% of cervical rotation. In elderly patients (>65–70 years), posterior C1–C2 Harms fusion avoids the high mortality and respiratory morbidity of halo-vests.'
    }
  ],
  'referencias': pt['20']['referencias'],
  'seo': {
    'titulo': 'Traumatic Injuries of the Upper Cervical Spine | Treatise',
    'meta_descricao': 'Complete guide to upper cervical trauma (C0–C2): atlanto-occipital dissociation, atlas Jefferson fractures, odontoid fractures, Hangman fracture, and Harms fusion.',
    'resumo_chamada': 'Master the diagnosis, classification, stability criteria (BDI, BAI, Spence), and surgical management of upper cervical spine trauma (C0, C1, C2, odontoid).',
    'slug': 'traumatic-injuries-of-the-upper-cervical-spine'
  }
}

es['20'] = {
  'numero': 20,
  'titulo': 'Lesiones Traumáticas de la Columna Cervical Alta',
  'secao': '',
  'autores': pt['20']['autores'],
  'contexto': 'Las lesiones traumáticas de la columna cervical alta abarcan la unión craneocervical (cóndilos occipitales, articulación C0–C1) y el complejo atlantoaxial (C1–C2), una región anatómica que combina una extraordinaria movilidad multidireccional con una compleja estabilización ligamentaria (ligamento transverso del atlas, ligamentos alares, membrana tectoria, ligamento apical) y una extrema vulnerabilidad debido a la proximidad inmediata del tronco encefálico, la médula cervical alta, los pares craneales bajos (IX, X, XI, XII) y las arterias vertebrales. El espectro clínico y radiológico incluye las fracturas del cóndilo occipital (clasificaciones de Anderson-Montesano y Tuli), la disociación atlanto-occipital (DAO / clasificación de Traynelis), las fracturas del atlas (fracturas en estallido de Jefferson y de arcos / clasificación de Gehweiler), la fijación o subluxación rotatoria atlantoaxial (clasificación de Fielding-Hawkins), las fracturas de la apófisis odontoides (clasificaciones de Anderson-D\'Alonzo y Grauer) y la espondilolistesis traumática del axis o fractura del ahorcado (clasificaciones de Effendi y Levine-Edwards). Dado que estas lesiones varían desde fracturas óseas estables tributarias de inmovilización externa hasta disrupciones ligamentarias inestables catastróficas que exigen fijación quirúrgica urgente, la evaluación rigurosa de la estabilidad es el eje de la toma de decisiones. La TC multidetector define la anatomía ósea y las líneas de alineación craneocervical (intervalo basion-dens [BDI], basion-axis [BAI], índice de Powers), mientras que la RM evalúa la integridad ligamentaria y la compresión medular. La Angio-TC es mandataria ante fracturas que comprometan el foramen transverso.',
  'objetivo': 'Presentar un enfoque integral basado en la evidencia para el diagnóstico, clasificación, valoración de estabilidad y tratamiento de los traumatismos de la columna cervical alta (C0–C2). Al finalizar, el lector deberá identificar los mecanismos lesionales y presentaciones clínicas; aplicar criterios radiográficos y mediciones cuantitativas (BDI, BAI, índice de Powers, regla de Spence) de inestabilidad craneocervical; clasificar las fracturas del cóndilo occipital, atlas, odontoides y Hangman; seleccionar opciones conservadoras frente a quirúrgicas (tornillo anterior de odontoides, artrodesis C1–C2 tipo Harms/Magerl, fusión occipitocervical); y reconocer consideraciones específicas en pacientes pediátricos y ancianos.',
  'conteudo_principal': [
    {
      'subtitulo': 'Estabilidad biomecánica y principios de diagnóstico por imagen',
      'texto': 'La estabilidad de la columna cervical alta depende de estructuras ligamentarias densas: el ligamento transverso del atlas (LTA, principal estabilizador de C1–C2 que previene la traslación anterior del atlas), los ligamentos alares y la membrana tectoria. La TC multidetector con cortes finos es el estándar de oro. El alineamiento craneocervical se evalúa mediante: 1) Intervalo Basion-Dens (BDI < 8,5 mm en adultos, <10 mm en niños); 2) Intervalo Basion-Axis (BAI < 8,5 mm); 3) Índice de Powers (distancia basion-arco posterior C1 / distancia arco anterior C1-opistion, normal <0,9; >1,0 indica DAO anterior); 4) Intervalo cóndilo occipital-C1 (<1,5–2 mm; >=2 mm indica DAO). La RM evalúa la rotura del LTA y contusión medular; la Angio-TC valora la arteria vertebral.'
    },
    {
      'subtitulo': 'Fracturas del cóndilo occipital y Disociación Atlanto-Occipital (DAO)',
      'texto': 'Las fracturas del cóndilo occipital (Anderson-Montesano) se dividen en: Tipo I (impactación conminuta, estable); Tipo II (extensión de fractura de base de cráneo, estable); Tipo III (avulsión del cóndilo por el ligamento alar, potencialmente inestable). La Disociación Atlanto-Occipital (DAO) es una lesión altamente letal por rotura completa de la membrana tectoria y ligamentos alares, clasificada por Traynelis en Tipo I (desplazamiento anterior), Tipo II (distracción longitudinal pura) y Tipo III (desplazamiento posterior). La tracción esquelética está terminantemente contraindicada en la DAO; el tratamiento definitivo es la artrodesis occipitocervical posterior urgente (C0–C2/C3).'
    },
    {
      'subtitulo': 'Fracturas del Atlas (C1) y la Regla de Spence',
      'texto': 'Las fracturas de C1 (clasificación de Gehweiler): Tipo I (arco anterior), Tipo II (arco posterior, la más común y estable), Tipo III (fractura en estallido de Jefferson con compromiso de ambos arcos), Tipo IV (masa lateral), Tipo V (apófisis transversa). La integridad del Ligamento Transverso del Atlas (LTA) define la estabilidad: la clasificación de Dickman distingue el Tipo I (rotura intrasustancia ligamentaria del LTA, no cicatriza conservadoramente y requiere artrodesis C1–C2) del Tipo II (avulsión ósea del tubérculo de C1, con alto potencial de consolidación con halo-chaleco). La Regla de Spence establece que un desplazamiento lateral total de las masas de C1 sobre C2 >=6,9 mm en radiografía transoral o >=8,1 mm en TC indica rotura del LTA.'
    },
    {
      'subtitulo': 'Fracturas de la Apófisis Odontoides',
      'texto': 'Clasificación de Anderson y D\'Alonzo: Tipo I (avulsión del vértice de la odontoides, rara, estable); Tipo II (fractura a través de la base/cuello de la odontoides, la más frecuente, con alta tasa de seudoartrosis [30–60%] por vascularización precaria); Tipo III (fractura que se extiende al cuerpo esponjoso de C2, con consolidación >90% con inmovilización rígida). En fracturas Tipo II inestables en adultos jóvenes con ligamento transverso intacto y trazo favorable, el tornillo anterior de odontoides preserva la rotación C1–C2. En ancianos (>65–70 años) o fracturas conminutas/osteoporóticas, la artrodesis posterior C1–C2 tipo Harms (tornillos a masas de C1 y pedículos/pars de C2) es el estándar de oro.'
    },
    {
      'subtitulo': 'Espondilolistesis Traumática del Axis (Fractura de Hangman)',
      'texto': 'La fractura del ahorcado compromete bilateralmente la pars interarticularis de C2 por hiperextensión y carga axial. La clasificación de Levine y Edwards guía el tratamiento: Tipo I (sin desplazamiento <3 mm, sin angulación, estable, tratada con collarín rígido); Tipo II (traslación >3 mm y angulación por rotura del disco C2–C3 y ligamento longitudinal posterior, tratada con halo-chaleco o fijación quirúrgica); Tipo IIA (mínima traslación pero severa angulación en flexión por trazo oblicuo de pars con ligamento longitudinal anterior íntegro: la tracción está contraindicada porque provoca distracción masiva; se trata con halo en extensión o cirugía); Tipo III (luxación facetaria bilateral C2–C3 asociada a fractura de pars, altamente inestable, requiere reducción abierta y artrodesis).'
    }
  ],
  'aplicacao_clinica': 'En urgencias, ante sospecha de disociación atlanto-occipital en la TC (BDI/BAI >8,5 mm o espacio cóndilo-C1 >=2 mm), mantenga al paciente con collarín rígido y bolsas de arena laterales; jamás aplique tracción esquelética cervical, ya que puede provocar la sección completa del tronco del encéfalo. En fracturas de odontoides Tipo II, evalúe la edad y morfología: en pacientes jóvenes con trazo reductible y ligamento transverso intacto, la osteosíntesis anterior con tornillo conserva el 50% de la rotación axial cervical; en ancianos tras caídas de su propia altura, evitar el halo-chaleco (asociado a alta morbimortalidad por neumonía y disfagia) mediante collarín rígido optimizado o artrodesis posterior C1–C2 tipo Harms logra mejores resultados. En fracturas de Hangman, diferencie siempre el Tipo II (tracción permitida para reducción) del Tipo IIA (tracción contraindicada por distracción catastrófica). En fracturas en estallido de C1 con avulsión ósea del ligamento transverso (Dickman II), el halo-chaleco permite la consolidación ósea, mientras que la rotura ligamentaria pura (Dickman I) requiere artrodesis C1–C2.',
  'mensagem_central': 'El tratamiento de los traumatismos de la columna cervical alta se rige por la competencia biomecánica de las estructuras ligamentarias craneocervicales y atlantoaxiales, más que por el aspecto radiográfico aislado de la fractura. La diferenciación entre fracturas óseas estables y lesiones ligamentarias inestables (rotura del LTA, DAO, Hangman IIA, odontoides Tipo II) mediante TC multidetector, RM y Angio-TC define la indicación precisa entre inmovilización externa, osteosíntesis anterior preservadora de movimiento o artrodesis posterior instrumentada.',
  'por_que_importa': 'En la columna cervical alta, una lesión radiológicamente sutil (como una disociación atlanto-occipital o un Hangman IIA) puede resultar letal si se maneja erróneamente con tracción esquelética, mientras que una fractura en estallido de Jefferson con ligamento transverso íntegro puede consolidar exitosamente con manejo conservador. Este capítulo proporciona las clasificaciones clínicas, mediciones cuantitativas (BDI, BAI, Powers, Spence) y pautas terapéuticas para prevenir catástrofes neurológicas y preservar la función raquídea.',
  'decs': ['Vértebras Cervicales', 'Axis, Vértebra Cervical', 'Articulación Atlantoaxial', 'Articulación Atlanto-Occipital', 'Fracturas de la Columna Vertebral', 'Apófisis Odontoides', 'Inestabilidad Articular', 'Fusión Vertebral'],
  'mesh': ['Cervical Vertebrae', 'Axis, Cervical Vertebra', 'Atlanto-Axial Joint', 'Atlanto-Occipital Joint', 'Spinal Fractures', 'Odontoid Process', 'Joint Instability', 'Spinal Fusion'],
  'palavras_chave_livres': ['Disociación atlanto-occipital', 'Fractura de odontoides Tipo II', 'Fractura de Hangman', 'Fractura de Jefferson', 'Ligamento transverso del atlas', 'Artrodesis C1-C2 de Harms', 'Tornillo anterior de odontoides'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'La integridad del LTA define la estabilidad de C1',
      'texto': 'El Ligamento Transverso del Atlas (LTA) es el principal estabilizador de C1–C2. La regla de Spence (desplazamiento lateral de C1 >=6,9 mm en RX o >=8,1 mm en TC) indica rotura del LTA. Roturas intrasustancia (Dickman I) requieren artrodesis C1–C2; avulsiones óseas (Dickman II) consolidan con inmovilización rígida.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Tracción contraindicada en DAO y Hangman IIA',
      'texto': 'Nunca aplique tracción esquelética en Disociación Atlanto-Occipital (DAO) ni en fracturas de Hangman Tipo IIA. En la DAO, la tracción provoca sección bulbar letal; en el Tipo IIA, genera una distracción masiva a través del disco lesionado C2–C3.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Personalizar el manejo de la fractura de odontoides Tipo II',
      'texto': 'En adultos jóvenes con fractura Tipo II reductible y LTA intacto, el tornillo anterior de odontoides conserva el 50% de la rotación cervical. En pacientes ancianos (>65–70 años), la artrodesis posterior C1–C2 tipo Harms evita la elevada morbimortalidad respiratoria del halo-chaleco.'
    }
  ],
  'referencias': pt['20']['referencias'],
  'seo': {
    'titulo': 'Lesiones Traumáticas de la Columna Cervical Alta | Tratado de Columna',
    'meta_descricao': 'Guía integral de traumatismos cervicales altos (C0–C2): disociación atlanto-occipital, fracturas de Jefferson, odontoides Tipo II, Hangman y artrodesis de Harms.',
    'resumo_chamada': 'Domine el diagnóstico, clasificación, criterios de estabilidad (BDI, BAI, Spence) y tratamiento quirúrgico del trauma cervical alto (C0, C1, C2 y odontoides).',
    'slug': 'lesiones-traumaticas-de-la-columna-cervical-alta'
  }
}

with open('slice_17_20_en.json', 'w', encoding='utf-8') as f:
    json.dump(en, f, ensure_ascii=False, indent=2)

with open('slice_17_20_es.json', 'w', encoding='utf-8') as f:
    json.dump(es, f, ensure_ascii=False, indent=2)

print('Batch 17-20 successfully saved!')
