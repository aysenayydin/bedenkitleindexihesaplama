//Beden kitle indexi hesapla

document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Formun sayfayı yenilemesini engeller

  let kilo = Number(document.getElementById("kilo").value);
  let boy = Number(document.getElementById("boy").value);

  let sonuc = kilo / (boy * boy);
  let mesaj = "";

  if (sonuc < 18.5) {
    mesaj = "İdeal kilonun altında: " + sonuc.toFixed(2);
  } else if (sonuc >= 18.5 && sonuc <= 24.9) {
    mesaj = "İdeal kiloda: " + sonuc.toFixed(2);
  } else if (sonuc >= 25 && sonuc <= 29.9) {
    mesaj = "İdeal kilonun üstünde: " + sonuc.toFixed(2);
  } else if (sonuc >= 30 && sonuc <= 39.9) {
    mesaj = "İdeal kilonun çok üstünde (Obez): " + sonuc.toFixed(2);
  } else if (sonuc >= 40) {
    mesaj = "İdeal kilonun çok üstünde (Morbid Obez): " + sonuc.toFixed(2);
  }

  document.getElementById("sonuc").textContent = mesaj;
});
