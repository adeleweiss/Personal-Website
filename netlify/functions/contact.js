import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(req) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "adelesweiss1@gmail.com", // send email to myself
      subject: "New message from your portfolio website",
      html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Email sent:", data);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Email failed:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}