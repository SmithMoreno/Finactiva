// filepath: /path/to/saveUser.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const saveUser = async (user: { id: string; email: string }) => {
  const { id, email } = user;
  const role = 'user'; // Asigna el rol por defecto

  const { data, error } = await supabase
    .from('users')
    .insert([{ id, email, role }]);

  if (error) {
    console.error('Error saving user:', error);
  } else {
    console.log('User saved:', data);
  }
};