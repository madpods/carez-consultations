// Carez Consultations — Trainings Page (simplified)

function TrainingsPage({ onNavigate }) {
  const [selected, setSelected] = React.useState(null);

  const trainingTypes = [
    {
      icon: 'users', color: DS.clay500, bg: DS.clay50, border: DS.clay100,
      title: 'Introductory sessions',
      desc: 'A grounded entry point for educators, counselors, and administrators who are new to restorative justice. We cover the core philosophy, affective language, and the basics of restorative circles. Great for a staff professional development day.',
      tags: ['Half day', 'Full day', 'Virtual or in-person'],
    },
    {
      icon: 'book-open', color: DS.sage500, bg: DS.sage50, border: DS.sage100,
      title: 'Practitioner development',
      desc: "For educators who've had an intro and are ready to go deeper. We focus on facilitating harm circles, supporting harmed parties, and building sustainable restorative routines into your school day.",
      tags: ['Full day', 'Multi-day', 'In-person'],
    },
    {
      icon: 'shield-check', color: DS.gold500, bg: DS.gold50, border: DS.gold100,
      title: 'Leadership & systems',
      desc: 'Designed for principals, vice principals, and district administrators. Learn to lead a restorative culture from the top — including policy alignment, staff buy-in, and using discipline data to drive change.',
      tags: ['Half or full day', 'District teams', 'Virtual or in-person'],
    },
  ];

  const upcomingTrainings = [
    { badge: 'Open to public', badgeV: 'sage', title: 'Introduction to Restorative Circles', date: 'May 14, 2025', location: 'Virtual · 9am–12pm PST', price: '$85', seats: 6 },
    { badge: 'Featured', badgeV: 'gold', title: 'Harm, Accountability & Repair', date: 'May 28, 2025', location: 'Ashland, OR · Full day', price: '$120', seats: 12 },
  ];

  return (
    <div>
      {/* Header */}
      <section style={{ background: DS.sage50, padding: '64px 24px 56px', borderBottom: `1px solid ${DS.sage100}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <SectionLabel color={DS.sage600}>Trainings</SectionLabel>
            <h1 style={{ fontFamily: DS.fontDisplay, fontSize: 52, fontWeight: 700, color: DS.sand900, margin: '0 0 18px', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Learning that sticks with your team.
            </h1>
            <p style={{ fontFamily: DS.fontBody, fontSize: 17, color: DS.sand700, lineHeight: 1.75, margin: '0 0 32px' }}>
              We facilitate trainings that meet your school community where it is — practical, people-centered, and grounded in years of restorative practice across Southern Oregon and Northern California.
            </p>
            <Button size="lg" onClick={() => onNavigate('contact')}>
              Request a training <i data-lucide="arrow-right" width="16" height="16"></i>
            </Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { icon: 'map-pin', label: 'In person or virtual' },
              { icon: 'calendar', label: 'Flexible scheduling' },
              { icon: 'users', label: 'For whole staff teams' },
              { icon: 'refresh-cw', label: 'Follow-up support available' },
            ].map((f, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 14, padding: '18px 16px', display: 'flex', alignItems: 'center', gap: 10, border: `1px solid ${DS.sage100}`, boxShadow: '0 1px 4px rgba(44,31,26,0.05)' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: DS.sage50, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: DS.sage500 }}>
                  <i data-lucide={f.icon} width="16" height="16"></i>
                </div>
                <span style={{ fontFamily: DS.fontBody, fontSize: 13, fontWeight: 700, color: DS.sand700 }}>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training types */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 44 }}>
            <SectionLabel>What we offer</SectionLabel>
            <h2 style={{ fontFamily: DS.fontDisplay, fontSize: 38, fontWeight: 600, color: DS.sand900, margin: 0, lineHeight: 1.15 }}>Training formats</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {trainingTypes.map((t, i) => (
              <div key={i} style={{ background: 'white', border: `1px solid ${DS.sand200}`, borderRadius: 20, padding: '32px 28px', transition: 'all 280ms', boxShadow: '0 2px 8px rgba(44,31,26,0.05)', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 32px rgba(44,31,26,0.11)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = t.border; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(44,31,26,0.05)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = DS.sand200; }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, color: t.color }}>
                  <i data-lucide={t.icon} width="24" height="24"></i>
                </div>
                <h3 style={{ fontFamily: DS.fontDisplay, fontSize: 21, fontWeight: 600, color: DS.sand900, margin: '0 0 12px', lineHeight: 1.25 }}>{t.title}</h3>
                <p style={{ fontFamily: DS.fontBody, fontSize: 14, color: DS.sand700, lineHeight: 1.75, margin: '0 0 20px' }}>{t.desc}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {t.tags.map(tag => (
                    <span key={tag} style={{ background: t.bg, color: t.color, fontFamily: DS.fontBody, fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 999 }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming (light) */}
      <section style={{ background: DS.sand100, padding: '64px 24px', borderTop: `1px solid ${DS.sand200}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
            <div>
              <SectionLabel>Public sessions</SectionLabel>
              <h2 style={{ fontFamily: DS.fontDisplay, fontSize: 32, fontWeight: 600, color: DS.sand900, margin: 0 }}>Upcoming open trainings</h2>
            </div>
            <div style={{ fontFamily: DS.fontBody, fontSize: 13, color: DS.sand500 }}>Occasionally offered · check back or get in touch</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {upcomingTrainings.map((t, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 18, overflow: 'hidden', boxShadow: '0 2px 8px rgba(44,31,26,0.06)', border: `1px solid ${DS.sand200}`, display: 'flex', gap: 0, transition: 'all 260ms' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(44,31,26,0.11)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(44,31,26,0.06)'; e.currentTarget.style.transform = 'none'; }}>
                <div style={{ width: 6, background: i === 0 ? DS.sage500 : DS.gold500, flexShrink: 0 }}></div>
                <div style={{ padding: '22px 24px', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                    <Badge variant={t.badgeV}>{t.badge}</Badge>
                    <span style={{ fontFamily: DS.fontBody, fontSize: 20, fontWeight: 800, color: DS.clay500 }}>{t.price}</span>
                  </div>
                  <h4 style={{ fontFamily: DS.fontDisplay, fontSize: 19, fontWeight: 600, color: DS.sand900, margin: '0 0 10px', lineHeight: 1.3 }}>{t.title}</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 18 }}>
                    <div style={{ fontFamily: DS.fontBody, fontSize: 13, color: DS.sand600, display: 'flex', alignItems: 'center', gap: 5 }}>
                      <i data-lucide="calendar" width="13" height="13"></i> {t.date}
                    </div>
                    <div style={{ fontFamily: DS.fontBody, fontSize: 13, color: DS.sand500, display: 'flex', alignItems: 'center', gap: 5 }}>
                      <i data-lucide="map-pin" width="13" height="13"></i> {t.location}
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {t.seats <= 8 && <div style={{ fontFamily: DS.fontBody, fontSize: 11, color: DS.clay500, fontWeight: 700 }}>{t.seats} seats remaining</div>}
                    <Button size="sm" onClick={() => onNavigate('contact')}>Register</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: DS.sand900, padding: '72px 24px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: DS.fontDisplay, fontSize: 38, fontWeight: 700, color: 'white', margin: '0 0 14px', lineHeight: 1.2 }}>
            Want a training built for your team?
          </h2>
          <p style={{ fontFamily: DS.fontBody, fontSize: 16, color: DS.sand500, margin: '0 0 32px', lineHeight: 1.75 }}>
            Most of our training work is designed around your school's specific context and goals. Reach out and we'll figure out what makes sense together.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
            <Button variant="inverse" size="lg" onClick={() => onNavigate('contact')}>Request a training</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { TrainingsPage });
