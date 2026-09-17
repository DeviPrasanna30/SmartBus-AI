/* =========================================================
   SMARTBUS AI
   SEARCH PAGE ONLY
   Minimum 5 buses for ANY FROM -> TO selection
========================================================= */


/* =========================================================
   STATIONS
========================================================= */

const stations = [
    "Kakinada Complex",
    "Sarpavaram Junction",
    "Samalkota",
    "Peddapuram",
    "Pithapuram",
    "Annavaram",
    "Tuni",

    "Karapa",
    "Draksharamam",
    "Ramachandrapuram",
    "Mandapeta",
    "Amalapuram",
    "Yanam",

    "Ravulapalem",
    "Anaparthi",
    "Biccavolu",
    "Dwarapudi",

    "Rajahmundry Complex",
    "Kovvur",
    "Nidadavole",
    "Tadepalligudem",
    "Eluru",
    "Bhimavaram",

    "Surampalem Complex",
    "Jaggampeta",
    "Eleswaram",
    "Koripalli",

    "Pithapuram Old Bus Stand"
];


/* =========================================================
   REAL DEMO ROUTES
========================================================= */

const routes = [

    {
        id: "KKD-RJY",

        stops: [
            "Kakinada Complex",
            "Samalkota",
            "Anaparthi",
            "Biccavolu",
            "Dwarapudi",
            "Rajahmundry Complex"
        ],

        buses: [
            ["SB201", "EXPRESS", "05:00 AM", "06:45 AM", 35],
            ["SB202", "ULTRA PALLEVELUGU", "06:30 AM", "08:00 AM", 48],
            ["SB203", "PALLEVELUGU", "08:00 AM", "09:50 AM", 55],
            ["SB204", "EXPRESS", "09:30 AM", "11:00 AM", 62],
            ["SB205", "ULTRA PALLEVELUGU", "11:00 AM", "12:40 PM", 50],
            ["SB206", "EXPRESS", "01:00 PM", "02:30 PM", 70],
            ["SB207", "PALLEVELUGU", "03:00 PM", "04:45 PM", 45],
            ["SB208", "EXPRESS", "05:00 PM", "06:30 PM", 58],
            ["SB209", "ULTRA PALLEVELUGU", "07:00 PM", "08:40 PM", 42],
            ["SB210", "EXPRESS", "09:00 PM", "10:30 PM", 50]
        ]
    },


    {
        id: "RJY-KKD",

        stops: [
            "Rajahmundry Complex",
            "Dwarapudi",
            "Biccavolu",
            "Anaparthi",
            "Samalkota",
            "Kakinada Complex"
        ],

        buses: [
            ["SB301", "EXPRESS", "05:15 AM", "06:45 AM", 48],
            ["SB302", "PALLEVELUGU", "06:45 AM", "08:30 AM", 55],
            ["SB303", "ULTRA PALLEVELUGU", "08:15 AM", "10:00 AM", 62],
            ["SB304", "EXPRESS", "10:00 AM", "11:30 AM", 50],
            ["SB305", "PALLEVELUGU", "12:00 PM", "01:45 PM", 70],
            ["SB306", "EXPRESS", "02:00 PM", "03:30 PM", 45],
            ["SB307", "ULTRA PALLEVELUGU", "04:00 PM", "05:45 PM", 58],
            ["SB308", "EXPRESS", "06:00 PM", "07:30 PM", 42],
            ["SB309", "PALLEVELUGU", "08:00 PM", "09:45 PM", 50]
        ]
    },


    {
        id: "KKD-SUR",

        stops: [
            "Kakinada Complex",
            "Sarpavaram Junction",
            "Samalkota",
            "Peddapuram",
            "Surampalem Complex"
        ],

        buses: [
            ["SB001", "PALLEVELUGU", "05:30 AM", "06:40 AM", 35],
            ["SB002", "ULTRA PALLEVELUGU", "07:00 AM", "08:10 AM", 48],
            ["SB003", "EXPRESS", "08:30 AM", "09:30 AM", 50],
            ["SB004", "PALLEVELUGU", "10:00 AM", "11:15 AM", 55],
            ["SB005", "ULTRA PALLEVELUGU", "12:00 PM", "01:10 PM", 62],
            ["SB006", "EXPRESS", "02:30 PM", "03:30 PM", 45],
            ["SB007", "PALLEVELUGU", "04:30 PM", "05:45 PM", 58],
            ["SB008", "EXPRESS", "06:30 PM", "07:30 PM", 70],
            ["SB009", "PALLEVELUGU", "08:00 PM", "09:15 PM", 42],
            ["SB010", "EXPRESS", "09:30 PM", "10:30 PM", 50]
        ]
    },


    {
        id: "SUR-KKD",

        stops: [
            "Surampalem Complex",
            "Peddapuram",
            "Samalkota",
            "Sarpavaram Junction",
            "Kakinada Complex"
        ],

        buses: [
            ["SB101", "PALLEVELUGU", "05:45 AM", "06:55 AM", 42],
            ["SB102", "EXPRESS", "07:30 AM", "08:30 AM", 50],
            ["SB103", "ULTRA PALLEVELUGU", "09:00 AM", "10:10 AM", 55],
            ["SB104", "PALLEVELUGU", "11:00 AM", "12:15 PM", 62],
            ["SB105", "EXPRESS", "01:30 PM", "02:30 PM", 48],
            ["SB106", "PALLEVELUGU", "03:30 PM", "04:45 PM", 70],
            ["SB107", "EXPRESS", "05:30 PM", "06:30 PM", 45],
            ["SB108", "PALLEVELUGU", "07:30 PM", "08:45 PM", 58],
            ["SB109", "EXPRESS", "09:00 PM", "10:00 PM", 50]
        ]
    },


    {
        id: "KKD-AML",

        stops: [
            "Kakinada Complex",
            "Ramachandrapuram",
            "Yanam",
            "Amalapuram"
        ],

        buses: [
            ["SB401", "PALLEVELUGU", "05:30 AM", "07:15 AM", 35],
            ["SB402", "ULTRA PALLEVELUGU", "07:00 AM", "08:40 AM", 48],
            ["SB403", "EXPRESS", "09:00 AM", "10:30 AM", 55],
            ["SB404", "PALLEVELUGU", "11:00 AM", "12:40 PM", 62],
            ["SB405", "EXPRESS", "01:30 PM", "03:00 PM", 50],
            ["SB406", "ULTRA PALLEVELUGU", "04:00 PM", "05:40 PM", 70],
            ["SB407", "EXPRESS", "06:30 PM", "08:00 PM", 45],
            ["SB408", "PALLEVELUGU", "08:30 PM", "10:00 PM", 58]
        ]
    },


    {
        id: "AML-KKD",

        stops: [
            "Amalapuram",
            "Yanam",
            "Ramachandrapuram",
            "Kakinada Complex"
        ],

        buses: [
            ["SB501", "PALLEVELUGU", "05:45 AM", "07:30 AM", 42],
            ["SB502", "EXPRESS", "07:30 AM", "09:00 AM", 50],
            ["SB503", "ULTRA PALLEVELUGU", "09:30 AM", "11:00 AM", 55],
            ["SB504", "PALLEVELUGU", "12:00 PM", "01:45 PM", 62],
            ["SB505", "EXPRESS", "02:30 PM", "04:00 PM", 48],
            ["SB506", "ULTRA PALLEVELUGU", "04:30 PM", "06:00 PM", 70],
            ["SB507", "EXPRESS", "06:30 PM", "08:00 PM", 45],
            ["SB508", "PALLEVELUGU", "08:30 PM", "10:00 PM", 58]
        ]
    },


    {
        id: "KKD-KOR",

        stops: [
            "Kakinada Complex",
            "Draksharamam",
            "Ramachandrapuram",
            "Koripalli"
        ],

        buses: [
            ["SB601", "ULTRA PALLEVELUGU", "06:00 AM", "07:30 AM", 35],
            ["SB602", "PALLEVELUGU", "08:00 AM", "09:30 AM", 48],
            ["SB603", "EXPRESS", "10:00 AM", "11:20 AM", 55],
            ["SB604", "PALLEVELUGU", "01:00 PM", "02:30 PM", 62],
            ["SB605", "EXPRESS", "03:30 PM", "05:00 PM", 50],
            ["SB606", "ULTRA PALLEVELUGU", "06:00 PM", "07:30 PM", 70],
            ["SB607", "PALLEVELUGU", "08:30 PM", "10:00 PM", 45]
        ]
    }

];


