import nodemailer from 'nodemailer';

export async function GET(req) {
  return new Response('Hello, Next.js!');
}

export async function POST(req) {
  const { members, resultData } = await req.json(); // Parse the request body

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email address from environment variables
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  try {
    const sendEmails = members
      .filter((member) => member.email) 
      .map((member) =>
        transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: member.email,
          subject: 'Resultados de la división',
          text: `Hola ${member.name}!\n\nAcá están los resultados de la división: \n\n${resultData}`,
        })
      );

    await Promise.all(sendEmails);

    return new Response(JSON.stringify({ message: 'Emails sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error sending emails' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
