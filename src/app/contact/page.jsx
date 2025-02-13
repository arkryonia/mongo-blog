"use client";
import { submitContact } from "@/actions/contact";
import React, { useActionState } from "react";

export default function Contact() {
  new Promise((resolve) => setTimeout(resolve, 3000));
  const [state, action, isPending] = useActionState(submitContact, null);

  return (
    <div className="container w-1/2">
      <h1 className="title">Contact Form</h1>
      <form action={action} className="space-y-4">
        <div>
          <label htmlFor="email"></label>
          <input id="email" name="email" placeholder="Email" type="text" />
          {state?.error.email && <p className="error">{state.error.email} </p>}
        </div>
        <div>
          <label htmlFor="subject"></label>
          <input
            id="subject"
            name="subject"
            placeholder="Subject"
            type="text"
          />
          {state?.error.subject && (
            <p className="error">{state.error.subject} </p>
          )}
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          {state?.error.message && (
            <p className="error">{state.error.message} </p>
          )}
        </div>
        <button disabled={isPending} className="btn-primary w-full">
          {isPending ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
