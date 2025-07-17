# WordPress Integration Guide for Impact Institute Website

## Overview
This guide provides comprehensive instructions for integrating WordPress CMS with the Impact Institute React website, specifically for managing the News & Education section and other dynamic content.

## Prerequisites
- WordPress hosting account
- Domain: `impactinstitute.skinetwork.net`
- FTP/SFTP access to hosting
- MySQL database access
- Basic knowledge of WordPress administration

## 1. WordPress Installation on impactinstitute.skinetwork.net

### Manual Installation Steps

#### Step 1: Download WordPress
```bash
wget https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz
```

#### Step 2: Database Setup
1. Access your hosting control panel (cPanel/Plesk)
2. Navigate to MySQL Databases
3. Create a new database: `impactinst_wp`
4. Create a database user: `impactinst_user`
5. Set a strong password
6. Grant all privileges to the user for the database

#### Step 3: Upload Files
```bash
# Upload WordPress files to your domain root
# Via FTP or hosting file manager
# Extract to: /public_html/ or /www/
```

#### Step 4: WordPress Configuration
1. Navigate to `https://impactinstitute.skinetwork.net`
2. Follow the WordPress installation wizard
3. Enter database details:
   - Database Name: `impactinst_wp`
   - Username: `impactinst_user`
   - Password: [your_password]
   - Database Host: `localhost`
   - Table Prefix: `wp_`

#### Step 5: Admin Account Setup
- Site Title: `Impact Institute CMS`
- Username: `admin_impact`
- Password: [strong_password]
- Email: `info@impactinstitute.asia`

## 2. WordPress Configuration for Impact Institute

### Essential Plugins Installation

#### Content Management Plugins
```bash
# Install via WordPress Admin > Plugins > Add New
```

1. **Advanced Custom Fields (ACF)** - For custom content fields
2. **WP REST API** - For API integration with React frontend
3. **Yoast SEO** - For search engine optimization
4. **WP Super Cache** - For performance optimization
5. **Wordfence Security** - For security protection
6. **UpdraftPlus** - For automated backups

#### API Integration Plugins
1. **WP REST API V2** - Enhanced REST API functionality
2. **ACF to REST API** - Expose ACF fields via REST API
3. **JWT Authentication** - For secure API access
4. **CORS Headers** - For cross-origin requests

### Theme Setup

#### Install Custom Theme
1. Download Impact Institute custom theme
2. Upload via Appearance > Themes > Add New > Upload Theme
3. Activate the theme

#### Theme Customization
```php
// functions.php additions
function impact_institute_setup() {
    // Add theme support
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => 'Primary Menu',
        'footer' => 'Footer Menu',
    ));
}
add_action('after_setup_theme', 'impact_institute_setup');

// Enable CORS for API
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: https://nwtxwlot.manussite.space");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
}
add_action('init','add_cors_http_header');
```

## 3. Database Schema for Impact Institute

### Custom Post Types

#### News Articles
```sql
-- Custom post type: 'news'
CREATE TABLE wp_posts_news (
    ID bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    post_title text NOT NULL,
    post_content longtext NOT NULL,
    post_excerpt text,
    post_status varchar(20) DEFAULT 'publish',
    post_date datetime DEFAULT CURRENT_TIMESTAMP,
    post_author bigint(20) unsigned DEFAULT 1,
    featured_image varchar(255),
    category varchar(100),
    tags text,
    language varchar(5) DEFAULT 'id',
    PRIMARY KEY (ID)
);
```

#### Educational Content
```sql
-- Custom post type: 'education'
CREATE TABLE wp_posts_education (
    ID bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    post_title text NOT NULL,
    post_content longtext NOT NULL,
    post_excerpt text,
    content_type varchar(50), -- 'article', 'video', 'guide', 'research'
    difficulty_level varchar(20), -- 'beginner', 'intermediate', 'advanced'
    duration varchar(50), -- for videos
    file_url varchar(255), -- for downloadable resources
    post_date datetime DEFAULT CURRENT_TIMESTAMP,
    language varchar(5) DEFAULT 'id',
    PRIMARY KEY (ID)
);
```

#### Projects
```sql
-- Custom post type: 'projects'
CREATE TABLE wp_posts_projects (
    ID bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    project_title text NOT NULL,
    project_description longtext NOT NULL,
    project_location varchar(255),
    project_status varchar(50), -- 'planning', 'active', 'completed'
    start_date date,
    end_date date,
    land_area decimal(10,2),
    farmer_count int,
    featured_image varchar(255),
    gallery text, -- JSON array of image URLs
    language varchar(5) DEFAULT 'id',
    PRIMARY KEY (ID)
);
```

