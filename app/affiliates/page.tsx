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
    commissionType: "bounty" as "bounty" | "recurring",
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
            Help Shopify merchants get visible in AI search engines. Earn commissions for every merchant who upgrades to a paid plan through your referral link.
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
              Choose your model: one-time bounty or recurring commissions. Paid monthly via PayPal.
            </p>
          </div>
        </div>

        {/* Commission structure */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Choose your commission model</h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Commissions apply only when a merchant upgrades to a <strong>paid plan</strong>. Free plan installs are not eligible.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Option A: One-time Bounty */}
            <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                <h3 className="font-semibold text-gray-900">Option A — One-time Bounty</h3>
                <p className="text-xs text-gray-500 mt-1">Earn a fixed amount per paid conversion</p>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                    <th className="px-6 py-3">Plan</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Your Bounty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="text-sm">
                    <td className="px-6 py-3 font-medium text-gray-900">Free</td>
                    <td className="px-6 py-3 text-gray-600">$0</td>
                    <td className="px-6 py-3 text-gray-400">—</td>
                  </tr>
                  <tr className="text-sm">
                    <td className="px-6 py-3 font-medium text-gray-900">Starter</td>
                    <td className="px-6 py-3 text-gray-600">$19/mo</td>
                    <td className="px-6 py-3 font-semibold text-brand-600">$15</td>
                  </tr>
                  <tr className="text-sm">
                    <td className="px-6 py-3 font-medium text-gray-900">Growth</td>
                    <td className="px-6 py-3 text-gray-600">$49/mo</td>
                    <td className="px-6 py-3 font-semibold text-brand-600">$30</td>
                  </tr>
                  <tr className="text-sm">
                    <td className="px-6 py-3 font-medium text-gray-900">Pro</td>
                    <td className="px-6 py-3 text-gray-600">$99/mo</td>
                    <td className="px-6 py-3 font-semibold text-brand-600">$50</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                <p className="text-xs text-gray-500">Paid once after 60 days of active subscription.</p>
              </div>
            </div>

            {/* Option B: Recurring Commission */}
            <div className="bg-white rounded-xl border-2 border-brand-300 overflow-hidden relative">
              <div className="absolute top-3 right-3 bg-brand-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                Popular
              </div>
              <div className="px-6 py-4 border-b border-gray-100 bg-brand-50">
                <h3 className="font-semibold text-gray-900">Option B — Recurring Commission</h3>
                <p className="text-xs text-gray-500 mt-1">Earn every month as long as the merchant stays subscribed</p>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                    <th className="px-6 py-3">Plan</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">You earn / month</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="text-sm">
                    <td className="px-6 py-3 font-medium text-gray-900">Free</td>
                    <td className="px-6 py-3 text-gray-600">$0</td>
                    <td className="px-6 py-3 text-gray-400">—</td>
                  </tr>
                  <tr className="text-sm">
                    <td className="px-6 py-3 font-medium text-gray-900">Starter</td>
                    <td className="px-6 py-3 text-gray-600">$19/mo</td>
                    <td className="px-6 py-3 font-semibold text-brand-600">$4.75/mo <span className="text-gray-400 font-normal text-xs">(25%)</span></td>
                  </tr>
                  <tr className="text-sm">
                    <td className="px-6 py-3 font-medium text-gray-900">Growth</td>
                    <td className="px-6 py-3 text-gray-600">$49/mo</td>
                    <td className="px-6 py-3 font-semibold text-brand-600">$12.25/mo <span className="text-gray-400 font-normal text-xs">(25%)</span></td>
                  </tr>
                  <tr className="text-sm">
                    <td className="px-6 py-3 font-medium text-gray-900">Pro</td>
                    <td className="px-6 py-3 text-gray-600">$99/mo</td>
                    <td className="px-6 py-3 font-semibold text-brand-600">$29.70/mo <span className="text-gray-400 font-normal text-xs">(30%)</span></td>
                  </tr>
                </tbody>
              </table>
              <div className="px-6 py-3 bg-brand-50 border-t border-gray-100">
                <p className="text-xs text-gray-500">Paid monthly via PayPal. No one-time bounty — you earn as long as they stay.</p>
              </div>
            </div>
          </div>
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Commission model</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, commissionType: "bounty" })}
                    className={`border rounded-lg px-4 py-3 text-sm text-left transition-all ${
                      form.commissionType === "bounty"
                        ? "border-brand-500 bg-brand-50 ring-2 ring-brand-500"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <span className="font-semibold text-gray-900 block">One-time bounty</span>
                    <span className="text-xs text-gray-500">$15–$50 per paid install</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, commissionType: "recurring" })}
                    className={`border rounded-lg px-4 py-3 text-sm text-left transition-all ${
                      form.commissionType === "recurring"
                        ? "border-brand-500 bg-brand-50 ring-2 ring-brand-500"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <span className="font-semibold text-gray-900 block">Recurring 25–30%</span>
                    <span className="text-xs text-gray-500">Monthly, as long as they stay</span>
                  </button>
                </div>
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
