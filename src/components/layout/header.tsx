import Link from "next/link";
import { CartButton } from "../cart/cart-button";
import { LoginAreaButton } from "../login-area/login-area-button";
import { cookies } from "next/headers";

export const Header = async () => {

  const cookieStore = await cookies();
  const token = cookieStore.get('token');

  return (
    <header className="container mx-auto flex items-center justify-between my-4 p-3 bg-secondary rounded-md">
        <Link href="/">
            <h1 className="text-2xl font-bold">Pizzaria</h1>
        </Link>

        <div className="flex gap-4">
            <LoginAreaButton initialState={token ? true : false} />
            <CartButton />
        </div>
     
    </header>
  );
};
