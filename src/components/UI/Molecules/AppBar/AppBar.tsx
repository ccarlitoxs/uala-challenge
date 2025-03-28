import { Typography } from '../../Atoms/Typography';
import { ChevronIcon, MenuIcon } from '@/assets/Icons';
import {
   AppBarContainer,
   AppBarSection,
   MenuButton,
   ToggleSidebarButton,
   Logo,
   Avatar,
   AvatarImage,
} from './AppBar.styles';

interface AppBarProps {
   userName?: string;
   isSidebarCollapsed?: boolean;
   onMenuClick?: () => void;
   onToggleSidebar?: () => void;
}

export const AppBar = ({
   onMenuClick,
   onToggleSidebar,
   userName,
   isSidebarCollapsed = false,
}: AppBarProps) => {
   return (
      <AppBarContainer isSidebarCollapsed={isSidebarCollapsed}>
         <AppBarSection className="left">
            <MenuButton onClick={onMenuClick}>
               <MenuIcon />
            </MenuButton>
            <ToggleSidebarButton onClick={onToggleSidebar}>
               <ChevronIcon collapsed={isSidebarCollapsed} />
            </ToggleSidebarButton>
            <Avatar>
               <AvatarImage src="/images/avatar.png" alt="Avatar" />
            </Avatar>
            {userName && (
               <Typography variant="body1" className="desktop">
                  {userName}
               </Typography>
            )}
         </AppBarSection>
         <AppBarSection className="center">
            <Logo src="/icons/uala-tipo.svg" alt="ualá" />
         </AppBarSection>
         <AppBarSection className="right"></AppBarSection>
      </AppBarContainer>
   );
};
