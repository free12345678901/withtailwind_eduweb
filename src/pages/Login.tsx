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
import { Link } from "react-router-dom";
import { useEffect } from "react";
import BgColour from "@/components/BgColour";

const loginSchema = z.object({
  email: z.union([z.literal("admin@gmail.com"), z.string().email("Enter a valid email")]),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const form = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema), defaultValues: { email: "", password: "" } });

  const onSubmit = (values: LoginFormValues) => {
    if (values.email === "admin@gmail.com" && values.password === "admin") {
      localStorage.setItem("auth:session", JSON.stringify({ role: "admin", email: "admin", ts: Date.now() }));
      toast("Admin login successful", { description: "Welcome, admin." });
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]") as Array<{ email: string; password: string; name?: string }>;
    const found = users.find((u) => u.email === values.email && u.password === values.password);
    if (found) {
      localStorage.setItem("auth:session", JSON.stringify({ role: "student", email: found.email, name: found.name, ts: Date.now() }));
      toast("Login successful", { description: "Welcome back!" });
      return;
    }
    toast("Invalid credentials", { description: "Please check your email and password." });
  };

  const social = (provider: string) => {
    toast(`${provider} login`, { description: "Social login will be available soon." });
  };

  useEffect(() => {
    const el = document.getElementById("login-form");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y - (window.innerHeight * 0.1), behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Helmet>
          <title>Login | Angel Multimedia Institute</title>
          <meta name="description" content="Login to your account to access courses and resources." />
        </Helmet>
        <section className="py-4 md:py-5">
          <BgColour variant="hero">
            <div className="container mx-auto px-4 text-center text-white animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Login</h1>
              <p className="text-white/90">Access your account</p>
            </div>
          </BgColour>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 flex justify-center items-center relative">
              <img src="/student-left.png" alt="Student studying" className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-48 h-auto object-contain" />
              <div className="max-w-md">
                <Card id="login-form" className="bg-white rounded-2xl shadow-soft animate-scale-in">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">Login</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" aria-label="Login form">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="you@example.com" {...form.register("email")} aria-invalid={!!form.formState.errors.email} />
                        {form.formState.errors.email && <p className="text-red-600 text-sm mt-1">{form.formState.errors.email.message}</p>}
                      </div>
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="Your password" {...form.register("password")} aria-invalid={!!form.formState.errors.password} />
                        {form.formState.errors.password && <p className="text-red-600 text-sm mt-1">{form.formState.errors.password.message}</p>}
                      </div>
                      <Button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange/90 transition-smooth">Login</Button>
                    </form>
                    <div className="mt-4 flex items-center justify-between">
                      <Link to="/forgot-password" className="text-sm text-primary">Forgot password?</Link>
                      <Link to="/signup" className="text-sm text-primary">Create account</Link>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <Button type="button" variant="outline" className="hover:bg-secondary/50 transition-smooth" onClick={() => social("Google")}>Google</Button>
                      <Button type="button" variant="outline" className="hover:bg-secondary/50 transition-smooth" onClick={() => social("Facebook")}>Facebook</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <img src="/student-right.png" alt="Student studying" className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-48 h-auto object-contain" />
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};


export default Login;
