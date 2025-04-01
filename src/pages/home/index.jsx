import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <div>Loading...</div>; // Wait for session to load
  if (!session) {
    router.push("/login"); // Redirect to login if not logged in
    return null; // Don't render the page while redirecting
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Home Page</h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome, {session.user.name}!
        </p>

        {/* Logout Button */}
        <button
          onClick={() => signOut({ callbackUrl: "/login" })} // Redirects to login after logout
          className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
