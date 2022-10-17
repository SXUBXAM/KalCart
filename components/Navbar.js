const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl font-serif text-white">
              <strong>KalCart</strong>
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white">Home</a>
            <a className="mr-5 hover:text-white">Product</a>
            <a className="mr-5 hover:text-white">Contact</a>
            <a className="mr-5 hover:text-white">About US</a>
          </nav>

          <button className="inline-flex items-center bg-black border-1 border-white text-gray-400 py-2 px-3 focus:outline-none hover:text-white rounded text-base mt-4 md:mt-0">
            SignUP
          </button>
          <button className="inline-flex items-center bg-gray-100 py-2 px-3 focus:outline-none hover:bg-black hover:text-white hover:border-white rounded text-base mt-4 md:mt-0">
            LogIN
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
