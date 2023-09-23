import Nav from "../Navigation/Nav";

export default function Layout({ children }) {
  return (
    <main className="flex main min-h-screen flex-col items-center p-24 scroll-container">
      <h1>On Scroll Animations</h1>
      <p>Meal&apos;s Ready!!! 🥣</p>
      <Nav />
      {children}
    </main>
  );
}
