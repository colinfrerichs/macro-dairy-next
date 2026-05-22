"use client";

import { SignupState } from "@/lib/types/auth/auth";

import AuthInput from "../../_components/auth-input";
import SubmitButton from "../../_components/submit-button";

const SignupForm = ({
  state,
  formAction,
}: {
  state: SignupState;
  formAction: (formData: FormData) => void | Promise<void>;
}) => {
  const fieldErrors =
    state.status === "validationError" ? state.fieldErrors : {};

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="sm:col-span-2">
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
        </div>
        <div className="sm:col-span-2">
          <AuthInput
            label="Username"
            id="username"
            type="text"
            name="username"
            autoComplete="username"
            required
            aria-required="true"
            error={fieldErrors?.username?.[0]}
          />
        </div>
        <AuthInput
          label="Password"
          id="password"
          type="password"
          name="password"
          autoComplete="new-password"
          required
          aria-required="true"
          error={fieldErrors?.password?.[0]}
        />
        <AuthInput
          label="Confirm password"
          id="confirm-password"
          type="password"
          name="confirmPassword"
          autoComplete="new-password"
          required
          aria-required="true"
          error={fieldErrors?.confirmPassword?.[0]}
        />
      </div>
      <SubmitButton text="Sign up" pendingText="Signing up..." />
      {state.status === "serverError" && (
        <div
          role="alert"
          aria-live="polite"
          className="text-center text-sm text-red-600 font-medium"
        >
          Error signing up. Please try again in a few minutes.
        </div>
      )}
    </form>
  );
};

export default SignupForm;
