<template>
  <v-carousel
    cycle
    show-arrows="hover"
    height="400"
    hide-delimiters
    progress="red">
    <v-carousel-item v-for="(item,i) in slides" :key="i" :src="item.src" cover
      ><slot :index="i"></slot
    ></v-carousel-item>
  </v-carousel>
</template>

<script setup>
  import {ref} from 'vue';

    const slides = ref([
        {
            src: 'https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/331717636_573404524742698_5087273115374914680_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeG9_zj9kyYFpYHB8Q7p6oe9lw9jKSPV53-XD2MpI9Xnf8DeqYZE2cV8sOHngTozbqk&_nc_ohc=jpEjifDVvG4AX9F0tQk&_nc_ht=scontent.fbog4-1.fna&oh=00_AfByBEwYx6Zf5O5QdFbE7mEzyj76piunuDENUWwQn3HU-w&oe=65BDBA83',
        },
        {
            src: 'https://scontent.fbog4-2.fna.fbcdn.net/v/t31.18172-8/17504266_1603376729690563_4427257886941544040_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=Z70cyt9zXwkAX8lRKvc&_nc_ht=scontent.fbog4-2.fna&oh=00_AfBh9cKWVrIhw-OGo_RvZPUxqf3Ogo00KoalbQkW-W8Heg&oe=65D8192A',
        },
        {
            src: 'https://scontent.fbog4-1.fna.fbcdn.net/v/t31.18172-8/11052022_1018825364812372_563942574491331374_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=J3gOD_2cA9cAX-LxAwS&_nc_ht=scontent.fbog4-1.fna&oh=00_AfBCdkBHEDqX8NPLdUdhSLqGdFCjBFcnCp50hAZ-Vp0fng&oe=65D81E38',
        },
        {
            src: 'https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/289670524_399129988906174_5275446146119067894_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9534ce&_nc_ohc=y3qjVS2pKH0AX8su0JW&_nc_oc=AQns4bEUfH70HE-ONzRSFJ64eZAEKTRgBfcjLffb5kQ_ukEP-1xjteE-D4GoVzXpQmo&_nc_ht=scontent.fbog4-2.fna&oh=00_AfBJ_ReTgo0ehM0mRJUlrF7I5hOLtdLi-CaiPjh6y1czVg&oe=65B6624D',
        },
    ]);
</script>

<style lang="scss" scoped></style>
