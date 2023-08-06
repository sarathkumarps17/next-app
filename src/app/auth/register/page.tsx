import SignUpFrom from "@/components/auth/SignUpForm";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="text-2xl font-forum font-bold text-center">Sign Up</div>
      <SignUpFrom />
      <div className="text-center mt-5">
        If already have an account please
        <Link className="pl-1" href="/auth/login">
          Sign In
        </Link>
      </div>
    </>
  );
}
