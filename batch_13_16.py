import json

with open('/Users/manoeldesign/.gemini/antigravity/brain/7e1703fb-1acf-40aa-a137-05338f0871de/scratch/slice_1_28_pt.json', 'r', encoding='utf-8') as f:
    pt = json.load(f)

en = {}
es = {}

# ==========================================
# CHAPTER 13
# ==========================================
en['13'] = {
  'numero': 13,
  'titulo': 'Neurophysiology in the Diagnosis of Spinal Disorders',
  'secao': '',
  'autores': pt['13']['autores'],
  'contexto': 'Diagnostic clinical neurophysiology serves as an indispensable functional extension of history taking, physical examination, and neuroimaging in spine practice. While magnetic resonance imaging (MRI) and computed tomography (CT) document structural anatomy and canal narrowing, electromyography and nerve conduction studies (EMG/NCS) evaluate the physiological integrity and viability of motor axons, sensory fibers, neuromuscular junctions, and myotomal motor units. Diagnostic electrophysiology is crucial for confirming or refuting suspected radiculopathy, establishing disease acuity (acute vs. subacute vs. chronic reinervating), determining severity of axonal loss, distinguishing true compressive radiculopathy from peripheral entrapment neuropathies (carpal tunnel syndrome, cubital tunnel syndrome, peroneal nerve compression at the fibular head) or generalized polyneuropathies ("double crush syndrome"), and identifying motor neuron disease (amyotrophic lateral sclerosis) or plexopathies. Electromyographic changes (fibrillation potentials, positive sharp waves) require 18 to 21 days following acute axonal injury to appear in distal limb muscles, though paraspinal muscle denervation appears within 7 to 10 days. Sensory nerve action potentials (SNAPs) remain normal in preganglionic compressive radiculopathy (because dorsal root ganglion [DRG] cells lie distal to the intraspinal compression), providing a pivotal diagnostic distinction from postganglionic plexopathies or peripheral neuropathies. Understanding neurophysiological principles, optimal timing, and limitations prevents diagnostic delays and inappropriate spinal surgery.',
  'objetivo': 'To present the neurophysiological methods used in evaluating spinal pathologies and demonstrate their application in differentiating radiculopathy, plexopathy, entrapment neuropathy, polyneuropathy, and motor neuron disease. The reader should be able to interpret nerve conduction studies (CMAP, SNAP, F-waves, H-reflex), understand needle electromyography findings (spontaneous activity, motor unit potential morphology, recruitment patterns), recognize the physiological timing of denervation, understand the diagnostic significance of preserved SNAPs in preganglionic root lesions, and formulate targeted electrodiagnostic requests.',
  'conteudo_principal': [
    {
      'subtitulo': 'Clinical Neurophysiology and Diagnostic Integration',
      'texto': 'Diagnostic electrophysiology comprises nerve conduction studies (NCS), late responses (F-waves, H-reflex), and needle electromyography (EMG). These modalities transform clinical symptoms into objective neurophysiological data. NCS measures compound muscle action potential (CMAP) and sensory nerve action potential (SNAP) amplitudes and conduction velocities. Late responses evaluate proximal nerve segments: F-waves assess motor conduction to the anterior horn cells, while the H-reflex (primarily S1 reflex arc via tibial nerve stimulation) evaluates sensory afferent and motor efferent monosynaptic pathway integrity. Needle EMG evaluates insertional activity, spontaneous abnormal activity at rest (fibrillations, positive sharp waves, fasciculations), and motor unit action potential (MUAP) morphology during voluntary contraction.'
    },
    {
      'subtitulo': 'Preganglionic vs. Postganglionic Lesions (SNAP Preservation)',
      'texto': 'The sensory dorsal root ganglion (DRG) is situated within or just lateral to the intervertebral foramen. In standard spinal compressive radiculopathies (e.g., disc herniation, canal stenosis), the site of nerve root compression is preganglionic (proximal to the DRG). Consequently, wallerian degeneration affects only the central axon ascending the dorsal columns of the spinal cord; the peripheral sensory axon and DRG cell body remain intact. Therefore, sensory nerve action potential (SNAP) amplitude remains completely normal in preganglionic radiculopathy, despite profound clinical sensory loss. In contrast, in postganglionic lesions (brachial/lumbosacral plexopathies, peripheral nerve lacerations, entrapment neuropathies), the peripheral axon undergoes wallerian degeneration, causing reduced or absent SNAP amplitudes. This rule is the cornerstone of electrodiagnostic localization in spine surgery.'
    },
    {
      'subtitulo': 'Timing, Denervation, and Reinnervation Cascade',
      'texto': 'Following acute axonal compression or transection, physiological changes progress chronologically. Immediate motor block occurs, but needle EMG does not display denervation potentials immediately. Spontaneous denervation activity (fibrillation potentials and positive sharp waves) appears first in the paraspinal muscles (dorsal rami innervation) within 7 to 10 days, proximal limb muscles (14–18 days), and distal limb muscles (21–28 days). Performing EMG prior to 3 weeks following acute nerve injury yields a high rate of false-negative studies for denervation. With chronicity (>2–3 months), collateral sprouting produces polyphasic, high-amplitude, long-duration reinnervation motor unit action potentials (MUAPs) with reduced recruitment density.'
    },
    {
      'subtitulo': 'Differential Diagnosis: Entrapment, Double Crush, and ALS',
      'texto': 'Electrodiagnosis effectively resolves clinical dilemmas: 1) Differentiating C8–T1 radiculopathy from carpal tunnel syndrome (CTS) or ulnar neuropathy at the elbow; 2) Differentiating L5 radiculopathy (tibialis anterior, extensor hallucis longus, and tensor fasciae latae involvement with normal superficial peroneal SNAP) from common peroneal neuropathy at the fibular head (peroneal muscles affected, tensor fasciae latae spared, abnormal superficial peroneal SNAP); 3) Identifying "Double Crush Syndrome," where proximal subclinical cervical/lumbar root compression increases susceptibility of the distal axon to entrapment neuropathy; 4) Identifying generalized sensorimotor polyneuropathy (diabetic, toxic, CIDP); and 5) Detecting Amyotrophic Lateral Sclerosis (ALS), characterized by widespread active denervation and chronic reinnervation across three or four anatomical regions (bulbar, cervical, thoracic, lumbosacral) without sensory conduction abnormalities.'
    }
  ],
  'aplicacao_clinica': 'Electrodiagnostic testing should be requested when clinical history and MRI are discordant, when multiple anatomical levels of stenosis exist and the clinically symptomatic culprit root must be confirmed before targeted decompression, or when peripheral neuropathy/plexopathy is suspected. Testing should be scheduled at least 3 weeks after symptom onset to allow wallerian degeneration and distal fibrillations to manifest. In suspected cervical radiculopathy with shoulder pain, EMG distinguishes C5 radiculopathy from rotator cuff tears or suprascapular/axillary neuropathy. In foot drop, EMG confirms L5 radiculopathy versus common peroneal nerve palsy. In patients with multi-level lumbar stenosis and peripheral diabetic neuropathy, EMG objectively quantifies whether active motor radiculopathy is present, guiding surgical decision-making. Testing paraspinal muscles confirms preganglionic root involvement, though prior spinal surgery causes non-specific paraspinal denervation artifact that must be interpreted cautiously.',
  'mensagem_central': 'Diagnostic clinical neurophysiology bridges structural neuroimaging and clinical neurological examination by evaluating the functional physiological viability of motor and sensory axons. Normal sensory nerve action potentials in a numb dermatome identify preganglionic root compression, while paraspinal and myotomal needle EMG timing (optimal after 3 weeks) distinguishes active denervation, chronic reinnervation, entrapment neuropathies, and motor neuron disease.',
  'por_que_importa': 'Operating on structural MRI abnormalities that do not correlate with active neurophysiological radiculopathy is a leading cause of failed back surgery syndrome. A preserved SNAP amplitude differentiates spinal radiculopathy from brachial/lumbar plexopathies; myotomal mapping separates L5 radiculopathy from peroneal nerve entrapment; and paraspinal testing identifies true root pathology. Understanding electrodiagnostic timing and interpretation ensures accurate indications and protects patients from inappropriate surgical interventions.',
  'decs': ['Electromyography', 'Neural Conduction', 'Radiculopathy', 'Action Potentials', 'Peripheral Nervous System Diseases', 'Motor Neuron Disease', 'Spinal Cord Diseases', 'Differential Diagnosis'],
  'mesh': ['Electromyography', 'Neural Conduction', 'Radiculopathy', 'Action Potentials', 'Peripheral Nervous System Diseases', 'Motor Neuron Disease', 'Spinal Cord Diseases', 'Differential Diagnosis'],
  'palavras_chave_livres': ['Sensory nerve action potential', 'Preganglionic radiculopathy', 'Fibrillation potentials', 'Double crush syndrome', 'Needle electromyography', 'H-reflex'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Preserved SNAPs Indicate Preganglionic Lesions',
      'texto': 'In compressive spinal radiculopathies, the sensory dorsal root ganglion (DRG) is distal to the compression site. Therefore, sensory nerve action potentials (SNAPs) remain completely normal despite marked dermatomal numbness, differentiating radiculopathy from plexopathy or peripheral neuropathy.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Wait 3 Weeks for Accurate Needle EMG',
      'texto': 'Spontaneous denervation potentials (fibrillations and positive sharp waves) require 18–21 days to appear in distal limb muscles following acute axonal injury (7–10 days in paraspinals). Requesting needle EMG before 3 weeks leads to false-negative examinations.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Differentiate Foot Drop: L5 vs. Peroneal Nerve',
      'texto': 'In foot drop, L5 radiculopathy causes denervation in both peroneal-innervated muscles (tibialis anterior, EHL) and non-peroneal L5 muscles (tensor fasciae latae, gluteus medius) with normal superficial peroneal SNAP. Peroneal neuropathy spares the gluteus medius/TFL and demonstrates an absent SNAP.'
    }
  ],
  'referencias': pt['13']['referencias'],
  'seo': {
    'titulo': 'Neurophysiology in the Diagnosis of Spinal Disorders | Treatise',
    'meta_descricao': 'Clinical neurophysiology for spine surgeons: electromyography (EMG), nerve conduction (NCS), preganglionic SNAP preservation, radiculopathy vs. entrapment, and ALS.',
    'resumo_chamada': 'Master diagnostic electromyography and nerve conduction studies in spine surgery: SNAP localization, denervation timing, and differential diagnosis of radiculopathy.',
    'slug': 'neurophysiology-in-the-diagnosis-of-spinal-pathologies'
  }
}

