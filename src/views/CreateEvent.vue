<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="submit">
      <input
        v-model="event.title"
        type="text"
        name="title"
        placeholder="Add a Title"
      />
      <input
        v-model="event.date"
        type="text"
        name="date"
        placeholder="Date: mm/dd/yyyy hh:mm"
      />
      <input
        v-model="event.location"
        type="text"
        name="location"
        placeholder="Where is the event going happend?"
      />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import { createEvent } from "@/services/event-service.js";

export default {
  data() {
    return {
      event: {
        title: "",
        details: "",
        location: "",
        date: "",
      },
    };
  },
  methods: {
    async submit() {
      try {
        await createEvent(this.event);
        this.$router.push({ name: "dashboard" });
        // console.log("Created new event", res.data);
      } catch (error) {
        alert("Sorry, couldn´t create entry, please check our inputs");
      }
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  gap: 2em;
  max-width: 500px;
  margin: 0 auto;
}
</style>
