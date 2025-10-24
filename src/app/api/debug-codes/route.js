import { NextResponse } from "next/server";
import verificationStore from "@/lib/verificationStore";

export async function GET() {
  // Only enable in development
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "Not available in production" },
      { status: 403 }
    );
  }

  const allCodes = verificationStore.getAll();
  const now = Date.now();

  const codesWithStatus = allCodes.map(([email, data]) => ({
    email,
    code: data.code,
    expires: new Date(data.expires).toISOString(),
    isExpired: data.expires < now,
    timeLeft: Math.max(0, Math.floor((data.expires - now) / 1000)) + " seconds",
  }));

  return NextResponse.json({
    totalCodes: allCodes.length,
    codes: codesWithStatus,
    currentTime: new Date().toISOString(),
  });
}
