import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
// import * as ApplicationSettings from "tns-core-modules/application-settings";
// import routes from "./routes";

import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";

export const defaultClient = new ApolloClient({
  uri: 'http://brightworld.prismic.io/graphql',
  // headers: {
  //     authorization: `Bearer ${tokenInAppSet}`,
  // }
});
Vue.use(VueApollo);
const apolloProvider = new VueApollo({
    defaultClient,
});

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
import store from './store'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  apolloProvider,
  render: h => h('frame', [h(App)])
}).$start()
