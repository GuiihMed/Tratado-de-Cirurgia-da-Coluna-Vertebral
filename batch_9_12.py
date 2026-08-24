import json

with open('/Users/manoeldesign/.gemini/antigravity/brain/7e1703fb-1acf-40aa-a137-05338f0871de/scratch/slice_1_28_pt.json', 'r', encoding='utf-8') as f:
    pt = json.load(f)

en = {}
es = {}

# ==========================================
# CHAPTER 9
# ==========================================
en['9'] = {
  'numero': 9,
  'titulo': 'Principles of Arthrodesis, Graft Biology, and Bone Substitutes in Spine Surgery',
  'secao': '',
  'autores': pt['9']['autores'],
  'contexto': 'Spinal arthrodesis (fusion) is not merely the mechanical implantation of hardware, but a complex biological cascade in which local mechanical stability, graft biology, host biology, vascular supply, and the host bed environment converge to achieve solid osseous consolidation. The biological cascade follows defined phases: initial inflammation and hematoma formation, osteoprogenitor recruitment, revascularization, cartilaginous/woven bone formation (osteogenesis/osteoconduction), and long-term remodeling according to Wolff\'s law. Autologous bone graft—specifically autologous iliac crest bone graft (ICBG)—remains the historic gold standard due to its complete combination of osteogenesis, osteoinduction, and osteoconduction. However, donor site morbidity has driven the development and widespread use of bone graft substitutes, including allografts (cortical, cancellous, and demineralized bone matrix [DBM]), ceramics (hydroxyapatite, tricalcium phosphate, bioactive glass), bone marrow aspirate concentrates (BMAC), and recombinant osteoinductive growth factors such as bone morphogenetic proteins (rhBMP-2 and rhBMP-7). Understanding graft biology, carrier mechanics, host risk factors (smoking, malnutrition, diabetes, osteoporosis, NSAIDs), and surgical bed preparation is fundamental for preventing pseudarthrosis and achieving durable clinical success.',
  'objetivo': 'To present the cellular and molecular biology of bone healing in spinal fusion and evaluate the properties of bone grafts and bone graft substitutes. The reader should be able to understand the triad of osteogenesis, osteoconduction, and osteoinduction; differentiate the advantages, limitations, and indications of autografts, allografts, synthetic ceramics, DBM, cellular bone matrices, and BMPs; identify local and systemic factors influencing fusion; and apply evidence-based principles to graft selection and surgical bed decortication.',
  'conteudo_principal': [
    {
      'subtitulo': 'The Biological Cascade of Spinal Fusion',
      'texto': 'Spinal fusion proceeds through four integrated physiological phases: 1) Inflammatory phase (days 0–7), characterized by hematoma formation, platelet degranulation, and cytokine release (TGF-beta, PDGF, FGF, BMPs); 2) Vascular and osteoprogenitor recruitment phase (weeks 1–4), where neoangiogenesis provides oxygen and mesenchymal stem cells migrate into the graft; 3) Osteogenic and bone formation phase (months 1–6), synthesizing immature woven bone through intramembranous or endochondral ossification; and 4) Remodeling phase (months 6–24+), where osteoclastic resorption and osteoblastic deposition reorganize woven bone into lamellar trabecular bone adapted to axial load vectors (Wolff\'s law).'
    },
    {
      'subtitulo': 'The Biological Triad: Osteogenesis, Osteoinduction, Osteoconduction',
      'texto': 'A successful graft possesses one or more properties of the biological triad: 1) Osteogenesis: the presence of viable, living osteoblasts and mesenchymal progenitor cells capable of de novo bone formation; 2) Osteoinduction: the recruitment and biochemical stimulation of undifferentiated stem cells into osteoblastic lineages by bioactive growth factors (e.g., BMPs, TGF-beta); 3) Osteoconduction: the provision of a three-dimensional structural scaffolding with appropriate porosity (100–500 micrometers) that permits cellular adhesion, fibrovascular ingrowth, and mineralized matrix deposition.'
    },
    {
      'subtitulo': 'Bone Grafts and Bone Graft Substitutes',
      'texto': 'Autologous bone graft (iliac crest or local bone harvested during laminectomy/facetectomy) provides all three triad elements. Allografts (fresh-frozen or freeze-dried) provide osteoconduction and varying structural load support but lack viable osteogenic cells and carry minor immunogenicity. Demineralized bone matrix (DBM) preserves native collagen scaffolding and residual osteoinductive BMPs. Synthetic ceramics (hydroxyapatite [HA], beta-tricalcium phosphate [beta-TCP], biphasic calcium phosphate, and bioactive glass) are purely osteoconductive matrix extenders. Bone Morphogenetic Protein-2 (rhBMP-2) is a potent osteoinductive cytokine delivered via an absorbable collagen sponge (ACS) that reliably induces robust bone formation, though it requires strict dose control to prevent complications such as seroma formation, osteolysis, and heterotopic ossification.'
    },
    {
      'subtitulo': 'Host Factors, Bed Preparation, and Mechanical Stability',
      'texto': 'Systemic host factors substantially impact fusion rates: nicotine use and smoking reduce microvascular perfusion; uncontrolled diabetes mellitus impairs osteoblast function; malnutrition (albumin < 3.5 g/dL) starves bone synthesis; chronic steroid or high-dose NSAID therapy inhibits early inflammatory signaling; and severe osteoporosis decreases anchorage. Locally, meticulous surgical decortication of transverse processes, lamina, or vertebral endplates exposes vascularized cancellous bleeding bone ("the garden bed"). Interbody cages provide immediate mechanical distraction, prevent graft compression beyond physiological tolerance, and shield the fusion mass from destructive shear forces.'
    }
  ],
  'aplicacao_clinica': 'Graft selection must be tailored to fusion environment, mechanical load, and patient risk profile. For anterior/interbody fusion (ALIF, LLIF, TLIF), local bone combined with osteoconductive ceramics, DBM, or BMP-2 inside a lordotic cage achieves excellent fusion rates due to high compressive loads and rich endplate vascularity. For posterolateral gutter fusion (PLF), where tensile forces predominate and vascularity is lower, autologous bone, DBM with BMAC, or rhBMP-2 are preferred. Meticulous decortication down to bleeding bone without breaching the structural subchondral plate in interbody spaces prevents cage subsidence while maximizing cellular delivery. In high-risk patients (smokers, revision surgery, multi-level deformity, metabolic bone disease), aggressive optimization (smoking cessation >6 weeks preoperatively, glycemic control HbA1c < 7.5%, teriparatide/anabolic therapy for osteoporosis) and judicious use of osteoinductive enhancers are essential to prevent pseudarthrosis and hardware breakage.',
  'mensagem_central': 'Spinal arthrodesis is a biological phenomenon facilitated by mechanical instrumentation. The success of fusion requires the harmonious convergence of a viable biological triad (osteogenesis, osteoinduction, osteoconduction), meticulous surgical bed preparation (decortication), rigid biomechanical stabilization, and systemic host optimization. Implants provide temporary stability; permanent clinical success depends entirely on achieving a mature, solid bony union.',
  'por_que_importa': 'Instrumentation holds the spine, but biology fuses it. If a solid bony arthrodesis is not achieved, any spinal implant—regardless of metal grade or design—will inevitably fail by fatigue fracture, loosening, or pullout. Understanding the phases of bone healing, the specific properties and risks of bone substitutes (DBM, ceramics, BMPs), and the systemic inhibitors of osteogenesis enables the surgeon to choose the optimal graft strategy, prepare the fusion bed correctly, and eliminate preventable causes of pseudarthrosis.',
  'decs': ['Spinal Fusion', 'Bone Transplantation', 'Bone Substitutes', 'Osteogenesis', 'Bone Morphogenetic Proteins', 'Pseudarthrosis', 'Wolff\'s Law', 'Biocompatible Materials'],
  'mesh': ['Spinal Fusion', 'Bone Transplantation', 'Bone Substitutes', 'Osteogenesis', 'Bone Morphogenetic Proteins', 'Pseudarthrosis', 'Wolff\'s Law', 'Biocompatible Materials'],
  'palavras_chave_livres': ['Autologous bone graft', 'Demineralized bone matrix', 'rhBMP-2', 'Osteoconduction', 'Osteoinduction', 'Surgical bed decortication', 'Pseudarthrosis'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'The Biological Triad of Bone Healing',
      'texto': 'Solid fusion requires osteogenesis (living cells), osteoinduction (molecular signaling like BMPs), and osteoconduction (3D porous scaffolding). Autologous bone possesses all three; graft extenders and substitutes must be selected strategically to compensate for missing triad components.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Meticulous Decortication is Mandatory',
      'texto': 'No bone graft or expensive synthetic substitute can fuse without a vascularized host bed. Aggressive decortication of transverse processes, lamina, or endplates to expose bleeding cancellous bone is the single most critical surgical step for successful osteointegration.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Optimize the Host and Control BMP Dosing',
      'texto': 'Smoking, malnutrition, uncontrolled diabetes, and chronic NSAID use dramatically suppress osteoblastic activity, doubling pseudarthrosis rates. When using rhBMP-2, adhere strictly to recommended dosing and contained placement to avoid osteolysis, seroma, and airway-compromising cervical edema.'
    }
  ],
  'referencias': pt['9']['referencias'],
  'seo': {
    'titulo': 'Principles of Spinal Arthrodesis and Bone Graft Biology | Treatise',
    'meta_descricao': 'Complete guide to spinal fusion biology: graft types (autograft, allograft, DBM, BMP-2, ceramics), the biological triad, host optimization, and pseudarthrosis prevention.',
    'resumo_chamada': 'Understand the biology of spinal fusion, the osteogenic triad, bone graft substitute mechanics, surgical bed decortication, and strategies to prevent pseudarthrosis.',
    'slug': 'principles-of-arthrodesis-graft-biology-and-bone-substitutes'
  }
}

