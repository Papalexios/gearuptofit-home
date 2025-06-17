
export interface BlogPost {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  category?: string;
  image?: string;
}

// Fallback data in case RSS feed fails
const fallbackPosts: BlogPost[] = [
  {
    title: "Best Treadmills for Home Workouts in 2024",
    description: "Comprehensive review of the top treadmills that deliver professional gym quality in your home. Features, pricing, and performance analysis.",
    link: "https://gearuptofit.com/fitness-equipment/best-treadmills-home-workouts",
    pubDate: new Date().toISOString(),
    category: "Equipment Review",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "HIIT vs Steady State: Which Burns More Fat?",
    description: "Scientific breakdown of high-intensity interval training versus steady-state cardio for maximum fat burning and fitness results.",
    link: "https://gearuptofit.com/fitness/hiit-vs-steady-state-cardio",
    pubDate: new Date(Date.now() - 86400000).toISOString(),
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Marathon Training Nutrition Guide",
    description: "Essential nutrition strategies for marathon runners including pre-run fueling, during-race nutrition, and recovery meals.",
    link: "https://gearuptofit.com/running/marathon-training-nutrition",
    pubDate: new Date(Date.now() - 172800000).toISOString(),
    category: "Running",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

const extractImageFromContent = (content: string): string | null => {
  // Try to extract WordPress upload URLs first (highest priority)
  const wpUploadMatch = content.match(/https:\/\/gearuptofit\.com\/wp-content\/uploads\/[^\s"<>)]+\.(?:jpg|jpeg|png|gif|webp)(?:\?[^\s"<>)]*)*/i);
  if (wpUploadMatch) {
    return wpUploadMatch[0];
  }

  // Try to extract Firebase storage URLs
  const firebaseMatch = content.match(/https:\/\/firebasestorage\.googleapis\.com\/[^\s"<>)]+\.(?:jpg|jpeg|png|gif|webp)(?:\?[^\s"<>)]*)*/i);
  if (firebaseMatch) {
    return firebaseMatch[0];
  }

  // Try to extract Amazon image URLs
  const amazonMatch = content.match(/https:\/\/[^\s"<>)]*amazon[^\s"<>)]*\/images\/[^\s"<>)]+\.(?:jpg|jpeg|png|gif|webp)/i);
  if (amazonMatch) {
    return amazonMatch[0];
  }

  // Try to extract image from img tag src attribute
  const imgTagMatch = content.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  if (imgTagMatch) {
    return imgTagMatch[1];
  }
  
  // Try to find any image URL in content
  const anyImageMatch = content.match(/https:\/\/[^\s"<>)]+\.(?:jpg|jpeg|png|gif|webp)(?:\?[^\s"<>)]*)*/i);
  if (anyImageMatch) {
    return anyImageMatch[0];
  }
  
  return null;
};

const getCategoryFromContent = (title: string, description: string, link: string): string => {
  const content = `${title} ${description} ${link}`.toLowerCase();
  
  // Running category - comprehensive detection
  if (content.includes('running') || content.includes('marathon') || content.includes('runner') || 
      content.includes('jogging') || content.includes('sprint') || content.includes('pace') ||
      content.includes('trail running') || content.includes('5k') || content.includes('10k') ||
      content.includes('half marathon') || content.includes('ultra') || content.includes('race') ||
      content.includes('training plan') || content.includes('endurance')) {
    return 'Running';
  }
  
  // Nutrition category - enhanced detection
  if (content.includes('nutrition') || content.includes('diet') || content.includes('meal') ||
      content.includes('protein') || content.includes('vitamin') || content.includes('supplement') ||
      content.includes('recipe') || content.includes('food') || content.includes('eating') ||
      content.includes('smoothie') || content.includes('juice') || content.includes('calorie') ||
      content.includes('healthy eating') || content.includes('meal plan')) {
    return 'Nutrition';
  }
  
  // Weight Loss category - specific detection
  if (content.includes('weight loss') || content.includes('lose weight') || content.includes('fat loss') ||
      content.includes('burn fat') || content.includes('belly fat') || content.includes('slim') ||
      content.includes('weight management') || content.includes('obesity') || content.includes('transformation')) {
    return 'Weight Loss';
  }
  
  // Calculators category - specific detection
  if (content.includes('calculator') || content.includes('calculate') || content.includes('bmi') ||
      content.includes('bmr') || content.includes('tdee') || content.includes('macro') ||
      content.includes('calories') || content.includes('body fat') || content.includes('ideal weight')) {
    return 'Calculators';
  }
  
  // Equipment/Reviews category - comprehensive detection
  if (content.includes('review') || content.includes('best') || content.includes('top 10') ||
      content.includes('shoes') || content.includes('treadmill') || content.includes('equipment') ||
      content.includes('gear') || content.includes('headlamp') || content.includes('watch') ||
      content.includes('clothing') || content.includes('adidas') || content.includes('nike') ||
      content.includes('comfortable') || content.includes('footwear') || content.includes('product')) {
    return 'Equipment Review';
  }
  
  // Fitness category (default for fitness-related content)
  if (content.includes('workout') || content.includes('exercise') || content.includes('training') ||
      content.includes('fitness') || content.includes('gym') || content.includes('hiit') ||
      content.includes('strength') || content.includes('cardio') || content.includes('muscle') ||
      content.includes('bodyweight') || content.includes('crossfit') || content.includes('pilates')) {
    return 'Fitness';
  }
  
  return 'Fitness'; // Default category
};

