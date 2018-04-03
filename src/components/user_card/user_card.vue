<template>
  <div class="card base00-background">
    <a href="#">
      <img @click.prevent="toggleUserExpanded" class="avatar" :src="user.profile_image_url">
    </a>
    <div class="usercard" v-if="userExpanded">
      <user-card-content :user="user" :switcher="false"></user-card-content>
    </div>
    <div class="name-and-screen-name" v-else>
      <div class="user-name">
        {{ user.name }}
        <span class="follows-you" v-if="!userExpanded && showFollows && user.follows_you">
            {{ $t('user_card.follows_you') }}
        </span>
      </div>
      <a :href="user.statusnet_profile_url" target="blank"><div class="user-screen-name">@{{ user.screen_name }}</div></a>
    </div>
  </div>
</template>

<script src="./user_card.js"></script>

<style lang="scss">
  .name-and-screen-name {
    margin-left: 0.7em;
    margin-top:0.0em;
    margin-right: 2em;
    text-align: left;
    width: 100%;
  }

  .follows-you {
    margin-left: 2em;
    float: right;
  }

  .follows {

  }

  .card {
    display: flex;
    flex: 1 0;
    padding-top: 0.6em;
    padding-right: 1em;
    padding-bottom: 0.6em;
    padding-left: 1em;
    border-bottom: 1px solid;
    margin: 0;
    border-bottom-color: inherit;


    .avatar {
      margin-top: 0.2em;
      width:32px;
      height: 32px;
      border-radius: 50%;
    }
  }

  .usercard {
    width: fill-available;
    margin: 0.2em 0 0.7em 0;
    border-radius: 10px;
    border-style: solid;
    border-color: inherit;
    border-width: 1px;
    overflow: hidden;

    p {
      margin-bottom: 0;
    }
  }
</style>