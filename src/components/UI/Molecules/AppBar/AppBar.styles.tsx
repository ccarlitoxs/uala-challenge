import styled from 'styled-components';
import { IconButton } from '../../Atoms/Button/presets/IconButton';
import { Typography } from '../../Atoms/Typography';

export const AppBarContainer = styled.header<{ isSidebarCollapsed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
  background-color: var(--background-header);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  height: 8rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  @media (max-width: 1024px) {
    padding: 1.6rem;
    height: 5.6rem;
  }

  @media (min-width: 1024px) {
    left: ${({ isSidebarCollapsed }) => (isSidebarCollapsed ? '72px' : '280px')};
    transition: left 0.3s ease;
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: flex;
  }

  @media (min-width: 1024px) {
    .desktop {
      display: flex;
    }

    .mobile {
      display: none;
    }
  }
`;

export const AppBarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  min-width: 4rem;
`;

export const Logo = styled.img`
  height: 4rem;
  width: auto;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const MenuButton = styled(IconButton)`
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ToggleSidebarButton = styled(IconButton)`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const Title = styled(Typography)`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const Avatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