const getCategoryImage = (category: string): string => {
  switch (category.toLowerCase()) {
    case 'running':
      return 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
    case 'nutrition':
      return 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
    case 'weight loss':
      return 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
    case 'calculators':
      return 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
    case 'equipment review':
      return 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
    default:
      return 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
  }
};

export const parseRSSFeed = async (rssUrl: string, filterCategory?: string): Promise<BlogPost[]> => {
  try {
    console.log('Attempting to fetch RSS feed from:', rssUrl, 'with category filter:', filterCategory);
    
    // Try multiple CORS proxy services
    const proxyUrls = [
      `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(rssUrl)}`,
      `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`,
      `https://cors-anywhere.herokuapp.com/${rssUrl}`
    ];
    
    let rssText = '';
    let success = false;
    
    for (const proxyUrl of proxyUrls) {
      try {
        console.log('Trying proxy:', proxyUrl);
        const response = await fetch(proxyUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/rss+xml, application/xml, text/xml',
          },
        });
        
        if (response.ok) {
          rssText = await response.text();
          console.log('Successfully fetched RSS content, length:', rssText.length);
          success = true;
          break;
        }
      } catch (error) {
        console.log('Proxy failed:', proxyUrl, error);
        continue;
      }
    }
    
    if (!success || !rssText) {
      console.log('All proxies failed, using fallback data');
      return fallbackPosts.slice(0, 15);
    }
    
    // Parse the RSS XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rssText, 'text/xml');
    
    // Check for parsing errors
    const parseError = xmlDoc.querySelector('parsererror');
    if (parseError) {
      console.log('XML parsing error, using fallback data');
      return fallbackPosts.slice(0, 15);
    }
    
    const items = xmlDoc.querySelectorAll('item');
    console.log('Found', items.length, 'RSS items');
    
    if (items.length === 0) {
      console.log('No RSS items found, using fallback data');
      return fallbackPosts.slice(0, 15);
    }
    
    const posts: BlogPost[] = [];
    const targetCount = 15; // Always get exactly 15 posts
    
    items.forEach((item, index) => {
      if (posts.length >= targetCount) return; // Stop when we have enough posts
      
      const title = item.querySelector('title')?.textContent || '';
      const description = item.querySelector('description')?.textContent || '';
      const link = item.querySelector('link')?.textContent || '';
      const pubDate = item.querySelector('pubDate')?.textContent || '';
      
      // Enhanced image extraction with multiple fallback strategies
      let image = null;
      
      // Strategy 1: Try content:encoded field
      const contentEncoded = item.querySelector('content\\:encoded')?.textContent || '';
      if (contentEncoded) {
        image = extractImageFromContent(contentEncoded);
      }
      
      // Strategy 2: Try description field
      if (!image) {
        image = extractImageFromContent(description);
      }
      
      // Strategy 3: Try WordPress featured media
      if (!image) {
        const featuredImage = item.querySelector('wp\\:featuredmedia, featuredmedia');
        if (featuredImage) {
          image = featuredImage.textContent;
        }
      }
      
      // Strategy 4: Try media:content
      if (!image) {
        const mediaContent = item.querySelector('media\\:content, content');
        if (mediaContent) {
          image = mediaContent.getAttribute('url');
        }
      }
      
      // Strategy 5: Try media:thumbnail
      if (!image) {
        const mediaThumbnail = item.querySelector('media\\:thumbnail, thumbnail');
        if (mediaThumbnail) {
          image = mediaThumbnail.getAttribute('url');
        }
      }
      
      // Strategy 6: Try enclosure for images
      if (!image) {
        const enclosure = item.querySelector('enclosure');
        if (enclosure && enclosure.getAttribute('type')?.startsWith('image/')) {
          image = enclosure.getAttribute('url');
        }
      }
      
      // Strategy 7: Search entire item content for any image
      if (!image) {
        const allContent = item.textContent || '';
        image = extractImageFromContent(allContent);
      }
      
      const category = getCategoryFromContent(title, description, link);
      
      // Strategy 8: Use category-specific fallback image
      if (!image) {
        image = getCategoryImage(category);
      }
      
      const post = {
        title: title.trim(),
        description: description.replace(/<[^>]*>/g, '').trim().substring(0, 120) + '...',
        link: link.trim(),
        pubDate: pubDate.trim(),
        category,
        image
      };
      
      // Filter by category if specified, otherwise include all posts
      if (!filterCategory || category.toLowerCase().includes(filterCategory.toLowerCase())) {
        posts.push(post);
        console.log(`Post ${posts.length}: "${title}" - Category: ${category} - Image: ${image}`);
      }
    });
    
    // Ensure we return exactly 15 posts (pad with fallback if needed)
    while (posts.length < targetCount && posts.length < fallbackPosts.length) {
      const fallbackIndex = posts.length;
      if (fallbackPosts[fallbackIndex]) {
        posts.push(fallbackPosts[fallbackIndex]);
      } else {
        break;
      }
    }
    
    console.log(`Successfully parsed ${posts.length} posts for category: ${filterCategory || 'all'}`);
    return posts.slice(0, targetCount); // Ensure exactly 15 posts
    
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return fallbackPosts.slice(0, 15);
  }
};
