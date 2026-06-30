document.addEventListener('DOMContentLoaded', () => {
  // Translations Dictionary
  const translations = {
    ko: {
      "header-badge": "안드로이드 전용 가이드",
      "intro-title": "APK 수동 설치 안내",
      "intro-subtitle": "구글 스토어 외부에서 다운로드받은 게임(APK)을 안전하고 빠르게 설치하기 위한 3단계 안내 가이드입니다.",
      
      "step1-tag": "Step 1",
      "step1-title": "APK 파일 다운로드",
      "step1-body": "다운로드 링크를 탭하면 파일 다운로드가 시작됩니다. 이때 나타나는 경고 창은 공식 플레이스토어 이외의 채널로 설치할 때 표시되는 <strong>안드로이드 기본 경고</strong>입니다.",
      "step1-alert-title": "안심하고 받으세요:",
      "step1-alert-body": "Playcoc APK는 무결성이 인증된 안전한 파일이므로 <strong>\"무시하고 다운로드\"</strong>를 누르시면 됩니다.",
      "btn-next-step1": "다음 단계 확인 <i class=\"fa-solid fa-arrow-right\"></i>",
      
      "step2-tag": "Step 2",
      "step2-title": "출처를 알 수 없는 앱 허용",
      "step2-body": "다운로드가 끝나고 파일을 열면 보안 경고가 발생합니다. 브라우저(크롬)에 앱 설치 권한이 부여되지 않았기 때문입니다.",
      "step2-list1": "경고 팝업에서 <strong class=\"color-highlight\">설정</strong>(Settings)을 누릅니다.",
      "step2-list2": "보안 설정 창에서 <strong class=\"color-highlight\">이 소스 허용</strong>(Allow from this source) 토글 스위치를 활성화합니다.",
      "btn-prev": "이전",
      "btn-next-step2": "다음 단계 확인 <i class=\"fa-solid fa-arrow-right\"></i>",
      
      "step3-tag": "Step 3",
      "step3-title": "게임 설치 및 실행",
      "step3-body": "권한 허용 후 돌아오면 앱 설치를 묻는 팝업창이 나타납니다. 최종 설치 및 플레이를 완료하세요.",
      "step3-list1": "설치 확인 창에서 <strong class=\"color-highlight\">설치</strong>(Install) 버튼을 탭합니다.",
      "step3-list2": "설치가 완료된 뒤 <strong class=\"color-highlight\">열기</strong>(Open) 버튼을 누르면 정상적으로 게임이 시작됩니다!",
      "step3-alert": "설치가 완료되었습니다! 이제 자유롭게 게임을 이용하실 수 있습니다.",
      "btn-prev-step": "이전 단계",
      "btn-restart": "<i class=\"fa-solid fa-rotate-left\"></i> 처음부터 다시 보기",
      
      "sim-game-title": "Playcoc Mobile",
      "sim-game-subtitle": "Casual Card & Board Game",
      "mock-dl-text": "APK 다운로드",
      "warn-title": "파일이 유해할 수 있음",
      "warn-desc": "playcoc_game.apk 파일은 유해할 수 있습니다. 출처가 확실하지 않은 파일은 유해할 수 있으므로 신중하게 판단해야 합니다.",
      "btn-cancel": "취소",
      "btn-dl-anyway": "무시하고 다운로드",
      "toast-progress": "파일 다운로드 중...",
      "toast-complete": "파일 다운로드 완료",
      "btn-open": "열기",
      
      "sec-title": "보안 경고",
      "sec-desc": "보안을 위해 이 소스의 알 수 없는 앱을 휴대전화에 설치할 수 없습니다.",
      "btn-settings": "설정",
      
      "settings-title": "알 수 없는 앱 설치",
      "settings-version": "버전 120.0.6099.144",
      "settings-allow": "이 소스 허용",
      "settings-allow-desc": "이 소스를 허용하면 휴대전화 및 데이터가 공격에 노출될 수 있습니다. 이 앱을 설치함으로써 발생하는 기기 손상이나 데이터 손실에 대한 책임은 사용자에게 있습니다.",
      
      "install-question": "이 앱을 설치하시겠습니까?",
      "btn-install": "설치",
      "installing-title": "설치 중...",
      "installed-title": "앱이 설치되었습니다.",
      "btn-done": "완료",
      "splash-loading": "게임을 불러오는 중...",
      "sim-hint": "가상 스마트폰 화면을 직접 조작해 단계를 실습해보세요!",
      "footer-text": "&copy; 2026 PLAYCOC. All Rights Reserved. 본 페이지는 크롬 및 안드로이드 공식 설치 규격을 기반으로 작성되었습니다."
    },
    en: {
      "header-badge": "Android Guide Only",
      "intro-title": "APK Manual Installation Guide",
      "intro-subtitle": "A 3-step guide to safely and quickly install games (APKs) downloaded outside the Google Play Store.",
      
      "step1-tag": "Step 1",
      "step1-title": "Download APK File",
      "step1-body": "Tap the download link to start downloading. The warning window that appears is a <strong>default Android warning</strong> displayed when installing from other channels than the official Play Store.",
      "step1-alert-title": "Download Safely:",
      "step1-alert-body": "The Playcoc APK is a safe file with certified integrity, so you can click <strong>\"Download anyway\"</strong>.",
      "btn-next-step1": "Next Step <i class=\"fa-solid fa-arrow-right\"></i>",
      
      "step2-tag": "Step 2",
      "step2-title": "Allow Unknown Sources",
      "step2-body": "When the download is finished and you open the file, a security warning occurs because Chrome does not have permission to install apps.",
      "step2-list1": "Tap <strong class=\"color-highlight\">Settings</strong> in the warning popup.",
      "step2-list2": "Enable the <strong class=\"color-highlight\">Allow from this source</strong> toggle switch in the security settings page.",
      "btn-prev": "Back",
      "btn-next-step2": "Next Step <i class=\"fa-solid fa-arrow-right\"></i>",
      
      "step3-tag": "Step 3",
      "step3-title": "Install & Launch Game",
      "step3-body": "Returning after granting permission displays a popup asking to install the app. Complete the installation and start playing.",
      "step3-list1": "Tap the <strong class=\"color-highlight\">Install</strong> button in the confirmation window.",
      "step3-list2": "After installation, tap the <strong class=\"color-highlight\">Open</strong> button to start the game!",
      "step3-alert": "Installation completed! You can now play the game freely.",
      "btn-prev-step": "Previous",
      "btn-restart": "<i class=\"fa-solid fa-rotate-left\"></i> Restart Guide",
      
      "sim-game-title": "Playcoc Mobile",
      "sim-game-subtitle": "Casual Card & Board Game",
      "mock-dl-text": "APK Download",
      "warn-title": "File might be harmful",
      "warn-desc": "The file playcoc_game.apk might be harmful. Files from unknown sources might be harmful, so decide carefully.",
      "btn-cancel": "Cancel",
      "btn-dl-anyway": "Download anyway",
      "toast-progress": "Downloading file...",
      "toast-complete": "Download completed",
      "btn-open": "Open",
      
      "sec-title": "Security Warning",
      "sec-desc": "For your security, your phone is not allowed to install unknown apps from this source.",
      "btn-settings": "Settings",
      
      "settings-title": "Install unknown apps",
      "settings-version": "Version 120.0.6099.144",
      "settings-allow": "Allow from this source",
      "settings-allow-desc": "Allowing this source might put your phone and data at risk. You are responsible for any damage or loss of data resulting from installing this app.",
      
      "install-question": "Do you want to install this app?",
      "btn-install": "Install",
      "installing-title": "Installing...",
      "installed-title": "App installed.",
      "btn-done": "Done",
      "splash-loading": "Loading game...",
      "sim-hint": "Control the virtual smartphone directly to practice the steps!",
      "footer-text": "&copy; 2026 PLAYCOC. All Rights Reserved. This page is written based on Chrome and Android official installation standards."
    },
    vi: {
      "header-badge": "Hướng dẫn Android",
      "intro-title": "Cài đặt APK thủ công",
      "intro-subtitle": "Hướng dẫn 3 bước để cài đặt trò chơi (APK) tải xuống ngoài Google Play Store một cách an toàn và nhanh chóng.",
      
      "step1-tag": "Bước 1",
      "step1-title": "Tải xuống tệp APK",
      "step1-body": "Nhấn vào liên kết tải xuống để bắt đầu tải tệp. Cửa sổ cảnh báo xuất hiện là <strong>cảnh báo mặc định của Android</strong> khi cài đặt từ các nguồn khác ngoài Play Store chính thức.",
      "step1-alert-title": "Tải xuống an toàn:",
      "step1-alert-body": "APK Playcoc là một tệp an toàn đã được chứng nhận tính toàn vẹn, vì vậy bạn có thể nhấp vào <strong>\"Vẫn tải xuống\"</strong>.",
      "btn-next-step1": "Bước tiếp theo <i class=\"fa-solid fa-arrow-right\"></i>",
      
      "step2-tag": "Bước 2",
      "step2-title": "Cho phép ứng dụng không xác định",
      "step2-body": "Khi quá trình tải xuống hoàn tất và bạn mở tệp, cảnh báo bảo mật sẽ xuất hiện vì Chrome chưa được cấp quyền cài đặt ứng dụng.",
      "step2-list1": "Nhấn vào <strong class=\"color-highlight\">Cài đặt</strong> (Settings) trong hộp thoại cảnh báo.",
      "step2-list2": "Bật công tắc <strong class=\"color-highlight\">Cho phép từ nguồn này</strong> (Allow from this source) trong cài đặt bảo mật.",
      "btn-prev": "Quay lại",
      "btn-next-step2": "Bước tiếp theo <i class=\"fa-solid fa-arrow-right\"></i>",
      
      "step3-tag": "Bước 3",
      "step3-title": "Cài đặt & Chạy trò chơi",
      "step3-body": "Sau khi cấp quyền và quay lại, một cửa sổ bật lên yêu cầu cài đặt ứng dụng sẽ xuất hiện. Hoàn tất cài đặt và bắt đầu chơi.",
      "step3-list1": "Nhấn vào nút <strong class=\"color-highlight\">Cài đặt</strong> (Install) trong cửa sổ xác nhận.",
      "step3-list2": "Sau khi cài đặt xong, nhấn nút <strong class=\"color-highlight\">Mở</strong> (Open) để bắt đầu trò chơi!",
      "step3-alert": "Cài đặt hoàn tất! Bây giờ bạn có thể chơi game tự do.",
      "btn-prev-step": "Bước trước",
      "btn-restart": "<i class=\"fa-solid fa-rotate-left\"></i> Xem lại từ đầu",
      
      "sim-game-title": "Playcoc Mobile",
      "sim-game-subtitle": "Trò chơi bài & cờ phổ biến",
      "mock-dl-text": "Tải xuống APK",
      "warn-title": "Tệp có thể gây hại",
      "warn-desc": "Tệp playcoc_game.apk có thể gây hại. Các tệp từ nguồn không xác định có thể gây hại, vui lòng cân nhắc kỹ.",
      "btn-cancel": "Hủy",
      "btn-dl-anyway": "Vẫn tải xuống",
      "toast-progress": "Đang tải xuống tệp...",
      "toast-complete": "Tải xuống hoàn tất",
      "btn-open": "Mở",
      
      "sec-title": "Cảnh báo bảo mật",
      "sec-desc": "Vì lý do bảo mật, điện thoại của bạn không được phép cài đặt các ứng dụng không rõ nguồn gốc từ nguồn này.",
      "btn-settings": "Cài đặt",
      
      "settings-title": "Cài đặt ứng dụng không xác định",
      "settings-version": "Phiên bản 120.0.6099.144",
      "settings-allow": "Cho phép từ nguồn này",
      "settings-allow-desc": "Cho phép nguồn này có thể khiến điện thoại và dữ liệu của bạn gặp rủi ro. Bạn chịu trách nhiệm về mọi hư hại hoặc mất mát dữ liệu do cài đặt ứng dụng này.",
      
      "install-question": "Bạn có muốn cài đặt ứng dụng này không?",
      "btn-install": "Cài đặt",
      "installing-title": "Đang cài đặt...",
      "installed-title": "Đã cài đặt ứng dụng.",
      "btn-done": "Xong",
      "splash-loading": "Đang tải trò chơi...",
      "sim-hint": "Điều khiển điện thoại ảo trực tiếp để thực hành các bước!",
      "footer-text": "&copy; 2026 PLAYCOC. All Rights Reserved. Trang này được thiết kế dựa trên tiêu chuẩn cài đặt của Chrome và Android."
    }
  };

  // Elements
  const stepCards = document.querySelectorAll('.step-card');
  const views = document.querySelectorAll('.view');
  const liveTimeEl = document.getElementById('live-time');
  const langSelect = document.getElementById('lang-select');
  
  // STEP 1 Elements
  const mockDlTrigger = document.getElementById('mock-dl-trigger');
  const downloadWarningPopup = document.getElementById('download-warning-popup');
  const btnMockDownloadAnyway = document.getElementById('btn-mock-download-anyway');
  const btnWarnCancel = document.querySelector('.btn-warn-cancel');
  const toastDownloadProgress = document.getElementById('toast-download-progress');
  const toastDownloadComplete = document.getElementById('toast-download-complete');
  const toastOpenBtn = document.getElementById('toast-open-btn');
  
  // STEP 2 Elements
  const securityDialog = document.getElementById('security-dialog');
  const btnGotoSettings = document.getElementById('btn-goto-settings');
  const btnDialogCancel = document.querySelector('.btn-dialog-cancel');
  const settingsPage = document.getElementById('settings-page');
  const settingsBackBtn = document.getElementById('settings-back-btn');
  const toggleAllowSource = document.getElementById('toggle-allow-source');
  
  // STEP 3 Elements
  const installDialog = document.getElementById('install-dialog');
  const btnInstallConfirm = document.getElementById('btn-install-confirm');
  const btnInstallCancel = document.querySelector('.btn-install-cancel');
  const installingDialog = document.getElementById('installing-dialog');
  const installProgressBar = document.getElementById('install-progress-bar');
  const installedDialog = document.getElementById('installed-dialog');
  const btnInstallDone = document.getElementById('btn-install-done');
  const btnLaunchGame = document.getElementById('btn-launch-game');
  const gameLaunchedScreen = document.getElementById('game-launched-screen');
  
  // Global controls
  const nextBtns = document.querySelectorAll('.next-step-btn');
  const prevBtns = document.querySelectorAll('.prev-step-btn');
  const restartBtn = document.getElementById('btn-restart');

  let currentStep = 1;

  // --- Clock logic ---
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    liveTimeEl.textContent = `${hours}:${minutes}`;
  }
  updateClock();
  setInterval(updateClock, 60000);

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
  function changeStep(stepNumber) {
    currentStep = parseInt(stepNumber);
    
    // Update step cards on the left
    stepCards.forEach(card => {
      const cardStep = parseInt(card.getAttribute('data-step'));
      if (cardStep === currentStep) {
        card.classList.add('active');
        // Scroll to the active card on small screens
        if (window.innerWidth <= 900) {
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      } else {
        card.classList.remove('active');
      }
    });

    // Update phone views on the right
    views.forEach(view => {
      const viewId = view.getAttribute('id');
      if (viewId === `view-step-${currentStep}`) {
        view.classList.add('active');
      } else {
        view.classList.remove('active');
      }
    });

    // Auto-adjust view configurations based on transitions
    if (currentStep === 2) {
      // If we jumped straight to Step 2, make sure dialog is showing, page is hidden
      if (!toggleAllowSource.checked) {
        securityDialog.classList.add('active');
        settingsPage.classList.remove('active');
      }
    } else if (currentStep === 3) {
      // If we jumped straight to Step 3, make sure install dialog is showing, other states reset
      installDialog.classList.add('active');
      installingDialog.classList.remove('active');
      installedDialog.classList.remove('active');
      gameLaunchedScreen.classList.remove('active');
    }
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

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const prev = btn.getAttribute('data-prev');
      changeStep(prev);
    });
  });

  // --- STEP 1 INTERACTION ---
  // Trigger warning popup on APK Download button click
  mockDlTrigger.addEventListener('click', () => {
    downloadWarningPopup.classList.add('active');
  });

  // Close warning popup on Cancel
  btnWarnCancel.addEventListener('click', () => {
    downloadWarningPopup.classList.remove('active');
  });

  // Simulate download on Anyway click
  btnMockDownloadAnyway.addEventListener('click', () => {
    downloadWarningPopup.classList.remove('active');
    toastDownloadProgress.classList.add('active');
    
    // Simulating download taking 0.9 seconds
    setTimeout(() => {
      toastDownloadProgress.classList.remove('active');
      toastDownloadComplete.classList.add('active');
      
      // Auto-transition to Step 2 after 1 second
      setTimeout(() => {
        if (toastDownloadComplete.classList.contains('active')) {
          toastDownloadComplete.classList.remove('active');
          changeStep(2);
        }
      }, 1000);
    }, 900);
  });

  // Go to step 2 immediately if manually clicked "Open"
  toastOpenBtn.addEventListener('click', () => {
    toastDownloadComplete.classList.remove('active');
    changeStep(2);
  });


  // --- STEP 2 INTERACTION ---
  // Click settings inside warning dialog
  btnGotoSettings.addEventListener('click', () => {
    securityDialog.classList.remove('active');
    settingsPage.classList.add('active');
  });

  btnDialogCancel.addEventListener('click', () => {
    securityDialog.classList.remove('active');
  });

  settingsBackBtn.addEventListener('click', () => {
    settingsPage.classList.remove('active');
    securityDialog.classList.add('active');
  });

  // Handle source toggle
  toggleAllowSource.addEventListener('change', () => {
    if (toggleAllowSource.checked) {
      // Successful permission grant. Move to step 3 after 800ms delay for visualization
      setTimeout(() => {
        changeStep(3);
      }, 800);
    }
  });


  // --- STEP 3 INTERACTION ---
  btnInstallCancel.addEventListener('click', () => {
    // Return to main state
  });

  btnInstallConfirm.addEventListener('click', () => {
    installDialog.classList.remove('active');
    installingDialog.classList.add('active');
    
    // Simulate progression bar
    let width = 0;
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
        installingDialog.classList.remove('active');
        installedDialog.classList.add('active');
      } else {
        width += 5;
        installProgressBar.style.width = width + '%';
      }
    }, 100);
  });

  btnInstallDone.addEventListener('click', () => {
    installedDialog.classList.remove('active');
    installDialog.classList.add('active');
  });

  btnLaunchGame.addEventListener('click', () => {
    gameLaunchedScreen.classList.add('active');
  });


  // --- RESTART/RESET SYSTEM ---
  restartBtn.addEventListener('click', () => {
    // Reset View 1
    downloadWarningPopup.classList.remove('active');
    toastDownloadProgress.classList.remove('active');
    toastDownloadComplete.classList.remove('active');

    // Reset View 2
    securityDialog.classList.add('active');
    settingsPage.classList.remove('active');
    toggleAllowSource.checked = false;

    // Reset View 3
    installDialog.classList.add('active');
    installingDialog.classList.remove('active');
    installedDialog.classList.remove('active');
    installProgressBar.style.width = '0%';
    gameLaunchedScreen.classList.remove('active');

    // Change back to step 1
    changeStep(1);
  });
});
