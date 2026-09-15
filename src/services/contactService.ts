import type { ContactFormState } from "@/lib/validations";

const contactEmail = "vaidehijain.work@gmail.com";

async function sendStaticContactMessage(values: ContactFormState) {
  const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
      _subject: `Portfolio contact from ${values.name}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!response.ok) {
    throw new Error("Message could not be sent right now.");
  }

  return response.json() as Promise<{ success?: string; message?: string }>;
}

export async function sendContactMessage(values: ContactFormState) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    await sendStaticContactMessage(values);
    return {
      ok: true,
      message: "Thanks. Your message has been sent.",
    };
  }

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message ?? "Message could not be sent.");
  }

  return result as { ok: true; message: string };
}
