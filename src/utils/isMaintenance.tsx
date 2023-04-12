import { NextRequest, NextResponse } from "next/server";

const isMaintenance = (request: NextRequest) => {
  if (!request.nextUrl.pathname.includes(".") && !request.cookies.get("dev")) {
    return NextResponse.rewrite(new URL("/maintenance", request.url));
  }

  return NextResponse;
};

export default isMaintenance;
