// data.js — memuat data portofolio dari JSON
// Salin isi portfolio.json ke sini agar bisa digunakan secara langsung
// tanpa perlu fetch (kompatibel dengan membuka file lokal / tanpa server)

const portfolioData = {
  profile: {
    name: "Bulan Aura Dwi Yulinda",
    title: "Teknik Elektronika",
    tagline: "Merancang dan membangun sistem elektronika, IoT, dan otomasi untuk menghadirkan solusi teknologi yang inovatif dan bermanfaat.",
    email: "bulanauraa@gmail.com",
    phone: "+62 858 032 419 39",
    location: "Semarang, Jawa Tengah",
    github: "https://github.com/BulanAura"
  },

  education: [
    {
      period: "2019 - 2022",
      institution: "SMA Negeri 1 Kudus",
      major: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
      description:
        "Menempuh pendidikan menengah atas dengan fokus pada bidang sains dan matematika yang menjadi dasar pengembangan kemampuan analitis dan pemecahan masalah.",
      image: "assets/images/logo-smasa.jpg"
    },
    {
      period: "2023 - 2026",
      institution: "Politeknik Negeri Semarang",
      major: "D3 Teknik Elektro - Teknik Elektronika",
      description:
        "Mempelajari embedded system, Internet of Things (IoT), instrumentasi, sistem kendali, elektronika daya, PLC, dan otomasi industri melalui pembelajaran berbasis praktik.",
      image: "assets/images/logo-polines.jpg"
    }
  ],

  projects: [
    {
      id: 1,
      title: "Power Robbot Control",
      description:
        "Perancangan sistem power untuk Robot Arm pada pabrik CV Jaya Setya Plastik menggunakan PLC OMRON untuk mendukung sistem otomasi industri.",
      tags: ["PLC", "OMRON", "ROBOT ARM"],
      image: "assets/images/panel-robbot.jpg"
    },

    {
      id: 2,
      title: "Water Level Monitoring",
      description:
        "Perancangan sistem monitoring ketinggian air bendungan menggunakan Arduino Uno dan sensor ultrasonik untuk pemantauan level air secara real-time.",
      tags: ["Arduino", "Sensor Ultrasonik", "Proteus"],
      image: "assets/images/proyek-water-level.jpg"
    },

    {
      id: 3,
      title: "Smart Backpack Berbasis IoT dengan Sistem SOS",
      description:
        "Tas pintar untuk pendakian gunung berbasis ESP32 yang dilengkapi sensor DHT22, GPS, OLED Display, dan sistem SOS berbasis LoRa untuk mengirim koordinat darurat secara real-time guna meningkatkan keselamatan pendaki.",
      tags: [
        "ESP32",
        "IoT",
        "GPS",
        "LoRa",
        "DHT22",
        "OLED",
        "SOS System"
      ],
      image: "assets/images/smartbackpack.jpg"
    }
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

    {
      category: "Desain Elektronika",
      items: [
        { name: "PCB Design (EasyEDA / Eagle)", level: 88 },
        { name: "Rangkaian Analog", level: 82 },
        { name: "Simulasi LTSpice", level: 78 },
        { name: "Power Electronics", level: 72 }
      ]
    },

    {
      category: "Pemrograman",
      items: [
        { name: "Embedded C / C++", level: 87 },
        { name: "Python", level: 75 },
        { name: "MATLAB / Simulink", level: 70 },
        { name: "Assembly AVR", level: 60 },
        { name: "SCILAB / Xcos", level: 80 }
      ]
    },

    {
      category: "Alat & Instrumentasi",
      items: [
        { name: "Osiloskop Digital", level: 92 },
        { name: "Multimeter & LCR Meter", level: 95 },
        { name: "Logic Analyzer", level: 80 }
      ]
    }
  ],

  experience: [
    {
      period: "Agustus 2025 - Desember 2025",
      role: "Maintenance Department",
      company: "CV Jaya Setya Plastik",
      description:
        "Melakukan perawatan mesin industri, troubleshooting sistem kontrol, perbaikan peralatan produksi, serta pengembangan sistem berbasis PLC untuk mendukung proses otomasi industri.",
      image: "assets/images/foto-magang.jpg",
      active: false
    }
  ],

  certifications: [
    {
      period: "15 - 17 November 2024",
      theme: "Design PCB",
      organizer: "PT Indomaker Indonesia Mandiri",
      description:
        "Pelatihan desain PCB dan proses fabrikasi PCB untuk kebutuhan industri.",
      image: "assets/images/sertif-pcb.jpg"
    }
  ],

  contact: {
    email: "bulanauraa@gmail.com",
    phone: "+62 858 032 419 39",
    location: "Semarang, Jawa Tengah, Indonesia",
    github: "https://github.com/BulanAura"
  }
};
