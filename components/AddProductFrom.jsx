"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Loader2 } from "lucide-react"
import AuthModal from "./AuthModal"

const AddProductForm = ({user}) => {

    const [url, setUrl] = useState("")
    const [loading, setLoading] = useState(false)
    const [showAuthModal, setShowAuthModal] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            console.log("User not found")
            setShowAuthModal(true)
            return;
        }
        // setLoading(true)
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-2">
                    <Input
                        type="url"
                        placeholder="Enter product URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="h-12 text-base"
                        required
                        disabled={loading}
                    />

                    <Button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 h-10 sm:h-12 px-8"
                        disabled={loading}
                        size={12}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Adding..
                            </>
                        ) : (
                            "Track Price"
                        )}
                    </Button>
                </div>
            </form >

            {/* // AuthModal */}
            <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
        </>
    )
}

export default AddProductForm