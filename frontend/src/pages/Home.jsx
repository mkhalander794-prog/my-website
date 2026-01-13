import React from 'react';
import { Phone, MapPin, Star, ShoppingBasket, Shirt, Home as HomeIcon, Footprints, PenTool, Sparkles, Package, Tag, Users, Award, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { businessInfo, aboutContent, productCategories, offers, customerReviews, branches } from '../mockData';

const iconMap = {
  ShoppingBasket,
  Shirt,
  Home: HomeIcon,
  Footprints,
  PenTool,
  Sparkles,
  Package
};

const Home = () => {
  const handleCallNow = () => {
    window.location.href = `tel:${businessInfo.phone}`;
  };

  const handleGetDirections = () => {
    window.open('https://maps.app.goo.gl/Vw8aXCdHYXpvRcZs9', '_blank');
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-orange-500 text-orange-500' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <ShoppingBasket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-green-600">{businessInfo.name}</h1>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                    <span className="ml-1 text-sm font-semibold text-gray-700">{businessInfo.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500">({businessInfo.totalReviews} reviews)</span>
                </div>
              </div>
            </div>
            <Button 
              onClick={handleCallNow}
              className="bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm">
            🎉 Special Offers Available Now!
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {businessInfo.tagline}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your trusted supermarket in Shivamogga with {businessInfo.branches} branches serving the community with quality products and exceptional service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              onClick={handleCallNow}
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: {businessInfo.phone}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleGetDirections}
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </Button>
          </div>

          {/* Store Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            {businessInfo.storeImages.map((image, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <img 
                  src={image} 
                  alt={`Gorur Mart Store View ${index + 1}`}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <Award className="w-12 h-12 text-orange-500 mx-auto mb-3" />
              <h3 className="font-bold text-2xl text-gray-900">4.8⭐</h3>
              <p className="text-gray-600">Top Rated</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-2xl text-gray-900">1000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <ShoppingBasket className="w-12 h-12 text-orange-500 mx-auto mb-3" />
              <h3 className="font-bold text-2xl text-gray-900">{businessInfo.branches}</h3>
              <p className="text-gray-600">Store Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{aboutContent.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mb-6"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {aboutContent.description}
            </p>
            <p className="text-lg text-gray-700 mb-8 font-semibold">
              {aboutContent.mission}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aboutContent.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3 bg-green-50 p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-800">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our wide variety of products across multiple categories</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category) => {
              const Icon = iconMap[category.icon];
              
              // Special handling for Clothing category with images
              if (category.images && category.images.length > 0) {
                return (
                  <Card key={category.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-green-500 col-span-full lg:col-span-2">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl">{category.name}</CardTitle>
                      </div>
                      <CardDescription className="text-base">{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-3">
                        {category.images.map((image, index) => (
                          <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                            <img 
                              src={image} 
                              alt={`${category.name} ${index + 1}`}
                              className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              }
              
              // Regular category cards
              return (
                <Card key={category.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-green-500">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-center text-xl">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{category.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Offers & Discounts</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Don't miss out on our exclusive deals and promotional offers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offers.map((offer) => (
              <Card key={offer.id} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-0 right-0">
                  <Badge className="bg-orange-500 text-white rounded-none rounded-bl-lg px-3 py-1">
                    {offer.badge}
                  </Badge>
                </div>
                <CardHeader className="pt-12">
                  <Tag className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-center text-2xl">{offer.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-4">{offer.description}</p>
                  <p className="text-sm text-orange-600 font-semibold">{offer.validUntil}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Real reviews from our valued customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerReviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Branches</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Visit any of our {businessInfo.branches} convenient locations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {branches.map((branch) => (
              <Card key={branch.id} className={`hover:shadow-xl transition-all duration-300 ${branch.isMain ? 'border-2 border-green-500' : ''}`}>
                <CardHeader>
                  {branch.isMain && (
                    <Badge className="mb-2 bg-green-600 text-white w-fit">Main Branch</Badge>
                  )}
                  <CardTitle className="text-lg">{branch.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm">{branch.address}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Us Today</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-6 h-6 text-green-600" />
                    <span>Address</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">{businessInfo.address}</p>
                  <p className="text-sm text-gray-600">📍 {businessInfo.landmark}</p>
                  <p className="text-sm text-gray-600 mt-2">Plus Code: {businessInfo.plusCode}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="w-6 h-6 text-orange-500" />
                    <span>Contact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={handleCallNow}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {businessInfo.phone}
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Store Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-50">Open Daily: 8:00 AM - 9:00 PM</p>
                  <p className="text-sm text-green-100 mt-2">Visit us any day of the week!</p>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps */}
            <div className="h-full min-h-[500px]">
              <iframe
                src={businessInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gorur Mart Location"
                className="shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">{businessInfo.name}</h3>
              <p className="text-gray-300 mb-4">{businessInfo.tagline}</p>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 fill-orange-500 text-orange-500" />
                <span className="font-semibold">{businessInfo.rating}</span>
                <span className="text-gray-400">({businessInfo.totalReviews} reviews)</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-green-400 cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-green-400 cursor-pointer transition-colors">Products</li>
                <li className="hover:text-green-400 cursor-pointer transition-colors">Offers</li>
                <li className="hover:text-green-400 cursor-pointer transition-colors">Branches</li>
                <li className="hover:text-green-400 cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-400">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>{businessInfo.address}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span>{businessInfo.phone}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Built with ❤️ for the Shivamogga community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
