import React from 'react';
import { Mic, Image as ImageIcon, FileText, Link2, LayoutGrid, User, Menu } from 'lucide-react';

interface PhoneMockupProps {
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ className }) => {
  return (
    <div className={`relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl ${className}`}>
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      
      {/* Dynamic Island */}
      <div className="absolute top-0 w-full flex justify-center z-20 pt-2">
         <div className="w-32 h-8 bg-black rounded-full"></div>
      </div>

      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-[#FAFAFA] relative flex flex-col">
        {/* Status Bar Placeholder */}
        <div className="h-12 w-full flex justify-between items-center px-6 pt-2 text-[10px] font-bold text-gray-900">
           <span>11:09</span>
           <div className="flex gap-1">
             <div className="w-4 h-2.5 border border-gray-900 rounded-[2px]"></div>
           </div>
        </div>

        {/* App Header */}
        <div className="mt-4 mb-6 text-center">
          <h1 className="text-4xl font-[SweetApricot] text-gray-900">Essential Space</h1>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-2 gap-4 px-4 overflow-y-auto no-scrollbar pb-20">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-3xl shadow-sm flex flex-col gap-3 aspect-square justify-between">
            <Mic className="w-8 h-8 text-black" strokeWidth={1.5} />
            <div>
              <h3 className="font-bold text-lg leading-tight">Voice Notes</h3>
              <p className="text-[10px] text-gray-500 leading-tight mt-1">Record and manage your voice notes with ease.</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-4 rounded-3xl shadow-sm flex flex-col gap-3 aspect-square justify-between">
            <ImageIcon className="w-8 h-8 text-black" strokeWidth={1.5} />
            <div>
              <h3 className="font-bold text-lg leading-tight">Image Notes</h3>
              <p className="text-[10px] text-gray-500 leading-tight mt-1">Capture and organize your photo notes effortlessly.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-3xl shadow-sm flex flex-col gap-3 aspect-square justify-between">
            <FileText className="w-8 h-8 text-black" strokeWidth={1.5} />
            <div>
              <h3 className="font-bold text-lg leading-tight">Text Notes</h3>
              <p className="text-[10px] text-gray-500 leading-tight mt-1">Create and edit text notes quickly.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 rounded-3xl shadow-sm flex flex-col gap-3 aspect-square justify-between">
            <Link2 className="w-8 h-8 text-black" strokeWidth={1.5} />
            <div>
              <h3 className="font-bold text-lg leading-tight">Save URLs</h3>
              <p className="text-[10px] text-gray-500 leading-tight mt-1">Bookmark and manage your favorite URLs.</p>
            </div>
          </div>
        </div>

        {/* Bottom Tab Bar */}
        <div className="absolute bottom-6 left-4 right-4 bg-white h-16 rounded-[2rem] shadow-lg flex items-center justify-around px-2 z-10">
           <div className="flex flex-col items-center gap-1">
             <div className="p-1">
                <LayoutGrid className="w-6 h-6 text-black" strokeWidth={2} />
             </div>
             <span className="text-[10px] font-semibold">Home</span>
           </div>
           <div className="flex flex-col items-center gap-1 opacity-40">
             <div className="p-1">
                <div className="w-6 h-6 border-2 border-black rounded-md flex items-center justify-center">
                  <div className="w-3 h-0.5 bg-black"></div>
                </div>
             </div>
             <span className="text-[10px] font-semibold">Task</span>
           </div>
           <div className="flex flex-col items-center gap-1 opacity-40">
             <div className="p-1">
                <Menu className="w-6 h-6 text-black" strokeWidth={2} />
             </div>
             <span className="text-[10px] font-semibold">More</span>
           </div>
        </div>

      </div>
    </div>
  );
};
