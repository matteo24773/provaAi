import { createClient } from '@supabase/supabase-js'

// IMPORTANT: Replace with your actual Supabase URL and Anon Key
// You should store these in environment variables for security
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://nqgsnqggzhjkveffgqkb.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xZ3NucWdnemhqa3ZlZmZncWtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MDg0NjMsImV4cCI6MjA2MzQ4NDQ2M30.PYsLUadRWTYhRuOzSAZeJMJDOVLj9iLR2JYioJR8yXE';

if (supabaseUrl === 'https://nqgsnqggzhjkveffgqkb.supabase.co' || supabaseAnonKey === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xZ3NucWdnemhqa3ZlZmZncWtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MDg0NjMsImV4cCI6MjA2MzQ4NDQ2M30.PYsLUadRWTYhRuOzSAZeJMJDOVLj9iLR2JYioJR8yXE') {
  console.warn('Supabase URL or Anon Key is not configured. Please update src/supabaseClient.js or create a .env file with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
