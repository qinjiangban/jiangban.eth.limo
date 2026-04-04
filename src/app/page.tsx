import Profile from "@/components/Profile";
import SocialLogo from "@/components/SocialLogo";
import SocialLinks from "@/components/SocialLinks";
import Badge from "@/components/Badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center py-16 px-4 font-sans selection:bg-brand selection:text-white">
      <main className="w-full max-w-[600px] flex flex-col items-center gap-6">

        <Profile />

        <SocialLinks />

        <SocialLogo />

        <Badge />
        
      </main>
    </div>
  );
}
