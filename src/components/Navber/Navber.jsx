"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Navber = () => {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession();
  console.log(session);
  const links = [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "services",
      path: "/services",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Gellary",
      path: "/gellary",
    },
  ];

  // if (pathName === "/dashboard") {
  //   return <div className="bg-blue-600 text-white"> Dashboard Navber </div>;
  // }

  return (
    <div className="bg-[#ffffff] border shadow-md px-6 py-5 text-lg flex justify-between items-center ">
      <Link href={"/"}>
        <h2 className="text-purple-600 font-bold">
          XMage <span className="text-purple-800"> Hore</span>
        </h2>
      </Link>
      <ul className=" hidden lg:flex justify-between items-center space-x-3 text-lg ">
        {links.map((link) => (
          <Link
            className={`${pathName === link.path ? "text-purple-500" : " "}`}
            key={link?.title}
            href={link?.path}
          >
            {link?.title}
          </Link>
        ))}
      </ul>

      {session?.status === "unauthenticated" ? (
        <>
          <button
            onClick={() => router.push("/api/auth/signin")}
            className="btn bg-purple-500 rounded-lg px-3 text-white py-1"
          >
            Login
          </button>
        </>
      ) : (
        <div className="flex items-center gap-2">
          <div>
            <h3> {session?.data?.user?.name}</h3>
          </div>
          <div>
            <button
              onClick={() => signOut()}
              className="btn bg-purple-500 rounded-lg px-3 text-white py-1"
            >
              SignOut
            </button>
          </div>

          <div>
            <Link href={"/api/auth/signup"}>
              <button className="btn bg-blue-500 rounded-lg px-3 text-white py-1">
                SignUp
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navber;
