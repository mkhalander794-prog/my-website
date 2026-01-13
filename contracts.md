# Gorur Mart Website - API Contracts & Integration Guide

## Overview
This document outlines the backend structure, API contracts, and integration approach for the Gorur Mart supermarket website.

## Current Status
- **Frontend**: ✅ Complete with mock data
- **Backend**: ⚠️ Basic structure ready for future expansion
- **Database**: MongoDB with Motor async driver

## Mock Data Currently Used (mockData.js)
The following data is currently hardcoded in `frontend/src/mockData.js`:

### 1. Business Information
- Store name, tagline, rating, reviews
- Contact details (phone, address)
- Store locations and images
- Google Maps embed URL

### 2. Product Categories (7 categories)
- Groceries, Clothing, Home Décor, Footwear, Stationery, Fragrances, Household Essentials
- Each with icon, description, and images (for Clothing)

### 3. Offers & Promotions (3 active offers)
- Buy One Get One, Seasonal Discounts, Festival Special
- Each with title, description, validity, and badge

### 4. Customer Reviews (6 reviews)
- Name, rating (1-5 stars), date, comment

### 5. Branch Information (3 branches)
- Name, address, main branch indicator

---

## Future Backend API Structure

### Base URL
All backend routes use `/api` prefix (required for Kubernetes ingress routing)

### API Endpoints (To Be Implemented)

#### 1. Business Information
```
GET /api/business-info
Response: { name, tagline, rating, totalReviews, phone, address, ... }
```

#### 2. Product Categories
```
GET /api/categories
Response: [ { id, name, description, icon, images: [] } ]

GET /api/categories/:id
Response: { id, name, description, icon, images: [], products: [] }
```

#### 3. Offers & Promotions
```
GET /api/offers
Response: [ { id, title, description, validUntil, badge } ]

POST /api/offers (Admin only - future)
Request: { title, description, validUntil, badge }
```

#### 4. Customer Reviews
```
GET /api/reviews
Response: [ { id, name, rating, date, comment } ]

POST /api/reviews (Future feature)
Request: { name, rating, comment }
```

#### 5. Contact Form (Future)
```
POST /api/contact
Request: { name, email, phone, message }
Response: { success: true, message: "We'll contact you soon!" }
```

#### 6. Store Branches
```
GET /api/branches
Response: [ { id, name, address, isMain } ]
```

---

## Database Schema (MongoDB)

### Collections (To Be Created)

#### 1. `business_info`
```javascript
{
  _id: ObjectId,
  name: String,
  tagline: String,
  rating: Number,
  totalReviews: Number,
  phone: String,
  address: String,
  storeImages: [String], // URLs
  mapEmbedUrl: String
}
```

#### 2. `categories`
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  icon: String,
  images: [String], // URLs
  order: Number
}
```

#### 3. `offers`
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  validUntil: String,
  badge: String,
  isActive: Boolean,
  createdAt: Date
}
```

#### 4. `reviews`
```javascript
{
  _id: ObjectId,
  name: String,
  rating: Number,
  comment: String,
  date: Date,
  isApproved: Boolean
}
```

#### 5. `branches`
```javascript
{
  _id: ObjectId,
  name: String,
  address: String,
  isMain: Boolean,
  phone: String,
  coordinates: { lat: Number, lng: Number }
}
```

#### 6. `contact_inquiries` (Future)
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: Date,
  status: String // 'new', 'responded', 'closed'
}
```

---

## Frontend-Backend Integration Steps

### Phase 1: Replace Mock Data with API Calls
1. Create API service file: `frontend/src/services/api.js`
2. Replace mock imports with API calls in Home.jsx
3. Add loading states and error handling
4. Test all API endpoints

### Phase 2: Admin Panel (Future Enhancement)
1. Create admin authentication
2. Build admin dashboard for:
   - Managing offers/promotions
   - Approving customer reviews
   - Viewing contact inquiries
   - Updating business information

### Phase 3: Advanced Features (Future)
1. Product catalog with search/filter
2. Online order inquiry system
3. Newsletter subscription
4. Blog/news section for store updates

---

## Current Backend Files

### `/app/backend/server.py`
- FastAPI application setup
- MongoDB connection via Motor
- CORS middleware configured
- Sample endpoints: `/api/` and `/api/status`

### Environment Variables
- `MONGO_URL`: MongoDB connection string
- `DB_NAME`: Database name
- `REACT_APP_BACKEND_URL`: Frontend env variable for API calls

---

## Testing Checklist

### Frontend Functionality ✅
- [x] Mobile responsiveness (375px - 1920px)
- [x] Call Now button (tel: link)
- [x] Get Directions button (Google Maps)
- [x] Embedded Google Maps iframe
- [x] Store images display
- [x] Clothing category images
- [x] All sections render correctly
- [x] Smooth scrolling and animations

### Backend (To Be Tested)
- [ ] MongoDB connection
- [ ] CRUD operations for each collection
- [ ] API response validation
- [ ] Error handling
- [ ] CORS configuration

---

## Notes

1. **No Admin Panel**: As requested, no admin features are implemented currently. Basic backend structure is ready for future expansion.

2. **No Contact Forms**: Static website without form submissions for now.

3. **Image URLs**: Real store images are integrated from customer assets. Additional images can be added to mockData.js or uploaded to cloud storage.

4. **Mobile-First**: Design is fully responsive with special attention to mobile experience.

5. **SEO Considerations**: Future enhancement could include:
   - Meta tags for each section
   - Structured data (JSON-LD) for local business
   - Sitemap generation

---

## Deployment Considerations

### Current Setup
- Frontend: React on port 3000
- Backend: FastAPI on port 8001
- Both managed by supervisor
- Kubernetes ingress handles routing

### For Production
- Optimize images (compression, CDN)
- Enable caching headers
- Minify CSS/JS
- Enable HTTPS
- Set up monitoring and logging

---

## Contact for Support
For any questions or feature additions, refer to this document and the mock data structure in `frontend/src/mockData.js`.
