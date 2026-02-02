<script setup lang="ts">
type WaveType = 'blue' | 'blue2' | 'white1' | 'white2' | 'white-up1'

const props = defineProps<{
  type: WaveType
  flip?: boolean
}>()

const waveSrc = computed(() => {
  const waveMap: Record<WaveType, string> = {
    'blue': '/assets/svgs/wave_blue.svg',
    'blue2': '/assets/svgs/wave_blue2.svg',
    'white1': '/assets/svgs/wave_white1.svg',
    'white2': '/assets/svgs/wave_white2.svg',
    'white-up1': '/assets/svgs/wave_white_up1.svg',
  }
  return waveMap[props.type]
})
</script>

<template>
  <div class="w-full overflow-hidden leading-none" :class="{ 'rotate-180': flip }">
    <img
      :src="waveSrc"
      alt=""
      class="w-full h-auto block"
      style="margin-bottom: -1px;"
    />
  </div>
</template>
