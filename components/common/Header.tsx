"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {  Sparkles, Menu, X, Bike, ArrowRight } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  scrollY: number
}

const titles = [
  {
    name: "Học lý thuyết",
    href: "/theory",
  },
  {
    name: "Thi thử",
    href: "/trial",
  },
  {
    name: "Câu hỏi thường gặp",
    href: "/question",
  }
]

export function Header({ scrollY }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-16 py-1 ${
        scrollY > 50 ? "bg-slate-900/95 backdrop-blur-xl shadow-[#1e2d3a6d] border-slate-700/50 shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Bike className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                DriveTheory
              </h1>
              <p className="text-xs text-slate-400 font-medium">Học đúng câu • Thi đúng đề</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {titles.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-white transition-all duration-300 relative group font-medium"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="group cursor-pointer bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Bắt đầu ngay
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50">
            <nav className="flex flex-col space-y-4">
              {titles.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors py-2 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              {/* <Button variant="ghost" className="justify-start text-slate-300 hover:text-white">
                Đăng nhập
              </Button> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
