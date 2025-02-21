import ActivitiesSidebar from "@/components/ActivitiesSidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "আমাদের কার্যক্রম",
  description: "Generated by Arafat Foundation",
};

export default function ActivitiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-[#FCFCFD] mt-36">
      <div className="md:mx-20 bg-[#FCFCFD] md:my-4 py-2 mt-3">
        <div className="flex bg-[#FCFCFD] md:flex-row flex-col gap-4">
          <div className="basis-1/5">
            <ActivitiesSidebar />
          </div>
          <div className=" md:px-2bg-[#FCFCFD]  rounded-md border-[2px] px-1 py-2 basis-4/5">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
