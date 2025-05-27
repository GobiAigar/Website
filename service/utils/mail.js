import nodemailer from "nodemailer";

async function sendEmail(to, otp) {
  // Configure your SMTP transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jaminjamts12@gmail.com",
      pass: "scpb ckkd gmfa krnj",
    },
  });

  let mailOptions;

  if (otp) {
    mailOptions = {
      from: "jaminjamts12@gmail.com",
      to: to,
      subject: "OTP for Govi Aigar Website",
      html: `<p>Your OTP is <strong>${otp}</strong>. It is valid for 5 minutes.</p>`,
    };
  } else {
    mailOptions = {
      from: "jaminjamts12@gmail.com",
      to: to,
      subject: "Govi Aigar Website",
      html: `<h1>Welcome to Govi Aigar</h1>
      <p>Thank you for collaboration on our website. If you have any questions, feel free to contact us.</p>`,
    };
  }

  // Send email
  return transporter.sendMail(mailOptions);
}

export { sendEmail };
