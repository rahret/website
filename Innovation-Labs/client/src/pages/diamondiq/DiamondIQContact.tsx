import { DiamondIQNavbar } from "@/components/layout/DiamondIQNavbar";
import { DiamondIQFooter } from "@/components/layout/DiamondIQFooter";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Mail, MessageSquare, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Please provide more details"),
  subscribe: z.boolean().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function DiamondIQContact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subscribe: false,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <DiamondIQNavbar />

      {/* Hero */}
      <div className="bg-slate-900 pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black text-white mb-6"
          >
            CONTACT US
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We would love to hear from you. Questions, feedback, or partnership inquiries - we're here to help.
          </motion.p>
        </div>
      </div>

      {/* Contact Form Section */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Thank You!</h3>
                <p className="text-gray-600">
                  Your message has been sent successfully. We'll be in touch soon.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please share your comments or questions..."
                            rows={5}
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subscribe"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            data-testid="checkbox-subscribe"
                          />
                        </FormControl>
                        <FormLabel className="text-sm text-gray-600 font-normal leading-relaxed">
                          Yes! I would like to stay up-to-date on all things DiamondIQ, including app updates and resources for coaches and players.
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-all disabled:opacity-50"
                    data-testid="button-submit"
                  >
                    {mutation.isPending ? "Sending..." : "SEND MESSAGE"}
                  </button>
                </form>
              </Form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Have questions about DiamondIQ? Want to learn more about team pricing or league partnerships? We're here to help you get the most out of your training.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                  <a href="mailto:support@diamondiq.app" className="text-accent hover:underline">
                    support@diamondiq.app
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Feedback</h4>
                  <p className="text-gray-600">We love hearing from our users. Your input shapes our future updates.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <HelpCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Need Help?</h4>
                  <p className="text-gray-600">
                    Check out our{" "}
                    <a href="/diamondiq/help" className="text-accent hover:underline">
                      Help Center
                    </a>{" "}
                    for guides and tutorials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <DiamondIQFooter />
    </div>
  );
}
