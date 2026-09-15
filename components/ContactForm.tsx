"use client";

import { useFormState, useFormStatus } from "react-dom";
import { sendContactMessage, type ContactState } from "@/app/contact/actions";

const initialState: ContactState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full bg-brick px-6 py-3 text-sm font-bold text-white shadow-pop transition-all hover:-translate-y-0.5 hover:bg-[#ff255c] disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(sendContactMessage, initialState);

  return (
    <form action={formAction} className="relative space-y-5">
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company_website">Website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={80}
            autoComplete="name"
            className="mt-1.5 w-full rounded-2xl border border-ink/15 bg-white px-4 py-2.5 outline-none focus:border-teal"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={120}
            autoComplete="email"
            className="mt-1.5 w-full rounded-2xl border border-ink/15 bg-white px-4 py-2.5 outline-none focus:border-teal"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          maxLength={30}
          autoComplete="tel"
          className="mt-1.5 w-full rounded-2xl border border-ink/15 bg-white px-4 py-2.5 outline-none focus:border-teal"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={2000}
          className="mt-1.5 w-full rounded-2xl border border-ink/15 bg-white px-4 py-2.5 outline-none focus:border-teal"
        />
      </div>

      <SubmitButton />

      {state.status !== "idle" && (
        <p
          role="status"
          className={`text-sm ${state.status === "success" ? "text-teal-dark" : "text-brick"}`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
