import React from 'react';
import {
  Moon as Balloon,
  Cake,
  Gift,
  Heart,
  Music,
  PartyPopper,
  Stars,
  Crown,
  Shield,
  Sparkles,
  Star,
  Square,
  Power,
  AlignCenter,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url("/arika-sketch.jpg")',
        }}
      />

      {/* Showering icons */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${
              i % 2 === 0 ? "animate-shower" : "animate-shower-slow"
            }`}
            style={{
              left: `${i * 5 + Math.random() * 5}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          >
            {i % 3 === 0 ? (
              <Heart className="w-6 h-6 text-pink-400" />
            ) : i % 3 === 1 ? (
              <Crown className="w-6 h-6 text-yellow-400" />
            ) : (
              <Square className="w-6 h-6 text-purple-400" />
            )}
          </div>
        ))}
      </div>

      {/* Floating decorations */}
      <div className="absolute inset-0">
        <div className="animate-float absolute top-10 left-1/4">
          <Heart className="w-8 h-8 text-pink-400" />
        </div>
        <div className="animate-float-delayed absolute top-20 right-1/4">
          <Crown className="w-8 h-8 text-yellow-400" />
        </div>
        <div className="animate-float absolute bottom-20 left-1/3">
          <Heart className="w-8 h-8 text-red-400" />
        </div>
        <div className="animate-float-delayed absolute bottom-40 right-1/3">
          <Square className="w-8 h-8 text-purple-400" />
        </div>
        <div className="animate-float absolute top-32 left-1/2">
          <Crown className="w-8 h-8 text-yellow-500" />
        </div>
        <div className="animate-float-delayed absolute bottom-32 right-1/2">
          <Heart className="w-8 h-8 text-pink-500" />
        </div>
        <div className="animate-float absolute top-40 right-1/3">
          <Square className="w-8 h-8 text-yellow-500" />
        </div>
        {/* Additional floating icons */}
        <div className="animate-float absolute top-24 left-1/6">
          <Heart className="w-8 h-8 text-red-400" />
        </div>
        <div className="animate-float-delayed absolute bottom-24 right-1/6">
          <Crown className="w-8 h-8 text-yellow-500" />
        </div>
        <div className="animate-float absolute top-1/2 left-16">
          <Square className="w-8 h-8 text-purple-500" />
        </div>
        <div className="animate-float-delayed absolute bottom-1/2 right-16">
          <Heart className="w-8 h-8 text-pink-400" />
        </div>
        <div className="animate-float absolute top-16 right-16">
          <Crown className="w-8 h-8 text-yellow-400" />
        </div>
      </div>

      {/* Main content */}
      <div className="text-center z-10 bg-white/80 p-4 sm:p-6 md:p-8 rounded-3xl shadow-xl backdrop-blur-sm max-w-2xl mx-2 sm:mx-4 my-4 sm:my-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-pink-500 flex items-center justify-center gap-3">
          <Crown className="w-8 h-8 text-yellow-500" />
          Princess Arika
          <Crown className="w-8 h-8 text-yellow-500" />
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-500">
          Happy 2nd Birthday!
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          <PartyPopper className="w-8 h-8 text-yellow-500 animate-bounce" />
          <Cake className="w-8 h-8 text-pink-500 animate-bounce delay-100" />
          <Gift className="w-8 h-8 text-purple-500 animate-bounce delay-200" />
        </div>

        <p className="text-xl md:text-2xl text-gray-700 mb-6">
          Today is your special day!
          <br />
          Time to celebrate with cake and play!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center mb-8">
          <div className="bg-pink-100 p-4 rounded-xl">
            <p className="font-bold text-pink-600">2 Years</p>
            <p className="text-gray-600">of Smiles</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-xl">
            <p className="font-bold text-purple-600">730 Days</p>
            <p className="text-gray-600">of Joy</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-xl col-span-2 md:col-span-1">
            <p className="font-bold text-yellow-600">∞ Love</p>
            <p className="text-gray-600">& Hugs</p>
          </div>
        </div>

        {/* Mother's Tribute */}
        <div className="mt-6 md:mt-8 bg-gradient-to-r from-pink-50 to-purple-50 p-3 sm:p-4 md:p-6 rounded-2xl border border-pink-200 shadow-inner">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600 mb-3 md:mb-4 flex items-center justify-center gap-2 flex-wrap px-2">
            <Crown className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
            A Special Tribute to Mother of Princess Arika
            <Crown className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
          </h3>
          <Heart className="w-5 h-5 md:w-6 md:h-6 text-red-400 mx-auto mb-2" />
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 md:mb-8 italic px-2">
            Behind every princess is a queen who leads with love, strength, and
            grace. Today, as we celebrate Arika's special day, we also honor her
            incredible mother.
          </p>

          {/* Tribute cards */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <div className="flex items-start gap-3 md:gap-4 text-left p-3 sm:p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-colors">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-purple-600 text-base md:text-lg">
                  Courage
                </h4>
                <p className="text-sm md:text-base text-gray-700">
                  For facing every challenge with remarkable strength and
                  determination, showing Arika what true resilience looks like.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 text-left p-3 sm:p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-colors transform hover:scale-102 duration-300">
              <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-pink-500 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h4 className="font-semibold text-pink-600 text-base sm:text-lg md:text-xl mb-1 sm:mb-2">
                  Unconditional Love
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  For being both mother and father, filling Arika's life with
                  enough love for a lifetime, nurturing her into the beautiful
                  princess she is becoming.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-left p-4 bg-white/50 rounded-xl">
              <Star className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-yellow-600 text-lg center">
                  Inspiration
                </h4>
                <p className="text-gray-700">
                  For showing grace under pressure, demonstrating that true
                  beauty comes from within, and being a daily inspiration to all
                  who know you.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-left p-4 bg-white/50 rounded-xl">
              <Heart className="w-8 h-8 text-red-800 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-pink-600 text-lg text-center">
                  BhanuPriyanka
                </h4>
                <p className="text-gray-700">
                  "To the world you may be one person, but to Arika you are the
                  world. Your love, strength, and dedication are creating a
                  lifetime of beautiful memories." ❀ ❀ ❀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;