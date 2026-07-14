document.addEventListener('DOMContentLoaded', () => {
  // Translations Dictionary
  const translations = {
    ko: {
      "footer-slogan": "언제나 당신을 위해 최고의 제품을 만드는 곳",
      "footer-policy-link": "개인정보처리방침",
      "footer-qna-link": "자주 묻는 질문 (Q&A)",
      "register-title": "회원가입 (단계별 검증)",
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
      "success-signup-desc": "PLAYCOC 회원이 되신 것을 환영합니다. 잠시 후 메인 화면으로 이동합니다.",
      "error-username-exists": "이미 존재하는 아이디입니다. 다른 아이디를 입력해 주세요.",
      "error-network": "서버 연결에 실패했습니다. 네트워크 상태를 확인 후 다시 시도해 주세요.",
      
      // Step-specific messages
      "msg-username-checking": "아이디 중복 검사 중...",
      "msg-username-ok": "사용 가능한 아이디입니다.",
      "msg-username-fail": "이미 존재하는 아이디입니다.",
      "msg-password-ok": "적합한 비밀번호입니다.",
      "msg-password-fail": "영문/숫자/특수문자 중 2가지 이상 조합, 6~12자여야 합니다.",
      "msg-confirm-ok": "비밀번호가 일치합니다.",
      "msg-confirm-fail": "비밀번호가 일치하지 않습니다.",
      "msg-email-ok": "올바른 이메일 형식입니다.",
      "msg-email-fail": "올바르지 않은 이메일 형식입니다.",
      "step-next-btn": "다음"
    },
    en: {
      "footer-slogan": "The place that always creates the best products for you",
      "footer-policy-link": "Privacy Policy",
      "footer-qna-link": "Q&A (FAQ)",
      "register-title": "Register (Step Validation)",
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
      "success-signup-desc": "Welcome to PLAYCOC. You will be redirected to the homepage in a few seconds.",
      "error-username-exists": "This username already exists. Please choose another username.",
      "error-network": "Server connection failed. Please check your network and try again.",
      
      // Step-specific messages
      "msg-username-checking": "Checking username availability...",
      "msg-username-ok": "Username is available.",
      "msg-username-fail": "Username is already taken.",
      "msg-password-ok": "Password is valid.",
      "msg-password-fail": "Must be 6-12 chars with 2+ types (letters/numbers/specials).",
      "msg-confirm-ok": "Passwords match.",
      "msg-confirm-fail": "Passwords do not match.",
      "msg-email-ok": "Email address is valid.",
      "msg-email-fail": "Invalid email address format.",
      "step-next-btn": "Next"
    },
    vi: {
      "footer-slogan": "Nơi luôn tạo ra những sản phẩm đỉnh nhất dành cho bạn",
      "footer-policy-link": "Chính sách bảo mật",
      "footer-qna-link": "Hỏi & Đáp (Q&A)",
      "register-title": "Đăng ký (Từng bước)",
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
      "success-signup-desc": "Chào mừng bạn gia nhập PLAYCOC. Trang web sẽ tự động chuyển về trang chủ sau vài giây.",
      "error-username-exists": "Tên tài khoản đã tồn tại. Vui lòng nhập tài khoản khác.",
      "error-network": "Kết nối máy chủ thất bại. Vui lòng kiểm tra mạng và thử lại.",
      
      // Step-specific messages
      "msg-username-checking": "Đang kiểm tra tài khoản khả dụng...",
      "msg-username-ok": "Tên tài khoản khả dụng.",
      "msg-username-fail": "Tên tài khoản đã được sử dụng.",
      "msg-password-ok": "Mật khẩu hợp lệ.",
      "msg-password-fail": "Phải từ 6~12 ký tự, kết hợp 2 nhóm trở lên.",
      "msg-confirm-ok": "Mật khẩu trùng khớp.",
      "msg-confirm-fail": "Mật khẩu xác nhận không khớp.",
      "msg-email-ok": "Địa chỉ e-mail hợp lệ.",
      "msg-email-fail": "Địa chỉ e-mail không hợp lệ.",
      "step-next-btn": "Tiếp theo"
    }
  };

  // Elements for Language Toggle
  const langTrigger = document.getElementById('lang-trigger');
  const langDropdown = document.getElementById('lang-dropdown');
  const langSelectorWrap = document.getElementById('lang-selector-wrap');
  const langOptions = document.querySelectorAll('.lang-option');
  const currentFlag = document.getElementById('current-flag');
  const currentLangText = document.getElementById('current-lang-text');

  const flagUrls = {
    en: "https://flagcdn.com/w20/us.png",
    vi: "https://flagcdn.com/w20/vn.png"
  };

  const langNames = {
    en: "English",
    vi: "Tiếng Việt"
  };

  langTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    langSelectorWrap.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    langSelectorWrap.classList.remove('open');
  });

  langOptions.forEach(option => {
    option.addEventListener('click', () => {
      const langValue = option.getAttribute('data-value');
      setLanguage(langValue);
      langSelectorWrap.classList.remove('open');
    });
  });

  function setLanguage(lang) {
    localStorage.setItem('playcoc-guide-lang', lang);
    const selectedTranslations = translations[lang] || translations['vi'];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (selectedTranslations[key]) {
        el.innerHTML = selectedTranslations[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (selectedTranslations[key]) {
        el.setAttribute('placeholder', selectedTranslations[key]);
      }
    });

    currentFlag.src = flagUrls[lang] || flagUrls['vi'];
    currentFlag.alt = lang.toUpperCase();
    currentLangText.textContent = langNames[lang] || langNames['vi'];

    // Rerun check to refresh messages in the active language
    checkFormValidity();
  }

  // Set initial language
  const savedLang = localStorage.getItem('playcoc-guide-lang') || 'vi';
  setLanguage(savedLang);

  // Set Current Footer Year
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

  // --- Synced Password Toggle Visibility ---
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

  // --- Step-by-Step Form Logic ---
  const regForm = document.getElementById('register-form');
  const submitBtn = document.getElementById('reg-submit-btn-el');
  const inputUsername = document.getElementById('reg-username');
  const inputPassword = document.getElementById('reg-password');
  const inputConfirmPassword = document.getElementById('reg-confirm-password');
  const inputEmail = document.getElementById('reg-email');

  const wrapUsername = document.getElementById('wrap-username');
  const wrapPassword = document.getElementById('wrap-password');
  const wrapConfirm = document.getElementById('wrap-confirm');
  const wrapEmail = document.getElementById('wrap-email');

  const msgUsername = document.getElementById('msg-username');
  const msgPassword = document.getElementById('msg-password');
  const msgConfirm = document.getElementById('msg-confirm');
  const msgEmail = document.getElementById('msg-email');

  const btnNextUsername = document.getElementById('btn-next-username');
  const btnNextPassword = document.getElementById('btn-next-password');
  const btnNextConfirm = document.getElementById('btn-next-confirm');

  const errorBanner = document.getElementById('error-banner');
  const errorBannerText = document.getElementById('error-banner-text');
  const successPanel = document.getElementById('success-panel');
  const portraitTitle = document.getElementById('register-portrait-title');
  const cardBody = document.getElementById('register-card-body');

  let usernameDebounceTimer = null;
  let usernameCheckedStatus = 'none'; // 'none', 'checking', 'valid', 'invalid'

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

  function setFieldValid(inputEl, msgEl, msgKey) {
    if (!inputEl) return;
    inputEl.classList.remove('is-invalid', 'is-checking');
    inputEl.classList.add('is-valid');
    if (msgEl) {
      msgEl.className = 'step-field-message success-message';
      const lang = localStorage.getItem('playcoc-guide-lang') || 'vi';
      msgEl.innerHTML = translations[lang][msgKey] || translations['vi'][msgKey] || '';
    }
  }

  function setFieldInvalid(inputEl, msgEl, msgKey) {
    if (!inputEl) return;
    inputEl.classList.remove('is-valid', 'is-checking');
    inputEl.classList.add('is-invalid');
    if (msgEl) {
      msgEl.className = 'step-field-message error-message';
      const lang = localStorage.getItem('playcoc-guide-lang') || 'vi';
      msgEl.innerHTML = translations[lang][msgKey] || translations['vi'][msgKey] || '';
    }
  }

  function setFieldChecking(inputEl, msgEl, msgKey) {
    if (!inputEl) return;
    inputEl.classList.remove('is-valid', 'is-invalid');
    inputEl.classList.add('is-checking');
    if (msgEl) {
      msgEl.className = 'step-field-message checking-message';
      const lang = localStorage.getItem('playcoc-guide-lang') || 'vi';
      msgEl.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${translations[lang][msgKey] || translations['vi'][msgKey] || ''}`;
    }
  }

  function clearFieldStatus(inputEl, msgEl) {
    if (!inputEl) return;
    inputEl.classList.remove('is-valid', 'is-invalid', 'is-checking');
    if (msgEl) {
      msgEl.className = 'step-field-message';
      msgEl.innerHTML = '';
    }
  }

  function checkFormValidity() {
    const lang = localStorage.getItem('playcoc-guide-lang') || 'vi';
    
    // 1. Username Step Validation
    const usernameVal = inputUsername.value.trim();
    if (usernameVal === '') {
      clearFieldStatus(inputUsername, msgUsername);
      usernameCheckedStatus = 'none';
      if (btnNextUsername) btnNextUsername.setAttribute('disabled', 'true');
      wrapPassword.classList.remove('active');
      wrapConfirm.classList.remove('active');
      wrapEmail.classList.remove('active');
      submitBtn.classList.remove('active');
      submitBtn.setAttribute('disabled', 'true');
      return;
    }

    if (!validateUsername(usernameVal)) {
      setFieldInvalid(inputUsername, msgUsername, 'msg-username-fail');
      usernameCheckedStatus = 'invalid';
      if (btnNextUsername) btnNextUsername.setAttribute('disabled', 'true');
      wrapPassword.classList.remove('active');
      wrapConfirm.classList.remove('active');
      wrapEmail.classList.remove('active');
      submitBtn.classList.remove('active');
      submitBtn.setAttribute('disabled', 'true');
      return;
    }

    // Debounced AJAX Username Check Simulation
    if (usernameCheckedStatus === 'none') {
      usernameCheckedStatus = 'checking';
      setFieldChecking(inputUsername, msgUsername, 'msg-username-checking');
      if (btnNextUsername) btnNextUsername.setAttribute('disabled', 'true');
      
      if (usernameDebounceTimer) clearTimeout(usernameDebounceTimer);
      usernameDebounceTimer = setTimeout(() => {
        if (usernameVal === 'admin123' || usernameVal === 'test1234') {
          setFieldInvalid(inputUsername, msgUsername, 'msg-username-fail');
          usernameCheckedStatus = 'invalid';
          if (btnNextUsername) btnNextUsername.setAttribute('disabled', 'true');
        } else {
          setFieldValid(inputUsername, msgUsername, 'msg-username-ok');
          usernameCheckedStatus = 'valid';
          if (btnNextUsername) btnNextUsername.removeAttribute('disabled');
        }
      }, 700);
      return;
    }

    if (usernameCheckedStatus === 'invalid' || usernameCheckedStatus === 'checking') {
      if (btnNextUsername) btnNextUsername.setAttribute('disabled', 'true');
      return;
    }

    if (usernameCheckedStatus === 'valid') {
      if (btnNextUsername) btnNextUsername.removeAttribute('disabled');
    }

    // 2. Password Step Validation
    const passwordVal = inputPassword.value;
    if (passwordVal === '') {
      clearFieldStatus(inputPassword, msgPassword);
      if (btnNextPassword) btnNextPassword.setAttribute('disabled', 'true');
      wrapConfirm.classList.remove('active');
      wrapEmail.classList.remove('active');
      submitBtn.classList.remove('active');
      submitBtn.setAttribute('disabled', 'true');
      return;
    }

    if (!validatePassword(passwordVal)) {
      setFieldInvalid(inputPassword, msgPassword, 'msg-password-fail');
      if (btnNextPassword) btnNextPassword.setAttribute('disabled', 'true');
      wrapConfirm.classList.remove('active');
      wrapEmail.classList.remove('active');
      submitBtn.classList.remove('active');
      submitBtn.setAttribute('disabled', 'true');
      return;
    }

    setFieldValid(inputPassword, msgPassword, 'msg-password-ok');
    if (btnNextPassword) btnNextPassword.removeAttribute('disabled');

    // 3. Confirm Password Step Validation
    const confirmVal = inputConfirmPassword.value;
    if (confirmVal === '') {
      clearFieldStatus(inputConfirmPassword, msgConfirm);
      if (btnNextConfirm) btnNextConfirm.setAttribute('disabled', 'true');
      wrapEmail.classList.remove('active');
      submitBtn.classList.remove('active');
      submitBtn.setAttribute('disabled', 'true');
      return;
    }

    if (confirmVal !== passwordVal) {
      setFieldInvalid(inputConfirmPassword, msgConfirm, 'msg-confirm-fail');
      if (btnNextConfirm) btnNextConfirm.setAttribute('disabled', 'true');
      wrapEmail.classList.remove('active');
      submitBtn.classList.remove('active');
      submitBtn.setAttribute('disabled', 'true');
      return;
    }

    setFieldValid(inputConfirmPassword, msgConfirm, 'msg-confirm-ok');
    if (btnNextConfirm) btnNextConfirm.removeAttribute('disabled');

    // 4. Email Step Validation
    const emailVal = inputEmail.value.trim();
    if (emailVal === '') {
      clearFieldStatus(inputEmail, msgEmail);
      submitBtn.classList.remove('active');
      submitBtn.setAttribute('disabled', 'true');
      return;
    }

    if (!validateEmail(emailVal)) {
      setFieldInvalid(inputEmail, msgEmail, 'msg-email-fail');
      submitBtn.classList.remove('active');
      submitBtn.setAttribute('disabled', 'true');
      return;
    }

    setFieldValid(inputEmail, msgEmail, 'msg-email-ok');
    
    // Activate & Focus Submit
    submitBtn.classList.add('active');
    submitBtn.removeAttribute('disabled');
  }

  // --- Button Navigation Listeners ---
  if (btnNextUsername) {
    btnNextUsername.addEventListener('click', () => {
      if (usernameCheckedStatus === 'valid') {
        wrapPassword.classList.add('active');
        setTimeout(() => {
          inputPassword.focus();
        }, 400);
      }
    });
  }

  if (btnNextPassword) {
    btnNextPassword.addEventListener('click', () => {
      const passwordVal = inputPassword.value;
      if (validatePassword(passwordVal)) {
        wrapConfirm.classList.add('active');
        setTimeout(() => {
          inputConfirmPassword.focus();
        }, 400);
      }
    });
  }

  if (btnNextConfirm) {
    btnNextConfirm.addEventListener('click', () => {
      const confirmVal = inputConfirmPassword.value;
      const passwordVal = inputPassword.value;
      if (confirmVal === passwordVal && confirmVal !== '') {
        wrapEmail.classList.add('active');
        setTimeout(() => {
          inputEmail.focus();
        }, 400);
      }
    });
  }

  // --- Keyboard Press Enter Navigation Listeners ---
  inputUsername.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (btnNextUsername && !btnNextUsername.disabled) {
        btnNextUsername.click();
      }
    }
  });

  inputPassword.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (btnNextPassword && !btnNextPassword.disabled) {
        btnNextPassword.click();
      }
    }
  });

  inputConfirmPassword.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (btnNextConfirm && !btnNextConfirm.disabled) {
        btnNextConfirm.click();
      }
    }
  });

  inputEmail.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (submitBtn.disabled) {
        e.preventDefault();
      }
    }
  });

  // Attach event listeners for real-time input change checks
  inputUsername.addEventListener('input', () => {
    usernameCheckedStatus = 'none'; // reset check on input change
    checkFormValidity();
  });
  inputPassword.addEventListener('input', checkFormValidity);
  inputConfirmPassword.addEventListener('input', checkFormValidity);
  inputEmail.addEventListener('input', checkFormValidity);

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

  // Handle Form Submission with simulated API feedback
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
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

        // 1. Simulate duplicate username error (double check)
        if (usernameVal === 'admin123' || usernameVal === 'test1234') {
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
        if (portraitTitle) portraitTitle.style.display = 'none';
        if (cardBody) cardBody.style.display = 'none';
        if (successPanel) successPanel.style.display = 'flex';

        // Redirect to main page after 2.5 seconds
        setTimeout(() => {
          window.location.href = '../../index.html';
        }, 2500);

      }, 1200);
    });
  }
});
