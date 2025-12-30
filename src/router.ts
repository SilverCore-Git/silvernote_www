import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home/Home.vue';
import App from './views/_redirect/app.vue';
import Download from './views/Download/Download.vue';
import Contact from './views/Contact/Contact.vue';
import NotFound from './views/_NotFound/NotFound.vue';
import Http from './views/_redirect/http.vue';
import Features from './views/Features/Features.vue';
import FeaturesView from './views/Features/FeaturesView.vue';
import { PricingSection } from './components';


const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home,
    meta: { title: 'Silvernote - vos notes accessibles partout et simplement' }
  },
  { 
    path: '/download', 
    name: 'Download', 
    component: Download,
    meta: { title: 'Télécharger - Silvernote' }
  },
  { 
    path: '/contact', 
    name: 'Contact', 
    component: Contact,
    meta: { title: 'Contactez-nous - Silvernote' }
  },
  { 
    path: '/pricing', 
    name: 'Pricing', 
    component: PricingSection,
    meta: { title: 'Tarifs - Silvernote' }
  },
  { 
    path: '/features', 
    name: 'FeaturesList', 
    component: Features,
    meta: { title: 'Fonctionnalité - Silvernote' }
  },
  { 
    path: '/features/:slug', 
    name: 'fonctionnalitesView', 
    component: FeaturesView,
    meta: { title: 'Fonctionnalité - Silvernote' }
  },
  { 
    path: '/app', 
    name: 'redirect-app', 
    component: App,
    meta: { title: 'redirection - Silvernote' }
  },
  { 
    path: '/redirect/:path(.*)', 
    name: 'http-app', 
    component: Http,
    meta: { title: 'redirection - Silvernote' }
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound,
    meta: { title: 'Page non trouvée - Silvernote' }
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, _savedPosition) {
    if (to.hash) {
      const el = document.querySelector(to.hash);
      if (el) return { top: (el as HTMLElement).offsetTop, behavior: 'smooth' };
    }
    return { top: 0 };
  }
});

router.beforeEach((to: any, _from: any, next: any) => {
  const title = to.meta.title as string;

  if (title) {
    document.title = title;

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.setAttribute('content', title);
      document.head.appendChild(meta);
    }
  }

  next();
});



export default router
