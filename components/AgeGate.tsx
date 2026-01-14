"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "brewbrava_age_confirmed";

export function AgeGate({
  copy,
}: {
  copy?: { title: string; text: string; confirm: string; decline: string };
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const confirmed = localStorage.getItem(STORAGE_KEY);
    if (!confirmed) setVisible(true);
  }, []);

  if (!visible || !copy) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur">
      <div className="mx-4 max-w-md rounded-2xl border border-white/10 bg-[#0f0f15] p-6 text-center shadow-xl">
        <div className="mb-2 text-3xl font-bold text-white">{copy.title}</div>

        <p className="mb-6 text-base leading-relaxed text-gray-300">{copy.text}</p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => {
              localStorage.setItem(STORAGE_KEY, "true");
              setVisible(false);
            }}
            className="rounded-full bg-white px-6 py-2 font-semibold text-black hover:bg-gray-200"
          >
            {copy.confirm}
          </button>

          <button
            onClick={() => {
              window.location.href = "https://www.google.com";
            }}
            className="text-sm text-gray-400 hover:text-gray-200"
          >
            {copy.decline}
          </button>
        </div>
      </div>
    </div>
  );
}
