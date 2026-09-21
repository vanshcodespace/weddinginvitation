import { NextResponse } from 'next/server';

// In-memory array for demo purposes
// In production, this should be a real database (e.g., Firebase, Supabase)
const rsvps: any[] = [];

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Log and save to in-memory store
    console.log('Received RSVP:', data);
    rsvps.push({ ...data, createdAt: new Date().toISOString() });
    
    return NextResponse.json({ success: true, message: 'RSVP received successfully' });
  } catch (error) {
    console.error('RSVP Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
