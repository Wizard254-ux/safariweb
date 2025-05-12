
  
// Define post interface type
export interface Post {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    location: string;
    type: 'blog' | 'vlog';
    thumbnail: string;
    videoUrl?: string;
    featured: boolean;
    categories: string[];
  }
  
  // Sample blog and vlog posts data with Pexels images and real YouTube videos
  export const posts: Post[] = [
    {
      id: 'post-1',
      title: 'Witnessing the Great Migration in Maasai Mara',
      excerpt: 'Experience the breathtaking sight of wildebeest crossing the Mara River during our recent safari expedition.',
      content: `<p>The annual Great Migration is one of nature's most spectacular events. Each year, over 1.5 million wildebeest, along with vast herds of zebras and gazelles, make the perilous journey from Tanzania's Serengeti to Kenya's Maasai Mara in search of fresh grazing.</p>
  
      <p>During our recent expedition, we were fortunate enough to witness the dramatic river crossing at the Mara River. The tension builds as thousands of animals gather at the riverbank, hesitant to be the first to take the plunge. When finally one brave wildebeest makes the leap, the rest follow in a chaotic rush.</p>
      
      <p>The crocodiles lying in wait add another dimension of drama to this natural spectacle. These prehistoric predators have perfected their ambush techniques over millions of years, and the wildebeest must run this gauntlet as part of their ancient migratory route.</p>
      
      <p>We positioned ourselves at a prime viewing location at dawn, following tips from our experienced guide who has tracked these migrations for over two decades. The early morning light cast a golden glow over the landscape, creating the perfect conditions for both viewing and photography.</p>
      
      <p>Beyond the river crossing itself, the sheer scale of the migration transforms the Mara landscape. The plains become a moving sea of wildlife, with predators following in the wake of the herds. We observed several lion prides strategically positioning themselves to take advantage of this seasonal bounty.</p>
      
      <p>For those planning to witness this remarkable event, timing is crucial. The migration reaches the Maasai Mara around July and remains until October before heading back to the Serengeti. However, climate change has been affecting these traditional patterns, making local knowledge even more valuable when planning your safari.</p>`,
      author: 'James Kimani',
      date: 'April 15, 2025',
      location: 'Maasai Mara, Kenya',
      type: 'blog',
      thumbnail: 'https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg',
      featured: true,
      categories: ['Wildlife', 'Maasai Mara', 'Migration']
    },
    {
      id: 'post-2',
      title: 'Big Cat Encounter: Lions of Amboseli',
      excerpt: 'Join us as we track a pride of lions across the stunning landscapes of Amboseli National Park.',
      content: `<p>As the morning sun cast golden light across the savannah of Amboseli National Park, our safari vehicle approached a pride of lions resting under an acacia tree. With the majestic Mount Kilimanjaro creating a stunning backdrop, we were treated to an intimate glimpse into the lives of these magnificent big cats.</p>
  
      <p>The pride consisted of two adult males, displaying their impressive manes, five females, and several cubs of different ages. The interaction between the cubs was particularly fascinating, as they played and practiced hunting skills that would one day become essential for their survival.</p>
      
      <p>Our experienced guide, who has been tracking this particular pride for several years, shared valuable insights into their behavior and social structure. We learned how the territory of this pride extends across a significant portion of the park, and how they navigate the challenges posed by the seasonal changes in their environment.</p>
      
      <p>The hunting strategy of lions is a marvel of natural evolution. We were fortunate enough to witness the early stages of a hunt, where the females used teamwork and stealth to close in on a small herd of gazelles. While this particular attempt was unsuccessful, it demonstrated the impressive coordination and patience these predators possess.</p>
      
      <p>Conservation efforts in Amboseli have helped maintain healthy lion populations, but these magnificent animals still face numerous threats across Africa. Habitat loss, human-wildlife conflict, and poaching continue to put pressure on big cat populations. Supporting local conservation initiatives is crucial for ensuring these iconic species continue to thrive in their natural habitats.</p>
      
      <p>If you're planning a visit to Amboseli, early morning and late afternoon game drives offer the best opportunities for lion sightings, as these are the times when the pride is most active. Remember to maintain a respectful distance and follow your guide's instructions to ensure both your safety and the wellbeing of these wild animals.</p>`,
      author: 'Sarah Wanjiku',
      date: 'March 28, 2025',
      location: 'Amboseli, Kenya',
      type: 'vlog',
      thumbnail: 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg',
      videoUrl: 'https://res.cloudinary.com/dancxhgah/video/upload/v1747076723/i94wn4kkvo0yeqd3mgoc.mp4',
      featured: true,
      categories: ['Big Cats', 'Amboseli', 'Wildlife']
    },
    {
      id: 'post-3',
      title: 'Luxury Safari Accommodation: Top 5 Eco-Lodges in Kenya',
      excerpt: 'Discover our selection of the most sustainable and luxurious safari accommodations in Kenya.',
      content: `<p>Kenya offers some of the world's most impressive eco-friendly luxury accommodations, where sustainable practices meet unparalleled comfort. Here are our top five picks for eco-conscious travelers seeking an authentic yet luxurious safari experience:</p>
  
      <h3>1. Lewa Wilderness, Laikipia</h3>
      <p>Nestled in the wildlife-rich Laikipia region, Lewa Wilderness combines colonial charm with modern sustainability. Solar power provides most of the lodge's energy needs, while water is recycled through an innovative filtration system. Each of the nine spacious thatched cottages offers panoramic views of the wilderness, and the lodge's farm-to-table approach ensures fresh, organic meals daily. Their conservation efforts have helped increase rhino populations significantly over the past decade.</p>
      
      <h3>2. Campi ya Kanzi, Chyulu Hills</h3>
      <p>This intimate lodge sits at the foot of the Chyulu Hills with spectacular views of Mount Kilimanjaro. Built using only local materials and powered entirely by solar energy, Campi ya Kanzi sets the standard for eco-luxury. The Maasai-owned conservancy provides a vital income stream for local communities while protecting critical wildlife corridors. Their unique water harvesting system has become a model for sustainable development in arid regions.</p>
      
      <h3>3. Angama Mara, Maasai Mara</h3>
      <p>Perched on the edge of the Great Rift Valley, Angama Mara offers breathtaking views over the Maasai Mara. The tented suites blend seamlessly with the landscape while providing unparalleled luxury. Their extensive sustainability initiatives include a zero-plastic policy, community vegetable gardens, and a comprehensive recycling program. The lodge's proximity to river crossing points makes it ideal for migration viewing.</p>
      
      <h3>4. Ol Donyo Lodge, Chyulu Hills</h3>
      <p>This Relais & Châteaux property sits on 275,000 acres of private conservancy between Tsavo and Amboseli. Each suite features a private plunge pool and rooftop star bed for sleeping under the African sky. Their partnership with local Maasai communities has created a sustainable conservation model that protects both wildlife and traditional ways of life. The lodge operates entirely on solar power and has implemented innovative water conservation measures.</p>
      
      <h3>5. Segera Retreat, Laikipia</h3>
      <p>Perhaps Kenya's most exclusive eco-lodge, Segera combines environmental conservation with an impressive contemporary African art collection. The botanical gardens use recycled water, while solar farms provide clean energy. Their "4Cs" approach (Conservation, Community, Culture, and Commerce) ensures that luxury tourism directly benefits both the environment and local communities. The unique elevated villas provide exceptional wildlife viewing opportunities right from your private deck.</p>
      
      <p>When choosing sustainable luxury accommodations, look beyond marketing claims and ask about specific conservation initiatives, community involvement, and resource management. The best eco-lodges are transparent about their practices and eager to share their sustainability journey with guests.</p>`,
      author: 'Daniel Muthui',
      date: 'March 10, 2025',
      location: 'Various, Kenya',
      type: 'blog',
      thumbnail: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg',
      featured: false,
      categories: ['Accommodation', 'Luxury', 'Eco-Tourism']
    },
{
  id: 'post-4',
  title: 'Elusive Leopards of Samburu: A Rare Encounter',
  excerpt: 'Witness the mesmerizing stealth and beauty of leopards against the stunning backdrop of Samburu National Reserve.',
  content: `
While Kenya offers incredible wildlife diversity, few experiences compare to encountering the elusive leopard in its natural habitat. During our recent expedition to Samburu National Reserve in northern Kenya, we were blessed with multiple sightings of these magnificent cats, each encounter more breathtaking than the last.

Leopards are among Africa's most secretive big cats, masters of camouflage who prefer solitary lives in the shadows. Unlike lions that roam the plains in prides or cheetahs that hunt in daylight, leopards thrive in invisibility, making each sighting particularly special. Samburu's unique landscape of acacia woodlands, riverine forests, and rocky outcrops provides the perfect habitat for these spotted predators.

Our journey began at dawn when our guide, Lentorre, received word of a female leopard sighting near the Ewaso Ng'iro river. As we approached, we spotted her gracefully draped across the branch of an acacia tree, her spotted coat blending seamlessly with the dappled sunlight filtering through the leaves. Her powerful, compact body and intense gaze revealed why leopards have long been revered as symbols of power and mystery across African cultures.

What made our experience particularly special was witnessing hunting behavior rather than simply observing a resting cat. As the afternoon cooled, we watched in hushed awe as the leopard descended from her arboreal perch with liquid grace, her movements calculated and deliberate. The precision and patience displayed as she stalked an unsuspecting impala gave us new appreciation for these apex predators and their remarkable hunting abilities.

Perhaps the most enlightening aspect of our leopard encounters was learning about their ecological role from our Samburu guide. Leopards help maintain healthy prey populations by targeting weak or sick animals. Their ability to hoist kills into trees prevents scavenging by other predators, creating a unique ecological niche. This traditional knowledge represented centuries of careful observation by the Samburu people who share this landscape with these magnificent cats.

The wildlife experience was enhanced by the Samburu trackers who accompanied us. Their ability to spot and interpret signs allowed us to witness not only leopards but other rare species like the reticulated giraffe, Grevy's zebra, and the gerenuk - the distinctive long-necked antelope that feeds while standing on its hind legs.

In the evening, gathered around a campfire under the vast African sky, we reflected on our leopard encounters while listening to ancient Samburu myths and legends. These stories, featuring the leopard as a central character, revealed the deep respect local communities have for these beautiful yet formidable creatures.

For travelers seeking memorable safari experiences, we highly recommend Samburu for leopard sightings. The most rewarding experiences come through patience and respect for these animals' space, allowing them to reveal themselves naturally while appreciating their critical role in this delicate ecosystem.
`,
  author: 'Lisa Akinyi',
  date: 'February 20, 2025',
  location: 'Samburu, Kenya',
  type: 'vlog',
  thumbnail: 'https://images.pexels.com/photos/3758104/pexels-photo-3758104.jpeg',
  videoUrl: 'https://res.cloudinary.com/dancxhgah/video/upload/v1747076802/krz2vffcr70ckrgirc7a.mp4',
  featured: false,
  categories: ['Wildlife', 'Samburu', 'Big Cats']
},
    {
      id: 'post-5',
      title: 'Photography Tips for Your Kenyan Safari',
      excerpt: 'Master wildlife photography with these essential tips from our resident photographer.',
      content: `<p>Capturing the perfect wildlife shot requires patience, skill, and knowledge. As someone who has spent over a decade photographing Kenya's diverse wildlife, I'd like to share some essential tips to help you make the most of your safari photography experience.</p>
  
      <h3>1. Choose the Right Equipment</h3>
      <p>While professional wildlife photographers often use expensive gear, you can capture stunning images with more modest equipment. A DSLR or mirrorless camera with a zoom lens in the 100-400mm range will cover most situations. Remember that weight is a consideration on safari, so balance quality with practicality. Don't forget spare batteries and memory cards – power can be limited in remote locations, and you'll take more photos than you expect!</p>
      
      <h3>2. Master the Golden Hours</h3>
      <p>The first and last hours of daylight provide magical conditions for wildlife photography. The soft, warm light during these "golden hours" adds depth and dimension to your subjects. This timing also coincides with peak animal activity. Work with your guide to ensure you're in prime wildlife areas during these crucial periods.</p>
      
      <h3>3. Understand Animal Behavior</h3>
      <p>Anticipating animal behavior will dramatically improve your photography. Learn the basic habits of your target species – are they more active in morning or evening? What signs indicate they might be about to hunt or charge? Your guide can provide valuable insights, but doing some research before your trip will help you recognize important moments before they happen.</p>
      
      <h3>4. Master the Technical Basics</h3>
      <p>Wildlife photography often requires quick adjustments. Learn to use aperture priority mode (typically A or Av on your camera) with a wide aperture (low f-number) to create a shallow depth of field that separates your subject from the background. Use a fast shutter speed (at least 1/500s for stationary animals, 1/1000s or faster for moving subjects) to freeze action, and don't be afraid to increase your ISO in low light conditions.</p>
      
      <h3>5. Composition Matters</h3>
      <p>Great wildlife photos tell a story. Consider the rule of thirds and leave space in the direction an animal is facing or moving. Include environmental context when possible – a lion against the backdrop of Mount Kilimanjaro tells a much more powerful story than a tight portrait. At the same time, don't be afraid of intimate close-ups that reveal character and detail.</p>
      
      <h3>6. Be Patient and Respectful</h3>
      <p>The most memorable wildlife images come from patience. Sometimes this means waiting at a waterhole for hours or following a predator until it hunts. Always prioritize animal welfare over getting a shot – maintain appropriate distances and never pressure your guide to get closer if it might disturb the animals.</p>
      
      <h3>7. Be Prepared for Challenging Conditions</h3>
      <p>Safari vehicles can be dusty, and bumpy roads make stability challenging. Bring a beanbag rest to stabilize your camera on the vehicle. A rain cover for your equipment is essential during the green season. Lens cloths for dust and condensation are also indispensable.</p>
      
      <p>Remember that perfecting wildlife photography takes time. Even if your first safari doesn't yield National Geographic-worthy shots, the experience of observing these magnificent animals in their natural habitat is the true reward. Your photos, whatever their technical quality, will be precious memories of an extraordinary adventure.</p>`,
      author: 'Michael Omondi',
      date: 'April 5, 2025',
      location: 'Kenya',
      type: 'blog',
      thumbnail: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
      featured: true,
      categories: ['Photography', 'Tips', 'Safari Skills']
    },
    {
      id: 'post-6',
      title: 'Elephant Conservation Efforts in Tsavo',
      excerpt: 'Learn about the vital conservation work being done to protect Kenya\'s elephant populations.',
      content: `<p>Kenya's elephant populations face ongoing challenges from poaching and habitat loss, but dedicated conservation efforts in Tsavo are making a significant difference. During our recent documentary filming project, we had the privilege of witnessing these initiatives firsthand.</p>
  
      <p>Tsavo National Park, comprising Tsavo East and Tsavo West, forms one of Africa's largest protected areas and is home to Kenya's largest elephant population. These magnificent creatures, known for their distinctive red coloration from dust-bathing in Tsavo's red soil, have faced severe threats over the decades.</p>
      
      <p>The Sheldrick Wildlife Trust operates its most famous project here - the orphaned elephant rescue and rehabilitation program. We spent several days documenting the incredible work of the keepers who serve as surrogate parents to young elephants orphaned primarily due to poaching. The bond between these keepers and their charges is extraordinary, with the men even sleeping in the same enclosures as their elephant orphans.</p>
      
      <p>What makes this program particularly successful is its holistic approach to conservation. Beyond the immediate rescue work, the trust manages anti-poaching teams, mobile veterinary units, and community outreach programs that address the complex issues surrounding human-wildlife conflict.</p>
      
      <p>Technological innovation plays a crucial role in modern conservation. We observed how GPS tracking collars provide vital data on elephant movements, helping identify critical migration corridors that need protection. Drone surveillance has revolutionized anti-poaching efforts, allowing rangers to monitor vast areas more effectively.</p>
      
      <p>Community involvement stands at the heart of sustainable conservation. Local Maasai and Taita communities now participate in various initiatives that provide economic benefits from conservation rather than conflict. From eco-tourism jobs to beekeeping projects that serve the dual purpose of creating income and deterring elephants from crop-raiding, these programs demonstrate that protection of wildlife and community development can work hand-in-hand.</p>
      
      <p>The results speak for themselves. Elephant populations in Tsavo have shown remarkable recovery in recent years, with poaching incidents declining significantly. New calves are being born at healthy rates, a clear sign of a recovering population.</p>
      
      <p>For visitors to Kenya, supporting ethical wildlife experiences that contribute directly to conservation efforts is perhaps the most meaningful way to help. Whether through visiting sanctuaries that follow responsible practices or choosing lodges that invest in community conservation, your tourism choices can make a real difference.</p>
      
      <p>As climate change intensifies water scarcity in this already arid region, conservation organizations are also implementing innovative water management projects that benefit both wildlife and local communities. These forward-thinking approaches will be crucial as environmental pressures increase in coming decades.</p>`,
      author: 'Grace Mwangi',
      date: 'March 22, 2025',
      location: 'Tsavo, Kenya',
      type: 'vlog',
      thumbnail: 'https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg',
      videoUrl: 'https://res.cloudinary.com/dancxhgah/video/upload/v1747076846/buhmnokcfkaajb7fyzte.mp4',
      featured: true,
      categories: ['Conservation', 'Elephants', 'Tsavo']
    }
  ];