es['9'] = {
  'numero': 9,
  'titulo': 'Principios de la Artrodesis, Biología del Injerto y Sustitutos Óseos en la Columna',
  'secao': '',
  'autores': pt['9']['autores'],
  'contexto': 'La artrodesis (fusión) vertebral no se limita a la colocación mecánica de implantes metálicos, sino que constituye una compleja cascada biológica en la que convergen la estabilidad mecánica local, la biología del injerto, la biología del huésped, el lecho vascular receptor y el microambiente celular para lograr una consolidación ósea sólida y definitiva. La cascada biológica progresa a través de fases ordenadas: inflamación inicial y formación de hematoma, reclutamiento de progenitores osteogénicos, revascularización, síntesis de hueso inmaduro (osteogénesis y osteoconducción) y remodelación biomecánica a largo plazo según la ley de Wolff. El autoinjerto óseo —específicamente el obtenido de la cresta ilíaca— continúa siendo el estándar de oro biológico por reunir simultáneamente osteogénesis, osteoinducción y osteoconducción. No obstante, la morbilidad de la zona donante ha impulsado el desarrollo de sustitutos óseos: aloinjertos, matrices óseas desmineralizadas (DBM), cerámicas sintéticas (hidroxiapatita, fosfato tricálcico), aspirados de médula ósea concentrada y proteínas morfogenéticas óseas recombinantes (rhBMP-2 y rhBMP-7). Comprender la biología celular, el comportamiento del transportador, los factores de riesgo del huésped (tabaquismo, desnutrición, diabetes, osteoporosis, AINEs) y la preparación del lecho óseo es indispensable para evitar la seudoartrosis.',
  'objetivo': 'Presentar la biología celular y molecular de la consolidación ósea en la artrodesis vertebral y analizar las propiedades de los injertos y sustitutos óseos. Al finalizar, el lector deberá comprender la tríada de osteogénesis, osteoconducción y osteoinducción; diferenciar las ventajas, limitaciones e indicaciones de autoinjertos, aloinjertos, cerámicas sintéticas, DBM y BMPs; identificar factores locales y sistémicos que condicionan la fusión; y aplicar criterios basados en evidencia para la selección del injerto y el decorticado del lecho.',
  'conteudo_principal': [
    {
      'subtitulo': 'La cascada biológica de la fusión vertebral',
      'texto': 'La consolidación de la artrodesis progresa a través de cuatro fases biológicas integradas: 1) Fase inflamatoria (días 0–7), con hematoma inicial, degranulación plaquetaria y liberación de citoquinas angiogénicas y mitogénicas (TGF-beta, PDGF, FGF, BMPs); 2) Fase vascular y de reclutamiento osteoprogenitor (semanas 1–4), donde la neoangiogénesis permite la migración de células madre mesenquimatosas al injerto; 3) Fase osteogénica y de aposición ósea (meses 1–6), mediante osificación membranosa o endocondral con depósito de matriz osteoide inmadura; y 4) Fase de remodelación (meses 6–24+), donde el hueso inmaduro se transforma en hueso trabecular laminar orientado según las líneas de carga mecánica (ley de Wolff).'
    },
    {
      'subtitulo': 'La tríada biológica: Osteogénesis, Osteoinducción, Osteoconducción',
      'texto': 'Un injerto exitoso debe poseer una o más propiedades de la tríada: 1) Osteogénesis: presencia de osteoblastos y progenitores viables con capacidad de sintetizar matriz ósea de novo; 2) Osteoinducción: capacidad de citoquinas bioactivas (ej. BMPs) para estimular la diferenciación de células mesenquimatosas indiferenciadas hacia el linaje osteoblástico; 3) Osteoconducción: provisión de un andamiaje tridimensional poroso (100–500 micrómetros) que permita la adhesión celular, la penetración fibrovascular y la aposición mineralizada.'
    },
    {
      'subtitulo': 'Injertos y sustitutos óseos',
      'texto': 'El autoinjerto (cresta ilíaca o hueso local obtenido en laminectomía) reúne las tres propiedades de la tríada. El aloinjerto aporta osteoconducción y soporte estructural inicial, pero carece de células viables y posee baja osteoinducción. La matriz ósea desmineralizada (DBM) conserva el colágeno tipo I y trazas de BMPs nativas. Las cerámicas sintéticas (hidroxiapatita, beta-fosfato tricálcico, vidrios bioactivos) actúan exclusivamente como andamios osteoconductores. La proteína morfogenética recombinante humana tipo 2 (rhBMP-2) sobre esponja de colágeno absorbible induce una potente osteogénesis ectópica y ortotópica, requiriendo un control estricto de dosis para evitar osteólisis, seromas o formación ósea heterotópica.'
    },
    {
      'subtitulo': 'Factores del huésped, decorticado y estabilidad mecánica',
      'texto': 'Los factores sistémicos influyen decisivamente en la tasa de consolidación: el consumo de tabaco/nicotina compromete la microvascularización; la diabetes descompensada altera la función osteoblástica; la desnutrición (albúmina < 3,5 g/dL) limita la síntesis proteica; y los corticoides crónicos y AINEs en dosis altas bloquean la cascada inflamatoria inicial. Localmente, el decorticado exhaustivo de apófisis transversas, láminas o platillos vertebrales expone el lecho vascular esponjoso. Las cajas intersomáticas proporcionan estabilidad inmediata, restauran la altura y protegen el injerto frente a fuerzas de cizallamiento.'
    }
  ],
  'aplicacao_clinica': 'La selección del injerto debe adaptarse al lecho anatómico, la carga mecánica y el perfil biológico del paciente. En la fusión intersomática anterior o lateral (ALIF, LLIF, TLIF), el hueso local combinado con cerámicas osteoconductoras, DBM o rhBMP-2 dentro de una caja intersomática logra altas tasas de fusión debido al lecho esponjoso vascularizado y a la carga compresiva axial favorable. En la artrodesis posterolateral de gotieras (PLF), sometida a tensión y con menor vascularización, se recomienda autoinjerto, DBM con médula ósea concentrada o rhBMP-2. El decorticado minucioso hasta observar sangrado esponjoso es el paso quirúrgico más determinante. En pacientes de alto riesgo (tabaquismo, diabetes, cirugías de revisión, osteoporosis severa), se requiere optimización metabólica preoperatoria (cese del tabaco >6 semanas, HbA1c < 7,5%, teriparatida en osteoporosis) para prevenir la seudoartrosis y la falla de la instrumentación.',
  'mensagem_central': 'La artrodesis vertebral es un fenómeno biológico facilitado por la instrumentación mecánica. El éxito de la consolidación exige la interacción armónica entre una tríada biológica competente (osteogénesis, osteoinducción, osteoconducción), un decorticado meticuloso del lecho óseo, una fijación biomecánica rígida y la optimización de los factores sistémicos del huésped. Los implantes estabilizan temporalmente; el resultado clínico definitivo depende de la consolidación biológica ósea.',
  'por_que_importa': 'La instrumentación sostiene la columna, pero la biología la consolida. Si no se logra una fusión ósea sólida, cualquier implante raquídeo sufrirá aflojamiento o rotura por fatiga de materiales. Comprender las fases biológicas de la consolidación, las propiedades de los sustitutos óseos (DBM, cerámicas, BMPs) y los inhibidores sistémicos de la osteogénesis permite al cirujano seleccionar la mejor estrategia reconstructiva y prevenir la seudoartrosis.',
  'decs': ['Fusión Vertebral', 'Trasplante Óseo', 'Sustitutos Óseos', 'Osteogénesis', 'Proteínas Morfogenéticas Óseas', 'Seudoartrosis', 'Ley de Wolff', 'Materiales Biocompatibles'],
  'mesh': ['Spinal Fusion', 'Bone Transplantation', 'Bone Substitutes', 'Osteogenesis', 'Bone Morphogenetic Proteins', 'Pseudarthrosis', 'Wolff\'s Law', 'Biocompatible Materials'],
  'palavras_chave_livres': ['Autoinjerto óseo', 'Matriz ósea desmineralizada', 'rhBMP-2', 'Osteoconducción', 'Osteoinducción', 'Decorticado del lecho quirúrgico', 'Seudoartrosis'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'La tríada biológica de la consolidación',
      'texto': 'La consolidación sólida requiere osteogénesis (células viables), osteoinducción (señales moleculares como BMPs) y osteoconducción (andamio tridimensional poroso). El hueso autólogo reúne las tres; los sustitutos óseos deben combinarse para suplir las propiedades faltantes.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'El decorticado del lecho es insustituible',
      'texto': 'Ningún sustituto óseo o molécula inductora puede suplir la falta de un lecho receptor vascularizado. El decorticado exhaustivo de apófisis transversas, láminas y platillos vertebrales hasta exponer hueso esponjoso sangrante es la maniobra quirúrgica más crítica para la osteointegración.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Optimizar al huésped y dosificar BMP',
      'texto': 'El tabaquismo, la desnutrición, la diabetes no controlada y los AINEs crónicos duplican la tasa de seudoartrosis. Al utilizar rhBMP-2, respete rigurosamente las dosis y la contención del implante para evitar osteólisis, seromas inflamatorios y edema cervical obstructivo.'
    }
  ],
  'referencias': pt['9']['referencias'],
  'seo': {
    'titulo': 'Principios de Artrodesis y Biología del Injerto Óseo | Tratado de Columna',
    'meta_descricao': 'Guía integral de biología de fusión raquídea: autoinjerto, aloinjerto, DBM, rhBMP-2, cerámicas sintéticas, tríada biológica y prevención de seudoartrosis.',
    'resumo_chamada': 'Domine los fundamentos celulares de la artrodesis vertebral, la tríada osteogénica, el uso de sustitutos óseos, el decorticado y la prevención de fallas de consolidación.',
    'slug': 'principios-de-la-artrodesis-biologia-del-injerto-y-sustitutos-oseos-en-la-columna'
  }
}

