import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import DiamondIQ from "@/pages/DiamondIQ";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import DiamondIQAbout from "@/pages/diamondiq/DiamondIQAbout";
import DiamondIQPricing from "@/pages/diamondiq/DiamondIQPricing";
import DiamondIQContact from "@/pages/diamondiq/DiamondIQContact";
import DiamondIQSubscribe from "@/pages/diamondiq/DiamondIQSubscribe";
import DiamondIQHelp from "@/pages/diamondiq/DiamondIQHelp";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/diamondiq" component={DiamondIQ} />
      <Route path="/diamondiq/about" component={DiamondIQAbout} />
      <Route path="/diamondiq/pricing" component={DiamondIQPricing} />
      <Route path="/diamondiq/contact" component={DiamondIQContact} />
      <Route path="/diamondiq/subscribe" component={DiamondIQSubscribe} />
      <Route path="/diamondiq/help" component={DiamondIQHelp} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
