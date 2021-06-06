<template>
  <v-container>
    <v-row style="    padding: 107px;">
      <v-col
        cols="5"
        style="height:500px; border: solid 1px; border-radius: 10px"
      >
        <v-img
          style="    width: 100px;height:100px;margin-left:90px;
    position: relative;
    left: 14%;
"
          src="../../assets/images/Group_10.png"
        />
        <h1>Personal</h1>
        <div style="position:relative;left: 40%; padding-top:20px">
          <v-row>
            <v-col cols="2"
              ><v-img src="../../assets/images/chatbubbles.png" width="50px"
            /></v-col>
            <v-col cols="10"
              ><span
                >contact <br />
                sales</span
              ></v-col
            >
          </v-row>
        </div>
        <v-row>
          <v-col cols="2"
            ><v-img
              src="../../assets/images/Yes.png"
              width="20px"
              style="margin-left:25px"
          /></v-col>
          <v-col cols="10"
            ><span style="margin-left:20px">Locale fresh plants</span></v-col
          >
          <v-col>
            <v-img
              style="    width: 200px;height:170px;margin-left:40px;
    position: relative;
    left: 14%;
"
              src="../../assets/images/Capture.png"
          /></v-col>
        </v-row>

        <v-row style="padding-top:30px;"> </v-row>
      </v-col>
      <v-col cols="2"> </v-col>
      <v-col
        cols="5"
        style="height:500px; border: solid 1px; border-radius: 10px"
      >
        <v-img
          style="    width: 286px;
    position: relative;
    left: 14%;
"
          src="../../assets/images/custumer.png"
        />
        <h1>Entreprise</h1>
        <div style="position:relative;left: 40%; padding-top:20px">
          <v-row>
            <v-col cols="2"
              ><v-img src="../../assets/images/chatbubbles.png" width="50px"
            /></v-col>
            <v-col cols="10"
              ><span
                >contact <br />
                sales</span
              ></v-col
            >
          </v-row>
        </div>
        <v-row>
          <v-col cols="2"
            ><v-img src="../../assets/images/Yes.png" width="20px"
          /></v-col>
          <v-col cols="10"
            ><span>vertical farms with ai implimentation</span></v-col
          >
        </v-row>
        <v-row>
          <v-col cols="2"
            ><v-img
              src="../../assets/images/Icon_weather-raindrop.png"
              width="10px"
          /></v-col>
          <v-col cols="10"><span>calculate water consumption</span></v-col>
        </v-row>
        <v-row style="padding-top:30px;">
          <v-cols cols="4">
            <span style="margin:10px">surface m² :</span></v-cols
          >
          <v-cols cols="8"
            ><v-text-field
              v-model="surface"
              style="padding-left:40px ; height:5px"
              rounded
              dense
              filled
            ></v-text-field
          ></v-cols>
        </v-row>
        <v-row style="padding-top:30px;">
          <v-cols cols="4">
            <span style="margin:10px">plant type :</span></v-cols
          >
          <v-cols cols="8">
            <v-combobox
              style="padding-left:40px ;width: 265px;"
              v-model="select"
              :items="items"
              rounded
              dense
              filled
            ></v-combobox>
          </v-cols>
        </v-row>
        <v-btn @click="CalculateConsumption">calculate</v-btn>
        <span style="padding-left:100px">{{ result }}</span>
      </v-col>
    </v-row>
    <h1>Our Products</h1>
    <div
      style="height:2px; background-color:black;width:240px;margin: auto"
    ></div>
    <h1>vertical farming</h1>
    <v-img style="margin-top: 20px" src="../../assets/images/vertica.jpg" />
    <v-row style="margin-top:20px">
      <v-col cols="4">
        <v-card height="200">
          <v-img
            height="100%"
            src="https://images-ext-1.discordapp.net/external/lDu7PfyLUXpVUvD6zdrsOkXi-Mfyf4MSI_Wq3BKJHtE/https/worldfinancialreview.com/wp-content/uploads/2017/11/vertical-farming-2.jpg?width=935&height=701"
          />
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card height="200">
          <v-img
            height="100%"
            src="https://miro.medium.com/max/1200/1*VNidPov_CCG3E6Bdu8opUA.jpeg"
          />
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card height="200">
          <v-img
            height="100%"
            src="https://images-ext-2.discordapp.net/external/YFvHxcQccNNYVtlju48XK8FIZjw16CiNE6p8YrnbKhE/https/precisionagricultu.re/wp-content/uploads/2019/09/dji-4204804_960_720-620x330.jpg"
          />
        </v-card>
      </v-col>
    </v-row>
    <v-btn
      color="#BC6C25"
      style="display: block;
      margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 40%;"
    >
      <span style="color:white">Comander</span>
    </v-btn>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      select: ["Onion"],
      items: ["Lettuce", "Pepper", "Tomatoe", "Carrot"],
      plants: [
        { name: "Lettuce", consumption: 9.25 },
        { name: "Pepper", consumption: 5.6 },
        { name: "Tomatoe", consumption: 9 },
        { name: "Carrot", consumption: 3.5 },
        { name: "Onion", consumption: 3.7 },
      ],
      surface: 1,
      result: "",
    };
  },
  methods: {
    CalculateConsumption() {
      console.log(this.select);
      let totalConsumption;
      let selectedPlant = this.plants.filter(
        (plant) => plant.name == this.select
      );
      if (selectedPlant[0] != undefined) {
        totalConsumption = selectedPlant[0].consumption * this.surface * 53;
        this.result = Math.floor(totalConsumption) + " litres/year";
      } else {
        this.result = "plant doesn't exist in database";
      }
    },
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
  color: #bc6c25;
  font-weight: bold;
  padding-top: 10px;
}
</style>
