
const tours = [
  "Bamboo rafting and Montego Bay highlights & shopping",
  "Blue Hole + Dunns River Falls, Ocho Rios",
  "Rick’s Cafe + Negril Beach",
  "South Coast tour",
  "ATV + horseback riding, Montego Bay",
  "Dunn’s River + catamaran cruise",
  "Luminous Lagoon + rafting, Falmouth",
  "Montego Bay nightlife tour",
  "Montego Bay airport to Montego Bay hotels",
  "Montego Bay airport to Falmouth hotels",
  "Montego Bay airport to Negril hotels",
  "Montego Bay airport to Ocho Rios hotels",
  "Montego Bay airport to Grand Palladium",
  "Bob Marley, St. Ann",
  "Clear kayak photoshoot",
  "MBJ airport to Princess Grand",
  "Doctor’s Cave Beach from Montego Bay cruise port"
];

const prices = [
  ["Hip Strips, Sandals Mo-bay", "15.00", "4.00"],
  ["Downtown Montego Bay, Sandals Royal, Riu Mo-Bay", "20.00", "5.00"],
  ["Coyaba, Ironshore Residential Area", "25.00", "6.00"],
  ["Holiday Inn, Half Moon, Coral Gardens", "30.00", "7.00"],
  ["Spring Farm Hilton Rose Hall Reading Secrets Sunset", "35.00", "9.00"],
  ["Iberostar", "40.00", "10.00"],
  ["Round Hill", "45.00", "12.00"],
  ["Tryall", "50.00", "13.00"],
  ["Falmouth, Royalton, Grand Palladium, Lucea", "60.00", "15.00"],
  ["Duncans", "65.00", "16.00"],
  ["Braco", "80.00", "20.00"],
  ["Sav-la-mar, Discovery Bay, Bluefields", "90.00", "22.00"],
  ["Negril, Runaway Bay, New Market", "100.00", "25.00"],
  ["Whitehouse", "110.00", "27.00"],
  ["Ocho Rios, Browns Town, Black River", "120.00", "30.00"],
  ["Boscobel", "130.00", "32.00"],
  ["Alexandria, Oracabessa", "140.00", "35.00"],
  ["Santa Cruz, Claremont, Maggotty", "150.00", "35.00"],
  ["Port Maria, Christiana, Treasure Beach Moneague", "160.00", "40.00"],
  ["Mandeville, Ewarton, Southfield, Alligator Pond", "170.00", "45.00"],
  ["Porus", "190.00", "45.00"],
  ["May Pen, Linstead", "220.00", "55.00"],
  ["Spanish Town", "240.00", "60.00"],
  ["Kingston, Annotto Bay", "250.00", "60.00"],
  ["Buff Bay", "260.00", "50.00"],
  ["Port Antonio, Yallahs", "300.00", "70.00"],
  ["Boston, Morant Bay", "330.00", "75.00"],
  ["Manchonial (Portland), Port Morant (St. Thomas)", "350.00", "80.00"]
];

const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("show");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("show"));
});

document.querySelector("#tour-grid").innerHTML = tours
  .map((tour, index) => `
    <article class="tour-card">
      <span>TOUR ${String(index + 1).padStart(2, "0")}</span>
      <h3>${tour}</h3>
    </article>
  `)
  .join("");

document.querySelector("#prices").innerHTML = prices
  .map(price => `
    <tr>
      <td>${price[0]}</td>
      <td>US$${price[1]}</td>
      <td>US$${price[2]}</td>
    </tr>
  `)
  .join("");
