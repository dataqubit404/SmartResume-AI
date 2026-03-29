
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { contents } = await req.json();
    const apiKey = process.env.GOOGLE_API_KEY;

    // We call the Gemini 1.5 Flash model (Fast and Free)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents })
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    // console.error("Gemini Error:", error);
    return NextResponse.json({ error: "Failed to connect to Gemini" }, { status: 500 });
  }
}