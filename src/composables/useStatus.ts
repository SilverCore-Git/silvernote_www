import { ref, computed, onMounted } from 'vue';
import getVersion from '@/utils/getVersion';

export interface SnoteStatus {
  api_online: boolean
  app_online: boolean
  maintenance_mode: boolean
  version: string
  last_update: string
}


export function useStatus()
{

    const snoteStatus = ref<SnoteStatus>({
        api_online: false,
        app_online: false,
        maintenance_mode: false,
        version: '0.0.0',
        last_update: ''
    })

    const loading = ref<boolean>(true)

    const checkStatus = async (noLoading: boolean = false) => {
        if (!noLoading) {
            loading.value = true
        }

        try {

            // API
            try {
                const res = await fetch('https://api.silvernote.fr/version')
                snoteStatus.value.api_online = res.ok
            } catch {
                snoteStatus.value.api_online = false
            }

            // APP (Cloudflare-safe)
            try {
                await fetch('https://app.silvernote.fr', {
                    method: 'HEAD',
                    mode: 'no-cors'
                })
                snoteStatus.value.app_online = true
            } catch {
                snoteStatus.value.app_online = false
            }

            // Version
            snoteStatus.value.version = (await getVersion) || '0.0.0'

            snoteStatus.value.last_update = new Date().toISOString()

        } catch (e) {
            console.error('Erreur useStatus', e)
        } finally {
            loading.value = false
        }
    }

    const formattedDate = computed(() =>
        snoteStatus.value.last_update
            ? new Date(snoteStatus.value.last_update).toLocaleString('fr-FR')
            : '—'
    )

    onMounted(checkStatus);

    return {
        snoteStatus,
        loading,
        formattedDate,
        refreshStatus: checkStatus
    }

}
