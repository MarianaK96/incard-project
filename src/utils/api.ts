import { dashboardData } from "src/data/dashboardData";
import { loginDataSuccess, loginDataFailure } from "src/data/loginData";

export const api = () => {
  return {
    baseUrl: `${process.env.SERVER_ENDPOINT}`,
  };
};

export const apiHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/js",
    },
  };
};

export const getGraphData = () => {
  //   let response = await fetch(`${api().baseUrl}/graph-data`, {
  //     method: "GET",
  //     ...apiHeaders(),
  //     Authorization: `Bearer ${localstorage.getItem('auth-token')}`
  //   });

  // Mocking backend response
  let response = {
    body: {
      data: dashboardData,
    },
  };

  return response;
};

export const postLogin = async (data: { email: any; password: any }) => {
  //   let response = await fetch(`${api().baseUrl}/graph-data`, {
  //     method: "POST",
  //     ...apiHeaders(),
  //     body: JSON.stringify(data)
  //   });

  // Mocking backend response

  const requiredUser = {
    username: "jane@incard.com",
    password: "fooBar123",
  };

  if (
    data.email !== requiredUser.username ||
    data.password !== requiredUser.password
  ) {
    return loginDataFailure;
  }
  return loginDataSuccess;
};
