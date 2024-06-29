import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Bookchimp - Online Book Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Bookchimp</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Shop</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-4 text-gray-800">Discover Your Next Favorite Book</h2>
          <p className="text-lg text-gray-600">Explore a wide range of genres and authors.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
              <img src={`/book-${index + 1}.jpg`} alt={`Book ${index + 1}`} className="w-full h-64 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Book Title {index + 1}</h3>
              <p className="text-gray-600 mb-4">Author Name</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">View Details</button>
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2024 Bookchimp. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
