import { Hop, Leaf, Droplets } from "lucide-react";

const icons = [Hop, Leaf, Droplets];

interface BeerCardProps {
  title: string;
  description: string;
  abv: string;
  tags: string[];
  index: number;
}

export function BeerCard({ title, description, abv, tags, index }: BeerCardProps) {
  const Icon = icons[index % icons.length];
  return (
    <div className="card-sheen relative flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-surface/80 p-6 shadow-soft">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-display text-xl text-white">{title}</h3>
        <div className="rounded-full bg-white/5 p-2 text-accent">
          <Icon size={20} />
        </div>
      </div>
      <p className="text-sm text-gray-300">{description}</p>
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-200">
        <span className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 font-semibold text-accent">{abv}</span>
        {tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wide">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
