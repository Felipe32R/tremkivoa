<script setup lang="ts">
import AirplaneScene from "./AirplaneScene.vue";

const { t } = useI18n();
</script>

<template>
  <section
    id="inicio"
    class="relative h-210 md:h-210 lg:h-screen flex items-center justify-center overflow-hidden"
    style="
      background: linear-gradient(
        to top right,
        #00003e 0%,
        #00003e 40%,
        #3d0a1a 80%,
        #6b1020 100%
      );
    "
  >
    <!-- Paper plane trace decoration -->
    <img
      src="~/assets/svgs/plane_traces_white1.svg"
      alt=""
      class="absolute bottom-10 sm:bottom-16 md:bottom-20 left-0 w-48 sm:w-64 md:w-80 lg:w-96 opacity-80 pointer-events-none"
    />

    <!-- Content -->
    <div class="flex flex-col gap-40 z-10 text-center px-6 max-w-4xl mx-auto">
      <h1
        class="text-2xl md:text-3xl lg:text-3xl font-bold text-white-off lg:-mt-20"
      >
        <p>TREM KI VOA</p>
        <span class="text-red-tkv font-sans italic">micro</span>
      </h1>

      <AirplaneScene />

      <p
        class="text-white-off/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
      >
        {{ t("hero.description") }}
      </p>
    </div>

    <!-- Wave separator at bottom -->
  </section>
</template>
