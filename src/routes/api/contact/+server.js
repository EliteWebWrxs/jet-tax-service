import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';
import { GOOGLE_EMAIL, GOOGLE_EMAIL_PASSWORD, MAIL_HOST, MAIL_PORT } from '$env/static/private';

export async function POST({ request }) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: parseInt(MAIL_PORT),
      secure: false, // Use TLS
      auth: {
        user: GOOGLE_EMAIL,
        pass: GOOGLE_EMAIL_PASSWORD
      }
    });

    // Email content
    const mailOptions = {
      from: `"JET Tax Service Website" <${GOOGLE_EMAIL}>`,
      to: 'mrmichael423@icloud.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #1e40af; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">
						New Contact Form Submission
					</h2>

					<div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
						<p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
						<p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
						${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
						${service ? `<p style="margin: 10px 0;"><strong>Service Interested In:</strong> ${service}</p>` : ''}
					</div>

					<div style="margin: 20px 0;">
						<h3 style="color: #1e40af;">Message:</h3>
						<p style="background-color: #ffffff; padding: 15px; border-left: 4px solid #3b82f6; border-radius: 4px;">
							${message.replace(/\n/g, '<br>')}
						</p>
					</div>

					<div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
						<p>This email was sent from the contact form on jettaxservicecorp.com</p>
						<p>Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}</p>
					</div>
				</div>
			`,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${service ? `Service: ${service}` : ''}

Message:
${message}

---
Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}
			`
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return json(
      { success: false, error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
