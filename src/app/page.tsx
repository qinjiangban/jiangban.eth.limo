import Profile from "@/components/home/Profile";
import SocialLogo from "@/components/home/SocialLogo";
import SocialLinks from "@/components/home/SocialLinks";
import HumanReadableProfile from "@/components/home/HumanReadableProfile";
import SiteBadge from "@/components/home/SiteBadge";
import NavLink from "@/components/home/NavLink";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col font-sans selection:bg-brand selection:text-white">
      <main className="mx-auto flex w-full max-w-150 flex-col items-center gap-6 px-4 pt-4 pb-8">
        <Profile />

        <SocialLinks />
        <SocialLogo />
        
        <HumanReadableProfile />
        <NavLink />

        <div className="flex flex-col items-center gap-1">
          <SiteBadge />
        </div>
      </main>
    </div>
  );
}
