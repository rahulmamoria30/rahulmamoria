import { NextResponse } from 'next/server';
import { introduction, skillCards, profileData } from '@/constants/home';

export async function GET() {
  try {
    return NextResponse.json({
      introduction,
      skillCards,
      profileData
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch home data' },
      { status: 500 }
    );
  }
} 