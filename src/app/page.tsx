import Profile from "@/components/Profile";
import SocialLogo from "@/components/SocialLogo";
import SocialLinks from "@/components/SocialLinks";
import HumanReadableProfile from "@/components/HumanReadableProfile";
import SiteBadge from "@/components/SiteBadge";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen items-center py-8 px-4 font-sans selection:bg-brand selection:text-white">


      <main className="w-full max-w-[600px] flex flex-col items-center gap-6">

        <Profile />

        <SocialLinks />

        <SocialLogo />


        <HumanReadableProfile />



        <div className="flex flex-col items-center gap-1">
          <SiteBadge />
        </div>
      </main>

    </div>
  );
}
