import { useState } from "react";
import { WelcomePage } from "./components/WelcomePage";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { SubscriptionPage } from "./components/SubscriptionPage";
import { SignupPage } from "./components/SignupPage";
import { Dashboard } from "./components/Dashboard";

type PageType = "welcome" | "home" | "subscription" | "dashboard" | "signup";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("welcome");

  // Welcome Page (Initial)
  if (currentPage === "welcome") {
    return (
      <div className="flex justify-center items-center bg-gray-100 h-screen">
        <div className="w-[1424px] h-[997px] bg-white overflow-hidden">
          <WelcomePage 
            onExplore={() => setCurrentPage("home")}
            onLogin={() => setCurrentPage("dashboard")}
            onSignup={() => setCurrentPage("signup")}
          />
        </div>
      </div>
    );
  }

  // Dashboard (Logged in users)
  if (currentPage === "dashboard") {
    return (
      <div className="flex justify-center items-center bg-gray-100 h-screen">
        <div className="w-[1424px] h-[997px] bg-white shadow-2xl overflow-hidden">
          <Dashboard onLogout={() => setCurrentPage("welcome")} />
        </div>
      </div>
    );
  }

  // Signup Page
  if (currentPage === "signup") {
    return (
      <div className="flex justify-center items-center bg-gray-100 h-screen">
        <div className="w-[1424px] h-[997px] bg-white overflow-hidden">
          <SignupPage 
            onBack={() => setCurrentPage("welcome")}
            onSignup={() => setCurrentPage("dashboard")}
            onLoginRedirect={() => setCurrentPage("welcome")}
          />
        </div>
      </div>
    );
  }

  // Subscription Page
  if (currentPage === "subscription") {
    return (
      <div className="flex justify-center items-center bg-gray-100 h-screen">
        <div className="w-[1424px] h-[997px] bg-white overflow-auto">
          <SubscriptionPage onBack={() => setCurrentPage("home")} />
        </div>
      </div>
    );
  }

  // Landing Page (Home)
  return (
    <div className="flex justify-center items-center bg-gray-100 h-screen">
      <div className="w-[1424px] h-[997px] bg-white overflow-auto">
        <Header 
          onScheduleClick={() => setCurrentPage("subscription")} 
          onBackToWelcome={() => setCurrentPage("welcome")}
        />
        <main id="inicio">
          <Hero onScheduleClick={() => setCurrentPage("subscription")} />
          <Services />
          <Benefits />
          <Testimonials />
          <CTA onScheduleClick={() => setCurrentPage("subscription")} />
        </main>
        <Footer />
      </div>
    </div>
  );
