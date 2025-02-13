"use client";

import { register } from "@/actions/auth";
import Link from "next/link";
import React, { useActionState } from "react";

export default function Register() {
  const [state, action, isPending] = useActionState(register, null);

  return (
    <div className="container w-1/2">
      <h1 className="title">Register</h1>

      <form action={action} className="space-y-4">
        <div>
          <label htmlFor="email"></label>
          <input
            name="email"
            id="email"
            type="text"
            placeholder="Email"
            defaultValue={state?.email}
          />
          {state?.error?.email && <p className="error">{state.error.email}</p>}
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
          />
          {state?.error?.password && (
            <div className="error">
              <p>Password must be :</p>
              <ul>
                {state.error.password.map((err, index) => (
                  <li key={index}>{err}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="confirm"></label>
          <input
            name="confirm"
            id="confirm"
            type="password"
            placeholder="Confirm password"
          />
          {state?.error?.confirm && (
            <p className="error">{state.error.confirm}</p>
          )}
        </div>
        <div className="flex items-end gap-4">
          <button disabled={isPending} className="btn-primary" type="submit">
            {isPending ? "Loading..." : "Register"}
          </button>
          <Link className="text-link" href="/">
            or login here
          </Link>
        </div>
      </form>
    </div>
  );
}
