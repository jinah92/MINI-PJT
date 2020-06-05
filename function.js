const getData = async () => {
  try {
    alert("start");
    let result = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(result);
    const showText = document.getElementById("showText");
    const array = result.data;
    array.forEach((element) => {
      document.getElementById(
        "showText"
      ).innerHTML += `<li><strong>${element.title}</strong> - ${element.body}</li>`;
    });
  } catch (err) {
    console.log(err);
  }
};
