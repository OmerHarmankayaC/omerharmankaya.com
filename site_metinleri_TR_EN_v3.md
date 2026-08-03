# Site Metinleri — TR & EN (v3, CV/kurumsal dil)

Dil kuralı: Türkçe metinlerde 3. tekil şahıs, geçmiş zaman — "geliştirdi", "kurdu", "tasarladı".
İngilizcede karşılığı: özne kullanmadan geçmiş zaman — "Built", "Designed", "Led".

Sayfa sırası / "Sonraki Proje" döngüsü:
**EPİAŞ Dashboard → RAG Assistant → Vera Finance → IEEE TEDU → Roomerang → Hospital DBMS → (başa)**

---
---

# TÜRKÇE

## 1. Ana Sayfa (`index.html`)

### Üst Menü
- Hakkımda
- İşler
- İletişim

### Hero
- Ömer Harmankaya

### Hakkımda
- TED Üniversitesi Endüstri Mühendisliği ve Bilgisayar Mühendisliği çift ana dal öğrencisi.
- Veri işleme, makine öğrenmesi ve web geliştirme alanlarında uçtan uca sistemler kurdu. Veri toplama, modelleme ve dağıtım aşamalarını tek başına yürüttüğü projelerin bir bölümü üretim ortamında çalışmaya devam ediyor.

### Seçili İşler

**1. EPİAŞ Dashboard**
- Etiketler: Veri & ML · Web · 2026
- Açıklama: Türkiye elektrik piyasasının saatlik yük verisiyle çalışan talep tahmin sistemini geliştirdi. Veri hattını, LightGBM modellerini ve arayüzü uçtan uca kurdu; %2,19 MAPE ile resmî tahminin altında hata elde etti.
- Link: Projeyi İncele ↗

**2. RAG Assistant**
- Etiketler: Yapay Zekâ · Web · 2026
- Açıklama: Doküman tabanlı bir soru-cevap asistanı geliştirdi. Embedding, vektör arama ve dil modeli katmanlarını yerel makinede çalışacak biçimde kurguladı; belgeler ve sorgular sistem dışına çıkmıyor.
- Link: Projeyi İncele ↗

**3. Vera Finance**
- Etiketler: Fintech · iOS · 2025
- Açıklama: App Store'da yayınlanan kişisel finans uygulamasının ürün yönünü ve sistem kurgusunu yönetti. Fiş fotoğrafından otomatik harcama kaydı, portföy takibi ve bütçe projeksiyonu özelliklerini tanımladı.
- Link: Projeyi İncele ↗

- Buton: TÜMÜNÜ GÖR

### Deneyim
- BT Stajyeri | BOTAŞ | Ağustos 2026
- Planlama Departmanı Stajyeri | Akdaş Döküm | Temmuz 2026
- Proje Öğrencisi | Microsoft Türkiye (Uzaktan) | Haziran 2026
- Yazılım Geliştirme Stajyeri | Software Persona (Uzaktan) | Mayıs 2026
- Work & Travel | Oregon, ABD | 2025

### İletişim
- Bir proje ya da iş birliği için iletişime geçebilirsiniz.
- Form alanları: İsim, E-posta, Mesaj
- Buton: GÖNDER / GÖNDERİLİYOR… / Mesajınız iletildi. / Mesaj gönderilemedi, lütfen tekrar deneyin.
- Linkler: LNKDN ↗, GITHUB ↗, MAIL ↗

### Alt Bilgi
- ÖMER HARMANKAYA
- © 2026, Ankara

---

## 2. Tüm İşler (`works.html`)

### Navigasyon
- Hakkımda · İşler · İletişim · GERİ DÖN
- Başlık: Tüm İşler

### Ek Projeler

**4. IEEE TEDU**
- Etiketler: Web · Canlı · 2026
- Açıklama: TED Üniversitesi IEEE öğrenci kolunun web sitesini tasarımdan dağıtıma kadar geliştirdi. Çok sayfalı yapıyı ve teknik bilgi gerektirmeyen bir blog altyapısını kurdu.
- Link: Projeyi İncele ↗

**5. Roomerang**
- Etiketler: Tasarım · 2026
- Açıklama: Beş kişilik bir ekiple otel rezervasyon sistemi tasarladı. Arayüz tasarımı ile SRS/SDD dokümantasyonunu üstlendi.
- Link: Projeyi İncele ↗

**6. Hospital DBMS**
- Etiketler: Veritabanı · 2025
- Açıklama: Bir hastanenin işleyişini modelleyen ilişkisel veritabanını tasarladı. Şemayı, tabloları ve tablolar arası ilişkileri kurguladı.
- Link: Projeyi İncele ↗

---

## 3. EPİAŞ Dashboard (`project-epias.html`)