es['13'] = {
  'numero': 13,
  'titulo': 'Neurofisiología en el Diagnóstico de las Patologías de la Columna',
  'secao': '',
  'autores': pt['13']['autores'],
  'contexto': 'La neurofisiología clínica diagnóstica constituye una extensión funcional indispensable de la anamnesis, el examen neurológico y la neuroimagen en la patología de la columna vertebral. Mientras que la resonancia magnética (RM) y la tomografía computarizada (TC) documentan la morfología anatómica y el estrechamiento del conducto o foramen, la electroneuromiografía (ENMG) y los estudios de conducción nerviosa evalúan la integridad fisiológica y la viabilidad de los axones motores, sensitivos y unidades motoras. La neurofisiología es determinante para confirmar o descartar una radiculopatía compresiva, definir su agudeza (aguda, subaguda o crónica con reinervación), cuantificar el daño axonal, diferenciar una radiculopatía de neuropatías por atrapamiento periférico (síndrome del túnel carpiano, neuropatía cubital o compresión del nervio peroneo en la cabeza del peroné), polineuropatías ("síndrome de doble aplastamiento" o double crush) y enfermedades de motoneurona (esclerosis lateral amiotrófica) o plexopatías. La actividad espontánea de denervación (fibrilaciones, ondas agudas positivas) requiere entre 18 y 21 días tras la lesión axonal para manifestarse en músculos distales, aunque aparece a los 7–10 días en la musculatura paravertebral. Los potenciales de acción sensitivos (SNAP) se conservan normales en las radiculopatías preganglionares (debido a que el ganglio anexo a la raíz dorsal [GARD] se ubica distal al sitio de compresión intradural/foraminal), constituyendo la clave electrodiagnóstica para diferenciar radiculopatías de plexopatías.',
  'objetivo': 'Presentar los métodos neurofisiológicos utilizados en la evaluación de las afecciones raquídeas y demostrar su aplicación en la diferenciación entre radiculopatía, plexopatía, neuropatía por atrapamiento, polineuropatía y enfermedad de motoneurona. Al finalizar, el lector deberá interpretar los estudios de conducción nerviosa (CMAP, SNAP, ondas F, reflejo H); comprender los hallazgos de la electromiografía de aguja (actividad espontánea, morfología de potenciales de unidad motora, patrones de reclutamiento); reconocer el tiempo fisiológico de denervación; y valorar la preservación de los SNAP en lesiones preganglionares.',
  'conteudo_principal': [
    {
      'subtitulo': 'Neurofisiología clínica e integración diagnóstica',
      'texto': 'La electrofisiología diagnóstica comprende los estudios de conducción nerviosa (NCS), respuestas tardías (ondas F, reflejo H) y electromiografía de aguja (EMG). Los estudios de conducción motora y sensitiva miden la amplitud del potencial de acción muscular compuesto (CMAP) y del potencial de acción del nervio sensitivo (SNAP), así como velocidades de conducción y latencias. Las respuestas tardías evalúan segmentos proximales: las ondas F analizan la conducción motora retrógrada hasta el asta anterior, mientras que el reflejo H (arco monosináptico S1 vía nervio tibial) evalúa las vías aferentes sensitivas y eferentes motoras. La EMG de aguja analiza la actividad de inserción, la presencia de actividad espontánea anormal en reposo (fibrilaciones, ondas agudas positivas, fasciculaciones) y los potenciales de unidad motora (PUM) durante la contracción voluntaria.'
    },
    {
      'subtitulo': 'Lesión preganglionar vs. postganglionar (Preservación del SNAP)',
      'texto': 'El ganglio de la raíz dorsal (GARD) se sitúa en el foramen intervertebral. En las radiculopatías compresivas vertebrales típicas, la compresión ocurre a nivel preganglionar (proximal al GARD). Por ello, la degeneración walleriana ocurre solo en el axón central hacia la médula, mientras que el cuerpo neuronal en el GARD y el axón sensitivo periférico permanecen intactos. En consecuencia, la amplitud del potencial de acción sensitivo (SNAP) permanece completamente normal en una radiculopatía preganglionar, a pesar de que el paciente presente hipoestesia clínica en el dermatoma. Por el contrario, en lesiones postganglionares (plexopatías, sección nerviosa periférica o atrapamientos), el axón periférico degenera y el SNAP disminuye o desaparece. Este principio es el pilar de la localización electrodiagnóstica.'
    },
    {
      'subtitulo': 'Cronología: Cascada de denervación y reinervación',
      'texto': 'Tras una compresión axonal aguda, los cambios electromiográficos evolucionan de manera predecible. La actividad espontánea de denervación (fibrilaciones y ondas agudas positivas) aparece primero en la musculatura paravertebral (inervada por los ramos dorsales posteriores) a los 7–10 días, luego en músculos proximales de la extremidad (14–18 días) y finalmente en músculos distales a los 21–28 días. Realizar una ENMG antes de las 3 semanas de inicio del cuadro genera falsos negativos para denervación distal. En fases crónicas (>2–3 meses), los brotes axonales colaterales generan PUM polifásicos de gran amplitud y larga duración con patrón de reclutamiento reducido.'
    },
    {
      'subtitulo': 'Diagnóstico diferencial: Atrapamiento, Doble Compresión y ELA',
      'texto': 'El electrodiagnóstico resuelve encrucijadas clínicas: 1) Diferencia radiculopatía C8–T1 de síndrome del túnel carpiano o neuropatía cubital; 2) Diferencia radiculopatía L5 (denervación en tibial anterior, extensor largo del hallux y tensor de la fascia lata con SNAP peroneo superficial normal) de neuropatía del nervio peroneo común en la cabeza del peroné (músculos peroneos afectados, tensor de la fascia lata indemne y SNAP ausente); 3) Identifica el "Síndrome de Doble Compresión" (Double Crush), donde una compresión radicular proximal incrementa la vulnerabilidad del axón distal al atrapamiento; 4) Detecta polineuropatías sensitivomotoras difusas; y 5) Descarta Esclerosis Lateral Amiotrófica (ELA), caracterizada por denervación activa difusa en múltiples segmentos (bulbar, cervical, torácico, lumbosacro) con estudios de conducción sensitiva normales.'
    }
  ],
  'aplicacao_clinica': 'La electroneuromiografía debe solicitarse cuando exista discrepancia clínico-radiológica, cuando existan múltiples niveles de estenosis en la RM y se requiera identificar la raíz sintomática culpable antes de la cirugía, o cuando se sospeche una neuropatía periférica asociada. El estudio debe programarse al menos 3 semanas después del inicio de los síntomas. En pacientes con dolor en hombro y cuello, la ENMG distingue radiculopatía C5 de patología del manguito rotador o neuropatía supraescapular. En el pie caído, confirma radiculopatía L5 frente a lesión del nervio peroneo común. En pacientes con estenosis lumbar multinivel y neuropatía diabética, la ENMG cuantifica objetivamente el compromiso radicular motor activo para justificar la descompresión. La exploración de músculos paravertebrales confirma compromiso preganglionar, si bien cirugías previas generan cambios residuales que deben interpretarse con cautela.',
  'mensagem_central': 'La neurofisiología clínica diagnóstica vincula la anatomía radiológica con el examen neurológico al evaluar la viabilidad funcional de los axones motores y sensitivos. La conservación del potencial sensitivo (SNAP) en un dermatoma con hipoestesia identifica una compresión radicular preganglionar, mientras que la electromiografía de aguja (óptima tras 3 semanas) diferencia denervación activa, reinervación crónica, neuropatías por atrapamiento y enfermedad de motoneurona.',
  'por_que_importa': 'Operar alteraciones anatómicas en la RM que no se corresponden con una radiculopatía activa funcional es una causa principal de fracaso quirúrgico raquídeo. La conservación del SNAP permite diferenciar una radiculopatía vertebral de una plexopatía; el mapeo miotómico distingue una hernia L5 de una parálisis del nervio peroneo; y el examen paravertebral confirma el compromiso radicular. Comprender la indicación y cronología electrodiagnóstica previene intervenciones quirúrgicas innecesarias y asegura un tratamiento dirigido a la verdadera causa.',
  'decs': ['Electromiografía', 'Conducción Nerviosa', 'Radiculopatía', 'Potenciales de Acción', 'Enfermedades del Sistema Nervioso Periférico', 'Enfermedades de la Motoneurona', 'Enfermedades de la Médula Espinal', 'Diagnóstico Diferencial'],
  'mesh': ['Electromyography', 'Neural Conduction', 'Radiculopathy', 'Action Potentials', 'Peripheral Nervous System Diseases', 'Motor Neuron Disease', 'Spinal Cord Diseases', 'Differential Diagnosis'],
  'palavras_chave_livres': ['Potencial de acción sensitivo', 'Radiculopatía preganglionar', 'Fibrilaciones musculares', 'Síndrome de doble aplastamiento', 'Electromiografía de aguja', 'Reflejo H'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'El SNAP normal indica lesión preganglionar',
      'texto': 'En las radiculopatías vertebrales compresivas, el ganglio de la raíz dorsal (GARD) se encuentra distal al sitio de compresión. Por tanto, el potencial de acción del nervio sensitivo (SNAP) permanece completamente normal a pesar de la hipoestesia clínica, diferenciando la radiculopatía de una plexopatía o lesión periférica.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Esperar 3 semanas para la EMG de aguja',
      'texto': 'Los potenciales de denervación activa (fibrilaciones y ondas agudas positivas) tardan entre 18 y 21 días en manifestarse en músculos distales tras una lesión axonal aguda (7–10 días en paravertebrales). Solicitar la EMG antes de las 3 semanas genera falsos negativos.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Diferenciar pie caído: L5 vs. Nervio Peroneo',
      'texto': 'En el pie caído, la radiculopatía L5 causa denervación en músculos dependientes del peroneo (tibial anterior, extensor del hallux) y músculos extrínsecos (tensor de la fascia lata, glúteo medio) con SNAP normal. La compresión del peroneo en la cabeza del peroné respeta el glúteo medio/TFL y presenta SNAP ausente.'
    }
  ],
  'referencias': pt['13']['referencias'],
  'seo': {
    'titulo': 'Neurofisiología en Patologías de la Columna | Tratado de Columna',
    'meta_descricao': 'Guía de neurofisiología clínica en columna: electromiografía (EMG), conducción nerviosa (NCS), preservación del SNAP, radiculopatía vs. atrapamiento y ELA.',
    'resumo_chamada': 'Domine la electromiografía y estudios de conducción nerviosa en cirugía de columna: diferenciación preganglionar del SNAP, tiempos de denervación y diagnóstico radicular.',
    'slug': 'neurofisiologia-en-el-diagnostico-de-las-patologias-de-la-columna'
  }
}

