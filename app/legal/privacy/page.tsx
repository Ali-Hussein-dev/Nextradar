export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Nextradar",
}
const content = `
Nextradar ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website Nextradar or mobile application. Please read this Privacy Policy carefully.

Information We Collect
We may collect personal information that you provide to us, such as your name, email address, mailing address, phone number, and payment information. We may also collect information about your usage of our website or mobile application, including your IP address, browser type, operating system, referring URLs, and information about your interaction with our services.

How We Use Your Information
We use the information we collect to provide, maintain, and improve our products and services, as well as for the following purposes:

- To process and fulfill your orders and transactions
- To communicate with you about our products, services, and promotions
- To personalize your experience and improve our website and mobile application
- To protect against fraud, unauthorized transactions, claims, and other liabilities
- To comply with applicable laws and regulations

Information Sharing and Disclosure
We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us in operating our website, mobile application, and business. We may also disclose your information if required by law or in response to a valid legal request.

Data Security
We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.

Your Choices and Rights
You may have certain rights regarding your personal information, such as the right to access, update, or delete your information. Please contact us at hi@nextradar.dev to exercise these rights or if you have any questions or concerns about our Privacy Policy.

Changes to This Privacy Policy
We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy on our website or mobile application.

Contact Us
If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at hi@nextradar.dev.

Last Updated: 4 Decemeber 2024

Note: This is a general template, and you should review and customize it to ensure that it accurately reflects your company's specific data collection, usage, and sharing practices, as well as applicable laws and regulations in your jurisdiction.`
//======================================
const PrivacyPage = () => {
  return (
    <div className="px-2 pb-16">
      <h1 className="mb-4 border-b pb-2 text-2xl font-bold dark:border-zinc-800">
        Privacy Policy
      </h1>
      <article className="mx-auto max-w-3xl dark:text-zinc-300">
        <pre className="whitespace-pre-wrap">{content}</pre>
      </article>
    </div>
  )
}
export default PrivacyPage
