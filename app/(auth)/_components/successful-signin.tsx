import Link from "next/link";

const SuccessfulSignin = ({ email }: { email: string }) => {
  return (
    <div
      className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-8 sm:px-8 sm:py-10 space-y-6"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Account created
        </h2>

        <p className="text-sm text-gray-600">
          We sent a verification email to{" "}
          <span className="font-medium text-gray-900">{email}</span>. Please
          check your inbox to continue.
        </p>

        <p className="text-xs text-gray-500">
          If you do not see it, check your spam folder.
        </p>
      </div>

      <div className="flex justify-center gap-3 pt-2">
        <Link
          href="/login"
          className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl transition"
        >
          Go to login
        </Link>

        <button
          type="button"
          className="cursor-pointer px-4 py-2 text-rose-500 font-semibold hover:underline disabled:opacity-50"
        >
          Resend email
        </button>
      </div>
    </div>
  );
};

export default SuccessfulSignin;
