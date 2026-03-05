"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Stats {
  totalClicks: number;
  recentClicks: number;
  totalInstalls: number;
  paidInstalls: number;
  churnedInstalls: number;
  totalEarned: number;
  pendingEarnings: number;
  conversionRate: string;
}

interface Referral {
  shop: string;
  status: string;
  plan: string;
  bounty: number;
  paid: boolean;
  date: string;
}

interface Payout {
  amount: number;
  status: string;
  period_start: string;
  period_end: string;
  paid_at: string;
}

interface AffiliateData {
  affiliate: {
    name: string;
    code: string;
    commission_amount: number;
    created_at: string;
  };
  stats: Stats;
  referrals: Referral[];
  payouts: Payout[];
}

export default function AffiliateDashboard() {
  const { code } = useParams<{ code: string }>();
  const [data, setData] = useState<AffiliateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch(`/api/affiliate/stats/${code}`)
      .then((r) => {
        if (!r.ok) throw new Error("Affiliate not found");
        return r.json();
      })
      .then(setData)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [code]);

  const copyLink = () => {
    navigator.clipboard.writeText(`https://citationcore.com/?ref=${code}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Affiliate not found</h1>
          <p className="text-gray-600 mb-6">This affiliate code doesn&apos;t exist or has been deactivated.</p>
          <Link href="/affiliates" className="gradient-bg text-white px-6 py-3 rounded-full font-semibold">
            Join our affiliate program
          </Link>
        </div>
      </div>
    );
  }

  const { affiliate, stats, referrals, payouts } = data;
  const affiliateLink = `https://citationcore.com/?ref=${affiliate.code}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center text-white font-bold text-sm">
              C
            </div>
            <span className="font-bold text-gray-900">CitationCore</span>
            <span className="text-gray-400 text-sm">/ Affiliate</span>
          </Link>
          <div className="text-sm text-gray-500">
            Welcome, <span className="font-semibold text-gray-900">{affiliate.name}</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Affiliate Link */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Your Referral Link</h2>
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-mono text-sm text-gray-700 truncate">
              {affiliateLink}
            </div>
            <button
              onClick={copyLink}
              className="gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Share this link in your videos, bio, or posts. Clicks are tracked with a 30-day cookie.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total Clicks" value={stats.totalClicks} sub={`${stats.recentClicks} last 30d`} />
          <StatCard label="Installs" value={stats.totalInstalls} sub={`${stats.conversionRate}% conv. rate`} />
          <StatCard label="Paid Conversions" value={stats.paidInstalls} sub={`${stats.churnedInstalls} churned`} />
          <StatCard
            label="Earnings"
            value={`$${stats.totalEarned.toFixed(2)}`}
            sub={`$${stats.pendingEarnings.toFixed(2)} pending`}
            highlight
          />
        </div>

        {/* Commission Info */}
        <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold shrink-0">
              $
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Commission: ${affiliate.commission_amount} per paid install</h3>
              <p className="text-sm text-gray-600">
                You earn ${affiliate.commission_amount} for each merchant who installs CitationCore through your link and upgrades to a paid plan.
                Payouts are processed monthly via PayPal once Shopify confirms payment (typically 60-90 days after install).
                Minimum payout: $50.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Referrals Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-900">Referral History</h2>
              </div>
              {referrals.length === 0 ? (
                <div className="px-6 py-12 text-center text-gray-400">
                  <p className="text-lg mb-1">No referrals yet</p>
                  <p className="text-sm">Share your link to start earning!</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Store</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Plan</th>
                        <th className="px-6 py-3">Bounty</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {referrals.map((r, i) => (
                        <tr key={i} className="text-sm">
                          <td className="px-6 py-3 text-gray-500">
                            {new Date(r.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </td>
                          <td className="px-6 py-3 font-medium text-gray-900">{r.shop}</td>
                          <td className="px-6 py-3">
                            <StatusBadge status={r.status} />
                          </td>
                          <td className="px-6 py-3 text-gray-600">{r.plan || "free"}</td>
                          <td className="px-6 py-3">
                            {r.status === "paid" ? (
                              <span className={r.paid ? "text-brand-600 font-semibold" : "text-amber-600"}>
                                ${r.bounty} {r.paid ? "Paid" : "Pending"}
                              </span>
                            ) : (
                              <span className="text-gray-400">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Payouts Sidebar */}
          <div>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-900">Payouts</h2>
              </div>
              {payouts.length === 0 ? (
                <div className="px-6 py-8 text-center text-gray-400">
                  <p className="text-sm">No payouts yet</p>
                  <p className="text-xs mt-1">First payout when you reach $50</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {payouts.map((p, i) => (
                    <div key={i} className="px-6 py-3 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-gray-900">${p.amount}</div>
                        <div className="text-xs text-gray-500">
                          {p.paid_at
                            ? new Date(p.paid_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                            : "Processing"}
                        </div>
                      </div>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          p.status === "paid"
                            ? "bg-brand-50 text-brand-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Tips */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mt-4">
              <h3 className="font-semibold text-gray-900 mb-3">Tips to earn more</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 mt-0.5">1.</span>
                  Add your link to your TikTok/YouTube bio
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 mt-0.5">2.</span>
                  Create a &quot;Top Shopify Apps&quot; video featuring CitationCore
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 mt-0.5">3.</span>
                  Show a live scan — the shock factor of a low score drives installs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 mt-0.5">4.</span>
                  Mention the free plan — zero risk for your audience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, sub, highlight }: { label: string; value: string | number; sub: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl border p-5 ${highlight ? "bg-brand-50 border-brand-200" : "bg-white border-gray-200"}`}>
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{label}</div>
      <div className={`text-2xl font-bold ${highlight ? "text-brand-700" : "text-gray-900"}`}>{value}</div>
      <div className="text-xs text-gray-400 mt-1">{sub}</div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    installed: "bg-blue-50 text-blue-700",
    paid: "bg-brand-50 text-brand-700",
    churned: "bg-red-50 text-red-700",
  };
  return (
    <span className={`text-xs font-medium px-2 py-1 rounded-full ${styles[status as keyof typeof styles] || "bg-gray-50 text-gray-700"}`}>
      {status}
    </span>
  );
}
