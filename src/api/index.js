/* eslint-disable */
import { api } from "@/api/config";

export default {
  async getFilms() {
    return await api.get(`/films`).catch(function (error) {
      return error.response;
    });
  },
  async getStarships(page) {
    return await api.get(`/starships/?page=${page}`).catch(function (error) {
      return error.response;
    });
  },

};
