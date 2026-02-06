import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // TODO: Add your email sending logic here
    // Options:
    // 1. Use Resend, SendGrid, or similar service
    // 2. Forward to your existing contact API endpoint
    // 3. Store in database
    // 4. Send webhook notification
    
    // For now, just log it (you can see submissions in Netlify function logs)
    console.log('Contact form submission:', {
      name,
      email,
      company: company || 'N/A',
      phone: phone || 'N/A',
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      { message: 'Thank you! Your message has been received.' },
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
