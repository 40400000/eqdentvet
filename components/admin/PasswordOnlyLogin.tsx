import type { AdminViewServerProps } from "payload";
import { redirect } from "next/navigation";

import { PasswordOnlyLoginForm } from "./PasswordOnlyLoginForm";

export const PasswordOnlyLogin = async ({
  initPageResult,
  searchParams,
}: AdminViewServerProps) => {
  const {
    req: { user },
  } = initPageResult;

  if (user) {
    const redirectTo =
      typeof searchParams?.redirect === "string"
        ? searchParams.redirect
        : "/admin";
    redirect(redirectTo);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "var(--theme-bg)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "360px",
          background: "var(--theme-elevation-50)",
          padding: "2rem",
          borderRadius: "8px",
          border: "1px solid var(--theme-elevation-100)",
        }}
      >
        <h1
          style={{
            margin: 0,
            marginBottom: "0.25rem",
            fontSize: "1.5rem",
            fontWeight: 500,
          }}
        >
          EQDent Admin
        </h1>
        <p
          style={{
            margin: 0,
            marginBottom: "1.5rem",
            color: "var(--theme-elevation-600)",
            fontSize: "0.9rem",
          }}
        >
          Voer het beheerwachtwoord in om in te loggen.
        </p>
        <PasswordOnlyLoginForm
          redirect={
            typeof searchParams?.redirect === "string"
              ? searchParams.redirect
              : "/admin"
          }
        />
      </div>
    </div>
  );
};

export default PasswordOnlyLogin;
