import { useState } from 'react';
import styled from 'styled-components';
import { AppBar } from '../UI/AppBar/AppBar';
import { Sidebar } from '../UI/Sidebar/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: var(--background-main);
`;

const MainContent = styled.main<{ isSidebarCollapsed: boolean }>`
  padding: 8rem 2.4rem 2.4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1023px) {
    padding: 7.2rem 1.6rem 1.6rem;
  }

  @media (min-width: 1024px) {
    margin-left: ${({ isSidebarCollapsed }) => (isSidebarCollapsed ? '72px' : '280px')};
    transition: margin-left 0.3s ease;
  }
`;

export const MainLayout = ({ children }: MainLayoutProps) => {
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
            label: 'Inicio',
            isActive: true,
          },
        ]}
        isOpen={isSidebarOpen} 
        isCollapsed={isSidebarCollapsed}
        onClose={() => setIsSidebarOpen(false)} 
      />
      <AppBar 
        title="Tus cobros" 
        onMenuClick={handleToggleSidebar}
        onToggleSidebar={handleToggleCollapse}
        isSidebarCollapsed={isSidebarCollapsed}
        userName="John Doe"
      />
      <MainContent isSidebarCollapsed={isSidebarCollapsed}>
        {children}
      </MainContent>
    </LayoutContainer>
  );
}; 