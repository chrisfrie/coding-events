import axios from "axios";

export function createEvent(event) {
  return axios.post(process.env.VUE_APP_API_URL + "/events", event);
}

export function getEvents() {
  return axios.get(process.env.VUE_APP_API_URL + "/events", {
    params: {
      _sort: "date:ACS",
      date_gt: new Date(),
    },
  });
}
