import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";

const schema = z.object({ email: z.string().email("Enter a valid email") });
type Values = z.infer<typeof schema>;

const ForgotPassword = () => {
  const form = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { email: "" } });

  const onSubmit = (values: Values) => {
    toast("Password reset sent", { description: `If an account exists for ${values.email}, you will receive a reset link.` });
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Helmet>
          <title>Password Recovery | Angel Multimedia Institute</title>
          <meta name="description" content="Recover your account by requesting a password reset link via email." />
        </Helmet>
        <section className="bg-gradient-to-r from-primary via-primary-dark to-primary-darker py-16 md:py-20">
          <div className="container mx-auto px-4 text-center text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Password Recovery</h1>
            <p className="text-white/90">Reset your password</p>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-md">
            <Card className="bg-white rounded-2xl shadow-soft animate-scale-in">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Password Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" aria-label="Password recovery form">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" {...form.register("email")} aria-invalid={!!form.formState.errors.email} />
                    {form.formState.errors.email && <p className="text-red-600 text-sm mt-1">{form.formState.errors.email.message}</p>}
                  </div>
                  <Button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange/90 transition-smooth">Send reset link</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
