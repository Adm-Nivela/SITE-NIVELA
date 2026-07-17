import { NextRequest, NextResponse } from "next/server";

const githubAuthorizeUrl = "https://github.com/login/oauth/authorize";

function getGithubClientId() {
  return process.env.GITHUB_CLIENT_ID;
}

function getRepoScope() {
  return process.env.GITHUB_REPO_PRIVATE && process.env.GITHUB_REPO_PRIVATE !== "0"
    ? "repo,user"
    : "public_repo,user";
}

function buildCallbackUrl(request: NextRequest) {
  return new URL("/api/cms/callback?provider=github", request.url).toString();
}

export async function GET(request: NextRequest) {
  const provider = request.nextUrl.searchParams.get("provider") ?? "github";

  if (provider !== "github") {
    return NextResponse.json({ error: "Invalid provider." }, { status: 400 });
  }

  const clientId = getGithubClientId();

  if (!clientId) {
    return NextResponse.json(
      { error: "Missing GITHUB_CLIENT_ID environment variable." },
      { status: 500 },
    );
  }

  const state = crypto.randomUUID();
  const authorizeUrl = new URL(githubAuthorizeUrl);

  authorizeUrl.searchParams.set("response_type", "code");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", buildCallbackUrl(request));
  authorizeUrl.searchParams.set("scope", getRepoScope());
  authorizeUrl.searchParams.set("state", state);

  const response = NextResponse.redirect(authorizeUrl.toString(), 302);

  response.cookies.set("decap_oauth_state", state, {
    httpOnly: true,
    sameSite: "lax",
    secure: request.nextUrl.protocol === "https:",
    path: "/",
    maxAge: 10 * 60,
  });

  return response;
}
