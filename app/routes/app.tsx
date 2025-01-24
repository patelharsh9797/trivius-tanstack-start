import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
  component: RouteComponent,
  beforeLoad: ({ context }) => {
    if (!context.user) {
      return redirect({ to: "/signin", statusCode: 307 });
    }

    return { user: context.user };
  },
});

function RouteComponent() {
  const { user } = Route.useRouteContext();
  return (
    <main className="flex items-center justify-center container mx-auto min-h-screen p-4">
      <div>Hello {user}</div>
    </main>
  );
}
