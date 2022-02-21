<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <b-navbar toggleable="md" class="p-0">
            <b-navbar-brand to="/">
              <img src="/img/lens-logo.svg" />
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse">
              <font-awesome-icon icon="fas fa-bars" />
            </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item to="/" router-link-active class="home-disactive"
                  >Home</b-nav-item
                >
                <b-nav-item to="/" router-link-active>Buy</b-nav-item>
                <b-nav-item to="/withdraw" router-link-active
                  >Withdraw</b-nav-item
                >
                <b-nav-item
                  href="https://www.metarun.game/tokenomics"
                  target="_blank"
                  >Docs</b-nav-item
                >
              </b-navbar-nav>

              <!-- Right aligned nav items -->
              <div class="d-flex align-items-center">
                <div v-if="!userAccount">
                  <b-button
                    variant="outline-primary"
                    size="sm"
                    class="btn-small"
                    @click="gConnect()"
                    >Connect Wallet</b-button
                  >
                </div>
                <div v-if="userAccount">
                  <b-button
                    variant="outline-primary"
                    size="sm"
                    class="btn-small"
                    >Connected:
                    <span class="text-truncate">
                      {{ userAccount }}</span
                    ></b-button
                  >
                </div>

                <b-nav-item-dropdown right>
                  <b-dropdown-item href="#"> Request feature</b-dropdown-item>
                  <b-dropdown-item href="#">F.A.Q</b-dropdown-item>
                  <hr class="dropdown-divider" />
                  <b-dropdown-item
                    href="https://discord.com/invite/lensprotocol"
                    target="_blank"
                    >Discord</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="https://twitter.com/LensProtocol"
                    target="_blank"
                    >Twitter</b-dropdown-item
                  >
                </b-nav-item-dropdown>
              </div>
            </b-collapse>
          </b-navbar>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  return() {},
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  z-index: 20;
  padding: 14px 0;
  border-bottom: 1px solid #e6e8ec;
  margin: 0px 40px;
}

.text-truncate {
  max-width: 171px;
  display: inline-block;
  vertical-align: bottom;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.navbar-brand {
  padding: 0;

  img {
    max-width: 100px;
  }
}
.navbar-nav {
  margin-left: 32px;
  margin-right: auto;
  border-left: 2px solid #e6e8ec;
  @media screen and (max-width: 767px) {
    margin-left: 0px;
    border-left: 0px;
  }
  .nav-link {
    padding: 0;
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    margin-left: 32px;
    @media screen and (max-width: 991px) {
      margin-left: 25px;
    }
  }
}
.btn-small {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 90px;
  padding: 12px 16px;
  color: #f4f5f6;
  border: 2px solid #353945;
  font-weight: bold;
  &:hover {
    background-color: transparent !important;
  }
}

.b-nav-dropdown {
  list-style: none;
}
.navbar-toggler {
  &:focus {
    outline: none;
    box-shadow: none;
  }
}
</style>
