import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export default function Home() {
  return (
    <div
      className={`${openSans.variable} ${openSans.variable} flex flex-col h-screen font-[family-name:var(--font-open-sans)]`}
    >
      <div className="flex items-center justify-center w-full h-[7%] border-solid border-b-2 border-[theme(colors.foreground)] bg-gradient-to-r from-[theme(colors.primary)] to-[theme(colors.secondary)] mb-4">
        <h1 className="text-3xl font-bold">Bits of Good Design System Component Overview</h1>
      </div>
      <div className="flex h-[95%] w-[100%] justify-between pb-4 px-8">
        <div className="flex flex-col justify-between w-[35%]">
          {/* 
            Put all switches here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-solid border-2 border-[theme(colors.foreground)]">
            <h3 className="self-start ml-4 font-bold">Switches:</h3>
          </div>

          {/* 
            Put all icons here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-solid border-2 border-[theme(colors.foreground)]">
            <h3 className="self-start ml-4 font-bold">Icons:</h3>
          </div>

          {/* 
            Put all buttons here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-solid border-2 border-[theme(colors.foreground)]">
            <h3 className="self-start ml-4 font-bold">Buttons:</h3>
          </div>

          {/* 
            Put all checkboxes here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-solid border-2 border-[theme(colors.foreground)]">
            <h3 className="self-start ml-4 font-bold">Checkboxes:</h3>
          </div>
        </div>
        <div className="flex flex-col justify-between w-[35%]">
          {/* 
            Put all dropdown and dropdown options here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-solid border-2 border-[theme(colors.foreground)]">
            <h3 className="self-start ml-4 font-bold">Dropdowns:</h3>
          </div>

          {/* 
            Put all form elements here. Make sure all of the ones in Figma are here and match the design in Figma.
          */}
          <div className="flex flex-col items-center justify-between border-solid border-2 border-[theme(colors.foreground)]">
            <h3 className="self-start ml-4 font-bold">Forms:</h3>
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
