# BookMyShow Clone

A full-stack web application for movie ticket booking, inspired by BookMyShow. Users can select movies, choose time slots, pick seats, book tickets, and view their last booking details. Built with React (frontend), Node.js/Express (backend), and MongoDB Atlas (database).

---

## Features
- Movie selection from a curated list
- Time slot selection
- Seat selection with seat count
- Booking confirmation with toast notifications
- View last booking details
- Data persistence using MongoDB Atlas
- Responsive and modern UI

---

## Folder Structure
```
book-my-show/
  ├── BookMyShow-Backend/
  │   ├── Controller/
  │   ├── Routes/
  │   ├── Schema/
  │   ├── db/
  │   ├── server.js
  │   └── package.json
  ├── src/
  │   ├── Components/
  │   ├── Context/
  │   ├── Pages/
  │   ├── styles/
  │   ├── App.js
  │   ├── index.js
  │   └── package.json
  └── public/
```

---

## Setup Instructions

### 1. **Clone the Repository**
```bash
git clone https://github.com/SaniaAnsarii/book-my-show.git
cd book-my-show
```

### 2. **Backend Setup**
- Go to `BookMyShow-Backend` folder:
  ```bash
  cd BookMyShow-Backend
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Create a `.env` file with your MongoDB Atlas URI:
  ```env
  MONGO_URI=mongodb+srv://ansarisania789:Saniaansari789@cluster0.nmxvgar.mongodb.net/bookMyShow?retryWrites=true&w=majority&appName=Cluster0
  ```
- Start the backend server:
  ```bash
  npm start
  ```

### 3. **Frontend Setup**
- Go to `src` folder:
  ```bash
  cd ../src
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Create a `.env` file with your backend URL:
  ```env
  REACT_APP_BASE_URL=https://bookmyshowbackend-almabetter.onrender.com/
  ```
- Start the frontend:
  ```bash
  npm start
  ```

---

## Deployment
- **Frontend:** Deployed on Vercel ([vercel.com](https://book-my-show-alma-better.vercel.app/))
- **Backend:** Deployed on Render ([render.com](https://bookmyshowbackend-almabetter.onrender.com/))


---

## API Endpoints
- `POST /api/booking` – Save a new booking
- `GET /api/booking` – Fetch the last booking

---

## Usage
1. Select a movie, time slot, and seats.
2. Click "Book Now" to confirm your booking.
3. View your last booking details in the sidebar.
4. Data is persisted in MongoDB Atlas and visible after page refresh.

---

## Technologies Used
- **Frontend:** React, Context API, CSS
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB Atlas
- **Deployment:** Vercel (frontend), Render (backend)

---



---

## License
This project is for educational purposes.
