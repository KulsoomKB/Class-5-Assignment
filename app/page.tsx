export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <div className="bg-gray-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo2.png" alt="Logo" className="h-8" />
          <h3>Kulsoom's Education Site</h3>
        </div>
      </div>
      <main className="container mx-auto p-6 grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         

          <div className="bg-white shadow-md rounded-lg p-4">
            <img src="/image1.jpg" alt="Card 1" className="w-full h-40 object-cover rounded" />
          
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <img src="/image2.jpg" alt="Card 2" className="w-full h-40 object-cover rounded" />
          
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <img src="/image3.jpg" alt="Card 3" className="w-full h-40 object-cover rounded" />
           
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
          <div className="bg-white shadow-md rounded-lg p-4">
            <img src="/image4.jpg" alt="Card 4" className="w-full h-40 object-cover rounded" />
            
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <img src="image5.jpg" alt="Card 5" className="w-full h-40 object-cover rounded" />
          
          </div>
        </div>
      </main>
    </div>
  );
}


