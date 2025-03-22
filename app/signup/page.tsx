import Link from "next/link"
import SignupForm from "@/components/signup-form"
import SocialLogin from "@/components/social-login"

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 py-32">
      <div className="relative w-full max-w-md mx-auto">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-2xl transform rotate-1"></div>
        <div className="absolute inset-0 -z-10 bg-white dark:bg-gray-950 rounded-2xl transform -rotate-1 border border-border"></div>

        <div className="relative bg-white dark:bg-gray-950 p-8 rounded-xl border border-border shadow-sm">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                AI Avatar
              </span>
            </Link>
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-sm text-muted-foreground mt-1">Start your journey with AI Avatar</p>
          </div>

          <SignupForm />

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <SocialLogin />

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-purple-600 hover:text-purple-500 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

