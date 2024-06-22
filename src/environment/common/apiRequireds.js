import axios from "axios";

const handleError = async (error) => {
  if (error?.response?.status === 401) {
    localStorage.clear();
  }
  if (error.code === "ERR_NETWORK") {
    console.log(error);
    window.location.href = "/error";
  }
};

export const postMethod = async (url, entity) => {
  let response;
  await axios
    .post(url, entity)
    .then((result) => {
      response = result;
    })
    .catch((error) => {
      handleError(error);
      response = error;
    });
  return response;
};

export const getMethod = async (url) => {
  let response;
  await axios
    .get(url)
    .then((result) => {
      response = result;
    })
    .catch((error) => {
      handleError(error);
      response = error;
    });
  return response;
};

export const getMethodWithParams = async (url, params) => {
  let response;
  await axios
    .get(url, { params })
    .then((result) => {
      response = result;
    })
    .catch((error) => {
      handleError(error);
      response = error;
    });
  return response;
};

export const putMethod = async (url, entity) => {
  let response;
  await axios
    .put(url, entity)
    .then((result) => {
      response = result;
    })
    .catch((error) => {
      handleError(error);
      response = error;
    });
  return response;
};

export const deleteMethod = async (url) => {
  let response;
  await axios
    .delete(url)
    .then((result) => {
      response = result;
    })
    .catch((error) => {
      handleError(error);
      response = error;
    });
  return response;
};
