"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// export const sendContactEmailAction = async (prevState, formData) => {
//   try {
//     // const { data, error } = await resend.emails.send({
//     //   from: `${username} <${email}>`,
//     //   to: ["nafizmahmud102@gmail.com"],
//     //   subject,
//     //   html: `<p>${message}</p>`,
//     // });
//     // console.log("Email details:", { username, email, subject, message });
//     if (error) {
//       console.log("Error sending email:", error);
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     console.log("Unexpected error:", error);
//     return Response.json({ error }, { status: 500 });
//   }
// };

export const sendMailTestAction = async (prevState, formData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  try {
    // console.log("Data received", { username, email, subject, message });

    const { data, error } = await resend.emails.send({
      from: `${username} <${email}>`,
      to: ["nafizmahmud102@gmail.com"],
      subject,
      html: `<p>${message}</p>`,
    });

    console.log("Email details:", { username, email, subject, message });
    if (error) {
      console.log("Error sending email:", error);
    }
  } catch (error) {
    console.log("Unexpected error:", error);
  }
};
