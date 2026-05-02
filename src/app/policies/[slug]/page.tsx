import { notFound } from "next/navigation";

// Define the valid policy slugs
const validPolicies = ["privacy", "terms", "shipping", "returns"];

export function generateStaticParams() {
  return validPolicies.map((slug) => ({ slug }));
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

        <p>
          This is a placeholder for the official AnchorNone {title.toLowerCase()}. As a new premium storefront, we are currently finalizing our legal documentation to ensure it meets international compliance standards.
        </p>

        <h2 className="font-['Space_Grotesk'] text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
          1. General Information
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <h2 className="font-['Space_Grotesk'] text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
          2. Your Rights & Responsibilities
        </h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2 className="font-['Space_Grotesk'] text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
          3. Contact Us
        </h2>
        <p>
          If you have any questions about these policies, please contact us at <strong>support@anchornone.com</strong>.
        </p>
      </div>
    </main>
  );
}
