import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { useContactSubmission } from "@/hooks/use-contact";
import { Mail, Loader2 } from "lucide-react";

type ContactFormValues = z.infer<typeof insertContactSchema>;

export default function Contact() {
  const { mutate, isPending } = useContactSubmission();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Navbar />

      <div className="bg-primary text-white pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-300">We'd love to hear from you.</p>
        </div>
      </div>

      <Section className="bg-gray-50 -mt-10">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 relative z-10">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Name</label>
              <input
                id="name"
                type="text"
                {...form.register("name")}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                placeholder="John Doe"
              />
              {form.formState.errors.name && (
                <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Email</label>
              <input
                id="email"
                type="email"
                {...form.register("email")}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                placeholder="john@example.com"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Message</label>
              <textarea
                id="message"
                rows={5}
                {...form.register("message")}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                placeholder="How can we help you?"
              />
              {form.formState.errors.message && (
                <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {isPending ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-5 w-5" />
                  Sending...
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
}
