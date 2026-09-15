"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email, and message." };
  }

  // TODO: wire this up to a real email provider, e.g. Resend:
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Marni BKK Hostel <booking@marnibkkhostel.com>",
  //   to: "Marni.bkkhostel@gmail.com",
  //   replyTo: email,
  //   subject: `New enquiry from ${name}`,
  //   text: `${message}\n\nPhone: ${phone ?? "—"}`,
  // });

  console.log("New contact message:", { name, email, phone, message });

  return { status: "success", message: "Thanks — we'll get back to you shortly." };
}