# ==========================================
# CHAPTER 14
# ==========================================
en['14'] = {
  'numero': 14,
  'titulo': 'Intraoperative Neurophysiological Monitoring in Spine Surgery',
  'secao': '',
  'autores': pt['14']['autores'],
  'contexto': 'Intraoperative neurophysiological monitoring (IONM) provides real-time functional assessment of the central and peripheral nervous system during spine surgery, serving as an early-warning diagnostic tool to detect impending iatrogenic neural injury, guide safe corrective maneuvers, and prevent postoperative neurological deficits. Multimodal IONM integrates transcranial motor evoked potentials (TcMEP), somatosensory evoked potentials (SSEP), spontaneous and triggered electromyography (sEMG and tEMG), and dermatomal/reflex responses (D-wave, bulbocavernosus reflex). Each modality monitors distinct neural pathways with specific temporal sensitivities and alarm criteria: SSEPs assess the dorsal column-medial lemniscal sensory pathway (supplied by the posterior spinal arteries), while TcMEPs evaluate the corticospinal motor pathway and anterior horn cells (supplied by the anterior spinal artery). Consequently, selective anterior spinal artery ischemia or direct anterior motor tract contusion can abolish TcMEPs without altering SSEPs. Free-run sEMG detects mechanical nerve root traction, irritation, or compression during instrumentation and decompression, while pedicle screw triggered EMG (tEMG) detects pedicle cortical breaches. Successful IONM requires total intravenous anesthesia (TIVA) without halogenated inhalational agents or neuromuscular blockade (which abolish MEPs and EMG), temperature and blood pressure optimization, and adherence to structured institutional checklists to identify and rapidly reverse intraoperative neurological insults.',
  'objetivo': 'To present the neurophysiological principles, modalities, alarm criteria, and anesthetic protocols of multimodal intraoperative neuromonitoring (IONM) in spine surgery. The reader should be able to understand the physiological pathways evaluated by SSEP, TcMEP, EMG, D-wave, and reflex testing; apply multimodal monitoring in deformity, cervical myelopathy, intradural tumor, and minimally invasive lateral surgery; recognize significant neurophysiological alarm threshold criteria; and execute structured intraoperative rescue protocols following acute signal degradation.',
  'conteudo_principal': [
    {
      'subtitulo': 'Multimodal IONM Modalities and Neural Pathways',
      'texto': 'Multimodal IONM combines complementary neurophysiological modalities: 1) Somatosensory Evoked Potentials (SSEP): elicited by peripheral nerve stimulation (median, ulnar, posterior tibial nerves) and recorded over the primary somatosensory cortex and cervical spine, evaluating the ascending dorsal column-medial lemniscal sensory pathways; 2) Transcranial Motor Evoked Potentials (TcMEP): generated by transcranial electrical stimulation over the motor cortex and recorded as compound muscle action potentials (CMAPs) from target limb muscles, evaluating the descending lateral corticospinal tracts and alpha motor neurons; 3) D-Wave: recorded directly from the spinal epidural space via a catheter electrode, evaluating direct pyramidal tract axonal conduction independent of neuromuscular junction transmission; 4) Spontaneous EMG (sEMG): continuous monitoring of root-specific muscles for neurotonic burst and train discharges indicating mechanical root irritation; 5) Triggered EMG (tEMG): delivering electrical current to pedicle screw probes to detect bone breaches; and 6) Bulbocavernosus Reflex (BCR): monitoring the S2–S4 conus medullaris and pudendal reflex arc.'
    },
    {
      'subtitulo': 'Validated Alarm Threshold Criteria',
      'texto': 'Neurophysiological alarm criteria define significant signal loss requiring immediate surgical and systemic action: 1) SSEP alarm: a >=50% decrease in amplitude and/or a >=10% increase in latency compared to stable baseline; 2) TcMEP alarm: a >=50–80% amplitude reduction, significant threshold voltage increase (>100 V), or complete loss of CMAP response in one or more limb muscles; 3) D-Wave alarm: a >=50% reduction in D-wave amplitude during intramedullary tumor resection indicates permanent motor tract injury; 4) sEMG alarm: neurotonic train activity (sustained high-frequency discharge) indicates active mechanical root stretch or compression; 5) Triggered EMG: pedicle screw threshold <6–8 mA in the lumbar spine or <5–6 mA in the thoracic spine indicates medial/inferior pedicle wall breach with direct nerve root contact.'
    },
    {
      'subtitulo': 'Anesthetic Requirements: TIVA Protocol',
      'texto': 'Anesthesia profoundly influences IONM signal acquisition. Halogenated volatile inhalational anesthetics (sevoflurane, desflurane, isoflurane) and nitrous oxide produce dose-dependent suppression of anterior horn alpha motor neurons, markedly blunting or abolishing TcMEP and H-reflex responses. Therefore, Total Intravenous Anesthesia (TIVA)—utilizing continuous infusions of propofol and short-acting opioids (remifentanil, sufentanil, fentanyl), with or without low-dose ketamine/dexmedetomidine—is mandatory. Neuromuscular blocking agents (paralytics) can be used for initial endotracheal intubation but must be completely avoided or reversed during monitoring (train-of-four [TOF] maintained at 4/4 twitches) to permit muscle MEP and EMG recordings.'
    },
    {
      'subtitulo': 'Clinical Indications Across Spine Subspecialties',
      'texto': 'IONM indications are tailored to surgical risk: 1) Adult and adolescent deformity (scoliosis/kyphosis): continuous TcMEP and SSEP monitoring during correction maneuvers (derotation, translation, distraction) and osteotomies (PCO, PSO, VCR); 2) Cervical and thoracic myelopathy: TcMEP and SSEP monitoring from patient positioning (head positioning and traction) through decompression; 3) Intramedullary spinal cord tumors (ependymomas, astrocytomas): combined TcMEP, SSEP, and D-wave monitoring to establish safe resection margins (stopping resection if D-wave drops >50%); 4) Lateral lumbar interbody fusion (LLIF transpsoas): real-time triggered EMG directional mapping to detect and avoid lumbar plexus branches within the psoas; 5) Lumbosacral instrumented fusion: tEMG screw testing and BCR monitoring to protect roots and bowel/bladder function.'
    },
    {
      'subtitulo': 'Structured Intraoperative Rescue Protocol',
      'texto': 'Upon an IONM alert, a rapid, standardized multidisciplinary checklist must be executed simultaneously: 1) Systemic optimization: verify mean arterial pressure (MAP target >80–85 mmHg to restore cord perfusion), check core temperature (>35.5°C), hematocrit (>28–30%), arterial blood gases, and rule out anesthetic bolus or volatile gas accidental administration; 2) Technical verification: check recording/stimulating electrodes and machine grounding; 3) Surgical intervention: immediately halt active surgical maneuvers, remove compressive retractors, irrigate wound with warm saline, release temporary correction rods or distraction forces, reverse deformity correction, and remove recently placed screws or interbody cages. If signals fail to recover despite optimization, consider an intraoperative wake-up test (Stagnara wake-up test).'
    }
  ],
  'aplicacao_clinica': 'In spine deformity surgery, TcMEPs detect impending spinal cord ischemia or stretch injury minutes before SSEP changes appear. When a sudden loss of lower extremity MEPs occurs during scoliosis rod derotation or vertebral column resection (VCR), the surgical team immediately raises MAP to >85–90 mmHg, pauses the procedure, and releases rod tension. In over 85–90% of cases, timely release of correction and perfusion augmentation restore MEP signals and prevent permanent paraplegia. In thoracic and lumbar pedicle screw placement, triggered EMG with thresholds <6 mA accurately flags misplaced screws encroaching on the spinal canal or exiting nerve root, enabling immediate repositioning before wound closure. In intramedullary tumor resections, preserving a D-wave amplitude >50% ensures that the patient will maintain long-term ambulatory motor function, even if transient postoperative paresis occurs due to spinal cord stunning.',
  'mensagem_central': 'Multimodal intraoperative neuromonitoring (TcMEP, SSEP, EMG, D-wave) acts as a dynamic neurological examination in the anesthetized patient. Integrating motor and sensory modalities under total intravenous anesthesia (TIVA), adhering to standardized alarm criteria (>=50% SSEP drop, >=50–80% TcMEP loss, tEMG <6 mA), and executing structured multidisciplinary rescue protocols (MAP elevation >85 mmHg, release of surgical distraction) significantly minimizes catastrophic neurological complications in spine surgery.',
  'por_que_importa': 'A postoperative neurological deficit is among the most devastating complications in spine surgery. IONM provides real-time feedback during the reversible window of neural compromise. Relying on SSEPs alone risks missing pure motor tract ischemia, while monitoring without TIVA results in uninterpretable signals. This chapter provides the evidence-based neurophysiological parameters, anesthetic guidelines, and immediate intraoperative response algorithms necessary to safeguard neural function across complex deformity, degenerative, tumor, and minimally invasive spine procedures.',
  'decs': ['Intraoperative Neurophysiological Monitoring', 'Evoked Potentials, Motor', 'Evoked Potentials, Somatosensory', 'Electromyography', 'Spinal Cord Injuries', 'Spine', 'Anesthesia, Intravenous', 'Surgical Procedures, Operative'],
  'mesh': ['Intraoperative Neurophysiological Monitoring', 'Evoked Potentials, Motor', 'Evoked Potentials, Somatosensory', 'Electromyography', 'Spinal Cord Injuries', 'Spine', 'Anesthesia, Intravenous', 'Surgical Procedures, Operative'],
  'palavras_chave_livres': ['Transcranial motor evoked potentials', 'Somatosensory evoked potentials', 'D-wave', 'Triggered EMG', 'TIVA protocol', 'Spinal cord perfusion', 'Intraoperative rescue checklist'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Multimodal Monitoring is Mandatory',
      'texto': 'SSEPs monitor dorsal columns (posterior spinal artery), while TcMEPs monitor corticospinal motor tracts (anterior spinal artery). Anterior cord ischemia or motor tract compression can cause complete paraplegia while SSEPs remain entirely normal. Always utilize combined TcMEP and SSEP monitoring.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Standardized IONM Alarm Thresholds',
      'texto': 'Recognize significant alarm criteria: >=50% drop in SSEP amplitude, >=50–80% loss of TcMEP amplitude, >=50% decrease in D-wave, sustained neurotonic sEMG trains, or pedicle screw triggered EMG threshold <6 mA in the lumbar spine (indicating medial cortical breach).'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Immediate Rescue Algorithm',
      'texto': 'Upon acute IONM signal loss: immediately elevate Mean Arterial Pressure (MAP > 80–85 mmHg), rule out anesthetic boluses/paralytics, halt surgical manipulation, warm the surgical field, and release correction rods or distraction. Timely reversal restores signals and prevents permanent deficits.'
    }
  ],
  'referencias': pt['14']['referencias'],
  'seo': {
    'titulo': 'Intraoperative Neuromonitoring (IONM) in Spine Surgery | Treatise',
    'meta_descricao': 'Complete guide to intraoperative neurophysiological monitoring: TcMEP, SSEP, triggered EMG, D-wave, TIVA anesthesia, alarm criteria, and rescue protocols.',
    'resumo_chamada': 'Master multimodal IONM in spine surgery: neural pathways, SSEP/TcMEP alarm criteria, TIVA anesthetic management, triggered EMG screw testing, and rescue algorithms.',
    'slug': 'intraoperative-neurophysiological-monitoring-in-spine-surgery'
  }
}

