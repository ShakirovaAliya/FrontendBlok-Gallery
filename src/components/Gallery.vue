<template>
  <div id="main">
    <div class="tab bg-blue-200 mb-6">
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input visually-hidden "
          id="all"
          value="all"
          v-model="tab"
          checked="checked"
        />
        <label class="custom-control-label" for="all">
          All ({{ imagesList.length }})
        </label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input visually-hidden "
          id="saved"
          v-model="tab"
          value="saved"
        />
        <label class="custom-control-label" for="saved">
          Saved ({{
            imagesList.filter((images) => images.saved == true).length
          }})
        </label>
      </div>
    </div>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(images, index) in imagesListFilter"
        :key="index"
        v-show="
          tab == 'all' ||
          (tab == images.saved) == false ||
          (tab == 'saved' && images.saved == true)
        "
      >
        <div>
          <img
            :src="
              'https://www.artic.edu/iiif/2/' +
              images.image_id +
              '/full/843,/0/default.jpg'
            "
            alt=""
          />
          <span>
            {{ images.title }}
            <br />
            {{ images.artist_display }}
            <br />
            {{ images.date_display }}
            <br />
            {{ images.dimensions }}
          </span>
        </div>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            v-model="images.saved"
            :id="index"
          />
          <label
            class="custom-control-label"
            :class="{ saved: images.saved }"
            :for="index"
          >
            Save
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "imagesList",
  data() {
    let imagesList = [];
    return {
      tab: "all",
      index: 0,
      imagesList: [],
      imagesListFilter: imagesList,
      errors: [],
    };
  },
  watch: {
    tab: function () {
      switch (this.tab) {
        case "all":
          this.imagesListFilter = this.imagesList;
          break;
        case "saved":
          this.imagesListFilter = this.imagesList.filter((images) => {
            return images.saved === true;
          });
          break;
        default:
          this.imagesListFilter = this.imagesList;
      }
    },
  },
  created() {
    axios
      .get("https://api.artic.edu/api/v1/artworks")
      .then((responce) => {
        this.imagesList = responce.data.data;
        this.imagesListFilter = responce.data.data;
        console.log(responce);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  max-width: 1000px;
  margin: 0px auto;
  position: relative;
}
.list-group .custom-control-input {
  visibility: hidden;
}
.list-group .custom-control-label {
 @apply text-black border border-blue-700 bg-white px-4 py-2 
}
.list-group .custom-control-label.saved {
  @apply select-none cursor-pointer bg-blue-700 text-white
}
.tab {
  display: flex;
}
.custom-radio {
  box-sizing: border-box;
  display: flex;
}
.custom-radio .custom-control-input+label {
  display: block;
}
.custom-radio .custom-control-input+label {
@apply px-8 py-4 text-sm text-black select-none cursor-pointer
}
.custom-radio .custom-control-input:checked+label {
@apply text-white select-none cursor-pointer bg-blue-700
}
.custom-radio .custom-control-input {
  visibility: hidden;
}
.list-group {
  padding-left: 0;
  list-style-type: none;
}
.list-group-item {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  padding: 15px;
  text-align: left;
}
.list-group-item > div:first-child {
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: calc(100% - 200px);
  flex-basis: calc(100% - 200px);
}
.list-group-item > div:last-child {
  width: 100px;
  flex-basis: 100px;
  text-align: right;
}
.list-group-item img {
  width: 100%;
  max-width: 100px;
  margin-right: 20px;
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0px;
  margin: -1px;
  border: 0px;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
</style>
