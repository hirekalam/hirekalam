import { type NextRequest, NextResponse } from "next/server"
import { getSession } from "@/lib/auth"
import { saveBlogPost } from "@/lib/blog-admin"

export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const postData = await request.json()
    const savedPost = await saveBlogPost(postData)

    return NextResponse.json(savedPost)
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
