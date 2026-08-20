"use client";

import React from "react";
import {
  Brain,
  Search,
  Activity,
  Spline,
  Layers,
  Crosshair,
  Globe,
  Wrench,
  AlertTriangle,
  BookOpen,
  Bone,
  ShieldAlert,
  Disc,
  Flame,
  Stethoscope,
  Scissors,
} from "lucide-react";

interface SectionIconProps {
  sectionId: number | string;
  size?: number;
  className?: string;
  color?: string;
}

export default function SectionIcon({
  sectionId,
  size = 24,
  className = "",
  color,
}: SectionIconProps) {
  const idNum = typeof sectionId === "string" ? parseInt(sectionId, 10) : sectionId;

  switch (idNum) {
    case 1:
      // Conceitos Básicos: Anatomia e Fundamentos
      return <Brain size={size} className={className} color={color} />;
    case 2:
      // Diagnóstico: Exames de Imagem, Tomografia e Ressonância
      return <Search size={size} className={className} color={color} />;
    case 3:
      // Lesões Traumáticas da Coluna: Trauma, Fraturas, Urgência
      return <Activity size={size} className={className} color={color} />;
    case 4:
      // Deformidades da Coluna: Escoliose, Cifose, Eixos Sagital e Coronal
      return <Spline size={size} className={className} color={color} />;
    case 5:
      // Doenças Degenerativas: Disco, Artrose, Estenose de Canal
      return <Layers size={size} className={className} color={color} />;
    case 6:
      // Tumores na Coluna: Oncologia Espinhal, Metástases e Biópsia
      return <Crosshair size={size} className={className} color={color} />;
    case 7:
      // Outras Doenças da Coluna: Infecções, Deformidades Raras, Sistêmicas
      return <Globe size={size} className={className} color={color} />;
    case 8:
      // Técnicas Cirúrgicas: Acessos, Instrumentação Pedicular e Artrodese
      return <Wrench size={size} className={className} color={color} />;
    case 9:
      // Complicações: Fístula Liquórica, Infecção, Falha Mecânica
      return <AlertTriangle size={size} className={className} color={color} />;
    case 10:
      // Temas Complementares: Robótica, Inteligência Artificial, Reabilitação
      return <BookOpen size={size} className={className} color={color} />;
    default:
      return <BookOpen size={size} className={className} color={color} />;
  }
}
