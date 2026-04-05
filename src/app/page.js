import Navbar from "./component/Navbar";
import ResponsiveTest from "./responsive-test";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* <ResponsiveTest /> */}
      <Navbar></Navbar>
      {/* <h1 className="text-3xl font-bold mb-8 text-center">Tailwind v4 Custom Breakpoints Test</h1>
      
      <div className="space-y-4">
       
        <div className="bg-gray-300 mobile:bg-blue-500 p-6 rounded-lg">
          <h2 className="text-white font-semibold">Default → Mobile (≥412px)</h2>
          <p className="text-white mt-2">Gray below 412px, Blue at 412px+</p>
        </div>
        
        
        <div className="bg-blue-500 tablet-sm:bg-green-500 p-6 rounded-lg">
          <h2 className="text-white font-semibold">Mobile → Tablet-SM (≥521px)</h2>
          <p className="text-white mt-2">Blue at 412px, Green at 521px+</p>
        </div>
        
        
        <div className="bg-green-500 tablet:bg-purple-500 p-6 rounded-lg">
          <h2 className="text-white font-semibold">Tablet-SM → Tablet (≥681px)</h2>
          <p className="text-white mt-2">Green at 521px, Purple at 681px+</p>
        </div>
        
        
        <div className="bg-purple-500 desktop:bg-red-500 p-6 rounded-lg">
          <h2 className="text-white font-semibold">Tablet → Desktop (≥981px)</h2>
          <p className="text-white mt-2">Purple at 681px, Red at 981px+</p>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Active Breakpoint Indicators:</h3>
        <div className="flex flex-wrap gap-2">
          <span className="hidden mobile:inline-block px-3 py-1 bg-blue-500 text-white rounded-full text-sm">✓ Mobile (412px+)</span>
          <span className="hidden tablet-sm:inline-block px-3 py-1 bg-green-500 text-white rounded-full text-sm">✓ Tablet-SM (521px+)</span>
          <span className="hidden tablet:inline-block px-3 py-1 bg-purple-500 text-white rounded-full text-sm">✓ Tablet (681px+)</span>
          <span className="hidden desktop:inline-block px-3 py-1 bg-red-500 text-white rounded-full text-sm">✓ Desktop (981px+)</span>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-yellow-100 rounded-lg border-2 border-yellow-400">
        <h3 className="text-lg font-semibold mb-2">📱 Test Instructions:</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Resize your browser window</li>
          <li>Watch the background colors change at each breakpoint</li>
          <li>Check which indicator badges appear</li>
          <li>Breakpoints: 412px → 521px → 681px → 981px</li>
        </ol>
      </div> */}
    </main>
  );
}
