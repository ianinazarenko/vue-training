<template>
  <div class="chat container">
    <h2 class="center teal-text">
      Ninja Chat <i>({{ name.toUpperCase() }})</i>
    </h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message of messages" :key="message.id">
            <span class="teal-text"
              ><b>{{ message.name }}</b></span
            ><span class="grey-text text-darken-3">{{ message.content }}</span
            ><span class="grey-text time">{{ message.timestamp }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
  import NewMessage from '@/components/NewMessage'
  import db from '@/data/init'
  import moment from 'moment'

  export default {
    name: 'Chat',
    components: { NewMessage },
    props: ['name'],
    data() {
      return {
        messages: [],
      }
    },
    created() {
      db.collection('messages')
        .orderBy('timestamp')
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              const doc = change.doc
              this.messages.push({
                id: doc.id,
                name: doc.data().name,
                content: doc.data().content,
                timestamp: moment(doc.data().timestamp).format('lll'),
              })
            }
          })
        })
    },
  }
</script>

<style>
  .chat h2 {
    font-size: 3.6em;
    margin-bottom: 60px;
  }

  .chat span {
    font-size: 1.4em;
    margin-right: 16px;
  }

  .chat .time {
    display: block;
    font-size: 0.8em;
    margin-bottom: 12px;
  }

  .messages {
    max-height: 600px;
    min-height: 600px;
    overflow-y: scroll;
    scrollbar-color: teal #ddd;
    scrollbar-width: thin;
  }

  .messages::-webkit-scrollbar {
    width: 3px;
  }

  .messages::-webkit-scrollbar-track {
    background: #ddd;
  }

  .messages::-webkit-scrollbar-thumb {
    background-color: teal;
  }
</style>
