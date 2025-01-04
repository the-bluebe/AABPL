import nodemailer from 'nodemailer';

interface RequestBody {
  name: string;
  email: string;
  message: string;
}

interface ResponseData {
  message?: string;
  error?: string;
}

export default async function handler(
  req: { method: string; body: RequestBody },
  res: { status: (code: number) => { json: (data: ResponseData) => void } }
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Check if environment variables are set correctly
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    
    if (!smtpUser || !smtpPass) {
      return res.status(500).json({ error: 'SMTP credentials not provided in environment variables.' });
    }

    // Create a transporter using Hostinger's SMTP server settings
    const transporter = nodemailer.createTransport({
      service: 'SMTP', // Use Hostinger's SMTP service
      host: 'smtp.hostinger.com', // Hostinger SMTP server
      port: 465, // Use 465 for SSL, or 587 for TLS
      secure: true, // true for 465, false for 587
      auth: {
        user: smtpUser, // SMTP username (your email)
        pass: smtpPass, // SMTP password (your app-specific password)
      },
    });

    // Set up the email data
    const mailOptions = {
      from: smtpUser, // Sender address (your email)
      to: process.env.RECEIVER_EMAIL || 'contact@aanmolbharat.com', // Receiver address, fallback if not provided
      subject: 'Contacting from Website',
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    // Handle non-POST requests
    res.status(405).json({ error: 'Method not allowed' });
  }
}
