import { createAuthClient } from "better-auth/react"

export const { signIn, signUp, signOut, useSession, getSession } = createAuthClient()

export const handleGoogleLogin = async () => {
    await signIn.social({
        provider: "google"
    })
}