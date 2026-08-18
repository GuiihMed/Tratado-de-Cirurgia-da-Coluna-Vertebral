-- ==============================================================================
-- TRATADO DE CIRURGIA DA COLUNA VERTEBRAL - SUPABASE DATABASE SCHEMA & SEED
-- ==============================================================================

-- 1. Criação da Tabela de Capítulos
CREATE TABLE IF NOT EXISTS public.capitulos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    secao_id SMALLINT NOT NULL CHECK (secao_id BETWEEN 1 AND 10),
    numero INTEGER NOT NULL CHECK (numero > 0),
    titulo_pt TEXT NOT NULL,
    titulo_en TEXT,
    titulo_es TEXT,
    resumo_pt TEXT,
    resumo_en TEXT,
    resumo_es TEXT,
    conteudo_pt TEXT,
    conteudo_en TEXT,
    conteudo_es TEXT,
    autores TEXT,
    referencias TEXT,
    status TEXT NOT NULL DEFAULT 'publicado' CHECK (status IN ('publicado', 'rascunho')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT capitulos_numero_unique UNIQUE (numero)
);

-- 2. Criação de Índices para Otimização de Consultas
CREATE INDEX IF NOT EXISTS idx_capitulos_secao ON public.capitulos (secao_id);
CREATE INDEX IF NOT EXISTS idx_capitulos_numero ON public.capitulos (numero);

-- 3. Habilitação de Row Level Security (RLS)
ALTER TABLE public.capitulos ENABLE ROW LEVEL SECURITY;

-- 4. Políticas de Segurança (RLS Policies)
-- Leitura pública para todos (anônimos e autenticados)
DROP POLICY IF EXISTS "Allow public read-only access" ON public.capitulos;
CREATE POLICY "Allow public read-only access"
    ON public.capitulos
    FOR SELECT
    TO anon, authenticated
    USING (true);

-- Inserção permitida apenas para usuários autenticados
DROP POLICY IF EXISTS "Allow authenticated insert" ON public.capitulos;
CREATE POLICY "Allow authenticated insert"
    ON public.capitulos
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- Atualização permitida apenas para usuários autenticados
DROP POLICY IF EXISTS "Allow authenticated update" ON public.capitulos;
CREATE POLICY "Allow authenticated update"
    ON public.capitulos
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Exclusão permitida apenas para usuários autenticados
DROP POLICY IF EXISTS "Allow authenticated delete" ON public.capitulos;
CREATE POLICY "Allow authenticated delete"
    ON public.capitulos
    FOR DELETE
    TO authenticated
    USING (true);

-- 5. Carga Inicial de Dados (Seed com os 109 Capítulos do Tratado)
INSERT INTO public.capitulos (secao_id, numero, titulo_pt, titulo_en, titulo_es) VALUES
-- SEÇÃO 1: Conceitos Básicos (1-11)
(1, 1, 'Embriologia da Coluna Vertebral', 'Embryology of the Spine', 'Embriología de la Columna Vertebral'),
(1, 2, 'Biomecânica da Coluna Vertebral', 'Spine Biomechanics', 'Biomecánica de la Columna Vertebral'),
(1, 3, 'Neuroanatomia Funcional da Medula Espinhal', 'Functional Neuroanatomy of the Spinal Cord', 'Neuroanatomía Funcional de la Médula Espinal'),
(1, 4, 'Anatomia Cirúrgica e Vias de Acesso da Coluna Cervical', 'Surgical Anatomy and Approaches to the Cervical Spine', 'Anatomía Quirúrgica y Vías de Acceso a la Columna Cervical'),
(1, 5, 'Anatomia Cirúrgica e Vias de Acesso da Coluna Torácica', 'Surgical Anatomy and Approaches to the Thoracic Spine', 'Anatomía Quirúrgica y Vías de Acceso a la Columna Torácica'),
(1, 6, 'Anatomia Cirúrgica e Abordagens da Junção Toracolombar', 'Surgical Anatomy and Approaches to the Thoracolumbar Junction', 'Anatomía Quirúrgica y Abordajes de la Unión Toracolumbar'),
(1, 7, 'Anatomia Cirúrgica e Vias de Acesso da Coluna Lombar e Lombossacra', 'Surgical Anatomy and Approaches to the Lumbar and Lumbosacral Spine', 'Anatomía Quirúrgica y Vías de Acceso a la Columna Lumbar y Lumbosacra'),
(1, 8, 'Coluna Vertebral no Plano Sagital', 'Spine in the Sagittal Plane', 'Columna Vertebral en el Plano Sagital'),
(1, 9, 'Princípios da Artrodese, Biologia do Enxerto e Substitutos Ósseos na Coluna', 'Principles of Arthrodesis, Graft Biology and Bone Substitutes in Spine', 'Principios de Artrodesis, Biología del Injerto y Sustitutos Óseos en la Columna'),
(1, 10, 'Biomecânica dos Implantes nas Fixações Vertebrais', 'Biomechanics of Implants in Vertebral Fixation', 'Biomecánica de los Implantes en las Fijaciones Vertebrales'),
(1, 11, 'Disrafismo Espinhal – Defeitos do Tubo Neural', 'Spinal Dysraphism – Neural Tube Defects', 'Disrafismo Espinal – Defectos del Tubo Neural'),

