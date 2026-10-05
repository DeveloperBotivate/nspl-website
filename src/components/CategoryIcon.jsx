import { SprayCan, Droplets, Flower2, FlaskConical, Palette, PaintBucket, Cog, Layers, Fuel, Box } from 'lucide-react'

const icons = { SprayCan, Droplets, Flower2, FlaskConical, Palette, PaintBucket, Cog, Layers, Fuel }

export default function CategoryIcon({ name, className = 'h-6 w-6' }) {
  const Icon = icons[name] || Box
  return <Icon className={className} strokeWidth={1.8} />
}
