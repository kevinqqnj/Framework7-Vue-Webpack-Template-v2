<template>
    <f7-page :page-content="false">
        <f7-navbar title="Routable Tabs" back-link="Back" sliding></f7-navbar>
        <f7-toolbar tabbar>
            <a href="./" class="tab-link" data-route-tab-id="tab1">
              <i class="icon fas fa-home fa-2x"></i>
              <span class="tabbar-label">Home</span>
            </a>
            <a href="tab2/" class="tab-link" data-route-tab-id="tab2">
              <span class="fa-layers fa-2x">
                <i class="fas fa-calendar-alt"></i>
                <span class="fa-layers-counter fa-lg">99</span>
              </span>
              <span class="tabbar-label">Calendar</span>
            </a>
            <a href="tab3/" class="tab-link" data-route-tab-id="tab3">
              <i class="icon fas fa-user fa-2x"></i>
              <span class="tabbar-label">Profile</span>
            </a>
            <!--             <f7-link tab-link href="tab3/" route-tab-id="tab3">Tab 3</f7-link> -->
        </f7-toolbar>
        <f7-tabs routable>
            <f7-tab class="page-content hide-navbar-on-scroll" id="tab1"></f7-tab>
            <f7-tab class="page-content" id="tab2"></f7-tab>
            <f7-tab class="page-content" id="tab3"></f7-tab>
        </f7-tabs>
    </f7-page>
</template>
<style>
.md .navbar+.toolbar:not(.toolbar-bottom-md):not(.messagebar) {
  top: 56px;
}
.fa-layers-counter {
    height: inherit;
    right: -0.2em;
}
</style>
<script>
export default {};
</script>
