import { NextResponse } from 'next/server';
import { CartesiaClient } from "@cartesia/cartesia-js";

const client = new CartesiaClient({
  apiKey: process.env.CARTESIA_API_KEY!
});

export async function POST(request: Request) {
  try {
    const { voiceId } = await request.json();
    console.log('Deleting voice', voiceId);
    if (!voiceId) {
      return NextResponse.json({ error: 'voiceId is required' }, { status: 400 });
    }
    await client.voices.delete(voiceId);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to delete voice' }, { status: 500 });
  }
}
