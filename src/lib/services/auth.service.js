import { supabase } from '../supabase';

/**
 * Sign in with email and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{data: {user: User, session: Session}, error: Error}>}
 * @example
 * const { user, session } = await signInWithPassword({
 *  email: 'example@example.com'
 *  password: 'password'
 * });
 */
export const signInWithPassword = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) throw error;
  return data;
};

/**
 * Sign up with email and password
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<AuthResponse>}
 * @example
 * const data = await signUp({
 *  email: 'example@example.com',
 *  password: 'password'
 * });
 */
export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    // options: { emailRedirectTo: 'https://example.com/example' },
  });
  if (error) throw error;
  return data;
};

/**
 * Sign out the current user
 */
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
