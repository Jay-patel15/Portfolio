import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

// Falls back to placeholder values so builds succeed before Supabase env vars
// are configured; real credentials must be set in .env.local for the contact
// form to actually deliver rows (see .env.local.example).
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
