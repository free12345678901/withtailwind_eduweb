import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BgColour from "@/components/BgColour";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Student = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const sessionRaw = localStorage.getItem("auth:session");
    const session = sessionRaw ? JSON.parse(sessionRaw) : null;
    if (!session || session.role !== "student") {
      navigate("/login");
      return;
    }
    setEmail(session.email || "");
    setName(session.name || "Student");
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Helmet>
          <title>Student Dashboard | Angel Multimedia Institute</title>
          <meta name="description" content="Student dashboard for enrolled learners." />
        </Helmet>
        <section className="py-8 md:py-10">
          <BgColour variant="hero">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold">Welcome, {name}</h1>
              <p className="text-white/90">Signed in as {email}</p>
            </div>
          </BgColour>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="bg-white rounded-2xl shadow-soft">
              <CardHeader>
                <CardTitle>Your Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Access enrolled courses</li>
                  <li>Track progress</li>
                  <li>View announcements</li>
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

export default Student;
