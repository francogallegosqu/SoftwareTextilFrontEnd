<template>
  <div>
    <b-card>
      <b-row>
        <b-col md="4">
          <b-carousel id="carousel-example-generic" controls indicators>
            <b-carousel-slide
              :img-src="require('@/assets/images/slider/01.jpg')"
            />
            <b-carousel-slide
              :img-src="require('@/assets/images/slider/02.jpg')"
            />
            <b-carousel-slide
              :img-src="require('@/assets/images/slider/03.jpg')"
            />
          </b-carousel>

          <p class="pt-1">Creación: Sun Apr 03 2022</p>
        </b-col>
        <b-col md="8">
          <h2>Gazuma Pima</h2>
          <p>
            Se vende tela por rollo de 20 kg de gamuza pima 100% algodon en
            30/1, 40/1 y 50/1
          </p>

          <hr />

          <b-row>
            <b-col md="6">
              <h5>
                <b> Composicion de la Tela </b>
              </h5>
              <p>100% Algodon</p>
            </b-col>
            <b-col md="6">
              <h5>
                <b> Ancho de la Tela </b>
              </h5>
              <p>160</p>
            </b-col>
            <b-col md="6">
              <h5>
                <b> Metros x Kg </b>
              </h5>
              <p>0.875</p>
            </b-col>
            <b-col md="6">
              <h5>
                <b> Precio </b>
              </h5>
              <p>1720</p>
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
              <p>345</p>
            </b-col>
            <b-col cols="12">
              <b-button variant="outline-primary" size="sm" class="mr-1">
                Cargar fotos
              </b-button>
              <b-button variant="outline-primary" size="sm" class="mr-1">
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
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>