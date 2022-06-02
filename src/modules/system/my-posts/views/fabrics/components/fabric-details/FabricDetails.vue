<template>
  <div>
    <b-card>
      <b-row>
        <b-col md="4">
          <b-carousel
            id="carousel-example-generic"
            controls
            indicators
            style="height: 250px; overflow-y: hidden"
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
          <h2>{{ fabric.nameFabric }}</h2>
          <p>
            {{ fabric.descriptionFabric }}
          </p>

          <hr />

          <b-row>
            <b-col md="6">
              <h5>
                <b> Composicion de la Tela </b>
              </h5>
              <p>{{ fabric.composition }}</p>
            </b-col>
            <b-col md="6">
              <h5>
                <b> Ancho de la Tela </b>
              </h5>
              <p>{{ fabric.widthFabric }}</p>
            </b-col>
            <b-col md="6">
              <h5>
                <b> Metros x Kg </b>
              </h5>
              <p>{{ fabric.meters_x_Kg }}</p>
            </b-col>
            <b-col md="6">
              <h5>
                <b> Precio </b>
              </h5>
              <p>{{ fabric.priceFabric }}</p>
            </b-col>
            <b-col md="6">
              <h5>
                <b> Color de la Tela </b>
              </h5>
              <p>#4e41b4</p>
            </b-col>
            <b-col md="6">
              <h5>
                <b> Tension </b>
              </h5>
              <p>{{ fabric.tension }}</p>
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
                @click="openModalUpdateFabric"
              >
                Editar tela
              </b-button>
              <b-button variant="danger" size="sm"> Eliminar tela </b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card>

    <b-card>
      <b-card-title>Clientes</b-card-title>
      <hr />
    </b-card>

    <modal-update-fabric
      v-if="showModalUpdateFabric"
      @onClose="closeModalUpdateFabric"
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
import ModalUpdateFabric from "../update-fabric/ModalUpdateFabric.vue";
import ModalUploadImages from "@/modules/system/my-posts/components/ModalUploadImages.vue";

export default {
  components: {
    ModalUpdateFabric,
    ModalUploadImages,
  },
  data() {
    return {
      fabric: {},
      images: [],

      // Modals
      showModalUpdateFabric: false,
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
      A_GET_FABRIC_BY_ID: "myPosts/A_GET_FABRIC_BY_ID",
      A_GET_IMAGES_BY_ID: "images/A_GET_IMAGES_BY_ID",
    }),
    openModalUpdateFabric() {
      this.showModalUpdateFabric = true;
    },
    async closeModalUpdateFabric(saved) {
      if (saved) await this.getFabric();

      this.showModalUpdateFabric = false;
    },
    openModalUploadImages() {
      this.showModalUploadImages = true;
    },
    async closeModalUploadImages(saved) {
      if (saved) await this.getFabricImages();
      this.showModalUploadImages = false;
    },
    async getFabric() {
      try {
        this.addPreloader();

        const response = await this.A_GET_FABRIC_BY_ID(this.idParam);

        if (response.status == 200) {
          this.fabric = response.data;
        }
        this.removePreloader();
      } catch (error) {
        this.removePreloader();

        throw error;
      }
    },
    async getFabricImages() {
      try {
        const response = await this.A_GET_IMAGES_BY_ID(this.idParam);

        if (response.status == 200) {
          this.images = response.data;
        }
      } catch (error) {
        throw error;
      }
    },
  },
  async created() {
    await Promise.all([this.getFabric(), this.getFabricImages()]);
  },
};
</script>

<style>
</style>