
import { SectionContent, Member } from './types';

export const GROUP_MEMBERS: Member[] = [
  { 
    name: "Rafi", 
    role: "Ketua (Absen 21)", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Felix" 
  },
  { 
    name: "Qizzy", 
    role: "Anggota (Absen 24)", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Oliver" 
  },
  { 
    name: "Nadhiya", 
    role: "Anggota (Absen 22)", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Zoe" 
  },
  { 
    name: "Nayla", 
    role: "Anggota (Absen 23)", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sasha" 
  },
  { 
    name: "Ninda", 
    role: "Anggota (Absen 25)", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Molly" 
  },
];

export const SECTIONS: SectionContent[] = [
  {
    id: "climate",
    title: "1. Masalah Iklim di Kantin Kita",
    icon: "CloudRain",
    color: "bg-pink-100 text-pink-600",
    parts: [
      {
        subtitle: "Sampah Kantin = Bom Gas Metana",
        text: "Logikanya begini: Tiap hari kantin sekolah kita ngasilin sisa makanan berlipat-lipat. Kalau cuma dibuang ke TPA, sampah ini bakal membusuk tanpa oksigen (anaerob) dan ngasilin gas Metana (CH4). Gas ini 25 kali lebih kuat 'nangkep' panas dibanding CO2! Jadi, tumpukan sampah di sekolah kita sebenernya ikut nyumbang pemanasan global.",
        imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
      },
      {
        subtitle: "Realita di Sekolah",
        text: "Banyak sekolah yang cuma kumpulin sampah lalu diangkut truk. Padahal, truk sampah itu sendiri ngasilin polusi. Dengan ngolah sampah organik langsung di sekolah, kita motong rantai karbon dan ngerem laju perubahan iklim mulai dari apa yang kita makan di kantin!",
        imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
      }
    ],
    detailedPoints: [
      "Gas Metana (CH4) dari sampah organik menyumbang 16% emisi global.",
      "Volume sampah harian sekolah yang belum terkelola maksimal.",
      "Pentingnya desentralisasi pengolahan sampah untuk mengurangi jejak karbon transportasi."
    ],
    sources: [
      { name: "Kementerian LHK", url: "https://www.menlhk.go.id" },
      { name: "UN Environment Programme", url: "https://www.unep.org" }
    ]
  },
  {
    id: "physics",
    title: "2. Fisika di Balik Kompos Cepat",
    icon: "Zap",
    color: "bg-yellow-100 text-yellow-600",
    parts: [
      {
        subtitle: "Termodinamika Proses Dekomposisi",
        text: "Kita pake ilmu Perpindahan Kalor. Proses pengomposan aerobik itu eksotermik (ngasilin panas). Bakteri baik yang makan sampah bakal ngasilin suhu sampe 50-60°C. Kita manfaatin hukum termodinamika buat jaga suhu ini tetap stabil biar kuman jahat mati tapi nutrisi buat tanaman tetap terjaga.",
        imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
      },
      {
        subtitle: "Fluida & Aliran Udara (Aerodinamika)",
        text: "Biar nggak bau metana, kita butuh oksigen. Kita desain wadah pake prinsip perbedaan tekanan udara. Kita pasang pipa berlubang di tengah wadah biar ada aliran konveksi alami—udara panas naik, udara segar masuk. Oksigen melimpah = Bau Hilang!",
        imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800"
      }
    ],
    detailedPoints: [
      "Prinsip konveksi gas untuk aerasi alami tanpa listrik.",
      "Energi aktivasi bakteri dalam proses eksotermik.",
      "Isolasi termal wadah untuk mempercepat pematangan kompos."
    ],
    sources: [
      { name: "Physics World", url: "https://physicsworld.com" },
      { name: "Journal of Waste Management", url: "https://www.sciencedirect.com" }
    ]
  },
  {
    id: "how-it-works",
    title: "3. Cara Kerja & Implementasinya",
    icon: "Settings",
    color: "bg-blue-100 text-blue-600",
    parts: [
      {
        subtitle: "Wadah Kompos 'Smart-Flow'",
        text: "Kita modifikasi tong bekas pake pipa PVC yang dilubangi kecil-kecil. Sampah sisa sayur dan buah kantin dicampur sama serbuk gergaji (biar perbandingan Karbon & Nitrogen pas). Kita nggak butuh mesin mahal, cuma butuh desain wadah yang pinter aliran udaranya.",
        imageUrl: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800"
      },
      {
        subtitle: "Monitoring Suhu & Kelembaban",
        text: "Kita pake termometer sederhana buat cek suhu di tengah tumpukan sampah. Kalau suhu naik, artinya fisika dan biologi lagi kerja bareng! Dalam 3-4 minggu, sampah kantin yang tadinya bau berubah jadi tanah subur yang hitam dan nggak bau sama sekali.",
        imageUrl: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=800"
      }
    ],
    detailedPoints: [
      "Rancangan pipa PVC perforasi untuk sirkulasi oksigen optimal.",
      "Pemanfaatan barang bekas (tong plastik) sebagai wadah utama.",
      "Interval waktu panen kompos yang terukur (data hasil uji)."
    ],
    sources: [
      { name: "BRIN Indonesia", url: "https://www.brin.go.id" },
      { name: "FAO - Composting Manual", url: "https://www.fao.org" }
    ]
  },
  {
    id: "impact",
    title: "4. Dampak Positif yang Bakal Terasa",
    icon: "TrendingUp",
    color: "bg-emerald-100 text-emerald-600",
    parts: [
      {
        subtitle: "Pupuk Gratis buat Taman Sekolah",
        text: "Kita nggak perlu beli pupuk kimia lagi buat taman sekolah. Hasil kompos kita kaya akan unsur hara. Logikanya, kita balikin nutrisi dari makanan yang kita makan ke tanah lagi (Circular Economy). Taman sekolah jadi lebih hijau, udara jadi lebih sejuk!",
        imageUrl: "https://images.unsplash.com/photo-1466611653911-95282fc3656b?auto=format&fit=crop&q=80&w=800"
      },
      {
        subtitle: "Pengurangan Emisi Metana Nyata",
        text: "Tiap 1 kg sampah organik yang diolah jadi kompos berarti kita mencegah sekitar 0.5 - 1 kg gas metana lepas ke langit. Kalau seluruh sekolah di kota kita lakuin ini, dampaknya buat nurunin suhu bumi bakal kerasa banget!",
        imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800"
      }
    ],
    detailedPoints: [
      "Penurunan biaya operasional kebersihan sekolah.",
      "Substitusi pupuk kimia dengan pupuk organik hasil dekomposisi.",
      "Kontribusi lokal terhadap target pengurangan emisi nasional."
    ],
    sources: [
      { name: "World Bank Waste Data", url: "https://datatopics.worldbank.org" },
      { name: "Green School Indonesia", url: "https://www.greenschool.org" }
    ]
  },
  {
    id: "sustainability",
    title: "5. Relevansi & Masa Depan Kita",
    icon: "Globe",
    color: "bg-purple-100 text-purple-600",
    parts: [
      {
        subtitle: "Budaya Baru di Sekolah",
        text: "Projek ini ngajarin kita kalau sampah itu bukan akhir, tapi awal dari siklus hidup baru. Ini realistis buat diterapin di rumah atau kompleks perumahan. Kita jadi generasi yang nggak cuma jago teori, tapi juga bisa ngasih solusi nyata buat krisis iklim lewat hal paling dasar: Sampah Kita.",
        imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
      }
    ],
    detailedPoints: [
      "Integrasi pengolahan sampah dalam kurikulum Merdeka Belajar.",
      "Penciptaan lingkungan sekolah yang bersih dan minim jejak karbon.",
      "Edukasi berkelanjutan bagi seluruh warga sekolah."
    ],
    sources: [
      { name: "UNESCO Education for SD", url: "https://en.unesco.org" },
      { name: "Universitas Indonesia", url: "https://www.ui.ac.id" }
    ]
  }
];
