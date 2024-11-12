

function inputSearch () {
    return (
        <>
             <form className="w-full py-8">   
                <label className="mb-2 text-sm font-medium text-gray-600 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 px-3 text-sm text-gray-900 rounded-2xl bg-white placeholder:text-gray-600 shadow shadow-md shadow-[#79C5EF]/60" placeholder="Search ..." required />
                </div>
            </form>
        </>
    );
}

export default inputSearch;