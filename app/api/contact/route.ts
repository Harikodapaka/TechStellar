import { NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Send to the company email via mailto-style logging
    // TODO: Replace with actual email service (SendGrid, Resend, etc.)
    console.log('Contact form submission:', { name, email, phone, message });

    return NextResponse.json({ success: true, message: 'Message received successfully' });
  } catch {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
