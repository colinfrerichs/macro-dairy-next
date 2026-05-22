"use server";

import { redirect } from "next/navigation";

import { signInUser, signUpNewUser, signOutUser } from "./auth";
import { validateSignIn, validateSignup } from "@/lib/validators/formValidators";

import { SignInInput } from "@/lib/types/auth/auth";
import { SignInState } from "@/lib/types/auth/auth";
import { SignupInput } from "@/lib/types/auth/auth";
import { SignupState } from "@/lib/types/auth/auth";

export const signIn = async (prevState: SignInState, formData: FormData): Promise<SignInState> => {
    const input = Object.fromEntries(formData);

    const result = validateSignIn(input as SignInInput);

    if (result.status !== "success") {
        return result;
    }

    const { error } = await signInUser(
        result.data.email,
        result.data.password
    );

    if (error) {
        return {
            status: "serverError",
            message: "Invalid email or password.",
        };
    }

    redirect("/dashboard");
}

export const signup = async (prevState: SignupState, formData: FormData): Promise<SignupState> => {
    const input = Object.fromEntries(formData);
    const result = validateSignup(input as SignupInput);

    if (result.status !== "success") return result;

    const { error } = await signUpNewUser(
        result.data.email, 
        result.data.password, 
        result.data.username
    );

    if (error) {
        return {
            status: "serverError",
            message: error.message,
        };
    }

    return {
        status: "success",
        data: result.data,
    };
}

export const signOut = async () => {
    await signOutUser();

    redirect("/login");
}
