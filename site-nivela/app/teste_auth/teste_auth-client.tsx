"use client";

import { useEffect } from "react";

type TesteAuthClientProps = {
  authenticated: boolean;
};

export default function TesteAuthClient({ authenticated }: TesteAuthClientProps) {
  useEffect(() => {
    if (!authenticated) {
      return;
    }

    let token = "";

    try {
      token = window.sessionStorage.getItem("teste_auth_token") || "";
    } catch (error) {
      console.error("Unable to read auth token from sessionStorage", error);
    }

    if (!token || !window.opener || window.opener.closed) {
      return;
    }

    window.opener.postMessage(`authorization:github:success:${JSON.stringify({ token })}`, "*");
  }, [authenticated]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <section className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">teste_auth</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">
          {authenticated ? "Autenticacao confirmada" : "Aguardando autenticacao"}
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-300">
          {authenticated
            ? "O CMS recebeu o token do GitHub e a pagina tentou concluir o login."
            : "Esta pagina serve apenas para confirmar visualmente o fluxo de autenticacao."}
        </p>
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300">
          Estado: <span className="font-mono text-slate-100">{authenticated ? "success" : "waiting"}</span>
          <br />
          Token detectado: <span className="font-mono text-slate-100">{authenticated ? "verificado" : "nao"}</span>
          <br />
          Mensagem enviada ao CMS:{" "}
          <span className="font-mono text-slate-100">{authenticated ? "tentativa enviada" : "nao"}</span>
        </div>
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300">
          URL de teste: <span className="font-mono text-slate-100">/teste_auth?result=success</span>
        </div>
      </section>
    </main>
  );
}
