import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
  component: Home,
});

function Home() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold tracking-tight">Trivius!</h1>
      <p>A trivia a game to be played at in-person meetups!</p>
      <Button>
        <Icons.github className="" />
        Continue with GitHub
      </Button>
    </section>
  );
}
