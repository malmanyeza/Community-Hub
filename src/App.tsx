import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

import { useState, useEffect } from "react";
import NicolePrank from "./components/NicolePrank";

const queryClient = new QueryClient();

const App = () => {
  const [prankActive, setPrankActive] = useState<boolean | null>(null);

  const checkPrankStatus = async () => {
    try {
      // Check if file exists in public folder
      // Add timestamp to prevent caching
      const response = await fetch(`/nicolemessage.txt?t=${new Date().getTime()}`, {
        method: 'HEAD',
        cache: 'no-store'
      });

      if (response.ok) {
        setPrankActive(true);
      } else {
        setPrankActive(false);
      }
    } catch (e) {
      setPrankActive(false);
    }
  };

  useEffect(() => {
    checkPrankStatus();
  }, []);

  if (prankActive === true) {
    return <NicolePrank onRetry={checkPrankStatus} />;
  }

  // Brief loading state while checking file
  if (prankActive === null) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
