import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL && fs.existsSync('.env.local')) {
  const envContent = fs.readFileSync('.env.local', 'utf8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
      const [key, ...vals] = trimmed.split('=');
      process.env[key.trim()] = vals.join('=').trim();
    }
  }
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function resetViews() {
  const { data, error } = await supabase
    .from('knowledge_pieces')
    .update({ views: 0 })
    .neq('views', 0);
  console.log('Reset views to 0. Error:', error);
}

resetViews();
