import { Auth } from "@/components/auth";
import { useMutation } from "@/hooks/use-mutation";
import { getSupabaseServerClient } from "@/utils/supabase/server";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";

export const signupFn = createServerFn()
  .validator((d: any) => d as { email: string; password: string })
  .handler(async ({ data }) => {
    const { email, password } = data;

    const supabase = getSupabaseServerClient();

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      return {
        error: signUpError,
        message: "An error happened while signing up...",
      };
    }
  });

export const Route = createFileRoute("/signup")({
  component: SignupPage,
});

function SignupPage() {
  const router = useRouter();

  const signUpMutation = useMutation({
    fn: signupFn,
    onSuccess: async (ctx) => {
      if (!ctx.data?.error) {
        await router.invalidate();
        router.navigate({ to: "/app" });
        return;
      }
    },
  });
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Auth
          actionText="Sign up"
          status={signUpMutation.status}
          onSubmit={(e: any) => {
            const formData = new FormData(e.target as HTMLFormElement);

            signUpMutation.mutate({
              data: {
                email: formData.get("email") as string,
                password: formData.get("password") as string,
              },
            });
          }}
          afterSubmit={
            signUpMutation.data ? (
              <>
                <div className="text-red-400">
                  {signUpMutation.data.message}
                  {signUpMutation.data.error.message}
                </div>
              </>
            ) : null
          }
        />
      </div>
    </div>
  );
}
