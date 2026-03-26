import logo from '../assets/logo.jpeg'
function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center">

         <div className="h-20 flex items-center">
          <img 
            src={logo} 
            alt="Shivshakti Enterprises"
            className="h-20 w-auto object-contain scale-100"
          />
          </div>
        
        <ul className="flex space-x-8 text-gray-700 font-medium ml-auto">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Projects</li>
          <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
          <li className="hover:text-blue-600 cursor-pointer">Blog</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

      </div>
    </nav>
  )
}
export default Navbar;