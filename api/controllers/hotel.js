import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).send(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const createHotels = async (req, res, next) => {
  try {
    const hotels = req.body; // Array of hotel objects
    if (!Array.isArray(hotels)) {
      return res
        .status(400)
        .json({ message: "Request body must be an array of hotel objects" });
    }
    const result = await Hotel.insertMany(hotels);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).send(hotel);
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).send("Hotel has been deleted");
  } catch (err) {
    next(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).send(hotel);
  } catch (err) {
    next(err);
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).send(hotels);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        // Create a case-insensitive regex for each city
        const regex = new RegExp(`^${city}$`, "i");
        return Hotel.countDocuments({ city: regex });
      })
    );
    res.status(200).send(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).send([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};
