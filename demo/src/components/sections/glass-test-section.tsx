'use client'

import { Section } from '@/components/elements/section'
import { Wallpaper } from '@/components/elements/wallpaper'
import { GlassPillCard } from '@/components/ui/ai-glass'

export function GlassTestSection() {
  return (
    <Section id="glass-test" eyebrow="Glass Demo" headline="Testing Glass Effects">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Green wallpaper */}
        <Wallpaper color="green" className="rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
          <GlassPillCard padding="32px" borderRadius="1.5rem">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-olive-950">Green Background</h3>
              <p className="text-sm text-olive-700 mt-2">Glass effect with hue tinting</p>
            </div>
          </GlassPillCard>
        </Wallpaper>

        {/* Blue wallpaper */}
        <Wallpaper color="blue" className="rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
          <GlassPillCard padding="32px" borderRadius="1.5rem">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-olive-950">Blue Background</h3>
              <p className="text-sm text-olive-700 mt-2">Glass effect with hue tinting</p>
            </div>
          </GlassPillCard>
        </Wallpaper>

        {/* Purple wallpaper */}
        <Wallpaper color="purple" className="rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
          <GlassPillCard padding="32px" borderRadius="1.5rem">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-olive-950">Purple Background</h3>
              <p className="text-sm text-olive-700 mt-2">Glass effect with hue tinting</p>
            </div>
          </GlassPillCard>
        </Wallpaper>

        {/* Brown wallpaper */}
        <Wallpaper color="brown" className="rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
          <GlassPillCard padding="32px" borderRadius="1.5rem">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-olive-950">Brown Background</h3>
              <p className="text-sm text-olive-700 mt-2">Glass effect with hue tinting</p>
            </div>
          </GlassPillCard>
        </Wallpaper>
      </div>
    </Section>
  )
}
