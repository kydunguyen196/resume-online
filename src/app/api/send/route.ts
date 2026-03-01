import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const EmailSchema = z.object({
  fullName: z.string().trim().min(2, "Full name must be at least 2 characters."),
  email: z.string().trim().email("Please provide a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message is too long."),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = EmailSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid request payload." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      return Response.json(
        {
          error:
            "Contact form is temporarily unavailable. Please email me directly at " +
            config.email,
        },
        { status: 503 }
      );
    }

    const resend = new Resend(resendKey);
    const { fullName, email, message } = parsed.data;

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [config.email],
      subject: `Portfolio contact from ${fullName}`,
      react: EmailTemplate({
        fullName,
        email,
        message,
      }),
    });

    if (error) {
      return Response.json(
        { error: "Unable to send message right now. Please try again shortly." },
        { status: 500 }
      );
    }

    return Response.json({ success: true, id: data?.id ?? null }, { status: 200 });
  } catch {
    return Response.json(
      { error: "Unexpected server error. Please try again later." },
      { status: 500 }
    );
  }
}
