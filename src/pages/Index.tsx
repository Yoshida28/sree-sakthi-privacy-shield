
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Car, Smartphone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Car className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-5xl font-bold text-gray-900">SreeSakthiCars</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Your trusted partner in finding the perfect vehicle. Experience seamless car buying with our innovative mobile app and website platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Browse Vehicles
            </Button>
            <Button size="lg" variant="outline">
              Download App
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Smartphone className="h-8 w-8 text-blue-600 mr-3" />
                <CardTitle>Mobile First</CardTitle>
              </div>
              <CardDescription>
                Browse and buy vehicles on-the-go with our intuitive mobile app experience.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Car className="h-8 w-8 text-blue-600 mr-3" />
                <CardTitle>Wide Selection</CardTitle>
              </div>
              <CardDescription>
                Access thousands of quality vehicles from trusted dealers across India.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <CardTitle>Secure & Trusted</CardTitle>
              </div>
              <CardDescription>
                Your privacy and security are our top priorities. All transactions are protected.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Privacy Notice */}
        <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-10 w-10 text-blue-600 mr-3" />
              <CardTitle className="text-2xl">Your Privacy Matters</CardTitle>
            </div>
            <CardDescription className="text-lg">
              We are committed to protecting your personal information and ensuring transparent data practices.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">
              Learn about how we collect, use, and protect your information when you use our services.
            </p>
            <Link to="/privacy-policy">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Read Our Privacy Policy
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Car className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">SreeSakthiCars</h3>
            </div>
            <p className="text-gray-400 mb-6">Korratur, Chennai, India</p>
            <div className="space-y-2">
              <p className="text-gray-400">Contact: sreesakthicars4@gmail.com</p>
              <div className="flex justify-center space-x-6 mt-4">
                <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
