"use client";
import {Header} from "./Header";
import Footer from "./Footer";

export const DefaultLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      document.getElementById("input-search")?.focus();
    }
  };

  return (
    <main
      className={`ease-soft-in-out relative h-full transition-all duration-200`}
    >
      <div className="w-full" onKeyDown={handleKeyPress} tabIndex={50}>
        <Header />
        <div className="relative mx-auto min-h-[90vh]  w-full" id="box">
          {children}
        </div>
        <Footer />
      </div>
    </main>
  );
};
