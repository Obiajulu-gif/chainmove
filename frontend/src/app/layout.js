// app/layout.js
//SHOULD NEVER BE A CLIENT COMPONENT
import "./globals.css";

import LayoutHandler from "./LayoutHandler";

export const metadata = {
  title: "ChainMove",
  description: "The decentralized transport system on Internet Computer Blockchain",
  icons: {
    icon: "/images/blockridelogo.svg", 
    
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     
          <LayoutHandler>{children}</LayoutHandler>
      
      </body>
    </html>
  );
}

