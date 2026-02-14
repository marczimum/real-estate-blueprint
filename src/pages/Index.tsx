import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/HjNrFISFHeRBKHSiu5qyFJ";

const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const STORAGE_KEY = "remb_countdown_end";
    let endTime = localStorage.getItem(STORAGE_KEY);
    if (!endTime) {
      const end = Date.now() + 3 * 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, String(end));
      endTime = String(end);
    }
    const target = Number(endTime);

    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
};

const pad = (n: number) => String(n).padStart(2, "0");

const CTAButton = ({ large = false }: { large?: boolean }) => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block rounded-full bg-primary font-sans font-bold tracking-wide text-primary-foreground uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg animate-cta-pulse ${large ? "px-10 py-5 text-lg" : "px-8 py-4 text-base"
      }`}
  >
    Sign Up Now
  </a>
);

const GoldDivider = () => (
  <div className="flex justify-center my-8">
    <div className="gold-divider" />
  </div>
);

const Index = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Real Estate Money Blueprint"
              className="h-10 md:h-12"
            />
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold font-sans tracking-wider uppercase text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            Sign Up Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-3xl px-6 py-20 md:py-32 text-center">

          <h1 className="animate-fade-up-delay-1 text-3xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.15] tracking-tight mb-8">
            If You've Ever Dreamed of Building Wealth And Creating A Sustainable Source Of Income Through Real Estate,{" "}
            <span className="text-primary italic">Then This Is For You</span>
          </h1>

          <GoldDivider />

          <p className="animate-fade-up-delay-2 text-lg md:text-xl font-sans font-medium text-muted-foreground mb-5 max-w-2xl mx-auto leading-relaxed">
            Master the secret strategy high performing realtors are using to get paid weekly from real estate
          </p>
          <p className="animate-fade-up-delay-3 text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Our goal is to help you become financially empowered, providing you with the training and support you need to get massive sales fast
          </p>

          <ul className="text-left max-w-xl mx-auto space-y-5 mb-10">
            {[
              "Are you looking to scale your impact, knowledge, and earnings in an ever-growing industry?",
              "Are you trapped in trading your time-for-money with no structured, proven model?",
              "Is your income fighting with the high cost of living gradually?",
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start bg-card/60 border border-border/60 rounded-xl p-4 shadow-sm">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold font-sans mt-0.5">
                  ?
                </span>
                <span className="text-base md:text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-xl md:text-2xl font-extrabold mb-12 font-sans">
            Then this training is <span className="text-primary underline decoration-accent decoration-2 underline-offset-4">for you</span>
          </p>

          {/* Countdown */}
          <div className="flex justify-center gap-3 md:gap-4 mb-8">
            {[
              { val: days, label: "Days" },
              { val: hours, label: "Hours" },
              { val: minutes, label: "Mins" },
              { val: seconds, label: "Secs" },
            ].map(({ val, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-extrabold font-sans tabular-nums bg-card border border-border rounded-xl px-4 md:px-5 py-3 shadow-md">
                  {pad(val)}
                </span>
                <span className="text-[10px] md:text-xs text-muted-foreground mt-2 uppercase tracking-[0.2em] font-sans">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="text-2xl animate-bounce-x">👉</span>
            <CTAButton large />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-card border-y border-border relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 md:py-24">
          <p className="text-center text-sm font-sans font-semibold uppercase tracking-[0.25em] text-accent-foreground/60 mb-4">
            Your Blueprint Includes
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-3 tracking-tight">
            What Do You Get From Real Estate Money Blueprint
          </h2>

          <GoldDivider />

          <p className="text-center text-muted-foreground text-lg mb-12 font-sans">
            You get trained by an <span className="font-semibold text-foreground">industry expert</span>
          </p>

          <ul className="space-y-4 max-w-2xl mx-auto mb-14">
            {[
              "You network with high-performing realtors to grow your confidence",
              "You get access to exclusive and easy-to-sell land and property deals that make you millions monthly",
              "You access a very attractive instant commission alert",
              "You get certified to become a real estate consultant",
              "You get access to lots of sales incentives, annual recognition & performance rewards",
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start p-4 rounded-xl hover:bg-secondary/50 transition-colors duration-200">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold font-sans">
                  ✓
                </span>
                <span className="text-base md:text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <CTAButton large />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03] pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 md:py-24 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-[0.25em] text-accent-foreground/60 mb-6">
            Don't Miss Out
          </p>
          <p className="text-xl md:text-2xl mb-3 leading-relaxed">
            Ready to start your transformational journey in Real Estate?
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-3 leading-relaxed">
            Click the <span className="font-bold text-foreground">JOIN</span> button to attend the next Real Estate Money Blueprint
          </p>

          <GoldDivider />

          <p className="text-xl md:text-2xl font-extrabold text-primary mb-10 font-sans">
            Only 100 seats are reserved — join now
          </p>
          <CTAButton large />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground font-sans">
          © {new Date().getFullYear()} Real Estate Money Blueprint. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;