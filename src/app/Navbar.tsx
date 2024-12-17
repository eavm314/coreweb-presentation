import Image from "next/image";
import Link from "next/link";
import loguito from "@/assets/logo.webp";

const Navbar = () => {
  return (
    <nav className="bg-neutral-950 flex flex-row items-center justify-between py-3">
      <Link
        href="/"
        className="flex items-center mx-8"
      >
        <Image src={loguito} height={48} width={48} alt="Logo" />
        <span className="text-white self-center text-2xl font-semibold ml-2">
          CoreWeb
        </span>
      </Link>
      <div
        className="flex mx-10"
        id="navbar-dropdown"
      >
        <Link
          className="block py-2 px-3 text-white hover:text-[#FD6262]"
          href="/inicio"
        >
          ¿Quienes Somos?
        </Link>
        <Link
          className="block py-2 px-3 text-white hover:text-[#FD6262]"
          href="/ceo"
        >
          Gerencia
        </Link>
        <Link
          className="block py-2 px-3 text-white hover:text-[#FD6262]"
          href="/desarrollo"
        >
          Tecnología
        </Link>
        <Link
          className="block py-2 px-3 text-white hover:text-[#FD6262]"
          href="/seguridad"
        >
          Seguridad
        </Link>
        <Link
          className="block py-2 px-3 text-white hover:text-[#FD6262]"
          href="/marketing"
        >
          Marketing
        </Link>
        <Link
          className="block py-2 px-3 text-white hover:text-[#FD6262]"
          href="/conclusiones"
        >
          Conclusiones
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
