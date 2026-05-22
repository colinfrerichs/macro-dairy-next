"use server";

import { createClient } from "@/lib/supabase/server";

export const signUpNewUser = async (email: string, password: string, username: string) => {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                username: username,
                avatar_url: "",
            }
        }
    });

    return { data, error };
}

export const signInUser = async (email: string, password: string) => {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    return { data, error };
}

export const signOutUser = async () => {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();

    return error;
}
