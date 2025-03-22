import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-center">This is a brief introduction about myself.</p>
      </div>

      
      <Footer />
    </div>
  );
}