### Künye
- Başlık: EPİAŞ Dashboard
- ROL: Veri & ML
- PLATFORM: Web / API
- YIL: 2026
- Buton: Siteyi Ziyaret Et ↗

**Amaç**
EPİAŞ'ın yayımladığı resmî yük tahminini girdi olarak kullanmadan saatlik elektrik talebini bağımsız tahmin eden, sürekli yayında kalan bir sistem kurmak.

**Yaklaşım**
Piyasa ve hava durumu verisini saatlik olarak SQLite'a yazan bir Python veri hattı kurdu. Tahmin katmanını LightGBM modelleriyle geliştirdi, sonuçları FastAPI tabanlı bir REST API üzerinden sundu ve Vite/React arayüzle görselleştirdi. Modeli geriye dönük üretilmiş tahminlerle değil ileriye dönük canlı tahminlerle test ederek veri sızıntısı ihtimalini baştan kapattı. Resmî tatiller için geçmişteki benzer günlerle eşleştirilen ayrı bir profil mekanizması tanımladı.

**Sonuç**
Sistem yayına alındı ve saatlik güncellenmeye devam ediyor. Genel MAPE %2,19 ölçüldü; hafta sonu ve tatil segmentlerinde de resmî tahminin altında hata elde edildi.

### Diğer
- Görsel alt yazısı: Şekil 1 — Yük eğrisi
- Sonraki Proje: SONRAKİ PROJE | RAG Assistant ↗

---

## 4. RAG Assistant (`project-rag.html`)

### Künye
- Başlık: RAG Assistant
- ROL: Yapay Zekâ & Sistem
- PLATFORM: Web / Local
- YIL: 2026
- Buton: Siteyi Ziyaret Et ↗

**Amaç**
Belgelerin ve sorguların cihaz dışına çıkmadığı, kapalı ortamda çalışabilen bir soru-cevap asistanı kurmak.

**Yaklaşım**
Belgeleri parçalara ayırıp embedding'e dönüştürdü ve SQLite üzerinde sakladı. Sorgu geldiğinde ilgili parçaları seçen vektör arama katmanını kurdu; yanıt üretimini Microsoft Foundry Local üzerinde çalışan bir dil modeline bağladı. Erişim, arama ve üretim katmanlarının tamamını yerelde tutarak dış servis bağımlılığını ortadan kaldırdı.

**Sonuç**
Tek makinede, dışarıya istek göndermeden çalışan bir asistan ortaya çıktı. Bu sayfadaki demo, aynı sistemin kimlik doğrulamalı bir proxy üzerinden dışarı açılmış hâli.

### Diğer
- Not: İlk soru, modelin belleğe yüklenmesi nedeniyle sonrakilerden yavaş yanıtlanır.
- Sonraki Proje: SONRAKİ PROJE | Vera Finance ↗

---

## 5. Vera Finance (`project-vera.html`)

### Künye
- Başlık: Vera Finance
- ROL: Ürün Yönü & Sistem
- PLATFORM: iOS
- YIL: 2025

**Problem**
Kişisel finans uygulamalarının çoğu manuel veri girişine dayanır. Giriş zahmetli olduğu için kayıt tutma kısa sürede bırakılır ve uygulamadaki tablo gerçeği yansıtmayı bırakır.

**Yaklaşım**
Harcama kaydının fiş fotoğrafından üretilmesini temel akış olarak tanımladı; görüntüden tutar, tarih ve kategori otomatik çıkarılıp bütçeye işleniyor. Bunun üzerine portföy takibi ve bütçe projeksiyonu özelliklerini konumlandırdı. Hedef, harcamayı ay sonunda raporlamak değil, ay bitmeden mevcut durumu göstermekti.

**Sonuç**
Uygulama App Store'da yayınlandı. Ürün yönünü, özellik önceliklendirmesini ve sistemin genel kurgusunu yönetti; geliştirme ekiple yürütüldü.

### Diğer
- Sonraki Proje: SONRAKİ PROJE | IEEE TEDU ↗

---

## 6. IEEE TEDU (`project-ieee.html`)

### Künye
- Başlık: IEEE TEDU
- ROL: Web Geliştirme & Tasarım
- PLATFORM: Web
- YIL: 2026

**Amaç**
Öğrenci kolunun etkinlik duyurularını ve yazılarını tek bir yerden yönetebileceği, kurumsal kimlikle uyumlu bir site kurmak.

**Yaklaşım**
Çok sayfalı ve mobil uyumlu arayüzü tasarladı. İçerik tarafında, teknik bilgi gerektirmeden yazı yayımlanabilen bir blog altyapısı kurdu. Tasarım, geliştirme ve dağıtım süreçlerinin tamamını yürüttü.