/* =========================================================
   LOAD STATIONS
========================================================= */

function loadStations() {

    const from =
        document.getElementById("fromStation");

    const to =
        document.getElementById("toStation");

    if (!from || !to) return;

    from.innerHTML = "";
    to.innerHTML = "";

    stations.forEach(station => {

        const option1 =
            document.createElement("option");

        option1.value = station;
        option1.textContent = station;

        from.appendChild(option1);


        const option2 =
            document.createElement("option");

        option2.value = station;
        option2.textContent = station;

        to.appendChild(option2);

    });


    from.value = "Kakinada Complex";
    to.value = "Rajahmundry Complex";
}


/* =========================================================
   FIND EXACT ROUTE
========================================================= */

function findExactRoutes(from, to) {

    const matches = [];

    routes.forEach(route => {

        const fromIndex =
            route.stops.indexOf(from);

        const toIndex =
            route.stops.indexOf(to);


        if (
            fromIndex !== -1 &&
            toIndex !== -1 &&
            fromIndex < toIndex
        ) {

            matches.push({
                route: route,
                fromIndex: fromIndex,
                toIndex: toIndex
            });

        }

    });

    return matches;
}


/* =========================================================
   CREATE FALLBACK ROUTE
   This is the important fix.

   Even if user selects stations which are not
   together in our demo route list, buses will still show.
========================================================= */

