const content = `

<div class="cover">
<div class="cover-inner">
    <div class="cover-eyebrow">Wallys on Tour &nbsp;&middot;&nbsp; Companion Guide</div>
    <div class="cover-title">What to <em>Eat</em><br>&amp; Drink</div>
    <div class="cover-sub">A field guide to the essential dishes of Southeast Asia</div>
    <div class="cover-rule"></div>
    <div class="cover-countries">
      <div class="cover-country"><span class="cover-country-label">Chapter 1</span><span class="cover-country-value">🇻🇳 Vietnam</span></div>
      <div class="cover-country"><span class="cover-country-label">Chapter 2</span><span class="cover-country-value">☕ Vietnamese Coffee</span></div>
      <div class="cover-country"><span class="cover-country-label">Chapter 3</span><span class="cover-country-value">🇸🇬 Singapore</span></div>
      <div class="cover-country"><span class="cover-country-label">Chapter 4</span><span class="cover-country-value">🇲🇾 Kuala Lumpur</span></div>
    </div>
    <div class="cover-note">Vietnamese cuisine is one of the most regional food cultures in the world — what's served in Ho Chi Minh City is meaningfully different from what's served in Hội An, which is different again from Huế. This guide follows the family's route north through Vietnam before crossing into Singapore and Malaysia. Each dish is listed where you're most likely to encounter it — and which ones Piper might actually eat.</div>
  
</div>
</div>

<!-- TAB BAR -->
<div class="food-tabs-bar">
  <button class="food-tab food-tab-active" onclick="switchFoodTab(\'dishes\')">🍜 Dishes</button>
  <button class="food-tab" onclick="switchFoodTab(\'coffee\')">☕ Coffee</button>
  <button class="food-tab" onclick="switchFoodTab(\'restaurants\')">🍽️ Restaurants</button>
\n</div>

<!-- TAB: DISHES -->
<div class="food-tab-content" id="tab-dishes">
<!-- ════ CHAPTER 1 — VIETNAM ════ -->
<div class="chapter">
  <div class="chapter-header">
    <div class="chapter-flag">🇻🇳</div>
    <div class="chapter-titles">
      <div class="chapter-eyebrow">Chapter One</div>
      <div class="chapter-title">Vietnam</div>
      <div class="chapter-sub">Ho Chi Minh City · Can Tho · Hội An · Huế</div>
    </div>
  </div>

  <!-- HO CHI MINH CITY -->
  <div class="city-label"><div class="city-label-line"></div><div class="city-label-text">Ho Chi Minh City &amp; the South</div><div class="city-label-line"></div></div>

  <div class="food-grid">

    <div class="food-card">
      <img class="food-card-img" src="/images/ph.jpg" alt="Phở" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🍜</div>
      <div class="food-card-body">
        <div class="food-card-name">Phở</div>
        <div class="food-card-viet">Phở bò (beef) &amp; phở gà (chicken)</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-piper">Piper approved</span></div>
        <div class="food-card-desc">Vietnam's national dish and the one most likely to become a daily habit. A clear, deeply aromatic broth simmered for hours with charred onion, ginger, star anise, cinnamon, and cloves — served over flat rice noodles with thin slices of beef (or chicken), fresh basil, bean sprouts, lime, and chilli on the side. The southern (Saigon) style tends to be sweeter and is served with a larger pile of herbs than the northern version. The correct way to eat it: add lime first, then taste the broth before adding anything else.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> Morning Glory in Hội An serves their own exceptional phở — a bowl there before the Day 9 lantern festival would be a fine way to start the evening.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/b-nh-m.jpg" alt="Bánh Mì" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🥖</div>
      <div class="food-card-body">
        <div class="food-card-name">Bánh Mì</div>
        <div class="food-card-viet">The Vietnamese sandwich</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-piper">Piper approved</span><span class="tag tag-where">Everywhere</span></div>
        <div class="food-card-desc">One of the great legacies of French colonialism: a light, crispy baguette — shorter and airier than a French original — filled with pâté, cold cuts, pickled daikon and carrot, fresh coriander, sliced cucumber, chilli, and a drizzle of house sauce. Assembled in about 30 seconds, costs around 25,000 VND (~AUD $1.50), and is genuinely one of the best things you'll eat on this trip. The most famous version is at Bánh Mì Phượng in Hội An — Anthony Bourdain's endorsed favourite. Eat it for breakfast.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> Two great options: <strong>My Bánh Mì</strong> (opposite Notre Dame, HCMC — the family's own recommendation from last time, Day 5 lunch) and <strong>Bánh Mì Phượng</strong> (Hội An, in the restaurant guide — queue before 8am).</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/c-m-t-m.jpg" alt="Cơm Tấm" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🍽️</div>
      <div class="food-card-body">
        <div class="food-card-name">Cơm Tấm</div>
        <div class="food-card-viet">Broken rice — the Saigon staple</div>
        <div class="food-card-tags"><span class="tag tag-where">HCMC</span><span class="tag tag-must">Must try</span></div>
        <div class="food-card-desc">Broken rice (the small fragments that fall through the rice mill grader, once sold cheap to the poor) served with grilled pork chop (sườn nướng), shredded pork skin (bì), a steamed egg cake (chả trứng), pickled vegetables, cucumber, spring onion oil, and a bowl of fish-sauce-based dipping sauce. A quintessentially Saigonese dish — eaten at any hour, wildly satisfying, almost impossible to eat in one sitting. The chargrilled pork chop is the star.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/b-nh-x-o.jpg" alt="Bánh Xèo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🥞</div>
      <div class="food-card-body">
        <div class="food-card-name">Bánh Xèo</div>
        <div class="food-card-viet">"Sizzling cake" — Vietnamese crispy crepe</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-where">Everywhere</span></div>
        <div class="food-card-desc">A large, bright-yellow crepe made from rice flour, coconut milk, and turmeric, sizzled in a screaming hot pan (the "xèo" is the sound it makes) and stuffed with pork belly, shrimp, bean sprouts, and green onion. You tear off pieces, wrap them in lettuce and mint leaves, and dip in nuoc cham (sweet fish sauce). The wrapping and dipping is the fun — it's a hands-on, share-at-the-table dish. One of the most satisfying things in Vietnamese cuisine.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/h-ti-u.webp" alt="Hủ Tiếu" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🍜</div>
      <div class="food-card-body">
        <div class="food-card-name">Hủ Tiếu</div>
        <div class="food-card-viet">The Mekong noodle soup</div>
        <div class="food-card-tags"><span class="tag tag-where">HCMC &amp; Can Tho</span></div>
        <div class="food-card-desc">A southern and Mekong Delta speciality — lighter and more delicate than phở, made with a pork-and-dried-seafood broth and chewy tapioca noodles. Toppings vary enormously but often include minced pork, shrimp, sliced pork offal, quail eggs, and a mountain of fresh herbs. You'll encounter it everywhere in Can Tho. Can be ordered "dry" (khô) with the broth served separately in a small bowl for dipping — the dry version is particularly good.</div>
      </div>
    </div>

  </div><!-- /food-grid HCMC -->

  <!-- MEKONG DELTA -->
  <div class="city-label"><div class="city-label-line"></div><div class="city-label-text">Can Tho &amp; the Mekong Delta</div><div class="city-label-line"></div></div>

  <div class="food-grid">

    <div class="food-card">
      <img class="food-card-img" src="/images/c-tai-t-ng.jpg" alt="Cá Tai Tượng" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🐟</div>
      <div class="food-card-body">
        <div class="food-card-name">Cá Tai Tượng Chiên Xù</div>
        <div class="food-card-viet">Elephant ear fish — the Mekong showstopper</div>
        <div class="food-card-tags"><span class="tag tag-must">Delta speciality</span><span class="tag tag-where">Can Tho</span></div>
        <div class="food-card-desc">A whole giant gourami fish, deep-fried until the scales fan out like elephant ears (hence the name), served standing upright at the table. You tear the crispy flesh apart with chopsticks, wrap it in rice paper with herbs, cucumber, and pickled vegetables, and dip in a sweet-and-sour fish sauce. A theatrical dish and a Mekong Delta icon.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> The home-cooked lunch at a local family's house on the <strong>Jason SSS Tours Day 6 Mekong journey</strong> will almost certainly feature this — it's the signature dish of the delta and appears at virtually every local lunch stop.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/g-i-cu-n.jpg" alt="Gỏi Cuốn">
      <div class="food-card-body">
        <div class="food-card-name">Gỏi Cuốn</div>
        <div class="food-card-viet">Fresh spring rolls — not fried</div>
        <div class="food-card-tags"><span class="tag tag-piper">Piper approved</span><span class="tag tag-where">Everywhere</span></div>
        <div class="food-card-desc">Translucent rice paper rolls filled with shrimp, pork, rice vermicelli, lettuce, mint, and coriander — eaten cold, fresh, and entirely uncooked except for the proteins. Served with a peanut-hoisin dipping sauce. Not to be confused with chả giò (fried spring rolls — also delicious but a different thing entirely). Gỏi cuốn are light, fresh, and one of the best gateway dishes for anyone cautious about Vietnamese flavours. Piper will likely eat these enthusiastically.</div>
      </div>
    </div>

  </div>

  <!-- HOI AN -->
  <div class="city-label"><div class="city-label-line"></div><div class="city-label-text">Hội An — The Most Distinctive Food City in Vietnam</div><div class="city-label-line"></div></div>

  <div class="food-grid">

    <div class="food-card">
      <img class="food-card-img" src="/images/cao-l-u.webp" alt="Cao Lầu" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🍜</div>
      <div class="food-card-body">
        <div class="food-card-name">Cao Lầu</div>
        <div class="food-card-viet">The noodle dish that cannot exist outside Hội An</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-where">Hội An only</span></div>
        <div class="food-card-desc">Cao lầu is arguably the most place-specific dish in all of Vietnam. The thick, chewy rice noodles — yellow-tinged from lye water — can only be made authentically using water drawn from a single ancient well in Hội An, the Ba Le Well, whose unique mineral composition gives the noodles their texture. The dish is served with char siu pork, crispy fried croutons of the same noodle dough, bean sprouts, and fresh herbs. It is definitively not soup — it's a dry, rich, texturally complex bowl.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> <strong>Morning Glory</strong> (Hội An restaurant guide) serves an exceptional version — order it at the Day 9 birthday dinner. Also served at <strong>Vy's Market Restaurant</strong> — perfect for the Day 11 family lunch after the cooking class.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/white-rose-dumplings.webp" alt="White Rose Dumplings" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🌸</div>
      <div class="food-card-body">
        <div class="food-card-name">Bánh Bao Bánh Vạc</div>
        <div class="food-card-viet">White Rose dumplings</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-where">Hội An only</span><span class="tag tag-piper">Piper approved</span></div>
        <div class="food-card-desc">Delicate, translucent rice paper dumplings shaped into rose blossoms, filled with seasoned shrimp or pork, steamed and topped with crispy shallots and served with dipping sauce. One of the most visually striking dishes in Vietnamese cuisine. The recipe is owned by a single Hội An family and no one else is licensed to make them — you will only encounter the real thing in Hội An itself. Visually gentle enough for cautious eaters, delicious enough for everyone else.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> <strong>Morning Glory</strong> serves them. And here's a plan worth making: <strong>Vy's Market Restaurant</strong> — the same Ms Vy venue where Cat and Gigi are doing the Day 11 cooking class — is open to the public and serves White Rose Dumplings, Cao Lầu, and Mì Quảng. When the cooking class wraps up and Ian, Grads, and Piper return from the basket boats, everyone could meet at Vy's Market for a family lunch. Cat and Gigi will still be buzzing from the class; Piper, Ian, and Grads will arrive damp and laughing from the coconut forest. A perfect reunion.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/m-qu-ng.jpg" alt="Mì Quảng" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🍜</div>
      <div class="food-card-body">
        <div class="food-card-name">Mì Quảng</div>
        <div class="food-card-viet">Quảng Nam turmeric noodles</div>
        <div class="food-card-tags"><span class="tag tag-must">Regional star</span><span class="tag tag-where">Hội An &amp; Da Nang</span></div>
        <div class="food-card-desc">Broad, flat turmeric-yellow noodles served in a small amount of rich, reduced broth — more sauce than soup — with pork, shrimp, quail eggs, crushed peanuts, sesame rice crackers, and a pile of fresh herbs and banana blossom. The broth is intense, nutty, and deeply savoury. Unlike phở, it's not meant to be a broth dish — you mix it together like a dressed noodle salad. One of the most complex flavour profiles you'll encounter on the trip.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> <strong>Vy's Market Restaurant</strong> (Hội An) is one of the best places to try it — another reason to make Day 11 the family lunch gathering there after the cooking class.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/c-m-g-h-i-an.webp" alt="Cơm Gà Hội An">
      <div class="food-card-body">
        <div class="food-card-name">Cơm Gà Hội An</div>
        <div class="food-card-viet">Hội An chicken rice</div>
        <div class="food-card-tags"><span class="tag tag-where">Hội An</span><span class="tag tag-piper">Piper approved</span></div>
        <div class="food-card-desc">Hội An's version of poached chicken rice — closely related to Hainanese chicken rice but distinctly its own. The chicken is poached until silky-tender, shredded and mixed with shallot, lemongrass, and herbs, then served over rice cooked in chicken stock. Eaten at room temperature, not hot. The seasoning — a mix of lime, chilli, and lemongrass-infused chicken fat — makes the rice more flavourful than you'd expect. A lighter, simpler option on a hot day when heavy noodle soup feels like too much.</div>
      </div>
    </div>

  </div>

  <!-- HUE -->
  <div class="city-label"><div class="city-label-line"></div><div class="city-label-text">Huế — The Royal Food Capital</div><div class="city-label-line"></div></div>

  <div class="food-grid">

    <div class="food-card">
      <img class="food-card-img" src="/images/b-n-b-hu.jpg" alt="Bún Bò Huế" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🍜</div>
      <div class="food-card-body">
        <div class="food-card-name">Bún Bò Huế</div>
        <div class="food-card-viet">Huế's spicy lemongrass beef noodle soup</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-where">Huế</span></div>
        <div class="food-card-desc">Many food writers consider this the finest noodle soup in Vietnam — bolder and more complex than phở. The broth is made from pork and beef bones slow-cooked with lemongrass, shrimp paste (mắm ruốc), and annatto oil for colour, then spiced with chilli to give it a deep, building heat. Served with thick round rice noodles, sliced beef shank, pork knuckle, and cubes of congealed pork blood. The lemongrass perfume is extraordinary. Not a mild dish — approach with enthusiasm.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> <strong>Quán Bún Bò Mụ Rớt</strong> is in the Huế restaurant guide specifically for this — one of the city's most celebrated spots for the dish. Perfect for a lunch stop after the Imperial City on Day 13.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/b-nh-kho-i.jpg" alt="Bánh Khoái" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🥞</div>
      <div class="food-card-body">
        <div class="food-card-name">Bánh Khoái</div>
        <div class="food-card-viet">Huế's royal crispy pancake</div>
        <div class="food-card-tags"><span class="tag tag-where">Huế</span><span class="tag tag-must">Regional speciality</span></div>
        <div class="food-card-desc">Similar to bánh xèo but smaller, crispier, and with a richer filling — shrimp, pork, bean sprouts, and egg yolk — cooked in a small individual cast-iron pan and eaten wrapped in rice paper with mustard greens, mint, and a thick peanut-and-sesame dipping sauce unique to Huế. The sauce is the distinction: darker, thicker, and more complex than the nuoc cham served with southern crepes.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> <strong>Lạc Thiên</strong> in the Huế restaurant guide explicitly recommends ordering bánh khoái — a good casual lunch after the tombs trail on Day 14.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/c-m-h-n.jpg" alt="Cơm Hến" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🐚</div>
      <div class="food-card-body">
        <div class="food-card-name">Cơm Hến</div>
        <div class="food-card-viet">Baby mussel rice — Huế's most local dish</div>
        <div class="food-card-tags"><span class="tag tag-where">Huế only</span><span class="tag tag-must">Genuinely local</span></div>
        <div class="food-card-desc">Cold rice topped with tiny baby mussels from the Perfume River, peanuts, sesame seeds, crispy pork skin, pickled vegetables, fresh herbs, chilli, and a small amount of warm mussel broth poured over everything at the table. The flavour is intense — savoury, funky, spicy, and layered — and the combination of textures is unlike anything else in Vietnamese cuisine. The most authentically Huế dish you can eat. Served for breakfast and lunch only.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> <strong>Lạc Thiên</strong> in the Huế restaurant guide lists cơm hến alongside bánh khoái — both on the same menu, both recommended.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/b-nh-b-o.webp" alt="Bánh Bèo">
      <div class="food-card-body">
        <div class="food-card-name">Bánh Bèo</div>
        <div class="food-card-viet">Steamed water fern cakes</div>
        <div class="food-card-tags"><span class="tag tag-where">Huế</span><span class="tag tag-sweet">Delicate</span></div>
        <div class="food-card-desc">Small, shallow steamed rice flour cakes — about the size of a teacup saucer — topped with dried shrimp, crispy pork skin, and shallot oil, then dipped in fish sauce. Eaten in quantity: a typical order is 10–12 individual cakes. One of the most traditional of Huế's royal court dishes — the cuisine of the Nguyễn emperors was famous for small, delicate preparations eaten in many small servings rather than large portions.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> <strong>Kim Long Dining</strong> at Bach Ma House (your Huế hotel's royal costume restaurant) almost certainly serves bánh bèo as part of the imperial feast menu — you may well eat these while dressed as Nguyễn Dynasty courtiers.</div>
      </div>
    </div>

  </div>

</div><!-- /chapter Vietnam -->
<!-- ════ CHAPTER 3 — SINGAPORE ════ -->
<div class="chapter">
  <div class="chapter-header">
    <div class="chapter-flag">🇸🇬</div>
    <div class="chapter-titles">
      <div class="chapter-eyebrow">Chapter Three</div>
      <div class="chapter-title">Singapore</div>
      <div class="chapter-sub">Clarke Quay · Chinatown · Sentosa · Marina Bay</div>
    </div>
  </div>

  <p style="font-size:14.5px;line-height:1.8;margin-bottom:28px;max-width:720px;color:#2a2018;">Singapore has no national cuisine of its own — it has the food of every culture that settled here: Hokkien Chinese, Cantonese, Malay, Tamil Indian, Peranakan (Straits Chinese), and the colonial European legacy. The result is one of the most concentrated and extraordinary food cities on earth. The hawker centres — covered open-air food courts where each stall has cooked the same dish for decades, sometimes generations — are the heart of it.</p>

  <div class="food-grid">

    <div class="food-card">
      <img class="food-card-img" src="/images/chilli-crab.webp" alt="Chilli Crab" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🦀</div>
      <div class="food-card-body">
        <div class="food-card-name">Chilli Crab</div>
        <div class="food-card-viet">Singapore's national dish — the messy one</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-where">Jumbo Seafood — booked for Day 18</span></div>
        <div class="food-card-desc">Sri Lankan mud crab cooked in a rich, tomatoey, egg-thickened chilli sauce that is simultaneously sweet, tangy, spicy, and deeply savoury. The sauce is arguably more important than the crab — order the fried mantou (bao buns) to mop it up and do not waste a drop. Order alongside black pepper crab for the full experience. Bibs are provided. Eating it is entirely a hands-on operation. The family will be uniformly messy and uniformly happy.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> Already booked — <strong>Jumbo Seafood, Riverside Point</strong>, Day 18. Walking distance from Paradox Clarke Quay. The restaurant guide has the full ordering strategy.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/hainanese-chicken-rice.jpg" alt="Hainanese Chicken Rice" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🍗</div>
      <div class="food-card-body">
        <div class="food-card-name">Hainanese Chicken Rice</div>
        <div class="food-card-viet">The dish Singapore shares with Hội An</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-where">Maxwell Food Centre — Day 18</span><span class="tag tag-piper">Piper approved</span></div>
        <div class="food-card-desc">Poached chicken, served at room temperature, over rice cooked in chicken stock with ginger and garlic. Three dipping sauces: chilli sauce, ginger paste, and dark soy. Deceptively simple, endlessly satisfying. The chicken at a great chicken rice stall is silky to a degree that will make everyone reconsider how they've been cooking chicken at home.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> <strong>Tian Tian Hainanese Chicken Rice, Maxwell Food Centre</strong> — Michelin Bib Gourmand. On the Day 18 Chinatown itinerary. Queue before 11am opening for the shortest wait. Leave tissues on the table to "chope" your seats while Cat and Ian queue.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/satay.jpg" alt="Satay" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🍢</div>
      <div class="food-card-body">
        <div class="food-card-name">Satay</div>
        <div class="food-card-viet">Charcoal-grilled skewers with peanut sauce</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-where">Lau Pa Sat — Day 19</span><span class="tag tag-piper">Piper approved</span></div>
        <div class="food-card-desc">Thin strips of marinated meat threaded on skewers and grilled over charcoal, served with ketupat (compressed rice), cucumber, raw onion, and a thick, freshly made peanut sauce. Chicken, beef, and mutton are the classics. The Malay origins mean the marinade is built on turmeric, lemongrass, and galangal — deeply aromatic.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> Two great options: <strong>Lau Pa Sat (Boon Tat Street outdoor stalls)</strong> on Day 19 evening after Sentosa — plastic stools, cold Tiger beer, perfect. Or <strong>Violet Oon Satay Bar &amp; Grill</strong> at Clarke Quay (in the Singapore restaurant guide) for a more elevated version with the 150-day grain-fed beef satay.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/char-kway-teow.jpg" alt="Char Kway Teow" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🍜</div>
      <div class="food-card-body">
        <div class="food-card-name">Char Kway Teow</div>
        <div class="food-card-viet">Flat rice noodles — the wok hei dish</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-where">Any hawker centre</span></div>
        <div class="food-card-desc">Flat rice noodles stir-fried at extreme heat in a carbon-seasoned wok with egg, Chinese sausage (lap cheong), bean sprouts, cockles, and dark soy sauce. The defining quality is "wok hei" — the smoky, slightly charred flavour that only comes from a screaming-hot wok and an expert hand. The best char kway teow will have a faint smokiness that lingers well after the last bite.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> <strong>Maxwell Food Centre</strong>, Day 18 — order from a separate stall alongside the Tian Tian chicken rice. The two together make the perfect hawker lunch and give a genuine feel for how a Singapore meal works.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/siu-mei-roast-meats.jpg" alt="Siu Mei Roast Meats" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🦆</div>
      <div class="food-card-body">
        <div class="food-card-name">Siu Mei — Cantonese Roast Meats</div>
        <div class="food-card-viet">Char siu · siu yok · roast duck over rice or noodles</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-where">Maxwell Food Centre — Fu Shun, Stall #01-71</span><span class="tag tag-piper">Piper approved</span></div>
        <div class="food-card-desc">The Cantonese art of roasting meats at its hawker centre best — a glistening display of hanging char siu (barbecue pork glazed in sweet soy and prune sauce, caramelised over charcoal), siu yok (roast pork belly with crackling so loud you can hear it being cut), and whole roast duck marinated in five spice and hung to dry until the skin crisps perfectly. You pick two or three meats, choose rice or springy Hong Kong-style noodles, and it arrives with the stall's own sauce and Chinese greens. One of the most satisfying combinations in any hawker centre in Singapore.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> <strong>Fu Shun Jin Ji Shao La Mian Jia, Stall #01-71, Maxwell Food Centre</strong> — the stall Cat discovered last time, with the long queue that starts forming before it opens. This is the one. Char siu roasted over charcoal, duck marinated in five spice, pork belly with crackling skin. From SGD $4. Queue early — waiting time at lunch can be 20–30 minutes but it is worth every minute. Right there at Maxwell on Day 18 alongside the chicken rice.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/laksa.png" alt="Laksa" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🍜</div>
      <div class="food-card-body">
        <div class="food-card-name">Laksa</div>
        <div class="food-card-viet">Coconut curry noodle soup — the Peranakan masterpiece</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-where">Any hawker centre</span></div>
        <div class="food-card-desc">A Peranakan (Straits Chinese) creation: thick rice noodles in a rich, spiced coconut curry broth with prawns, fish cake, tofu puffs, and cockles — finished with a dollop of sambal chilli paste and fresh laksa leaves (a specific variety of Vietnamese coriander). The broth is simultaneously sweet (coconut), spicy (chilli), aromatic (galangal, lemongrass, turmeric), and deeply savoury (dried shrimp paste). One of the most complex and satisfying bowls of food in Southeast Asia. Katong Laksa is the most famous version in Singapore.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/kaya-toast.jpg" alt="Kaya Toast" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🍳</div>
      <div class="food-card-body">
        <div class="food-card-name">Kaya Toast &amp; Soft-Boiled Eggs</div>
        <div class="food-card-viet">The Singapore breakfast ritual</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-where">Jewel Changi — Toast Box</span><span class="tag tag-piper">Piper approved</span></div>
        <div class="food-card-desc">Thin slices of white bread, toasted, spread with kaya (a coconut-and-egg jam perfumed with pandan) and cold butter — served alongside two soft-boiled eggs seasoned with dark soy and white pepper, and a cup of kopi (coffee with condensed milk) or teh (tea with condensed milk). The eggs are broken into a small dish and eaten with a spoon, mixed with the soy. Simple, ancient, and completely satisfying.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> <strong>Toast Box at Jewel Changi</strong> is specifically mentioned in the Singapore Day 21 guide as a breakfast option — the perfect first meal at Jewel before exploring the Rain Vortex and Forest Valley. A quiet, civilised Singapore farewell.</div>
      </div>
    </div>

  </div>


    <div class="food-card">
      <img class="food-card-img" src="/images/sugarcane-juice.jpg" alt="Sugarcane Juice">
      <div class="food-card-body">
        <div class="food-card-name">Sugarcane Juice &amp; Fresh Lime Juice</div>
        <div class="food-card-viet">The hawker centre drinks &mdash; cold, sweet, and essential</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-piper">Piper approved</span><span class="tag tag-where">Any hawker centre</span></div>
        <div class="food-card-desc"><strong>Fresh sugarcane juice</strong> is pressed to order at dedicated juice stalls &mdash; whole canes fed through a rolling press, the pale green juice collected over ice. Sweet, grassy, and incredibly refreshing in Singapore heat. Often served with a squeeze of calamansi lime. <strong>Fresh lime juice</strong> (limau kasturi) is made from calamansi &mdash; the small, intensely fragrant citrus fruit found across Southeast Asia, sweeter and more aromatic than regular lime, served with sugar syrup to adjust the sweetness. Both cost around SGD $1.50&ndash;$2. Piper will love both &mdash; watching the sugarcane go through the press is half the experience.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> <strong>Hu Ru Beverages, Maxwell Food Centre</strong> &mdash; right there at the Day 18 Chinatown lunch. Order one of each while Gigi and Grads hold the table. Also at Lau Pa Sat on Day 19 and at hawker stalls across Malaysia on Day 22.</div>
      </div>
    </div>

  </div>

</div><!-- /chapter Singapore -->


<!-- ════ CHAPTER 4 — KUALA LUMPUR ════ -->
<div class="chapter">
  <div class="chapter-header">
    <div class="chapter-flag">🇲🇾</div>
    <div class="chapter-titles">
      <div class="chapter-eyebrow">Chapter Four</div>
      <div class="chapter-title">Kuala Lumpur</div>
      <div class="chapter-sub">Bukit Bintang · KLCC · Jalan Alor</div>
    </div>
  </div>

  <p style="font-size:14.5px;line-height:1.8;margin-bottom:28px;max-width:720px;color:#2a2018;">Malaysian food reflects its three main communities — Malay, Chinese, and Tamil Indian — plus the Peranakan (Straits Chinese) fusion that developed over centuries. KL is one of the most exciting food cities in Asia and the family has just one full day there. The Ritz-Carlton breakfast and Jalan Alor street market at night are both covered in the guide — this chapter gives context for what to order.</p>

  <div class="food-grid">

    <div class="food-card">
      <img class="food-card-img" src="/images/nasi-lemak.jpg" alt="Nasi Lemak" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🍛</div>
      <div class="food-card-body">
        <div class="food-card-name">Nasi Lemak</div>
        <div class="food-card-viet">Malaysia's national dish</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-where">Everywhere in KL</span></div>
        <div class="food-card-desc">Fragrant rice cooked in coconut milk and pandan leaf, served with sambal (spicy chilli paste), ikan bilis (crispy dried anchovies), roasted peanuts, half a hard-boiled egg, and sliced cucumber. Sometimes accompanied by fried chicken or beef rendang. Traditionally a breakfast dish. The sambal is the centrepiece — made fresh each morning, different at every stall.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> The <strong>Ritz-Carlton KL breakfast buffet</strong> will include a nasi lemak station — a luxurious way to try the national dish. But for the real thing, ask the hotel concierge for the nearest morning hawker stall; the street version (banana leaf, 8 ringgit, plastic stool) is a completely different and equally valid experience.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/roti-canai.jpg" alt="Roti Canai" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🫓</div>
      <div class="food-card-body">
        <div class="food-card-name">Roti Canai</div>
        <div class="food-card-viet">Flaky flatbread — the Tamil Indian contribution</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-piper">Piper approved</span><span class="tag tag-where">Any mamak stall</span></div>
        <div class="food-card-desc">Thin, flaky flatbread made from wheat dough stretched and folded repeatedly (a technique that creates the paper-thin layers), then cooked on a hot griddle until golden and crispy outside, soft and layered inside. Served with dal curry, fish curry, or just plain sugar. The "mamak" (Tamil Muslim) stalls that serve roti canai are open 24 hours and are the most democratic institution in KL — eaten by all communities, at all hours. At 11pm on Jalan Alor, roti canai from the mamak cart is the perfect last snack of the trip.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/bak-kut-teh.jpg" alt="Bak Kut Teh" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="food-card-img-placeholder" style="display:none">🍖</div>
      <div class="food-card-body">
        <div class="food-card-name">Bak Kut Teh</div>
        <div class="food-card-viet">Pork rib tea — the Hokkien Chinese breakfast</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-where">KL &amp; Singapore</span></div>
        <div class="food-card-desc">Pork ribs slow-braised for hours in a broth of white pepper (KL style) or five spice and dark soy (Singapore style) with garlic and herbs — served with rice, you tiao (fried dough sticks), and strong Chinese tea. The KL version is paler and more peppery; the Singapore version darker and more spiced.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> <strong>Ya Hua Bak Kut Teh</strong> is in the Singapore restaurant guide (on Havelock Road between Robertson Quay and Clarke Quay) — a short walk from Paradox, open from breakfast, serving the Singapore white-pepper style. For the KL version, ask in Petaling Street (Chinatown) on Day 22.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/lok-lok.jpg" alt="Lok Lok">
      <div class="food-card-body">
        <div class="food-card-name">Lok Lok</div>
        <div class="food-card-viet">Malaysian skewer hotpot — the Jalan Alor experience</div>
        <div class="food-card-tags"><span class="tag tag-where">Jalan Alor night market</span><span class="tag tag-piper">Piper approved</span></div>
        <div class="food-card-desc">Everything on a stick, cooked in a communal hotpot of boiling broth at the table. Skewers come pre-threaded with tofu, fishball, cuttlefish, prawn, mushroom, quail egg, beef, chicken — you pick what you want, cook in the broth, and dip in sweet chilli, peanut, or satay sauce. The colour-coded sticks count as your bill. Piper will love this — it's entirely customisable, interactive, and impossible to eat badly.<br><br><strong style="color:var(--warm)">&#9733; On your trip:</strong> <strong>Jalan Alor night market</strong> in Bukit Bintang — 5 minutes walk from the Ritz-Carlton, in the KL guide as the Day 22 evening street food option. The lok lok cart is right on the street alongside the satay stalls and the roti canai mamak.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/beef-rendang.jpg" alt="Beef Rendang">
      <div class="food-card-body">
        <div class="food-card-name">Beef Rendang</div>
        <div class="food-card-viet">The dry curry that takes a day to make</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-where">Any Malay restaurant</span></div>
        <div class="food-card-desc">Slow-cooked beef braised in coconut milk with lemongrass, galangal, chilli, turmeric, kaffir lime, and toasted coconut, cooked for hours until all the liquid has evaporated and the meat is coated in a deeply caramelised, dry paste. Unlike most curries it has almost no sauce — the flavour is entirely absorbed into the meat. The texture is tender-firm rather than falling-apart. One of the most complex and layered dishes in Southeast Asian cooking. Found at every nasi lemak stall, as an accompaniment. Also available as a main at Malay restaurants around KLCC.</div>
      </div>
    </div>

    <div class="food-card">
      <img class="food-card-img" src="/images/teh-tarik.png" alt="Teh Tarik">
      <div class="food-card-body">
        <div class="food-card-name">Teh Tarik</div>
        <div class="food-card-viet">"Pulled tea" — Malaysia's national drink</div>
        <div class="food-card-tags"><span class="tag tag-must">Must try</span><span class="tag tag-piper">Piper approved</span><span class="tag tag-where">Everywhere</span></div>
        <div class="food-card-desc">Strong black tea brewed with condensed milk, then "pulled" — poured back and forth between two containers from a height to create a thick, frothy head and cool it to drinking temperature. The pulling technique aerates the tea and gives it a uniquely smooth, almost creamy texture that's different from simply stirred tea. The performance of the pulling is part of the experience at mamak stalls. Served hot. Infinitely available. The Malaysian equivalent of the Italian espresso shot — functional, social, and deeply culturally embedded.</div>
      </div>
    </div>

  </div>
</div><!-- /chapter KL -->


<!-- USEFUL PHRASES -->

</div>

<!-- TAB: COFFEE -->
<div class="food-tab-content" id="tab-coffee" style="display:none">
<!-- ════ CHAPTER 2 — COFFEE ════ -->
<div class="coffee-section">
  <div class="coffee-header">
    <div class="chapter-flag" style="font-size:44px">☕</div>
    <div>
      <div style="font-family:'EB Garamond',serif;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:var(--gold-light);margin-bottom:5px;">Chapter Two</div>
      <div style="font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:var(--parchment);line-height:1.1;">Vietnamese Coffee</div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:17px;font-style:italic;color:rgba(245,239,224,0.6);margin-top:3px;">Cà Phê — the cult of the slow drip</div>
    </div>
  </div>

  <p style="color:rgba(245,239,224,0.8);font-size:14.5px;line-height:1.8;margin-bottom:28px;max-width:720px;">Vietnam is the second largest coffee exporter in the world, and coffee culture here is unlike anywhere else. The coffee is made with robusta beans — stronger, more bitter, and more caffeinated than arabica — dripped slowly through a small metal phin filter into a glass, often over condensed milk. The result is thick, intense, and sweet. You drink it while watching the world go by. It is one of the great small pleasures of this trip.</p>

  <div class="coffee-grid">

    <div class="coffee-card">
      <img class="coffee-card-img" src="/images/c-ph-s-a.jpg" alt="Cà Phê Sữa Đá" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="coffee-card-img-placeholder" style="display:none">☕</div>
      <div class="coffee-card-name">Cà Phê Sữa Đá</div>
      <div class="coffee-card-viet">Iced coffee with condensed milk</div>
      <div class="coffee-card-desc">The classic. Dark, strong coffee dripped slowly through a phin filter over sweetened condensed milk, then poured over a glass of ice. Rich, sweet, intensely caffeinated. The standard order at any café in southern Vietnam. Often served with the phin still dripping over the glass — you stir it yourself when it's done. This is what "Vietnamese coffee" means in the rest of the world. If you only drink one coffee on this trip, it should be this one. Order it as soon as you land in Saigon.</div>
    </div>

    <div class="coffee-card">
      <img class="coffee-card-img" src="/images/c-ph-tr-ng.jpg" alt="Cà Phê Trứng" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="coffee-card-img-placeholder" style="display:none">🥚</div>
      <div class="coffee-card-name">Cà Phê Trứng</div>
      <div class="coffee-card-viet">Egg coffee — a northern invention</div>
      <div class="coffee-card-desc">A Hanoi invention from the 1940s, when a bartender at the Sofitel Metropole substituted egg yolk for the condensed milk that was scarce during the French war. Today it's a Vietnamese institution: egg yolks whisked with condensed milk into a thick, creamy foam and spooned over a shot of dark coffee. The result tastes like a liquid tiramisu. Served warm in a small ceramic cup, often sitting in a bowl of warm water to keep it at temperature. Available across Vietnam despite its northern origins — and one of the most distinctive things you'll drink on this trip.</div>
    </div>

    <div class="coffee-card">
      <img class="coffee-card-img" src="/images/coconut-coffee.jpg" alt="Coconut Coffee" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="coffee-card-img-placeholder" style="display:none">🥥</div>
      <div class="coffee-card-name">Cà Phê Cốt Dừa</div>
      <div class="coffee-card-viet">Coconut coffee</div>
      <div class="coffee-card-desc">Strong Vietnamese coffee poured over a frozen blend of coconut milk, condensed milk, and sometimes coconut ice cream — thick, cold, and intensely coconutty. A more recent addition to Vietnamese café culture and wildly popular in the south. Somewhere between a coffee and a dessert.<br><br><strong style="color:var(--gold-light)">&#9733; On your trip:</strong> On Day 7 at the <strong>Cai Rang floating market</strong>, the Can Tho guide specifically mentions a coffee boat vendor that regulars call the <strong>"Mekong Starbucks"</strong> — famous for exactly this coconut coffee. Order one from the boat at sunrise. It's one of the great small moments of the trip.</div>
    </div>

    <div class="coffee-card">
      <img class="coffee-card-img" src="/images/c-ph-en.webp" alt="Cà Phê Đen Đá">
      <div class="coffee-card-name">Cà Phê Đen Đá</div>
      <div class="coffee-card-viet">Black iced coffee</div>
      <div class="coffee-card-desc">The same slow phin-drip process as cà phê sữa đá, but without condensed milk — just dark, pure, intensely strong Vietnamese robusta coffee over ice. The lack of sweetness lets the coffee itself speak: bitter, chocolatey, and full of body in a way that arabica café espresso rarely achieves. Order this if you want to understand what Vietnamese coffee actually tastes like stripped of the sweetness. A morning ritual for most Vietnamese who drink it rather than eat breakfast.</div>
    </div>

    <div class="coffee-card">
      <img class="coffee-card-img" src="/images/sinh-t.jpg" alt="Sinh Tố">
      <div class="coffee-card-name">Sinh Tố</div>
      <div class="coffee-card-viet">Vietnamese smoothies</div>
      <div class="coffee-card-desc">Fresh tropical fruit blended with condensed milk and crushed ice — thick, sweet, and extraordinary when made with the fruit at its peak. Common flavours: avocado (bơ), mango (xoài), dragonfruit (thanh long), jackfruit (mít), soursop (mãng cầu), and passion fruit (chanh leo). Not a coffee, but the alternative for anyone not drinking it. Avocado sinh tố in particular is a revelation — nothing like the Western avocado smoothie, thicker and sweeter and genuinely one of the best things you'll drink in Vietnam. Order one for Piper immediately.</div>
    </div>

    <div class="coffee-card">
      <img class="coffee-card-img" src="/images/tr.jpg" alt="Trà Đá">
      <div class="coffee-card-name">Trà Đá</div>
      <div class="coffee-card-viet">Free iced tea</div>
      <div class="coffee-card-desc">Weak, slightly sweet green or jasmine iced tea that arrives automatically at almost every table in southern Vietnam — before you've ordered, before you've even sat down properly. It's free, it's cold, it's infinite, and it is exactly what you need in 34-degree heat. Often served in a small plastic cup or a repurposed glass bottle. Drink it constantly. It is the best free thing in Vietnam.</div>
    </div>

  </div>
</div>
</div>

<!-- TAB: RESTAURANTS -->
<div class="food-tab-content" id="tab-restaurants">
  <div class="city-tabs">
    <button class="city-tab city-tab-active" onclick="switchCity('hcmc')">🏙 Ho Chi Minh City</button>
    <button class="city-tab " onclick="switchCity('cantho')">🚤 Can Tho</button>
    <button class="city-tab " onclick="switchCity('hoian')">🏮 Hội An</button>
    <button class="city-tab " onclick="switchCity('hue')">👑 Huế</button>
    <button class="city-tab " onclick="switchCity('danang')">🌊 Da Nang</button>
    <button class="city-tab " onclick="switchCity('singapore')">🦁 Singapore</button>
    <button class="city-tab " onclick="switchCity('kl')">🏙 Kuala Lumpur</button>
  </div>
  <div class="city-panel" id="city-hcmc" style="display:block">
    <div class="city-panel-header">🏙 Ho Chi Minh City</div>
    <div class="rest-cards-wrap">
<div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Saigon Kitchen</div>
          <div class="rest-card-addr">Ground floor, Hôtel des Arts Saigon</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-b">Breakfast</span><span class="mb mb-a">Any time</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Vietnamese &amp; International</span>
        <span class="nearby-tag">In your hotel</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">All-day dining in the hotel, inspired by Asian street food market design with open kitchen stations. Good for a quick breakfast before heading out, or an easy dinner when no one wants to go out. Buffet lunch daily; Surf &amp; Turf buffet dinner Friday to Sunday.</div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">The Café Apartment</div>
          <div class="rest-card-addr">38 Nguyen Hue Street, District 1</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-b">Breakfast</span><span class="mb mb-a">Coffee</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Vietnamese café</span>
        <span class="nearby-tag">5 min from Saigon Square</span>
        <span class="nearby-tag">On Nguyen Hue Walking St</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">A converted apartment building on Nguyen Hue Walking Street where every floor is a different café or boutique shop. A Saigon institution. Order a cà phê sữa đá — strong Vietnamese iced coffee poured over sweetened condensed milk and ice. An excellent first coffee stop on Day 2 before heading to Saigon Square.</div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Cục Gạch Quán</div>
          <div class="rest-card-addr">10 Đặng Tất Street, District 1</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Vietnamese home cooking</span>
        <span class="nearby-tag">10 min walk from hotel</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">One of Saigon's most genuinely beloved restaurants — Vietnamese home cooking in a gorgeous old colonial garden villa with shaded courtyard tables. Clay pot dishes, fresh spring rolls, grilled meats, and seasonal vegetables. Very family friendly, warm atmosphere, wonderful food. Book ahead or arrive before 6:30pm. Cash preferred. <strong>Recommended: Day 2 dinner.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Hoa Tuc</div>
          <div class="rest-card-addr">74/7 Hai Bà Trưng Street, District 1</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Vietnamese</span>
        <span class="nearby-tag">10 min from hotel</span>
        <span class="nearby-tag">10 min from War Remnants</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Vietnamese food in a beautifully restored French colonial building that was once a working opium factory — all high ceilings, ceiling fans, and frangipani in the shaded courtyard. The setting alone is worth the visit. Try the crispy spring rolls and any of the clay pot dishes. Book ahead — it fills up. <strong>Recommended: Day 3 dinner.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Nhà Hàng Ngon</div>
          <div class="rest-card-addr">160 Pasteur Street, District 3</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Vietnamese — all regions</span>
        <span class="nearby-tag">5 min from hotel</span>
        <span class="nearby-tag">5 min from War Remnants Museum</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">A large, popular Vietnamese restaurant set in a French colonial villa with an open courtyard — the menu is a tour through dishes from northern, central, and southern Vietnam all in one place. Great for groups and families. Arrive by 11:45am for lunch to beat the crowd. The bánh xèo (sizzling crispy crepes filled with prawns and pork) are a standout. <strong>Recommended: Day 4 lunch before the Jeep tour.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">The Refinery</div>
          <div class="rest-card-addr">74 Hai Bà Trưng Street, District 1</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">French bistro &amp; Vietnamese</span>
        <span class="nearby-tag">10 min from hotel</span>
        <span class="nearby-tag">Near Notre Dame Cathedral</span>
        <span class="nearby-tag">Near Ben Thanh Market</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">A stylish bistro in a restored French colonial building — fittingly, a former opium refinery. Relaxed, shaded setting with a good French-Vietnamese menu. Well placed for a post-sightseeing lunch on Day 5 after Notre Dame Cathedral and the Post Office, before walking on to Ben Thanh Market.</div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Secret Garden</div>
          <div class="rest-card-addr">158/6 Pasteur Street, District 3 — 5th floor rooftop</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Vietnamese</span>
        <span class="nearby-tag">5 min from hotel</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">One of Saigon's most atmospheric restaurants — hidden on the 5th floor of an unmarked building. Enter through a ground-floor doorway and climb a narrow staircase to emerge onto a beautiful rooftop terrace with potted plants, fairy lights, and views across the neighbourhood. Simple Vietnamese home cooking, beautifully presented. Cash only. No formal reservations — arrive by 6:30pm and hope for the best. Part of the experience. <strong>A memorable last dinner in Saigon.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">The Albion</div>
          <div class="rest-card-addr">Level 23, Hôtel des Arts Saigon</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Modern European</span>
        <span class="nearby-tag">In your hotel</span>
        <span class="nearby-tag">23rd floor — city views</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Guided by two-Michelin-starred Chef Kirk Westaway, The Albion sits on the 23rd floor with sweeping Saigon skyline views. Clean, refined, modern European cuisine — a genuinely special dining experience. More formal than the other recommendations; worth dressing up. Book through the hotel. <strong>Alternative last dinner if you want something elegant and easy — no Grab required.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">My B&aacute;nh M&igrave;</div>
          <div class="rest-card-addr">57 Nguy&ecirc;n Du Street, District 1 &mdash; directly opposite Notre Dame Cathedral</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Vietnamese bistro &mdash; sit-down b&aacute;nh m&igrave;</span>
        <span class="nearby-tag">Opposite Notre Dame</span>
        <span class="nearby-tag">Next to Central Post Office</span>
        <span class="nearby-tag">Day 5 lunch stop</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Cat and the family&rsquo;s personal recommendation from a previous visit &mdash; and perfectly placed for Day 5 when you&rsquo;re at Notre Dame and the Central Post Office. A sit-down air-conditioned bistro with table service and English-speaking staff, serving b&aacute;nh m&igrave; with charcoal-grilled fillings and imported meats. The flank steak b&aacute;nh m&igrave; and the roast pork b&aacute;nh m&igrave; are the standouts &mdash; fresh, crisp baguette and generous, flavourful fillings. Slightly pricier than a street cart (~85,000 VND) but the quality and the setting earn it. Featured on BBC and Pan Asia Food Review. <strong>The natural lunch stop on Day 5 after Notre Dame and the Post Office.</strong></div>
    </div>
    </div>
  </div>
  <div class="city-panel" id="city-cantho" style="display:none">
    <div class="city-panel-header">🚤 Can Tho</div>
    <div class="rest-cards-wrap">
<div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Spices Restaurant</div>
          <div class="rest-card-addr">Victoria Can Tho Resort, Cai Khe Ward</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-b">Breakfast</span><span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Vietnamese &amp; Mekong Delta / International</span>
        <span class="nearby-tag">In your hotel</span>
        <span class="nearby-tag">River terrace</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Rated #2 in all of Can Tho. An open-air terrace overlooks the Hau River — white linen, slow ceiling fans, and refined Mekong Delta cuisine under a French chef. The sampler platter (bon bon salad, grilled duck skewer, shrimp in sugar cane, beef in betel leaves, pork skewers on bamboo) is the standout starter and the best introduction to the flavours of the delta. All-day dining so it works for any meal. <strong>Recommended: Day 25 dinner, Day 26 breakfast and lunch.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">L'Escale at Nam Bo Boutique Hotel</div>
          <div class="rest-card-addr">No. 1 Ngo Quyen Street, Ninh Kieu — 4th floor rooftop</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">French-Vietnamese</span>
        <span class="nearby-tag">10 min by resort boat</span>
        <span class="nearby-tag">Above the Love Bridge</span>
        <span class="nearby-tag">Ninh Kieu waterfront</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">The finest rooftop terrace in Can Tho — perched on the 4th floor of the colonial-era Nam Bo Boutique Hotel directly above the Ninh Kieu promenade and the Hau River. The menu covers grilled dishes, fresh Mekong Delta seafood, cocktails, and French-influenced Vietnamese cooking. Smart casual dress — worth making the effort. Confirm it is open when you arrive at the resort on the 25th as it is worth booking ahead. <strong>Recommended: Day 26 dinner, after the sunset cruise and Love Bridge stroll.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Sao Hom</div>
          <div class="rest-card-addr">Can Tho Old Market, Hai Ba Trung Street, Ninh Kieu</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Vietnamese</span>
        <span class="nearby-tag">10 min by resort boat</span>
        <span class="nearby-tag">Next to Ninh Kieu pier</span>
        <span class="nearby-tag">Near Love Bridge</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Set inside the beautiful French colonial Can Tho Old Market building, with tables right at the water's edge beside the Ninh Kieu boat pier. The atmosphere at dusk — traditional wooden boats moored outside, the river traffic passing — is genuinely lovely. Good fresh Vietnamese food, attentive service. Steps from both the Love Bridge and L'Escale. <strong>Backup if L'Escale is unavailable, or a relaxed alternative for Day 26 lunch.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Cuu Long Bar</div>
          <div class="rest-card-addr">Victoria Can Tho Resort — poolside</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-a">Drinks</span><span class="mb mb-l">Light bites</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Bar &amp; light fare</span>
        <span class="nearby-tag">In your hotel</span>
        <span class="nearby-tag">Poolside</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Semi open-air bar at the resort pool with plush seating, a pool table, and river views. Wide range of cocktails, Vietnamese drinks, fresh juices, and light food. The right place to decompress after the 5:15am floating market start with something cold, or for a leisurely sundowner before the Lady Hau cruise departs at 4:30pm.</div>
    </div>
    </div>
  </div>
  <div class="city-panel" id="city-hoian" style="display:none">
    <div class="city-panel-header">🏮 Hội An</div>
    <div class="rest-cards-wrap">
<div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Morning Glory</div>
          <div class="rest-card-addr">106 Nguyễn Thái Học Street, Hội An Ancient Town</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Vietnamese (Ms Vy's flagship)</span>
        <span class="nearby-tag">In the Old Town</span>
        <span class="nearby-tag">Near Japanese Covered Bridge</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Chef Trần Thị Mỹ Vy's original restaurant — the most celebrated in Hội An. Vietnamese food that balances authenticity with refinement: white rose dumplings, crispy wontons, cao lầu noodles (a Hội An speciality made with water from a single ancient well), and exceptional pho. Given you're doing the Holiday Masterclass at her school on Day 4, eating here first gives brilliant context. Book ahead — it fills up every night. <strong>Ideal for the birthday dinner on Day 2 before the lantern festival.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Mango Mango</div>
          <div class="rest-card-addr">45 Nguyễn Phúc Chu, An Hoi Island</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Modern Vietnamese fusion</span>
        <span class="nearby-tag">An Hoi island — across the river from Old Town</span>
        <span class="nearby-tag">Near the lantern boat ticket booths</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">By American-Vietnamese Chef Duc — a lively, atmospheric restaurant on An Hoi Island directly across the river from the Old Town, close to the Japanese Covered Bridge. Known for creative Vietnamese fusion dishes with witty names: the mango-viche is outstanding, as is the pan-seared tuna "In the Mood for Love" and the cashew-crusted red snapper. Great cocktails at the Whale Spirit Bar — happy hour cocktails at half price. Upper-floor balcony tables look directly back at the Old Town. Book ahead. <strong>Great option for Day 3 or Day 4 farewell dinner.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Vy's Market Restaurant</div>
          <div class="rest-card-addr">3 Nguyễn Hoàng Street — near the Old Town, same complex as the cooking school</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Vietnamese street food market — Ms Vy's</span>
        <span class="nearby-tag">Same complex as the cooking school</span>
        <span class="nearby-tag">Day 11 family lunch</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Ms Vy's market-style restaurant — designed to recreate the atmosphere of a traditional Vietnamese market, with individual open food stalls around a central courtyard where you can watch dishes being prepared. The menu covers Hội An's greatest hits: <strong>Cao Lầu, White Rose Dumplings, Mì Quảng, Bánh Xèo, Bánh Mì, and fresh spring rolls</strong>, all made fresh to order. Order from the tablet photo menu and share everything across the table. <strong>The ideal meeting point for the whole family on Day 11</strong> — Cat and Gigi are already at the cooking school next door, and Ian, Grads, and Piper can come straight from the basket boats. Everyone arrives at the same place, the food is outstanding, and Cat and Gigi will want to show off everything they just learned.</div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Cargo Club</div>
          <div class="rest-card-addr">107–109 Nguyễn Thái Học Street, riverfront</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-b">Breakfast</span><span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">French-Vietnamese (also Ms Vy's)</span>
        <span class="nearby-tag">Old Town riverfront</span>
        <span class="nearby-tag">Views over the Hoài River</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Ms Vy's riverfront restaurant — a more relaxed, café-style atmosphere than Morning Glory, with a broader menu that blends Vietnamese and French-influenced cooking. Best known for its extraordinary desserts and patisserie. The upper-floor balcony tables look directly over the Hoài River toward An Hoi Island — on any night with lanterns on the water, it is a beautiful setting. Also excellent for breakfast. <strong>Versatile across any meal of the stay.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">The Deck House</div>
          <div class="rest-card-addr">Riverside, Thu Bon River, Hội An</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Vietnamese</span>
        <span class="nearby-tag">Thu Bon riverfront</span>
        <span class="nearby-tag">South of Old Town</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">A beautiful setting on the wider Thu Bon River south of the Ancient Town — open-sided, breezy, with good views over the water. Vietnamese food with a well-executed menu. A slightly calmer, more spacious atmosphere than the Old Town restaurants. Good for a relaxed family dinner, particularly on evenings when the Old Town is very busy.</div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">White Marble</div>
          <div class="rest-card-addr">98 Lê Lợi Street, Hội An</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-d">Dinner</span><span class="mb mb-a">Wine bar</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">European / wine bar</span>
        <span class="nearby-tag">Edge of Old Town</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Hội An's best wine bar and a more upscale option when a Vietnamese feast isn't what's needed. A good wine list, European-leaning food, and a quieter atmosphere than the Old Town restaurants. Worth knowing about for an evening when the mood calls for something different — or a nightcap after dinner elsewhere.</div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Bánh Mì Phượng</div>
          <div class="rest-card-addr">2B Phan Châu Trinh Street, Hội An</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-b">Breakfast</span><span class="mb mb-a">Snack</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Vietnamese street snack</span>
        <span class="nearby-tag">Edge of Old Town</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Widely regarded as the finest bánh mì in Vietnam — a bold claim in a country where this is fiercely contested, but the queue outside most mornings makes a compelling argument. Anthony Bourdain was a devoted fan. The bánh mì here is a freshly baked French baguette filled with pâté, cold cuts, pickled daikon and carrot, fresh coriander, sliced chilli, and house sauce — assembled to order in about 30 seconds. Costs around 25,000–35,000 VND. An essential Hội An breakfast or mid-morning snack. Queue early — it sells out.</div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">An Bang Beach Restaurants</div>
          <div class="rest-card-addr">An Bang Beach — 5 km from Old Town</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Vietnamese / fresh seafood</span>
        <span class="nearby-tag">At the beach — end of the bike route</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Several good beachside restaurants and beach bars sit behind the sand at An Bang — the lunch stop on the electric bike day. Freshly grilled seafood, cold beer, and a sun lounger are the offer. <strong>Soul Kitchen</strong> and <strong>La Plage</strong> are the two most popular with sit-down service and good food. Arrive before noon to get a table in the shade. Cash preferred at most beach restaurants.</div>
    </div>
    </div>
  </div>
  <div class="city-panel" id="city-hue" style="display:none">
    <div class="city-panel-header">👑 Huế</div>
    <div class="rest-cards-wrap">
<div class="neighbourhood-label">At the Hotel &mdash; Hue Ancient Garden Houses</div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Kim Long Dining &mdash; Royal Feast &amp; Costume Experience</div>
          <div class="rest-card-addr">Hue Ancient Garden Houses, Kim Long Village</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-b">Breakfast</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span style="font-family:'EB Garamond',serif;font-size:13px;color:var(--ink);margin-right:6px;">Royal Vietnamese dining &mdash; TripAdvisor Best of the Best 2025</span>
        <span class="nearby-tag">On-site at the hotel</span>
        <span class="nearby-tag">Book ahead for the costume dinner</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">This is the one to book. The Kim Long Dining experience is unlike any restaurant on this trip &mdash; guests are dressed in traditional Nguyễn Dynasty court costumes before being seated at a table of lacquered antique furniture surrounded by murals depicting the motifs of an Empress robe. Five professional musicians play live Huế folk music throughout the meal. The menu recreates modern interpretations of the royal feasts once served to the Nguyễn emperors &mdash; dishes said to have originally been served in spreads of up to 300 courses across a thousand bowls. The food is exceptional Vietnamese cooking rooted in the imperial court cuisine of central Vietnam. Reviews are consistently ecstatic: <em>&ldquo;We have had such a lovely time being king and queen&rdquo;; &ldquo;the best food we have had in Vietnam&rdquo;; &ldquo;the traditional music was beautiful, with 5 professional musicians entertaining us.&rdquo;</em> <strong>Book this for one of the evenings &mdash; ideally the first or second night. Complimentary breakfast for hotel guests is also served here each morning.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Le Soleil de Huế</div>
          <div class="rest-card-addr">Hue Ancient Garden Houses &mdash; the glasshouse in the garden</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span><span class="mb mb-a">Cocktails</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span style="font-family:'EB Garamond',serif;font-size:13px;color:var(--ink);margin-right:6px;">French fine dining &mdash; Michelin-starred chef curated menu</span>
        <span class="nearby-tag">On-site at the hotel</span>
        <span class="nearby-tag">A splurge &mdash; worth it</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">A bright, airy glasshouse in the hotel garden with colonial and Art Deco furniture &mdash; sophisticated French cuisine curated by a Michelin-starred French chef and harmoniously blended with local Vietnamese ingredients and spices. Described by guests as &ldquo;quite expensive but, by all accounts, worth the splurge.&rdquo; Also has an excellent cocktail bar where the signature concoctions are particularly well reviewed. <strong>The right choice for a special dinner on one of the evenings, or for a long, civilised hotel lunch on a day between sightseeing.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Vạn Xuân Bar</div>
          <div class="rest-card-addr">Hue Ancient Garden Houses &mdash; the garden bar</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-a">Drinks</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span style="font-family:'EB Garamond',serif;font-size:13px;color:var(--ink);margin-right:6px;">Garden cocktail bar</span>
        <span class="nearby-tag">On-site at the hotel</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">The hotel&rsquo;s garden bar &mdash; for cocktails in the grounds of Bach Ma House as the evening comes in over the Perfume River. The right spot for a drink before dinner at Kim Long or Le Soleil, or simply for sitting in the garden after a long day among the royal tombs. The setting &mdash; ancient garden houses, tropical planting, the sounds of the river nearby &mdash; makes a cold drink here feel very different from a hotel bar anywhere else on the trip.</div>
    </div>

    <div class="neighbourhood-label">In Huế City &mdash; Local Essentials</div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Quán Bún Bò Mụ Rớt</div>
          <div class="rest-card-addr">Nguyễn Sinh Cung Street, central Huế</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-b">Breakfast</span><span class="mb mb-l">Lunch</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span style="font-family:'EB Garamond',serif;font-size:13px;color:var(--ink);margin-right:6px;">Vietnamese &mdash; Bún Bò Huế specialist</span>
        <span class="nearby-tag">Near the Imperial City</span>
        <span class="nearby-tag">Local institution</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Huế is the birthplace of <em>bún bò Huế</em> &mdash; a spicy, lemongrass-and-beef noodle soup that is the city&rsquo;s signature dish and considered by many food writers to be the finest noodle soup in all of Vietnam. This is one of the most celebrated spots in the city for it: a family-run local restaurant with no atmosphere and exceptional food. Thick round rice noodles in a rich, deeply spiced broth with sliced beef, pork knuckle, and fresh herbs. A world away from the gentle pho of the north. Perfect for a lunch stop after the Imperial City. Order bún bò and trust the kitchen.</div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Lạc Thiên</div>
          <div class="rest-card-addr">Đinh Tiên Hoàng Street, south bank of the Perfume River</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span style="font-family:'EB Garamond',serif;font-size:13px;color:var(--ink);margin-right:6px;">Vietnamese &mdash; Huế specialties</span>
        <span class="nearby-tag">South bank, Perfume River</span>
        <span class="nearby-tag">Family-friendly</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">A long-running family restaurant near the Trương Định Street area, known for Huế specialties and genuinely welcoming to families of all ages. Good for a relaxed sit-down lunch after the tombs trail or a casual city dinner. Order <em>bánh khoái</em> (crispy stuffed crepes, a Huế specialty), <em>cơm hến</em> (baby mussel rice &mdash; a true local dish), and the spring rolls. Affordable, reliable, and comfortable for a tired family that has walked a long way. No need to book &mdash; walk in.</div>
    </div>
    </div>
  </div>
  <div class="city-panel" id="city-danang" style="display:none">
    <div class="city-panel-header">🌊 Da Nang</div>
    <div class="rest-cards-wrap">
<div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Goji Kitchen &amp; Bar</div>
          <div class="rest-card-tagline">The all-day dining restaurant &mdash; buffet breakfast, lunch &amp; dinner</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-b">Breakfast</span><span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">The resort&rsquo;s main all-day restaurant with sea views and a spread of Vietnamese and international cooking. Breakfast here is the resort&rsquo;s standout daily ritual &mdash; a large, well-stocked buffet with fresh tropical fruit, Vietnamese pho and b&aacute;nh m&igrave;, eggs cooked to order, international hot dishes, and fresh pastries. Changes daily. Allow time for it rather than rushing through. Also serves lunch and dinner with an &agrave; la carte menu. <strong>The go-to for breakfast every morning of the stay.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Madame Son</div>
          <div class="rest-card-tagline">Signature Vietnamese restaurant &mdash; Top 100 Restaurants 2025, Luxury Lifestyle Awards</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">The resort&rsquo;s finest restaurant and the one to visit on both evenings of the stay. Contemporary Vietnamese cuisine in a lantern-lit dining room that showcases the regional food of central Vietnam &mdash; Da Nang and Hu&eacute; specialities alongside dishes from across the country, treated with real respect and care. Recently recognised in the Luxury Lifestyle Awards&rsquo; Top 100 Restaurants 2025 for its &ldquo;distinctive approach to contemporary Vietnamese cuisine.&rdquo; The seafood dishes are the highlight &mdash; the restaurant&rsquo;s proximity to the beach means the catch is impeccably fresh. <strong>Book a table through the concierge for both evenings &mdash; it fills up.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Beach House</div>
          <div class="rest-card-tagline">Beachfront bar &amp; casual dining &mdash; the sunset spot</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span><span class="mb mb-a">Cocktails</span>
        </div>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">The most relaxed venue at the resort and the most consistently praised by guests &mdash; an open-sided beachfront bar and casual restaurant right on the sand. Light bites, grilled seafood, cold drinks, and the best view of the South China Sea from any seat at the Marriott. The happy hour specials make this the essential early-evening stop: come from the beach or pool, order a cocktail, and watch the light change over the water. Cat and Ian will have been here every afternoon by the end of the stay if past resorts are any guide. <strong>The afternoon and evening anchor of the Da Nang days.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Writer&rsquo;s Bar</div>
          <div class="rest-card-tagline">The resort&rsquo;s signature cocktail bar &mdash; 1970s atmosphere, classic design</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-a">Drinks</span>
        </div>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">An elegant indoor bar designed to evoke the atmosphere of a 1970s writers&rsquo; retreat &mdash; dark wood, leather seating, warm lighting, and a well-curated cocktail menu. Named in the tradition of the great hotel bars associated with writers and travellers across Asia. A quieter and more intimate option than the Beach House &mdash; better suited to a nightcap after dinner at Madame Son, or a rainy-afternoon drink if the weather turns. Classic cocktails, good spirits selection, and a calm atmosphere that makes it feel slightly separate from the rest of the resort.</div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Non Nu&ocirc;c Bar &amp; Pool Bar</div>
          <div class="rest-card-tagline">Poolside service &mdash; drinks and light bites at the infinity pool</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-a">Drinks</span><span class="mb mb-l">Light bites</span>
        </div>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Poolside bar service at the communal infinity pool &mdash; cocktails, mocktails, fresh juices, cold beer, and light bites served directly to the sunlounger. The correct way to spend a hot afternoon at the Marriott is horizontal at the infinity pool with something cold from here arriving at regular intervals. Also covers the private villa pool areas via room service. Order through the resort app or by simply flagging down a pool attendant. No need to move.</div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">In-Villa Dining</div>
          <div class="rest-card-tagline">Room service to the private pool terrace &mdash; available 24 hours</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-b">Breakfast</span><span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">24-hour room service from the full resort menu to the villa. All meals included in the package apply to in-villa dining as well &mdash; so breakfast by the private pool, lunch without moving from the garden furniture, or a dinner under the stars around the villa pool are all available and all covered. Particularly good for the morning of 4 July after the long drive from Hu&eacute;, and for any evening when the family simply doesn&rsquo;t want to leave the villa. Piper will enjoy eating outdoors by the pool. Gigi and Grads may appreciate the option of a quiet in-villa dinner on at least one evening.</div>
    </div>
    </div>
  </div>
  <div class="city-panel" id="city-singapore" style="display:none">
    <div class="city-panel-header">🦁 Singapore</div>
    <div class="rest-cards-wrap">
<div class="neighbourhood-label">Clarke Quay &mdash; Walking Distance from Paradox</div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Jumbo Seafood</div>
          <div class="rest-card-addr">Riverside Point, 30 Merchant Road &mdash; short walk from Paradox</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Singapore seafood</span>
        <span class="nearby-tag">Walking distance from Paradox</span>
        <span class="nearby-tag">Singapore River views</span>
        <span class="nearby-tag">Book ahead</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Singapore&rsquo;s most celebrated chilli crab, right on the Singapore River a short walk from the hotel. Order <strong>both the chilli crab AND the black pepper crab</strong> &mdash; eating them side by side is the authentic way to do it. Crabs are priced by weight (~SGD $80&ndash;120/kg). For five people, two medium crabs plus cereal prawns, fried rice, and kai lan greens is about right. The fried mantou buns for mopping the sauce are non-negotiable. Book ahead &mdash; it fills up every night. <strong>Recommended for Day 2 dinner.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Violet Oon Satay Bar &amp; Grill</div>
          <div class="rest-card-addr">The Cannery, Clarke Quay</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-d">Dinner</span><span class="mb mb-a">Drinks</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Peranakan / satay &amp; grill</span>
        <span class="nearby-tag">Clarke Quay</span>
        <span class="nearby-tag">Family-friendly</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Violet Oon is one of Singapore&rsquo;s most respected Peranakan (Straits Chinese) chefs &mdash; this is her satay and grill outpost at Clarke Quay. The 150-day grain-fed beef satay and coconut rempah prawn satay are both outstanding. Good cocktail list including the house Baba Negroni. A format that works well for the whole family &mdash; shared skewers and grills, clearly presented, genuinely interesting flavours. Book ahead.</div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Neon Pigeon</div>
          <div class="rest-card-addr">36 Carpenter Street &mdash; 5 min walk from Paradox</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Modern Japanese izakaya</span>
        <span class="nearby-tag">5 min walk from Paradox</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Cat&rsquo;s pick for the arrival evening &mdash; a modern Japanese izakaya with charcoal-grilled kushiyaki, creative small plates, and inventive cocktails by Chef Sean Mell (ex-Nobu, New York). Highlights: tsukune skewers, KFC Bao, fresh moriawase sashimi. Atmosphere is dark, loud, and buzzy &mdash; the energy is part of the appeal, but better suited to Cat and Ian than the full family. Walk-ins possible; booking ahead is safer. <strong>Good for Day 1 arrival or any evening Cat &amp; Ian want a livelier option.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Kee&rsquo;s</div>
          <div class="rest-card-addr">The Riverhouse, Clarke Quay</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Neo-bistro &mdash; bold European with Asian touches</span>
        <span class="nearby-tag">Clarke Quay</span>
        <span class="nearby-tag">Best for Cat &amp; Ian</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">By Culinary Director Andrew Walsh &mdash; the Michelin-starred chef behind Cure and Tilly&rsquo;s. Bold European flavours with Pan-Asian touches: tuna tartare with Vietnamese coconut dressing, small plates designed for sharing, and a strong cocktail program. One of Clarke Quay&rsquo;s most interesting newer openings. Better for Cat and Ian on a night when Gigi, Grads, and Piper are eating elsewhere. Book ahead.</div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Brewerkz</div>
          <div class="rest-card-addr">Riverside Point, 30 Merchant Road &mdash; alongside Jumbo</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Craft beer &amp; American grill</span>
        <span class="nearby-tag">Walking distance from Paradox</span>
        <span class="nearby-tag">Very family-friendly</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Singapore&rsquo;s oldest craft brewery restaurant, right on the Singapore River at Clarke Quay. Great beer brewed on-site, solid burgers and grills, wide open riverside setting, and a completely unpretentious atmosphere. Very family-friendly at lunch and early dinner. A reliable fallback for any meal when no one wants to overthink it &mdash; good for Piper, good for Gigi and Grads, cold beer for everyone else.</div>
    </div>

    <div class="neighbourhood-label">Robertson Quay &mdash; 15-Min Riverside Walk from Paradox</div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Shunjuu Izakaya</div>
          <div class="rest-card-addr">30 Robertson Quay, #01-15 Riverside View</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Japanese charcoal-grill &mdash; sumiyaki &amp; kushiyaki</span>
        <span class="nearby-tag">Robertson Quay riverfront</span>
        <span class="nearby-tag">Alfresco</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Established in 2003 and one of the most consistently loved Japanese restaurants on the Singapore River. Specialises in sumiyaki &mdash; charcoal-grilled skewers cooked over binchotan charcoal with a 20-year-old tare sauce of real depth. The 60-item kushiyaki menu covers chicken, pork, beef, and vegetables; the chicken wings, foie gras skewers, and grilled onigiri are standouts. Fifty sake labels on the list. Alfresco riverside seating. A more authentic and quieter Japanese option than Neon Pigeon, and good for the whole family. <strong>Strong recommendation for any evening &mdash; particularly good for Cat and Ian.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Po at The Warehouse Hotel</div>
          <div class="rest-card-addr">320 Havelock Road, Robertson Quay</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-b">Breakfast</span><span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Modern Singaporean</span>
        <span class="nearby-tag">Robertson Quay</span>
        <span class="nearby-tag">Heritage warehouse</span>
        <span class="nearby-tag">Special dinner option</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">One of Robertson Quay&rsquo;s standout dining destinations &mdash; contemporary Singaporean cooking inside The Warehouse Hotel, a beautifully converted 1895 colonial godown. The cooking is rooted in Singapore&rsquo;s hawker and Peranakan heritage: dishes like spring chicken with rendang, popiah reimagined, and mahjong-inspired desserts. The dining room retains the warmth and character of the warehouse with high ceilings and exposed brick. Good for a special family dinner when something more elevated is called for. Book ahead.</div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Super Loco</div>
          <div class="rest-card-addr">60 Robertson Quay, The Quayside</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Mexican street food</span>
        <span class="nearby-tag">Robertson Quay riverfront</span>
        <span class="nearby-tag">Casual &amp; family-friendly</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">Colourful Mexican street food, frozen margarita jugs, and a lively riverside terrace. Tacos, quesadillas, guacamole, ceviche &mdash; fresh ingredients, punchy flavours, good portions. Popular with expat families and very welcoming for children. The frozen margarita pitchers are well-regarded. A genuinely relaxed option for a casual dinner when no one wants ceremony. Walk-ins usually fine; book on weekends.</div>
    </div>

    <div class="neighbourhood-label">Worth Knowing About &mdash; Nearby</div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Lau Pa Sat</div>
          <div class="rest-card-addr">18 Raffles Quay &mdash; 15 min Grab from Clarke Quay</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-d">Evening</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Hawker centre &amp; outdoor satay stalls</span>
        <span class="nearby-tag">CBD financial district</span>
        <span class="nearby-tag">Satay stalls from ~6pm</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">An 1894 cast-iron octagonal market hall &mdash; structure manufactured in Glasgow, assembled here &mdash; now a hawker centre surrounded by the CBD skyscrapers. From ~6pm, Boon Tat Street closes to traffic and the famous outdoor satay stalls set up: chicken, beef, and mutton over charcoal, peanut sauce, cold beer. Cash for the outdoor stalls. Arrive before 7pm for the best atmosphere. Best treated as an evening snack destination rather than a full dinner. <strong>Planned for Day 3 after Sentosa.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Ya Hua Bak Kut Teh</div>
          <div class="rest-card-addr">593 Havelock Road &mdash; between Robertson Quay and Clarke Quay</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-b">Breakfast</span><span class="mb mb-l">Lunch</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Singapore classic &mdash; pork rib soup</span>
        <span class="nearby-tag">Havelock Road</span>
        <span class="nearby-tag">Walkable from Robertson Quay</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">An institution since the 1970s. Bak kut teh &mdash; pork ribs slow-cooked in a peppery herbal broth &mdash; is one of Singapore&rsquo;s great comfort dishes, traditionally eaten at breakfast or lunch. Ya Hua&rsquo;s Teochew-style version is peppery rather than spiced, with falling-off-the-bone meat and a deeply restorative broth. Order the ribs, a bowl of rice, and youtiao (fried dough sticks) for dipping. A genuinely local experience at an eminently accessible price. Good for a morning when the family wants to eat like a Singaporean.</div>
    </div>
    </div>
  </div>
  <div class="city-panel" id="city-kl" style="display:none">
    <div class="city-panel-header">🏙 Kuala Lumpur</div>
    <div class="rest-cards-wrap">
<div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Marini&rsquo;s on 57</div>
          <div class="rest-card-addr">Level 57, Menara 3 Petronas, Persiaran KLCC</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-d">Dinner</span><span class="mb mb-a">Cocktails</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Italian restaurant &amp; cocktail bar</span>
        <span class="nearby-tag">2 min walk from Petronas Towers</span>
        <span class="nearby-tag">Level 57 &mdash; towers at eye level</span>
        <span class="nearby-tag">Smart casual</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">The best post-towers cocktail destination in KL &mdash; the Petronas Twin Towers are right outside the glass at eye level. An upscale Italian restaurant combined with a cocktail bar and whisky lounge. Order window seats when you book. The cocktail menu is excellent; the Italian food menu is full if the family wants to stay for dinner. Happy hour specials run from 5&ndash;9pm daily. <strong>The plan for the evening of Day 1.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">SkyBar at Traders Hotel</div>
          <div class="rest-card-addr">Level 33, Traders Hotel, 6 Jalan Binjai, KLCC</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-d">Dinner</span><span class="mb mb-a">Cocktails</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Rooftop bar &amp; pool bar</span>
        <span class="nearby-tag">5 min Grab from Petronas Towers</span>
        <span class="nearby-tag">Towers view from across KLCC Park</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">An iconic KL rooftop bar with a postcard-perfect view of the Petronas Towers from directly across KLCC Park &mdash; the classic photograph with the towers reflected in the pool. Newly renovated in 2025, with handcrafted cocktails and a good food menu. More casual than Marini&rsquo;s, with a poolside setting. The alternative if Marini&rsquo;s is fully booked, or a second stop if the first round is too enjoyable to end. <strong>Reserve window or poolside seating in advance.</strong></div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Fuego at The Troika</div>
          <div class="rest-card-addr">Level 23A, The Troika, 19 Persiaran KLCC</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-d">Dinner</span><span class="mb mb-a">Drinks</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Latin American &mdash; terrace with Petronas views</span>
        <span class="nearby-tag">5 min Grab from Petronas Towers</span>
        <span class="nearby-tag">Family-friendly</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">A vibrant al fresco terrace restaurant on Level 23 of The Troika building, with panoramic views of both the Petronas Towers and KL Tower. Latin American sharing plates &mdash; guacamole, ceviche, tacos, empanadas &mdash; with signature cocktails including a charcoal-grilled lemon margarita. The format (sharing plates, open terrace, lively atmosphere) suits the whole family and is a genuinely fun final dinner. Book in advance.</div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Jalan Alor\\n<div class="guide-img-wrap"><img src="/images/kl-jalan-alor.jpg" alt="Jalan Alor night market Kuala Lumpur" class="guide-img" onerror="this.style.display='none'"></div> &mdash; Street Food Night Market</div>
          <div class="rest-card-addr">Jalan Alor, Bukit Bintang &mdash; 5 min walk from Ritz-Carlton</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Malaysian street food &mdash; outdoor tables, multiple stalls</span>
        <span class="nearby-tag">Walking distance from Ritz-Carlton</span>
        <span class="nearby-tag">Open from ~6pm</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">The most famous street food lane in KL &mdash; a long alley of outdoor restaurants and stalls running behind the Bukit Bintang hotels, serving grilled seafood, satay, lok lok (skewers cooked in broth), roast duck, Chinese-Malaysian dishes, and cold beer at plastic tables on the pavement. Vibrant, loud, and very easy &mdash; just point at what looks good. A world away from the Ritz, and a perfect final contrast. Good for families, very welcoming for children. No booking possible or needed. A nice option if the evening&rsquo;s plan after cocktails calls for something casual rather than seated.</div>
    </div>

    <div class="rest-card">
      <div class="rest-card-top">
        <div>
          <div class="rest-card-name">Suria KLCC &mdash; Food Court &amp; Dining</div>
          <div class="rest-card-addr">Petronas Twin Towers, ground level</div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
          <span class="mb mb-l">Lunch</span><span class="mb mb-d">Dinner</span>
        </div>
      </div>
      <div class="rest-card-meta">
        <span class="rest-card-cuisine">Multiple cuisines &mdash; mall food court &amp; restaurants</span>
        <span class="nearby-tag">At the base of the Petronas Towers</span>
        <span class="nearby-tag">Fully air-conditioned</span>
      </div>
      <hr class="rest-card-divider">
      <div class="rest-card-notes">The Suria KLCC mall at the base of the towers has a full range of dining options &mdash; from a very good food court on Level 2 (air-conditioned, multiple Malaysian and international options, cheap and good) to full-service restaurants throughout. If the family needs a simple lunch before the towers visit, or a casual meal after without any effort, the food court is excellent. Piper will be happy; Gigi and Grads can find a comfortable table. No booking required.</div>
    </div>

  </div>
</div>


<!-- FAREWELL -->
<div class="farewell">
  <div class="farewell-title">That&rsquo;s a Wrap, Family.</div>
  <div class="farewell-text">
    Ho Chi Minh City at the end of a hot June evening. The Mekong Delta by boat before sunrise. Piper&rsquo;s birthday on the night every lantern in Hội An floated onto the river. The Marble Mountains. Hải Vân Pass with the sea below. Huế and the imperial tombs at dusk. Singapore&rsquo;s chilli crab and the view from 57 floors up. And now the Twin Towers, lit up gold at the end of it all.
  </div>
  <div class="farewell-rule"></div>
  <div class="farewell-text" style="font-size:16px;">
    Three weeks. Three countries. Seven guides. One genuinely extraordinary family trip.<br>
    Safe flight home to Sydney. 🌏
  </div>
  <div class="farewell-rule"></div>
  <div class="farewell-names">Cat &middot; Ian &middot; Piper &middot; Gigi &middot; Grads</div>
</div>
    </div>
  </div>
</div>

<!-- PHRASES (always visible at bottom of dishes) -->
<div id="phrases-section" class="phrases-wrap">
<div class="phrases">
  <div class="phrases-title" style="font-family:'Playfair Display',serif;font-weight:700;">Useful Phrases at the Table</div>
  <div class="phrase-grid">
    <div class="phrase-item"><div class="phrase-english">I'd like this please</div><div class="phrase-local">Cho tôi cái này</div><div class="phrase-pronounce">Cho toy kye nay (Vietnamese)</div></div>
    <div class="phrase-item"><div class="phrase-english">Delicious!</div><div class="phrase-local">Ngon lắm!</div><div class="phrase-pronounce">Ngon lahm (Vietnamese)</div></div>
    <div class="phrase-item"><div class="phrase-english">Not too spicy please</div><div class="phrase-local">Đừng cay quá</div><div class="phrase-pronounce">Derng kay kwa (Vietnamese)</div></div>
    <div class="phrase-item"><div class="phrase-english">No coriander please</div><div class="phrase-local">Không có rau mùi</div><div class="phrase-pronounce">Khong co rao mwee (Vietnamese)</div></div>
    <div class="phrase-item"><div class="phrase-english">The bill please</div><div class="phrase-local">Tính tiền</div><div class="phrase-pronounce">Ting tyen (Vietnamese)</div></div>
    <div class="phrase-item"><div class="phrase-english">One iced coffee please</div><div class="phrase-local">Một cà phê sữa đá</div><div class="phrase-pronounce">Mote ca-fay sooa da (Vietnamese)</div></div>
    <div class="phrase-item"><div class="phrase-english">Delicious! (Malay)</div><div class="phrase-local">Sedap!</div><div class="phrase-pronounce">Seh-dap (Malaysia / Singapore)</div></div>
    <div class="phrase-item"><div class="phrase-english">The bill please (Malay)</div><div class="phrase-local">Boleh dapat bil?</div><div class="phrase-pronounce">Bo-leh da-pat bill (Malaysia)</div></div>
  </div>
</div>


<footer>Wallys on Tour — Southeast Asia Food Guide &nbsp;·&nbsp; Vietnam · Singapore · Kuala Lumpur &nbsp;·&nbsp; June – July</footer>
</div>

<script>
function switchFoodTab(tab) {
  document.querySelectorAll('.food-tab-content').forEach(function(el) {
    el.style.display = 'none';
  });
  document.getElementById('tab-' + tab).style.display = 'block';
  document.querySelectorAll('.food-tab').forEach(function(el) {
    el.classList.remove('food-tab-active');
  });
  event.target.classList.add('food-tab-active');
  // Show phrases only on dishes tab
  var phrases = document.getElementById('phrases-section');
  if (phrases) phrases.style.display = tab === 'dishes' ? 'block' : 'none';
}

function switchCity(city) {
  document.querySelectorAll('.city-panel').forEach(function(el) {
    el.style.display = 'none';
  });
  document.getElementById('city-' + city).style.display = 'block';
  document.querySelectorAll('.city-tab').forEach(function(el) {
    el.classList.remove('city-tab-active');
  });
  event.target.classList.add('city-tab-active');
}
</script>

<div class="food-tab-content" id="tab-phrases" style="display:none">
<div class="phrases-hero"><div class="phrases-hero-title">&#128483; Useful Phrases</div><div class="phrases-hero-sub">Tap &#128266; to hear the phrase spoken aloud in the correct language</div></div>
<div class="lang-tabs-bar"><button class="lang-tab lang-tab-active" onclick="switchLang('vn', this)">&#127483;&#65039; Vietnamese</button><button class="lang-tab" onclick="switchLang('my', this)">&#127474;&#127486; Malay</button></div>
<div id="lang-vn" class="lang-panel"><div class="lang-note">Vietnamese is a tonal language — the pronunciation guides are approximate. The &#128266; button will say it correctly.</div>
<div class="pcat"><div class="pcat-title">Greetings & Basics</div>
<div class="pi"><div class="pi-text"><div class="pi-en">Hello</div><div class="pi-local">Xin chào</div><div class="pi-pron">Sin chow</div></div><button class="pi-btn" data-text="Xin chào" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Thank you</div><div class="pi-local">Cảm ơn</div><div class="pi-pron">Gam un</div></div><button class="pi-btn" data-text="Cảm ơn" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Thank you very much</div><div class="pi-local">Cảm ơn rất nhiều</div><div class="pi-pron">Gam un rat nyew</div></div><button class="pi-btn" data-text="Cảm ơn rất nhiều" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">You're welcome</div><div class="pi-local">Không có gì</div><div class="pi-pron">Khong co zee</div></div><button class="pi-btn" data-text="Không có gì" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Sorry / Excuse me</div><div class="pi-local">Xin lỗi</div><div class="pi-pron">Sin loy</div></div><button class="pi-btn" data-text="Xin lỗi" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Yes</div><div class="pi-local">Vâng / Có</div><div class="pi-pron">Vung / Gaw</div></div><button class="pi-btn" data-text="Vâng / Có" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">No</div><div class="pi-local">Không</div><div class="pi-pron">Khong</div></div><button class="pi-btn" data-text="Không" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">I don't understand</div><div class="pi-local">Tôi không hiểu</div><div class="pi-pron">Toy khong hyew</div></div><button class="pi-btn" data-text="Tôi không hiểu" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Do you speak English?</div><div class="pi-local">Bạn có nói tiếng Anh không?</div><div class="pi-pron">Ban co noy tyeng Anh khong</div></div><button class="pi-btn" data-text="Bạn có nói tiếng Anh không?" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Please speak slowly</div><div class="pi-local">Xin nói chậm thôi</div><div class="pi-pron">Sin noy chum toy</div></div><button class="pi-btn" data-text="Xin nói chậm thôi" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">Eating & Ordering</div>
<div class="pi"><div class="pi-text"><div class="pi-en">A table for 5 please</div><div class="pi-local">Cho tôi một bàn cho 5 người</div><div class="pi-pron">Cho toy mot ban cho nam nguoi</div></div><button class="pi-btn" data-text="Cho tôi một bàn cho 5 người" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">I'd like this please</div><div class="pi-local">Cho tôi cái này</div><div class="pi-pron">Cho toy kai nay</div></div><button class="pi-btn" data-text="Cho tôi cái này" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">The menu please</div><div class="pi-local">Cho tôi xem thực đơn</div><div class="pi-pron">Cho toy sem thuc don</div></div><button class="pi-btn" data-text="Cho tôi xem thực đơn" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Not too spicy please</div><div class="pi-local">Đừng cay quá</div><div class="pi-pron">Derng kay kwa</div></div><button class="pi-btn" data-text="Đừng cay quá" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">No coriander please</div><div class="pi-local">Không có rau mùi</div><div class="pi-pron">Khong co rao mwee</div></div><button class="pi-btn" data-text="Không có rau mùi" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">No fish sauce please</div><div class="pi-local">Không có nước mắm</div><div class="pi-pron">Khong co nook mam</div></div><button class="pi-btn" data-text="Không có nước mắm" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Vegetarian</div><div class="pi-local">Ăn chay</div><div class="pi-pron">An chay</div></div><button class="pi-btn" data-text="Ăn chay" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Delicious!</div><div class="pi-local">Ngon lắm!</div><div class="pi-pron">Ngon lam</div></div><button class="pi-btn" data-text="Ngon lắm!" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">The bill please</div><div class="pi-local">Tính tiền</div><div class="pi-pron">Ting tyen</div></div><button class="pi-btn" data-text="Tính tiền" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">One iced coffee please</div><div class="pi-local">Một cà phê sữa đá</div><div class="pi-pron">Mot ca fay sooa da</div></div><button class="pi-btn" data-text="Một cà phê sữa đá" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Water please</div><div class="pi-local">Cho tôi nước</div><div class="pi-pron">Cho toy nook</div></div><button class="pi-btn" data-text="Cho tôi nước" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">No ice please</div><div class="pi-local">Không đá</div><div class="pi-pron">Khong da</div></div><button class="pi-btn" data-text="Không đá" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">Shopping & Bargaining</div>
<div class="pi"><div class="pi-text"><div class="pi-en">How much is this?</div><div class="pi-local">Cái này bao nhiêu?</div><div class="pi-pron">Kai nay bow nyew</div></div><button class="pi-btn" data-text="Cái này bao nhiêu?" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Too expensive</div><div class="pi-local">Đắt quá</div><div class="pi-pron">Dat kwa</div></div><button class="pi-btn" data-text="Đắt quá" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Can you reduce the price?</div><div class="pi-local">Bớt giá được không?</div><div class="pi-pron">Bot za dook khong</div></div><button class="pi-btn" data-text="Bớt giá được không?" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">I'll take it</div><div class="pi-local">Tôi mua cái này</div><div class="pi-pron">Toy mwa kai nay</div></div><button class="pi-btn" data-text="Tôi mua cái này" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Just looking thanks</div><div class="pi-local">Tôi chỉ xem thôi</div><div class="pi-pron">Toy chi sem toy</div></div><button class="pi-btn" data-text="Tôi chỉ xem thôi" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Do you have a smaller size?</div><div class="pi-local">Bạn có cỡ nhỏ hơn không?</div><div class="pi-pron">Ban co co nyo hun khong</div></div><button class="pi-btn" data-text="Bạn có cỡ nhỏ hơn không?" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Do you accept cards?</div><div class="pi-local">Bạn có nhận thẻ không?</div><div class="pi-pron">Ban co nyan te khong</div></div><button class="pi-btn" data-text="Bạn có nhận thẻ không?" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">Getting Around</div>
<div class="pi"><div class="pi-text"><div class="pi-en">Where is...?</div><div class="pi-local">... ở đâu?</div><div class="pi-pron">... uh dow</div></div><button class="pi-btn" data-text="... ở đâu?" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Please take me to this address</div><div class="pi-local">Đưa tôi đến địa chỉ này</div><div class="pi-pron">Dooa toy den dia chi nay</div></div><button class="pi-btn" data-text="Đưa tôi đến địa chỉ này" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Stop here please</div><div class="pi-local">Dừng ở đây</div><div class="pi-pron">Zung uh day</div></div><button class="pi-btn" data-text="Dừng ở đây" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Turn left</div><div class="pi-local">Rẽ trái</div><div class="pi-pron">Re trai</div></div><button class="pi-btn" data-text="Rẽ trái" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Turn right</div><div class="pi-local">Rẽ phải</div><div class="pi-pron">Re fai</div></div><button class="pi-btn" data-text="Rẽ phải" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Go straight ahead</div><div class="pi-local">Đi thẳng</div><div class="pi-pron">Di tang</div></div><button class="pi-btn" data-text="Đi thẳng" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">How far is it?</div><div class="pi-local">Bao xa?</div><div class="pi-pron">Bow sa</div></div><button class="pi-btn" data-text="Bao xa?" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Where is the toilet?</div><div class="pi-local">Nhà vệ sinh ở đâu?</div><div class="pi-pron">Nya vay sin uh dow</div></div><button class="pi-btn" data-text="Nhà vệ sinh ở đâu?" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Airport please</div><div class="pi-local">Đến sân bay</div><div class="pi-pron">Den sun bay</div></div><button class="pi-btn" data-text="Đến sân bay" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">Hotel</div>
<div class="pi"><div class="pi-text"><div class="pi-en">I have a reservation</div><div class="pi-local">Tôi có đặt phòng</div><div class="pi-pron">Toy co dat fong</div></div><button class="pi-btn" data-text="Tôi có đặt phòng" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">My room number is...</div><div class="pi-local">Số phòng của tôi là...</div><div class="pi-pron">So fong kooa toy la</div></div><button class="pi-btn" data-text="Số phòng của tôi là..." data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">The air conditioning is broken</div><div class="pi-local">Máy lạnh bị hỏng</div><div class="pi-pron">May lan bi hong</div></div><button class="pi-btn" data-text="Máy lạnh bị hỏng" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">More towels please</div><div class="pi-local">Cho thêm khăn tắm</div><div class="pi-pron">Cho tem kan tam</div></div><button class="pi-btn" data-text="Cho thêm khăn tắm" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">What time is check out?</div><div class="pi-local">Mấy giờ trả phòng?</div><div class="pi-pron">May zo tra fong</div></div><button class="pi-btn" data-text="Mấy giờ trả phòng?" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Can I have a wake up call?</div><div class="pi-local">Gọi tôi dậy lúc...</div><div class="pi-pron">Goy toy zay look</div></div><button class="pi-btn" data-text="Gọi tôi dậy lúc..." data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">Medical & Emergency</div>
<div class="pi"><div class="pi-text"><div class="pi-en">I need a doctor</div><div class="pi-local">Tôi cần bác sĩ</div><div class="pi-pron">Toy gun bak see</div></div><button class="pi-btn" data-text="Tôi cần bác sĩ" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Please call an ambulance</div><div class="pi-local">Gọi xe cấp cứu giúp tôi</div><div class="pi-pron">Goy se cup coo zoop toy</div></div><button class="pi-btn" data-text="Gọi xe cấp cứu giúp tôi" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">I am allergic to...</div><div class="pi-local">Tôi bị dị ứng với...</div><div class="pi-pron">Toy bee dee ung voy</div></div><button class="pi-btn" data-text="Tôi bị dị ứng với..." data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">I have a stomach ache</div><div class="pi-local">Tôi bị đau bụng</div><div class="pi-pron">Toy bee dow boong</div></div><button class="pi-btn" data-text="Tôi bị đau bụng" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">I have a fever</div><div class="pi-local">Tôi bị sốt</div><div class="pi-pron">Toy bee sot</div></div><button class="pi-btn" data-text="Tôi bị sốt" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">I feel dizzy</div><div class="pi-local">Tôi bị chóng mặt</div><div class="pi-pron">Toy bee chong mat</div></div><button class="pi-btn" data-text="Tôi bị chóng mặt" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Where is the nearest hospital?</div><div class="pi-local">Bệnh viện gần nhất ở đâu?</div><div class="pi-pron">Ben vyen gun nyat uh dow</div></div><button class="pi-btn" data-text="Bệnh viện gần nhất ở đâu?" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">I need medicine</div><div class="pi-local">Tôi cần thuốc</div><div class="pi-pron">Toy gun took</div></div><button class="pi-btn" data-text="Tôi cần thuốc" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Help!</div><div class="pi-local">Cứu tôi với!</div><div class="pi-pron">Koo toy voy</div></div><button class="pi-btn" data-text="Cứu tôi với!" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Please call the police</div><div class="pi-local">Gọi cảnh sát giúp tôi</div><div class="pi-pron">Goy kan sat zoop toy</div></div><button class="pi-btn" data-text="Gọi cảnh sát giúp tôi" data-lang="vi-VN" onclick="speakIt(this)">&#128266;</button></div>
</div>
</div>
<div id="lang-my" class="lang-panel" style="display:none"><div class="lang-note">Malay is widely understood across Malaysia and Singapore. English works everywhere but these phrases will always be warmly received.</div>
<div class="pcat"><div class="pcat-title">Greetings & Basics</div>
<div class="pi"><div class="pi-text"><div class="pi-en">Hello</div><div class="pi-local">Helo / Hai</div><div class="pi-pron">Heh-lo / Hi</div></div><button class="pi-btn" data-text="Helo / Hai" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Good morning</div><div class="pi-local">Selamat pagi</div><div class="pi-pron">Seh-la-mat pa-gee</div></div><button class="pi-btn" data-text="Selamat pagi" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Thank you</div><div class="pi-local">Terima kasih</div><div class="pi-pron">Teh-ree-mah kah-see</div></div><button class="pi-btn" data-text="Terima kasih" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Thank you very much</div><div class="pi-local">Terima kasih banyak</div><div class="pi-pron">Teh-ree-mah kah-see ba-nyak</div></div><button class="pi-btn" data-text="Terima kasih banyak" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">You're welcome</div><div class="pi-local">Sama-sama</div><div class="pi-pron">Sa-ma sa-ma</div></div><button class="pi-btn" data-text="Sama-sama" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Sorry / Excuse me</div><div class="pi-local">Maaf</div><div class="pi-pron">Ma-af</div></div><button class="pi-btn" data-text="Maaf" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Yes</div><div class="pi-local">Ya</div><div class="pi-pron">Ya</div></div><button class="pi-btn" data-text="Ya" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">No</div><div class="pi-local">Tidak</div><div class="pi-pron">Tee-dak</div></div><button class="pi-btn" data-text="Tidak" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">I don't understand</div><div class="pi-local">Saya tidak faham</div><div class="pi-pron">Sa-ya tee-dak fa-ham</div></div><button class="pi-btn" data-text="Saya tidak faham" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Do you speak English?</div><div class="pi-local">Boleh cakap Bahasa Inggeris?</div><div class="pi-pron">Bo-leh cha-kap ba-ha-sa ing-grees</div></div><button class="pi-btn" data-text="Boleh cakap Bahasa Inggeris?" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">Eating & Ordering</div>
<div class="pi"><div class="pi-text"><div class="pi-en">A table for 5 please</div><div class="pi-local">Meja untuk 5 orang</div><div class="pi-pron">Meh-ja oon-took lima o-rang</div></div><button class="pi-btn" data-text="Meja untuk 5 orang" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">I'd like this please</div><div class="pi-local">Saya nak yang ini</div><div class="pi-pron">Sa-ya nak yang ee-nee</div></div><button class="pi-btn" data-text="Saya nak yang ini" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Delicious!</div><div class="pi-local">Sedap!</div><div class="pi-pron">Seh-dap</div></div><button class="pi-btn" data-text="Sedap!" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Not too spicy please</div><div class="pi-local">Jangan terlalu pedas</div><div class="pi-pron">Jang-an ter-la-loo peh-das</div></div><button class="pi-btn" data-text="Jangan terlalu pedas" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">No pork please</div><div class="pi-local">Jangan ada babi</div><div class="pi-pron">Jang-an ada ba-bee</div></div><button class="pi-btn" data-text="Jangan ada babi" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Vegetarian</div><div class="pi-local">Vegetarian / Sayur-sayuran</div><div class="pi-pron">Veh-ge-tah-ree-an</div></div><button class="pi-btn" data-text="Vegetarian / Sayur-sayuran" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">The bill please</div><div class="pi-local">Boleh dapat bil?</div><div class="pi-pron">Bo-leh da-pat bill</div></div><button class="pi-btn" data-text="Boleh dapat bil?" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Water please</div><div class="pi-local">Air kosong</div><div class="pi-pron">Ah-yer ko-song</div></div><button class="pi-btn" data-text="Air kosong" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">What do you recommend?</div><div class="pi-local">Apa yang sedap di sini?</div><div class="pi-pron">Apa yang seh-dap dee see-nee</div></div><button class="pi-btn" data-text="Apa yang sedap di sini?" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Where is the hawker centre?</div><div class="pi-local">Di mana pusat penjaja?</div><div class="pi-pron">Dee ma-na pu-sat pen-ja-ja</div></div><button class="pi-btn" data-text="Di mana pusat penjaja?" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">Shopping & Bargaining</div>
<div class="pi"><div class="pi-text"><div class="pi-en">How much is this?</div><div class="pi-local">Berapa harga ini?</div><div class="pi-pron">Beh-ra-pa har-ga ee-nee</div></div><button class="pi-btn" data-text="Berapa harga ini?" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Too expensive</div><div class="pi-local">Mahal sangat</div><div class="pi-pron">Ma-hal sa-ngat</div></div><button class="pi-btn" data-text="Mahal sangat" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Can you reduce the price?</div><div class="pi-local">Boleh kurang sikit?</div><div class="pi-pron">Bo-leh ku-rang see-kit</div></div><button class="pi-btn" data-text="Boleh kurang sikit?" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">I'll take it</div><div class="pi-local">Saya ambil ini</div><div class="pi-pron">Sa-ya am-bil ee-nee</div></div><button class="pi-btn" data-text="Saya ambil ini" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Just looking thanks</div><div class="pi-local">Tengok-tengok sahaja</div><div class="pi-pron">Teng-ok teng-ok sa-ha-ja</div></div><button class="pi-btn" data-text="Tengok-tengok sahaja" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Do you accept cards?</div><div class="pi-local">Boleh guna kad?</div><div class="pi-pron">Bo-leh goo-na kad</div></div><button class="pi-btn" data-text="Boleh guna kad?" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Where is the night market?</div><div class="pi-local">Di mana pasar malam?</div><div class="pi-pron">Dee ma-na pa-sar ma-lam</div></div><button class="pi-btn" data-text="Di mana pasar malam?" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">Getting Around</div>
<div class="pi"><div class="pi-text"><div class="pi-en">Where is...?</div><div class="pi-local">Di mana...?</div><div class="pi-pron">Dee ma-na</div></div><button class="pi-btn" data-text="Di mana...?" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Please take me here</div><div class="pi-local">Hantar saya ke sini</div><div class="pi-pron">Han-tar sa-ya ke see-nee</div></div><button class="pi-btn" data-text="Hantar saya ke sini" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Stop here please</div><div class="pi-local">Berhenti di sini</div><div class="pi-pron">Ber-hen-tee dee see-nee</div></div><button class="pi-btn" data-text="Berhenti di sini" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Where is the LRT station?</div><div class="pi-local">Di mana stesen LRT?</div><div class="pi-pron">Dee ma-na steh-sen LRT</div></div><button class="pi-btn" data-text="Di mana stesen LRT?" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Where is the toilet?</div><div class="pi-local">Di mana tandas?</div><div class="pi-pron">Dee ma-na tan-das</div></div><button class="pi-btn" data-text="Di mana tandas?" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">How far is it?</div><div class="pi-local">Berapa jauh?</div><div class="pi-pron">Beh-ra-pa ja-ooh</div></div><button class="pi-btn" data-text="Berapa jauh?" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">KLIA airport please</div><div class="pi-local">Ke lapangan terbang KLIA</div><div class="pi-pron">Ke la-pa-ngan ter-bang KLIA</div></div><button class="pi-btn" data-text="Ke lapangan terbang KLIA" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Petronas Towers please</div><div class="pi-local">Ke Menara Petronas</div><div class="pi-pron">Ke meh-na-ra Petronas</div></div><button class="pi-btn" data-text="Ke Menara Petronas" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">Hotel</div>
<div class="pi"><div class="pi-text"><div class="pi-en">I have a reservation</div><div class="pi-local">Saya ada tempahan</div><div class="pi-pron">Sa-ya ada tem-pa-han</div></div><button class="pi-btn" data-text="Saya ada tempahan" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Where is the breakfast?</div><div class="pi-local">Di mana tempat sarapan?</div><div class="pi-pron">Dee ma-na tem-pat sa-ra-pan</div></div><button class="pi-btn" data-text="Di mana tempat sarapan?" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">The air conditioning is broken</div><div class="pi-local">Aircond rosak</div><div class="pi-pron">Air-cond ro-sak</div></div><button class="pi-btn" data-text="Aircond rosak" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">More towels please</div><div class="pi-local">Tuala lagi, boleh?</div><div class="pi-pron">Too-a-la la-gee bo-leh</div></div><button class="pi-btn" data-text="Tuala lagi, boleh?" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">What time is check out?</div><div class="pi-local">Pukul berapa check out?</div><div class="pi-pron">Pu-kool beh-ra-pa check out</div></div><button class="pi-btn" data-text="Pukul berapa check out?" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">Medical & Emergency</div>
<div class="pi"><div class="pi-text"><div class="pi-en">I need a doctor</div><div class="pi-local">Saya perlukan doktor</div><div class="pi-pron">Sa-ya per-loo-kan dok-tor</div></div><button class="pi-btn" data-text="Saya perlukan doktor" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Please call an ambulance</div><div class="pi-local">Tolong panggil ambulans</div><div class="pi-pron">To-long pang-gil am-boo-lans</div></div><button class="pi-btn" data-text="Tolong panggil ambulans" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">I am allergic to...</div><div class="pi-local">Saya alah kepada...</div><div class="pi-pron">Sa-ya a-lah ke-pa-da</div></div><button class="pi-btn" data-text="Saya alah kepada..." data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">I have a stomach ache</div><div class="pi-local">Saya sakit perut</div><div class="pi-pron">Sa-ya sa-kit pe-root</div></div><button class="pi-btn" data-text="Saya sakit perut" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">I have a fever</div><div class="pi-local">Saya demam</div><div class="pi-pron">Sa-ya deh-mam</div></div><button class="pi-btn" data-text="Saya demam" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Where is the hospital?</div><div class="pi-local">Di mana hospital?</div><div class="pi-pron">Dee ma-na hos-pi-tal</div></div><button class="pi-btn" data-text="Di mana hospital?" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Help!</div><div class="pi-local">Tolong!</div><div class="pi-pron">To-long</div></div><button class="pi-btn" data-text="Tolong!" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">Call the police please</div><div class="pi-local">Tolong panggil polis</div><div class="pi-pron">To-long pang-gil po-lis</div></div><button class="pi-btn" data-text="Tolong panggil polis" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">I've been robbed</div><div class="pi-local">Saya telah dirompak</div><div class="pi-pron">Sa-ya teh-lah dee-rom-pak</div></div><button class="pi-btn" data-text="Saya telah dirompak" data-lang="ms-MY" onclick="speakIt(this)">&#128266;</button></div>
<div class="pi"><div class="pi-text"><div class="pi-en">I am lost</div><div class="pi-local">Saya sesat</div><div class="food-tab-content" id="tab-phrases" style="display:none">

<!-- FULLSCREEN PHRASE DISPLAY -->
<div id="phrase-overlay" onclick="closeOverlay()" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(26,18,8,0.97);z-index:9999;padding:32px 24px;display:none;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;">
  <div style="color:rgba(212,168,67,0.6);font-family:'EB Garamond',serif;font-size:13px;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:24px;">Tap anywhere to close</div>
  <div id="overlay-local" style="font-family:'Playfair Display',serif;font-size:clamp(28px,8vw,52px);font-weight:700;color:#f5efe0;text-align:center;line-height:1.3;margin-bottom:20px;"></div>
  <div id="overlay-english" style="font-family:'Cormorant Garamond',serif;font-size:18px;font-style:italic;color:rgba(245,239,224,0.5);text-align:center;margin-bottom:32px;"></div>
  <button id="overlay-speak-btn" style="width:72px;height:72px;border-radius:50%;border:2px solid #b8860b;background:rgba(184,134,11,0.15);font-size:32px;cursor:pointer;color:#d4a843;" onclick="speakOverlay(event)">&#128266;</button>
</div>

<script>
var _overlayText = "";
var _overlayLang = "";

function showPhraseLarge(card) {
  var local = card.querySelector(".pi-local").textContent;
  var english = card.querySelector(".pi-en").textContent;
  var btn = card.querySelector(".pi-btn");
  var lang = btn ? btn.getAttribute("data-lang") : "vi-VN";
  _overlayText = local;
  _overlayLang = lang;
  document.getElementById("overlay-local").textContent = local;
  document.getElementById("overlay-english").textContent = english;
  var overlay = document.getElementById("phrase-overlay");
  overlay.style.display = "flex";
  // Auto-speak
  doSpeak(local, lang, document.getElementById("overlay-speak-btn"));
}

function closeOverlay() {
  document.getElementById("phrase-overlay").style.display = "none";
  window.speechSynthesis && window.speechSynthesis.cancel();
}

function speakOverlay(e) {
  e.stopPropagation();
  doSpeak(_overlayText, _overlayLang, this);
}

function speakIt(e, btn) {
  e.stopPropagation();
  doSpeak(btn.getAttribute("data-text"), btn.getAttribute("data-lang"), btn);
}

function doSpeak(text, lang, btn) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  var utt = new SpeechSynthesisUtterance(text);
  utt.lang = lang;
  utt.rate = 0.8;
  var voices = window.speechSynthesis.getVoices();
  var match = voices.find(function(v){return v.lang===lang;}) || voices.find(function(v){return v.lang.startsWith(lang.split("-")[0]);});
  if (match) utt.voice = match;
  if (btn) {
    btn.innerHTML = "&#128265;";
    utt.onend = function(){btn.innerHTML="&#128266;";};
    utt.onerror = function(){btn.innerHTML="&#128266;";};
  }
  window.speechSynthesis.speak(utt);
}

function switchLang(lang, btn) {
  document.querySelectorAll(".lang-panel").forEach(function(el){el.style.display="none";});
  document.getElementById("lang-"+lang).style.display="block";
  document.querySelectorAll(".lang-tab").forEach(function(el){el.classList.remove("lang-tab-active");});
  btn.classList.add("lang-tab-active");
}

if (window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = function(){window.speechSynthesis.getVoices();};
  }
}
</script>
<div class="phrases-hero"><div class="phrases-hero-title">&#128483; Useful Phrases</div><div class="phrases-hero-sub">Tap &#128266; to hear it · Tap the row to show it large on screen</div></div>
<div class="lang-tabs-bar"><button class="lang-tab lang-tab-active" onclick="switchLang('vn', this)">&#127483;&#65039; Vietnamese</button><button class="lang-tab" onclick="switchLang('my', this)">&#127474;&#127486; Malay</button></div>
<div id="lang-vn" class="lang-panel"><div class="lang-note">Tap any row to show the phrase full-screen — hold your phone up so the other person can read it. Tap &#128266; to hear it spoken.</div>
<div class="pcat"><div class="pcat-title">👋 Greetings & Basics</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Hello</div><div class="pi-local">Xin chào</div><div class="pi-pron">Sin chow</div></div><button class="pi-btn" data-text="Xin chào" data-lang="vi-VN" data-english="Hello" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Thank you</div><div class="pi-local">Cảm ơn</div><div class="pi-pron">Gam un</div></div><button class="pi-btn" data-text="Cảm ơn" data-lang="vi-VN" data-english="Thank you" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Thank you very much</div><div class="pi-local">Cảm ơn rất nhiều</div><div class="pi-pron">Gam un rat nyew</div></div><button class="pi-btn" data-text="Cảm ơn rất nhiều" data-lang="vi-VN" data-english="Thank you very much" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">You're welcome</div><div class="pi-local">Không có gì</div><div class="pi-pron">Khong co zee</div></div><button class="pi-btn" data-text="Không có gì" data-lang="vi-VN" data-english="You&#39;re welcome" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Sorry / Excuse me</div><div class="pi-local">Xin lỗi</div><div class="pi-pron">Sin loy</div></div><button class="pi-btn" data-text="Xin lỗi" data-lang="vi-VN" data-english="Sorry / Excuse me" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Yes</div><div class="pi-local">Vâng / Có</div><div class="pi-pron">Vung / Gaw</div></div><button class="pi-btn" data-text="Vâng / Có" data-lang="vi-VN" data-english="Yes" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">No</div><div class="pi-local">Không</div><div class="pi-pron">Khong</div></div><button class="pi-btn" data-text="Không" data-lang="vi-VN" data-english="No" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I don't understand</div><div class="pi-local">Tôi không hiểu</div><div class="pi-pron">Toy khong hyew</div></div><button class="pi-btn" data-text="Tôi không hiểu" data-lang="vi-VN" data-english="I don&#39;t understand" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Do you speak English?</div><div class="pi-local">Bạn có nói tiếng Anh không?</div><div class="pi-pron">Ban co noy tyeng Anh khong</div></div><button class="pi-btn" data-text="Bạn có nói tiếng Anh không?" data-lang="vi-VN" data-english="Do you speak English?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Please speak slowly</div><div class="pi-local">Xin nói chậm thôi</div><div class="pi-pron">Sin noy chum toy</div></div><button class="pi-btn" data-text="Xin nói chậm thôi" data-lang="vi-VN" data-english="Please speak slowly" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🍜 Eating & Ordering</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">A table for 5 please</div><div class="pi-local">Cho tôi một bàn cho 5 người</div><div class="pi-pron">Cho toy mot ban cho nam nguoi</div></div><button class="pi-btn" data-text="Cho tôi một bàn cho 5 người" data-lang="vi-VN" data-english="A table for 5 please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I'd like this please</div><div class="pi-local">Cho tôi cái này</div><div class="pi-pron">Cho toy kai nay</div></div><button class="pi-btn" data-text="Cho tôi cái này" data-lang="vi-VN" data-english="I&#39;d like this please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">The menu please</div><div class="pi-local">Cho tôi xem thực đơn</div><div class="pi-pron">Cho toy sem thuc don</div></div><button class="pi-btn" data-text="Cho tôi xem thực đơn" data-lang="vi-VN" data-english="The menu please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Not too spicy please</div><div class="pi-local">Đừng cay quá</div><div class="pi-pron">Derng kay kwa</div></div><button class="pi-btn" data-text="Đừng cay quá" data-lang="vi-VN" data-english="Not too spicy please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">No coriander please</div><div class="pi-local">Không có rau mùi</div><div class="pi-pron">Khong co rao mwee</div></div><button class="pi-btn" data-text="Không có rau mùi" data-lang="vi-VN" data-english="No coriander please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">No fish sauce please</div><div class="pi-local">Không có nước mắm</div><div class="pi-pron">Khong co nook mam</div></div><button class="pi-btn" data-text="Không có nước mắm" data-lang="vi-VN" data-english="No fish sauce please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Vegetarian</div><div class="pi-local">Ăn chay</div><div class="pi-pron">An chay</div></div><button class="pi-btn" data-text="Ăn chay" data-lang="vi-VN" data-english="Vegetarian" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Delicious!</div><div class="pi-local">Ngon lắm!</div><div class="pi-pron">Ngon lam</div></div><button class="pi-btn" data-text="Ngon lắm!" data-lang="vi-VN" data-english="Delicious!" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">The bill please</div><div class="pi-local">Tính tiền</div><div class="pi-pron">Ting tyen</div></div><button class="pi-btn" data-text="Tính tiền" data-lang="vi-VN" data-english="The bill please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">One iced coffee please</div><div class="pi-local">Một cà phê sữa đá</div><div class="pi-pron">Mot ca fay sooa da</div></div><button class="pi-btn" data-text="Một cà phê sữa đá" data-lang="vi-VN" data-english="One iced coffee please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Water please</div><div class="pi-local">Cho tôi nước</div><div class="pi-pron">Cho toy nook</div></div><button class="pi-btn" data-text="Cho tôi nước" data-lang="vi-VN" data-english="Water please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">No ice please</div><div class="pi-local">Không đá</div><div class="pi-pron">Khong da</div></div><button class="pi-btn" data-text="Không đá" data-lang="vi-VN" data-english="No ice please" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🛍️ Shopping & Bargaining</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">How much is this?</div><div class="pi-local">Cái này bao nhiêu?</div><div class="pi-pron">Kai nay bow nyew</div></div><button class="pi-btn" data-text="Cái này bao nhiêu?" data-lang="vi-VN" data-english="How much is this?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Too expensive</div><div class="pi-local">Đắt quá</div><div class="pi-pron">Dat kwa</div></div><button class="pi-btn" data-text="Đắt quá" data-lang="vi-VN" data-english="Too expensive" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Can you reduce the price?</div><div class="pi-local">Bớt giá được không?</div><div class="pi-pron">Bot za dook khong</div></div><button class="pi-btn" data-text="Bớt giá được không?" data-lang="vi-VN" data-english="Can you reduce the price?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I'll take it</div><div class="pi-local">Tôi mua cái này</div><div class="pi-pron">Toy mwa kai nay</div></div><button class="pi-btn" data-text="Tôi mua cái này" data-lang="vi-VN" data-english="I&#39;ll take it" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Just looking thanks</div><div class="pi-local">Tôi chỉ xem thôi</div><div class="pi-pron">Toy chi sem toy</div></div><button class="pi-btn" data-text="Tôi chỉ xem thôi" data-lang="vi-VN" data-english="Just looking thanks" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Do you have a smaller size?</div><div class="pi-local">Bạn có cỡ nhỏ hơn không?</div><div class="pi-pron">Ban co co nyo hun khong</div></div><button class="pi-btn" data-text="Bạn có cỡ nhỏ hơn không?" data-lang="vi-VN" data-english="Do you have a smaller size?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Do you accept cards?</div><div class="pi-local">Bạn có nhận thẻ không?</div><div class="pi-pron">Ban co nyan te khong</div></div><button class="pi-btn" data-text="Bạn có nhận thẻ không?" data-lang="vi-VN" data-english="Do you accept cards?" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🚕 Getting Around</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is...?</div><div class="pi-local">... ở đâu?</div><div class="pi-pron">... uh dow</div></div><button class="pi-btn" data-text="... ở đâu?" data-lang="vi-VN" data-english="Where is...?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Please take me to this address</div><div class="pi-local">Đưa tôi đến địa chỉ này</div><div class="pi-pron">Dooa toy den dia chi nay</div></div><button class="pi-btn" data-text="Đưa tôi đến địa chỉ này" data-lang="vi-VN" data-english="Please take me to this address" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Stop here please</div><div class="pi-local">Dừng ở đây</div><div class="pi-pron">Zung uh day</div></div><button class="pi-btn" data-text="Dừng ở đây" data-lang="vi-VN" data-english="Stop here please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Turn left</div><div class="pi-local">Rẽ trái</div><div class="pi-pron">Re trai</div></div><button class="pi-btn" data-text="Rẽ trái" data-lang="vi-VN" data-english="Turn left" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Turn right</div><div class="pi-local">Rẽ phải</div><div class="pi-pron">Re fai</div></div><button class="pi-btn" data-text="Rẽ phải" data-lang="vi-VN" data-english="Turn right" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Go straight ahead</div><div class="pi-local">Đi thẳng</div><div class="pi-pron">Di tang</div></div><button class="pi-btn" data-text="Đi thẳng" data-lang="vi-VN" data-english="Go straight ahead" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">How far is it?</div><div class="pi-local">Bao xa?</div><div class="pi-pron">Bow sa</div></div><button class="pi-btn" data-text="Bao xa?" data-lang="vi-VN" data-english="How far is it?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is the toilet?</div><div class="pi-local">Nhà vệ sinh ở đâu?</div><div class="pi-pron">Nya vay sin uh dow</div></div><button class="pi-btn" data-text="Nhà vệ sinh ở đâu?" data-lang="vi-VN" data-english="Where is the toilet?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Airport please</div><div class="pi-local">Đến sân bay</div><div class="pi-pron">Den sun bay</div></div><button class="pi-btn" data-text="Đến sân bay" data-lang="vi-VN" data-english="Airport please" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🏨 Hotel</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I have a reservation</div><div class="pi-local">Tôi có đặt phòng</div><div class="pi-pron">Toy co dat fong</div></div><button class="pi-btn" data-text="Tôi có đặt phòng" data-lang="vi-VN" data-english="I have a reservation" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">My room number is...</div><div class="pi-local">Số phòng của tôi là...</div><div class="pi-pron">So fong kooa toy la</div></div><button class="pi-btn" data-text="Số phòng của tôi là..." data-lang="vi-VN" data-english="My room number is..." onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">The air conditioning is broken</div><div class="pi-local">Máy lạnh bị hỏng</div><div class="pi-pron">May lan bi hong</div></div><button class="pi-btn" data-text="Máy lạnh bị hỏng" data-lang="vi-VN" data-english="The air conditioning is broken" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">More towels please</div><div class="pi-local">Cho thêm khăn tắm</div><div class="pi-pron">Cho tem kan tam</div></div><button class="pi-btn" data-text="Cho thêm khăn tắm" data-lang="vi-VN" data-english="More towels please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">What time is check out?</div><div class="pi-local">Mấy giờ trả phòng?</div><div class="pi-pron">May zo tra fong</div></div><button class="pi-btn" data-text="Mấy giờ trả phòng?" data-lang="vi-VN" data-english="What time is check out?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Can I have a wake up call?</div><div class="pi-local">Gọi tôi dậy lúc...</div><div class="pi-pron">Goy toy zay look</div></div><button class="pi-btn" data-text="Gọi tôi dậy lúc..." data-lang="vi-VN" data-english="Can I have a wake up call?" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🏥 Medical & Emergency</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I need a doctor</div><div class="pi-local">Tôi cần bác sĩ</div><div class="pi-pron">Toy gun bak see</div></div><button class="pi-btn" data-text="Tôi cần bác sĩ" data-lang="vi-VN" data-english="I need a doctor" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Please call an ambulance</div><div class="pi-local">Gọi xe cấp cứu giúp tôi</div><div class="pi-pron">Goy se cup coo zoop toy</div></div><button class="pi-btn" data-text="Gọi xe cấp cứu giúp tôi" data-lang="vi-VN" data-english="Please call an ambulance" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I am allergic to...</div><div class="pi-local">Tôi bị dị ứng với...</div><div class="pi-pron">Toy bee dee ung voy</div></div><button class="pi-btn" data-text="Tôi bị dị ứng với..." data-lang="vi-VN" data-english="I am allergic to..." onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I have a stomach ache</div><div class="pi-local">Tôi bị đau bụng</div><div class="pi-pron">Toy bee dow boong</div></div><button class="pi-btn" data-text="Tôi bị đau bụng" data-lang="vi-VN" data-english="I have a stomach ache" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I have a fever</div><div class="pi-local">Tôi bị sốt</div><div class="pi-pron">Toy bee sot</div></div><button class="pi-btn" data-text="Tôi bị sốt" data-lang="vi-VN" data-english="I have a fever" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I feel dizzy</div><div class="pi-local">Tôi bị chóng mặt</div><div class="pi-pron">Toy bee chong mat</div></div><button class="pi-btn" data-text="Tôi bị chóng mặt" data-lang="vi-VN" data-english="I feel dizzy" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is the nearest hospital?</div><div class="pi-local">Bệnh viện gần nhất ở đâu?</div><div class="pi-pron">Ben vyen gun nyat uh dow</div></div><button class="pi-btn" data-text="Bệnh viện gần nhất ở đâu?" data-lang="vi-VN" data-english="Where is the nearest hospital?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I need medicine</div><div class="pi-local">Tôi cần thuốc</div><div class="pi-pron">Toy gun took</div></div><button class="pi-btn" data-text="Tôi cần thuốc" data-lang="vi-VN" data-english="I need medicine" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Help!</div><div class="pi-local">Cứu tôi với!</div><div class="pi-pron">Koo toy voy</div></div><button class="pi-btn" data-text="Cứu tôi với!" data-lang="vi-VN" data-english="Help!" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Please call the police</div><div class="pi-local">Gọi cảnh sát giúp tôi</div><div class="pi-pron">Goy kan sat zoop toy</div></div><button class="pi-btn" data-text="Gọi cảnh sát giúp tôi" data-lang="vi-VN" data-english="Please call the police" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🏨 Hotels & Transport</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Hôtel des Arts Saigon please</div><div class="pi-local">Cho tôi đến Hôtel des Arts Saigon, 76-78 Nguyễn Thị Minh Khai, Quận 3</div><div class="pi-pron">Cho toy den Hotel des Arts Saigon</div></div><button class="pi-btn" data-text="Cho tôi đến Hôtel des Arts Saigon, 76-78 Nguyễn Thị Minh Khai, Quận 3" data-lang="vi-VN" data-english="Take me to Hôtel des Arts Saigon please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Victoria Resort Can Tho please</div><div class="pi-local">Cho tôi đến Victoria Resort Cần Thơ, Cái Khế, Ninh Kiều</div><div class="pi-pron">Cho toy den Victoria Resort Can Tho</div></div><button class="pi-btn" data-text="Cho tôi đến Victoria Resort Cần Thơ, Cái Khế, Ninh Kiều" data-lang="vi-VN" data-english="Take me to Victoria Resort Can Tho please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Moire Hoi An please</div><div class="pi-local">Cho tôi đến Moire Hội An</div><div class="pi-pron">Cho toy den Moire Hoi An</div></div><button class="pi-btn" data-text="Cho tôi đến Moire Hội An" data-lang="vi-VN" data-english="Take me to Moire Hoi An please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Hue Ancient Garden Houses please</div><div class="pi-local">Cho tôi đến Hue Ancient Garden Houses, Kim Long, Huế</div><div class="pi-pron">Cho toy den Hue Ancient Garden Houses</div></div><button class="pi-btn" data-text="Cho tôi đến Hue Ancient Garden Houses, Kim Long, Huế" data-lang="vi-VN" data-english="Take me to Hue Ancient Garden Houses please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Mercure Ba Na Hills please</div><div class="pi-local">Cho tôi đến Mercure Đà Nẵng French Village Bà Nà Hills</div><div class="pi-pron">Cho toy den Mercure Ba Na Hills</div></div><button class="pi-btn" data-text="Cho tôi đến Mercure Đà Nẵng French Village Bà Nà Hills" data-lang="vi-VN" data-english="Take me to Mercure Ba Na Hills please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to the Danang Marriott please</div><div class="pi-local">Cho tôi đến Danang Marriott Resort & Spa, Non Nước, Đà Nẵng</div><div class="pi-pron">Cho toy den Danang Marriott Resort</div></div><button class="pi-btn" data-text="Cho tôi đến Danang Marriott Resort & Spa, Non Nước, Đà Nẵng" data-lang="vi-VN" data-english="Take me to the Danang Marriott please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to the airport please</div><div class="pi-local">Cho tôi đến sân bay</div><div class="pi-pron">Cho toy den sun bay</div></div><button class="pi-btn" data-text="Cho tôi đến sân bay" data-lang="vi-VN" data-english="Take me to the airport please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to this address please</div><div class="pi-local">Cho tôi đến địa chỉ này</div><div class="pi-pron">Cho toy den dia chi nay</div></div><button class="pi-btn" data-text="Cho tôi đến địa chỉ này" data-lang="vi-VN" data-english="Take me to this address please" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
</div>
<div id="lang-my" class="lang-panel" style="display:none"><div class="lang-note">Tap any row to show the phrase full-screen — hold your phone up so the other person can read it. Tap &#128266; to hear it spoken.</div>
<div class="pcat"><div class="pcat-title">👋 Greetings & Basics</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Hello</div><div class="pi-local">Helo / Hai</div><div class="pi-pron">Heh-lo / Hi</div></div><button class="pi-btn" data-text="Helo / Hai" data-lang="ms-MY" data-english="Hello" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Good morning</div><div class="pi-local">Selamat pagi</div><div class="pi-pron">Seh-la-mat pa-gee</div></div><button class="pi-btn" data-text="Selamat pagi" data-lang="ms-MY" data-english="Good morning" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Thank you</div><div class="pi-local">Terima kasih</div><div class="pi-pron">Teh-ree-mah kah-see</div></div><button class="pi-btn" data-text="Terima kasih" data-lang="ms-MY" data-english="Thank you" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Thank you very much</div><div class="pi-local">Terima kasih banyak</div><div class="pi-pron">Teh-ree-mah kah-see ba-nyak</div></div><button class="pi-btn" data-text="Terima kasih banyak" data-lang="ms-MY" data-english="Thank you very much" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">You're welcome</div><div class="pi-local">Sama-sama</div><div class="pi-pron">Sa-ma sa-ma</div></div><button class="pi-btn" data-text="Sama-sama" data-lang="ms-MY" data-english="You&#39;re welcome" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Sorry / Excuse me</div><div class="pi-local">Maaf</div><div class="pi-pron">Ma-af</div></div><button class="pi-btn" data-text="Maaf" data-lang="ms-MY" data-english="Sorry / Excuse me" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Yes</div><div class="pi-local">Ya</div><div class="pi-pron">Ya</div></div><button class="pi-btn" data-text="Ya" data-lang="ms-MY" data-english="Yes" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">No</div><div class="pi-local">Tidak</div><div class="pi-pron">Tee-dak</div></div><button class="pi-btn" data-text="Tidak" data-lang="ms-MY" data-english="No" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I don't understand</div><div class="pi-local">Saya tidak faham</div><div class="pi-pron">Sa-ya tee-dak fa-ham</div></div><button class="pi-btn" data-text="Saya tidak faham" data-lang="ms-MY" data-english="I don&#39;t understand" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Do you speak English?</div><div class="pi-local">Boleh cakap Bahasa Inggeris?</div><div class="pi-pron">Bo-leh cha-kap ba-ha-sa ing-grees</div></div><button class="pi-btn" data-text="Boleh cakap Bahasa Inggeris?" data-lang="ms-MY" data-english="Do you speak English?" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🍜 Eating & Ordering</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">A table for 5 please</div><div class="pi-local">Meja untuk 5 orang</div><div class="pi-pron">Meh-ja oon-took lima o-rang</div></div><button class="pi-btn" data-text="Meja untuk 5 orang" data-lang="ms-MY" data-english="A table for 5 please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I'd like this please</div><div class="pi-local">Saya nak yang ini</div><div class="pi-pron">Sa-ya nak yang ee-nee</div></div><button class="pi-btn" data-text="Saya nak yang ini" data-lang="ms-MY" data-english="I&#39;d like this please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Delicious!</div><div class="pi-local">Sedap!</div><div class="pi-pron">Seh-dap</div></div><button class="pi-btn" data-text="Sedap!" data-lang="ms-MY" data-english="Delicious!" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Not too spicy please</div><div class="pi-local">Jangan terlalu pedas</div><div class="pi-pron">Jang-an ter-la-loo peh-das</div></div><button class="pi-btn" data-text="Jangan terlalu pedas" data-lang="ms-MY" data-english="Not too spicy please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">No pork please</div><div class="pi-local">Jangan ada babi</div><div class="pi-pron">Jang-an ada ba-bee</div></div><button class="pi-btn" data-text="Jangan ada babi" data-lang="ms-MY" data-english="No pork please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Vegetarian</div><div class="pi-local">Vegetarian / Sayur-sayuran</div><div class="pi-pron">Veh-ge-tah-ree-an</div></div><button class="pi-btn" data-text="Vegetarian / Sayur-sayuran" data-lang="ms-MY" data-english="Vegetarian" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">The bill please</div><div class="pi-local">Boleh dapat bil?</div><div class="pi-pron">Bo-leh da-pat bill</div></div><button class="pi-btn" data-text="Boleh dapat bil?" data-lang="ms-MY" data-english="The bill please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Water please</div><div class="pi-local">Air kosong</div><div class="pi-pron">Ah-yer ko-song</div></div><button class="pi-btn" data-text="Air kosong" data-lang="ms-MY" data-english="Water please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">What do you recommend?</div><div class="pi-local">Apa yang sedap di sini?</div><div class="pi-pron">Apa yang seh-dap dee see-nee</div></div><button class="pi-btn" data-text="Apa yang sedap di sini?" data-lang="ms-MY" data-english="What do you recommend?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is the hawker centre?</div><div class="pi-local">Di mana pusat penjaja?</div><div class="pi-pron">Dee ma-na pu-sat pen-ja-ja</div></div><button class="pi-btn" data-text="Di mana pusat penjaja?" data-lang="ms-MY" data-english="Where is the hawker centre?" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🛍️ Shopping & Bargaining</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">How much is this?</div><div class="pi-local">Berapa harga ini?</div><div class="pi-pron">Beh-ra-pa har-ga ee-nee</div></div><button class="pi-btn" data-text="Berapa harga ini?" data-lang="ms-MY" data-english="How much is this?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Too expensive</div><div class="pi-local">Mahal sangat</div><div class="pi-pron">Ma-hal sa-ngat</div></div><button class="pi-btn" data-text="Mahal sangat" data-lang="ms-MY" data-english="Too expensive" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Can you reduce the price?</div><div class="pi-local">Boleh kurang sikit?</div><div class="pi-pron">Bo-leh ku-rang see-kit</div></div><button class="pi-btn" data-text="Boleh kurang sikit?" data-lang="ms-MY" data-english="Can you reduce the price?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I'll take it</div><div class="pi-local">Saya ambil ini</div><div class="pi-pron">Sa-ya am-bil ee-nee</div></div><button class="pi-btn" data-text="Saya ambil ini" data-lang="ms-MY" data-english="I&#39;ll take it" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Just looking thanks</div><div class="pi-local">Tengok-tengok sahaja</div><div class="pi-pron">Teng-ok teng-ok sa-ha-ja</div></div><button class="pi-btn" data-text="Tengok-tengok sahaja" data-lang="ms-MY" data-english="Just looking thanks" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Do you accept cards?</div><div class="pi-local">Boleh guna kad?</div><div class="pi-pron">Bo-leh goo-na kad</div></div><button class="pi-btn" data-text="Boleh guna kad?" data-lang="ms-MY" data-english="Do you accept cards?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is the night market?</div><div class="pi-local">Di mana pasar malam?</div><div class="pi-pron">Dee ma-na pa-sar ma-lam</div></div><button class="pi-btn" data-text="Di mana pasar malam?" data-lang="ms-MY" data-english="Where is the night market?" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🚕 Getting Around</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is...?</div><div class="pi-local">Di mana...?</div><div class="pi-pron">Dee ma-na</div></div><button class="pi-btn" data-text="Di mana...?" data-lang="ms-MY" data-english="Where is...?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Please take me here</div><div class="pi-local">Hantar saya ke sini</div><div class="pi-pron">Han-tar sa-ya ke see-nee</div></div><button class="pi-btn" data-text="Hantar saya ke sini" data-lang="ms-MY" data-english="Please take me here" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Stop here please</div><div class="pi-local">Berhenti di sini</div><div class="pi-pron">Ber-hen-tee dee see-nee</div></div><button class="pi-btn" data-text="Berhenti di sini" data-lang="ms-MY" data-english="Stop here please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is the LRT station?</div><div class="pi-local">Di mana stesen LRT?</div><div class="pi-pron">Dee ma-na steh-sen LRT</div></div><button class="pi-btn" data-text="Di mana stesen LRT?" data-lang="ms-MY" data-english="Where is the LRT station?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is the toilet?</div><div class="pi-local">Di mana tandas?</div><div class="pi-pron">Dee ma-na tan-das</div></div><button class="pi-btn" data-text="Di mana tandas?" data-lang="ms-MY" data-english="Where is the toilet?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">How far is it?</div><div class="pi-local">Berapa jauh?</div><div class="pi-pron">Beh-ra-pa ja-ooh</div></div><button class="pi-btn" data-text="Berapa jauh?" data-lang="ms-MY" data-english="How far is it?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">KLIA airport please</div><div class="pi-local">Ke lapangan terbang KLIA</div><div class="pi-pron">Ke la-pa-ngan ter-bang KLIA</div></div><button class="pi-btn" data-text="Ke lapangan terbang KLIA" data-lang="ms-MY" data-english="KLIA airport please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Petronas Towers please</div><div class="pi-local">Ke Menara Petronas</div><div class="pi-pron">Ke meh-na-ra Petronas</div></div><button class="pi-btn" data-text="Ke Menara Petronas" data-lang="ms-MY" data-english="Petronas Towers please" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🏨 Hotel</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I have a reservation</div><div class="pi-local">Saya ada tempahan</div><div class="pi-pron">Sa-ya ada tem-pa-han</div></div><button class="pi-btn" data-text="Saya ada tempahan" data-lang="ms-MY" data-english="I have a reservation" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is the breakfast?</div><div class="pi-local">Di mana tempat sarapan?</div><div class="pi-pron">Dee ma-na tem-pat sa-ra-pan</div></div><button class="pi-btn" data-text="Di mana tempat sarapan?" data-lang="ms-MY" data-english="Where is the breakfast?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">The air conditioning is broken</div><div class="pi-local">Aircond rosak</div><div class="pi-pron">Air-cond ro-sak</div></div><button class="pi-btn" data-text="Aircond rosak" data-lang="ms-MY" data-english="The air conditioning is broken" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">More towels please</div><div class="pi-local">Tuala lagi, boleh?</div><div class="pi-pron">Too-a-la la-gee bo-leh</div></div><button class="pi-btn" data-text="Tuala lagi, boleh?" data-lang="ms-MY" data-english="More towels please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">What time is check out?</div><div class="pi-local">Pukul berapa check out?</div><div class="pi-pron">Pu-kool beh-ra-pa check out</div></div><button class="pi-btn" data-text="Pukul berapa check out?" data-lang="ms-MY" data-english="What time is check out?" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🏥 Medical & Emergency</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I need a doctor</div><div class="pi-local">Saya perlukan doktor</div><div class="pi-pron">Sa-ya per-loo-kan dok-tor</div></div><button class="pi-btn" data-text="Saya perlukan doktor" data-lang="ms-MY" data-english="I need a doctor" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Please call an ambulance</div><div class="pi-local">Tolong panggil ambulans</div><div class="pi-pron">To-long pang-gil am-boo-lans</div></div><button class="pi-btn" data-text="Tolong panggil ambulans" data-lang="ms-MY" data-english="Please call an ambulance" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I am allergic to...</div><div class="pi-local">Saya alah kepada...</div><div class="pi-pron">Sa-ya a-lah ke-pa-da</div></div><button class="pi-btn" data-text="Saya alah kepada..." data-lang="ms-MY" data-english="I am allergic to..." onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I have a stomach ache</div><div class="pi-local">Saya sakit perut</div><div class="pi-pron">Sa-ya sa-kit pe-root</div></div><button class="pi-btn" data-text="Saya sakit perut" data-lang="ms-MY" data-english="I have a stomach ache" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I have a fever</div><div class="pi-local">Saya demam</div><div class="pi-pron">Sa-ya deh-mam</div></div><button class="pi-btn" data-text="Saya demam" data-lang="ms-MY" data-english="I have a fever" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Where is the hospital?</div><div class="pi-local">Di mana hospital?</div><div class="pi-pron">Dee ma-na hos-pi-tal</div></div><button class="pi-btn" data-text="Di mana hospital?" data-lang="ms-MY" data-english="Where is the hospital?" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Help!</div><div class="pi-local">Tolong!</div><div class="pi-pron">To-long</div></div><button class="pi-btn" data-text="Tolong!" data-lang="ms-MY" data-english="Help!" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Call the police please</div><div class="pi-local">Tolong panggil polis</div><div class="pi-pron">To-long pang-gil po-lis</div></div><button class="pi-btn" data-text="Tolong panggil polis" data-lang="ms-MY" data-english="Call the police please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I've been robbed</div><div class="pi-local">Saya telah dirompak</div><div class="pi-pron">Sa-ya teh-lah dee-rom-pak</div></div><button class="pi-btn" data-text="Saya telah dirompak" data-lang="ms-MY" data-english="I&#39;ve been robbed" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">I am lost</div><div class="pi-local">Saya sesat</div><div class="pi-pron">Sa-ya seh-sat</div></div><button class="pi-btn" data-text="Saya sesat" data-lang="ms-MY" data-english="I am lost" onclick="speakIt(event,this)">&#128266;</button></div>
</div>
<div class="pcat"><div class="pcat-title">🏨 Hotels & Transport</div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to the Paradox Clarke Quay please</div><div class="pi-local">Hantar saya ke Paradox Singapore Clarke Quay, 10 Coleman Street</div><div class="pi-pron">Han-tar sa-ya ke Paradox Singapore</div></div><button class="pi-btn" data-text="Hantar saya ke Paradox Singapore Clarke Quay, 10 Coleman Street" data-lang="ms-MY" data-english="Take me to the Paradox Clarke Quay please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Marina Bay Sands please</div><div class="pi-local">Hantar saya ke Marina Bay Sands, 10 Bayfront Avenue</div><div class="pi-pron">Han-tar sa-ya ke Marina Bay Sands</div></div><button class="pi-btn" data-text="Hantar saya ke Marina Bay Sands, 10 Bayfront Avenue" data-lang="ms-MY" data-english="Take me to Marina Bay Sands please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Crowne Plaza Changi please</div><div class="pi-local">Hantar saya ke Crowne Plaza Changi Airport</div><div class="pi-pron">Han-tar sa-ya ke Crowne Plaza Changi</div></div><button class="pi-btn" data-text="Hantar saya ke Crowne Plaza Changi Airport" data-lang="ms-MY" data-english="Take me to Crowne Plaza Changi please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to The Ritz-Carlton KL please</div><div class="pi-local">Hantar saya ke The Ritz-Carlton Kuala Lumpur, Jalan Imbi</div><div class="pi-pron">Han-tar sa-ya ke The Ritz-Carlton</div></div><button class="pi-btn" data-text="Hantar saya ke The Ritz-Carlton Kuala Lumpur, Jalan Imbi" data-lang="ms-MY" data-english="Take me to The Ritz-Carlton KL please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Sama Sama Hotel KLIA please</div><div class="pi-local">Hantar saya ke Sama Sama Hotel KLIA</div><div class="pi-pron">Han-tar sa-ya ke Sama Sama Hotel</div></div><button class="pi-btn" data-text="Hantar saya ke Sama Sama Hotel KLIA" data-lang="ms-MY" data-english="Take me to Sama Sama Hotel KLIA please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to KLIA airport please</div><div class="pi-local">Hantar saya ke lapangan terbang KLIA</div><div class="pi-pron">Han-tar sa-ya ke KLIA</div></div><button class="pi-btn" data-text="Hantar saya ke lapangan terbang KLIA" data-lang="ms-MY" data-english="Take me to KLIA airport please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to Petronas Towers please</div><div class="pi-local">Hantar saya ke Menara Petronas, KLCC</div><div class="pi-pron">Han-tar sa-ya ke Menara Petronas</div></div><button class="pi-btn" data-text="Hantar saya ke Menara Petronas, KLCC" data-lang="ms-MY" data-english="Take me to Petronas Towers please" onclick="speakIt(event,this)">&#128266;</button></div>
<div class="pi" onclick="showPhraseLarge(this)"><div class="pi-text"><div class="pi-en">Take me to this address please</div><div class="pi-local">Hantar saya ke alamat ini</div><footer>Wallys on Tour &mdash; Southeast Asia Food Guide &nbsp;&middot;&nbsp; Vietnam &middot; Singapore &middot; Kuala Lumpur</footer>

`;
export default content;
