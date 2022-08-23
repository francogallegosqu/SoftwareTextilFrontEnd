<template>
  <div>
    <header-slot></header-slot>

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

          <p class="pt-1">
            {{ $moment(fabric.created_at).format("L LTS") }}
          </p>
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
              <p>{{ fabric.priceFabric | formatPen }}</p>
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
            <b-col cols="12" class="mt-1">
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
                @click="redirectToUpdateFabric"
              >
                Editar tela
              </b-button>
              <b-button
                variant="outline-primary"
                size="sm"
                class="mr-1"
                @click="openModalRegisterSale"
              >
                Registrar venta
              </b-button>
              <b-button variant="danger" size="sm" @click="deleteFabric">
                Eliminar tela
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
      :register-code="idParam"
      @onClose="closeModalUploadImages"
    />

    <modal-register-sale
      v-if="showModalRegisterSale"
      :unit-price="fabric.priceFabric"
      @onClose="closeModalRegisterSale"
    ></modal-register-sale>
  </div>
</template>

<script>
import { mapActions } from "vuex";

// Components
import ModalUploadImages from "@/views/provider/components/ModalUploadImages.vue";
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
    idParam() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions({
      A_GET_FABRIC_BY_ID: "provMyPostsFabrics/A_GET_FABRIC_BY_ID",
      A_DELETE_FABRIC: "provMyPostsFabrics/A_DELETE_FABRIC",
      A_GET_IMAGES_BY_ID: "images/A_GET_IMAGES_BY_ID",
    }),
    redirectToUpdateFabric(id) {
      this.$router.push({
        name: "app-provider-my-posts-fabrics-update",
        params: {
          from: "d",
          id: this.idParam,
        },
      });
    },
    openModalUploadImages() {
      this.showModalUploadImages = true;
    },
    async closeModalUploadImages(saved) {
      if (saved) await this.getFabricImages();
      this.showModalUploadImages = false;
    },
    openModalRegisterSale() {
      this.showModalRegisterSale = true;
    },
    closeModalRegisterSale() {
      this.showModalRegisterSale = false;
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
    async deleteFabric() {
      try {
        const confirm = await this.showGenericConfirmSwal({});

        if (confirm.value) {
          const response = await this.A_DELETE_FABRIC(this.idParam);

          if (response.status == 200) {
            this.showGenericToast({ type: "delete" });

            this.$router.push({
              name: "app-provider-my-posts-fabrics",
            });
          }
        }
      } catch (error) {
        ths.removePreloader();
        this.showErrorToast({ text: error });

        throw error;
      }
    },
  },
  async created() {
    await Promise.all([this.getFabric(), this.getFabricImages()]);
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