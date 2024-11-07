"use client";

import NavbarLanding from "./components/NavbarLanding";
import Navbar from "./dashboard/Navbar";
import Sidebar from "./dashboard/Sidebar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import DriverNavbar from "./driverdashboard/DriverNavbar";
import DriverSidebar from "./driverdashboard/DriverSidebar";
import InvestorNavbar from "./investordashboard/InvestorNavbar";
import InvestorSidebar from "./investordashboard/InvestorSidebar";

export default function LayoutHandler({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const isDriverDashboard = pathname.startsWith("/driverdashboard");
  const isInvestorDashboard = pathname.startsWith("/investordashboard");

  return (
    <>
      {isDriverDashboard ? (
        <div className="flex h-screen bg-gray-900 text-white">
          {/* Driver Sidebar */}
          <DriverSidebar />

          {/* Driver Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Driver Navbar */}
            <DriverNavbar />

            {/* Content */}
            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
          </div>
        </div>
      ) : isInvestorDashboard ? (
        <div className="flex h-screen bg-gray-900 text-white">
          {/* Investor Sidebar */}
          <InvestorSidebar />

          {/* Investor Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Investor Navbar */}
            <InvestorNavbar />

            {/* Content */}
            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
          </div>
        </div>
      ) : isDashboard ? (
        <div className="flex h-screen bg-gray-900 text-white">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content area */}
          <div className="flex-1 flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
          </div>
        </div>
      ) : (
        <>
          <NavbarLanding />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}
