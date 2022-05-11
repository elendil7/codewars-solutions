function rakeGarden(garden) {
  return garden.split(" ").map(v=>!`gravelrock`.includes(v)?`gravel`:v).join(" ")
}
