import { BogRadioGroup } from '@/components/BogRadioGroup/BogRadioGroup';
import BogIcon from '../components/BogIcon/BogIcon';
import BogButton from '../components/BogButton/BogButton';
import { BogRadioItem } from '@/components/BogRadioItem/BogRadioItem';
import { useState } from 'react';
import BogCheckbox from '@/components/BogCheckbox/BogCheckbox';

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
          <div className="flex flex-col items-center justify-between border-grey-stroke-strong border-solid border-2 rounded-sm mb-8">
            <h3 className="self-start ml-4 text-heading-3">Switches:</h3>
          </div>

          {/* 
            Put all icons here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-grey-stroke-strong border-solid border-2 rounded-sm mb-8 p-4">
            <h3 className="self-start text-heading-3">Icons:</h3>
            <p className="text-paragraph-1 my-4">
              Our BogIcon component takes in a name that maps to a component from the Phosphor Icons library. Below are
              all of the supported icons and their default styles.
            </p>
            <div className="w-full flex justify-evenly">
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
          <div className="flex flex-col items-center justify-between border-grey-stroke-strong border-solid rounded-sm border-2 mb-8">
            <h3 className="self-start ml-4 text-heading-3">Buttons:</h3>
            <div className="flex flex-col gap-4 p-4">
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
          <div className="flex flex-col justify-between items-center mb-8 rounded-sm border-2 border-solid border-grey-stroke-strong">
            <h3 className="self-start ml-4 text-heading-3">Checkboxes/Radio:</h3>
            <div className="flex justify-around w-full p-4">
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
          </div>

          {/* Temp placeholder for style */}
          <div>&nbsp;</div>
        </div>
      </div>
    </div>
  );
}
