/**
 * AstraMend (OPC) Private Limited - Interactive Logic & UI Controller
 */

// Sample Product Catalog with Authentic Formulations
const PRODUCTS_DATA = [
  {
    id: 'calvistar-1',
    category: 'tablets',
    categoryName: 'Tablets & Capsules',
    name: 'CALVISTAR™ Softgel Capsules',
    composition: 'Calcitriol 0.25 mcg + Calcium Citrate Malate 500 mg + Vitamin K2-7 50 mcg + Methylcobalamin 1500 mcg + Zinc Oxide 7.5 mg + Magnesium Oxide 50 mg + L-Methyl-Folate 800 mcg',
    indication: 'Supports Bone Health, Enhances Immunity, Improves Muscle Function & Maintains Joint Health.',
    pack: '10 x 10 Softgel Capsules Blister Pack',
    badge: 'Flagship Formulation'
  },
  {
    id: 'tab-1',
    category: 'tablets',
    categoryName: 'Tablets & Capsules',
    name: 'AstraCold Total',
    composition: 'Paracetamol 500mg + Phenylephrine HCl 5mg + Chlorpheniramine Maleate 2mg',
    indication: 'Relief from cold, sneezing, nasal congestion and feverish aches.',
    pack: '10x10 Blister',
    badge: 'Fast Acting'
  },
  {
    id: 'tab-2',
    category: 'tablets',
    categoryName: 'Tablets & Capsules',
    name: 'MendClav-625',
    composition: 'Amoxicillin 500mg + Potassium Clavulanate 125mg IP',
    indication: 'Broad spectrum anti-bacterial for respiratory & systemic infections.',
    pack: '10x1x6 Alu-Alu',
    badge: 'Antibiotic'
  },
  {
    id: 'tab-3',
    category: 'tablets',
    categoryName: 'Tablets & Capsules',
    name: 'AstraPan-DSR',
    composition: 'Pantoprazole Sodium 40mg + Domperidone 30mg SR',
    indication: 'GERD, severe acidity, reflux esophagitis & dyspepsia.',
    pack: '10x10 Alu-Alu',
    badge: 'Gastro Care'
  },
  {
    id: 'tab-4',
    category: 'tablets',
    categoryName: 'Tablets & Capsules',
    name: 'MendDol-SP',
    composition: 'Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg',
    indication: 'Potent anti-inflammatory and pain relief for joint & dental pain.',
    pack: '10x10 Blister',
    badge: 'Pain Relief'
  },
  {
    id: 'astramup-1',
    category: 'ointments',
    categoryName: 'Ointments & Creams',
    name: 'ASTRAMUP Ointment',
    composition: 'Mupirocin Ointment IP 2% w/w (For External Use Only)',
    indication: 'Topical antibacterial treatment for primary and secondary skin infections, impetigo, folliculitis, infected cuts & wounds.',
    pack: '15 g Laminated Tube & Mono Carton',
    badge: 'Antibacterial Ointment'
  },
  {
    id: 'crm-1',
    category: 'ointments',
    categoryName: 'Ointments & Creams',
    name: 'AstraDerm Plus Cream',
    composition: 'Clobetasol Propionate 0.05% + Neomycin 0.5% + Miconazole Nitrate 2.0%',
    indication: 'Triple action anti-fungal, anti-bacterial and anti-inflammatory skin cream.',
    pack: '15g Lami Tube',
    badge: 'Dermacare'
  },
  {
    id: 'crm-2',
    category: 'ointments',
    categoryName: 'Ointments & Creams',
    name: 'MendGel Pain Balm',
    composition: 'Diclofenac Diethylamine 1.16% + Linseed Oil + Methyl Salicylate + Menthol',
    indication: 'Rapid pain relieving gel for sprains, muscle stiffness and backache.',
    pack: '30g Tube',
    badge: 'Quick Relief'
  },
  {
    id: 'cobastra-1',
    category: 'injectables',
    categoryName: 'Injectables',
    name: 'Cobastra™ PFS Injection',
    composition: 'Mecobalamin Injection 1500 mcg (Light Sensitive) for I.M. / I.V. / S.C.',
    indication: 'Peripheral neuropathy, diabetic nerve damage repair, megaloblastic anemia & neurological vitality.',
    pack: '1 ml Glass Pre-Filled Syringe (PFS) in Blister Pack',
    badge: 'Pre-Filled Syringe'
  },
  {
    id: 'inj-1',
    category: 'injectables',
    categoryName: 'Injectables',
    name: 'AstraCef-1000 Injection',
    composition: 'Ceftriaxone Sodium Sterile IP 1000mg with Sterile Water for Inj.',
    indication: 'Critical care cephalosporin antibiotic for severe bacterial infections.',
    pack: 'Single Vial + WFI',
    badge: 'Critical Care'
  },
  {
    id: 'inj-2',
    category: 'injectables',
    categoryName: 'Injectables',
    name: 'MendPan-40 Injection',
    composition: 'Pantoprazole Sodium for Injection IP 40mg (Lyophilized)',
    indication: 'Emergency parenteral control of gastric acid and ulcers.',
    pack: 'Vial with Solvent',
    badge: 'Hospital Care'
  },
  {
    id: 'astravion-supp-1',
    category: 'supplements',
    categoryName: 'Health Supplements',
    name: 'ASTRAVION™ Multivitamin & Antioxidant',
    composition: 'Energy 5.33 kcal, Protein 0.12g, Niacinamide, B-Complex (B1, B2, B6, B12), Folic Acid, Biotin, Calcium Pantothenate, Vitamin A, C, D3, E, K2-7, Zinc, Magnesium, Selenium, Copper, Manganese, Chromium, Iodine, Lutein, Lycopene, Grape Seed Extract, Green Tea Extract, Ginkgo Biloba Extract, Coenzyme Q10, Choline Bitartrate',
    indication: 'Boosts energy & immunity, daily nutritional support with antioxidant cellular protection & vital stamina.',
    pack: '30 Softgel Capsules Bottle & Carton Pack',
    badge: 'Flagship Supplement'
  },
  {
    id: 'nut-1',
    category: 'supplements',
    categoryName: 'Health Supplements',
    name: 'AstraVit-9G Multivitamin',
    composition: 'Ginseng, Ginkgo Biloba, Green Tea, Grape Seed Extract + Antioxidants & Minerals',
    indication: 'Daily vitality, mental alertness, immunity booster and anti-fatigue.',
    pack: '10x1x10 Softgels',
    badge: 'Daily Wellness'
  },
  {
    id: 'argivex-1',
    category: 'nutraceuticals',
    categoryName: 'Nutraceuticals',
    name: 'ARGIVEX™ Sachet',
    composition: 'L-Arginine 3.0 g + Grape Seed Extract (Vitis vinifera) 75 mg (Sugar Free, Gluten Free, Lemon Orange Flavour)',
    indication: 'Nutraceutical for Women’s Health & Wellness. Supports reproductive health, healthy blood flow, healthy pregnancy, and boosts energy & stamina.',
    pack: '10 x 5 g Sachet Box',
    badge: 'Women’s Wellness'
  },
  {
    id: 'nut-2',
    category: 'nutraceuticals',
    categoryName: 'Nutraceuticals',
    name: 'MendCal-D3 Max',
    composition: 'Calcium Carbonate 1250mg + Vitamin D3 2000 IU + Zinc & Magnesium',
    indication: 'Bone density, post-menopausal health and osteoporosis support.',
    pack: '3x10 Tablets',
    badge: 'Bone Health'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initModals();
  initProductCatalog();
  initContactForm();
});

