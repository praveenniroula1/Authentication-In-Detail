import nodemailer from "nodemailer";

const EmailProcessor = async (emailBody) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "keagan.anderson36@ethereal.email",
      pass: "nEmC7jcg77JfcKH6TS",
    },
  });
  await transporter.sendMail(emailBody);
};

export const sendEmail = ({ user, url }) => {
  const emailBody = {
    from: '"Praveen Niroula 👻" <praveen@example.com>', // sender address
    to: user.email, // list of receivers
    subject: `Hello ${user.fName}✔`, // Subject line
    text: `Hello ${user.fName}✔. Please verify your account using this link ${url}`, // plain text body
    html: `Hello ${user.fName}✔. Please verify your account using this link <a href=${url}>Click Me</a> `, // html body
  };
  EmailProcessor(emailBody);
};
