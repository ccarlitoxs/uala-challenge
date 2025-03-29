import { ReactNode, useEffect, useRef } from 'react';
import { Typography } from '../../Atoms/Typography';
import { ButtonPresets } from '../../Atoms/Button';
import { ArrowLeftIcon } from '@/assets/Icons/ArrowLeftIcon';
import { DrawerContainer, DrawerContent, DrawerHeader, DrawerFooter, BackButton, Overlay } from './Drawer.styles';

export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children?: ReactNode;
    onApply?: () => void;
}

export const Drawer = ({ isOpen, onClose, title, children, onApply }: DrawerProps) => {
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <>
            {isOpen && <Overlay />}
            <DrawerContainer ref={drawerRef} isOpen={isOpen}>
                <DrawerHeader>
                    <BackButton onClick={onClose}>
                        <ArrowLeftIcon color="var(--primary)" />
                    </BackButton>
                    <Typography variant="h2">{title}</Typography>
                </DrawerHeader>
                <DrawerContent>{children}</DrawerContent>
                <DrawerFooter>
                    <ButtonPresets.RoundedPrimaryButton onClick={onApply} fullWidth>
                        Aplicar filtros
                    </ButtonPresets.RoundedPrimaryButton>
                </DrawerFooter>
            </DrawerContainer>
        </>
    );
};
