// Carez Consultations — Homepage

function HomePage({ onNavigate }) {
  const stats = [
    { num: '300+', label: 'educators trained' },
    { num: '15+', label: 'school districts served' },
    { num: '10 yrs', label: 'of restorative practice' },
    { num: '96%', label: 'would recommend us' },
  ];

  const services = [
    {
      icon: 'book-open', color: DS.clay500, bg: DS.clay50, border: DS.clay100,
      title: 'Trainings',
      body: 'Interactive workshops open to educators, counselors, and administrators — from introductory sessions to deep practitioner development.',
      cta: 'View upcoming trainings', page: 'trainings',
    },
    {
      icon: 'handshake', color: DS.sage500, bg: DS.sage50, border: DS.sage100,
      title: 'Advising & Consulting',
      body: 'Hands-on partnership with your district leadership to design, implement, and sustain restorative practices school-wide.',
      cta: 'Learn how we work', page: 'contact',
    },
  ];

  const testimonials = [
    {
      quote: "Carez didn't just deliver a training — they helped us see conflict differently. Our staff now reaches for conversation first. The culture shift has been real and lasting.",
      name: 'Dr. Patricia Herrera',
      title: 'Superintendent, Siskiyou Union High School District',
      accentColor: DS.clay500,
    },
    {
      quote: "We brought Carez in when our restorative practices felt stalled. Within months, our team had a shared language, and our referral rates dropped meaningfully.",
      name: 'Marcus Webb',
      title: 'Director of Student Services, Phoenix-Talent School District',
      accentColor: DS.sage500,
    },
    {
      quote: "What makes Carez different is that they meet you where you are. They didn't impose a program — they helped us build one that actually fits our community.",
      name: 'Theresa Okonkwo',
      title: 'Principal, Siskiyou Union High School District',
      accentColor: DS.gold500,
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const upcomingTrainings = [
    { badge: 'Open to public', badgeV: 'sage', title: 'Introduction to Restorative Circles', date: 'May 14, 2025', location: 'Virtual · 9am–12pm PST', price: '$85' },
    { badge: 'Featured', badgeV: 'gold', title: 'Harm, Accountability & Repair', date: 'May 28, 2025', location: 'Ashland, OR · Full day', price: '$120' },
    { badge: 'Open to public', badgeV: 'sage', title: 'Affective Statements in Practice', date: 'Jun 6, 2025', location: 'Virtual · 2 hours', price: '$55' },
  ];

  const values = [
    { icon: 'users', label: 'Community-centered', desc: 'Every circle starts with listening.' },
    { icon: 'shield-check', label: 'Accountability', desc: 'Harm is real. So is repair.' },
    { icon: 'heart', label: 'Belonging', desc: 'Everyone has a place in the circle.' },
    { icon: 'sun', label: 'Hope', desc: 'What matters is what happens next.' },
  ];

  return (
    <div>
      {/* HERO */}
      <section style={{ background: DS.sand50, padding: '96px 24px 88px', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background shapes */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: DS.clay50, opacity: 0.7, zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: -60, left: '40%', width: 260, height: 260, borderRadius: '50%', background: DS.sage50, opacity: 0.5, zIndex: 0 }}></div>

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 700 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: DS.clay100, borderRadius: 999, padding: '5px 14px 5px 8px', marginBottom: 28 }}>
              <span style={{ background: DS.clay500, borderRadius: 999, width: 6, height: 6, display: 'inline-block' }}></span>
              <span style={{ fontFamily: DS.fontBody, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: DS.clay600 }}>Restorative Justice for Schools</span>
            </div>
            <h1 style={{ fontFamily: DS.fontDisplay, fontSize: 68, fontWeight: 700, color: DS.sand900, lineHeight: 1.05, margin: '0 0 24px', letterSpacing: '-0.025em' }}>
              Conflict is part<br />
              of school life.<br />
              <span style={{ color: DS.clay500, fontStyle: 'italic' }}>What happens next</span><br />
              is up to you.
            </h1>
            <p style={{ fontFamily: DS.fontBody, fontSize: 19, color: DS.sand700, lineHeight: 1.7, margin: '0 0 40px', maxWidth: 540 }}>
              We partner with school communities across Southern Oregon and Northern California to build cultures of accountability, belonging, and repair — through trainings, advising, and hands-on consulting.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
              <Button size="lg" onClick={() => onNavigate('trainings')}>See our services</Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('contact')}>Talk to us</Button>
            </div>
            <div style={{ marginTop: 36, display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ display: 'flex' }}>
                {['#C4633A','#5C7A5E','#C49A3C','#D47A52'].map((c, i) => (
                  <div key={i} style={{ width: 32, height: 32, borderRadius: '50%', background: c, border: '2px solid white', marginLeft: i > 0 ? -8 : 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i data-lucide="user" width="14" height="14" style={{ color: 'white' }}></i>
                  </div>
                ))}
              </div>
              <div style={{ fontFamily: DS.fontBody, fontSize: 13, color: DS.sand600 }}>
                <span style={{ fontWeight: 700, color: DS.sand800 }}>300+ educators</span> trained across SO/NorCal
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: DS.sand900, padding: '48px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: DS.fontDisplay, fontSize: 42, fontWeight: 700, color: [DS.clay500, DS.sage500, DS.gold500, DS.clay400][i], lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontFamily: DS.fontBody, fontSize: 13, color: DS.sand500, marginTop: 6, letterSpacing: '0.02em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'start' }}>
            <div>
              <SectionLabel>How we work</SectionLabel>
              <h2 style={{ fontFamily: DS.fontDisplay, fontSize: 40, fontWeight: 600, color: DS.sand900, margin: '0 0 20px', lineHeight: 1.15 }}>Two ways to partner with us</h2>
              <p style={{ fontFamily: DS.fontBody, fontSize: 15, color: DS.sand600, lineHeight: 1.75, margin: '0 0 28px' }}>Whether you're just getting started with restorative justice or ready to go district-wide, we have a path for you.</p>
              <Button variant="outline" onClick={() => onNavigate('contact')}>Let's talk</Button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
              {services.map((s, i) => (
                <div key={i}
                  style={{ background: 'white', border: `1px solid ${DS.sand200}`, borderRadius: 20, padding: 32, cursor: 'pointer', transition: 'all 280ms', boxShadow: '0 2px 8px rgba(44,31,26,0.06)', display: 'flex', gap: 24, alignItems: 'flex-start' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(44,31,26,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = s.border; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(44,31,26,0.06)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = DS.sand200; }}
                >
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: s.color }}>
                    <i data-lucide={s.icon} width="24" height="24"></i>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: DS.fontDisplay, fontSize: 22, fontWeight: 600, color: DS.sand900, margin: '0 0 10px' }}>{s.title}</h3>
                    <p style={{ fontFamily: DS.fontBody, fontSize: 15, color: DS.sand700, lineHeight: 1.7, margin: '0 0 18px' }}>{s.body}</p>
                    <button onClick={() => onNavigate(s.page)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: DS.fontBody, fontSize: 14, fontWeight: 700, color: s.color, padding: 0, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      {s.cta} <i data-lucide="arrow-right" width="15" height="15"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: DS.clay50, padding: '72px 24px', borderTop: `1px solid ${DS.clay100}`, borderBottom: `1px solid ${DS.clay100}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <SectionLabel>What we believe</SectionLabel>
            <h2 style={{ fontFamily: DS.fontDisplay, fontSize: 38, fontWeight: 600, color: DS.sand900, margin: 0 }}>Restorative justice is a way of being together.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {values.map((v, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 18, padding: '28px 24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(44,31,26,0.06)', border: `1px solid ${DS.sand200}` }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: [DS.clay100, DS.sage100, DS.gold100, DS.clay100][i], display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: [DS.clay500, DS.sage500, DS.gold500, DS.clay500][i] }}>
                  <i data-lucide={v.icon} width="24" height="24"></i>
                </div>
                <div style={{ fontFamily: DS.fontDisplay, fontSize: 17, fontWeight: 600, color: DS.sand900, marginBottom: 8 }}>{v.label}</div>
                <div style={{ fontFamily: DS.fontBody, fontSize: 13, color: DS.sand600, lineHeight: 1.6 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING TRAININGS PREVIEW */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
            <div>
              <SectionLabel>Upcoming trainings</SectionLabel>
              <h2 style={{ fontFamily: DS.fontDisplay, fontSize: 36, fontWeight: 600, color: DS.sand900, margin: 0 }}>Join us this season</h2>
            </div>
            <Button variant="outline" onClick={() => onNavigate('trainings')}>See all trainings</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {upcomingTrainings.map((t, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 18, overflow: 'hidden', boxShadow: '0 2px 8px rgba(44,31,26,0.06)', cursor: 'pointer', transition: 'all 280ms', border: `1px solid ${DS.sand200}` }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 32px rgba(44,31,26,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(44,31,26,0.06)'; e.currentTarget.style.transform = 'none'; }}
                onClick={() => onNavigate('trainings')}>
                <div style={{ background: [DS.clay50, DS.gold50, DS.sage50][i], padding: '20px 22px 16px' }}>
                  <Badge variant={t.badgeV}>{t.badge}</Badge>
                  <h4 style={{ fontFamily: DS.fontDisplay, fontSize: 19, fontWeight: 600, color: DS.sand900, margin: '10px 0 0', lineHeight: 1.3 }}>{t.title}</h4>
                </div>
                <div style={{ padding: '16px 22px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, color: DS.sand600, fontFamily: DS.fontBody, fontSize: 13 }}>
                    <i data-lucide="calendar" width="13" height="13"></i> {t.date}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 18, color: DS.sand500, fontFamily: DS.fontBody, fontSize: 13 }}>
                    <i data-lucide="map-pin" width="13" height="13"></i> {t.location}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: DS.fontBody, fontSize: 20, fontWeight: 800, color: DS.clay500 }}>{t.price}</span>
                    <Button size="sm" onClick={(e) => { e.stopPropagation(); onNavigate('trainings'); }}>Register</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: DS.sand900, padding: '80px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <SectionLabel color={DS.clay400}>What schools say</SectionLabel>
            <h2 style={{ fontFamily: DS.fontDisplay, fontSize: 36, fontWeight: 600, color: 'white', margin: 0 }}>From the communities we serve</h2>
          </div>

          <div style={{ position: 'relative', minHeight: 200 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{
                position: i === activeTestimonial ? 'relative' : 'absolute',
                top: 0, left: 0, width: '100%',
                opacity: i === activeTestimonial ? 1 : 0,
                transform: i === activeTestimonial ? 'none' : 'translateY(8px)',
                transition: 'opacity 500ms, transform 500ms',
                pointerEvents: i === activeTestimonial ? 'auto' : 'none',
              }}>
                <div style={{ background: DS.sand800, borderRadius: 24, padding: '40px 48px', border: `1px solid ${DS.sand700}` }}>
                  <div style={{ width: 36, height: 4, borderRadius: 2, background: t.accentColor, marginBottom: 24 }}></div>
                  <p style={{ fontFamily: DS.fontDisplay, fontSize: 24, fontStyle: 'italic', color: 'white', lineHeight: 1.6, margin: '0 0 28px' }}>
                    "{t.quote}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: t.accentColor, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.9 }}>
                      <i data-lucide="user" width="20" height="20" style={{ color: 'white' }}></i>
                    </div>
                    <div>
                      <div style={{ fontFamily: DS.fontBody, fontSize: 14, fontWeight: 700, color: 'white' }}>{t.name}</div>
                      <div style={{ fontFamily: DS.fontBody, fontSize: 13, color: DS.sand500, marginTop: 2 }}>{t.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 28 }}>
            {testimonials.map((t, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)} style={{
                width: i === activeTestimonial ? 28 : 8, height: 8, borderRadius: 999,
                background: i === activeTestimonial ? t.accentColor : DS.sand700,
                border: 'none', cursor: 'pointer', padding: 0, transition: 'all 350ms',
              }}></button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ padding: '80px 24px', background: DS.sand50 }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel>Ready to begin?</SectionLabel>
          <h2 style={{ fontFamily: DS.fontDisplay, fontSize: 42, fontWeight: 700, color: DS.sand900, margin: '0 0 16px', lineHeight: 1.15 }}>
            You don't have to figure this out alone.
          </h2>
          <p style={{ fontFamily: DS.fontBody, fontSize: 17, color: DS.sand700, lineHeight: 1.75, margin: '0 0 36px' }}>
            Whether you're exploring restorative justice for the first time or ready to go district-wide, we have a path for you. Let's start with a conversation.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button size="lg" onClick={() => onNavigate('trainings')}>Browse trainings</Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate('contact')}>Book a conversation</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage });
