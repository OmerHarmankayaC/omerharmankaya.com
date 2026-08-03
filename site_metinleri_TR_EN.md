# Site Metinleri — TR & EN

Portfolyo sitesinin (`index.html`, `works.html` ve proje detay sayfaları) tüm içerik metinleri.
Sayfa sırası / "Sonraki Proje" döngüsü:
**EPİAŞ Dashboard → RAG Assistant → Vera → IEEE TEDU → Roomerang → Hospital DBMS → (başa)**

---
---

# TÜRKÇE

## 1. Ana Sayfa (`index.html`)

### Üst Menü
- Hakkımda
- İşler
- İletişim

### Ana Başlık (Hero)
- Ömer Harmankaya

### Hakkımda (Kim)
- Kod yazmaktan çok, bir şeyin nasıl kurulacağına karar verip onu çalışır hâle getirmeyi seviyorum.
- Ankara'da büyüdüm, TED Üniversitesi'nde okuyorum. Endüstri mühendisliği tarafı bana giderek daha yakın geliyor — işin gerçek dünyada çalışan kısmı. Henüz yolun başındayım; bu site de o yolun şu ana kadarki hâli.

### İşler (Seçili İşler)

**1. EPİAŞ Dashboard**
- Etiketler: Veri & ML · Web · 2026
- Açıklama: Gerçek zamanlı Türkiye elektrik piyasası verisiyle çalışan ve resmi tahminleri geçen makine öğrenmesi tabanlı elektrik yükü tahmin sistemi.
- Link: Projeyi İncele ↗

**2. RAG Assistant**
- Etiketler: Yapay Zekâ · Web · 2026
- Açıklama: Microsoft Foundry Local ve SQLite altyapısıyla tamamen çevrimdışı çalışan bir Yerel RAG soru-cevap asistanı. Vektör arama, embedding ve LLM entegrasyonu süreçlerini uçtan uca yöneterek geliştirdim.
- Link: Projeyi İncele ↗

**3. Vera-Finance**
- Etiketler: Fintech · iOS · 2025
- Açıklama: App Store'da yayında bir kişisel finans uygulaması. Yapay zekâ ile fatura okuma, stok takibi ve bütçe yönetimi. Ürün yönünü ve sistem kurgusunu ben yönettim.
- Link: Projeyi İncele ↗

- Buton: TÜMÜNÜ GÖR (Tüm İşler sayfasına yönlendirir)

### Deneyim
- BT Stajyeri | BOTAŞ | Ağustos 2026
- Planlama Departmanı Stajyeri | Akdaş Döküm | Temmuz 2026
- Proje Öğrencisi | Microsoft Türkiye (Uzaktan) | Haziran 2026
- Yazılım Geliştirme Stajyeri | Software Persona (Uzaktan) | Mayıs 2026
- Work & Travel | Oregon, ABD | 2025

### İletişim
- Hadi konuşalım!
- Form alanları: İsim, E-posta, Mesajınız
- Buton: GÖNDER / GÖNDERİLİYOR... / Mesajınız başarıyla gönderildi! / Gönderim sırasında bir hata oluştu.
- Linkler: LNKDN ↗, GITHUB ↗, MAIL ↗

### Alt Bilgi (Footer)
- ÖMER HARMANKAYA
- © 2026, Ankara

---

## 2. Tüm İşler Sayfası (`works.html`)

### Üst Navigasyon & Bağlantılar
- Hakkımda
- İşler
- İletişim
- GERİ DÖN
- Tüm İşler (Başlık)

### Projeler Listesi

*(Yukarıdaki Ana sayfada yer alan projelerin detaylarına ek olarak şu projeler de yer alır:)*

**4. IEEE TEDU**
- Etiketler: Web · Canlı · 2026
- Açıklama: TED Üniversitesi IEEE öğrenci kolu için çok sayfalı, blog'lu bir web sitesi. Tasarımdan deploy'a kadar kuruldu ve şu an canlı yayında.
- Link: Projeyi İncele ↗

**5. Roomerang**
- Etiketler: Tasarım · 2026
- Açıklama: SENG 214 dersi için beş kişilik bir ekiple tasarladığımız otel rezervasyon sistemi. Tasarım ve dokümantasyon tarafını ben üstlendim.
- Link: Projeyi İncele ↗

**6. Hospital DBMS**
- Etiketler: Veritabanı · 2025
- Açıklama: Bir hastanenin işleyişini taşıyan ilişkisel veritabanı. Verinin nasıl tutulacağını — şemayı ve ilişkileri — ben tasarladım.
- Link: Projeyi İncele ↗

---

## 3. EPİAŞ Dashboard (`project-epias.html`)

### Üst Navigasyon
- ← Geri Dön
- Ömer Harmankaya
- İletişim

### Proje Künyesi
- Başlık: EPİAŞ Dashboard
- ROL: Veri & ML
- PLATFORM: Web / API
- YIL: 2026
- Buton: Siteyi Ziyaret Et ↗

### Proje Detayları

**Vizyon**
Gerçek bir veri kaynağıyla çalışan, sunucuda canlı yayında kalan ve EPİAŞ'ın kendi resmi yük tahminini geçebilen, ondan tamamen bağımsız bir makine öğrenmesi tahmin modeli kurmak.

**Geliştirme Süreci**
Proje, SQLite veritabanı, saatlik güncellenen bir Python veri pipeline'ı, FastAPI ile sunulan REST API ve Vite/React frontend kullanılarak geliştirildi. Geriye dönük tahmin üretimi yerine canlı test süreçleriyle "bilgi sızıntısı" (leakage) önlendi ve tatiller için özel bir profil eşleme mekanizması kullanıldı.

**Sonuç**
Tüm tatil ve hafta sonu segmentlerinde de dâhil olmak üzere, resmi tahminlere hiçbir girdi vermeden, resmi tahmini geçen (2.19 genel MAPE oranına sahip) bağımsız bir tahmin sistemi ortaya çıktı.

### Diğer Elementler
- Resim Alt yazısı: Şekil 1 — Yük eğrisi
- Sonraki Proje: SONRAKİ PROJE | RAG Assistant ↗

---

## 4. RAG Assistant (`project-rag.html`)

### Üst Navigasyon
- ← Geri Dön
- Ömer Harmankaya
- İletişim

### Proje Künyesi
- Başlık: RAG Assistant
- ROL: Yapay Zekâ & Sistem
- PLATFORM: Web / Local
- YIL: 2026
- Buton: Siteyi Ziyaret Et ↗

### Proje Detayları

**Vizyon**
Yapay zekâ odaklı proje programı kapsamında, tamamen çevrimdışı çalışabilen, güvenli ve hızlı bir soru-cevap asistanı (RAG) tasarlamak temel hedefimizdi. Veri gizliliğinin ön planda olduğu senaryolar için dışarıya veri sızdırmayan bir yerel sistem kurgulamam gerekiyordu.

**Geliştirme Süreci**
Sistemi Microsoft Foundry Local ve SQLite altyapısı üzerine inşa ettim. Vektör arama, embedding modelleri ve büyük dil modeli (LLM) entegrasyonu süreçlerinin tamamını uçtan uca kendim yöneterek, modern yapay zeka mimarilerini pratiğe döktüm.

**Sonuç**
Sonuçta, dış internet bağlantısına ihtiyaç duymadan kendi başına çalışabilen, yüksek performanslı bir asistan ortaya çıktı. Bu proje bana yapay zeka tabanlı bir ürünün çekirdekten itibaren nasıl geliştirileceğini uygulamalı olarak öğretti.

