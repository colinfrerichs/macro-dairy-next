import { type FC } from "react";

interface AuthInputProps extends React.ComponentProps<"input"> {
  label: string;
  placeholder?: string;
  error?: string;
}

const AuthInput: FC<AuthInputProps> = ({
  label,
  error,
  placeholder,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.id} className="text-sm font-semibold text-rose-500">
        {label}
      </label>
      <input
        {...props}
        placeholder={placeholder ?? ""}
        className="w-full py-2 px-3 border border-gray-200 rounded-xl text-sm text-gray-900 bg-gray-50 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
      />
      {error && (
        <span
          id={`${props.id}-error`}
          role="alert"
          className="py-3 text-xs text-rose-500"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default AuthInput;
