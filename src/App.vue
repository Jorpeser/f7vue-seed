<template>
  <f7-app v-bind="f7params">

    <!-- Left panel with cover effect when hidden -->
    <f7-panel left cover :visible-breakpoint="960">
      <f7-view>
        <left-menu></left-menu>
      </f7-view>
    </f7-panel>

    <!-- Right panel with reveal effect-->
    <f7-panel right cover backdrop>
      <f7-view>
        <f7-page>
          <f7-navbar title="Right Panel"></f7-navbar>
          <f7-block>Right panel content goes here</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>


    <!-- Your main view, should have "view-main" class -->
    <f7-view main class="safe-areas" url="/"></f7-view>


    <!-- Popup -->
    <f7-popup id="filter-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Popup content goes here.</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

  </f7-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { f7, f7ready } from 'framework7-vue';
import { getDevice } from 'framework7/lite-bundle';
import cordovaApp from './lib/cordova-app.js';

import routes from './routes.js';
import store from './store.js';

const device = getDevice();

// Framework7 Parameters
const f7params = {
  name: 'My App', // App name
  theme: 'auto', // Automatic theme detection
  id: 'io.framework7.myapp', // App bundle ID
  store: store, // App store
  routes: routes, // App routes
  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
};

onMounted(() => {
  f7ready(() => {
    // Init cordova APIs (see cordova-app.js)
    if (device.cordova) {
      cordovaApp.init(f7);
    }
    // Call F7 APIs here
  });
});

</script>