# ==========================================
# CHAPTER 10
# ==========================================
en['10'] = {
  'numero': 10,
  'titulo': 'Biomechanics of Implants in Spinal Fixation',
  'secao': '',
  'autores': pt['10']['autores'],
  'contexto': 'Spinal fixation must provide immediate rigid structural stability, maintain or restore physiological multiplanar alignment, shield healing bone grafts from destructive shear and tensile stresses, and resist mechanical fatigue failure until solid biological arthrodesis is achieved. The biomechanical performance of a spinal construct results from the complex interplay of implant biomaterials (titanium alloys, cobalt-chromium, stainless steel, PEEK, silicon nitride, porous 3D-printed titanium), geometric structural design (screws, rods, hooks, wires, plates, interbody cages), bone-implant interface anchorage, and global load sharing. Pedicle screws achieve three-column purchase by anchoring into the cortical pedicle walls and cancellous vertebral body. Their pullout strength, toggle resistance, and fatigue life depend on outer diameter, pitch, thread design (cylindrical vs. conical), insertion depth, trajectory (anatomical vs. cortical bone trajectory [CBT]), and local bone mineral density (BMD). Spinal rods must balance flexibility for contouring with fatigue resistance and stiffness (stiffness ranking: CoCr > stainless steel > Ti alloy > PEEK). Interbody cages reconstruct the anterior load-bearing column, restore disc height and indirect foraminal decompression, and mitigate posterior hardware stress. Understanding construct rigidity, stress shielding, crosslink connectors, junctional stress transfer, and salvage techniques for osteoporotic bone (cement augmentation, bicortical purchase) is essential for avoiding catastrophic implant failure, screw loosening, rod breakage, and proximal junctional failure (PJF).',
  'objetivo': 'To present the biomechanical fundamentals of spinal instrumentation and analyze the mechanics of pedicle screws, rods, hooks, wires, plates, and interbody cages. The reader should be able to understand load-sharing principles, yield strength, fatigue limit, and elastic modulus of spinal biomaterials; analyze factors governing pedicle screw pullout and trajectory selection (standard vs. CBT); optimize construct stiffness, rod diameter, and crosslink usage; and apply biomechanical strategies to prevent subsidence, screw pullout, rod breakage, and junctional breakdown.',
  'conteudo_principal': [
    {
      'subtitulo': 'Biomaterials and Mechanical Properties',
      'texto': 'Biomaterial selection dictates construct stiffness, fatigue life, and imaging compatibility. Commercially pure titanium and titanium alloys (Ti-6Al-4V) provide excellent biocompatibility, corrosion resistance, high fatigue strength, and an elastic modulus (110 GPa) closer to cortical bone than stainless steel (200 GPa) or cobalt-chromium (CoCr, 210–230 GPa), reducing stress shielding while causing minimal MRI artifact. Cobalt-chromium rods offer superior rigidity and maintain surgical sagittal correction in long adult deformity constructs but concentrate junctional stress. Polyetheretherketone (PEEK, modulus 3.6 GPa, close to cancellous bone) and porous 3D-printed titanium are widely used for interbody cages to minimize subsidence and promote direct osseointegration.'
    },
    {
      'subtitulo': 'Pedicle Screw Biomechanics and Anchorage',
      'texto': 'Pedicle screws provide the strongest biomechanical fixation by engaging all three spinal columns. Pullout strength and toggle resistance are governed by: 1) Screw outer diameter (the most critical factor, occupying 70–80% of inner pedicle width); 2) Screw length and depth of insertion (engaging 70–80% of vertebral body depth increases resistance by 20–30%); 3) Thread geometry (dual-lead, buttress, or conical core profiles); 4) Trajectory: the standard anatomical trajectory traverses the anatomical axis of the pedicle, whereas Cortical Bone Trajectory (CBT) screws employ a mediolateral, caudocranial path that engages high-density cortical bone of the lamina, pedicle wall, and superior vertebral border, increasing pullout strength in osteoporotic bone by over 30%; and 5) Bone mineral density (BMD): screw pullout strength correlates directly with DEXA T-scores.'
    },
    {
      'subtitulo': 'Rods, Connectors, and Multi-Rod Constructs',
      'texto': 'Rods transmit axial, bending, and torsional loads across instrumented segments. Rod stiffness is proportional to the fourth power of its radius (Stiffness proportional to r^4); thus, increasing rod diameter from 5.5 mm to 6.35 mm increases bending stiffness by approximately 75%. In high-stress deformity applications (e.g., across pedicle subtraction osteotomies [PSO] or the lumbosacral junction), satellite, accessory, or delta multi-rod constructs distribute mechanical loads and substantially reduce rod fatigue fracture and nonunion rates. Transverse crosslinks increase torsional construct rigidity in long constructs (especially across thoracic kyphosis) but provide minimal resistance to flexion-extension forces.'
    },
    {
      'subtitulo': 'Interbody Cages and Anterior Column Support',
      'texto': 'The anterior and middle columns normally support 80% of axial compressive loads (Dennis three-column model). Interbody cages (ALIF, LLIF, OLIF, TLIF, PLIF) reconstruct this anterior load-bearing column, sharing compressive loads with posterior pedicle screws and reducing posterior rod bending moments by up to 70%. Cage footprint, lordotic angle, and placement on the peripheral apophyseal ring (the densest structural zone of the vertebral endplate) are critical for preventing cage subsidence into the softer central cancellous bone.'
    },
    {
      'subtitulo': 'Instrumentation in the Osteoporotic Spine',
      'texto': 'Osteoporosis severely compromises screw purchase, leading to premature loosening, windshield-wiper toggle, and pullout. Biomechanical strategies to enhance fixation include: using larger diameter screws, under-tapping the pedicle tract (by 1.0 mm), utilizing Cortical Bone Trajectory (CBT) screws, polymethylmethacrylate (PMMA) fenestrated screw cement augmentation, multi-level fixation constructs, bicortical purchase (in S1 or cervical spine), and supplementing with iliac or S2-alar-iliac (S2AI) pelvic screws across the lumbosacral junction.'
    }
  ],
  'aplicacao_clinica': 'Biomechanical construct design must balance rigidity with load sharing to foster bone healing. For short-segment degenerative instability (1–2 levels), titanium alloy 5.5 mm or 6.0 mm rods with interbody support provide ideal load sharing without over-stiffening. For long deformity constructs or 3-column osteotomies (PSO/VCR), CoCr rods or multi-rod (3-rod/4-rod) constructs with outrigger accessory rods are indicated to prevent rod fatigue fracture before fusion matures. In osteoporotic patients (DEXA T-score < -2.5), avoid relying solely on standard pedicle screws: utilize cement-augmented fenestrated screws, CBT screws, or extend instrumentation levels, ensuring that interbody cages span the dense peripheral cortical apophyseal ring bilaterally to eliminate subsidence. At construct terminations, avoid abrupt transitions in stiffness by using softer transition rods, ligamentous tethering, or prophylactic vertebroplasty at the upper instrumented vertebra (UIV/UIV+1) to prevent proximal junctional kyphosis (PJK) and vertebral compression fractures.',
  'mensagem_central': 'Spinal instrumentation is a temporary mechanical bridge designed to maintain stability and alignment while biological fusion matures. Construct success depends on matching biomaterial stiffness (Ti, CoCr, PEEK), screw trajectory (standard vs. CBT), rod construct geometry (multi-rod), and anterior column load sharing (cages) to patient bone quality and biomechanical demands. Over-stiff constructs invite junctional failure, while inadequate constructs fail by fatigue before arthrodesis occurs.',
  'por_que_importa': 'Every spinal implant alters load distribution across the vertebral column. A perfectly positioned screw can fail by fatigue in the setting of pseudarthrosis; an excessively rigid rod can correct severe deformity while causing catastrophic junctional fracture; and a high-tech interbody cage can subside into the vertebral body if undersized or placed off the apophyseal ring. This chapter translates mechanical engineering principles into concrete operative decisions, ensuring that construct design withstands physiological stresses and successfully achieves permanent biological fusion.',
  'decs': ['Spinal Fusion', 'Bone Screws', 'Biomechanical Phenomena', 'Prostheses and Implants', 'Titanium', 'Polyetheretherketone', 'Materials Testing', 'Stress, Mechanical'],
  'mesh': ['Spinal Fusion', 'Bone Screws', 'Biomechanical Phenomena', 'Prostheses and Implants', 'Titanium', 'Polyetheretherketone', 'Materials Testing', 'Stress, Mechanical'],
  'palavras_chave_livres': ['Pedicle screw biomechanics', 'Cortical bone trajectory', 'Multi-rod constructs', 'Interbody cage subsidence', 'Stress shielding', 'Cement augmentation', 'Proximal junctional kyphosis'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Instrumentation is a Load-Sharing Bridge',
      'texto': 'Spinal hardware must share load with the anterior column (interbody cage) and bone graft. Constructing anterior support offloads up to 70% of posterior rod stresses, preventing cyclic fatigue failure and rod breakage while promoting solid arthrodesis according to Wolff\'s law.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Optimize Purchase in Osteoporotic Bone',
      'texto': 'In patients with compromised bone mineral density (osteopenia/osteoporosis), utilize Cortical Bone Trajectory (CBT) screws, PMMA cement-augmented fenestrated screws, larger diameter screws, and wide-footprint interbody cages spanning the peripheral apophyseal ring to prevent pullout and subsidence.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Prevent Fatigue Fracture in High-Stress Zones',
      'texto': 'Across 3-column osteotomies (PSO) and the lumbosacral junction (L5–S1), standard 2-rod constructs face extreme cyclic bending moments leading to fatigue breakage. Always utilize multi-rod (3-rod or 4-rod) constructs and robust pelvic fixation (S2AI screws) to distribute loads.'
    }
  ],
  'referencias': pt['10']['referencias'],
  'seo': {
    'titulo': 'Biomechanics of Spinal Fixation Implants | Spine Surgery Treatise',
    'meta_descricao': 'In-depth biomechanical guide to spinal implants: pedicle screws, CBT trajectory, biomaterials (Ti, CoCr, PEEK), multi-rod constructs, cages, and osteoporotic fixation.',
    'resumo_chamada': 'Master the biomechanics of spinal fixation implants, load-sharing principles, screw purchase mechanics, multi-rod constructs, and strategies to prevent hardware failure.',
    'slug': 'biomechanics-of-implants-in-spinal-fixation'
  }
}

