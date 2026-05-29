import { useEffect } from 'react';
import './GlobalImpact.css';

export default function GlobalImpact() {
  /* ── Scroll-reveal ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section className="gi-hero">
        <div className="gi-hero-leaf" aria-hidden="true" />
        <p className="gi-hero-eyebrow">Pear Foods &nbsp;·&nbsp; Legume Protein Technology</p>
        <h1>Global Impact of <em>Legume Protein</em> Technology</h1>
        <p className="gi-hero-sub">
          Nourishing people. Restoring integrity. Strengthening the planet —&nbsp;
          one ingredient at a time.
        </p>
        <nav className="gi-hero-nav">
          <a href="#nutritional">Nutritional Impact</a>
          <a href="#metabolic">Metabolic Impact</a>
          <a href="#consumer">Consumer Impact</a>
          <a href="#environmental">Environmental Impact</a>
          <a href="#systemic">Systemic Impact</a>
        </nav>
      </section>

      {/* ══ MISSION (Section 2) ═══════════════════════════════════════════
          Change: replace quote box content with the text from screenshot 2b  */}
      <section className="mission">
        <div className="mission-text reveal">
          <p className="mission-label">Our Mission</p>
          <blockquote className="mission-statement">
            Preserving nature&apos;s nutritional integrity to nourish people and build a more{' '}
            <em>resilient, sustainable</em> food system for the planet.
          </blockquote>
        </div>

        <div className="mission-quote reveal">
          <span className="mission-quote-mark">&ldquo;</span>
          <p className="mission-quote-text">
            &ldquo;Better nutrition. Lower impact. No compromise. A platform that makes legume protein
            work better, digest better, and perform better — for people and for the planet.&rdquo;
          </p>
          <p className="mission-quote-attr">Pear Foods &nbsp;·&nbsp; Legume Protein Technology</p>
        </div>
      </section>

      {/* ══ STATS BAR (Section 3) ════════════════════════════════════════
          Change: "11" → "10" */}
      <section className="stats-bar">
        <p className="stats-bar-label">Validated across 10 independent analytical methods</p>
        <div className="stats-grid">
          <div className="stat-item reveal">
            <div className="stat-val">100%</div>
            <div className="stat-label">Protein Retained</div>
            <div className="stat-sub">Zero lost in processing (Dumas)</div>
          </div>
          <div className="stat-item reveal">
            <div className="stat-val">87%</div>
            <div className="stat-label">PDCAAS Digestibility</div>
            <div className="stat-sub">Top-tier whole-food legume</div>
          </div>
          <div className="stat-item reveal">
            <div className="stat-val">93.6%</div>
            <div className="stat-label">Trypsin Inhibitor ↓</div>
            <div className="stat-sub">Primary barrier eliminated</div>
          </div>
          <div className="stat-item reveal">
            <div className="stat-val">75%</div>
            <div className="stat-label">Raffinose Reduced</div>
            <div className="stat-sub">Gas &amp; bloating addressed</div>
          </div>
        </div>
      </section>

      {/* ══ 1. NUTRITIONAL IMPACT (Section 4) ════════════════════════════
          Changes:
            - title → "Restoring What Extraction & Isolation Processing Takes Away"
            - remove intro sentence about "simultaneously preserve..."
            - card stat "11" → "10"
            - body text "eleven" → "ten"
            - "piece of evidence" → "validation of the Pear Food technology." */}
      <section className="impact-section" id="nutritional">
        <div className="reveal">
          <div className="section-number">01</div>
          <p className="section-tag">Nutritional Impact</p>
          <h2>Restoring What Extraction &amp; Isolation Processing Takes Away</h2>
          {/* Lead paragraph removed per screenshot 4, marker 2 */}
        </div>

        <div className="impact-grid">
          <div className="impact-card reveal">
            <div className="card-stat">100%</div>
            <h3>Complete Protein, Fully Retained</h3>
            <p>
              Dumas nitrogen analysis confirms zero protein lost in processing. The complete
              essential amino acid profile is preserved intact — including lysine, commonly
              heat-degraded in conventional processing — making the protein both quantitatively
              and qualitatively complete.
            </p>
          </div>
          <div className="impact-card reveal">
            <div className="card-stat">87%</div>
            <h3>Digestibility Unlocked</h3>
            <p>
              A 93.6% reduction in trypsin inhibitor activity — the primary digestibility barrier —
              drives an 87% PDCAAS in vitro digestibility score, placing Pear Foods at the top tier
              for whole-food legume ingredients.
            </p>
          </div>
          <div className="impact-card reveal">
            <div className="card-stat">6.4g</div>
            <h3>Fiber Preserved and Functional</h3>
            <p>
              Crude fiber is maintained at 6.4 g/100g versus 6.3 g/100g in the raw control. The
              full fiber fraction is intact and structurally co-located with protein and starch —
              functioning as it does in a whole food, not as an isolated additive.
            </p>
          </div>
          {/* card stat "11" → "10" per marker 3; body "eleven" → "ten" per marker 4;
              "piece of evidence" → "validation of the Pear Food technology." per marker 5 */}
          <div className="impact-card reveal">
            <div className="card-stat">10</div>
            <h3>Independent Analytical Methods</h3>
            <p>
              The platform is validated across ten methods — Dumas nitrogen, PDCAAS, SEM, FTIR
              spectroscopy, water extraction, proximate analysis, carbohydrate profiling, and
              antinutritional factor panels — each contributing a distinct, coherent validation
              of the Pear Food technology.
            </p>
          </div>
        </div>

        <div className="callout reveal">
          Pear Foods delivers protein that is fully retained, highly digestible, and amino-acid
          complete — the nutritional foundation upon which every downstream metabolic benefit is built.
        </div>
      </section>

      {/* ══ 2. METABOLIC IMPACT (Section 5) ══════════════════════════════
          Changes:
            1. Card 1 sub-label → "Confirmed with FTIR Spectroscopy"
            2. Card 2 sub-label → "Confirmed with less solubilization"
            3. Card 3 sub-label → "Confirmed with PDCAAS Amino Acid profile"
            4. Card 4 sub-label → "Confirmed with Scanning Electron Microscopy"
            5. Remove underlined words in marker 5 (the asterisk footnote line below cards)
            6. Add "*" after GLP-1 in the body paragraph */}
      <section className="impact-section" id="metabolic">
        <div className="reveal">
          <div className="section-number">02</div>
          <p className="section-tag">Metabolic Impact</p>
          <h2>Supporting the Pathways That Matter</h2>
          <p className="lead lead-full">
            Beyond macronutrient retention, the Pear Foods matrix is structurally aligned with the
            metabolic pathways that govern how the body processes and responds to food — pathways
            that extraction-based processing systematically bypasses.
          </p>
          <p className="metabolic-body lead-full">
            GLP-1* (Glucagon-Like Peptide-1) governs postprandial glucose regulation, satiety
            signalling, gastric emptying rate, and insulin sensitivity. It is the biological target
            of the fastest-growing class of metabolic health pharmaceuticals in history. Pear Foods
            delivers structural alignment with GLP-1* pathways through food architecture, not
            pharmacology.
          </p>
        </div>

        <div className="mechanism-grid reveal">
          <div className="mechanism-card">
            <h4>Gel Network &amp; Gastric Emptying</h4>
            <p>
              FTIR-confirmed starch-protein co-gel network increases luminal viscosity, slowing
              gastric emptying and extending the duration of luminal nutrient presence — a primary
              L-cell stimulus.
            </p>
          </div>
          <div className="mechanism-card">
            <h4>Distal Nutrient Delivery</h4>
            <p>
              27% less solubilization versus raw control means nutrients reach the distal ileum
              intact — precisely where GLP-1 L-cell density is highest. The nutrient signal
              arrives where it can trigger a response.
            </p>
          </div>
          <div className="mechanism-card">
            <h4>Intact GLP-1 Secretagogues</h4>
            <p>
              Leucine and arginine — the primary amino acid triggers for L-cell GLP-1 secretion —
              are fully preserved per PDCAAS amino acid profiling. The matrix delivers the right
              signals to the right location.
            </p>
          </div>
          <div className="mechanism-card">
            <h4>Structured Carbohydrate Presentation</h4>
            <p>
              Gelatinized starch bound within the protein matrix produces a slower, more sustained
              glucose signal — the architecture that maximises the GLP-1 response relative to
              insulin output.
            </p>
          </div>
        </div>

        <div className="callout callout-dark reveal" style={{ marginTop: '40px' }}>
          Protein isolates are fully absorbed within the proximal 30–50 cm of the small intestine.
          L-cells are concentrated in the distal 200+ cm. The nutrient signal never reaches them.
          No isolate can structurally support GLP-1 the way a matrix-preserved whole food can.
        </div>
        {/* Marker 5: underlined footnote line removed; only the asterisk note remains */}
        <p className="footnote">* Direct human clinical validation is required to confirm GLP-1 pathway effects.</p>
      </section>

      {/* ══ 3. CONSUMER IMPACT (Section 6) ═══════════════════════════════
          Change: add "isolation, concentration" at marker 1 */}
      <section className="impact-section" id="consumer">
        <div className="reveal">
          <div className="section-number">03</div>
          <p className="section-tag">Consumer Impact</p>
          <h2>Expanding Access to Legume Nutrition</h2>
          <p className="lead">
            Gas-causing oligosaccharides have limited legume acceptance across major consumer
            markets for generations. Pear Foods selectively eliminates them — without destroying
            the starch matrix — expanding the viable consumer base for plant protein at global scale.
          </p>
        </div>

        <div className="bar-chart reveal">
          <p className="bar-chart-label">Oligosaccharide Reduction vs. Raw Legume</p>
          <div className="bar-row">
            <span className="bar-label">Raffinose</span>
            <div className="bar-track"><div className="bar-fill" style={{ width: '75%', animationDelay: '0.1s' }} /></div>
            <span className="bar-val">−75%</span>
          </div>
        </div>

        <div className="callout reveal" style={{ marginTop: '40px' }}>
          Total starch preserved at 97.4% of the raw control — reductions are targeted, not
          collateral. The structural matrix remains fully intact. All reductions achieved without
          chemical extraction, enzyme addition, or solvent treatment.
        </div>
      </section>

      {/* ══ 4. ENVIRONMENTAL IMPACT (Section 7) ══════════════════════════ */}
      <section className="impact-section" id="environmental">
        <div className="reveal">
          <div className="section-number">04</div>
          <p className="section-tag">Environmental Impact</p>
          <h2>A Platform Built for the Planet</h2>
          <p className="lead">
            Legumes are among the most environmentally efficient protein sources available at
            global scale. They fix atmospheric nitrogen, require significantly less water and land
            than animal protein, and are globally abundant. Pear Foods amplifies this inherent
            environmental advantage.
          </p>
        </div>

        {/* Marker 1 in screenshot 6: add "isolation, concentration" after "multi-stage" */}
        <ul className="env-list reveal">
          <li>
            <span className="env-dot" />
            <span>
              Minimal processing reduces energy consumption versus multi-stage isolation,
              concentration — fewer steps, lower footprint.
            </span>
          </li>
          <li>
            <span className="env-dot" />
            <span>
              No chemical solvents, extraction agents, or enzyme additions — a cleaner, simpler
              production process with less industrial waste.
            </span>
          </li>
          <li>
            <span className="env-dot" />
            <span>
              Higher nutritional delivery per unit of crop input — less waste, more value
              extracted from every legume processed.
            </span>
          </li>
          <li>
            <span className="env-dot" />
            <span>
              Commercially viable format that strengthens the economic case for legume-based
              protein at scale — making sustainable protein affordable and accessible.
            </span>
          </li>
          <li>
            <span className="env-dot" />
            <span>
              Directly accelerates the transition away from resource-intensive animal protein —
              with meaningful implications for land use, water consumption, and greenhouse gas
              emissions globally.
            </span>
          </li>
        </ul>

        <div className="callout reveal">
          The impact is not just a better ingredient. It is what becomes possible when the
          world&apos;s most sustainable protein source finally delivers its full potential —
          nutritionally, commercially, and ecologically.
        </div>
      </section>

      {/* ══ 5. SYSTEMIC IMPACT (Section 8) ═══════════════════════════════
          Change: marker 1 → replace "FTIR-confirmed" with "Analytical methods" */}
      <section className="impact-section" id="systemic">
        <div className="reveal">
          <div className="section-number">05</div>
          <p className="section-tag">Systemic Impact</p>
          <h2>Reshaping How Plant Protein Works</h2>
          <p className="lead lead-full">
            Pear Foods addresses two of the most pressing challenges in global nutrition
            simultaneously: the degradation of plant protein through industrial processing, and the
            need for a food system built on ingredients that preserve macro structure and are both
            nutritionally complete and environmentally sustainable.
          </p>
        </div>

        <div className="impact-grid">
          <div className="impact-card reveal">
            <h3>Nutritional Completeness of a Whole Food</h3>
            <p>
              Full macronutrient retention, preserved fiber, complete amino acid profile, and
              intact co-located micronutrients — everything a whole legume offers, in a
              ready-to-use ingredient format.
            </p>
          </div>
          <div className="impact-card reveal">
            <h3>Digestibility of a Processed Ingredient</h3>
            <p>
              87% PDCAAS digestibility and 93.6% trypsin inhibitor reduction make Pear Foods
              competitive with concentrates and isolates on bioavailability — without their
              processing costs.
            </p>
          </div>
          {/* Marker 1: "FTIR-confirmed" → "Analytical methods" */}
          <div className="impact-card reveal">
            <h3>Metabolic Architecture of a Functional Food</h3>
            <p>
              Analytical methods confirmed gel matrix, distal nutrient delivery*, and intact GLP-1
              secretagogue amino acids — structural alignment with metabolic pathways that no
              isolate can replicate.
            </p>
          </div>
          <div className="impact-card reveal">
            <h3>Clean-Label, Ready-to-Consume Format</h3>
            <p>
              No additives, solvents, or fractionation. Minimally processed status, whole-food
              credentials, and dramatically improved digestive tolerance — delivered in a format
              the modern food industry can use.
            </p>
          </div>
        </div>
      </section>

      {/* ══ CLOSING (Section 9) ══════════════════════════════════════════
          Change: "eleven" → "ten" at marker 1 */}
      <section className="closing">
        <p className="closing-eyebrow">Pear Foods &nbsp;·&nbsp; Legume Protein Technology</p>
        <h2>
          Preserving nature&apos;s nutritional integrity to nourish people and build a more{' '}
          <em>resilient, sustainable</em> food system for the planet.
        </h2>
        <p>Better nutrition. Lower impact. No compromise.</p>
        <p className="closing-disclaimer closing-disclaimer-full">
          * Claims regarding GLP-1 pathway support are based on structural and mechanistic evidence
          from in vitro analysis. Direct human clinical validation is required to confirm
          physiological effects. All other claims are supported by independent analytical validation
          across ten methods.
        </p>
      </section>
    </>
  );
}
