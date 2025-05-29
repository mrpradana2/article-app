"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/Frame.svg";
import InputText from "@/components/auth/InputText";
import { validateMinChar, validatePassword } from "@/utils/validation";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "@/redux/slices/authSlice";
import { constants } from "@/configs/constant";

export default function Login() {
  const [validateUsername, setValidateUsername] = useState(true);
  const [messageUsername, setmessageUsername] = useState("");
  const [validatePass, setValidatePass] = useState(true);
  const [messagePass, setmessagePass] = useState("");
  const dispatch = useDispatch();

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
    setValidatePass(validPass);
    setmessagePass(messValidatePass);

    if (validUsername && validPass) {
      const loginUser = { username, password };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios
        .post(`${constants.apiURL}/auth/login`, loginUser, config)
        .then((res) => {
          console.log(res);
          if (res.status !== 200) {
            throw new Error("failed to login");
          }
          console.log("TOKEN", res.data.token);
          axios
            .get(`${constants.apiURL}/auth/profile`, {
              headers: {
                Authorization: `Bearer ${res.data.token}`,
              },
            })
            .then((resProfile) => {
              if (resProfile.status !== 200) {
                throw new Error("failed to fetch data");
              }
              dispatch(setToken(res.data.token));
              dispatch(setUser(resProfile.data));
              toast.success(`Welcome back, ${username}! You're now logged in.`);
              console.info("success create status");
              location.href = "/";
              return resProfile;
            })
            .catch((err) => {
              toast.error(
                "The email or password you entered is incorrect. Please try again."
              );
              if (err instanceof Error) console.log(err.message);
            });
          return res;
        })
        .catch((err) => {
          toast.error(
            "The email or password you entered is incorrect. Please try again."
          );
          if (err instanceof Error) console.error(err.message);
        });
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
