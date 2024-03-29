import React from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Toaster } from "react-hot-toast";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] md:w-72 bg-gray-900">
        <div className="text-white">
          <Sidebar />
        </div>
      </div>
      <main className="md:pl-72 ">
        <Navbar />
        {children}
      </main>
      <Toaster />
    </div>
  );
};

export default DashboardLayout;
