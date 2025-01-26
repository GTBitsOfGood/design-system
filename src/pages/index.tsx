export default function Home() {
  return (
    <div
      className={`flex flex-col h-screen bg-brand-fill text-grey-text-strong`}
    >
      <div className="flex items-center justify-center w-full h-[7%] border-brand-fill border-solid border-b-2 mb-4 bg-gradient-to-r from-brand-text from-30% via-brand-stroke-weak via-45% to-brand-stroke-strong to-60%">
        <h1>Bits of Good Design System Component Overview</h1>
      </div>
      <div className="flex h-[95%] w-[100%] justify-between pb-4 px-8">
        <div className="flex flex-col justify-between w-[35%]">
          {/* 
            Put all switches here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-grey-stroke-strong border-solid border-2">
            <h3 className="self-start ml-4">Switches:</h3>
          </div>

          {/* 
            Put all icons here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-grey-stroke-strong border-solid border-2">
            <h3 className="self-start ml-4">Icons:</h3>
          </div>

          {/* 
            Put all buttons here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-grey-stroke-strong border-solid border-2">
            <h3 className="self-start ml-4">Buttons:</h3>
          </div>

          {/* 
            Put all checkboxes here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-grey-stroke-strong border-solid border-2">
            <h3 className="self-start ml-4">Checkboxes:</h3>
          </div>
        </div>
        <div className="flex flex-col justify-between w-[35%]">
          {/* 
            Put all dropdown and dropdown options here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-grey-stroke-strong border-solid border-2">
            <h3 className="self-start ml-4">Dropdowns:</h3>
          </div>

          {/* 
            Put all form elements here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-grey-stroke-strong border-solid border-2">
            <h3 className="self-start ml-4">Forms:</h3>
          </div>

          {/* Temp placeholder for style */}
          <div>
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}
