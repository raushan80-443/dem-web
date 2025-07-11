'use client';

import { useState } from 'react';
import { Mail, Fish, Waves, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Thanks for joining! We\'ll notify you when we launch.');
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-40 w-48 h-48 bg-teal-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-60 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Floating bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-300/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand section */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-4 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl shadow-xl">
                <Fish className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                Written Plecos
              </h1>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-cyan-300/80">
              <Waves className="w-5 h-5" />
              <span className="text-lg font-medium">Something amazing is swimming your way</span>
              <Waves className="w-5 h-5" />
            </div>
          </div>

          {/* Coming Soon section */}
          <div className="mb-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium">Coming Soon</span>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We're crafting something extraordinary for aquatic enthusiasts and storytellers alike. 
              Dive into a world where creativity meets the depths of imagination.
            </p>
          </div>

          {/* Email signup */}
          <div className="mb-12">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-medium px-8 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? 'Joining...' : 'Join the School'}
                </Button>
              </div>
            </form>
            <p className="text-sm text-slate-400 mt-3">
              Be the first to know when we launch. No spam, just the good stuff.
            </p>
          </div>

          {/* Features preview */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Fish, title: 'Aquatic Stories', desc: 'Immersive underwater narratives' },
              { icon: Waves, title: 'Creative Tools', desc: 'Professional writing instruments' },
              { icon: Sparkles, title: 'Community', desc: 'Connect with fellow creators' },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group"
              >
                <feature.icon className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <p className="text-slate-500 text-sm">
          © 2025 Written Plecos. All rights reserved.
        </p>
      </div>
    </div>
  );
}