es['10'] = {
  'numero': 10,
  'titulo': 'Biomecánica de los Implantes en las Fijaciones Vertebrales',
  'secao': '',
  'autores': pt['10']['autores'],
  'contexto': 'La fijación vertebral debe proporcionar una estabilidad estructural inmediata, restablecer y preservar la alineación multiplanar fisiológica, proteger el injerto óseo frente a fuerzas de cizallamiento destructivas y resistir la fatiga mecánica hasta que se complete la consolidación biológica de la artrodesis. El rendimiento biomecánico del constructo depende de la interacción compleja entre los biomateriales (aleaciones de titanio, cobalto-cromo, acero inoxidable, PEEK, nitruro de silicio, titanio poroso impreso en 3D), el diseño geométrico de los componentes (tornillos, barras, ganchos, alambres, placas, cajas intersomáticas), la fijación en la interfaz hueso-implante y la distribución global de cargas. Los tornillos transpediculares logran un anclaje de tres columnas en las paredes corticales del pedículo y el hueso esponjoso del cuerpo vertebral. Su resistencia al arrancamiento (pullout), a las fuerzas de alternancia (toggle) y a la fatiga depende del diámetro externo, el paso y diseño de rosca, la profundidad de inserción, la trayectoria anatómica frente a la trayectoria de hueso cortical (CBT) y la densidad mineral ósea (DMO). Las barras deben equilibrar la maleabilidad para el moldeado sagital con la rigidez y resistencia a la fatiga (rigidez: CoCr > acero > aleación Ti > PEEK). Las cajas intersomáticas reconstruyen el pilar anterior de soporte, restauran la altura discal y reducen la sobrecarga sobre las barras posteriores.',
  'objetivo': 'Presentar los fundamentos biomecánicos de la instrumentación vertebral y analizar la mecánica de tornillos pediculares, barras, ganchos, alambres, placas y cajas intersomáticas. Al finalizar, el lector deberá comprender los principios de distribución de cargas (load sharing), límite elástico, fatiga y módulo de elasticidad de los biomateriales; analizar los factores que condicionan el arrancamiento de tornillos y la elección de trayectorias (estándar vs. CBT); optimizar la rigidez del constructo mediante barras múltiples y conectores transversales; y aplicar estrategias biomecánicas para prevenir la subsidencia, el aflojamiento, la rotura de barras y la falla en los segmentos de transición.',
  'conteudo_principal': [
    {
      'subtitulo': 'Biomateriales y propiedades mecánicas',
      'texto': 'La elección del biomaterial condiciona la rigidez del montaje, la vida a la fatiga y los artefactos en neuroimagen. El titanio comercialmente puro y las aleaciones de titanio (Ti-6Al-4V) ofrecen excelente biocompatibilidad, alta resistencia a la corrosión y un módulo de elasticidad (110 GPa) más cercano al hueso cortical que el acero inoxidable (200 GPa) o el cobalto-cromo (CoCr, 210–230 GPa), reduciendo el blindaje de tensiones (stress shielding) y minimizando artefactos en RM. Las barras de cobalto-cromo proporcionan una rigidez superior para mantener correcciones sagitales complejas en deformidades del adulto, aunque incrementan las fuerzas en los niveles de transición. El PEEK (módulo de 3,6 GPa, similar al hueso esponjoso) y el titanio poroso 3D se emplean ampliamente en cajas intersomáticas para prevenir la subsidencia y favorecer la osteointegración directa.'
    },
    {
      'subtitulo': 'Biomecánica del tornillo pedicular y anclaje',
      'texto': 'El tornillo pedicular proporciona la fijación más sólida al abarcar las tres columnas vertebrales. La resistencia al arrancamiento (pullout) y al aflojamiento cíclico depende de: 1) Diámetro externo del tornillo (el factor más crítico, debiendo ocupar el 70–80% del diámetro interno pedicular); 2) Longitud y profundidad de inserción (alcanzar el 70–80% del cuerpo vertebral incrementa la fijación un 20–30%); 3) Geometría de rosca (doble entrada, rosca cónica); 4) Trayectoria: la trayectoria anatómica transcurre por el eje del pedículo, mientras que la Trayectoria de Hueso Cortical (CBT) utiliza un vector mediolateral y caudocraneal que ancla en el hueso cortical denso de la lámina, el pedículo y el platillo superior, incrementando la resistencia al arrancamiento en más de un 30% en hueso osteoporótico; y 5) Densidad mineral ósea (DMO), que se correlaciona directamente con la resistencia de anclaje.'
    },
    {
      'subtitulo': 'Barras, conectores y constructos multibarraw',
      'texto': 'Las barras transmiten cargas axiales, de flexión y torsión. La rigidez de una barra es proporcional a la cuarta potencia de su radio (Rigidez proporcional a r^4); por tanto, aumentar el diámetro de 5,5 mm a 6,35 mm incrementa la rigidez en flexión aproximadamente un 75%. En áreas de alta demanda mecánica (osteotomías de sustracción pedicular [PSO] o unión lumbosacra), los montajes con barras accesorias o satélites (constructos de 3 o 4 barras) distribuyen el estrés mecánico y reducen drásticamente la tasa de rotura de barras y seudoartrosis. Los conectores transversales (crosslinks) aumentan la rigidez torsional del constructo en fijaciones largas.'
    },
    {
      'subtitulo': 'Cajas intersomáticas y soporte del pilar anterior',
      'texto': 'Las columnas anterior y media soportan fisiológicamente el 80% de las cargas compresivas axiales. Las cajas intersomáticas (ALIF, LLIF, OLIF, TLIF, PLIF) reconstruyen este pilar anterior de carga, compartiendo las fuerzas compresivas con los tornillos pediculares posteriores y reduciendo el momento flector sobre las barras hasta en un 70%. El tamaño de la caja (footprint), la lordosis del implante y su apoyo en el anillo apofisario periférico (la zona más densa y resistente del platillo vertebral) son indispensables para prevenir la subsidencia en el hueso esponjoso central.'
    },
    {
      'subtitulo': 'Instrumentación en el raquis osteoporótico',
      'texto': 'La osteoporosis compromete gravemente el anclaje de los implantes, provocando aflojamiento precoz (efecto limpiaparabrisas) y arrancamiento. Las estrategias biomecánicas para optimizar la fijación incluyen: empleo de tornillos de mayor diámetro, roscado manual menor (undertapping de 1 mm), uso de trayectoria cortical (CBT), aumento con cemento de polimetilmetacrilato (PMMA) a través de tornillos fenestrados, fijaciones multinivel, anclaje bicortical (en S1 o cervical) y tornillos pélvicos alar-ilíacos (S2AI) en la unión lumbosacra.'
    }
  ],
  'aplicacao_clinica': 'El diseño del constructo debe balancear rigidez y distribución de cargas para inducir consolidación ósea. En inestabilidades degenerativas cortas (1–2 niveles), barras de titanio de 5,5 mm o 6,0 mm con soporte intersomático proporcionan una distribución óptima de cargas. En deformidades del adulto o tras osteotomías de 3 columnas (PSO/VCR), se indican barras de CoCr o montajes multibarraw (3 o 4 barras) con conectores satélite para prevenir la rotura por fatiga antes de la consolidación biológica. En pacientes con osteoporosis (DMO T-score < -2,5), evite depender de tornillos pediculares estándar aislados: utilice tornillos fenestrados cementados con PMMA, tornillos CBT y cajas intersomáticas de gran superficie apoyadas en el anillo apofisario para evitar la subsidencia. En los extremos de la fijación, reduzca transiciones bruscas de rigidez mediante barras de transición o vertebroplastia profiláctica en la vértebra superior instrumentada (UIV/UIV+1) para prevenir la cifosis de la unión proximal (PJK).',
  'mensagem_central': 'La instrumentación vertebral es un puente mecánico temporal diseñado para mantener la alineación y la estabilidad mientras madura la artrodesis biológica. El éxito depende de compatibilizar la rigidez del biomaterial (Ti, CoCr, PEEK), la trayectoria de los tornillos (estándar vs. CBT), la configuración de barras (multibarraw) y el soporte anterior (cajas) con la calidad ósea del paciente. Un constructo excesivamente rígido induce fallas en los extremos, mientras que un montaje insuficiente fracasa por fatiga antes de consolidar la artrodesis.',
  'por_que_importa': 'Cada implante modifica la transmisión de fuerzas en la columna. Un tornillo perfectamente colocado fracasa por fatiga si la artrodesis no consolida; una barra excesivamente rígida puede corregir una deformidad pero inducir una fractura catastrófica de unión proximal; y una caja intersomática de diseño avanzado sufre subsidencia si se apoya en hueso esponjoso central débil. Este capítulo traduce los principios de la ingeniería biomecánica en decisiones quirúrgicas prácticas para maximizar la durabilidad de la reconstrucción y lograr la consolidación definitiva.',
  'decs': ['Fusión Vertebral', 'Tornillos Óseos', 'Fenómenos Biomecánicos', 'Prótesis e Implantes', 'Titanio', 'Polieteretercetona', 'Ensayo de Materiales', 'Estrés Mecánico'],
  'mesh': ['Spinal Fusion', 'Bone Screws', 'Biomechanical Phenomena', 'Prostheses and Implants', 'Titanium', 'Polyetheretherketone', 'Materials Testing', 'Stress, Mechanical'],
  'palavras_chave_livres': ['Biomecánica del tornillo pedicular', 'Trayectoria de hueso cortical', 'Constructos multibarraw', 'Subsidencia de caja intersomática', 'Blindaje de tensiones', 'Aumento con cemento', 'Cifosis de la unión proximal'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'La instrumentación es un puente de carga compartida',
      'texto': 'El constructo debe compartir cargas con el pilar anterior (caja intersomática) y el injerto óseo. Reconstruir el soporte anterior descarga hasta el 70% de las fuerzas de flexión sobre las barras posteriores, previniendo la rotura por fatiga y estimulando la artrodesis según la ley de Wolff.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Optimizar el anclaje en hueso osteoporótico',
      'texto': 'En pacientes con baja densidad mineral ósea (osteopenia/osteoporosis), utilice tornillos con trayectoria de hueso cortical (CBT), tornillos fenestrados cementados con PMMA y cajas intersomáticas amplias apoyadas en el anillo apofisario cortical para evitar aflojamiento y subsidencia.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Prevenir la fatiga en zonas de alta sobrecarga',
      'texto': 'A través de osteotomías de 3 columnas (PSO) y en la unión lumbosacra (L5–S1), los montajes estándar de 2 barras sufren momentos flectores extremos que provocan rotura por fatiga. Emplee siempre montajes multibarraw (3 o 4 barras) y tornillos pélvicos (S2AI) para disipar tensiones.'
    }
  ],
  'referencias': pt['10']['referencias'],
  'seo': {
    'titulo': 'Biomecánica de los Implantes en Fijaciones Vertebrales | Tratado',
    'meta_descricao': 'Guía integral de biomecánica de implantes espinales: tornillos pediculares, trayectoria CBT, barras de Ti/CoCr, constructos multibarraw, cajas y fijación en osteoporosis.',
    'resumo_chamada': 'Domine la biomecánica de los implantes de fijación vertebral, distribución de cargas, anclaje pedicular, constructos multibarraw y prevención de fallas mecánicas.',
    'slug': 'biomecanica-de-los-implantes-en-las-fijaciones-vertebrales'
  }
}

