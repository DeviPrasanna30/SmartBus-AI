const buses = [
    {
        number: "123",
        route: "Kakinada → Karapa",
        eta: 5,
        seats: 50,
        totalCapacity: 70,

        passengerUpdates: [42, 50, 60, 70],

        stops: [
            "Kakinada Main Complex",
            "GGH Hospital",
            "Sarpavaram",
            "Karapa"
        ]
    },

    {
        number: "145",
        route: "Kakinada → Pithapuram",
        eta: 8,
        seats: 50,
        totalCapacity: 70,

        passengerUpdates: [35, 48, 58, 65],

        stops: [
            "Kakinada RTC Complex",
            "Sarpavaram",
            "Samalkota",
            "Pithapuram"
        ]
    },

    {
        number: "210",
        route: "Kakinada → Rajahmundry",
        eta: 10,
        seats: 50,
        totalCapacity: 70,

        passengerUpdates: [30, 42, 55, 68],

        stops: [
            "Jagannaickpur",
            "Samalkota",
            "Anaparthi",
            "Rajahmundry"
        ]
    }
];


// =====================================================
// TIME
// =====================================================

function getTimeAfterMinutes(minutes) {

    const time = new Date(
        Date.now() +
        minutes * 60 * 1000
    );

    return time.toLocaleTimeString(
        "en-IN",
        {
            hour: "numeric",
            minute: "2-digit"
        }
    );
}


// =====================================================
// HOME SEARCH
// =====================================================

const searchInput =
    document.getElementById("searchInput");

const suggestions =
    document.getElementById("suggestions");

const voiceButton =
    document.getElementById("voiceButton");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const value =
                searchInput.value
                    .toLowerCase()
                    .trim();

            suggestions.innerHTML = "";

            if (value === "") {

                suggestions.style.display =
                    "none";

                return;
            }

            const results =
                buses.filter(bus =>
                    bus.number.includes(value) ||
                    bus.route
                        .toLowerCase()
                        .includes(value)
                );

            if (results.length === 0) {

                suggestions.innerHTML = `
                    <div class="suggestion-item">
                        <div>
                            <strong>No buses found</strong>
                            <small>
                                Try another bus number or route
                            </small>
                        </div>
                    </div>
                `;

                suggestions.style.display =
                    "block";

                return;
            }

            results.forEach(bus => {

                const item =
                    document.createElement("div");

                item.className =
                    "suggestion-item";

                item.innerHTML = `
                    <div>
                        <strong>
                            Bus ${bus.number}
                        </strong>

                        <small>
                            ${bus.route}
                        </small>
                    </div>
                `;

                item.addEventListener(
                    "click",
                    function () {

                        openBus(
                            bus.number
                        );

                    }
                );

                suggestions.appendChild(
                    item
                );

            });

            suggestions.style.display =
                "block";

        }
    );
}


// =====================================================
// OPEN BUS
// =====================================================

function openBus(number) {

    const selectedBus =
        buses.find(
            bus =>
                bus.number ===
                String(number)
        );

    if (!selectedBus) {
        return;
    }

    window.location.href =
        "track.html?bus=" +
        encodeURIComponent(
            selectedBus.number
        );
}


// =====================================================
// VOICE SEARCH
// =====================================================

function startVoiceSearch() {

    if (
        !("webkitSpeechRecognition" in window)
    ) {

        alert(
            "Voice search is not supported in this browser."
        );

        return;
    }

    const recognition =
        new webkitSpeechRecognition();

    recognition.lang =
        "en-IN";

    recognition.continuous =
        false;

    recognition.interimResults =
        false;

    recognition.start();

    recognition.onresult =
        function (event) {

            const text =
                event.results[0][0]
                    .transcript;

            if (searchInput) {

                searchInput.value =
                    text;

                searchInput.dispatchEvent(
                    new Event("input")
                );

            }
        };
}


if (voiceButton) {

    voiceButton.addEventListener(
        "click",
        startVoiceSearch
    );

}


// =====================================================
// UPDATE PASSENGERS
// =====================================================

