<template>
  <div>
    <b-card>
      <b-row>
        <b-col md="4">
          <b-carousel
            id="carousel-example-generic"
            controls
            indicators
            style="height: 250px"
          >
            <b-carousel-slide
              v-for="(item, index) of images"
              :key="index"
              :img-src="item.urlImage"
            />
          </b-carousel>

          <p class="pt-1">Creación: Sun Apr 03 2022</p>
        </b-col>
        <b-col md="8">
          <h2>{{ accessory.nameAccessory }}</h2>
          <p>
            {{ accessory.descriptionAccessory }}
          </p>

          <hr />

          <b-row>
            <b-col md="6">
              <h5>
                <b> Precio </b>
              </h5>
              <p>{{ accessory.priceAccesory }}</p>
            </b-col>
            <b-col md="6">
              <h5>
                <b> Color de la Tela </b>
              </h5>
              <p>#4e41b4</p>
            </b-col>
            <b-col cols="12">
              <b-button
                variant="outline-primary"
                size="sm"
                class="mr-1"
                @click="openModalUploadImages"
              >
                Cargar fotos
              </b-button>
              <b-button
                variant="outline-primary"
                size="sm"
                class="mr-1"
                @click="openModalUpdateAccessory"
              >
                Editar tela
              </b-button>
              <b-button variant="danger" size="sm" @click="deleteAccesory">
                Eliminar tela
              </b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card>

    <b-card>
      <b-card-title>Clientes</b-card-title>
      <hr />
    </b-card>

    <modal-update-tackle
      v-if="showModalUpdateAccessory"
      :tackle-code="idParam"
      @onClose="closeModalUpdateAccessory"
    />

    <modal-upload-images
      v-if="showModalUploadImages"
      :register-code="idParam"
      @onClose="closeModalUploadImages"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

// Components
import ModalUpdateTackle from "../update-tackle/ModalUpdateTackle.vue";
import ModalUploadImages from "@/modules/system/my-posts/components/ModalUploadImages.vue";

export default {
  components: {
    ModalUpdateTackle,
    ModalUploadImages,
  },
  data() {
    return {
      accessory: {},
      images: [],

      // Modals
      showModalUpdateAccessory: false,
      showModalUploadImages: false,
    };
  },
  computed: {
    idParam() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions({
      A_GET_ACCESSORY_BY_ID: "myPosts/A_GET_ACCESSORY_BY_ID",
      A_GET_IMAGES_BY_ID: "images/A_GET_IMAGES_BY_ID",
    }),
    openModalUpdateAccessory() {
      this.showModalUpdateAccessory = true;
    },
    async closeModalUpdateAccessory(saved) {
      if (saved) await this.getAccessory();

      this.showModalUpdateAccessory = false;
    },
    openModalUploadImages() {
      this.showModalUploadImages = true;
    },
    async closeModalUploadImages(saved) {
      if (saved) await this.getAccessoryImages();
      this.showModalUploadImages = false;
    },
    async getAccessory() {
      try {
        this.addPreloader();

        const response = await this.A_GET_ACCESSORY_BY_ID(this.idParam);

        if (response.status == 200) {
          this.accessory = response.data;
        }
        this.removePreloader();
      } catch (error) {
        this.removePreloader();

        throw error;
      }
    },
    async getAccessoryImages() {
      try {
        const response = await this.A_GET_IMAGES_BY_ID(this.idParam);

        if (response.status == 200) {
          this.images = response.data;
        }
      } catch (error) {
        throw error;
      }
    },
    async deleteAccesory() {
      try {
        const confirm = await this.showGenericConfirmSwal({});

        if (confirm.value) {
          this.addPreloader();

          const response = await this.A_DELETE_ACCESSORY(this.idParam);

          if (response.status == 200) {
            this.showGenericToast({ type: "delete" });

            this.$router.push({ name: "app-my-posts-tackle" });
          }

          this.removePreloader();
        }
      } catch (error) {
        this.removePreloader();

        throw error;
      }
    },
  },
  async created() {
    await Promise.all([this.getAccessory(), this.getAccessoryImages()]);
  },
};
</script>

<style>
</style>