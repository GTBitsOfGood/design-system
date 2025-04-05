import React, { useState, useEffect, useRef } from 'react';
import { DropdownMenu } from 'radix-ui';
import styles from './styles.module.css';
import BogIcon from '../BogIcon/BogIcon';
import BogCheckbox from '../BogCheckbox/BogCheckbox';
import { BogRadioItem } from '../BogRadioItem/BogRadioItem';
import { BogRadioGroup } from '../BogRadioGroup/BogRadioGroup';
import { CheckedState } from '@radix-ui/react-checkbox';

interface BogDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'normal' | 'checkbox' | 'radio' | 'search';
  options: string[];
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  onSelectionChange?: (selection: string | string[]) => void;
}

export default function BogDropdown({
  type = 'normal',
  options,
  name,
  label,
  placeholder,
  disabled = false,
  onSelectionChange,
  style,
  className,
}: BogDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | string[]>(type === 'checkbox' ? [] : '');
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [triggerWidth, setTriggerWidth] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, [isOpen]);

  const openInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setIsOpen(true);
    }
  };

  const handleSelect = (e: Event | React.FormEvent<HTMLButtonElement> | CheckedState | string, value: string) => {
    let newSelected = selected;
    if (type === 'checkbox') {
      const checked = e as CheckedState;
      if (Array.isArray(selected)) {
        if (checked === true) {
          if (!selected.includes(value)) {
            newSelected = [...selected, value];
          }
          setSelected(newSelected);
        } else if (checked === false) {
          newSelected = selected.filter((item) => item !== value);
          setSelected(newSelected);
        }
      } else {
        newSelected = value;
        setSelected(newSelected);
      }
    } else {
      newSelected = value;
      setSelected(newSelected);
    }
    if (onSelectionChange) {
      onSelectionChange(newSelected);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (type === 'checkbox') {
      setSelected([]);
      if (onSelectionChange) {
        onSelectionChange([]);
      }
    } else {
      setSelected('');
      if (onSelectionChange) {
        onSelectionChange('');
      }
    }
    if (type === 'search') {
      setFilter('');
    }
  };

  const hasValues = () => {
    if (Array.isArray(selected)) {
      return selected.length > 0;
    }
    return selected != '';
  };

  const renderItems = (): React.ReactElement[] => {
    if (type === 'search') {
      return options
        .filter((option) => option.includes(filter))
        .map((option) => (
          <DropdownMenu.Item onSelect={(e) => handleSelect(e, option)} className={styles.dropdownItem} key={option}>
            {option}
          </DropdownMenu.Item>
        ));
    } else if (type === 'checkbox') {
      return options.map((option) => (
        <DropdownMenu.Item onSelect={(e) => e.preventDefault()} className={styles.dropdownItem} key={option}>
          <BogCheckbox
            name={option}
            label={option}
            checked={Array.isArray(selected) && selected.includes(option)}
            onCheckedChange={(e) => handleSelect(e, option)}
          />
        </DropdownMenu.Item>
      ));
    } else if (type === 'radio') {
      return options.map((option) => (
        <DropdownMenu.Item onSelect={(e) => e.preventDefault()} className={styles.dropdownItem} key={option}>
          <BogRadioItem key={option} value={option} label={option} checked={selected === option} />
        </DropdownMenu.Item>
      ));
    } else {
      return options.map((option) => (
        <DropdownMenu.Item onSelect={(e) => handleSelect(e, option)} className={styles.dropdownItem} key={option}>
          {option}
        </DropdownMenu.Item>
      ));
    }
  };

  return (
    <div className={`${styles.dropdownContainer} ${className}`} style={style}>
      <label className={styles.label}>{label}</label>
      <DropdownMenu.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenu.Trigger
          ref={triggerRef}
          className={styles.trigger}
          data-disabled={disabled}
          disabled={disabled}
          onClick={() => openInput()}
        >
          {type === 'search' ? (
            <>
              <input
                type="text"
                ref={inputRef}
                value={filter}
                name={name}
                placeholder={
                  selected.length > 0 ? (Array.isArray(selected) ? selected.join(', ') : selected) : placeholder
                }
                className={styles.searchInput}
                onKeyDown={(e) => e.stopPropagation()}
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              />
              <div className={styles.iconHolder}>
                {hasValues() && (
                  <span onClick={handleClear} role="button">
                    <BogIcon name="x" size={14} className={styles.clearIcon} />
                  </span>
                )}
                <BogIcon name="search" size={16} className={styles.icon} />
              </div>
            </>
          ) : (
            <>
              {selected.length > 0 ? (Array.isArray(selected) ? selected.join(', ') : selected) : placeholder}
              <div className={styles.iconHolder}>
                {hasValues() && (
                  <span onClick={handleClear} role="button" aria-label="Clear selection">
                    <BogIcon name="x" size={14} className={styles.clearIcon} />
                  </span>
                )}
                {isOpen ? (
                  <BogIcon name="caret-up" size={16} className={styles.icon} />
                ) : (
                  <BogIcon name="caret-down" size={16} className={styles.icon} />
                )}
              </div>
            </>
          )}
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          align="start"
          sideOffset={4}
          className={styles.dropdownContent}
          style={{ width: triggerWidth || 'auto' }}
        >
          {type === 'radio' ? (
            <BogRadioGroup
              value={Array.isArray(selected) ? selected.join(', ') : selected}
              onValueChange={(e) => handleSelect(e, e)}
            >
              {renderItems()}
            </BogRadioGroup>
          ) : (
            <>{renderItems()}</>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
