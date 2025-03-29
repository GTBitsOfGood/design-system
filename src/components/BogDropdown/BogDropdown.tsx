import React, { useState, useEffect, useRef } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import BogCheckbox from '../BogCheckbox/BogCheckbox';
import { BogRadioGroup } from '../BogRadioGroup/BogRadioGroup';
import { BogRadioItem } from '../BogRadioItem/BogRadioItem';
import BogIcon from '../BogIcon/BogIcon';
import styles from './styles.module.css';

export interface BogDropdownProps {
  type: 'normal' | 'checkbox' | 'radio' | 'search';
  options: string[];
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  onSelectionChange?: (selection: string | string[]) => void;
}

const BogDropdown: React.FC<BogDropdownProps> = ({
  type,
  options,
  placeholder = 'Placeholder',
  className = '',
  style = {},
  disabled = false,
  onSelectionChange,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (type === 'search') {
      setFilteredOptions(options.filter((option) => option.toLowerCase().includes(searchValue.toLowerCase())));
    } else {
      setFilteredOptions(options);
    }
  }, [options, searchValue, type]);

  useEffect(() => {
    if (onSelectionChange) {
      if (type === 'checkbox') {
        onSelectionChange(selected);
      } else {
        onSelectionChange(selected[0] || '');
      }
    }
  }, [selected, type, onSelectionChange]);

  const handleSelect = (option: string) => {
    if (type === 'checkbox') {
      const newSelected = selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option];
      setSelected(newSelected);
    } else {
      setSelected([option]);
      if (type !== 'search') {
        setOpen(false);
      }
      if (type === 'search') {
        setSearchValue(option);
        setOpen(false);
      }
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (!open) {
      setOpen(true);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredOptions.length > 0) {
        handleSelect(filteredOptions[0]);
      }
    }
  };

  const handleSearchFocus = () => {
    if (type === 'search' && !open) {
      setOpen(true);
    }
  };

  const renderSearchInput = () => {
    if (type !== 'search') return null;

    return (
      <div
        className={`${styles.bogDropdownTrigger} ${disabled ? styles.bogDropdownDisabled : ''}`}
        onClick={() => !disabled && setOpen(true)}
      >
        <div className={styles.bogDropdownSearchContainer}>
          <input
            ref={inputRef}
            type="text"
            className={styles.bogDropdownSearchInputField}
            value={searchValue}
            onChange={handleSearchChange}
            onFocus={handleSearchFocus}
            onKeyDown={handleSearchKeyDown}
            placeholder={placeholder}
            disabled={disabled}
          />
          <BogIcon
            name="search"
            size={16}
            className={styles.bogDropdownIcon}
            onClick={() => !disabled && setOpen(true)}
          />
        </div>
      </div>
    );
  };

  const displayText = selected.length > 0 ? selected.join(', ') : placeholder;

  return (
    <div className={`${styles.bogDropdownBox} ${className}`} style={style}>
      {type === 'search' ? (
        // trying custom separate implementation for search
        <>
          {renderSearchInput()}
          {open && (
            <div className={styles.bogDropdownContent}>
              {filteredOptions.map((option, index) => (
                <div
                  key={index}
                  className={`${styles.bogDropdownItem} ${selected.includes(option) ? styles.bogDropdownItemSelected : ''}`}
                  onClick={() => {
                    handleSelect(option);
                    if (inputRef.current) {
                      inputRef.current.focus();
                    }
                  }}
                >
                  <div className={styles.bogDropdownItemContent}>
                    <span className={styles.bogDropdownItemText}>{option}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        // Radix UI implementation for this part (was v buggy for search)
        <DropdownMenu.Root open={open} onOpenChange={setOpen}>
          <DropdownMenu.Trigger
            ref={triggerRef}
            className={`${styles.bogDropdownTrigger} ${disabled ? styles.bogDropdownDisabled : ''}`}
            disabled={disabled}
          >
            <div className={styles.bogDropdownTriggerContent}>
              <span className={styles.bogDropdownTriggerText}>{displayText}</span>
              <BogIcon name="caret-down" size={16} className={styles.bogDropdownIcon} />
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content className={styles.bogDropdownContent} sideOffset={4} align="start">
              {type === 'radio' ? (
                <BogRadioGroup value={selected[0] || ''} onChange={(option) => handleSelect(option)}>
                  {filteredOptions.map((option, index) => (
                    <DropdownMenu.Item
                      key={index}
                      className={`${styles.bogDropdownItem} ${selected.includes(option) ? styles.bogDropdownItemSelected : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSelect(option);
                      }}
                    >
                      <div className={styles.bogDropdownRadioContent}>
                        <BogRadioItem value={option} id={`radio-${index}`} />
                        <span className={styles.bogDropdownItemText}>{option}</span>
                      </div>
                    </DropdownMenu.Item>
                  ))}
                </BogRadioGroup>
              ) : (
                filteredOptions.map((option, index) => (
                  <DropdownMenu.Item
                    key={index}
                    className={`${styles.bogDropdownItem} ${selected.includes(option) ? styles.bogDropdownItemSelected : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelect(option);
                    }}
                  >
                    {type === 'checkbox' && (
                      <div className={styles.bogCheckboxContainer}>
                        <BogCheckbox
                          id={`checkbox-${index}`}
                          checked={selected.includes(option)}
                          onChange={() => handleSelect(option)}
                        />
                        <span className={styles.bogDropdownItemText}>{option}</span>
                      </div>
                    )}
                    {type === 'normal' && (
                      <div className={styles.bogDropdownItemContent}>
                        <span className={styles.bogDropdownItemText}>{option}</span>
                      </div>
                    )}
                  </DropdownMenu.Item>
                ))
              )}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      )}
    </div>
  );
};

export default BogDropdown;
