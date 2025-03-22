"use client"

import type React from "react"

import { useState } from "react"
import {
  BarChart,
  MessageSquare,
  Users,
  Clock,
  Settings,
  Moon,
  Sun,
  Search,
  Filter,
  Download,
  ArrowUpRight,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardChart from "@/components/dashboard-chart"
import QueryHistory from "@/components/query-history"
import ApiDocs from "@/components/api-docs"

export default function DashboardPage() {
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <main className="min-h-screen pt-16">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 flex-col fixed inset-y-0 pt-16 border-r border-border bg-background">
          <div className="flex-1 flex flex-col p-4">
            <nav className="space-y-1 mt-8">
              <SidebarItem
                icon={<BarChart className="h-5 w-5" />}
                label="Overview"
                active={activeTab === "overview"}
                onClick={() => setActiveTab("overview")}
              />
              <SidebarItem
                icon={<MessageSquare className="h-5 w-5" />}
                label="Query History"
                active={activeTab === "history"}
                onClick={() => setActiveTab("history")}
              />
              <SidebarItem
                icon={<Users className="h-5 w-5" />}
                label="Avatar Management"
                active={activeTab === "avatars"}
                onClick={() => setActiveTab("avatars")}
              />
              <SidebarItem
                icon={<ArrowUpRight className="h-5 w-5" />}
                label="API Access"
                active={activeTab === "api"}
                onClick={() => setActiveTab("api")}
              />
              <SidebarItem
                icon={<Settings className="h-5 w-5" />}
                label="Settings"
                active={activeTab === "settings"}
                onClick={() => setActiveTab("settings")}
              />
            </nav>
          </div>

          <div className="p-4 border-t border-border">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <>
                  <Sun className="h-4 w-4 mr-2" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 mr-2" />
                  Dark Mode
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 md:ml-64 p-4 md:p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="md:hidden mb-6">
            <TabsList className="grid grid-cols-5 w-full">
              <TabsTrigger value="overview">
                <BarChart className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="history">
                <MessageSquare className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="avatars">
                <Users className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="api">
                <ArrowUpRight className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <TabsContent value="overview" className="mt-0">
            <DashboardOverview />
          </TabsContent>

          <TabsContent value="history" className="mt-0">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Query History</h1>
              <p className="text-muted-foreground">
                View and search through all customer interactions with your AI avatars.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-grow">
                <Input
                  placeholder="Search queries..."
                  className="w-full"
                  prefix={<Search className="h-4 w-4 mr-2" />}
                />
              </div>
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Date Range</DropdownMenuItem>
                    <DropdownMenuItem>Avatar</DropdownMenuItem>
                    <DropdownMenuItem>Language</DropdownMenuItem>
                    <DropdownMenuItem>Sentiment</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <QueryHistory />
          </TabsContent>

          <TabsContent value="api" className="mt-0">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">API Access</h1>
              <p className="text-muted-foreground">
                Integrate AI avatars directly into your applications with our API.
              </p>
            </div>

            <ApiDocs />
          </TabsContent>

          <TabsContent value="avatars" className="mt-0">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Avatar Management</h1>
              <p className="text-muted-foreground">Customize and manage your AI avatars.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="aspect-square bg-muted relative">
                    <img
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={`Avatar ${i}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-medium">Avatar {i}</h3>
                        <p className="text-sm opacity-80">Support Specialist</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-sm">Active</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Customize
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="border-dashed flex items-center justify-center aspect-square">
                <Button variant="ghost" className="flex flex-col h-auto py-8">
                  <div className="rounded-full bg-primary/10 p-3 mb-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <span>Create New Avatar</span>
                </Button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="mt-0">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Settings</h1>
              <p className="text-muted-foreground">Manage your account and preferences.</p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>Update your account details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">First Name</label>
                        <Input defaultValue="John" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Last Name</label>
                        <Input defaultValue="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Email Address</label>
                      <Input defaultValue="john.doe@example.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Company</label>
                      <Input defaultValue="Acme Inc." />
                    </div>
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                  <CardDescription>Customize the look and feel</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-3 block">Theme</label>
                      <div className="flex space-x-4">
                        <Button
                          variant={theme === "light" ? "default" : "outline"}
                          onClick={() => setTheme("light")}
                          className="flex items-center"
                        >
                          <Sun className="h-4 w-4 mr-2" />
                          Light
                        </Button>
                        <Button
                          variant={theme === "dark" ? "default" : "outline"}
                          onClick={() => setTheme("dark")}
                          className="flex items-center"
                        >
                          <Moon className="h-4 w-4 mr-2" />
                          Dark
                        </Button>
                        <Button variant={theme === "system" ? "default" : "outline"} onClick={() => setTheme("system")}>
                          System
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Manage your notification preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-muted-foreground">Receive email updates about your account</p>
                      </div>
                      <Button variant="outline">Configure</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Usage Alerts</h4>
                        <p className="text-sm text-muted-foreground">Get notified when approaching usage limits</p>
                      </div>
                      <Button variant="outline">Configure</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </div>
      </div>
    </main>
  )
}

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  active: boolean
  onClick: () => void
}

function SidebarItem({ icon, label, active, onClick }: SidebarItemProps) {
  return (
    <button
      className={`flex items-center space-x-3 w-full p-2 rounded-md transition-colors ${
        active ? "bg-primary/10 text-primary" : "hover:bg-muted text-muted-foreground hover:text-foreground"
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

function DashboardOverview() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your AI avatar performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Total Queries</p>
                <h3 className="text-2xl font-bold">24,521</h3>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">+12.5% from last month</p>
              </div>
              <div className="p-3 rounded-full bg-primary/10">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Active Users</p>
                <h3 className="text-2xl font-bold">1,342</h3>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">+8.2% from last month</p>
              </div>
              <div className="p-3 rounded-full bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Avg. Response Time</p>
                <h3 className="text-2xl font-bold">0.8s</h3>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">-0.2s from last month</p>
              </div>
              <div className="p-3 rounded-full bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Satisfaction Rate</p>
                <h3 className="text-2xl font-bold">94.2%</h3>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">+2.1% from last month</p>
              </div>
              <div className="p-3 rounded-full bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Query Volume</CardTitle>
            <CardDescription>Number of queries over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <DashboardChart />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Languages</CardTitle>
            <CardDescription>Most used languages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">English</span>
                  <span className="text-sm text-muted-foreground">45%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: "45%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Hindi</span>
                  <span className="text-sm text-muted-foreground">25%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: "25%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Tamil</span>
                  <span className="text-sm text-muted-foreground">15%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: "15%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Telugu</span>
                  <span className="text-sm text-muted-foreground">10%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: "10%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Bengali</span>
                  <span className="text-sm text-muted-foreground">5%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: "5%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Queries</CardTitle>
            <CardDescription>Latest customer interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">How do I reset my password?</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <span>User #{1000 + i}</span>
                      <span className="mx-2">•</span>
                      <span>English</span>
                      <span className="mx-2">•</span>
                      <span>{new Date().toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Queries
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avatar Performance</CardTitle>
            <CardDescription>Effectiveness by avatar</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=40&width=40`}
                        alt={`Avatar ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Avatar {i}</p>
                      <p className="text-sm text-muted-foreground">Support Specialist</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{90 + i}%</p>
                    <p className="text-sm text-muted-foreground">Satisfaction</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Avatars
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

