import { NextResponse } from 'next/server';

// In-memory array for demo purposes
const wishes: any[] = [];

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Log and save to in-memory store
    console.log('Received Wish:', data);
    wishes.push({ ...data, createdAt: new Date().toISOString() });
    
    return NextResponse.json({ success: true, message: 'Wish received successfully' });
  } catch (error) {
    console.error('Wish Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ success: true, wishes });
}
