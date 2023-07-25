import SignIn from "@/components/user-auth/signin"
import SignUp from "@/components/user-auth/signup"

export const tabsList = [
  { name: "Sign in", value: "signIn" },
  { name: "Sign up", value: "signUp" },
]

export const tabsContent = [
  { value: "signIn", render: <SignIn /> },
  { value: "signUp", render: <SignUp /> },
]