import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  useRoute,
  useRouter,
} from 'vue-router'
import BlogList from '@/pages/Blog/BlogList.vue'
import BlogPost from '@/pages/Blog/BlogPost.vue'
import NotFound from '@/pages/404/NotFound.vue'
import { ROUTE_NAMES } from '@/enums'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: { name: ROUTE_NAMES.app },
  },
  {
    path: '/',
    name: ROUTE_NAMES.app,
    component: () => import('@/pages/Homepage'),
  },
  {
    path: '/doc',
    name: ROUTE_NAMES.techDoc,
    component: () => import('@/pages/TechDoc'),
  },
  {
    path: '/guide/:deviceType',
    name: ROUTE_NAMES.guide,
    component: () => import('@/pages/Guide'),
  },
  {
    path: '/about',
    name: ROUTE_NAMES.about,
    component: () => import('@/pages/About'),
  },
  { 
    path: '/blog',
    name: 'BlogList',
    component: BlogList
  },
  { 
    path: '/blog/:id',
    name: 'BlogPost',
    component: BlogPost
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) return savedPosition

    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})
export { router, useRoute, useRouter }
