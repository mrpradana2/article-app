"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/Frame.svg";
import InputText from "@/components/auth/InputText";
import { validateMinChar, validatePassword } from "@/utils/validation";
import axios from "axios";
import { constants } from "@/configs/constant";
import { toast } from "react-toastify";

export default function Register() {
  const [validateUsername, setValidateUsername] = useState(true);
  const [messageUsername, setmessageUsername] = useState("");
  const [validatePass, setValidatePass] = useState(true);
  const [messagePass, setmessagePass] = useState("");
  const [validateRole, setValidateRole] = useState(true);
  const [messageRole, setmessageRole] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const role = e.target.role.value;

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
    setValidatePass(validPass);
    setmessagePass(messValidatePass);
    let validRole = false;
    if (role === "0") {
      setValidateRole(false);
      setmessageRole("Please choose a role");
    } else {
      validRole = true;
      setValidateRole(true);
      setmessageRole("");
    }

    if (validUsername && validPass && validRole) {
      const newUser = { username, password, role };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios
        .post(`${constants.apiURL}/auth/register`, newUser, config)
        .then((res) => {
          console.log(res);
          if (res.status !== 201) {
            throw new Error("failed to register");
          }
          toast.success("Success create an account");
          console.info("success create status");
          location.href = "/auth/login";
          return res;
        })
        .catch((err) => {
          toast.error("Failed create an account");
          if (err instanceof Error) console.error(err.message);
        });
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
            <div className="flex flex-col gap-y-1 w-full">
              <label htmlFor="role" className="font-semibold text-sm">
                Role
              </label>
              <select
                name="role"
                id="role"
                className="border border-gray-300 rounded-md w-full focus:outline-primary pl-2 pr-8 py-1.5"
                defaultValue={"0"}
              >
                <option value="0" disabled hidden>
                  Choose Role
                </option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
              <p
                className={`${
                  validateRole ? "hidden" : "block"
                } text-sm text-red-500 italic`}
              >
                {messageRole}
              </p>
            </div>
            <button
              type="submit"
              className="py-2 px-1 w-full bg-primary text-center font-semibold text-white rounded-md hover:scale-[1.01] hover:bg-blue-700 active:scale-[1] shadow-lg cursor-pointer transition-all "
            >
              Login
            </button>
            <p className="text-center text-sm">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="cursor-pointer text-blue-600 hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
