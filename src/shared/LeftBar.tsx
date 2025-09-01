import { Smartphone} from "lucide-react";

export default function LeftBar() {
    const devices = [
        { name: "iPhone 14", icon: Smartphone },
    ];

    return (
        <div className="fixed top-0 left-0 w-64 h-screen bg-gray-900 text-gray-200 shadow-xl border-r border-gray-800 flex flex-col">
            <div className="px-6 py-4 border-b border-gray-800">
                <h2 className="text-xl font-semibold tracking-wide text-white">
                    📱 Devices
                </h2>
            </div>

            <ul className="flex-1 overflow-y-auto">
                {devices.map((device, idx) => {
                    const Icon = device.icon;
                    return (
                        <li
                            key={idx}
                            className="flex items-center px-6 py-3 hover:bg-gray-800 hover:text-white cursor-pointer transition-colors duration-200"
                        >
                            <Icon className="w-5 h-5 mr-3 text-gray-400" />
                            <span className="text-sm font-medium">{device.name}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
