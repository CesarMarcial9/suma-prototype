import Navbar from "./navbar";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grid flex-1 grid-rows-1 gap-4 p-6 lg:grid-cols-6 bg-primary">
        <Navbar />
        <div className="p-4 lg:p-12 lg:h-full">{children}</div>
      </body>
    </html>
  );
}
