// Carez Consultations — Contact & Booking Page

function ContactPage({ onNavigate }) {
  const [form, setForm] = React.useState({ name: '', email: '', org: '', role: '', interest: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);
  const [activeAccordion, setActiveAccordion] = React.useState(null);

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.interest) return;
    setSubmitted(true);
  };

  const interests = [
    { value: 'training-public', label: 'Register for a public training', icon: 'book-open', color: DS.sage500, bg: DS.sage50 },
    { value: 'training-district', label: 'Custom district training', icon: 'users', color: DS.clay500, bg: DS.clay50 },
    { value: 'consulting', label: 'Advising & Consulting', icon: 'handshake', color: DS.gold500, bg: DS.gold50 },
    { value: 'general', label: 'General question', icon: 'message-circle', color: DS.sand600, bg: DS.sand100 },
  ];

  const faqs = [
    { q: 'Where do you work?', a: 'We primarily serve school communities across Southern Oregon and Northern California — including districts like Siskiyou Union, Phoenix-Talent, and surrounding areas. We offer virtual trainings open to anyone.' },
    { q: 'What does a typical consulting engagement look like?', a: 'Most engagements start with a needs assessment conversation with your leadership team. From there, we build a scope together — this might include staff trainings, policy review, coaching, or ongoing advising. No two engagements look the same.' },
    { q: 'How much does consulting cost?', a: 'Consulting is quoted based on scope, duration, and district size. We offer sliding-scale pricing and can work within grant-funded budgets. Contact us to talk through options.' },
    { q: 'Can individual teachers register for trainings?', a: 'Yes — our public trainings are open to any educator, counselor, administrator, or community member. You don\'t need to be part of a district engagement.' },
    { q: 'Do you offer follow-up support after trainings?', a: 'We do. Many participants join our practitioner community for ongoing support, and districts often add consulting hours after a training to deepen implementation.' },
  ];

  return (
    <div>
      {/* Header */}
      <section style={{ background: DS.clay50, padding: '64px 24px 52px', borderBottom: `1px solid ${DS.clay100}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionLabel>Let's talk</SectionLabel>
          <h1 style={{ fontFamily: DS.fontDisplay, fontSize: 52, fontWeight: 700, color: DS.sand900, margin: '0 0 16px', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
            We'd love to hear<br />from your school.
          </h1>
          <p style={{ fontFamily: DS.fontBody, fontSize: 17, color: DS.sand700, lineHeight: 1.75, margin: 0, maxWidth: 520 }}>
            Whether you're exploring restorative justice for the first time or ready to go district-wide, reach out. We'll follow up within one business day.
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

          {/* FORM */}
          <div>
            {submitted ? (
              <div style={{ background: DS.sage50, border: `1px solid ${DS.sage100}`, borderRadius: 24, padding: '48px 40px', textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: DS.sage500, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <i data-lucide="check" width="28" height="28" style={{ color: 'white' }}></i>
                </div>
                <h3 style={{ fontFamily: DS.fontDisplay, fontSize: 26, fontWeight: 700, color: DS.sand900, margin: '0 0 12px' }}>Message received.</h3>
                <p style={{ fontFamily: DS.fontBody, fontSize: 15, color: DS.sand700, lineHeight: 1.75, margin: '0 0 28px' }}>
                  Thanks, {form.name.split(' ')[0]}. We'll be in touch within one business day.
                </p>
                <Button variant="outline" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', org: '', role: '', interest: '', message: '' }); }}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontFamily: DS.fontDisplay, fontSize: 26, fontWeight: 600, color: DS.sand900, margin: '0 0 28px' }}>Send us a message</h2>

                {/* Interest selector */}
                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontFamily: DS.fontBody, fontSize: 13, fontWeight: 700, color: DS.sand700, display: 'block', marginBottom: 10 }}>
                    I'm interested in <span style={{ color: DS.clay500 }}>*</span>
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    {interests.map(opt => (
                      <button key={opt.value} type="button" onClick={() => setForm(f => ({ ...f, interest: opt.value }))}
                        style={{
                          background: form.interest === opt.value ? opt.bg : 'white',
                          border: `1.5px solid ${form.interest === opt.value ? opt.color : DS.sand200}`,
                          borderRadius: 12, padding: '12px 14px', cursor: 'pointer', textAlign: 'left',
                          display: 'flex', alignItems: 'center', gap: 10, transition: 'all 180ms',
                          boxShadow: form.interest === opt.value ? `0 0 0 3px ${opt.bg}` : 'none',
                        }}
                        onMouseEnter={e => { if (form.interest !== opt.value) e.currentTarget.style.borderColor = DS.sand300; }}
                        onMouseLeave={e => { if (form.interest !== opt.value) e.currentTarget.style.borderColor = DS.sand200; }}
                      >
                        <div style={{ width: 32, height: 32, borderRadius: 8, background: form.interest === opt.value ? opt.color : DS.sand100, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 180ms', color: form.interest === opt.value ? 'white' : DS.sand500 }}>
                          <i data-lucide={opt.icon} width="15" height="15"></i>
                        </div>
                        <span style={{ fontFamily: DS.fontBody, fontSize: 13, fontWeight: 700, color: form.interest === opt.value ? DS.sand900 : DS.sand700, lineHeight: 1.3 }}>{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Input label="Your name" placeholder="First and last name" value={form.name} onChange={set('name')} required />
                  <Input label="Email address" type="email" placeholder="you@school.edu" value={form.email} onChange={set('email')} required />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Input label="School or district" placeholder="e.g. Siskiyou Union HSD" value={form.org} onChange={set('org')} />
                  <Input label="Your role" placeholder="e.g. Principal, Counselor" value={form.role} onChange={set('role')} />
                </div>
                <Textarea label="Tell us more" placeholder="What's going on at your school? What are you hoping to build?" value={form.message} onChange={set('message')} rows={5} />

                <Button size="lg" onClick={handleSubmit} disabled={!form.name || !form.email || !form.interest}>
                  Send message <i data-lucide="arrow-right" width="16" height="16"></i>
                </Button>
                <p style={{ fontFamily: DS.fontBody, fontSize: 12, color: DS.sand500, marginTop: 12 }}>
                  We respond within one business day. No spam, ever.
                </p>
              </form>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div>
            {/* Info cards */}
            <div style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: DS.fontDisplay, fontSize: 22, fontWeight: 600, color: DS.sand900, margin: '0 0 20px' }}>Other ways to reach us</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                {[
                  { icon: 'mail', label: 'Email us', value: 'cynthiacarez@gmail.com', color: DS.clay500, bg: DS.clay50 },
                  { icon: 'map-pin', label: 'Based in', value: 'Ashland, Oregon', color: DS.sage500, bg: DS.sage50 },
                  { icon: 'clock', label: 'Response time', value: 'Within 1 business day', color: DS.gold500, bg: DS.gold50 },
                  { icon: 'globe', label: 'Serving', value: 'SO & NorCal + virtual', color: DS.sand600, bg: DS.sand100 },
                ].map(c => (
                  <div key={c.label} style={{ background: c.bg, borderRadius: 14, padding: '16px 18px', display: 'flex', gap: 12, alignItems: 'flex-start', border: `1px solid ${c.bg}` }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: c.color, boxShadow: '0 1px 4px rgba(44,31,26,0.08)' }}>
                      <i data-lucide={c.icon} width="16" height="16"></i>
                    </div>
                    <div>
                      <div style={{ fontFamily: DS.fontBody, fontSize: 11, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: DS.sand500, marginBottom: 3 }}>{c.label}</div>
                      <div style={{ fontFamily: DS.fontBody, fontSize: 13, fontWeight: 600, color: DS.sand800 }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial snippet */}
            <div style={{ background: DS.sand900, borderRadius: 20, padding: '28px 32px', marginBottom: 36 }}>
              <div style={{ width: 28, height: 3, borderRadius: 2, background: DS.clay500, marginBottom: 16 }}></div>
              <p style={{ fontFamily: DS.fontDisplay, fontSize: 17, fontStyle: 'italic', color: 'white', lineHeight: 1.65, margin: '0 0 18px' }}>
                "We brought Carez in when our restorative practices felt stalled. The difference in our team's confidence has been remarkable."
              </p>
              <div style={{ fontFamily: DS.fontBody, fontSize: 13, fontWeight: 700, color: DS.sand400 }}>Marcus Webb</div>
              <div style={{ fontFamily: DS.fontBody, fontSize: 12, color: DS.sand600, marginTop: 2 }}>Director of Student Services, Phoenix-Talent SD</div>
            </div>

            {/* FAQ */}
            <div>
              <h3 style={{ fontFamily: DS.fontDisplay, fontSize: 22, fontWeight: 600, color: DS.sand900, margin: '0 0 16px' }}>Frequently asked</h3>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: `1px solid ${DS.sand200}` }}>
                  <button onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                    style={{ width: '100%', background: 'none', border: 'none', padding: '16px 0', cursor: 'pointer', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontFamily: DS.fontBody, fontSize: 14, fontWeight: 700, color: DS.sand900 }}>{faq.q}</span>
                    <i data-lucide={activeAccordion === i ? 'chevron-up' : 'chevron-down'} width="16" height="16" style={{ color: DS.sand500, flexShrink: 0, transition: 'transform 200ms' }}></i>
                  </button>
                  <div style={{ overflow: 'hidden', maxHeight: activeAccordion === i ? 200 : 0, transition: 'max-height 300ms cubic-bezier(0.16,1,0.3,1)', opacity: activeAccordion === i ? 1 : 0 }}>
                    <p style={{ fontFamily: DS.fontBody, fontSize: 14, color: DS.sand700, lineHeight: 1.75, margin: '0 0 16px' }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ContactPage });
