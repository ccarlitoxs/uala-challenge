import styled from 'styled-components';

export const LayoutContainer = styled.div`
    min-height: 100vh;
    background-color: var(--background-main);
`;

export const MainContent = styled.main<{ isSidebarCollapsed: boolean }>`
    padding: 8rem 2.4rem 2.4rem;
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        padding: 7.2rem 1.6rem 1.6rem;
    }

    @media (min-width: 1024px) {
        margin-left: ${({ isSidebarCollapsed }) => (isSidebarCollapsed ? '72px' : '280px')};
        transition: margin-left 0.3s ease;
    }
`;
