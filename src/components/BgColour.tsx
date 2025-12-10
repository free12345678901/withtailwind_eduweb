interface BgColourProps {
  variant?: 'hero' | 'cta' | 'gradient';
  children: React.ReactNode;
  className?: string;
}

const BgColour = ({ variant = 'hero', children, className = '' }: BgColourProps) => {
  const bgClass = variant === 'hero' ? 'gradient-hero' : variant === 'cta' ? 'gradient-cta' : 'gradient-card';

  return (
    <div className={`${bgClass} relative overflow-hidden ${className}`}>
      {/* Decorative Floating Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl animate-float -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-magenta/20 rounded-full blur-3xl animate-float -z-10" style={{ animationDelay: '1.5s' }}></div>

      {/* Content */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
};

export default BgColour;