-- SEÇÃO 2: Diagnóstico (12-17)
(2, 12, 'Anamnese e Exame Físico da Coluna Vertebral', 'Anamnesis and Physical Examination of the Spine', 'Anamnesis y Examen Físico de la Columna Vertebral'),
(2, 13, 'Neurofisiologia no Diagnóstico das Patologias da Coluna', 'Neurophysiology in the Diagnosis of Spine Pathologies', 'Neurofisiología en el Diagnóstico de las Patologías de la Columna'),
(2, 14, 'Monitorização Neurofisiológica Intraoperatória em Cirurgia de Coluna', 'Intraoperative Neurophysiological Monitoring in Spine Surgery', 'Monitoreo Neurofisiológico Intraoperatorio en Cirugía de Columna'),
(2, 15, 'Diagnóstico por Imagem da Coluna Vertebral', 'Spine Diagnostic Imaging', 'Diagnóstico por Imágenes de la Columna Vertebral'),
(2, 16, 'Diagnóstico Diferencial: Doenças da Coluna e Condições Ortopédicas', 'Differential Diagnosis: Spine Diseases and Orthopedic Conditions', 'Diagnóstico Diferencial: Enfermedades de la Columna y Afecciones Ortopédicas'),
(2, 17, 'Diagnóstico Diferencial: Doenças da Coluna e Doenças Neurológicas', 'Differential Diagnosis: Spine Diseases and Neurological Diseases', 'Diagnóstico Diferencial: Enfermedades de la Columna y Enfermedades Neurológicas'),

-- SEÇÃO 3: Lesões Traumáticas da Coluna Vertebral (18-26)
(3, 18, 'Avaliação da Coluna do Paciente Politraumatizado', 'Spine Evaluation in the Polytrauma Patient', 'Evaluación de la Columna en el Paciente Politraumatizado'),
(3, 19, 'Trauma Raquimedular', 'Spinal Cord Injury', 'Traumatismo Raquimedular'),
(3, 20, 'Lesões Traumáticas da Coluna Cervical Alta', 'Traumatic Injuries of the Upper Cervical Spine', 'Lesiones Traumáticas de la Columna Cervical Alta'),
(3, 21, 'Lesões Traumáticas da Coluna Cervical Subaxial', 'Traumatic Injuries of the Subaxial Cervical Spine', 'Lesiones Traumáticas de la Columna Cervical Subaxial'),
(3, 22, 'Lesões Traumáticas da Coluna Torácica e Lombar', 'Traumatic Injuries of the Thoracic and Lumbar Spine', 'Lesiones Traumáticas de la Columna Torácica y Lumbar'),
(3, 23, 'Lesões Traumáticas do Sacro', 'Traumatic Injuries of the Sacrum', 'Lesiones Traumáticas del Sacro'),
(3, 24, 'Lesões Traumáticas da Coluna na Infância', 'Traumatic Spine Injuries in Children', 'Lesiones Traumáticas de la Columna en la Infancia'),
(3, 25, 'Fraturas Vertebrais por Insuficiência', 'Vertebral Insufficiency Fractures', 'Fracturas Vertebrales por Insuficiencia'),
(3, 26, 'Deformidades Pós-Traumáticas', 'Post-Traumatic Deformities', 'Deformidades Postraumáticas'),

