import LandingPage from './components/LandingPage.vue';
import termsAndCondition from './components/termsAndCondition.vue';
import mediation from './components/mediation.vue';
import marketing from './components/marketing.vue';
import advertise from './components/advertise.vue';
import promotion from './components/promotion.vue';
import community from './components/community.vue';
import ThankYou from './components/ThankYou.vue';
import auth from './components/auth.vue';
import profile from './components/profile.vue';
import setMediatorProfile from './components/setMediatorProfile.vue';
import receivePayment from './components/receivePayment.vue';
import applicationSubmit from './components/applicationSubmit.vue';

export default [
    // { path: '/', component: nft },
    { path: '/', component: LandingPage },
    { path: '/termsAndCondition', component: termsAndCondition },
    { path: '/mediation', component: mediation },
    { path: '/marketing', component: marketing },
    { path: '/advertise', component: advertise },
    { path: '/promotion', component: promotion },
    { path: '/community', component: community },
    { path: '/ThankYou', component: ThankYou },
    { path: '/auth', component: auth },
    { path: '/profile', component: profile },
    { path: '/setMediatorProfile', component: setMediatorProfile },
    { path: '/receivePayment', component: receivePayment },
    { path: '/applicationSubmit', component: applicationSubmit },
]