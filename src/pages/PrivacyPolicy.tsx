
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-xl border-red-200">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-red-900 mb-4">Privacy Policy</h1>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-lg text-red-700">SreeSakthiCars Mobile App & Website</p>
              <p className="text-sm text-red-600 mt-2">Effective Date: January 1, 2024</p>
            </div>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold text-red-900 mb-4 border-l-4 border-red-600 pl-4">
                  Introduction
                </h2>
                <p className="mb-4">
                  At SreeSakthiCars, we are committed to protecting your privacy. This Privacy Policy explains 
                  how we collect and use your information when you browse vehicles on our platform.
                </p>
                <p>
                  By using our services, you agree to the collection and use of information as described in this policy.
                </p>
              </section>

              <Separator className="my-8 border-red-200" />

              {/* Data Collection */}
              <section>
                <h2 className="text-2xl font-semibold text-red-900 mb-4 border-l-4 border-red-600 pl-4">
                  Information We Collect
                </h2>
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-medium text-red-800 mb-3">Vehicle Browsing Data</h3>
                  <p className="mb-3">We collect information about your vehicle interests to provide better service:</p>
                  <ul className="list-disc pl-6 space-y-2 text-red-700">
                    <li>Cars you view and show interest in</li>
                    <li>Vehicle searches and preferences</li>
                    <li>Time spent viewing specific vehicles</li>
                    <li>Your contact information (email, phone number)</li>
                  </ul>
                </div>
              </section>

              <Separator className="my-8 border-red-200" />

              {/* How We Use Data */}
              <section>
                <h2 className="text-2xl font-semibold text-red-900 mb-4 border-l-4 border-red-600 pl-4">
                  How We Use Your Information
                </h2>
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-medium text-red-800 mb-3">Promotional Communications</h3>
                  <p className="mb-3 text-red-700">
                    We use your vehicle viewing data to send you personalized promotional emails about:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-red-700">
                    <li>Similar vehicles that match your interests</li>
                    <li>Special offers and discounts on cars you've viewed</li>
                    <li>New arrivals in your preferred vehicle categories</li>
                    <li>Price drops on vehicles you've shown interest in</li>
                  </ul>
                </div>
              </section>

              <Separator className="my-8 border-red-200" />

              {/* Data Sharing */}
              <section>
                <h2 className="text-2xl font-semibold text-red-900 mb-4 border-l-4 border-red-600 pl-4">
                  Information Sharing
                </h2>
                <p className="mb-4">We share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-red-800">Dealers:</strong> To connect you with vehicles you're interested in</li>
                  <li><strong className="text-red-800">Buyers:</strong> If you're selling a vehicle through our platform</li>
                  <li><strong className="text-red-800">Marketing partners:</strong> To send relevant promotional offers</li>
                </ul>
              </section>

              <Separator className="my-8 border-red-200" />

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-semibold text-red-900 mb-4 border-l-4 border-red-600 pl-4">
                  Your Rights
                </h2>
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <p className="mb-4 text-red-700">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-red-700">
                    <li>Opt out of promotional emails at any time</li>
                    <li>Request deletion of your browsing data</li>
                    <li>Access the information we have about you</li>
                    <li>Update your contact preferences</li>
                  </ul>
                </div>
              </section>

              <Separator className="my-8 border-red-200" />

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-semibold text-red-900 mb-4 border-l-4 border-red-600 pl-4">
                  Contact Us
                </h2>
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <p className="mb-4 text-red-700">
                    If you have questions about this Privacy Policy or want to exercise your rights:
                  </p>
                  <div className="space-y-2 text-red-700">
                    <p><strong>Email:</strong> sreesakthicars4@gmail.com</p>
                    <p><strong>Address:</strong></p>
                    <p className="pl-4">
                      SreeSakthiCars<br />
                      Korratur, Chennai<br />
                      India
                    </p>
                  </div>
                </div>
              </section>

              <div className="text-center text-sm text-red-600 bg-red-50 p-4 rounded-lg border border-red-200 mt-8">
                <p>© 2024 SreeSakthiCars. All rights reserved.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
