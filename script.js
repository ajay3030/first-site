var eggDetails = [
    {
      title: "White Eggs",
      text: "White Eggs are liad by high breeding white hens and are equal in nutrition but smaller in size to that of brown hens and due to high breeding of white hens most commonly used and found eggs are white eggs",
      price: "10",
    },
    {
      title: "Brown Eggs",
      text: "Brown Eggs are Laid By Red Hens and are bigger in size than white eggs. Brown Eggs are Expensive also due to lesser of breeding in red hens as comapred to white hens",
      price: "15",
    },
    {
      title: "Special Eggs",
      text: "Special Variety Eggs comes from genitically modified hens which are produced in labs and give eggs that are more than twice the nutrition of a normal eggs these eggs don't look any different but are rich in protein and are costly",
      price: "20",
    },
  ];
  const modalImage = (source, id) => {
    document.getElementById("modalBlur").style.visibility = "visible";
    document.getElementById("captionTitle").innerText = eggDetails[id].title;
    document.getElementById("captionText").innerText = eggDetails[id].text;
    document.getElementById("captionPrice").innerText =
      "Price Per Tray (24Pcs): $" + eggDetails[id].price;
    document.getElementById("eggImage").src = source;
  };
  const hideModal = () => {
    document.getElementById("modalBlur").style.visibility = "hidden";
    document.getElementById("eggImage").src = "#";
  };
  