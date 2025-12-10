import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BgColour from "@/components/BgColour";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Admin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const sessionRaw = localStorage.getItem("auth:session");
    const session = sessionRaw ? JSON.parse(sessionRaw) : null;
    if (!session || session.role !== "admin") {
      navigate("/login");
      return;
    }
    setEmail(session.email || "admin");
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Helmet>
          <title>Admin Dashboard | Angel Multimedia Institute</title>
          <meta name="description" content="Admin dashboard for site management." />
        </Helmet>
        <section className="py-8 md:py-10">
          <BgColour variant="hero">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold">Admin Dashboard</h1>
              <p className="text-white/90">Signed in as {email}</p>
            </div>
          </BgColour>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="bg-white rounded-2xl shadow-soft">
              <CardHeader>
                <CardTitle>Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>View site metrics</li>
                  <li>Manage content</li>
                  <li>Review student submissions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
