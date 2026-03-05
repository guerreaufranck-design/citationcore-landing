-- ============================================
-- CitationCore Affiliate System - Supabase Tables
-- Run this in your Supabase SQL Editor
-- ============================================

-- 1. Affiliates table
CREATE TABLE IF NOT EXISTS affiliates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  paypal_email VARCHAR(200),
  platform VARCHAR(50), -- 'tiktok', 'youtube', 'blog', 'other'
  platform_handle VARCHAR(200),
  status VARCHAR(20) DEFAULT 'active', -- 'active', 'paused', 'terminated'
  commission_type VARCHAR(20) DEFAULT 'bounty', -- 'bounty' or 'recurring'
  commission_amount DECIMAL(10,2) DEFAULT 15.00,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Affiliate clicks table
CREATE TABLE IF NOT EXISTS affiliate_clicks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  affiliate_code VARCHAR(50) NOT NULL REFERENCES affiliates(code),
  ip_hash VARCHAR(64), -- hashed for privacy
  user_agent TEXT,
  referrer TEXT,
  landing_page TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Affiliate referrals table
CREATE TABLE IF NOT EXISTS affiliate_referrals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  affiliate_code VARCHAR(50) NOT NULL REFERENCES affiliates(code),
  shop_domain VARCHAR(200) NOT NULL,
  status VARCHAR(20) DEFAULT 'installed', -- 'installed', 'paid', 'churned'
  plan VARCHAR(50), -- 'free', 'starter', 'pro', 'business'
  monthly_amount DECIMAL(10,2) DEFAULT 0,
  bounty_amount DECIMAL(10,2) DEFAULT 0,
  bounty_paid BOOLEAN DEFAULT FALSE,
  bounty_paid_at TIMESTAMPTZ,
  installed_at TIMESTAMPTZ DEFAULT NOW(),
  first_paid_at TIMESTAMPTZ,
  churned_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Affiliate payouts table
CREATE TABLE IF NOT EXISTS affiliate_payouts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  affiliate_code VARCHAR(50) NOT NULL REFERENCES affiliates(code),
  amount DECIMAL(10,2) NOT NULL,
  method VARCHAR(20) DEFAULT 'paypal', -- 'paypal', 'stripe', 'manual'
  reference VARCHAR(200), -- PayPal transaction ID
  period_start DATE,
  period_end DATE,
  status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'paid', 'failed'
  paid_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_code ON affiliate_clicks(affiliate_code);
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_created ON affiliate_clicks(created_at);
CREATE INDEX IF NOT EXISTS idx_affiliate_referrals_code ON affiliate_referrals(affiliate_code);
CREATE INDEX IF NOT EXISTS idx_affiliate_referrals_status ON affiliate_referrals(status);

-- Enable RLS
ALTER TABLE affiliates ENABLE ROW LEVEL SECURITY;
ALTER TABLE affiliate_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE affiliate_referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE affiliate_payouts ENABLE ROW LEVEL SECURITY;

-- RLS policies: allow service role full access (API routes use service key)
CREATE POLICY "Service role full access" ON affiliates FOR ALL USING (true);
CREATE POLICY "Service role full access" ON affiliate_clicks FOR ALL USING (true);
CREATE POLICY "Service role full access" ON affiliate_referrals FOR ALL USING (true);
CREATE POLICY "Service role full access" ON affiliate_payouts FOR ALL USING (true);
