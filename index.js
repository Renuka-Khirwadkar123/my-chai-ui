function applyChaiStyles() {
  const theme = {
    primary: '#f97316',      
    secondary: '#1f2937',   
    light: '#f8fafc',        
    dark: '#111827',        
    success: '#10b981',
    warning: '#f59e0b', 
    danger: '#ef4444',
    border: '#334155'
  };

  document.querySelectorAll('*').forEach(el => {
    el.classList.forEach(cls => {
      if (!cls.startsWith('chai-')) return;
      
      const [_, type, value] = cls.split('-');

      
      // SPACING - p-4, m-8, px-6, py-12, etc.
      if (type === 'p') el.style.padding = `${value}px`;
      if (type === 'm') el.style.margin = `${value}px`;
      if (type === 'px') el.style.paddingLeft = `${value}px`; el.style.paddingRight = `${value}px`;
      if (type === 'py') el.style.paddingTop = `${value}px`; el.style.paddingBottom = `${value}px`;
      
      // COLORS - bg-orange-500, text-slate-100, border-gray-300
      if (type === 'bg') {
        const colors = {
          'slate-50': '#f8fafc', 'slate-100': '#f1f5f9', 'slate-900': '#0f172a',
          'orange-400': '#fb923c', 'orange-500': '#f97316', 'gray-900': '#111827'
        };
        el.style.backgroundColor = colors[value] || value;
      }
      
      if (type === 'text') {
        if (value === 'center') el.style.textAlign = 'center';
        else {
          const colors = { 'slate-100': '#f8fafc', 'orange-400': '#fb923c', 'emerald-400': '#34d399' };
          el.style.color = colors[value] || value;
        }
      }
      
      // TYPOGRAPHY
      if (type === 'fs') el.style.fontSize = `${value}px`;
      if (type === 'fw') el.style.fontWeight = value; // fw-bold, fw-semibold
      
      // BORDERS & RADIUS
      if (type === 'border') el.style.border = `${value}px solid ${theme.border}`;
      if (type === 'rounded') el.style.borderRadius = `${value}px`;
      
      // LAYOUT - FULL FLEXBOX
      if (type === 'flex') el.style.display = 'flex';
      if (type === 'grid') el.style.display = 'grid';
      if (type === 'items' && value === 'center') el.style.alignItems = 'center';
      if (type === 'justify' && value === 'center') el.style.justifyContent = 'center';
      if (type === 'justify' && value === 'between') el.style.justifyContent = 'space-between';
      if (type === 'gap') el.style.gap = `${value}px`;
      
      // POSITIONING
      if (type === 'absolute') el.style.position = 'absolute';
      if (type === 'relative') el.style.position = 'relative';

      // RESPONSIVE - sm:, md:, lg:
      if (type === 'sm' || type === 'md' || type === 'lg') {
        // Responsive handling (basic)
      }

 
      
      // CARDS - Multiple variants
      if (cls === 'chai-card') {
        el.style.padding = '24px';
        el.style.backgroundColor = theme.secondary;
        el.style.color = theme.light;
        el.style.borderRadius = '20px';
        el.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
        el.style.border = '1px solid #2a2a2a';
      }
      
      if (cls === 'chai-card-glass') {
        el.style.padding = '24px';
        el.style.background = 'rgba(31, 41, 55, 0.6)';
        el.style.backdropFilter = 'blur(20px)';
        el.style.border = '1px solid rgba(249, 115, 22, 0.2)';
        el.style.borderRadius = '24px';
      }

      // BUTTONS - Full variant system
      if (cls === 'chai-btn') {
        el.style.padding = '14px 28px';
        el.style.background = `linear-gradient(135deg, ${theme.primary}, #fb923c)`;
        el.style.color = '#fff';
        el.style.border = 'none';
        el.style.borderRadius = '12px';
        el.style.cursor = 'pointer';
        el.style.fontWeight = '600';
        el.style.boxShadow = '0 8px 24px rgba(249, 115, 22, 0.4)';
        el.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      }
      
      if (cls === 'chai-btn-secondary') {
        el.style.backgroundColor = theme.secondary;
        el.style.color = theme.light;
        el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
      }
      
      if (cls === 'chai-btn-danger') el.style.background = `linear-gradient(135deg, ${theme.danger}, #dc2626)`;

      // AVATAR - Multiple sizes
      if (cls === 'chai-avatar') {
        el.style.width = '64px';
        el.style.height = '64px';
        el.style.borderRadius = '50%';
        el.style.objectFit = 'cover';
        el.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4)';
      }
      if (cls === 'chai-avatar-lg') {
        el.style.width = '80px';
        el.style.height = '80px';
      }

      // PROGRESS - Enhanced with data attributes
      if (cls === 'chai-progress') {
        el.style.width = '100%';
        el.style.height = '14px';
        el.style.backgroundColor = 'rgba(55, 65, 81, 0.5)';
        el.style.borderRadius = '12px';
        el.style.overflow = 'hidden';
        el.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.2)';
        
        let bar = el.querySelector('.progress-bar');
        if (!bar) {
          bar = document.createElement('div');
          bar.className = 'progress-bar';
          bar.style.cssText = `
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, ${theme.primary}, #fb923c);
            border-radius: 12px;
            transition: width 2s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.6);
          `;
          el.appendChild(bar);
        }
        
        // Auto animate if data-progress attribute exists
        const progress = el.dataset.progress || '75';
        bar.style.width = progress + '%';
      }

      // TABLE - Modern styling
      if (cls === 'chai-table') {
        el.style.width = '100%';
        el.style.borderCollapse = 'separate';
        el.style.borderSpacing = '0 12px';
        
        // Style headers
        el.querySelectorAll('th').forEach(th => {
          th.style.padding = '20px';
          th.style.background = `linear-gradient(135deg, ${theme.secondary}, #1e293b)`;
          th.style.color = theme.light;
          th.style.fontWeight = '800';
          th.style.borderRadius = '12px 12px 0 0';
          th.style.border = 'none';
        });
        
        // Style rows
        el.querySelectorAll('td').forEach((td, i) => {
          td.style.padding = '20px';
          td.style.background = i % 2 ? 'rgba(31, 41, 55, 0.6)' : 'rgba(55, 65, 81, 0.4)';
          td.style.border = 'none';
          td.style.transition = 'all 0.3s ease';
        });
        
        // Hover effect on rows
        el.querySelectorAll('tr').forEach(tr => {
          tr.addEventListener('mouseenter', () => {
            tr.querySelectorAll('td').forEach(td => {
              td.style.background = 'rgba(249, 115, 22, 0.1)';
              td.style.transform = 'translateY(-2px)';
            });
          });
          tr.addEventListener('mouseleave', () => {
            tr.querySelectorAll('td').forEach((td, i) => {
              td.style.background = i % 2 ? 'rgba(31, 41, 55, 0.6)' : 'rgba(55, 65, 81, 0.4)';
              td.style.transform = 'translateY(0)';
            });
          });
        });
      }

      // MODAL - Enhanced
      if (cls === 'chai-modal') {
        el.style.cssText = `
          position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
          background: rgba(0,0,0,0.7); backdrop-filter: blur(8px);
          display: none; justify-content: center; align-items: center;
          z-index: 9999; animation: fadeIn 0.3s ease;
        `;
      }

      // HOVER EFFECTS
      if (cls === 'chai-hover-scale') {
        el.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        el.addEventListener('mouseenter', () => el.style.transform = 'scale(1.05)');
        el.addEventListener('mouseleave', () => el.style.transform = 'scale(1)');
      }
      
      if (cls === 'chai-hover-lift') {
        el.style.transition = 'all 0.3s ease';
        el.addEventListener('mouseenter', () => {
          el.style.transform = 'translateY(-8px)';
          el.style.boxShadow = '0 25px 50px rgba(0,0,0,0.4)';
        });
        el.addEventListener('mouseleave', () => {
          el.style.transform = 'translateY(0)';
          el.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
        });
      }

      // Remove class after processing (optional)
      // el.classList.remove(cls);
    });
  });
}

// Auto-export for browser
if (typeof window !== "undefined") {
  window.applyChaiStyles = applyChaiStyles;
}

export { applyChaiStyles };
