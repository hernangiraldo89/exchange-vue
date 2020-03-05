<template>
  <div>
    <ex-assets-table :assets="assets"></ex-assets-table>
  </div>
</template>

<script>
import api from '@/api'
import ExAssetsTable from '@/components/ExAssetsTable'

export default {
  name: 'Home',
  components: {
    ExAssetsTable
  },

  data() {
    return {
      assets: []
    }
  },

  async created() {
    this.assets = await api.getAssets()
  }
}
</script>
