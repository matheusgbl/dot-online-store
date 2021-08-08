<template>
  <header class="page_header" id="header">
    <nav class="header_logo">
      <img class="logo" src="../../assets/dot-logo.png" alt="logo">
    </nav>
    <nav class="search_bar">
      <input type="text" placeholder="Pesquisa" />
      <fa class="search_icon" icon="search" size="lg" />
    </nav>
    <nav class="icons">
      <fa @click="$emit('togglefav')" class="heart_icon" icon="heart" size="2x" />
      <fa @click="$emit('togglenav')" class="cart_icon" icon="shopping-cart" size="2x" />
      <span class="quantity">0</span>
      <fa class="circle_icon" icon="circle" size="2x" />
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
  .logo {
    width: 100px;
  }

  .search_icon {
    position: relative;
    right: 40px;
    bottom: 2px;
    color: #333;
    cursor: pointer;
  }

  .heart_icon {
    margin-right: 20px;
    color: #fa708a;
  }

  .quantity {
    position: relative;
    bottom: 16px;
    left: 5px;
    font-weight: 600;
    z-index: 999;
  }

  .circle_icon {
    position: relative;
    bottom: 10px;
    right: 15px;
    color: #fad65f;
  }

  #header {
  align-items: center;
  background-color: #8dd7cf;
  display: flex;
  padding: 20px 40px;
  max-height: 80px;
  width: 100%;
}

.search_bar {
  margin-left: auto;
}

.search_bar input {
  border: 2px solid rgb(180, 180, 180);
  border-radius: 5px;
  height: 40px;
  outline: none;
  width: 400px;
  font-size: 20px;
  text-indent: 10px;
}

.icons {
  margin-left: auto;
}

.cart_icon:hover, .heart_icon:hover {
  cursor: pointer;
}
</style>
