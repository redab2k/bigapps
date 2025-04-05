"use server";
import "server-only";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { LoginSchema } from "../validation/auth";

type LoginState = {
  error: string | null;
  success?: boolean;
};

export async function loginUser(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const validatedFields = LoginSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      error: "Invalid username or password format",
      success: false,
    };
  }

  const { username, password } = validatedFields.data;

  try {
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result?.error) {
      return {
        error: "Invalid username or password",
        success: false,
      };
    }

    return { error: null, success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid username or password", success: false };
        default:
          return {
            error: "Something went wrong. Please try again.",
            success: false,
          };
      }
    }

    return {
      error: "An unexpected error occurred. Please try again.",
      success: false,
    };
  }
}
