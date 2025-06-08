"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between my-4 p-3 bg-secondary rounded-md">
        <Link href="/">
            <h1 className="text-2xl font-bold">Pizzaria</h1>
        </Link>

        <div className="flex gap-4">
            <Button className="cursor-pointer">Login / Cadastro</Button>
            <Button className="cursor-pointer">Carrinho</Button>
        </div>
     
    </header>
  );
};
