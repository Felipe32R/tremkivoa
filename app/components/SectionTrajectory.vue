<script setup lang="ts">
import { ref, onMounted } from "vue";

const { t } = useI18n();

const timelineYears = ["2010", "2012", "2015", "2018", "2023"];

const timelineItems = ref<HTMLElement[]>([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  timelineItems.value.forEach((item) => {
    if (item) observer.observe(item);
  });
});
</script>

<template>
  <section
    id="trajetoria"
    class="relative bg-blue-dark py-16 sm:py-24 md:py-32 overflow-hidden"
  >
    <!-- Trophy decoration - right side -->
    <img
      src="~/assets/svgs/trophy.svg"
      alt=""
      class="absolute top-32 right-0 sm:right-10 md:right-20 w-40 sm:w-56 md:w-72 lg:w-80 pointer-events-none z-0"
    />

    <!-- Plane decoration - left side -->
    <img
      src="~/assets/svgs/plane_red.svg"
      alt=""
      class="absolute bottom-40 -left-10 sm:left-0 md:left-10 w-48 sm:w-64 md:w-80 lg:w-96 pointer-events-none z-0"
    />

    <div class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
      <!-- Title -->
      <h2
        class="text-2xl sm:text-3xl md:text-4xl font-bold text-white-off text-center mb-4 sm:mb-6"
      >
        {{ t("trajectory.title") }}
      </h2>

      <!-- Subtitle -->
      <p
        class="text-white-off/70 text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-20 leading-relaxed"
      >
        {{ t("trajectory.subtitle") }}
      </p>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div
          class="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-red-tkv via-red-tkv to-red-tkv/30"
        ></div>

        <!-- Timeline items -->
        <div class="space-y-8 sm:space-y-12 md:space-y-16">
          <div
            v-for="(year, index) in timelineYears"
            :key="year"
            :ref="
              (el) => {
                if (el) timelineItems[index] = el as HTMLElement;
              }
            "
            class="timeline-item relative flex items-center"
            :class="index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'"
          >
            <!-- Dot with glow -->
            <div class="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20">
              <div
                class="w-4 h-4 sm:w-5 sm:h-5 bg-red-tkv rounded-full border-2 border-blue-dark shadow-lg shadow-red-tkv/50"
              ></div>
              <div
                class="absolute inset-0 w-4 h-4 sm:w-5 sm:h-5 bg-red-tkv rounded-full animate-ping opacity-70"
              ></div>
            </div>

            <!-- Card -->
            <div
              class="ml-12 sm:ml-0 sm:w-5/12 bg-blue-light/20 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 border border-blue-border/50"
              :class="
                index % 2 === 0 ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'
              "
            >
              <span
                class="text-red-tkv font-bold text-lg sm:text-xl md:text-2xl"
                >{{ year }}</span
              >
              <h3
                class="text-white-off font-bold text-base sm:text-lg md:text-xl mt-1 mb-2"
              >
                {{ t(`trajectory.timeline.${year}.title`) }}
              </h3>
              <p class="text-white-off/70 text-sm sm:text-base leading-relaxed">
                {{ t(`trajectory.timeline.${year}.description`) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stars row -->
      <div
        class="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-16 sm:mt-20 md:mt-24"
      >
        <img
          v-for="i in 6"
          :key="i"
          src="~/assets/svgs/star.svg"
          alt=""
          class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-item {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}

.timeline-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.timeline-item:nth-child(odd) {
  transition-delay: 0.1s;
}

.timeline-item:nth-child(even) {
  transition-delay: 0.2s;
}

/* Card hover effect */
.timeline-item .bg-blue-dark\/80:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 40px rgba(186, 14, 10, 0.15);
}
</style>
