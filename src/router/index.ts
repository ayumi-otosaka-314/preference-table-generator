import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// 路由name定位
export const enum ROUTE_NAME_DEFINE {
  // 首页
  home = 'home',
  // 模板
  template = 'template',
  // 游戏生涯个人喜好表
  careerPersonalPreference = 'career-personal-preference',
  railVehiclePreference = 'rail-vehicle-preference',
}

export const router = createRouter({
  history: createWebHashHistory('game-image-generator'),
  routes: [
    {
      path: '/',
      name: ROUTE_NAME_DEFINE.home,
      component: () => import('@/views/home/index.vue'),
      redirect: { name: ROUTE_NAME_DEFINE.template },
      children: [
        {
          path: 'template',
          name: ROUTE_NAME_DEFINE.template,
          component: () => import('@/views/home/template/index.vue'),
        },
        {
          path: 'template-cpp',
          name: ROUTE_NAME_DEFINE.careerPersonalPreference,
          component: () => import('@/views/home/template/CareerPersonalPreference.vue'),
        },
        {
          path: 'template-rvp',
          name: ROUTE_NAME_DEFINE.railVehiclePreference,
          component: () => import('@/views/home/template/RailVehiclePreference.vue'),
        },
      ],
    },
  ],
  // scrollBehavior
});

/**
 * 安装vue路由
 * @param app
 * @returns {Promise<void>}
 */
export async function setupRouter(app: App) {
  app.use(router);
  await router.isReady();
}