### Diğer Elementler
- Uyarı / Not: RAG sisteminin yapısı gereği ilk sorunun cevaplanması biraz uzun sürebilir.
- Sonraki Proje: SONRAKİ PROJE | Vera Finance ↗

---

## 5. Vera Finance (`project-vera.html`)

### Proje Künyesi
- Başlık: Vera Finance
- ROL: Ürün Yönü & Sistem
- PLATFORM: iOS
- YIL: 2025

### Proje Detayları

**Problem**
Kişisel finans yönetimi çoğu insan için sıkıcı ve takibi zor bir süreç. Geleneksel uygulamalar manuel veri girişi gerektirdiği için sürdürülebilir bir alışkanlık yaratamıyor. Fişleri, faturaları ve abonelikleri takip etmek külfet hâline geliyor.

**Çözüm & Yaklaşım**
Vera'yı kendi başına çalışan bir finans asistanı olarak kurguladım. Kullanıcı harcamasını elle girmek yerine fişinin fotoğrafını çekiyor; yapay zekâ veriyi saniyeler içinde okuyup kategorize ediyor ve bütçeye işliyor. Buna stok takibini ve bütçe öngörülerini ekleyerek, kullanıcının sonradan değil önceden karar almasına yardımcı olan bir yapı tasarladım.

**Sonuç**
Vera, App Store'da yayınlanan ilk gerçek ürünüm oldu. Benim için asıl kazanç, bir fikrin tasarımından mağazada canlıya çıkmasına kadarki yolu görmek; hangi kararın nereye dokunduğunu yaşayarak öğrenmekti. Hem ürünün yönünü hem de arkasındaki kurguyu yönetmek, bana tek bir parçayı değil bütünü düşünmenin ne demek olduğunu gösterdi.

### Diğer Elementler
- Sonraki Proje: SONRAKİ PROJE | IEEE TEDU ↗

---

## 6. IEEE TEDU (`project-ieee.html`)

### Proje Künyesi
- Başlık: IEEE TEDU
- ROL: Web Geliştirme & Tasarım
- PLATFORM: Web
- YIL: 2026

### Proje Detayları

**Vizyon**
TED Üniversitesi IEEE öğrenci kolunun dijital varlığını güçlendirmek, etkinlik duyurularını ve blog yazılarını merkezi bir sistemden yönetebilmek için modern ve dinamik bir web platformuna ihtiyaç vardı.

**Geliştirme Süreci**
Kullanıcı deneyimini ön planda tutan, erişilebilir ve mobil uyumlu bir arayüz tasarladım. Tasarım aşamasından canlıya alınmasına kadar tüm süreci ben yürüttüm. Dinamik bir blog altyapısı kurarak içerik yönetimini sadeleştirdim; böylece topluluk üyeleri kendi etkinlik yazılarını kolayca yayınlayabiliyor.

**Sonuç**
Site şu an aktif olarak kullanılıyor ve topluluğun etkinliklerini, yazılarını tek bir yerden yönetebildiği bir merkez hâline geldi. Benim için bu proje, bir tasarımı fikir aşamasından gerçekten insanların kullandığı canlı bir şeye dönüştürmenin pratiğiydi.

### Diğer Elementler
- Sonraki Proje: SONRAKİ PROJE | Roomerang ↗

---

## 7. Roomerang (`project-roomerang.html`)

### Proje Künyesi
- Başlık: Roomerang
- ROL: Tasarım & Dokümantasyon
- PLATFORM: Web
- YIL: 2026

### Proje Detayları

**Bağlam**
SENG 214 Yazılım Mühendisliği dersi kapsamında, beş kişilik bir ekiple bir otel rezervasyon sistemi tasarladık. Amaç çalışan bir ürün çıkarmaktan çok bir yazılımı baştan düşünmekti: kullanıcı kim, ne istiyor, sistem bunu nasıl karşılamalı — ve bütün bunları tasarım ve dokümantasyonla somut hâle getirmek.

