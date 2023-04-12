import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (process.env.IS_MAINTENANCE === "true") {
    if (
      !request.nextUrl.pathname.includes(".") &&
      !request.cookies.get("dev")
    ) {
      return NextResponse.rewrite(new URL("/maintenance", request.url));
    }
  }
}
