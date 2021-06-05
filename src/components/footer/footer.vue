<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class=" lighten-1"
      style="background-color: #021321; width:100%; padding:20px"
    >
      <v-row>
        <v-col cols="12" md="3" sm="12" class="d-none d-lg-block">
          <v-card-text>
            <span>payment methods</span> <br />
            <v-row style="margin-top:10px;">
              <v-col
                v-for="(icon, index) in icons"
                :key="index"
                cols="12"
                md="2"
              >
                <span>
                  <v-img :src="icon.src" />
                </span>
              </v-col>
            </v-row>
          </v-card-text>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-card-text>
            <v-row>
              <v-col
                style="height: 30px;"
                v-for="(ctn, index) in contactBtn"
                :key="index"
                cols="12"
              >
                <v-btn text plain
                  ><span style="color:#999; height: 10px;">{{
                    ctn
                  }}</span></v-btn
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-card-text>
            <v-row>
              <v-col
                style="height: 30px;"
                v-for="(legacy, index) in legacyBtn"
                :key="index"
                cols="12"
              >
                <v-btn text plain
                  ><span style="color:#999; height: 10px;">{{
                    legacy
                  }}</span></v-btn
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-col>
        <v-col cols="12" md="3" sm="12" class="d-sm-none d-md-flex">
          <v-card-text>
            Follow us on social media <br />
            <v-row>
              <v-btn
                v-for="(social, index) in socialicons"
                :key="index"
                class="my-5 mx-1 white--text"
                icon
              >
                <v-icon size="24px">
                  {{ social }}
                </v-icon>
              </v-btn>
            </v-row>
            <span>languages</span>
            <v-row class="my-4">
              <v-select
                :items="items"
                label="language"
                dense
                outlined
                rounded-0
              ></v-select>
            </v-row>
          </v-card-text>
        </v-col>
      </v-row>

      <v-card-text class="grey--text">
        <v-img
          class="my-4"
          width="100px"
          src="../../assets/images/icons/artify_logo_white.webp"
        />
        <span>
          Copyright ©{{ new Date().getFullYear() }} Artify Inc. All rights
          reserved</span
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        src: require("../../assets/images/icons/laposte.webp"),
      },
      {
        src: require("../../assets/images/icons/mastercard.webp"),
      },
      {
        src: require("../../assets/images/icons/visa.webp"),
      },
      {
        src: require("../../assets/images/icons/sobflousLogoFlat.webp"),
      },
      {
        src: require("../../assets/images/icons/paymeeLogo.webp"),
      },
      {
        src: require("../../assets/images/icons/runpayLogo.webp"),
      },
      {
        src: require("../../assets/images/icons/viamobile_logo_white.webp"),
      },
      {
        src: require("../../assets/images/icons/orangeLogo.webp"),
      },
    ],
    contactBtn: ["About us", "Our Partners", "FAQ", "Contact us"],
    legacyBtn: [
      "Cookies policy",
      "Legal Notice",
      "Terms of use",
      "Privacy policy",
    ],
    socialicons: [
      "mdi-instagram",
      "mdi-facebook",
      "mdi-youtube",
      "mdi-twitter",
    ],
    items: ["Français", "English", "العة"],
  }),
};
</script>
