<script setup lang="ts">
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { computed, ref } from "vue";

const { t } = useI18n();
import { projects } from "~/data/projects";

interface Project {
  id: number;
  year: string;
  title: string;
  description: string;
  competition: string;
  placement: string;
  category: string;
  highlights: string[];
}

const carouselConfig = {
  itemsToShow: 1.2,
  snapAlign: "start" as const,
  wrapAround: true,
  breakpoints: {
    640: { itemsToShow: 1.8 },
    768: { itemsToShow: 2.5 },
    1024: { itemsToShow: 3 },
  },
};

const isModalOpen = ref(false);
const selectedProject = ref<Project | null>(null);

function openProjectModal(project: Project) {
  selectedProject.value = project;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
  selectedProject.value = null;
}
</script>

<template>
  <section id="projetos" class="relative bg-white-off py-16 md:py-24">
    <!-- Title -->
    <h2 class="text-3xl md:text-5xl font-bold text-blue-dark text-center mb-4">
      {{ t("projects.title") }}
    </h2>

    <p class="text-center text-blue-dark/70 max-w-2xl mx-auto mb-12">
      {{ t("projects.subtitle") }}
    </p>

    <!-- Carousel -->
    <div class="relative px-16 md:px-32 lg:px-64">
      <Carousel v-bind="carouselConfig">
        <Slide v-for="project in projects" :key="project.id">
          <div
            class="px-4 w-full cursor-pointer group"
            @click="openProjectModal(project)"
          >
            <div
              class="aspect-4/3 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 group-hover:scale-[1.03]"
              style="
                background: linear-gradient(
                  to bottom right,
                  #3d0a1a 0%,
                  #00003e 100%
                );
              "
            >
              <!-- Year -->
              <span class="text-red-tkv font-bold text-xl">
                {{ project.year }}
              </span>

              <!-- Title -->
              <h3 class="text-white font-bold text-lg mt-2">
                {{ project.title }}
              </h3>

              <!-- Description -->
              <p class="text-white/70 text-sm mt-2 line-clamp-3">
                {{ project.description }}
              </p>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>

    <!-- Modal -->
    <ProjectModal
      :project="selectedProject"
      :is-open="isModalOpen"
      @close="closeModal"
    />
  </section>
</template>

<style scoped>
:deep(.carousel__prev),
:deep(.carousel__next) {
  position: absolute;
  bottom: -40px;
  top: auto;
  right: 0;
  left: auto;
  transform: none;
  background-color: transparent;
  border: 2px solid #1a1a5e;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  color: #1a1a5e;
}

:deep(.carousel__prev) {
  right: 50px;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background-color: #1a1a5e;
  color: white;
}

:deep(.carousel__icon) {
  width: 20px;
  height: 20px;
}
</style>
