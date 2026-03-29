import { useRef } from 'react'
import logoImage from './assets/game logo.png'
import fortressImage from './assets/14-Fortress.webp'
import heroImage from './assets/hero.jpg'
import runningImage from './assets/Screenshot_2026-03-12-03-14-17-264_com.geofitwars.jpg'
import worldMapImage from './assets/pngtree-3d-world-map-with-topography-png-image_19170362.png'
import DotGrid from './DotGrid'
import Crosshair from './Crosshair'

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className="app-root">
      <div className="app-bg-layer" aria-hidden="true">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="app-content-layer" ref={containerRef}>
        <Crosshair containerRef={containerRef} color="#ffffff" targeted />
      <header className="topbar">
        <a className="brand" href="#home">
          <img src={logoImage} alt="GeoFitWars logo" className="brand-logo" />
          <span>GeoFitWars</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#overview">Overview</a>
          <a href="#features">Features</a>
          <a href="#media">Media</a>
          <a href="#news">News</a>
          <a href="#community">Community</a>
          <a href="#support">Support</a>
        </nav>
        <a className="btn btn-primary" href="https://github.com/omdev009mishra/GeoFit-Wars-Game" target="_blank" rel="noopener noreferrer">
          Play Now
        </a>
      </header>

      <main className="site" id="home">
        <section className="hero section">
          <div className="hero-bg" aria-hidden="true">
            <img src={heroImage} alt="" className="hero-image" />
            <span className="hero-overlay" />
            <span className="orb orb-one" />
            <span className="orb orb-two" />
            <span className="ring ring-one" />
            <span className="ring ring-two" />
            <span className="iso-card iso-a" />
            <span className="iso-card iso-b" />
          </div>
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">GeoFitWars | Fitness Strategy Game</p>
              <h1>Turn Your Runs Into Conquests</h1>
              <p className="lead">
                GeoFitWars transforms real-world running into territory wars. Run to generate power,
                capture zones, build your fortress, and dominate rivals on a strategic map.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="https://github.com/omdev009mishra/GeoFit-Wars-Game" target="_blank" rel="noopener noreferrer">
                  Play Beta
                </a>
                <a className="btn btn-ghost" href="https://github.com/omdev009mishra/GeoFit-Wars-Game" target="_blank" rel="noopener noreferrer">
                  Download App
                </a>
              </div>
            </div>
            <aside className="hero-panel">
              <h3>Core Loop</h3>
              <ol>
                <li>Run in real life</li>
                <li>Convert distance into resources</li>
                <li>Capture territories</li>
                <li>Build and upgrade your base</li>
                <li>Attack enemies and defend your empire</li>
              </ol>
            </aside>
          </div>
        </section>

        <section className="section" id="overview">
          <div className="container split overview-layout">
            <div>
              <p className="eyebrow">Game Overview</p>
              <h2>One world. Your world.</h2>
              <p>
                GeoFitWars is a location-based strategy game where your real runs power your in-game
                empire. Capture territory, build your base, and battle players worldwide.
              </p>
              <div className="chip-row">
                <span>Run to earn power</span>
                <span>Capture and defend territory</span>
                <span>Build and battle in PvP</span>
              </div>
            </div>
            <div className="quick-facts">
              <article className="world-map-card">
                <h3>Global Territory Map</h3>
                <div className="world-map" aria-label="World map showing a player base in India">
                  <img src={worldMapImage} alt="Stylized world map" className="world-map-image" />
                  <span className="base-pin" style={{ left: '67%', top: '46%' }}>
                    <i />
                    <img src={fortressImage} alt="Base fortress" className="base-asset" />
                    <b>Base Alpha - India Sector</b>
                  </span>
                </div>
              </article>
              <article>
                <strong>Private Map System</strong>
                <span>Every player has a personal virtual world.</span>
              </article>
              <article>
                <strong>Daily Progress</strong>
                <span>Distance converts to energy, coins, and upgrades.</span>
              </article>
              <article>
                <strong>Always Competitive</strong>
                <span>Raid rivals, defend your base, and climb leaderboards.</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="how-it-works">
          <div className="container">
            <p className="eyebrow">How It Works</p>
            <h2 className="grad-heading">Four steps to domination</h2>
            <div className="steps-row">
              <div className="step-item">
                <div className="step-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <span className="step-num">01</span>
                <h3>Run</h3>
                <p>Every real-world kilometre generates energy and resources for your empire.</p>
              </div>
              <div className="step-item">
                <div className="step-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                  </svg>
                </div>
                <span className="step-num">02</span>
                <h3>Earn</h3>
                <p>Convert distance into coins, XP, and upgrade materials in real-time.</p>
              </div>
              <div className="step-item">
                <div className="step-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <span className="step-num">03</span>
                <h3>Capture</h3>
                <p>Deploy troops to seize enemy zones and expand your territory on the world map.</p>
              </div>
              <div className="step-item">
                <div className="step-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </div>
                <span className="step-num">04</span>
                <h3>Battle</h3>
                <p>Raid rivals, defend your fortress, and climb the global leaderboard.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="features">
          <div className="container">
            <p className="eyebrow">Core Features</p>
            <h2>Built for movement, strategy, and rivalry</h2>
            <div className="feature-grid">
              <article>
                <div className="feat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3>Territory Control</h3>
                <p>Capture real-world zones to expand influence and earn key resources.</p>
              </article>
              <article>
                <div className="feat-icon yellow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="1"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <h3>Base Building</h3>
                <p>Build HQs, defense towers, collectors, and training camps with strategic depth.</p>
              </article>
              <article>
                <div className="feat-icon orange">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </div>
                <h3>PvP Battles</h3>
                <p>Raid enemy bases, protect your empire, and rise through ranked competition.</p>
              </article>
              <article>
                <div className="feat-icon green">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <h3>Fitness Integration</h3>
                <p>More movement means faster progression, stronger defenses, and better rewards.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="media">
          <div className="container">
            <p className="eyebrow">Media</p>
            <h2>In-game screens and gameplay previews</h2>
            <div className="media-grid">
              <article className="media-card map">
                <img src={worldMapImage} alt="World territory map" />
                <span>Map Control</span>
              </article>
              <article className="media-card base">
                <img src={fortressImage} alt="Fortress base concept" />
                <span>Base Builder</span>
              </article>
              <article className="media-card battle">
                <img src={runningImage} alt="In-game map interface with player positioning" />
                <span>Battle Arena</span>
              </article>
              <article className="media-card profile">
                <img src={heroImage} alt="Player profile and progression" />
                <span>Commander Profile</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="news">
          <div className="container">
            <p className="eyebrow">Latest News</p>
            <h2>Updates from the battlefield</h2>
            <div className="news-grid">
              <article className="news-card">
                <p className="news-meta">March 2026</p>
                <h3>Open Beta Expansion</h3>
                <p>New regions unlocked and early balancing updates are now live.</p>
              </article>
              <article className="news-card">
                <p className="news-meta">February 2026</p>
                <h3>Clan System Reveal</h3>
                <p>Team up with friends, coordinate raids, and secure seasonal rewards.</p>
              </article>
              <article className="news-card">
                <p className="news-meta">January 2026</p>
                <h3>Territory Events</h3>
                <p>Limited-time control zones now provide high-value bonus resources.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="community">
          <div className="container split">
            <div>
              <p className="eyebrow">Community</p>
              <h2>Play together. Conquer together.</h2>
              <ul className="adv-list">
                <li>Join or create clans to coordinate defense and attacks.</li>
                <li>Compete on global and regional leaderboards.</li>
                <li>Participate in weekly and seasonal live events.</li>
                <li>Track your growth with a detailed player profile.</li>
              </ul>
            </div>
            <div className="leaderboard">
              <h3>🏆 Global Leaderboard</h3>
              <p style={{fontSize: '0.8rem', color: 'var(--ink-500)', marginBottom: '0.75rem'}}>Top commanders this week</p>
              <div className="lb-row">
                <span className="lb-rank gold">1</span>
                <span className="lb-avatar">🏃</span>
                <div className="lb-info"><div className="lb-name">RunnerX99</div><div className="lb-country">India</div></div>
                <span className="lb-score">12,450</span>
                <span className="lb-badge">🔥 Hot</span>
              </div>
              <div className="lb-row">
                <span className="lb-rank silver">2</span>
                <span className="lb-avatar">⚡</span>
                <div className="lb-info"><div className="lb-name">SpeedDemon</div><div className="lb-country">USA</div></div>
                <span className="lb-score">11,820</span>
                <span className="lb-badge">⚔️ Raider</span>
              </div>
              <div className="lb-row">
                <span className="lb-rank bronze">3</span>
                <span className="lb-avatar">🌍</span>
                <div className="lb-info"><div className="lb-name">ZoneHunter</div><div className="lb-country">Germany</div></div>
                <span className="lb-score">10,330</span>
                <span className="lb-badge">🛡 Defender</span>
              </div>
              <div className="lb-row">
                <span className="lb-rank">4</span>
                <span className="lb-avatar">🗾</span>
                <div className="lb-info"><div className="lb-name">BattleSteps</div><div className="lb-country">Japan</div></div>
                <span className="lb-score">9,100</span>
              </div>
              <div className="lb-row">
                <span className="lb-rank">5</span>
                <span className="lb-avatar">🇧🇷</span>
                <div className="lb-info"><div className="lb-name">MarathonKing</div><div className="lb-country">Brazil</div></div>
                <span className="lb-score">8,750</span>
              </div>
              <div className="tag-row" style={{marginTop: '1rem'}}>
                <span>Discord</span>
                <span>X / Twitter</span>
                <span>Instagram</span>
                <span>YouTube</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="support">
          <div className="container">
            <p className="eyebrow">Support</p>
            <h2>Help center and player support</h2>
            <div className="support-grid">
              <article>
                <div className="support-icon blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3>Account Help</h3>
                <p>Password reset, account recovery, and security settings.</p>
              </article>
              <article>
                <div className="support-icon green">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <h3>Gameplay Help</h3>
                <p>How running sync works, rewards, capture, and battle mechanics.</p>
              </article>
              <article>
                <div className="support-icon orange">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <h3>Report a Problem</h3>
                <p>Send bug reports, match issues, and payment problems to support.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section join-cta">
          <div className="container join-cta-inner">
            <div className="join-cta-glow" aria-hidden="true" />
            <p className="eyebrow">Ready to fight?</p>
            <h2 className="grad-heading">Your empire awaits</h2>
            <p className="lead" style={{margin: '1rem auto', maxWidth: '520px', textAlign: 'center'}}>
              Join thousands of commanders turning their daily runs into global conquest. No gym required.
            </p>
            <a
              className="btn btn-primary"
              href="https://github.com/omdev009mishra/GeoFit-Wars-Game"
              target="_blank"
              rel="noopener noreferrer"
              style={{marginTop: '1.5rem', fontSize: '1.1rem', padding: '1rem 2.2rem'}}
            >
              Play Free Now →
            </a>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="container footer-row">
          <p>GeoFitWars 2026. All rights reserved.</p>
          <p>Privacy | Terms | Player Support</p>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default App
