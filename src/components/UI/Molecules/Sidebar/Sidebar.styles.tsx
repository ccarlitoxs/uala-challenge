import styled, { css } from 'styled-components';
import { Typography } from '../../Atoms/Typography';

export const SidebarContainer = styled.aside<{ isOpen: boolean; isCollapsed: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ isCollapsed }) => (isCollapsed ? '7.2rem' : '28rem')};
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: all 0.3s ease;
  background-color: var(--background-drawer);
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.05);
  z-index: 1100;

  @media (min-width: 1024px) {
    transform: none;
  }
`;

export const SidebarHeader = styled.div<{ isCollapsed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ isCollapsed }) => (isCollapsed ? 'center' : 'flex-start')};
  padding: ${({ isCollapsed }) => (isCollapsed ? '1.6rem 0.8rem' : '1.6rem 2.4rem')};
  height: 8rem;
`;

export const Logo = styled.img<{ isCollapsed: boolean }>`
  height: ${({ isCollapsed }) => (isCollapsed ? '2.4rem' : '3.2rem')};
  width: auto;
`;

export const SidebarContent = styled.nav<{ isCollapsed: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${({ isCollapsed }) => (isCollapsed ? '2rem 0.8rem' : '2rem')};
`;

export const NavItem = styled.a<{ isCollapsed: boolean; isActive: boolean }>`
  display: flex;
  align-items: center;
  background-color: var(--background-drawer);
  justify-content: ${({ isCollapsed }) => (isCollapsed ? 'center' : 'flex-start')};
  gap: 1.2rem;
  padding: 1.2rem 0;
  border-radius: 0.8rem;
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? 'var(--primary-light)' : 'var(--text-disabled)')};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  &.focused {
    background-color: #f0f0f0;
  }
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  z-index: 1050;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const SidebarFooter = styled.div<{ isCollapsed: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  margin-bottom: 4rem;
`;

export const StoreImage = styled.img<{ isCollapsed: boolean }>`
  width: 13.6rem;
  height: 4rem;
  object-fit: cover;
  transition: all 0.6s ease;

  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      display: none;
    `}
`;

export const SidebarFooterText = styled(Typography)<{ isCollapsed: boolean }>`
  color: var(--text-disabled);
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      display: none;
    `}
`;
