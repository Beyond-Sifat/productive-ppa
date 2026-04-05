'use client';

export default function ResponsiveTest() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-center mb-8">Tailwind Custom Breakpoints Test</h1>
        
        <div className="grid grid-cols-1 gap-4">
          {/* Mobile breakpoint (412px and up) */}
          <div className="mobile:bg-blue-500 bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white">Mobile (≥412px)</h2>
            <p className="text-white mt-2">This box turns blue at 412px and above</p>
          </div>
          
          {/* Tablet-sm breakpoint (521px and up) */}
          <div className="tablet-sm:bg-green-500 bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white">Tablet Small (≥521px)</h2>
            <p className="text-white mt-2">This box turns green at 521px and above</p>
          </div>
          
          {/* Tablet breakpoint (681px and up) */}
          <div className="tablet:bg-purple-500 bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white">Tablet (≥681px)</h2>
            <p className="text-white mt-2">This box turns purple at 681px and above</p>
          </div>
          
          {/* Desktop breakpoint (981px and up) */}
          <div className="desktop:bg-red-500 bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white">Desktop (≥981px)</h2>
            <p className="text-white mt-2">This box turns red at 981px and above</p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Current Breakpoint Indicators:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="mobile:inline hidden px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Mobile Active</span>
            <span className="tablet-sm:inline hidden px-3 py-1 bg-green-500 text-white rounded-full text-sm">Tablet-SM Active</span>
            <span className="tablet:inline hidden px-3 py-1 bg-purple-500 text-white rounded-full text-sm">Tablet Active</span>
            <span className="desktop:inline hidden px-3 py-1 bg-red-500 text-white rounded-full text-sm">Desktop Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
