"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/sidebar-item/nav-main";
import { NavUser } from "@/components/sidebar-item/nav-user";
import { TeamSwitcher } from "@/components/sidebar-item/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is updated data.
const data = {
  user: {
    name: "Manish Kumar",
    email: "cs21b1010@iiitr.ac.in",
    avatar: "/avatars/manish.jpg", // 🔄 Replace with actual path if needed
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Articles",
      url: "/dashboard/articles",
      icon: BookOpen,
      isActive: true,
      items: [
        { title: "Create Article", url: "/dashboard/articles/create" },
        { title: "Generated Articles", url: "/dashboard/articles/generated" },
        { title: "Keyword Projects", url: "/dashboard/articles/keywords" },
        {
          title: "AI Keyword to Article",
          url: "/dashboard/articles/ai-keyword",
        },
        {
          title: "Steal Competitor Keyword",
          url: "/dashboard/articles/steal-keyword",
        },
        {
          title: "Import Keyword from GSC",
          url: "/dashboard/articles/gsc-import",
        },
        {
          title: "Manual Keyword to Article",
          url: "/dashboard/articles/manual-keyword",
        },
        {
          title: "Bulk Keyword to Article",
          url: "/dashboard/articles/bulk-keyword",
        },
        {
          title: "Longtail Keyword to Article",
          url: "/dashboard/articles/longtail-keyword",
        },
        { title: "Article Settings", url: "/dashboard/articles/settings" },
      ],
    },
    {
      title: "Auto Blog",
      url: "/dashboard/auto-blog",
      icon: Bot,
      items: [],
    },
    {
      title: "Internal Links",
      url: "/dashboard/internal-links",
      icon: Frame,
      items: [],
    },
    {
      title: "Free Backlinks",
      url: "/dashboard/backlinks",
      icon: AudioWaveform,
      items: [],
    },
    {
      title: "Integrations",
      url: "/dashboard/integrations",
      icon: Command,
      items: [],
    },
    {
      title: "Subscription",
      url: "/dashboard/subscription",
      icon: PieChart,
      items: [],
    },
    {
      title: "Affiliate Program",
      url: "/dashboard/affiliate",
      icon: Map,
      items: [],
    },
    {
      title: "Help Center",
      url: "/dashboard/help",
      icon: SquareTerminal,
      items: [],
    },
    {
      title: "Updates",
      url: "/dashboard/updates",
      icon: GalleryVerticalEnd,
      items: [],
    },
    {
      title: "Live Chat Support",
      url: "/dashboard/live-chat",
      icon: Settings2,
      items: [],
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: BookOpen,
      items: [],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
