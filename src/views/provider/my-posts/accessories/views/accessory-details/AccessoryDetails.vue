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
            style="height: 250px; overflow: hidden"
          >
            <b-carousel-slide
              v-for="(item, index) of images"
              :key="index"
              :img-src="item.urlImage"
            />
          </b-carousel>

          <p class="pt-1">
            {{ $moment(accessory.created_at).format("L LTS") }}
          </p>
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
              <p>{{ accessory.priceAccesory | formatPen }}</p>
            </b-col>
            <b-col md="6">
              <h5>
                <b> Color de la Tela </b>
              </h5>
              <div
                :style="
                  'width: 100px; height: 30px; border-radius: 7px; background:' +
                  accessory.colorAccessory
                "
              ></div>
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
                @click="redirectToUpdateAccessory"
              >
                Editar avio
              </b-button>
              <b-button variant="danger" size="sm" @click="deleteAccesory(1)">
                Eliminar avio
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
  </div>
</template>

<script>
import { mapActions } from "vuex";

// Components
import ModalUploadImages from "@/views/provider/components/ModalUploadImages.vue";

export default {
  components: {
    ModalUploadImages,
  },
  data() {
    return {
      accessory: {},
      images: [],

      // Modals
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
      A_GET_ACCESSORY: "provMyPostsAccessories/A_GET_ACCESSORY",
      A_GET_IMAGES_BY_ID: "images/A_GET_IMAGES_BY_ID",
    }),
    redirectToUpdateAccessory(id) {
      this.$router.push({
        name: "app-provider-my-posts-accessories-update",
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
      if (saved) {
        this.addPreloader();
        await this.getAccessoryImages();
        this.removePreloader();
      }
      this.showModalUploadImages = false;
    },
    async getAccessory() {
      try {
        this.addPreloader();

        const response = await this.A_GET_ACCESSORY(this.idParam);

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
    async deleteAccesory(id) {
      try {
        const confirm = await this.showGenericConfirmSwal({});

        if (confirm.value) {
          this.addPreloader();

          const response = await this.A_DELETE_ACCESSORY(id);

          if (response.status == 200) {
            this.showGenericToast({ type: "delete" });

            this.$router.push({
              name: "app-provider-my-posts-accessories",
            });
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