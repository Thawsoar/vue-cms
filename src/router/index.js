import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/user',
    component: Layout,
    redirect: '/user/list',
    name: 'User',
    meta: { title: '用户管理', icon: 'user' },
    children: [
      {
        path: 'list',
        name: 'Userlist',
        component: () => import('@/views/user/list'),
        meta: { title: '用户列表', icon: 'list' }
      },
      {
        path: 'create',
        component: () => import('@/views/user/create'),
        name: 'CreateUser',
        meta: { title: '新增用户', icon: 'edit' }
      },
      {
        path: 'edit/:id',
        component: () => import('@/views/user/edit'),
        name: 'EditUser',
        meta: { title: '编辑用户', noCache: true, activeMenu: '/user/edit' },
        hidden: true
      }
    ]
  },
  {
    path: '/sort',
    component: Layout,
    redirect: '/sort/list',
    name: 'Sort',
    meta: { title: '分类管理', icon: 'sort' },
    children: [
      {
        path: 'list',
        name: 'sortList',
        component: () => import('@/views/sort/list'),
        meta: { title: '分类列表', icon: 'list' }
      },
      {
        path: 'create',
        component: () => import('@/views/sort/create'),
        name: 'CreateSort',
        meta: { title: '新增分类', icon: 'edit' }
      },
      {
        path: 'edit/:id',
        component: () => import('@/views/sort/edit'),
        name: 'EditSort',
        meta: { title: '编辑分类', noCache: true, activeMenu: '/sort/edit' },
        hidden: true
      }
    ]
  },
  {
    path: '/label',
    component: Layout,
    redirect: '/label/list',
    name: 'Label',
    meta: { title: '标签管理', icon: 'collection-tag' },
    children: [
      {
        path: 'list',
        name: 'labelList',
        component: () => import('@/views/label/list'),
        meta: { title: '标签列表', icon: 'list' }
      },
      {
        path: 'create',
        component: () => import('@/views/label/create'),
        name: 'CreateLabel',
        meta: { title: '新增标签', icon: 'edit' }
      },
      {
        path: 'edit/:id',
        component: () => import('@/views/label/edit'),
        name: 'EditLabel',
        meta: { title: '编辑标签', noCache: true, activeMenu: '/label/edit' },
        hidden: true
      }
    ]
  },
  {
    path: '/friendlink',
    component: Layout,
    redirect: '/friendlink/list',
    name: 'friendlink',
    meta: { title: '友链管理', icon: 'link' },
    children: [
      {
        path: 'list',
        name: 'friendlinkList',
        component: () => import('@/views/friendlink/list'),
        meta: { title: '友链列表', icon: 'list' }
      },
      {
        path: 'create',
        component: () => import('@/views/friendlink/create'),
        name: 'CreateFriendlink',
        meta: { title: '新增友链', icon: 'edit' }
      },
      {
        path: 'edit/:id',
        component: () => import('@/views/friendlink/edit'),
        name: 'EditFriendlink',
        meta: { title: '编辑标签', noCache: true, activeMenu: '/friendlink/edit' },
        hidden: true
      }
    ]
  },

  {
    path: '/article',
    component: Layout,
    redirect: '/article/list',
    name: 'Article',
    meta: {
      title: '文章管理',
      icon: 'article'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/article/create'),
        name: 'CreateArticle',
        meta: { title: '新增文章', icon: 'edit' }
      },
      {
        path: 'edit/:id',
        component: () => import('@/views/article/edit'),
        name: 'EditArticle',
        meta: { title: '编辑文章', noCache: true, activeMenu: '/article/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/article/list'),
        name: 'ArticleList',
        meta: { title: '文章列表', icon: 'list' }
      }
    ]
  },
  {
    path: '/comment',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Comment',
        component: () => import('@/views/comment/index'),
        meta: { title: '评论管理', icon: 'comment' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
