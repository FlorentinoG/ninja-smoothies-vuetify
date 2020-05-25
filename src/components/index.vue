<template>
  <div class="index">
    <v-container class="mt-5">
      <v-row>
        <v-col
          cols="12"
          sm="3"
          v-for="smoothie in smoothies"
          :key="smoothie.id"
        >
          <v-card>
            <v-card-title class="indigo--text">
              {{ smoothie.title }}
              <v-card-actions>
                <v-btn @click="deleteSmoothie(smoothie.id)" color="#ff6347" dark small fab absolute top right>
                  <v-icon small>mdi-delete</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card-title>

            <v-card-text>
              <v-chip
                v-for="(ing, index) in smoothie.ingredients"
                :key="index"
                >{{ ing }}</v-chip
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Index",

  data() {
    return {
      smoothies: [
        {
          title: "Ninja Brew",
          slug: "ninja-brew",
          ingredients: ["bananas", "coffee", "milk"],
          id: "1",
        },
        {
          title: "Morning Mood",
          slug: "morning-mood",
          ingredients: ["mango", "lime", "jucie"],
          id: "2",
        },
      ],
    };
  },
  methods: {
      deleteSmoothie(id){
          this.smoothies = this.smoothies.filter(smoothie => {
              return smoothie.id != id
          })
      }
  },
};
</script>

<style scoped></style>
