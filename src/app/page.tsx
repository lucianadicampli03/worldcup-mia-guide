import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div id="top">
        <Navbar />
      </div>

      <main>
        <Hero />

        {/* Temporary — remove when real sections are built */}
        <section id="explore" className="min-h-[50vh] bg-miami-sand p-8">
          <h2 className="text-2xl font-bold">Explore (placeholder)</h2>
        </section>
        <section id="food" className="min-h-[50vh] bg-white p-8">
          <h2 className="text-2xl font-bold">Food (placeholder)</h2>
        </section>
        <section id="survival" className="min-h-[50vh] bg-miami-sand p-8">
          <h2 className="text-2xl font-bold">Survival (placeholder)</h2>
        </section>
        <section id="assistant" className="min-h-[50vh] bg-white p-8">
          <h2 className="text-2xl font-bold">Assistant (placeholder)</h2>
        </section>
      </main>

      <Footer />
    </>
  );
}