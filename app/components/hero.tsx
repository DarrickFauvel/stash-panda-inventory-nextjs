import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function HeroComponent() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/images/stash-panda-logo-lg.jpg"
          className="w-full max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-balance">
            Organize Every Corner of Your Home
            <br />
            The Smart Way
          </h1>
          <p className="py-6">
            Stash Panda helps you catalog storage bins, shelves, rooms, and //
            everything you stash away.
          </p>
          <div className="flex gap-6">
            <SignedOut>
              <SignInButton>
                <button className="btn">Sign In</button>
              </SignInButton>
              <SignUpButton>
                <button className="btn btn-primary">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
}
