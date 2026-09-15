import type { ContactFormState } from "@/lib/validations";

const contactEmail = "vaidehijain.work@gmail.com";

function openEmailFallback(values: ContactFormState) {
  const subject = encodeURIComponent(`Portfolio contact from ${values.name}`);
  const body = encodeURIComponent(
    [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      "",
      values.message,
    ].join("\n"),
  );

  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
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
    openEmailFallback(values);
    return {
      ok: true,
      message: "Your email app has been opened with this message ready to send.",
    };
  }

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message ?? "Message could not be sent.");
  }

  return result as { ok: true; message: string };
}
