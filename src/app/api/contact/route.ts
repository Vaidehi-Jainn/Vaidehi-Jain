import { NextResponse } from "next/server";
import { validateContactForm, type ContactFormState } from "@/lib/validations";

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.RESEND_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";
const resendToEmail = process.env.RESEND_TO_EMAIL ?? "vaidehijain.work@gmail.com";

export async function POST(request: Request) {
  let values: ContactFormState;

  try {
    values = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const errors = validateContactForm(values);

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, message: "Please fix the highlighted fields.", errors }, { status: 400 });
  }

  if (!resendApiKey) {
    return NextResponse.json({ ok: false, message: "Email service is not configured." }, { status: 500 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to: resendToEmail,
      reply_to: values.email,
      subject: values.subject,
      text: [
        `To: ${resendToEmail}`,
        `Subject: ${values.subject}`,
        `Email: ${values.email}`,
        "",
        values.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false, message: "Message could not be sent right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, message: "Thanks. Your message has been sent." });
}
