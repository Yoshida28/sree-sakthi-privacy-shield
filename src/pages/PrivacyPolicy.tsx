
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">SreeSakthiCars Mobile App & Website</p>
              <p className="text-sm text-gray-500 mt-2">Effective Date: [Date]</p>
            </div>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
                  Introduction
                </h2>
                <p className="mb-4">
                  At SreeSakthiCars, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, share, and protect your information when you use our mobile application 
                  and website services.
                </p>
                <p>
                  This policy covers all interactions with our platform, including browsing vehicles, making purchases, and using our 
                  customer service features. By using our services, you acknowledge that you have read, understood, and agree to be 
                  bound by this Privacy Policy.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                  Information We Collect
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information You Provide</h3>
                    <p className="mb-3">When you interact with our services, we may collect the following information:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Name, email address, and phone number</li>
                      <li>Customer tier and membership status</li>
                      <li>Vehicle interests and preferences</li>
                      <li>Purchase history and transaction details</li>
                      <li>Customer service messages and communications</li>
                      <li>Notification preferences and settings</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-3">Automatically Collected Information</h3>
                    <p className="mb-3">Our systems automatically collect certain technical information:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Device details and operating system information</li>
                      <li>Unique device identifiers and IP address</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and app features used</li>
                      <li>Vehicle search history and browsing patterns</li>
                      <li>Location data (only with your explicit consent)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-3">Information from Third Parties</h3>
                    <p className="mb-3">We may receive information from:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Analytics service providers</li>
                      <li>Marketing partners and affiliates</li>
                      <li>Social media platforms (if you choose to connect your accounts)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <Separator className="my-8" />

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
                  How We Use Your Information
                </h2>
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and continuously improve our services</li>
                  <li>Manage your account and process transactions</li>
                  <li>Send you relevant notifications and updates</li>
                  <li>Respond to your support requests and inquiries</li>
                  <li>Monitor usage trends and analyze user behavior</li>
                  <li>Prevent fraud and ensure platform security</li>
                  <li>Comply with legal obligations and regulatory requirements</li>
                </ul>
              </section>

              <Separator className="my-8" />

              {/* Notification Preferences */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
                  Notification Preferences
                </h2>
                <p className="mb-4">We offer various types of notifications to enhance your experience:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Email alerts:</strong> Important account updates and promotional offers</li>
                  <li><strong>App notifications:</strong> Real-time updates and reminders</li>
                  <li><strong>Stock updates:</strong> Notifications when vehicles matching your interests become available</li>
                  <li><strong>Price drops:</strong> Alerts when prices decrease on vehicles you've viewed</li>
                  <li><strong>New deals:</strong> Information about special offers and promotions</li>
                </ul>
                <p>
                  You can manage all notification preferences through your account settings at any time. 
                  You have full control over what types of communications you receive from us.
                </p>
              </section>

              <Separator className="my-8" />

              {/* How We Share Your Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
                  How We Share Your Information
                </h2>
                <p className="mb-4">We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>With dealers and buyers:</strong> To facilitate vehicle transactions and communications</li>
                  <li><strong>With service providers:</strong> Third-party companies that help us operate our platform and provide technical support</li>
                  <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of our business assets</li>
                  <li><strong>Legal requirements:</strong> When required by law, court order, or to protect our legal rights and safety</li>
                </ul>
                <p className="mt-4">
                  We do not sell your personal information to third parties for their marketing purposes.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
                  Data Security
                </h2>
                <p>
                  We implement reasonable administrative, technical, and physical safeguards to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, please note that no online service 
                  or data transmission over the internet can be guaranteed to be 100% secure. We continuously work to improve our 
                  security measures and encourage you to take steps to protect your own information.
                </p>
              </section>

              <Separator className="my-8" />

              {/* User Rights */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
                  Your Rights
                </h2>
                <p className="mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing of your information</li>
                  <li><strong>Objection:</strong> Object to certain types of processing</li>
                  <li><strong>Data portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Withdraw consent:</strong> Withdraw previously given consent</li>
                </ul>
                <p>
                  To exercise these rights, please contact our support team using the contact information provided below. 
                  We will respond to your request within a reasonable timeframe.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
                  Children's Privacy
                </h2>
                <p>
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal 
                  information from children under 13. If we become aware that we have collected personal information from 
                  a child under 13, we will take steps to delete such information promptly. If you believe we have 
                  collected information from a child under 13, please contact us immediately.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Changes to Privacy Policy */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
                  Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
                  legal requirements, or other factors. When we make material changes to this policy, we will notify you 
                  through the app, our website, or via email. We encourage you to review this policy periodically to 
                  stay informed about how we protect your information.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
                  Contact Information
                </h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                    please contact us:
                  </p>
                  <div className="space-y-2">
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

              <Separator className="my-8" />

              <div className="text-center text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <p>This Privacy Policy was last updated on [Effective Date]</p>
                <p className="mt-2">© 2024 SreeSakthiCars. All rights reserved.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
