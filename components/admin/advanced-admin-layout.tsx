"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  BarChart3,
  FileText,
  PenTool,
  Settings,
  ImageIcon,
  Users,
  MessageSquare,
  TrendingUp,
  Globe,
  Shield,
  Database,
  Zap,
  Menu,
  LogOut,
  Bell,
  Search,
  Moon,
  Sun,
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import type { AdminUser } from "@/lib/otp-auth"

interface AdvancedAdminLayoutProps {
  children: React.ReactNode
  user: AdminUser
}

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: BarChart3,
    badge: null,
    description: "Overview & Analytics",
  },
  {
    name: "Posts",
    href: "/admin/posts",
    icon: FileText,
    badge: "6",
    description: "Manage blog posts",
  },
  {
    name: "New Post",
    href: "/admin/posts/new",
    icon: PenTool,
    badge: null,
    description: "Create new content",
  },
  {
    name: "Media",
    href: "/admin/media",
    icon: ImageIcon,
    badge: "24",
    description: "File management",
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: TrendingUp,
    badge: "New",
    description: "Advanced insights",
  },
  {
    name: "SEO Tools",
    href: "/admin/seo",
    icon: Globe,
    badge: null,
    description: "Search optimization",
  },
  {
    name: "Comments",
    href: "/admin/comments",
    icon: MessageSquare,
    badge: "3",
    description: "User interactions",
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: Users,
    badge: null,
    description: "User management",
  },
  {
    name: "Security",
    href: "/admin/security",
    icon: Shield,
    badge: null,
    description: "Security settings",
  },
  {
    name: "Performance",
    href: "/admin/performance",
    icon: Zap,
    badge: "98",
    description: "Site optimization",
  },
  {
    name: "Backup",
    href: "/admin/backup",
    icon: Database,
    badge: null,
    description: "Data backup",
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
    badge: null,
    description: "System configuration",
  },
]

export default function AdvancedAdminLayout({ children, user }: AdvancedAdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" })
      router.push("/admin/login")
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  const getPageTitle = () => {
    const currentItem = sidebarItems.find((item) => item.href === pathname)
    if (currentItem) return currentItem.name

    if (pathname.startsWith("/admin/posts/edit")) return "Edit Post"
    if (pathname === "/admin") return "Dashboard"
    return "Admin Panel"
  }

  const SidebarContent = () => (
    <div className="flex h-full flex-col bg-slate-900 text-white">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-slate-800 px-6">
        <Link href="/admin" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
            <Shield className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Admin Pro
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-slate-800",
                  isActive ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" : "text-slate-300",
                )}
                onClick={() => setSidebarOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={cn("h-5 w-5", isActive ? "text-white" : "text-slate-400 group-hover:text-white")} />
                  <div>
                    <div>{item.name}</div>
                    <div className="text-xs text-slate-400 group-hover:text-slate-300">{item.description}</div>
                  </div>
                </div>
                {item.badge && (
                  <Badge variant={item.badge === "New" ? "default" : "secondary"} className="text-xs">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            </motion.div>
          )
        })}
      </nav>

      {/* User Info */}
      <div className="border-t border-slate-800 p-4">
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{user.name}</p>
            <p className="text-xs text-slate-400 truncate">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden w-72 lg:block">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-72 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Enhanced Header */}
        <header className="flex h-16 items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
            </Sheet>

            <div>
              <h1 className="text-xl font-semibold">{getPageTitle()}</h1>
              <p className="text-sm text-muted-foreground">Welcome back, {user.name}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Search */}
            <Button variant="ghost" size="icon" className="relative">
              <Search className="h-4 w-4" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
                3
              </span>
            </Button>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/" target="_blank">
                    <Globe className="mr-2 h-4 w-4" />
                    <span>View Website</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 bg-slate-50/50 dark:bg-slate-900/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-7xl mx-auto"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
