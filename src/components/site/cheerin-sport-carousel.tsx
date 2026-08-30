"use client";

import Image from "next/image";

const sports = [
  ["Running", "photo-1552674605-db6ffd4facb5"],
  ["Running", "photo-1517836357463-d25dfeac3438"],
  ["Basketball", "photo-1546519638-68e109498ffc"],
  ["Volleyball", "photo-1612872087720-bb876e2e67d1"],
  ["Volleyball", "photo-1592656094267-764a45160876"],
  ["Badminton", "photo-1626224583764-f87db24ac4ea"],
  ["Badminton", "photo-1595435934249-5df7ed86e1c0"],
  ["Cycling", "photo-1541625602330-2277a4c46182"],
];

export function CheerinSportCarousel() {
  return (
    <div className="relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden">
      <div className="cheerin-sport-track flex w-max">
        {[0, 1, 2].map((group) => (
          <div key={group} className="flex shrink-0 gap-2 pr-2">
            {sports.map(([name, photo], sportIndex) => (
              <Image
                key={`${group}-${sportIndex}-${photo}`}
                src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=360&h=360&q=80`}
                alt={name}
                width={300}
                height={300}
                className="size-[300px] shrink-0 object-cover brightness-110 saturate-110"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
