//! js created
const renderAnimal = (res) => {
  const { name, latin_name, animal_type, geo_range, image_link, habitat } =
    res.data;
  display.innerHTML = `<ul>
    <li><img src="${image_link}" alt="img" width="50%"/></li>
    <li>Name: ${name}</li>
    <li>Type: ${animal_type}</li>
    <li>Geo Range: ${geo_range}</li>
    <li>Habitat: ${habitat}</li>
    <li>Latin Name: ${latin_name}</li>
  </ul>`;
};
