"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/Frame.svg";
import InputText from "@/components/auth/InputText";
import { validateMinChar, validatePassword } from "@/utils/validation";

export default function Login() {
  const [validateUsername, setValidateUsername] = useState(true);
  const [messageUsername, setmessageUsername] = useState("");
  const [validatePass, setValidatePass] = useState(true);
  const [messagePass, setmessagePass] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const [validUsername, messValidateUsername] = validateMinChar(
      username,
      "Please enter your username",
      "Please enter a username of at least 5 characters"
    );
    setValidateUsername(validUsername);
    setmessageUsername(messValidateUsername);

    const [validPass, messValidatePass] = validatePassword(
      password,
      "Please Enter your password",
      "Password must be at least 8 characters",
      "Password must contain uppercase letters, lowercase letters, numbers, and special characters"
    );
    console.log(validPass);
    console.log(messValidatePass);
    setValidatePass(validPass);
    setmessagePass(messValidatePass);

    if (validUsername && validPass) {
      console.log({ username, password });
    } else {
      console.log("gagal");
    }
  }

  return (
    <>
      <section className="relative h-[100vh] w-full">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-lg md:shadow-lg max-w-lg md:border md:border-gray-300 md:py-8">
          <form
            onSubmit={submitHandler}
            className="bg-white flex flex-col gap-y-6 px-6"
          >
            <div className="flex justify-center">
              <Image src={Logo} alt="Logo" />
            </div>
            <InputText
              id={"username"}
              label={"Username"}
              name={"username"}
              placeholder={"Input Username"}
              type={"text"}
              validate={validateUsername}
              message={messageUsername}
            />
            <InputText
              id={"password"}
              label={"Password"}
              name={"password"}
              placeholder={"Input Password"}
              type={"password"}
              validate={validatePass}
              message={messagePass}
            />
            <button
              type="submit"
              className="py-2 px-1 w-full bg-primary text-center font-semibold text-white rounded-md hover:scale-[1.01] hover:bg-blue-700 active:scale-[1] shadow-lg cursor-pointer transition-all "
            >
              Login
            </button>
            <p className="text-center text-sm">
              Don’t have an account?{" "}
              <Link
                href={"/auth/register"}
                className="cursor-pointer text-blue-600 hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
