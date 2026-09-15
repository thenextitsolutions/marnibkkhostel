"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 80, email: 120, phone: 30, message: 2000 };

function clip(value: FormDataEntryValue | null, max: number) {
  return value?.toString().replace(/\0/g, "").trim().slice(0, max) ?? "";
}

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  if (clip(formData.get("company_website"), 200)) {
    return { status: "success", message: "Thanks — we'll get back to you shortly." };
  }

  const name = clip(formData.get("name"), LIMITS.name);
  const email = clip(formData.get("email"), LIMITS.email).toLowerCase();
  const phone = clip(formData.get("phone"), LIMITS.phone);
  const message = clip(formData.get("message"), LIMITS.message);

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email, and message." };
  }

  if (!EMAIL.test(email) || /[<>]/.test(name) || /[<>]/.test(message)) {
    return { status: "error", message: "Please check your details and try again." };
  }

  return { status: "success", message: "Thanks — we'll get back to you shortly." };
}