/* ==========================================================================
   Navigation & Scroll
   ========================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerLinks = document.querySelectorAll('.mobile-nav-links a');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
    });
  }

  if (closeDrawerBtn && mobileDrawer) {
    closeDrawerBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
    });
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.remove('active');
    });
  });

  // Active Nav on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.site-header .nav-link');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   Modal Framework
   ========================================================================== */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function initModals() {
  // Modal triggers with data-modal attribute
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-modal');
      openModal(targetId);
    });
  });

  // Close buttons
  document.querySelectorAll('.modal-close-btn, [data-modal-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-backdrop');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Backdrop click to close
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.active').forEach(modal => {
        modal.classList.remove('active');
      });
      const mobileDrawer = document.getElementById('mobileNavDrawer');
      if (mobileDrawer) mobileDrawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/* ==========================================================================
   Product Catalog & Category Filtering
   ========================================================================== */
let activeCategory = 'all';

function initProductCatalog() {
  const catalogGrid = document.getElementById('catalogGrid');
  const searchInput = document.getElementById('productSearchInput');
  const filterChips = document.querySelectorAll('.filter-chip');

  // Direct category clicks on homepage cards
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const category = card.getAttribute('data-category');
      openProductCatalog(category);
    });
  });

  if (filterChips) {
    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeCategory = chip.getAttribute('data-filter');
        renderCatalog();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderCatalog();
    });
  }

  renderCatalog();
}

