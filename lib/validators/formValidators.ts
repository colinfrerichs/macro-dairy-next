import { validateWithSchema } from "./core";

import { signupSchema } from "./schemas/signup";
import { signinSchema } from "./schemas/signin";

import { SignInInput } from "@/app/(auth)/types/auth";
import { SignupInput } from "@/app/(auth)/types/auth";
import { SignInState } from "@/app/(auth)/types/auth";
import { SignupState } from "@/app/(auth)/types/auth";

export const validateSignup = (input: SignupInput): SignupState => {
    return validateWithSchema(signupSchema, input);
}

export const validateSignIn = (input: SignInInput): SignInState => {
    return validateWithSchema(signinSchema, input);
}
