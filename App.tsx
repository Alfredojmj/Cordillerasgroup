
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Ecosystem from './components/Ecosystem';
import Expertise from './components/Expertise';
import Footer from './components/Footer';

// Minimalist Legal Content Component
const LegalView: React.FC<{ type: 'privacy' | 'terms'; onBack: () => void }> = ({ type, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = type === 'privacy' ? {
    title: "Privacy Policy",
    date: "Feb 2026",
    sections: [
      { h: "1. Introduction", p: "Welcome to Cordilleras Group LLC. We respect your privacy and are committed to protecting your personal data. This privacy policy informs you how we look after your data when you visit our site." },
      { h: "2. Data Collection", p: "We collect email addresses exclusively for authentication and communication regarding our ventures. We do not sell user data to third parties." },
      { h: "3. Security", p: "We implement industry-standard security measures to prevent unauthorized access, alteration, or disclosure of your personal information." }
    ]
  } : {
    title: "Terms of Service",
    date: "Feb 2026",
    sections: [
      { h: "1. Acceptance", p: "By accessing Validea.ai or Cordilleras Group services, you agree to be bound by these terms." },
      { h: "2. Disclaimer of Warranties", p: "IMPORTANT: Our AI analysis (Validea.ai) is for informational purposes only. It does not constitute financial or legal advice. Results are generated via experimental models." },
      { h: "3. User Accounts", p: "When you create an account with us, you must provide information that is accurate, complete, and current at all times." },
      { h: "4. NO PROFESSIONAL ADVICE", p: "The information and services provided by Cordilleras Group LLC and Validea.ai are for educational and informational purposes only and do not constitute financial, legal, accounting, or tax advice. Cordilleras Group LLC is not a certified financial planner, registered investment advisor, or broker-dealer. You acknowledge that you are solely responsible for your business decisions and that Cordilleras Group LLC is not liable for any outcomes resulting from the use of our platform or consulting services." },
      { h: "5. Intellectual Property", p: "The Service and its original content, features, and functionality are and will remain the exclusive property of Cordilleras Group LLC and its licensors." },
      { h: "6. Limitation of Liability", p: "Cordilleras Group LLC is not liable for business decisions made based on platform outputs or consulting insights." }
    ]
  };

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-12 hover:opacity-70 transition-opacity"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Home
        </a>
        <h1 className="text-5xl font-black mb-4 italic">{content.title}</h1>
        <p className="text-gray-400 mb-12 uppercase tracking-widest text-xs font-bold">Last Updated: {content.date}</p>
        
        <div className="space-y-12">
          {content.sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-xl font-bold mb-4 uppercase tracking-wider text-black">{s.h}</h2>
              <p className="text-gray-600 leading-relaxed">{s.p}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'privacy' | 'terms'>('home');

  const navigateTo = (newView: 'home' | 'privacy' | 'terms') => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#C5A059] selection:text-white">
      <Navbar onHome={() => navigateTo('home')} />
      
      <main className="flex-grow">
        {view === 'home' ? (
          <>
            <Hero />
            <About />
            <Ecosystem />
            <Expertise />
          </>
        ) : (
          <LegalView type={view as 'privacy' | 'terms'} onBack={() => navigateTo('home')} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
