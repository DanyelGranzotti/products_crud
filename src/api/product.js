import * as apiRequireds from "../environment/common/apiRequireds";
import { URLS } from "../environment/common/urls";

export const getProduct = async (page = 0, size = 5, sort = "name") => {
  let url = `${URLS.PRODUCT}`;
  url += `?page=${page}&size=${size}&sort=${sort}`;

  const response = await apiRequireds.getMethod(url);
  return response;
};

export const postProduct = async (product) => {
  const response = await apiRequireds.postMethod(URLS.PRODUCT, product);
  return response;
};
