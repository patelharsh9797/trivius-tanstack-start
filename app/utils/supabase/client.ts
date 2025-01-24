import { createBrowserClient } from "@supabase/ssr";

console.log(import.meta.env.VITE_PUBLIC_SUPABASE_URL);
console.log(import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY);

export function createSupabaseClient() {
  return createBrowserClient(
    import.meta.env.VITE_PUBLIC_SUPABASE_URL!,
    import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

export const supabaseClient = createSupabaseClient();
