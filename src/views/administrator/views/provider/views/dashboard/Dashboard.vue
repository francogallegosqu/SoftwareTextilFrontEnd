<template>
  <section>
    <b-row class="match-height">
      <b-col
        xl="4"
        md="6"
      >

        <t-congratulations :data="data" />
      </b-col>
      <b-col
        xl="8"
        md="6"
      >

        <t-statistics :data="statisticsItems" />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import TCongratulations from '@/views/administrator/commons/TCongratulations.vue'
import TStatistics from '@/views/administrator/commons/TStatistics.vue'

export default {
  components: {
    TCongratulations,
    TStatistics,
  },
  data() {
    return {
      data: {
        name: 'John',
        saleToday: '48900',
      },
      statisticsItems: [
        {
          icon: 'TrendingUpIcon',
          color: 'light-primary',
          title: '230k',
          subtitle: 'Sales',
          customClass: 'mb-2 mb-xl-0',
        },
        {
          icon: 'UserIcon',
          color: 'light-info',
          title: '8.549k',
          subtitle: 'Customers',
          customClass: 'mb-2 mb-xl-0',
        },
        {
          icon: 'BoxIcon',
          color: 'light-danger',
          title: '1.423k',
          subtitle: 'Products',
          customClass: 'mb-2 mb-sm-0',
        },
        {
          icon: 'DollarSignIcon',
          color: 'light-success',
          title: '$9745',
          subtitle: 'Revenue',
          customClass: '',
        },
      ],
    }
  },
}
</script>