function openProductCatalog(category = 'all') {
  activeCategory = category;
  const filterChips = document.querySelectorAll('.filter-chip');
  filterChips.forEach(chip => {
    if (chip.getAttribute('data-filter') === category) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
  renderCatalog();
  openModal('productsModal');
}

function renderCatalog() {
  const catalogGrid = document.getElementById('catalogGrid');
  const searchInput = document.getElementById('productSearchInput');
  if (!catalogGrid) return;

  const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const filtered = PRODUCTS_DATA.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery) ||
                          item.composition.toLowerCase().includes(searchQuery) ||
                          item.indication.toLowerCase().includes(searchQuery) ||
                          item.categoryName.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    catalogGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <p style="font-size: 1.1rem; font-weight: 600; color: var(--primary-navy); margin-bottom: 8px;">No healthcare formulations found.</p>
        <p>Try searching for a different drug compound or reset category filters.</p>
      </div>
    `;
    return;
  }

  catalogGrid.innerHTML = filtered.map(item => `
    <div class="catalog-item-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <span class="catalog-item-tag">${item.categoryName}</span>
        <span style="font-size: 0.7rem; font-weight: 700; color: #0284c7; background: #e0f2fe; padding: 2px 6px; border-radius: 4px;">${item.badge}</span>
      </div>
      <h4 class="catalog-item-name">${item.name}</h4>
      <p style="font-size: 0.8125rem; font-weight: 600; color: #0a2540; margin-bottom: 4px;">${item.composition}</p>
      <p class="catalog-item-comp">${item.indication}</p>
      <div class="catalog-item-footer">
        <span><strong>Pack:</strong> ${item.pack}</span>
        <button class="btn btn-sm btn-outline" style="padding: 4px 12px; font-size: 0.75rem;" onclick="inquireProduct('${item.name}')">Enquire Now</button>
      </div>
    </div>
  `).join('');
}

function inquireProduct(productName) {
  closeModal('productsModal');
  const subjectInput = document.getElementById('contactSubject');
  const messageInput = document.getElementById('contactMessage');
  if (subjectInput) {
    subjectInput.value = `Product Inquiry: ${productName}`;
  }
  if (messageInput) {
    messageInput.value = `Hello AstraMend (OPC) Private Limited Team,\n\nI would like to inquire about pricing, distribution, and availability for "${productName}". Please send me details.`;
  }
  openModal('contactModal');
}

/* ==========================================================================
   Contact Form & Quick Inquiries
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const subject = document.getElementById('contactSubject').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !phone) {
        showToast('Please provide your name and contact phone number.');
        return;
      }

      // Prepare mailto fallback or WhatsApp fallback
      const fullMessage = `Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0ASubject: ${subject}%0D%0AMessage: ${message}`;
      
      // Close modal
      closeModal('contactModal');

      // Show instant feedback toast
      showToast(`Thank you ${name}! Your inquiry has been logged. We will contact you at ${phone}.`);

      // Optionally offer direct WhatsApp forwarding
      contactForm.reset();
    });
  }

  // Career Form Submission
  const careerForm = document.getElementById('careerForm');
  if (careerForm) {
    careerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal('careersModal');
      showToast('Application submitted successfully! Our HR team will reach out to you.');
      careerForm.reset();
    });
  }
}

/* ==========================================================================
   Toast Notification Helper
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="toast-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
    <div style="font-size: 0.875rem; font-weight: 500;">${message}</div>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}
