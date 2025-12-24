import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';
import NewsCard from '@/components/NewsCard';
import { Quote, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { mockPosts } from '@/lib/data/mockData';

export default function Home() {
  const latestPosts = mockPosts.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Welcome Section - Sambutan Ketua */}
      <section className="py-20 md:py-28 bg-slate-900/30 border-y border-white/5 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/HUDAMULIYA.JPG"
                  alt="Ketua HIMATIKA"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                  <Quote className="text-blue-400" size={24} />
                </div>
                <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">Sambutan Ketua</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Membangun Generasi IT yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Unggul</span> dan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Berakhlak</span>
              </h2>

              <blockquote className="text-slate-300 text-lg leading-relaxed mb-8 border-l-4 border-blue-500 pl-6 bg-white/5 py-4 pr-4 rounded-r-lg backdrop-blur-sm">
                &quot;Assalamualaikum Warahmatullahi Wabarakatuh. Selamat datang di keluarga besar HIMATIKA UNU Yogyakarta.
                Kami hadir sebagai wadah bagi mahasiswa informatika untuk mengembangkan
                skill teknologi, soft skill, dan jiwa kepemimpinan dengan semangat Aswaja.&quot;
              </blockquote>

              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg">Huda Muliya</h4>
                  <p className="text-slate-400 text-sm">Ketua HIMATIKA 2025/2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Berita & Kegiatan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Berita Terbaru
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Ikuti perkembangan terbaru kegiatan dan program kerja HIMATIKA UNU Yogyakarta
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <NewsCard key={post.id} post={post} featured={index === 0} />
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-16">
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 bg-transparent text-white font-semibold px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-all hover:border-white/40"
            >
              Lihat Semua Berita
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden border-t border-white/5">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ opacity: 0.05 }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Siap Bergabung dengan Kami?
          </h2>
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Jadilah bagian dari keluarga besar HIMATIKA UNU Yogyakarta dan kembangkan potensimu
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold px-8 py-4 rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
