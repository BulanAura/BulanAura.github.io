// data.js — memuat data portofolio dari JSON
// Salin isi portfolio.json ke sini agar bisa digunakan secara langsung
// tanpa perlu fetch (kompatibel dengan membuka file lokal / tanpa server)

const portfolioData = {
  {
  "profile": {
    "name": "Bulan Aura Dwi Yulinda",
    "title": "Teknik Elektronika",
    "tagline": "Merancang dan membangun sistem elektronika — dari rangkaian analog hingga embedded system — dengan presisi dan inovasi.",
    "email": "bulanauraa@gmail.com",
    "phone": "+62 858 032 419 39",
    "location": "Semarang, Jawa Tengah",
    "github": "github.com/BulanAura"
  },

  "education": [
  {
    "period": "2019 - 2022",
    "institution": "SMA Negeri 1 Kudus",
    "major": "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
    "description": "Menempuh pendidikan menengah atas dengan fokus pada bidang Matematika dan Ilmu Pengetahuan Alam. Selama masa sekolah mulai mengenal konsep dasar elektronika, fisika, dan pemecahan masalah berbasis sains yang menjadi fondasi ketertarikan pada dunia teknik.",
    "image": "assets/images/logo smasa (1).jpg"
  },
  {
    "period": "2023 - 2026",
    "institution": "Politeknik Negeri Semarang",
    "major": "Teknik Elektro - Program Studi Teknik Elektronika",
    "description": "Mempelajari sistem elektronika, mikrokontroler, embedded system, instrumentasi, sistem kendali, Internet of Things (IoT), elektronika daya, serta perancangan dan implementasi perangkat keras maupun perangkat lunak. Aktif mengerjakan berbagai proyek berbasis Arduino, ESP32, PLC, dan sistem otomasi industri.",
    "image": "assets/images/logo polines.jpg"
  }
]
  
  "projects": [
    {
      "id": 1,
      "title": "Power Robbot Control",
      "description": "Perancangan sistem Power untuk Robbot Arm pada pabrik CV jaya Setya Plastik.",
      "tags": ["PLC", "OMRON", "ROBBOT ARM"],
      "image": "assets/images/panel robbot.jpg"
    },
    {
      "id": 2,
      "title": "Water Leveling",
      "description": "Perancangan sistem untuk mengukur ketinggian sebuah bendungan menggunakan Arduino Uno dan sensor ultrasonik.",
      "tags": ["Arduino", "Sensor Ultrasonik", "Proteus"],
      "image": "assets/images/proyek water level.jpg"
    },
    {
      {
  "id": 3,
  "title": "Smart Backpack Berbasis IoT dengan Sistem SOS untuk Pendakian Gunung",
  "description": "Rancang bangun tas pintar untuk pendakian gunung berbasis ESP32 yang dilengkapi sensor DHT22 untuk memantau suhu lingkungan, modul GPS untuk pelacakan lokasi, OLED Display untuk menampilkan informasi secara real-time, serta sistem SOS yang dapat mengirim koordinat darurat melalui jaringan komunikasi LoRa guna meningkatkan keselamatan pendaki.",
  "tags": ["ESP32", "IoT", "GPS", "LoRa", "DHT22", "OLED", "SOS System"],
  "image": "assets/images/smartbacpack.jpg"
}
    }
  ],

  "skills": [
    {
      "category": "Embedded System",
      "items": [
        { "name": "Arduino", "level": 90 },
        { "name": "ESP32 / IOT", "level": 80 },
        { "name": "ESP8266", "level": 70 }
      ]
    },
    {
      "category": "Desain Elektronika",
      "items": [
        { "name": "PCB Design (EasyEDA/Eagle)", "level": 88 },
        { "name": "Rangkaian Analog", "level": 82 },
        { "name": "Simulasi (LTSpice)", "level": 78 },
        { "name": "Power Electronics", "level": 72 }
      ]
    },
    {
      "category": "Pemrograman",
      "items": [
        { "name": "Embedded C / C++", "level": 87 },
        { "name": "Python (Scripting)", "level": 75 },
        { "name": "MATLAB / Simulink", "level": 70 },
        { "name": "Assembly (AVR)", "level": 60 },
        { "name": "SCILAB / Xcos", "level": 80 }
      ]
    },
    {
      "category": "Alat & Instrumentasi",
      "items": [
        { "name": "Osiloskop Digital", "level": 92 },
        { "name": "Multimeter & LCR Meter", "level": 95 },
        { "name": "Logic Analyzer", "level": 80 }
      ]
    }
  ],

  "experience": [
    {
      "period": " 11 Agustus - 11 Desember 2025",
      "role": "Maintenance Departemant",
      "company": "CV. Jaya Setya Plastik",
      "description": "Merancang dan mengembangkan sistem kontrol berbasis PLC untuk peralatan industri. Perbaikan Dan perswatan pada mesin, pengujian, dan dokumentasi teknis.",
      "image": "assets/images/foto magang.jpg"
      "active": false
    },
  ],

  "Sertifikasi": [
     {
      "period": " 15 - 17 November 2024",
      "Theme": " Design PCB",
      "Penyelenggara": "PT indomaker Indonesia Mandiri",
      "description": "Pelatihan design PCB dan pembuatan PCB untuk industri.",
      "image": "assets/images/sertif pcb.jpg"
    },
  ],
  "contact": {
    "email": "bulanauraa@gmail.com",
    "phone": "+62 858 032 419 39",
    "location": "Semarang, Jawa Tengah, Indonesia",
    "github": "https://github.com/BulanAura"
  }
}:
