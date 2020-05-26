<template>
  <div class="Edit_Smoothie">
    <v-dialog v-model="dialog" width="800">
      <template v-slot:activator="{ on }">
        <v-btn color="secondary" dark small fab absolute bottom right v-on="on">
          <v-icon small>mdi-pencil</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Edit Smoothie
        </v-card-title>

        <v-form @submit.prevent="update">
          <v-container class="pa-5">
            <v-row>
              <v-col cols="12" sm="4">
                <v-text-field
                  label="Smoothie"
                  type="text"
                  v-model="smoothie.title"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-combobox
                  v-model="smoothie.ingredients"
                  chips
                  clearable
                  label="Ingredients"
                  multiple
                >
                  <template v-slot:selection="{ item }">
                    <v-chip close @click:close="remove(item)">
                      <span>{{ item }}</span>
                    </v-chip>
                  </template>
                </v-combobox>
              </v-col>
            </v-row>
          </v-container>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="update">
              Update
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import db from "@/firebase";
import slugify from 'slugify'

export default {
  name: "edit",
  props: ["smoothie"],
   data() {
            return {
                dialog: false,
                feedback: null,

            };
        },
  methods: {
    update() {
      if (this.smoothie.title) {
        this.feedback = null;

        this.smoothie.slug = slugify(this.smoothie.title, {
          replacement: "-",
          remove: /[$*_~.()'"!\-:@]?/g,
          lower: true,
        });

        db.collection("smoothies").doc(this.smoothie.id)
          .update({
            title: this.smoothie.title,
            slug: this.smoothie.slug,
            ingredients: this.smoothie.ingredients,
          })
          .then(() => {
            
            this.dialog = false;
          })
          .catch((err) => {
            console.log(err);

            this.feedback = err.message;
          });
      } else {
        this.feedback = "You must eneter a Title";
      }
      console.log(this.Smoothie);
    },
    remove(item) {
      this.smoothie.ingredients.splice(
        this.smoothie.ingredients.indexOf(item),
        1
      );
    },
  },
};
</script>

<style></style>
