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
              <p>{{ fabric.priceService }}</p>
            </b-col>
            <b-col cols="12">
              <b-button variant="outline-primary" size="sm" class="mr-1">
                Cargar fotos
              </b-button>
              <b-button
                variant="outline-primary"
                size="sm"
                class="mr-1"
                @click="openModalUpdateFabric(fabric.idService)"
              >
                Editar tela
              </b-button>
              <b-button variant="danger" size="sm" @click="deleteService">
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

    <modal-update-fabric
      v-if="showModalUpdateFabric"
      :service-code="serviceCodeSelected"
      @onClose="closeModalUpdateFabric"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

// Components
import ModalUpdateFabric from "../update-service/ModalUpdateService.vue";

export default {
  components: {
    ModalUpdateFabric,
  },
  data() {
    return {
      fabric: {},
      images: [],

      serviceCodeSelected: null,

      // Modals
      showModalUpdateFabric: false,
    };
  },
  computed: {
    idParam() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions({
      A_GET_SERVICE_BY_ID: "myPosts/A_GET_SERVICE_BY_ID",
      A_DELETE_SERVICE: "myPosts/A_DELETE_SERVICE",
      A_GET_IMAGES_BY_ID: "images/A_GET_IMAGES_BY_ID",
    }),
    openModalUpdateFabric(id) {
      this.serviceCodeSelected = id;
      this.showModalUpdateFabric = true;
    },
    async closeModalUpdateFabric(saved) {
      if (saved) await this.getFabric();

      this.showModalUpdateFabric = false;
    },
    async getService() {
      try {
        this.addPreloader();

        const response = await this.A_GET_SERVICE_BY_ID(this.idParam);

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
        const response = await this.A_GET_IMAGES_BY_ID(this.idParam);

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
          const response = await this.A_DELETE_SERVICE(this.idParam);

          if (response.status == 200) {
            this.showGenericToast({ type: "delete" });

            this.$router.push({ name: "app-my-posts-services" });
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

<style>
</style>