import { provide, shallowRef, type Component } from 'vue'
import { useRouter } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'
import layouts from '@/layouts/layouts'

export const useLayout = () => {
  const layout = shallowRef('div')

  const router = useRouter()

  router.afterEach((to) => {
    const metaLayout = to.meta.layout as keyof Component
    layout.value = layouts[metaLayout] || 'div'
  })

  const changeLayout = (layoutName: keyof Component) => {
    layout.value = layouts[layoutName] || 'div'
  }
  provide('app:layout', layout)
  return {
    layout,
    changeLayout
  }
}
