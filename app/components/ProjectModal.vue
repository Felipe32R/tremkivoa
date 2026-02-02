<script setup lang="ts">
interface Project {
  id: number;
  name: string;
  year: string;
  description?: string;
}

const props = defineProps<{
  project: Project | null;
  isOpen: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

function closeModal() {
  emit("close");
}

function handleBackdropClick(event: MouseEvent) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    closeModal();
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});

watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
);
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen && project"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click="handleBackdropClick"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <!-- Modal Content -->
        <div
          class="relative bg-blue-dark rounded-xl w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl"
        >
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white-off/10 hover:bg-white-off/20 transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-white-off"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Project Image -->
          <div
            class="aspect-16/10 w-full rounded-t-xl"
            style="
              background: linear-gradient(
                to bottom right,
                #3d0a1a 0%,
                #00003e 100%
              );
            "
          ></div>

          <!-- Project Info -->
          <div class="p-4 text-white-off">
            <div class="flex items-center gap-3 mb-3">
              <h2 class="text-xl font-bold">{{ project.name }}</h2>
              <span
                class="text-red-tkv text-xs font-semibold bg-red-tkv/20 px-2 py-0.5 rounded-full"
              >
                {{ project.year }}
              </span>
            </div>

            <p class="text-white-off/80 text-sm leading-relaxed mb-4">
              {{
                project.description ||
                "Descricao detalhada do projeto. Este projeto foi desenvolvido com foco em inovacao e performance no aerodesign."
              }}
            </p>

            <!-- Specifications Grid -->
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-white-off/5 rounded-lg p-3">
                <h3 class="text-sm font-bold mb-2">Especificacoes</h3>
                <ul class="space-y-1 text-white-off/70 text-xs">
                  <li>Envergadura: --</li>
                  <li>Peso: --</li>
                  <li>Motor: --</li>
                </ul>
              </div>

              <div class="bg-white-off/5 rounded-lg p-3">
                <h3 class="text-sm font-bold mb-2">Resultados</h3>
                <ul class="space-y-1 text-white-off/70 text-xs">
                  <li>Competicao: SAE</li>
                  <li>Colocacao: --</li>
                  <li>Categoria: Micro</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95);
  opacity: 0;
}
</style>
