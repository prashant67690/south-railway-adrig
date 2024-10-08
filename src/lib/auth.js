import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import { compare } from "bcrypt";
import { getServerSession } from "next-auth";

export const NEXT_AUTH_CONFIG = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials) {
        try {
          console.log(credentials);
          if (!credentials?.username || !credentials.password) {
            return null;
          }

          if (
            credentials.username == process.env.ADMIN_USER &&
            credentials.password == process.env.ADMIN_PASS
          ) {
            return { id: "001", email: credentials.username, role: "admin" };
          }

          const user = await prisma.user.findFirst({
            where: {
              username: credentials.username,
            },
          });

          if (!user) {
            return null;
          }

          if (credentials.password !== user.password) {
            return null;
          }

          return {
            id: user.id,
            name: user.name,
            email: user.username,
            role: "user",
          };
        } catch (e) {
          console.log(e);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
        token.role = user.role;
      }
      return token;
    },
    session: ({ session, token, user }) => {
      if (session.user) {
        session.user.id = token.uid;
        session.user.role = token.role;
      }
      return session;
    },
  },
};

export async function getUser() {
  const session = await getServerSession();
  console.log(session);
  return session;
}
