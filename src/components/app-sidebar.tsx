import * as React from "react";
import {
  IconCamera,
  IconFileAi,
  IconFileDescription,
  IconPlug,
  IconFile,
  IconLayersLinked,
  IconLink,
  IconFaceId,
  IconStar,
  IconCoin,
  IconInfoCircle,
  IconBell,
  IconChartBubble,
  IconArticle,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Articles",
      url: "#",
      icon: IconArticle,
    },
    {
      title: "Auto Blog",
      url: "#",
      icon: IconFileAi,
    },
    {
      title: "Internal Links",
      url: "#",
      icon: IconLayersLinked,
    },
    {
      title: "Free Backlinks",
      url: "#",
      icon: IconLink,
    },
    {
      title: "Integrations",
      url: "#",
      icon: IconPlug,
    },
    {
      title: "Subscription",
      url: "#",
      icon: IconStar,
    },
    {
      title: "Affiliate Program",
      url: "#",
      icon: IconCoin,
    },
    {
      title: "Help Center",
      url: "#",
      icon: IconInfoCircle,
    },
    {
      title: "Updates",
      url: "#",
      icon: IconBell,
    },
    {
      title: "Live Chat Support",
      url: "#",
      icon: IconChartBubble,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFile,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Profile",
      url: "#",
      icon: IconFaceId,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <span className="text-base font-bold item-center">abun</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} />
      </SidebarContent>
    </Sidebar>
  );
}
