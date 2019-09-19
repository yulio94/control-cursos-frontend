const BASE_URL = "http://localhost:8000";

async function callAPI(endpoint, options = {}) {
  options.headers = {
    "content-type": "application/json",
    Accept: "application/json"
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  auth: {
    login(user, pass) {
      return callAPI("/token-auth", {
        method: "POST",
        body: JSON.stringify({ user, pass })
      });
    },
    logout() {
      localStorage.removeItem("token");
    }
  },
  catedraticos: {
    list() {
      return callAPI("/catedraticos");
    },

    create(catedratico) {
      return callAPI("/catedraticos", {
        method: "POST",
        body: JSON.stringify(catedratico)
      });
    },

    read(id) {
      return callAPI(`/catedraticos/${id}`);
    },

    update(id, updates) {
      return callAPI(`/catedraticos/${id}`, {
        method: "PUT",
        body: JSON.stringify(updates)
      });
    },

    remove(id) {
      return callAPI(`/catedraticos/${id}`, {
        method: "DELETE"
      });
    }
  }
};

export default api;
