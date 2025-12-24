import { Metadata } from 'next';
import { Target, Users, Lightbulb, Heart, History, Sparkles, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Tentang Kami',
    description: 'Kenali lebih dekat Himpunan Mahasiswa Informatika UNU Yogyakarta.',
};

const values = [
    { icon: Target, title: 'Akademik', description: 'Mengutamakan pengembangan ilmu pengetahuan' },
    { icon: Users, title: 'Kekeluargaan', description: 'Membangun ikatan persaudaraan yang kuat' },
    { icon: Lightbulb, title: 'Inovatif', description: 'Mendorong kreativitas dan solusi teknologi' },
    { icon: Heart, title: 'Religius', description: 'Menjunjung nilai-nilai Aswaja' },
];

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="relative py-32 md:py-40 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ opacity: 0.1 }} />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block text-cyan-400 text-sm font-semibold mb-4 tracking-wider uppercase">PROFIL ORGANISASI</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Tentang HIMATIKA</h1>
                    <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto">
                        Kenali lebih dekat Himpunan Mahasiswa Informatika UNU Yogyakarta
                    </p>
                </div>
            </section>

            {/* History Section */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                                    <History className="text-cyan-400" size={24} />
                                </div>
                                <span className="text-cyan-400 font-semibold">Sejarah</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Perjalanan HIMATIKA</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                HIMATIKA UNU Yogyakarta didirikan pada tahun 2019 bersamaan dengan dibukanya
                                Program Studi Informatika di Universitas Nahdlatul Ulama Yogyakarta.
                            </p>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Dengan semangat &quot;Ahlussunnah Wal Jamaah&quot; dan teknologi, HIMATIKA berkomitmen
                                untuk mencetak generasi IT yang cerdas dan berakhlak mulia.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden backdrop-blur-sm">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/logohima.png"
                                    alt="Logo HIMATIKA"
                                    className="w-48 h-48 object-contain"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-2xl -z-10 blur-xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Visi Misi */}
            <section className="py-20 bg-slate-900/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block text-cyan-400 text-sm font-semibold mb-2 tracking-wider">VISI & MISI</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Tujuan Organisasi</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-900/50 to-slate-900 rounded-2xl p-8 text-white border border-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,0.1)]">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                                <Target size={32} className="text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Visi</h3>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                Menjadi wadah pengembangan potensi mahasiswa informatika yang adaptif
                                terhadap teknologi dan berlandaskan nilai-nilai Aswaja.
                            </p>
                        </div>

                        <div className="bg-slate-950 rounded-2xl p-8 shadow-lg border border-white/10">
                            <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10">
                                <CheckCircle size={32} className="text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Misi</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5 border border-cyan-500/20">1</span>
                                    <span className="text-slate-400">Menyelenggarakan kegiatan akademik dan non-akademik yang berkualitas</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5 border border-cyan-500/20">2</span>
                                    <span className="text-slate-400">Membangun jejaring kerjasama dengan berbagai pihak</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5 border border-cyan-500/20">3</span>
                                    <span className="text-slate-400">Meningkatkan soft skill dan hard skill anggota</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Philosophy */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                                    <Sparkles className="text-cyan-400" size={24} />
                                </div>
                                <span className="text-cyan-400 font-semibold">Filosofi Logo</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Makna Logo Kami</h2>
                            <div className="space-y-4">
                                <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                    <h4 className="font-semibold text-white mb-1">Warna Biru</h4>
                                    <p className="text-slate-400 text-sm">Melambangkan profesionalisme, kepercayaan, dan teknologi.</p>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                    <h4 className="font-semibold text-white mb-1">Bentuk Modern</h4>
                                    <p className="text-slate-400 text-sm">Mencerminkan bidang informatika dan teknologi.</p>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                    <h4 className="font-semibold text-white mb-1">Elemen Tradisional</h4>
                                    <p className="text-slate-400 text-sm">Menjaga nilai-nilai Aswaja dalam modernitas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl flex items-center justify-center shadow-2xl border border-white/10 backdrop-blur-sm">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/logohima.png"
                                    alt="Logo HIMATIKA"
                                    className="w-48 h-48 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-slate-900/50 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-semibold px-4 py-2 rounded-full mb-4">Nilai-Nilai</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Nilai yang Kami Junjung</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value) => (
                            <div key={value.title} className="group bg-slate-800 rounded-2xl p-6 text-center hover:bg-slate-700 transition-colors shadow-lg border border-white/5">
                                <div className="w-16 h-16 bg-white/5 group-hover:bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors border border-white/10">
                                    <value.icon size={28} className="text-blue-400 group-hover:text-blue-300" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-slate-400 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
