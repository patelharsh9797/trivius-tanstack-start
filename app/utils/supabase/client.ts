import { SUPABASE_AUTH_COOKIE_NAME } from "@/utils/constants";
import { createBrowserClient } from "@supabase/ssr";

console.log(import.meta.env.VITE_PUBLIC_SUPABASE_URL);
console.log(import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY);

export function createSupabaseClient() {
  return createBrowserClient(
    import.meta.env.VITE_PUBLIC_SUPABASE_URL!,
    import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookieOptions: {
        name: SUPABASE_AUTH_COOKIE_NAME,
      },
    },
  );
}

export const supabaseClient = createSupabaseClient();
