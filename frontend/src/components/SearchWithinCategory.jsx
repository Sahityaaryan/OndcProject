 export default function SearchWithinCategory(){


    return(
        <>
             <section className="relative pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-26">
            <h1 className="mb-5 text-6xl font-bold text-white">
              Search within different categories
            </h1>
            {/* <h1 className="mb-9 text-2xl font-semibold text-gray-200">
              Enter your email address and get our newsletters straight away.
            </h1> */}
           <div style={{"margin":"60px 0px"}}>
           <input
              type="text"
              placeholder="Enter name of the category"
              name="email"
              autoComplete="email"
              className="border border-gray-600 w-auto pr-2 pl-2 py-3 mt-2 rounded-md text-white font-semibold hover:border-gray-700 bg-black"
            />{" "}
            <button
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
              href="/"
            >
              <span className="justify-center">Search</span>
            </button>
           </div>
          </div>
        </div>
      </section>
        </>
    )
 }