import React from 'react';
import "./App.css"

const Navigacia = () => {
  return (
    <nav className="bg-white shadow-md py-4 fixed w-full z-10">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Globe Trekker</div>
        
        <ul className="hidden md:flex space-x-8">
          {['მთავარი', 'ადგილები', 'ტურები', 'შესახებ', 'კონტაკტი'].map((item, index) => (
            <li key={index}>
              <a href="" className="text-gray-800 hover:text-blue-500 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>
        
        <button className="hidden md:block px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
          დაჯავშნე
        </button>
        
        <div className="md:hidden">
          <button className="text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </button>
        </div>
      </div>
    </nav>
  );
};

const Mogzauroba = () => {
  return (
    <div className="bg-blue-900 text-white pt-32 pb-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          აღმოაჩინე სამყარო Globbe Trekker-თან ერთად!
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          დაუვიწყარი მოგზაურობა გელის ჩვენთან!.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            აღმოაჩინე ადგილები
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white rounded hover:bg-white hover:text-blue-900 transition">
            დღიური ტურები
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedAdgilebi = () => {
  
  return (
    <section className="py-20 bg-gray-50" id="destinations">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">გამორჩეული ადგილები</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">ნახე რომელი სარგებლობს გამორჩეული პოპულარობით და ეწვიე მათ.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
              <div className="p-6">
                <div className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded mb-3 inline-block">
                  საუკეთესო
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">საქართველო</h3>
                <p className="text-gray-600 mb-4">გამოცადე მათი საუკეთესო კერძები და დაუმეგობრდი ჯიგარ ხალხს ;).</p>
                <button className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition">
                  ნახე დეტალები
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </button>
              </div>
        </div>
        
        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            ნახე ყველა
          </button>
        </div>
      </div>
    </section>
  );
};

const Servisebi = () => {
  const features = [
    { title: "ექსპერტებთან ერთად", description: "ჩვენი ტურისტული კომპანია აღჭურვილია სრულად ექსპერტებით." },
    { title: "საუკეთესო ფასები", description: "იაფია ყველაფერი." },
    { title: "ექსპერტებთან ერთად", description: "ჩვენი ტურისტული კომპანია აღჭურვილია სრულად ექსპერტებით." },
    { title: "ექსპერტებთან ერთად", description: "ჩვენი ტურისტული კომპანია აღჭურვილია სრულად ექსპერტებით." },
  ];
  
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">რატომ Globe Trekker?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">ჩვენ ვამზადებთ დაუვიწყარ და გასართობ მოგზაურობას.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <span className="text-xl font-bold">Globe Trekker</span>
            </div>
            <p className="text-gray-400 mb-6">აღმოაჩინე სამყარო ჩვენთან ერთად.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">SUB</h3>
            <p className="text-gray-400 mb-4">SUB.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="flex-grow bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none" />
              <button type="submit" className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div>
      <Navigacia />
      <Mogzauroba />
      <FeaturedAdgilebi /> a
      <Servisebi />
      <Footer />
    </div>
  );
}