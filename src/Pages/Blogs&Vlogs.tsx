import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { TopBar } from '../components/TopBar';
import Footer from '../components/Footer';

// Interface for blog and vlog posts
interface Post {
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

// Sample blog and vlog data
const posts: Post[] = [
  {
    id: 'post-1',
    title: 'Witnessing the Great Migration in Maasai Mara',
    excerpt: 'Experience the breathtaking sight of wildebeest crossing the Mara River during our recent safari expedition.',
    content: 'The annual Great Migration is one of nature\'s most spectacular events...',
    author: 'James Kimani',
    date: 'April 15, 2025',
    location: 'Maasai Mara, Kenya',
    type: 'blog',
    thumbnail: '/images/blogs/maasai-mara-migration.jpg',
    featured: true,
    categories: ['Wildlife', 'Maasai Mara', 'Migration']
  },
  {
    id: 'post-2',
    title: 'Big Cat Encounter: Lions of Amboseli',
    excerpt: 'Join us as we track a pride of lions across the stunning landscapes of Amboseli National Park.',
    content: 'As the morning sun cast golden light across the savannah...',
    author: 'Sarah Wanjiku',
    date: 'March 28, 2025',
    location: 'Amboseli, Kenya',
    type: 'vlog',
    thumbnail: '/images/vlogs/amboseli-lions-thumbnail.jpg',
    videoUrl: '/videos/amboseli-lions-encounter.mp4',
    featured: true,
    categories: ['Big Cats', 'Amboseli', 'Wildlife']
  },
  {
    id: 'post-3',
    title: 'Luxury Safari Accommodation: Top 5 Eco-Lodges in Kenya',
    excerpt: 'Discover our selection of the most sustainable and luxurious safari accommodations in Kenya.',
    content: 'Kenya offers some of the world\'s most impressive eco-friendly luxury accommodations...',
    author: 'Daniel Muthui',
    date: 'March 10, 2025',
    location: 'Various, Kenya',
    type: 'blog',
    thumbnail: '/images/blogs/eco-lodges-kenya.jpg',
    featured: false,
    categories: ['Accommodation', 'Luxury', 'Eco-Tourism']
  },
  {
    id: 'post-4',
    title: 'Samburu Cultural Experience: Beyond Wildlife',
    excerpt: 'Immerse yourself in the rich cultural heritage of the Samburu people alongside incredible wildlife sightings.',
    content: 'While Kenya\'s wildlife is world-renowned, the cultural experiences are equally enriching...',
    author: 'Lisa Akinyi',
    date: 'February 20, 2025',
    location: 'Samburu, Kenya',
    type: 'vlog',
    thumbnail: '/images/vlogs/samburu-culture-thumbnail.jpg',
    videoUrl: '/videos/samburu-cultural-safari.mp4',
    featured: false,
    categories: ['Culture', 'Samburu', 'Local Experience']
  },
  {
    id: 'post-5',
    title: 'Photography Tips for Your Kenyan Safari',
    excerpt: 'Master wildlife photography with these essential tips from our resident photographer.',
    content: 'Capturing the perfect wildlife shot requires patience, skill, and knowledge...',
    author: 'Michael Omondi',
    date: 'April 5, 2025',
    location: 'Kenya',
    type: 'blog',
    thumbnail: '/images/blogs/safari-photography-tips.jpg',
    featured: true,
    categories: ['Photography', 'Tips', 'Safari Skills']
  },
  {
    id: 'post-6',
    title: 'Elephant Conservation Efforts in Tsavo',
    excerpt: 'Learn about the vital conservation work being done to protect Kenya\'s elephant populations.',
    content: 'Kenya\'s elephant populations face ongoing challenges from poaching and habitat loss...',
    author: 'Grace Mwangi',
    date: 'March 22, 2025',
    location: 'Tsavo, Kenya',
    type: 'vlog',
    thumbnail: '/images/vlogs/elephant-conservation-thumbnail.jpg',
    videoUrl: '/videos/tsavo-elephant-conservation.mp4',
    featured: true,
    categories: ['Conservation', 'Elephants', 'Tsavo']
  }
];

// Filter type for content filtering
type FilterOption = 'all' | 'blogs' | 'vlogs' | 'featured';
type SortOption = 'latest' | 'oldest';

// Post Card Component
const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${post.featured ? 'border-2 border-yellow-400' : ''}`}>
      <div className="relative">
        <img 
          src={post.thumbnail} 
          alt={post.title} 
          className="w-full h-48 object-cover"
        />
        {post.type === 'vlog' && (
          <div className="absolute top-3 right-3 bg-red-600 text-white rounded-full p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <span className="text-xs font-medium text-white bg-green-600 px-2 py-1 rounded">
            {post.location}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-gray-900">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
              {post.author.charAt(0)}
            </div>
            <span className="ml-2 text-sm text-gray-700">{post.author}</span>
          </div>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.categories.map((category, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              {category}
            </span>
          ))}
        </div>
        {post.featured && (
          <div className="mt-3">
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Featured</span>
          </div>
        )}
        <div className="mt-6">
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300">
            {post.type === 'blog' ? 'Read More' : 'Watch Video'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Featured Post Component
const FeaturedPost: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <div className="md:flex">
        <div className="md:w-1/2">
          <div className="relative h-64 md:h-full">
            <img 
              src={post.thumbnail} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            {post.type === 'vlog' && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-red-600 text-white rounded-full p-4 bg-opacity-75 hover:bg-opacity-100 transition duration-300">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <div className="flex items-center mb-4">
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
              Featured
            </span>
            <span className="text-sm text-gray-500">{post.date}</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h2>
          <p className="text-gray-700 mb-6">{post.excerpt}</p>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
              {post.author.charAt(0)}
            </div>
            <div>
              <span className="font-medium text-gray-900">{post.author}</span>
              <p className="text-sm text-gray-600">{post.location}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories.map((category, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                {category}
              </span>
            ))}
          </div>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
            {post.type === 'blog' ? 'Read Full Article' : 'Watch Full Video'}
          </button>
        </div>
      </div>
    </div>
  );
};

const VlogAndBlogsPage: React.FC = () => {
  const [filter, setFilter] = useState<FilterOption>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sort, setSort] = useState<SortOption>('latest');

  // Extract all unique categories
  const allCategories = Array.from(
    new Set(posts.flatMap(post => post.categories))
  ).sort();

  // Filter and sort posts based on current filters
  const filteredPosts = posts.filter((post) => {
    // Filter by type or featured status
    if (filter === 'blogs' && post.type !== 'blog') return false;
    if (filter === 'vlogs' && post.type !== 'vlog') return false;
    if (filter === 'featured' && !post.featured) return false;
    
    // Filter by search term
    if (searchTerm && 
        !post.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !post.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !post.author.toLowerCase().includes(searchTerm.toLowerCase())
       ) return false;
    
    // Filter by category
    if (selectedCategory && !post.categories.includes(selectedCategory)) return false;
    
    return true;
  }).sort((a, b) => {
    // Sort by date
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    
    return sort === 'latest' ? 
      dateB.getTime() - dateA.getTime() : 
      dateA.getTime() - dateB.getTime();
  });

  // Get featured posts
  const featuredPosts = posts.filter(post => post.featured).sort(() => 0.5 - Math.random()).slice(0, 2);

  return (
    <div>
      <TopBar />
      <Navigation />
      <div className="mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Safari Vlogs & Blogs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in Kenya's wild beauty through our collection of safari stories, 
            videos, and expert insights from the bush.
          </p>
        </div>

        {/* Featured Posts Carousel */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Content</h2>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </div>
        )}

        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                All Content
              </button>
              <button 
                onClick={() => setFilter('blogs')}
                className={`px-4 py-2 rounded-full ${filter === 'blogs' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Blogs
              </button>
              <button 
                onClick={() => setFilter('vlogs')}
                className={`px-4 py-2 rounded-full ${filter === 'vlogs' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Vlogs
              </button>
              <button 
                onClick={() => setFilter('featured')}
                className={`px-4 py-2 rounded-full ${filter === 'featured' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Featured
              </button>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-gray-700">Sort:</span>
              <button 
                onClick={() => setSort('latest')}
                className={`px-3 py-1 rounded ${sort === 'latest' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Latest
              </button>
              <button 
                onClick={() => setSort('oldest')}
                className={`px-3 py-1 rounded ${sort === 'oldest' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Oldest
              </button>
            </div>
          </div>
          
          <div className="md:flex gap-4">
            <div className="mb-4 md:mb-0 md:flex-1">
              <input
                type="text"
                placeholder="Search by title, location, or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="w-full md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">All Categories</option>
                {allCategories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No content matches your search criteria.</p>
            <button 
              onClick={() => {setFilter('all'); setSearchTerm(''); setSelectedCategory('');}}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Upload Your Content CTA */}
        <div className="mt-16 bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Safari Story</h2>
          <p className="text-gray-700 mb-6">
            Been on one of our safaris? We'd love to feature your photos, videos, or blog posts about your experience!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
              Upload Your Photos
            </button>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
              Submit Your Story
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VlogAndBlogsPage;