import { appConfig, DEFAULT_HEADER } from "../config/app";

export const httpGetRequest = async (endpoint: string, heather: any) => {
  const response = await fetch(`${appConfig.baseUrl}${endpoint}`, {
    method: "GET",
    headers: { ...DEFAULT_HEADER, ...heather },
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  } else {
    console.log(result);
    return null;
  }
};
