export const signup = (formData) => {
  // 
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  });
};

export const login = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: {
      user
    }
  });
};

export const logout = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};
