<template>
    <div class="addSmoothie">
        <v-dialog v-model="dialog" width="800">
            <template v-slot:activator="{ on }">
                <v-btn absolute dark fab bottom right color="pink" v-on="on">
                    <v-icon>
                        mdi-plus
                    </v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    Add Smoothie
                </v-card-title>

                <v-form @submit.prevent="submit">
                    <v-container class="pa-5">
                        <v-row>
                            <v-col cols="12" sm="4">
                                <v-text-field label="Smoothie" type="text" v-model="Smoothie.title"></v-text-field>
                            </v-col>
                            
                            <v-col cols="12">
                                <v-combobox v-model="Smoothie.ingredients" chips clearable label="Ingredients" multiple>
                                    <template v-slot:selection="{ item }">
                                        <v-chip close
                                            @click:close="remove(item)">
                                            <span>{{ item }}</span>
                                        </v-chip>
                                    </template>
                                </v-combobox>
                            </v-col>
                        </v-row>
                    </v-container>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="submit">
                            Submit
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import db from '@/firebase'
import slugify from "slugify";
    export default {
        name: "addSmoothie",

        data() {
            return {
                dialog: false,
                feedback: null,

                Smoothie: [{
                    title: null,
                    slug: '',
                    ingredients: [],
                }, ],
            };
        },
        methods: {
            submit() {

                if (this.Smoothie.title) {
                    this.feedback = null
                    
                    this.Smoothie.slug = slugify(this.Smoothie.title, {
                        replacement: '-',
                        remove: /[$*_~.()'"!\-:@]?/g,
                        lower: true

                    })

                    db.collection('smoothies').add({
                    title: this.Smoothie.title,
                    slug: this.Smoothie.slug,
                    ingredients: this.Smoothie.ingredients
                })
                .then(() => {
                    this.Smoothie.title = null
                    this.Smoothie.slug = null
                    this.Smoothie.ingredients = []
                    this.dialog = false
                }).catch((err) => {
                    console.log(err)

                    this.feedback = err.message
                });
                } else {
                    this.feedback = 'You must eneter a Title'
                }
                console.log(this.Smoothie)
                
            },
            remove(item){
                this.Smoothie.ingredients.splice(this.Smoothie.ingredients.indexOf(item), 1)
                           }
        },
    };
</script>

<style></style>