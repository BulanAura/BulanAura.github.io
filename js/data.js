// data.js — memuat data portofolio dari JSON
// Salin isi portfolio.json ke sini agar bisa digunakan secara langsung
// tanpa perlu fetch (kompatibel dengan membuka file lokal / tanpa server)

const portfolioData = {
profile: {
name: "Bulan Aura Dwi Yulinda",
title: "Teknik Elektronika",
tagline: "Merancang dan membangun sistem elektronika, IoT, dan otomasi untuk menghadirkan solusi teknologi yang inovatif dan bermanfaat.",
email: "[bulanauraa@gmail.com](mailto:bulanauraa@gmail.com)",
phone: "+62 858 032 419 39",
location: "Semarang, Jawa Tengah",
github: "https://github.com/BulanAura"
},

education: [
{
period: "2019 - 2022",
institution: "SMA Negeri 1 Kudus",
major: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
description: "Menempuh pendidikan menengah atas dengan fokus pada bidang sains dan matematika sebagai dasar pengembangan kemampuan analitis dan pemecahan masalah."
},
{
period: "2023 - 2026",
institution: "Politeknik Negeri Semarang",
major: "D3 Teknik Elektro - Teknik Elektronika",
description: "Mempelajari embedded system, IoT, instrumentasi, sistem kendali, elektronika daya, PLC, dan otomasi industri melalui pembelajaran berbasis praktik."
}
],

projects: [
{
id: 1,
title: "Power Robbot Control",
description: "Perancangan sistem power untuk Robot Arm pada pabrik CV Jaya Setya Plastik.",
tags: ["PLC", "OMRON", "ROBOT ARM"]
},

```
{
  id: 2,
  title: "Water Level Monitoring",
  description: "Perancangan sistem monitoring ketinggian air bendungan menggunakan Arduino Uno dan sensor ultrasonik.",
  tags: ["Arduino", "Ultrasonik", "Proteus"]
},

{
  id: 3,
  title: "Smart Backpack Berbasis IoT",
  description: "Tas pintar untuk pendakian gunung berbasis ESP32 yang dilengkapi GPS, DHT22, OLED Display dan sistem SOS berbasis LoRa untuk mengirim koordinat darurat secara real-time.",
  tags: ["ESP32", "IoT", "GPS", "LoRa", "DHT22", "OLED"]
}
```

],

skills: [
{
category: "Embedded System",
items: [
{ name: "Arduino", level: 90 },
{ name: "ESP32 / IoT", level: 85 },
{ name: "ESP8266", level: 75 }
]
},

```
{
  category: "Desain Elektronika",
  items: [
    { name: "PCB Design", level: 88 },
    { name: "Rangkaian Analog", level: 82 },
    { name: "Power Electronics", level: 72 }
  ]
},

{
  category: "Pemrograman",
  items: [
    { name: "Embedded C/C++", level: 87 },
    { name: "Python", level: 75 },
    { name: "MATLAB", level: 70 },
    { name: "SCILAB/Xcos", level: 80 }
  ]
}
```

],

experience: [
{
period: "Agustus 2025 - Desember 2025",
role: "Maintenance Department",
company: "CV Jaya Setya Plastik",
description: "Perawatan mesin industri, troubleshooting, perbaikan sistem kontrol, dan pengembangan sistem berbasis PLC.",
active: false
}
],

certifications: [
{
period: "15 - 17 November 2024",
theme: "Design PCB",
organizer: "PT Indomaker Indonesia Mandiri",
description: "Pelatihan desain PCB dan proses fabrikasi PCB untuk kebutuhan industri."
}
],

contact: {
email: "[bulanauraa@gmail.com](mailto:bulanauraa@gmail.com)",
phone: "+62 858 032 419 39",
location: "Semarang, Jawa Tengah, Indonesia",
github: "https://github.com/BulanAura"
}
};
