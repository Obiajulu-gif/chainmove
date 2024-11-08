// src/app/LayoutHandler.js
"use client";

import { usePathname } from "next/navigation";

import { Client, InternetIdentity } from "@bundly/ares-core";
import { IcpConnectContextProvider } from "@bundly/ares-react";

import Footer from "./components/Footer";
import NavbarLanding from "./components/NavbarLanding";
import Navbar from "./dashboard/Navbar";
import Sidebar from "./dashboard/Sidebar";
import DriverNavbar from "./driverdashboard/DriverNavbar";
import DriverSidebar from "./driverdashboard/DriverSidebar";
import InvestorNavbar from "./investordashboard/InvestorNavbar";
import InvestorSidebar from "./investordashboard/InvestorSidebar";

// src/app/LayoutHandler.js

const client = Client.create({
  agentConfig: {
    host: process.env.NEXT_PUBLIC_IC_HOST_URL,
  },
  providers: [
    new InternetIdentity({
      providerUrl: process.env.NEXT_PUBLIC_INTERNET_IDENTITY_URL,
    }),
  ],
});

export default function LayoutHandler({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const isDriverDashboard = pathname.startsWith("/driverdashboard");
  const isInvestorDashboard = pathname.startsWith("/investordashboard");

  return (
    <IcpConnectContextProvider client={client}>
      {isDriverDashboard ? (
        <div className="flex h-screen bg-gray-900 text-white">
          <DriverSidebar />
          <div className="flex-1 flex flex-col">
            <DriverNavbar />
            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
          </div>
        </div>
      ) : isInvestorDashboard ? (
        <div className="flex h-screen bg-gray-900 text-white">
          <InvestorSidebar />
          <div className="flex-1 flex flex-col">
            <InvestorNavbar />
            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
          </div>
        </div>
      ) : isDashboard ? (
        <div className="flex h-screen bg-gray-900 text-white">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
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
    </IcpConnectContextProvider>
  );
}
