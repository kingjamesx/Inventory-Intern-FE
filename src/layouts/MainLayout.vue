<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white  text-white q-py-lg header">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold q-ml-lg">
          <q-avatar>
            <img src="../assets/ourpass-logo.png" />
          </q-avatar>
          OurPass
        </q-toolbar-title>
        <q-toolbar-title class="text-weight-bold">
          <q-avatar>
            <img src="../assets/avatar.png" />
          </q-avatar>
          Inventory
        </q-toolbar-title>
        <q-input
          dark
          dense
          standout
          v-model="text"
          input-class="text-left "
          class="q-mr-lg bg-blue-grey-11 text-black rounded-border search-input"
          placeholder="search"
      
        >
          <template v-slot:append>
            <q-icon  name="search" />
          </template>
        </q-input>
          <q-space/>
          <q-list class="flex">
            <q-item>
              <q-btn round flat icon="notifications">
        <q-badge floating color="red" rounded label='2' />
      </q-btn>
            </q-item>
            <q-item>
              <q-btn round flat icon="settings" />
            </q-item>
            <q-item>
              <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
            </q-item>
          </q-list>
           
     

       
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <q-list>
        <q-item>
          <q-item-section class="q-py-lg">
            <q-item-label class="text-h6">Menu</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/" class="q-py-lg" id='1' :active="link==='dashboard'" active-class="active" @click="link='dashboard'">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h6">Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/createinventory" class="q-py-lg bg-white" :active="link==='createInventory'" active-class="active" @click="link='createInventory'" >
          <q-item-section avatar>
            <q-icon name="create" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h6">Create Inventory</q-item-label>
          </q-item-section> </q-item
        >
   <q-item to="/inventory" class="q-py-lg" :active="link==='inventoryList'" active-class="active" @click="link='inventoryList'">
          <q-item-section avatar>
            <q-icon name="inventory" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h6">Inventory list</q-item-label>
          </q-item-section> </q-item
        >
     
        <q-item to="/" class="q-py-lg">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h6">Logout</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

    const leftDrawerOpen = ref(false);
    let link=ref('dashboard')

    

    function   toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
  
</script>
<style lang="scss" scoped>
.header{
  color:#102051 !important;
}
.rounded-border{
  border-radius: 5px;
}
.search-input{
  width: 20%;
}
.active{
  background-color: #a1a9c1 !important;
  border-right: 5px solid #102051;
}

</style>
