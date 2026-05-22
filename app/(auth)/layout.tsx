import { memo, ReactNode, type FC } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full grid place-items-center p-4">
      <div className="w-full max-w-[500px] h-[650px] sm:h-[600px] flex flex-col rounded-2xl shadow-sm border border-gray-100 items-center justify-center p-8">
        <div className="w-full sm:px-8 sm:py-10 space-y-5">{children}</div>
      </div>
    </div>
  );
};

export default memo(AuthLayout);
