"use client"

import { SignIn } from "@clerk/nextjs"

export default function SignInComponents() {
  return (
    <div className="container mx-auto flex justify-center p-5">
      <SignIn
        appearance={{
          elements: {
            card: "rounded-lg border border-solid border-border bg-card text-card-foreground shadow-sm",
            headerTitle: "text-lg font-semibold text-card-foreground",
            headerSubtitle: "text-muted-foreground",
            socialButtonsIconButton: "border border-solid border-border text-input",
            dividerLine: "border border-solid border-border",
            dividerText: "text-card-foreground",
            formFieldLabel: "text-card-foreground",
            formFieldInput: "flex h-10 w-full rounded-md border border-input bg-background text-muted-foreground px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            footerActionText: "text-muted-foreground",
            footerActionLink: "text-card-foreground",
            formButtonPrimary: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
          }
        }}
      />
    </div>
  )
}