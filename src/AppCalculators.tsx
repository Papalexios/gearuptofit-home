
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Calculators from "./pages/Calculators";

const queryClient = new QueryClient();

const AppCalculators = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Calculators />
    </TooltipProvider>
  </QueryClientProvider>
);

export default AppCalculators;
