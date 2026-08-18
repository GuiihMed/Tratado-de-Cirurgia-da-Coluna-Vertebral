'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Scene {
  id: number;
  title: string;
  duration: number;
  callout: string;
  subtitle: string;
  narration: string;
  startTime?: number;
  endTime?: number;
}

const SCENES_DATA: Scene[] = [
  {
    id: 1,
    title: 'Abertura Institucional',
    duration: 15,
    callout: 'Abertura Oficial • Tratado de Cirurgia da Coluna Vertebral',
    subtitle: 'Bem-vindo ao site oficial de apoio ao Tratado de Cirurgia da Coluna Vertebral. Neste tutorial, você vai conhecer os principais recursos disponíveis para consulta, estudo e navegação pela obra.',
    narration: 'Bem-vindo ao site oficial de apoio ao Tratado de Cirurgia da Coluna Vertebral. Neste tutorial, você vai conhecer os principais recursos disponíveis para consulta, estudo e navegação pela obra.'
  },
  {
    id: 2,
    title: 'Página Inicial',
    duration: 16,
    callout: 'Navegação Principal • Visão Geral da Home',
    subtitle: 'O site reúne índice detalhado, resumos de capítulos, informações sobre os autores, referências bibliográficas e conteúdos complementares.',
    narration: 'O site reúne índice detalhado, resumos de capítulos, informações sobre os autores, referências bibliográficas e conteúdos complementares.'
  },
  {
    id: 3,
    title: 'Explorando o Índice',
    duration: 20,
    callout: 'Estrutura da Obra • 10 Áreas Temáticas',
    subtitle: 'No índice, você pode explorar a obra por áreas temáticas, facilitando a localização dos assuntos de interesse.',
    narration: 'No índice, você pode explorar a obra por áreas temáticas, facilitando a localização dos assuntos de interesse.'
  },
  {
    id: 4,
    title: 'Capítulos & Resumos',
    duration: 25,
    callout: 'Capítulo 8 • Coluna Vertebral no Plano Sagital',
    subtitle: 'Em cada capítulo, o usuário encontra informações essenciais sobre o tema, incluindo autores, resumo e termos como Equilíbrio Sagital, Incidência Pélvica e Cone de Economia.',
    narration: 'Em cada capítulo, o usuário encontra informações essenciais sobre o tema, incluindo autores, resumo e referências bibliográficas.'
  },
  {
    id: 5,
    title: 'Referências Bibliográficas',
    duration: 16,
    callout: 'Pesquisa Científica • Citações & DOI',
    subtitle: 'As referências bibliográficas permitem aprofundar a pesquisa e consultar a base científica relacionada aos conteúdos apresentados.',
    narration: 'As referências bibliográficas permitem aprofundar a pesquisa e consultar a base científica relacionada aos conteúdos apresentados.'
  },
  {
    id: 6,
    title: 'Autores e Especialistas',
    duration: 16,
    callout: 'Corpo Docente • Especialistas da Obra',
    subtitle: 'Na seção Autores, você pode conhecer os especialistas e colaboradores responsáveis pela produção da obra.',
    narration: 'Na seção Autores, você pode conhecer os especialistas e colaboradores responsáveis pela produção da obra.'
  },
  {
    id: 7,
    title: 'Tratado em Debate',
    duration: 18,
    callout: 'Videocast Oficial • Debates Clínicos',
    subtitle: 'O site também apresenta o Tratado em Debate, um videocast oficial derivado dos capítulos da obra, trazendo discussões com os autores sobre temas relevantes da cirurgia da coluna.',
    narration: 'O site também apresenta o Tratado em Debate, um videocast oficial derivado dos capítulos da obra, trazendo discussões com os autores sobre temas relevantes da cirurgia da coluna.'
  },
  {
    id: 8,
    title: 'Seletor de Idiomas',
    duration: 12,
    callout: 'Acesso Global • PT | ES | EN',
    subtitle: 'O conteúdo de apoio também está disponível em português, espanhol e inglês, ampliando o alcance da obra e facilitando o acesso internacional.',
    narration: 'O conteúdo de apoio também está disponível em português, espanhol e inglês, ampliando o alcance da obra e facilitando o acesso internacional.'
  },
  {
    id: 9,
    title: 'Onde Comprar (Edição Impressa)',
    duration: 18,
    callout: 'Edição Impressa Exclusiva • Conteúdo Integral',
    subtitle: 'É importante lembrar que o conteúdo completo do Tratado está disponível exclusivamente na edição impressa. O site funciona como um ambiente de apoio para consulta, estudo e acesso às referências.',
    narration: 'É importante lembrar que o conteúdo completo do Tratado está disponível exclusivamente na edição impressa. O site funciona como um ambiente de apoio para consulta, estudo, navegação e acesso às referências.'
  },
  {
    id: 10,
    title: 'Encerramento Institucional',
    duration: 14,
    callout: 'Consulta • Estudo • Referência',
    subtitle: 'Explore o Tratado de Cirurgia da Coluna Vertebral e utilize o site como seu ambiente de apoio para consulta, estudo e aprofundamento científico.',
    narration: 'Explore o Tratado de Cirurgia da Coluna Vertebral e utilize o site como seu ambiente de apoio para consulta, estudo e aprofundamento científico.'
  }
];

let acc = 0;
const SCENES = SCENES_DATA.map((s) => {
  const start = acc;
  acc += s.duration;
  return { ...s, startTime: start, endTime: acc };
});
const TOTAL_DURATION = acc;

export default function VideoTutorialPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#070B14', color: '#F1F5F9', padding: '20px' }}>
      <iframe
        src="/video.html"
        style={{
          width: '100%',
          height: 'calc(100vh - 40px)',
          border: 'none',
          borderRadius: '16px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
        }}
        title="Vídeo Tutorial Tratado de Cirurgia da Coluna Vertebral"
      />
    </div>
  );
}
