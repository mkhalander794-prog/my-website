from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(
    title="Gorur Mart API",
    description="Backend API for Gorur Mart Supermarket Website",
    version="1.0.0"
)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ===== Define Models =====

# Business Info Models
class BusinessInfo(BaseModel):
    name: str
    tagline: str
    rating: float
    totalReviews: int
    phone: str
    address: str
    plusCode: str
    landmark: str
    branches: int
    mapEmbedUrl: str
    storeImages: List[str] = []

# Category Models
class Category(BaseModel):
    id: int
    name: str
    description: str
    icon: str
    images: Optional[List[str]] = []

# Offer Models
class Offer(BaseModel):
    id: int
    title: str
    description: str
    validUntil: str
    badge: str
    isActive: bool = True

# Review Models
class Review(BaseModel):
    id: int
    name: str
    rating: int
    date: str
    comment: str
    isApproved: bool = True

# Branch Models
class Branch(BaseModel):
    id: int
    name: str
    address: str
    isMain: bool = False


# ===== API Routes =====

# Health check endpoint
@api_router.get("/")
async def root():
    return {
        "message": "Gorur Mart API is running",
        "status": "healthy",
        "version": "1.0.0"
    }

# Business Info Endpoints (Future Implementation)
@api_router.get("/business-info")
async def get_business_info():
    """
    Future endpoint to fetch business information from database.
    Currently returns placeholder response.
    """
    return {
        "message": "Business info endpoint - ready for implementation",
        "note": "Connect to database and fetch from 'business_info' collection"
    }

# Category Endpoints (Future Implementation)
@api_router.get("/categories")
async def get_categories():
    """
    Future endpoint to fetch all product categories.
    Currently returns placeholder response.
    """
    return {
        "message": "Categories endpoint - ready for implementation",
        "note": "Connect to database and fetch from 'categories' collection"
    }

# Offers Endpoints (Future Implementation)
@api_router.get("/offers")
async def get_offers():
    """
    Future endpoint to fetch active offers and promotions.
    Currently returns placeholder response.
    """
    return {
        "message": "Offers endpoint - ready for implementation",
        "note": "Connect to database and fetch from 'offers' collection"
    }

# Reviews Endpoints (Future Implementation)
@api_router.get("/reviews")
async def get_reviews():
    """
    Future endpoint to fetch approved customer reviews.
    Currently returns placeholder response.
    """
    return {
        "message": "Reviews endpoint - ready for implementation",
        "note": "Connect to database and fetch from 'reviews' collection"
    }

# Branches Endpoints (Future Implementation)
@api_router.get("/branches")
async def get_branches():
    """
    Future endpoint to fetch all store branches.
    Currently returns placeholder response.
    """
    return {
        "message": "Branches endpoint - ready for implementation",
        "note": "Connect to database and fetch from 'branches' collection"
    }

# Status Check (existing functionality)
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()