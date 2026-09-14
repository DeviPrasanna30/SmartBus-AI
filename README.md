# 🚌 SmartBus AI

### AI-Powered Live Bus Occupancy, Location & ETA System for Students

SmartBus AI is a smart web-based system designed to help students know the **current bus location, passenger occupancy, available seats, and estimated arrival time**.

Instead of waiting at a bus stop without knowing whether the bus is crowded or when it will arrive, students can use SmartBus AI to make better travel decisions.

---

## 🚨 Problem

Students often face these problems while using college buses:

- They don't know where the bus currently is.
- They don't know how crowded the bus is.
- They don't know how many seats are available.
- They don't know the estimated arrival time.
- They may wait unnecessarily or board an overcrowded bus.

---

## 💡 Solution

SmartBus AI provides a single platform where students can view:

- 🚌 Live Bus Location
- 👥 Passenger Count
- 💺 Available Seats
- 📊 Occupancy Percentage
- 📍 Bus Stop Updates
- ⏱️ Estimated Arrival Time
- 🗺️ Bus Route Information

---

## ✨ Key Features

### 👥 Live Passenger Occupancy

The system displays the number of passengers inside the bus.

Example:

**42 Passengers / 50 Capacity**

### 📊 Occupancy Indicator

A circular occupancy indicator shows how full the bus is.

- 🟢 Green → Low occupancy
- 🟡 Yellow → Moderate occupancy
- 🔴 Red → High occupancy

### 💺 Seat Availability

Students can easily see how many seats are available before boarding.

### 📍 Bus Tracking

The interface shows the current bus location and route information.

### ⏱️ Estimated Arrival Time

Students can view the estimated arrival time for upcoming bus stops.

### 🚌 Stop-by-Stop Updates

Passenger occupancy and bus information can be updated as the bus moves through different stops.

---

## 🤖 Where AI is Used

AI can be integrated with a camera placed near the bus entrance to detect and count passengers.

The detected passenger count can then be used to calculate:

**Occupancy Percentage = (Passengers / Bus Capacity) × 100**

Example:

**42 / 50 × 100 = 84% Occupancy**

This helps students understand how crowded the bus is.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- AI / Computer Vision (planned integration)
- GPS / Location Tracking (planned integration)

---

## 📁 Project Structure

```text
SmartBus-AI/
│
├── index.html
├── track.html
├── style.css
└── script.js
