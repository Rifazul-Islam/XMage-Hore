import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Your Email",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your Password",
          required: true,
        },
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        if (!credentials) {
          return null;
        }

        if (email) {
          let db = await connectDB();
          const currentUser = await db.collection("users").findOne({ email });

          // console.log(currentUser);

          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser;
            }
          }
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    DiscordProvider({
      clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.type = user.type;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.type = token.type;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

// const users = [
//   {
//     id: 1,
//     email: "ma@gmail.com",
//     name: "Mowlla",
//     type: "admin",
//     password: "password",
//     image: "https://picsum.photos/200/300",
//   },
//   {
//     id: 2,
//     email: "ba@gmail.com",
//     name: "Babul",
//     type: "modaretor",
//     password: "password",
//     image: "https://picsum.photos/200/300",
//   },
//   {
//     id: 3,
//     email: "za@gmail.com",
//     name: "Zaow",
//     type: "member",
//     password: "password",
//     image: "https://picsum.photos/200/300",
//   },
// ];

export { handler as GET, handler as POST };
