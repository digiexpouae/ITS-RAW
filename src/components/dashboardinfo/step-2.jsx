"use client";

export default function StepTwo({ formData, handleChange }) {
  const cuisines = [
    'American','Asian','British','Chineese','European','French','Greek',
    'Indian','Italian','Japenese','Korean','Latin American','Lebanese',
    'MENA','Mexican','Russian','Spanish','Thai','Other'
  ];

  const bestDishes = [
    "Afternoon Tea","AlaCarte Brunch","Buffet Brunch","Bar Food","Breakfast",
    "Budget","Burger","Cafe","Dessert","Pizzeria","Pub Food","Sea Food",
    "Steakhouse","Live entertainment","Fine Dining","Plant based","Bar",
    "Sushi","Beach Club","Bakery/Pastry","Food Truck","Sandwiches","Takeaway"
  ];

  const traits = [
    "Sophisticated","Refined","Polished","Chic","Upscale","Prestigious","Exclusive",
    "Gourmet","Inviting","Welcoming","Comfortable","Cozy","Relaxed","Approachable",
    "Humble","Homey", "Energetic","Lively","Vibrant","Trendy","Fun","Whimsical","Unique","Edgy"
  ];

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-center text-5xl font-medium mb-6">
        STEP 2 – MORE ABOUT YOUR RESTAURANT
      </h2>

      {/* Restaurant Features */}
      <div className="bg-[#FBEDDF] py-12 px-4 flex flex-col justify-between rounded-xl mb-6">
        <p className="font-medium mb-3">Restaurant Features</p>
        <div className="flex flex-wrap text-[#9B9B9B] font-medium gap-4 text-sm">
          {[
            'Is licensed (i.e. serves alcohol)',
            'Allows smoking',
            'Pets friendly',
            'Has outdoor dining area',
            'Valet parking available',
            'Kids Friendly',
            'Take away'
          ].map((feature,index) => (
            <label key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="features"
                value={feature}
                checked={formData.features?.includes(feature) || false}
                onChange={handleChange}
                className="accent-red-500 h-4 w-4"
              />
              {feature}
            </label>
          ))}
        </div>
      </div>

      {/* Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        {/* Cuisine */}
        <div className="flex flex-col gap-4 justify-between h-[500px]">
          <div className="bg-[#FBEDDF] flex flex-col justify-between py-8 p-5 rounded-xl h-[70%]">
            <p className="font-medium mb-3">What type of cuisine do you serve (max.2)</p>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 text-[#9B9B9B] font-medium text-sm">
              {cuisines.map((item, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="cuisines"
                    value={item}
                    checked={formData.cuisines?.includes(item) || false}
                    onChange={handleChange}
                    className="accent-red-500 h-4 w-4"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>
          <div className="bg-[#FBDFDF] h-[30%] py-8 p-5 rounded-xl">
            <p className="font-medium  mb-3">What is the average cost of a meal per person? (Optional)</p>
            <input
              type="range"
              name="coverage"
              min="100"
              max="1000"
              step="50"
              value={formData.coverage || 100}
              onChange={handleChange}
              className="w-full h-[2px] bg-[#9B9B9B] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FBEDDF] [&::-webkit-slider-thumb]:border-2  [&::-webkit-slider-thumb]:border-[#EE3A3D]"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>Dhs 100</span>
              <span>Dhs 1000</span>
            </div>
          </div>
        </div>

        {/* Best Dishes */}
        <div className="bg-[#FBDFDF] h-[500px] flex flex-col justify-between py-8 p-5 rounded-xl">
          <p className="font-medium  mb-3">What best describes your menu?</p>
          <div className="grid grid-cols-2 text-[#9B9B9B] font-medium gap-2 text-sm">
            {bestDishes.map((item, i) => (
              <label key={i} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="bestDishes"
                  value={item}
                  checked={formData.bestDishes?.includes(item) || false}
                  onChange={handleChange}
                  className="accent-red-500     h-4 w-4"
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Describe Restaurant */}
      <div className="bg-[#FBDFDF] h-[250px]  flex flex-col justify-between  py-8 p-5 rounded-xl mb-6">
        <p className="font-medium mb-3">Describe your restaurant</p>
        <textarea
          name="description"
          rows={4}
          value={formData.description || ''}
          onChange={handleChange}
          className="w-full border p-3 resize-none rounded-md bg-white"
          placeholder="Write here..."
        />
      </div>

      {/* Personality */}
      <div className="bg-[#FBEDDF] flex flex-col justify-between px-6  md:h-[450px] py-8 rounded-xl mb-6">
        <p className="font-medium mb-3">
Pick the words that describe your restaurant's personality/vibe
        </p>
        <div className="text-[#9B9B9B] font-medium flex flex-col gap-2">
          {['Formal & Elegant:', 'Casual & Friendly:', 'Bold & Playful:'].map((category, idx) => (
            <div key={idx} className="my-4 flex flex-col gap-2">
              <p className="text-sm mb-2 text-black">{category}</p>
              <div className="grid grid-cols-2 md:flex gap-4 text-sm">
                {traits.slice(idx * 8, idx * 8 + 8).map((trait, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="traits"
                      value={trait}
                      checked={formData.traits?.includes(trait) || false}
                      onChange={handleChange}
                      className="accent-red-500 h-4 w-4"
                    />
                    {trait}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center w-full mt-8">
        <button className="px-6 py-2 bg-[#EE3A3D] w-full text-white rounded hover:bg-red-500 cursor-pointer">
          Save Review and Continue 
        </button>
      </div>
    </div>
  );
}
