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
      "mobile-only-btn": "PC 버전으로 계속하기",
      "success-signup-title": "회원가입 완료!",
      "success-signup-desc": "회원가입이 성공적으로 완료되었습니다. 현재 창을 닫고 게임 화면으로 돌아가 로그인해 주세요.",
      "success-close-btn": "확인",
      "error-username-exists": "이미 존재하는 아이디입니다. 다른 아이디를 입력해 주세요.",
      "error-network": "서버 연결에 실패했습니다. 네트워크 상태를 확인 후 다시 시도해 주세요."
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
      "mobile-only-btn": "Continue on PC anyway",
      "success-signup-title": "Registration Successful!",
      "success-signup-desc": "Your registration has been successfully completed. Please close this window, return to the game screen, and log in.",
      "success-close-btn": "Confirm",
      "error-username-exists": "This username already exists. Please choose another username.",
      "error-network": "Server connection failed. Please check your network and try again."
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
      "mobile-only-btn": "Tiếp tục trên PC",
      "success-signup-title": "Đăng ký thành công!",
      "success-signup-desc": "Đăng ký của bạn đã hoàn tất thành công. Vui lòng đóng cửa sổ này, quay lại màn hình trò chơi và đăng nhập.",
      "success-close-btn": "Xác nhận",
      "error-username-exists": "Tên tài khoản đã tồn tại. Vui lòng nhập tài khoản khác.",
      "error-network": "Kết nối máy chủ thất bại. Vui lòng kiểm tra mạng và thử lại."
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

  // --- Form Validation & Submission Logic ---
  const regForm = document.getElementById('register-form');
  const submitBtn = document.getElementById('reg-submit-btn-el');
  const inputUsername = document.getElementById('reg-username');
  const inputPassword = document.getElementById('reg-password');
  const inputConfirmPassword = document.getElementById('reg-confirm-password');
  const inputEmail = document.getElementById('reg-email');
  const errorBanner = document.getElementById('error-banner');
  const errorBannerText = document.getElementById('error-banner-text');
  const successPanel = document.getElementById('success-panel');
  const portraitTitle = document.getElementById('register-portrait-title');
  const cardBody = document.getElementById('register-card-body');

  function validateUsername(val) {
    return /^[a-zA-Z0-9]{6,12}$/.test(val);
  }

  function validatePassword(val) {
    if (val.length < 6 || val.length > 12) return false;
    let classes = 0;
    if (/[a-zA-Z]/.test(val)) classes++;
    if (/[0-9]/.test(val)) classes++;
    if (/[^a-zA-Z0-9]/.test(val)) classes++;
    return classes >= 2;
  }

  function validateEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  function updateFieldStatus(inputEl, isValid, isEmpty) {
    if (!inputEl) return;
    if (isEmpty) {
      inputEl.classList.remove('is-valid', 'is-invalid');
    } else if (isValid) {
      inputEl.classList.add('is-valid');
      inputEl.classList.remove('is-invalid');
    } else {
      inputEl.classList.add('is-invalid');
      inputEl.classList.remove('is-valid');
    }
  }

  function checkFormValidity() {
    if (!regForm || !submitBtn) return;
    
    const usernameVal = inputUsername.value;
    const passwordVal = inputPassword.value;
    const confirmPasswordVal = inputConfirmPassword.value;
    const emailVal = inputEmail.value;

    const uValid = validateUsername(usernameVal);
    const pValid = validatePassword(passwordVal);
    const cpValid = confirmPasswordVal === passwordVal && confirmPasswordVal !== '';
    const eValid = validateEmail(emailVal);

    // Update field colors dynamically (no v/x icons)
    updateFieldStatus(inputUsername, uValid, usernameVal === '');
    updateFieldStatus(inputPassword, pValid, passwordVal === '');
    updateFieldStatus(inputConfirmPassword, cpValid, confirmPasswordVal === '');
    updateFieldStatus(inputEmail, eValid, emailVal === '');

    if (uValid && pValid && cpValid && eValid) {
      submitBtn.removeAttribute('disabled');
    } else {
      submitBtn.setAttribute('disabled', 'true');
    }
  }

  // Attach real-time input event listeners for validation check
  [inputUsername, inputPassword, inputConfirmPassword, inputEmail].forEach(input => {
    if (input) {
      input.addEventListener('input', checkFormValidity);
    }
  });

  // Handle Form Submission with simulated API feedback
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Hide previous errors
      if (errorBanner) errorBanner.style.display = 'none';

      // Lock inputs and show loading state
      const inputs = [inputUsername, inputPassword, inputConfirmPassword, inputEmail];
      inputs.forEach(input => {
        if (input) input.setAttribute('disabled', 'true');
      });
      if (submitBtn) {
        submitBtn.classList.add('loading');
        submitBtn.setAttribute('disabled', 'true');
      }

      // Simulate API verification call (1.2 seconds latency)
      setTimeout(() => {
        const usernameVal = inputUsername.value.trim();
        const emailVal = inputEmail.value.trim().toLowerCase();
        const currentLang = localStorage.getItem('playcoc-guide-lang') || 'vi';

        // 1. Simulate duplicate username error
        if (usernameVal === 'admin123' || usernameVal === 'test1234') {
          // Unlock inputs and reset button loading
          inputs.forEach(input => {
            if (input) input.removeAttribute('disabled');
          });
          if (submitBtn) {
            submitBtn.classList.remove('loading');
            submitBtn.removeAttribute('disabled');
          }
          if (errorBanner && errorBannerText) {
            const errKey = 'error-username-exists';
            errorBannerText.innerHTML = translations[currentLang][errKey] || translations['vi'][errKey];
            errorBanner.style.display = 'flex';
          }
          return;
        }

        // 2. Simulate server/network error
        if (emailVal.includes('error') || emailVal.includes('fail')) {
          inputs.forEach(input => {
            if (input) input.removeAttribute('disabled');
          });
          if (submitBtn) {
            submitBtn.classList.remove('loading');
            submitBtn.removeAttribute('disabled');
          }
          if (errorBanner && errorBannerText) {
            const errKey = 'error-network';
            errorBannerText.innerHTML = translations[currentLang][errKey] || translations['vi'][errKey];
            errorBanner.style.display = 'flex';
          }
          return;
        }

        // 3. Success signup
        // 부드러운 화면 전환을 위해 fade-out 클래스 추가
        if (portraitTitle) portraitTitle.classList.add('fade-out-anim');
        if (cardBody) cardBody.classList.add('fade-out-anim');
        
        setTimeout(() => {
          if (portraitTitle) portraitTitle.style.display = 'none';
          if (cardBody) cardBody.style.display = 'none';
          if (successPanel) {
            successPanel.style.display = 'flex';
            successPanel.classList.add('fade-in-anim');
          }
        }, 300);

        // Setup Close Window Logic
        const closeBtn = document.getElementById('success-close-btn');
        if (closeBtn) {
          closeBtn.addEventListener('click', () => {
            // 가장 강력한 탭 닫기 로직 (보안 정책 우회 시도)
            window.open('about:blank', '_self').close();
            window.close();
            
            // 만약 브라우저 보안 정책으로 탭이 닫히지 않을 경우를 대비해
            // 안내 메시지(또는 이전 페이지 이동)로 대체하지 않고 빈 화면으로 두거나 그대로 유지합니다.
          });
        }

      }, 1200);
    });
  }

  // --- Password Toggle Visibility Logic (Synced for both fields) ---
  const passwordInputs = [document.getElementById('reg-password'), document.getElementById('reg-confirm-password')];
  const toggleButtons = document.querySelectorAll('.password-toggle-btn');

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const primaryInput = document.getElementById('reg-password');
      if (!primaryInput) return;
      
      const makeVisible = primaryInput.getAttribute('type') === 'password';

      passwordInputs.forEach(inputEl => {
        if (inputEl) {
          inputEl.setAttribute('type', makeVisible ? 'text' : 'password');
        }
      });

      toggleButtons.forEach(toggleBtn => {
        toggleBtn.innerHTML = makeVisible 
          ? '<i class="fa-solid fa-eye"></i>' 
          : '<i class="fa-solid fa-eye-slash"></i>';
      });
    });
  });
});
