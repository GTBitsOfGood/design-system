export default function Home() {
  return (
    <div
      className={`flex flex-col h-screen`}
    >
      <div className="flex items-center justify-center w-full h-[7%] border-solid border-b-2 mb-4">
        <h1 className="desktop:text-desktop-heading-1 text-mobile-heading-1 font-heading">
          Bits of Good Design System Component Overview
        </h1>
      </div>
      <div className="flex h-[95%] w-[100%] justify-between pb-4 px-8">
        <div className="flex flex-col justify-between w-[35%]">
          {/* 
            Put all switches here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-solid border-2">
            <h3 className="self-start ml-4 desktop:text-desktop-heading-3 text-mobile-heading-3 font-heading">
              Switches:
            </h3>
          </div>

          {/* 
            Put all icons here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-solid border-2">
            <h3 className="self-start ml-4 desktop:text-desktop-heading-3 text-mobile-heading-3 font-heading">
              Icons:
            </h3>
          </div>

          {/* 
            Put all buttons here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-solid border-2">
            <h3 className="self-start ml-4 desktop:text-desktop-heading-3 text-mobile-heading-3 font-heading">
              Buttons:
            </h3>
          </div>

          {/* 
            Put all checkboxes here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-solid border-2">
            <h3 className="self-start ml-4 desktop:text-desktop-heading-3 text-mobile-heading-3 font-heading">
              Checkboxes:
            </h3>
          </div>
        </div>
        <div className="flex flex-col justify-between w-[35%]">
          {/* 
            Put all dropdown and dropdown options here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-solid border-2">
            <h3 className="self-start ml-4 desktop:text-desktop-heading-3 text-mobile-heading-3 font-heading">
              Dropdowns:
            </h3>
          </div>

          {/* 
            Put all form elements here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-solid border-2">
            <h3 className="self-start ml-4 desktop:text-desktop-heading-3 text-mobile-heading-3 font-heading">
              Forms:
            </h3>
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
