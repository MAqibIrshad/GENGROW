'use client'

import { BarChart, Compass, Layout, List, Brain, Send, Headset} from 'lucide-react'
import { usePathname } from 'next/navigation'
import { SidebarItem } from './sidebar-item'
// Define the link structures for both paradigms
const guestRoutes = [
  { label: "Dashboard", href: "/", icon: Layout },
  { label: "Search", href: "/search", icon: Compass },
  { label: "Keep", href: "/keep", icon: Lightbulb },
  { label: "Deep", href: "/deep", icon: Brain },
  { label: "Room", href: "/room", icon: Video },
];

const teacherRoutes = [
  { label: "Courses", href: "/teacher/courses", icon: List },
  { label: "Analytics", href: "/teacher/analytics", icon: BarChart },
  { icon: Video, label: "Meet", href: "/teacher/meet" },
  { icon: Bot, label: "Quiz Agent", href: "/teacher/quizagent" },
  { icon: MessageSquare, label: "Thread", href: "/teacher/thread" },
];
export const SidebarRoutes = () => {
  const pathname = usePathname()

  const isTeacherPage = pathname?.startsWith('/teacher')

  const routes = isTeacherPage ? teacherRoutes : guestRoutes
  return (
    <div className="flex w-full flex-col">
      {routes.map((route) => (
        <SidebarItem key={route.href} icon={route.icon} label={route.label} href={route.href} />
      ))}
    </div>
  )
}