**Benim Payım**
Ekipte tasarım ve dokümantasyon tarafını üstlendim. Sistemin nasıl görüneceğini ve nasıl davranacağını Figma'da kurguladım; rezervasyon akışını, ekranları tek tek tasarladım. Yanında SRS ve SDD belgelerini hazırladık — yani sistemin ne yapması gerektiğini ve bunu nasıl yapacağını yazılı, izlenebilir bir yapıya döktük. Beni asıl ilgilendiren kısım buydu: dağınık bir "şöyle bir şey olsun" fikrini, herkesin aynı şeyi anladığı net bir plana çevirmek.

**Ne Öğrendim**
Bir yazılımın kodundan önce kararlarının geldiğini gördüm. İyi yazılmış bir gereksinim belgesi, sonradan çıkacak onlarca tartışmayı baştan kapatıyor. Bir ekipte herkesin aynı resmi görmesini sağlamanın, çoğu zaman tek başına üretmekten daha kıymetli olduğunu burada fark ettim.

### Diğer Elementler
- Sonraki Proje: SONRAKİ PROJE | Hospital DBMS ↗

---

## 8. Hospital DBMS (`project-hospital.html`)

### Proje Künyesi
- Başlık: Hospital DBMS
- ROL: Veritabanı Tasarımı
- PLATFORM: SQL · İlişkisel Veritabanı
- YIL: 2025

### Proje Detayları

**Bağlam**
Bir grup projesi olarak, bir hastanenin işleyişini taşıyabilecek bir veritabanı tasarladık: hastalar, doktorlar, randevular, bölümler, kayıtlar. Bir hastane birbirine bağlı çok sayıda veriyle çalışır ve bu verinin tutarlı, çelişkisiz ve hızlı erişilebilir olması gerekir. Projenin özü de buydu.

**Benim Payım**
Ben verinin nasıl tutulacağını tasarladım — yani veritabanı şemasını. Hangi tablolar olacak, her tabloda hangi alanlar bulunacak ve bu tablolar birbirine nasıl bağlanacak; bu kararları ben kurguladım. Kodlama tarafına girmedim; benim işim sistemin iskeletini, verinin oturduğu mantığı çıkarmaktı. Bir şeyin nasıl çalışacağına dair yapıyı kurmak — sevdiğim iş tam olarak bu.

**Ne Öğrendim**
İyi bir şema projenin geri kalanını sessizce kolaylaştırır; kötü bir şema ise her yerde kendini hissettirir. Veriyi baştan doğru modellemenin, sonradan yazılacak her sorguyu ve her ekranı şekillendirdiğini gördüm. Görünmeyen ama her şeyi taşıyan bir katmanı tasarlamak ilgimi çekti.

### Diğer Elementler
- Sonraki Proje: SONRAKİ PROJE | EPİAŞ Dashboard ↗

---
---

# ENGLISH

## 1. Home (`index.html`)

### Header
- About
- Work
- Contact

### Hero
- Ömer Harmankaya

### About (Who)
- I'm less interested in writing the code than in deciding how something should be built — and then getting it to actually work.
- I grew up in Ankara and study at TED University. Industrial engineering is the side that keeps drawing me in — the part where things have to hold up in the real world. I'm still early on; this site is where that road stands so far.

### Work (Selected Work)

**1. EPİAŞ Dashboard**
- Tags: Data & ML · Web · 2026
- Description: A machine learning-based electricity load forecasting system working with real-time Turkish electricity market data, outperforming official estimates.
- Link: View Project ↗

**2. RAG Assistant**
- Tags: AI · Web · 2026
- Description: A fully offline Local RAG Q&A assistant built with Microsoft Foundry Local and SQLite. I managed the entire development process end-to-end, integrating vector search, embedding, and LLMs.
- Link: View Project ↗

**3. Vera-Finance**
- Tags: Fintech · iOS · 2025
- Description: A personal finance app, live on the App Store. AI-based receipt reading, stock tracking, and budgeting. I led the product direction and the system behind it.
- Link: View Project ↗

