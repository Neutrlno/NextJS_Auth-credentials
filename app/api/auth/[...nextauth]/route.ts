import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare, hash } from 'bcrypt';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {

        // const response = await sql`
        // SELECT * FROM users WHERE email=${credentials?.email}`;
        // const user = response.rows[0];

        const user = { // imitation of the data from db
          id: 'aoibdawhbdv',
          email: '111@gmail.com',
          password: await hash('1234', 10) // this comes from db in hashed form
        }


        const passwordCorrect = await compare(
          credentials?.password || '',
          user.password
        );

        console.log({ passwordCorrect, password: user.password, inputpass: credentials?.password });

        if (passwordCorrect) {
          return {
            id: user.id,
            email: user.email,
          };
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
