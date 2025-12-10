import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center animate-fade-in">
        <h1 className="mb-4 text-5xl md:text-6xl font-bold">404</h1>
        <p className="mb-6 text-lg md:text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="inline-block bg-brand-orange text-white px-5 py-2 rounded-md shadow-soft hover:bg-brand-orange/90 transition-smooth">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