#### Farmer Registrations
```sql
-- Farmer registration data
CREATE TABLE wp_farmer_registrations (
    ID bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    farmer_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    phone varchar(20),
    land_location text,
    land_size decimal(10,2),
    current_crops text,
    farming_experience int,
    registration_date datetime DEFAULT CURRENT_TIMESTAMP,
    status varchar(20) DEFAULT 'pending', -- 'pending', 'approved', 'rejected'
    notes text,
    PRIMARY KEY (ID)
);
```

#### Carbon Buyer Registrations
```sql
-- Carbon buyer registration data
CREATE TABLE wp_carbon_buyer_registrations (
    ID bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    company_name varchar(255) NOT NULL,
    contact_person varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    phone varchar(20),
    company_address text,
    company_type varchar(100),
    annual_emissions decimal(15,2),
    target_credits decimal(15,2),
    registration_date datetime DEFAULT CURRENT_TIMESTAMP,
    status varchar(20) DEFAULT 'pending',
    notes text,
    PRIMARY KEY (ID)
);
```

### Custom Fields (ACF)

#### News Article Fields
```php
// ACF field group for news
$news_fields = array(
    'featured_image' => 'image',
    'category' => 'select', // 'news', 'announcement', 'research'
    'tags' => 'text',
    'author_bio' => 'textarea',
    'reading_time' => 'number',
    'language' => 'select', // 'id', 'en'
    'related_articles' => 'relationship'
);
```

#### Educational Content Fields
```php
// ACF field group for education
$education_fields = array(
    'content_type' => 'select', // 'article', 'video', 'guide', 'research'
    'difficulty_level' => 'select', // 'beginner', 'intermediate', 'advanced'
    'duration' => 'text', // for videos
    'file_download' => 'file', // for PDFs, documents
    'video_url' => 'url',
    'prerequisites' => 'textarea',
    'learning_objectives' => 'repeater',
    'language' => 'select'
);
```

## 4. API Integration with React Frontend

### REST API Endpoints

#### News Endpoints
```javascript
// Fetch all news articles
GET /wp-json/wp/v2/news?per_page=10&page=1&lang=id

// Fetch single news article
GET /wp-json/wp/v2/news/{id}

// Fetch news by category
GET /wp-json/wp/v2/news?category=research&lang=en
```

#### Educational Content Endpoints
```javascript
// Fetch educational content
GET /wp-json/wp/v2/education?content_type=video&lang=id

// Fetch by difficulty level
GET /wp-json/wp/v2/education?difficulty=beginner
```

### React Integration Code

#### News Component Integration
```javascript
// src/services/wordpressAPI.js
const WORDPRESS_API_URL = 'https://impactinstitute.skinetwork.net/wp-json/wp/v2';

export const fetchNews = async (page = 1, lang = 'id') => {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/news?per_page=10&page=${page}&lang=${lang}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export const fetchEducationalContent = async (type = 'all', lang = 'id') => {
  try {
    const url = type === 'all' 
      ? `${WORDPRESS_API_URL}/education?lang=${lang}`
      : `${WORDPRESS_API_URL}/education?content_type=${type}&lang=${lang}`;
    
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching educational content:', error);
    return [];
  }
};
```

#### Updated NewsEducation Component
```javascript
// src/components/pages/NewsEducation.jsx
import { fetchNews, fetchEducationalContent } from '../../services/wordpressAPI';

const NewsEducation = () => {
  const [news, setNews] = useState([]);
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      const [newsData, educationData] = await Promise.all([
        fetchNews(1, language),
        fetchEducationalContent('all', language)
      ]);
      
      setNews(newsData);
      setEducation(educationData);
      setLoading(false);
    };

    loadContent();
  }, [language]);

  // Rest of component...
};
```

## 5. Content Management Workflow

### Editorial Workflow
1. **Content Creation**: Authors create content in WordPress admin
2. **Review Process**: Editors review and approve content
3. **Publication**: Approved content is published
4. **API Sync**: React frontend automatically fetches new content

### Content Types Management

#### News Articles
1. Navigate to WordPress Admin > News > Add New
2. Fill in title, content, excerpt
3. Set featured image
4. Select category and tags
5. Choose language (ID/EN)
6. Publish or save as draft

#### Educational Content
1. Navigate to WordPress Admin > Education > Add New
2. Select content type (article, video, guide, research)
3. Set difficulty level
4. Add duration (for videos) or file (for downloads)
5. Fill in prerequisites and learning objectives
6. Publish content

### Multilingual Content
- Use language field to specify content language
- Create separate entries for Indonesian and English versions
- Link related translations using ACF relationship fields

