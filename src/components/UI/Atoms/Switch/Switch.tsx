import { SwitchContainer, SwitchInput, SwitchSlider } from './Switch.styles';

interface SwitchProps {
    checked: boolean;
    onChange: () => void;
    disabled?: boolean;
}

export const Switch = ({ checked, onChange, disabled = false }: SwitchProps) => {
    return (
        <SwitchContainer>
            <SwitchInput
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <SwitchSlider checked={checked} disabled={disabled} />
        </SwitchContainer>
    );
}; 