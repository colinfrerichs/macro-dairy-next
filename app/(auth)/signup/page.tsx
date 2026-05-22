"use client";

import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";

import HeartIcon from "../_components/heart-icon";
import SocialButtons from "../_components/social-buttons";
import SignupForm from "./_components/signup-form";
import SuccessfulSignin from "../_components/successful-signin";

import { useActionState } from "react";
import { signup } from "@/lib/auth/actions";
import { SignupState } from "@/lib/types/auth/auth";
import { OAuthProvider } from "@/lib/types/auth/auth";

const SignUpPage = () => {
  const [state, formAction] = useActionState<SignupState, FormData>(signup, {
    status: "idle",
  });
  const [oauthError, setOauthError] = useState<string | null>(null);
  const supabase = createClient();

  if (state.status === "success") {
    return <SuccessfulSignin email={state.data?.email} />;
  }

  const loginWithProvider = async (provider: OAuthProvider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setOauthError("Error signing up. Please try again in a few minutes.");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <div className="w-11 h-11 bg-rose-500 rounded-xl flex items-center justify-center mb-1">
          <HeartIcon aria-hidden="true" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">
          Create your account
        </h2>
        <p className="text-sm text-zinc-400 text-center">
          Already have one?{" "}
          <Link
            href="/login"
            className="text-rose-500 font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
      <SocialButtons providerSignup={loginWithProvider} />
      {oauthError && (
        <div
          role="alert"
          aria-live="polite"
          className="text-center text-sm text-red-600 font-medium"
        >
          {oauthError}
        </div>
      )}
      <div className="flex items-center gap-3">
        <hr className="flex-1 border-zinc-300" />
        <span className="text-xs text-zinc-400 font-medium">
          or continue with email
        </span>
        <hr className="flex-1 border-zinc-300" />
      </div>
      <SignupForm state={state} formAction={formAction} />
      <p className="text-xs text-zinc-400 text-center">
        By signing up you agree to our{" "}
        <Link href="#" className="text-rose-500 hover:underline">
          Terms
        </Link>{" "}
        and{" "}
        <Link href="#" className="text-rose-500 hover:underline">
          Privacy Policy
        </Link>
      </p>
    </>
  );
};

export default SignUpPage;
