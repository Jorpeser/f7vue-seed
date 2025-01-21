import HomeView from './views/HomeView.vue';
import LoginView from './views/LoginView.vue';
import SignupView from './views/SignupView.vue';

var routes = [  
  { path: '/',  component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/signup', component: SignupView }
];

export default routes;
