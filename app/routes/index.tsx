import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});
function Home() {
  return (
    <main className="flex items-center justify-center container mx-auto min-h-screen p-4">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Trivius!</h1>
        <p>A trivia game to be played at in-person meetups!</p>
        <Button asChild>
          <Link to="/signin">Get started</Link>
        </Button>
      </section>
    </main>
  );
}