## 6. Security and Performance

### Security Measures
```php
// wp-config.php security settings
define('DISALLOW_FILE_EDIT', true);
define('WP_DEBUG', false);
define('FORCE_SSL_ADMIN', true);

// Limit login attempts
function limit_login_attempts() {
    // Implementation for login attempt limiting
}
```

### Performance Optimization
1. **Caching**: Install WP Super Cache or W3 Total Cache
2. **Image Optimization**: Use WebP format for images
3. **CDN**: Configure CloudFlare or similar CDN
4. **Database Optimization**: Regular database cleanup

### Backup Strategy
```bash
# Automated daily backups
0 2 * * * /usr/local/bin/wp db export /backups/impact-institute-$(date +\%Y\%m\%d).sql
0 3 * * * tar -czf /backups/impact-institute-files-$(date +\%Y\%m\%d).tar.gz /var/www/html/
```

## 7. Deployment Steps

### Step-by-Step Deployment

#### 1. Domain Setup
```bash
# Point domain to hosting server
# Update DNS records:
# A Record: impactinstitute.skinetwork.net -> [server_ip]
# CNAME: www.impactinstitute.skinetwork.net -> impactinstitute.skinetwork.net
```

#### 2. SSL Certificate
```bash
# Install Let's Encrypt SSL
certbot --apache -d impactinstitute.skinetwork.net -d www.impactinstitute.skinetwork.net
```

#### 3. WordPress Installation
```bash
# Download and extract WordPress
cd /var/www/html/
wget https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz
mv wordpress/* .
rm -rf wordpress latest.tar.gz

# Set permissions
chown -R www-data:www-data /var/www/html/
chmod -R 755 /var/www/html/
```

#### 4. Database Configuration
```sql
-- Create database and user
CREATE DATABASE impactinst_wp;
CREATE USER 'impactinst_user'@'localhost' IDENTIFIED BY 'strong_password_here';
GRANT ALL PRIVILEGES ON impactinst_wp.* TO 'impactinst_user'@'localhost';
FLUSH PRIVILEGES;
```

#### 5. WordPress Configuration
```php
// wp-config.php
define('DB_NAME', 'impactinst_wp');
define('DB_USER', 'impactinst_user');
define('DB_PASSWORD', 'strong_password_here');
define('DB_HOST', 'localhost');

// Security keys (generate at https://api.wordpress.org/secret-key/1.1/salt/)
define('AUTH_KEY', 'your-auth-key-here');
// ... other keys
```

#### 6. Plugin Installation and Configuration
1. Install required plugins via WordPress admin
2. Configure ACF fields
3. Set up REST API permissions
4. Configure security settings

#### 7. Theme Installation
1. Upload custom Impact Institute theme
2. Activate theme
3. Configure theme options
4. Set up menus and widgets

#### 8. Content Migration
1. Import existing content if any
2. Create initial content structure
3. Set up content categories and tags
4. Configure multilingual settings

## 8. Maintenance and Updates

### Regular Maintenance Tasks
- **Weekly**: Update plugins and themes
- **Monthly**: Database optimization and cleanup
- **Quarterly**: Security audit and backup verification

### Monitoring
- Set up uptime monitoring
- Monitor site performance
- Track API response times
- Monitor security logs

### Update Procedures
1. **Staging Environment**: Test updates on staging first
2. **Backup**: Always backup before updates
3. **Update Process**: Core > Plugins > Themes
4. **Testing**: Verify functionality after updates

## 9. Troubleshooting

### Common Issues

#### API Connection Problems
```javascript
// Check CORS settings
// Verify API endpoints
// Test with Postman or similar tool
```

#### Performance Issues
```php
// Enable WordPress debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);

// Check slow query log
// Optimize database queries
// Review plugin performance
```

#### Security Issues
```bash
# Check file permissions
find /var/www/html/ -type f -exec chmod 644 {} \;
find /var/www/html/ -type d -exec chmod 755 {} \;

# Scan for malware
clamscan -r /var/www/html/
```

## 10. Support and Documentation

### Resources
- WordPress Codex: https://codex.wordpress.org/
- REST API Handbook: https://developer.wordpress.org/rest-api/
- ACF Documentation: https://www.advancedcustomfields.com/resources/

### Contact Information
- Technical Support: tech@impactinstitute.asia
- Content Management: content@impactinstitute.asia
- Emergency Contact: +62 812-1826-9298

### Backup Contacts
- Hosting Provider Support
- Domain Registrar Support
- WordPress Developer Community

---

This guide provides a comprehensive foundation for WordPress integration with the Impact Institute website. Regular updates and maintenance will ensure optimal performance and security.

