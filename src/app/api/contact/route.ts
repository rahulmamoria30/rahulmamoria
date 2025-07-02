import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: 'rahulmamoria@gmail.com',
      replyTo: email,
      subject: '[External] New Message from Portfolio Website',
      html: `
      <div style="font-family: 'Segoe UI', Roboto, sans-serif; background-color: #f4f4f4; padding: 30px;">
        <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
          
          <div style="background-color: #4A90E2; padding: 20px; text-align: center;">
            <h1 style="margin: 0; color: white; font-size: 24px;">📬 New Contact Message</h1>
          </div>
    
          <div style="padding: 20px;">
            <p style="margin-bottom: 12px;"><strong>Name:</strong> ${name}</p>
            <p style="margin-bottom: 12px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #4A90E2; text-decoration: none;">${email}</a></p>
            <p style="margin-bottom: 12px;"><strong>Phone:</strong> ${phone || 'N/A'}</p>
            
            <p style="margin-bottom: 6px;"><strong>Message:</strong></p>
            <div style="background-color: #f1f5f9; padding: 15px; border-left: 4px solid #4A90E2; border-radius: 4px; color: #333;">
              ${message.replace(/\n/g, '<br />')}
            </div>
          </div>
    
          <div style="padding: 15px 20px; text-align: center; font-size: 12px; color: #999;">
            <p>This message was sent via your portfolio website contact form.</p>
          </div>
        </div>
      </div>
    `
    
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
