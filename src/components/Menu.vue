<template>
  <div class="menu-container" v-if="items">
    <span v-on:click="toggleMenu">
      {{ value }}
    </span>
    <ul class="menu" v-show="show">
      <li v-for="(item, i) in items" :key="i" :class="{active: item === value}" v-on:click="setItem(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FabricMenu',
  props: {
    value: String,
    items: Array,
    selectFirst: Boolean
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    toggleMenu(e) {
      e.stopPropagation();
      this.show = !this.show;
    },
    closeMenu() {
      this.show = false;
    },
    setItem(item) {
      this.$emit('input', item);
      this.$emit('onChange', item);
      this.show = false;
    },
  },
  created() {
    if (this.selectFirst && !this.value)
      this.setItem(this.items[0]);
  },
  mounted() {
    window.addEventListener('click', this.closeMenu);
  },
  destroyed() {
    window.removeEventListener('click', this.closeMenu);
  }
}
</script>

<style>
  .menu-container {
    position: relative;
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
  }

  .menu-container span {
    border-radius: 3px;
    border: 1px solid #cdd6da;
    background-color: #ffffff;
    display: inline-block;
    padding: 5px 5px 5px 15px;
    text-transform: capitalize;
    cursor: pointer;
    user-select: none;
    width: 100%;
    text-align: left;
  }

  .menu-container ul.menu {
    list-style: none;
    margin: 0;
    padding: 2px 5px;
    background-color: #ffffff;
    border-radius: 3px;
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    box-shadow: 3px 3px 20px rgba(119, 119, 119, 0.2);
  }
  .menu-container ul.menu li {
    padding: 5px 30px;
    margin: 3px 0;
    border-radius: 3px;
    font-weight: 500;
    white-space: nowrap;
    transition: all 0.2s ease;
    cursor: pointer;
    user-select: none;
    text-transform: capitalize;
  }
  .menu-container ul.menu li:hover {
    background-color: #f1f1f1;
  }
  .menu-container ul.menu li.active {
    background-color: #fff1e7;
  }
</style>
