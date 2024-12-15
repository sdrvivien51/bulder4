import { createClient } from '@supabase/supabase-js';
import { SUPABASE_CONFIG } from '@/config/supabase';

if (!SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) {
  throw new Error('Missing Supabase configuration');
}

export const supabase = createClient(
  SUPABASE_CONFIG.url,
  SUPABASE_CONFIG.anonKey,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
    },
  }
);