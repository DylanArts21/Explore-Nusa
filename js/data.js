
// Data for destinations
const destinations = [
    {
      id: 1,
      name: "Pantai Kuta",
      location: "Bali",
      category: "beach",
      shortDescription: "Salah satu pantai paling terkenal di Bali dengan pemandangan matahari terbenam yang spektakuler.",
      description: "Pantai Kuta adalah salah satu pantai paling terkenal di Bali, dan merupakan tujuan wisata paling populer di Indonesia. Terkenal dengan pasir putih, ombak yang sempurna untuk berselancar, dan matahari terbenam yang spektakuler, Pantai Kuta menawarkan pengalaman liburan yang tak terlupakan. Area ini juga dikelilingi oleh berbagai restoran, bar, dan toko yang menjadikannya tempat yang sempurna untuk menikmati kehidupan malam Bali.",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      images: [
        "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1604868189265-219ba7465e49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ],
      features: [
        "Pantai pasir putih",
        "Matahari terbenam yang indah",
        "Berselancar",
        "Kuliner lokal",
        "Kehidupan malam yang meriah",
        "Akses mudah ke pusat kota"
      ],
      priceRange: "Rp 100.000 - Rp 500.000 per hari",
      popularTimes: [
        "April - Juni (Musim Semi)",
        "September - Oktober (Musim Gugur)",
        "Desember - Januari (Libur Akhir Tahun)"
      ]
    },
    {
      id: 2,
      name: "Candi Borobudur",
      location: "Magelang, Jawa Tengah",
      category: "culture",
      shortDescription: "Candi Buddha terbesar di dunia, dibangun pada abad ke-9 dan merupakan Situs Warisan Dunia UNESCO.",
      description: "Candi Borobudur adalah candi Buddha terbesar di dunia yang dibangun pada abad ke-9 dan merupakan Situs Warisan Dunia UNESCO. Monumen yang luar biasa ini terdiri dari sembilan tumpukan platform, enam berbentuk persegi dan tiga melingkar, yang dihiasi dengan 2.672 panel relief dan 504 patung Buddha. Borobudur adalah simbol harmoni manusia dengan alam, spiritual, dan filosofi. Pengunjung dapat menikmati pemandangan matahari terbit atau terbenam yang spektakuler dari puncak candi.",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      images: [
        "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1584810359583-96fc9e700523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ],
      features: [
        "Situs Warisan Dunia UNESCO",
        "Tur matahari terbit",
        "2.672 panel relief",
        "504 patung Buddha",
        "Museum Borobudur",
        "Pemandangan pedesaan Jawa"
      ],
      priceRange: "Rp 50.000 - Rp 350.000 (tergantung paket)",
      popularTimes: [
        "Mei - September (Musim Kemarau)",
        "Libur sekolah (Juni-Juli)",
        "Waisak (Mei)"
      ]
    },
    {
      id: 3,
      name: "Gunung Bromo",
      location: "Jawa Timur",
      category: "mountain",
      shortDescription: "Gunung berapi aktif yang menawarkan pemandangan matahari terbit yang menakjubkan dan lautan pasir yang unik.",
      description: "Gunung Bromo adalah gunung berapi aktif yang merupakan bagian dari Taman Nasional Bromo Tengger Semeru di Jawa Timur. Terkenal dengan pemandangan matahari terbitnya yang menakjubkan, lautan pasir yang luas, dan kaldera vulkanik yang dramatis, Bromo menawarkan pengalaman yang tak terlupakan bagi para pengunjung. Anda dapat menaiki tangga ke bibir kawah atau menunggang kuda melintasi lautan pasir untuk mencapai kaki gunung. Kabut pagi yang menyelimuti puncak gunung menciptakan pemandangan yang magis dan surreal.",
      rating: 4.7,
      image: "images/bromo-1.jpg",
      images: [
        "https://images.unsplash.com/photo-1589030446236-bffa3b8e5282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ],
      features: [
        "Pemandangan matahari terbit",
        "Lautan pasir",
        "Kaldera vulkanik",
        "Trekking ke kawah",
        "Berkuda melintasi lautan pasir",
        "Budaya suku Tengger"
      ],
      priceRange: "Rp 150.000 - Rp 1.000.000 (tergantung paket)",
      popularTimes: [
        "April - Oktober (Musim Kemarau)",
        "Juli - Agustus (Liburan Sekolah)",
        "Hari Raya Kasada (setahun sekali)"
      ]
    },
    {
      id: 4,
      name: "Pulau Komodo",
      location: "Nusa Tenggara Timur",
      category: "adventure",
      shortDescription: "Rumah bagi komodo, reptil terbesar di dunia, dan taman nasional yang merupakan Situs Warisan Dunia UNESCO.",
      description: "Pulau Komodo adalah bagian dari Taman Nasional Komodo, rumah bagi komodo atau biawak komodo, reptil terbesar di dunia. Taman nasional ini mencakup tiga pulau utama: Komodo, Rinca, dan Padar, serta banyak pulau kecil lainnya. Selain dapat melihat komodo di habitat aslinya, pengunjung juga dapat menikmati pemandangan alam yang spektakuler, pantai dengan pasir merah muda yang unik, dan pengalaman menyelam yang luar biasa dengan keanekaragaman hayati laut yang melimpah.",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      images: [
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1543158266-0066955047b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1582189933984-3c8fd4eee58e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      ],
      features: [
        "Komodo di habitat asli",
        "Pantai Pink",
        "Snorkeling dan diving",
        "Trekking di Pulau Padar",
        "Taman Nasional Komodo",
        "Perbukitan dengan pemandangan spektakuler"
      ],
      priceRange: "Rp 500.000 - Rp 5.000.000 (tergantung paket)",
      popularTimes: [
        "April - Juni (Musim Kemarau Awal)",
        "September - November (Musim Kemarau Akhir)",
        "Agustus (Festival Komodo)"
      ]
    },
    {
      id: 5,
      name: "Raja Ampat",
      location: "Papua Barat",
      category: "adventure",
      shortDescription: "Surga bagi penyelam dengan keanekaragaman hayati laut terkaya di dunia dan pemandangan pulau-pulau karst yang indah.",
      description: "Raja Ampat adalah kepulauan yang terdiri dari lebih dari 1.500 pulau kecil, atol, dan laguna di Papua Barat. Wilayah ini terkenal dengan keanekaragaman hayati laut yang luar biasa, menjadikannya surga bagi penyelam dan snorkeler. Dengan lebih dari 1.000 spesies ikan, 700 jenis moluska, dan 75% spesies karang dunia, Raja Ampat menawarkan pengalaman bawah laut yang tak tertandingi. Selain itu, pemandangan pulau-pulau karst yang hijau menjulang dari laut biru kristal menciptakan lanskap yang memukau.",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1516748388010-174a1dbc8189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      images: [
        "https://images.unsplash.com/photo-1516748388010-174a1dbc8189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1516748927093-a4094b437b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1559401507-8dfef08702ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      ],
      features: [
        "Snorkeling dan diving kelas dunia",
        "1,500+ pulau dan atol",
        "Keanekaragaman hayati laut tertinggi",
        "Pemandangan pulau karst",
        "Budaya Papua",
        "Penginapan di atas air"
      ],
      priceRange: "Rp 5.000.000 - Rp 15.000.000 (tergantung paket)",
      popularTimes: [
        "Oktober - April (Musim Kering)",
        "November - Maret (Kondisi Air Terbaik)",
        "Desember - Januari (Liburan Akhir Tahun)"
      ]
    },
    {
      id: 6,
      name: "Danau Toba",
      location: "Sumatera Utara",
      category: "culture",
      shortDescription: "Danau vulkanik terbesar di dunia dengan pulau Samosir di tengahnya yang kaya akan budaya Batak.",
      description: "Danau Toba adalah danau vulkanik terbesar di dunia yang terbentuk dari letusan supervolcano sekitar 75.000 tahun lalu. Di tengah danau terdapat Pulau Samosir, sebuah pulau yang kaya akan budaya Batak dan pemandangan alam yang indah. Pengunjung dapat menikmati keindahan danau yang dikelilingi perbukitan hijau, menjelajahi desa-desa tradisional Batak, melihat rumah adat tradisional, dan mempelajari kekayaan budaya lokal. Air danau yang jernih juga memungkinkan berbagai aktivitas air seperti berenang dan berkano.",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1605108156202-d3470e9e8e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      images: [
        "https://images.unsplash.com/photo-1605108156202-d3470e9e8e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1592863580198-2c6c462d1857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1596187088695-56974285a9e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ],
      features: [
        "Danau vulkanik terbesar di dunia",
        "Pulau Samosir",
        "Budaya Batak",
        "Rumah adat tradisional",
        "Air panas alami",
        "Pemandangan alam yang indah"
      ],
      priceRange: "Rp 200.000 - Rp 2.000.000 (tergantung paket)",
      popularTimes: [
        "Mei - September (Musim Kemarau)",
        "Desember - Januari (Liburan Akhir Tahun)",
        "Juni - Juli (Festival Danau Toba)"
      ]
    },
    {
      id: 7,
      name: "Taman Nasional Bunaken",
      location: "Sulawesi Utara",
      category: "beach",
      shortDescription: "Surga bawah laut dengan terumbu karang yang spektakuler dan lebih dari 390 spesies terumbu karang.",
      description: "Taman Nasional Bunaken terletak di Sulawesi Utara dan merupakan salah satu tujuan menyelam terbaik di dunia. Taman laut ini mencakup lima pulau: Bunaken, Manado Tua, Mantehage, Nain, dan Siladen. Dengan kedalaman laut yang mencapai 1.566 meter, Bunaken memiliki ekosistem laut yang sangat beragam, termasuk terumbu karang, padang lamun, hutan mangrove, perairan dalam, dan pesisir. Terdapat lebih dari 390 spesies terumbu karang dan ribuan spesies ikan, menjadikannya surga bagi penyelam dan snorkeler.",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1603329470059-d534e363fc5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      images: [
        "https://images.unsplash.com/photo-1603329470059-d534e363fc5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1592148161938-0b3fb19667d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      ],
      features: [
        "Diving dan snorkeling kelas dunia",
        "390+ spesies terumbu karang",
        "Biodiversitas laut yang tinggi",
        "Dinding laut vertikal",
        "5 pulau utama",
        "Sunset point"
      ],
      priceRange: "Rp 300.000 - Rp 3.000.000 (tergantung paket)",
      popularTimes: [
        "April - Oktober (Musim Kemarau)",
        "Juli - September (Kondisi Air Terbaik)",
        "Mei - Juni (Bulan Bunaken)"
      ]
    },
    {
      id: 8,
      name: "Ubud",
      location: "Bali",
      category: "culture",
      shortDescription: "Pusat seni dan budaya Bali dengan pemandangan sawah bertingkat yang indah dan kehidupan spiritual yang kaya.",
      description: "Ubud adalah pusat seni dan budaya Bali yang terletak di tengah pulau. Dikelilingi oleh sawah bertingkat yang indah dan hutan tropis, Ubud menawarkan suasana yang lebih tenang dibandingkan dengan daerah pantai di Bali. Pengunjung dapat menikmati berbagai galeri seni, museum, workshop kerajinan tangan, dan pertunjukan tari tradisional. Selain itu, Ubud juga terkenal dengan retreat yoga, spa tradisional, dan kuliner organik, menjadikannya destinasi yang sempurna bagi mereka yang mencari pengalaman spiritual dan budaya.",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      images: [
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1250&q=80",
        "https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
      ],
      features: [
        "Sawah bertingkat Tegallalang",
        "Hutan monyet suci",
        "Galeri seni & kerajinan tradisional",
        "Pertunjukan tari tradisional",
        "Retreat yoga",
        "Pasar tradisional"
      ],
      priceRange: "Rp 200.000 - Rp 3.000.000 (tergantung kegiatan)",
      popularTimes: [
        "April - Juni (Musim Semi)",
        "September - Oktober (Musim Gugur)",
        "Februari - Maret (Festival Seni Ubud)"
      ]
    },
    {
      id: 9,
      name: "Gunung Rinjani",
      location: "Nusa Tenggar Barat",
      category: "mountain",
      shortDescription: "Gunung berapi tertinggi kedua di Indonesia dengan ketinggian 3.726 mdpl..",
      description: "Gunung Rinjani terletak di Pulau Lombok, Nusa Tenggara Barat, dan merupakan gunung berapi tertinggi kedua di Indonesia dengan ketinggian 3.726 mdpl. Tempat ini terkenal dengan pemandangan indah serta jalur pendakian yang menantang. Salah satu daya tarik utamanya adalah Danau Segara Anak, yang berada di kawah gunung dan sering digunakan sebagai tempat beristirahat oleh para pendaki. Selain itu, terdapat pemandian air panas alami yang dipercaya memiliki manfaat bagi kesehatan. Fasilitas yang tersedia di kawasan ini meliputi basecamp pendakian, pos peristirahatan, camping ground, serta jasa porter dan pemandu untuk membantu pendaki selama perjalanan.",
      rating: 4.8,
      image: "images/rinjani-1.webp",
      images: [
        "images/rinjani-1.webp",
        "images/rinjani-2.jpg",
        "images/rinjani-3.jpg"
      ],
      features: [
        "Fenomena api biru",
        "Danau kawah berwarna turquoise",
        "Pertambangan belerang tradisional",
        "Pemandangan matahari terbit",
        "Pendakian malam hari",
        "Hutan tropis di sekitar kawah"
      ],
      priceRange: "Rp 150.000 - Rp 1.000.000 (tergantung paket)",
      popularTimes: [
        "April - Oktober (Musim Kemarau)",
        "Juli - Agustus (Langit paling cerah)",
        "Mei - September (Cuaca terbaik untuk pendakian)"
      ]
    },
    {
      id: 10,
      name: "Kawah Putih",
      location: "Bandung",
      category: "pertualangan",
      shortDescription: "Gunung berapi tertinggi kedua di Indonesia dengan ketinggian 3.726 mdpl..",
      description: "Gunung Rinjani terletak di Pulau Lombok, Nusa Tenggara Barat, dan merupakan gunung berapi tertinggi kedua di Indonesia dengan ketinggian 3.726 mdpl. Tempat ini terkenal dengan pemandangan indah serta jalur pendakian yang menantang. Salah satu daya tarik utamanya adalah Danau Segara Anak, yang berada di kawah gunung dan sering digunakan sebagai tempat beristirahat oleh para pendaki. Selain itu, terdapat pemandian air panas alami yang dipercaya memiliki manfaat bagi kesehatan. Fasilitas yang tersedia di kawasan ini meliputi basecamp pendakian, pos peristirahatan, camping ground, serta jasa porter dan pemandu untuk membantu pendaki selama perjalanan.",
      rating: 4.8,
      image: "images/kawah-putih-1.jpg",
      images: [
        "images/rinjani-1.webp",
        "images/rinjani-2.jpg",
        "images/rinjani-3.jpg"
      ],
      features: [
        "Fenomena api biru",
        "Danau kawah berwarna turquoise",
        "Pertambangan belerang tradisional",
        "Pemandangan matahari terbit",
        "Pendakian malam hari",
        "Hutan tropis di sekitar kawah"
      ],
      priceRange: "Rp 150.000 - Rp 1.000.000 (tergantung paket)",
      popularTimes: [
        "April - Oktober (Musim Kemarau)",
        "Juli - Agustus (Langit paling cerah)",
        "Mei - September (Cuaca terbaik untuk pendakian)"
      ]
    }
  ];
  
  // Function to get all destinations
  function getAllDestinations() {
    return destinations;
  }
  
  // Function to get destinations by category
  function getDestinationsByCategory(category) {
    if (category === 'all') {
      return destinations;
    }
    return destinations.filter(destination => destination.category === category);
  }
  
  // Function to get destination by ID
  function getDestinationById(id) {
    return destinations.find(destination => destination.id === parseInt(id));
  }
  