function updatePassengerInfo(
    bus,
    stopIndex
) {

    const passengers =
        bus.passengerUpdates[
            stopIndex
        ];


    const seated =
        Math.min(
            passengers,
            bus.seats
        );


    const standing =
        Math.max(
            passengers -
            bus.seats,
            0
        );


    const available =
        Math.max(
            bus.seats -
            passengers,
            0
        );


    const percentage =
        Math.min(
            Math.round(
                (
                    passengers /
                    bus.totalCapacity
                ) * 100
            ),
            100
        );


    // PASSENGERS

    const passengerCount =
        document.getElementById(
            "passengerCount"
        );

    if (passengerCount) {

        passengerCount.textContent =
            passengers;
    }


    // SEAT CAPACITY

    const seatCapacity =
        document.getElementById(
            "seatCapacity"
        );

    if (seatCapacity) {

        seatCapacity.textContent =
            bus.seats;
    }


    // AVAILABLE SEATS

    const seatsAvailable =
        document.getElementById(
            "seatsAvailable"
        );

    if (seatsAvailable) {

        seatsAvailable.textContent =
            available;
    }


    // SEATED

    const seatedCount =
        document.getElementById(
            "seatedCount"
        );

    if (seatedCount) {

        seatedCount.textContent =
            seated;
    }


    // STANDING

    const standingCount =
        document.getElementById(
            "standingCount"
        );

    if (standingCount) {

        standingCount.textContent =
            standing;
    }


    // PERCENTAGE

    const occupancyPercentage =
        document.getElementById(
            "occupancyPercentage"
        );

    if (occupancyPercentage) {

        occupancyPercentage.textContent =
            percentage + "%";
    }


    // CIRCLE

    const occupancyCircle =
        document.getElementById(
            "occupancyCircle"
        );

    if (occupancyCircle) {

        occupancyCircle.style.setProperty(
            "--occupancy",
            percentage + "%"
        );

        occupancyCircle.classList.remove(
            "low",
            "medium",
            "full"
        );


        if (percentage >= 100) {

            occupancyCircle.classList.add(
                "full"
            );

        }
        else if (percentage >= 70) {

            occupancyCircle.classList.add(
                "medium"
            );

        }
        else {

            occupancyCircle.classList.add(
                "low"
            );

        }
    }


    // CROWD BADGE

    const crowdBadge =
        document.getElementById(
            "crowdBadge"
        );

    if (crowdBadge) {

        if (percentage >= 100) {

            crowdBadge.textContent =
                "🔴 Full";

        }
        else if (percentage >= 70) {

            crowdBadge.textContent =
                "🟡 Moderate Crowd";

        }
        else {

            crowdBadge.textContent =
                "🟢 Comfortable";

        }
    }
}


// =====================================================
// UPDATE CURRENT LOCATION
// =====================================================

function updateLiveLocation(
    bus,
    stopIndex
) {

    const currentLocation =
        document.getElementById(
            "currentLocation"
        );

    const nextStop =
        document.getElementById(
            "nextStop"
        );

    const eta =
        document.getElementById(
            "eta"
        );


    // CURRENT LOCATION

    if (currentLocation) {

        currentLocation.textContent =
            bus.stops[
                stopIndex
            ];
    }


    // NEXT STOP

    if (nextStop) {

        if (
            stopIndex <
            bus.stops.length - 1
        ) {

            nextStop.textContent =
                bus.stops[
                    stopIndex + 1
                ];

        }
        else {

            nextStop.textContent =
                "Destination Reached";
        }
    }


    // ETA

    if (eta) {

        if (
            stopIndex <
            bus.stops.length - 1
        ) {

            eta.textContent =
                getTimeAfterMinutes(
                    bus.eta
                );

        }
        else {

            eta.textContent =
                "Arrived";
        }
    }


    // PASSENGER UPDATE

    updatePassengerInfo(
        bus,
        stopIndex
    );
}


// Make available to track.html

window.updateLiveLocation =
    updateLiveLocation;