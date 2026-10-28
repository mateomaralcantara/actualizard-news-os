import "server-only";

import { createClient } from "@supabase/supabase-js";

function getSupabaseUrl() {
  const raw =
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!raw) {
    throw new Error("SUPABASE_URL / NEXT_PUBLIC_SUPABASE_URL no configurado.");
  }

  const value = raw.trim().replace(/^["']|["']$/g, "");
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    throw new Error("SUPABASE_URL no es una URL valida.");
  }
  if (
    parsed.protocol !== "https:" &&
    !(parsed.protocol === "http:" && ["localhost", "127.0.0.1"].includes(parsed.hostname))
  ) {
    throw new Error("SUPABASE_URL debe usar HTTPS.");
  }
  return value;
}

function getSupabaseSecret() {
  const raw =
    process.env.SUPABASE_SECRET_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!raw) {
    throw new Error("SUPABASE_SECRET_KEY no configurado.");
  }

  // Normaliza espacios y saltos de linea al copiar tokens desde un panel.
  // Un token con saltos de linea se rechaza como cabecera HTTP y podria
  // aparecer parcialmente en mensajes de excepcion.
  const value = raw.trim().replace(/^["']|["']$/g, "").replace(/\s+/g, "");
  if (!/^[A-Za-z0-9._-]{20,}$/.test(value)) {
    throw new Error("SUPABASE_SECRET_KEY tiene un formato invalido.");
  }
  return value;
}

export function createSupabaseServerClient() {
  return createClient(getSupabaseUrl(), getSupabaseSecret(), {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false
    }
  });
}

export function isSupabaseConfigured() {
  return Boolean(
    (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    (process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY)
  );
}