-- SEÇÃO 4: Deformidades da Coluna Vertebral (27-41)
(4, 27, 'Introdução às Deformidades da Coluna Vertebral', 'Introduction to Spinal Deformities', 'Introducción a las Deformidades de la Columna Vertebral'),
(4, 28, 'Escoliose de Início Precoce', 'Early Onset Scoliosis', 'Escoliosis de Inicio Temprano'),
(4, 29, 'Tratamento Não Cirúrgico das Escolioses', 'Non-Surgical Management of Scoliosis', 'Tratamiento No Quirúrgico de las Escoliosis'),
(4, 30, 'Escoliose Neuromuscular', 'Neuromuscular Scoliosis', 'Escoliosis Neuromuscular'),
(4, 31, 'Deformidades nos Disrafismos Espinhais', 'Deformities in Spinal Dysraphism', 'Deformidades en los Disrafismos Espinales'),
(4, 32, 'Escoliose na Neurofibromatose', 'Scoliosis in Neurofibromatosis', 'Escoliosis en la Neurofibromatosis'),
(4, 33, 'Deformidades Congênitas da Coluna Vertebral', 'Congenital Spine Deformities', 'Deformidades Congénitas de la Columna Vertebral'),
(4, 34, 'Escoliose Idiopática', 'Idiopathic Scoliosis', 'Escoliosis Idiopática'),
(4, 35, 'Escoliose do Adulto', 'Adult Scoliosis', 'Escoliosis del Adulto'),
(4, 36, 'Escoliose nas Síndromes Genéticas', 'Scoliosis in Genetic Syndromes', 'Escoliosis en Síndromes Genéticos'),
(4, 37, 'Escoliose Idiopática de Alto Valor Angular', 'High-Degree Idiopathic Scoliosis', 'Escoliosis Idiopática de Gran Angulación'),
(4, 38, 'Espondilolistese na Criança', 'Spondylolisthesis in Children', 'Espondilolistesis en el Niño'),
(4, 39, 'Espondilolistese no Adulto', 'Adult Spondylolisthesis', 'Espondilolistesis en el Adulto'),
(4, 40, 'Cifose', 'Kyphosis', 'Cifosis'),
(4, 41, 'Deformidades da Coluna Cervical', 'Cervical Spine Deformities', 'Deformidades de la Columna Cervical'),

-- SEÇÃO 5: Doenças Degenerativas (42-50)
(5, 42, 'Fisiopatologia da Degeneração Discal', 'Pathophysiology of Disc Degeneration', 'Fisiopatología de la Degeneración Discal'),
(5, 43, 'Hérnia de Disco Cervical', 'Cervical Disc Herniation', 'Hernia de Disco Cervical'),
(5, 44, 'Hérnia de Disco Torácica', 'Thoracic Disc Herniation', 'Hernia de Disco Torácica'),
(5, 45, 'Hérnia de Disco Lombar', 'Lumbar Disc Herniation', 'Hernia de Disco Lumbar'),
(5, 46, 'Estenose Lombar: Diagnóstico e Manejo Contemporâneo', 'Lumbar Stenosis: Diagnosis and Contemporary Management', 'Estenosis Lumbar: Diagnóstico y Manejo Contemporáneo'),
(5, 47, 'Instabilidade Vertebral', 'Vertebral Instability', 'Inestabilidad Vertebral'),
(5, 48, 'Estenose Cervical, Mielopatia Cervical Degenerativa e Ossificação do Ligamento Longitudinal Posterior', 'Cervical Stenosis, Degenerative Cervical Myelopathy and OPLL', 'Estenosis Cervical, Mielopatía Cervical Degenerativa y OPLL'),
(5, 49, 'Infiltrações e Radiofrequência na Coluna Vertebral', 'Spinal Injections and Radiofrequency', 'Infiltraciones y Radiofrecuencia en la Columna Vertebral'),
(5, 50, 'Medicina Regenerativa no Manejo da Doença Degenerativa da Coluna', 'Regenerative Medicine in Degenerative Spine Management', 'Medicina Regenerativa en la Enfermedad Degenerativa de Columna'),

