document.addEventListener('DOMContentLoaded', () => {
  // Translations Dictionary
  const translations = {
    ko: {
      "header-badge": "안드로이드 전용 가이드",
      "intro-title": "APK 수동 설치 안내",
      "intro-subtitle": "구글 플레이 스토어 외부에서 다운로드한 APK 파일(게임)을 안전하고 빠르게 설치하는 3단계 안내 가이드입니다.",
      
      "hero-subtitle": "언제 어디서나 웹과 모바일로 최고의 카드 & 보드 게임을 즐겨보세요.",
      "hero-webgame-btn": "Webgame 시작하기",
      "hero-apk-btn": "APK 다운받기",
      "hero-cs-btn": "CS 문의하기",

      "step1-tag": "Step 1",
      "step1-title": "APK 파일 다운로드",
      "step1-body": "APK 다운로드 버튼을 누르면 파일 다운로드가 시작됩니다. 이때 발생하는 경고는 공식 스토어 외부 파일을 설치할 때 나타나는 <strong>안드로이드 시스템 기본 경고</strong>입니다.",
      "step1-alert-title": "안심하고 받으세요:",
      "step1-alert-body": "무결성이 검증된 안전한 파일이므로 안심하고 <strong>\"무시하고 다운로드\"</strong>를 누르시면 됩니다.",
      "btn-next-step1": "다음 단계 확인 <i class=\"fa-solid fa-arrow-right\"></i>",
      
      "step2-tag": "Step 2",
      "step2-title": "출처를 알 수 없는 앱 허용",
      "step2-body": "다운로드 완료 후 파일을 열면 보안 경고가 나타납니다. 해당 파일을 실행한 앱에 알 수 없는 앱 설치 권한이 허용되지 않았기 때문입니다.",
      "step2-alert-title": "실행한 앱에 따라 다릅니다:",
      "step2-alert-body": "다운로드 직후 브라우저에서 바로 열 때는 <strong>\"Chrome\"</strong> 권한을, 기기 내 파일 관리자 앱에서 따로 실행할 때는 <strong>\"내 파일\"</strong> 권한을 활성화해야 합니다.",
      "step2-list1": "경고 팝업에서 <strong class=\"color-highlight\">설정</strong>(Settings)을 누릅니다.",
      "step2-list2": "설정 창에서 <strong class=\"color-highlight\">이 소스 허용</strong>(Allow from this source) 토글 스위치를 활성화합니다.",
      "btn-prev": "이전",
      "btn-next-step2": "다음 단계 확인 <i class=\"fa-solid fa-arrow-right\"></i>",
      
      "step3-tag": "Step 3",
      "step3-title": "게임 설치 및 실행",
      "step3-body": "설치 권한을 허용한 뒤 돌아오면 앱 설치 팝업창이 나타납니다. 아래 절차에 따라 설치를 완료해 주세요.",
      "step3-list1": "팝업창에서 <strong class=\"color-highlight\">설치</strong>(Install) 버튼을 탭합니다.",
      "step3-list2": "설치가 완료되면 <strong class=\"color-highlight\">열기</strong>(Open) 버튼을 눌러 게임을 실행합니다.",
      "step3-alert": "설치가 모두 끝났습니다! 이제 언제든 자유롭게 게임을 실행해 플레이하실 수 있습니다.",
      "btn-prev-step": "이전 단계",
      "btn-restart": "<i class=\"fa-solid fa-rotate-left\"></i> 처음부터 다시 보기",
      "footer-text": "&copy; 2026 PLAYCOC. All Rights Reserved. 본 페이지는 크롬 및 안드로이드 공식 설치 규격을 기반으로 작성되었습니다."
    },
    en: {
      "header-badge": "Android Guide Only",
      "intro-title": "APK Manual Installation Guide",
      "intro-subtitle": "A simple 3-step guide to safely and quickly install game files (APKs) downloaded outside the Google Play Store.",
      
      "hero-subtitle": "Enjoy the best card and board games on web and mobile anytime, anywhere.",
      "hero-webgame-btn": "Launch Web Game",
      "hero-apk-btn": "Download APK",
      "hero-cs-btn": "CS Inquiry",

      "step1-tag": "Step 1",
      "step1-title": "Download APK File",
      "step1-body": "Tapping the download button starts the file download. The warning popup is a <strong>default Android system warning</strong> displayed when downloading from non-official stores.",
      "step1-alert-title": "Download Safely:",
      "step1-alert-body": "The APK file is safe and verified, so you can click <strong>\"Download anyway\"</strong> without worry.",
      "btn-next-step1": "Next Step <i class=\"fa-solid fa-arrow-right\"></i>",
      
      "step2-tag": "Step 2",
      "step2-title": "Allow Unknown Sources",
      "step2-body": "A security warning appears when you open the downloaded file. This happens because the app that runs the file does not have permission to install unknown apps.",
      "step2-alert-title": "Depends on the App Used:",
      "step2-alert-body": "If opened directly in the browser, allow <strong>\"Chrome\"</strong>. If run from the device downloads folder later, allow <strong>\"My Files\"</strong> (File Manager).",
      "step2-list1": "Tap <strong class=\"color-highlight\">Settings</strong> in the warning popup.",
      "step2-list2": "In the settings page, enable the <strong class=\"color-highlight\">Allow from this source</strong> toggle switch.",
      "btn-prev": "Back",
      "btn-next-step2": "Next Step <i class=\"fa-solid fa-arrow-right\"></i>",
      
      "step3-tag": "Step 3",
      "step3-title": "Install & Launch Game",
      "step3-body": "After granting permission, return to find the installation popup. Follow the steps below to finish installing.",
      "step3-list1": "Tap the <strong class=\"color-highlight\">Install</strong> button in the popup.",
      "step3-list2": "Once installed, tap the <strong class=\"color-highlight\">Open</strong> button to launch the game.",
      "step3-alert": "Installation complete! You are now ready to play and enjoy the game.",
      "btn-prev-step": "Previous",
      "btn-restart": "<i class=\"fa-solid fa-rotate-left\"></i> Restart Guide",
      "footer-text": "&copy; 2026 PLAYCOC. All Rights Reserved. This page is written based on Chrome and Android official installation standards."
    },
    vi: {
      "header-badge": "Hướng dẫn Android",
      "intro-title": "Cài đặt APK thủ công",
      "intro-subtitle": "Hướng dẫn 3 bước đơn giản để cài đặt tệp game (APK) tải xuống ngoài Google Play Store một cách an toàn và nhanh chóng.",
      
      "hero-subtitle": "Trải nghiệm các trò chơi bài và cờ phổ biến trên web và di động mọi lúc, mọi nơi.",
      "hero-webgame-btn": "Chơi Web Game",
      "hero-apk-btn": "Tải xuống APK",
      "hero-cs-btn": "Hỗ trợ khách hàng",

      "step1-tag": "Bước 1",
      "step1-title": "Tải xuống tệp APK",
      "step1-body": "Nhấn vào nút tải xuống để bắt đầu tải tệp. Cảnh báo xuất hiện là <strong>cảnh báo hệ thống mặc định của Android</strong> khi cài đặt từ các nguồn ngoài cửa hàng chính thức.",
      "step1-alert-title": "Tải xuống an toàn:",
      "step1-alert-body": "Tệp APK đã được xác minh an toàn, vì vậy bạn có thể yên tâm nhấp vào <strong>\"Vẫn tải xuống\"</strong>.",
      "btn-next-step1": "Bước tiếp theo <i class=\"fa-solid fa-arrow-right\"></i>",
      
      "step2-tag": "Bước 2",
      "step2-title": "Cho phép ứng dụng không xác định",
      "step2-body": "Cảnh báo bảo mật xuất hiện khi bạn mở tệp đã tải xuống. Điều này xảy ra do ứng dụng chạy tệp chưa được cấp quyền cài đặt ứng dụng không rõ nguồn gốc.",
      "step2-alert-title": "Tùy thuộc vào ứng dụng đã sử dụng:",
      "step2-alert-body": "Nếu mở trực tiếp trên trình duyệt, hãy cấp quyền cho <strong>\"Chrome\"</strong>. Nếu chạy từ thư mục tải xuống sau đó, hãy cấp quyền cho <strong>\"Tệp của bạn\"</strong> (Trình quản lý tệp).",
      "step2-list1": "Nhấn vào <strong class=\"color-highlight\">Cài đặt</strong> (Settings) trong hộp thoại cảnh báo.",
      "step2-list2": "Trong trang cài đặt, hãy bật công tắc <strong class=\"color-highlight\">Cho phép từ nguồn này</strong> (Allow from this source).",
      "btn-prev": "Quay lại",
      "btn-next-step2": "Bước tiếp theo <i class=\"fa-solid fa-arrow-right\"></i>",
      
      "step3-tag": "Bước 3",
      "step3-title": "Cài đặt & Chạy trò chơi",
      "step3-body": "Sau khi cấp quyền, quay lại sẽ thấy hộp thoại cài đặt. Làm theo các bước dưới đây để hoàn tất cài đặt.",
      "step3-list1": "Nhấn vào nút <strong class=\"color-highlight\">Cài đặt</strong> (Install) trong hộp thoại.",
      "step3-list2": "Khi đã cài đặt xong, nhấn nút <strong class=\"color-highlight\">Mở</strong> (Open) để bắt đầu trò chơi.",
      "step3-alert": "Cài đặt hoàn tất! Bạn đã sẵn sàng để trải nghiệm trò chơi.",
      "btn-prev-step": "Bước trước",
      "btn-restart": "<i class=\"fa-solid fa-rotate-left\"></i> Xem lại từ đầu",
      "footer-text": "&copy; 2026 PLAYCOC. All Rights Reserved. Trang này được thiết kế dựa trên tiêu chuẩn cài đặt của Chrome và Android."
    }
  };

  // Elements
  const stepCards = document.querySelectorAll('.step-card');
  const langSelect = document.getElementById('lang-select');
  
  // Global controls
  const nextBtns = document.querySelectorAll('.next-step-btn');
  const prevBtns = document.querySelectorAll('.prev-step-btn');
  const restartBtn = document.getElementById('btn-restart');
  const btnScrollToGuide = document.getElementById('btn-scroll-to-guide');

  let currentStep = 1;

  // --- Multi-language Translation Logic ---
  function setLanguage(lang) {
    const selectedTranslations = translations[lang] || translations['ko'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (selectedTranslations[key]) {
        el.innerHTML = selectedTranslations[key];
      }
    });
    
    // Save selection
    localStorage.setItem('playcoc-guide-lang', lang);
    langSelect.value = lang;
  }

  // Load language from storage or default to 'ko'
  const savedLang = localStorage.getItem('playcoc-guide-lang') || 'ko';
  setLanguage(savedLang);

  // Bind change event
  langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });

  // --- Navigation logic ---
  function changeStep(stepNumber, shouldScroll = true) {
    currentStep = parseInt(stepNumber);
    
    // Update step cards
    stepCards.forEach(card => {
      const cardStep = parseInt(card.getAttribute('data-step'));
      if (cardStep === currentStep) {
        card.classList.add('active');
        
        if (shouldScroll) {
          // Smooth scroll to the top of card (respecting scroll-margin-top offset)
          // Delayed to 200ms to let the previous card collapse first, preventing y-axis overflow
          setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 250);
        }
      } else {
        card.classList.remove('active');
      }
    });
  }

  // Bind click on step cards
  stepCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't change step if clicking on action buttons inside the card
      if (e.target.closest('.step-actions') || e.target.closest('button')) {
        return;
      }
      const step = card.getAttribute('data-step');
      changeStep(step);
    });
  });

  // Next / Prev button triggers
  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const next = btn.getAttribute('data-next');
      changeStep(next);
    });
  });

  // Prev button triggers
  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const prev = btn.getAttribute('data-prev');
      changeStep(prev);
    });
  });

  // --- Scroll & Reset Step ---
  if (btnScrollToGuide) {
    btnScrollToGuide.addEventListener('click', (e) => {
      e.preventDefault();
      const guideSection = document.getElementById('apk-guide-section');
      if (guideSection) {
        guideSection.scrollIntoView({ behavior: 'smooth' });
        // Auto-select and show Step 1, but do not trigger card scroll to avoid conflict
        changeStep(1, false);
      }
    });
  }

  // --- RESTART/RESET SYSTEM ---
  restartBtn.addEventListener('click', () => {
    // Change back to step 1
    changeStep(1);
  });
});
