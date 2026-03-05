"use client";

import { useState } from "react";
import Link from "next/link";

export default function AffiliateSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    paypalEmail: "",
    platform: "youtube",
    platformHandle: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<{ code: string; dashboardUrl: string } | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/affiliate/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 409) {
          setSuccess({ code: data.code, dashboardUrl: `https://citationcore.com/affiliate/${data.code}` });
          return;
        }
        throw new Error(data.error || "Registration failed");
      }

      setSuccess(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center text-white font-bold text-sm">
              C
            </div>
            <span className="font-bold text-gray-900">CitationCore</span>
            <span className="text-gray-400 text-sm">/ Affiliate Program</span>
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Earn by recommending <span className="gradient-text">CitationCore</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help Shopify merchants get visible in AI search engines. Earn a bounty for every paid install through your referral link.
          </p>
        </div>

        {/* How it works */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Share your link</h3>
            <p className="text-sm text-gray-600">
              Add your unique referral link to your videos, bio, blog posts, or social media.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Merchants install</h3>
            <p className="text-sm text-gray-600">
              When someone clicks your link and installs CitationCore, the referral is tracked automatically.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              $
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Get paid</h3>
            <p className="text-sm text-gray-600">
              Earn $15–$40 for every merchant who upgrades to a paid plan. Paid monthly via PayPal.
            </p>
          </div>
        </div>

        {/* Commission table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-12">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h2 className="font-semibold text-gray-900">Commission Structure</h2>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                <th className="px-6 py-3">Plan</th>
                <th className="px-6 py-3">Monthly Price</th>
                <th className="px-6 py-3">Your Bounty</th>
                <th className="px-6 py-3">Payout</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="text-sm">
                <td className="px-6 py-3 font-medium text-gray-900">Starter</td>
                <td className="px-6 py-3 text-gray-600">$19/mo</td>
                <td className="px-6 py-3 font-semibold text-brand-600">$15</td>
                <td className="px-6 py-3 text-gray-500">One-time</td>
              </tr>
              <tr className="text-sm">
                <td className="px-6 py-3 font-medium text-gray-900">Pro</td>
                <td className="px-6 py-3 text-gray-600">$39/mo</td>
                <td className="px-6 py-3 font-semibold text-brand-600">$25</td>
                <td className="px-6 py-3 text-gray-500">One-time</td>
              </tr>
              <tr className="text-sm">
                <td className="px-6 py-3 font-medium text-gray-900">Business</td>
                <td className="px-6 py-3 text-gray-600">$79/mo</td>
                <td className="px-6 py-3 font-semibold text-brand-600">$40</td>
                <td className="px-6 py-3 text-gray-500">One-time</td>
              </tr>
            </tbody>
          </table>
        </div>

        {success ? (
          /* Success state */
          <div className="bg-brand-50 border border-brand-200 rounded-xl p-8 text-center">
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
              ✓
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">You&apos;re in!</h2>
            <p className="text-gray-600 mb-6">Your affiliate code is <strong>{success.code}</strong></p>
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 font-mono text-sm text-gray-700 mb-4 max-w-lg mx-auto">
              https://citationcore.com/?ref={success.code}
            </div>
            <a
              href={success.dashboardUrl}
              className="gradient-bg text-white px-8 py-3 rounded-full font-semibold inline-block hover:opacity-90 transition-opacity"
            >
              Go to your dashboard
            </a>
          </div>
        ) : (
          /* Signup Form */
          <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-lg mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Join the affiliate program</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                  placeholder="Jack Gray"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                  placeholder="jack@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">PayPal email (for payouts)</label>
                <input
                  type="email"
                  value={form.paypalEmail}
                  onChange={(e) => setForm({ ...form, paypalEmail: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                  placeholder="Same as email if blank"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
                <select
                  value={form.platform}
                  onChange={(e) => setForm({ ...form, platform: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                >
                  <option value="youtube">YouTube</option>
                  <option value="tiktok">TikTok</option>
                  <option value="blog">Blog / Website</option>
                  <option value="twitter">X / Twitter</option>
                  <option value="instagram">Instagram</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Channel / Handle</label>
                <input
                  type="text"
                  value={form.platformHandle}
                  onChange={(e) => setForm({ ...form, platformHandle: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                  placeholder="@yourchannel"
                />
              </div>

              {error && <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full gradient-bg text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? "Creating your account..." : "Join now — it's free"}
              </button>
            </form>
            <p className="text-xs text-gray-400 text-center mt-4">
              By joining, you agree to promote CitationCore honestly and ethically.
              No spam, no misleading claims.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
