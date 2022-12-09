import { ReactNode } from "react";
import "./globals.css";
import Header from "./header";

import Navbar from "./navbar";
import Provider from "./provider";
import SigningButton from "./signingButton";

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <body className="h-screen p-4 bg-primary">
        <Provider>
          <div className="flex h-full gap-4">
            {/** left side navigation container */}
            <div className="w-[20vw] rounded-md flex flex-col gap-4 justify-between text-white">
              <Header />

              <Navbar />

              <footer className="flex flex-col gap-2 rounded-md">
                <SigningButton />
                <button className="py-2 border border-white rounded-md">
                  Connect your account
                </button>
                <div className="flex items-center justify-center">
                  <p className="text-xs">Version 0.0.2</p>
                </div>
              </footer>
            </div>

            {/** main container */}
            <div className="flex items-center justify-center flex-1 bg-white rounded-md">
              {children}
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