-- SEÇÃO 6: Tumores na Coluna Vertebral (51-57)
(6, 51, 'Princípios no Manejo das Neoplasias da Coluna Vertebral', 'Principles in the Management of Spine Neoplasms', 'Principios en el Manejo de las Neoplasias de la Columna Vertebral'),
(6, 52, 'Instabilidade Vertebral em Neoplasia de Coluna', 'Spinal Instability in Spine Neoplasms', 'Inestabilidad Vertebral en Neoplasia de Columna'),
(6, 53, 'Tumores Benignos e Lesões Pseudotumorais da Coluna', 'Benign Tumors and Pseudotumoral Lesions of the Spine', 'Tumores Benignos y Lesiones Seudotumorales de la Columna'),
(6, 54, 'Tumores Ósseos Primários Malignos', 'Primary Malignant Bone Tumors', 'Tumores Óseos Primarios Malignos'),
(6, 55, 'Tumores Metastáticos na Coluna', 'Metastatic Spine Tumors', 'Tumores Metastásicos en la Columna'),
(6, 56, 'Tumores Intramedulares e Extramedulares: Classificação, Diagnóstico e Manejo', 'Intramedullary and Extramedullary Tumors: Classification, Diagnosis and Management', 'Tumores Intramedulares y Extramedulares: Clasificación, Diagnóstico y Manejo'),
(6, 57, 'Radioterapia nos Tumores de Coluna', 'Radiotherapy in Spine Tumors', 'Radioterapia en Tumores de Columna'),

-- SEÇÃO 7: Outras Doenças da Coluna (58-61)
(7, 58, 'Infecção Primária da Coluna Vertebral', 'Primary Spinal Infection', 'Infección Primaria de la Columna Vertebral'),
(7, 59, 'Doenças Reumáticas da Coluna Vertebral', 'Rheumatic Diseases of the Spine', 'Enfermedades Reumáticas de la Columna Vertebral'),
(7, 60, 'Doenças Metabólicas que Afetam a Coluna', 'Metabolic Diseases Affecting the Spine', 'Enfermedades Metabólicas que Afectan la Columna'),
(7, 61, 'Tratamento Cirúrgico das Doenças Reumáticas da Coluna', 'Surgical Management of Rheumatic Spine Diseases', 'Tratamiento Quirúrgico de las Enfermedades Reumáticas de la Columna'),

