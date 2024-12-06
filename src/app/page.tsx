import { Header, Photos, Footer } from "@/src/components";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center w-full">
      <Header />
      <Photos />
      <Footer />
    </div>
  );
}
