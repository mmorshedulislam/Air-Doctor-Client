const jwtSign = (user) => {
  const currentUser = {
    email: user?.email,
  };

  fetch("https://air-doctor-server.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("doctorToken", data.token);
    });
};

export default jwtSign;
