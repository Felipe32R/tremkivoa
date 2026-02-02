<script setup lang="ts">
const { t } = useI18n();

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  { id: 1, name: "Nome", role: "CARGO" },
  { id: 2, name: "Nome", role: "CARGO" },
  { id: 3, name: "Nome", role: "CARGO" },
  { id: 4, name: "Nome", role: "CARGO" },
  { id: 5, name: "Nome", role: "CARGO" },
  { id: 6, name: "Nome", role: "CARGO" },
  { id: 7, name: "Nome", role: "CARGO" },
  { id: 8, name: "Nome", role: "CARGO" },
  { id: 9, name: "Nome", role: "CARGO" },
];
</script>

<template>
  <section
    id="equipe"
    class="relative py-16 md:py-24"
    style="
      background:
        radial-gradient(
          circle at center,
          rgba(255, 0, 0, 0.45) 0%,
          rgba(255, 0, 0, 0.25) 6%,
          rgba(255, 0, 0, 0.1) 32%,
          rgba(255, 0, 0, 0) 65%
        ),
        #00003e;
    "
  >
    <div class="max-w-6xl mx-auto px-6">
      <!-- Title -->
      <h2 class="text-3xl md:text-5xl font-bold text-white text-center mb-4">
        {{ t("team.title") }}
      </h2>

      <!-- Subtitle -->
      <p class="text-white-off/80 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
        {{ t("team.subtitle") }}
      </p>

      <!-- First row - 5 members -->
      <div class="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 md:mb-12">
        <div
          v-for="member in teamMembers.slice(0, 5)"
          :key="member.id"
          class="flex flex-col items-center"
        >
          <p class="text-white font-semibold text-lg mb-1">{{ member.name }}</p>
          <p class="text-red-tkv text-sm font-medium mb-3">{{ member.role }}</p>
          <div
            class="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-dark/50 border-2 border-white/20"
          ></div>
        </div>
      </div>

      <!-- Second row - 4 members (centered) -->
      <div class="flex flex-wrap justify-center gap-6 md:gap-8">
        <div
          v-for="member in teamMembers.slice(5, 9)"
          :key="member.id"
          class="flex flex-col items-center"
        >
          <p class="text-white font-semibold text-lg mb-1">{{ member.name }}</p>
          <p class="text-red-tkv text-sm font-medium mb-3">{{ member.role }}</p>
          <div
            class="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-dark/50 border-2 border-white/20"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
