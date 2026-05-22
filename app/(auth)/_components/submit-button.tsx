"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = ({
  text,
  pendingText,
}: {
  text: string;
  pendingText: string;
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      aria-live="polite"
      type="submit"
      disabled={pending}
      className="cursor-pointer w-full py-2 bg-rose-500 hover:bg-rose-600 disabled:bg-rose-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition"
    >
      {pending ? pendingText : text}
    </button>
  );
};

export default SubmitButton;
