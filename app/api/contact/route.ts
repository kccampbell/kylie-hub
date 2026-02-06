import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message || !company || !phone) {
      return NextResponse.json(
        { error: 'Name, email, company, phone, and message are required' },
        { status: 400 }
      );
    }

    // Validate phone format (international format)
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Phone must be in international format (e.g., +61412345678)' },
        { status: 400 }
      );
    }

    // Get backend API URL from environment variable
    // Default to the AWS API Gateway (kylie-verify-aws), but can be overridden
    const backendUrl = process.env.CONTACT_API_URL || process.env.NEXT_PUBLIC_CONTACT_API_URL || 'https://webhooks.kylieai.net';
    const apiUrl = `${backendUrl.replace(/\/+$/, '')}/api/contact`;

    // Clean phone number (remove spaces)
    const cleanPhone = phone.replace(/\s/g, '');

    // Forward to backend API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        company,
        phone: cleanPhone,
        message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Backend API error:', data);
      return NextResponse.json(
        { error: data.error || 'Failed to send message. Please try again.' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: data.message || 'Thank you! Your message has been received.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    );
  }
}
