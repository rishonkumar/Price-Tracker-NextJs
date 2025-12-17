"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { LogIn, LogOut } from "lucide-react"
import AuthModal from "./AuthModal"
import { signOut } from "@/app/action"

const AuthButton = ({ user }) => {

    const [showAuthModal, setShowAuthModal] = useState(false)

    if (user) {
        return (
            <form action={signOut}>
                <Button
                    type="submit"
                    variant="ghost"
                    size="sm"
                    className="gap-2">
                    <LogOut className="h-4 w-4" />
                    Sign out
                </Button>
            </form>
        )
    }
    return (
        <>
            <Button
                onClick={() => setShowAuthModal(true)}
                variant="default"
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 gap-2">
                <LogIn className="h-4 w-4" />
                Sign in
            </Button>

            <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
        </>
    )
}

export default AuthButton