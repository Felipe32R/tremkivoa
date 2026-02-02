<script setup lang="ts">
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

const { t } = useI18n();

interface Project {
  id: number;
  name: string;
  year: string;
  description?: string;
}

const carouselConfig = {
  itemsToShow: 1.2,
  snapAlign: "start" as const,
  wrapAround: true,
  breakpoints: {
    640: {
      itemsToShow: 1.8,
    },
    768: {
      itemsToShow: 2.5,
    },
    1024: {
      itemsToShow: 3,
    },
  },
};

const projects: Project[] = [
  { id: 1, name: "Project1", year: "2024" },
  { id: 2, name: "Project2", year: "2023" },
  { id: 3, name: "Project3", year: "2022" },
  { id: 4, name: "Project4", year: "2021" },
  { id: 5, name: "Project5", year: "2020" },
];

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
    <h2
      class="text-3xl md:text-5xl font-bold text-blue-dark text-center mb-12 md:mb-16"
    >
      {{ t("projects.title") }}
    </h2>

    <!-- Carousel -->
    <div class="relative px-16 md:px-32 lg:px-64">
      <Carousel v-bind="carouselConfig">
        <Slide v-for="project in projects" :key="project.id">
          <div
            class="carousel__item px-2 md:px-4 w-full cursor-pointer group"
            @click="openProjectModal(project)"
          >
            <div
              class="aspect-4/3 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]"
              style="
                background: linear-gradient(
                  to bottom right,
                  #3d0a1a 0%,
                  #00003e 100%
                );
              "
            ></div>
            <p
              class="text-gray-500 text-sm mt-2 text-left group-hover:text-blue-dark transition-colors"
            >
              {{ project.name }}
            </p>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>

    <!-- Project Modal -->
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
