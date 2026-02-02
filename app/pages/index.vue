<script setup lang="ts">
import SectionTrajectory from "~/components/SectionTrajectory.vue";

useHead({
  title: "TKVm - Trem Ki Voa Micro",
  meta: [
    {
      name: "description",
      content:
        "Equipe de Aerodesign da universidade focada em micro aerodesign.",
    },
  ],
});
</script>

<template>
  <div>
    <!-- Header -->
    <TheHeader />

    <!-- Hero Section -->
    <SectionHero />
    <div class="bg-white-off">
      <img
        src="~/assets/svgs/wave_blue.svg"
        alt=""
        class="w-full h-auto block"
      />
    </div>
    <!-- Historia Section (white background) -->
    <SectionHistoria />
    <div class="bg-blue-dark">
      <img
        src="~/assets/svgs/wave_white1.svg"
        alt=""
        class="w-full h-auto block"
      />
    </div>
    <!-- Wave: white to blue -->

    <!-- Trajetoria Section (blue background) -->
    <SectionTrajectory />
    <div class="bg-white-off">
      <img
        src="~/assets/svgs/wave_blue.svg"
        alt=""
        class="w-full h-auto block"
      />
    </div>

    <!-- Projetos Section (white background) -->
    <SectionProjetos />
    <div class="bg-blue-dark">
      <img
        src="~/assets/svgs/wave_white2.svg"
        alt=""
        class="w-full h-auto block"
      />
    </div>

    <!-- Equipe Section (blue/gradient background) -->
    <SectionEquipe />
    <div class="bg-white-off">
      <img
        src="~/assets/svgs/wave_blue2.svg"
        alt=""
        class="w-full h-auto block"
      />
    </div>

    <!-- Contato Section (white background) + Footer -->
    <SectionContato />
  </div>
</template>
