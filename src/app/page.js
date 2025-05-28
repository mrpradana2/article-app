import HeroLandingPage from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center px-5 md:px-16 font-[family-name:var(--font-archivo)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <HeroLandingPage />
      </main>
    </div>
  );
}
