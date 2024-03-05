import Button from "../ui/Button";

/* eslint-disable react/prop-types */
const City = ({ currentCity = {} }) => {
  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className="w-full  p-3">
      <div className="w-full bg-gray-700 p-3">
        {currentCity && (
          <>
            <div>
              <h1>Exploring {currentCity.cityName}</h1>
              <p>Here&apos;s your journey through this amazing city!</p>
            </div>

            <div>
              <div>
                <h2>City Details</h2>
                <p>
                  <strong>Country:</strong> {currentCity.country}
                </p>
                <p>
                  <strong>Population:</strong> {currentCity.population}
                </p>
                <p>
                  <strong>Language:</strong> {currentCity.language}
                </p>
              </div>
            </div>

            {currentCity.notes ? (
              <div>
                <h2>Your Impressions</h2>
                <p>{currentCity.notes}</p>
              </div>
            ) : (
              <div>
                <h2>Share Your Experience</h2>
                <p>
                  What an incredible city! Unfortunately, I didn&apos;t have the
                  chance to take notes this time.
                </p>
              </div>
            )}

            <div>
              <Button className=" bg-gray-800 p-2 font-semibold hover:bg-gray-800">
                Back
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default City;
