document.addEventListener('DOMContentLoaded', () => {
  // Translations Dictionary
  const translations = {
    ko: {
      "footer-slogan": "언제나 당신을 위해 최고의 제품을 만드는 곳",
      "footer-policy-link": "개인정보처리방침",
      "footer-qna-link": "자주 묻는 질문 (Q&A)",
      "register-title": "회원가입",
      "reg-username-placeholder": "아이디",
      "reg-username-desc": "아이디는 영문과 숫자를 사용하여 6~12자리로 설정 가능하며 공백은 사용할 수 없습니다.",
      "reg-password-placeholder": "비밀번호",
      "reg-confirm-placeholder": "비밀번호 확인",
      "reg-password-desc": "비밀번호는 영문, 숫자, 특수문자 중 2가지 이상을 조합하여 6~12자리로 설정해야 합니다.",
      "reg-email-placeholder": "이메일 주소",
      "reg-email-desc": "정확한 이메일 주소를 입력해 주세요. 비밀번호 분실 시 재설정에 사용됩니다.",
      "reg-submit-btn": "확인",
      "guide-title": "안내",
      "guide-default": "입력란을 선택하시면 상세 안내가 표시됩니다.",
      "mobile-only-title": "모바일 기기 전용 안내",
      "mobile-only-desc": "본 페이지는 모바일 화면에 최적화되어 있습니다. 스마트폰으로 접속해 주세요.",
      "mobile-only-btn": "PC 버전으로 계속하기"
    },
    en: {
      "footer-slogan": "The place that always creates the best products for you",
      "footer-policy-link": "Privacy Policy",
      "footer-qna-link": "Q&A (FAQ)",
      "register-title": "Register",
      "reg-username-placeholder": "Username",
      "reg-username-desc": "Username can contain letters and numbers, length 6-12 characters, and no spaces.",
      "reg-password-placeholder": "Password",
      "reg-confirm-placeholder": "Confirm Password",
      "reg-password-desc": "Password must contain 2 or more different characters, length 6-12 characters. Example: letters + numbers or special characters.",
      "reg-email-placeholder": "E-mail Address",
      "reg-email-desc": "Please enter the correct email address; this email will be used when you forget your password.",
      "reg-submit-btn": "Confirm",
      "guide-title": "Guide",
      "guide-default": "Please select an input field to view detailed instructions.",
      "mobile-only-title": "Mobile Device Recommended",
      "mobile-only-desc": "This page is best optimized for mobile devices. Please access from your smartphone.",
      "mobile-only-btn": "Continue on PC anyway"
    },
    vi: {
      "footer-slogan": "Nơi luôn tạo ra những sản phẩm đỉnh nhất dành cho bạn",
      "footer-policy-link": "Chính sách bảo mật",
      "footer-qna-link": "Hỏi & Đáp (Q&A)",
      "register-title": "Đăng ký",
      "reg-username-placeholder": "Tài khoản",
      "reg-username-desc": "Tên tài khoản có thể sử dụng chữ cái và chữ số, dài từ 6~12 ký tự và không được dùng khoảng trắng.",
      "reg-password-placeholder": "Mật khẩu",
      "reg-confirm-placeholder": "Xác nhận mật khẩu",
      "reg-password-desc": "Mật khẩu phải chứa 2 ký tự khác nhau trở lên, từ 6~12 ký tự. Ví dụ: chữ + số hoặc ký tự đặc biệt.",
      "reg-email-placeholder": "Địa chỉ e-mail",
      "reg-email-desc": "Vui lòng nhập đúng địa chỉ mail, mail này được dùng khi bạn quên mật khẩu.",
      "reg-submit-btn": "Xác nhận",
      "guide-title": "Hướng dẫn",
      "guide-default": "Vui lòng chọn một ô nhập liệu để xem hướng dẫn chi tiết.",
      "mobile-only-title": "Thiết bị di động được khuyên dùng",
      "mobile-only-desc": "Trang web này được tối ưu hóa tốt nhất cho điện thoại di động. Vui lòng truy cập bằng điện thoại di động.",
      "mobile-only-btn": "Tiếp tục trên PC"
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
    
    // Translate normal text
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (selectedTranslations[key]) {
        el.innerHTML = selectedTranslations[key];
      }
    });

    // Translate placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (selectedTranslations[key]) {
        el.setAttribute('placeholder', selectedTranslations[key]);
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

  // Set current copyright year dynamically
  const currentYearVal = new Date().getFullYear();
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = currentYearVal;
  }

  // --- Dynamic Help/Guide Panel Focus Listeners ---
  const guideText = document.getElementById('guide-text');
  const inputGuides = [
    { id: 'reg-username', descKey: 'reg-username-desc' },
    { id: 'reg-password', descKey: 'reg-password-desc' },
    { id: 'reg-confirm-password', descKey: 'reg-password-desc' },
    { id: 'reg-email', descKey: 'reg-email-desc' }
  ];

  inputGuides.forEach(item => {
    const el = document.getElementById(item.id);
    if (el) {
      el.addEventListener('focus', () => {
        if (guideText) {
          guideText.setAttribute('data-i18n', item.descKey);
          const lang = localStorage.getItem('playcoc-guide-lang') || 'vi';
          if (translations[lang] && translations[lang][item.descKey]) {
            guideText.innerHTML = translations[lang][item.descKey];
          }
        }
      });
      el.addEventListener('blur', () => {
        if (guideText) {
          guideText.setAttribute('data-i18n', 'guide-default');
          const lang = localStorage.getItem('playcoc-guide-lang') || 'vi';
          if (translations[lang] && translations[lang]['guide-default']) {
            guideText.innerHTML = translations[lang]['guide-default'];
          }
        }
      });
    }
  });

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
