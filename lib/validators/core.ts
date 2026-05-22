import { z, ZodType } from "zod";

type ValidationSuccess<T> = {
    status: "success";
    data: T;
}

type ValidationError<T> = {
    status: "validationError";
    fieldErrors: Partial<Record<keyof T, string[]>>;
}

type ValidationResult<T> = ValidationSuccess<T> | ValidationError<T>;

export const validateWithSchema = <T>(schema: ZodType<T>, input: T): ValidationResult<T> => {
    const result = schema.safeParse(input);

    if (!result.success) {
        const flattened = z.flattenError(result.error);
        return { status: "validationError", fieldErrors: flattened.fieldErrors } as const;
    } else {
        return { status: "success", data: result.data } as const;
    }
}