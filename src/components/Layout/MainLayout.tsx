import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../UI/Molecules/AppBar/AppBar';
import { Sidebar } from '../UI/Molecules/Sidebar/Sidebar';
import { HomeIcon, MetricsIcon } from '@/assets/Icons';
import { LayoutContainer, MainContent } from './MainLayout.styles';

export const MainLayout = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

   const handleToggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
   };

   const handleToggleCollapse = () => {
      setIsSidebarCollapsed(!isSidebarCollapsed);
   };

   return (
      <LayoutContainer>
         <Sidebar
            items={[
               {
                  id: '1',
                  href: '/',
                  icon: <HomeIcon />,
                  label: 'Inicio',
                  isActive: true,
               },
               {
                  id: '2',
                  href: '/metricas',
                  label: 'Métricas',
                  isActive: false,
                  icon: <MetricsIcon />,
               },
            ]}
            isOpen={isSidebarOpen}
            isCollapsed={isSidebarCollapsed}
            onClose={() => setIsSidebarOpen(false)}
         />
         <AppBar
            onMenuClick={handleToggleSidebar}
            onToggleSidebar={handleToggleCollapse}
            isSidebarCollapsed={isSidebarCollapsed}
            userName="Username"
         />
         <MainContent isSidebarCollapsed={isSidebarCollapsed}>
            <Outlet />
         </MainContent>
      </LayoutContainer>
   );
};
