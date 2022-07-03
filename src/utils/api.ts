import { dashboardData } from "src/data/dashboardData";
// Use env.vars

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
  //   });

  // Mocking backend response
  let response = {
    body: {
      data: dashboardData,
    },
  };

  console.log(" respones : ", response);

  return response;
};
