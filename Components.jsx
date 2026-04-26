// Carez Consultations — Shared Components

const DS = {
  clay500: '#C4633A', clay600: '#A84E2A', clay700: '#8A3C1E',
  clay400: '#D47A52', clay300: '#E49C78', clay200: '#F2C4A8',
  clay100: '#FAE4D8', clay50: '#FDF4F0',
  sage500: '#5C7A5E', sage600: '#476049', sage400: '#769A78',
  sage100: '#DDE9DE', sage50: '#F2F6F2',
  gold500: '#C49A3C', gold600: '#A67E2A', gold400: '#D4AC48',
  gold100: '#FAF0D0', gold50: '#FDFAF0',
  sand900: '#2C1F1A', sand800: '#4A3C38', sand700: '#6B5C54',
  sand600: '#8C7A70', sand500: '#A89890', sand400: '#C4BAB0',
  sand300: '#DDD5CA', sand200: '#EDE8E0', sand100: '#F7F4F0', sand50: '#FDFCFB',
  fontDisplay: "'Playfair Display', Georgia, serif",
  fontBody: "'Nunito', 'Segoe UI', sans-serif"
};

// ─── NAV ────────────────────────────────────────────────────
function Nav({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
  { label: 'Home', page: 'home' },
  { label: 'Trainings', page: 'trainings' },
  { label: 'Contact', page: 'contact' }];


  return (
    <nav style={{
      background: 'white',
      borderBottom: `1px solid ${scrolled ? DS.sand200 : 'transparent'}`,
      position: 'sticky', top: 0, zIndex: 100,
      boxShadow: scrolled ? '0 2px 12px rgba(44,31,26,0.08)' : 'none',
      transition: 'all 300ms'
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: 12 }}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
            <circle cx="14" cy="19" r="13" fill={DS.clay500} opacity="0.92" />
            <circle cx="24" cy="19" r="13" fill={DS.sage500} opacity="0.72" />
          </svg>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontFamily: DS.fontDisplay, fontSize: 19, fontWeight: 700, color: DS.sand900, lineHeight: 1.1 }}>Carez</div>
            <div style={{ fontFamily: DS.fontBody, fontSize: 8.5, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: DS.sand500 }}>Consultations</div>
          </div>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {links.map((l) =>
          <button key={l.page} onClick={() => onNavigate(l.page)} style={{
            background: currentPage === l.page ? DS.clay50 : 'none',
            border: 'none', cursor: 'pointer', padding: '8px 16px', borderRadius: 999,
            fontFamily: DS.fontBody, fontSize: 14, fontWeight: currentPage === l.page ? 700 : 600,
            color: currentPage === l.page ? DS.clay500 : DS.sand700,
            transition: 'all 150ms'
          }}>{l.label}</button>
          )}
          <button onClick={() => onNavigate('contact')} style={{
            marginLeft: 10, background: DS.clay500, color: 'white', border: 'none', cursor: 'pointer',
            padding: '10px 22px', borderRadius: 999, fontFamily: DS.fontBody, fontSize: 14, fontWeight: 700,
            transition: 'all 200ms', boxShadow: '0 2px 8px rgba(196,99,58,0.25)'
          }}
          onMouseEnter={(e) => {e.currentTarget.style.background = DS.clay600;e.currentTarget.style.transform = 'translateY(-1px)';e.currentTarget.style.boxShadow = '0 4px 16px rgba(196,99,58,0.35)';}}
          onMouseLeave={(e) => {e.currentTarget.style.background = DS.clay500;e.currentTarget.style.transform = 'none';e.currentTarget.style.boxShadow = '0 2px 8px rgba(196,99,58,0.25)';}}>
            Work with us</button>
        </div>
      </div>
    </nav>);

}