-- SEÇÃO 8: Técnicas Cirúrgicas (62-92)
(8, 62, 'Endoscopia Transforaminal na Coluna Lombossacra', 'Transforaminal Endoscopy in the Lumbosacral Spine', 'Endoscopia Transforaminal en la Columna Lumbosacra'),
(8, 63, 'Endoscopia Interlaminar na Coluna Lombossacra', 'Interlaminar Endoscopy in the Lumbosacral Spine', 'Endoscopia Interlaminar en la Columna Lumbosacra'),
(8, 64, 'Cirurgia Endoscópica Uniportal no Segmento Torácico', 'Uniportal Endoscopic Surgery in the Thoracic Spine', 'Cirugía Endoscópica Uniportal en el Segmento Torácico'),
(8, 65, 'Endoscopia na Coluna Cervical pela Via Posterior', 'Posterior Cervical Endoscopy', 'Endoscopia en la Columna Cervical por Vía Posterior'),
(8, 66, 'Endoscopia na Coluna Cervical pela Via Anterior', 'Anterior Cervical Endoscopy', 'Endoscopia en la Columna Cervical por Vía Anterior'),
(8, 67, 'Endoscopia Unilateral Biportal', 'Unilateral Biportal Endoscopy (UBE)', 'Endoscopia Unilateral Biportal (UBE)'),
(8, 68, 'Artrodese Intersomática Lombar Posterior', 'Posterior Lumbar Interbody Fusion (PLIF/TLIF)', 'Artrodesis Intersomática Lumbar Posterior'),
(8, 69, 'Artrodese Lombar em Single-Position Lateral', 'Single-Position Lateral Lumbar Interbody Fusion', 'Artrodesis Lumbar en Posición Lateral Única'),
(8, 70, 'Artrodese Lombar Prone Transpsoas', 'Prone Transpsoas Lumbar Interbody Fusion (PTP)', 'Artrodesis Lumbar Prone Transpsoas'),
(8, 71, 'Artrodese Lombar Oblíqua', 'Oblique Lumbar Interbody Fusion (OLIF)', 'Artrodesis Lumbar Oblicua (OLIF)'),
(8, 72, 'Artrodese Lombar Anterior', 'Anterior Lumbar Interbody Fusion (ALIF)', 'Artrodesis Lumbar Anterior (ALIF)'),
(8, 73, 'Artroplastia da Coluna', 'Spine Arthroplasty (Disc Replacement)', 'Artroplastia de Columna'),
(8, 74, 'Técnicas Cirúrgicas para a Fixação da Coluna Cervical Alta', 'Surgical Fixation Techniques for Upper Cervical Spine', 'Técnicas Quirúrgicas de Fijación para Columna Cervical Alta'),
(8, 75, 'Técnicas de Fixação Cervical Anterior', 'Anterior Cervical Fixation Techniques', 'Técnicas de Fijación Cervical Anterior'),
(8, 76, 'Fixação Posterior da Coluna Cervical', 'Posterior Cervical Spine Fixation', 'Fijación Posterior de la Columna Cervical'),
(8, 77, 'Laminoplastia Cervical: Princípios, Técnicas e Evidências Atuais', 'Cervical Laminoplasty: Principles, Techniques and Current Evidence', 'Laminoplastia Cervical: Principios, Técnicas y Evidencia Actual'),
(8, 78, 'Parafusos Pediculares na Coluna Torácica, Lombar e Lombossacra – Técnica Free-Hand', 'Free-Hand Pedicle Screws in Thoracic, Lumbar and Lumbosacral Spine', 'Tornillos Pediculares en Columna Torácica, Lumbar y Lumbosacra – Técnica Free-Hand'),
(8, 79, 'Fixação do Ilíaco – Técnica S2 Alar Ilíaco', 'Iliac Fixation – S2 Alar Iliac Technique', 'Fijación Ilíaca – Técnica S2 Alar Ilíaco'),
(8, 80, 'Técnicas de Fixação na Coluna Osteoporótica', 'Fixation Techniques in the Osteoporotic Spine', 'Técnicas de Fijación en la Columna Osteoporótica'),
(8, 81, 'Ostetomias da Coluna Vertebral', 'Spinal Osteotomies', 'Osteotomías de la Columna Vertebral'),
(8, 82, 'Aplicação do Halo e Tração Craniana', 'Halo Placement and Cranial Traction', 'Aplicación de Halo y Tracción Craneal'),
(8, 83, 'Colete Gessado para Escoliose de Início Precoce', 'Casting for Early Onset Scoliosis', 'Corsé de Yeso para Escoliosis de Inicio Temprano'),
(8, 84, 'Infiltrações e Bloqueios da Coluna', 'Spine Injections and Nerve Blocks', 'Infiltraciones y Bloqueos de la Columna'),
(8, 85, 'Sistemas de Crescimento Guiado para Deformidades da Coluna: Hastes de Crescimento Tradicionais', 'Growth-Friendly Systems for Spine Deformities: Traditional Growing Rods', 'Sistemas de Crecimiento Guiado: Barras de Crecimiento Tradicionales'),
(8, 86, 'Técnica de Fixação Bipolar da Coluna Vertebral', 'Bipolar Spine Fixation Technique', 'Técnica de Fijación Bipolar de la Columna Vertebral'),
(8, 87, 'Técnicas de Correção Cirúrgica das Deformidades da Coluna Vertebral', 'Surgical Correction Techniques for Spine Deformities', 'Técnicas de Corrección Quirúrgica de Deformidades de Columna'),
(8, 88, 'Vertebrectomia Torácica e Lombar nas Neoplasias', 'Thoracic and Lumbar Vertebrectomy in Neoplasms', 'Vertebrectomía Torácica y Lumbar en Neoplasias'),
(8, 89, 'Sacrectomia', 'Sacrectomy', 'Sacrectomía'),
(8, 90, 'Cirurgia Complexa dos Tumores Cervicais', 'Complex Surgery for Cervical Tumors', 'Cirugía Compleja de Tumores Cervicales'),
(8, 91, 'Técnicas Minimamente Invasivas para Tratamento e Adjuvância nos Tumores da Coluna Vertebral', 'Minimally Invasive Techniques and Adjuvance in Spine Tumors', 'Técnicas Mínimamente Invasivas en Tumores de Columna'),
(8, 92, 'Navegação e Robótica', 'Navigation and Robotics in Spine Surgery', 'Navegación y Robótica en Cirugía de Columna'),