function createFallbackRoute(from, to) {

    return {

        id: "DEMO-" +
            from.substring(0,3).toUpperCase() +
            "-" +
            to.substring(0,3).toUpperCase(),

        stops: [
            from,
            "En Route",
            to
        ],

        buses: [

            ["SB701", "EXPRESS", "06:00 AM", "07:15 AM", 35],

            ["SB702", "PALLEVELUGU", "07:30 AM", "08:50 AM", 48],

            ["SB703", "ULTRA PALLEVELUGU", "09:00 AM", "10:20 AM", 55],

            ["SB704", "EXPRESS", "11:00 AM", "12:15 PM", 62],

            ["SB705", "PALLEVELUGU", "01:00 PM", "02:20 PM", 50],

            ["SB706", "EXPRESS", "03:00 PM", "04:15 PM", 70],

            ["SB707", "ULTRA PALLEVELUGU", "05:00 PM", "06:20 PM", 45],

            ["SB708", "EXPRESS", "07:00 PM", "08:15 PM", 58]
        ]
    };
}


/* =========================================================
   OCCUPANCY
   50 seats = 80%
   Standing up to 20 = remaining 20%
========================================================= */

function calculateOccupancy(passengers) {

    const seated =
        Math.min(passengers, 50);

    const standing =
        Math.min(
            Math.max(passengers - 50, 0),
            20
        );

    const seatsAvailable =
        Math.max(50 - seated, 0);


    const seatedPercent =
        (seated / 50) * 80;

    const standingPercent =
        (standing / 20) * 20;


    const percentage =
        Math.min(
            100,
            Math.round(
                seatedPercent +
                standingPercent
            )
        );


    return {
        passengers: passengers,
        seated: seated,
        standing: standing,
        seatsAvailable: seatsAvailable,
        percentage: percentage
    };
}


/* =========================================================
   TIME CONVERSION
========================================================= */

function timeToMinutes(time) {

    const parts = time.split(" ");

    const hm = parts[0].split(":");

    let hour = Number(hm[0]);

    const minute = Number(hm[1]);

    const period = parts[1];


    if (period === "PM" && hour !== 12) {
        hour += 12;
    }

    if (period === "AM" && hour === 12) {
        hour = 0;
    }


    return hour * 60 + minute;
}


/* =========================================================
   GET SEGMENT STOPS
========================================================= */

function getSegmentStops(route, fromIndex, toIndex) {

    return route.stops.slice(
        fromIndex,
        toIndex + 1
    );
}


/* =========================================================
   SEARCH BUSES
========================================================= */

