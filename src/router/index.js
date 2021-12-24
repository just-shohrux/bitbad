import Vue from "vue";
import Router from "vue-router";
import storage from "../services/local-storage";


Vue.use(Router);

const routes = [

    {
        name: "home",
        path: '/',
        meta: {
            layout: 'main'
        },
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('token')) {
                next();
            } else {
                next('/dashboard');
            }
        },
        component: () => import ('@/modules/home/views/pages/HomePage.vue')
    },

    {
        name: "login-or-signup",
        path: '/login-or-signup',
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('token')) {
                next();
            } else {
                next('/dashboard');
            }
        },
        meta: {
            layout: 'auth'
        },
        component: () => import ('@/modules/auth/views/pages/LoginOrSignUpPage.vue')
    },

    {
        name: "login",
        path: '/login/:phone',
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('token')) {
                next();
            } else {
                next('/dashboard');
            }
        },
        meta: {
            layout: 'auth'
        },
        component: () => import ('@/modules/auth/views/pages/LoginPage.vue')
    },

    {
        name: "register",
        path: '/register/:phone',
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('token')) {
                next();
            } else {
                next('/dashboard');
            }
        },
        meta: {
            layout: 'auth'
        },
        component: () => import ('@/modules/auth/views/pages/RegisterPage.vue')
    },

    {
        name: "confirm",
        path: '/confirm/:phone/:name',
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('token')) {
                next();
            } else {
                next('/dashboard');
            }
        },
        meta: {
            layout: 'auth'
        },
        component: () => import ('@/modules/auth/views/pages/ConfirmPage.vue')
    },

    
    {
        name: "logout",
        path: '/logout',
        component: () => import ('@/modules/auth/views/pages/LogoutPage.vue')
    },
    {
        name: "dashboard",
        path: '/dashboard',
        component: () => import ('@/modules/dashboard/views/pages/DashboardPage.vue')
    },
    {
        name: "products",
        path: '/products',
        component: () => import ('@/modules/dashboard/views/pages/ProductsPage.vue')
    },
    {
        name: "streams",
        path: '/streams',
        component: () => import ('@/modules/dashboard/views/pages/StreamsPage.vue')
    },
    {
        name: "statistics",
        path: '/statistics',
        component: () => import ('@/modules/dashboard/views/pages/StatisticsPage.vue')
    },
    {
        name: "payment",
        path: '/payment',
        component: () => import ('@/modules/dashboard/views/pages/PaymentPage.vue')
    },
    {
        name: "faq",
        path: '/faq',
        component: () => import ('@/modules/dashboard/views/pages/FaqPage.vue')
    },
    {
        name: "profile",
        path: '/profile',
        component: () => import ('@/modules/dashboard/views/pages/ProfilePage.vue')
    },
    {
        name: "profile-change",
        path: '/profile-change',
        component: () => import ('@/modules/dashboard/views/pages/ProfileChangePage.vue')
    },
    {
        name: "profile-confirm-code",
        path: '/profile-change/confirm-code/:name/:phone',
        component: () => import ('@/modules/dashboard/views/pages/ProfileConfirmPage.vue')
    },
    {
        name: "profile-add-card",
        path: '/profile/add-card',
        component: () => import ('@/modules/dashboard/views/pages/ProfileAddCardPage.vue')
    },
    {
        name: "landing-for-client",
        path: '/s/:landing/',
        meta: {
            layout: 'landing'
        },
        component: () => import ('@/modules/landing/views/pages/CorePage.vue')
    },
    
    {
        name: "landing-for-client-with-user",
        path: '/landing/:template/:product',
        meta: {
            layout: 'landing'
        },
        component: () => import ('@/modules/landing/views/pages/CoreAuthPage.vue')
    },

];

const router = new Router({mode: 'history', routes})

router.beforeEach((to, from, next) => {
    if (storage.get('token') ||  to.name == 'login-or-signup' || to.name == 'login'  || to.name == 'register'  || to.name == 'confirm'  || to.name == 'home' || to.name=="landing-for-client" ) {
        next();
    } else {
        next('/');
    }
});

export default router;
