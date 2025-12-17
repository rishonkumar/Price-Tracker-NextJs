"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { Button } from "./ui/button"
import { createClient } from "@/utils/supabase/client"

export function AuthModal({ isOpen, onClose }) {

    const supabase = createClient()

    const handleGoogleSignIn = async () => {
        console.log("Google Sign In")
        const { origin } = window.location;

        await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${origin}/auth/callback`,
            },
        })
    }
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Sign in to continue</DialogTitle>
                    <DialogDescription>
                        Sign in to continue tracking your favorite products prices.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-4 py-4">
                    <Button
                        onClick={handleGoogleSignIn}
                        variant="outline" className="w-full gap-2" size="lg">Continue with Google</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}


export default AuthModal