es['14'] = {
  'numero': 14,
  'titulo': 'Monitorización Neurofisiológica Intraoperatoria en Cirugía de Columna',
  'secao': '',
  'autores': pt['14']['autores'],
  'contexto': 'La monitorización neurofisiológica intraoperatoria (MNIO) proporciona una evaluación funcional continua en tiempo real del sistema nervioso central y periférico durante la cirugía raquídea. Actúa como un sistema de alerta temprana para detectar sufrimiento neural reversible, guiar maniobras correctivas y prevenir secuelas neurológicas postoperatorias permanentes. La MNIO multimodal integra potenciales evocados motores transcraneales (TcMEP), potenciales evocados somatosensoriales (SSEP), electromiografía espontánea y evocada/gatillada (sEMG y tEMG), y registros de onda D y reflejo bulbocavernoso. Cada modalidad monitoriza vías neurales distintas con perfiles de vascularización independientes: los SSEP evalúan los cordones posteriores y la vía lemniscal (arterias espinales posteriores), mientras que los TcMEP evalúan el tracto corticoespinal y las motoneuronas del asta anterior (arteria espinal anterior). Por tanto, una isquemia selectiva del territorio espinal anterior o una contusión motora puede abolir los TcMEP sin alterar los SSEP. La EMG espontánea detecta tracción o irritación radicular mecánica, y la EMG gatillada (tEMG) identifica perforaciones de la pared pedicular por tornillos. La MNIO requiere anestesia total intravenosa (TIVA) sin gases halogenados ni relajantes musculares (que bloquean los TcMEP y EMG), control de temperatura y presión arterial, y protocolos estandarizados de rescate intraoperatorio.',
  'objetivo': 'Presentar los fundamentos neurofisiológicos, modalidades, criterios de alarma y protocolos anestésicos de la monitorización neurofisiológica intraoperatoria (MNIO) en cirugía de columna. Al finalizar, el lector deberá comprender las vías evaluadas por SSEP, TcMEP, EMG, onda D y reflejos sacros; aplicar la monitorización multimodal en deformidades, mielopatía cervical, tumores intradurales y abordajes laterales mínimamente invasivos; reconocer los umbrales de alarma neurofisiológica; y ejecutar protocolos de rescate ante la pérdida aguda de señales.',
  'conteudo_principal': [
    {
      'subtitulo': 'Modalidades de MNIO multimodal y vías neurales',
      'texto': 'La MNIO multimodal combina modalidades complementarias: 1) Potenciales Evocados Somatosensoriales (SSEP): estimulación de nervios periféricos (tibial posterior, mediano, ulnar) con registro cortical y cervical, evaluando los cordones posteriores y la vía del lemnisco medial; 2) Potenciales Evocados Motores Transcraneales (TcMEP): estimulación eléctrica transcraneal de la corteza motora con registro en músculos diana de las extremidades, evaluando el haz corticoespinal lateral y las motoneuronas alfa; 3) Onda D: registro epidural directo con electrodo tubular que evalúa la conducción axonal piramidal pura sin depender de la unión neuromuscular; 4) EMG espontánea (sEMG): registro continuo de actividad muscular para detectar descargas neurotónicas por tracción o compresión radicular; 5) EMG gatillada (tEMG): estimulación eléctrica de tornillos pediculares para verificar integridad cortical ósea; y 6) Reflejo Bulbocavernoso (BCR): evalúa el cono medular (S2–S4) y las raíces pudendas.'
    },
    {
      'subtitulo': 'Criterios de alarma neurofisiológica validados',
      'texto': 'Los umbrales de alarma definen deterioro significativo que exige intervención correctiva inmediata: 1) Alarma SSEP: caída >=50% en la amplitud y/o aumento >=10% en la latencia respecto a la línea de base estable; 2) Alarma TcMEP: reducción >=50–80% en la amplitud del potencial, elevación sustancial del umbral de estimulación (>100 V) o pérdida total de la respuesta muscular; 3) Alarma de Onda D: caída >=50% en la amplitud durante la resección de tumores intramedulares predice déficit motor permanente; 4) Alarma sEMG: trenes de descarga neurotónicos continuos indican irritación mecánica radicular activa; 5) EMG gatillada: umbral de estimulación <6–8 mA en columna lumbar o <5–6 mA en torácica indica perforación de la cortical pedicular medial con contacto neural.'
    },
    {
      'subtitulo': 'Protocolo anestésico: Manejo TIVA',
      'texto': 'La anestesia influye de manera determinante en el registro de la MNIO. Los anestésicos inhalatorios halogenados (sevoflurano, desflurano, isoflurano) y el óxido nitroso suprimen la excitabilidad sináptica del asta anterior medular de forma dosis-dependiente, aboliendo los TcMEP. Por ello, es obligatorio el protocolo de Anestesia Total Intravenosa (TIVA) mediante infusiones de propofol y opioides de acción corta (remifentanilo, sufentanilo). Los bloqueadores neuromusculares (relajantes) solo se utilizan para la intubación endotraqueal y deben evitarse por completo durante la cirugía, manteniendo el tren de cuatro (TOF) en 4/4 respuestas para permitir el registro de TcMEP y EMG.'
    },
    {
      'subtitulo': 'Indicaciones clínicas en cirugía raquídea',
      'texto': 'La indicación se adapta al riesgo quirúrgico: 1) Cirugía de deformidades (escoliosis/cifosis): monitorización continua de TcMEP y SSEP durante maniobras de derotación, distracción y osteotomías (PCO, PSO, VCR); 2) Mielopatía cervical y torácica: monitorización desde el posicionamiento de la cabeza y tracción hasta la descompresión; 3) Tumores intramedulares: combinación de TcMEP, SSEP y onda D para determinar límites de resección seguros; 4) Abordaje lateral transpsoas (LLIF): mapeo continuo con EMG gatillada direccional para sortear las ramas del plexo lumbar; 5) Artrodesis instrumentada lumbosacra: control de tornillos con tEMG y monitorización del BCR.'
    },
    {
      'subtitulo': 'Protocolo de rescate intraoperatorio ante pérdida de señal',
      'texto': 'Ante una alarma neurofisiológica se ejecuta inmediatamente una lista de verificación multidisciplinaria: 1) Optimización sistémica: elevar la presión arterial media (PAM >80–85 mmHg para restaurar la perfusión medular), verificar normotermia (>35,5°C), hematocrito (>28–30%) y descartar bolos accidentales de anestésicos o relajantes; 2) Verificación técnica: comprobar electrodos e impedancias; 3) Intervención quirúrgica: detener inmediatamente la maniobra en curso, retirar separadores compresivos, irrigar con suero caliente, aflojar barras de corrección o fuerzas de distracción y retirar tornillos o cajas recién implantados. Si las señales no recuperan, considerar la prueba del despertar intraoperatorio (test de Stagnara).'
    }
  ],
  'aplicacao_clinica': 'En cirugía de deformidades, los TcMEP detectan isquemia o elongación medular minutos antes de que aparezcan cambios en los SSEP. Si ocurre una pérdida aguda de TcMEP durante la corrección de una escoliosis o tras una osteotomía VCR, el equipo quirúrgico eleva de inmediato la PAM a >85–90 mmHg, suspende la manipulación y libera la tensión de las barras de corrección. En más del 85–90% de los casos, la reversión temprana de la deformidad y la optimización hemodinámica restablecen las señales y previenen la paraplejía permanente. En la colocación de tornillos pediculares, la EMG gatillada con umbrales <6 mA alerta con precisión sobre la perforación de la pared pedicular medial, permitiendo recolocar el implante inmediatamente. En tumores intramedulares, preservar una onda D >50% asegura que el paciente conservará la marcha funcional a largo plazo.',
  'mensagem_central': 'La monitorización neurofisiológica intraoperatoria multimodal (TcMEP, SSEP, EMG, onda D) funciona como un examen neurológico continuo en el paciente anestesiado. La integración de vías motoras y sensitivas bajo anestesia total intravenosa (TIVA), el respeto a los umbrales de alarma validados (caída >=50% SSEP, >=50–80% TcMEP, tEMG <6 mA) y la aplicación inmediata de protocolos de rescate (PAM >85 mmHg, liberación de distracción) reducen drásticamente las complicaciones neurológicas en cirugía de columna.',
  'por_que_importa': 'El déficit neurológico postoperatorio es una de las complicaciones más devastadoras en cirugía de columna. La MNIO ofrece una ventana de oportunidad crítica durante la fase reversible del daño neural. Confiar únicamente en los SSEP expone al riesgo de no detectar isquemias motoras puras, mientras que operar sin protocolo TIVA anula la utilidad de los potenciales motores. Este capítulo proporciona las bases neurofisiológicas, pautas anestésicas y algoritmos de rescate esenciales para proteger el tejido neural en procedimientos complejos.',
  'decs': ['Monitorización Neurofisiológica Intraoperatoria', 'Potenciales Evocados Motores', 'Potenciales Evocados Somatosensoriales', 'Electromiografía', 'Traumatismos de la Médula Espinal', 'Columna Vertebral', 'Anestesia Intravenosa', 'Procedimientos Quirúrgicos Operativos'],
  'mesh': ['Intraoperative Neurophysiological Monitoring', 'Evoked Potentials, Motor', 'Evoked Potentials, Somatosensory', 'Electromyography', 'Spinal Cord Injuries', 'Spine', 'Anesthesia, Intravenous', 'Surgical Procedures, Operative'],
  'palavras_chave_livres': ['Potenciales evocados motores transcraneales', 'Potenciales somatosensoriales', 'Onda D', 'EMG gatillada', 'Protocolo TIVA', 'Perfusión medular', 'Algoritmo de rescate intraoperatorio'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'La monitorización debe ser multimodal',
      'texto': 'Los SSEP monitorizan los cordones posteriores (arteria espinal posterior), mientras que los TcMEP evalúan la vía motora corticoespinal (arteria espinal anterior). La isquemia anterior o contusión motora puede provocar paraplejía con SSEP completamente normales. Utilice siempre monitorización combinada TcMEP y SSEP.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Criterios de alarma neurofisiológica',
      'texto': 'Considere alarmas críticas: caída >=50% en amplitud de SSEP, pérdida >=50–80% en amplitud de TcMEP, disminución >=50% en onda D, trenes neurotónicos en sEMG o umbrales de EMG gatillada de tornillos <6 mA en columna lumbar (que indican perforación cortical medial).'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Protocolo de rescate inmediato',
      'texto': 'Ante la pérdida aguda de señales: eleve inmediatamente la Presión Arterial Media (PAM >80–85 mmHg), descarte bolos anestésicos/relajantes, detenga la manipulación quirúrgica, irrigue con suero caliente y libere barras o fuerzas de distracción. La acción temprana revierte el daño neural.'
    }
  ],
  'referencias': pt['14']['referencias'],
  'seo': {
    'titulo': 'Monitorización Neurofisiológica Intraoperatoria | Tratado de Columna',
    'meta_descricao': 'Guía integral de MNIO en columna: TcMEP, SSEP, EMG gatillada, onda D, protocolo anestésico TIVA, criterios de alarma y algoritmos de rescate intraoperatorio.',
    'resumo_chamada': 'Domine la monitorización neurofisiológica intraoperatoria en cirugía de columna: vías neurales, umbrales de alarma, técnica TIVA y manejo de eventos críticos.',
    'slug': 'monitorizacion-neurofisiologica-intraoperatoria-en-cirugia-de-columna'
  }
}

