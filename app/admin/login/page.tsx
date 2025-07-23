// OTP Admin Login System (Next.js 13+ App Router + Resend)

// === .env.local ===
// RESEND_API_KEY=re_6KYhSkzj_EXu8ghaqybASMqRuvX2x6AKa
// ALLOWED_EMAIL=ds.bathua@gmail.com

// === app/api/auth/login/route.ts ===
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { email } = await req.json()

  if (email !== process.env.ALLOWED_EMAIL) {
    return NextResponse.json({ error: "Unauthorized email" }, { status: 401 })
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString()
  globalThis.currentOtp = otp

  try {
    await resend.emails.send({
      from: "Admin Login <onboarding@resend.dev>",
      to: [email],
      subject: "Your OTP for Admin Login",
      html: `<p>Your OTP is: <strong>${otp}</strong></p>`
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 })
  }
}

// === app/api/auth/verify/route.ts ===
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { otp } = await req.json()

  if (otp === globalThis.currentOtp) {
    globalThis.currentOtp = null
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ error: "Invalid OTP" }, { status: 401 })
  }
}

// === app/admin-login/page.tsx ===
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AdminLogin() {
  const [email, setEmail] = useState("ds.bathua@gmail.com")
  const [otp, setOtp] = useState("")
  const [step, setStep] = useState<"email" | "otp">("email")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleEmailSubmit = async () => {
    setLoading(true)
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    })
    const data = await res.json()
    setLoading(false)
    if (data.success) {
      setStep("otp")
    } else {
      setMessage(data.error)
    }
  }

  const handleOtpVerify = async () => {
    setLoading(true)
    const res = await fetch("/api/auth/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ otp })
    })
    const data = await res.json()
    setLoading(false)
    if (data.success) {
      router.push("/admin")
    } else {
      setMessage(data.error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-sm w-full space-y-4">
        <h1 className="text-xl font-bold text-center">Admin Login</h1>

        {step === "email" && (
          <>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
            <Button onClick={handleEmailSubmit} disabled={loading} className="w-full">
              {loading ? "Sending OTP..." : "Send OTP"}
            </Button>
          </>
        )}

        {step === "otp" && (
          <>
            <Input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <Button onClick={handleOtpVerify} disabled={loading} className="w-full">
              {loading ? "Verifying..." : "Verify OTP"}
            </Button>
          </>
        )}

        {message && <p className="text-red-500 text-sm text-center">{message}</p>}
      </div>
    </div>
  )
}
