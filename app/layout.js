import "./globals.css";
import Navbar from "./components/Navbar";
import Back from "./components/Back";



export const metadata = {
  title: "Password Manager",
  description: "Store Your Passwords",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Back/>
        {children}
        
      </body>
    </html>
  );
}
