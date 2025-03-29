import React from 'react';
import { ChipsSelectContainer, ChipButton, CloseIcon } from './ChipsSelect.styles';

export interface ChipOption {
  value: string;
  label: string;
}

interface ChipsSelectProps {
  options: ChipOption[];
  selectedValues: string[];
  placeholder?: string;
  onChange?: (values: string[] | string) => void;
  multiple?: boolean;
}

export const ChipsSelect: React.FC<ChipsSelectProps> = ({
  options,
  selectedValues,
  placeholder,
  onChange,
  multiple = true,
}) => {
  const handleChipClick = (value: string) => {
    if (!multiple) {
      onChange?.(value);
      return;
    }

    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];

    onChange?.(newSelectedValues);
  };

  const isSelected = (value: string) => selectedValues.includes(value);

  return (
    <ChipsSelectContainer>
      {placeholder && (
        <ChipButton
          selected={selectedValues.length === 0}
          onClick={() => onChange?.([])}
        >
          {placeholder}
        </ChipButton>
      )}
      {options.map((option) => (
        <ChipButton
          key={option.value}
          selected={isSelected(option.value)}
          onClick={() => handleChipClick(option.value)}
        >
          {option.label}
          {isSelected(option.value) && <CloseIcon src="/icons/close-icon.svg" />}
        </ChipButton>
      ))}
    </ChipsSelectContainer>
  );
};