# ==========================================
# CHAPTER 11
# ==========================================
en['11'] = {
  'numero': 11,
  'titulo': 'Spinal Dysraphism — Neural Tube Defects',
  'secao': '',
  'autores': pt['11']['autores'],
  'contexto': 'Neural tube defects (NTDs) result from failure of normal embryonic neural tube closure during the third and fourth weeks of gestation, encompassing cranial and spinal anomalies with varying severity of neurological, musculoskeletal, and urological impairment. Within this spectrum, spinal dysraphism designates congenital midline dorsal malformations involving skin, paraspinal muscles, vertebral arches, meninges, and neuroectodermal tissues; strictly speaking, spina bifida describes the osseous failure of posterior neural arch fusion. The chapter differentiates open spinal dysraphisms (spina bifida aperta, myelomeningocele, myelocele, rachischisis)—caused by failure of primary neurulation where neural placodes lie exposed to amniotic fluid—from closed spinal dysraphisms (spina bifida occulta, lipomyelomeningocele, dorsal dermal sinus, diastematomyelia, tight filum terminale)—derived primarily from abnormal secondary neurulation or premature dysjunction, often associated with a subcutaneous mass and spinal cord tethering (tethered cord syndrome). The etiology is complex and multifactorial, arising from interactions between genetic susceptibility (folate-metabolism gene variants such as MTHFR), maternal nutritional deficiencies (folate, inositol, vitamin B12), pre-existing maternal disorders (diabetes mellitus, obesity), antiepileptic medications (valproic acid, carbamazepine), and environmental teratogens. Management spans the lifecycle: periconceptional folic acid fortification, prenatal maternal serum alpha-fetoprotein (MSAFP) and ultrasound screening, in utero fetal endoscopic/open surgical repair, neonatal closure within 48 hours, and lifelong multidisciplinary neurosurgical, urological, and orthopedic surveillance.',
  'objetivo': 'To present the embryological development and classification of neural tube defects, distinguishing primary from secondary neurulation and open from closed spinal dysraphisms. The reader should be able to recognize nutritional, genetic, metabolic, pharmaceutical, and environmental risk factors; understand preventive strategies and prenatal/postnatal intervention modalities; and identify clinical manifestations, tethered cord syndrome, and long-term multidisciplinary care requirements across pediatric and adult life.',
  'conteudo_principal': [
    {
      'subtitulo': 'Embryology: Primary vs. Secondary Neurulation',
      'texto': 'Primary neurulation (embryonic days 18–28) forms the brain and spinal cord down to the upper sacral level (S1–S2): the neural plate invaginates, elevates into neural folds, and fuses bidirectionally from multiple initiation sites, with the anterior neuropore closing at day 25 and posterior neuropore closing at day 28. Disruption of primary neurulation causes open NTDs with exposed placodes. Secondary neurulation (days 28–48) forms the lower sacrococcygeal segments through cavitation and canalization of the caudal cell mass within the tail bud, followed by retrogressive differentiation into the conus medullaris, ventriculus terminalis, and filum terminale. Errors in secondary neurulation produce closed dysraphisms and tethering anomalies.'
    },
    {
      'subtitulo': 'Classification: Open vs. Closed Dysraphisms',
      'texto': 'Open spinal dysraphisms (spina bifida aperta) feature neural tissue exposed to amniotic fluid with CSF leakage; myelomeningocele (MMC, 98% of open cases) presents as a dorsal fluid-filled sac containing neural elements, universally accompanied by Chiari II malformation, obstructive hydrocephalus, lower extremity paraparesis, neurogenic bladder, and bowel dysfunction. Closed spinal dysraphisms are covered by intact skin. They are subclassified into: 1) With a subcutaneous mass: lipomyelomeningocele, lipomyelocele, meningocele, myelocystocele; and 2) Without a subcutaneous mass: diastematomyelia (split cord malformation type I with osseous/cartilaginous spur and type II with fibrous septum), dorsal dermal sinus tract, caudal regression syndrome, and tight filum terminale.'
    },
    {
      'subtitulo': 'Cutaneous Stigmata and Tethered Cord Syndrome',
      'texto': 'Closed dysraphisms often declare themselves via midline cutaneous markers: hypertrichosis (faun tail nevus), subcutaneous lipoma, sacral dimple (especially >5 mm deep or >2.5 cm above anal verge), hemangioma, capillary telangiectasia, dermal sinus pit, or aplasia cutis. Tethered cord syndrome occurs when inelastic structures (lipoma, tight thickened filum >2 mm, bony spur, dura) anchor the conus medullaris below the L2 level, causing progressive mechanical stretch and ischemic traction injury during somatic spinal growth. Symptoms include progressive lower extremity weakness, gait deterioration, foot deformities (cavus foot, clubfoot), back and leg pain, progressive scoliosis, and worsening bladder/bowel incontinence.'
    },
    {
      'subtitulo': 'Etiology and Periconceptional Prevention',
      'texto': 'Etiology is multifactorial: genetic mutations in one-carbon folate metabolism (MTHFR C677T, DHFR, MTHFD1) interact with environmental triggers. Maternal diabetes increases NTD risk 2- to 4-fold, maternal obesity increases risk 1.5- to 3-fold, and maternal valproic acid therapy carries a 1–2% incidence of lumbar myelomeningocele. Periconceptional folic acid supplementation (0.4 mg/day in low-risk women and 4.0–5.0 mg/day in women with previous affected pregnancy or high risk, initiated at least 1–3 months prior to conception and continued through the first trimester) reduces NTD occurrence and recurrence by up to 70%.'
    },
    {
      'subtitulo': 'Prenatal Repair, Neonatal Surgery, and Long-Term Care',
      'texto': 'Prenatal screening utilizes mid-trimester maternal serum alpha-fetoprotein (elevated in open NTDs), detailed fetal ultrasonography (lemon sign, banana sign, ventriculomegaly), and ultrafast fetal MRI. The Management of Myelomeningocele Study (MOMS trial) demonstrated that in utero fetal surgical repair before 26 weeks gestation significantly decreases the need for hydrocephalus shunting, improves motor function, and reverses hindbrain herniation (Chiari II) compared to standard postnatal repair. For postnatally delivered infants, airtight watertight multilayer surgical closure within 24–48 hours is mandatory to prevent ascending ventriculitis/meningitis and preserve neurological function. Lifelong multidisciplinary management encompasses ventriculoperitoneal shunt/ETV surveillance, clean intermittent catheterization (CIC) for neurogenic bladder, orthopedic correction of equinovarus/hip dislocation, and scoliosis management.'
    }
  ],
  'aplicacao_clinica': 'In clinical practice, neonatal evaluation begins with distinguishing open from closed lesions. In open myelomeningocele, maintain the infant prone, cover the placode with sterile warm saline gauze, avoid latex exposure, administer broad-spectrum antibiotics, and perform definitive surgical reconstruction within 24–48 hours. In newborns presenting with midline cutaneous markers (hypertrichosis, lipoma, deep sinus pit), screening spinal ultrasound (before 3–4 months of age) or MRI is mandatory to evaluate conus level, cord tethering, and intradural lipoma before irreversible neurological decline occurs. In children presenting with progressive cavus foot, gait disturbance, unprovoked back/leg pain, progressive scoliosis, or new-onset urinary incontinence, urgent whole-spine MRI must be performed to diagnose tethered cord syndrome, diastematomyelia, or syringomyelia. Surgical untethering (resection of thickened filum terminale, excision of osseous septum, or lipoma debulking) prevents irreversible neurological and urological deterioration.',
  'mensagem_central': 'Neural tube defects represent a developmental spectrum governed by the timing and level of neurulation failure. Their clinical presentation reflects complex gene-environment interactions that impact the patient from the fetal period through adulthood. Periconceptional folic acid prevention, accurate prenatal classification, timely fetal or neonatal surgical repair, and lifelong multidisciplinary surveillance form the foundational pillars of comprehensive care.',
  'por_que_importa': 'This chapter connects early embryonic neurulation failure to lifelong multi-system challenges. Distinguishing primary from secondary neurulation clarifies why open lesions present with exposed neural tissue and Chiari II malformation, whereas closed dysraphisms remain occult until progressive gait disturbances, neurogenic bladder, or spinal deformities manifest during pediatric growth spurts. Understanding this embryological and clinical spectrum guides periconceptional prevention, prenatal counseling, fetal surgery indications, and adult tethered cord management, preventing diagnostic delay and permanent neurological loss.',
  'decs': ['Neural Tube Defects', 'Spinal Dysraphism', 'Meningomyelocele', 'Spina Bifida Occulta', 'Tethered Cord Syndrome', 'Folic Acid', 'Prenatal Diagnosis', 'Fetal Therapies'],
  'mesh': ['Neural Tube Defects', 'Spinal Dysraphism', 'Meningomyelocele', 'Spina Bifida Occulta', 'Neural Tube Defects/embryology', 'Tethered Cord Syndrome', 'Folic Acid', 'Prenatal Diagnosis', 'Fetal Therapies'],
  'palavras_chave_livres': ['Primary neurulation', 'Secondary neurulation', 'Chiari II malformation', 'Tethered cord syndrome', 'Lipomyelomeningocele', 'MOMS trial', 'Diastematomyelia'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Primary vs. Secondary Neurulation',
      'texto': 'Primary neurulation failure (days 18–28) causes open defects (myelomeningocele) with exposed neural placodes, CSF leak, and Chiari II malformation. Secondary neurulation failure (days 28–48) causes closed dysraphisms (lipomyelomeningocele, tight filum), covered by skin and presenting with cord tethering.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Investigate Cutaneous Midline Markers',
      'texto': 'Midline lumbar cutaneous stigmata (faun tail hypertrichosis, subcutaneous lipoma, deep dimple, dermal sinus) are hallmarks of occult spinal dysraphism. Obtain screening spinal ultrasound or MRI before 3–4 months of age to diagnose tethered cord before permanent neurological or sphincter loss occurs.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Periconceptional Folic Acid Prevents NTDs',
      'texto': 'Supplementing folic acid (0.4 mg/day standard; 4.0–5.0 mg/day for previous NTD, diabetes, or antiepileptic therapy) starting at least 1–3 months before conception reduces neural tube defect occurrence and recurrence by up to 70%. In utero fetal repair before 26 weeks improves motor outcomes and reverses Chiari II.'
    }
  ],
  'referencias': pt['11']['referencias'],
  'seo': {
    'titulo': 'Spinal Dysraphism and Neural Tube Defects | Spine Surgery Treatise',
    'meta_descricao': 'Complete guide to spinal dysraphism and neural tube defects: myelomeningocele, spina bifida occulta, tethered cord syndrome, MOMS fetal repair, and folic acid prevention.',
    'resumo_chamada': 'Master the embryology, classification (open vs. closed), diagnosis, fetal and neonatal surgical management, and long-term care of spinal dysraphism and NTDs.',
    'slug': 'spinal-dysraphism-neural-tube-defects'
  }
}

