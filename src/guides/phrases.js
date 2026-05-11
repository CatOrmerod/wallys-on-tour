const content = `

<!-- FULLSCREEN OVERLAY -->
<div id="phrase-overlay" onclick="closeOverlay()" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(26,18,8,0.97);z-index:9999;padding:32px 24px;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;">
  <div style="color:rgba(212,168,67,0.6);font-family:'EB Garamond',serif;font-size:13px;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:24px;">Tap anywhere to close</div>
  <div id="overlay-local" style="font-family:'Playfair Display',serif;font-size:clamp(28px,8vw,52px);font-weight:700;color:#f5efe0;text-align:center;line-height:1.3;margin-bottom:20px;"></div>
  <div id="overlay-english" style="font-family:'Cormorant Garamond',serif;font-size:18px;font-style:italic;color:rgba(245,239,224,0.5);text-align:center;margin-bottom:32px;"></div>
  <button id="overlay-speak-btn" style="width:72px;height:72px;border-radius:50%;border:2px solid #b8860b;background:rgba(184,134,11,0.15);font-size:32px;cursor:pointer;color:#d4a843;" onclick="speakOverlay(event)">&#128266;</button>
</div>

<!-- COVER -->
<div class="cover" style="background:#1a1208">
  <div class="cover-inner">
    <div class="cover-eyebrow">Wallys on Tour</div>
    <div class="cover-title">Useful <em>Phrases</em></div>
    <div class="cover-sub">Vietnam &middot; Singapore &middot; Malaysia</div>
    <div class="cover-rule"></div>
    <div style="font-family:'EB Garamond',serif;font-size:14px;color:rgba(245,239,224,0.6);line-height:1.6;">
      Tap any row to show the phrase <strong style="color:#d4a843">full-screen</strong> &mdash; hold your phone up so the other person can read it.<br>
      Tap &#128266; to hear it spoken aloud in the correct language.
    </div>
  </div>
</div>

<!-- LANGUAGE TOGGLE -->
<div class="lang-tabs-bar" style="position:sticky;top:0;z-index:50;">
  <button class="lang-tab lang-tab-active" onclick="switchLang('vn', this)">&#127483;&#65039; Vietnamese</button>
  <button class="lang-tab" onclick="switchLang('my', this)">&#127474;&#127486; Malay &amp; Singapore</button>
</div>

<!-- VIETNAMESE -->
<div id="lang-vn" class="lang-panel">
  <div class="lang-note">Vietnamese is tonal — pronunciation guides are approximate. The &#128266; button says it correctly. Tap any row to show it large.</div>
<div class="pcat"><div class="pcat-title">👋 Greetings & Basics</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Hello</div><div class="pi-local">Xin chào</div><div class="pi-pron">Sin chow</div></div><button class="pi-btn" data-text="Xin chào" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Thank you</div><div class="pi-local">Cảm ơn</div><div class="pi-pron">Gam un</div></div><button class="pi-btn" data-text="Cảm ơn" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Thank you very much</div><div class="pi-local">Cảm ơn rất nhiều</div><div class="pi-pron">Gam un rat nyew</div></div><button class="pi-btn" data-text="Cảm ơn rất nhiều" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">You're welcome</div><div class="pi-local">Không có gì</div><div class="pi-pron">Khong co zee</div></div><button class="pi-btn" data-text="Không có gì" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Sorry / Excuse me</div><div class="pi-local">Xin lỗi</div><div class="pi-pron">Sin loy</div></div><button class="pi-btn" data-text="Xin lỗi" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Yes</div><div class="pi-local">Vâng / Có</div><div class="pi-pron">Vung / Gaw</div></div><button class="pi-btn" data-text="Vâng / Có" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">No</div><div class="pi-local">Không</div><div class="pi-pron">Khong</div></div><button class="pi-btn" data-text="Không" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I don't understand</div><div class="pi-local">Tôi không hiểu</div><div class="pi-pron">Toy khong hyew</div></div><button class="pi-btn" data-text="Tôi không hiểu" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Do you speak English?</div><div class="pi-local">Bạn có nói tiếng Anh không?</div><div class="pi-pron">Ban co noy tyeng Anh khong</div></div><button class="pi-btn" data-text="Bạn có nói tiếng Anh không?" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Please speak slowly</div><div class="pi-local">Xin nói chậm thôi</div><div class="pi-pron">Sin noy chum toy</div></div><button class="pi-btn" data-text="Xin nói chậm thôi" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🍜 Eating & Ordering</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">A table for 5 please</div><div class="pi-local">Cho tôi một bàn cho 5 người</div><div class="pi-pron">Cho toy mot ban cho nam nguoi</div></div><button class="pi-btn" data-text="Cho tôi một bàn cho 5 người" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I'd like this please</div><div class="pi-local">Cho tôi cái này</div><div class="pi-pron">Cho toy kai nay</div></div><button class="pi-btn" data-text="Cho tôi cái này" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">The menu please</div><div class="pi-local">Cho tôi xem thực đơn</div><div class="pi-pron">Cho toy sem thuc don</div></div><button class="pi-btn" data-text="Cho tôi xem thực đơn" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Not too spicy please</div><div class="pi-local">Đừng cay quá</div><div class="pi-pron">Derng kay kwa</div></div><button class="pi-btn" data-text="Đừng cay quá" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">No coriander please</div><div class="pi-local">Không có rau mùi</div><div class="pi-pron">Khong co rao mwee</div></div><button class="pi-btn" data-text="Không có rau mùi" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">No fish sauce please</div><div class="pi-local">Không có nước mắm</div><div class="pi-pron">Khong co nook mam</div></div><button class="pi-btn" data-text="Không có nước mắm" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Vegetarian</div><div class="pi-local">Ăn chay</div><div class="pi-pron">An chay</div></div><button class="pi-btn" data-text="Ăn chay" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Delicious!</div><div class="pi-local">Ngon lắm!</div><div class="pi-pron">Ngon lam</div></div><button class="pi-btn" data-text="Ngon lắm!" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">The bill please</div><div class="pi-local">Tính tiền</div><div class="pi-pron">Ting tyen</div></div><button class="pi-btn" data-text="Tính tiền" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">One iced coffee please</div><div class="pi-local">Một cà phê sữa đá</div><div class="pi-pron">Mot ca fay sooa da</div></div><button class="pi-btn" data-text="Một cà phê sữa đá" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Water please</div><div class="pi-local">Cho tôi nước</div><div class="pi-pron">Cho toy nook</div></div><button class="pi-btn" data-text="Cho tôi nước" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">No ice please</div><div class="pi-local">Không đá</div><div class="pi-pron">Khong da</div></div><button class="pi-btn" data-text="Không đá" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🛍️ Shopping & Bargaining</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">How much is this?</div><div class="pi-local">Cái này bao nhiêu?</div><div class="pi-pron">Kai nay bow nyew</div></div><button class="pi-btn" data-text="Cái này bao nhiêu?" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Too expensive</div><div class="pi-local">Đắt quá</div><div class="pi-pron">Dat kwa</div></div><button class="pi-btn" data-text="Đắt quá" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Can you reduce the price?</div><div class="pi-local">Bớt giá được không?</div><div class="pi-pron">Bot za dook khong</div></div><button class="pi-btn" data-text="Bớt giá được không?" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I'll take it</div><div class="pi-local">Tôi mua cái này</div><div class="pi-pron">Toy mwa kai nay</div></div><button class="pi-btn" data-text="Tôi mua cái này" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Just looking thanks</div><div class="pi-local">Tôi chỉ xem thôi</div><div class="pi-pron">Toy chi sem toy</div></div><button class="pi-btn" data-text="Tôi chỉ xem thôi" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Do you have a smaller size?</div><div class="pi-local">Bạn có cỡ nhỏ hơn không?</div><div class="pi-pron">Ban co co nyo hun khong</div></div><button class="pi-btn" data-text="Bạn có cỡ nhỏ hơn không?" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Do you accept cards?</div><div class="pi-local">Bạn có nhận thẻ không?</div><div class="pi-pron">Ban co nyan te khong</div></div><button class="pi-btn" data-text="Bạn có nhận thẻ không?" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🚕 Getting Around</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is...?</div><div class="pi-local">... ở đâu?</div><div class="pi-pron">... uh dow</div></div><button class="pi-btn" data-text="... ở đâu?" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Please take me to this address</div><div class="pi-local">Đưa tôi đến địa chỉ này</div><div class="pi-pron">Dooa toy den dia chi nay</div></div><button class="pi-btn" data-text="Đưa tôi đến địa chỉ này" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Stop here please</div><div class="pi-local">Dừng ở đây</div><div class="pi-pron">Zung uh day</div></div><button class="pi-btn" data-text="Dừng ở đây" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Turn left</div><div class="pi-local">Rẽ trái</div><div class="pi-pron">Re trai</div></div><button class="pi-btn" data-text="Rẽ trái" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Turn right</div><div class="pi-local">Rẽ phải</div><div class="pi-pron">Re fai</div></div><button class="pi-btn" data-text="Rẽ phải" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Go straight ahead</div><div class="pi-local">Đi thẳng</div><div class="pi-pron">Di tang</div></div><button class="pi-btn" data-text="Đi thẳng" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">How far is it?</div><div class="pi-local">Bao xa?</div><div class="pi-pron">Bow sa</div></div><button class="pi-btn" data-text="Bao xa?" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is the toilet?</div><div class="pi-local">Nhà vệ sinh ở đâu?</div><div class="pi-pron">Nya vay sin uh dow</div></div><button class="pi-btn" data-text="Nhà vệ sinh ở đâu?" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Airport please</div><div class="pi-local">Đến sân bay</div><div class="pi-pron">Den sun bay</div></div><button class="pi-btn" data-text="Đến sân bay" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🏨 Hotel</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I have a reservation</div><div class="pi-local">Tôi có đặt phòng</div><div class="pi-pron">Toy co dat fong</div></div><button class="pi-btn" data-text="Tôi có đặt phòng" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">My room number is...</div><div class="pi-local">Số phòng của tôi là...</div><div class="pi-pron">So fong kooa toy la</div></div><button class="pi-btn" data-text="Số phòng của tôi là..." data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">The air conditioning is broken</div><div class="pi-local">Máy lạnh bị hỏng</div><div class="pi-pron">May lan bi hong</div></div><button class="pi-btn" data-text="Máy lạnh bị hỏng" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">More towels please</div><div class="pi-local">Cho thêm khăn tắm</div><div class="pi-pron">Cho tem kan tam</div></div><button class="pi-btn" data-text="Cho thêm khăn tắm" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">What time is check out?</div><div class="pi-local">Mấy giờ trả phòng?</div><div class="pi-pron">May zo tra fong</div></div><button class="pi-btn" data-text="Mấy giờ trả phòng?" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Can I have a wake up call?</div><div class="pi-local">Gọi tôi dậy lúc...</div><div class="pi-pron">Goy toy zay look</div></div><button class="pi-btn" data-text="Gọi tôi dậy lúc..." data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🏥 Medical & Emergency</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I need a doctor</div><div class="pi-local">Tôi cần bác sĩ</div><div class="pi-pron">Toy gun bak see</div></div><button class="pi-btn" data-text="Tôi cần bác sĩ" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Please call an ambulance</div><div class="pi-local">Gọi xe cấp cứu giúp tôi</div><div class="pi-pron">Goy se cup coo zoop toy</div></div><button class="pi-btn" data-text="Gọi xe cấp cứu giúp tôi" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I am allergic to...</div><div class="pi-local">Tôi bị dị ứng với...</div><div class="pi-pron">Toy bee dee ung voy</div></div><button class="pi-btn" data-text="Tôi bị dị ứng với..." data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I have a stomach ache</div><div class="pi-local">Tôi bị đau bụng</div><div class="pi-pron">Toy bee dow boong</div></div><button class="pi-btn" data-text="Tôi bị đau bụng" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I have a fever</div><div class="pi-local">Tôi bị sốt</div><div class="pi-pron">Toy bee sot</div></div><button class="pi-btn" data-text="Tôi bị sốt" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I feel dizzy</div><div class="pi-local">Tôi bị chóng mặt</div><div class="pi-pron">Toy bee chong mat</div></div><button class="pi-btn" data-text="Tôi bị chóng mặt" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is the nearest hospital?</div><div class="pi-local">Bệnh viện gần nhất ở đâu?</div><div class="pi-pron">Ben vyen gun nyat uh dow</div></div><button class="pi-btn" data-text="Bệnh viện gần nhất ở đâu?" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I need medicine</div><div class="pi-local">Tôi cần thuốc</div><div class="pi-pron">Toy gun took</div></div><button class="pi-btn" data-text="Tôi cần thuốc" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Help!</div><div class="pi-local">Cứu tôi với!</div><div class="pi-pron">Koo toy voy</div></div><button class="pi-btn" data-text="Cứu tôi với!" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Please call the police</div><div class="pi-local">Gọi cảnh sát giúp tôi</div><div class="pi-pron">Goy kan sat zoop toy</div></div><button class="pi-btn" data-text="Gọi cảnh sát giúp tôi" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🏨 Hotels & Transport</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Hôtel des Arts Saigon please</div><div class="pi-local">Cho tôi đến Hôtel des Arts Saigon, 76-78 Nguyễn Thị Minh Khai, Quận 3</div><div class="pi-pron">Cho toy den Hotel des Arts Saigon</div></div><button class="pi-btn" data-text="Cho tôi đến Hôtel des Arts Saigon, 76-78 Nguyễn Thị Minh Khai, Quận 3" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Victoria Resort Can Tho please</div><div class="pi-local">Cho tôi đến Victoria Resort Cần Thơ, Cái Khế, Ninh Kiều</div><div class="pi-pron">Cho toy den Victoria Resort Can Tho</div></div><button class="pi-btn" data-text="Cho tôi đến Victoria Resort Cần Thơ, Cái Khế, Ninh Kiều" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Moire Hoi An please</div><div class="pi-local">Cho tôi đến Moire Hội An</div><div class="pi-pron">Cho toy den Moire Hoi An</div></div><button class="pi-btn" data-text="Cho tôi đến Moire Hội An" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Hue Ancient Garden Houses please</div><div class="pi-local">Cho tôi đến Hue Ancient Garden Houses, Kim Long, Huế</div><div class="pi-pron">Cho toy den Hue Ancient Garden Houses</div></div><button class="pi-btn" data-text="Cho tôi đến Hue Ancient Garden Houses, Kim Long, Huế" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Mercure Ba Na Hills please</div><div class="pi-local">Cho tôi đến Mercure Đà Nẵng French Village Bà Nà Hills</div><div class="pi-pron">Cho toy den Mercure Ba Na Hills</div></div><button class="pi-btn" data-text="Cho tôi đến Mercure Đà Nẵng French Village Bà Nà Hills" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to the Danang Marriott please</div><div class="pi-local">Cho tôi đến Danang Marriott Resort & Spa, Non Nước, Đà Nẵng</div><div class="pi-pron">Cho toy den Danang Marriott Resort</div></div><button class="pi-btn" data-text="Cho tôi đến Danang Marriott Resort & Spa, Non Nước, Đà Nẵng" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to the airport please</div><div class="pi-local">Cho tôi đến sân bay</div><div class="pi-pron">Cho toy den sun bay</div></div><button class="pi-btn" data-text="Cho tôi đến sân bay" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to this address please</div><div class="pi-local">Cho tôi đến địa chỉ này</div><div class="pi-pron">Cho toy den dia chi nay</div></div><button class="pi-btn" data-text="Cho tôi đến địa chỉ này" data-lang="vi-VN" onclick="speakIt(event,this)">&#128266;</button></div>
</div>

</div>

<!-- MALAY -->
<div id="lang-my" class="lang-panel" style="display:none">
  <div class="lang-note">Malay works across Malaysia and Singapore. English is understood everywhere but these phrases are always warmly received. Tap any row to show it large.</div>
<div class="pcat"><div class="pcat-title">👋 Greetings & Basics</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Hello</div><div class="pi-local">Helo / Hai</div><div class="pi-pron">Heh-lo / Hi</div></div><button class="pi-btn" data-text="Helo / Hai" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Good morning</div><div class="pi-local">Selamat pagi</div><div class="pi-pron">Seh-la-mat pa-gee</div></div><button class="pi-btn" data-text="Selamat pagi" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Thank you</div><div class="pi-local">Terima kasih</div><div class="pi-pron">Teh-ree-mah kah-see</div></div><button class="pi-btn" data-text="Terima kasih" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Thank you very much</div><div class="pi-local">Terima kasih banyak</div><div class="pi-pron">Teh-ree-mah kah-see ba-nyak</div></div><button class="pi-btn" data-text="Terima kasih banyak" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">You're welcome</div><div class="pi-local">Sama-sama</div><div class="pi-pron">Sa-ma sa-ma</div></div><button class="pi-btn" data-text="Sama-sama" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Sorry / Excuse me</div><div class="pi-local">Maaf</div><div class="pi-pron">Ma-af</div></div><button class="pi-btn" data-text="Maaf" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Yes</div><div class="pi-local">Ya</div><div class="pi-pron">Ya</div></div><button class="pi-btn" data-text="Ya" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">No</div><div class="pi-local">Tidak</div><div class="pi-pron">Tee-dak</div></div><button class="pi-btn" data-text="Tidak" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I don't understand</div><div class="pi-local">Saya tidak faham</div><div class="pi-pron">Sa-ya tee-dak fa-ham</div></div><button class="pi-btn" data-text="Saya tidak faham" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Do you speak English?</div><div class="pi-local">Boleh cakap Bahasa Inggeris?</div><div class="pi-pron">Bo-leh cha-kap ba-ha-sa ing-grees</div></div><button class="pi-btn" data-text="Boleh cakap Bahasa Inggeris?" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🍜 Eating & Ordering</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">A table for 5 please</div><div class="pi-local">Meja untuk 5 orang</div><div class="pi-pron">Meh-ja oon-took lima o-rang</div></div><button class="pi-btn" data-text="Meja untuk 5 orang" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I'd like this please</div><div class="pi-local">Saya nak yang ini</div><div class="pi-pron">Sa-ya nak yang ee-nee</div></div><button class="pi-btn" data-text="Saya nak yang ini" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Delicious!</div><div class="pi-local">Sedap!</div><div class="pi-pron">Seh-dap</div></div><button class="pi-btn" data-text="Sedap!" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Not too spicy please</div><div class="pi-local">Jangan terlalu pedas</div><div class="pi-pron">Jang-an ter-la-loo peh-das</div></div><button class="pi-btn" data-text="Jangan terlalu pedas" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">No pork please</div><div class="pi-local">Jangan ada babi</div><div class="pi-pron">Jang-an ada ba-bee</div></div><button class="pi-btn" data-text="Jangan ada babi" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Vegetarian</div><div class="pi-local">Vegetarian / Sayur-sayuran</div><div class="pi-pron">Veh-ge-tah-ree-an</div></div><button class="pi-btn" data-text="Vegetarian / Sayur-sayuran" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">The bill please</div><div class="pi-local">Boleh dapat bil?</div><div class="pi-pron">Bo-leh da-pat bill</div></div><button class="pi-btn" data-text="Boleh dapat bil?" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Water please</div><div class="pi-local">Air kosong</div><div class="pi-pron">Ah-yer ko-song</div></div><button class="pi-btn" data-text="Air kosong" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">What do you recommend?</div><div class="pi-local">Apa yang sedap di sini?</div><div class="pi-pron">Apa yang seh-dap dee see-nee</div></div><button class="pi-btn" data-text="Apa yang sedap di sini?" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is the hawker centre?</div><div class="pi-local">Di mana pusat penjaja?</div><div class="pi-pron">Dee ma-na pu-sat pen-ja-ja</div></div><button class="pi-btn" data-text="Di mana pusat penjaja?" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🛍️ Shopping & Bargaining</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">How much is this?</div><div class="pi-local">Berapa harga ini?</div><div class="pi-pron">Beh-ra-pa har-ga ee-nee</div></div><button class="pi-btn" data-text="Berapa harga ini?" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Too expensive</div><div class="pi-local">Mahal sangat</div><div class="pi-pron">Ma-hal sa-ngat</div></div><button class="pi-btn" data-text="Mahal sangat" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Can you reduce the price?</div><div class="pi-local">Boleh kurang sikit?</div><div class="pi-pron">Bo-leh ku-rang see-kit</div></div><button class="pi-btn" data-text="Boleh kurang sikit?" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I'll take it</div><div class="pi-local">Saya ambil ini</div><div class="pi-pron">Sa-ya am-bil ee-nee</div></div><button class="pi-btn" data-text="Saya ambil ini" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Just looking thanks</div><div class="pi-local">Tengok-tengok sahaja</div><div class="pi-pron">Teng-ok teng-ok sa-ha-ja</div></div><button class="pi-btn" data-text="Tengok-tengok sahaja" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Do you accept cards?</div><div class="pi-local">Boleh guna kad?</div><div class="pi-pron">Bo-leh goo-na kad</div></div><button class="pi-btn" data-text="Boleh guna kad?" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is the night market?</div><div class="pi-local">Di mana pasar malam?</div><div class="pi-pron">Dee ma-na pa-sar ma-lam</div></div><button class="pi-btn" data-text="Di mana pasar malam?" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🚕 Getting Around</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is...?</div><div class="pi-local">Di mana...?</div><div class="pi-pron">Dee ma-na</div></div><button class="pi-btn" data-text="Di mana...?" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Please take me here</div><div class="pi-local">Hantar saya ke sini</div><div class="pi-pron">Han-tar sa-ya ke see-nee</div></div><button class="pi-btn" data-text="Hantar saya ke sini" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Stop here please</div><div class="pi-local">Berhenti di sini</div><div class="pi-pron">Ber-hen-tee dee see-nee</div></div><button class="pi-btn" data-text="Berhenti di sini" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is the LRT station?</div><div class="pi-local">Di mana stesen LRT?</div><div class="pi-pron">Dee ma-na steh-sen LRT</div></div><button class="pi-btn" data-text="Di mana stesen LRT?" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is the toilet?</div><div class="pi-local">Di mana tandas?</div><div class="pi-pron">Dee ma-na tan-das</div></div><button class="pi-btn" data-text="Di mana tandas?" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">How far is it?</div><div class="pi-local">Berapa jauh?</div><div class="pi-pron">Beh-ra-pa ja-ooh</div></div><button class="pi-btn" data-text="Berapa jauh?" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">KLIA airport please</div><div class="pi-local">Ke lapangan terbang KLIA</div><div class="pi-pron">Ke la-pa-ngan ter-bang KLIA</div></div><button class="pi-btn" data-text="Ke lapangan terbang KLIA" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Petronas Towers please</div><div class="pi-local">Ke Menara Petronas</div><div class="pi-pron">Ke meh-na-ra Petronas</div></div><button class="pi-btn" data-text="Ke Menara Petronas" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🏨 Hotel</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I have a reservation</div><div class="pi-local">Saya ada tempahan</div><div class="pi-pron">Sa-ya ada tem-pa-han</div></div><button class="pi-btn" data-text="Saya ada tempahan" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is the breakfast?</div><div class="pi-local">Di mana tempat sarapan?</div><div class="pi-pron">Dee ma-na tem-pat sa-ra-pan</div></div><button class="pi-btn" data-text="Di mana tempat sarapan?" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">The air conditioning is broken</div><div class="pi-local">Aircond rosak</div><div class="pi-pron">Air-cond ro-sak</div></div><button class="pi-btn" data-text="Aircond rosak" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">More towels please</div><div class="pi-local">Tuala lagi, boleh?</div><div class="pi-pron">Too-a-la la-gee bo-leh</div></div><button class="pi-btn" data-text="Tuala lagi, boleh?" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">What time is check out?</div><div class="pi-local">Pukul berapa check out?</div><div class="pi-pron">Pu-kool beh-ra-pa check out</div></div><button class="pi-btn" data-text="Pukul berapa check out?" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🏥 Medical & Emergency</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I need a doctor</div><div class="pi-local">Saya perlukan doktor</div><div class="pi-pron">Sa-ya per-loo-kan dok-tor</div></div><button class="pi-btn" data-text="Saya perlukan doktor" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Please call an ambulance</div><div class="pi-local">Tolong panggil ambulans</div><div class="pi-pron">To-long pang-gil am-boo-lans</div></div><button class="pi-btn" data-text="Tolong panggil ambulans" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I am allergic to...</div><div class="pi-local">Saya alah kepada...</div><div class="pi-pron">Sa-ya a-lah ke-pa-da</div></div><button class="pi-btn" data-text="Saya alah kepada..." data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I have a stomach ache</div><div class="pi-local">Saya sakit perut</div><div class="pi-pron">Sa-ya sa-kit pe-root</div></div><button class="pi-btn" data-text="Saya sakit perut" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I have a fever</div><div class="pi-local">Saya demam</div><div class="pi-pron">Sa-ya deh-mam</div></div><button class="pi-btn" data-text="Saya demam" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is the hospital?</div><div class="pi-local">Di mana hospital?</div><div class="pi-pron">Dee ma-na hos-pi-tal</div></div><button class="pi-btn" data-text="Di mana hospital?" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Help!</div><div class="pi-local">Tolong!</div><div class="pi-pron">To-long</div></div><button class="pi-btn" data-text="Tolong!" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Call the police please</div><div class="pi-local">Tolong panggil polis</div><div class="pi-pron">To-long pang-gil po-lis</div></div><button class="pi-btn" data-text="Tolong panggil polis" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I've been robbed</div><div class="pi-local">Saya telah dirompak</div><div class="pi-pron">Sa-ya teh-lah dee-rom-pak</div></div><button class="pi-btn" data-text="Saya telah dirompak" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I am lost</div><div class="pi-local">Saya sesat</div><div class="pi-pron">Sa-ya seh-sat</div></div><button class="pi-btn" data-text="Saya sesat" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🏨 Hotels & Transport</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to the Paradox Clarke Quay please</div><div class="pi-local">Hantar saya ke Paradox Singapore Clarke Quay, 10 Coleman Street</div><div class="pi-pron">Han-tar sa-ya ke Paradox Singapore</div></div><button class="pi-btn" data-text="Hantar saya ke Paradox Singapore Clarke Quay, 10 Coleman Street" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Marina Bay Sands please</div><div class="pi-local">Hantar saya ke Marina Bay Sands, 10 Bayfront Avenue</div><div class="pi-pron">Han-tar sa-ya ke Marina Bay Sands</div></div><button class="pi-btn" data-text="Hantar saya ke Marina Bay Sands, 10 Bayfront Avenue" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Crowne Plaza Changi please</div><div class="pi-local">Hantar saya ke Crowne Plaza Changi Airport</div><div class="pi-pron">Han-tar sa-ya ke Crowne Plaza Changi</div></div><button class="pi-btn" data-text="Hantar saya ke Crowne Plaza Changi Airport" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to The Ritz-Carlton KL please</div><div class="pi-local">Hantar saya ke The Ritz-Carlton Kuala Lumpur, Jalan Imbi</div><div class="pi-pron">Han-tar sa-ya ke The Ritz-Carlton</div></div><button class="pi-btn" data-text="Hantar saya ke The Ritz-Carlton Kuala Lumpur, Jalan Imbi" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Sama Sama Hotel KLIA please</div><div class="pi-local">Hantar saya ke Sama Sama Hotel KLIA</div><div class="pi-pron">Han-tar sa-ya ke Sama Sama Hotel</div></div><button class="pi-btn" data-text="Hantar saya ke Sama Sama Hotel KLIA" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to KLIA airport please</div><div class="pi-local">Hantar saya ke lapangan terbang KLIA</div><div class="pi-pron">Han-tar sa-ya ke KLIA</div></div><button class="pi-btn" data-text="Hantar saya ke lapangan terbang KLIA" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Petronas Towers please</div><div class="pi-local">Hantar saya ke Menara Petronas, KLCC</div><div class="pi-pron">Han-tar sa-ya ke Menara Petronas</div></div><button class="pi-btn" data-text="Hantar saya ke Menara Petronas, KLCC" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to this address please</div><div class="pi-local">Hantar saya ke alamat ini</div><div class="pi-pron">Han-tar sa-ya ke a-la-mat ee-nee</div></div><button class="pi-btn" data-text="Hantar saya ke alamat ini" data-lang="ms-MY" onclick="speakIt(event,this)">&#128266;</button></div>
</div>

</div>

<script>
var _overlayText="",_overlayLang="";
function showPhraseLarge(card){
  var local=card.querySelector(".pi-local").textContent;
  var english=card.querySelector(".pi-en").textContent;
  var btn=card.querySelector(".pi-btn");
  var lang=btn?btn.getAttribute("data-lang"):"vi-VN";
  _overlayText=local; _overlayLang=lang;
  document.getElementById("overlay-local").textContent=local;
  document.getElementById("overlay-english").textContent=english;
  var ov=document.getElementById("phrase-overlay");
  ov.style.display="flex";
  doSpeak(local,lang,document.getElementById("overlay-speak-btn"));
}
function closeOverlay(){
  document.getElementById("phrase-overlay").style.display="none";
  window.speechSynthesis&&window.speechSynthesis.cancel();
}
function speakOverlay(e){e.stopPropagation();doSpeak(_overlayText,_overlayLang,this);}
function speakIt(e,btn){e.stopPropagation();doSpeak(btn.getAttribute("data-text"),btn.getAttribute("data-lang"),btn);}
function doSpeak(text,lang,btn){
  if(!window.speechSynthesis)return;
  window.speechSynthesis.cancel();
  var utt=new SpeechSynthesisUtterance(text);
  utt.lang=lang; utt.rate=0.8;
  var voices=window.speechSynthesis.getVoices();
  var match=voices.find(function(v){return v.lang===lang;})||voices.find(function(v){return v.lang.startsWith(lang.split("-")[0]);});
  if(match)utt.voice=match;
  if(btn){btn.innerHTML="&#128265;";utt.onend=function(){btn.innerHTML="&#128266;";};utt.onerror=function(){btn.innerHTML="&#128266;";};}
  window.speechSynthesis.speak(utt);
}
function switchLang(lang,btn){
  document.querySelectorAll(".lang-panel").forEach(function(el){el.style.display="none";});
  document.getElementById("lang-"+lang).style.display="block";
  document.querySelectorAll(".lang-tab").forEach(function(el){el.classList.remove("lang-tab-active");});
  btn.classList.add("lang-tab-active");
}
if(window.speechSynthesis){
  window.speechSynthesis.getVoices();
  if(window.speechSynthesis.onvoiceschanged!==undefined){window.speechSynthesis.onvoiceschanged=function(){window.speechSynthesis.getVoices();};}
}
</script>

<footer>Wallys on Tour &nbsp;&middot;&nbsp; 120 phrases &nbsp;&middot;&nbsp; Tap a row to show full-screen &nbsp;&middot;&nbsp; &#128266; to speak</footer>

`;
export default content;
