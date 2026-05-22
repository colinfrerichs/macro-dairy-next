"use client";

import Link from "next/link";

import { useActionState } from "react";
import { signIn } from "@/lib/auth/actions";
import { SignInState } from "@/lib/types/auth/auth";

import HeartIcon from "../_components/heart-icon";
import SigninForm from "./_components/signin-form";

const LoginPage = () => {
  const [state, formAction] = useActionState<SignInState, FormData>(signIn, {
    status: "idle",
  });

  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <div className="w-11 h-11 bg-rose-500 rounded-xl flex items-center justify-center mb-1">
          <HeartIcon aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Sign In
        </h2>
        <p className="text-sm text-zinc-400 text-center">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-rose-500 font-medium hover:underline"
          >
            Sign up.
          </Link>
        </p>
      </div>
      <SigninForm state={state} formAction={formAction} />
      <div className="flex flex-col text-center">
        <Link
          href="/forgot-password"
          className="text-center text-sm font-medium text-rose-500 hover:underline"
        >
          Forgot password?
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
