import { signOut } from "@/auth";

export function LogoutBtn() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    >
      <button
        type="submit"
        className="px-4 py-2 bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-md text-gray-700 transition-colors"
      >
        Logout
      </button>
    </form>
  );
}
