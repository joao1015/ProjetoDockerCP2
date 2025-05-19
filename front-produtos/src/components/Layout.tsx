'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import logoLeft from '@/imag/Captura de tela 2025-05-12 154359.png';
import logoRight from '@/imag/Captura de tela 2025-05-12 154412.png';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
      {/* Cabeçalho com logo */}
      <header className="bg-yellow-400 shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo da DimDim */}
          <div className="flex items-center space-x-3">
           <Image
  src={logoLeft} // Certifique-se que 'logoLeft' é uma importação ou string válida
  alt="Logo DimDim"
  width={70}
  height={70}
  className="rounded-full bg-transparent"
/>

            <span className="text-xl font-bold tracking-wide text-gray-900">DimDim</span>
          </div>
          <span className="text-sm text-gray-800 italic">by StevesJobs</span>
        </div>
      </header>

      {/* Introdução institucional */}
      <section className="bg-yellow-50 py-6 px-6 border-b">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold mb-2">Bem-vindo à DimDim</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            A <strong>Instituição Financeira DimDim</strong> é especializada em serviços bancários modernos.
            Esta plataforma foi desenvolvida para gerenciar o <strong>cadastro de serviços bancários e seus valores</strong>,
            substituindo os antigos processos internos por uma solução eficiente em <strong>nuvem</strong>, mantendo
            a qualidade e confiança de sempre.
          </p>
        </div>
      </section>

      {/* Conteúdo principal */}
      <main className="flex-grow container mx-auto max-w-6xl px-6 py-8">
        {children}
      </main>

      {/* Rodapé */}
      <footer className="bg-yellow-100 border-t py-4 text-center text-sm text-gray-700">
        © {new Date().getFullYear()} DimDim — Criado com 💡 por StevesJobs
      </footer>
    </div>
  );
}
