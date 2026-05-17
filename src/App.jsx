import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  ShieldCheck,
  MapPin,
  Coins,
  Scale,
  Lock,
  Zap,
  CheckCircle2,
  Menu,
  X,
  Award,
  Users,
  Gem,
  History,
  Phone,
  Mail,
  Globe
} from 'lucide-react';
import { GrowthChart, UseOfFundsChart } from './components/FinancialCharts';

const Section = ({ title, children, id, className = "" }) => (
  <section id={id} className={className}>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-header">
        <h2>{title}</h2>
        <div className="title-underline"></div>
      </div>
      {children}
    </motion.div>
  </section>
);

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFullMD, setShowFullMD] = useState(false);

  const navLinks = [
    { href: '#summary', label: 'Summary' },
    { href: '#status', label: 'Brand' },
    { href: '#plan', label: 'Plan' },
    { href: '#financials', label: 'Growth' },
  ];

  return (
    <div className="app-container">

      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="nav-logo">N.R. Thanga Maaligai</div>

        {/* Desktop links */}
        <div className="nav-links desktop-nav">
          {navLinks.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>

        {/* Hamburger button (mobile only) */}
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="mobile-drawer-inner">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero ── */}
      <section className="hero-modern">
        <div className="hero-circle-bg"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-modern-content"
        >
          {/* Badges row (visible on mobile above image) */}
          <div className="hero-badges-row">
            <div className="badge-pill">80+ Years Legacy</div>
            <div className="badge-pill">Unmatched Trust</div>
          </div>

          <div className="hero-profile-container">
            <img src="/profile2_clean.png" alt="Promoter" className="hero-profile-img" />
          </div>

          <div className="hero-text-container">
            <span className="intro-text">Established in 1942</span>
            <h1>A Legacy of Trust,<br />A <span className="text-orange">Future of Growth</span></h1>
            <p className="lead-text">
              Strategizing the ₹100 Crore expansion of N.R. Thanga Maaligai<br className="desktop-br" />
              into an institutional-grade jewellery powerhouse.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Executive Summary ── */}
      <Section title="Strategic Vision & Executive Summary" id="summary">
        <div className="grid grid-2 align-center">
          <div className="glass-card">
            <p className="lead-text">
              N. R. Thanga Maaligai is a legacy jewellery enterprise with over 80 years of
              uninterrupted operations and deep-rooted brand trust. We are now transitioning
              towards a <strong>Private Limited Company</strong> structure to drive large-scale
              expansion and institutionalized growth.
            </p>
            <div className="highlight-box">
              <h3>Target Strategic Investment</h3>
              <div className="highlight-amount">₹100 Cr</div>
            </div>
          </div>
          <div className="card-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury Jewellery Interior"
            />
          </div>
        </div>
      </Section>

      {/* ── Leadership & Visionary Stewardship ── */}
      <Section title="Leadership & Visionary Stewardship" id="leadership">
        <div className="grid grid-2 align-center">
          <div className="md-profile-card">
            <div className="md-image-wrap">
              <img src="/prof3.png" alt="R.N.K. RAJAN" />
              <div className="md-badge">Managing Director</div>
            </div>
            <div className="md-info">
              <h3 className="text-orange">R.N.K. RAJAN</h3>
              <p className="md-designation">Managing Director | Assistant Governor, Rotary</p>
            </div>
          </div>

          <div className="md-content">
            <p className="lead-text">
              A dedicated entrepreneur with <strong>35 years of hands-on experience</strong> in the
              gold, silver, and diamond industry. R.N.K. RAJAN has navigated multiple economic cycles,
              shaping a disciplined, risk-aware approach to business and capital management.
            </p>

            <div className="profile-text-preview">
              <p>
                "I view gold not merely as a luxury product, but as a time-tested financial asset,
                a hedge against uncertainty, and a vehicle for sustainable wealth creation. My work
                today centers on converting decades of field-level expertise into structured,
                asset-backed investment opportunities."
              </p>
            </div>

            <AnimatePresence>
              {showFullMD && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
                  className="full-profile-text"
                >
                  <p>
                    Over the decades, I have witnessed multiple economic cycles, price fluctuations,
                    and shifts in consumer and investment behavior — experience that has shaped my
                    disciplined, risk-aware approach to business and capital management. My journey
                    has been built on practical knowledge, ethical sourcing, accurate valuation, and
                    long-term relationship building with suppliers, craftsmen, and clients.
                  </p>
                  <p>
                    Alongside my business career, I serve as an Assistant Governor in Rotary, a role
                    that reflects my commitment to leadership, service, transparency, and global
                    collaboration. Rotary has reinforced the importance of trust, accountability, and
                    social impact — values I carry into every professional engagement.
                  </p>
                  <p>
                    My core strength lies in identifying strategic opportunities within the precious
                    metals ecosystem, balancing tradition with innovation. I focus on capital
                    protection, measured growth, and asset-backed investment models that inspire
                    investor confidence. I believe in building ventures that are not only profitable
                    but resilient and ethically grounded.
                  </p>
                  <p>
                    My approach prioritizes capital preservation first, followed by measured growth
                    driven by real demand and operational strength. I engage with investors who value
                    experience over experimentation, and who seek partnerships grounded in trust,
                    long-term vision, and asset security. Together, my objective is to build resilient
                    ventures that withstand volatility and generate enduring value backed by the
                    strength of precious metals.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              className="btn-read-more"
              onClick={() => setShowFullMD(!showFullMD)}
            >
              {showFullMD ? '▲ Show Less' : '▼ Read Full History'}
            </button>
          </div>
        </div>
      </Section>

      {/* ── Brand Journey ── */}
      <Section title="Our Brand Journey" id="status" className="bg-alt">
        <div className="grid grid-2 align-center">
          <div className="timeline" style={{ margin: '0', maxWidth: '100%' }}>
            {[
              {
                year: "1942",
                title: "The Foundation",
                desc: "Started as a premier gold jewellery destination, building a legacy of purity and ethics.",
                icon: <History size={16} />
              },
              {
                year: "1980",
                title: "Generational Trust",
                desc: "Expanded operations and became a household name in Tiruchirappalli and beyond.",
                icon: <Award size={16} />
              },
              {
                year: "2024",
                title: "Institutional Shift",
                desc: "Initiating corporatization to scale our proven model across new high-growth markets.",
                icon: <TrendingUp size={16} />
              },
              {
                year: "2026",
                title: "Strategic Expansion",
                desc: "Expecting ₹100 Crores of strategic investment to fuel pan-India retail footprint.",
                icon: <Coins size={16} />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="timeline-item"
              >
                <div className="timeline-dot">
                  {item.icon}
                </div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p className="lead-text" style={{ fontSize: '1rem' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="milestone-gallery">
            {[
              { year: "1942", src: "/assets/milestones/1942.png", label: "Heritage Storefront" },
              { year: "1980", src: "/assets/milestones/1980.png", label: "Golden Era Showroom" },
              { year: "2024", src: "/assets/milestones/2024.png", label: "Modern Corporatized Vision" },
              { year: "2026", src: "/assets/milestones/2026.png", label: "Future Flagship Showroom" }
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.2 }}
                viewport={{ once: true }}
                className="milestone-photo-card"
              >
                <div className="photo-label">{img.year}: {img.label}</div>
                <img src={img.src} alt={`${img.year} milestone`} />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Institutional Infrastructure ── */}
      <Section title="Institutional Grade Infrastructure" className="bg-alt">
        <div className="grid grid-2">
          <div className="card-image-wrap">
            <img src="/jewellery_display.png" alt="Jewellery Display" />
          </div>
          <div className="glass-card text-center-card">
            <h3 className="text-orange">Exquisite Craftsmanship</h3>
            <p className="lead-text">
              Our showrooms are designed to reflect the premium nature of our products,
              providing a secure and luxurious environment for our institutional-grade inventory.
            </p>
            <button className="btn-outline-modern" style={{ marginTop: '20px' }}>Explore Infrastructure</button>
          </div>
        </div>
      </Section>

      {/* ── Financial Outlook ── */}
      <Section title="Growth Projections & Financial Outlook" id="financials">
        <div className="grid grid-2">
          <div className="glass-card chart-container">
            <GrowthChart />
          </div>
          <div className="glass-card">
            <div className="gov-icon-header">
              <TrendingUp size={32} />
              <h3>Scalability Roadmap</h3>
            </div>
            <p>Our expansion is backed by 8 decades of data and deep market penetration.</p>
            <div className="table-scroll-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Financial Year</th>
                    <th>Turnover Goal</th>
                    <th>PAT Projection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>FY 2024-25</td>
                    <td>₹120.40 Cr</td>
                    <td>₹23.24 Cr</td>
                  </tr>
                  <tr style={{ background: 'var(--accent)' }}>
                    <td>FY 2026-27</td>
                    <td>₹210.50 Cr</td>
                    <td>₹36.12 Cr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Capital Allocation ── */}
      <Section title="Strategic Capital Allocation" id="plan" className="bg-alt">
        <div className="grid grid-2 align-center">
          <div className="glass-card chart-container">
            <UseOfFundsChart />
          </div>
          <div className="alloc-grid">
            {[
              { title: "Inventory Acquisition", val: "65%", icon: <Coins /> },
              { title: "Store Expansion", val: "20%", icon: <MapPin /> },
              { title: "Tech & Marketing", val: "10%", icon: <Zap /> },
              { title: "Working Capital", val: "5%", icon: <ShieldCheck /> }
            ].map((item, i) => (
              <div key={i} className="alloc-card glass-card">
                <div className="alloc-left">
                  <span className="text-orange">{item.icon}</span>
                  <span className="alloc-title">{item.title}</span>
                </div>
                <span className="text-orange alloc-val">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Restructuring Roadmap ── */}
      <Section title="Restructuring & Scalability Roadmap">
        <div className="grid grid-3">
          {[
            { step: "01", title: "Capital Infusion", desc: "Investment for inventory and showroom expansion." },
            { step: "02", title: "Corporatization", desc: "Transition to a Private Limited Company structure." },
            { step: "03", title: "Asset Transfer", desc: "Legal transfer of brand goodwill and operational assets." }
          ].map((item, i) => (
            <div key={i} className={`process-step ${i === 1 ? 'highlight' : ''}`}>
              <div className="step-num">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Governance ── */}
      <Section title="Professional Governance & Security" className="bg-alt">
        <div className="grid grid-2">
          <div className="gov-card">
            <div className="gov-icon-header">
              <Scale size={32} />
              <h3>Investor Protection</h3>
            </div>
            <ul>
              <li><CheckCircle2 size={18} /> Board representation for lead investors</li>
              <li><CheckCircle2 size={18} /> Quarterly audited financial transparency</li>
              <li><CheckCircle2 size={18} /> Defined exit strategies and buyback options</li>
            </ul>
          </div>
          <div className="gov-card">
            <div className="gov-icon-header">
              <Lock size={32} />
              <h3>Professional Management</h3>
            </div>
            <ul>
              <li><CheckCircle2 size={18} /> Experienced leadership in jewellery operations</li>
              <li><CheckCircle2 size={18} /> Data-driven inventory management systems</li>
              <li><CheckCircle2 size={18} /> Transparent profit-sharing mechanisms</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ── Footer CTA ── */}
      <section className="footer">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ color: '#fff', fontSize: '2.2rem', lineHeight: '1.4', fontStyle: 'italic' }}>
            "Partner with a Heritage of Trust. <br /> Grow with N.R. Thanga Maaligai."
          </h2>
          <div className="title-underline" style={{ background: 'var(--gold)', margin: '20px auto 40px' }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', marginBottom: '40px', fontSize: '1.1rem', fontWeight: '500' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', textAlign: 'center', margin: 0, color: '#ffffff' }}>
              <MapPin size={22} color="var(--gold)" style={{ flexShrink: 0 }} />
              No.37 & 38, Clives Building, Nandhi Kovil street, Teppakulam, Trichy - 620 002.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', margin: 0, color: '#ffffff' }}>
              <Phone size={22} color="var(--gold)" style={{ flexShrink: 0 }} /> 
              Ph: 0431-2700290, 4011916 &nbsp;|&nbsp; Mob: 99527 80575, 70108 88203 &nbsp;|&nbsp; WA: 80566 18807
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', margin: 0, color: '#ffffff' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={22} color="var(--gold)" /> nrtgold@gmail.com</span>
              <span style={{ opacity: 0.5, color: '#ffffff' }}>|</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Globe size={22} color="var(--gold)" /> www.nrtjewellery.in</span>
            </div>
          </div>

          <p style={{ fontSize: '0.9rem', opacity: 0.8, color: '#ffffff', margin: 0 }}>© 2026 N.R. Thanga Maaligai. All rights reserved.</p>
        </motion.div>
      </section>

    </div>
  );
};

export default App;
