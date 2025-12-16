import { Button } from '@/components/ui/button';
import { Loader2, RefreshCw } from 'lucide-react';
import { useState } from 'react';

interface NicolePrankProps {
    onRetry: () => void;
}

export default function NicolePrank({ onRetry }: NicolePrankProps) {
    const [loading, setLoading] = useState(false);

    const handleRetry = async () => {
        setLoading(true);
        // Fake delay for dramatic effect
        await new Promise(resolve => setTimeout(resolve, 1000));
        onRetry();
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
                            But I think if you delete a file named <span className="text-destructive font-mono bg-destructive/10 px-1 rounded">nicolemessage.txt</span> in the <span className="font-mono">public</span> folder...
                        </p>
                        <p className="mt-4 text-muted-foreground italic">
                            The app might start functioning... maybe? 🤔
                        </p>
                    </div>
                </div>

                <Button
                    size="lg"
                    onClick={handleRetry}
                    disabled={loading}
                    className="w-full sm:w-auto min-w-[200px]"
                >
                    {loading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <RefreshCw className="mr-2 h-4 w-4" />
                    )}
                    {loading ? "Checking..." : "I Deleted It, Let me In!"}
                </Button>
            </div>
        </div>
    );
}
