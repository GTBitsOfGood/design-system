import { BogRadioGroup } from '@/components/BogRadioGroup/BogRadioGroup';
import BogIcon from '../components/BogIcon/BogIcon';
import BogButton from '../components/BogButton/BogButton';
import { BogRadioItem } from '@/components/BogRadioItem/BogRadioItem';
import { useState } from 'react';
import BogCheckbox from '@/components/BogCheckbox/BogCheckbox';
import BogDropdown from '@/components/BogDropdown/BogDropdown';
import { BogForm } from '@/components/BogForm/BogForm';
import { BogTextInput } from '@/components/BogTextInput/BogTextInput';
import { BogSwitch } from '@/components/BogSwitch/BogSwitch';

export default function Home() {
  const icons = [
    'arrow-fat-up',
    'arrow-fat-down',
    'arrow-fat-left',
    'arrow-fat-right',
    'chevron-up',
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'caret-up',
    'caret-down',
    'caret-left',
    'caret-right',
    'arrow-up',
    'arrow-down',
    'arrow-left',
    'arrow-right',
    'check',
    'map-pin',
    'chats',
    'hand-heart',
    'calendar',
    'users',
    'download',
    'pushpin',
    'close',
    'search',
    'trash',
    'share',
    'copy',
    'gear',
    'info',
    'pause',
    'play',
    'user',
    'folder',
    'bell',
    'plus',
    'x',
    'error',
    'warning',
    'success',
  ];

  const [radioValue, setRadioValue] = useState('3');

  function Placeholder() {
    return (
      <div className="text-grey-stroke-strong flex gap-2 items-center pointer-events-none">
        <BogIcon name="gear" />
        Placeholder text
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-4 min-h-screen bg-brand-fill text-grey-text-strong pb-4`}>
      <div className="flex items-center justify-center w-full h-[15%] border-brand-fill border-solid border-b-2 bg-linear-to-r from-brand-text from-30% via-brand-stroke-weak via-45% to-brand-stroke-strong to-60%">
        <h1 className="text-heading-1">Design System Overview</h1>
      </div>
      <div className="grid mobile:grid-cols-1 desktop:grid-cols-2 gap-4 h-[95%] w-[95%] self-center">
        {/* 
            Put all switches here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
        <div className="flex flex-col self-start gap-4 border-grey-stroke-strong border-solid border-2 rounded-sm p-4">
          <h3 className="text-heading-3">Switches:</h3>
          <p className="text-paragraph-1">
            Our Bits of Good Switch component serves as a template for any application that wants a toggle to represent
            binary data. It accepts the below props:
          </p>
          <ul className="list-disc text-paragraph-1 ml-4">
            <li>style: Use CSS styles to style the switch to better match your theme</li>
            <li>className: Apply your own style classes or Tailwind style classes</li>
            <li>label: The text to be shown to the right of the switch</li>
            <li>
              size: Our switch supports three sizes (&lsquo;small&rsquo;, &lsquo;medium&rsquo;, &lsquo;large&rsquo;)
            </li>
          </ul>
          <div className="flex justify-center gap-4 pb-4">
            <div className="flex flex-col justify-center gap-4">
              <BogSwitch defaultChecked label="Checked" />
              <BogSwitch label="Unchecked" />
              <BogSwitch defaultChecked disabled label="Disabled/Checked" />
              <BogSwitch disabled label="Disabled/Unchecked" />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <BogSwitch size="small" label="Small" />
              <BogSwitch size="medium" label="Medium" />
              <BogSwitch size="large" label="Large" />
            </div>
          </div>
        </div>

        {/* 
            Put all checkboxes/radio groups here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
        <div className="flex flex-col self-start gap-4 border-grey-stroke-strong border-solid border-2 rounded-sm p-4">
          <h3 className="text-heading-3">Checkboxes/Radio:</h3>
          <p className="text-paragraph-1">
            Our Bits of Good Checkbox component serves as a template for any application that wants to have a checkbox
            to store boolean data. It accepts the below props:
          </p>
          <ul className="list-disc text-paragraph-1 ml-4">
            <li>
              name: <b>Required</b> prop to assign a name to the value the checkbox stores for forms
            </li>
            <li>style: Use CSS styles to style the switch to better match your theme</li>
            <li>className: Apply your own style classes or Tailwind style classes</li>
            <li>label: The content of the text labelling the checkbox</li>
            <li>disabled: Whether the checkbox is disabled or not</li>
            <li>checked: Whether the checkbox is checked or not (or &lsquo;indeterminate&rsquo;)</li>
            <li>required: Whether the checkbox is required to check or not</li>
          </ul>
          <div className="flex justify-around w-full pb-4">
            <div className="flex flex-col gap-4">
              <BogRadioGroup value={radioValue} onValueChange={setRadioValue} required defaultValue="2">
                <BogRadioItem label="Option 1" value={'1'} />
                <BogRadioItem label="Option 2" value={'2'} />
                <BogRadioItem label="Disabled 3" value={'3'} disabled={true} />
                <BogRadioItem label="Option 4" value={'4'} />
              </BogRadioGroup>
              <p className="text-paragraph-1">Radio value: {radioValue}</p>
            </div>
            <div className="flex flex-col gap-4">
              <BogCheckbox label="Checkbox with label" name="Checkbox with label" />
              <BogCheckbox label="Checkbox disabled" name="Checkbox disabled" disabled />
              <BogCheckbox label="Checked and disabled" name="Checked and disabled" checked disabled />
              <BogCheckbox label="Indeterminate" name="Indeterminate" checked="indeterminate" />
            </div>
          </div>
        </div>

        {/* 
            Put all buttons here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
        <div className="flex flex-col self-start gap-4 border-grey-stroke-strong border-solid border-2 rounded-sm p-4">
          <h3 className="text-heading-3">Buttons:</h3>
          <p className="text-paragraph-1">
            Our Bits of Good Button component serves as a template for any application that wants to have a clickable
            button. It accepts the below props:
          </p>
          <ul className="list-disc text-paragraph-1 ml-4">
            <li>style: Use CSS styles to style the switch to better match your theme</li>
            <li>className: Apply your own style classes or Tailwind style classes</li>
            <li>
              variant: The general color scheme your button follows (&lsquo;primary&rsquo;, &lsquo;secondary&rsquo;,
              &lsquo;tertiary&rsquo;)
            </li>
            <li>
              size: Our button supports three sizes (&lsquo;small&rsquo;, &lsquo;medium&rsquo;, &lsquo;large&rsquo;)
            </li>
            <li>
              icon: An option with two fields representing what icon you want to display in the button and where you
              want to display it.
              <ul className="list-disc ml-4">
                <li>icon: The React node of the icon you want to display (supports Bits of Good Icon!)</li>
                <li>
                  position: Whether the icon is on the left or right side of the button (&lsquo;left&rsquo;,
                  &lsquo;right&rsquo;)
                </li>
              </ul>
            </li>
            <li>name: The name of the data being stored in the button (mostly for forms)</li>
            <li>value: The value of the data being stored in the button (mostly for forms)</li>
            <li>children: The content within the button (must be contained by one React element)</li>
          </ul>
          <div className="grid grid-cols-3 gap-4 items-center">
            <BogButton className="justify-self-center" size="small">
              Button
            </BogButton>
            <BogButton className="justify-self-center">Button</BogButton>
            <BogButton className="justify-self-center" size="large">
              Button
            </BogButton>

            <BogButton className="justify-self-center" variant="secondary" size="small">
              Button
            </BogButton>
            <BogButton className="justify-self-center" variant="secondary">
              Button
            </BogButton>
            <BogButton className="justify-self-center" variant="secondary" size="large">
              Button
            </BogButton>

            <BogButton className="justify-self-center" variant="tertiary" size="small">
              Button
            </BogButton>
            <BogButton className="justify-self-center" variant="tertiary">
              Button
            </BogButton>
            <BogButton className="justify-self-center" variant="tertiary" size="large">
              Button
            </BogButton>
            <BogButton className="justify-self-center" disabled>
              Button
            </BogButton>
            <BogButton className="justify-self-center" disabled variant="secondary">
              Button
            </BogButton>
            <BogButton className="justify-self-center" disabled variant="tertiary">
              Button
            </BogButton>
            <BogButton className="justify-self-center" icon={{ icon: <BogIcon name="plus" />, position: 'left' }}>
              Icon
            </BogButton>
            <BogButton className="justify-self-center" icon={{ icon: <BogIcon name="plus" />, position: 'right' }}>
              Icon
            </BogButton>
            <BogButton className="justify-self-center bg-black">Tailwind Styled</BogButton>
          </div>
        </div>

        {/* 
            Put all dropdown and dropdown options here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
        <div className="flex flex-col self-start gap-4 border-grey-stroke-strong border-solid border-2 rounded-sm p-4">
          <h3 className="text-heading-3">Dropdowns:</h3>
          <p className="text-paragraph-1">
            Our Bits of Good Dropdown component serves as a way for our applications to support a dropdown menu. It
            accepts the below props:
          </p>
          <ul className="list-disc text-paragraph-1 ml-4">
            <li>
              options: <b>Required</b> prop that is a list of all of the options in the dropdown menu
            </li>
            <li>
              name: <b>Required</b> prop that names the data of each dropdown menu for use in a form.
            </li>
            <li>style: Use CSS styles to style the switch to better match your theme</li>
            <li>className: Apply your own style classes or Tailwind style classes</li>
            <li>type: Selects the type of the dropdown between the below options</li>
            <ul className="list-disc ml-4">
              <li>normal: A normal dropdown menu (default)</li>
              <li>checkbox: A dropdown menu with checkboxes</li>
              <li>radio: A dropdown menu with radio buttons</li>
              <li>search: A dropdown menu with a search bar</li>
            </ul>
            <li>label: Text to label the dropdown menu</li>
            <li>placeholder: Text to serve as the placeholder text in the dropdown menu</li>
            <li>disabled: Whether the dropdown menu is disabled or not</li>
            <li>onSelectionChange: Function that is called when a different item is selected</li>
          </ul>
          <BogDropdown
            placeholder="Placeholder Text"
            name="normal"
            type="normal"
            options={['Option 1', 'Option 2', 'Option 3']}
            label="Normal Dropdown"
          />
          <BogDropdown
            placeholder="Placeholder Text"
            name="checkbox"
            type="checkbox"
            options={['Option 1', 'Option 2', 'Option 3']}
            label="Checkbox Dropdown"
          />
          <BogDropdown
            placeholder="Placeholder Text"
            name="radio"
            type="radio"
            options={['Option 1', 'Option 2', 'Option 3']}
            label="Radio Dropdown"
          />
          <BogDropdown
            placeholder="Placeholder Text"
            name="search"
            type="search"
            options={['Option 1', 'Option 2', 'Option 3']}
            label="Search Dropdown"
          />
          <BogDropdown
            placeholder="Placeholder Text"
            name="disabled"
            type="normal"
            options={['Option 1', 'Option 2', 'Option 3']}
            label="Disabled Dropdown"
            disabled
          />
        </div>

        {/* 
            Put all text inputs here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
        <div className="flex flex-col self-start gap-4 border-grey-stroke-strong border-solid border-2 rounded-sm p-4">
          <h3 className="text-heading-3">Text Inputs:</h3>
          <p className="text-paragraph-1">
            Our Bits of Good TextInput component serves as a way for any application to accept text inputs from users.
            This component accepts the below props:
          </p>
          <ul className="list-disc text-paragraph-1 ml-4">
            <li>
              name: <b>Required</b> prop that is the name of the data when used in a form
            </li>
            <li>
              label: <b>Required</b> prop that is the label text above the text box
            </li>
            <li>style: Use CSS styles to style the switch to better match your theme</li>
            <li>className: Apply your own style classes or Tailwind style classes</li>
            <li>type: The type of the text input (defaults to &lsquo;text&rsquo;)</li>
            <li>multiline: Whether the text input is a textarea or not</li>
            <li>placeholder: The placeholder text inside the text box (can be a React element or a string)</li>
            <li>required: Whether the text input is required or not</li>
            <li>disabled: Whether the text input is disabled or not</li>
          </ul>
          <BogForm
            onSubmit={(e) => {
              e.preventDefault();
              e.currentTarget.reset();
            }}
          >
            <BogTextInput name="name" label="Name" placeholder="Basic Text Box" />
            <BogTextInput
              name="password"
              label="Password"
              placeholder="Required Password Text Box"
              type="password"
              required
            />
            <BogTextInput name="phone" label="Phone" placeholder="Disabled Phone Number Text Box" type="tel" disabled />
            <BogTextInput name="email" label="Email" placeholder="Email Text Box" type="email" />
            <BogTextInput name="search" label="Search" placeholder="Search Text Box" type="search" />
            <BogTextInput multiline name="message" label="Message" placeholder={<Placeholder />} />
          </BogForm>
        </div>

        {/* 
            Put all form elements here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
        <div className="flex flex-col self-start gap-4 border-grey-stroke-strong border-solid border-2 rounded-sm p-4">
          <h3 className="text-heading-3">Forms:</h3>
          <p className="text-paragraph-1">
            Our Bits of Good Form component serves as a way for any application to support a form. This component
            accepts the below props:
          </p>
          <ul className="list-disc text-paragraph-1 ml-4">
            <li>
              onSubmit: <b>Required</b> prop that is a function that is called when the submit button is pressed
            </li>
            <li>style: Use CSS styles to style the switch to better match your theme</li>
            <li>className: Apply your own style classes or Tailwind style classes</li>
            <li>submitLabel: The text that is inside the submit button (defaults to &lsquo;Submit&rsquo;)</li>
            <li>children: The content within the form (must be contained by one React element)</li>
          </ul>
          <BogForm
            className="w-full"
            onSubmit={(e) => {
              e.preventDefault();
              e.currentTarget.reset();
            }}
          >
            <BogTextInput name="name" label="Name" placeholder="Enter your name" />
            <BogTextInput name="email" label="Email" placeholder="Enter your email" type="email" />
            <BogTextInput name="password" label="Password" placeholder="Enter your password" type="password" required />
            <BogTextInput name="phone" label="Phone" placeholder="Enter your phone number" type="tel" disabled />
            <BogTextInput multiline name="message" label="Message" placeholder={<Placeholder />} />
            <BogCheckbox label="Checkbox" name="checkbox" />
            {/* you have to include a `name` prop when using BogRadioGroup in a form! */}
            <BogRadioGroup name="radio">
              <BogRadioItem label="Option 1" value={'1'} />
              <BogRadioItem label="Option 2" value={'2'} />
              <BogRadioItem label="Option 3" value={'3'} />
              <BogRadioItem label="Option 4" value={'4'} />
            </BogRadioGroup>
          </BogForm>
        </div>

        {/* 
            Put all icons here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
        <div className="flex flex-col self-start gap-4 border-grey-stroke-strong border-solid border-2 rounded-sm p-4">
          <h3 className="text-heading-3">Icons:</h3>
          <p className="text-paragraph-1">
            Our Bits of Good Icon component serves as a template for any application that wants to display an icon. It
            accepts the below props:
          </p>
          <ul className="list-disc text-paragraph-1 ml-4">
            <li>
              name: <b>Required</b> prop to designate what icon you want to display. Use the names in the table below to
              get the icon you want.
            </li>
            <li>style: Use CSS styles to style the switch to better match your theme</li>
            <li>className: Apply your own style classes or Tailwind style classes</li>
            <li>size: String or number representing the size of the icon</li>
            <li>color: String representing the color of your icon</li>
            <li>
              weight: Weight of the lines of the icon (&lsquo;thin&rsquo;, &lsquo;light&rsquo;, &lsquo;regular&rsquo;,
              &lsquo;bold&rsquo;, &lsquo;fill&rsquo;, &lsquo;duotone&rsquo;)
            </li>
            <li>Mirrored: Boolean representing whether the icon is flipped or not</li>
            <li>Alt: Alt text for improved accessibility</li>
          </ul>
          <p className="text-paragraph-1">Here&apos;s all of the icons we support with their default styles.</p>
          <div className="flex justify-center gap-4 pb-4">
            <table className="table-auto w-[40%] text-paragraph-1">
              <thead>
                <tr>
                  <th className="border-[1px] border-grey-stroke-strong border-solid">Icon Name</th>
                  <th className="border-[1px] border-grey-stroke-strong border-solid">Icon</th>
                </tr>
              </thead>
              <tbody>
                {icons.slice(0, icons.length / 2).map((icon) => {
                  return (
                    <tr key={icon}>
                      <td className="border-[1px] border-grey-stroke-strong border-solid p-2">{icon}</td>
                      <td className="border-[1px] border-grey-stroke-strong border-solid">
                        <div className="flex justify-center items-center">
                          <BogIcon name={icon} />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <table className="table-auto w-[40%] text-paragraph-1">
              <thead>
                <tr>
                  <th className="border-[1px] border-grey-stroke-strong border-solid">Icon Name</th>
                  <th className="border-[1px] border-grey-stroke-strong border-solid">Icon</th>
                </tr>
              </thead>
              <tbody>
                {icons.slice(icons.length / 2, icons.length).map((icon) => {
                  return (
                    <tr key={icon}>
                      <td className="border-[1px] border-grey-stroke-strong border-solid p-2">{icon}</td>
                      <td className="border-[1px] border-grey-stroke-strong border-solid">
                        <div className="flex justify-center items-center">
                          <BogIcon name={icon} />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
