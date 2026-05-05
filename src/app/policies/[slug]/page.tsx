import { notFound } from "next/navigation";

// Define the valid policy slugs
const validPolicies = ["privacy", "terms", "shipping", "returns"];

export function generateStaticParams() {
  return validPolicies.map((slug) => ({ slug }));
}

function PolicyContent({ slug }: { slug: string }) {
  if (slug === "privacy") {
    return (
      <>
        <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from AnchorNone.</p>
        
        <h2 className="font-['Space_Grotesk'] text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
          1. Information We Collect
        </h2>
        <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>
        
        <h2 className="font-['Space_Grotesk'] text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
          2. How We Use Your Information
        </h2>
        <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).</p>
      </>
    );
  }

  if (slug === "terms") {
    return (
      <>
        <p>These Terms of Service govern your use of our website and form a binding contractual agreement between you and AnchorNone.</p>
        
        <h2 className="font-['Space_Grotesk'] text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
          1. Agreement to Terms
        </h2>
        <p>By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.</p>
        
        <h2 className="font-['Space_Grotesk'] text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
          2. Intellectual Property
        </h2>
        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of AnchorNone and its licensors.</p>
      </>
    );
  }

  if (slug === "shipping") {
    return (
      <>
        <p>Thank you for visiting and shopping at AnchorNone. Following are the terms and conditions that constitute our Shipping Policy.</p>
        
        <h2 className="font-['Space_Grotesk'] text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
          1. Processing Time
        </h2>
        <p>All orders are processed within 1-3 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days.</p>
        
        <h2 className="font-['Space_Grotesk'] text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
          2. Shipping Rates & Delivery Estimates
        </h2>
        <p>Shipping charges for your order will be calculated and displayed at checkout. Delivery delays can occasionally occur depending on your location and chosen shipping method.</p>
      </>
    );
  }

  if (slug === "returns") {
    return (
      <>
        <p>Thanks for shopping at AnchorNone. If you are not entirely satisfied with your purchase, we're here to help.</p>
        
        <h2 className="font-['Space_Grotesk'] text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
          1. Returns
        </h2>
        <p>You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.</p>
        
        <h2 className="font-['Space_Grotesk'] text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
          2. Refunds
        </h2>
        <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your credit card (or original method of payment).</p>
      </>
    );
  }

  return null;
}

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!validPolicies.includes(slug)) {
    notFound();
  }

  // Generate a display title based on the slug
  const title = slug === "privacy" ? "Privacy Policy"
    : slug === "terms" ? "Terms of Service"
    : slug === "shipping" ? "Shipping Policy"
    : "Return Policy";

  return (
    <main className="max-w-4xl mx-auto px-6 py-24 font-['Inter']">
      <h1 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
        {title}
      </h1>
      
      <div className="prose prose-slate dark:prose-invert max-w-none prose-lg">
        <p className="text-slate-500 dark:text-slate-400 mb-8 italic">
          Last updated: May 2026
        </p>

        <PolicyContent slug={slug} />

        <h2 className="font-['Space_Grotesk'] text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
          Contact Us
        </h2>
        <p>
          If you have any questions about these policies, please contact us at <strong>support@anchornone.com</strong>.
        </p>
      </div>
    </main>
  );
}