es['11'] = {
  'numero': 11,
  'titulo': 'Disrafismo Espinal — Defectos del Tubo Neural',
  'secao': '',
  'autores': pt['11']['autores'],
  'contexto': 'Los defectos del tubo neural (DTN) resultan del fallo en el cierre embrionario del tubo neural durante la tercera y cuarta semanas de gestación, abarcando malformaciones craneales y espinales con diversos grados de compromiso neurológico, urológico y ortopédico. Dentro de este espectro, el disrafismo espinal designa las anomalías congénitas de la línea media dorsal que comprometen piel, musculatura paravertebral, arcos vertebrales, meninges y tejido neuroectodérmico; mientras que el término espina bífida, en sentido estricto, describe el defecto de fusión ósea de los elementos posteriores. El capítulo diferencia las formas abiertas (espina bífida abierta, mielomeningocele, raquisquisis)—originadas por interrupción de la neurulación primaria con placoda neural expuesta al líquido amniótico—de las formas cerradas (espina bífida oculta, lipomielomeningocele, seno dérmico dorsal, diastematomielia, filum terminale engrosado)—asociadas a fallas de la neurulación secundaria o disyunción prematura y caracterizadas por médula anclada (síndrome de médula anclada). La etiología es multifactorial, integrando susceptibilidad genética (variantes de enzimas del metabolismo del folato como MTHFR), deficiencias nutricionales maternas (ácido fólico, inositol, vitamina B12), comorbilidades maternas (diabetes mellitus, obesidad), fármacos teratógenos (ácido valproico, carbamazepina) y factores ambientales. El manejo abarca la prevención preconcepcional con ácido fólico, el tamizaje prenatal (alfafetoproteína y ecografía), la cirugía fetal intrauterina y la reconstrucción posnatal con seguimiento multidisciplinario.',
  'objetivo': 'Presentar la embriología y la clasificación de los defectos del tubo neural, diferenciando la neurulación primaria de la secundaria y las formas abiertas de las cerradas. Al finalizar, el lector deberá reconocer los factores de riesgo nutricionales, genéticos, metabólicos, farmacológicos y ambientales; comprender las estrategias preventivas y modalidades de tratamiento prenatal y posnatal; e identificar las manifestaciones clínicas, el síndrome de médula anclada y los requerimientos de seguimiento multidisciplinario en la infancia y la vida adulta.',
  'conteudo_principal': [
    {
      'subtitulo': 'Embriología: Neurulación primaria y secundaria',
      'texto': 'La neurulación primaria (días 18 a 28) origina el encéfalo y la médula espinal hasta el nivel sacro superior (S1–S2): la placa neural prolifera, se invagina formando los pliegues neurales y se fusiona bidireccionalmente, cerrando el neuroporo anterior en el día 25 y el posterior en el día 28. La falla en este proceso genera DTN abiertos con exposición de tejido neural. La neurulación secundaria (días 28 a 48) forma los segmentos sacrococcígeos inferiores mediante cavitación y canalización de la masa celular caudal, seguida de diferenciación regresiva en cono medular, ventrículo terminal y filum terminale. Sus alteraciones causan disrafismos cerrados y anclaje medular.'
    },
    {
      'subtitulo': 'Clasificación: Formas abiertas y cerradas',
      'texto': 'Los DTN abiertos (espina bífida abierta) presentan tejido neural expuesto sin cobertura cutánea y con fístula de LCR; el mielomeningocele (MMC, 98% de las formas abiertas) consiste en una bolsa quística con elementos neurales herniados, acompañada casi universalmente de malformación de Chiari II, hidrocefalia, paraparesia de extremidades inferiores y vejiga neurogénica. Los disrafismos cerrados presentan piel íntegra suprayacente y se dividen en: 1) Con masa subcutánea: lipomielomeningocele, lipomielocele, meningocele y mielocistocele; y 2) Sin masa subcutánea: diastematomielia (médula hendida tipo I con espolón óseo/cartilaginoso y tipo II con tabique fibroso), seno dérmico dorsal, síndrome de regresión caudal y filum terminale tenso/engrosado.'
    },
    {
      'subtitulo': 'Estigmas cutáneos y síndrome de médula anclada',
      'texto': 'Los disrafismos cerrados frecuentemente se acompañan de estigmas cutáneos en la línea media lumbosacra: hipertricosis (cola de fauno), lipoma subcutáneo, hoyuelo sacro profundo (>5 mm o >2,5 cm del margen anal), hemangiomas, fosa del seno dérmico o aplasia cutis. El síndrome de médula anclada ocurre cuando estructuras inelásticas (lipoma, filum engrosado >2 mm, espolón óseo) fijan el cono medular por debajo de L2, provocando tracción mecánica e isquemia medular durante el crecimiento esquelético. Cursa con debilidad progresiva en extremidades inferiores, alteración de la marcha, deformidades podálicas (pie cavo, equinovaro), dolor lumbar/ciático, escoliosis progresiva e incontinencia de esfínteres.'
    },
    {
      'subtitulo': 'Etiología multifactorial y prevención periconcepcional',
      'texto': 'El origen resulta de la interacción de factores genéticos y ambientales. Mutaciones en la vía del folato (MTHFR C677T) se asocian a mayor susceptibilidad. La diabetes materna preconcepcional eleva el riesgo de 2 a 4 veces, la obesidad materna de 1,5 a 3 veces, y el uso de ácido valproico confiere un riesgo de 1–2% de mielomeningocele. La suplementación periconcepcional con ácido fólico (0,4 mg/día en población general y 4,0–5,0 mg/día en mujeres con antecedentes o alto riesgo, iniciada 1–3 meses antes del embarazo y mantenida en el primer trimestre) previene hasta el 70% de los defectos del tubo neural.'
    },
    {
      'subtitulo': 'Cirugía fetal intrauterina, manejo posnatal y seguimiento',
      'texto': 'El diagnóstico prenatal combina alfafetoproteína sérica materna, ecografía de alta resolución (signo del limón, signo de la banana, ventriculomegalia) y RM fetal. El estudio multicéntrico MOMS demostró que la corrección quirúrgica intrauterina antes de la semana 26 de gestación disminuye significativamente la necesidad de derivación por hidrocefalia, mejora el pronóstico motor y revierte la herniación rombencefálica (Chiari II) frente al reparo posnatal. En recién nacidos no operados in útero, el cierre hermético por planos dentro de las primeras 24–48 horas previene la meningitis bacteriana ascendente. El seguimiento a largo plazo requiere vigilancia de hidrocefalia, cateterismo vesical intermitente por vejiga neurogénica y corrección de deformidades ortopédicas.'
    }
  ],
  'aplicacao_clinica': 'La evaluación neonatal comienza determinando si la lesión es abierta o cerrada. En el mielomeningocele abierto, mantenga al neonato en decúbito prono con gasas tibias estériles con suero fisiológico sobre la placoda, evite el contacto con látex, inicie antibioticoterapia y realice el cierre quirúrgico hermético dentro de las 24–48 horas. En lactantes con estigmas cutáneos en la línea media (hipertricosis, lipoma, hoyuelo profundo), es mandatario solicitar ecografía raquídea (<3–4 meses de vida) o RM para descartar disrafismo oculto y anclaje del cono medular antes de que se establezcan déficits neurológicos irreversibles. En niños con deformidad progresiva del pie (pie cavo), dolor lumbar, escoliosis de inicio reciente o deterioro esfinteriano, la RM de columna completa confirma el anclaje medular, la diastematomielia o la siringomielia. La liberación quirúrgica del anclaje (sección del filum terminale o resección del espolón óseo) previene el deterioro funcional permanente.',
  'mensagem_central': 'Los defectos del tubo neural constituyen un espectro determinado por el momento y nivel del fallo en la neurulación. Su expresión clínica deriva de la interacción entre susceptibilidad genética y factores ambientales, requiriendo atención desde la etapa fetal hasta la adultez. La prevención periconcepcional con ácido fólico, la clasificación anatómica rigurosa, el tratamiento quirúrgico oportuno (fetal o posnatal temprano) y la vigilancia multidisciplinaria continua son los pilares esenciales del manejo.',
  'por_que_importa': 'Este capítulo vincula un defecto embrionario precoz con alteraciones funcionales de por vida. Diferenciar la neurulación primaria de la secundaria explica por qué las formas abiertas cursan con placoda expuesta y malformación de Chiari II, mientras que los disrafismos cerrados permanecen ocultos hasta que el estirón de crecimiento desencadena síntomas de médula anclada (debilidad motora, pie cavo, vejiga neurogénica). Conocer este espectro clínico fundamenta la prevención, el asesoramiento prenatal, la selección para cirugía fetal y el tratamiento quirúrgico temprano.',
  'decs': ['Defectos del Tubo Neural', 'Disrafismo Espinal', 'Meningomielocele', 'Espina Bífida Oculta', 'Síndrome de Médula Anclada', 'Ácido Fólico', 'Diagnóstico Prenatal', 'Terapias Fetales'],
  'mesh': ['Neural Tube Defects', 'Spinal Dysraphism', 'Meningomyelocele', 'Spina Bifida Occulta', 'Neural Tube Defects/embryology', 'Tethered Cord Syndrome', 'Folic Acid', 'Prenatal Diagnosis', 'Fetal Therapies'],
  'palavras_chave_livres': ['Neurulación primaria', 'Neurulación secundaria', 'Malformación de Chiari II', 'Síndrome de médula anclada', 'Lipomielomeningocele', 'Estudio MOMS', 'Diastematomielia'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'Neurulación primaria vs. secundaria',
      'texto': 'La falla de la neurulación primaria (días 18–28) origina defectos abiertos (mielomeningocele) con tejido neural expuesto, fístula de LCR y malformación de Chiari II. La falla de la neurulación secundaria (días 28–48) genera disrafismos cerrados (lipomielomeningocele, filum tenso) cubiertos por piel que provocan médula anclada.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Investigar siempre los estigmas cutáneos',
      'texto': 'La presencia de hipertricosis, lipoma subcutáneo, hoyuelo profundo (>5 mm) o seno dérmico en la línea media lumbosacra obliga a solicitar ecografía raquídea o RM en el lactante para descartar disrafismo cerrado antes de que ocurra daño neurológico o esfinteriano permanente.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'Ácido fólico periconcepcional y cirugía fetal',
      'texto': 'La administración de ácido fólico (0,4 mg/día estándar; 4,0–5,0 mg/día en alto riesgo) iniciada 1–3 meses antes de la concepción previene hasta el 70% de los DTN. La cirugía fetal intrauterina antes de la semana 26 disminuye la necesidad de derivación de LCR y mejora la función motora.'
    }
  ],
  'referencias': pt['11']['referencias'],
  'seo': {
    'titulo': 'Disrafismo Espinal y Defectos del Tubo Neural | Tratado de Columna',
    'meta_descricao': 'Guía integral de disrafismo espinal y defectos del tubo neural: mielomeningocele, espina bífida oculta, médula anclada, cirugía fetal MOMS y ácido fólico.',
    'resumo_chamada': 'Domine la embriología, clasificación (abierta vs. cerrada), diagnóstico prenatal, cirugía fetal e infantil y seguimiento multidisciplinario de los disrafismos espinales.',
    'slug': 'disrafismo-espinal-defectos-del-tubo-neural'
  }
}

