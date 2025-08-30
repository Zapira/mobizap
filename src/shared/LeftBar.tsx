// LeftBar.tsx
export default function LeftBar() {
    return (
        <div className="fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white">
            <h2 className="text-lg font-bold p-4">Phone</h2>
            <ul>
                <li className="p-4 hover:bg-gray-700 cursor-pointer">iPhone 14 Pro Max</li>
                <li className="p-4 hover:bg-gray-700 cursor-pointer">iPhone 13</li>
                <li className="p-4 hover:bg-gray-700 cursor-pointer">Samsung S23</li>
            </ul>
        </div>
    )
}
