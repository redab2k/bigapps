"use client";

import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useLogin } from "../_hooks/useLogin";
import { cn } from "@/lib/utils/utils";

export default function LoginForm() {
  const {
    showPassword,
    setShowPassword,
    isPending,
    onSubmit,
    register,
    handleSubmit,
    errors,
  } = useLogin();

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              id="username"
              placeholder="johndoe"
              type="text"
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect="off"
              disabled={isPending}
              className={cn(
                "block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 disabled:cursor-not-allowed disabled:opacity-50",
                errors.username &&
                  "border-red-500 focus:border-red-500 focus:ring-red-500"
              )}
              {...register("username")}
            />
            {errors.username && (
              <p className="text-sm text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
            </div>
            <div className="relative">
              <input
                id="password"
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
                autoCapitalize="none"
                autoComplete="current-password"
                autoCorrect="off"
                disabled={isPending}
                className={cn(
                  "block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 disabled:cursor-not-allowed disabled:opacity-50",
                  errors.password &&
                    "border-red-500 focus:border-red-500 focus:ring-red-500"
                )}
                {...register("password")}
              />
              <button
                type="button"
                className="absolute hover:cursor-pointer right-0 top-0 h-full px-3 py-2 text-green-400 hover:text-green-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
                <span className="sr-only">
                  {showPassword ? "Hide password" : "Show password"}
                </span>
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex gap-4 disabled:bg-green-300 hover:cursor-pointer items-center justify-center rounded-md bg-[#4cd965] px-4 py-2 text-sm font-medium text-white hover:bg-[#3ab954] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPending && <Loader2 className="size-4 animate-spin" />}
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
