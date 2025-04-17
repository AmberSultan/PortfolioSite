// import { Geist, Geist_Mono } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  // Optionally specify weights if you need specific ones
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Amber Sultan | Software Engineer | FrontEnd Web Developer",
  description: "Frontend Developer | UI/UX Enthusiast | Expert in React.js & Modern Web Technologies | Passionate about Creating Responsive, User-Centric Web Applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body
        className={`${robotoMono.variable} ${robotoMono.variable} antialiased 
        border-[15px] 
          border-blue-500 
          dark:border-teal-700
          min-h-screen 
          sm:border-[28px] 
          border-4`}
      > */}
         <body className={`${robotoMono.variable} antialiased min-h-screen relative`}>
         <div className="fixed inset-0 border-[15px] border-blue-500 dark:border-teal-700 sm:border-[28px] pointer-events-none z-50" />
         <div className="relative z-10 h-full">
        {children}
        </div>
      </body>
    </html>
  );
}
