document.addEventListener('DOMContentLoaded', () => {
  // Translations Dictionary
  const translations = {
    ko: {
      "footer-slogan": "언제나 당신을 위해 최고의 제품을 만드는 곳",
      "footer-policy-link": "개인정보처리방침",
      "footer-qna-link": "자주 묻는 질문 (Q&A)",
      "qna-title": "자주 묻는 질문 (Q&A)",
      "qna-subtitle": "플레이콕 이용 중 궁금하신 점을 빠르게 해결해 드립니다.",
      "qna-group1-title": "I. 충전/결제 안내",
      "qna-group2-title": "II. 시스템 및 게임 기능",
      
      // Subheadings
      "qna-sub-1-1": "1.1 상품권 충전",
      "qna-sub-1-2": "1.2. 캐시 및 골드 관련 질문",
      "qna-sub-1-3": "1.3. 골드 구매",
      "qna-sub-2-1": "2.1 버전별 게임 플레이 안내",
      "qna-sub-2-2": "2.2 뉴스 및 이벤트",
      "qna-sub-2-3": "2.3 시스템 및 게임 기능 관련 질문",
      "qna-sub-2-4": "2.4 비밀번호 및 이메일 관련 질문",
      "qna-sub-2-5": "2.5 기타 문의 및 지원 사항",

      // Q1
      "qna-q1": "질문: 게임 내 충전은 어떤 방법으로 가능한가요?",
      "qna-a1": "답변: 신용카드, 휴대폰 상품권(스크래치 카드) 또는 PlayCoc에 SMS를 발송하여 충전할 수 있습니다.",
      // Q2
      "qna-q2": "질문: 충전은 어디서 진행하나요?",
      "qna-a2": "답변: 메인 화면에서 상점(Store)을 선택한 후 '스크래치 카드'를 선택하고, 원하는 충전 금액을 선택한 뒤 클릭하여 진행합니다.",
      // Q3
      "qna-q3": "질문: 외국인인데 게임에 어떻게 충전할 수 있나요?",
      "qna-a3": "답변: 신용카드를 사용하여 편리하게 충전할 수 있습니다.",
      // Q4
      "qna-q4": "질문: 상품권 충전을 했는데 왜 캐시가 지급되지 않나요?",
      "qna-a4": "답변: 일련번호와 핀 코드가 정확한지 다시 한번 확인해 주세요. 코드가 정확하다면 통신사에 문의하여 카드 상태를 확인하거나 PlayCoc 고객 지원에 문의해 주시기 바랍니다.",
      // Q5
      "qna-q5": "질문: 캐시(Cash)가 무엇인가요? 환전 비율은 어떻게 되나요?",
      "qna-a5": "답변: 캐시는 이벤트 참여 또는 골드 교환에 사용되는 게임 내 통화입니다. 현재 환전 비율은 10,000 VND = 10,000 Cash = 10,000,000 Gold 입니다.",
      // Q6
      "qna-q6": "질문: 골드(Gold)는 어떻게 구매하나요?",
      "qna-a6": "답변: 골드를 구매하려면 먼저 캐시를 충전한 후, 상점으로 이동하여 '골드' 탭을 선택하고 원하는 패키지에 따라 캐시를 골드로 교환해 주세요.",
      
      // Q7
      "qna-q7": "질문: PC에서 어떻게 게임을 플레이하나요?",
      "qna-a7": "답변: PC에서 플레이하려면 http://www.playcoc.com/ 에 접속하여 컴퓨터 아이콘을 클릭하고 안내에 따라 PC 게임 런처를 다운로드해 주세요.",
      // Q8
      "qna-q8": "질문: 모바일에서 어떻게 게임을 플레이하나요?",
      "qna-a8": "답변: 안드로이드의 경우 구글 플레이 스토어에서 'PlayCoc'을 검색하여 다운로드하세요. iOS의 경우 앱스토어에서 'PlayCoc'을 검색하여 다운로드하세요.",
      // Q9
      "qna-q9": "질문: 웹에서 어떻게 게임을 플레이하나요?",
      "qna-a9": "답변: 웹에서 즉시 플레이하려면 http://www.playcoc.com/ 에 접속하여 로그인한 후, 원하는 게임을 선택하고 '바로 플레이'를 클릭하여 시작하세요.",
      // Q10
      "qna-q10": "질문: 게임 소식 및 이벤트는 어디서 볼 수 있나요?",
      "qna-a10": "답변: 게임 화면 우측 상단의 설정 버튼을 누른 후, 알림을 선택하고 이벤트 탭을 클릭하여 확인할 수 있습니다.",
      // Q11
      "qna-q11": "질문: 다른 플레이어에게 어떻게 개인 메시지를 보내나요?",
      "qna-a11": "답변: 플레이어의 아바타를 클릭한 다음 메시지 아이콘을 선택하면 개인 채팅 입력 창이 나타납니다.",
      // Q12
      "qna-q12": "질문: 다른 사람에게 어떻게 골드를 선물하나요?",
      "qna-a12": "답변: 플레이어의 아바타를 클릭하고 선물 상자 아이콘을 선택하면 친구에게 골드를 선물할 수 있는 옵션이 나타납니다.",
      // Q13
      "qna-q13": "질문: 게임 내 성우 목소리 억양을 어떻게 변경하나요?",
      "qna-a13": "답변: 게임 로비에서 아바타를 클릭하여 정보 창을 엽니다. 지도 아이콘을 클릭하면 지역별 성우 목소리 억양을 맞춤 설정할 수 있습니다.",
      // Q14
      "qna-q14": "질문: 높은 등급의 채널과 방에는 어떻게 입장하나요?",
      "qna-a14": "답변: 현재 모든 채널에 들어갈 수 있으나, 높은 등급의 채널에서 플레이하고 방을 만들려면 규정된 최소 골드를 보유해야 합니다.",
      // Q15
      "qna-q15": "질문: 무료 골드는 어떻게 받나요?",
      "qna-a15": "답변: 보유한 골드가 1,000 골드 미만이고 금고가 비어 있는 경우 무료 골드를 청구할 수 있습니다. 또한 매일 일일 미션을 완료하여 보너스 골드를 획득할 수 있습니다.",
      // Q16
      "qna-q16": "질문: 게임 내 아바타는 어떻게 변경하나요?",
      "qna-a16": "답변: PC 및 모바일: 아바타를 클릭하고 안내에 따라 사진을 변경해 주세요. *참고: 페이스북 연동 계정의 경우 게임 내에서 직접 아바타를 변경할 수 없습니다.",
      // Q17
      "qna-q17": "질문: 서바이벌 아레나(Survival Arena)는 어떻게 참가하나요?",
      "qna-a17": "답변: 메인 화면의 서바이벌 아레나 아이콘을 클릭하거나 로비에서 서바이벌 아레나 버튼을 눌러 참가할 수 있습니다.",
      // Q18
      "qna-q18": "질문: 잭팟(Jackpot)은 언제 발생하나요?",
      "qna-a18": "답변: 시스템이 매 경기마다 일부 골드를 누적하며, 지정된 적립 금액에 도달하면 잭팟 모드가 자동으로 활성화됩니다.",
      // Q19
      "qna-q19": "질문: 잭팟은 어떻게 당첨되나요?",
      "qna-a19": "답변: 잭팟 모드가 활성화된 상태에서 연속으로 2 경기를 승리하면 잭팟 당첨금을 획득할 수 있습니다.",
      // Q20
      "qna-q20": "질문: 플레이 중에 급한 일이 생기면 골드를 어떻게 보호하나요?",
      "qna-a20": "답변: PlayCoc 게임은 플레이어 부재 시 스마트 자동 플레이(Auto play) 기능을 지원합니다. 단, 자동 플레이 중에는 경험치(XP)를 획득할 수 없습니다.",
      // Q21
      "qna-q21": "질문: 빠른 입장 및 빠른 방 생성은 어떻게 하나요?",
      "qna-a21": "답변: 로비 대기실에서 미리 설정된 베팅 금액을 선택하면 적절한 방에 즉시 입장하며, 기존 방이 만원인 경우 새 방이 자동으로 개설됩니다.",
      // Q22
      "qna-q22": "질문: 방금 퇴장한 방에 어떻게 다시 들어가나요?",
      "qna-a22": "답변: 대기실의 빠른 입장 메뉴 중앙에 있는 삼각형 버튼을 누르면 이전 방으로 자동 복귀됩니다.",
      // Q23
      "qna-q23": "질문: 적립된 골드는 어떻게 수령하나요?",
      "qna-a23": "답변: 골드 적립 바가 가득 차고 요건을 충족하면 '충전' 또는 '골드 구매' 버튼을 눌러 적립된 골드 전액을 수령할 수 있습니다.",
      // Q24
      "qna-q24": "질문: 다른 게임으로 어떻게 바로 전환하나요?",
      "qna-a24": "답변: 모바일: 다른 게임 아이콘을 누르면 전환됩니다(설치되지 않은 경우 스토어로 연결). 웹: 다른 게임 아이콘을 클릭하여 전환합니다. PC: 현재 게임을 끄고 런처에서 새 게임을 실행해 주세요.",
      // Q25
      "qna-q25": "질문: 금고 기능은 어떻게 사용하나요?",
      "qna-a25": "답변: 30 레벨 이상 달성 시 금고를 사용할 수 있습니다. 유료 충전 내역이 있는 플레이어의 경우 레벨에 관계없이 즉시 잠금 해제되어 사용 가능합니다.",
      // Q26
      "qna-q26": "질문: 비밀번호를 잊어버렸는데 어떻게 찾나요?",
      "qna-a26": "답변: 로그인 화면에서 '비밀번호 찾기' 기능을 사용하거나 공식 페이스북 팬페이지(https://www.facebook.com/thienduonggamebai)를 통해 문의해 주세요.",
      // Q27
      "qna-q27": "질문: 등록한 이메일 주소가 기억나지 않는데 어떻게 해야 하나요?",
      "qna-a27": "답변: 이 경우 고객 지원팀에 문의하여 안내를 받아야 합니다(단, 본인이 계정 소유자임을 증명할 수 있는 정보가 필요합니다).",
      // Q28
      "qna-q28": "질문: 계정 정지, 골드 해킹, 금고 비밀번호 분실 또는 사기 신고 등의 문제는 어떻게 해결하나요?",
      "qna-a28": "답변: 이 모든 경우에 대해 공식 페이스북 팬페이지(https://www.facebook.com/thienduonggamebai)를 통해 고객 지원팀에 문의하여 도움을 받으실 수 있습니다."
    },
    en: {
      "footer-slogan": "The place that always creates the best products for you",
      "footer-policy-link": "Privacy Policy",
      "footer-qna-link": "Q&A (FAQ)",
      "qna-title": "Frequently Asked Questions (Q&A)",
      "qna-subtitle": "Resolve your queries about PlayCoc quickly.",
      "qna-group1-title": "I. Payment & Top-Up Guide",
      "qna-group2-title": "II. System & Game Features",

      // Subheadings
      "qna-sub-1-1": "1.1 Card Top-Up",
      "qna-sub-1-2": "1.2. Cash & Gold Q&As",
      "qna-sub-1-3": "1.3. Exchanging Gold",
      "qna-sub-2-1": "2.1 Game Version Play Guide",
      "qna-sub-2-2": "2.2 News & Events",
      "qna-sub-2-3": "2.3 Game Features & Systems Q&As",
      "qna-sub-2-4": "2.4 Passwords & Emails Q&As",
      "qna-sub-2-5": "2.5 Other Support Cases",
      
      // Q1
      "qna-q1": "Q: What methods can I use to top-up/recharge in the game?",
      "qna-a1": "A: You can top-up using credit cards, phone scratch cards, or by sending an SMS to PlayCoc.",
      // Q2
      "qna-q2": "Q: Where do I go to top-up?",
      "qna-a2": "A: In the main screen interface, select the Store, then choose 'Scratch Card', select the denomination you want to recharge, and click to proceed.",
      // Q3
      "qna-q3": "Q: I am a foreigner, how can I top-up in the game?",
      "qna-a3": "A: You can top-up in the game easily using a credit card.",
      // Q4
      "qna-q4": "Q: Why did I top-up but not receive Cash?",
      "qna-a4": "A: Please verify your serial number and pin code to ensure they are correct. If they are, you can contact the carrier to check the card status or reach out to PlayCoc Customer Support.",
      // Q5
      "qna-q5": "Q: What is Cash? What is the conversion rate?",
      "qna-a5": "A: Cash is the common currency in the game used to participate in events or exchange for Gold. The current conversion rate is: 10,000 VND = 10,000 Cash = 10,000,000 Gold.",
      // Q6
      "qna-q6": "Q: How do I purchase Gold?",
      "qna-a6": "A: To buy gold, you first need to top-up Cash, then go to the store, select the 'Gold' tab, and convert your Cash to Gold based on your preferred package.",
      
      // Q7
      "qna-q7": "Q: How to play the game on PC?",
      "qna-a7": "A: To play the game on PC, please visit: http://www.playcoc.com/. Click on the computer icon and follow the instructions to download the PC game launcher.",
      // Q8
      "qna-q8": "Q: How to play the game on mobile?",
      "qna-a8": "A: For Android, go to Google Play and search for 'PlayCoc' to download. For iOS, go to the App Store and search for 'PlayCoc' to download.",
      // Q9
      "qna-q9": "Q: How to play the game on the web?",
      "qna-a9": "A: To play directly on the web, visit http://www.playcoc.com/ and log in. Once logged in, select your desired game and click 'Play Now' to start.",
      // Q10
      "qna-q10": "Q: How can I view game news and events?",
      "qna-a10": "A: You can check event news in the game by clicking the Settings button on the top right of the game interface, selecting Notifications, and then choosing the Events tab.",
      // Q11
      "qna-q11": "Q: How do I send a private message to another player?",
      "qna-a11": "A: Click on the player's avatar, then select the message icon, and the system will display a chat input box.",
      // Q12
      "qna-q12": "Q: How can I gift Gold to someone?",
      "qna-a12": "A: Click on the player's avatar and select the gift box icon. The system will display the options available to gift Gold to your friend.",
      // Q13
      "qna-q13": "Q: How can I change the voice-over accents in the game?",
      "qna-a13": "A: In the game lobby, click on your avatar to open user info. Click on the map icon, and you will be able to customize the regional voice acting accents.",
      // Q14
      "qna-q14": "Q: How do I join high-stake channels and play in high-stake rooms?",
      "qna-a14": "A: Currently, you can join any channel, but to play and create rooms in high-stake channels, you must possess a minimum required amount of Gold.",
      // Q15
      "qna-q15": "Q: How can I get free Gold?",
      "qna-a15": "A: If your current balance is under 1,000 Gold and your Vault is empty, you can claim free Gold. In addition, you can complete daily missions to earn bonus Gold.",
      // Q16
      "qna-q16": "Q: How do I change my avatar in the game?",
      "qna-a16": "A: On PC & Mobile: Click on your avatar and follow the instructions to change it. *Note: For Facebook-linked accounts, you cannot change the avatar directly inside the game.",
      // Q17
      "qna-q17": "Q: How do I join the Survival Arena?",
      "qna-a17": "A: You can click on the Survival Arena icon on the main screen interface, or click the Survival Arena button in the game lobby.",
      // Q18
      "qna-q18": "Q: When does the Jackpot trigger?",
      "qna-a18": "A: The system accumulates a portion of gold from each match. Once it reaches a designated amount, the Jackpot mode will trigger automatically.",
      // Q19
      "qna-q19": "Q: How do I win the Jackpot?",
      "qna-a19": "A: Once the Jackpot mode is active, you just need to win 2 consecutive matches to claim the Jackpot.",
      // Q20
      "qna-q20": "Q: I have an emergency during a match, how can I prevent losing my Gold?",
      "qna-a20": "A: PlayCoc games support a Smart Auto-play feature for busy players. Note that you will not earn experience points (XP) while this feature is active.",
      // Q21
      "qna-q21": "Q: How do I quick-join or quick-create a room?",
      "qna-a21": "A: In the lobby interface, you will see pre-set bet levels. Clicking on a level will quick-join an active room, or create a new room automatically if existing rooms are full.",
      // Q22
      "qna-q22": "Q: How can I rejoin the room I just exited?",
      "qna-a22": "A: In the lobby, click the triangle button in the middle of the quick-join menu, and the system will automatically return you to your previous room.",
      // Q23
      "qna-q23": "Q: How do I claim my accumulated Gold?",
      "qna-a23": "A: When the gold accumulation bar is full and meets the requirements, click the 'Top Up' or 'Buy Gold' button to receive the entire accumulated Gold.",
      // Q24
      "qna-q24": "Q: How do I switch to another game while playing?",
      "qna-a24": "A: On Mobile: Tap another game icon to switch (links to store if not installed). On Web: Click another game icon to switch. On PC: Close current game and open the new game inside the Launcher.",
      // Q25
      "qna-q25": "Q: How do I use the Vault/Safe feature?",
      "qna-a25": "A: Players who reach Level 30 or higher can use the Vault. For users who have topped up real money, the Vault features will unlock immediately, regardless of level.",
      // Q26
      "qna-q26": "Q: I forgot my game password, how can I recover it?",
      "qna-a26": "A: Use the 'Forgot Password' function on the login screen, or contact customer support via our Facebook fanpage (https://www.facebook.com/thienduonggamebai).",
      // Q27
      "qna-q27": "Q: What if I don't remember the registered email address to recover my password?",
      "qna-a27": "A: In this case, you need to contact customer support for guidance (provided that you can prove ownership of the account).",
      // Q28
      "qna-q28": "Q: What should I do in cases of locked accounts, hacked gold, lost vault passwords, or reporting cheats?",
      "qna-a28": "A: For all of these cases, you can contact the PlayCoc customer support team via our Facebook fanpage (https://www.facebook.com/thienduonggamebai) to receive assistance."
    },
    vi: {
      "footer-slogan": "Nơi luôn tạo ra những sản phẩm đỉnh nhất dành cho bạn",
      "footer-policy-link": "Chính sách bảo mật",
      "footer-qna-link": "Hỏi & Đáp (Q&A)",
      "qna-title": "Hỏi & Đáp (Q&A)",
      "qna-subtitle": "Giải đáp các thắc mắc thường gặp khi chơi game tại PlayCoc.",
      "qna-group1-title": "I. Hướng dẫn nạp tiền",
      "qna-group2-title": "II. Hệ thống và tính năng game",
      
      // Subheadings
      "qna-sub-1-1": "1.1 Nạp thẻ",
      "qna-sub-1-2": "1.2. Những câu hỏi liên quan Cash và Gold",
      "qna-sub-1-3": "1.3. Mua Gold",
      "qna-sub-2-1": "2.1 Hướng dẫn chơi game trên các phiên bản",
      "qna-sub-2-2": "2.2 Tin tức sự kiện",
      "qna-sub-2-3": "2.3 Những câu hỏi liên quan đến hệ thống tính năng game",
      "qna-sub-2-4": "2.4 Những câu hỏi liên quan mật khẩu và email",
      "qna-sub-2-5": "2.5 Những trường hợp khác",

      // Q1
      "qna-q1": "Hỏi: Nạp tiền vào game bằng phương thức nào?",
      "qna-a1": "Đáp: Bạn có thể nạp bằng thẻ tín dụng, thẻ cào điện thoại hoặc gửi tin nhắn SMS đến tổng đài PlayCoc.",
      // Q2
      "qna-q2": "Hỏi: Tôi vào đâu để nạp tiền?",
      "qna-a2": "Đáp: Ở giao diện màn hình bạn chọn vào cửa hàng, lúc này bạn chọn vào nút Thẻ cào và chọn mệnh giá mình muốn nạp, nhấn để tiến hành nạp.",
      // Q3
      "qna-q3": "Hỏi: Tôi là người nước ngoài, làm sao tôi có thể nạp tiền vào game?",
      "qna-a3": "Đáp: Bạn có thể nạp tiền vào game bằng thẻ tín dụng.",
      // Q4
      "qna-q4": "Hỏi: Tại sao tôi nạp thẻ nhưng không nhận được Cash?",
      "qna-a4": "Đáp: Bạn vui lòng kiểm tra lại số series và pin code, xem mã thẻ đã chính xác chưa. Nếu đúng bạn có thể liên hệ với nhà mạng để kiểm tra tình trạng thẻ hoặc liên hệ với bộ phận chăm sóc khách hàng PlayCoc.",
      // Q5
      "qna-q5": "Hỏi: Cash là gì? Tỉ lệ quy đổi như thế nào?",
      "qna-a5": "Đáp: Cash là đơn vị tiền chung của game dùng để tham gia sự kiện hoặc để mua Gold chơi game. Tỉ lệ quy đổi hiện tại: 10.000 VND = 10.000 Cash = 10.000.000 Gold.",
      // Q6
      "qna-q6": "Hỏi: Làm thế nào để mua Gold?",
      "qna-a6": "Đáp: Để mua được gold trước tiên bạn cần nạp Cash sau đó tiến hành vào cửa hàng, nhấn chọn mục Gold và tiến hành đổi Gold theo từng mục lựa chọn.",
      
      // Q7
      "qna-q7": "Hỏi: Làm thế nào để chơi game trên PC?",
      "qna-a7": "Đáp: Để chơi được game trên PC các bạn vui lòng truy cập địa chỉ: http://www.playcoc.com/, sau khi truy cập thành công ở vị trí trên cùng sẽ xuất hiện các biểu tượng đại diện cho các phiên bản hiện có. Bạn nhấn chọn hình máy tính và làm theo hướng dẫn để tải game trên PC nhé!",
      // Q8
      "qna-q8": "Hỏi: Làm thế nào để chơi game trên điện thoại?",
      "qna-a8": "Đáp: Đối với phiên bản Android các bạn vào Google Play và gõ tên game PlayCoc để tải. Đối với phiên bản IOS các bạn vào Appstore và gõ PlayCoc để tải nhé.",
      // Q9
      "qna-q9": "Hỏi: Làm thế nào để chơi game trên web?",
      "qna-a9": "Đáp: Để chơi game trực tiếp trên web các bạn có thể truy cập: http://www.playcoc.com/ sau đó đăng nhập, sau khi đăng nhập thành công từ giao diện web bạn có thể chọn những game mong muốn và nhấn chơi ngay để bắt đầu game.",
      // Q10
      "qna-q10": "Hỏi: Làm sao tôi có thể xem sự kiện và tin tức của game?",
      "qna-a10": "Đáp: Bạn có thể xem tin sự kiện trong game bằng cách chọn vào nút Cài đặt ở góc phải màn hình giao diện game, sau đó chọn nút Thông báo và chọn mục xem Sự kiện.",
      // Q11
      "qna-q11": "Hỏi: Làm sao để gửi tin nhắn riêng cho người chơi khác?",
      "qna-a11": "Đáp: Bạn kích vào avatar người chơi, sau đó chọn vào biểu tượng tin nhắn, lúc này hệ thống sẽ xuất hiện khu vực nhập tin nhắn.",
      // Q12
      "qna-q12": "Hỏi: Làm sao tôi có thể tặng gold cho người khác?",
      "qna-a12": "Đáp: Bạn kích vào avatar người chơi và chọn biểu tượng hình hôp quà, nhấn vào hệ thống sẽ xuất hiện các mốc bạn có thể gửi tặng gold cho bạn của bạn.",
      // Q13
      "qna-q13": "Hỏi: Làm sao tôi có thể đổi giọng lồng tiếng trong game?",
      "qna-a13": "Đáp: Ở màn hình giao diện game bạn có thể nhấn chọn vào ảnh avatar của bản thân, hệ thống sẽ hiện ra khu thông tin người dùng, lúc này bạn quan sát sẽ thấy biểu tượng hình bản đồ thu nhỏ, nhấn chọn bạn có thể tùy chỉnh âm giọng vùng miền.",
      // Q14
      "qna-q14": "Hỏi: Làm sao tôi có thể vào những kênh cao và đánh bài ở phòng cược cao?",
      "qna-a14": "Đáp: Hiện tại khi vào game bạn có thể chọn bất kỳ kênh game nào để vào, tuy nhiên để được chơi game và tạo phòng ở kênh cao bạn phải đạt 1 lượng tiền nhất định.",
      // Q15
      "qna-q15": "Hỏi: Làm sao tôi có thể nhận được gold miễn phí?",
      "qna-a15": "Đáp: Nếu số tiền hiện có của bạn dưới 1.000 Gold và trong két sắt không có Gold thì bạn có thể tiến hành nhận gold miễn phí. Ngoài ra bạn có thể thực hiện nhiệm vụ để nhận gold thưởng.",
      // Q16
      "qna-q16": "Hỏi: Làm thế nào để đổi avatar trong game?",
      "qna-a16": "Đáp: Ở phiên bản PC: Bạn chọn vào avatar của mình, nhấn vào hình ảnh sẽ hiện ra tab khác, bạn làm theo hướng dẫn để tiến hành đổi avatar. Ở phiên bản Mobile: Bạn chọn vào avatar của mình, nhấn vào hình ảnh và làm theo hướng dẫn để tiến hành đổi avatar. *Lưu ý: Đối với tài khoản Facebook bạn không thể đổi avatar trực tiếp trên game.",
      // Q17
      "qna-q17": "Hỏi: Làm thế nào để tham gia đấu trường sinh tử?",
      "qna-a17": "Đáp: Bạn có thể nhấn vào biểu tượng đấu trường sinh tử ở giao diện màn hình hoặc ở phòng chờ bạn có thể nhấn vào nút đấu trường sinh tử.",
      // Q18
      "qna-q18": "Hỏi: Khi nào thì Jackpot xuất hiện?",
      "qna-a18": "Đáp: Hệ thống sẽ ghi nhận số tiền tích lũy được mỗi ván đấu, đến 1 lượng tiền nhất định Jackpot sẽ tự động bắt đầu.",
      // Q19
      "qna-q19": "Hỏi: Làm sao để trúng được Jackpot?",
      "qna-a19": "Đáp: Khi Jackpot đã bắt đầu, bạn chỉ cần thắng liên tiếp 2 ván bạn sẽ nhận được Jackpot.",
      // Q20
      "qna-q20": "Hỏi: Tôi bận việc đột xuất khi ván bài đang bắt đầu, làm thế nào để đảm bảo số gold tôi không tổn thất?",
      "qna-a20": "Đáp: Hiện tại ở tất cả các game trên PlayCoc điều được hỗ trợ tính năng chơi tự động thông minh dành cho người chơi bận hoặc có việc đột xuất. Tuy nhiên khi sử dụng tính năng bạn sẽ không nhận được điểm kinh nghiệm.",
      // Q21
      "qna-q21": "Hỏi: Làm thế nào để vào phòng nhanh và tạo phòng nhanh?",
      "qna-a21": "Đáp: Ở giao diện phòng chờ bạn sẽ thấy các mức cược được hiển thị sẵn, nhấn chọn bạn sẽ được vào phòng nhanh với mức cược đã được chọn hoặc trong phòng đã đủ người thì hệ thống sẽ tạo sẵn 1 phòng mới cho bạn.",
      // Q22
      "qna-q22": "Hỏi: Làm sao có thể vào lại phòng vừa thoát ra ngoài?",
      "qna-a22": "Đáp: Ở giao diện phòng chờ, ở giữa menu điều chỉnh vào nhanh sẽ có nút hình tam giác, nhấn vào hệ thống sẽ tự đưa bạn trở lại phòng trước đó.",
      // Q23
      "qna-q23": "Hỏi: Làm sao tôi có thể nhận được gold tích lũy?",
      "qna-a23": "Đáp: Khi thanh thông báo số gold tích lũy của bạn đã đầy và đạt đủ điều kiện để nhận thưởng, bạn chỉ cần nhấn vào nút Nạp và mua gold bạn sẽ nhận được toàn bộ số gold tích lũy.",
      // Q24
      "qna-q24": "Hỏi: Đang tham gia game này nhưng tôi muốn chuyển sang game khác thì phải làm sao?",
      "qna-a24": "Đáp: Phiên bản Mobile: Ở giao diện màn hình game bạn có thể nhấn vào những game khác đang hiển thị ở đó, với trường hợp bạn đã cài đặt game rồi khi nhấn vào hệ thống sẽ tự động chuyển bạn sang game vừa chọn. Nếu bạn chưa cài đặt khi nhấn hệ thống sẽ chuyển bạn sang cửa hàng để tiến hành tải. Phiên bản web: Ở giao diện màn hình game bạn có thể nhấn vào những game khác đang hiển thị ở đó, sau khi nhấn hệ thống sẽ chuyển bạn sang game vừa nhấn chọn. Phiên bản PC: Đối với phiên bản PC các bạn tắt game hiện tại và bật game muốn chơi trong launcher nhé.",
      // Q25
      "qna-q25": "Hỏi: Làm sao tôi có thể sử dụng két sắt?",
      "qna-a25": "Đáp: Khi người chơi đạt từ cấp 30 trở lên có thể sử dụng được tính năng két sắt, trường hợp với những người chơi nạp tiền thì tính năng két sắt sẽ được mở ngay, không phân biệt cấp độ.",
      // Q26
      "qna-q26": "Hỏi: Tôi bị quên mật khẩu vào game, làm sao để lấy lại?",
      "qna-a26": "Đáp: Ở màn hình đăng nhập bạn sử dụng chức năng quên mật khẩu, làm theo các bước hướng dẫn sử dụng mail để lấy lại mật khẩu hoặc liên hệ chăm sóc khách hàng qua fanpage (https://www.facebook.com/thienduonggamebai).",
      // Q27
      "qna-q27": "Hỏi: Tôi không nhớ địa chỉ mail để lấy lại mật khẩu thì phải làm sao?",
      "qna-a27": "Đáp: Với trường hợp này bạn cần liên hệ bộ phận chăm sóc khách hàng để được hướng dẫn lấy lại mật khẩu.(Với điều kiện bạn phải chứng minh được bản thân là chủ sở hữu tài khoản)",
      // Q28
      "qna-q28": "Hỏi: Nếu tôi gặp các trường hợp như khóa tài khoản, hack gold, mất mật mã két sắt, báo cáo gian lận... thì xử lý thế nào?",
      "qna-a28": "Đáp: Đối với tất cả các trường hợp trên người chơi có thể liên hệ với bộ phận chăm sóc khách hàng PlayCoc qua fanpage (https://www.facebook.com/thienduonggamebai) để được hỗ trợ kiểm tra và xử lý."
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

  // Set current copyright year dynamically
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
