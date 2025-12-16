import { Button } from '@/components/ui/button';
import { Loader2, RefreshCw } from 'lucide-react';
import { useState } from 'react';

interface NicolePrankProps {
    onUnlock: () => void;
}

export default function NicolePrank({ onUnlock }: NicolePrankProps) {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        // Fake delay for dramatic effect
        await new Promise(resolve => setTimeout(resolve, 1500));
        onUnlock();
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background text-center animate-fade-in">
            <div className="max-w-md space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
                        Hey sweerie... 😂
                    </h1>

                    <p className="text-xl text-muted-foreground leading-relaxed">
                        I'm sorry I couldn't create this f***in project...
                    </p>

                    <div className="p-6 bg-secondary/50 rounded-xl border border-destructive/20 my-8">
                        <p className="text-lg font-medium text-foreground">
                            Wait... maybe if you ask nicely it will work? 🥺
                        </p>
                    </div>
                </div>

                <Button
                    size="lg"
                    onClick={handleClick}
                    disabled={loading}
                    className="w-full sm:w-auto min-w-[200px] text-lg h-12"
                >
                    {loading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <RefreshCw className="mr-2 h-4 w-4" />
                    )}
                    {loading ? "Unlocking..." : "Malvern please let me in"}
                </Button>
            </div>
        </div>
    );
}
