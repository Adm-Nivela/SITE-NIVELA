import TesteAuthClient from "./teste_auth-client";
import type { Metadata } from "next";

type TesteAuthPageProps = {
  searchParams?: Promise<{
    result?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Teste de autenticação",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function TesteAuthPage({ searchParams }: TesteAuthPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const authenticated = resolvedSearchParams?.result === "success";

  return <TesteAuthClient authenticated={authenticated} />;
}
