import React from 'react';
import { useNavigate } from 'react-router-dom';
interface SafariExperience {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
  features: string[];
  price: string;
}

export const safariExperiences: SafariExperience[] = [
{
  id: 'dar-es-salaam-adventure',
  title: 'Dar-es-Salaam Adventure Package',
  location: 'Tanzania',
  image: 'https://res.cloudinary.com/dancxhgah/image/upload/v1747540824/DarPic_i2bh5c.jpg',
  description: "Explore Dar-es-Salaam with a guided city tour, island excursion, and beach experiences. Ideal for those seeking a vibrant coastal city escape.",
  features: [
    'Return transport to Dar-es-Salaam (road or air)',
    '3 nights hotel accommodation (sharing basis)',
    'Half board meal plan',
    'Dar-es-Salaam city tour',
    'Kunduchi wet and wild water park visit',
    'Mbudya island tour',
    'Access to Dar-es-Salaam slipway',
    'Boat rides & Coco Beach visit',
    'Unlimited professional photography',
    'Guide fees and drinking water'
  ],
  price: 'From KSH 10,000 per person'
},
{
  id: 'bangkok-holiday-4-nights',
  title: 'Bangkok Holiday 4-Nights',
  location: 'Bangkok, Thailand',
  image: 'https://res.cloudinary.com/dancxhgah/image/upload/v1747650157/bangkok_sffrzb.jpg', // Replace with your actual image URL
  description: "Enjoy a 4-night holiday in Bangkok with return economy flights, airport transfers, daily breakfast, city tours, and exciting activities including a White Orchid cruise dinner, Damnoen Saduak floating market, and Ayutthaya day trip. Rates are subject to change and availability at booking.",
  features: [
    'Return economy flight tickets',
    'Return airport transfers',
    '4 Nights accommodation on sharing basis',
    'Daily breakfast',
    'Bangkok city tour',
    'White Orchid cruise dinner',
    'Damnoen Saduak floating market visit',
    'Ayutthaya day trip',
    'All activity transfers included'
  ],
  price: 'Rates subject to change and availability'
},

{
  id: 'explore-bali-komodo',
  title: 'Explore Bali & Komodo',
  location: 'Bali & Komodo Islands, Indonesia',
  image: 'https://res.cloudinary.com/dancxhgah/image/upload/v1747647838/Bali_komodo_csolek.jpg', // Replace with your actual image URL
  description: "7 Days 6 Nights adventure exploring Bali’s scenic spots and pristine Komodo Islands including Rinka, Padar, Pink Beach, and Manta Point. Includes daily breakfast, airport transfers, meet & greet, and a relaxing 1-hour Balinese massage. Book now with 30% deposit via Till No. 5179521.",
  features: [
    'Return economy flight tickets',
    'Airport transfers',
    'Bali meet & greet',
    '6 Nights accommodation on sharing basis',
    'Daily breakfast',
    'Swing & Coffee tour',
    'Explore Kintamani, Ubud, Nusa Penida, Komodo Islands',
    'Relaxing 1 hour Balinese massage'
  ],
  price: 'KES 299,000 per person (Deposit 30% of total amount)'
},
{
  id: 'tour-europe-2025',
  title: 'Tour Europe 2025 Package',
  location: 'Europe (7 Countries)',
  image: 'https://res.cloudinary.com/dancxhgah/image/upload/v1747650158/europe-lyn_zz6om9.png', // Replace with your actual image URL
  description: "Experience a grand tour across 7 stunning European countries including Germany, Belgium, Netherlands, Switzerland, Austria, Italy, and France. Inclusive of flights, 4-star accommodation, guided tours, and travel insurance.",
  features: [
    'Accommodation in 4-star hotels',
    'Daily breakfast',
    'Entry tickets as per itinerary',
    'All activities as per package',
    'European visa fees',
    'Return international flights',
    'Tour 7 countries',
    'Transfers as per package',
    'City tours as per itinerary',
    'Travel insurance',
    'Return airport transfers'
  ],
  price: 'From June 15th 2025'
},
{
  id: 'dubai-early-christmas-package',
  title: 'Early Christmas Group Joining - Dubai Package',
  location: 'Dubai, UAE',
  image: 'https://res.cloudinary.com/dancxhgah/image/upload/v1747650168/early-christmas-lynn_zedija.png', // Replace this with your actual image URL
  description: "Celebrate an early Christmas in Dubai with this exciting group package. Includes flights, hotel stay, desert safari, guided tours, and more — ideal for a memorable holiday experience.",
  features: [
    'Economy Flight tickets (Air Arabia or Emirates)',
    'Return Airport Transfers in Dubai',
    'Meet & greet assistance at the airport',
    '5 Nights Accommodation (Sharing)',
    'Daily Buffet Breakfast',
    'Desert Safari & BBQ Dinner',
    'Visit Dubai Mall, Burj Khalifa base, Fountain show, shopping guide',
    'Marina Dhow Cruise with dinner on sharing basis',
    'Half Day Dubai Guided City Tour',
    'All Transfers on sharing basis'
  ],
  price: 'From USD 999 (Air Arabia) / USD 1299 (Emirates)'
},
{
  id: 'maasai-mara-serengeti-ngorongoro-amboseli',
  title: 'Kenya-Tanzania Multi-Park Safari',
  location: 'Kenya & Tanzania',
  image: 'https://res.cloudinary.com/dancxhgah/image/upload/v1747540754/MaraPicPackage_hyfg0t.jpg',
  description: "A comprehensive safari covering East Africa’s iconic parks. Includes full-board stays and game drives across Maasai Mara, Serengeti, Ngorongoro, and Amboseli.",
  features: [
    '2 nights accommodation at Sarova Mara Camp',
    '2 nights accommodation at Serengeti',
    '2 nights accommodation at Ngorongoro',
    '2 nights accommodation at Amboseli',
    'Full-board meal plan',
    'Transport in a Land Cruiser',
    'Park and conservation fees',
    'Afternoon and full-day game drives in all parks'
  ],
  price: 'USD 4,355 per person (based on 2 pax sharing)'
},
{
  id: 'ngemai-trip',
  title: 'Ngemai Weekend Getaway',
  location: 'Kenya',
  image: 'https://res.cloudinary.com/dancxhgah/image/upload/v1747540756/NgemaiPic_el17sj.jpg',
  description: "A short adventure getaway to Ngemai Festival in Naivasha with accommodation, meals, and event access included.",
  features: [
    'Transport to and from Ngemai',
    'Accommodation (sharing basis)',
    'Meals on half board basis',
    'Event tickets',
    'Group activities and entertainment'
  ],
  price: 'From KSH 7,900 per person'
},
{
  id: 'mwalimu-mombasa-holiday',
  title: 'Mwalimu Ji-Bless na a Holiday',
  location: 'Mombasa, Kenya',
  image: 'https://res.cloudinary.com/dancxhgah/image/upload/v1747540755/mombasaPic_kivnpy.jpg',
  description: 'Enjoy a refreshing 3-day, 2-night beach getaway in Mombasa with convenient SGR travel, full accommodation, and meals at your chosen hotel.',
  features: [
    '2-Night Accommodation',
    'Return SGR economy tickets',
    'Return SGR transfers',
    'Meals as per the chosen hotel'
  ],
  price: 'From KES 18,950 per person sharing'
}




];
export const BushSafaris: React.FC = () => {
  const navigate=useNavigate()
  const handleSafariClick = (id: string) => {
    navigate(`/Details/${id}/bushSafari`);
    console.log(`Viewing details for ${id}`);
  };


  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Travel Experiences</h2>
        <p className="text-lg text-gray-600">
         Each of our travel packages is a bespoke experience, thoughtfully designed to immerse you in the culture, beauty, and adventure of your chosen destination. From Mid- luxury accommodations and seamless transfers to exclusive excursions and personalized touches, we handle every detail so you can focus on making memories. Whether it’s a romantic escape, a family adventure, or a cultural exploration, Lynnie Travis Adventures ensures your trip is perfectly tailored to your desires and delivered with impeccable service.

        </p>
      </div>
      
      <div className="flex flex-wrap justify-center items-center w-full mx-auto p-4">
      {safariExperiences.map((safari) => (
        <div
          key={safari.id}
          className="bg-white w-full rounded  min-h-[18rem] gap-5 shadow overflow-hidden cursor-pointer transform transition hover:scale-105 m-2 max-w-[20rem]"
          onClick={() => handleSafariClick(safari.id)}
        >
          <div className="h-28 overflow-hidden">
            <img
              src={safari.image}
              alt={safari.title}
              className="w-full h-full object-cover"
            />
          </div>
         
          <div className="p-3">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-sm font-bold text-gray-800">{safari.title}</h3>
              <div className="flex flex-col items-end">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-1.5 py-0.5 rounded mb-1">
                  {safari.location}
                </span>
             
              </div>
            </div>
           
            <p className="text-xs text-gray-600 mb-2">{safari.description}</p>
           
            <div className="flex justify-between items-center">
              <span className="text-gray-800 text-sm font-semibold">{safari.price}</span>
              <button className="bg-yellow-600 text-white text-xs px-2 py-1 rounded hover:bg-yellow-700 transition">
                Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
        {/* <div className="text-green-600">Effortless luxury travel, thoughtfully curated for unforgettable journey</div> */}

      <div className="mt-12 bg-gray-100 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Safari Planning Guide</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-gray-800 mb-2">Best Time to Visit</h4>
            <p className="text-gray-600">
              Different regions have optimal safari seasons. For migrations, plan for July-October. For general wildlife viewing,
              the dry season (June-October) is excellent in most countries.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-gray-800 mb-2">What to Pack</h4>
            <p className="text-gray-600">
              Light, neutral-colored clothing, sun protection, binoculars, camera equipment, and any medications you may need.
              Most lodges offer laundry services.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-gray-800 mb-2">Budget Considerations</h4>
            <p className="text-gray-600">
              Safari costs can vary widely. We offer options from budget camping to ultra-luxury lodges. Contact us to tailor
              an experience that matches your budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};