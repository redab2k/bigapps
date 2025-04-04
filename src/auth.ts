import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User as AuthUser } from "@auth/core/types";
import { API_URL } from "./lib/utils/constants";

type AdaptedUser = AuthUser & {
  username: string;
  email: string;
  token: string;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        try {
          const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
          });

          const data = await response.json();

          if (response.ok && data.token) {
            return {
              id: credentials.username,
              username: credentials.username,
              token: data.token,
            } as AdaptedUser;
          }
          return null;
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id ?? "";
        token.username = (user as AdaptedUser).username;
        token.accessToken = (user as AdaptedUser).token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = (token.id as string) ?? "";
        session.user.name = token.name as string;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  trustHost: true,
});
