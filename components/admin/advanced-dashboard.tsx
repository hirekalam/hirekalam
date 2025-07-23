"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  MousePointer,
  Clock,
  Smartphone,
  Monitor,
  Tablet,
  Activity,
  Zap,
} from "lucide-react"
import { motion } from "framer-motion"
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

interface DashboardStats {
  overview: {
    totalPosts: number
    publishedPosts: number
    draftPosts: number
    scheduledPosts: number
    totalViews: number
    uniqueVisitors: number
    bounceRate: number
    avgSessionDuration: string
    conversionRate: number
  }
  traffic: {
    today: number
    yesterday: number
    thisWeek: number
    lastWeek: number
    thisMonth: number
    lastMonth: number
    growth: {
      daily: number
      weekly: number
      monthly: number
    }
  }
  topPages: Array<{
    path: string
    views: number
    uniqueViews: number
  }>
  referrers: Array<{
    source: string
    visits: number
    percentage: number
  }>
  devices: {
    desktop: number
    mobile: number
    tablet: number
  }
  countries: Array<{
    country: string
    visits: number
    percentage: number
  }>
  recentActivity: Array<{
    type: string
    title: string
    time: string
  }>
  performance: {
    pageLoadTime: number
    serverResponseTime: number
    seoScore: number
    performanceScore: number
    accessibilityScore: number
    bestPracticesScore: number
  }
}

interface AdvancedDashboardProps {
  stats: DashboardStats
}

export default function AdvancedDashboard({ stats }: AdvancedDashboardProps) {
  const trafficData = [
    { name: "Mon", visits: 1200, uniqueVisitors: 800 },
    { name: "Tue", visits: 1400, uniqueVisitors: 950 },
    { name: "Wed", visits: 1100, uniqueVisitors: 750 },
    { name: "Thu", visits: 1600, uniqueVisitors: 1100 },
    { name: "Fri", visits: 1800, uniqueVisitors: 1250 },
    { name: "Sat", visits: 1300, uniqueVisitors: 900 },
    { name: "Sun", visits: 1500, uniqueVisitors: 1000 },
  ]

  const deviceData = [
    { name: "Desktop", value: stats.devices.desktop, color: "#3b82f6" },
    { name: "Mobile", value: stats.devices.mobile, color: "#10b981" },
    { name: "Tablet", value: stats.devices.tablet, color: "#f59e0b" },
  ]

  const overviewCards = [
    {
      title: "Total Views",
      value: stats.overview.totalViews.toLocaleString(),
      change: `+${stats.traffic.growth.monthly}%`,
      trend: "up",
      icon: Eye,
      description: "Page views this month",
    },
    {
      title: "Unique Visitors",
      value: stats.overview.uniqueVisitors.toLocaleString(),
      change: `+${stats.traffic.growth.weekly}%`,
      trend: "up",
      icon: Users,
      description: "Unique visitors this week",
    },
    {
      title: "Bounce Rate",
      value: `${stats.overview.bounceRate}%`,
      change: "-2.1%",
      trend: "down",
      icon: MousePointer,
      description: "Users who left immediately",
    },
    {
      title: "Avg. Session",
      value: stats.overview.avgSessionDuration,
      change: "+12%",
      trend: "up",
      icon: Clock,
      description: "Average session duration",
    },
    {
      title: "Conversion Rate",
      value: `${stats.overview.conversionRate}%`,
      change: "+0.8%",
      trend: "up",
      icon: TrendingUp,
      description: "Goal completion rate",
    },
    {
      title: "Performance Score",
      value: stats.performance.performanceScore,
      change: "+2",
      trend: "up",
      icon: Zap,
      description: "Google PageSpeed score",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Advanced analytics and insights for your website</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <Activity className="w-3 h-3 mr-1" />
            Live
          </Badge>
        </div>
      </div>

      {/* Overview Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      >
        {overviewCards.map((card, index) => {
          const Icon = card.icon
          return (
            <motion.div key={card.title} variants={itemVariants}>
              <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{card.value}</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span className={`flex items-center ${card.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                      {card.trend === "up" ? (
                        <TrendingUp className="w-3 h-3 mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 mr-1" />
                      )}
                      {card.change}
                    </span>
                    <span className="ml-2">{card.description}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Traffic Chart */}
        <motion.div variants={itemVariants} initial="hidden" animate="visible">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Overview</CardTitle>
              <CardDescription>Daily visitors and page views</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="visits"
                    stackId="1"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="uniqueVisitors"
                    stackId="2"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Device Breakdown */}
        <motion.div variants={itemVariants} initial="hidden" animate="visible">
          <Card>
            <CardHeader>
              <CardTitle>Device Breakdown</CardTitle>
              <CardDescription>Visitor device preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {deviceData.map((device, index) => {
                    const Icon = device.name === "Desktop" ? Monitor : device.name === "Mobile" ? Smartphone : Tablet
                    return (
                      <div key={device.name} className="space-y-1">
                        <Icon className="h-4 w-4 mx-auto" style={{ color: device.color }} />
                        <div className="text-sm font-medium">{device.value}%</div>
                        <div className="text-xs text-muted-foreground">{device.name}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Detailed Analytics */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Top Pages */}
        <motion.div variants={itemVariants} initial="hidden" animate="visible">
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
              <CardDescription>Most visited pages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.topPages.map((page, index) => (
                  <div key={page.path} className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{page.path}</p>
                      <p className="text-xs text-muted-foreground">{page.uniqueViews} unique views</p>
                    </div>
                    <div className="text-sm font-medium">{page.views}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Traffic Sources */}
        <motion.div variants={itemVariants} initial="hidden" animate="visible">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Where visitors come from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.referrers.map((referrer, index) => (
                  <div key={referrer.source} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{referrer.source}</span>
                      <span className="text-sm text-muted-foreground">{referrer.percentage}%</span>
                    </div>
                    <Progress value={referrer.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div variants={itemVariants} initial="hidden" animate="visible">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Site performance scores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Performance</span>
                    <span className="text-sm font-bold text-green-600">{stats.performance.performanceScore}</span>
                  </div>
                  <Progress value={stats.performance.performanceScore} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">SEO</span>
                    <span className="text-sm font-bold text-green-600">{stats.performance.seoScore}</span>
                  </div>
                  <Progress value={stats.performance.seoScore} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Accessibility</span>
                    <span className="text-sm font-bold text-green-600">{stats.performance.accessibilityScore}</span>
                  </div>
                  <Progress value={stats.performance.accessibilityScore} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Best Practices</span>
                    <span className="text-sm font-bold text-green-600">{stats.performance.bestPracticesScore}</span>
                  </div>
                  <Progress value={stats.performance.bestPracticesScore} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div variants={itemVariants} initial="hidden" animate="visible">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions and events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
