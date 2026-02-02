<script setup lang="ts">
import { ref } from "vue";

const { locale, locales, setLocale, t } = useI18n();

const navLinks = computed(() => [
  { label: t("nav.inicio"), href: "#inicio" },
  { label: t("nav.sobre"), href: "#historia" },
  { label: t("nav.trajetoria"), href: "#trajetoria" },
  { label: t("nav.projetos"), href: "#projetos" },
  { label: t("nav.contato"), href: "#contato" },
]);

const isMenuOpen = ref(false);
const isLangDropdownOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function toggleLangDropdown() {
  isLangDropdownOpen.value = !isLangDropdownOpen.value;
}

function selectLocale(code: "pt" | "en") {
  setLocale(code);
  isLangDropdownOpen.value = false;
}

function closeLangDropdown() {
  isLangDropdownOpen.value = false;
}
</script>

<template>
  <header
    class="bg-blue-dark fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-3"
  >
    <nav class="flex items-center justify-between max-w-7xl mx-auto">
      <a href="#inicio" class="flex items-center">
        <img
          src="~/assets/svgs/logo.svg"
          alt="TKVm Logo"
          class="h-10 md:h-12"
        />
      </a>

      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="text-white-off font-medium hover:text-red-tkv transition-colors duration-300"
          >
            {{ link.label }}
          </a>
        </li>

        <!-- Language Dropdown -->
        <li class="relative">
          <button
            class="flex items-center gap-1 text-white-off font-medium hover:text-red-tkv transition-colors duration-300 px-2 py-1 border border-white-off/30 rounded"
            @click="toggleLangDropdown"
            @blur="closeLangDropdown"
          >
            {{ locale.toUpperCase() }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 transition-transform duration-200"
              :class="{ 'rotate-180': isLangDropdownOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <Transition name="dropdown-fade">
            <ul
              v-if="isLangDropdownOpen"
              class="absolute top-full right-0 mt-2 bg-blue-dark border border-white-off/20 rounded shadow-lg overflow-hidden min-w-16"
            >
              <li v-for="loc in locales" :key="loc.code">
                <button
                  class="w-full px-4 py-2 text-left text-white-off hover:bg-white-off/10 hover:text-red-tkv transition-colors duration-200"
                  :class="{ 'text-red-tkv': locale === loc.code }"
                  @mousedown.prevent="selectLocale(loc.code)"
                >
                  {{ loc.name }}
                </button>
              </li>
            </ul>
          </Transition>
        </li>
      </ul>

      <!-- Mobile menu button -->
      <div class="flex items-center gap-4 md:hidden">
        <!-- Mobile Language Dropdown -->
        <div class="relative">
          <button
            class="flex items-center gap-1 text-white-off font-medium hover:text-red-tkv transition-colors duration-300 px-2 py-1 border border-white-off/30 rounded text-sm"
            @click="toggleLangDropdown"
          >
            {{ locale.toUpperCase() }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 transition-transform duration-200"
              :class="{ 'rotate-180': isLangDropdownOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <Transition name="dropdown-fade">
            <ul
              v-if="isLangDropdownOpen"
              class="absolute top-full right-0 mt-2 bg-blue-dark border border-white-off/20 rounded shadow-lg overflow-hidden min-w-16 z-60"
            >
              <li v-for="loc in locales" :key="loc.code">
                <button
                  class="w-full px-4 py-2 text-left text-white-off hover:bg-white-off/10 hover:text-red-tkv transition-colors duration-200"
                  :class="{ 'text-red-tkv': locale === loc.code }"
                  @click="selectLocale(loc.code)"
                >
                  {{ loc.name }}
                </button>
              </li>
            </ul>
          </Transition>
        </div>

        <button class="text-white-off" @click="toggleMenu">
          <!-- Hamburger icon -->
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <!-- Close icon -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu overlay -->
    <Transition name="menu-fade">
      <div
        v-if="isMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-blue-dark border-t border-white-off/10 border-2 border-b-red-tkv"
      >
        <ul class="flex flex-col py-4">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="block px-6 py-3 text-white-off font-medium hover:text-red-tkv hover:bg-white-off/5 transition-colors duration-300"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