-- SEÇÃO 9: Complicações (93-100)
(9, 93, 'Infecções Pós-Operatórias', 'Postoperative Infections', 'Infecciones Postoperatorias'),
(9, 94, 'Lesão Dural, Aracnoidite e Fibrose Pós-Operatória', 'Dural Tear, Arachnoiditis and Postoperative Fibrosis', 'Lesión Dural, Aracnoiditis y Fibrosis Postoperatoria'),
(9, 95, 'Queda das Respostas na Monitoração Neurofisiológica Intraoperatória', 'Signal Loss in Intraoperative Neurophysiological Monitoring', 'Pérdida de Señales en Monitoreo Neurofisiológico Intraoperatorio'),
(9, 96, 'Doença do Nível Adjacente', 'Adjacent Segment Disease', 'Enfermedad del Segmento Adyacente'),
(9, 97, 'Pseudoartrose e Falha Mecânica da Instrumentação na Cirurgia da Coluna Vertebral', 'Pseudarthrosis and Hardware Failure in Spine Surgery', 'Seudoartrosis y Fallo Mecánico de Instrumentación'),
(9, 98, 'Complicações da Abordagem Anterior da Coluna', 'Complications of Anterior Spine Approaches', 'Complicaciones del Abordaje Anterior de la Columna'),
(9, 99, 'Lesão Neurológica Perioperatória', 'Perioperative Neurological Injury', 'Lesión Neurológica Perioperatoria'),
(9, 100, 'Síndrome da Falha da Cirurgia da Coluna Vertebral', 'Failed Back Surgery Syndrome', 'Síndrome de Cirugía de Espalda Fallida'),

