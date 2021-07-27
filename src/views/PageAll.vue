<template>
  <div>
    <table class="table">
      <thead>
        <tr class="cursor-default">
          <th>Image</th>
          <th>About</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(picture, index) in pictures" :key="index">
          <td class="w-1/5"><img :src="'https://www.artic.edu/iiif/2/' + picture.image_id + '/full/843,/0/default.jpg'"></td>
          <td class="w-3/5 cursor-default">
            <p class="font-bold">{{picture.title}}</p>
            <p>{{picture.artist_display}}</p>
            <p>{{picture.date_display}}</p>
            <p>{{picture.dimensions}}</p>
          </td>
          <td>
            <router-link to="/saved" class="px-8 py-4 bg-blue-700 text-white hover:bg-blue-800" @click="savedPicture"
              >Save</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import axios from "axios";
export default {
  name: "All",
  data() {
    return {
      pictures: [],
      errors: [],
    };
  },
  created() {
    axios
      .get("https://api.artic.edu/api/v1/artworks")
      .then((responce) => {
        this.pictures = responce.data.data;
        console.log(responce);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    savedPicture() {
      this.savedPictures.push({})
    }
  }
};
</script>