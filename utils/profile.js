import { DUPLICATE_KEY_ERROR_CODE, supabase } from "../config/supabase";

export async function getProfile(id) {
  const profile = await supabase.from("profiles").select("*").eq('id', id).single();
  return profile;
}

export async function createProfile(profile) {
  try {
    const response = await supabase.from("profiles").insert(profile).single();
    if (response.error) {
      if (response.error.code === DUPLICATE_KEY_ERROR_CODE) {
        return null;
      }
      throw new Error(response.error.message);
    }
    return response.data;
  } catch (error) {
    console.log(error.code)
  }
}
