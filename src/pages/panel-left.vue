<template>
    <f7-page>
        <f7-navbar class="bg-color-blue">
            <f7-block>
                <div class="chip">
                    <div class="chip-media"><img :src="imgurl"></div>
                    <div class="chip-label text-color-white">Kevin QQ</div>
                </div>
            </f7-block>
        </f7-navbar>
        <f7-block-title>Main View Navigation</f7-block-title>
        <f7-block>
            <f7-list>
                <f7-list-item link="/about/" title="About" panel-close></f7-list-item>
                <f7-list-item link="/form/" title="Form" panel-close></f7-list-item>
            </f7-list>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
            <p>Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero.</p>
        </f7-block>
    </f7-page>
</template>
<script>
export default {
    name: 'panel-left',
    data() {
        return {
            imgurl: require('../assets/images/logo.jpg'),
        }
    },
};
</script>
