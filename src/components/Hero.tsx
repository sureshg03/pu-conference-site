import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-36 h-36 sm:w-72 sm:h-72 border border-primary-foreground rounded-full" />
        <div className="absolute top-20 right-10 sm:top-40 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 left-1/4 sm:bottom-20 sm:left-1/4 w-24 h-24 sm:w-48 sm:h-48 border border-primary-foreground rounded-full" />
        <div className="absolute -bottom-10 right-1/3 sm:-bottom-20 sm:right-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-teal rounded-full blur-2xl sm:blur-3xl opacity-20" />
        <div className="absolute top-1/4 -left-10 sm:-left-20 w-40 h-40 sm:w-80 sm:h-80 bg-coral rounded-full blur-2xl sm:blur-3xl opacity-10" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 mb-7 pt-20 sm:pt-24 pb-8 sm:pb-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 text-teal-light px-4 sm:px-6 py-3 rounded-full mb-8 sm:mb-10 animate-fade-in text-sm sm:text-base">
            <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
            <span className="font-medium">International Conference 2026</span>
          </div>


          {/* Logo + ICAITSC 2026 Card */}
          <div className="flex flex-col justify-center items-center mt-4 sm:mt-6 md:mt-8 bg-white rounded-xl shadow-lg px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 mb-6 sm:mb-8 md:mb-10 animate-fade-in max-w-full sm:max-w-lg md:max-w-2xl mx-auto">
            {/* Logos Row */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6">
              <img src="/logo.jpg" alt="Periyar University Logo" className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain" />
              <img src="/icaitsc.png" alt="ICAITSC Logo" className="h-14 w-14 sm:h-16 sm:w-16 md:h-24 md:w-24 object-contain" />
            </div>
            {/* Title */}
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-navy text-center block">ICAITSC 2026</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-primary-foreground mb-0 leading-tight animate-fade-in px-2" style={{ animationDelay: "0.1s" }}>
            International Conference on
            <span className="block text-teal-light mt-2 sm:mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Artificial Intelligence
            </span>
            <span className="block text-coral-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Techniques & Smart Computing
            </span>
          </h1>

         
          {/* Info Cards */}
          <div className="flex flex-col sm:flex-row mt-8 sm:mt-10 flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 animate-fade-in px-4" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-primary-foreground/20 w-full sm:w-auto">
              <Calendar className="w-5 h-5 text-coral flex-shrink-0" />
              <span className="text-primary-foreground font-medium text-base">26-27 February 2026</span>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-primary-foreground/20 w-full sm:w-auto">
              <MapPin className="w-5 h-5 text-teal flex-shrink-0" />
              <span className="text-primary-foreground font-medium text-base">Salem, Tamil Nadu, India</span>
            </div>
          </div>

          {/* University Info */}
          <div className="mb-10 sm:mb-12 animate-fade-in px-4" style={{ animationDelay: "0.4s" }}>
            <p className="text-primary-foreground/60 text-sm sm:text-base uppercase tracking-wider mb-3">Organized by</p>
            <p className="text-xl sm:text-2xl md:text-3xl text-primary-foreground font-display font-semibold mb-2">
              Department of Computer Science
            </p>
            <p className="text-lg sm:text-xl text-teal-light font-medium">
              Periyar University
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-fade-in px-4" style={{ animationDelay: "0.5s" }}>
            <a href="#registration" className="btn-accent flex items-center justify-center gap-2 group text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 w-full sm:w-auto">
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#call-for-papers" className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 sm:px-10 sm:py-5 font-display font-semibold text-base sm:text-lg rounded-lg transition-all duration-300 hover:bg-primary-foreground/20 hover:border-primary-foreground/50 text-center w-full sm:w-auto">
              Submit Paper
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20 animate-fade-in px-4" style={{ animationDelay: "0.6s" }}>
            {[
              { number: "50+", label: "Speakers" },
              { number: "200+", label: "Papers" },
              { number: "30+", label: "Sessions" },
              { number: "500+", label: "Attendees" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-teal">{stat.number}</p>
                <p className="text-primary-foreground/60 text-sm sm:text-base uppercase tracking-wider mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