# ==========================================
# CHAPTER 15
# ==========================================
en['15'] = {
  'numero': 15,
  'titulo': 'Diagnostic Imaging of the Spine',
  'secao': '',
  'autores': pt['15']['autores'],
  'contexto': 'Diagnostic imaging modalities of the vertebral column address distinct clinical questions and must be selected based on the target anatomical tissue, functional weight-bearing status, and pre-test clinical hypothesis. Plain radiographs remain indispensable as the primary weight-bearing investigation to demonstrate overall spinal alignment, degenerative instability on dynamic flexion-extension views, and global spinopelvic parameters. Computed tomography (CT) provides superior multiplanar resolution of osseous architecture, cortical breaches, osteolysis, pars defects, facet arthrosis, vacuum phenomena (gas), and ossification of the posterior longitudinal ligament (OPLL) without anatomical overlap. Magnetic resonance imaging (MRI) is the gold standard for evaluating neural structures (spinal cord, conus medullaris, cauda equina, exiting nerve roots), intervertebral disc morphology, bone marrow edema, soft-tissue collections, spinal infections (spondylodiscitis), and epidural tumors. Ultrasonography finds focused application in neonatal spinal dysraphism screening and image-guided interventional procedures. Bone scintigraphy and SPECT/CT detect altered osteoblastic turnover in facet arthropathy, active spondylolysis, pseudarthrosis, and metastatic disease. A fundamental clinical challenge is avoiding both the inappropriate selection of imaging modalities and the over-interpretation of incidental findings: asymptomatic disc bulges, degenerative Modic endplate changes, facet arthrosis, and benign vertebral hemangiomas are highly prevalent in healthy populations. Imaging findings must always be correlated strictly with the patient’s clinical history and neurological examination.',
  'objetivo': 'To present the principles, indications, diagnostic strengths, and limitations of major spine imaging modalities (radiography, CT, MRI, ultrasound, nuclear medicine) across degenerative disc disease, canal stenosis, diffuse idiopathic skeletal hyperostosis (DISH), ankylosing spondylitis, spinal infections, acute trauma, and incidental findings. The reader should be able to select the optimal imaging modality, recognize characteristic imaging patterns, determine when intravenous contrast or dynamic views are required, and correlate radiographic findings with clinical pathology.',
  'conteudo_principal': [
    {
      'subtitulo': 'Modalities: Radiography, CT, MRI, and Scintigraphy',
      'texto': 'Plain radiographs (AP, lateral, obliques, dynamic flexion-extension) evaluate alignment, disc height loss, osteophytes, and dynamic spondylolisthesis (>3–4 mm translation or >10° angular motion). Multi-detector CT provides sub-millimeter isotropic osseous detail, indispensable for complex fractures, surgical instrumentation planning, and pseudarthrosis assessment. MRI utilizes T1-weighted (anatomical detail, fatty marrow), T2-weighted (CSF, disc hydration, cord edema, stenosis), STIR/T2 fat-suppressed (bone marrow edema, acute fractures, active inflammation), and gadolinium-enhanced T1 sequences (differentiating recurrent disc herniation from epidural scar, vascular malformations, tumors, and epidural abscesses).'
    },
    {
      'subtitulo': 'Degenerative Cascade, Modic Changes, and Stenosis',
      'texto': 'MRI readily depicts the degenerative cascade (Pfirrmann grading of disc degeneration 1–5). Modic endplate classifications reflect vertebral marrow changes: Type 1 (inflammatory/vascular edema, hypointense on T1, hyperintense on T2/STIR, highly correlated with active axial pain); Type 2 (fatty conversion, hyperintense on T1 and T2); Type 3 (sclerosis, hypointense on T1 and T2). Spinal canal and neural foraminal stenosis are categorized qualitatively and quantitatively (Schizas classification for lumbar central stenosis, Lee classification for foraminal stenosis) based on CSF obliteration, root compression, and epidural fat loss.'
    },
    {
      'subtitulo': 'DISH and Axial Spondyloarthritis (Ankylosing Spondylitis)',
      'texto': 'Diffuse Idiopathic Skeletal Hyperostosis (DISH / Forestier disease) is defined radiographically by flowing anterolateral ossification spanning at least four contiguous vertebral bodies, preservation of disc height, and absence of sacroiliitis. Ankylosing Spondylitis (AS) features early bilateral symmetric sacroiliitis, squaring of vertebral bodies, Romanus lesions (shiny corners), Andersson lesions (inflammatory discitis), and thin, delicate syndesmophytes producing a "bamboo spine." Both conditions create a rigid, long-lever arm spine highly susceptible to catastrophic, highly unstable extension-distraction fractures after trivial trauma.'
    },
    {
      'subtitulo': 'Spinal Infections: Spondylodiscitis vs. Tuberculosis',
      'texto': 'Pyogenic spondylodiscitis characteristically demonstrates early T2/STIR hyperintensity and post-contrast enhancement of the intervertebral disc and adjacent subchondral vertebral endplates, with rapid disc space collapse and endplate erosion. In contrast, tuberculous spondylodiscitis (Pott disease) frequently spares the intervertebral disc initially, involves multiple contiguous or non-contiguous vertebral bodies, causes extensive anterior subligamentous spread, large calcified cold paraspinal/psoas abscesses, and profound angular kyphotic collapse (gibbus deformity).'
    },
    {
      'subtitulo': 'Trauma Evaluation and Incidental Findings',
      'texto': 'In acute trauma, whole-spine CT is the primary modality to identify fracture lines, retropulsed fragments, and facet dislocations. MRI is mandatory to evaluate spinal cord compression, intramedullary contusion/hemorrhage (presaging poor neurological recovery), and posterior ligamentous complex (PLC) disruption, which determines surgical instability under AO Spine and TLICS classifications. Incidental benign findings—such as typical vertebral hemangiomas (corduroy cloth appearance on coronal CT, hyperintense on T1 and T2) and Tarlov cysts—must be recognized to prevent unnecessary biopsies or surgeries.'
    }
  ],
  'aplicacao_clinica': 'In clinical practice, imaging must always be guided by the clinical question. In suspected mechanical instability or spondylolisthesis, weight-bearing dynamic flexion-extension radiographs are essential because supine MRI can mask significant translational instability. In suspected cauda equina syndrome, cervical myelopathy, or epidural abscess, emergent MRI (with contrast for infection/tumor) is the modality of choice. In patients with previous spine surgery presenting with recurrent leg pain, gadolinium-enhanced MRI differentiates non-enhancing avascular recurrent disc herniation from diffusely enhancing vascularized epidural scar tissue. In rigid spine patients (ankylosing spondylitis or DISH) presenting with new back pain following minor falls, thin-cut CT of the entire spine is mandatory, as lethal transdiscal/transvertebral fractures are frequently missed on plain radiographs. Recognizing that Modic 1 changes represent active inflammatory remodeling helps guide targeted non-operative and interventional therapies.',
  'mensagem_central': 'Spine diagnostic imaging is governed by matching the specific clinical question to the complementary strengths of each modality. Radiographs assess weight-bearing alignment and dynamic instability; CT resolves complex osseous architecture, gas, and mineralization; MRI characterizes neural elements, bone marrow edema, and soft tissues; and nuclear imaging highlights active metabolic turnover. Radiographic findings must never be interpreted in isolation, as degenerative changes and incidental lesions are ubiquitous in asymptomatic individuals.',
  'por_que_importa': 'Selecting the wrong imaging study can obscure the exact pathology being sought: dynamic instability disappears in supine MRI, osseous bridging in pseudarthrosis is unresolvable on plain radiographs, and life-threatening fractures in ankylosing spondylitis are invisible on standard X-rays. Conversely, over-interpreting incidental MRI abnormalities leads to unnecessary patient anxiety and inappropriate surgical interventions. This chapter equips the clinician to select the most appropriate imaging modality, interpret critical imaging patterns, and integrate radiographic findings with clinical decision-making.',
  'decs': ['Diagnostic Imaging', 'Radiography', 'Tomography, X-Ray Computed', 'Magnetic Resonance Imaging', 'Spine', 'Intervertebral Disc Degeneration', 'Spinal Stenosis', 'Spondylodiscitis'],
  'mesh': ['Diagnostic Imaging', 'Radiography', 'Tomography, X-Ray Computed', 'Magnetic Resonance Imaging', 'Spine', 'Intervertebral Disc Degeneration', 'Spinal Stenosis', 'Spondylodiscitis'],
  'palavras_chave_livres': ['Modic changes', 'Dynamic spinal radiographs', 'Spondylodiscitis MRI', 'DISH Forestier', 'Ankylosing spondylitis imaging', 'Posterior ligamentous complex', 'Pfirrmann grading'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Complementary Roles of Imaging Modalities',
      'texto': 'Plain radiographs assess alignment and dynamic instability under load; CT provides sub-millimeter osseous detail and fracture morphology; MRI evaluates the spinal cord, nerve roots, marrow edema, and discs; and gadolinium-enhanced MRI separates recurrent disc from epidural scar.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Differentiate Pyogenic from Tuberculous Infection',
      'texto': 'Pyogenic spondylodiscitis destroys the intervertebral disc and adjacent endplates early with intense contrast enhancement. Tuberculous spondylodiscitis (Pott disease) spares the disc initially, features extensive subligamentous spread, large cold abscesses, and angular gibbus collapse.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'CT is Mandatory for Rigid Spine Trauma',
      'texto': 'In patients with ankylosing spondylitis or DISH, minor trauma can produce highly unstable extension-distraction fractures ("chalk stick fractures") that are frequently missed on plain X-rays. Always perform thin-cut whole-spine CT in these patients.'
    }
  ],
  'referencias': pt['15']['referencias'],
  'seo': {
    'titulo': 'Diagnostic Imaging of the Spine | Spine Surgery Treatise',
    'meta_descricao': 'Comprehensive guide to spine imaging: radiography, CT, MRI, nuclear medicine, Modic changes, stenosis, DISH, ankylosing spondylitis, and spondylodiscitis.',
    'resumo_chamada': 'Master diagnostic imaging of the spine: selection of radiography, CT, and MRI, differential diagnosis of infections and inflammatory disorders, and trauma evaluation.',
    'slug': 'diagnostic-imaging-of-the-spine'
  }
}

