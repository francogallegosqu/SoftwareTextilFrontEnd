<template>
  <div
    class="cont-list"
    :style="images.length &lt; 3 ? '' : 'overflow-y: scroll; height: 238px;'"
  >
    <label :for="source" style="width: 100%" @click="isSingle">
      <div
        class="uploader"
        :class="{ dragging: isDragging, 'border-danger': errorDrag }"
        @dragenter="OnDragEnter"
        @dragleave="OnDragLeave"
        @dragover.prevent
        @drop="onDrop"
      >
        <div v-show="!images.length">
          <feather-icon icon="FileIcon" size="70" class="mb-2 mt-2" alt />
          <p class="roboto-class drag-text">Arrastra tus archivos aquí</p>
          <div class="file-input">
            <div
              class="file-input roboto-class"
              style="font-weight: bold; font-size: 20px"
            >
              o seleccione un archivo
            </div>
            <input
              :id="source"
              type="file"
              :accept="image ? 'image/png, image/jpeg' : '*'"
              :multiple="!single"
              @change="onInputChange"
            />
          </div>
        </div>

        <div
          v-show="images.length"
          class="images-preview d-flex justify-content-center"
          style="margin-top: 0px"
          :for="source"
        >
          <div
            v-for="(image, index) in images"
            :key="index"
            class="img-wrapper mr-1"
          >
            <b-img
              :src="
                $options.filters.extFile(files[index].name.split('.').pop())
              "
            />
            <div class="details">
              <span class="name" v-text="files[index].name.substr(0, 10)" />
              <span class="size" v-text="getFileSize(files[index].size)" />
              <button
                class="button-delete-file"
                @click="removeFile($event, index)"
              >
                x
              </button>
            </div>
          </div>
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: "DragAndDrop",
  props: {
    filesArray: Array,
    single: Boolean,
    image: Boolean,
    errorDrag: {
      type: Boolean,
      default: false,
    },
    source: {
      type: String,
      default: "file",
    },
  },
  data() {
    return {
      images: [],
      disable: {
        upload: false,
      },
      errorFile: false,
      files: [],
      disable: {
        upload: false,
      },
      folder_id: "",
      sendto: "",
      responsable: "",
      result: "",
      isDragging: false,
      dragCount: 0,
    };
  },
  mounted() {
    Array.from(this.filesArray).forEach((file) => this.addImage(file));
  },
  methods: {
    addImage(file) {
      this.files.push(file);
      const img = new Image();
      const reader = new FileReader();
      reader.onload = (e) => this.images.push(e.target.result);
      reader.readAsDataURL(file);
    },
    onInputChange(e) {
      const { files } = e.target;
      Array.from(files).forEach((file) => this.addImage(file));
      this.$emit("input", this.files);
    },
    getFileSize(size) {
      const fSExt = ["Bytes", "KB", "MB", "GB"];
      let i = 0;

      while (size > 900) {
        size /= 1024;
        i++;
      }
      return `${Math.round(size * 100) / 100} ${fSExt[i]}`;
    },
    removeFile(e, key) {
      e.preventDefault();
      this.files.splice(key, 1);
      this.images.splice(key, 1);
      this.$emit("input", this.files);
    },
    OnDragEnter(e) {
      e.preventDefault();

      this.dragCount++;
      this.isDragging = true;
      return false;
    },
    OnDragLeave(e) {
      e.preventDefault();
      this.dragCount--;
      if (this.dragCount <= 0) this.isDragging = false;
    },
    onDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isDragging = false;
      const { files } = e.dataTransfer;
      Array.from(files).forEach((file) => this.addImage(file));
      this.$emit("input", this.files);
    },
    isSingle(e) {
      if (this.images.length > 0 && this.single) {
        e.preventDefault();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.details {
  background-color: transparent !important;
}

.uploader {
  padding: 15px 15px;
  border-radius: 5px;
  background: transparent;
  border: 2.3px dashed #d1cfd7;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;

  .drag-text {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  input[type="file"] {
    opacity: 0;
  }

  .img-wrapper {
    border-radius: 20px;
    padding: 10px;
    background: #e7e7e7;
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      margin-bottom: 10px;
    }

    .details {
      .button-delete-file {
        position: absolute;
        top: -5px;
        right: -5px;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        border: none;
        background: red;
        color: white;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        font-size: 10pt;
      }
    }
  }
}
</style>
