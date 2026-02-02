<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const projectId = route.params.id;

// Project data (in a real app, this would come from an API or database)
const projects: Record<
  string,
  { name: string; year: string; description: string }
> = {
  "1": {
    name: "Project1",
    year: "2024",
    description:
      "Descricao detalhada do projeto 1. Este projeto foi desenvolvido em 2024 com foco em inovacao e performance no aerodesign.",
  },
  "2": {
    name: "Project2",
    year: "2023",
    description:
      "Descricao detalhada do projeto 2. Este projeto foi desenvolvido em 2023 com melhorias significativas na aerodinamica.",
  },
  "3": {
    name: "Project3",
    year: "2022",
    description:
      "Descricao detalhada do projeto 3. Este projeto foi desenvolvido em 2022 com novas tecnicas de construcao.",
  },
  "4": {
    name: "Project4",
    year: "2021",
    description:
      "Descricao detalhada do projeto 4. Este projeto foi desenvolvido em 2021 marcando uma nova era para a equipe.",
  },
  "5": {
    name: "Project5",
    year: "2020",
    description:
      "Descricao detalhada do projeto 5. Este projeto foi desenvolvido em 2020 como um dos primeiros grandes projetos da equipe.",
  },
};

const project = computed(() => projects[projectId as string] || null);

useHead({
  title: project.value
    ? `${project.value.name} - TKVm`
    : "Projeto - TKVm",
});

function goBack() {
  router.push("/#projetos");
}
</script>

<template>
  <div class="min-h-screen bg-blue-dark">
    <!-- Header -->
    <header class="bg-blue-dark py-4 px-6">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <NuxtLink to="/">
          <img src="~/assets/svgs/logo.svg" alt="TKVm Logo" class="h-10" />
        </NuxtLink>
      </div>
    </header>

    <!-- Content -->
    <main class="py-12 px-6">
      <div class="max-w-4xl mx-auto">
        <!-- Back Button -->
        <button
          @click="goBack"
          class="flex items-center gap-2 text-white-off/80 hover:text-white-off transition-colors mb-8 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Voltar</span>
        </button>

        <div v-if="project">
          <!-- Project Image Placeholder -->
          <div
            class="aspect-video rounded-xl overflow-hidden mb-8"
            style="
              background: linear-gradient(
                to bottom right,
                #3d0a1a 0%,
                #00003e 100%
              );
            "
          ></div>

          <!-- Project Info -->
          <div class="text-white-off">
            <div class="flex items-center gap-4 mb-4">
              <h1 class="text-3xl md:text-5xl font-bold">{{ project.name }}</h1>
              <span
                class="text-red-tkv text-lg font-semibold bg-red-tkv/20 px-3 py-1 rounded-full"
              >
                {{ project.year }}
              </span>
            </div>

            <p class="text-white-off/80 text-lg leading-relaxed mb-8">
              {{ project.description }}
            </p>

            <!-- Additional sections placeholder -->
            <div class="grid md:grid-cols-2 gap-8 mt-12">
              <div class="bg-white-off/5 rounded-xl p-6">
                <h3 class="text-xl font-bold mb-4">Especificacoes Tecnicas</h3>
                <ul class="space-y-2 text-white-off/70">
                  <li>Envergadura: --</li>
                  <li>Peso: --</li>
                  <li>Motor: --</li>
                  <li>Carga util: --</li>
                </ul>
              </div>

              <div class="bg-white-off/5 rounded-xl p-6">
                <h3 class="text-xl font-bold mb-4">Resultados</h3>
                <ul class="space-y-2 text-white-off/70">
                  <li>Competicao: SAE Aerodesign</li>
                  <li>Colocacao: --</li>
                  <li>Categoria: Micro</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Project not found -->
        <div v-else class="text-center text-white-off py-20">
          <h1 class="text-3xl font-bold mb-4">Projeto nao encontrado</h1>
          <p class="text-white-off/70 mb-8">
            O projeto que voce esta procurando nao existe.
          </p>
          <NuxtLink
            to="/#projetos"
            class="inline-block bg-red-tkv text-white-off px-6 py-3 rounded-lg font-semibold hover:bg-red-tkv/90 transition-colors"
          >
            Ver todos os projetos
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>
