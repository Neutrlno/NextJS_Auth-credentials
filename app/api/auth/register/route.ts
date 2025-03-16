import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
  
    const hashedPassword = await hash(password, 10); //need bcrypt on client side to send here hashed password, apropriate loader is required to setup
    console.log({ email, password, hashedPassword });

    // const response = await sql`  // database comunication
    //   INSERT INTO users (email, password)
    //   VALUES (${email}, ${password})
    // `;
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: 'success' });
}