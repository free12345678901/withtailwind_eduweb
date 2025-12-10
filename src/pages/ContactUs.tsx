import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactUs = () => {
  const form = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema), defaultValues: { name: "", email: "", subject: "", message: "" } });

  const onSubmit = (values: ContactFormValues) => {
    toast("Message sent", { description: "We will get back to you shortly." });
    form.reset();
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Helmet>
          <title>Contact Us | Angel Multimedia Institute</title>
          <meta name="description" content="Get in touch with us. Send a message or find our contact information and location." />
        </Helmet>

        <section className="gradient-hero py-16 md:py-20">
          <div className="container mx-auto px-4 text-center text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
            <p className="text-white/90 max-w-2xl mx-auto">We are here to help with admissions, courses, and more.</p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
            <Card className="bg-white rounded-2xl shadow-soft animate-scale-in" style={{ animationDelay: '0ms' }}>
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" aria-label="Contact form">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" {...form.register("name")} aria-invalid={!!form.formState.errors.name} aria-describedby="name-error" placeholder="Your name" />
                    {form.formState.errors.name && (
                      <p id="name-error" className="text-red-600 text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" {...form.register("email")} aria-invalid={!!form.formState.errors.email} aria-describedby="email-error" placeholder="you@example.com" />
                    {form.formState.errors.email && (
                      <p id="email-error" className="text-red-600 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" {...form.register("subject")} aria-invalid={!!form.formState.errors.subject} aria-describedby="subject-error" placeholder="Subject" />
                    {form.formState.errors.subject && (
                      <p id="subject-error" className="text-red-600 text-sm mt-1">{form.formState.errors.subject.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" rows={5} {...form.register("message")} aria-invalid={!!form.formState.errors.message} aria-describedby="message-error" placeholder="Write your message" />
                    {form.formState.errors.message && (
                      <p id="message-error" className="text-red-600 text-sm mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  <Button type="submit" className="bg-brand-orange hover:bg-brand-orange/90 transition-smooth">Submit</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-white rounded-2xl shadow-soft animate-scale-in" style={{ animationDelay: '100ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5" /> <a href="tel:+919978186631" aria-label="Phone">9978186631</a></li>
                    <li className="flex items-start gap-2"><MessageCircle className="w-4 h-4 mt-0.5" /> <a href="https://wa.me/919978186631" aria-label="WhatsApp">WhatsApp: 9978186631</a></li>
                    <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5" /> <a href="mailto:info@angelmultimedia.in" aria-label="Email">info@angelmultimedia.in</a></li>
                    <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> <span>Gujarat, India</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white rounded-2xl shadow-soft animate-scale-in" style={{ animationDelay: '200ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[16/9] w-full">
                    <iframe title="Institute location" aria-label="Google Maps location" className="w-full h-full rounded-md" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14884.724251734976!2d72.571!3d23.022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b1f3e0!2sGujarat%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000"></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
