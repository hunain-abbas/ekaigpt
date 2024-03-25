import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, organization, phone, designation } = req.body;

      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        // Specify your SMTP settings here
        // For example:
        host: 'smtp.gmail.com',
        port: 465,
        secure: false,
        auth: {
          user: 'website.mailer@rayn.group',
          pass: 'jepfsuddryutdmf'
        }
      });

      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: `"Your Website" <website.mailer@rayn.group>`,
        to: 'hunain.accunity@gmail.com', // Replace with your email address
        subject: 'New Contact Form Submission',
        html: `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Organization: ${organization}</p>
          <p>Phone Number: ${phone}</p>
          <p>Designation: ${designation}</p>
        `
      });

      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
