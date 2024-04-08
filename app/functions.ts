export const getUsers = async () => {
  try {
    const response = await fetch(
      "https://61q18y3pbe.execute-api.us-west-2.amazonaws.com/dev/getAllUsers",
      {
        method: "GET",
        credentials: "omit",
      }
    );
    const usersRes = await response.json();
    return usersRes;
  } catch (error) {
    console.error("Error fetching users:", error);
    return error;
  }
};
const functionResponse = async (response: Response) => {
  const addRes = await response.json();
  if (response.status == 200) {
    return addRes.message;
  } else if (response.status == 500) {
    return addRes.error.name;
  } else {
    return addRes.error;
  }
};

export const getUser = async (email: string) => {
  try {
    const response = await fetch(
      "https://61q18y3pbe.execute-api.us-west-2.amazonaws.com/dev/getUser?email=" +
        email,
      {
        method: "GET",
        credentials: "omit",
      }
    );
    const bodyRes = await response.json();
    if (response.status == 200) {
      return bodyRes;
    } else if (response.status == 500) {
      return bodyRes.error.name;
    } else {
      return bodyRes.error;
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    return error;
  }
};

export const addUser = async (
  email: string,
  firstName: string,
  lastName: string
) => {
  try {
    const response = await fetch(
      "https://61q18y3pbe.execute-api.us-west-2.amazonaws.com/dev/addUser",
      {
        method: "POST",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
        }),
      }
    );
    return functionResponse(response);
  } catch (error) {
    console.log("Error Adding user:", error);
    return error;
  }
};

export const updateUser = async (
  email: string,
  firstName: string,
  lastName: string
) => {
  try {
    const response = await fetch(
      "https://61q18y3pbe.execute-api.us-west-2.amazonaws.com/dev/updateUser?email=" +
        email,
      {
        method: "PUT",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
        }),
      }
    );
    return functionResponse(response);
  } catch (error) {
    console.log("Error Updating user<<<<<<<<<<<<>>>>>>>>>>>>>:", error);
  }
};

export const deleteUser = async (email: string) => {
  try {
    const response = await fetch(
      "https://61q18y3pbe.execute-api.us-west-2.amazonaws.com/dev/deleteUser?email=" +
        email,
      {
        method: "DELETE",
        credentials: "omit",
      }
    );
    return functionResponse(response);
  } catch (error) {
    console.log("Error Deleting user<<<<<<<<<<<<>>>>>>>>>>>>>:", error);
  }
};
