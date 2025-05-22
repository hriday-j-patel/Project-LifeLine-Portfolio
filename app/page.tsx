"use client";

import Link from "next/link";
import { HardHat, ChevronRight } from "lucide-react";
import Image from "next/image";
import { StaggeredFadeIn } from "@/components/staggered-fadein";

function HeroContent() {
  return (
    <StaggeredFadeIn className="space-y-6">
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-black text-yellow-400 text-sm font-bold">
        <HardHat className="mr-2 h-4 w-4" />
        <span>CTE ADVANCED STUDIES</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
        LIFELINE SYNC
      </h1>

      <p className="text-xl md:text-2xl font-bold text-white">
        Maximize safety with a biometric wearable that works as hard as you do.
      </p>

      <div className="pt-4">
        <Link
          href="/problem"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors"
        >
          Learn More
          <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </StaggeredFadeIn>
  );
}

function HeroImage() {
  return (
    <StaggeredFadeIn className="bg-white p-4 rounded-lg shadow-lg border-4 border-yellow-600 relative">
      <div className="absolute -top-3 -left-3 bg-yellow-600 text-black px-4 py-1 font-bold text-sm">
        PROTOTYPE
      </div>
      <div className="aspect-square relative">
        <Image 
          src="/images/prototype-main.webp" 
          alt="Project LifeLine Prototype"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </StaggeredFadeIn>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-yellow-500 py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <HeroContent />
            <HeroImage />
          </div>

          <div className="mt-16 border-t border-white/30 pt-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider">Team Members</h3>
                <p className="mt-1">Hriday Patel</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider">Date</h3>
                <p className="mt-1">{new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider">Class</h3>
                <p className="mt-1">CTE Advanced Studies</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider">Project</h3>
                <p className="mt-1">Senior Engineering Project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="border-l-4 border-yellow-500 pl-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Project Overview</h2>
            <p className="mt-4 text-lg text-gray-600">
              Lifeline Sync+ is a biometric wearable device designed to enhance safety in construction environments.
              Our innovative solution monitors vital signs and environmental conditions to prevent accidents and save
              lives.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg border-t-4 border-yellow-500">
              <h3 className="text-xl font-bold text-gray-900">The Problem</h3>
              <p className="mt-2 text-gray-600">
                Construction sites remain one of the most dangerous workplaces with high rates of injuries and
                fatalities.
              </p>
              <Link href="/problem" className="mt-4 inline-flex items-center text-yellow-600 font-medium">
                Learn more
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg border-t-4 border-yellow-500">
              <h3 className="text-xl font-bold text-gray-900">The Solution</h3>
              <p className="mt-2 text-gray-600">
                A rugged biometric wearable that monitors worker health and environmental hazards in real-time.
              </p>
              <Link href="/solution" className="mt-4 inline-flex items-center text-yellow-600 font-medium">
                Learn more
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg border-t-4 border-yellow-500">
              <h3 className="text-xl font-bold text-gray-900">Build & Test</h3>
              <p className="mt-2 text-gray-600">
                Our rigorous engineering and testing process ensures reliability in harsh construction environments.
              </p>
              <Link href="/build-test" className="mt-4 inline-flex items-center text-yellow-600 font-medium">
                Learn more
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
