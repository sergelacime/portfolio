import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertMessageSchema } from "@shared/schema";
import type { InsertMessage } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "contact@example.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "San Francisco, CA",
  },
];

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertMessage) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: InsertMessage) {
    mutation.mutate(data);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Get in Touch
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
              I'm always open to new opportunities and collaborations. Feel free to
              reach out if you'd like to work together or just want to say hello!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{info.label}</h3>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} />
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message here..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={mutation.isPending}
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </motion.div>
  );
}
