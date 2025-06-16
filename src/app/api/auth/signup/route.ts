import { createUser, createUserToken, hasEmail } from "@/services/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {name, email, password} = await request.json();

    if(!name || !email || !password) {
        return NextResponse.json({error: 'Campos incompletos'});
    }

    const has = await hasEmail(email);
    if(has) return NextResponse.json({error: 'Email já cadastrado'});

    const newUser = await createUser(name, email, password);
    if(!newUser) return NextResponse.json({error: 'Erro ao cadastrar usuário'});

    const token = await createUserToken(newUser.id);
  
    return NextResponse.json({user: newUser, token}, {status: 201});

  
}