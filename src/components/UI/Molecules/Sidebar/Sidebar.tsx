import { Typography } from '../../Atoms/Typography';
import {
   Logo,
   NavIcon,
   NavItem,
   Overlay,
   SidebarContainer,
   SidebarContent,
   SidebarFooter,
   SidebarFooterText,
   SidebarHeader,
   StoreImage,
} from './Sidebar.styles';

export interface SidebarItem {
   id: string;
   href: string;
   icon?: React.ReactNode;
   label: string;
   isActive: boolean;
}

interface SidebarProps {
   isOpen: boolean;
   isCollapsed: boolean;
   onClose: () => void;
   items: SidebarItem[];
}

export const Sidebar = ({ items, isOpen, isCollapsed, onClose }: SidebarProps) => {
   return (
      <>
         <SidebarContainer isOpen={isOpen} isCollapsed={isCollapsed}>
            <SidebarHeader isCollapsed={isCollapsed}>
               <Logo
                  src={isCollapsed ? '/icons/uala-logo-only.svg' : '/icons/uala-logo.svg'}
                  alt="ualá"
                  isCollapsed={isCollapsed}
                  style={{ transition: 'all 0.3s ease' }}
               />
            </SidebarHeader>
            <SidebarContent isCollapsed={isCollapsed}>
               {items.map(item => (
                  <NavItem
                     key={`sidebar-item-${item.id}`}
                     href={item.href}
                     className={item.isActive ? 'active' : ''}
                     isCollapsed={isCollapsed}
                     isActive={item.isActive}
                  >
                     {item.icon && <NavIcon>{item.icon}</NavIcon>}
                     {!isCollapsed && <Typography color="inherit">{item.label}</Typography>}
                  </NavItem>
               ))}
            </SidebarContent>
            <SidebarFooter isCollapsed={isCollapsed}>
               <SidebarFooterText variant="h3" isCollapsed={isCollapsed}>
                  Descargá la app desde
               </SidebarFooterText>
               <a
                  href="https://play.google.com/store/apps/details?id=ar.com.bancar.uala"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <StoreImage
                     src="/icons/google-play.svg"
                     alt="Google Play"
                     isCollapsed={isCollapsed}
                  />
               </a>
               <a
                  href="https://apps.apple.com/ar/app/ual%C3%A1/id1279808159"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <StoreImage
                     src="/icons/apple-store.svg"
                     alt="Apple Store"
                     isCollapsed={isCollapsed}
                  />
               </a>
            </SidebarFooter>
         </SidebarContainer>
         <Overlay isOpen={isOpen} onClick={onClose} />
      </>
   );
};
