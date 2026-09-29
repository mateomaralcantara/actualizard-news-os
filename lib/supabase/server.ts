import "server-only";

import {
  createClient
} from "@supabase/supabase-js";

function getSupabaseUrl() {

  const value =
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!value) {
    throw new Error(
      "SUPABASE_URL / NEXT_PUBLIC_SUPABASE_URL no configurado."
    );
  }

  return value;
}

function getSupabaseSecret() {

  const value =
    process.env.SUPABASE_SECRET_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!value) {
    throw new Error(
      "SUPABASE_SECRET_KEY no configurado."
    );
  }

  return value;
}

export function createSupabaseServerClient() {

  return createClient(
    getSupabaseUrl(),
    getSupabaseSecret(),
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
      }
    }
  );
}

export function isSupabaseConfigured() {

  return Boolean(
    (
      process.env.SUPABASE_URL ||
      process.env.NEXT_PUBLIC_SUPABASE_URL
    ) &&
    (
      process.env.SUPABASE_SECRET_KEY ||
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )
  );
}
