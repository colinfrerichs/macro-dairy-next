"use client";

import { SignInState } from "../../types/auth";

import AuthInput from "../../_components/auth-input";
import SubmitButton from "../../_components/submit-button";

const SigninForm = ({
  state,
  formAction,
}: {
  state: SignInState;
  formAction: (formData: FormData) => void | Promise<void>;
}) => {
  const fieldErrors =
    state.status === "validationError" ? state.fieldErrors : {};

  return (
    <form action={formAction} className="space-y-4">
      <div className="flex flex-col gap-3">
        <AuthInput
          label="Email address"
          placeholder="name@example.com"
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          required
          aria-required="true"
          error={fieldErrors?.email?.[0]}
        />
        <AuthInput
          label="Password"
          id="password"
          type="password"
          name="password"
          autoComplete="current-password"
          required
          aria-required="true"
          error={fieldErrors?.password?.[0]}
        />
        <SubmitButton text="Sign in" pendingText="Signing in..." />
      </div>
      {state.status === "serverError" && (
        <div
          role="alert"
          aria-live="polite"
          className="text-center text-sm text-red-600 font-medium"
        >
          {state.message}
        </div>
      )}
    </form>
  );
};

export default SigninForm;
