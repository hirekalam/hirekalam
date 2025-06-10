import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export interface User {
  id: string
  email: string
  name: string
  role: "admin" | "editor"
  avatar?: string
}

// In a real app, this would be stored in a database
const ADMIN_CREDENTIALS = {
  email: "admin@hirekalam.com",
  password: "HireKalam2024!",
  name: "Kalam",
  role: "admin" as const,
  id: "admin-1",
}

export async function authenticate(email: string, password: string): Promise<User | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    return {
      id: ADMIN_CREDENTIALS.id,
      email: ADMIN_CREDENTIALS.email,
      name: ADMIN_CREDENTIALS.name,
      role: ADMIN_CREDENTIALS.role,
    }
  }

  return null
}

export async function createSession(user: User) {
  const session = {
    user,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  }

  const cookieStore = await cookies()
  cookieStore.set("session", JSON.stringify(session), {
    expires: session.expires,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  })
}

export async function getSession(): Promise<{ user: User } | null> {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get("session")

  if (!sessionCookie) {
    return null
  }

  try {
    const session = JSON.parse(sessionCookie.value)
    if (new Date(session.expires) < new Date()) {
      return null
    }
    return session
  } catch {
    return null
  }
}

export async function destroySession() {
  const cookieStore = await cookies()
  cookieStore.delete("session")
}

export async function requireAuth() {
  const session = await getSession()
  if (!session) {
    redirect("/admin/login")
  }
  return session
}

export async function getDashboardStats() {
  return {
    totalPosts: 6,
    publishedPosts: 6,
    draftPosts: 0,
    totalViews: 12543,
    monthlyViews: 3421,
    topPosts: [
      { id: "web-design-trends-2023", title: "Top Web Design Trends in Dubai for 2023", views: 1234 },
      { id: "seo-strategies-uae-businesses", title: "Effective SEO Strategies for UAE Businesses", views: 987 },
      { id: "mobile-app-development-guide", title: "A Complete Guide to Mobile App Development", views: 756 },
    ],
  }
}
