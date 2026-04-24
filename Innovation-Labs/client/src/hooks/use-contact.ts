import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

type ContactInput = z.infer<typeof api.contact.submit.input>;

export function useContactSubmission() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactInput) => {
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit message");
      }

      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting Rahret Innovation Labs. We'll be in touch shortly.",
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
