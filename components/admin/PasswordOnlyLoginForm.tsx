"use client";

import { useState } from "react";

const ADMIN_EMAIL = "admin@eqdent.nl";

type Props = { redirect: string };

export const PasswordOnlyLoginForm = ({ redirect }: Props) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: ADMIN_EMAIL, password }),
      });
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as
          | { errors?: { message?: string }[]; message?: string }
          | null;
        const message =
          body?.errors?.[0]?.message ??
          body?.message ??
          "Onjuist wachtwoord.";
        setError(message);
        setIsSubmitting(false);
        return;
      }
      window.location.assign(redirect || "/admin");
    } catch {
      setError("Inloggen mislukt. Probeer het opnieuw.");
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <label
        style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
      >
        <span style={{ fontSize: "0.85rem", fontWeight: 500 }}>
          Wachtwoord
        </span>
        <input
          type="password"
          autoComplete="current-password"
          required
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isSubmitting}
          style={{
            padding: "0.65rem 0.8rem",
            border: "1px solid var(--theme-elevation-200)",
            borderRadius: "4px",
            fontSize: "1rem",
            background: "var(--theme-input-bg)",
            color: "var(--theme-text)",
          }}
        />
      </label>
      {error ? (
        <div
          style={{
            color: "var(--theme-error-500, #c15b4d)",
            fontSize: "0.85rem",
          }}
        >
          {error}
        </div>
      ) : null}
      <button
        type="submit"
        disabled={isSubmitting || password.length === 0}
        style={{
          padding: "0.7rem 1rem",
          background: "var(--theme-success-500, #4c8a65)",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          fontSize: "1rem",
          fontWeight: 500,
          cursor: isSubmitting ? "not-allowed" : "pointer",
          opacity: isSubmitting ? 0.7 : 1,
        }}
      >
        {isSubmitting ? "Bezig met inloggen..." : "Inloggen"}
      </button>
    </form>
  );
};

export default PasswordOnlyLoginForm;
