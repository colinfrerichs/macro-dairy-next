export type SignupInput = {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
};

export type SignInInput = {
    email: string;
    password: string;
}

export type SignupState = {
    status: "idle",
} | {
    status: "validationError";
    fieldErrors?: {
        email?: string[],
        username?: string[],
        password?: string[],
        confirmPassword?: string[],
    };
} | {
    status: "success";
    data: {
        email: string;
        username: string;
        password: string;
        confirmPassword: string;
    };
} | {
    status: "serverError";
    message: string;
};

export type SignInState = {
    status: "idle",
} | {
    status: "validationError";
    fieldErrors?: {
        email?: string[];
        password?: string[];
    };
} | {
    status: "success";
    data: {
        email: string;
        password: string;
    };
} | {
    status: "serverError";
    message: string;
}

export type OAuthProvider = "google" | "apple" | "facebook";

export type ProviderSignupFn = (
    provider: OAuthProvider
) => Promise<void>;
