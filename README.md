# Simple Weather App

A simple React weather app showing current weather in a city and the 3 hourly forecast. All the data is from OpenWeather API and Google Cloud API is used for input autocomplete.
It is designed mobile first with tailwindcss.

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/bauertim/weatherApp.git
cd weatherApp
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_OPENWEATHER_API_KEY=
VITE_GOOGLE_API_KEY=
```

Replace the placeholder values with your actual OpenWeather and Google Cloud API keys.
Using google autocomplete is optional, you can use the commented form in the InputField component of the app.

**Running the Project**

```bash
npm run dev
```
