'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { Produto } from '@/types/Produto';
import { fetcher } from '@/utils/api';

import logoLeft from '@/imag/Captura de tela 2025-05-12 154359.png';
import logoRight from '@/imag/Captura de tela 2025-05-12 154412.png';

export default function HomePage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function load() {
    setProdutos(await fetcher<Produto[]>('/api/Produto'));
  }

  async function handleDelete(id: number) {
    if (!confirm('Confirma exclusão?')) return;
    await fetcher(`/api/Produto/${id}`, { method: 'DELETE' });
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <Layout>
      {/* Cabeçalho com logos e título centralizado */}
      <div className="flex items-center justify-center mb-8 space-x-4">
        <Image
          src={logoLeft}
          alt="Logo Esquerda"
          width={60}
          height={60}
          className="rounded-full bg-white p-1 shadow-md"
        />
        <h1 className="text-3xl font-bold text-yellow-600 tracking-wide">
          DimDim DevOps Migration
        </h1>
        <Image
          src={logoRight}
          alt="Logo Direita"
          width={60}
          height={60}
          className="rounded-full bg-white p-1 shadow-md"
        />
      </div>

      {/* Tabela de produtos */}
      <div className="overflow-x-auto">
        <table className="w-full border text-sm text-gray-800 shadow-sm">
          <thead className="bg-yellow-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Nome</th>
              <th className="p-3 border">Preço</th>
              <th className="p-3 border">Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((p) => (
              <tr key={p.id} className="even:bg-gray-50 hover:bg-yellow-50 transition">
                <td className="p-3 border text-center">{p.id}</td>
                <td className="p-3 border">{p.nome}</td>
                <td className="p-3 border">R$ {Number(p.preco).toFixed(2)}</td>
                <td className="p-3 border text-center space-x-2">
                  <Link href={`/editar/${p.id}`}>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded shadow-sm">
                      ✏️ Editar
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(p.id!)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow-sm"
                  >
                    🗑️ Excluir
                  </button>
                </td>
              </tr>
            ))}
            {produtos.length === 0 && (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-400 italic">
                  Nenhum produto cadastrado ainda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Botão de adicionar produto */}
      <div className="mt-6 text-center">
        <Link href="/novo">
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md transition">
            ➕ Adicionar Produto
          </button>
        </Link>
      </div>
    </Layout>
  );
}
