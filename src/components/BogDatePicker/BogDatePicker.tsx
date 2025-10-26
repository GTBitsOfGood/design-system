import React, { ReactNode, Dispatch, SetStateAction, useState } from 'react';
import {
  DayPicker,
  Matcher,
  getDefaultClassNames,
  PropsSingle,
} from 'react-day-picker';
import 'react-day-picker/style.css';
import styles from './styles.module.css';

type SelectedState = {
  selected: Date | undefined;
  setSelected: Dispatch<SetStateAction<Date | undefined>>;
};

type BogDatePickerProps = Omit<PropsSingle, 'mode'> & {
  /** The layout style of the caption (month and year). Options include:
   *  - `"label"`: Displays month and year as a label.
   *  - `"dropdown"`: Displays both month and year as dropdowns.
   *  - `"dropdown-months"`: Displays month as a dropdown and year as a label.
   *  - `"dropdown-years"`: Displays year as a dropdown and month as a label.
   */
  captionLayout?: 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years';
  /** Whether to display the list of years in reverse chronological order (from newest to oldest). */
  reverseYears?: boolean;
  /** The position of the navigation arrows. Options are:
   *  - `"around"`: Places arrows on either side of the caption.
   *  - `"after"`: Places arrows on the right after the caption.
   */
  navLayout?: 'around' | 'after';
  /** Whether to always display 6 weeks per month view, including any trailing spaces. */
  fixedWeeks?: boolean;
  /** Custom content displayed below the calendar. If none provided, a default footer will be shown. */
  footer?: ReactNode;
  /** Whether to hide the weekday header row (e.g., Mon, Tue, Wed) */
  hideWeekdays?: boolean;
  /** Displays months in reverse order when showing multiple months side by side. */
  reverseMonths?: boolean;
  /** Whether to display the list of months in reverse chronological order (from newest to oldest). */
  showOutsideDays?: boolean;
  /** Whether to show the week number at the start of each week row. */
  showWeekNumber?: boolean;
  /** Marks the field as required for form validation. */
  required?: boolean;
  /** Specifies which days should be disabled and unselectable.
   * Can accept a single matcher, an array of matchers, or a function.
   */
  disabled?: Matcher;
  /** Controls the selected date state externally.
   * Accepts an object with `{ selected, setSelected }`, typically from React’s `useState`.
   * If not provided, the component will manage its own internal selected state.
   */
  selectedState?: SelectedState;
  /** Additional class names to apply styles to the date picker. These can be tailwind classes or custom CSS classes. */
  className?: string;
  /** Additional CSS styles to apply to the date picker. */
  style?: React.CSSProperties;
};

const defaultFooter = (
  <footer>
    <p className={`${styles.footerText} text-small`}>Pick a day.</p>
  </footer>
);

export default function BogDatePicker({
  captionLayout = 'label',
  reverseYears = true,
  navLayout = 'after',
  fixedWeeks = false,
  footer = defaultFooter,
  hideWeekdays = false,
  reverseMonths = false,
  showOutsideDays = true,
  showWeekNumber = false,
  required = false,
  disabled,
  selectedState,
  className,
  style,
  ...props
}: BogDatePickerProps) {
  const [selected, setSelected] = useState<Date>();
  const selectedValue = selectedState ? selectedState.selected : selected;
  const setSelectedValue = selectedState
    ? selectedState.setSelected
    : setSelected;

  const handleDayChange = (newDay: Date | undefined) => {
    setSelectedValue(newDay);
  };

  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      animate
      mode="single"
      captionLayout={captionLayout}
      reverseYears={reverseYears}
      navLayout={navLayout}
      fixedWeeks={fixedWeeks}
      footer={footer}
      hideWeekdays={hideWeekdays}
      reverseMonths={reverseMonths}
      showOutsideDays={showOutsideDays}
      showWeekNumber={showWeekNumber}
      required={required}
      disabled={disabled}
      selected={selectedValue}
      onSelect={handleDayChange}
      className={`${styles.root} ${className}`}
      classNames={{
        ...defaultClassNames,
        month_grid: `${defaultClassNames.month_grid} ${styles.monthGrid}`,
        month_caption: `${defaultClassNames.month_caption} text-paragraph-1 ${styles.monthCaption}`,
        weekday: `${styles.weekday} text-small`,
        day: `${styles.day} text-small`,
      }}
      style={
        {
          '--rdp-accent-color': 'var(--color-brand-text)',
          '--rdp-accent-background-color': 'white',
        } as React.CSSProperties
      }
      {...props}
    />
  );
}
