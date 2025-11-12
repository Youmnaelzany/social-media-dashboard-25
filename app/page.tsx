import OverView from "@/components/OverView";
import Total from "@/components/Total";

export default function Home() {
  return (
    <main className="min-h-screen px-7 py-8 md:px-16 lg:px-16 lg:py-12">
      <Total />
      <OverView />
    </main>
  );
}