**Sonuç**
Site yayına alındı; topluluğun duyuru ve içerik akışı bu altyapı üzerinden yürütülüyor.

### Diğer
- Sonraki Proje: SONRAKİ PROJE | Roomerang ↗

---

## 7. Roomerang (`project-roomerang.html`)

### Künye
- Başlık: Roomerang
- ROL: Tasarım & Dokümantasyon
- PLATFORM: Web
- YIL: 2026

**Kapsam**
SENG 214 kapsamında beş kişilik bir ekiple tasarlanan otel rezervasyon sistemi. Hedef çalışan bir ürün çıkarmak değil, bir yazılımı gereksinimlerinden arayüzüne kadar eksiksiz tasarlamaktı.

**Rol**
Arayüz tasarımı ve dokümantasyondan sorumlu oldu. Rezervasyon akışını ve ekranları Figma'da tasarladı; ekiple birlikte SRS ve SDD belgelerini hazırladı, gereksinimleri kullanım senaryoları ve tasarım kararlarıyla izlenebilir biçimde ilişkilendirdi.

**Çıktı**
Tam bir arayüz prototipi ve sistemin gereksinimlerini tasarım kararlarına bağlayan iki teknik doküman.

### Diğer
- Sonraki Proje: SONRAKİ PROJE | Hospital DBMS ↗

---

## 8. Hospital DBMS (`project-hospital.html`)

### Künye
- Başlık: Hospital DBMS
- ROL: Veritabanı Tasarımı
- PLATFORM: SQL · İlişkisel Veritabanı
- YIL: 2025

**Kapsam**
Bir hastanenin hasta, doktor, randevu, bölüm ve tıbbi kayıt verisini tutan ilişkisel veritabanı tasarımı. Grup projesi olarak yürütüldü.

**Rol**
Veri modelini tasarladı: varlıkları, tabloları, alanları ve tablolar arası ilişkileri kurguladı. Normalizasyon ve bütünlük kısıtlarıyla aynı verinin farklı yerlerde çelişmeyeceği bir yapı oluşturdu.

**Çıktı**
ER modeli ve ilişkisel şema; randevu çakışması kontrolü, hasta geçmişi ve bölüm bazlı raporlama sorgularını karşılayacak biçimde tasarlandı.

### Diğer
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

### About
- Double major in Industrial Engineering and Computer Engineering at TED University.
- Has built end-to-end systems across data processing, machine learning, and web development. On several of these projects, data collection, modelling, and deployment were handled single-handedly; a number of them remain in production.

### Selected Work

**1. EPİAŞ Dashboard**
- Tags: Data & ML · Web · 2026
- Description: Built a demand forecasting system running on hourly load data from the Turkish electricity market. Developed the pipeline, the LightGBM models, and the interface end to end, reaching 2.19% MAPE — below the error of the official forecast.
- Link: View Project ↗

**2. RAG Assistant**
- Tags: AI · Web · 2026
- Description: Developed a document-based Q&A assistant. Designed the embedding, vector search, and language model layers to run on the local machine, so that documents and queries never leave the system.
- Link: View Project ↗

**3. Vera Finance**
- Tags: Fintech · iOS · 2025
- Description: Led the product direction and system design of a personal finance app published on the App Store. Defined the automatic expense capture from receipt photos, portfolio tracking, and budget projection features.
- Link: View Project ↗

- Button: VIEW ALL

### Experience
- IT Intern | BOTAŞ | August 2026
- Planning Dept. Intern | Akdaş Döküm | July 2026
- Project Student | Microsoft Turkey (Remote) | June 2026
- Software Dev Intern | Software Persona (Remote) | May 2026
- Work & Travel | Oregon, USA | 2025

### Contact
- Get in touch about a project or a collaboration.
- Form fields: Name, Email, Message
- Button: SEND / SENDING… / Your message has been sent. / Couldn't send the message — please try again.
- Links: LNKDN ↗, GITHUB ↗, MAIL ↗

### Footer
- ÖMER HARMANKAYA
- © 2026, Ankara

---

## 2. All Work (`works.html`)

### Navigation
- About · Work · Contact · GO BACK
- Title: All Work

### Additional Projects

**4. IEEE TEDU**
- Tags: Web · Live · 2026
- Description: Built the website for TED University's IEEE student branch from design through deployment. Set up the multi-page structure and a blog that requires no technical knowledge to publish to.
- Link: View Project ↗

**5. Roomerang**
- Tags: Design · 2026
- Description: Designed a hotel reservation system with a five-person team. Took on the interface design and the SRS/SDD documentation.
- Link: View Project ↗

**6. Hospital DBMS**
- Tags: Database · 2025
- Description: Designed the relational database modelling how a hospital runs, including the schema, the tables, and the relations between them.
- Link: View Project ↗