es['15'] = {
  'numero': 15,
  'titulo': 'Diagnóstico por Imagen de la Columna Vertebral',
  'secao': '',
  'autores': pt['15']['autores'],
  'contexto': 'Los métodos de diagnóstico por imagen de la columna vertebral responden a preguntas clínicas específicas y deben seleccionarse en función del tejido anatómico diana, la posición de carga funcional del paciente y la hipótesis clínica formulada. Las radiografías simples conservan un valor fundamental como estudio inicial en bipedestación para evaluar la alineación espinopélvica global, la pérdida de altura discal y la inestabilidad segmentaria mediante proyecciones dinámicas en flexoextensión. La tomografía computarizada (TC) ofrece una resolución submilimétrica superior para la anatomía ósea, fracturas complejas, gas intradiscal, osteólisis y valoración de consolidación de artrodesis sin superposición de estructuras. La resonancia magnética (RM) constituye el estándar de oro para el tejido neural (médula espinal, cono medular, raíces nerviosas), discos intervertebrales, edema óseo, abscesos e infecciones (espondilodiscitis) y tumores epidurales. La ecografía tiene un rol acotado pero valioso en el tamizaje de disrafismos en neonatos y en procedimientos intervencionistas guiados. La gammagrafía y el SPECT/CT detectan alteraciones del recambio osteoblástico en espondilólisis activa, artrosis facetaria y metástasis. El principal reto clínico consiste en evitar la solicitud inadecuada de estudios y la sobreinterpretación de hallazgos degenerativos incidentales (hernias asintomáticas, cambios Modic, hemangiomas típicos), asegurando que la imagen siempre se interprete en correlación con el examen neurológico.',
  'objetivo': 'Presentar los principios, indicaciones, ventajas y limitaciones de las principales modalidades de imagen raquídea (radiografía, TC, RM, ecografía, medicina nuclear) y demostrar su aplicación en enfermedad degenerativa, estenosis, hiperostosis esquelética (DISH), espondiloartritis anquilosante, infecciones, traumatismos y hallazgos incidentales. Al finalizar, el lector deberá seleccionar el método óptimo, reconocer patrones morfológicos característicos y determinar cuándo se requiere contraste intravenoso o estudios dinámicos.',
  'conteudo_principal': [
    {
      'subtitulo': 'Modalidades: Radiografía, TC, RM y Medicina Nuclear',
      'texto': 'Las radiografías en carga (AP, lateral y dinámicas en flexoextensión) evalúan alineación, escoliosis, lordosis e inestabilidad dinámica (>3–4 mm de traslación o >10° de angulación). La TC multidetector define la cortical ósea, el conducto raquídeo y las fracturas conminutas. La RM utiliza secuencias T1 (anatomía y grasa medular), T2 (líquido cefalorraquídeo, hidratación discal, edema medular y estenosis), STIR/T2 con supresión grasa (edema óseo agudo, inflamación activa) y secuencias T1 con contraste de gadolinio (diferenciación entre fibrosis epidural vascularizada y recidiva herniaria avascular, tumores y abscesos).'
    },
    {
      'subtitulo': 'Degeneración discal, cambios Modic y estenosis',
      'texto': 'La RM clasifica la degeneración discal (escala de Pfirrmann 1–5). Los cambios de Modic en los platillos vertebrales reflejan estados histopatológicos: Tipo 1 (edema inflamatorio vascular, hipointenso en T1 e hiperintenso en T2/STIR, estrechamente asociado a lumbalgia activa); Tipo 2 (sustitución grasa, hiperintenso en T1 y T2); Tipo 3 (esclerosis ósea, hipointenso en T1 y T2). La estenosis del conducto lumbar y de los forámenes se clasifica cualitativamente mediante escalas como la de Schizas (según la obliteración de las raicillas en el saco dural) y la de Lee para estenosis foraminal.'
    },
    {
      'subtitulo': 'Hiperostosis (DISH) y Espondiloartritis Axial',
      'texto': 'La Hiperostosis Esquelética Idiopática Difusa (DISH / enfermedad de Forestier) se caracteriza radiológicamente por osificación anterolateral continua que abarca al menos cuatro cuerpos vertebrales contiguos, con conservación del espacio discal y ausencia de sacroilitis. La Espondilitis Anquilosante (EA) presenta sacroilitis bilateral simétrica precoz, cuadratura vertebral, lesiones de Romanus (esquinas brillantes), lesiones de Andersson (disquitis inflamatoria) y sindesmofitos delgados y verticales ("columna en caña de bambú"). Ambas confieren una rigidez extrema que predispone a fracturas inestables transdiscales tras traumatismos leves.'
    },
    {
      'subtitulo': 'Infecciones raquídeas: Espondilodiscitis piógena vs. Tuberculosa',
      'texto': 'La espondilodiscitis piógena muestra precozmente hiperintensidad en T2/STIR y realce con contraste en el disco intervertebral y platillos adyacentes, con rápida destrucción discal y erosión subcondral. Por el contrario, la espondilodiscitis tuberculosa (mal de Pott) respeta inicialmente el disco intervertebral, compromete múltiples cuerpos vertebrales contiguos con extensión subligamentaria anterior, produce grandes abscesos fríos paravertebrales/psoas calcificados y colapso angular en cifosis grave (giba).'
    },
    {
      'subtitulo': 'Evaluación en trauma y hallazgos incidentales',
      'texto': 'En traumatismos agudos, la TC de columna completa es el estudio inicial de elección para definir trazos de fractura, fragmentos retropulsados y luxaciones articulares. La RM es indispensable para valorar contusión o hemorragia medular y la integridad del complejo ligamentario posterior (PLC), determinante de la inestabilidad en las clasificaciones AO Spine y TLICS. Los hallazgos incidentales benignos (como hemangiomas vertebrales típicos con patrón en empalizada en TC e hiperintensidad en T1/T2, y quistes de Tarlov) deben reconocerse para evitar intervenciones innecesarias.'
    }
  ],
  'aplicacao_clinica': 'En la práctica diaria, la indicación del estudio debe partir del problema clínico. Ante sospecha de inestabilidad mecánica o espondilolistesis, las radiografías dinámicas en flexoextensión son esenciales, ya que la RM en decúbito puede ocultar la traslación. En sospecha de síndrome de cauda equina, mielopatía cervical o absceso epidural, la RM urgente (con contraste si se sospecha infección/tumor) es la técnica obligada. En pacientes operados previamente con dolor radicular recurrente, la RM con gadolinio diferencia el tejido cicatrizal fibrótico (que realza intensamente de forma precoz) de una recidiva discal herniaria (que no realza centralmente). En pacientes con columna rígida (espondilitis anquilosante o DISH) que presenten dolor tras una caída menor, la TC completa es obligatoria para descartar fracturas transvertebrales por hiperextensión que pasan desapercibidas en radiografías simples.',
  'mensagem_central': 'El diagnóstico por imagen de la columna vertebral se rige por la complementariedad entre los métodos y su correlación con la clínica. La radiografía evalúa alineación e inestabilidad en carga; la TC detalla la arquitectura ósea, calcificaciones y fracturas; la RM caracteriza el tejido neural, médula ósea y partes blandas; y la medicina nuclear detecta hipermetabolismo activo. Ningún hallazgo en imagen debe interpretarse de forma aislada sin una adecuada correlación clínica.',
  'por_que_importa': 'Elegir el estudio de imagen equivocado puede ocultar la patología: la inestabilidad funcional desaparece en decúbito supino, las calcificaciones pueden confundirse con gas en RM y las fracturas en columnas anquilosadas son invisibles en radiografías simples. Por otra parte, la sobreinterpretación de anomalías degenerativas incidentales en la RM genera cirugías innecesarias. Este capítulo proporciona las claves para seleccionar el método adecuado, reconocer patrones de urgencia e integrar las imágenes a la decisión quirúrgica.',
  'decs': ['Diagnóstico por Imagen', 'Radiografía', 'Tomografía Computarizada por Rayos X', 'Imagen por Resonancia Magnética', 'Columna Vertebral', 'Degeneración del Disco Intervertebral', 'Estenosis Espinal', 'Espondilodiscitis'],
  'mesh': ['Diagnostic Imaging', 'Radiography', 'Tomography, X-Ray Computed', 'Magnetic Resonance Imaging', 'Spine', 'Intervertebral Disc Degeneration', 'Spinal Stenosis', 'Spondylodiscitis'],
  'palavras_chave_livres': ['Cambios de Modic', 'Radiografías dinámicas', 'Resonancia de espondilodiscitis', 'DISH enfermedad de Forestier', 'Espondilitis anquilosante imagen', 'Complejo ligamentario posterior', 'Escala de Pfirrmann'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'Complementariedad de las técnicas de imagen',
      'texto': 'La radiografía evalúa alineación y movilidad dinámica en bipedestación; la TC define con precisión milimétrica el hueso y las fracturas; la RM caracteriza médula espinal, raíces, discos y edema óseo; y la RM con gadolinio distingue recidiva discal de fibrosis postquirúrgica.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Diferenciar infección piógena de tuberculosis',
      'texto': 'La espondilodiscitis piógena destruye precozmente el disco y platillos vertebrales con intenso realce inflamatorio. El mal de Pott tuberculoso respeta inicialmente el disco, compromete múltiples vértebras por extensión subligamentaria y produce grandes abscesos fríos calcificados.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'TC obligatoria en traumatismos de columna rígida',
      'texto': 'En pacientes con espondilitis anquilosante o DISH, caídas menores pueden provocar fracturas transdiscales muy inestables que pasan desapercibidas en radiografías. Solicite siempre TC de columna completa ante cualquier nuevo dolor tras un traumatismo.'
    }
  ],
  'referencias': pt['15']['referencias'],
  'seo': {
    'titulo': 'Diagnóstico por Imagen de la Columna Vertebral | Tratado de Columna',
    'meta_descricao': 'Guía integral de diagnóstico por imagen raquídeo: radiografías dinámicas, TC, RM, cambios Modic, estenosis, DISH, espondilitis anquilosante y espondilodiscitis.',
    'resumo_chamada': 'Domine la selección e interpretación de radiografía, TC y RM en columna vertebral, diagnóstico diferencial de infecciones y evaluación de fracturas.',
    'slug': 'diagnostico-por-imagen-de-la-columna-vertebral'
  }
}

