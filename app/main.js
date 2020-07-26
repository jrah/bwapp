import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
// import * as ApplicationSettings from "tns-core-modules/application-settings";
// import routes from "./routes";

import VueApollo from "vue-apollo";
import { ApolloClient } from 'apollo-client'
import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";

export const defaultClient = new ApolloClient({
  link: new PrismicLink({  uri: 'http://brightworld.prismic.io/graphql'}),
  cache: new InMemoryCache()
})
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
  el: '#app',
  store,
  apolloProvider,
  render: h => h('frame', [h(App)])
}).$start()