function searchBuses() {

    const from =
        document.getElementById("fromStation").value;

    const to =
        document.getElementById("toStation").value;


    const results =
        document.getElementById("busResults");

    const title =
        document.getElementById("resultsTitle");

    const sub =
        document.getElementById("resultsSub");


    /* SAME STATION */

    if (from === to) {

        title.textContent =
            from + " → " + to;

        sub.textContent =
            "Please select a different destination.";

        results.innerHTML = `
            <div class="no-results">
                Please choose two different stations.
            </div>
        `;

        return;
    }


    /* =====================================================
       FIRST:
       Look for real route
    ===================================================== */

    const matchingRoutes =
        findExactRoutes(from, to);


    let buses = [];


    matchingRoutes.forEach(match => {

        match.route.buses.forEach(bus => {

            buses.push({

                route: match.route,

                routeId: match.route.id,

                fromIndex: match.fromIndex,

                toIndex: match.toIndex,

                bus: bus

            });

        });

    });


    /* =====================================================
       IF NO REAL ROUTE:
       CREATE DEMO ROUTE

       So ANY station selection gets buses.
    ===================================================== */

    if (buses.length === 0) {

        const fallback =
            createFallbackRoute(from, to);


        fallback.buses.forEach(bus => {

            buses.push({

                route: fallback,

                routeId: fallback.id,

                fromIndex: 0,

                toIndex: 2,

                bus: bus

            });

        });

    }


    /* =====================================================
       SORT BY DEPARTURE
    ===================================================== */

    buses.sort((a, b) => {

        return (
            timeToMinutes(a.bus[2]) -
            timeToMinutes(b.bus[2])
        );

    });


    /* =====================================================
       MINIMUM 5 BUSES
    ===================================================== */

    buses = buses.slice(0, 5);


    /* =====================================================
       TITLE
    ===================================================== */

    title.textContent =
        from + " → " + to;


    sub.textContent =
        "5 buses available • Select a bus to track live";


    /* =====================================================
       SHOW BUS CARDS
    ===================================================== */

    results.innerHTML = "";


    buses.forEach(item => {

        results.innerHTML +=
            createBusCard(item);

    });

}


/* =========================================================
   BUS CARD
========================================================= */

function createBusCard(item) {

    const bus =
        item.bus;

    const route =
        item.route;


    const occupancy =
        calculateOccupancy(bus[4]);


    const segmentStops =
        getSegmentStops(
            route,
            item.fromIndex,
            item.toIndex
        );


    const stopsText =
        segmentStops.join(" → ");


    return `

        <div class="bus-card">

            <div class="bus-top">

                <div>

                    <div>

                        <span class="bus-number">
                            ${bus[0]}
                        </span>

                        <span class="bus-type">
                            ${bus[1]}
                        </span>

                    </div>


                    <div class="bus-route">
                        ${stopsText}
                    </div>

                </div>


                <div class="eta-box">

                    <div class="eta-label">
                        EXPECTED ARRIVAL
                    </div>

                    <div class="eta">
                        ${bus[3]}
                    </div>

                </div>

            </div>


            <div class="details">

                <div class="detail">

                    <div class="detail-label">
                        DEPARTURE
                    </div>

                    <div class="detail-value">
                        ${bus[2]}
                    </div>

                </div>


                <div class="detail">

                    <div class="detail-label">
                        PASSENGERS
                    </div>

                    <div class="detail-value">
                        ${occupancy.passengers}
                    </div>

                </div>


                <div class="detail">

                    <div class="detail-label">
                        SEATS AVAILABLE
                    </div>

                    <div class="detail-value">
                        ${occupancy.seatsAvailable}
                    </div>

                </div>


                <div class="detail">

                    <div class="detail-label">
                        OCCUPANCY
                    </div>

                    <div class="detail-value">
                        ${occupancy.percentage}%
                    </div>

                </div>

            </div>


            <div class="stops">

                <div class="stops-title">
                    JOURNEY STOPS
                </div>

                <div class="stop-list">
                    ${stopsText}
                </div>

            </div>


            <button
                class="track-btn"
                onclick="trackBus('${bus[0]}','${route.id}')">

                🚌 Track Bus Live

            </button>

        </div>

    `;
}


/* =========================================================
   TRACK BUS
   NEXT PAGE UNCHANGED
========================================================= */

function trackBus(busNumber, routeId) {

    localStorage.setItem(
        "selectedBus",
        busNumber
    );

    localStorage.setItem(
        "selectedRoute",
        routeId
    );


    window.location.href =
        "track.html?bus=" +
        encodeURIComponent(busNumber) +
        "&route=" +
        encodeURIComponent(routeId);
}


/* =========================================================
   SWAP
========================================================= */

function swapStations() {

    const from =
        document.getElementById("fromStation");

    const to =
        document.getElementById("toStation");


    const temp =
        from.value;

    from.value =
        to.value;

    to.value =
        temp;

}


/* =========================================================
   POPULAR ROUTES
========================================================= */

function setRoute(from, to) {

    document.getElementById("fromStation").value =
        from;

    document.getElementById("toStation").value =
        to;


    searchBuses();


    window.scrollTo({
        top: 300,
        behavior: "smooth"
    });

}


/* =========================================================
   PAGE START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadStations();

        /*
           Page open avvagane
           Kakinada -> Rajahmundry
           5 buses automatically show.
        */

        searchBuses();

    }
);