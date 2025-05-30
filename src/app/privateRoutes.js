"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function PrivateRoute({ children }) {
  const token = useSelector((state) => state.auth.token);
  const router = useRouter();

  useEffect(() => {
    if (token === null) {
      router.replace("/auth/login");
      toast.info(
        "You must be logged in to view this content. Please sign in or create an account."
      );
    }
  }, [token]);

  if (token === null) return null;

  return <>{children}</>;
}

export function PrivateRouteAdmin({ children }) {
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth?.user?.role);
  const router = useRouter();

  useEffect(() => {
    if (token === null || role !== "Admin") {
      router.replace("/");
      toast.info(
        "Access Restricted: You don't have permission to view this page. Please log in with authorized credentials."
      );
    }
  }, [token]);

  if (token === null || role !== "Admin") return null;

  return <>{children}</>;
}