- Button: VIEW ALL (Navigates to all works page)

### Experience
- IT Intern | BOTAŞ | August 2026
- Planning Dept. Intern | Akdaş Döküm | July 2026
- Project Student | Microsoft Turkey (Remote) | June 2026
- Software Dev Intern | Software Persona (Remote) | May 2026
- Work & Travel | Oregon, USA | 2025

### Contact
- Let's talk!
- Form fields: Name, Email, Your message
- Button: SEND / SENDING... / Your message has been sent successfully! / Oops! There was a problem submitting your form
- Links: LNKDN ↗, GITHUB ↗, MAIL ↗

### Footer
- ÖMER HARMANKAYA
- © 2026, Ankara

---

## 2. All Work Page (`works.html`)

### Top Navigation & Links
- About
- Work
- Contact
- GO BACK
- All Work (Title)

### Projects List

*(In addition to the projects above from the homepage, the following projects are listed:)*

**4. IEEE TEDU**
- Tags: Web · Live · 2026
- Description: A multi-page site with a blog for TED University's IEEE student branch. Built from design through deployment, and currently live.
- Link: View Project ↗

**5. Roomerang**
- Tags: Design · 2026
- Description: A hotel reservation system designed with a five-person team for a software engineering course. I handled the design and documentation.
- Link: View Project ↗

**6. Hospital DBMS**
- Tags: Database · 2025
- Description: A relational database for running a hospital. I designed how the data is held — the schema and the relations.
- Link: View Project ↗

---

## 3. EPİAŞ Dashboard (`project-epias.html`)

### Top Navigation
- ← Back
- Ömer Harmankaya
- Contact

### Project Credits
- Title: EPİAŞ Dashboard
- ROLE: Data & ML
- PLATFORM: Web / API
- YEAR: 2026
- Button: Visit Site ↗

### Project Details

**Vision**
Building a fully independent machine learning forecasting model that works with a real data source, stays live on a server, and outperforms EPİAŞ's official load forecast.

**Development**
The project was built using an SQLite database, an hourly updated Python data pipeline, a REST API served with FastAPI, and a Vite/React frontend. Leakage was prevented through live testing rather than backfill generation, and a special profile matching mechanism was used for holidays.

**Result**
The result is an independent forecasting system (with an overall MAPE of 2.19) that outperforms the official forecast in all holiday and weekend segments, without any input from official forecasts.

### Other Elements
- Image Caption: Figure 1 — Load curve
- Next Project: NEXT PROJECT | RAG Assistant ↗

---

## 4. RAG Assistant (`project-rag.html`)

### Top Navigation
- ← Back
- Ömer Harmankaya
- Contact

### Project Credits
- Title: RAG Assistant
- ROLE: AI & System Design
- PLATFORM: Web / Local
- YEAR: 2026
- Button: Visit Site ↗

### Project Details

**Vision**
As part of an AI-focused project program, our primary goal was to design a fully offline, secure, and fast Q&A assistant (RAG). I needed to build a local system that wouldn't leak data, specifically for scenarios where data privacy is paramount.

**Development**
I built the system using Microsoft Foundry Local and SQLite infrastructure. I managed the entire process from end to end—including vector search, embedding models, and large language model (LLM) integration—putting modern AI architectures into practice.

**Result**
The result is a high-performance assistant that runs entirely on its own without needing an external internet connection. This project gave me hands-on experience in building an AI-based product from the core outwards.

### Other Elements
- Warning / Note: Due to the nature of the RAG system, the first question may take a bit longer to answer.
- Next Project: NEXT PROJECT | Vera Finance ↗

---

## 5. Vera Finance (`project-vera.html`)

### Project Credits
- Title: Vera Finance
- ROLE: Product Direction & System
- PLATFORM: iOS
- YEAR: 2025