// ─── FOOTER ─────────────────────────────────────────────────
function Footer({ onNavigate }) {
  return (
    <footer style={{ background: DS.sand900, color: 'white', padding: '56px 24px 36px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <svg width="32" height="32" viewBox="0 0 38 38" fill="none">
                <circle cx="14" cy="19" r="13" fill={DS.clay500} opacity="0.92" />
                <circle cx="24" cy="19" r="13" fill={DS.sage500} opacity="0.72" />
              </svg>
              <div style={{ fontFamily: DS.fontDisplay, fontSize: 17, fontWeight: 700 }}>Carez Consultations</div>
            </div>
            <p style={{ fontFamily: DS.fontBody, fontSize: 14, color: DS.sand500, lineHeight: 1.75, margin: '0 0 20px' }}>
              Building cultures of accountability, belonging, and repair in school communities across Southern Oregon and Northern California.
            </p>
            <div style={{ fontFamily: DS.fontBody, fontSize: 12, color: DS.sand600, display: 'flex', alignItems: 'center', gap: 6 }}>
              <i data-lucide="map-pin" width="12" height="12"></i>
              Ashland, OR · Serving SO/NorCal
            </div>
          </div>
          <div>
            <div style={{ fontFamily: DS.fontBody, fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: DS.sand600, marginBottom: 16 }}>Services</div>
            {[['Trainings', 'trainings'], ['District Trainings', 'trainings'], ['Advising & Consulting', 'contact']].map(([label, page]) =>
            <div key={label} onClick={() => onNavigate(page)} style={{ fontFamily: DS.fontBody, fontSize: 14, color: DS.sand400, marginBottom: 10, cursor: 'pointer', transition: 'color 150ms' }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = DS.sand400}>
              {label}</div>
            )}
          </div>
          <div>
            <div style={{ fontFamily: DS.fontBody, fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: DS.sand600, marginBottom: 16 }}>Navigate</div>
            {[['Home', 'home'], ['Trainings', 'trainings'], ['Contact', 'contact']].map(([label, page]) =>
            <div key={label} onClick={() => onNavigate(page)} style={{ fontFamily: DS.fontBody, fontSize: 14, color: DS.sand400, marginBottom: 10, cursor: 'pointer', transition: 'color 150ms' }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = DS.sand400}>
              {label}</div>
            )}
          </div>
          <div>
            <div style={{ fontFamily: DS.fontBody, fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: DS.sand600, marginBottom: 16 }}>Get in touch</div>
            <div style={{ fontFamily: DS.fontBody, fontSize: 14, color: DS.sand400, marginBottom: 10 }}>cynthiacarez@gmail.com</div>
            <div style={{ fontFamily: DS.fontBody, fontSize: 14, color: DS.sand400, marginBottom: 20 }}>Ashland, Oregon</div>
            <button onClick={() => onNavigate('contact')} style={{ background: DS.clay500, color: 'white', border: 'none', cursor: 'pointer', padding: '10px 20px', borderRadius: 999, fontFamily: DS.fontBody, fontSize: 13, fontWeight: 700, transition: 'all 200ms' }}
            onMouseEnter={(e) => e.currentTarget.style.background = DS.clay600}
            onMouseLeave={(e) => e.currentTarget.style.background = DS.clay500}>
              Book a conversation</button>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${DS.sand800}`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: DS.fontBody, fontSize: 12, color: DS.sand600 }}>
            © 2025 Carez Consultations. All rights reserved.
          </div>
          <div style={{ fontFamily: DS.fontBody, fontSize: 12, color: DS.sand600 }}>
            Restorative Justice for School Communities
          </div>
        </div>
      </div>
    </footer>);

}

// ─── BUTTON ─────────────────────────────────────────────────
function Button({ children, variant = 'primary', size = 'md', onClick, style: extraStyle, disabled }) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const base = { fontFamily: DS.fontBody, fontWeight: 700, borderRadius: 999, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer', transition: 'all 200ms', display: 'inline-flex', alignItems: 'center', gap: 6, opacity: disabled ? 0.5 : 1 };
  const sizes = { sm: { fontSize: 13, padding: '7px 16px' }, md: { fontSize: 15, padding: '11px 24px' }, lg: { fontSize: 17, padding: '14px 32px' } };
  const variants = {
    primary: { background: pressed ? DS.clay700 : hovered ? DS.clay600 : DS.clay500, color: 'white', boxShadow: hovered && !pressed ? '0 4px 16px rgba(196,99,58,0.35)' : 'none', transform: pressed ? 'scale(0.98)' : hovered ? 'translateY(-1px)' : 'none' },
    secondary: { background: hovered ? DS.sage600 : DS.sage500, color: 'white', transform: hovered ? 'translateY(-1px)' : 'none' },
    outline: { background: hovered ? DS.clay50 : 'transparent', color: DS.clay500, border: `2px solid ${hovered ? DS.clay500 : DS.clay300}`, transform: hovered ? 'translateY(-1px)' : 'none' },
    ghost: { background: hovered ? DS.sand100 : 'transparent', color: DS.sand700, border: `1.5px solid ${DS.sand200}` },
    inverse: { background: pressed ? DS.clay100 : hovered ? DS.clay50 : 'white', color: DS.clay600 }
  };
  return (
    <button style={{ ...base, ...sizes[size], ...variants[variant], ...extraStyle }}
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => {setHovered(false);setPressed(false);}}
    onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)}
    onClick={onClick} disabled={disabled}>
      {children}
    </button>);

}

// ─── BADGE ──────────────────────────────────────────────────
function Badge({ children, variant = 'clay' }) {
  const variants = {
    clay: { background: DS.clay100, color: DS.clay600 },
    sage: { background: DS.sage100, color: DS.sage600 },
    gold: { background: DS.gold100, color: DS.gold600 },
    sand: { background: DS.sand200, color: DS.sand700 },
    dark: { background: DS.sand900, color: 'white' }
  };
  return (
    <span style={{ ...variants[variant], fontFamily: DS.fontBody, fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 999, letterSpacing: '0.02em', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
      {children}
    </span>);

}

// ─── SECTION LABEL ───────────────────────────────────────────
function SectionLabel({ children, color }) {
  return (
    <div style={{ fontFamily: DS.fontBody, fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: color || DS.clay500, marginBottom: 12 }}>{children}</div>);

}

// ─── PAGE TRANSITION WRAPPER ─────────────────────────────────
function PageTransition({ children, pageKey }) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 40);
    return () => clearTimeout(t);
  }, [pageKey]);
  return (
    <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: 'opacity 380ms cubic-bezier(0.16,1,0.3,1), transform 380ms cubic-bezier(0.16,1,0.3,1)' }}>
      {children}
    </div>);

}

// ─── INPUT ───────────────────────────────────────────────────
function Input({ label, type = 'text', placeholder, value, onChange, required }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ marginBottom: 20 }}>
      {label && <label style={{ fontFamily: DS.fontBody, fontSize: 13, fontWeight: 700, color: DS.sand700, display: 'block', marginBottom: 6 }}>{label}{required && <span style={{ color: DS.clay500, marginLeft: 3 }}>*</span>}</label>}
      <input type={type} placeholder={placeholder} value={value} onChange={onChange}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      style={{
        width: '100%', padding: '12px 16px', borderRadius: 10, border: `1.5px solid ${focused ? DS.clay400 : DS.sand300}`,
        fontFamily: DS.fontBody, fontSize: 15, color: DS.sand900, background: 'white',
        outline: 'none', transition: 'border-color 200ms', boxSizing: 'border-box',
        boxShadow: focused ? '0 0 0 3px rgba(196,99,58,0.1)' : 'none'
      }} />
      
    </div>);

}

function Textarea({ label, placeholder, value, onChange, rows = 4, required }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ marginBottom: 20 }}>
      {label && <label style={{ fontFamily: DS.fontBody, fontSize: 13, fontWeight: 700, color: DS.sand700, display: 'block', marginBottom: 6 }}>{label}{required && <span style={{ color: DS.clay500, marginLeft: 3 }}>*</span>}</label>}
      <textarea placeholder={placeholder} value={value} onChange={onChange} rows={rows}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      style={{
        width: '100%', padding: '12px 16px', borderRadius: 10, border: `1.5px solid ${focused ? DS.clay400 : DS.sand300}`,
        fontFamily: DS.fontBody, fontSize: 15, color: DS.sand900, background: 'white',
        outline: 'none', transition: 'border-color 200ms', resize: 'vertical', boxSizing: 'border-box',
        boxShadow: focused ? '0 0 0 3px rgba(196,99,58,0.1)' : 'none'
      }} />
      
    </div>);

}

Object.assign(window, { Nav, Footer, Button, Badge, SectionLabel, PageTransition, Input, Textarea, DS });