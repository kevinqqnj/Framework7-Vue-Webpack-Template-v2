<template>
    <f7-page :page-content="false">
        <f7-navbar title="Routable Tabs" back-link="Back" sliding></f7-navbar>
        <f7-toolbar tabbar>
            <a href="./" class="tab-link" data-route-tab-id="tab1">
              <i class="icon material-icons">home</i>
              <span class="tabbar-label">Home</span>
            </a>
            <a href="tab2/" class="tab-link" data-route-tab-id="tab2">
              <i class="icon material-icons size-50">today<span class="badge color-red">5</span></i>
              <span class="tabbar-label">Calendar</span>
            </a>
            <a href="tab3/" class="tab-link" data-route-tab-id="tab3">
              <i class="icon material-icons">perm_identity</i>
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
</style>
<script>
export default {};
</script>