# ==========================================
# CHAPTER 12
# ==========================================
en['12'] = {
  'numero': 12,
  'titulo': 'History and Physical Examination of the Spine',
  'secao': '',
  'autores': pt['12']['autores'],
  'contexto': 'The comprehensive evaluation of a patient presenting with spinal complaints begins well before reviewing neuroimaging studies. Formulating a precise clinical differential diagnosis before analyzing radiographic images prevents the common pitfall of treating incidental, asymptomatic imaging abnormalities (such as disc bulges or asymptomatic herniations found in up to 30–50% of healthy individuals). Axial back/neck pain, radiating radicular pain, progressive spinal deformity, and functional disability constitute the cardinal complaints, but each requires meticulous characterization regarding onset, duration, mechanical versus inflammatory features, red flags (fever, unexplained weight loss, nocturnal unremitting pain, history of malignancy, progressive neurological deficit), yellow flags (psychosocial distress, maladaptive illness behavior), and impact on activities of daily living. Physical examination must be global and systematic: inspecting posture, sagittal/coronal alignment, gait dynamics, skin stigmata, and pelvic/hip joints (hip-spine syndrome); performing targeted segmental motor (myotomes 0–5 MRC scale), sensory (dermatomes light touch and pinprick), and reflex testing (deep tendon reflexes, pathologic upper motor neuron signs like Babinski, Hoffmann, clonus); and conducting validated provocative orthopedic maneuvers (Spurling, Lhermitte, straight leg raise [Lasègue], femoral nerve stretch, Patrick FABER). In trauma, immediate life support is accompanied by standardized neurological assessment adhering strictly to the International Standards for Neurological Classification of Spinal Cord Injury (ISNCSCI/ASIA scale).',
  'objetivo': 'To teach a comprehensive, reproducible, and structured sequence for the clinical and neurological examination of the spine. The reader should be able to conduct a targeted medical history; distinguish mechanical from neuropathic, vascular, and inflammatory pain patterns; evaluate spinal alignment, flexibility, and deformity; perform accurate segmental neurological examination (myotomes, dermatomes, reflexes); interpret validated cervical, lumbar, and sacroiliac provocative maneuvers; identify non-organic signs (Waddell signs); and apply standardized trauma examination principles including the ASIA impairment scale.',
  'conteudo_principal': [
    {
      'subtitulo': 'Clinical History and Pain Patterns',
      'texto': 'History taking begins with patient demographics, chief complaint, occupational and athletic demands, and detailed characterization of pain using the OPQRST mnemonic (Onset, Provocation/Palliation, Quality, Region/Radiation, Severity, Timing). Pain patterns must be differentiated: 1) Mechanical axial pain (aggravated by loading/motion, relieved by rest); 2) Radicular neuropathic pain (sharp, shooting, dermatomal radiation below the knee or elbow, associated with paresthesias); 3) Neurogenic claudication (buttock/thigh/calf cramping and heaviness provoked by walking and spinal extension, relieved by lumbar flexion/sitting—"shopping cart sign"); 4) Vascular claudication (fixed walking distance, relieved promptly by standing still, accompanied by diminished peripheral pulses and trophic skin changes); 5) Inflammatory pain (morning stiffness >30–60 min, improves with exercise, nocturnal awakening). Screen systematically for "Red Flags" (neoplasm, infection, fracture, cauda equina syndrome) and "Yellow Flags" (catastrophizing, depression, disability litigation).'
    },
    {
      'subtitulo': 'Inspection, Palpation, and Range of Motion',
      'texto': 'Examination begins the moment the patient enters the room, assessing antalgic posturing, assistive devices, and gait dynamics (trendelenburg gait, steppage gait, spastic hemiparetic or scissoring gait, myelopathic broad-based ataxic gait). Spine inspection in standing position evaluates coronal plumb line balance (C7 plumb line over gluteal cleft), sagittal balance, shoulder level, pelvic obliquity, scapular asymmetry, and rib hump prominence on Adam\'s forward bend test (quantified with a Scoliometer). Palpate spinous processes for focal tenderness, step-off deformities (spondylolisthesis), and paraspinal muscle spasm. Measure active cervical and thoracolumbar range of motion in flexion, extension, lateral bending, and axial rotation.'
    },
    {
      'subtitulo': 'Segmental Neurological Examination',
      'texto': 'Neurological localization requires rigorous assessment of motor, sensory, and reflex function: 1) Motor testing (0–5 Medical Research Council scale): C5 (deltoid/biceps), C6 (wrist extensors), C7 (triceps/wrist flexors), C8 (finger flexors), T1 (finger abductors), L2 (hip flexors), L3 (quadriceps), L4 (tibialis anterior/ankle dorsiflexion), L5 (extensor hallucis longus), S1 (gastrocnemius-soleus/plantarflexion); 2) Sensory testing: key dermatomal points from C2 to S4–S5 (light touch and pinprick); 3) Deep tendon reflexes: biceps (C5), brachioradialis (C6), triceps (C7), patellar (L4), Achilles (S1); and 4) Upper motor neuron/myelopathic signs: Hoffmann sign, inverted radial reflex, hyperreflexia, sustained ankle clonus (>3 beats), and Babinski sign.'
    },
    {
      'subtitulo': 'Special Provocative Tests and Hip-Spine Differential',
      'texto': 'Cervical tests: Spurling test (axial compression with ipsilateral neck extension and rotation, highly specific for cervical radiculopathy), shoulder abduction relief test (Bakody sign), neck distraction test, and Lhermitte sign (electric shock sensation down spine on flexion, indicating dorsal column pathology/myelopathy). Lumbar tests: Straight Leg Raise (SLR/Lasègue test: positive if radiating dermatomal pain reproduced between 30° and 70° of hip flexion), Bragard test (SLR + ankle dorsiflexion), Crossed Lasègue test (high specificity for herniated disc), and Femoral Nerve Stretch test (prone knee flexion, testing L2–L4 nerve roots). Evaluate the sacroiliac joint and hip to differentiate spine from hip pathology (hip-spine syndrome): Patrick FABER test, Gaenslen test, and hip internal/external rotation.'
    },
    {
      'subtitulo': 'Spinal Cord Injury and ASIA Assessment',
      'texto': 'In acute trauma, vital stabilization (ATLS protocol) precedes spinal clearance. Document baseline neurological status using the International Standards for Neurological Classification of Spinal Cord Injury (ISNCSCI/ASIA): test 10 key motor muscle groups bilaterally (motor score 0–100), 28 key sensory dermatomes bilaterally for pinprick and light touch (sensory score 0–112 each), and perform digital rectal examination to determine sacral sparing (deep anal pressure [DAP] and voluntary anal contraction [VAC]). Sacral sparing defines an incomplete spinal cord injury (ASIA B, C, or D) versus complete injury (ASIA A), establishing fundamental prognostic expectations for functional recovery.'
    }
  ],
  'aplicacao_clinica': 'In routine outpatient practice, the clinical examination directs the diagnostic workup, preventing over-interpretation of incidental degenerative imaging findings. A patient with severe back pain and a large L4–L5 disc herniation on MRI whose neurological exam is completely normal and whose Lasègue test is negative is suffering from axial pain, not compressive radiculopathy, requiring conservative therapy rather than discectomy. Conversely, recognizing hyperreflexia, Hoffmann sign, and an ataxic gait in a patient presenting with vague hand numbness correctly diagnoses cervical spondylotic myelopathy, mandating urgent cervical decompression. In trauma, documenting sacral sparing (presence of voluntary anal contraction or deep anal sensation) is decisive: it proves an incomplete spinal cord injury with significant potential for neurological recovery, guiding aggressive surgical decompression and blood pressure augmentation protocols.',
  'mensagem_central': 'History taking and physical examination are the foundational pillars of spine diagnosis. Neuroimaging confirms or refutes clinical hypotheses, but can never replace meticulous pain characterization, comprehensive inspection, motion analysis, and segmental neurological localization. In trauma, systematic documentation of sacral sparing and ASIA classification is indispensable for precise diagnosis, prognosis, and therapeutic guidance.',
  'por_que_importa': 'Radiographic abnormalities are pervasive in asymptomatic individuals, while disabling neurological deficits may initially reveal themselves only through an altered gait, a lost reflex, or subtle focal weakness. This chapter teaches the clinician to construct the diagnosis from the patient rather than the scan. By integrating pain patterns, deformity, hip-spine evaluation, non-organic behavioral signs, and standardized ASIA trauma assessment, the clinician avoids inappropriate surgeries, identifies urgent red flags, and ensures safe, targeted care.',
  'decs': ['Medical History Taking', 'Physical Examination', 'Spine', 'Neurologic Examination', 'Spinal Cord Injuries', 'Radiculopathy', 'Reflex, Abnormal', 'Pain Measurement'],
  'mesh': ['Medical History Taking', 'Physical Examination', 'Spine', 'Neurologic Examination', 'Spinal Cord Injuries', 'Radiculopathy', 'Reflex, Abnormal', 'Pain Measurement'],
  'palavras_chave_livres': ['Segmental neurological exam', 'Spurling test', 'Lasègue sign', 'ASIA classification', 'Hip-spine syndrome', 'Waddell signs', 'Red flags'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Core Concept',
      'titulo': 'Formulate the Diagnosis Before Imaging',
      'texto': 'Asymptomatic disc herniations and spinal stenosis are present in up to 30–50% of healthy individuals. Always formulate a clinical hypothesis based on history, dermatomal mapping, and physical examination before ordering and reviewing neuroimaging to avoid operating on incidental findings.'
    },
    {
      'tipo': 'Card 2 — Clinical Decision',
      'titulo': 'Differentiate Hip from Spine Pathology',
      'texto': 'Groin pain aggravated by hip internal rotation suggests hip osteoarthritis, whereas buttock/thigh pain provoked by walking and relieved by sitting points to lumbar spinal stenosis (hip-spine syndrome). Perform Patrick FABER and hip range-of-motion tests routinely.'
    },
    {
      'tipo': 'Card 3 — Key Pearl / Warning',
      'titulo': 'Sacral Sparing Dictates Trauma Prognosis',
      'texto': 'In acute spinal cord trauma, digital rectal examination assessing deep anal sensation (DAP) and voluntary anal contraction (VAC) is mandatory. Preservation of sacral function defines an incomplete spinal cord injury (ASIA B, C, or D), indicating substantial potential for functional recovery.'
    }
  ],
  'referencias': pt['12']['referencias'],
  'seo': {
    'titulo': 'History and Physical Examination of the Spine | Spine Surgery Treatise',
    'meta_descricao': 'Comprehensive guide to spine clinical evaluation: pain patterns, segmental motor/sensory/reflex exam, provocative tests (Spurling, Lasègue), and ASIA trauma scale.',
    'resumo_chamada': 'Master the clinical examination of the spine: structured history, dermatomal/myotomal mapping, myelopathic signs, special orthopedic tests, and ASIA trauma scoring.',
    'slug': 'history-and-physical-examination-of-the-spine'
  }
}

