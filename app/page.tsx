'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-teal-100 px-4">
      <div className="flex flex-col items-center gap-6 p-8 rounded-2xl shadow-xl bg-white/80 border border-cyan-100">
        <Image src="/logo.png" alt="Logo" width={96} height={96} className="mb-2" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-700 text-center">Coming Soon</h1>
        <p className="text-lg md:text-xl text-cyan-900 text-center max-w-md">
          We’re working hard to bring you something amazing.<br />Stay tuned for updates!
        </p>
      </div>
      <footer className="mt-12 text-cyan-600 text-sm opacity-70">&copy; {new Date().getFullYear()}  Plecos. All rights reserved.</footer>
    </main>
  );
}