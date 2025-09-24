import NextDynamic from "next/dynamic";

export const dynamic = "force-dynamic"; // special Next.js config (not the import)

// Use renamed import for client-only components
const Announcements = NextDynamic(() => import("@/components/Announcements"), { ssr: false });
const AttendanceChartContainer = NextDynamic(() => import("@/components/AttendanceChartContainer"), { ssr: false });
const CountChartContainer = NextDynamic(() => import("@/components/CountChartContainer"), { ssr: false });
const EventCalendarContainer = NextDynamic(() => import("@/components/EventCalendarContainer"), { ssr: false });
const FinanceChart = NextDynamic(() => import("@/components/FinanceChart"), { ssr: false });
const UserCard = NextDynamic(() => import("@/components/UserCard"), { ssr: false });

export default function AdminPage({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="admin" />
          <UserCard type="teacher" />
          <UserCard type="student" />
          <UserCard type="parent" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChartContainer />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChartContainer />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendarContainer searchParams={searchParams} />
        <Announcements />
      </div>
    </div>
  );
}
