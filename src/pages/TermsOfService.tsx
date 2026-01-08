import Layout from '@/components/layout/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 8, 2026</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using MyFoodMenu ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you do not have permission to access the Service. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground">
                MyFoodMenu is an online food ordering and delivery platform that connects customers with restaurant partners. We facilitate the ordering process and coordinate delivery services. We are an intermediary and are not responsible for the preparation of food by our restaurant partners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
              <p className="text-muted-foreground mb-4">When creating an account, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Be responsible for all activities under your account</li>
                <li>Be at least 18 years old or have parental consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Ordering and Payment</h2>
              <p className="text-muted-foreground mb-4">By placing an order, you agree that:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>All orders are subject to acceptance and availability</li>
                <li>Prices are subject to change without notice</li>
                <li>You are responsible for providing accurate delivery information</li>
                <li>Payment is due at the time of ordering</li>
                <li>We may refuse or cancel orders at our discretion</li>
                <li>Promotional offers are subject to specific terms and conditions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Delivery</h2>
              <p className="text-muted-foreground mb-4">Regarding delivery services:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Estimated delivery times are approximate and not guaranteed</li>
                <li>You must be available to receive your order at the specified address</li>
                <li>We are not responsible for delays caused by incorrect addresses</li>
                <li>Delivery fees may apply based on location and order size</li>
                <li>Minimum order values may apply in certain areas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Cancellations and Refunds</h2>
              <p className="text-muted-foreground mb-4">Our cancellation and refund policy:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Orders may be canceled within 5 minutes of placement</li>
                <li>After preparation begins, cancellation may not be possible</li>
                <li>Refunds for quality issues will be assessed on a case-by-case basis</li>
                <li>Refunds are processed within 5-10 business days</li>
                <li>We reserve the right to refuse refunds for fraudulent claims</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Food Safety and Allergies</h2>
              <p className="text-muted-foreground">
                While our restaurant partners strive to accommodate dietary restrictions and allergies, we cannot guarantee that any menu item is completely free of allergens. If you have severe allergies, please contact the restaurant directly before ordering. FoodExpress is not responsible for allergic reactions or other adverse effects from food consumption.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
              <p className="text-muted-foreground">
                The Service and its original content, features, and functionality are owned by MyFoodMenu and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Prohibited Activities</h2>
              <p className="text-muted-foreground mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use the Service for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Use automated systems to access the Service</li>
                <li>Impersonate others or provide false information</li>
                <li>Engage in fraudulent activities</li>
                <li>Harass or abuse restaurant partners or delivery personnel</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, MyFoodMenu shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses, resulting from your use of or inability to use the Service. Our total liability shall not exceed the amount you paid for the specific order giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to defend, indemnify, and hold harmless MyFoodMenu and its officers, directors, employees, and agents from any claims, damages, obligations, losses, liabilities, costs, or expenses arising from your use of the Service or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. We will notify users of significant changes by posting a notice on our website. Your continued use of the Service after changes are posted constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>📧 Email: legal@myfoodmenu.com</li>
                <li>📞 Phone: +1 (555) 123-4567</li>
                <li>📍 Address: 123 Food Street, Cuisine City, CC 12345</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
