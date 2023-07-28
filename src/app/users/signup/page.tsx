export default function signup() {
    return (
        <div className="h-screen flex items-center justify-center bg-slate-900">
            <div className="bg-slate-200 p-2">
                <div className="flex flex-col text-xs space-y-4 ">
                    <input type="text" className="border border-slate-500 p-2 rounded-lg" placeholder="Email Id" />
                    <input type="text" className="border border-slate-500 p-2 rounded-lg" placeholder="Contact Number" />
                    <input type="text" className="border border-slate-500 p-2 rounded-lg" placeholder="Password" />
                    <input type="text" className="border border-slate-500 p-2 rounded-lg" placeholder="Repeat Password" />

                    <button className="bg-slate-300 px-4 p-2 rounded-full hover:text-white hover:bg-slate-900">Sign Up</button>
                </div>
            </div>
        </div>
    )
}