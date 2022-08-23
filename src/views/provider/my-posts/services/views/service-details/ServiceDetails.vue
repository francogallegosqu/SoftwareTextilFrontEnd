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

          <p class="pt-2">
            {{ $moment(fabric.created_at).format("L LTS") }}
          </p>
        </b-col>
        <b-col md="8">
          <h2>{{ fabric.nameService }}</h2>
          <p>
            {{ fabric.descriptionService }}
          </p>

          <hr />

          <b-row>
            <b-col md="6">
              <h5>
                <b> Precio </b>
              </h5>
              <p>{{ fabric.priceService | formatPen }}</p>
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
                @click="redirectToUpdateService()"
              >
                Editar servicio
              </b-button>
              <b-button
                variant="outline-primary"
                size="sm"
                class="mr-1"
                @click="openModalRegisterSale"
              >
                Registrar venta
              </b-button>
              <b-button variant="danger" size="sm" @click="deleteService">
                Eliminar servicio
              </b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card>

    <b-row class="card-group">
      <b-col cols="12">
        <b-card>
          <template #header>
            <b-card-title>
              <feather-icon
                icon="UsersIcon"
                size="18"
                class="mr-50"
              ></feather-icon>
              Clientes
            </b-card-title>
          </template>

          <b-container></b-container>
        </b-card>
      </b-col>
    </b-row>

    <modal-upload-images
      v-if="showModalUploadImages"
      :register-code="serviceId"
      @onClose="closeModalUploadImages"
    />

    <modal-register-sale
      v-if="showModalRegisterSale"
      :unit-price="fabric.priceService"
      @onClose="closeModalRegisterSale"
    ></modal-register-sale>
  </div>
</template>

<script>
import { mapActions } from "vuex";

// Components
import ModalUploadImages from "@/modules/system/my-posts/components/ModalUploadImages.vue";
import ModalRegisterSale from "@/views/provider/components/ModalRegisterSale.vue";

export default {
  components: {
    ModalUploadImages,
    ModalRegisterSale,
  },
  data() {
    return {
      fabric: {},
      images: [],

      // Modals
      showModalUploadImages: false,
      showModalRegisterSale: false,
    };
  },
  computed: {
    serviceId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions({
      A_GET_SERVICE_BY_ID: "provMyPostsServices/A_GET_SERVICE_BY_ID",
      A_DELETE_SERVICE: "provMyPostsServices/A_DELETE_SERVICE",
      A_GET_IMAGES_BY_ID: "images/A_GET_IMAGES_BY_ID",
    }),
    openModalUploadImages() {
      this.showModalUploadImages = true;
    },
    async closeModalUploadImages(saved) {
      if (saved) await this.getServiceImages();
      this.showModalUploadImages = false;
    },
    openModalRegisterSale() {
      this.showModalRegisterSale = true;
    },
    closeModalRegisterSale() {
      this.showModalRegisterSale = false;
    },
    redirectToUpdateService() {
      this.$router.push({
        name: "app-provider-my-posts-services-update",
        params: {
          from: "d",
          id: this.serviceId,
        },
      });
    },
    async getService() {
      try {
        this.addPreloader();

        const response = await this.A_GET_SERVICE_BY_ID(this.serviceId);

        if (response.status == 200) {
          this.fabric = response.data;
        }
        this.removePreloader();
      } catch (error) {
        this.removePreloader();

        throw error;
      }
    },
    async getServiceImages() {
      try {
        const response = await this.A_GET_IMAGES_BY_ID(this.serviceId);

        if (response.status == 200) {
          this.images = response.data;
        }
      } catch (error) {
        throw error;
      }
    },
    async deleteService() {
      try {
        const confirm = await this.showGenericConfirmSwal({});

        if (confirm.value) {
          const response = await this.A_DELETE_SERVICE(this.serviceId);

          if (response.status == 200) {
            this.showGenericToast({ type: "delete" });
            this.$router.push({ name: "app-provider-my-posts-services" });
          }
        }
      } catch (error) {
        throw error;
      }
    },
  },
  async created() {
    await Promise.all([this.getService(), this.getServiceImages()]);
  },
};
</script>

<style lang="scss">
.card-group > div > .card {
  height: calc(100% - 2rem);
  min-height: 350px;
  > .card-header {
    border-bottom: 1px solid rgb(80 85 99 / 50%);
    margin-bottom: 1.5rem;
    .card-title {
      font-weight: bold;
    }
  }
}
</style>