
  
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
      title: 'Tracking the Elusive Leopards of Maasai Mara',
  excerpt: 'Experience the thrill of spotting one of Africa’s most elusive predators during our recent safari adventure in the Maasai Mara.',
  content: `<p>The leopard is one of Africa’s most elusive and captivating big cats. Known for their solitary nature and remarkable stealth, leopards are masterful hunters and expert climbers, often found resting in the branches of acacia trees or hidden among the tall grasses of the Maasai Mara.</p>

      <p>During our recent safari adventure, we were fortunate enough to encounter a beautiful female leopard draped across the branch of a fig tree, calmly surveying her territory. The scene was both serene and powerful — a rare moment that many safari-goers dream of witnessing.</p>
      
      <p>Unlike the more social lions or visible cheetahs, leopards are notoriously difficult to track. Their nocturnal habits and excellent camouflage make daytime sightings a true privilege. Our experienced guide, with over two decades of tracking expertise, led us to the sighting by reading subtle signs: fresh tracks in the dust, alarm calls from impalas, and disturbed birds overhead.</p>
      
      <p>We patiently observed as the leopard descended gracefully from the tree, her muscles rippling with every step. She moved with purpose through the underbrush, possibly in search of prey or simply patrolling her range. Every movement was a reminder of her raw strength and elegance.</p>
      
      <p>The Maasai Mara is home to a healthy leopard population, thanks to its well-protected habitats and abundance of prey. However, these cats still face threats from habitat loss and human encroachment. Conservation efforts and responsible tourism are key to ensuring their continued survival in the wild.</p>
      
      <p>If you're planning a safari with hopes of spotting a leopard, patience and an experienced guide are your best assets. Early morning and late evening drives offer the highest chances, especially around riverine forests and rocky outcrops where leopards like to rest and hunt.</p>`,

      author: 'James Kimani',
      date: 'April 15, 2025',
      location: 'Maasai Mara, Kenya',
      type: 'vlog',
      thumbnail: 'https://images.pexels.com/photos/20449623/pexels-photo-20449623/free-photo-of-leopard-in-sunlight-and-shadow.jpeg?auto=compress&cs=tinysrgb&w=600',
    videoUrl: 'https://res.cloudinary.com/dancxhgah/video/upload/v1747076802/krz2vffcr70ckrgirc7a.mp4',

      featured: true,
      categories: ['Wildlife', 'Maasai Mara', 'Migration']
    },
    {
      id: 'post-2',
      title: ' Elephants of Amboseli',
      excerpt: 'Join us as we track a pride of Elephants across the stunning landscapes of Amboseli National Park.',
     content: `<p>As the morning sun cast golden light across the savannah of Amboseli National Park, our safari vehicle approached a majestic herd of elephants slowly making their way across the open plains. With the snow-capped peak of Mount Kilimanjaro rising in the background, we were treated to an unforgettable encounter with some of Africa’s most iconic giants.</p>
  
      <p>The herd was led by an experienced matriarch, guiding several adult females and their young. Watching the calves play and interact under the watchful eyes of their mothers highlighted the strong social bonds that define elephant families. Their gentle nature and intelligence were evident in every movement and gesture.</p>
      
      <p>Our knowledgeable guide, who has been observing Amboseli’s elephants for years, shared fascinating stories about their individual personalities and long-distance migrations. We learned how elephants use their tusks to dig for water during dry seasons and how their movements shape the ecosystem around them.</p>
      
      <p>Amboseli is world-renowned for its elephant population, especially the large-tusked bulls that roam freely through the park. We were fortunate to see one such bull a breathtaking sight as he emerged from the dust with towering tusks and a calm, commanding presence.</p>
      
      <p>Thanks to decades of conservation work, Amboseli’s elephants are among the best-studied and most protected in Africa. However, threats such as habitat encroachment and human-wildlife conflict remain. Continued support for community-based conservation and anti-poaching efforts is essential to safeguard the future of these remarkable animals.</p>
      
      <p>If you're planning a visit to Amboseli, early morning and late afternoon game drives provide the best chances to observe elephants at their most active. Be sure to bring binoculars and a camera, and always follow your guide’s advice to ensure a safe and respectful wildlife experience.</p>`,

      author: 'Sarah Wanjiku',
      date: 'March 28, 2025',
      location: 'Amboseli, Kenya',
      type: 'blog',
      thumbnail: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=600',
      // videoUrl: 'https://res.cloudinary.com/dancxhgah/video/upload/v1747076846/buhmnokcfkaajb7fyzte.mp4',
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
 title: 'Samburu: Land of Tradition and Timeless Culture',
excerpt: 'Discover the rich cultural heritage of the Samburu people, set against the breathtaking wilderness of northern Kenya.',
content: `
While Kenya’s natural beauty often takes center stage, the cultural experience offered by the Samburu people is equally captivating. During our recent journey through Samburu National Reserve, we had the rare privilege of immersing ourselves in the traditions, stories, and lifestyle of one of Kenya’s most vibrant pastoralist communities.

The Samburu people, closely related to the Maasai, are semi-nomadic herders who have preserved their customs and way of life for centuries. Dressed in brilliantly colored shukas and adorned with intricate beadwork, Samburu men and women display their cultural identity with pride. Every color and pattern in their beadwork holds symbolic meaning — red for bravery, blue for the sky, and green for prosperity — creating a visual language passed down through generations.

Our cultural immersion began with a visit to a local manyatta (homestead), where we were welcomed with traditional songs and dances. The rhythmic jumping, singing, and ululations echoed across the plains, a celebration of community and heritage. Samburu warriors, or morans, demonstrated their rites of passage and shared stories of courage and survival that define their role as protectors of their people and livestock.

We also sat down with elders who shared the oral history of the Samburu, tales of migration, conflict, and harmony with nature. These stories offered profound insights into how deeply the Samburu are connected to the land and its creatures. Their spiritual beliefs, including reverence for the god Nkai, influence daily decisions, from cattle grazing to naming ceremonies.

A highlight of our cultural exchange was learning about the Samburu diet, centered around livestock products such as milk and blood, which are consumed fresh or fermented depending on the occasion. Women demonstrated how they make traditional meals and use natural herbs for healing — practices passed down through maternal lines for generations.

The Samburu people's harmony with their environment is evident in their role in wildlife conservation. Living alongside elephants, lions, and leopards, they act as stewards of biodiversity, blending traditional knowledge with modern conservation efforts. Initiatives such as community conservancies empower Samburu communities to protect their natural heritage while benefitting from sustainable tourism.

As night fell, we sat by the fire under a sky ablaze with stars, listening to ancient Samburu myths. Tales of heroic animals, ancestral spirits, and the creation of the world brought their cosmology to life. These stories not only entertained but also educated, carrying moral lessons and deep respect for life.

For travelers seeking more than wildlife sightings, Samburu offers a cultural journey into a way of life that honors the past while embracing the future. By engaging respectfully with local communities, visitors can support cultural preservation and walk away with a deeper understanding of Kenya’s diverse human heritage.
`,
  author: 'Lisa Akinyi',
  date: 'February 20, 2025',
  location: 'Samburu, Kenya',
  type: 'vlog',
  thumbnail: 'https://res.cloudinary.com/dancxhgah/image/upload/v1747539694/samburu_ekbygs.jpg',
  videoUrl: 'https://res.cloudinary.com/dancxhgah/video/upload/v1747540140/samburuCulture_e4oz5x.mp4',
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