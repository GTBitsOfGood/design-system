import BogIcon from '../components/BogIcon';

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

  return (
    <div className={`flex flex-col min-h-screen bg-brand-fill text-grey-text-strong`}>
      <div className="flex items-center justify-center w-full h-[7%] border-brand-fill border-solid border-b-2 rounded-b-sm mb-4 bg-gradient-to-r from-brand-text from-30% via-brand-stroke-weak via-45% to-brand-stroke-strong to-60%">
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
          </div>

          {/* 
            Put all checkboxes here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-grey-stroke-strong border-solid rounded-sm border-2 mb-8">
            <h3 className="self-start ml-4 text-heading-3">Checkboxes:</h3>
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
