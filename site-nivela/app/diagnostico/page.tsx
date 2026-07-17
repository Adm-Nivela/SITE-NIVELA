import fs from 'fs';
import path from 'path';
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function DiagnosticoCMS() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const categoriesDirectory = path.join(process.cwd(), 'content/categories');
  
  let files: string[] = [];
  let categories: string[] = [];
  try {
    if (fs.existsSync(postsDirectory)) {
      files = fs.readdirSync(postsDirectory);
    }
    if (fs.existsSync(categoriesDirectory)) {
      categories = fs.readdirSync(categoriesDirectory);
    }
  } catch (e) {
    console.error(e);
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', background: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      <h1>Validação de Estrutura de Conteúdo</h1>
      <p>Status: {files.length > 0 && categories.length > 0 ? 'Funcional' : 'Pasta vazia ou não encontrada'}</p>
      <h2>Arquivos em content/posts:</h2>
      <ul>
        {files.map(file => <li key={file}>{file}</li>)}
      </ul>
      <h2>Arquivos em content/categories:</h2>
      <ul>
        {categories.map(file => <li key={file}>{file}</li>)}
      </ul>
    </div>
  );
}
