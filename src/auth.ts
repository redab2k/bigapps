import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { User as CustomUser } from "./lib/types/types";
import { User as AuthUser } from "@auth/core/types";

type AdaptedUser = AuthUser & {
  username: string;
  email: string;
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
          const response = await fetch("https://fakestoreapi.com/users");
          if (!response.ok) {
            console.error(
              "Failed to fetch users from fakestoreapi:",
              response.status
            );
            return null;
          }
          const users: CustomUser[] = await response.json();

          const user = users.find((u) => u.username === credentials.username);

          if (user) {
            const adaptedUser: AdaptedUser = {
              id: String(user.id),
              name: `${user.name.firstname} ${user.name.lastname}`,
              email: user.email,
              username: user.username,
              image: null,
            };

            return adaptedUser;
          } else {
            return null;
          }
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
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = (token.id as string) ?? "";
        session.user.name = token.name as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  trustHost: true,
});
