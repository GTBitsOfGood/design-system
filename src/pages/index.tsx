import { BogRadioGroup } from '@/components/BogRadioGroup/BogRadioGroup';
import BogIcon from '../components/BogIcon/BogIcon';
import BogButton from '../components/BogButton/BogButton';
import { BogRadioItem } from '@/components/BogRadioItem/BogRadioItem';
import { useState } from 'react';
import BogCheckbox from '@/components/BogCheckbox/BogCheckbox';
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
    <div className={`flex flex-col min-h-screen bg-brand-fill text-grey-text-strong`}>
      <div className="flex items-center justify-center w-full h-[15%] border-brand-fill border-solid border-b-2 rounded-b-sm mb-4 bg-linear-to-r from-brand-text from-30% via-brand-stroke-weak via-45% to-brand-stroke-strong to-60%">
        <h1 className="text-heading-1">Bits of Good Design System Component Overview</h1>
      </div>
      <div className="flex h-[95%] w-[100%] justify-between pb-4 px-8">
        <div className="flex flex-col justify-between w-[45%]">
          {/* 
            Put all switches here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col gap-4 justify-between border-grey-stroke-strong border-solid border-2 rounded-sm mb-8 p-4">
            <h3 className="self-start text-heading-3">Switches:</h3>
            <p className="text-paragraph-1">
              Our BogSwitch component serves as a template for any application that wants a toggle to represent binary
              data. It accepts the below props:
            </p>
            <ul className="list-disc text-paragraph-1 ml-4">
              <li>style: Use CSS styles to style the switch to better match your theme</li>
              <li>className: Apply your own style classes or Tailwind style classes</li>
              <li>label: The text to be shown to the right of the switch</li>
              <li>
                size: Our switch supports three sizes (&lsquo;small&rsquo;, &lsquo;medium&rsquo;, &lsquo;large&rsquo;)
              </li>
            </ul>
            <div className="flex flex-col gap-4 pb-4">
              {/* Switch - No Label */}
              <div className="flex justify-center items-center gap-4">
                <BogSwitch defaultChecked />
                <BogSwitch />
                <BogSwitch defaultChecked disabled />
                <BogSwitch disabled />
              </div>

              {/* Switch - Label */}
              <div className="flex justify-center items-center gap-4">
                <BogSwitch label="Toggle" defaultChecked />
                <BogSwitch label="Toggle" />
                <BogSwitch label="Toggle" defaultChecked disabled />
                <BogSwitch label="Toggle" disabled />
              </div>

              {/* Different sizes */}
              <div className="flex justify-center items-center gap-4">
                <BogSwitch size="small" label="Small" />
                <BogSwitch size="medium" label="Medium" />
                <BogSwitch size="large" label="Large" />
              </div>
            </div>
          </div>

          {/* 
            Put all icons here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col gap-4 justify-between border-grey-stroke-strong border-solid border-2 rounded-sm mb-8 p-4">
            <h3 className="text-heading-3">Icons:</h3>
            <p className="text-paragraph-1">
              Our BogIcon component serves as a template for any application that wants to display an icon. It accepts
              the below props:
            </p>
            <ul className="list-disc text-paragraph-1 ml-4">
              <li>
                name: <b>Required</b> prop to designate what icon you want to display. Use the names in the table below
                to get the icon you want.
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
            <div className="w-full flex justify-evenly pb-4">
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

          {/* 
            Put all buttons here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-grey-stroke-strong border-solid rounded-sm border-2 p-4 gap-4 mb-8">
            <h3 className="self-start text-heading-3">Buttons:</h3>
            <p className="text-paragraph-1">
              Our BogButton component serves as a template for any application that wants to have a clickable button. It
              accepts the below props:
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
                  <li>icon: The React node of the icon you want to display (supports BogIcon!)</li>
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
            <div className="flex flex-col gap-4 pb-4">
              <div className="flex gap-4 justify-between items-center">
                <BogButton size="small">Button</BogButton>
                <BogButton>Button</BogButton>
                <BogButton size="large">Button</BogButton>
              </div>
              <div className="flex gap-4 justify-between items-center">
                <BogButton variant="secondary" size="small">
                  Button
                </BogButton>
                <BogButton variant="secondary">Button</BogButton>
                <BogButton variant="secondary" size="large">
                  Button
                </BogButton>
              </div>
              <div className="flex gap-4 justify-between items-center">
                <BogButton variant="tertiary" size="small">
                  Button
                </BogButton>
                <BogButton variant="tertiary">Button</BogButton>
                <BogButton variant="tertiary" size="large">
                  Button
                </BogButton>
              </div>
              <div className="flex gap-4 justify-between items-center">
                <BogButton disabled>Button</BogButton>
                <BogButton disabled variant="secondary">
                  Button
                </BogButton>
                <BogButton disabled variant="tertiary">
                  Button
                </BogButton>
              </div>
              <div className="flex gap-4 justify-between items-center">
                <BogButton icon={{ icon: <BogIcon name="plus" />, position: 'left' }}>Button with Icon</BogButton>
                <BogButton icon={{ icon: <BogIcon name="plus" />, position: 'right' }}>Button with Icon</BogButton>
                <BogButton className="bg-black">Tailwind Styled</BogButton>
              </div>
            </div>
          </div>

          {/* 
            Put all checkboxes/radio groups here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col justify-between items-center gap-4 p-4 mb-8 rounded-sm border-2 border-solid border-grey-stroke-strong">
            <h3 className="self-start text-heading-3">Checkboxes/Radio:</h3>
            <p className="text-paragraph-1">
              Our BogCheckbox component serves as a template for any application that wants to have a checkbox to store
              boolean data. It accepts the below props:
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
              <div className="flex flex-col items-center gap-4">
                <BogCheckbox label="Checkbox with label" name="Checkbox with label" />
                <BogCheckbox label="Checkbox disabled" name="Checkbox disabled" disabled />
                <BogCheckbox label="Checked and disabled" name="Checked and disabled" checked disabled />
                <BogCheckbox label="Indeterminate" name="Indeterminate" checked="indeterminate" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-[45%]">
          {/* 
            Put all dropdown and dropdown options here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-grey-stroke-strong border-solid rounded-sm border-2 mb-8">
            <h3 className="self-start ml-4 text-heading-3">Dropdowns:</h3>
          </div>

          {/* 
            Put all form elements here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-grey-stroke-strong border-solid rounded-sm border-2 mb-8">
            <h3 className="self-start ml-4 text-heading-3">Forms:</h3>
            <BogForm
              className="w-full px-4"
              onSubmit={(e) => {
                e.preventDefault();
                e.currentTarget.reset();
              }}
            >
              <BogTextInput name="name" label="Name" placeholder="Enter your name" />
              <BogTextInput name="email" label="Email" placeholder="Enter your email" type="email" />
              <BogTextInput
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
                required
              />
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

          {/* Temp placeholder for style */}
          <div>&nbsp;</div>
        </div>
      </div>
    </div>
  );
}
