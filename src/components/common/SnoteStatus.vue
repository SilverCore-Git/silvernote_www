<template>
  <Transition name="fade-scale">
    <div
      v-if="!loading"
      class="z-50 bg-white/30 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 w-full max-w-md shadow-md"
    >
      <h3 class="text-lg font-bold mb-4">
        Statut de Silvernote
      </h3>

      <div class="flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <span>API</span>
          <span
            :class="snoteStatus.api_online
              ? 'text-green-600 font-semibold'
              : 'text-red-600 font-semibold'"
          >
            {{ snoteStatus.api_online ? 'En ligne' : 'Hors ligne' }}
          </span>
        </div>

        <div class="flex items-center justify-between">
          <span>Application</span>
          <span
            :class="snoteStatus.app_online
              ? 'text-green-600 font-semibold'
              : 'text-red-600 font-semibold'"
          >
            {{ snoteStatus.app_online ? 'En ligne' : 'Hors ligne' }}
          </span>
        </div>

        <div class="flex items-center justify-between">
          <span>Mode maintenance</span>
          <span
            :class="!snoteStatus.maintenance_mode
              ? 'text-green-600 font-semibold'
              : 'text-red-600 font-semibold'"
          >
            {{ !snoteStatus.maintenance_mode ? 'Désactivé' : 'Activé' }}
          </span>
        </div>
      </div>

      <div class="mt-4 text-gray-500 flex flex-col gap-1 text-sm">
        <span>Version actuelle : {{ snoteStatus.version }}</span>
        <span>Dernière mise à jour : {{ formattedDate }}</span>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">

import { useStatus } from '@/composables/useStatus'

const {
  snoteStatus,
  loading,
  formattedDate
} = useStatus();

</script>
