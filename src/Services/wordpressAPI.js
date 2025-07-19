// src/services/wordpressAPI.js

// --- Perubahan di sini: domain telah diperbarui ke impactinstitute.asia ---
const WORDPRESS_API_URL = 'https://impactinstitute.asia/wp-json/wp/v2';

// Fetch all news articles
export const fetchNews = async (page = 1, language = 'id') => {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/news?per_page=10&page=${page}&lang=${language}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

// Fetch educational content
export const fetchEducationalContent = async (type = 'all', language = 'id') => {
  try {
    let url = `${WORDPRESS_API_URL}/education?lang=${language}`;
    if (type !== 'all') {
      url = `${WORDPRESS_API_URL}/education?content_type=${type}&lang=${language}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error('Error fetching educational content:', error);
    return [];
  }
};