import { Header, Photos, Footer } from "@/src/components";

export default async function Home() {
  return (
    <div className="px-2 md:px-8 w-full justify-center">
      <Header />
      <Photos />
      <Footer />
    </div>
  );
}
