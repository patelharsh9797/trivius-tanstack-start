import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <main className="flex items-center justify-center container mx-auto min-h-screen p-4">
      <Outlet />
    </main>
  );
}
