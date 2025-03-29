import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../UI/Molecules/AppBar/AppBar';
import { Sidebar } from '../UI/Molecules/Sidebar/Sidebar';
import { HomeIcon, MetricsIcon } from '@/assets/Icons';
import { LayoutContainer, MainContent } from './MainLayout.styles';
import { Toaster } from 'sonner';
import "react-datepicker/dist/react-datepicker.css";

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
            <AppBar onMenuClick={handleToggleSidebar} onToggleSidebar={handleToggleCollapse} isSidebarCollapsed={isSidebarCollapsed} userName="Username" />
            <MainContent isSidebarCollapsed={isSidebarCollapsed}>
                <Outlet />
            </MainContent>
            <Toaster
                position="bottom-right"
                duration={2000}
                expand={false}
                richColors={true}
                theme="light"
                toastOptions={{
                    style: {
                        borderRadius: '0.8rem',
                        fontSize: '1.4rem',
                        padding: '1.2rem 1.6rem',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        backgroundColor: 'var(--primary)',
                        color: 'var(--text-secondary)',
                    },
                    classNames: {
                        success: 'toast-success',
                        error: 'toast-error',
                        warning: 'toast-warning',
                        info: 'toast-info',
                    },
                }}
            />
        </LayoutContainer>
    );
};
