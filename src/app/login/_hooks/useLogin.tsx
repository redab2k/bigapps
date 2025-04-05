"use client";
import { loginUser } from "@/lib/actions/auth";
import { LoginFormValues, LoginSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormData = {
  username: string;
  password: string;
};

export function useLogin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useActionState(loginUser, {
    error: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  useEffect(() => {
    async function updateAfterLogin() {
      if (state.success) {
        toast.success("Logged in successfully!");
        await getSession();
        router.push("/dashboard");
        router.refresh();
      }
    }

    updateAfterLogin();
  }, [state, router]);

  const onSubmit = (data: FormData) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);

    startTransition(() => {
      formAction(formData);
    });
  };

  return {
    showPassword,
    setShowPassword,
    isPending,
    state,
    onSubmit,
    register,
    handleSubmit,
    errors,
  };
}