# ==========================================
# CHAPTER 16
# ==========================================
en['16'] = {
  'numero': 16,
  'titulo': 'Differential Diagnosis: Spinal Disorders and Orthopedic Conditions',
  'secao': '',
  'autores': pt['16']['autores'],
  'contexto': 'Axial neck or back pain and radiating limb pain frequently originate from adjacent or distant non-spinal musculoskeletal structures rather than primary vertebral pathology. Because the vertebral column spans from the occiput to the sacrum and maintains intimate neural, mechanical, and kinetic-chain relationships with the shoulder girdle, thoracic rib cage, pelvic ring, hip joints, and peripheral nerves, non-spinal conditions frequently mimic spinal disorders. In the cervical region, rotator cuff tendinopathy, subacromial impingement, glenohumeral osteoarthritis, and thoracic outlet syndrome (TOS) can mimic cervical radiculopathy. In the thoracic region, costovertebral/costotransverse joint dysfunction, intercostal neuralgia, rib fractures, and slipping rib syndrome can mimic thoracic radiculopathy or disc disease. In the lumbosacral region, hip osteoarthritis ("hip-spine syndrome"), sacroiliac joint dysfunction, trochanteric bursitis (greater trochanteric pain syndrome [GTPS]), piriformis syndrome, plantar fasciitis, and common peroneal nerve entrapment at the fibular head can closely simulate lumbar disc herniation, radiculopathy, or spinal stenosis. Because asymptomatic degenerative disc bulges and facet arthrosis are ubiquitous on MRI, discovering a radiographic abnormality does not establish causality. A structured clinical history, regional joint physical examination, provocative maneuvers, and selective diagnostic anesthetic injections are essential for distinguishing true spinal disorders from mimicking orthopedic conditions.',
  'objetivo': 'To present the primary orthopedic differential diagnoses of clinical symptoms attributed to the cervical, thoracic, and lumbar spine. The reader should be able to systematically characterize pain patterns; examine adjacent joints (shoulder, ribs, sacroiliac joint, hip); perform and interpret validated provocative orthopedic maneuvers; utilize diagnostic anesthetic blocks and electrodiagnostic testing; and distinguish primary spinal pathologies from mimicking or coexisting musculoskeletal disorders.',
  'conteudo_principal': [
    {
      'subtitulo': 'Clinical Reasoning: Avoiding the MRI Trap',
      'texto': 'Diagnostic reasoning begins with detailed symptom mapping using the OPQRST mnemonic: exact anatomical origin, pain radiation boundaries, aggravating motions, and relieving positions. A major pitfall in spine surgery is the "MRI trap"—attributing symptoms to asymptomatic degenerative changes (present in >40% of asymptomatic adults) without establishing clinical concordance. Clinicians must confirm that the anatomical location, dermatomal/myotomal distribution, and provocative maneuvers match the radiological abnormality before initiating invasive treatment.'
    },
    {
      'subtitulo': 'Cervical Region: Spine vs. Shoulder and Entrapment Neuropathies',
      'texto': 'Cervical radiculopathy causes dermatomal pain radiating below the elbow, aggravated by neck extension/rotation (positive Spurling test) and relieved by shoulder abduction (positive Bakody sign). Shoulder pathologies (rotator cuff tear, subacromial bursitis, adhesive capsulitis) cause pain localized over the lateral deltoid that does not radiate below the elbow, aggravated by overhead arm elevation, internal rotation, and active shoulder abduction (positive Neer, Hawkins-Kennedy, and Jobe empty-can tests) with normal neurological examination. Thoracic outlet syndrome (TOS) produces diffuse arm paresthesias and vascular symptoms exacerbated by elevated arm maneuvers (Roos and Adson tests). Peripheral entrapments (carpal tunnel, cubital tunnel) feature localized focal nerve compression without neck pain.'
    },
    {
      'subtitulo': 'Thoracic Region: Spine vs. Thoracic Cage and Costovertebral Joints',
      'texto': 'Thoracic spine disorders (herniations, fractures, tumors) produce dermatomal band-like radiation around the chest wall, exacerbated by axial loading and coughing. Thoracic cage conditions—such as costovertebral/costotransverse joint arthrosis, costochondritis (Tietze syndrome), sternoclavicular arthritis, and slipping rib syndrome (hypermobility of the 8th–10th false ribs, positive hooking maneuver)—cause localized chest wall tenderness reproduced by direct anterior-posterior rib cage compression, trunk twisting, or deep inspiration, without true neurological deficits.'
    },
    {
      'subtitulo': 'Lumbar Region: Hip-Spine Syndrome, SI Joint, and Peripheral Nerves',
      'texto': 'Hip osteoarthritis produces anterior groin and buttock pain that radiates along the anteromedial thigh to the knee, aggravated by weight-bearing and hip internal rotation (restricted internal rotation, positive Patrick FABER test, antalgic Trendelenburg gait). Sacroiliac (SI) joint dysfunction produces pain below the L5 level over the posterior superior iliac spine (Fortin finger test), buttock, and posterior thigh, reproduced by SI stress tests (distraction, compression, thigh thrust, FABER, Gaenslen tests; 3 or more positive tests yield >90% sensitivity). Greater trochanteric pain syndrome (GTPS) causes pinpoint tenderness over the lateral greater trochanter, aggravated by lying on the affected side. Piriformis syndrome causes sciatic notch tenderness without true spinal motor/sensory deficits. Common peroneal nerve entrapment at the fibular head causes foot drop with isolated weakness of ankle dorsiflexion and eversion (preserving ankle inversion and hip abduction) and focal Tinel sign at the fibular neck.'
    }
  ],
  'aplicacao_clinica': 'In clinical practice, the physical examination must systematically interrogate adjacent joints before confirming a spinal diagnosis. When a patient presents with neck and shoulder pain, examine both cervical range of motion with Spurling test and active shoulder abduction with Hawkins/Neer tests. If shoulder active and passive motion is limited and painful, administer a diagnostic subacromial local anesthetic injection: immediate pain relief confirms shoulder impingement as the primary pain driver. In a patient with buttock, thigh, and groin pain with both lumbar stenosis and severe hip osteoarthritis on radiographs (hip-spine syndrome), evaluate hip internal rotation and consider an intra-articular hip joint lidocaine injection. If hip injection resolves the predominant groin/thigh pain, total hip arthroplasty should precede lumbar decompression. In refractory buttock pain, a fluoroscopically guided sacroiliac joint injection achieving >=70–80% pain relief confirms the SI joint as the primary pain generator, avoiding unnecessary lumbar fusion.',
  'mensagem_central': 'Differential diagnosis of spinal complaints requires strict concordance between clinical history, regional joint examination, neurological localization, and neuroimaging. Radiating limb pain is not synonymous with compressive radiculopathy, and an abnormal spine MRI does not prove causality. Systematic examination of the shoulder, thoracic cage, hip, sacroiliac joint, and peripheral nerves—supplemented by targeted diagnostic anesthetic blocks—differentiates primary spinal disorders from mimicking orthopedic conditions.',
  'por_que_importa': 'Operating on a spinal disc herniation or performing lumbar decompression in a patient whose true pain generator is hip osteoarthritis, rotator cuff arthropathy, or sacroiliac joint dysfunction represents a catastrophic diagnostic failure that leaves the patient symptomatic. This chapter organizes the clinical and orthopedic differential diagnosis by region, equipping clinicians with validated provocative tests and diagnostic injection protocols to correctly pinpoint the pain source and deliver appropriate care.',
  'decs': ['Diagnosis, Differential', 'Spinal Diseases', 'Joint Diseases', 'Rotator Cuff Injuries', 'Osteoarthritis, Hip', 'Sacroiliac Joint', 'Peripheral Nerve Injuries', 'Physical Examination'],
  'mesh': ['Diagnosis, Differential', 'Spinal Diseases', 'Joint Diseases', 'Rotator Cuff Injuries', 'Osteoarthritis, Hip', 'Sacroiliac Joint', 'Peripheral Nerve Injuries', 'Physical Examination'],
  'palavras_chave_livres': ['Hip-spine syndrome', 'Rotator cuff vs. radiculopathy', 'Sacroiliac joint dysfunction', 'Patrick FABER test', 'Diagnostic joint blocks', 'Greater trochanteric pain syndrome', 'Common peroneal nerve entrapment'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Avoid the MRI Causality Trap',
      'texto': 'Asymptomatic disc bulges, facet arthrosis, and foraminal narrowing are ubiquitous on spine MRI in healthy adults. Never attribute symptoms to a radiographic abnormality without demonstrating clinical concordance through dermatomal pain mapping and physical exam.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Deciphering Hip-Spine Syndrome',
      'texto': 'Groin pain aggravated by walking and restricted hip internal rotation indicate primary hip osteoarthritis, whereas buttock/thigh pain relieved by lumbar flexion indicates spinal stenosis. When both coexist, perform an intra-articular hip local anesthetic injection to identify the primary pain driver.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Diagnostic Blocks Resolve Diagnostic Dilemmas',
      'texto': 'When shoulder, sacroiliac, or hip pathology overlaps with cervical or lumbar spine MRI findings, targeted image-guided local anesthetic injections (subacromial, intra-articular hip, or SI joint) providing >=70–80% immediate relief confirm the true pain generator before undertaking spinal surgery.'
    }
  ],
  'referencias': pt['16']['referencias'],
  'seo': {
    'titulo': 'Differential Diagnosis: Spinal Disorders and Orthopedic Conditions | Treatise',
    'meta_descricao': 'Clinical guide to orthopedic differential diagnosis in spine surgery: hip-spine syndrome, rotator cuff vs. cervical radiculopathy, SI joint dysfunction, and diagnostic blocks.',
    'resumo_chamada': 'Master the differential diagnosis between spine disorders and orthopedic conditions: hip-spine syndrome, shoulder impingement, sacroiliac dysfunction, and diagnostic injections.',
    'slug': 'differential-diagnosis-spinal-pathologies-and-orthopedic-conditions'
  }
}

