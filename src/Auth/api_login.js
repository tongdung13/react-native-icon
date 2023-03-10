import ApiManager from '../ApiManager/ApiManager';

export const api_login = async data => {
  try {
    const result = await ApiManager('/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.data;
  }
};

export const api_logout = async data => {
  try {
    const result = await ApiManager('/logout', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.data;
  }
};