-- SEÇÃO 10: Temas Complementares (101-109)
(10, 101, 'Junção Craniovertebral: Anormalidades Congênitas, Adquiridas e Trauma', 'Craniovertebral Junction: Congenital, Acquired and Traumatic Anomalies', 'Unión Craneovertebral: Anomalías Congénitas, Adquiridas y Traumatismos'),
(10, 102, 'Manejo da Dor Aguda e Crônica na Coluna Vertebral', 'Management of Acute and Chronic Spine Pain', 'Manejo del Dolor Agudo y Crónico en la Columna'),
(10, 103, 'Abordagens para o Tratamento da Dor Pós-Operatória em Cirurgia de Coluna', 'Approaches to Postoperative Pain Management in Spine Surgery', 'Abordajes para el Dolor Postoperatorio en Cirugía de Columna'),
(10, 104, 'Anestesia para Cirurgia da Coluna Vertebral', 'Anesthesia for Spine Surgery', 'Anestesia para Cirugía de la Columna Vertebral'),
(10, 105, 'Controle do Sangramento Intraoperatório', 'Intraoperative Bleeding Control', 'Control del Sangrado Intraoperatorio'),
(10, 106, 'Uso de Órteses na Coluna Vertebral', 'Orthoses and Bracing in Spine Care', 'Uso de Órtesis en la Columna Vertebral'),
(10, 107, 'Segurança em Cirurgia de Coluna', 'Patient Safety in Spine Surgery', 'Seguridad en Cirugía de Columna'),
(10, 108, 'Manejo do Paciente Frágil com Sarcopenia em Cirurgia de Coluna', 'Management of Frail Patients with Sarcopenia in Spine Surgery', 'Manejo del Paciente Frágil con Sarcopenia en Cirugía de Columna'),
(10, 109, 'Avaliação dos Resultados em Cirurgia de Coluna', 'Outcomes Assessment in Spine Surgery', 'Evaluación de Resultados en Cirugía de Columna')
ON CONFLICT (numero) DO UPDATE SET
    secao_id = EXCLUDED.secao_id,
    titulo_pt = EXCLUDED.titulo_pt,
    titulo_en = EXCLUDED.titulo_en,
    titulo_es = EXCLUDED.titulo_es,
    updated_at = now();

-- ==============================================================================
-- TABELA DE AUTORES & CORPO EDITORIAL
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.autores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ordem INTEGER NOT NULL DEFAULT 1,
    nome TEXT NOT NULL,
    cargo TEXT NOT NULL,
    instituicao TEXT NOT NULL,
    destaque TEXT,
    bio_pt TEXT NOT NULL,
    bio_en TEXT,
    bio_es TEXT,
    especialidades TEXT,
    foto_url TEXT NOT NULL DEFAULT '/assets/edson-pudles.png',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.autores ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read-only autores" ON public.autores;
CREATE POLICY "Allow public read-only autores" ON public.autores FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "Allow authenticated write autores" ON public.autores;
CREATE POLICY "Allow authenticated write autores" ON public.autores FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Inserção inicial dos 3 Editores Oficiais
INSERT INTO public.autores (ordem, nome, cargo, instituicao, destaque, bio_pt, especialidades, foto_url)
VALUES
(1, 'Dr. Edson Pudles', 'Editor-Chefe / SBC', 'Sociedade Brasileira de Coluna', 'Coordenação Editorial de 109 Capítulos', 'Presidente de Honra e Referência Nacional em Deformidades da Coluna Vertebral. Liderança editorial das diretrizes científicas e publicações acadêmicas da Sociedade Brasileira de Coluna.', 'Deformidades Complexas, Liderança Editorial, Diretrizes SBC', '/assets/edson-pudles.png'),
(2, 'Dr. Helton Defino', 'Editor / FMRP-USP', 'Faculdade de Medicina de Ribeirão Preto - USP', 'Pioneiro da Fixação Pedicular no Brasil', 'Professor Titular da USP Ribeirão Preto. Pioneiro na pesquisa biomecânica internacional, desenvolvimento de técnicas de instrumentação vertebral pedicular e traumatologia espinhal.', 'Biomecânica Espinhal, Fixação Pedicular, Trauma Raquimedular', '/assets/helton-defino.png'),
(3, 'Dr. Marcelo Risso', 'Editor / SBC', 'Comitê de Educação e Publicações SBC', 'Coordenador do Capítulo 8 (Plano Sagital)', 'Especialista em Equilíbrio Sagital Global, Osteotomias Tridimensionais de Alta Complexidade e Cirurgia Minimamente Invasiva da Coluna Vertebral no Brasil.', 'Equilíbrio Sagital, Osteotomias 3D, Minimamente Invasiva', '/assets/marcelo-risso.png')
ON CONFLICT DO NOTHING;

