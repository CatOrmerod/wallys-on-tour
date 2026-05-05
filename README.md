# Wallys on Tour 🌏

Family travel guide app for Vietnam, Singapore & Malaysia — June/July.

**Live site:** https://YOUR-USERNAME.github.io/wallys-on-tour/

---

## Getting started locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173/wallys-on-tour/

---

## How to make text edits

Each guide is a self-contained file in `src/guides/`:

| File | Guide |
|------|-------|
| `src/guides/pretravel.js` | Pre-travel night |
| `src/guides/hcmc.js` | Ho Chi Minh City |
| `src/guides/cantho.js` | Can Tho & Mekong Delta |
| `src/guides/hoian.js` | Hội An |
| `src/guides/hue.js` | Huế |
| `src/guides/danang.js` | Da Nang |
| `src/guides/singapore.js` | Singapore |
| `src/guides/kl.js` | Kuala Lumpur |
| `src/guides/food.js` | Food Guide |

Each file contains a template literal (backtick string) of HTML. Edit the text directly in GitHub's web editor or locally in VS Code. Push to `main` and it deploys automatically.

> **Tip:** In GitHub's web editor, press `.` on any page to open VS Code in the browser.

---

## How to add photos

Photos live in `public/images/`. Each guide has image slots already set up — they're invisible until you add a matching photo.

### Steps to add a photo:

1. Name your photo to match the slot (e.g. `hcmc-cu-chi-tunnels.jpg`)
2. Go to your GitHub repo → `public/images/`
3. Click **Add file → Upload files**
4. Drop your photo in
5. Commit — it deploys automatically and the image appears in the app

### Image slots by guide

#### Ho Chi Minh City
| Filename | Where it appears |
|----------|-----------------|
| `hcmc-saigon-skyline.jpg` | Cover/intro section |
| `hcmc-nguyen-hue.jpg` | Day 2 — Nguyen Hue Walking Street |
| `hcmc-cu-chi-tunnels.jpg` | Day 3 — Cu Chi Tunnels |
| `hcmc-war-remnants.jpg` | Day 4 — War Remnants Museum |
| `hcmc-reunification-palace.jpg` | Day 5 — Reunification Palace |
| `hcmc-notre-dame.jpg` | Day 5 — Notre Dame Cathedral |
| `hcmc-ben-thanh.jpg` | Day 5 — Ben Thanh Market |
| `hcmc-jeep-tour.jpg` | Day 4 — Backstreet Jeep Food Tour |

#### Can Tho & Mekong Delta
| Filename | Where it appears |
|----------|-----------------|
| `cantho-floating-market.jpg` | Day 7 — Cai Rang Floating Market |
| `cantho-lady-hau.jpg` | Day 7 — Lady Hau sunset cruise |
| `cantho-mekong-rice.jpg` | Mekong Delta intro |
| `cantho-ninh-kieu.jpg` | Day 7 — Ninh Kieu promenade |
| `cantho-river-market.jpg` | Day 7 — on the river |

#### Hội An
| Filename | Where it appears |
|----------|-----------------|
| `hoian-ancient-town.jpg` | Arrival / Ancient Town intro |
| `hoian-covered-bridge.jpg` | Japanese Covered Bridge section |
| `hoian-lantern-festival.jpg` | Day 9 — Lantern Festival |
| `hoian-lanterns-river.jpg` | Day 9 — floating lanterns on river |
| `hoian-rice-paddies.jpg` | Day 10 — Electric bike route |
| `hoian-an-bang-beach.jpg` | Day 10 — An Bang Beach |
| `hoian-basket-boats.jpg` | Day 11 — Cam Thanh basket boats |
| `hoian-tra-que.jpg` | Day 10 — Tra Que Vegetable Village |
| `hoian-cooking-class.jpg` | Day 11 — Ms Vy's cooking class |

#### Huế
| Filename | Where it appears |
|----------|-----------------|
| `hue-thien-mu-pagoda.jpg` | Day 13 — Thiên Mụ Pagoda |
| `hue-imperial-city.jpg` | Day 13 — Imperial City |
| `hue-ngo-mon-gate.jpg` | Day 13 — Ngọ Môn Gate |
| `hue-tu-duc-tomb.jpg` | Day 14 — Tự Đức Mausoleum |
| `hue-khai-dinh-tomb.jpg` | Day 14 — Khải Định Mausoleum |
| `hue-minh-mang-tomb.jpg` | Day 14 — Minh Mạng Mausoleum |
| `hue-bach-ma-house.jpg` | Hotel — Bach Ma House |
| `hue-perfume-river.jpg` | Huế overview / Perfume River |

#### Da Nang
| Filename | Where it appears |
|----------|-----------------|
| `danang-marriott-pool.jpg` | Hotel intro |
| `danang-beach-villa.jpg` | Pool villa |
| `danang-non-nuoc-beach.jpg` | Beach section |
| `danang-beach-house-bar.jpg` | Beach House Bar |

#### Singapore
| Filename | Where it appears |
|----------|-----------------|
| `sg-clarke-quay.jpg` | Arrival / Clarke Quay |
| `sg-marina-bay-sands.jpg` | Day 20 — MBS intro |
| `sg-infinity-pool.jpg` | Day 20 — MBS infinity pool |
| `sg-gardens-bay.jpg` | Day 20 — Gardens by the Bay |
| `sg-supertrees.jpg` | Day 20 — Supertree Grove |
| `sg-raffles-hotel.jpg` | Day 18 — Raffles Long Bar |
| `sg-chinatown.jpg` | Day 18 — Chinatown |
| `sg-sentosa.jpg` | Day 19 — Sentosa Island |
| `sg-lau-pa-sat.jpg` | Day 19 — Lau Pa Sat |
| `sg-jewel-changi.jpg` | Day 21 — Jewel Changi |
| `sg-rain-vortex.jpg` | Day 21 — Rain Vortex |
| `sg-ce-la-vi.jpg` | Day 20 — CÉ LA VI sunset |

#### Kuala Lumpur
| Filename | Where it appears |
|----------|-----------------|
| `kl-petronas-towers.jpg` | Cover / Petronas intro |
| `kl-towers-night.jpg` | Day 22 — towers at sunset |
| `kl-marinis-view.jpg` | Day 22 — Marini's on 57 |
| `kl-jalan-alor.jpg` | Day 22 — Jalan Alor night market |
| `kl-ritz-carlton.jpg` | Hotel intro |

---

## How to add a new guide

1. Create `src/guides/myguide.js` with the HTML content
2. Add an entry to the `GUIDES` array in `src/App.jsx`
3. Push — it deploys automatically

---

## Deploying

Push to `main` → GitHub Actions builds → deploys to GitHub Pages automatically. Usually takes about 2 minutes.

**First time setup:**
1. Go to repo Settings → Pages
2. Source: **GitHub Actions**
3. Save

---

## Tech stack

- React 18 + Vite
- CSS (custom — no framework)
- GitHub Pages + GitHub Actions
