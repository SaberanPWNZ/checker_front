import Logo from "../app/icons/logo_wacom.png";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-slate-600 text-white flex items-center justify-between h-20 bg-black px-8">
      <div className="flex items-center w-16 h-16">
        <a href="/">
          <Image
            src={Logo}
            alt="logo"
            className="hover:scale-110 transform transition duration-300"
          />
        </a>
      </div>
    </header>
  );
}
