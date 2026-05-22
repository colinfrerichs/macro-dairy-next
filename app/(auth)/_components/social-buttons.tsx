import OAuthButton from "./oauth-button";

import { ProviderSignupFn } from "@/lib/types/auth/auth";

const SocialButtons = ({
  providerSignup,
}: {
  providerSignup: ProviderSignupFn;
}) => {
  return (
    <div className="flex gap-3 mt-8 mb-8">
      <OAuthButton provider={"google"} providerSignup={providerSignup} />
      <OAuthButton provider={"apple"} providerSignup={providerSignup} />
      <OAuthButton provider={"facebook"} providerSignup={providerSignup} />
    </div>
  );
};

export default SocialButtons;
