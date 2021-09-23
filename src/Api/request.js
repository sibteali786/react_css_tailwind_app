const requestUser = async () => {
  try {
    const res = await fetch(`https://reqres.in/api/users?page=1`);
    const { data } = await res.json();
    const Users = data.map((user) => ({
      id: user.id,
      email: user.email,
      f_name: user.first_name,
      l_name: user.last_name,
      image: user.avatar,
    }));
    return Users;
  } catch (err) {
    console.error(err.message);
  }
};
export default requestUser;
