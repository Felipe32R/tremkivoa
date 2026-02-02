<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section
    id="historia"
    class="relative bg-white-off py-16 sm:py-24 md:py-32 overflow-hidden min-h-150 sm:min-h-175 md:min-h-200"
  >
    <!-- Radar decoration - right side -->
    <img
      src="~/assets/svgs/plane_radar.svg"
      alt=""
      class="absolute top-1/2 -right-10 sm:-right-16 md:right-10 -translate-y-1/2 w-80 sm:w-100 md:w-125 lg:w-150 pointer-events-none z-0"
    />

    <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      <!-- Title -->
      <h2
        class="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-dark mb-12 sm:mb-16 md:mb-10 text-center"
      >
        {{ t("about.title") }}
      </h2>

      <!-- Cloud-like text containers - flex wrap layout -->
      <div class="flex flex-wrap justify-center gap-6 mt-30">
        <!-- First cloud -->
        <div
          class="flex-1 min-w-72 max-w-96 flex justify-center items-center bg-white/70 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-md border border-white/50 text-center"
        >
          <p class="text-blue-dark text-sm sm:text-base leading-relaxed">
            <i18n-t keypath="about.text1" tag="span">
              <template #highlight>
                <span class="text-red-tkv font-semibold">{{ t("about.highlight1") }}</span>
              </template>
            </i18n-t>
          </p>
        </div>

        <!-- Second cloud -->
        <div
          class="flex-1 min-w-72 max-w-96 flex justify-center items-center bg-white/70 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-md border border-white/50 text-center"
        >
          <p class="text-blue-dark text-sm sm:text-base leading-relaxed">
            {{ t("about.text2") }}
          </p>
        </div>

        <!-- Third cloud -->
        <div
          class="flex-1 min-w-72 max-w-96 flex justify-center items-center bg-white/70 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-md border border-white/50 text-center"
        >
          <p class="text-blue-dark text-sm sm:text-base leading-relaxed">
            <i18n-t keypath="about.text3" tag="span">
              <template #highlight>
                <span class="text-red-tkv font-semibold">{{ t("about.highlight3") }}</span>
              </template>
            </i18n-t>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
