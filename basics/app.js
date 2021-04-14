const app = Vue.createApp({
  data() {
    return {
      books: [
        {
          title:
            'Dog Man: Mothering Heights: From the Creator of Captain Underpants',
          author: 'Dav Pilkey',
          year: '2021',
          img:
            'https://images-na.ssl-images-amazon.com/images/I/51wlUnNtsHL._SX336_BO1,204,203,200_.jpg',
          isFav: true,
          id: 1,
        },
        {
          title: 'The Hill We Climb: An Inaugural Poem for the Country',
          author: 'Amanda Gorman',
          year: '2021',
          img:
            'https://images-na.ssl-images-amazon.com/images/I/41swQHt2NPL._SX360_BO1,204,203,200_.jpg',
          isFav: false,
          id: 2,
        },
        {
          title: 'The Boy, the Mole, the Fox and the Horse',
          author: 'Charlie Mackesy',
          year: '2019',
          img:
            'https://images-na.ssl-images-amazon.com/images/I/418D9yYGB3L._SX369_BO1,204,203,200_.jpg',
          isFav: false,
          id: 3,
        },
      ],
    };
  },
  methods: {
    toggleFav(book) {
      console.log(book);
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount('#app');
