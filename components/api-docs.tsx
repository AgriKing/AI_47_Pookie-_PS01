"use client"

import { useState } from "react"
import { Copy, Check, Terminal } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function ApiDocs() {
  const [copiedTab, setCopiedTab] = useState<string | null>(null)

  const copyToClipboard = (text: string, tab: string) => {
    navigator.clipboard.writeText(text)
    setCopiedTab(tab)
    setTimeout(() => setCopiedTab(null), 2000)
  }

  return (
    <div className="space-y-8">
      <div className="p-6 rounded-lg border border-border bg-muted/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Terminal className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-medium">Your API Key</h3>
          </div>
          <Button variant="outline" size="sm">
            Generate New Key
          </Button>
        </div>

        <div className="relative">
          <div className="p-3 rounded-md bg-background font-mono text-sm overflow-x-auto">
            sk avatar here
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={() =>
              copyToClipboard("sk test avatar here", "apiKey")
            }
          >
            {copiedTab === "apiKey" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-2">
          Keep your API key secure. Do not share it in publicly accessible areas.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold">Quick Start</h3>

        <Tabs defaultValue="curl">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="curl">cURL</TabsTrigger>
            <TabsTrigger value="node">Node.js</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="java">Java</TabsTrigger>
          </TabsList>

          <div className="mt-4 relative">
            <TabsContent value="curl" className="p-4 rounded-md bg-muted font-mono text-sm overflow-x-auto">
              {`curl -X POST https://api.aiavatar.com/v1/chat \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "avatar_id": "avatar_123",
    "message": "Hello, how can I help you today?",
    "language": "en"
  }'`}
            </TabsContent>

            <TabsContent value="node" className="p-4 rounded-md bg-muted font-mono text-sm overflow-x-auto">
              {`const axios = require('axios');

const response = await axios.post(
  'https://api.aiavatar.com/v1/chat',
  {
    avatar_id: 'avatar_123',
    message: 'Hello, how can I help you today?',
    language: 'en'
  },
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);

console.log(response.data);`}
            </TabsContent>

            <TabsContent value="python" className="p-4 rounded-md bg-muted font-mono text-sm overflow-x-auto">
              {`import requests

response = requests.post(
    'https://api.aiavatar.com/v1/chat',
    json={
        'avatar_id': 'avatar_123',
        'message': 'Hello, how can I help you today?',
        'language': 'en'
    },
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
)

print(response.json())`}
            </TabsContent>

            <TabsContent value="java" className="p-4 rounded-md bg-muted font-mono text-sm overflow-x-auto">
              {`import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;

String requestBody = """
    {
        "avatar_id": "avatar_123",
        "message": "Hello, how can I help you today?",
        "language": "en"
    }
    """;

HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.aiavatar.com/v1/chat"))
    .header("Authorization", "Bearer YOUR_API_KEY")
    .header("Content-Type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
    .build();

HttpClient client = HttpClient.newHttpClient();
HttpResponse<String> response = client.send(
    request, 
    HttpResponse.BodyHandlers.ofString()
);

System.out.println(response.body());`}
            </TabsContent>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-6"
              onClick={() => {
                const codeMap: Record<string, string> = {
                  curl: `curl -X POST https://api.aiavatar.com/v1/chat \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "avatar_id": "avatar_123",
    "message": "Hello, how can I help you today?",
    "language": "en"
  }'`,
                  node: `const axios = require('axios');

const response = await axios.post(
  'https://api.aiavatar.com/v1/chat',
  {
    avatar_id: 'avatar_123',
    message: 'Hello, how can I help you today?',
    language: 'en'
  },
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);

console.log(response.data);`,
                  python: `import requests

response = requests.post(
    'https://api.aiavatar.com/v1/chat',
    json={
        'avatar_id': 'avatar_123',
        'message': 'Hello, how can I help you today?',
        'language': 'en'
    },
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
)

print(response.json())`,
                  java: `import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;

String requestBody = """
    {
        "avatar_id": "avatar_123",
        "message": "Hello, how can I help you today?",
        "language": "en"
    }
    """;

HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.aiavatar.com/v1/chat"))
    .header("Authorization", "Bearer YOUR_API_KEY")
    .header("Content-Type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
    .build();

HttpClient client = HttpClient.newHttpClient();
HttpResponse<String> response = client.send(
    request, 
    HttpResponse.BodyHandlers.ofString()
);

System.out.println(response.body());`,
                }

                const activeTab = document.querySelector('[role="tabpanel"]:not([hidden])') as HTMLElement
                const tabId = activeTab?.getAttribute("value") || "curl"
                copyToClipboard(codeMap[tabId], tabId)
              }}
            >
              {Object.keys({ curl: "", node: "", python: "", java: "" }).some((tab) => copiedTab === tab) ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold">API Endpoints</h3>

        <div className="space-y-6">
          <div className="p-6 rounded-lg border border-border">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-2 py-1 text-xs font-medium rounded-md bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                POST
              </span>
              <code className="text-sm font-mono">/v1/chat</code>
            </div>

            <p className="mb-4">Send a message to an AI avatar and receive a response.</p>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Request Parameters</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-border">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Parameter
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Required
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-4 py-2 text-sm font-mono">avatar_id</td>
                        <td className="px-4 py-2 text-sm">string</td>
                        <td className="px-4 py-2 text-sm">Yes</td>
                        <td className="px-4 py-2 text-sm">The ID of the avatar to use</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-mono">message</td>
                        <td className="px-4 py-2 text-sm">string</td>
                        <td className="px-4 py-2 text-sm">Yes</td>
                        <td className="px-4 py-2 text-sm">The message to send to the avatar</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-mono">language</td>
                        <td className="px-4 py-2 text-sm">string</td>
                        <td className="px-4 py-2 text-sm">No</td>
                        <td className="px-4 py-2 text-sm">The language code (default: "en")</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-mono">session_id</td>
                        <td className="px-4 py-2 text-sm">string</td>
                        <td className="px-4 py-2 text-sm">No</td>
                        <td className="px-4 py-2 text-sm">Session ID for conversation context</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Response</h4>
                <div className="p-3 rounded-md bg-muted font-mono text-sm overflow-x-auto">
                  {`{
  "id": "resp_123456",
  "avatar_id": "avatar_123",
  "message": "I'm here to help! What would you like to know about our services?",
  "language": "en",
  "session_id": "session_789012",
  "created_at": "2023-11-10T15:30:45Z"
}`}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                GET
              </span>
              <code className="text-sm font-mono">/v1/avatars</code>
            </div>

            <p className="mb-4">List all available avatars for your account.</p>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Query Parameters</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-border">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Parameter
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Required
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-4 py-2 text-sm font-mono">limit</td>
                        <td className="px-4 py-2 text-sm">integer</td>
                        <td className="px-4 py-2 text-sm">No</td>
                        <td className="px-4 py-2 text-sm">Number of avatars to return (default: 10)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-mono">offset</td>
                        <td className="px-4 py-2 text-sm">integer</td>
                        <td className="px-4 py-2 text-sm">No</td>
                        <td className="px-4 py-2 text-sm">Pagination offset (default: 0)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Response</h4>
                <div className="p-3 rounded-md bg-muted font-mono text-sm overflow-x-auto">
                  {`{
  "avatars": [
    {
      "id": "avatar_123",
      "name": "Support Specialist",
      "languages": ["en", "hi", "ta"],
      "created_at": "2023-10-15T12:00:00Z"
    },
    {
      "id": "avatar_456",
      "name": "Sales Representative",
      "languages": ["en", "hi", "bn"],
      "created_at": "2023-10-20T14:30:00Z"
    }
  ],
  "total": 2,
  "limit": 10,
  "offset": 0
}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg border border-border bg-muted/30">
        <h3 className="text-xl font-bold mb-4">Rate Limits</h3>
        <p className="mb-4">
          Our API implements rate limiting to ensure fair usage and system stability. Rate limits vary by plan:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Plan
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Rate Limit
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Burst Limit
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-2 text-sm">Starter</td>
                <td className="px-4 py-2 text-sm">60 requests/minute</td>
                <td className="px-4 py-2 text-sm">100 requests/minute</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm">Professional</td>
                <td className="px-4 py-2 text-sm">300 requests/minute</td>
                <td className="px-4 py-2 text-sm">500 requests/minute</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm">Enterprise</td>
                <td className="px-4 py-2 text-sm">1,000 requests/minute</td>
                <td className="px-4 py-2 text-sm">2,000 requests/minute</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          If you exceed your rate limit, you'll receive a 429 Too Many Requests response. The response will include a
          Retry-After header indicating how long to wait before retrying.
        </p>
      </div>
    </div>
  )
}