### Project Details

**Problem**
For most people, managing personal finances is tedious and hard to keep up with. Traditional apps lean on manual entry, so they never turn into a habit that lasts. Keeping track of receipts, bills, and subscriptions becomes a chore.

**Solution & Approach**
I built Vera as a finance assistant that runs on its own. Instead of typing in every expense, the user photographs a receipt; the AI reads the data in seconds, sorts it into categories, and writes it to the budget. On top of that I designed stock tracking and budget forecasts, so the system helps the user decide ahead of time rather than after the fact.

**Result**
Vera was the first real product I shipped — it went live on the App Store. The real gain for me was seeing the whole path, from designing an idea to publishing it in a store, and learning first-hand how each decision feeds the next. Running both the direction and the build taught me what it means to think about the whole thing instead of a single piece.

### Other Elements
- Next Project: NEXT PROJECT | IEEE TEDU ↗

---

## 6. IEEE TEDU (`project-ieee.html`)

### Project Credits
- Title: IEEE TEDU
- ROLE: Web Development & Design
- PLATFORM: Web
- YEAR: 2026

### Project Details

**Vision**
TED University's IEEE student branch needed a modern, dynamic platform — to strengthen its presence online and to run event announcements and blog posts from one place.

**Development**
I designed an accessible, mobile-friendly interface with the user experience first in mind. I ran the whole process myself, from design through to deployment. I also set up a dynamic blog that made content easy to manage, so members can publish their own event posts without needing help.

**Result**
The site is in active use and has become the place where the community runs its events and writing from a single spot. For me, the project was practice in taking a design from an idea to something live that people actually use.

### Other Elements
- Next Project: NEXT PROJECT | Roomerang ↗

---

## 7. Roomerang (`project-roomerang.html`)

### Project Credits
- Title: Roomerang
- ROLE: Design & Documentation
- PLATFORM: Web
- YEAR: 2026

### Project Details

**Context**
For SENG 214 (Software Engineering), a five-person team and I designed a hotel reservation system. The goal wasn't really to ship a working product, but to think a piece of software through from the start: who the user is, what they want, how the system should answer that — and to make all of it concrete through design and documentation.

**My Part**
I took on the design and documentation side. I laid out how the system would look and behave in Figma, designing the reservation flow and the screens one by one. Alongside that we wrote the SRS and SDD documents, putting both what the system should do and how it would do it into a written, traceable form. The part that interested me most was exactly this: turning a loose "let's make something like this" into a clear plan that everyone reads the same way.

**What I Learned**
I saw that a piece of software's decisions come before its code. A well-written requirements document quietly settles dozens of arguments before they start. I realized here that getting a team to see the same picture is often worth more than building something on your own.

### Other Elements
- Next Project: NEXT PROJECT | Hospital DBMS ↗

---

## 8. Hospital DBMS (`project-hospital.html`)

### Project Credits
- Title: Hospital DBMS
- ROLE: Database Design
- PLATFORM: SQL · Relational Database
- YEAR: 2025

### Project Details

**Context**
As a group project, we designed a database that could carry how a hospital runs: patients, doctors, appointments, departments, records. A hospital runs on a lot of interconnected data, and that data has to stay consistent, conflict-free, and quick to reach. That was the heart of the project.

**My Part**
I designed how the data is held — the database schema. Which tables there would be, what fields each one holds, and how those tables connect to one another: those decisions were mine. I didn't touch the coding side; my job was to draw out the skeleton, the logic the data sits on. Building the structure for how something works is exactly the kind of work I enjoy.

**What I Learned**
A good schema quietly makes the rest of the project easier; a bad one makes itself felt everywhere. I saw how getting the data model right from the start shapes every query and every screen written later. Designing an invisible layer that carries everything turned out to interest me.

### Other Elements
- Next Project: NEXT PROJECT | EPİAŞ Dashboard ↗