es['12'] = {
  'numero': 12,
  'titulo': 'Anamnesis y Examen Físico de la Columna Vertebral',
  'secao': '',
  'autores': pt['12']['autores'],
  'contexto': 'La evaluación integral del paciente con afecciones de la columna vertebral comienza antes de analizar cualquier estudio de neuroimagen. Formular una hipótesis clínica diagnóstica antes de revisar las imágenes evita el error común de tratar hallazgos radiológicos incidentales y asintomáticos (como protrusiones o hernias discales presentes en el 30–50% de la población sana). El dolor axial (cervicalgia, lumbalgia), el dolor radicular irradiado, la deformidad progresiva y la discapacidad funcional constituyen los motivos de consulta cardinales, pero cada uno requiere una caracterización rigurosa en cuanto a cronología, características mecánicas frente a inflamatorias, banderas rojas (fiebre, pérdida inexplicable de peso, dolor nocturno que no cede con el reposo, antecedentes oncológicos, déficit neurológico progresivo), banderas amarillas (factores psicosociales y gananciales) e impacto en las actividades cotidianas. El examen físico debe ser global y sistemático: inspección de la postura, balance sagital y coronal, dinámica de la marcha, estigmas cutáneos y evaluación articular de caderas y pelvis (síndrome cadera-columna); exploración neurológica segmentaria motora (miotomas escala MRC 0–5), sensitiva (dermatomas tacto fino y dolor) y de reflejos osteotendinosos y signos de motoneurona superior (Babinski, Hoffmann, clonus); y maniobras ortopédicas de provocación (Spurling, Lhermitte, Lasègue, estiramiento crural, Patrick FABER). En el trauma raquimedular, el soporte vital se acompaña de una evaluación estandarizada bajo la escala ASIA/ISNCSCI.',
  'objetivo': 'Enseñar una secuencia clínica completa, reproducible y estructurada para la evaluación de la columna vertebral. Al finalizar, el lector deberá estructurar la historia clínica; diferenciar patrones de dolor mecánico, neuropático, vascular e inflamatorio; examinar la alineación, movilidad y deformidad raquídea; realizar un examen neurológico segmentario riguroso (miotomas, dermatomas, reflejos); interpretar pruebas especiales cervicales, lumbares y sacroilíacas; identificar signos no orgánicos (signos de Waddell); y aplicar la clasificación de la escala ASIA en el trauma raquimedular.',
  'conteudo_principal': [
    {
      'subtitulo': 'Historia clínica y patrones de dolor',
      'texto': 'La anamnesis evalúa la queja principal, antecedentes y características del dolor mediante la mnemotecnia OPQRST (Inicio, Provocación/Alivio, Calidad, Región/Irradiación, Severidad, Tiempo). Se deben diferenciar los patrones de dolor: 1) Dolor axial mecánico (empeora con la carga y el movimiento, cede con el reposo); 2) Dolor radicular neuropático (urente o punzante, irradiación dermatómica por debajo de la rodilla o codo, parestesias); 3) Claudicación neurogénica (pesadez, calambres y dolor en nalgas y pantorrillas al caminar o en extensión lumbar, que cede al sentarse o flexionar el tronco—"signo del carrito de compras"); 4) Claudicación vascular (distancia de marcha fija, cede al detenerse de pie, disminución de pulsos periféricos y cambios tróficos); 5) Dolor inflamatorio (rigidez matutina >30–60 min, mejora con el ejercicio, dolor nocturno). Identificar banderas rojas (infección, tumor, fractura, cauda equina) y banderas amarillas (catastrofismo, depresión).'
    },
    {
      'subtitulo': 'Inspección, palpación y movilidad articular',
      'texto': 'La exploración inicia con la observación de la marcha (marcha antiálgica, marcha en estepaje por pie caído, marcha espástica o tijera, marcha atáxica mielopática con base amplia). En bipedestación se evalúa la plomada coronal de C7, el balance sagital, la asimetría de hombros, la oblicuidad pélvica y el test de inclinación anterior de Adams con escoliómetro para medir la giba costal. La palpación busca dolor focal en apófisis espinosas, escalones óseos (espondilolistesis) y contractura paravertebral. Se mide la movilidad activa en flexión, extensión, inclinación lateral y rotación axial.'
    },
    {
      'subtitulo': 'Examen neurológico segmentario',
      'texto': 'La localización neurológica requiere evaluar fuerza, sensibilidad y reflejos: 1) Exploración motora (escala MRC 0–5): C5 (deltoides/bíceps), C6 (extensores de muñeca), C7 (tríceps/flexores de muñeca), C8 (flexores de dedos), T1 (abductores de dedos), L2 (flexores de cadera), L3 (cuádriceps), L4 (tibial anterior/dorsiflexión), L5 (extensor largo del hallux), S1 (gastronemio-sóleo/flexión plantar); 2) Sensibilidad: puntos clave de dermatomas C2 a S4–S5 (tacto ligero y pinchazo); 3) Reflejos osteotendinosos: bicipital (C5), estilorradial (C6), tricipital (C7), patelar (L4), aquileo (S1); y 4) Signos piramidales de motoneurona superior: signo de Hoffmann, reflejo radial invertido, clonus aquíleo sostenido y signo de Babinski.'
    },
    {
      'subtitulo': 'Pruebas especiales y diagnóstico diferencial cadera-columna',
      'texto': 'Pruebas cervicales: maniobra de Spurling (compresión axial con extensión y rotación ipsilateral, alta especificidad para radiculopatía cervical), prueba de distracción cervical, signo de Bakody (abducción del hombro) y signo de Lhermitte (descarga eléctrica al flexionar el cuello, indicador de mielopatía). Pruebas lumbares: elevación de la pierna recta (SLR/signo de Lasègue, positivo si reproduce dolor radicular típico entre 30° y 70°), maniobra de Bragard (Lasègue + dorsiflexión de tobillo), Lasègue cruzado (altamente específico de hernia discal) y estiramiento del nervio femoral (decúbito prono, raíces L2–L4). Diagnóstico diferencial cadera-columna: maniobra de Patrick FABER y rotación interna/externa de cadera.'
    },
    {
      'subtitulo': 'Trauma raquimedular y escala ASIA',
      'texto': 'En el traumatismo agudo, el soporte vital avanzado (ATLS) precede a la evaluación espinal. La evaluación neurológica se estandariza según la escala ASIA/ISNCSCI: 10 grupos musculares clave bilaterales (puntuación motora 0–100), 28 dermatomas sensitivos bilaterales (puntuación sensitiva 0–112) y examen rectal digital para evaluar preservación sacra (presión anal profunda [DAP] y contracción anal voluntaria [VAC]). La preservación sacra define una lesión medular incompleta (ASIA B, C o D) frente a una lesión completa (ASIA A), fundamentando el pronóstico funcional.'
    }
  ],
  'aplicacao_clinica': 'En la consulta diaria, la exploración clínica guía la interpretación de las imágenes, evitando tratamientos quirúrgicos innecesarios basados en hallazgos degenerativos incidentales. Un paciente con lumbalgia y una hernia discal L4–L5 en RM pero con examen neurológico normal y Lasègue negativo presenta dolor axial puro y no radiculopatía compresiva, requiriendo manejo conservador. Por el contrario, detectar hiperreflexia, signo de Hoffmann y marcha atáxica en un paciente con parestesias vagas en manos confirma una mielopatía espondilótica cervical que requiere descompresión quirúrgica urgente. En traumatismos, constatar preservación sacra (contracción anal voluntaria o sensibilidad anal profunda) determina una lesión medular incompleta con alto potencial de recuperación funcional, justificando descompresión quirúrgica de urgencia.',
  'mensagem_central': 'La anamnesis y el examen físico estructuran el diagnóstico integral de la columna vertebral. Los estudios de neuroimagen confirman o descartan hipótesis, pero jamás reemplazan la caracterización del dolor, la inspección global, la evaluación del movimiento y el examen neurológico segmentario. En traumatismos raquimedulares, la documentación seriada de la preservación sacra y la clasificación ASIA son indispensables para el diagnóstico, pronóstico y tratamiento.',
  'por_que_importa': 'Las alteraciones morfológicas en neuroimagen son frecuentes en individuos asintomáticos, mientras que déficits neurológicos graves pueden manifestarse tempranamente como una alteración de la marcha o la pérdida de un reflejo. Este capítulo enseña a construir el diagnóstico clínico a partir del paciente y no de la imagen. Integrar los patrones de dolor, la alineación corporal, el diagnóstico diferencial cadera-columna, los signos no orgánicos de Waddell y la escala ASIA permite indicar estudios pertinentes y evitar procedimientos quirúrgicos inapropiados.',
  'decs': ['Anamnesis', 'Examen Físico', 'Columna Vertebral', 'Examen Neurológico', 'Traumatismos de la Médula Espinal', 'Radiculopatía', 'Reflejo Anormal', 'Dimensión del Dolor'],
  'mesh': ['Medical History Taking', 'Physical Examination', 'Spine', 'Neurologic Examination', 'Spinal Cord Injuries', 'Radiculopathy', 'Reflex, Abnormal', 'Pain Measurement'],
  'palavras_chave_livres': ['Examen neurológico segmentario', 'Maniobra de Spurling', 'Signo de Lasègue', 'Clasificación ASIA', 'Síndrome cadera-columna', 'Signos de Waddell', 'Banderas rojas'],
  'cards_destaque': [
    {
      'tipo': 'Card 1 — Concepto esencial',
      'titulo': 'Formular el diagnóstico antes de la imagen',
      'texto': 'Las hernias discales y estenosis asintomáticas están presentes en el 30–50% de la población sana. Formule siempre su hipótesis diagnóstica mediante el interrogatorio y el examen neurológico segmentario antes de solicitar y revisar las resonancias magnéticas.'
    },
    {
      'tipo': 'Card 2 — Decisión clínica',
      'titulo': 'Diferenciar patología de cadera y columna',
      'texto': 'El dolor inguinal que se agrava con la rotación interna sugiere artrosis de cadera, mientras que el dolor en nalga/muslo que empeora al caminar y cede al sentarse orienta a estenosis de canal lumbar (síndrome cadera-columna). Realice siempre el test de Patrick FABER.'
    },
    {
      'tipo': 'Card 3 — Perla o alerta',
      'titulo': 'La preservación sacra define el pronóstico',
      'texto': 'En el traumatismo raquimedular agudo, el tacto rectal para evaluar sensibilidad anal profunda (DAP) y contracción anal voluntaria (VAC) es obligatorio. La presencia de preservación sacra define una lesión incompleta (ASIA B, C o D) con elevado potencial de recuperación neurológica.'
    }
  ],
  'referencias': pt['12']['referencias'],
  'seo': {
    'titulo': 'Anamnesis y Examen Físico de la Columna | Tratado de Columna',
    'meta_descricao': 'Guía clínica de semiología raquídea: patrones de dolor, examen motor/sensitivo/reflejos, pruebas de Spurling y Lasègue, y escala ASIA en trauma.',
    'resumo_chamada': 'Domine la exploración clínica y neurológica de la columna: historia clínica estructurada, miotomas, dermatomas, signos mielopáticos, pruebas especiales y escala ASIA.',
    'slug': 'anamnesis-y-examen-fisico-de-la-columna-vertebral'
  }
}

with open('slice_9_12_en.json', 'w', encoding='utf-8') as f:
    json.dump(en, f, ensure_ascii=False, indent=2)

with open('slice_9_12_es.json', 'w', encoding='utf-8') as f:
    json.dump(es, f, ensure_ascii=False, indent=2)

print('Batch 9-12 successfully saved!')
