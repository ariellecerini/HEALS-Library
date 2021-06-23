<template>
    <div class="sidebar menu navholder">
        <div class="site-title">{{ title }}</div>
        <menu-item @onClick="onClick" v-bind="{ active: true, hover: false, label: 'profile' }"/>
        <menu-item @onClick="onClick" v-bind="{ active: false, hover: false, label: 'summary' }"/>
        <menu-item @onClick="onClick" v-bind="{ active: false, hover: false, label: 'timeline' }"/>
        <menu-item @onClick="onClick" v-bind="{ active: false, hover: false, label: 'insights' }"/>

<!-- onclick function needs to be added 
        set all 'active' props to false except for the menu item that was clicked 
        switch the displayed info to the page that corresponds with the menu item
    -->
    
    </div>
</template>

<script>
import '../MenuItem/Menu.css';
import MenuItem from '../MenuItem/MenuItem.vue';

export default {
 name: 'side-panel',
  components: { MenuItem },
 props: {
     title: {
      type: String,
      required: true
    }
 }
}
</script>
