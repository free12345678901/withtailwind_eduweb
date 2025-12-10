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
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BgColour from "@/components/BgColour";

const signupSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm your password"),
}).refine((data) => data.password === data.confirmPassword, { message: "Passwords do not match", path: ["confirmPassword"] });

type SignupValues = z.infer<typeof signupSchema>;

const Signup = () => {
  const navigate = useNavigate();
  const form = useForm<SignupValues>({ resolver: zodResolver(signupSchema), defaultValues: { name: "", email: "", password: "", confirmPassword: "" } });

  type StoredUser = { name: string; email: string; password: string };
  const onSubmit = (values: SignupValues) => {
    const users: StoredUser[] = JSON.parse(localStorage.getItem("users") || "[]");
    const exists = users.some((u) => u.email === values.email);
    if (exists) {
      toast("Email already registered", { description: "Try logging in or use another email." });
      return;
    }
    users.push({ name: values.name, email: values.email, password: values.password });
    localStorage.setItem("users", JSON.stringify(users));
    toast("Account created", { description: "You can now log in." });
    navigate("/login");
  };

  const handleGoogleSignup = () => {
    toast("Google signup", { description: "Social signup integration pending." });
  };

  useEffect(() => {
    const el = document.getElementById("signup-form");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y - (window.innerHeight * 0.1), behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Helmet>
          <title>Signup | Angel Multimedia Institute</title>
          <meta name="description" content="Create an account to manage your course enrollments." />
        </Helmet>
        <section className="py-4 md:py-5">
          <BgColour variant="hero">
            <div className="container mx-auto px-4 text-center text-white animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Signup</h1>
              <p className="text-white/90">Create your account</p>
            </div>
          </BgColour>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 flex justify-center items-center relative">
            <img src="/student-left.png" alt="Student studying" className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-48 h-auto object-contain" />
            <div className="max-w-md">
              <Card id="signup-form" className="bg-white rounded-2xl shadow-soft animate-scale-in">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Join us</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" aria-label="Signup form">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" {...form.register("name")} aria-invalid={!!form.formState.errors.name} aria-describedby="name-error" placeholder="Your name" />
                    {form.formState.errors.name && <p id="name-error" className="text-red-600 text-sm mt-1">{form.formState.errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" {...form.register("email")} aria-invalid={!!form.formState.errors.email} aria-describedby="email-error" placeholder="you@example.com" />
                    {form.formState.errors.email && <p id="email-error" className="text-red-600 text-sm mt-1">{form.formState.errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" {...form.register("password")} aria-invalid={!!form.formState.errors.password} aria-describedby="password-error" placeholder="Create a password" />
                    {form.formState.errors.password && <p id="password-error" className="text-red-600 text-sm mt-1">{form.formState.errors.password.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" {...form.register("confirmPassword")} aria-invalid={!!form.formState.errors.confirmPassword} aria-describedby="confirmPassword-error" placeholder="Confirm your password" />
                    {form.formState.errors.confirmPassword && <p id="confirmPassword-error" className="text-red-600 text-sm mt-1">{form.formState.errors.confirmPassword.message}</p>}
                  </div>
                  <Button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange/90 transition-smooth">Create Account</Button>
                  <Button type="button" variant="outline" className="w-full hover:bg-secondary/50 transition-smooth" onClick={handleGoogleSignup}>Sign up with Google</Button>
                  <div className="text-sm text-muted-foreground text-center">Already have an account? <Link to="/login" className="text-primary">Login</Link></div>
                </form>
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

export default Signup;
