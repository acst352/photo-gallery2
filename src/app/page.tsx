import { Header, Photos, Footer } from "@/src/components";

export default async function Home() {
  return (
    <div className="m-10">
      <Header />
      <Photos />
      <Footer />
    </div>
  );
}