---

## 3. EPİAŞ Dashboard (`project-epias.html`)

### Credits
- Title: EPİAŞ Dashboard
- ROLE: Data & ML
- PLATFORM: Web / API
- YEAR: 2026
- Button: Visit Site ↗

**Objective**
To build a continuously live system that forecasts hourly electricity demand independently, without taking the official EPİAŞ load forecast as an input.

**Approach**
Built a Python pipeline writing market and weather data to SQLite on an hourly schedule. Developed the forecasting layer with LightGBM models, served the results through a FastAPI REST API, and visualised them in a Vite/React frontend. Tested the model on forward-looking live forecasts rather than backfilled ones, ruling out leakage from the start. Defined a separate profile mechanism for public holidays, matched against comparable past days.

**Result**
The system went live and continues to update hourly. Overall MAPE was measured at 2.19%, staying below the official forecast's error in the weekend and holiday segments as well.

### Other
- Image caption: Figure 1 — Load curve
- Next Project: NEXT PROJECT | RAG Assistant ↗

---

## 4. RAG Assistant (`project-rag.html`)

### Credits
- Title: RAG Assistant
- ROLE: AI & System
- PLATFORM: Web / Local
- YEAR: 2026
- Button: Visit Site ↗

**Objective**
To build a Q&A assistant able to run in a closed environment, where neither the documents nor the queries leave the device.

**Approach**
Chunked the documents, converted them to embeddings, and stored them in SQLite. Built the vector search layer that selects the relevant chunks for a given query, and connected answer generation to a language model running on Microsoft Foundry Local. Kept retrieval, search, and generation entirely local, removing any external service dependency.

**Result**
The result was an assistant running on a single machine with no outbound requests. The demo on this page is the same system exposed through an authenticated proxy.

### Other
- Note: The first question is slower than the rest, since the model is being loaded into memory.
- Next Project: NEXT PROJECT | Vera Finance ↗

---

## 5. Vera Finance (`project-vera.html`)

### Credits
- Title: Vera Finance
- ROLE: Product Direction & System
- PLATFORM: iOS
- YEAR: 2025

**Problem**
Most personal finance apps rest on manual entry. Because entry is tedious, logging is abandoned within weeks, and the picture inside the app stops matching reality.

**Approach**
Defined expense capture from a receipt photo as the core flow: the amount, date, and category are extracted automatically and written to the budget. Positioned portfolio tracking and budget projection on top of that. The aim was not to report spending at the end of the month, but to show where things stand before the month is over.

**Result**
The app was published on the App Store. Led the product direction, feature prioritisation, and overall system design; development was carried out with a team.

### Other
- Next Project: NEXT PROJECT | IEEE TEDU ↗

---

## 6. IEEE TEDU (`project-ieee.html`)

### Credits
- Title: IEEE TEDU
- ROLE: Web Development & Design
- PLATFORM: Web
- YEAR: 2026

**Objective**
To build a site, consistent with the branch's visual identity, where the student branch could run its event announcements and posts from one place.

**Approach**
Designed the multi-page, mobile-friendly interface. Set up a blog that allows posts to be published without any technical knowledge. Ran the design, development, and deployment process end to end.

**Result**
The site went live, and the community's announcements and writing now run through it.

### Other
- Next Project: NEXT PROJECT | Roomerang ↗

---

## 7. Roomerang (`project-roomerang.html`)

### Credits
- Title: Roomerang
- ROLE: Design & Documentation
- PLATFORM: Web
- YEAR: 2026

**Scope**
A hotel reservation system designed with a five-person team for SENG 214. The goal was not a shipped product but a complete design of a piece of software, from its requirements to its interface.

**Role**
Was responsible for the interface design and the documentation. Designed the reservation flow and the screens in Figma, and prepared the SRS and SDD documents with the team, tying requirements to use cases and design decisions traceably.

**Outcome**
A full interface prototype and two technical documents connecting the system's requirements to its design decisions.

### Other
- Next Project: NEXT PROJECT | Hospital DBMS ↗

---

## 8. Hospital DBMS (`project-hospital.html`)

### Credits
- Title: Hospital DBMS
- ROLE: Database Design
- PLATFORM: SQL · Relational Database
- YEAR: 2025

**Scope**
A relational database design holding a hospital's patient, doctor, appointment, department, and medical record data. Carried out as a group project.

**Role**
Designed the data model: the entities, tables, fields, and the relations between them. Used normalisation and integrity constraints to build a structure in which the same data cannot contradict itself across the schema.

**Outcome**
An ER model and a relational schema, designed to answer queries such as appointment conflict checks, patient history, and department-level reporting.

### Other
- Next Project: NEXT PROJECT | EPİAŞ Dashboard ↗
