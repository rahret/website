import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

type ContactInput = z.infer<typeof api.contact.submit.input>;

// If VITE_FORMSPREE_ID is set (e.g. on the Vercel deployment), submissions
// are sent directly to Formspree. Otherwise we fall back to the local Express
// backend at /api/contact (useful for Replit dev).
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

export function useContactSubmission() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactInput) => {
      const endpoint = FORMSPREE_ID
        ? `https://formspree.io/f/${FORMSPREE_ID}`
        : api.contact.submit.path;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let message = "Failed to submit message";
        try {
          const error = await res.json();
          message = error.message || error.error || message;
        } catch {
          // response wasn't JSON
        }
        throw new Error(message);
      }

      return res.json().catch(() => ({ success: true }));
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description:
          "Thank you for contacting Rahret Innovation Labs. We'll be in touch shortly.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
