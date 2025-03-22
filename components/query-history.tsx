"use client"

import { useState } from "react"
import { MoreHorizontal, ChevronDown, ChevronUp, ThumbsUp, ThumbsDown, Copy, Flag } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Sample data
const queryData = [
  {
    id: 1,
    query: "How do I reset my password?",
    response:
      "To reset your password, please click on the 'Forgot Password' link on the login page. You will receive an email with instructions to create a new password.",
    timestamp: "2023-11-10T14:32:00",
    user: "user@example.com",
    avatar: "Support Avatar",
    language: "English",
    sentiment: "positive",
  },
  {
    id: 2,
    query: "What are your business hours?",
    response:
      "Our business hours are Monday to Friday, 9:00 AM to 6:00 PM IST. We are closed on weekends and public holidays.",
    timestamp: "2023-11-10T12:15:00",
    user: "customer@example.com",
    avatar: "Support Avatar",
    language: "English",
    sentiment: "neutral",
  },
  {
    id: 3,
    query: "मैं अपना खाता कैसे अपग्रेड करूं?",
    response:
      "अपना खाता अपग्रेड करने के लिए, कृपया 'सेटिंग्स' पर जाएं और 'अपग्रेड' बटन पर क्लिक करें। आप विभिन्न उपलब्ध योजनाओं को देख सकते हैं और अपनी आवश्यकताओं के अनुसार चुन सकते हैं।",
    timestamp: "2023-11-09T18:45:00",
    user: "hindi_user@example.com",
    avatar: "Hindi Support Avatar",
    language: "Hindi",
    sentiment: "positive",
  },
  {
    id: 4,
    query: "Your service is terrible, I want a refund!",
    response:
      "I'm sorry to hear you're unhappy with our service. I'd like to help resolve this issue. Could you please provide more details about what went wrong? In the meantime, I'll connect you with our refund department.",
    timestamp: "2023-11-09T10:22:00",
    user: "angry_customer@example.com",
    avatar: "Support Avatar",
    language: "English",
    sentiment: "negative",
  },
  {
    id: 5,
    query: "எனது கட்டணத்தை எவ்வாறு செலுத்துவது?",
    response:
      "கட்டணம் செலுத்த, 'கட்டணம் செலுத்து' பக்கத்திற்குச் செல்லவும். நீங்கள் கிரெடிட் கார்டு, டெபிட் கார்டு அல்லது நெட் பேங்கிங் மூலம் பணம் செலுத்தலாம். உங்களுக்கு ஏதேனும் சிக்கல் இருந்தால், எங்கள் ஆதரவு குழுவைத் தொடர்பு கொள்ளவும்.",
    timestamp: "2023-11-08T15:30:00",
    user: "tamil_user@example.com",
    avatar: "Tamil Support Avatar",
    language: "Tamil",
    sentiment: "neutral",
  },
]

export default function QueryHistory() {
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({})

  const toggleRow = (id: number) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "negative":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <TableHead>Query</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Language</TableHead>
            <TableHead>Sentiment</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="w-[70px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {queryData.map((row) => (
            <>
              <TableRow key={row.id} className="cursor-pointer hover:bg-muted/50" onClick={() => toggleRow(row.id)}>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleRow(row.id)
                    }}
                  >
                    {expandedRows[row.id] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </TableCell>
                <TableCell className="font-medium">{row.query}</TableCell>
                <TableCell>{row.user}</TableCell>
                <TableCell>{row.language}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getSentimentColor(row.sentiment)}>
                    {row.sentiment}
                  </Badge>
                </TableCell>
                <TableCell>{new Date(row.timestamp).toLocaleString()}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Flag className="h-4 w-4 mr-2" />
                        Flag for review
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>

              {expandedRows[row.id] && (
                <TableRow className="bg-muted/30">
                  <TableCell colSpan={7} className="p-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm mb-1">Response:</h4>
                        <p className="text-muted-foreground">{row.response}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">Avatar: {row.avatar}</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm" className="h-8">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Good Response
                          </Button>
                          <Button variant="outline" size="sm" className="h-8">
                            <ThumbsDown className="h-4 w-4 mr-1" />
                            Needs Improvement
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between p-4 border-t">
        <div className="text-sm text-muted-foreground">Showing 5 of 245 queries</div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="w-8 p-0">
            1
          </Button>
          <Button variant="outline" size="sm" className="w-8 p-0">
            2
          </Button>
          <Button variant="outline" size="sm" className="w-8 p-0">
            3
          </Button>
          <span>...</span>
          <Button variant="outline" size="sm" className="w-8 p-0">
            24
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

