import { useEffect, useState } from "react";
import mokupIphone14 from '../assets/mokups/apple-iphone-14-max/device2.png';

export default function Content() {
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    if (typeof chrome !== "undefined" && chrome.storage) {
      chrome.storage.session.get("zapira_prev_url", (result) => {
        if (result.zapira_prev_url) {
          setCurrentUrl(result.zapira_prev_url);
        } else {
          setCurrentUrl("https://muhammadrizki.vercel.app");
        }
      });
    } else {
      setCurrentUrl("https://muhammadrizki.vercel.app");
    }
  }, []);


  const dataPhone = [
    {
      id: 1,
      name: 'iPhone 14 Pro Max',
      image: mokupIphone14,
      width: 420,
      height: 849,
      style: {
        top: 22,
        left: 21,
        width: 376,
        height: 814,
        zIndex: 0,
      }
    }
  ];

  return (
    <div className="">
      <div
        className="relative mx-auto"
        style={{ width: `${dataPhone[0].width}px`, height: `${dataPhone[0].height}px` }}
      >
        <div
          className="absolute bg-black overflow-hidden rounded-[47px]"
          style={dataPhone[0].style}
        >
          {/* Status bar */}
          <div className="flex justify-between items-center text-white text-xs px-4 h-12 bg-gray-600">
            <span className="font-medium">9:41</span>
            <div className="flex items-center space-x-2">
              {/* sinyal */}
              <div className="flex space-x-0.5">
                <div className="w-0.5 h-1 bg-white rounded-sm"></div>
                <div className="w-0.5 h-2 bg-white rounded-sm"></div>
                <div className="w-0.5 h-3 bg-white rounded-sm"></div>
                <div className="w-0.5 h-4 bg-white rounded-sm"></div>
              </div>
              {/* wifi */}
              <div className="w-3 h-3 border-2 border-white rounded-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              {/* baterai */}
              <div className="flex items-center">
                <div className="w-6 h-3 border border-white rounded-sm relative flex items-center">
                  <div className="h-2 w-4 bg-white ml-[1px] rounded-sm"></div>
                  <div className="w-0.5 h-1.5 bg-white absolute -right-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Iframe buka URL tab aktif */}
          {currentUrl ? (
            <iframe
              src={currentUrl}
              className="w-full h-[calc(100%-48px)] border-0"
            />
          ) : (
            <div className="flex items-center justify-center text-white h-full">
              Loading...
            </div>
          )}
        </div>

        {/* Mockup overlay */}
        <img
          src={dataPhone[0].image}
          alt="iPhone 14 Frame"
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        />
      </div>
    </div>

  );
}