es['16'] = {
  'numero': 16,
  'titulo': 'Diagnóstico Diferencial: Patologías de la Columna y Condiciones Ortopédicas',
  'secao': '',
  'autores': pt['16']['autores'],
  'contexto': 'El dolor axial cervical o lumbar y el dolor irradiado a las extremidades frecuentemente se originan en estructuras musculoesqueléticas no raquídeas adyacentes o periféricas. Debido a que la columna vertebral se extiende desde el occipucio hasta el sacro y mantiene relaciones anatómicas, biomecánicas y de cadenas cinéticas estrechas con la cintura escapular, la caja torácica, la pelvis, las caderas y los nervios periféricos, diversas afecciones ortopédicas mimetizan enfermedades de la columna. En la región cervical, las tendinopatías del manguito rotador, el pinzamiento subacromial, la artrosis glenohumeral y el síndrome del opérculo torácico pueden simular una radiculopatía cervical. En la región torácica, la disfunción costovertebral/costotransversa, las fracturas costales y el síndrome de la costilla deslizante simulan radiculopatías torácicas. En la región lumbosacra, la artrosis de cadera ("síndrome cadera-columna"), la disfunción de la articulación sacroilíaca, el síndrome doloroso del trocánter mayor (bursitis trocantérea), el síndrome del piriforme, la fascitis plantar y la compresión del nervio peroneo común en la cabeza del peroné simulan hernias discales, radiculopatías o estenosis de canal lumbar. Dado que las protrusiones discales y la artrosis facetaria asintomáticas son sumamente frecuentes en la RM de personas sanas, identificar una alteración radiológica no demuestra causalidad. Una anamnesis rigurosa, el examen articular sistemático, pruebas provocativas validadas y bloqueos anestésicos diagnósticos son esenciales para diferenciar afecciones raquídeas de patologías ortopédicas simuladoras.',
  'objetivo': 'Presentar los principales diagnósticos diferenciales ortopédicos de las manifestaciones clínicas atribuidas a la columna cervical, torácica y lumbar. Al finalizar, el lector deberá caracterizar de forma sistemática los patrones de dolor; explorar articulaciones adyacentes (hombro, parrilla costal, sacroilíaca, cadera); realizar e interpretar maniobras ortopédicas de provocación validadas; utilizar bloqueos anestésicos diagnósticos y estudios electrofisiológicos de manera dirigida; y distinguir patologías vertebrales primarias de condiciones ortopédicas coexistentes o simuladoras.',
  'conteudo_principal': [
    {
      'subtitulo': 'Razonamiento clínico: Evitar la trampa de la RM',
      'texto': 'El diagnóstico diferencial se inicia con la caracterización sistemática del dolor mediante la mnemotecnia OPQRST: origen anatómico exacto, límites de irradiación, maniobras agravantes y posturas de alivio. La "trampa de la resonancia magnética" consiste en atribuir síntomas a alteraciones degenerativas incidentales (presentes en más del 40% de adultos asintomáticos) sin concordancia clínica. El cirujano debe demostrar que la semiología neurológica y las maniobras de provocación coinciden con el nivel radiológico antes de indicar procedimientos invasivos.'
    },
    {
      'subtitulo': 'Región cervical: Columna vs. Hombro y Atrapamientos Periféricos',
      'texto': 'La radiculopatía cervical produce dolor que irradia por debajo del codo siguiendo un dermatoma, agravado con la extensión y rotación cervical (prueba de Spurling positiva) y aliviado con la abducción del hombro (signo de Bakody). Las afecciones del hombro (rotura del manguito rotador, bursitis subacromial, capsulitis adhesiva) provocan dolor localizado en el deltoides lateral que no sobrepasa el codo, empeora con la elevación del brazo sobre la cabeza y rotación interna (pruebas de Neer, Hawkins-Kennedy y Jobe positivas) con examen neurológico normal. El síndrome del opérculo torácico causa parestesias difusas y síntomas vasculares que aumentan con maniobras de elevación del brazo (pruebas de Roos y Adson).'
    },
    {
      'subtitulo': 'Región torácica: Columna vs. Parrilla Costal y Articulaciones Costovertebrales',
      'texto': 'Las afecciones de la columna torácica (hernias, fracturas, tumores) generan dolor en banda metamérico alrededor del tórax agravado por la carga axial y la maniobra de Valsalva. Las afecciones de la pared torácica —como la artrosis costovertebral/costotransversa, la costocondritis (síndrome de Tietze) y el síndrome de la costilla deslizante (hipermovilidad de las costillas 8.ª a 10.ª, maniobra del gancho positiva)— producen dolor a la palpación focal, compresión de la caja torácica o respiración profunda, sin déficit neurológico.'
    },
    {
      'subtitulo': 'Región lumbar: Síndrome Cadera-Columna, Sacroilíaca y Nervios Periféricos',
      'texto': 'La artrosis de cadera genera dolor inguinal y en nalga que irradia por la cara anteromedial del muslo hasta la rodilla, agravado con la bipedestación y la rotación interna de cadera (rotación interna limitada, test de Patrick FABER positivo, marcha de Trendelenburg). La disfunción de la articulación sacroilíaca causa dolor bajo L5 sobre la espina ilíaca posterosuperior (test del dedo de Fortin), nalga y muslo posterior, reproducible con pruebas de estrés sacroilíaco (distracción, compresión, empuje femoral, FABER, Gaenslen; 3 o más pruebas positivas confieren >90% de sensibilidad). El síndrome de dolor trocantéreo mayor genera dolor exquisito a la palpación del trocánter mayor. El atrapamiento del nervio peroneo común en la cabeza del peroné causa pie caído con debilidad aislada de dorsiflexión y eversión (respetando la inversión del tobillo y la abducción de cadera).'
    }
  ],
  'aplicacao_clinica': 'En la práctica clínica, el examen físico debe evaluar sistemáticamente las articulaciones vecinas antes de confirmar una indicación quirúrgica espinal. En un paciente con dolor cervicobraquial, explore la columna con la prueba de Spurling y el hombro con las pruebas de Hawkins/Neer. Si la movilidad del hombro es dolorosa y limitada, una infiltración subacromial diagnóstica con anestésico local que alivie el dolor confirma el pinzamiento subacromial como el origen primario. En pacientes con dolor lumbosacro, inguinal y de muslo que presenten tanto estenosis lumbar como artrosis severa de cadera (síndrome cadera-columna), evalúe la rotación interna coxofemoral y realice un bloqueo anestésico intraarticular de cadera: si alivia el dolor principal, la artroplastia total de cadera debe preceder a la cirugía de columna. En dolor lumboglúteo refractario, un bloqueo sacroilíaco guiado por fluoroscopia con alivio >=70–80% confirma la articulación sacroilíaca como generador del dolor, evitando artrodesis lumbares innecesarias.',
  'mensagem_central': 'El diagnóstico diferencial de las afecciones de la columna requiere una estricta concordancia entre la historia clínica, el examen articular regional, la localización neurológica y la neuroimagen. El dolor irradiado no es sinónimo de radiculopatía y una alteración en la RM no demuestra causalidad. La exploración sistemática del hombro, tórax, cadera, articulación sacroilíaca y nervios periféricos —complementada con bloqueos diagnósticos selectivos— permite diferenciar las enfermedades raquídeas de condiciones ortopédicas simuladoras.',
  'por_que_importa': 'Operar una hernia discal o realizar una descompresión lumbar en un paciente cuyo dolor real proviene de una artrosis de cadera, una tendinopatía de hombro o una disfunción sacroilíaca constituye un fracaso diagnóstico grave que deja al paciente sin alivio. Este capítulo estructura el diagnóstico diferencial ortopédico por regiones, proporcionando al cirujano pruebas clínicas validadas y protocolos de infiltración diagnóstica para identificar con certeza el origen del dolor y orientar el tratamiento correcto.',
  'decs': ['Diagnóstico Diferencial', 'Enfermedades de la Columna Vertebral', 'Enfermedades Articulares', 'Lesiones del Manguito de los Rotadores', 'Osteoartritis de la Cadera', 'Articulación Sacroilíaca', 'Traumatismos de los Nervios Periféricos', 'Examen Físico'],
  'mesh': ['Diagnosis, Differential', 'Spinal Diseases', 'Joint Diseases', 'Rotator Cuff Injuries', 'Osteoarthritis, Hip', 'Sacroiliac Joint', 'Peripheral Nerve Injuries', 'Physical Examination'],
  'palavras_chave_livres': ['Síndrome cadera-columna', 'Manguito rotador vs. radiculopatía', 'Disfunción articulación sacroilíaca', 'Prueba Patrick FABER', 'Bloqueos anestésicos diagnósticos', 'Síndrome trocantéreo mayor', 'Compresión nervio peroneo común'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'Evitar la trampa de la causalidad en RM',
      'texto': 'Las protrusiones discales, artrosis facetaria y estenosis asintomáticas son hallazgos habituales en la RM de adultos sanos. No atribuya el dolor a una imagen sin demostrar correlación clínica exacta mediante mapeo dermatómico y examen articular.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Descifrar el Síndrome Cadera-Columna',
      'texto': 'El dolor inguinal que empeora al caminar y la limitación de la rotación interna señalan artrosis de cadera, mientras que el dolor glúteo que cede al sentarse indica estenosis lumbar. Si coexisten, realice una infiltración intraarticular de cadera para definir el tratamiento prioritario.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Los bloqueos anestésicos resuelven dilemas',
      'texto': 'Cuando el dolor de hombro, cadera o sacroilíaca coincida con alteraciones en la RM de columna, los bloqueos anestésicos locales ecoguiados o radioscópicos con alivio >=70–80% confirman la verdadera fuente del dolor antes de indicar cirugía raquídea.'
    }
  ],
  'referencias': pt['16']['referencias'],
  'seo': {
    'titulo': 'Diagnóstico Diferencial: Columna y Condiciones Ortopédicas | Tratado',
    'meta_descricao': 'Guía clínica de diagnóstico diferencial ortopédico en columna: síndrome cadera-columna, manguito rotador vs. radiculopatía, sacroilíaca y bloqueos diagnósticos.',
    'resumo_chamada': 'Domine el diagnóstico diferencial entre patologías de columna y afecciones ortopédicas: síndrome cadera-columna, hombro doloroso, disfunción sacroilíaca y bloqueos.',
    'slug': 'diagnostico-diferencial-patologias-de-la-columna-y-condiciones-ortopedicas'
  }
}

with open('slice_13_16_en.json', 'w', encoding='utf-8') as f:
    json.dump(en, f, ensure_ascii=False, indent=2)

with open('slice_13_16_es.json', 'w', encoding='utf-8') as f:
    json.dump(es, f, ensure_ascii=False, indent=2)

print('Batch 13-16 successfully saved!')
