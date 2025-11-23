import CoursesEnrolled from "@/components/dashboard-page/courses-enrolled";
import ExploreMore from "@/components/dashboard-page/explore-more-buttons";
import InviteFriend from "@/components/dashboard-page/invite-friend";
import UserStatus from "@/components/dashboard-page/user-status";
import WelcomeBanner from "@/components/dashboard-page/welcome-banner";

const Dashboard = () => {
  return (
    <div className="px-6 md:px-14 lg:px-24 xl:px-40 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <WelcomeBanner />
          <CoursesEnrolled />
          <ExploreMore />
        </div>

        <div className="lg:block">
          <InviteFriend />
          <UserStatus />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
