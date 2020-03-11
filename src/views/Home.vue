<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <ex-assets-table v-if="!isLoading" :assets="assets"></ex-assets-table>
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
      assets: [],
      isLoading: false
    }
  },

  created() {
    this.isLoading = true
    api
      .getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false))
  }
}
</script>
