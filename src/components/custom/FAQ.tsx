"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Clock, MessageSquareText, Zap } from "lucide-react";

export default function FAQ() {
  return (
    <section className="min-h-screen  px-6 py-20 flex items-center justify-center">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Benefits */}
        <Card className="bg-[#161020] border border-white/10 rounded-3xl shadow-2xl">
          <CardContent className="p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Zap className="text-green-400" />
              <h2 className="text-white text-3xl font-bold">The Future of Support</h2>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Elevate your customer experience with our cutting-edge AI Assistant.
              Fast, reliable, and always ready.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Zap className="text-green-400 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-lg">Instant Answers</h3>
                  <p className="text-sm text-gray-400">
                    Get accurate responses without the wait time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Bot className="text-purple-400 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-lg">AI-Powered Brain</h3>
                  <p className="text-sm text-gray-400">
                    Our assistant understands intent and delivers intelligent replies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-lg">Always Online</h3>
                  <p className="text-sm text-gray-400">
                    24/7 availability to help customers anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right: Chat Prompt */}
        <Card className="bg-[#161020] border border-white/10 rounded-3xl shadow-2xl">
          <CardContent className="p-8 space-y-6">
            <div className="flex items-center gap-3">
              <MessageSquareText className="text-green-400" />
              <h2 className="text-white text-3xl font-bold">Meet Our AI Assistant</h2>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Curious about our services or how we can help? Ask anything below!
            </p>

            <div className="space-y-4 text-sm">
              {[
                "What makes your service different?",
                "Do you offer ongoing support?",
                "How soon can you deliver?",
              ].map((q, i) => (
                <div
                  key={i}
                  className="bg-[#201c33] hover:bg-[#292345] transition text-white px-5 py-3 rounded-xl cursor-pointer border border-transparent hover:border-white/10"
                >
                  {q}
                </div>
              ))}
            </div>

            <Button
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white w-full mt-6 py-5 text-base font-semibold shadow-xl"
              size="lg"
            >
              🚀 Ask Our AI Now
            </Button>

            <div className="text-center text-sm text-pink-400 font-medium mt-4 animate-pulse">
              ✨ Be the next smart client — support that *thinks* for you.
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
