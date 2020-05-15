// when you asign any kind of components this routes file you need to import top side components with components file or path location.
// import AdminHome from './components/admin/AdminHome'
import AdminHome from './components/admin/AdminHome.vue';
import AdminMaster from './components/admin/AdminMaster.vue';
import Dashboard from './components/admin/Dashboard.vue';
import Post from './components/admin/Post.vue';
import List from './components/admin/category/List.vue';
import New from './components/admin/category/New.vue';

// components routes

export const routes = [
    {
        path: '/home',
        component: AdminHome
    },
    {
        path: '/post',
        component: Post
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/category-list',
        component: List
    },
    {
        path: '/add-category',
        component: New
    }
]