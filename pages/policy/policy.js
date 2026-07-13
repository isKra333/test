document.addEventListener('DOMContentLoaded', () => {
  // Translations Dictionary
  const translations = {
    ko: {
      "footer-slogan": "언제나 당신을 위해 최고의 제품을 만드는 곳",
      "footer-policy-link": "개인정보처리방침",
      "footer-qna-link": "자주 묻는 질문 (Q&A)",
      "policy-title": "개인정보처리방침 (Privacy Policy)",
      "back-to-guide": "가이드로 돌아가기",
      "policy-date": "업데이트: 2026년"
    },
    en: {
      "footer-slogan": "The place that always creates the best products for you",
      "footer-policy-link": "Privacy Policy",
      "footer-qna-link": "Q&A (FAQ)",
      "policy-title": "Privacy Policy",
      "back-to-guide": "Back to Guide",
      "policy-date": "Updated in 2026"
    },
    vi: {
      "footer-slogan": "Nơi luôn tạo ra những sản phẩm đỉnh nhất dành cho bạn",
      "footer-policy-link": "Chính sách bảo mật",
      "footer-qna-link": "Hỏi & Đáp (Q&A)",
      "policy-title": "Chính sách bảo mật (Privacy Policy)",
      "back-to-guide": "Quay lại hướng dẫn",
      "policy-date": "Cập nhật năm: 2026"
    }
  };

  // Elements
  const langTrigger = document.getElementById('lang-trigger');
  const langDropdown = document.getElementById('lang-dropdown');
  const langSelectorWrap = document.getElementById('lang-selector-wrap');
  const langOptions = document.querySelectorAll('.lang-option');
  const currentFlag = document.getElementById('current-flag');
  const currentLangText = document.getElementById('current-lang-text');

  // Flag and name maps for UI update
  const flagUrls = {
    ko: "https://flagcdn.com/w20/kr.png",
    en: "https://flagcdn.com/w20/us.png",
    vi: "https://flagcdn.com/w20/vn.png"
  };

  const langNames = {
    ko: "한국어",
    en: "English",
    vi: "Tiếng Việt"
  };

  // Toggle Dropdown
  langTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    langSelectorWrap.classList.toggle('open');
  });

  // Close dropdown on clicking outside
  document.addEventListener('click', () => {
    langSelectorWrap.classList.remove('open');
  });

  // Option selection
  langOptions.forEach(option => {
    option.addEventListener('click', () => {
      const langValue = option.getAttribute('data-value');
      setLanguage(langValue);
      langSelectorWrap.classList.remove('open');
    });
  });

  // --- Multi-language Translation Logic ---
  function setLanguage(lang) {
    const selectedTranslations = translations[lang] || translations['vi'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (selectedTranslations[key]) {
        el.innerHTML = selectedTranslations[key];
      }
    });

    // Update UI elements for custom dropdown
    currentFlag.src = flagUrls[lang];
    currentFlag.alt = lang.toUpperCase();
    currentLangText.textContent = langNames[lang];

    // Highlight active option
    langOptions.forEach(opt => {
      if (opt.getAttribute('data-value') === lang) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });
    
    // Save selection
    localStorage.setItem('playcoc-guide-lang', lang);
  }

  // Load language from storage or default to 'vi'
  const savedLang = localStorage.getItem('playcoc-guide-lang') || 'vi';
  setLanguage(savedLang);

  // Set current copyright and policy years dynamically
  const currentYearVal = new Date().getFullYear();
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = currentYearVal;
  }

  // Dynamic navigation handler (to prevent link previews in browser status bar on hover)
  document.querySelectorAll('[data-href]').forEach(el => {
    el.addEventListener('click', () => {
      const href = el.getAttribute('data-href');
      const target = el.getAttribute('data-target');
      if (href) {
        if (target === '_blank') {
          window.open(href, '_blank', 'noopener,noreferrer');
        } else {
          window.location.href = href;
        }
      }
    });
  });
});
