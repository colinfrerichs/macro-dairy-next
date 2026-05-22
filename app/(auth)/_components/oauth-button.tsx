"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

import { toCapitalize } from "@/utils/ui/toCapitalize";

import { OAuthProvider, ProviderSignupFn } from "@/lib/types/auth/auth";

const OAUTH_BUTTON_MAP = {
  apple: faApple,
  facebook: faFacebook,
  google: faGoogle,
} as const;

const OAuthButton = ({
  provider,
  providerSignup,
}: {
  provider: OAuthProvider;
  providerSignup: ProviderSignupFn;
}) => {
  const capitalProvider = toCapitalize(provider);

  return (
    <button
      aria-label={`Sign up with ${capitalProvider}`}
      className="cursor-pointer flex items-center justify-center gap-2 w-full py-2 border border border-gray-200 rounded-xl hover:bg-gray-50 transition"
      onClick={() => providerSignup(provider)}
    >
      <FontAwesomeIcon icon={OAUTH_BUTTON_MAP[provider]} className="w-4 h-4" />
      <span className="text-sm font-medium text-gray-700">
        {capitalProvider}
      </span>
    </button>
  );
};

export default OAuthButton;
