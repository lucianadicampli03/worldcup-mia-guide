"use client";

import { useState } from "react";
import ExploreCard from "@/components/ExploreCard";
import ExploreModal from "@/components/ExploreModal";
import ScrollReveal from "@/components/ScrollReveal";
import type { ExplorePlace } from "@/types/explore";

type ExploreSectionClientProps = {
  places: ExplorePlace[];
};

export default function ExploreSectionClient({
  places,
}: ExploreSectionClientProps) {
  const [selectedPlace, setSelectedPlace] = useState<ExplorePlace | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {places.map((place, index) => (
          <ScrollReveal key={place.id} variant="fade-up" delay={index * 80}>
            <ExploreCard
              place={place}
              onExploreOptions={() => setSelectedPlace(place)}
            />
          </ScrollReveal>
        ))}
      </div>

      <ExploreModal
        place={selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    </>
  );
}
