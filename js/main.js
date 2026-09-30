/**
 * AstraMend (OPC) Private Limited - Interactive Logic & UI Controller
 */

// Official AstraMend (OPC) Private Limited Product Catalog
const PRODUCTS_DATA = [
  {
    id: 'calvistar-1',
    category: 'tablets',
    categoryName: 'Tablets & Capsules',
    name: 'CALVISTAR™ Softgel Capsules',
    composition: 'Calcitriol 0.25 mcg + Calcium Citrate Malate 500 mg + Vitamin K2-7 50 mcg + Methylcobalamin 1500 mcg + Zinc Oxide 7.5 mg + Magnesium Oxide 50 mg + L-Methyl-Folate 800 mcg',
    indication: 'Supports Bone Health, Enhances Immunity, Improves Muscle Function & Maintains Joint Health.',
    pack: '10 x 10 Softgel Capsules Blister Pack',
    badge: 'Flagship Formulation',
    image: 'assets/images/calvistar-capsules.png'
  },
  {
    id: 'astramup-1',
    category: 'ointments',
    categoryName: 'Ointments & Creams',
    name: 'ASTRAMUP Ointment',
    composition: 'Mupirocin Ointment IP 2% w/w (For External Use Only)',
    indication: 'Topical antibacterial treatment for primary and secondary skin infections, impetigo, folliculitis, infected cuts & wounds.',
    pack: '15 g Laminated Tube & Mono Carton',
    badge: 'Antibacterial Ointment',
    image: 'assets/images/astramup-ointment.png'
  },
  {
    id: 'cobastra-1',
    category: 'injectables',
    categoryName: 'Injectables',
    name: 'Cobastra™ PFS Injection',
    composition: 'Mecobalamin Injection 1500 mcg (Light Sensitive) for I.M. / I.V. / S.C. use only',
    indication: 'Peripheral neuropathy, diabetic nerve damage repair, megaloblastic anemia & neurological vitality.',
    pack: '1 ml Glass Pre-Filled Syringe (PFS) in Protective Blister Pack',
    badge: '1 ml Pre-Filled Syringe',
    image: 'assets/images/cobastra-injectable.png'
  },
  {
    id: 'astraxon-tz-1',
    category: 'injectables',
    categoryName: 'Injectables',
    name: 'ASTRAXON-TZ Injection',
    composition: 'Ceftriaxone & Tazobactam For Injection 1.125 gm (Ceftriaxone Sodium Sterile IP Eq. to Ceftriaxone 1000 mg + Tazobactam Sodium Sterile Eq. to Tazobactam 125 mg) with Sterile Water for Injections IP 10 ml',
    indication: 'Dual Action broad-spectrum critical care antibiotic for severe nosocomial, lower respiratory, urinary tract & intra-abdominal bacterial infections.',
    pack: '1.125 gm Glass Vial + 10 ml Sterile Water for Injections IP (I.M./I.V.)',
    badge: 'Dual Action 1.125 gm',
    image: 'assets/images/astraxon-tz-injection.png'
  },
  {
    id: 'astravion-supp-1',
    category: 'supplements',
    categoryName: 'Health Supplements',
    name: 'ASTRAVION™ Multivitamin & Antioxidant',
    composition: 'Energy 5.33 kcal, Protein 0.12g, Niacinamide, B-Complex (B1, B2, B6, B12), Folic Acid, Biotin, Calcium Pantothenate, Vitamin A, C, D3, E, K2-7, Zinc, Magnesium, Selenium, Copper, Manganese, Chromium, Iodine, Lutein, Lycopene, Grape Seed Extract, Green Tea Extract, Ginkgo Biloba Extract, Coenzyme Q10, Choline Bitartrate',
    indication: 'Boosts energy & immunity, daily nutritional support with antioxidant cellular protection & vital stamina.',
    pack: '30 Softgel Capsules Bottle & Carton Pack',
    badge: 'Flagship Supplement',
    image: 'assets/images/astravion-health-supplement.png'
  },
  {
    id: 'argivex-1',
    category: 'nutraceuticals',
    categoryName: 'Nutraceuticals',
    name: 'ARGIVEX™ Sachet',
    composition: 'L-Arginine 3.0 g + Grape Seed Extract (Vitis vinifera) 75 mg (Sugar Free, Gluten Free, Lemon Orange Flavour)',
    indication: 'Nutraceutical for Women’s Health & Wellness. Supports reproductive health, healthy blood flow, healthy pregnancy, and boosts energy & stamina.',
    pack: '10 x 5 g Sachet Box',
    badge: 'Women’s Wellness',
    image: 'assets/images/argivex-sachet.png'
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
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
        <span class="catalog-item-tag">${item.categoryName}</span>
        <span style="font-size: 0.7rem; font-weight: 700; color: #0284c7; background: #e0f2fe; padding: 2px 6px; border-radius: 4px;">${item.badge}</span>
      </div>
      ${item.image ? `
        <div style="width: 100%; height: 120px; display: flex; align-items: center; justify-content: center; background: #ffffff; border: 1px solid #eef2f6; border-radius: 10px; margin: 8px 0; overflow: hidden; padding: 4px;">
          <img src="${item.image}" alt="${item.name}" loading="lazy" style="max-height: 100%; max-width: 100%; object-fit: contain;">
        </div>
      ` : ''}
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
   Contact Form & Career Applications (Formspree + Direct Delivery)
   ========================================================================== */
// Formspree Endpoint for background email delivery to astramendhealthcare@gmail.com
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbglweje'; 

function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contactStatus');
  const contactSubmitBtn = document.getElementById('contactSubmitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const email = document.getElementById('contactEmail').value.trim() || 'Not provided';
      const subject = document.getElementById('contactSubject').value.trim() || 'General Inquiry';
      const message = document.getElementById('contactMessage').value.trim() || 'No message specified';

      if (!name || !phone) {
        showToast('Please provide your name and contact phone number.');
        return;
      }

      // UI loading state
      if (contactSubmitBtn) {
        contactSubmitBtn.disabled = true;
        contactSubmitBtn.textContent = 'Sending...';
      }

      if (contactStatus) {
        contactStatus.style.display = 'block';
        contactStatus.style.background = '#f0f9ff';
        contactStatus.style.border = '1px solid #bae6fd';
        contactStatus.style.color = '#0369a1';
        contactStatus.innerHTML = `<span>⏳ Delivering your inquiry to AstraMend (OPC) Private Limited...</span>`;
      }

      const emailSubject = `AstraMend Website Inquiry from ${name}: ${subject}`;
      const emailBody = `AstraMend (OPC) Private Limited - Official Website Inquiry\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nInquiry Nature: ${subject}\n\nMessage / Requirements:\n${message}\n\nSent via https://www.astramend.co.in`;
      const mailtoUrl = `mailto:astramendhealthcare@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      const whatsappText = `Hello AstraMend (OPC) Private Limited,\n\nName: ${name}\nPhone: ${phone}\nInquiry: ${subject}\nRequirements: ${message}`;
      const whatsappUrl = `https://wa.me/919181428067?text=${encodeURIComponent(whatsappText)}`;

      let sentViaFormspree = false;

      // Send to Formspree in background
      if (FORMSPREE_ENDPOINT && FORMSPREE_ENDPOINT.startsWith('https://formspree.io/f/')) {
        try {
          const res = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              _subject: `New Inquiry from ${name} (${subject})`,
              name,
              phone,
              email,
              subject,
              message
            })
          });

          if (res.ok) {
            sentViaFormspree = true;
          }
        } catch (err) {
          console.warn('Formspree dispatch error, falling back:', err);
        }
      }

      if (sentViaFormspree) {
        if (contactStatus) {
          contactStatus.style.background = '#f0fdf4';
          contactStatus.style.border = '1px solid #86efac';
          contactStatus.style.color = '#15803d';
          contactStatus.innerHTML = `
            <div style="font-weight: 700; margin-bottom: 6px;">✅ Inquiry Delivered to Gmail!</div>
            <p style="margin-bottom: 10px; font-size: 0.85rem;">Your message has been emailed directly to <strong>astramendhealthcare@gmail.com</strong>. Our team will contact you at <strong>${phone}</strong> shortly.</p>
            <a href="${whatsappUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-outline" style="display: inline-flex; align-items: center; gap: 6px; background: #25d366; color: white; border: none; font-size: 0.8rem; padding: 6px 14px;">
              <span>💬 Also Chat on WhatsApp (+91 91814 28067)</span>
            </a>
          `;
        }
        showToast(`Thank you ${name}! Inquiry delivered to astramendhealthcare@gmail.com.`);
        contactForm.reset();
      } else {
        // Fallback: Trigger direct mailto & provide instant WhatsApp link
        window.open(mailtoUrl, '_blank');

        if (contactStatus) {
          contactStatus.style.background = '#f0fdf4';
          contactStatus.style.border = '1px solid #86efac';
          contactStatus.style.color = '#15803d';
          contactStatus.innerHTML = `
            <div style="font-weight: 700; margin-bottom: 6px;">✅ Inquiry Prepared for astramendhealthcare@gmail.com</div>
            <p style="margin-bottom: 10px; font-size: 0.85rem;">Your email app has been opened with your inquiry addressed to <strong>astramendhealthcare@gmail.com</strong>. You can also chat directly on WhatsApp:</p>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <a href="${mailtoUrl}" class="btn btn-sm btn-outline" style="font-size: 0.8rem; padding: 6px 14px;">✉️ Open in Gmail / Email App</a>
              <a href="${whatsappUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-outline" style="background: #25d366; color: white; border: none; font-size: 0.8rem; padding: 6px 14px;">💬 Send via WhatsApp (+91 91814 28067)</a>
            </div>
          `;
        }
        showToast(`Inquiry ready! Click Send in your email app or tap WhatsApp.`);
      }

      if (contactSubmitBtn) {
        contactSubmitBtn.disabled = false;
        contactSubmitBtn.textContent = 'Submit Inquiry';
      }
    });
  }

  // Career Form Submission
  const careerForm = document.getElementById('careerForm');
  const careerStatus = document.getElementById('careerStatus');
  const careerSubmitBtn = document.getElementById('careerSubmitBtn');

  if (careerForm) {
    careerForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('careerName').value.trim();
      const phone = document.getElementById('careerPhone').value.trim();
      const email = document.getElementById('careerEmail').value.trim();
      const role = document.getElementById('careerRole').value;
      const experience = document.getElementById('careerExperience').value.trim() || 'Fresher / Not specified';

      if (!name || !phone || !email) {
        showToast('Please fill out all required fields.');
        return;
      }

      if (careerSubmitBtn) {
        careerSubmitBtn.disabled = true;
        careerSubmitBtn.textContent = 'Submitting...';
      }

      const emailSubject = `Job Application - ${role}: ${name}`;
      const emailBody = `AstraMend (OPC) Private Limited - Career Application\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nRole Applied: ${role}\n\nExperience & Qualifications:\n${experience}\n\nSent via https://www.astramend.co.in`;
      const mailtoUrl = `mailto:astramendhealthcare@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      const whatsappText = `Hello AstraMend HR,\n\nI am applying for the role of *${role}*.\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nExperience: ${experience}`;
      const whatsappUrl = `https://wa.me/919181428067?text=${encodeURIComponent(whatsappText)}`;

      let sentViaFormspree = false;
      if (FORMSPREE_ENDPOINT && FORMSPREE_ENDPOINT.startsWith('https://formspree.io/f/')) {
        try {
          const res = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              _subject: `Job Application - ${role}: ${name}`,
              application_type: 'Career',
              name,
              phone,
              email,
              role,
              experience
            })
          });
          if (res.ok) sentViaFormspree = true;
        } catch (err) {
          console.warn('Career dispatch error:', err);
        }
      }

      if (sentViaFormspree) {
        if (careerStatus) {
          careerStatus.style.display = 'block';
          careerStatus.style.background = '#f0fdf4';
          careerStatus.style.border = '1px solid #86efac';
          careerStatus.style.color = '#15803d';
          careerStatus.innerHTML = `
            <div style="font-weight: 700; margin-bottom: 6px;">✅ Application Submitted!</div>
            <p style="margin-bottom: 0; font-size: 0.85rem;">Your resume details have been sent to <strong>astramendhealthcare@gmail.com</strong>. Our HR team will reach out to you.</p>
          `;
        }
        showToast('Application submitted successfully!');
        careerForm.reset();
      } else {
        window.open(mailtoUrl, '_blank');
        if (careerStatus) {
          careerStatus.style.display = 'block';
          careerStatus.style.background = '#f0fdf4';
          careerStatus.style.border = '1px solid #86efac';
          careerStatus.style.color = '#15803d';
          careerStatus.innerHTML = `
            <div style="font-weight: 700; margin-bottom: 6px;">✅ Application Prepared for HR</div>
            <p style="margin-bottom: 10px; font-size: 0.85rem;">Your email app has been opened with your application pre-filled to <strong>astramendhealthcare@gmail.com</strong>. You can also connect via WhatsApp:</p>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <a href="${mailtoUrl}" class="btn btn-sm btn-outline" style="font-size: 0.8rem; padding: 6px 14px;">✉️ Open Email App</a>
              <a href="${whatsappUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-outline" style="background: #25d366; color: white; border: none; font-size: 0.8rem; padding: 6px 14px;">💬 Send via WhatsApp</a>
            </div>
          `;
        }
        showToast('Application ready! Click Send in your email app.');
      }

      if (careerSubmitBtn) {
        careerSubmitBtn.disabled = false;
        careerSubmitBtn.textContent = 'Submit Application';
      }
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

// Explicitly bind to window for HTML inline onclick handlers and cross-module access
window.openModal = openModal;
window.closeModal = closeModal;
window.openProductCatalog = openProductCatalog;
window.inquireProduct = inquireProduct;
window.showToast = showToast;
