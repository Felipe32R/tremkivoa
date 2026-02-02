<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section
    id="contato"
    class="relative bg-white-off py-16 md:py-24 min-h-[90vh] md:min-h-[60vh]"
  >
    <div class="max-w-6xl mx-auto px-6">
      <!-- Title -->
      <h2
        class="text-3xl md:text-5xl font-bold text-blue-dark text-center mb-12 md:mb-16"
      >
        {{ t("contact.title") }}
      </h2>

      <div class="flex items-center justify-center gap-12">
        <!-- Left: Contact Info (two columns) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <!-- Column 1: Email & Phone Numbers -->
          <div class="space-y-6">
            <!-- Email -->
            <div>
              <p class="text-blue-dark font-bold">
                {{ t("contact.email") }}:
                <span class="font-normal">tremkivoa@gmail.com</span>
              </p>
            </div>

            <!-- Phone Numbers -->
            <div class="space-y-1">
              <p class="text-blue-dark font-bold">
                {{ t("contact.captain") }} (Hugo):
                <span class="font-normal">+55 31 99455-0774</span>
              </p>
              <p class="text-blue-dark font-bold">
                {{ t("contact.captain") }} (Marcelo):
                <span class="font-normal">+55 37 99946-5131</span>
              </p>
              <p class="text-blue-dark font-bold">
                {{ t("contact.administrative") }}:
                <span class="font-normal">+55 32 99946-1182</span>
              </p>
            </div>
          </div>

          <!-- Column 2: Address -->
          <div class="space-y-1">
            <p class="text-blue-dark font-bold">
              Universidade Federal de Sao Joao del-Rei
            </p>
            <p class="text-blue-dark font-bold">
              Campus Santo Antonio - Sala 1.19MD
            </p>
            <p class="text-blue-dark font-bold">
              Praca Frei Orlando, 170, Centro
            </p>
            <p class="text-blue-dark font-bold">
              Sao Joao del-Rei - MG, 36307-352
            </p>
          </div>
        </div>

        <!-- Right: Plane Traces + Social Icons -->
        <div
          class="absolute bottom-10 md:bottom-auto right-0 flex flex-col items-center md:items-end"
        >
          <!-- Plane Traces SVG -->
          <img
            src="~/assets/svgs/plane_traces_black1.svg"
            alt=""
            class="w-64 md:w-80 lg:w-96 opacity-90"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-blue-dark py-10">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#inicio">
          <img src="~/assets/svgs/logo.svg" alt="TKVm Logo" class="h-8" />
        </a>

        <p class="text-white-off/60 text-sm text-center">
          &copy; {{ new Date().getFullYear() }} {{ t("footer.copyright") }}
        </p>

        <div class="flex items-center gap-4">
          <a
            href="https://instagram.com/tremkivoamicro"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white-off/60 hover:text-white-off transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
          <a
            href="https://youtube.com/@TremKiVoaMicro"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white-off/60 hover:text-white-off transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
