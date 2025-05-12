import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { TopBar } from '../components/TopBar';
import Footer from '../components/Footer';
import { posts } from '../components/BlogsInterface';

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

const PostDetailPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const apiUrl ='https://missionsys-backend.onrender.com';

  const [commentForm, setCommentForm] = useState({
  name: '',
  email: '',
  comment: ''
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [commentStatus, setCommentStatus] = useState<'idle' | 'success' | 'error'>('idle');
const [commentError, setCommentError] = useState('');

// Add this function to handle form submission
const handleCommentSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Validate form
  if (!commentForm.name || !commentForm.email || !commentForm.comment) {
    setCommentStatus('error');
    setCommentError('All fields are required');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(commentForm.email)) {
    setCommentStatus('error');
    setCommentError('Please enter a valid email address');
    return;
  }
  
  try {
    setIsSubmitting(true);
    setCommentStatus('idle');
    setCommentError('');
    
    // Replace with your actual API endpoint
    
    const response = await fetch(`${apiUrl}/api/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...commentForm,
        postId: postId
      }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit comment');
    }
    
    // Clear form and show success message
    setCommentForm({
      name: '',
      email: '',
      comment: ''
    });
    setCommentStatus('success');
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setCommentStatus('idle');
    }, 5000);
    
  } catch (error) {
    console.error('Error submitting comment:', error);
    setCommentStatus('error');
    setCommentError(error instanceof Error ? error.message : 'An unknown error occurred');
  } finally {
    setIsSubmitting(false);
  }
};

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (postId) {
      // Find the post with the matching ID
      const foundPost = posts.find(p => p.id === postId);
      
      if (foundPost) {
        setPost(foundPost);
        
        // Find related posts based on categories (excluding current post)
        const related = posts
          .filter(p => 
            p.id !== postId && 
            p.categories.some(cat => foundPost.categories.includes(cat))
          )
          .sort(() => 0.5 - Math.random()) // Shuffle
          .slice(0, 3); // Get up to 3 related posts
        
        setRelatedPosts(related);
      }
    }
    
    setLoading(false);
  }, [postId]);

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Convert YouTube URL to embed format
  const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return '';
    
    // Extract video ID from various YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    if (match && match[2].length === 11) {
      // Return the embed URL with the extracted video ID
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    
    // If no match found or not a valid YouTube URL, return the original URL
    return url;
  };

  // Handle back button click
  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div>
        <TopBar />
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The post you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={handleBack}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Go Back
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <TopBar />
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <button 
            onClick={handleBack}
            className="hover:text-green-600 flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
          <span className="mx-2">/</span>
          <span>{post.type === 'blog' ? 'Blogs' : 'Vlogs'}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{post.title}</span>
        </div>

        {/* Post Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {post.type === 'blog' ? 'Blog' : 'Vlog'}
            </span>
            {post.featured && (
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Featured
              </span>
            )}
            <span className="text-gray-500 text-sm">
              {formatDate(post.date)}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
              {post.author.charAt(0)}
            </div>
            <div>
              <div className="font-medium text-gray-900">
                {post.author}
              </div>
              <div className="text-sm text-gray-600">
                {post.location}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image or Video */}
        <div className="relative mb-10 rounded-lg overflow-hidden">
          {post.type === 'vlog' && post.videoUrl ? (
            <div className="aspect-w-16 aspect-h-9 relative pt-[56.25%]">
              <iframe 
                src={getYouTubeEmbedUrl(post.videoUrl)} 
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
              ></iframe>
            </div>
          ) : (
            <img 
              src={post.thumbnail} 
              alt={post.title} 
              className="w-full h-auto max-h-96 object-cover rounded-lg"
            />
          )}
        </div>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {/* Render content as HTML if it contains HTML tags */}
          {post.content.includes('<') ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <p>{post.content}</p>
          )}
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Share this {post.type}</h3>
          <div className="flex gap-3">
            {/* Social media sharing buttons */}
            <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
            </button>
            <button className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>
            <button className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
            <button className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-12-12zm4.83 8.55c.24-.52.42-1.1.52-1.71-.73.42-1.54.72-2.41.89-.69-.74-1.68-1.2-2.77-1.2-2.09 0-3.79 1.7-3.79 3.79 0 .3.03.59.09.87-3.15-.16-5.94-1.67-7.81-3.97-.33.56-.51 1.21-.51 1.91 0 1.32.67 2.48 1.69 3.15-.62-.02-1.21-.19-1.72-.47v.05c0 1.84 1.31 3.37 3.04 3.72-.32.09-.65.13-1 .13-.24 0-.48-.02-.71-.07.48 1.51 1.88 2.6 3.54 2.63-1.3 1.02-2.94 1.62-4.71 1.62-.31 0-.61-.02-.9-.05 1.68 1.08 3.67 1.7 5.81 1.7 6.97 0 10.79-5.77 10.79-10.79 0-.16 0-.33-.01-.49.74-.53 1.38-1.2 1.89-1.96-.68.3-1.41.51-2.18.6z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Content</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative">
                    <img 
                      src={relatedPost.thumbnail} 
                      alt={relatedPost.title} 
                      className="w-full h-48 object-cover"
                    />
                    {relatedPost.type === 'vlog' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-red-600 bg-opacity-75 text-white rounded-full p-3 hover:bg-opacity-100 transition duration-300">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 bg-green-600 text-white text-xs px-2 py-1">
                      {relatedPost.location}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">{relatedPost.title}</h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link 
                      to={`/posts/${relatedPost.id}`} 
                      className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
                    >
                      {relatedPost.type === 'blog' ? 'Read article' : 'Watch video'}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comments Section */}

{/* Comment Form */}
<div className="bg-white rounded-lg shadow-md p-6 mb-8">
  <h4 className="text-lg font-bold text-gray-900 mb-4">Leave a Comment</h4>
  
  {commentStatus === 'success' && (
    <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">Thank you! Your comment has been submitted and is pending approval.</p>
        </div>
      </div>
    </div>
  )}
  
  {commentStatus === 'error' && (
    <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">Error: {commentError}</p>
        </div>
      </div>
    </div>
  )}
  
  <form onSubmit={handleCommentSubmit}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input 
          type="text" 
          id="name" 
          value={commentForm.name}
          onChange={(e) => setCommentForm({...commentForm, name: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input 
          type="email" 
          id="email" 
          value={commentForm.email}
          onChange={(e) => setCommentForm({...commentForm, email: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Your email"
          required
        />
      </div>
    </div>
    <div className="mb-4">
      <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
      <textarea 
        id="comment" 
        rows={4} 
        value={commentForm.comment}
        onChange={(e) => setCommentForm({...commentForm, comment: e.target.value})}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Your comment"
        required
      ></textarea>
    </div>
    <button 
      type="submit"
      className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 flex items-center"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Submitting...
        </>
      ) : "Post Comment"}
    </button>
  </form>
</div>
        {/* Newsletter Section */}
        <div className="bg-green-50 rounded-lg p-8 text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Never Miss a Post</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest safari stories, travel guides, and wildlife conservation updates.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 flex-grow"
            />
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetailPage;