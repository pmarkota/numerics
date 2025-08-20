import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Simple solution: Use Web3Forms (free service) or create mailto fallback
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || 'a836c5bf-2851-4eb0-9067-ff2fc114e950',
        name: name,
        email: email,
        message: message,
        subject: `Contact Form from ${name}`,
        from_name: 'Numerics Website',
        to: 'info@numerics.hr'
      })
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      throw new Error('Web3Forms failed');
    }
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Fallback: Create a mailto link
    const subject = encodeURIComponent(`Contact Form: ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    return NextResponse.json({ 
      success: false, 
      fallback: true,
      mailtoLink: `mailto:info@numerics.hr?subject=${subject}&body=${body}`
    });
  }
}
